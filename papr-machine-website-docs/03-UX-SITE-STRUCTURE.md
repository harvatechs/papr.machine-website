# 03 — UX & Site Structure

Companion to `02-CONTENT-NARRATIVE-COPY.md`. Defines page architecture, the user's
mental journey down the scroll, and the exact section order — this is the skeleton
the copy and components attach to.

---

## 3.1 The Single Journey This Page Has To Support

There are exactly two visitor intents this site needs to resolve, and the page
order is designed around getting each one to their answer as fast as possible:

1. **"What is this, does it actually work, can I try it?"** → resolved by Hero →
   Problem → How It Works → Trust → Kiosk → **Download Demo**.
2. **"I run/own/franchise a business, is this something I could install?"** →
   resolved by Hero → How It Works → Kiosk → **For Business / Talk To Us**.

Both journeys share the same spine. Nobody has to hunt for a pricing page or a docs
site — there isn't one. Everything resolves on this one scroll.

---

## 3.2 Section Order (final, do not reorder)

```
1. Header (sticky)
2. Hero
3. The Problem
4. How It Works
5. Trust / Privacy
6. The Kiosk (hardware)
7. For Business / Franchise        [CTA: Talk to us]
8. Get The Free Demo               [CTA: Download free demo]
9. Contact / Collaborate form
10. Footer
```

**Why Trust sits before Kiosk, and Kiosk sits before Business:** a first-time reader
needs their privacy objection resolved (`5`) immediately after understanding the
mechanism (`4`), *before* they're shown the physical hardware — otherwise "there's a
computer holding my file" sits unresolved for an extra scroll. Business/franchise
(`7`) comes after the hardware section (`6`) on purpose: a franchise prospect needs
to see the physical footprint before the pitch to install one.

---

## 3.3 Information Hierarchy Per Section

Every section on this page follows the same internal hierarchy, without exception:

```
Eyebrow (small, tracked, grey-500 or brand-blue)
   ↓
Headline (H2, black, the one sentence someone skimming needs to read)
   ↓
Supporting body copy (1–4 sentences max, grey-700)
   ↓
Visual proof (real screenshot / icon / render) OR structured list (steps/points)
   ↓
Optional CTA (only in sections 7 and 8)
```

No section should invert this order (visual-first-then-headline) except the Hero,
where headline and visual sit side-by-side (see `04`).

---

## 3.4 Navigation Behaviour

- **Anchor-scroll nav only.** Clicking "How it works" smooth-scrolls to that
  section id; no route change, no page reload.
- Nav underline/active-state indicator updates based on current scroll position
  (`IntersectionObserver`, not scroll-position math) — see `05-TECHNICAL-BUILD-SPEC.md`.
- Mobile: nav links collapse into nothing extra — do **not** build a hamburger
  menu that opens a full-screen overlay nav for a 4-link, one-page site. Instead:
  keep the two CTA buttons always visible in the mobile header, and let the anchor
  links live only inside the flow of the page (or as a very slim horizontal
  scroll-chip row under the header) — a hamburger for 4 links is unnecessary
  ceremony that also reads as template-default behaviour.

---

## 3.5 CTA Discipline

There are only **two conversion actions** on this entire site. Every button on the
page must be one of these two, or a neutral anchor-nav link. No third CTA style,
no "Learn more →" links that go nowhere, no newsletter signup, no "Book a demo call"
as a separate flow from "Talk to us."

| CTA | Style | Appears in |
|---|---|---|
| `Get the free demo` | Solid black, gradient on hover, primary weight | Header, Hero, Section 8 (hero of that section) |
| `Talk to us` | Ghost/outline black | Header, Section 7 (hero of that section), footer optionally |

The **contact form (Section 9)** is the actual destination "Talk to us" scrolls to
— it is not a separate popup/modal. Keep the entire conversion path in-page; no
modal dialogs, no external form-tool iframe with a visibly different visual style.

---

## 3.6 Screenshot / Visual Placement Map

| Section | Asset | Treatment |
|---|---|---|
| Hero | Kiosk hardware render (isolated, from `brand-asset.png`) | Large, right-aligned or centered below headline on mobile, drop-shadowed (`--shadow-lifted`) |
| How It Works, steps 1–2 | `Screenshot_2026-08-17_143822.png` (Display: QR + PIN) | Cropped to just the QR/PIN/ring card, framed per `01 §1.7` |
| The Kiosk | Same kiosk render as hero, different crop/angle if available, or Admin screenshot as secondary proof | Paired side-by-side with the "one screen, one printer" copy |
| For Business (optional secondary proof) | `Screenshot_2026-08-17_143434.png` (Admin dashboard) | Small supporting frame showing the live job feed / earnings — proves the back-office is real |
| Get The Free Demo | `Screenshot_2026-08-17_143516.png` (Admin/Display launcher) | Shown as "this is what you'll actually run" — sets honest expectations before download |

Every screenshot placement must correspond to the sentence next to it. Never place
a screenshot purely for visual balance if it doesn't illustrate the adjacent claim.

---

## 3.7 Responsive Behaviour Overview (detail in `04` and `07`)

- **Desktop (≥1200px):** two-column layouts where hero/step sections pair text and
  visual side by side.
- **Tablet (768–1199px):** two-column sections collapse to stacked, text always
  above visual.
- **Mobile (<768px):** full single column, section padding reduces per `01 §1.5`
  mobile spacing values, hero kiosk render scales down but is never cropped/cut off.

---

## 3.8 Accessibility & Reading Path

- Semantic HTML landmarks: one `<header>`, one `<main>` containing `<section>` per
  block with proper `id`s matching nav anchors, one `<footer>`.
- Heading order is strictly H1 (hero only) → H2 (section headlines) → H3 (card/step
  titles within a section) — never skip a level.
- Every interactive element reachable via keyboard tab order matching visual order;
  focus states use a visible `--brand-blue` outline (2px, offset 2px) — never
  `outline: none` without a replacement.
- Form (Section 9) has proper `<label>` elements (not placeholder-only inputs),
  inline validation messaging, and an accessible error summary on submit failure.

---

## 3.9 What This Site Explicitly Does Not Have

- No blog, no docs section, no changelog.
- No login/signup flow (that lives in the actual product, not the marketing site).
- No live chat widget bubble in the corner.
- No cookie-consent banner theatre unless real third-party tracking is added (if
  analytics are added later, keep it to a single first-party or privacy-respecting
  tool and disclose it plainly in one line in the footer — not a full banner
  covering a third of the viewport on load).
