import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...projects.map((p) => ({
      url: `${siteConfig.url}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...getAllPosts().map((p) => ({
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
