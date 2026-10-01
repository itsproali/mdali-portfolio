import {
  siCloudinary,
  siCss,
  siDigitalocean,
  siDocker,
  siExpress,
  siFfmpeg,
  siFirebase,
  siFramer,
  siGit,
  siGithubactions,
  siGooglechrome,
  siHtml5,
  siJavascript,
  siMongodb,
  siMongoose,
  siMui,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siReacthookform,
  siReactquery,
  siRedux,
  siSass,
  siShadcnui,
  siSst,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
  type SimpleIcon,
} from "simple-icons";

import { awsMark, plasmoMark, remotionMark, type Mark } from "./brand-marks";

type Skill = {
  name: string;
  /** Brand mark from simple-icons. */
  icon?: SimpleIcon;
  /** Custom vector for brands simple-icons doesn't carry (see brand-marks.ts). */
  custom?: Mark;
  /** Short monogram, drawn only when there is no vector at all. */
  mark?: string;
};

type SkillGroup = {
  id: string;
  title: string;
  items: Skill[];
};

// Shared between the core tiles and the grouped list below them.
const typescript: Skill = { name: "TypeScript", icon: siTypescript };
const javascript: Skill = { name: "JavaScript", icon: siJavascript };
const react: Skill = { name: "React", icon: siReact };
const next: Skill = { name: "Next.js", icon: siNextdotjs };
const node: Skill = { name: "Node.js", icon: siNodedotjs };
const nest: Skill = { name: "NestJS", icon: siNestjs };
const postgres: Skill = { name: "PostgreSQL", icon: siPostgresql };
// simple-icons carries no AWS or Remotion marks; these come from brand-marks.ts.
const aws: Skill = { name: "AWS", custom: awsMark };
const remotion: Skill = { name: "Remotion", custom: remotionMark };

/** The headline eight — rendered as large tiles at the top of the section. */
export const coreSkills: (Skill & { role: string })[] = [
  { ...typescript, role: "Language" },
  { ...react, role: "Interfaces" },
  { ...next, role: "Framework" },
  { ...node, role: "Runtime" },
  { ...nest, role: "Backend" },
  { ...postgres, role: "Database" },
  { ...aws, role: "Cloud" },
  { ...remotion, role: "Video rendering" },
];

/** Everything shipped with, grouped by the layer it lives in. */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      react,
      next,
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Redux Toolkit", icon: siRedux },
      { name: "Framer Motion", icon: siFramer },
      { name: "Material UI", icon: siMui },
      { name: "shadcn/ui", icon: siShadcnui },
      { name: "Sass", icon: siSass },
    ],
  },
  {
    id: "backend",
    title: "Backend & API",
    items: [
      node,
      nest,
      { name: "Express", icon: siExpress },
      { name: "SST", icon: siSst },
      { name: "Zod", icon: siZod },
      { name: "Stripe", icon: siStripe }
    ],
  },
  {
    id: "data",
    title: "Data",
    items: [
      postgres,
      { name: "Prisma", icon: siPrisma },
      { name: "MongoDB", icon: siMongodb },
      { name: "Mongoose", icon: siMongoose },
      { name: "Firebase", icon: siFirebase },
    ],
  },
  {
    id: "infra",
    title: "Infra & Tooling",
    items: [
      aws,
      { name: "Docker", icon: siDocker },
      { name: "GitHub Actions", icon: siGithubactions },
      { name: "Vercel", icon: siVercel },
      { name: "DigitalOcean", icon: siDigitalocean },
      { name: "Git", icon: siGit },
      { name: "Postman", icon: siPostman },
    ],
  },
  {
    id: "specialised",
    title: "Specialised",
    items: [
      remotion,
      { name: "Plasmo", custom: plasmoMark },
      { name: "Chrome Extensions", icon: siGooglechrome },
      { name: "FFmpeg", icon: siFfmpeg },
      { name: "Cloudinary", icon: siCloudinary },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    items: [
      typescript,
      javascript,
      { name: "SQL", mark: "SQL" },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
    ],
  },
];

/** Distinct tool count across every group. */
export const skillCount = new Set(
  skillGroups.flatMap((g) => g.items.map((i) => i.name)),
).size;
