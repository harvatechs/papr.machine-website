# 02 — Content, Narrative & Copy

Companion to `01-BRAND-DESIGN-SYSTEM.md`. This file contains the actual words for
the site, section by section, in build order. Voice reference: Steve Jobs-era
Apple product copy — short declarative sentences, plain words, confidence without
adjectives doing the heavy lifting, one idea per sentence, no jargon, no exclamation
points, no "revolutionary."

**Copy law:** every claim on this page must be a claim the product can actually back
up from the PRD. No invented stats, no invented customer logos, no invented reviews.
Where a number would normally go ("10,000+ documents printed"), and no real number
exists yet, the copy leans on *mechanism* instead of *scale* — explain what happens,
don't fabricate how many times it has happened. This is more convincing, not less.

---

## 2.1 Voice Rules (apply to every line below)

- Sentences average 8–14 words. Break long ideas into two short sentences before
  writing one long one.
- No em-dash-chained marketing sentences ("Fast. Simple. Powerful. — the future of
  printing"). One idea, stated plainly, then stop.
- Never say "revolutionary," "game-changing," "seamless," "cutting-edge,"
  "leverage," "empower," "unlock," "elevate," "next-level," or "solution" (as a
  noun standing in for "product"). These are banned words — if the draft contains
  any of them, rewrite.
- Address the reader as "you." Talk about what happens to *them*, not about the
  company's achievements.
- Every section headline should be understandable with zero context — a person
  reading only the H2s down the page should be able to explain the product to
  someone else.

---

## 2.2 Meta / SEO

```
Title: Papr.Machine — Printing. Automated.
Meta description: Scan a QR code, upload your file, pay, and collect a print —
  with no staff, no software to install, and no waiting in line. Papr.Machine is
  the self-service printing kiosk built by Tilak Infotech.
```

---

## 2.3 Section 1 — Header (sticky)

**Structure:** logo (left) · anchor nav (center, desktop only) · two CTAs (right).

Nav links (anchor scroll, not routes):
```
How it works   The kiosk   For business   Get the demo
```

CTA pair (present in header from first scroll onward):
```
[ Talk to us ]        (ghost/outline button)
[ Get the free demo ] (solid black button, gradient on hover)
```

---

## 2.4 Section 2 — Hero

**Layout note:** headline + lede + CTA pair, left-aligned or centered per `04`,
with the isolated kiosk render (from `brand-asset.png`) as the dominant visual —
see `01 §1.7`.

```
Eyebrow: PRINTING. AUTOMATED.

Headline:
No counter. No staff. No waiting.

Lede:
Papr.Machine turns any wall into a fully automated print shop.
Your customer scans a code, uploads a file, pays, and walks away
holding a finished print — in about the time it takes to read this.

[ Get the free demo ]   [ Talk to us ]

Micro-caption under CTAs (small, grey-500):
Free demo. No sign-up. Runs on your own machine in minutes.
```

**Why this works / do not deviate:** the headline states the *absence* of friction
(no counter, no staff, no waiting) rather than a vague superlative. It's provably
true from the PRD (zero staff interaction, Section 1). Concrete beats grand.

---

## 2.5 Section 3 — The Problem (short, one paragraph, sets stakes before the reveal)

```
Eyebrow: THE OLD WAY

Headline:
Printing one page still takes fifteen minutes.

Body:
Walk in. Explain what you need. Wait for someone free. Watch them
get it wrong once. Pay in cash because the card machine is "acting
up today." Walk out later than you meant to — for one page.

That's not a printing problem. That's a staffing problem wearing a
printing costume.
```

Keep this section short — 4 sentences max in the body. It exists purely to make the
next section land harder. Do not let this section run longer than the hero.

---

## 2.6 Section 4 — How It Works (the core product explainer, most important section)

**Layout:** numbered horizontal steps (3–4 steps) each paired with a real product
screenshot crop — this is where the Display screenshot (QR + PIN + countdown ring)
earns its place, alongside a mobile-frame mock of the customer flow if one becomes
available; if not, use the Display screenshot as the anchor visual for steps 1–2 and
describe steps 3–4 in text-only cards.

```
Eyebrow: HOW IT WORKS

Headline:
Four steps. Zero explaining.

Step 01 — Scan
A QR code and a live 4-digit code sit on the kiosk screen at all
times. Point a phone camera at it. That's the whole login.

Step 02 — Upload & choose
Upload the file from your phone. Pick color or black-and-white,
how many pages per sheet, single or double-sided. The kiosk shows
a live preview before anything prints.

Step 03 — Pay
Scan a UPI code, pay from the phone, done. No card machine, no
change, no "sorry, cash only."

Step 04 — Collect
The kiosk prints. A token number appears for reference. The file
is deleted the moment the job completes — nothing is stored,
nothing is kept.
```

**Callout strip directly under the steps** (single line, sets up the trust section
that follows):
```
Your file never leaves the session. It's gone the second your print is done.
```

---

## 2.7 Section 5 — Trust / Privacy (short, high-confidence, standalone)

This section exists because a public kiosk asking a stranger to upload a personal
document is the single biggest psychological blocker to adoption — address it
directly and briefly, don't bury it in a FAQ.

```
Eyebrow: YOUR FILE, NOT OURS

Headline:
We built this to forget you.

Body:
Every session is locked to a one-time code. Nothing is tied to your
name, your number, or your face. The moment your document prints —
or the session times out — the file is permanently deleted. Not
archived. Not backed up. Gone.
```

(Icon: the gradient-stroke shield icon from `01 §1.6` sits beside this block.)

---

## 2.8 Section 6 — The Kiosk (physical product proof)

Pairs the isolated kiosk hardware render with a short, plain description of what a
shop owner is actually buying/hosting.

```
Eyebrow: THE HARDWARE

Headline:
One screen. One printer. One quiet corner of your shop.

Body:
Papr.Machine runs on a single always-on display next to any
standard printer — CUPS or Windows-driver, nothing exotic. It
needs no attendant, no training, and no daily maintenance beyond
loading paper.

Three small supporting stat-style lines (not fabricated numbers —
capability statements instead):
— Works with the printer you already own
— Recovers from a dropped connection on its own
— Runs unattended, all day, every day
```

---

## 2.9 Section 7 — For Business / Franchise (the "collaborate with us" pitch)

This is the section that leads into the primary non-demo CTA — support, brand
integration, or franchise conversations.

```
Eyebrow: FOR SHOPS, BRANDS & FRANCHISES

Headline:
Put Papr.Machine in your space.

Body:
Whether you run one shop or you're scouting a franchise
opportunity, Papr.Machine is built by Tilak Infotech to be
dropped into a real business — not a lab demo. We handle the
setup wizard, pricing rules, and printer pairing. You handle
opening the doors.

[ Talk to us ]  (solid black button, primary CTA of this section)
```

---

## 2.10 Section 8 — Get The Free Demo (the download CTA section)

Sets clear, honest expectations for what "free" and "demo" mean — the PRD is
explicit that this is a real, working, feature-limited build, not a fake mockup.
Say that plainly; it's a differentiator, not a disclaimer to hide.

```
Eyebrow: TRY IT YOURSELF

Headline:
This isn't a preview video. It's the real thing.

Body:
Download the free demo and run the actual Papr.Machine software
on your own computer — the same Admin dashboard and kiosk Display
shown above, with a limited feature set. No account, no credit
card, no time limit on looking around.

[ Download free demo ]   (solid black → gradient on hover, primary button of whole page)

Micro-caption under button:
Windows · a few minutes to install · no data leaves your machine
```

---

## 2.11 Section 9 — Contact / Collaborate

```
Eyebrow: LET'S TALK

Headline:
Support, integration, or franchise — tell us which.

Body:
Every message reaches Tilak Infotech's product team directly. No
ticket queue.

Form fields:
  Name
  Email
  What are you reaching out about?  [dropdown: Support / Brand integration / Franchise / Something else]
  Message

[ Send message ]
```

---

## 2.12 Footer

```
Logo lockup (small)

Left column:
Papr.Machine is built and maintained by Tilak Infotech.

Center — anchor links repeated:
How it works · The kiosk · For business · Get the demo

Right — minimal contact line:
[email] · [location, city/country only, no full address]

Bottom bar (small, grey-500):
© 2026 Tilak Infotech. All rights reserved.
```

No social icon wall unless real, active accounts exist — an empty row of social
icons linking nowhere is a template tell (see `06`). Only include icons for
channels that are actually live.

---

## 2.13 Microcopy Bank (buttons, states, tiny moments — keep consistent everywhere)

| Context | Copy |
|---|---|
| Primary CTA (repeated site-wide) | `Get the free demo` |
| Secondary CTA (repeated site-wide) | `Talk to us` |
| Nav CTA pair order | Talk to us (ghost) always appears *before* Get the free demo (solid) — demo is the stronger, final ask |
| Form submit button | `Send message` |
| Form success state | `Got it. We'll reply within a couple of days.` |
| Form error state | `Something didn't send. Try again, or email us directly at [email].` |
| Scroll-to-top affordance (if used) | none — keep it invisible; use logo-click-to-top instead, don't add a floating button |
| Image alt text pattern | Describe *what the product is doing* in the screenshot, not "screenshot of app" — e.g. `"Papr.Machine kiosk display showing a live QR code and pairing PIN"` |

---

## 2.14 What Never Appears On This Page

- Fake testimonials or fabricated customer names/logos.
- Invented usage statistics ("50,000 prints and counting").
- A pricing table (pricing is configured per-merchant in Admin, per PRD §6.1 — this
  is not a productized SaaS price, don't imply one).
- Comparison-to-competitor copy naming XeroBot or any other product by name — the
  PRD lists it as an internal competitive reference, not marketing material.
- Countdown timers, "limited spots," or other urgency-manufacturing devices — they
  contradict the calm brand tone and there's no real scarcity to report honestly.
