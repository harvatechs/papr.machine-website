# Papr.Machine — Website Build Documentation
**Master Index**
Version 1.0 — Baseline for AI-agent build execution

---

## 0.1 What This Package Is

This is a complete, opinionated specification for one thing: a single-page marketing
website for **Papr.Machine** ("Printing. Automated.") — the self-service, unattended
document printing kiosk platform by **Tilak Infotech**.

It is written to be handed directly to a build agent (human or AI) with **zero
creative ambiguity**. Every visual, copy, and interaction decision that would normally
be left to "designer's taste" has been made here, on purpose, so the output cannot
regress into a generic template.

This is not a brief. This is the build contract.

---

## 0.2 The One-Sentence Brief

> A calm, confident, single-scroll website that makes a stranger understand — in
> under 60 seconds — that Papr.Machine turns any wall into a printer, that a real
> product already exists and works, and that they should either try the free demo
> or talk to us about bringing it to their location.

---

## 0.3 Document Set

Read in this order. Each file is self-contained but assumes the ones before it.

| # | File | Purpose |
|---|---|---|
| 01 | `01-BRAND-DESIGN-SYSTEM.md` | Colour, type, logo, spacing, iconography, motion tokens — the DNA |
| 02 | `02-CONTENT-NARRATIVE-COPY.md` | Every word on the site, section by section, ready to paste |
| 03 | `03-UX-SITE-STRUCTURE.md` | Page architecture, section order, information hierarchy, user journey |
| 04 | `04-UI-COMPONENTS-INTERACTIONS.md` | Component-level specs, states, animation choreography |
| 05 | `05-TECHNICAL-BUILD-SPEC.md` | Stack, file structure, performance budget, asset pipeline |
| 06 | `06-ANTI-PATTERNS-DO-NOT.md` | The specific, named things that make a site look "AI-generated" — forbidden |
| 07 | `07-QA-LAUNCH-CHECKLIST.md` | Definition of done, device matrix, pre-launch gates |

---

## 0.4 Non-Negotiable Constraints (repeated everywhere on purpose)

1. **One page.** No multi-page nav, no `/about`, no `/pricing` route. Everything lives
   on `/` as scrollable sections with anchor links.
2. **Light mode only.** No dark mode toggle. White is the product's confidence — a
   kiosk that looks this clean in daylight is the whole pitch.
3. **Two calls to action, and only two, repeated:** **Download Free Demo** and
   **Talk to Us**. Every other button is navigation, not conversion.
4. **Real brand assets only.** Logo, product screenshots, and kiosk render supplied
   in `/assets/brand/` are the only imagery permitted. No stock photography, no
   generic 3D blob renders, no AI-generated hero illustrations standing in for the
   real product.
5. **Source of truth for colour:** the **Spec Palette** below — not the palette shown
   on the brand sheet export. This has been confirmed as final (see §0.5).
6. **Subtlety over spectacle.** Every animation exists to clarify something, not to
   perform. If a motion effect can be removed without losing meaning, remove it.

---

## 0.5 Brand Palette — FINAL (Open Item #1 from PRD, Resolved)

The PRD flagged two competing palettes. **This documentation locks the Spec Palette
as final**, per direct instruction:

```
Brand Blue    #00AAFF
Brand Pink    #F91CB1
Brand Yellow  #FDE40D
Brand Black   #010000
```

The brand-asset export palette (`#0066FF / #FF0066 / #FFDD00 / #6A00FF / #111111`)
is **retired** for this website. Do not source colour values from the logo PNG's
metadata or the brand sheet — always use the hex codes above. Full usage rules are
in `01-BRAND-DESIGN-SYSTEM.md`.

---

## 0.6 Source Assets Provided

| Asset | File | Use |
|---|---|---|
| Full brand sheet | `brand-asset.png` | Reference only — for logo lockup variants, do not lift colours from it |
| Primary logo (transparent) | `logo.png` | The only logo file the site should use |
| Admin app screenshot | `Screenshot_2026-08-17_143434.png` | Product-proof section |
| Display/kiosk screen screenshot | `Screenshot_2026-08-17_143822.png` | Hero / how-it-works section |
| App launcher screenshot | `Screenshot_2026-08-17_143516.png` | Product-proof section (secondary) |

All four screenshots are **real product UI**, already built. This is the single
biggest asset this website has over a competitor's marketing page: we are not
mocking anything up. Treat these screenshots as hero-grade assets, not appendix
filler — see `02` and `03` for exactly where each one is used.

---

## 0.7 How To Use This Package As An Agent

1. Read `06-ANTI-PATTERNS-DO-NOT.md` **first**, even though it's numbered last-ish.
   It will save you from producing something that has to be thrown away.
2. Build section by section, following `03`'s order exactly.
3. Pull copy verbatim from `02` unless a line genuinely doesn't fit a component —
   flag it, don't silently rewrite brand voice.
4. Every visual decision not covered explicitly in `01`/`04` should default to *less*
   — less color, less motion, less decoration, more whitespace.
5. When in doubt, ask: **"Would this survive on a product page for a company that
   doesn't need to convince anyone it's legitimate?"** If a section reads as trying
   too hard, cut it.
