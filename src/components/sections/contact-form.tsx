"use client";

import { useState } from "react";
import { CheckCircle2, Send, TriangleAlert } from "lucide-react";

import { siteConfig } from "@/content/site";
import { ActionButton } from "@/components/ui/action";
import { Field, Input, Textarea } from "@/components/ui/field";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const sending = status.state === "sending";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus({
          state: "error",
          message: json.error ?? "Couldn't send that message.",
        });
        return;
      }

      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: `Network error — please email me at ${siteConfig.email}.`,
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name">
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder="Jane Doe"
            disabled={sending}
          />
        </Field>

        <Field id="email" label="Email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            placeholder="jane@company.com"
            disabled={sending}
          />
        </Field>
      </div>

      <Field id="company" label="Company" hint="optional">
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={120}
          placeholder="Acme Inc."
          disabled={sending}
        />
      </Field>

      <Field id="message" label="Message">
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="What are you building, and where do you need a hand?"
          disabled={sending}
        />
      </Field>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <ActionButton type="submit" disabled={sending} className="w-full sm:w-auto">
          {sending ? "Sending…" : "Send message"}
          <Send className="size-3.5" strokeWidth={2} />
        </ActionButton>

        <p aria-live="polite" className="min-h-5 text-[13px] leading-snug">
          {status.state === "sent" && (
            <span className="flex items-start gap-2 text-accent">
              <CheckCircle2 className="mt-px size-4 shrink-0" strokeWidth={1.8} />
              Sent — I&rsquo;ll get back to you shortly.
            </span>
          )}
          {status.state === "error" && (
            <span className="flex items-start gap-2 text-fg-muted">
              <TriangleAlert
                className="mt-px size-4 shrink-0 text-accent"
                strokeWidth={1.8}
              />
              {status.message}
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
