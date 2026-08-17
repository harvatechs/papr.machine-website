# 01 — Brand & Design System

Companion to `00-INDEX-OVERVIEW.md`. This is the DNA file — every visual token used
anywhere on the site is defined here. Nothing outside this file should be invented
mid-build.

---

## 1.1 Design Philosophy — Say This In One Line

**"A kiosk this quiet should have a website this quiet."**

Papr.Machine's entire product pitch is *removing friction from a physically noisy,
chaotic process (walking into a print shop, waiting, explaining what you need)*.
The website has to embody that promise before a single word of copy proves it. If
the site is loud, cluttered, or over-animated, it contradicts the product on sight.

Design references to hold in mind while building (not to copy, to calibrate against):
Apple product pages circa iPhone/AirPods launches, Linear.app, Stripe's homepage
restraint, Braun's Dieter Rams product photography discipline. The common thread:
**one hero idea per screen, generous negative space, typography doing most of the
emotional work, colour used as punctuation, not wallpaper.**

---

## 1.2 Colour System

### Core palette (final — see `00-INDEX-OVERVIEW.md §0.5`)

| Token | Hex | Role |
|---|---|---|
| `--brand-blue` | `#00AAFF` | Gradient stop 1 · primary accent for interactive elements (links hover, active states) |
| `--brand-pink` | `#F91CB1` | Gradient stop 2 · used in gradient only, never as a solid fill on its own except tiny accents (icon strokes, tags) |
| `--brand-yellow` | `#FDE40D` | Gradient stop 3 · rarest colour on the page — reserve for a single "aha" moment (e.g. the free-demo badge, a live status dot) |
| `--brand-black` | `#010000` | Primary text colour, primary logo colour, footer background |

### Neutrals (do the actual work of the page)

| Token | Hex | Role |
|---|---|---|
| `--white` | `#FFFFFF` | Page background, primary surface |
| `--grey-50` | `#FAFAFA` | Section background alternation (never pure white on white on white — alternate for rhythm) |
| `--grey-100` | `#F2F2F3` | Card surfaces, subtle dividers |
| `--grey-300` | `#D8D8DC` | Borders, hairlines |
| `--grey-500` | `#8A8A93` | Secondary/supporting text |
| `--grey-700` | `#48484F` | Tertiary emphasis text (between black and grey-500) |

### The Brand Gradient

```css
--brand-gradient: linear-gradient(135deg, #00AAFF 0%, #F91CB1 55%, #FDE40D 100%);
```

**Usage law:** the gradient is a *signature moment*, not a background pattern. Budget:
maximum **3 uses** of the full three-stop gradient across the entire page:

1. The "P" ribbon mark in the logo (already baked into `logo.png` — never recreate it).
2. One hero moment — the live QR/TOTP ring or a single accent line under the hero
   headline (see `04-UI-COMPONENTS-INTERACTIONS.md`).
3. The primary CTA button's hover/active state only (resting state is solid black).

Everywhere else, colour is used as a **single accent hue at low-opacity or as a
1–2px line**, never as a filled block competing with the product screenshots.

### What NOT to do with colour
- Never place large flat gradient panels behind text blocks (this is the #1
  "AI template" tell — see `06-ANTI-PATTERNS-DO-NOT.md`).
- Never use the gradient on body copy text (gradient text on paragraphs is banned;
  reserved exclusively for the wordmark treatment already in the logo).
- Never introduce a colour not listed above. No "for depth" purples, no random
  teals for icons.

---

## 1.3 Typography

**Primary typeface: Poppins** (per brand sheet, geometric sans, confident but warm).
**System/UI fallback: Inter.** Use Inter *only* for dense functional UI-style text
if it ever appears (e.g. inline code, session tokens shown as product proof) — never
for headlines.

### Type scale (desktop baseline, fluid via clamp())

| Role | Font / Weight | Size (desktop) | Size (mobile) | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero headline (H1) | Poppins SemiBold (600) | 72px / clamp(40px,7vw,72px) | 40px | 1.05 | -0.02em |
| Section headline (H2) | Poppins SemiBold (600) | 44px | 30px | 1.1 | -0.01em |
| Sub-headline / lede | Poppins Regular (400) | 22px | 18px | 1.5 | 0 |
| Card title (H3) | Poppins Medium (500) | 20px | 18px | 1.3 | 0 |
| Body copy | Poppins Regular (400) | 17px | 16px | 1.65 | 0 |
| Small / caption / eyebrow | Poppins Medium (500), uppercase | 13px | 12px | 1.4 | 0.12em |
| Button label | Poppins SemiBold (600) | 16px | 16px | 1 | 0.01em |

