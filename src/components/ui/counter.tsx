"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Runs before paint on the client, no-ops on the server. */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function Counter({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  /** Milliseconds. */
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  // Server and first hydration render the real number, so the page is correct
  // without JS and for crawlers. We drop to zero before the first client paint,
  // which avoids any visible flash of the final value.
  const [display, setDisplay] = useState(value);
  const animated = useRef(false);

  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animated.current = true;
      return;
    }
    setDisplay(0);
    // Mount-only: re-running would restart the count.
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    let frame = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOut(t) * value));
      if (t < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || animated.current) return;
        animated.current = true;
        observer.disconnect();
        frame = requestAnimationFrame(step);
      },
      { rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
