import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { Corners } from "./corners";
import { ProjectCover } from "./project-cover";

export function ProjectCard({
  project,
  featured,
  priority,
}: {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col bg-bg transition-colors hover:bg-surface"
    >
      <Corners />

      <div
        className={cn(
          "flex flex-1 flex-col",
          featured && "lg:grid lg:grid-cols-2 lg:items-stretch",
        )}
      >
        {/* Cover */}
        <div
          className={cn(
            "relative aspect-16/10 overflow-hidden border-b border-line bg-bg-subtle",
            featured &&
              "lg:order-2 lg:aspect-auto lg:min-h-[22rem] lg:border-b-0 lg:border-l",
          )}
        >
          <ProjectCover
            project={project}
            priority={priority}
            sizes={
              featured
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
          />
        </div>

        {/* Body */}
        {featured ? (
          <div className="flex flex-col p-5 sm:p-6 lg:order-1 lg:p-8">
            <span className="label text-accent">Featured</span>

            <h3 className="mt-4 text-2xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
              {project.title}
            </h3>
            <p className="label mt-2 text-fg-subtle">
              {project.kind} · {project.year}
            </p>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-fg-muted">
              {project.tagline}
            </p>

            {project.metrics ? (
              <dl className="mt-7 grid grid-cols-3 gap-px border border-line bg-line">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-bg px-3 py-3">
                    <dd className="text-[15px] font-medium tracking-tight text-accent tabular-nums sm:text-base">
                      {m.value}
                    </dd>
                    <dt className="mt-1 font-mono text-[9px] leading-tight tracking-[0.1em] text-fg-subtle uppercase">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </dl>
            ) : null}

            <span className="mt-auto flex items-center gap-2 pt-7 font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase transition-colors group-hover:text-accent">
              Case study
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </span>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-4 p-5">
            <div className="min-w-0">
              <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="label mt-2 text-fg-subtle">
                {project.kind} · {project.year}
              </p>
            </div>
            <ArrowUpRight
              className="mt-1 size-4 shrink-0 text-fg-subtle transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              strokeWidth={1.8}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
