# repocards — landing page

The marketing site for [repocards](https://www.npmjs.com/package/repocards), a pre-computed markdown context system for AI coding agents.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion · Geist · next-themes

## Develop

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000.

## Scripts

| command | what it does |
|---|---|
| `pnpm dev` | local dev server |
| `pnpm build` | production build |
| `pnpm start` | serve the production build |
| `pnpm lint` | eslint |
| `pnpm typecheck` | `tsc --noEmit` |

## Structure

```
app/            route shells, metadata, OG image
components/
  sections/     one module per landing section
  *.tsx         reusable primitives
lib/
  content.ts    all copy + outbound links (source of truth)
  hooks/        client hooks
  utils.ts      cn(), formatStars()
```

Contributor notes live in [CLAUDE.md](./CLAUDE.md).

## Links

- Repo: https://github.com/HuzaifaBinShahid/Repo-cards
- npm: https://www.npmjs.com/package/repocards
- Author: [Huzaifa Bin Shahid](https://www.linkedin.com/in/huzaifabinshahid)
