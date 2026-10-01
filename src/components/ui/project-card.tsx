import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/projects";
import { ProjectCover } from "./project-cover";

/** Large card for the flagship project — cover on the right, story on the left. */
export function FeaturedProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative grid overflow-hidden rounded-[1.25rem] border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-soft lg:grid-cols-2"
    >
      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <span className="label text-accent">Featured</span>

        <h3 className="font-display mt-5 text-3xl font-normal transition-colors group-hover:text-accent sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 text-[13px] text-fg-muted">
          {project.kind} · {project.year}
        </p>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
          {project.tagline}
        </p>

        {project.metrics ? (
          <dl className="mt-8 grid grid-cols-3 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dd className="text-lg font-medium tracking-tight tabular-nums sm:text-xl">
                  {m.value}
                </dd>
                <dt className="mt-1 text-xs leading-snug text-fg-subtle">
                  {m.label}
                </dt>
              </div>
            ))}
          </dl>
        ) : null}

        <span className="mt-auto flex items-center gap-2 pt-10 text-sm font-medium text-fg transition-colors group-hover:text-accent">
          Read the case study
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </span>
      </div>

      <div className="relative min-h-[16rem] overflow-hidden border-t border-line bg-bg-subtle lg:min-h-[26rem] lg:border-t-0 lg:border-l">
        <ProjectCover
          project={project}
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </Link>
  );
}

/** Compact card: framed cover, text set below the frame. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-bg-subtle transition-[border-color,box-shadow] duration-300 group-hover:border-line-strong group-hover:shadow-soft">
        <ProjectCover
          project={project}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 px-1">
        <div className="min-w-0">
          <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-[13px] text-fg-muted">
            {project.kind} · {project.year}
          </p>
        </div>
        <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-fg-subtle transition-[color,border-color] duration-300 group-hover:border-accent group-hover:text-accent">
          <ArrowUpRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  );
}
