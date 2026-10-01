"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { headerLinks, navItems, siteConfig, socials } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = navItems.map((n) => n.id);

/**
 * Full-width acrylic header. The material (blur, tint, grain, highlight) is
 * the `.acrylic` class in globals.css; the bar highlights the section in view
 * on the home page.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const active = useActiveSection(sectionIds);

  // Slide the bar away while scrolling down, bring it back on any upward
  // scroll. A small dead zone keeps it from flickering on tiny movements.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      setScrolled(y > 8);
      if (y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const links = navItems.filter((n) =>
    headerLinks.includes(n.id as (typeof headerLinks)[number]),
  );

  return (
    <header
      className={cn(
        "acrylic fixed inset-x-0 top-0 z-50 transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled && "shadow-soft",
        hidden && !open && "-translate-y-full shadow-none",
      )}
    >
      <Container>
        <div className="relative flex h-16 items-center justify-between gap-6 sm:h-[4.25rem]">
          {/* Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-[15px] font-medium tracking-tight"
          >
            <Logo className="size-8 drop-shadow-[0_2px_8px_var(--glow-1)]" />
            <span className="text-fg transition-colors group-hover:text-accent">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav — centred in the bar */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {links.map((item) => {
              const isActive = onHome && active === item.id;
              return (
                <a
                  key={item.id}
                  href={href(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive
                      ? "text-fg"
                      : "text-fg-muted hover:text-fg",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "bg-gradient-accent absolute inset-x-3.5 -bottom-px h-[2px] rounded-full transition-[opacity,scale] duration-300",
                      isActive ? "opacity-100" : "scale-x-0 opacity-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="size-10" />

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-hover hidden h-10 items-center gap-1.5 rounded-full bg-fg pr-3.5 pl-4 text-sm font-medium text-bg transition-colors sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="size-3.5" strokeWidth={2} />
            </a>

            {/* Mobile menu */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex size-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg md:hidden"
                >
                  <Menu className="size-[18px]" strokeWidth={1.7} />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 animate-[fade-in_180ms_ease-out] bg-bg/90 backdrop-blur-sm" />
                <Dialog.Content className="acrylic fixed inset-0 z-50 flex animate-[slide-down_260ms_cubic-bezier(0.22,1,0.36,1)] flex-col overflow-y-auto focus:outline-none">
                  <Dialog.Title className="sr-only">Navigation</Dialog.Title>

                  <div className="flex h-16 shrink-0 items-center justify-between px-5 sm:px-8">
                    <span className="flex items-center gap-3 text-[15px] font-medium tracking-tight">
                      <Logo className="size-8" />
                      {siteConfig.name}
                    </span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-fg hover:text-fg"
                      >
                        <X className="size-[18px]" strokeWidth={1.7} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="flex flex-col px-5 pt-4 sm:px-8">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={href(item.id)}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-5 border-b border-line py-4 transition-colors hover:text-accent"
                      >
                        <span className="label w-6 text-fg-subtle transition-colors group-hover:text-accent">
                          {item.index}
                        </span>
                        <span className="font-display text-3xl font-normal">
                          {item.label}
                        </span>
                      </a>
                    ))}

                    <a
                      href={siteConfig.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-5 border-b border-line py-4 transition-colors hover:text-accent"
                    >
                      <span className="label w-6 text-accent">↗</span>
                      <span className="font-display text-3xl font-normal">
                        Resume
                      </span>
                    </a>
                  </nav>

                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 px-5 py-8 sm:px-8">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
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
