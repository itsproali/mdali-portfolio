"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Icon swapping is driven by the `.dark` class rather than React state, so
 * there's no mount flicker and no hydration mismatch to paper over.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg",
        className,
      )}
    >
      <Sun className="hidden size-4 dark:block" strokeWidth={1.7} />
      <Moon className="size-4 dark:hidden" strokeWidth={1.7} />
    </button>
  );
}
