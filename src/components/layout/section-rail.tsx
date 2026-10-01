"use client";

import { navItems } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const ids = navItems.map((n) => n.id);

/** Right-edge section indicator for wide screens. */
export function SectionRail() {
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col items-end gap-0.5">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-center justify-end gap-3 py-1.5"
              >
                <span
                  className={cn(
                    "label translate-x-1 opacity-0 transition-[opacity,transform,color] duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                    isActive ? "text-fg" : "text-fg-subtle",
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    "block rounded-full transition-[width,height,background-color] duration-300",
                    isActive
                      ? "h-1.5 w-1.5 bg-accent"
                      : "h-1 w-1 bg-line-strong group-hover:bg-fg-muted",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
