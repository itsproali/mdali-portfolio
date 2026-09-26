"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navItems, siteConfig, socials } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "./theme-toggle";

const DESKTOP_LINKS = ["skills", "work", "experience", "writing"] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] uppercase"
          >
            <span className="relative flex size-1.5">
              <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-fg transition-colors group-hover:text-accent">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {navItems
              .filter((n) =>
                DESKTOP_LINKS.includes(n.id as (typeof DESKTOP_LINKS)[number]),
              )
              .map((item) => (
                <a
                  key={item.id}
                  href={href(item.id)}
                  className="label text-fg-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center gap-1.5 border border-line-strong px-4 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="size-3" strokeWidth={2} />
            </a>

            {/* Mobile menu */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex size-9 items-center justify-center border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent md:hidden"
                >
                  <Menu className="size-4" strokeWidth={1.6} />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 animate-[fade-in_180ms_ease-out] bg-bg/90 backdrop-blur-sm" />
                <Dialog.Content className="fixed inset-0 z-50 flex animate-[slide-down_260ms_cubic-bezier(0.22,1,0.36,1)] flex-col overflow-y-auto bg-bg focus:outline-none">
                  <Dialog.Title className="sr-only">Navigation</Dialog.Title>

                  <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
                    <span className="label text-fg-subtle">Index</span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="inline-flex size-9 items-center justify-center border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <X className="size-4" strokeWidth={1.6} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="flex flex-col px-5 sm:px-8">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={href(item.id)}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-4 border-b border-line py-5 transition-colors hover:text-accent"
                      >
                        <span className="label w-6 text-fg-subtle transition-colors group-hover:text-accent">
                          {item.index}
                        </span>
                        <span className="text-2xl font-medium tracking-tight">
                          {item.label}
                        </span>
                        <ArrowUpRight className="ml-auto size-4 self-center text-fg-subtle opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ))}

                    <a
                      href={siteConfig.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-4 border-b border-line py-5 transition-colors hover:text-accent"
                    >
                      <span className="label w-6 text-accent">↗</span>
                      <span className="text-2xl font-medium tracking-tight">
                        Resume
                      </span>
                      <ArrowUpRight className="ml-auto size-4 self-center text-fg-subtle transition-opacity group-hover:opacity-100" />
                    </a>
                  </nav>

                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 px-5 py-8 sm:px-8">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label text-fg-subtle transition-colors hover:text-accent"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </Container>
    </header>
  );
}
