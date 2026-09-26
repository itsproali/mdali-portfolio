/**
 * DECISION LOG
 * ----------------------------------------------------------------------------
 * The section that separates this portfolio from a project grid: real technical
 * trade-offs, the options that were on the table, the call, and what it cost or
 * saved. Written from Mohammad's shipped work.
 *
 * TODO(Ali): these are drafted from your CV and project notes — read them
 * through and correct any detail that isn't exactly how it went down. The
 * numbers are yours; the framing is a first pass.
 */
export type Decision = {
  id: string;
  title: string;
  context: string;
  project: string;
  year: string;
  options: { label: string; verdict: "chosen" | "rejected"; why: string }[];
  decision: string;
  outcome: string;
  metric?: { value: string; label: string };
  tags: string[];
};

export const decisions: Decision[] = [
  {
    id: "DEC-001",
    title: "Splitting video renders across Lambda instead of scaling one box up",
    project: "VidRush AI",
    year: "2025",
    context:
      "Renders were slow and expensive. Every job ran start-to-finish on a single machine, so a two-minute video meant a two-minute wait and a full instance held hostage for the duration. Cost scaled linearly with length, and a queue of long videos blocked short ones behind it.",
    options: [
      {
        label: "Scale the render box vertically",
        verdict: "rejected",
        why: "Buys headroom, not throughput. Cost per render keeps climbing and one long job still blocks the queue.",
      },
      {
        label: "Persistent worker pool on ECS",
        verdict: "rejected",
        why: "Better parallelism, but we pay for idle capacity between bursts and the traffic is spiky.",
      },
      {
        label: "Fan frames out across Lambda, stitch at the end",
        verdict: "chosen",
        why: "Rendering is embarrassingly parallel at the frame level — concurrency scales with the work, and we pay only for frames actually rendered.",
      },
    ],
    decision:
      "Re-architected the pipeline so each render is chunked into frame ranges, fanned out across concurrent Lambda invocations writing to S3, then stitched into the final file. Wall-clock time became a function of concurrency rather than video length, and billing became per-frame instead of per-instance-hour.",
    outcome:
      "Render time and render cost both dropped by half. Long videos stopped blocking the queue, and the platform could absorb bursts without pre-provisioning capacity.",
    metric: { value: "−50%", label: "render time & cost" },
    tags: ["AWS Lambda", "Remotion", "S3", "Cost"],
  },
  {
    id: "DEC-002",
    title: "A motion component library instead of 500 bespoke templates",
    project: "VidRush AI",
    year: "2025",
    context:
      "The catalog needed to go from nothing to hundreds of templates. Built the obvious way — one Remotion composition per template — that is hundreds of near-duplicate files, and every change to a shared behaviour becomes a hundred edits.",
    options: [
      {
        label: "One hand-built composition per template",
        verdict: "rejected",
        why: "Fastest for template #1 and unbearable by template #50. Duplication compounds, fixes don't propagate.",
      },
      {
        label: "JSON-configured single mega-template",
        verdict: "rejected",
        why: "Every new visual idea becomes a config flag. The schema grows faster than the feature set and nothing is type-safe.",
      },
      {
        label: "Typed, composable motion primitives",
        verdict: "chosen",
        why: "Templates become composition, not code. Shared behaviour lives in one place; TypeScript catches misuse at build time.",
      },
    ],
    decision:
      "Built a TypeScript + Remotion component library of typed motion primitives — transitions, text reveals, layout frames, timing helpers — so a template is assembled from vetted parts rather than written from scratch. New templates became composition work; fixes to a primitive propagated to every template using it.",
    outcome:
      "The production catalog went from zero to 500+ templates, and the marginal cost of a new one collapsed to something a non-specialist on the team could take on.",
    metric: { value: "0 → 500+", label: "templates in production" },
    tags: ["TypeScript", "Remotion", "Architecture", "DX"],
  },
  {
    id: "DEC-003",
    title: "Plasmo over a hand-rolled Manifest V3 build",
    project: "Algesoft — in-browser analytics tooling",
    year: "2024",
    context:
      "Client work needed production Chrome extensions on Manifest V3. MV3 splits code across service worker, content scripts and popup, each with its own bundle, lifecycle and messaging rules — and no hot reload out of the box.",
    options: [
      {
        label: "Custom Webpack/Vite MV3 config",
        verdict: "rejected",
        why: "Full control, but weeks of build plumbing per project and a config only I could maintain.",
      },
      {
        label: "CRXJS",
        verdict: "rejected",
        why: "Good HMR story, thinner conventions — more of the MV3 structure still lands on us.",
      },
      {
        label: "Plasmo",
        verdict: "chosen",
        why: "Opinionated MV3 conventions, live reload, React-first, and messaging handled — build time goes into the product, not the bundler.",
      },
    ],
    decision:
      "Standardised on Plasmo for extension work. File-system conventions handled the MV3 surface split, live reload removed the reload-the-extension loop, and the React code shared patterns with our web apps instead of being a separate dialect.",
    outcome:
      "Extensions shipped on client timelines with build configuration that stayed boring, and the same team could move between web app and extension work without relearning the toolchain.",
    tags: ["Plasmo", "Chrome MV3", "React", "Tooling"],
  },
  {
    id: "DEC-004",
    title: "Postgres and Prisma for anything with money or state in it",
    project: "Mailrapido · Next Door BD",
    year: "2023—24",
    context:
      "Earlier projects ran on MongoDB and Mongoose, which was quick to start but leaked into runtime: shapes drifted from what the code assumed, and multi-step writes — order placed, stock decremented, payment recorded — had no transactional guarantee.",
    options: [
      {
        label: "Stay on MongoDB + Mongoose",
        verdict: "rejected",
        why: "Familiar and fast to prototype, but relational data modelled as documents means hand-maintained integrity.",
      },
      {
        label: "Postgres with a raw query builder",
        verdict: "rejected",
        why: "Full SQL control, no generated types — the schema-to-TypeScript gap stays open and has to be hand-synced.",
      },
      {
        label: "Postgres + Prisma",
        verdict: "chosen",
        why: "Real constraints and transactions in the database, with types generated from the schema so the compiler enforces them upstream.",
      },
    ],
    decision:
      "Moved transactional products onto PostgreSQL with Prisma as the data layer. Relations, constraints and transactions became the database's job; the generated client made the schema the single source of truth from migration all the way up to the React component.",
    outcome:
      "A whole category of runtime data bug turned into a build error. Schema changes surfaced every call site that needed updating instead of failing in production, and multi-step writes stopped being able to half-succeed.",
    tags: ["PostgreSQL", "Prisma", "Type safety", "Data integrity"],
  },
];
