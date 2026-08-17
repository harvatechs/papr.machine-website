# 07 — QA & Launch Checklist

Companion to `06-ANTI-PATTERNS-DO-NOT.md`. Definition of done. Nothing ships until
every box in this file is genuinely true, not "mostly true."

---

## 7.1 Content Accuracy Gate

- [ ] Every claim on the page traces back to something stated in `01-MASTER-PRD.md`
      or the provided screenshots — nothing invented.
- [ ] No banned words present anywhere (`02 §2.1` list) — search the final copy
      for each one before sign-off.
- [ ] No fabricated statistics, testimonials, or logos (`02 §2.14`, `06 §6.4`).
- [ ] Palette is exclusively the Spec Palette hex values (`00 §0.5`) — grep the
      final CSS for any stray hex codes from the brand-asset export palette
      (`#0066FF`, `#FF0066`, `#FFDD00`, `#6A00FF`, `#111111`) and remove them.

## 7.2 Design Fidelity Gate

- [ ] Every anti-pattern in `06` has been actively checked against, not just read.
- [ ] Gradient usage counted and confirmed ≤ 3 instances site-wide.
- [ ] Type scale, spacing, and colour tokens all pull from `01 §1.10` — no ad-hoc
      one-off values introduced mid-build.
- [ ] Section layout alternation (asymmetric hero → flipped kiosk section →
      narrow centered trust/business sections) is present, not flattened into a
      repeated template during implementation.
- [ ] Logo used exactly as supplied, correct lockup per context (`01 §1.4`,
      `04 §4.12`), no recoloring/recreation.

## 7.3 Motion Gate

- [ ] Only the animations listed in `01 §1.8` are present — audit for anything
      extra that crept in.
- [ ] `prefers-reduced-motion: reduce` is respected and tested (toggle OS setting,
      confirm animations reduce to simple fades or disable).
- [ ] No animation blocks or delays perceived page usability (e.g. content isn't
      invisible-until-scrolled-into-view on a fast scroll — reveal thresholds
      feel responsive, not laggy).

## 7.4 Functional Gate

- [ ] Both primary CTAs (`Get the free demo`, `Talk to us`) work from every
      location they appear (header, hero, relevant section) and go to the correct
      destination (download trigger / contact form anchor).
- [ ] Contact form actually submits to a working endpoint; success and error
      states both tested with real submissions.
- [ ] Demo download link points to an actual, working file — not a placeholder.
- [ ] Every nav anchor link scrolls to the correct section.
- [ ] No `href="#"` dead links, no broken image paths, no console errors.

## 7.5 Responsive & Device Matrix

Test at minimum on:

| Device class | Example | Check |
|---|---|---|
| Small mobile | 360×800 (Android baseline) | No horizontal scroll, CTA buttons fully tappable (≥44px touch target), kiosk render not cropped |
| Standard mobile | iPhone 14/15 (390×844) | Same as above + Safari-specific rendering (backdrop-filter, font rendering) |
| Tablet | iPad (768×1024) & landscape | Two-column sections transition cleanly to single-column per `03 §3.7` |
| Laptop | 1440×900 | Max-width container (1200px) centers correctly, no excessive line-length in body copy |
| Large desktop | 1920×1080+ | Page doesn't feel empty/stretched — background colour/section rhythm holds up, content column stays capped |

## 7.6 Accessibility Gate

- [ ] Lighthouse Accessibility score = 100.
- [ ] Full keyboard-only pass: tab through header, hero CTAs, nav, all the way to
      footer and form — every interactive element reachable, focus state visible.
- [ ] Screen reader spot-check (VoiceOver or NVDA) on hero and contact form at
      minimum — headings announce in correct order, form fields have labels.
- [ ] Colour contrast checked for all text/background combinations against the
      final palette (`--grey-500` on `--white` is the tightest pairing — verify
      it clears WCAG AA for its font size, adjust to `--grey-700` for
      small/caption text if it doesn't).
- [ ] All meaningful images have descriptive alt text (`02 §2.13` pattern);
      decorative elements have empty `alt=""`.

## 7.7 Performance Gate

- [ ] Lighthouse Performance (mobile, throttled) ≥ 95.
- [ ] LCP < 2.0s, CLS < 0.05 (targets from `05 §5.4`) verified in real testing,
      not just estimated.
- [ ] Total above-the-fold page weight < 700KB.
- [ ] All screenshots compressed/converted per `05 §5.3` — confirm no raw
      uploaded PNGs shipped directly to production.
- [ ] Fonts self-hosted and preloaded, no visible flash of unstyled text on
      first load.

## 7.8 SEO & Meta Gate

- [ ] Title, meta description, OG tags all present and correct (`05 §5.5`).
- [ ] Custom OG share image renders correctly when the URL is shared (test via
      a social debugger tool).
- [ ] `robots.txt` allows indexing (confirm no leftover `noindex` from staging).
- [ ] Single `<h1>`, correct heading hierarchy throughout (`03 §3.8`).

## 7.9 Final Human Read-Through

Before calling this launched, read the entire page top to bottom out loud, at
normal speed, as if explaining it to someone who has never heard of Papr.Machine.

- [ ] It takes under 90 seconds to understand what the product is and does.
- [ ] It's clear by the end of "How It Works" that this is a real, working product,
      not a concept.
- [ ] The two calls to action feel like natural next steps, not interruptions.
- [ ] Nothing in the copy or layout would need explaining to a first-time reader.
- [ ] It passes the gut-check questions in `06 §6.11`, section by section.

**Only when every box above is checked — genuinely, not optimistically — is this
site ready to ship.**
