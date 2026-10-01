import Image from "next/image";

import { testimonials } from "@/content/testimonials";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function References() {
  return (
    <Section id="references">
      <SectionHeader
        index="05"
        title="Kind words"
        meta={`${testimonials.length} references`}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.08}>
            <figure className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-soft sm:p-8">
              <blockquote className="font-display flex-1 text-xl leading-snug font-normal text-fg sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 shrink-0 rounded-full object-cover ring-1 ring-line"
                  />
                ) : (
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line font-mono text-xs text-fg-subtle">
                    {t.name.slice(0, 1)}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium tracking-tight">
                    {t.name}
                  </p>
                  <p className="mt-0.5 truncate text-[13px] text-fg-muted">
                    {t.title}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
