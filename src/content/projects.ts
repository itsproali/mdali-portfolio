export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  tagline: string;
  description: string[];
  stack: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  thumbnail?: string;
  gallery?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  /** Accent used for the generative cover when there is no thumbnail. */
  cover: { from: string; to: string };
};

export const projects: Project[] = [
  {
    slug: "vidrush-ai",
    index: "01",
    title: "VidRush AI",
    kind: "AI Video Platform",
    year: "2025—26",
    role: "Frontend Engineer & Team Lead",
    tagline:
      "An AI video platform where anyone can turn a prompt into a finished, on-brand video.",
    description: [
      "VidRush turns text and assets into rendered video at scale. I lead the five-person engineering team behind it, owning sprint planning, technical direction, code review and release quality.",
      "My two biggest contributions were structural. First, a reusable TypeScript + Remotion motion component library that turned every new template from a bespoke build into composition — that took the production catalog from zero to 500+ templates. Second, a re-architecture of the AWS cloud rendering pipeline that cut both render time and render cost in half.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Remotion",
      "Node.js",
      "AWS Lambda",
      "S3",
      "FFmpeg",
    ],
    features: [
      "Reusable Remotion motion component library powering every template",
      "500+ production video templates built by composition, not duplication",
      "Distributed AWS rendering pipeline with parallel frame rendering",
      "Browser-based editor with live preview",
      "Team of five: sprint planning, code review, release quality",
    ],
    metrics: [
      { label: "Templates shipped", value: "0 → 500+" },
      { label: "Render time & cost", value: "−50%" },
      { label: "Team led", value: "5 engineers" },
    ],
    liveUrl: "https://vidrush.ai",
    featured: true,
    cover: { from: "#FF6A2B", to: "#7C2D12" },
  },
  {
    slug: "one-quality-solutions",
    index: "02",
    title: "One Quality Solutions",
    kind: "Pharmaceutical QA Platform",
    year: "2023—24",
    role: "Frontend Developer",
    tagline:
      "A quality-assurance platform where pharmaceutical companies buy compliance documents, services and training.",
    description: [
      "A commerce and compliance platform tailored to pharmaceutical manufacturers. It blends documentation, automation and regulatory compliance so teams can source what they need to keep products safe and audit-ready.",
      "I built both halves of the product: the customer-facing storefront where buyers search, filter, read and purchase, and the admin dashboard where the catalog and every order is managed.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "NextAuth",
      "React Query",
      "React Hook Form",
      "Vercel",
    ],
    features: [
      "Searchable, filterable catalog of documents, services and training",
      "Online purchase flow with order history",
      "Free documents readable in-browser",
      "User profile management",
      "Admin CRUD for products plus full order oversight",
    ],
    thumbnail:
      "https://res.cloudinary.com/itsproali/image/upload/v1701538778/Portfolio/projects/qs_full_k7i9ha.png",
    gallery: [
      "https://res.cloudinary.com/itsproali/image/upload/v1701538557/Portfolio/projects/qs_1_qrxxzb.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1701538557/Portfolio/projects/qs_2_ypqels.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1701538556/Portfolio/projects/qs_3_pgmhoq.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1701538556/Portfolio/projects/qs_4_yx62zy.png",
    ],
    liveUrl: "https://www.1qualitysolutions.com/",
    featured: true,
    cover: { from: "#2563EB", to: "#0F172A" },
  },
  {
    slug: "mailrapido",
    index: "03",
    title: "Mailrapido",
    kind: "Disposable Email Service",
    year: "2024",
    role: "Full-Stack Developer",
    tagline:
      "Unlimited disposable inboxes — generated instantly or customised, so junk mail never reaches the address that matters.",
    description: [
      "Mailrapido gives you as many throwaway email addresses as you want, either auto-generated or named yourself. Incoming mail lands in a live inbox you can read and clear without ever exposing a real address.",
      "Built full-stack on Next.js with Prisma, a typed data layer end to end, social auth, and Stripe for subscriptions.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "React Query",
      "Zod",
      "Stripe",
    ],
    features: [
      "Auto-generated or fully customised temporary addresses",
      "Live inbox for incoming mail, readable and deletable",
      "Auth with email/password plus Google, Facebook and X",
      "Stripe subscriptions for premium tiers",
      "Blog and articles for organic acquisition",
    ],
    thumbnail:
      "https://res.cloudinary.com/itsproali/image/upload/v1712820802/Portfolio/projects/mailrapido_full_ez88l2.png",
    gallery: [
      "https://res.cloudinary.com/itsproali/image/upload/v1712820800/Portfolio/projects/mailrapido_1_it1tvz.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1712820800/Portfolio/projects/mailrapido_2_avhaio.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1712820801/Portfolio/projects/mailrapido_3_m8natc.png",
    ],
    liveUrl: "https://mailrapido.com/",
    repoUrl: "https://github.com/itsproali/mailrapido",
    featured: true,
    cover: { from: "#10B981", to: "#064E3B" },
  },
  {
    slug: "next-door-bd",
    index: "04",
    title: "Next Door BD",
    kind: "E-commerce",
    year: "2023",
    role: "Full-Stack Developer",
    tagline: "A full electronics storefront with a complete admin back office.",
    description: [
      "An electronics e-commerce site covering the whole loop: browse, search, ask questions, review, order, and track — with an admin side that manages the catalog and moves orders through their lifecycle.",
      "Built on Next.js and TypeScript with Prisma over PostgreSQL, which kept the data layer typed from the schema all the way to the component.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Node.js",
      "Material UI",
      "React Query",
      "Vercel",
    ],
    features: [
      "Product search and filtering",
      "Customer Q&A on product pages",
      "Ratings and reviews",
      "Order placement and order history",
      "Admin product CRUD and order status management",
    ],
    thumbnail:
      "https://res.cloudinary.com/itsproali/image/upload/v1701537321/Portfolio/projects/nextdoor_full_wedhbl.png",
    gallery: [
      "https://res.cloudinary.com/itsproali/image/upload/v1701537320/Portfolio/projects/nextdoor_1_ky0g2k.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1701537320/Portfolio/projects/nextdoor_2_iexnab.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1701537320/Portfolio/projects/nextdoor_3_njr04w.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1701537319/Portfolio/projects/nextdoor_4_jflkyk.png",
    ],
    liveUrl: "https://nextdoorbd.vercel.app/",
    featured: true,
    cover: { from: "#8B5CF6", to: "#2E1065" },
  },
  {
    slug: "jobs-ladder",
    index: "05",
    title: "Job's Ladder",
    kind: "Recruitment Platform",
    year: "2022",
    role: "Full-Stack Developer",
    tagline:
      "A two-sided platform connecting HR teams with job seekers, including task assignment and email.",
    description: [
      "HR posts roles, candidates apply, and the platform carries the relationship further than a job board normally does — HR can assign tasks to candidates and email them directly from inside the product.",
      "Built on the MERN stack with Firebase auth and Nodemailer for transactional mail.",
    ],
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Nodemailer",
    ],
    features: [
      "Job posting and application flow",
      "Task assignment from HR to candidates",
      "Transactional email to seekers and employees",
      "Rich profile management: avatar, bio, skills, experience, education",
      "Role-based views for HR and job seekers",
    ],
    thumbnail:
      "https://res.cloudinary.com/itsproali/image/upload/v1702705634/Portfolio/projects/jobs_ladder_full_pomoms.png",
    gallery: [
      "https://res.cloudinary.com/itsproali/image/upload/v1702705635/Portfolio/projects/jobs_ladder_1_ru8gir.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1702705634/Portfolio/projects/jobs_ladder_2_mfwd3g.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1702705634/Portfolio/projects/jobs_ladder_3_ylmxm3.png",
      "https://res.cloudinary.com/itsproali/image/upload/v1702705634/Portfolio/projects/jobs_ladder_4_e75aam.png",
    ],
    liveUrl: "https://job-ledder.web.app/",
    repoUrl: "https://github.com/itsproali/jobs-ladder-client",
    featured: false,
    cover: { from: "#F59E0B", to: "#78350F" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
