# mdali.dev

Portfolio for **Mohammad Ali** — Full-Stack Developer & Team Lead.

Next.js 16 (App Router, `src/`) · React 19 · TypeScript · Tailwind CSS v4 ·
MDX. No database, no CMS, no backend beyond a single contact route. Installable
as a PWA with offline fallback.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the build
pnpm lint
```

## Where the content lives

Everything you'll want to edit is plain TypeScript in `src/content/`.

| File | What it drives |
| --- | --- |
| `site.ts` | Name, role, contact details, socials (with icons), nav, hero stats |
| `experience.ts` | Work timeline and education |
| `projects.ts` | Project cards and every `/projects/[slug]` case study |
| `stack.ts` | Core skill tiles and the grouped skill chips |
| `brand-marks.ts` | Vector marks simple-icons doesn't ship (AWS, Remotion, Plasmo, LinkedIn) |
| `services.ts` | The "Open to" chips in the contact section |
| `decisions.ts` | The Decision Log |
| `testimonials.ts` | References |
| `posts/*.mdx` | Blog posts (see `posts/README.md`) |

## Design system

Tokens live at the top of `src/app/globals.css`, defined twice — `:root` for
light (warm paper) and `.dark` for dark (deep ink) — and mapped into Tailwind
via `@theme inline`.

- **Accent**: `--accent` (cobalt / periwinkle).
- **Gradient**: `--g1` → `--g2` → `--g3` feed `--gradient-accent`, the `.mesh`
  backdrop, the portrait `.glow` and the skills spotlight. Change the three
  stops per theme to retune every gradient on the site.
- **Acrylic**: `.acrylic` (header, menu) and `.acrylic-card` (skill tiles) —
  blur, tint, grain and a 1px highlight.
- **Type**: Fraunces (display serif, `font-display`) for the hero and titles,
  Geist for UI and body, Geist Mono for `.label` eyebrows only. The `next/font`
  variable classes sit on `<html>` so the `:root` tokens can resolve them.

## Motion

All CSS. `<Reveal>` flips `data-inview` when an element first scrolls into
view; the hero uses a masked line rise; `<Spotlight>` and `<TiltCard>` write
pointer positions into CSS variables. Everything is gated by
`prefers-reduced-motion` in the stylesheet, never branched in React.

Tailwind v4 moves elements with the `translate` / `scale` / `rotate`
properties, so custom `transition-[…]` lists must name those, not `transform`.

## SEO

- `layout.tsx`: metadata, Open Graph, Twitter card, WebSite + Person JSON-LD.
- `blog/[slug]`: BlogPosting + BreadcrumbList. `projects/[slug]`: CreativeWork
  + BreadcrumbList.
- `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.svg`,
  `apple-icon.png`.

## PWA

- `app/manifest.ts` → `/manifest.webmanifest`, icons in `public/icons/`.
- `public/sw.js`: network-first pages with `/offline` fallback, cache-first
  for `/_next/static`, stale-while-revalidate for images and fonts. Registered
  in production by `components/layout/service-worker.tsx`. Bump `VERSION` in
  the worker when its strategy changes; `next.config.ts` serves it with
  `no-cache`.

## Contact form

One route handler at `src/app/api/contact/route.ts`, backed by
[Resend](https://resend.com). Copy `.env.example` to `.env.local` and add
`RESEND_API_KEY`. Without a key the form fails gracefully and tells visitors to
email directly. The route validates input, rate-limits per IP and carries a
honeypot field.

## Structure

```
src/
├─ app/                  routes, metadata, manifest, sitemap, robots, OG image
│  ├─ api/contact/       the only server endpoint
│  ├─ blog/              index + [slug]
│  ├─ offline/           service-worker fallback page
│  └─ projects/[slug]/   case studies
├─ components/
│  ├─ layout/            header, footer, backdrop, theme, rail, service worker
│  ├─ sections/          one file per homepage section
│  └─ ui/                primitives (buttons, cards, reveal, fields, logo)
├─ content/              ← all editable content
├─ hooks/
└─ lib/
```

## Deploying

Push to GitHub, import at [vercel.com/new](https://vercel.com/new), add
`RESEND_API_KEY` as an environment variable. Point `mdali.dev` at it and update
`siteConfig.url` if the domain ever changes.
