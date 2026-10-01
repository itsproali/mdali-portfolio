import { coreSkills, skillCount, skillGroups } from "@/content/stack";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Spotlight } from "@/components/ui/spotlight";
import { BrandIcon } from "@/components/ui/brand-icon";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        index="01"
        title="What I build with"
        description="The core eight up front. Everything else I've shipped with, by layer, below."
        meta={`${skillCount} tools`}
      />

      {/* Core tiles */}
      <Spotlight className="mt-12 rounded-[1.25rem]">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {coreSkills.map((skill, i) => (
            <Reveal as="li" key={skill.name} delay={i * 0.05}>
              <div className="acrylic acrylic-card group relative flex aspect-[4/3] flex-col justify-between rounded-2xl border border-line p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent-line sm:p-6">
                <BrandIcon
                  icon={skill.icon}
                  custom={skill.custom}
                  mark={skill.mark}
                  name={skill.name}
                  className="size-9 text-fg transition-colors duration-300 group-hover:text-accent"
                  markClassName="rounded-lg border border-line-strong text-[11px] transition-colors group-hover:border-accent"
                />

                <div>
                  <p className="text-[17px] font-medium tracking-tight">
                    {skill.name}
                  </p>
                  <p className="mt-1.5 text-[13px] text-fg-muted">{skill.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Spotlight>

      {/* Everything, by layer */}
      <div className="mt-14 divide-y divide-line border-y border-line">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={Math.min(i * 0.04, 0.16)}
            className="grid gap-x-8 gap-y-3 py-5 md:grid-cols-[minmax(0,11rem)_1fr]"
          >
            <p className="label pt-2.5 text-fg-subtle">{group.title}</p>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group inline-flex h-8 items-center gap-2 rounded-full border border-line bg-surface/60 pr-3 pl-2.5 text-[13px] text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                >
                  <BrandIcon
                    icon={item.icon}
                    custom={item.custom}
                    mark={item.mark}
                    name={item.name}
                    className="size-3.5 text-fg-subtle transition-colors group-hover:text-accent"
                    markClassName="text-[6.5px]"
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
