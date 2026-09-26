import { ArrowUpRight } from "lucide-react";

import { siteConfig, socials } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Corners } from "@/components/ui/corners";
import { CopyButton } from "@/components/ui/copy-button";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact" className="bg-bg-subtle/50">
      <SectionHeader
        index="08"
        title="Let's talk"
        description="Full-time roles, contract work, or a codebase that needs rescuing. I reply within a day or two."
        meta={`${siteConfig.timezone} · replies in 24h`}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="group relative border border-line bg-surface">
              <Corners />

              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <span className="label text-fg-subtle">Direct channels</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex size-1.5">
                    <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-accent" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="label text-accent">Open</span>
                </span>
              </div>

              <ul className="divide-y divide-line">
                <li className="flex items-center gap-3 px-4 py-3.5">
                  <div className="min-w-0 flex-1">
                    <p className="label text-fg-subtle">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block truncate font-mono text-[13px] text-fg transition-colors hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <CopyButton value={siteConfig.email} label="Email" />
                </li>

                <li className="flex items-center gap-3 px-4 py-3.5">
                  <div className="min-w-0 flex-1">
                    <p className="label text-fg-subtle">Phone</p>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="mt-1 block font-mono text-[13px] text-fg transition-colors hover:text-accent"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <CopyButton value={siteConfig.phone} label="Phone" />
                </li>

                <li className="px-4 py-3.5">
                  <p className="label text-fg-subtle">Based in</p>
                  <p className="mt-1 font-mono text-[13px] text-fg">
                    {siteConfig.locationLong}
                  </p>
                </li>

                <li className="px-4 py-3.5">
                  <p className="label text-fg-subtle">Elsewhere</p>
                  <ul className="mt-2.5 grid grid-cols-2 gap-2">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center justify-between border border-line px-2.5 py-2 font-mono text-[11px] tracking-[0.1em] text-fg-muted uppercase transition-colors hover:border-accent hover:text-accent"
                        >
                          {s.label}
                          <ArrowUpRight
                            className="size-3 opacity-0 transition-opacity group-hover/link:opacity-100"
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
