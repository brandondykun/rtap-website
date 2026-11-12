# web

RTAP's website: the marketing site now, and a future web version of the app later. Next.js (App Router) + Tailwind
CSS v4, deployed on Vercel. Every marketing page is statically prerendered.

Design: `../docs/superpowers/specs/2026-11-11-marketing-website-design.md` (umbrella repo).

## Commands

```bash
npm run dev         # local dev server
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm test            # vitest unit tests (src/**/*.test.tsx)
npm run build       # production build: every route must stay static
npm run e2e         # playwright: page loads + no horizontal overflow at 360/390/1280 px
```

Run lint, typecheck, test, build and e2e before calling a change done.

## Layout

- `src/app/(marketing)/`: the marketing pages, with their own layout (nav and footer). A future logged-in web app
  goes in its own route group (for example `src/app/(app)/`) with its own layout. Both share the tokens in `globals.css`.
- `src/content/`: copy and screenshot data. `src/components/`: UI. `src/config/site.ts`: site constants and URL.
- Screenshots live in `src/assets/screenshots/` and are served through `next/image`.

## Rules

- **Colors mirror the app.** The tokens in `src/app/globals.css` copy `map/src/theme/tokens.ts`. Change them together.
- **Value colors keep their meaning** (see `../map/AGENTS.md`, Value colors): `friendly` sky blue only for your own
  and friendly grids, `value-distance` amber for distances, affiliation colors only on unit symbols.
- **Be honest about status.** Until launch, the only call to action is `StoreBadge` ("Coming soon on iOS & Android", with no
  Apple logo or App Store mark). Set `site.appStoreUrl` and add Apple's official badge to `public/badges/` at launch.
  V2 features (cloud sync, shared maps, team positions) are only ever "coming soon" or "in development".
- **Tone:** calm, precise, technical. No camo, skulls, fake classification stamps, or copy that implies real-world
  combat or targeting. The footer says "Training & simulation only."; Terms has the full wording.
- **Reduced motion:** no auto-advance and no scroll animations when `prefers-reduced-motion` is set.
- **API types** (when the web app arrives) are generated from the `api/` OpenAPI schema, never hand-written.
- Commit messages have no `Co-Authored-By` or other trailers.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
