import { cn } from "@/lib/utils";

/** Four bracket corners that light up on group hover. */
export function Corners({ className }: { className?: string }) {
  const corner =
    "pointer-events-none absolute h-2.5 w-2.5 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100";

  return (
    <span aria-hidden className={cn("absolute inset-0", className)}>
      <span className={cn(corner, "top-[-1px] left-[-1px] border-t border-l")} />
      <span
        className={cn(corner, "top-[-1px] right-[-1px] border-t border-r")}
      />
      <span
        className={cn(corner, "bottom-[-1px] left-[-1px] border-b border-l")}
      />
      <span
        className={cn(corner, "right-[-1px] bottom-[-1px] border-r border-b")}
      />
    </span>
  );
}
