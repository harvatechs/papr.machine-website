# 06 — Anti-Patterns: What NOT To Build

**Read this before writing a single line of code.** Every item below is a named,
specific pattern that makes a website instantly recognizable as generic AI-tool
output. This list exists because "make it not look AI-generated" is otherwise an
unenforceable instruction — this file makes it enforceable by naming the exact
tells and giving the specific alternative used elsewhere in this documentation set.

---

## 6.1 The Generic Hero Tells

❌ **Don't:** Center-stack headline + subhead + two pill buttons over a full-bleed
gradient blob or mesh-gradient background, with a floating 3D illustration/isometric
graphic that has nothing to do with the real product.

✅ **Do:** Use the real kiosk hardware render as the hero visual (`01 §1.7`, `04 §4.4`).
The product already exists and looks good — never substitute an abstract illustration
for a real screenshot when a real screenshot is available.

❌ **Don't:** A headline like "The Future of Printing, Reimagined" or "Revolutionizing
How You Print" — abstract, adjective-driven, says nothing concrete.

✅ **Do:** "No counter. No staff. No waiting." — concrete, provable, specific to
this product (`02 §2.4`).

---

## 6.2 The Gradient-Everywhere Tell

❌ **Don't:** Gradient text on every headline. Gradient background blobs behind
every section. Gradient borders on every card. Gradient icon backgrounds on every
feature tile. This is the single most common "built with an AI page generator"
signature — when every section reaches for the same three-colour gradient, it
reads as decoration compensating for a lack of real design decisions.

✅ **Do:** Follow the strict 3-use gradient budget in `01 §1.2`. If asked "should
this element get the gradient," the default answer is no.

---

## 6.3 The "Bento Grid of Icon Cards" Tell

❌ **Don't:** A 3×2 or 4×2 grid of identical rounded cards, each with a generic
line icon in a soft-colour circle, a bold 3-word title, and one sentence of vague
copy ("Fast", "Secure", "Reliable" — features described as adjectives with no
mechanism). This layout is now so common in AI-generated sites it reads as a
template signature on sight, regardless of what's written inside the cards.

✅ **Do:** The "How It Works" section uses **numbered, sequential steps** paired
with real screenshots (`04 §4.6`) — a narrative sequence, not an unordered feature
grid. Where a grid genuinely is the right layout (e.g. the three capability lines
in the Kiosk section), keep it to plain text lines with a minimal marker, not
icon-in-a-circle cards, and keep the copy specific (`02 §2.8` — "works with the
printer you already own," not "compatible").

---

## 6.4 The Fabricated Social Proof Tell

❌ **Don't:** A "Trusted by 500+ businesses" strip with generic placeholder or
invented company logos. Fake testimonial cards with stock headshots and generic
quotes ("This changed everything for our business!" — Sarah K.). A live-updating
"X prints completed today" counter with an invented starting number.

✅ **Do:** No fabricated numbers or names anywhere (`02 §2.14`). Trust is earned
here through **mechanism transparency** (the Trust/Privacy section, `02 §2.7`) and
**real product screenshots**, not manufactured social proof. This is explicitly
called out in the content doc — do not "improve" the copy by adding numbers later.

---

## 6.5 The Over-Animated Tell

❌ **Don't:** Text that types itself letter by letter. Numbers that count up from
zero on scroll. Cards that tilt in 3D on mouse-move. Buttons that scale up 110% and
glow on hover. Cursor-follow blobs. Full-bleed particle/blob background animations
looping forever. Scroll-jacked full-page-snap sections.

✅ **Do:** Follow the closed list of permitted motion in `01 §1.8` exactly. If an
animation idea isn't on that list, it doesn't ship. The test for every motion
decision: **"does this movement communicate a true fact about the product or its
state?"** The TOTP countdown ring passes this test (it demonstrates real product
behaviour). A button that scales up on hover does not.

---

## 6.6 The Generic Copy Voice Tell

❌ **Don't:** "Unlock the power of seamless, automated printing — empowering your
business to leverage cutting-edge kiosk technology for a frictionless customer
experience." (Every word here is on the banned list in `02 §2.1`.)

✅ **Do:** Short, plain, concrete sentences. Re-read `02 §2.1`'s banned-word list
before writing or approving any new copy. If a sentence could appear verbatim on
literally any SaaS landing page regardless of what the product does, rewrite it
to be specific to Papr.Machine.

---

## 6.7 The Default Icon Set Tell

❌ **Don't:** Pull straight from Font Awesome, Heroicons, or Material Icons default
styles without normalization, mixing filled and outline styles, mixing stroke
weights, using a generic "lightbulb = ideas" / "rocket = launch" / "shield =
security" cliché icon for every abstract concept.

✅ **Do:** One consistent custom stroke-icon system (`01 §1.6`), tied to literal,
concrete product concepts (QR code, printer, UPI payment) rather than abstract
metaphors wherever a literal option exists.

---

## 6.8 The Symmetrical-Everything Tell

❌ **Don't:** Every single section uses the identical centered, symmetrical
layout — headline, subhead, image, all dead-center, section after section, so the
page has no visual rhythm and every scroll feels like the same template block
repeated with different words.

✅ **Do:** Alternate layouts deliberately: Hero is asymmetric (text-left/visual-
right). Kiosk section flips it (visual-left/text-right, `04 §4.8`). Trust and
Business sections are narrower, centered, and intentionally *not* full-width, to
signal a change of pace (`04 §4.7`, `04 §4.9`). This variation is specified on
purpose — don't "simplify" it back into one repeated template during build.

---

## 6.9 The Placeholder-Content Tell

❌ **Don't:** Ship with "Lorem ipsum," `#` href links that go nowhere, social icons
linking to nothing, a form that doesn't actually submit anywhere, alt text like
`"image1.png"` or empty `alt=""` on meaningful content images.

✅ **Do:** Every link, button, and form field is functional before this is
considered done (`07-QA-LAUNCH-CHECKLIST.md`). No social icon row exists unless
the accounts are real and linked (`02 §2.12`).

---

## 6.10 The Cluttered-Density Tell

❌ **Don't:** Cram section padding down to save scroll length, resulting in a page
that feels like a compressed brochure with no room to breathe — the opposite
extreme from over-decoration, but just as much a "didn't actually design this"
signal as the gradient-blob tell.

✅ **Do:** Respect the spacing system in `01 §1.5` even when it feels like "a lot"
of empty space during build — that generous whitespace, applied *consistently*
across every section, is one of the clearest signals of intentional, human-led
design taste. Cramped spacing and over-decorated spacing are two sides of the same
mistake: neither reflects a real decision about what matters on the page.

---

## 6.11 Final Gut-Check Before Calling A Section Done

Ask, section by section:

1. Could this exact section (words, layout, imagery) be swapped onto a totally
   unrelated SaaS product's homepage without anyone noticing? → If yes, it's too
   generic. Rewrite until it's unmistakably about Papr.Machine specifically.
2. Does every visual element on screen earn its place, or is something here purely
   because "sections need an image/icon/graphic"? → Cut anything that doesn't
   earn its place.
3. Is there a real product screenshot that could replace an illustration/icon
   here? → If yes, use the screenshot.
4. Would Steve Jobs cut this sentence in half? → Cut it in half.
