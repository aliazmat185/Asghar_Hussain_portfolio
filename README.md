# M Asghar Hussain — Portfolio & Lead-Generation Site

A Next.js (App Router) portfolio for M Asghar Hussain — digital marketing and
social media growth services. Built to help visitors understand the service
catalog and start a WhatsApp conversation.

Stack: Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, Lucide
icons, `next/font`. No auth, database, or payment integration — this is a
static/server-rendered marketing site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
npx tsc --noEmit  # TypeScript check
```

## Environment variables

Copy `.env.example` to `.env.local` and set the real deployed origin:

```
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

This powers `metadataBase`, Open Graph URLs, and `sitemap.xml`. Without it,
the site falls back to `http://localhost:3000` for local development only —
set the real value before deploying.

## Project structure

```
src/
  app/                    Routes: homepage, /services/[slug], not-found,
                           icon/apple-icon/opengraph-image (generated AH
                           branding), sitemap.ts, robots.ts
  components/
    layout/                Header, Footer, MobileActionBar
    sections/               Homepage sections (Hero, Services, About, ...)
    ui/                     Reusable pieces (Button, ServiceCard, icons, ...)
  data/                   Editable content — see below
  lib/                    WhatsApp URL helper
  types/                  Shared TypeScript types
```

## Updating content

Everything editorial lives in `src/data/`, typed and independent of the UI:

- **Contact details & social links** — `src/data/site.ts`. WhatsApp number,
  email, TikTok, Facebook. Every button and link on the site reads from here,
  so updating this file updates the whole site.
- **Services** — `src/data/services.ts`. Each entry drives both the homepage
  service card and its `/services/[slug]` detail page (covers, who it's for,
  process, FAQs). Add a new object to add a new service page automatically.
- **FAQs** (homepage accordion) — `src/data/faqs.ts`.
- **Engagement options** — `src/data/engagements.ts`.
- **Projects / testimonials** — `src/data/projects.ts` and
  `src/data/testimonials.ts` are intentionally empty. No real work samples or
  quotes were supplied, so their homepage sections stay hidden rather than
  show placeholders. Add real, attributable entries to these arrays when
  available — the corresponding section can then be un-hidden.

## Updating colors / theme

Design tokens are Tailwind v4 CSS variables in `src/app/globals.css`
(`@theme inline` block) — background, surface, text, accent (lime), teal,
and the warm section background. Change a value there and every utility
class (`bg-accent`, `text-text-muted`, etc.) updates.

## Adding a real portrait

No photo was supplied, so the hero and about sections use an "AH" monogram
in place of a portrait. To add one: drop the image in `public/`, import it
with `next/image` in `src/components/sections/Hero.tsx` (and `About.tsx`),
and swap the monogram `<span>` for the `<Image>`.

## Fonts, icons, animation

- Fonts: Space Grotesk (display) and Manrope (body) via `next/font/google`.
- Interface icons: `lucide-react`. Platform logos (TikTok, Facebook,
  Instagram, YouTube, WhatsApp) are local SVG components in
  `src/components/ui/icons.tsx` — Lucide doesn't ship brand marks.
- Animation is CSS-only (a small fade-up keyframe), respecting
  `prefers-reduced-motion`. No animation library is included — the site
  doesn't need one.

## What was verified

- Production build, `tsc --noEmit`, and `eslint` all pass clean.
- Every service route renders; an unknown `/services/*` slug returns a real
  404 via `notFound()`.
- All WhatsApp links use `923045349012`; TikTok links point to
  `https://www.tiktok.com/@agencypro1`; Facebook links preserve profile id
  `61577783043696` (without the `mibextid` tracking parameter); email links
  use `qaswar264@gmail.com`. Verified in rendered HTML output.
- External social links carry `target="_blank" rel="noopener noreferrer"`.
- The contact form validates required fields and opens a prefilled WhatsApp
  draft — it never claims the message was sent.
- No browser/screenshot automation tool was available in this environment,
  so responsive layout at 375/768/1440px was **not** visually screenshotted.
  The layout uses standard responsive Tailwind patterns (stacking grids,
  a mobile menu, a mobile bottom action bar) — check it in an actual browser
  before shipping, particularly the mobile nav and bottom bar.

## Deployment

Any Next.js host (Vercel, etc.) works out of the box. Set
`NEXT_PUBLIC_SITE_URL` in the host's environment variables before the first
production build so metadata and the sitemap point at the real domain.

## Owner-supplied assets still needed

- A real portrait/photo (optional — the monogram works as a permanent design
  choice too).
- Genuine, completed project examples and testimonials, if you want those
  sections live.
- The production domain, for `NEXT_PUBLIC_SITE_URL`.
