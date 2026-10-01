import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight " +
  "h-11 px-5 transition-[background-color,border-color,color,scale] duration-200 select-none whitespace-nowrap active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "gradient-hover bg-fg text-bg border border-fg",
  outline:
    "border border-line-strong text-fg bg-transparent hover:border-fg hover:bg-surface",
  ghost: "text-fg-muted hover:text-fg hover:bg-surface-hover border border-transparent",
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
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
