import { ArrowUpRight } from "lucide-react";

import { education, experience } from "@/content/experience";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="03"
        title="Experience"
        meta={`${experience.length} roles · since 2022`}
      />

      <ol className="mt-12">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.id} delay={Math.min(i * 0.05, 0.15)}>
            <article className="group relative grid gap-x-10 gap-y-3 border-t border-line py-7 md:grid-cols-[minmax(0,11rem)_1fr]">
              {/* Period */}
              <div className="flex items-center gap-3 md:items-start">
                <span
                  aria-hidden
                  className={cn(
                    "size-1.5 shrink-0 rounded-full transition-colors md:mt-[0.45rem]",
                    job.current
                      ? "bg-accent"
                      : "bg-line-strong group-hover:bg-fg-muted",
                  )}
                />
                <p className="text-sm text-fg-muted tabular-nums md:pt-0.5">
                  {job.from} — {job.to}
                </p>
              </div>

              {/* Body */}
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="rounded-full border border-accent-line bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-sm">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
                    >
                      {job.company}
                      <ArrowUpRight className="size-3" strokeWidth={2} />
                    </a>
                  ) : (
                    <span className="font-medium text-fg">{job.company}</span>
                  )}
                  <span className="text-fg-subtle">
                    · {job.location} · {job.mode}
                  </span>
                </p>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-fg-muted">
                  {job.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] text-fg-subtle"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      {/* Education */}
      <Reveal delay={0.08}>
        <div className="mt-6 grid gap-x-10 gap-y-3 border-t border-line pt-7 md:grid-cols-[minmax(0,11rem)_1fr]">
          <p className="label pt-1 text-fg-subtle md:pl-[1.125rem]">Education</p>

          <ul className="divide-y divide-line">
            {education.map((ed) => (
              <li
                key={ed.id}
                className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-sm">
                  <span className="font-medium tracking-tight">{ed.title}</span>
                  <span className="text-fg-muted"> · {ed.institution}</span>
                </span>
                <span className="shrink-0 text-[13px] text-fg-subtle tabular-nums">
                  {ed.from === ed.to ? ed.from : `${ed.from} — ${ed.to}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
