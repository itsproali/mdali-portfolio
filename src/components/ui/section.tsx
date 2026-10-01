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
      className={cn("relative scroll-mt-24 py-20 sm:py-28 lg:py-32", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Mono index, serif title, optional one-line description and a right-aligned
 * meta string. Deliberately low on words — the content below does the talking.
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
    <Reveal className={cn("border-t border-line pt-7", className)}>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div className="flex items-baseline gap-4">
          <span className="label text-accent">{index}</span>
          <h2 className="font-display text-title font-normal text-fg">
            {title}
          </h2>
        </div>
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
