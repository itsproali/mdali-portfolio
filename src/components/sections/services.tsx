import { ArrowUpRight } from "lucide-react";

import { services } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Corners } from "@/components/ui/corners";

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        index="05"
        title="Services"
        description="Available for full-time roles and select freelance engagements."
        meta="Freelance & contract"
      />

      <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.07} className="bg-bg">
            <div className="group relative flex h-full flex-col p-6 transition-colors hover:bg-surface sm:p-7">
              <Corners />

              <span className="label text-accent">{service.index}</span>

              <h3 className="mt-5 text-xl font-medium tracking-tight">
                {service.title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-fg-muted">
                {service.summary}
              </p>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] tracking-[0.14em] text-fg-subtle uppercase transition-colors hover:text-accent"
              >
                Start a conversation
                <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
