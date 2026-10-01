export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
};

/**
 * What Ali takes on. Titles surface as the "Open to" chips in the contact
 * section; summaries and deliverables are kept for a future detail view.
 */
export const services: Service[] = [
  {
    id: "saas",
    index: "01",
    title: "SaaS Development",
    summary:
      "A subscription product built end to end — marketing site, app, API, billing and deployment — as one typed Next.js and Node codebase that's ready to take paying users.",
    deliverables: [
      "Next.js app with server-first, typed data access",
      "REST API in Node.js or NestJS",
      "PostgreSQL + Prisma schema and migrations",
      "Auth (NextAuth), Stripe subscriptions and webhooks",
      "Dockerised deploy on AWS or Vercel with CI",
    ],
  },
  {
    id: "video",
    index: "02",
    title: "AI Video & Rendering Pipelines",
    summary:
      "Programmatic video at scale: Remotion template systems, distributed cloud rendering and the tooling around them — the work behind a 500-template catalog and a 50% render-cost cut.",
    deliverables: [
      "Composable Remotion motion component libraries",
      "Template systems driven by data and AI output",
      "Parallel rendering on AWS Lambda with S3 + FFmpeg",
      "Render cost and wall-clock optimisation",
      "Browser-based editors with live preview",
    ],
  },
  {
    id: "extensions",
    index: "03",
    title: "Browser Extensions",
    summary:
      "Production Chrome extensions on Manifest V3 — in-page tooling, side panels and background workers that talk to your API, shipped through the Web Store.",
    deliverables: [
      "MV3 extensions built with Plasmo and React",
      "Content scripts, side panels and popups",
      "Background service workers and messaging",
      "Auth and sync with an existing backend",
      "Web Store listing, review and release process",
    ],
  },
  {
    id: "maintenance",
    index: "04",
    title: "Rescue & Maintenance",
    summary:
      "Taking over an existing codebase that's slow, brittle or half-finished — stabilising it, paying down the debt that matters, and keeping it shipping.",
    deliverables: [
      "Codebase audit with a prioritised fix list",
      "Performance and infrastructure-cost optimisation",
      "Dependency, security and framework upgrades",
      "CI/CD setup and release process",
      "Ongoing retainer support",
    ],
  },
];
