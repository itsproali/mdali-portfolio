import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Site mark: a gradient tile carrying a `</>` glyph. The gradient stops read
 * the --g1/--g2/--g3 tokens, so it follows the theme. Wrap it in a `group`
 * and the brackets spread apart on hover.
 */
export function Logo({ className }: { className?: string }) {
  const id = useId();
  const gradient = `logo-gradient-${id}`;

  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      focusable="false"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--g1)" />
          <stop offset="0.55" stopColor="var(--g2)" />
          <stop offset="1" stopColor="var(--g3)" />
        </linearGradient>
      </defs>

      <rect width="32" height="32" rx="9" fill={`url(#${gradient})`} />
      {/* Top-edge highlight, same recipe as the acrylic surfaces */}
      <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" fill="none" stroke="rgba(255,255,255,0.25)" />

      <g
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 10.5 6.8 16l5.2 5.5"
          className="transition-transform duration-300 ease-out group-hover:-translate-x-[1.5px]"
        />
        <path
          d="M20 10.5l5.2 5.5-5.2 5.5"
          className="transition-transform duration-300 ease-out group-hover:translate-x-[1.5px]"
        />
        <path
          d="M18.2 8.5 13.8 23.5"
          strokeWidth="2.4"
          className="origin-center transition-transform duration-300 ease-out group-hover:rotate-[-6deg]"
        />
      </g>
    </svg>
  );
}
