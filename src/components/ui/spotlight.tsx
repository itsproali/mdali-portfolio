"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Writes the pointer position into CSS variables so `.spotlight::after`
 * (globals.css) can draw a soft accent glow that follows the cursor.
 * No per-frame React state — two style writes per move and nothing else.
 */
export function Spotlight({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn("spotlight relative", className)}
    >
      {children}
    </div>
  );
}
