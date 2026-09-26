import { ArrowUpRight } from "lucide-react";

import { projects } from "@/content/projects";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";

export function Work() {
  const [flagship, ...rest] = projects;

  return (
    <Section id="work">
      <SectionHeader
        index="02"
        title="Selected work"
        description="Each one opens a short case study."
        meta={`${projects.length} projects`}
      />

      <div className="mt-12 grid gap-px border border-line bg-line">
        <Reveal className="bg-bg">
          <ProjectCard project={flagship} featured priority />
        </Reveal>

        <div className="grid gap-px bg-line md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06} className="bg-bg">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <a
          href="https://github.com/itsproali"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase transition-colors hover:text-accent"
        >
          More on GitHub
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </a>
      </Reveal>
    </Section>
  );
}
