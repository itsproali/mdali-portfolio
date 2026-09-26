# mdali.dev

Portfolio for **Mohammad Ali** — Full-Stack Developer & Team Lead.

Next.js 16 (App Router, `src/`) · React 19 · TypeScript · Tailwind CSS v4 ·
MDX. No database, no CMS, no backend beyond a single contact route.

Animation is CSS-driven — a small IntersectionObserver flips a data attribute
and the stylesheet does the rest, so there's no animation library in the
bundle and `prefers-reduced-motion` is honoured natively. First load is
~224 KB gzipped, of which ~157 KB is the React + Next runtime itself.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the build
pnpm lint
```

## Where the content lives

Everything you'll want to edit is plain TypeScript in `src/content/`. No admin
panel, no database — change a file, commit, and the site redeploys.

| File | What it drives |
| --- | --- |
| `site.ts` | Name, role, bio, contact details, socials, nav, hero stats, spec sheet |
| `experience.ts` | Work timeline and education |
| `projects.ts` | Project cards and every `/projects/[slug]` case study |
| `stack.ts` | Technology groups and the marquee |
| `services.ts` | The three service cards |
| `decisions.ts` | The Decision Log — see note below |
| `testimonials.ts` | References |
| `posts/*.mdx` | Blog posts (see `posts/README.md`) |

Search the repo for `TODO(Ali)` — that's every spot needing your review.

## Contact form

One route handler at `src/app/api/contact/route.ts`, backed by
[Resend](https://resend.com). Copy `.env.example` to `.env.local` and add
`RESEND_API_KEY`. Without a key the form fails gracefully and tells visitors to
email directly.

The route validates input, rate-limits to 3 messages/minute per IP, and carries
a honeypot field.

## Structure

```
src/
├─ app/                  routes, metadata, sitemap, robots, OG image
│  ├─ api/contact/       the only server endpoint
│  ├─ blog/              index + [slug]
│  └─ projects/[slug]/   case studies
├─ components/
│  ├─ layout/            header, footer, grid, theme, scroll rail
│  ├─ sections/          one file per homepage section
│  └─ ui/                primitives (buttons, cards, reveal, fields)
├─ content/              ← all editable content
├─ hooks/
└─ lib/
```

## Animation

`<Reveal>` (`src/components/ui/reveal.tsx`) sets `data-inview` when an element
first scrolls into view; `.js [data-reveal]` in `globals.css` supplies the
transition. Deliberately **not** branched on `useReducedMotion()` in React —
that hook resolves differently on server and client and silently breaks
hydration. Keep reduced-motion handling in the stylesheet.

## Design system

Tokens live at the top of `src/app/globals.css`, defined twice — `:root` for
light, `.dark` for dark — and mapped into Tailwind via `@theme inline`. Change
`--accent` in both blocks to re-skin the whole site.

Typography is Geist + Geist Mono, self-hosted through `next/font`. Mono carries
every label, index number and data value; sans carries prose.

## Deploying

Push to GitHub, import at [vercel.com/new](https://vercel.com/new), add
`RESEND_API_KEY` as an environment variable. Point `mdali.dev` at it and update
`siteConfig.url` if the domain ever changes.
