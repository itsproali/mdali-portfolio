import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-20 py-16 sm:py-24 lg:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Index + short title on one baseline, optional meta on the right, and an
 * optional single-line description. Long headline sentences live elsewhere.
 */
export function SectionHeader({
  index,
  title,
  description,
  meta,
  className,
}: {
  index: string;
  title: string;
  description?: React.ReactNode;
  meta?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("border-t border-line pt-6", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="flex items-baseline gap-4 text-3xl font-medium tracking-tight sm:text-4xl">
          <span className="label text-accent">{index}</span>
          {title}
        </h2>
        {meta ? <span className="label text-fg-subtle">{meta}</span> : null}
      </div>

      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
