# Boxd September Pilot

Landing pages for Box'd Kitchen's UVA growth pilot (September 2026): a React + Vite + Tailwind site with three independent landing pages, each testing a different customer belief and each linking out to direct Toast ordering.

## Business & campaign context

**Read `Boxd_Kitchen_B2C_Journey_and_Organic_Campaign.md` before making product, copy, or measurement decisions.** It is the strategy doc this pilot implements and is the source of truth for: the three customer beliefs being tested, required page copy/CTAs, the event taxonomy (`landing_view`, `order_click`, `chooser_select`, `promo_redeem`), and the decision rules for judging the pilot. Treat it as authoritative over ad hoc requests that conflict with it — flag the conflict instead of silently deviating.

Three landing pages map directly to the three content sets in that doc:

| Directory | Page | Tests the belief |
|---|---|---|
| `five-reasons/` | Five Reasons | "Box'd is the smartest/easiest next meal." |
| `uva-favorite/` | UVA Eats Here | "People like me already trust this place." |
| `find-your-box/` | Find Your Box | "I already know what I want from Box'd." |

Each page's primary CTA must go to direct Toast ordering (not a delivery marketplace), and must fire an `order_click` event with `campaign`, `placement`, and `creative_id` per the measurement plan.

## Stack

- React 19 + TypeScript + Vite 8, styled with Tailwind v4 (`@tailwindcss/vite`).
- `src/` — shared app code. Each landing page directory likely has its own entry; check `vite.config.ts` for how pages are built/routed.
- `legacy/`, `public/`, `dist/` — legacy assets, static public files, build output.
- Scripts: `npm run dev`, `npm run build` (`tsc -b && vite build`), `npm run preview`.

## Working notes

- Menu item names, prices, and availability should stay consistent with what's live on Toast — the strategy doc flags cross-platform inconsistency as a pre-launch fix item.
- Don't publish a promo/offer code (`WHYBOXD`, `HOOSBOXD`, `MYBOXD`) unless the owner has confirmed it exists in the POS.
- Analytics (GA4 or equivalent) must be verified on all three pages before the first campaign post goes live.
