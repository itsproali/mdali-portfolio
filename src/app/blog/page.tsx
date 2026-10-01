import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/content/site";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on rendering pipelines, TypeScript architecture, browser extensions and shipping production web software.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: `Writing — ${siteConfig.name}`,
    description:
      "Notes on rendering pipelines, TypeScript architecture, browser extensions and shipping production web software.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container>
        <Reveal>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            Home
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <header className="mt-10 border-t border-line pt-7">
            <div className="flex items-center gap-3">
              <span className="label text-accent">06</span>
              <span className="label text-fg-subtle">Writing</span>
              <span className="label ml-auto text-fg-subtle">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </span>
            </div>

            <h1 className="font-display mt-7 text-headline font-normal">
              Notes from the build.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Write-ups on the things that took me longest to figure out —
              rendering pipelines, architecture calls, and the parts of a
              platform nobody warns you about.
            </p>
          </header>
        </Reveal>

        {posts.length === 0 ? (
          <p className="mt-14 rounded-2xl border border-dashed border-line p-10 text-center text-sm text-fg-muted">
            Nothing published yet.
          </p>
        ) : (
          <ul className="mt-12 -mx-4">
            {posts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-x-10 gap-y-3 rounded-2xl px-4 py-7 transition-colors hover:bg-surface md:grid-cols-[minmax(0,9rem)_1fr_auto] md:items-baseline"
                >
                  <span className="text-[13px] text-fg-subtle tabular-nums">
                    {formatDate(post.date)}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xl font-medium tracking-tight transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <span className="mt-2.5 block max-w-2xl text-[14px] leading-relaxed text-fg-muted">
                      {post.summary}
                    </span>
                    <span className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-2.5 py-1 text-[11px] text-fg-subtle"
                        >
                          {t}
                        </span>
                      ))}
                      {post.draft && (
                        <span className="rounded-full border border-accent-line bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
                          Draft
                        </span>
                      )}
                    </span>
                  </span>

                  <span className="flex items-center gap-2 text-[13px] text-fg-subtle transition-colors group-hover:text-fg">
                    {post.readingTime} min read
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}