### Typographic rules
- **Never** use more than 2 weights on one screen at once (e.g. SemiBold headline +
  Regular body — do not also throw in Bold or Light for "variety").
  Uppercase eyebrow labels (Medium, tracked) are the exception — they're a layout
  device, not a competing weight.
- Headlines are always **sentence case**, never Title Case, never ALL CAPS (the
  tagline "PRINTING. AUTOMATED." is the one deliberate exception — it's a lockup,
  not a headline).
  Justification: title-case marketing headlines read as generic SaaS-template
  voice; sentence case reads as considered, human copywriting.
- Max text line length: **65–75 characters** for body copy, **~40 characters** for
  headlines at large sizes. If a headline wraps to 4+ lines on desktop, the copy
  is too long — go back to `02` and cut it, don't shrink the font to fit.
- No justified text, ever. Left-aligned only (centre-align permitted only for
  standalone hero headline + lede, nothing else).

---

## 1.4 Logo Usage

- Use `logo.png` (transparent background version) exactly as supplied. Never
  recolour it, never recreate the "P" ribbon mark in CSS/SVG from scratch, never
  add a drop shadow, glow, or outline to it.
- Minimum clear space around the logo = the height of the "P" mark itself, on all sides.
- Minimum digital size: 28px mark height. Never scale below that.
- On the light background (the entire site), always use the full-colour lockup —
  never the black-only or white-on-black reversed variant shown in `brand-asset.png`,
  those are for merch/dark contexts only.
- The tagline "PRINTING. AUTOMATED." travels with the logo in the header at full
  size but may be dropped in the sticky/scrolled-state mini header (logo mark +
  wordmark only, no tagline) to save vertical space.

---

## 1.5 Spacing System

8px base unit. This is the single most important restraint for "not looking
AI-generated" — generous, *consistent* whitespace is the tell of real design taste.

```
--space-1: 8px    --space-5: 64px
--space-2: 16px   --space-6: 96px
--space-3: 24px   --space-7: 128px
--space-4: 40px   --space-8: 192px
```

| Context | Value |
|---|---|
| Section vertical padding (desktop) | `--space-8` (192px) top and bottom, minimum |
| Section vertical padding (mobile) | `--space-6` (96px) top and bottom, minimum |
| Max content width | 1200px, centred, with min 24px side gutters on mobile, 80px on desktop |
| Gap between related elements (e.g. icon + label) | `--space-2` |
| Gap between unrelated elements (e.g. two cards) | `--space-4` to `--space-5` |
| Paragraph-to-heading gap | `--space-3` |

**Rule of thumb:** if two elements aren't in the same conceptual group, the gap
between them should look deliberate, almost uncomfortable to an over-cautious eye.
Cramped sections are the second biggest "template" tell after gradient-panel abuse.

---

## 1.6 Iconography

- Custom line-icon set, **single consistent stroke weight (1.5px)**, rounded caps,
  22×22px or 24×24px grid, monochrome (`--brand-black` or `--grey-500`, never
  multi-coloured icon sets, never filled/solid icon style mixed with line style).
