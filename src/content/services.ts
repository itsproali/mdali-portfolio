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
    id: "web",
    index: "01",
    title: "Web Development",
    summary:
      "Production web applications end to end — interface, API, database and deployment — as one typed Next.js and Node codebase that's fast on real devices and easy to keep extending.",
    deliverables: [
      "Next.js app with server-first, typed data access",
      "REST API in Node.js or NestJS",
      "PostgreSQL + Prisma schema and migrations",
      "Accessible, responsive UI down to 320px",
      "Dockerised deploy on AWS or Vercel with CI",
    ],
  },
  {
    id: "ai-saas",
    index: "02",
    title: "AI Powered SaaS",
    summary:
      "Subscription products with AI at the core — from prompt to rendered output — including the billing, auth and background pipelines that make them ready for paying users.",
    deliverables: [
      "AI generation flows wired to your model provider",
      "Programmatic video with Remotion and FFmpeg",
      "Parallel rendering on AWS Lambda with S3",
      "Auth (NextAuth), Stripe subscriptions and webhooks",
      "Usage metering, queues and cost optimisation",
    ],
  },
  {
    id: "extensions",
    index: "03",
    title: "Browser Extension",
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
    id: "custom",
    index: "04",
    title: "Custom Software",
    summary:
      "Bespoke tools for a specific workflow — internal dashboards, automation, integrations, or taking over a codebase that's slow or half-finished and keeping it shipping.",
    deliverables: [
      "Internal dashboards and admin tooling",
      "Third-party integrations and automation",
      "Codebase audit with a prioritised fix list",
      "Performance and infrastructure-cost work",
      "Ongoing retainer support",
    ],
  },
];
