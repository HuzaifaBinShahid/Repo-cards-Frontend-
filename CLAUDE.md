# Frontend — repocards landing page

Next.js marketing site for the `repocards` npm package (parent at `../`).

## Stack (fixed — do not swap)

- Next.js 15 App Router, React 19, TypeScript strict
- Tailwind CSS v4 with CSS-first config (`@theme` in [app/globals.css](app/globals.css))
- shadcn primitives when needed, Radix underneath
- Framer Motion for all client animation
- `next-themes` for dark-first toggle
- Geist Sans + Geist Mono via `geist` package

**Do not** introduce: CSS-in-JS, other UI kits (Chakra/Mantine/MUI), three.js, Lenis, GSAP. Keep the bundle lean.

## Design constraints

- **Dark-first.** One accent color only: `--color-accent` (lime-emerald, defined in globals.css). Do not add a second accent.
- **Hairlines over shadows.** Use `.hairline` utility (`border: 1px solid var(--color-border)`) for separation. Flat elevation.
- **Geist everywhere.** No other font families.
- **Motion budget.** 200–400ms, `--ease-out-expo`. Every animation must honour `useReducedMotion()` from Framer Motion.
- **One ambient motion per page.** The `.orb` in Hero is already it — don't add more page-wide parallax or floating elements.

## Content source of truth

All user-facing copy, feature lists, step text, and outbound URLs live in [lib/content.ts](lib/content.ts). Don't hardcode feature copy inside components.

Outbound links are fixed:
- GitHub: `https://github.com/HuzaifaBinShahid/Repo-cards`
- npm: `https://www.npmjs.com/package/repocards`
- LinkedIn: `https://www.linkedin.com/in/huzaifabinshahid`

## Architecture

- `app/` — route shells, metadata, OG image, sitemap/robots. Keep these as RSCs.
- `components/sections/*` — one module per section. Default to RSC. Opt into `"use client"` only when needed (motion, state, event handlers).
- `components/*` — reusable primitives (install-command, theme-toggle, gh-star-button, cmdk-palette).
- `lib/content.ts` — data. `lib/utils.ts` — `cn()`, `formatStars()`. `lib/hooks/` — client hooks.

## Patterns in use (React idioms)

| Pattern | Where |
|---|---|
| Container/presentational | `app/page.tsx` composes `components/sections/*` |
| Composables → hooks | `lib/hooks/use-copy-to-clipboard.ts`, `use-mounted.ts` |
| Provide-inject → Context | Theme only (`next-themes`) |
| Dynamic/async components | `CardDeck` ships as `"use client"` island (Framer Motion code-split automatically) |
| Renderless → headless primitives | `cmdk` for the palette |

## Commands

```bash
pnpm dev          # local dev on http://localhost:3000
pnpm build        # production build
pnpm start        # serve production build
pnpm lint         # eslint
pnpm typecheck    # tsc --noEmit
```

Before a non-trivial PR, run `pnpm typecheck && pnpm lint && pnpm build`.

## Gotchas

- The folder name `Frontend/` has a capital letter, so npm refuses it as a package name. `package.json` uses `"name": "repocards-landing"` — do not rename to `"Frontend"`.
- `opengraph-image.tsx` uses Edge runtime (`export const runtime = "edge"`). Keep it purely JSX — no browser APIs.
- `GhStarButton` fetches GitHub stars with `revalidate: 3600`. If unauthenticated rate limits hit, `fetchStars()` returns null and the badge renders without a count.
- The hero `<CardDeck/>` is a client component; do not try to render it inside an RSC without it being the default export of a `"use client"` file.

## What this site is not

Not a docs site. Not a pricing page. Not a dashboard. Single-page marketing only. If docs are ever needed, add them under a separate route like `app/docs/` rather than expanding `page.tsx`.
