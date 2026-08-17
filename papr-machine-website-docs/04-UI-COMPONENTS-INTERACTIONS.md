# 04 — UI Components & Interactions

Companion to `03-UX-SITE-STRUCTURE.md`. Component-level specification: states,
exact behaviour, and the choreography of the site's handful of animated moments.

---

## 4.1 Header Component

**Default state (top of page):**
- Height: 96px desktop / 72px mobile.
- Background: transparent, sits on top of hero.
- Logo full lockup (mark + wordmark + tagline) at 32px mark-height.

**Scrolled state (triggers after scrolling past ~60% of hero height):**
- Height shrinks to 64px desktop / 56px mobile (`--duration-base`, `--ease-standard`).
- Background: `rgba(255,255,255,0.85)` with `backdrop-filter: blur(12px)`, 1px
  bottom hairline `--grey-300`.
- Logo shrinks to mark + wordmark only (tagline drops), 24px mark-height.
- Both header CTAs remain visible and full-size throughout — never hide CTAs
  behind a menu icon.

**Nav active-state indicator:** a 2px underline in `--brand-blue` slides
(`--duration-fast`) beneath the currently-in-view section's nav label, driven by
`IntersectionObserver` watching each `<section>`'s midpoint crossing viewport center.

---

## 4.2 Buttons

### Primary (`Get the free demo`)
```
Resting:  background var(--brand-black); color var(--white);
          radius var(--radius-sm); padding 16px 32px;
          font: button-label token from 01 §1.3
Hover:    background var(--brand-gradient); transition var(--duration-fast)
          (colour/background-position transition only — no scale transform)
Active:   background darkens 6%, no movement
Focus:    2px outline var(--brand-blue), 2px offset
```

### Secondary / Ghost (`Talk to us`)
```
Resting:  background transparent; border 1.5px solid var(--brand-black);
          color var(--brand-black); same radius/padding as primary
Hover:    background var(--brand-black); color var(--white);
          border stays solid black (no colour shift on border)
Focus:    2px outline var(--brand-blue), 2px offset
```

Both buttons: no icon by default. An arrow/chevron may be added only to the
primary demo CTA, and only one style, used consistently everywhere it appears
(e.g. a simple 16px right-arrow glyph from the custom icon set, never an emoji,
never a Unicode arrow character standing in for a real glyph).

---

## 4.3 Section Reveal Animation (the one page-wide "AI-agent instruction" to get exactly right)

Applies to every section below the hero.

```
Initial:  opacity 0; transform: translateY(16px)
Trigger:  IntersectionObserver, threshold 0.2, fires once (unobserve after fire)
Animate:  opacity 1; transform: translateY(0)
Duration: var(--duration-base) = 320ms
Easing:   var(--ease-standard)
Stagger:  child elements (eyebrow → headline → body → visual) each delayed
          +40ms from the previous, capped at 4 staggered children max
```

Respect `prefers-reduced-motion: reduce` — when set, skip the translateY entirely
and only cross-fade opacity over 150ms, no stagger.

---

## 4.4 Hero Component

**Layout (desktop):** two-column — text block (eyebrow, H1, lede, CTA pair, micro-
caption) on the left occupying ~55% width; kiosk render on the right occupying
~45%, vertically centered, drop-shadowed per `01 §1.9`.

**Layout (mobile):** single column — text block first, kiosk render below it,
render scales to full content-width, never exceeds container.

**Load-in choreography (once, on page load, not on every scroll):**
```
0ms    logo in header fades in (--duration-base)
100ms  eyebrow fades up
180ms  H1 fades up (headline may split into max 2 lines and fade up as one block —
       do NOT animate word-by-word or letter-by-letter, that's a banned pattern)
260ms  lede fades up
340ms  CTA pair fades up
420ms  kiosk render fades up + scales from 0.98 → 1 (the one place a subtle scale
       is permitted, because it's the load-in hero moment, not a hover/scroll effect)
```

No looping background animation behind the hero. If the brand gradient is used as
a subtle accent (§4.5), it is static or has a very slow, barely-perceptible
gradient-position drift (60s+ loop, ≤5% movement) — never a fast pulsing glow.

---

## 4.5 The One Gradient Accent Moment

Per the budget in `01 §1.2`, the single hero gradient moment is recommended here:
a thin (3–4px) horizontal gradient rule sitting directly beneath the H1 headline,
width capped to roughly the width of the headline text itself (not full-bleed).
This is the entire "wow, that's the brand" moment for the whole page — resist
adding a second one elsewhere out of a sense that it's "too subtle." Subtle is
correct.

---

## 4.6 "How It Works" Step Component

Four steps, numbered `01`–`04` (two-digit, not "1."), laid out as a horizontal
sequence on desktop (connected by a thin 1px `--grey-300` line running behind the
step numbers, not a decorative dotted/dashed "journey path" illustration), stacking
vertically on mobile with the connecting line becoming vertical.

