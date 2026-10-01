"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Pointer-driven tilt. Writes normalised pointer offsets (-1 … 1) to
 * `--px` / `--py`; the CSS in globals.css turns them into a perspective
 * rotation on the card and a counter-shift on anything marked `.tilt-layer`.
 * Two style writes per move, no React state, inert on touch and when
 * reduced motion is requested.
 */
export function TiltCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    el.style.setProperty("--px", px.toFixed(3));
    el.style.setProperty("--py", py.toFixed(3));
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn("tilt", className)}
    >
      {children}
    </div>
  );
}
