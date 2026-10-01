import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: number;
  tags: string[];
  draft: boolean;
};

export type Post = PostMeta & { content: string };

function readingTimeOf(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function parse(file: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    readingTime: readingTimeOf(content),
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parse)
    .filter((p) => !p.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
