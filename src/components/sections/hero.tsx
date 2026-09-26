import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { siteConfig, stats } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { ActionLink } from "@/components/ui/action";
import { Corners } from "@/components/ui/corners";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16 sm:pt-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------------------------------------------- left */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="relative flex size-1.5">
                  <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-accent" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                <span className="label text-accent">
                  {siteConfig.available ? "Available" : "Booked"}
                </span>
                <span className="label text-fg-subtle">
                  {siteConfig.availabilityNote}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 text-display font-medium">
                Full-Stack
                <br />
                Developer
                <span className="block text-fg-muted">
                  &amp; Team Lead
                  <span
                    aria-hidden
                    className="animate-caret ml-2 inline-block h-[0.72em] w-[0.06em] translate-y-[0.02em] bg-accent align-middle"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
                {siteConfig.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap gap-3">
                <ActionLink href="#work" variant="primary">
                  View work
                  <ArrowDown className="size-3.5" strokeWidth={2} />
                </ActionLink>
                <ActionLink href="#contact" variant="outline">
                  Get in touch
                </ActionLink>
              </div>
            </Reveal>
          </div>

          {/* ---------------------------------------------- right */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} className="mx-auto max-w-sm lg:ml-auto">
              <figure className="group relative border border-line bg-surface">
                <Corners />

                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={siteConfig.avatar}
                    alt={`Portrait of ${siteConfig.name}`}
                    fill
                    priority
                    sizes="(min-width: 640px) 24rem, 90vw"
                    className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                  />
                </div>

                <figcaption className="flex items-center justify-between gap-4 border-t border-line px-3.5 py-2.5">
                  <span className="label text-fg">{siteConfig.name}</span>
                  <span className="label text-fg-subtle">
                    {siteConfig.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* ---------------------------------------------- stats */}
        <Reveal delay={0.3}>
          <dl className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:mt-20 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-5 sm:p-6">
                <dt className="label text-fg-subtle">{s.label}</dt>
                <dd className="mt-3 text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.1em] text-fg-subtle uppercase">
                  {s.note}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
