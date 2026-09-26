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

      <ol className="mt-12 border-t border-line">
        {experience.map((job) => (
          <Reveal as="li" key={job.id} delay={0.04}>
            <article className="group grid gap-x-8 gap-y-3 border-b border-line py-7 md:grid-cols-[minmax(0,12rem)_1fr]">
              {/* Period */}
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className={cn(
                    "mt-[0.3rem] size-1.5 shrink-0 rounded-full transition-colors",
                    job.current
                      ? "bg-accent"
                      : "bg-line-strong group-hover:bg-accent",
                  )}
                />
                <p className="label text-fg">
                  {job.from} — {job.to}
                </p>
              </div>

              {/* Body */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="border border-accent-line bg-accent-soft px-1.5 py-0.5 font-mono text-[9px] tracking-[0.12em] text-accent uppercase">
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
                      className="inline-flex items-center gap-1 text-accent transition-opacity hover:opacity-75"
                    >
                      {job.company}
                      <ArrowUpRight className="size-3" strokeWidth={2} />
                    </a>
                  ) : (
                    <span className="text-fg-muted">{job.company}</span>
                  )}
                  <span className="text-fg-subtle">
                    · {job.location} · {job.mode}
                  </span>
                </p>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-fg-muted">
                  {job.summary}
                </p>

                <p className="mt-3 font-mono text-[10px] tracking-[0.1em] text-fg-subtle uppercase">
                  {job.stack.join(" · ")}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      {/* Education */}
      <Reveal delay={0.08}>
        <div className="mt-12">
          <p className="label text-fg-subtle">Education</p>

          <ul className="mt-4 border-t border-line">
            {education.map((ed) => (
              <li
                key={ed.id}
                className="grid gap-x-8 gap-y-1 border-b border-line py-4 md:grid-cols-[minmax(0,12rem)_1fr]"
              >
                <span className="label pt-0.5 text-fg-subtle md:pl-[1.125rem]">
                  {ed.from === ed.to ? ed.from : `${ed.from} — ${ed.to}`}
                </span>
                <span className="text-sm">
                  <span className="font-medium tracking-tight">{ed.title}</span>
                  <span className="text-fg-muted"> · {ed.institution}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
