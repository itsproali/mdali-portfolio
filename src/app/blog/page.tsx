import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on rendering pipelines, TypeScript architecture, browser extensions and shipping production web software.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-28 pb-24 sm:pt-32">
      <Container>
        <Reveal>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase transition-colors hover:text-accent"
          >
            <ArrowLeft
              className="size-3.5 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            Home
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <header className="mt-10 border-t border-line pt-6">
            <div className="flex items-center gap-3">
              <span className="label text-accent">07</span>
              <span aria-hidden className="h-px w-6 bg-line-strong sm:w-10" />
              <span className="label text-fg-subtle">Writing</span>
              <span className="label ml-auto text-fg-subtle">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </span>
            </div>

            <h1 className="mt-7 text-headline font-medium">Notes from the build.</h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Write-ups on the things that took me longest to figure out —
              rendering pipelines, architecture calls, and the parts of a
              platform nobody warns you about.
            </p>
          </header>
        </Reveal>

        {posts.length === 0 ? (
          <p className="mt-14 border border-dashed border-line p-10 text-center text-sm text-fg-muted">
            Nothing published yet.
          </p>
        ) : (
          <ul className="mt-14 border-b border-line">
            {posts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={Math.min(i * 0.04, 0.2)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-x-8 gap-y-3 border-t border-line py-8 transition-colors hover:bg-surface md:grid-cols-[minmax(0,9rem)_1fr_auto] md:items-baseline"
                >
                  <span className="label text-fg-subtle">
                    {formatDate(post.date)}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xl font-medium tracking-tight transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <span className="mt-2.5 block max-w-2xl text-[14px] leading-relaxed text-fg-muted">
                      {post.summary}
                    </span>
                    <span className="mt-3.5 flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-line px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-fg-subtle uppercase"
                        >
                          {t}
                        </span>
                      ))}
                      {post.draft && (
                        <span className="border border-accent-line bg-accent-soft px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-accent uppercase">
                          Draft
                        </span>
                      )}
                    </span>
                  </span>

                  <span className="label flex items-center gap-2 text-fg-subtle transition-colors group-hover:text-accent">
                    {post.readingTime} min
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
