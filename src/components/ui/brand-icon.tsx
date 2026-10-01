import type { SimpleIcon } from "simple-icons";
import type { Mark } from "@/content/brand-marks";
import { cn } from "@/lib/utils";

type Props = {
  /** Brand mark from simple-icons (24×24 path). */
  icon?: SimpleIcon;
  /** Custom vector for brands simple-icons doesn't carry. */
  custom?: Mark;
  /** Monogram fallback when there is no vector at all. */
  mark?: string;
  name: string;
  /** Sizes the box, e.g. `size-8`. */
  className?: string;
  /** Text size for the monogram fallback, e.g. `text-[11px]`. */
  markClassName?: string;
};

/**
 * Monochrome brand mark drawn in `currentColor`: a simple-icons path, a custom
 * multi-path mark, or a mono monogram when neither exists.
 */
export function BrandIcon({
  icon,
  custom,
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

  if (custom) {
    return (
      <svg
        viewBox={custom.viewBox}
        fill="currentColor"
        aria-hidden
        focusable="false"
        className={cn("shrink-0", className)}
      >
        {custom.paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            fillOpacity={p.opacity}
            fillRule={p.fillRule}
            clipRule={p.fillRule}
          />
        ))}
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
