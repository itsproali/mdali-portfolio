import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Decisions } from "@/components/sections/decisions";
import { Services } from "@/components/sections/services";
import { References } from "@/components/sections/references";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";
import { SectionRail } from "@/components/layout/section-rail";

export default function HomePage() {
  return (
    <>
      <SectionRail />
      <Hero />
      <Skills />
      <Work />
      <Experience />
      <Decisions />
      <Services />
      <References />
      <Writing />
      <Contact />
    </>
  );
}
