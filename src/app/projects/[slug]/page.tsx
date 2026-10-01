import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { getProject, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ActionLink } from "@/components/ui/action";
import { ProjectCover } from "@/components/ui/project-cover";
import { GithubIcon } from "@/components/ui/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — ${project.kind}`,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.kind}`,
      description: project.tagline,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
      images: project.thumbnail ? [{ url: project.thumbnail }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-28 pb-24 sm:pt-36">
      <Container>
        {/* Back */}
        <Reveal>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            All work
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <header className="mt-10 border-t border-line pt-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label text-accent">{project.index}</span>
              <span className="label text-fg-subtle">{project.kind}</span>
              <span className="label ml-auto text-fg-subtle">
                {project.year}
              </span>
            </div>

            <h1 className="font-display mt-7 text-headline font-normal">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {project.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {project.liveUrl && (
                <ActionLink href={project.liveUrl} external variant="primary">
                  Visit live site
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </ActionLink>
              )}
              {project.repoUrl && (
                <ActionLink href={project.repoUrl} external variant="outline">
                  <GithubIcon className="size-4" />
                  Source
                </ActionLink>
              )}
            </div>
          </header>
        </Reveal>

        {/* Cover */}
        <Reveal delay={0.1}>
          <div className="group relative mt-14 aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-line bg-bg-subtle sm:aspect-[16/9]">
            <ProjectCover
              project={project}
              priority
              sizes="(min-width: 1280px) 1180px, 100vw"
            />
          </div>
        </Reveal>

        {/* Metrics */}
        {project.metrics ? (
          <Reveal delay={0.05}>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-line bg-surface p-5 sm:p-6"
                >
                  <dd className="text-2xl font-medium tracking-tight tabular-nums sm:text-3xl">
                    {m.value}
                  </dd>
                  <dt className="mt-2 text-sm text-fg-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}

        {/* Body */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="label text-fg-subtle">Overview</h2>
              <div className="mt-5 space-y-5">
                {project.description.map((para, i) => (
                  <p key={i} className="text-base leading-[1.75] text-fg-muted">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="label mt-14 text-fg-subtle">What it does</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-4 py-3.5 text-[14px] leading-relaxed text-fg-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="rounded-[1.25rem] border border-line bg-surface">
                <div className="border-b border-line px-5 py-3">
                  <span className="label text-fg-subtle">Project details</span>
                </div>

                <dl className="divide-y divide-line">
                  <div className="px-5 py-4">
                    <dt className="text-xs text-fg-subtle">Role</dt>
                    <dd className="mt-1 text-sm font-medium text-fg">
                      {project.role}
                    </dd>
                  </div>
                  <div className="px-5 py-4">
                    <dt className="text-xs text-fg-subtle">Year</dt>
                    <dd className="mt-1 text-sm font-medium text-fg">
                      {project.year}
                    </dd>
                  </div>
                  <div className="px-5 py-4">
                    <dt className="text-xs text-fg-subtle">Stack</dt>
                    <dd className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line px-2.5 py-1 text-[11px] text-fg-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Gallery */}
        {project.gallery?.length ? (
          <section className="mt-20">
            <Reveal>
              <h2 className="label text-fg-subtle">Screens</h2>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 2) * 0.06}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-bg-subtle">
                    <Image
                      src={src}
                      alt={`${project.title} — screen ${i + 1}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      loading="lazy"
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {/* Next */}
        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-20 flex flex-col gap-3 rounded-[1.25rem] border border-line bg-surface px-6 py-8 transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-10"
          >
            <span>
              <span className="label text-fg-subtle">Next project</span>
              <span className="font-display mt-3 block text-3xl font-normal transition-colors group-hover:text-accent sm:text-4xl">
                {next.title}
              </span>
            </span>
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-line text-fg-subtle transition-[color,border-color] group-hover:border-accent group-hover:text-accent">
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </span>
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
