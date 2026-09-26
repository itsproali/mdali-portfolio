export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "fullstack",
    index: "01",
    title: "Full-Stack Product Build",
    summary:
      "End-to-end delivery of a web product — interface, API, database and deployment — as one coherent TypeScript codebase rather than a stack of disconnected parts.",
    deliverables: [
      "Next.js app with typed, server-first data access",
      "REST API in Node.js or NestJS",
      "PostgreSQL or MongoDB schema and migrations",
      "Auth, payments and third-party integrations",
      "Dockerised deploy on AWS or Vercel with CI",
    ],
  },
  {
    id: "frontend",
    index: "02",
    title: "Frontend Engineering",
    summary:
      "Interfaces that hold up in production: accessible, responsive down to 320px, fast on real devices, and built from components your team can keep extending.",
    deliverables: [
      "Design-to-code with pixel discipline",
      "Reusable component library and design tokens",
      "Core Web Vitals and bundle-size work",
      "Motion and interaction design",
      "Chrome extensions (MV3, Plasmo)",
    ],
  },
  {
    id: "maintenance",
    index: "03",
    title: "Rescue & Maintenance",
    summary:
      "Taking over an existing codebase that's slow, brittle or half-finished — stabilising it, paying down the debt that matters, and keeping it shipping.",
    deliverables: [
      "Codebase audit with a prioritised fix list",
      "Performance and render-cost optimisation",
      "Dependency, security and framework upgrades",
      "CI/CD setup and release process",
      "Ongoing retainer support",
    ],
  },
];
