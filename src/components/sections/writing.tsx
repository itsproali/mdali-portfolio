import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Writing() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section id="writing">
      <SectionHeader
        index="07"
        title="Writing"
        meta={`${posts.length} recent`}
      />

      {posts.length === 0 ? (
        <Reveal>
          <p className="mt-10 border border-dashed border-line p-8 text-center text-sm text-fg-muted">
            Nothing published yet — first post is in progress.
          </p>
        </Reveal>
      ) : (
        <ul className="mt-12 border-t border-line">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-x-8 gap-y-1.5 border-b border-line py-5 transition-colors hover:bg-surface md:grid-cols-[minmax(0,12rem)_1fr_auto] md:items-baseline"
              >
                <span className="label text-fg-subtle">
                  {formatDate(post.date)}
                </span>

                <span className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                  {post.title}
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

      <Reveal delay={0.1}>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase transition-colors hover:text-accent"
        >
          All writing
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </Link>
      </Reveal>
    </Section>
  );
}
