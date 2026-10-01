"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Writes the pointer position into CSS variables so `.spotlight::after`
 * (globals.css) can draw a soft glow that follows the cursor. The written
 * position eases toward the real pointer each frame, so the glow trails
 * smoothly instead of snapping. No React state involved.
 */
export function Spotlight({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0, primed: false });
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function tick() {
    const el = ref.current;
    if (!el) return;
    const c = current.current;
    const t = target.current;
    c.x += (t.x - c.x) * 0.16;
    c.y += (t.y - c.y) * 0.16;
    el.style.setProperty("--mx", `${c.x.toFixed(1)}px`);
    el.style.setProperty("--my", `${c.y.toFixed(1)}px`);
    frame.current =
      Math.abs(t.x - c.x) + Math.abs(t.y - c.y) > 0.5
        ? requestAnimationFrame(tick)
        : 0;
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    target.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    // First contact: start at the pointer so the glow doesn't fly in from 0,0.
    if (!current.current.primed) {
      current.current = { ...target.current, primed: true };
    }
    if (!frame.current) frame.current = requestAnimationFrame(tick);
  }

  function onPointerLeave() {
    current.current.primed = false;
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn("spotlight relative", className)}
    >
      {children}
    </div>
  );
}
