# Hiyare Labs

Landing page built with Next.js 16, React 19, Tailwind CSS v4, `motion`, and `lucide-react` — matching your existing lockfile.

## Getting started

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Structure

- `app/` — root layout (fonts, metadata) and the single page (`page.tsx`) that composes every section
- `components/` — one component per section (Hero, Services, Portfolio, Pricing, FAQ, Contact, etc.)
- `components/ui/` — shared primitives: `Button` (magnetic + ripple), `Reveal` (scroll animation wrapper), `Eyebrow`
- `data/content.ts` — all copy, service/portfolio/pricing/FAQ data in one place — edit this file to change content without touching components
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `app/globals.css` — Tailwind v4 theme tokens (`@theme`) for the brand palette/fonts, plus custom keyframes for blobs, gradient text, cursor glow, etc.

## Notes

- Dark mode toggle is in-memory only (no `next-themes`/localStorage) — swap in `next-themes` if you want it to persist.
- The contact form is a front-end demo (shows a "Message Sent" state) — wire it up to your email/API of choice.
- Portfolio and hero visuals are built with CSS gradients + `lucide-react` icons rather than photos, so there's nothing to license or replace before shipping.
