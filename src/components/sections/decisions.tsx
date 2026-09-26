"use client";

import { useState } from "react";
import { Check, Minus, Plus, X } from "lucide-react";

import { decisions } from "@/content/decisions";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Decisions() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section id="decisions" className="bg-bg-subtle/50">
      <SectionHeader
        index="04"
        title="Decision log"
        description="The options on the table, the call I made, and what it cost."
        meta={`${decisions.length} entries`}
      />

      <div className="mt-12 border-b border-line">
        {decisions.map((d, i) => {
          const isOpen = openId === d.id;
          const panelId = `${d.id}-panel`;

          return (
            <Reveal key={d.id} delay={Math.min(i * 0.05, 0.15)}>
              <div className="border-t border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : d.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-start gap-4 py-6 text-left sm:gap-6"
                  >
                    <span
                      className={cn(
                        "label w-[4.5rem] shrink-0 pt-1.5 whitespace-nowrap transition-colors",
                        isOpen ? "text-accent" : "text-fg-subtle",
                      )}
                    >
                      {d.id}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block text-lg leading-snug font-medium tracking-tight transition-colors sm:text-xl",
                          isOpen
                            ? "text-accent"
                            : "text-fg group-hover:text-accent",
                        )}
                      >
                        {d.title}
                      </span>
                      <span className="label mt-2.5 block text-fg-subtle">
                        {d.project} · {d.year}
                      </span>
                    </span>

                    {d.metric ? (
                      <span className="hidden shrink-0 pt-0.5 text-right md:block">
                        <span className="block text-xl font-medium tracking-tight text-accent tabular-nums">
                          {d.metric.value}
                        </span>
                        <span className="label mt-1 block text-fg-subtle">
                          {d.metric.label}
                        </span>
                      </span>
                    ) : null}

                    <span
                      aria-hidden
                      className={cn(
                        "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center border transition-colors",
                        isOpen
                          ? "border-accent text-accent"
                          : "border-line text-fg-subtle group-hover:border-accent group-hover:text-accent",
                      )}
                    >
                      {isOpen ? (
                        <Minus className="size-3.5" strokeWidth={2} />
                      ) : (
                        <Plus className="size-3.5" strokeWidth={2} />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  inert={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 sm:pl-24 lg:grid-cols-2 lg:gap-12">
                      <div className="space-y-8">
                        <Block label="Context">{d.context}</Block>

                        <div>
                          <p className="label text-fg-subtle">
                            Options considered
                          </p>
                          <ul className="mt-3 space-y-3">
                            {d.options.map((o) => {
                              const chosen = o.verdict === "chosen";
                              return (
                                <li
                                  key={o.label}
                                  className={cn(
                                    "border-l-2 pl-4",
                                    chosen
                                      ? "border-accent"
                                      : "border-line-strong",
                                  )}
                                >
                                  <p className="flex items-start gap-2 text-[14px] font-medium">
                                    {chosen ? (
                                      <Check
                                        className="mt-0.5 size-3.5 shrink-0 text-accent"
                                        strokeWidth={2.5}
                                      />
                                    ) : (
                                      <X
                                        className="mt-0.5 size-3.5 shrink-0 text-fg-subtle"
                                        strokeWidth={2.5}
                                      />
                                    )}
                                    <span
                                      className={
                                        chosen ? "text-fg" : "text-fg-muted"
                                      }
                                    >
                                      {o.label}
                                    </span>
                                  </p>
                                  <p className="mt-1.5 pl-5.5 text-[13px] leading-relaxed text-fg-subtle">
                                    {o.why}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <Block label="Decision">{d.decision}</Block>
                        <Block label="Outcome" accent>
                          {d.outcome}
                        </Block>

                        <ul className="flex flex-wrap gap-1.5">
                          {d.tags.map((t) => (
                            <li
                              key={t}
                              className="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-fg-subtle uppercase"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Block({
  label,
  accent,
  children,
}: {
  label: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className={cn("label", accent ? "text-accent" : "text-fg-subtle")}>
        {label}
      </p>
      <p
        className={cn(
          "mt-3 text-[14px] leading-relaxed",
          accent ? "text-fg" : "text-fg-muted",
        )}
      >
        {children}
      </p>
    </div>
  );
}