Each step card:
```
[ 01 ]  small circle, 1.5px border --grey-300, number in Poppins Medium
Title (H3)
Body copy (2 sentences max)
```

Steps 1 uses the Display screenshot crop as embedded visual proof (placed above or
beside the card, not inside a bordered "card" — let the real screenshot breathe
without an extra decorative frame competing with its own UI chrome).

---

## 4.7 Trust Section Component

Single centered or left-aligned block, no card/border around it — this section
should feel like a plain, confident statement, not a marketing "feature box."
Icon (gradient-stroke shield, per `01 §1.6`) sits to the left of or above the
headline at generous size (48–64px), with generous space between icon and text
(`--space-3` minimum).

---

## 4.8 Kiosk / Hardware Section Component

Two-column (desktop): hardware render/photo on one side, copy + three capability
lines (styled as a simple unbulleted or minimally-bulleted list, thin `--brand-blue`
dash or 4px dot marker, not default browser bullets) on the other. Alternates
image-left/text-right from the Hero's image-right/text-left, to avoid the whole
page reading as a repeated template block (see `06`).

---

## 4.9 For Business Section Component

Centered, narrower content column (max ~760px) than the full-width sections around
it — visually signals "this is a distinct ask," a pause before the pitch. Single
CTA (`Talk to us`) sits directly under the body copy, generous space above it
(`--space-4`).

---

## 4.10 Get The Free Demo Section Component

This is the second-most-visually-weighted section after the Hero (it's a primary
conversion goal). Treat it with hero-level spacing and confidence, not as a small
closing footnote.

- Full-width section, `--grey-50` background (the one clear background-colour
  shift on the page, to mark this as a distinct, important moment).
- Headline + body centered, generous max-width (~700px) for readability.
- Primary CTA button at a slightly larger size than elsewhere (18px label, 18px/40px
  padding) — the single largest button on the page.
- Screenshot of the launcher (`Screenshot_2026-08-17_143516.png`) placed below the
  CTA as "here's exactly what you'll see," framed per `01 §1.7`.
- Micro-caption (platform, install time, no-data-leaves-machine) directly under the
  button in small grey-500 text — sets honest expectations, reduces download-anxiety.

---

## 4.11 Contact Form Component

- Single column, max-width ~560px, centered.
- Inputs: `--radius-md`, 1px `--grey-300` border, `--grey-50` background at rest,
  border shifts to `--brand-blue` on focus (no glow/box-shadow halo — just the
  border colour change, consistent with the low-key motion philosophy).
- Dropdown ("What are you reaching out about?") styled to match text inputs
  exactly — no default OS-styled `<select>` chrome; build a lightly custom select
  or at minimum override default browser styling so it doesn't visually clash with
  the rest of the form.
- Submit button = primary button style (§4.2), full-width on mobile, auto-width
  on desktop.
- Inline success/error messaging replaces the form (or appears directly above it)
  per copy in `02 §2.13` — no browser `alert()`, no toast notification stacked in
  a corner.

---

## 4.12 Footer Component

- Background: `--brand-black`, text `--white`/`--grey-300` for hierarchy.
- Logo lockup here uses the reversed (white) variant from `brand-asset.png`'s dark
  lockup — this is the one place the alternate logo treatment from `01 §1.4` is
  correct to use.
- Three-column layout desktop (about line / nav links / contact), stacks to single
  column mobile, generous vertical padding even in the footer (`--space-5` minimum)
  — do not let the footer feel cramped just because it's "just a footer."

---

## 4.13 Cursor & Hover States (desktop only)

- All interactive elements: `cursor: pointer`.
- Hover states are colour/background/border transitions only, `--duration-fast`.
- No custom cursor replacement, no cursor-trailing element.
- Screenshot/image frames may lift very slightly on hover (`translateY(-4px)`,
  shadow deepens from `--shadow-soft` to `--shadow-lifted`, `--duration-base`) —
  this is permitted because it reinforces "this is a real, inspectable object,"
  not decoration for its own sake. Do not add this to every element, only to
  standalone product-screenshot frames.

---

## 4.14 Loading & Perceived Performance

- Fonts: self-hosted Poppins (see `05`), `font-display: swap`, preloaded for the
  two weights used in the hero (SemiBold + Regular) to avoid a flash of
  unstyled/fallback text on the very first paint.
- Images: all product screenshots use responsive `srcset`/modern formats (WebP/AVIF
  with PNG fallback), explicit `width`/`height` attributes to prevent layout shift,
  `loading="lazy"` on everything below the hero fold.
- No full-page loading spinner/splash screen before the site renders — the browser
  should be able to paint the hero as fast as a static page would.
