import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: `${siteConfig.name} — ${siteConfig.role}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b0c10",
    theme_color: "#0b0c10",
    lang: "en",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Work", url: "/#work", description: "Selected projects" },
      { name: "Writing", url: "/blog", description: "Articles" },
      { name: "Contact", url: "/#contact", description: "Get in touch" },
    ],
  };
}
