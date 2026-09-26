import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <article className="pt-28 pb-24 sm:pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase transition-colors hover:text-accent"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2}
              />
              Writing
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <header className="mt-10 border-t border-line pt-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="label text-accent">
                  {formatDate(post.date)}
                </span>
                <span aria-hidden className="h-px w-6 bg-line-strong" />
                <span className="label text-fg-subtle">
                  {post.readingTime} min read
                </span>
              </div>

              <h1 className="mt-6 text-3xl leading-[1.08] font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
                {post.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-fg-subtle uppercase"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </header>
          </Reveal>

          <div className="prose prose-engineered mt-14 max-w-none">
            <MDXRemote source={post.content} />
          </div>

          <footer className="mt-16 border-t border-line pt-8">
            <p className="text-sm text-fg-muted">
              Written by{" "}
              <span className="text-fg">{siteConfig.name}</span>. Got a take, or
              think I got something wrong?{" "}
              <Link
                href="/#contact"
                className="text-accent transition-opacity hover:opacity-75"
              >
                Tell me
              </Link>
              .
            </p>
          </footer>
        </div>
      </Container>
    </article>
  );
}
