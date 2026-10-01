import Image from "next/image";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCover({
  project,
  sizes,
  priority,
  className,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (project.thumbnail) {
    return (
      <Image
        src={project.thumbnail}
        alt={`${project.title} — ${project.kind}`}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
          className,
        )}
      />
    );
  }

  /* No screenshot on file — draw a typographic cover instead. */
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{
        backgroundImage: `linear-gradient(140deg, ${project.cover.from} 0%, ${project.cover.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.5) 1px, transparent 1.3px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 100% 0%, rgba(255,255,255,.22), transparent 55%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.16em] text-white/80 uppercase">
            {project.kind}
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-white/60 uppercase">
            {project.year}
          </span>
        </div>

        <div>
          <span className="font-display block max-w-[12ch] text-4xl leading-[0.95] font-normal text-white sm:text-6xl">
            {project.title}
          </span>

          {/* Timeline motif — a nod to what the product makes. */}
          <div
            aria-hidden
            className="mt-6 flex h-6 items-end gap-[3px] opacity-60"
          >
            {Array.from({ length: 48 }).map((_, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-white"
                style={{
                  height: `${18 + Math.sin(i * 0.7) * 10 + (i % 5) * 3}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
