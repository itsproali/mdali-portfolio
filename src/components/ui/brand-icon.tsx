import type { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/utils";

type Props = {
  icon?: SimpleIcon;
  mark?: string;
  name: string;
  /** Sizes the box, e.g. `size-8`. */
  className?: string;
  /** Text size for the monogram fallback, e.g. `text-[11px]`. */
  markClassName?: string;
};

/**
 * Monochrome brand mark. Draws the simple-icons path in `currentColor`, or a
 * mono monogram for tools that have no mark in the set (AWS, Remotion …).
 */
export function BrandIcon({
  icon,
  mark,
  name,
  className,
  markClassName,
}: Props) {
  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        focusable="false"
        className={cn("shrink-0", className)}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-mono font-medium leading-none tracking-tight",
        className,
        markClassName,
      )}
    >
      {mark ?? name.slice(0, 2)}
    </span>
  );
}
