import { ArrowUpRight } from "lucide-react";

import { projects } from "@/content/projects";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { FeaturedProjectCard, ProjectCard } from "@/components/ui/project-card";

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

      <Reveal className="mt-12">
        <FeaturedProjectCard project={flagship} priority />
      </Reveal>

      <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.07}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href="https://github.com/itsproali"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          More on GitHub
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </a>
      </Reveal>
    </Section>
  );
}
