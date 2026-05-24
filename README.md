# Kapot

Official website of inline skate community Kapot — events, contests and lessons across Belgium.

Production: <https://www.echtalleskapot.be>

## Stack

- Next.js 15 (Pages Router) + React 19
- TypeScript 6 (strict)
- MUI 9 with `@mui/material-nextjs` integration + emotion
- Self-hosted fonts via `next/font`
- Vercel for hosting + analytics + speed insights

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Copy `.env.local.example` to `.env.local` and adjust. The only required variable is:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL used for OpenGraph, Twitter cards, canonical link, and JSON-LD. Falls back to `https://www.echtalleskapot.be` if unset.

Set this in Vercel's project settings for the production environment.

## Project structure

```
pages/                    # Pages Router entry points
  _app.tsx                # App shell, MUI ThemeProvider, AppCacheProvider, Seo
  _document.tsx           # HTML document, font CSS variables, manifest, meta
  index.tsx               # Single-page site composing all sections

components/
  Button/                 # Reusable styled MUI Button wrapper
  ButtonScrollTo/         # Button variant that smooth-scrolls to a section
  Icons/Logo/             # Brand logo
  NavBar/                 # Desktop nav, mobile nav
  Sections/               # Page sections (Learn, Events, Collab, Footer)
  SocialsBar/             # Social media link row
  ToggledNavBar/          # Slide-out mobile drawer
  Seo/                    # SEO meta + JSON-LD
  VideoDisplay/           # Hero video block

theme/                    # MUI theme + next/font configuration
public/                   # Static assets, robots.txt, sitemap.xml, llms.txt, manifest
```

## Editing site content

All content is in TypeScript constant files — there's no CMS. To update:

- **Plans (group class / private session):** `components/Sections/SectionLearn/Plans/constantsPlans.tsx`
- **Events:** `components/Sections/SectionEvents/Events/constantsEvents.tsx` — set `startDate` (ISO 8601) to auto-emit a Google Event structured-data entry.
- **Teachers:** `components/Sections/SectionLearn/Teachers/constantsTeachers.tsx`
- **Partner logos:** `components/Sections/SectionCollab/constantsLogosBrands.tsx`
- **Social links:** `components/SocialsBar/constantsSocialMedia.tsx`
- **Hero copy + CTA:** `components/VideoDisplay/index.tsx`

## Load-bearing things you shouldn't change without reading first

- **`pages/_app.tsx` side-effect import of `../theme/fonts`** — needed so `next/font`'s build plugin processes the local fonts into the client bundle. The CSS variables are applied to `<body>` in `_document.tsx`.

## SEO / structured data

The `<Seo>` component in `components/Seo/` emits:

- Title, description, canonical, OpenGraph, Twitter Card
- `SportsClub` JSON-LD (Kapot org info, social `sameAs`)
- `SportsEvent` JSON-LD per event in `constantsEvents.tsx` that has an ISO `startDate`

Static files in `public/`:

- `robots.txt` — explicit allow for major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `sitemap.xml` — single-URL sitemap with image extension
- `llms.txt` — curated overview for LLM ingestion
- `site.webmanifest` — PWA-style manifest with brand color

## Deployment

The site is hosted on Vercel and deploys automatically on push to `main`. There is no staging environment — `main` is production. Branch previews are created automatically for pull requests.

When you push to `main`, the build runs on Vercel and the production site updates within ~1 minute.

## Day-to-day

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # ESLint
```
