import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig, socials } from "@/content/site";
import { Container } from "@/components/ui/container";
import { LocalTime } from "./local-time";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line">
      <Container>
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-medium tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-fg-muted">{siteConfig.role}</p>
          </div>

          <nav
            aria-label="Elsewhere"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label text-fg-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
            <Link
              href="/blog"
              className="label text-fg-muted transition-colors hover:text-accent"
            >
              Writing
            </Link>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-accent"
            >
              Resume
              <ArrowUpRight className="size-3" strokeWidth={2} />
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-5 font-mono text-[11px] tracking-[0.1em] text-fg-subtle uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.name} ·{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="normal-case tracking-normal transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </span>
          <LocalTime />
        </div>
      </Container>
    </footer>
  );
}
