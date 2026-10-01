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
        index="06"
        title="Writing"
        meta={`${posts.length} recent`}
      />

      {posts.length === 0 ? (
        <Reveal>
          <p className="mt-10 rounded-2xl border border-dashed border-line p-8 text-center text-sm text-fg-muted">
            Nothing published yet — first post is in progress.
          </p>
        </Reveal>
      ) : (
        <ul className="mt-10 -mx-4">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-x-10 gap-y-1.5 rounded-2xl px-4 py-5 transition-colors hover:bg-surface md:grid-cols-[minmax(0,10rem)_1fr_auto] md:items-baseline"
              >
                <span className="text-[13px] text-fg-subtle tabular-nums">
                  {formatDate(post.date)}
                </span>

                <span className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                  {post.title}
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

      <Reveal delay={0.1}>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          All writing
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </Link>
      </Reveal>
    </Section>
  );
}
