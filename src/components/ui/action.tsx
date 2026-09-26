import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] " +
  "h-11 px-5 transition-colors duration-200 select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:bg-accent-hover border border-accent hover:border-accent-hover",
  outline:
    "border border-line-strong text-fg hover:border-accent hover:text-accent bg-transparent",
  ghost: "text-fg-muted hover:text-accent border border-transparent",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function ActionLink({
  href,
  external,
  variant = "outline",
  className,
  children,
  ...rest
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        base,
        variants[variant],
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