- Icons should be built as simple, purpose-specific glyphs tied directly to real
  product concepts already visible in the screenshots — a QR-code glyph, a
  print-page glyph, a UPI/payment glyph, a printer glyph, a shield (for the "your
  file is deleted" privacy promise). **Do not use generic stock icon packs**
  (no Font Awesome/Material default icon look — those read instantly as
  template output). If a licensed icon library must be used as a base, every icon
  gets its stroke weight and corner radius normalized to match the custom set —
  no mixed icon families on one page.
- One icon may use the brand gradient as a stroke, maximum, per the gradient budget
  in §1.2 — reserve it for whichever icon anchors the single most important claim
  (recommend: the privacy/shield icon next to the "we delete your file" promise,
  since trust is the actual conversion blocker for a public print kiosk).

---

## 1.7 Imagery & Product Screenshots

This product already has a real, working UI — the biggest unlock available to this
website is refusing to illustrate what can be *shown*.

- Product screenshots (`Screenshot_2026-08-17_*.png`) are placed inside a
  **consistent device frame treatment**: a soft, thin (1px `--grey-300`) rounded-
  corner window frame with a subtle drop shadow (`0 24px 64px rgba(1,0,0,0.08)`),
  echoing the macOS-style traffic-light dots already visible in the Admin
  screenshot — do not invent a different chrome, use what the screenshot already
  shows as the reference.
- The kiosk render (from `brand-asset.png`, the physical white-and-black terminal
  with the screen showing the app) should be cropped/isolated (drop-shadowed,
  transparent background) and used **once**, ideally as the hero visual, since it's
  the only asset that shows the *physical* product a franchisee is actually buying.
- Never crop a screenshot mid-UI-element in a way that looks accidental. Full
  windows or deliberately, cleanly cropped close-ups (e.g. just the QR + PIN card
  from the Display screenshot) only.
- No stock photography of "a person on their phone" or "a generic office" anywhere
  on this site. If a human presence is needed, it should be a simple line-drawn
  hand/phone glyph in the icon style (§1.6), not a photo.

---

## 1.8 Motion & Animation Tokens

**Governing rule: motion clarifies state, it never decorates.** Every animation on
this page should be answerable with "what did this movement tell the user that was
true?" If the answer is "nothing, it just looks nice," cut it.

| Token | Value | Use |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default for all transitions — a soft decelerate, not a bounce |
| `--duration-fast` | 160ms | Hover states, button presses |
| `--duration-base` | 320ms | Section reveals, card entrances |
| `--duration-slow` | 600ms | Hero load-in only |

### Permitted motion (the entire list — nothing outside this list)
1. **On-scroll reveal:** content fades up 12–16px with `--duration-base`, staggered
   40–60ms per sibling element, triggered once (never re-triggers on scroll-back).
2. **Hero load-in:** logo/headline/CTA sequence in on page load only, `--duration-slow`,
   staggered.
3. **Button/link hover:** colour or background shift only, `--duration-fast`. No scale
   transforms above 1.02, no bounce/elastic easing anywhere in the whole site.
4. **The TOTP countdown ring** (mirroring the real product's live-code UI shown in
   the Display screenshot) as a small looping animated component in the "how it
   works" section — this is a *justified* piece of "flair" because it's literally
   demonstrating real product behaviour, not decoration.
5. **Sticky header shrink:** header height and logo scale down subtly on scroll past
   the hero (`--duration-base`), background gains a 1px bottom hairline + soft blur
   backdrop.

### Explicitly forbidden motion
- Parallax scrolling of background shapes/blobs.
- Auto-playing looping "particle" backgrounds or gradient blob animations.
- Text that types itself out character-by-character.
- Scroll-jacking / full-page-snap scroll-hijacking sections.
- Cursor-follow effects, magnetic buttons, or 3D tilt-on-hover cards.
- Counting-up number animations for stats unless the number is real and sourced
  (no inventing "10,000+ prints" — see `02-CONTENT-NARRATIVE-COPY.md` for what
  numeric claims are actually allowed).

---

## 1.9 Corner Radius, Elevation & Surfaces

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | Buttons, tags, small chips |
| `--radius-md` | 16px | Cards, form inputs |
| `--radius-lg` | 24px | Large image/screenshot frames, hero panels |
| `--shadow-soft` | `0 1px 2px rgba(1,0,0,0.04), 0 8px 24px rgba(1,0,0,0.06)` | Cards at rest |
| `--shadow-lifted` | `0 24px 64px rgba(1,0,0,0.10)` | Hero device render, hover state on cards |

No glassmorphism (frosted-glass panels), no neumorphism (soft-embossed UI), no
hard drop shadows with visible offset — shadows are always soft, diffuse, and
low-opacity black, never colour-tinted.

---

## 1.10 Design Token Summary (for direct CSS variable implementation)

```css
:root {
  /* Brand */
  --brand-blue: #00AAFF;
  --brand-pink: #F91CB1;
  --brand-yellow: #FDE40D;
  --brand-black: #010000;
  --brand-gradient: linear-gradient(135deg, #00AAFF 0%, #F91CB1 55%, #FDE40D 100%);

  /* Neutrals */
  --white: #FFFFFF;
  --grey-50: #FAFAFA;
  --grey-100: #F2F2F3;
  --grey-300: #D8D8DC;
  --grey-500: #8A8A93;
  --grey-700: #48484F;

  /* Type */
  --font-brand: 'Poppins', sans-serif;
  --font-ui: 'Inter', sans-serif;

  /* Spacing */
  --space-1: 8px;  --space-2: 16px; --space-3: 24px; --space-4: 40px;
  --space-5: 64px; --space-6: 96px; --space-7: 128px; --space-8: 192px;

  /* Radius */
  --radius-sm: 8px; --radius-md: 16px; --radius-lg: 24px;

  /* Shadow */
  --shadow-soft: 0 1px 2px rgba(1,0,0,0.04), 0 8px 24px rgba(1,0,0,0.06);
  --shadow-lifted: 0 24px 64px rgba(1,0,0,0.10);

  /* Motion */
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 160ms;
  --duration-base: 320ms;
  --duration-slow: 600ms;
}
```
