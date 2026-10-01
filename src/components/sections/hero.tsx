import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { siteConfig, stats } from "@/content/site";
import { experience } from "@/content/experience";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { ActionLink } from "@/components/ui/action";
import { TiltCard } from "@/components/ui/tilt-card";
import { LocalTime } from "@/components/layout/local-time";

const line = (i: number) => ({ "--i": i }) as CSSProperties;
const drift = (s: number) => ({ "--float-delay": `${s}s` }) as CSSProperties;

const current = experience.find((j) => j.current) ?? experience[0];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-14 sm:pt-32 sm:pb-16"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ------------------------------------------------ copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex h-8 items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 text-[12px] font-medium text-accent">
                <span className="relative flex size-1.5">
                  <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-accent" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {siteConfig.available
                  ? "Available for new work"
                  : "Fully booked"}
              </span>
            </Reveal>

            <h1 className="font-display mt-8 text-hero font-normal text-fg">
              <span className="rise" style={line(0)}>
                <span>Full-stack</span>
              </span>
              <span className="rise" style={line(1)}>
                <span>developer &amp;</span>
              </span>
              <span className="rise" style={line(2)}>
                <span>
                  <em className="pr-[0.06em] text-accent italic">team lead</em>.
                </span>
              </span>
            </h1>

            <Reveal delay={0.4}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
                {siteConfig.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionLink href="#work" variant="primary">
                  View work
                  <ArrowDown
                    className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                    strokeWidth={2}
                  />
                </ActionLink>
                <ActionLink href="#contact" variant="outline">
                  Get in touch
                </ActionLink>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------------------------ portrait */}
          <Reveal delay={0.25} className="lg:col-span-5">
            <TiltCard className="relative mx-auto max-w-[22rem] sm:max-w-[24rem] lg:ml-auto lg:max-w-none">
              {/* Glow */}
              <div
                aria-hidden
                className="glow pointer-events-none absolute -inset-10 -z-10"
              />

              <figure className="tilt-surface group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft">
                <Image
                  src={siteConfig.avatar}
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 90vw"
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />

                {/* Legibility wash for the caption */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 via-black/20 to-transparent"
                />

                {/* Chip: current role */}
                <a
                  href={current.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={drift(0)}
                  className="float tilt-layer absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/75 py-1.5 pr-3 pl-1.5 text-[12px] font-medium text-neutral-900 shadow-soft backdrop-blur-md transition-colors hover:bg-white sm:top-5 sm:left-5"
                >
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-900 font-mono text-[9px] font-semibold text-white">
                    {current.company.slice(0, 1)}
                  </span>
                  <span>
                    {current.role.split("&")[1]?.trim() ?? current.role}
                    <span className="text-neutral-500"> · {current.company}</span>
                  </span>
                  <ArrowUpRight className="size-3 text-neutral-500" strokeWidth={2.2} />
                </a>

                {/* Chip: experience */}
                <span
                  style={drift(-3.5)}
                  className="float tilt-layer absolute top-4 right-4 inline-flex h-8 lg:hidden xl:inline-flex items-center rounded-full border border-white/20 bg-neutral-900/70 px-3 text-[12px] font-medium text-white shadow-soft backdrop-blur-md sm:top-5 sm:right-5"
                >
                  {stats[0].value}
                  {stats[0].suffix} yrs shipping
                </span>

                {/* Caption */}
                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-5 sm:bottom-5">
                  <div>
                    <p className="font-display text-2xl leading-none whitespace-nowrap text-white lg:text-xl xl:text-[1.75rem]">
                      {siteConfig.name}
                    </p>
                    <p className="mt-2 text-[13px] text-white/75">
                      {siteConfig.location}
                    </p>
                  </div>
                  <p className="shrink-0 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[11px] text-white/85 backdrop-blur-md">
                    <LocalTime zoneClassName="text-white/60" />
                  </p>
                </figcaption>
              </figure>
            </TiltCard>
          </Reveal>
        </div>

        {/* ------------------------------------------------ stats */}
        <Reveal delay={0.6}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-20 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-fg-muted">{s.label}</dt>
                <p className="label mt-1.5 text-fg-subtle">{s.note}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
