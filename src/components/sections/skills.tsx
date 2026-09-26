import { coreSkills, skillCount, skillGroups } from "@/content/stack";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Corners } from "@/components/ui/corners";
import { BrandIcon } from "@/components/ui/brand-icon";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        index="01"
        title="Skills"
        description="The core eight up front. Everything else I've shipped with, by layer, below."
        meta={`${skillCount} tools`}
      />

      {/* Core tiles */}
      <ul className="mt-12 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
        {coreSkills.map((skill, i) => (
          <Reveal as="li" key={skill.name} delay={i * 0.05} className="bg-bg">
            <div className="group relative flex aspect-4/3 flex-col justify-between p-5 transition-colors hover:bg-surface sm:p-6">
              <Corners />

              <BrandIcon
                icon={skill.icon}
                mark={skill.mark}
                name={skill.name}
                className="size-8 text-fg transition-colors duration-300 group-hover:text-accent"
                markClassName="border border-line-strong text-[11px] transition-colors group-hover:border-accent"
              />

              <div>
                <p className="text-lg font-medium tracking-tight">
                  {skill.name}
                </p>
                <p className="label mt-2 text-fg-subtle">{skill.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Everything, by layer */}
      <div className="mt-12 divide-y divide-line border-y border-line">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={Math.min(i * 0.04, 0.16)}
            className="grid gap-x-8 gap-y-3 py-5 md:grid-cols-[minmax(0,12rem)_1fr]"
          >
            <p className="label pt-1 text-fg-subtle">{group.title}</p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-center gap-2 text-[13px] text-fg-muted transition-colors hover:text-fg"
                >
                  <BrandIcon
                    icon={item.icon}
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
