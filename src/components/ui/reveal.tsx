"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds, to stagger siblings. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Scroll-in reveal. The animation itself is CSS (see `[data-reveal]` in
 * globals.css) — this only flips a data attribute once the element first
 * intersects, so there's no per-frame JS and `prefers-reduced-motion` is
 * handled by the stylesheet rather than by branching during render.
 */
export function Reveal({ children, delay = 0, className, as }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.inview = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.inview = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = (as ?? "div") as "div";
  const style = delay
    ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
    : undefined;

  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal=""
      style={style}
      className={className}
    >
      {children}
    </Comp>
  );
}
