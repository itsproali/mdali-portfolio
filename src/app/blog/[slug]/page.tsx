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

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en",
        keywords: post.tags.join(", "),
        wordCount: post.content.trim().split(/\s+/).length,
        url,
        mainEntityOfPage: url,
        author: { "@id": `${siteConfig.url}/#person` },
        publisher: { "@id": `${siteConfig.url}/#person` },
        image: `${siteConfig.url}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Writing", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="pt-28 pb-24 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2}
              />
              Writing
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <header className="mt-10 border-t border-line pt-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="label text-accent">
                  {formatDate(post.date)}
                </span>
                <span className="label text-fg-subtle">
                  {post.readingTime} min read
                </span>
              </div>

              <h1 className="font-display mt-6 text-headline font-normal text-balance">
                {post.title}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                {post.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-2.5 py-1 text-[11px] text-fg-subtle"
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
