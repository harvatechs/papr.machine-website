# 05 — Technical Build Specification

Companion to `04-UI-COMPONENTS-INTERACTIONS.md`. Stack choice, file/folder
structure, and the engineering-side rules that keep the codebase as clean as the
design it renders (per PRD §2.4 — "clean file/code structure, every module has one
job, no monolith files").

---

## 5.1 Recommended Stack

Given this is a **single static marketing page** with light interactivity (scroll
reveals, sticky header, one form), do not over-engineer the stack:

- **Framework:** plain semantic HTML5 + CSS + vanilla JS, *or* a minimal static-site
  approach (e.g. Astro) if the build agent's tooling defaults there. **Avoid**
  pulling in a full SPA framework (React/Vue/Next) purely for a one-page site with
  no client-side routing or app state — that's unjustified complexity for what this
  is, and it works against the "clean, minimal" brief at the tooling level too.
- **CSS:** hand-written CSS using the custom-property token system from
  `01-BRAND-DESIGN-SYSTEM.md §1.10`. No heavyweight utility-CSS framework
  (Tailwind is acceptable *if* the agent's pipeline already uses it, but the design
  tokens must still map 1:1 to the values specified in `01` — do not accept
  Tailwind's default spacing/colour scale as a substitute for the brand tokens).
- **Form submission:** a simple serverless form endpoint (e.g. a lightweight
  backend function or a privacy-respecting form service) — no client-only "mailto:"
  link posing as a contact form.
- **Fonts:** self-hosted Poppins (variable font file preferred, subset to Latin) —
  do not load from a third-party CDN if avoidable, for both performance and so the
  site doesn't depend on external uptime for its own typography.

---

## 5.2 File & Folder Structure

Matches PRD's "one job per module" principle, applied to a static site:

```
papr-machine-website/
├── index.html
├── README.md                      # short build notes, not user-facing
│
├── src/
│   ├── styles/
│   │   ├── tokens.css              # §1.10 variables — colour, type, space, motion
│   │   ├── base.css                # resets, typography defaults, global rules
│   │   ├── layout.css               # grid/container/section spacing utilities
│   │   ├── components/
│   │   │   ├── header.css
│   │   │   ├── buttons.css
│   │   │   ├── hero.css
│   │   │   ├── steps.css
│   │   │   ├── trust.css
│   │   │   ├── kiosk.css
│   │   │   ├── business.css
│   │   │   ├── demo.css
│   │   │   ├── contact-form.css
│   │   │   └── footer.css
│   │   └── main.css                 # imports all of the above, in load order
│   │
│   ├── scripts/
│   │   ├── nav-scroll-spy.js        # IntersectionObserver active-nav logic (4.1)
│   │   ├── header-shrink.js         # sticky header scroll state (4.1)
│   │   ├── section-reveal.js        # scroll reveal animation (4.3)
│   │   ├── contact-form.js          # form validation + submit handling (4.11)
│   │   └── main.js                  # imports/initializes the above, DOM-ready entry point
│   │
│   └── sections/                    # if using a templating/component approach,
│       ├── header.html              # one file per section, matching 03 §3.2 order
│       ├── hero.html
│       ├── problem.html
│       ├── how-it-works.html
│       ├── trust.html
│       ├── kiosk.html
│       ├── business.html
│       ├── demo.html
│       ├── contact.html
│       └── footer.html
│
├── assets/
│   ├── brand/
│   │   ├── logo.png                 # as supplied — do not re-export/recolour
│   │   ├── logo-white.svg           # extracted reversed lockup for footer (4.12)
│   │   └── icons/                   # custom icon set, §1.6, SVG, optimized
│   ├── screenshots/
│   │   ├── display-qr-pairing.png   # cropped from Screenshot_..._143822
│   │   ├── admin-dashboard.png      # from Screenshot_..._143434
│   │   ├── launcher.png             # from Screenshot_..._143516
│   │   └── kiosk-hardware.png       # isolated render from brand-asset.png
│   └── fonts/
│       └── poppins/                 # self-hosted, subset, woff2
│
└── public/
    ├── favicon.ico / favicon.svg
    ├── og-image.png                 # social preview card, built from brand assets
    └── robots.txt
```

**Rule:** no file exceeds ~200 lines. If `components/hero.css` starts creeping past
that while trying to hold hero + mobile overrides + animation keyframes, split
responsibly (e.g. `hero.css` + `hero-animations.css`) rather than letting one file
become a dumping ground. This mirrors the PRD's own engineering philosophy —
apply it here too.

---

## 5.3 Asset Pipeline Rules

- All product screenshots must be **cropped and compressed** before use — never
  ship the raw uploaded PNGs directly into production. Target: WebP/AVIF derivatives
  under ~200KB each at display size, PNG fallback for older browsers.
- The kiosk hardware render needs a clean background removal/isolation pass (from
  `brand-asset.png`) — this is a one-time asset-prep task, not something to fake
  with a CSS mask at runtime.
- Icon set exported as optimized inline SVG (via SVGO or equivalent) — no icon
  font (icon fonts are an outdated, less-accessible pattern; avoid).
- Generate a proper Open Graph / social share image using the brand gradient +
  wordmark, sized 1200×630 — don't leave social sharing to a default blank card.

---

## 5.4 Performance Budget

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 95 |
| Lighthouse Accessibility | 100 |
| Largest Contentful Paint | < 2.0s on throttled 4G |
| Cumulative Layout Shift | < 0.05 |
| Total page weight (initial load, above-the-fold) | < 700KB |
| JS shipped | < 40KB (uncompressed) — this page does not need more |

If the build agent finds itself needing a bundler/framework runtime that alone
exceeds this JS budget, that's a signal the stack choice in §5.1 has drifted from
"simple static page" toward unjustified complexity — reconsider before proceeding.

---

## 5.5 SEO & Head Basics

```html
<title>Papr.Machine — Printing. Automated.</title>
<meta name="description" content="[see 02 §2.2]">
<meta property="og:title" content="Papr.Machine — Printing. Automated.">
<meta property="og:description" content="[see 02 §2.2]">
<meta property="og:image" content="/public/og-image.png">
<meta name="theme-color" content="#FFFFFF">
<link rel="canonical" href="https://[final-domain]/">
```

Single `<h1>` (hero headline only), one `<main>` landmark, valid `robots.txt`
allowing indexing, no `noindex` left over from staging.

---

## 5.6 Browser & Device Support

- Evergreen browsers: last 2 versions of Chrome, Safari, Firefox, Edge.
- iOS Safari and Chrome Android explicitly tested (majority of "scan a QR on your
  phone" audience is mobile-first — see `07-QA-LAUNCH-CHECKLIST.md` device matrix).
- Graceful degradation, not pixel-identical parity, on anything older — motion/
  `backdrop-filter` effects can no-op safely on unsupported browsers without
  breaking layout.

---

## 5.7 Environment & Deployment Notes

- Static output — deployable to any static host (no server-rendering requirement)
  aside from the contact-form backend endpoint (§5.1), which should be a small,
  isolated serverless function, not baked into the frontend build.
- No secrets/API keys committed to the repository — form endpoint credentials live
  in host-level environment variables.
- Include a short `README.md` at the repo root with: how to run locally, how to
  build for production, and where the design tokens live (`src/styles/tokens.css`)
  so future edits change values in exactly one place.
