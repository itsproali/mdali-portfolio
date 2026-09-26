"use client";

import { navItems } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const ids = navItems.map((n) => n.id);

export function SectionRail() {
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col items-end gap-1">
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
                    "label opacity-0 transition-all duration-300 group-hover:opacity-100",
                    isActive ? "text-accent 2xl:opacity-100" : "text-fg-subtle",
                  )}
                >
                  {item.index} {item.label}
                </span>
                <span
                  className={cn(
                    "h-px transition-all duration-300",
                    isActive
                      ? "w-7 bg-accent"
                      : "w-3.5 bg-line-strong group-hover:w-5 group-hover:bg-fg-muted",
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
