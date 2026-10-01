import { ArrowUpRight } from "lucide-react";

import { siteConfig, socials } from "@/content/site";
import { services } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CopyButton } from "@/components/ui/copy-button";
import { BrandIcon } from "@/components/ui/brand-icon";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        index="07"
        title="Let's talk"
        description="Full-time roles, contract work, or a codebase that needs rescuing. I reply within a day or two."
        meta={`${siteConfig.timezone} · replies in 24h`}
      />

      {/* What I take on — the former Services section, boiled down */}
      <Reveal delay={0.05}>
        <ul className="mt-8 flex flex-wrap items-center gap-2">
          <li className="label mr-1 text-fg-subtle">Open to</li>
          {services.map((s) => (
            <li
              key={s.id}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-fg-muted"
            >
              {s.title}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="rounded-[1.25rem] border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="label text-fg-subtle">Direct</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex size-1.5">
                    <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-accent" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="label text-accent">Open</span>
                </span>
              </div>

              <ul className="divide-y divide-line">
                <li className="flex items-center gap-3 px-5 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-fg-subtle">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block truncate text-sm font-medium text-fg transition-colors hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <CopyButton value={siteConfig.email} label="Email" />
                </li>

                <li className="flex items-center gap-3 px-5 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-fg-subtle">Phone</p>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="mt-1 block text-sm font-medium text-fg transition-colors hover:text-accent"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <CopyButton value={siteConfig.phone} label="Phone" />
                </li>

                <li className="px-5 py-4">
                  <p className="text-xs text-fg-subtle">Based in</p>
                  <p className="mt-1 text-sm font-medium text-fg">
                    {siteConfig.location}
                  </p>
                </li>

                <li className="px-5 py-4">
                  <p className="text-xs text-fg-subtle">Elsewhere</p>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center justify-between rounded-xl border border-line px-3 py-2 text-[13px] text-fg-muted transition-colors hover:border-fg hover:text-fg"
                        >
                          <span className="flex items-center gap-2.5">
                            <BrandIcon
                              icon={"icon" in s ? s.icon : undefined}
                              custom={"custom" in s ? s.custom : undefined}
                              name={s.label}
                              className="size-3.5 text-fg-subtle transition-colors group-hover/link:text-fg"
                            />
                            {s.label}
                          </span>
                          <ArrowUpRight
                            className="size-3.5 opacity-0 transition-opacity group-hover/link:opacity-100"
                            strokeWidth={2}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
