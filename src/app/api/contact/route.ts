import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/content/site";

export const runtime = "nodejs";

/** Naive in-memory limiter — enough to blunt casual abuse on a single instance. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
/** "Portfolio <hello@mdali.dev>" → "hello@mdali.dev"; bare addresses pass through. */
const bareAddress = (v: string) =>
  v.match(/<([^>]+)>/)?.[1]?.trim() ?? v.trim();
const escapeHtml = (v: string) =>
  v.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!,
  );

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Try again in a minute." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real people never fill this in.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();

  const errors: string[] = [];
  if (name.length < 2 || name.length > 100) errors.push("a valid name");
  if (!isEmail(email) || email.length > 200) errors.push("a valid email");
  if (message.length < 10 || message.length > 5000)
    errors.push("a message between 10 and 5000 characters");

  if (errors.length) {
    return NextResponse.json(
      { error: `Please provide ${errors.join(", ")}.` },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error:
          "The mail service isn't configured yet. Please email me directly.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    // Resend only delivers from a verified sender, so the visitor's address
    // can't be the envelope `from`. Their name becomes the From display name
    // and their address goes in Reply-To, which is what mail clients use when
    // you hit reply.
    const senderAddress = bareAddress(
      process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
    );
    const displayName = name.replace(/[<>",\r\n]/g, "").trim();

    const { error } = await resend.emails.send({
      from: `${displayName} via Portfolio <${senderAddress}>`,
      to: siteConfig.email,
      replyTo: `${displayName} <${email}>`,
      subject: `Portfolio enquiry — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        company ? `Company: ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:14px;line-height:1.6;color:#111">
          <p style="margin:0 0 4px"><strong>Name</strong> &nbsp; ${escapeHtml(name)}</p>
          <p style="margin:0 0 4px"><strong>Email</strong> &nbsp; ${escapeHtml(email)}</p>
          ${company ? `<p style="margin:0 0 4px"><strong>Company</strong> &nbsp; ${escapeHtml(company)}</p>` : ""}
          <hr style="border:none;border-top:1px solid #e4e4df;margin:16px 0" />
          <pre style="white-space:pre-wrap;font-family:inherit;margin:0">${escapeHtml(message)}</pre>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "Couldn't send that. Please email me directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email me directly." },
      { status: 500 },
    );
  }
}
