import Image from "next/image";

import { testimonials } from "@/content/testimonials";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Corners } from "@/components/ui/corners";

export function References() {
  return (
    <Section id="references">
      <SectionHeader
        index="06"
        title="References"
        meta={`${testimonials.length} references`}
      />

      <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.08} className="bg-bg">
            <figure className="group relative flex h-full flex-col p-6 transition-colors hover:bg-surface sm:p-8">
              <Corners />

              <span aria-hidden className="text-3xl leading-none text-accent/50">
                &ldquo;
              </span>

              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 shrink-0 object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="flex size-10 shrink-0 items-center justify-center border border-line font-mono text-xs text-fg-subtle">
                    {t.name.slice(0, 1)}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium tracking-tight">
                    {t.name}
                  </p>
                  <p className="label mt-1 truncate text-fg-subtle">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
