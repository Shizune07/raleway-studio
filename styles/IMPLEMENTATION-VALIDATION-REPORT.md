# Implementation Validation Report
**Raleway Studio — Live Site vs. Frozen Documentation**
**Date:** 2026-07-16
**Evaluator methodology:** Codebase review — `layout.tsx`, `globals.css`, `page.tsx`, `about/page.tsx`, `services/page.tsx`, `Navbar.tsx`, `Footer.tsx`, compared against Pillars I–V (CLAUDE.md, Design System documentation, Component Library)
**Classification system:** A = Implementation Error (fix immediately) | B = Specification Gap | C = Implementation Improvement | D = Personal Preference (rejected)

> Every finding quotes the exact principle being evaluated, explains success or failure, and carries a confidence rating 1–10.
> No new philosophy has been introduced. The philosophy is complete. This report protects it during implementation.

---

## 1. Critical Violations

*Must resolve before launch. Classification: A — Implementation Error.*

---

### CV-01 · [A] — The design system is not active on the live site
**Confidence: 10/10**

**Principle evaluated:**
> "Always build scalable systems. Avoid one-off solutions when reusable components are possible. Prioritize: Maintainability." (CLAUDE.md — Technical Philosophy)

**Finding:**
`layout.tsx` imports `./globals.css`. The `styles/` directory — containing tokens.css, main.css, all 9 components, motion.css, and accessibility.css — is not imported anywhere in the application. The design system that has been specified, validated, and completed through Phases 1–6 does not govern any page the visitor sees.

The live site runs on a bespoke `globals.css` with its own token names (`--primary`, `--radius`, `--shadow`, `--transition`), its own font stack (Raleway + Inter), and its own component classes that have no relationship to the design system.

**Result:** Failure. The scalable system exists but is disconnected. The live site is the one-off solution the design system was built to replace.

**Fix:**
```tsx
// layout.tsx — replace:
import './globals.css'
// with:
import '@/styles/main.css'
```
Then audit each page component to replace `globals.css` class names with design system classes. `globals.css` should be deprecated and eventually deleted.

---

### CV-02 · [A] — Orange is used everywhere, not at threshold moments
**Confidence: 9/10**

**Principle evaluated:**
> "Rule 07 — Orange Exclusivity: `--colour-accent` only at threshold CTAs and focus rings. Nowhere else." (Document Architecture Rule 07)
> "Whitespace is valuable. Simplicity is sophistication. Every element must have a purpose." (CLAUDE.md — Brand Philosophy)

**Finding:**
In `globals.css`, `--primary: #C04300` (the accent orange) is applied to:
- Section labels (`.section-label { color: var(--primary); }`)
- Eyebrow tags across every page (`.hp-hero__eyebrow`, `.about-hero__eyebrow`, `.hp-why__eyebrow`, `.hp-proof__eyebrow`, `.about-standards__label`, `.about-team__role`, `.about-member__role`)
- The active nav link state
- Footer social hover
- Testimonial star ratings
- Blog card tags
- Pricing card prices
- Form focus states
- All primary buttons throughout the site

Orange appears on nearly every section of every page. When orange is everywhere, it signals nothing. The Threshold moment — the one deliberate CTA asking the visitor to act — carries exactly the same visual weight as a section label or a blog tag.

**Result:** Failure. The most architecturally significant rule in the design system is inverted on the live site. The accent is decorative, not decisive.

---

### CV-03 · [A] — Decoration without philosophical justification
**Confidence: 9/10**

**Principle evaluated:**
> "Avoid unnecessary effects. Avoid visual noise. Less — but better. Every element must have a purpose." (CLAUDE.md — Design Standards)
> "Prefer: Minimal layouts. Purposeful animations." (CLAUDE.md — Design Standards)

**Finding:**
`globals.css` contains the following visual decisions with no philosophical justification in the frozen documentation:

- `--radius: 10px; --radius-lg: 18px` — applied to cards, buttons, nav dropdowns, form inputs, badges
- `--shadow: 0 4px 24px rgba(30,30,30,0.08); --shadow-lg: 0 8px 40px rgba(30,30,30,0.14)` — applied to cards on hover, nav bar, dropdowns, pricing cards
- `.service-card:hover { transform: translateY(-4px); }` — decorative hover lift with no semantic function
- `.blog-card:hover { transform: translateY(-4px); }` — same
- `.pricing-card--featured { transform: translateY(-8px); }` — static transform to suggest "featured" status
- `.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,120,74,0.35); }` — orange glow on hover
- `.nav { box-shadow: 0 2px 12px rgba(30,30,30,0.06); }` — ambient navbar shadow
- Border-radius 50px on all buttons — pill shape with no typographic or spatial rationale

None of these exist in the design system. The nav has `border-bottom: 1px solid var(--border)` and a box-shadow. The design system's navbar is flush, no shadow, no border unless scrolled.

**Result:** Failure. The visual language communicates "capable web agency template" rather than "premium, considered design studio." These decorative choices undercut the positioning the copy establishes.

---

### CV-04 · [A] — Typography system is wrong at the foundation
**Confidence: 10/10**

**Principle evaluated:**
> "Strong typography. High readability." (CLAUDE.md — Design Standards)
> Pillar IV — Typography System: DM Serif Display (editorial weight, optical sizing) + DM Sans (UI weight, precision)

**Finding:**
The live site uses:
```css
body { font-family: var(--font-inter), 'Inter', sans-serif; }
h1,h2,h3,h4,h5 { font-family: var(--font-raleway), 'Raleway', sans-serif; font-weight: 700; }
```

Headers are Raleway weight 700. Body is Inter. No optical sizing. No weight 300 editorial headlines. No `font-variation-settings`. The typescale uses `clamp()` values rather than the fixed design system scale.

The design system's typographic architecture is built on a specific split: DM Serif Display (the editorial voice — trust, longevity, weight) vs. DM Sans (the functional voice — clarity, precision, legibility at small sizes). Raleway + Inter is a competent pairing but it does not carry the semantic architecture of the design system's typographic system. The editorial voice of a studio headline should feel categorically different from a navigation label. On the live site, both are Raleway.

**Result:** Failure. The typographic foundation cannot be corrected with CSS adjustments alone — it requires font loading changes in `layout.tsx` and full token adoption.

---

### CV-05 · [A] — Services page is a credibility threat
**Confidence: 10/10**

**Principle evaluated:**
> "Every deliverable should communicate: Professionalism, Organization, Reliability, Attention to detail, Premium quality." (CLAUDE.md — Client Experience)
> "Think beyond the requested task. Look for opportunities to improve the client's business." (CLAUDE.md — Client Experience)

**Finding:**
The services page (`services/page.tsx`) currently:
1. Uses stock photography from `static.wixstatic.com` — Wix's CDN — as the card images for every service
2. Presents services in a grid of image cards (`services-grid` — `repeat(auto-fill, minmax(280px, 1fr))`)
3. Describes services with generic copy ("Modern, responsive websites built to represent your brand clearly and convert visitors into clients")
4. The metadata title reads "Web Design, SEO & Digital Services" — the word "digital services" is the least differentiated phrase in the industry

A studio whose core promise is closing the perception gap between a business's real quality and its visible presence is presenting its own services with stock photos from a competitor's CDN and generic descriptions that could belong to any agency in any country.

**Result:** Failure. This is the most externally visible credibility gap on the site. A prospective client who navigates to services after reading the homepage copy will experience immediate cognitive dissonance.

---

### CV-06 · [A] — Hero is a two-column grid, not a full-height lower-anchored cover
**Confidence: 10/10**

**Principle evaluated:**
> "Component 08 — Hero: Cover variant using `--cover-arrival` (100svh min-height). Lower-anchored layout. Content sits at the bottom of the viewport." (Pillar IV Component Library)
> "A website is not a collection of pages. It is a business tool. Every page should answer: What does the visitor need? What builds trust?" (CLAUDE.md — Website Philosophy)

**Finding:**
`globals.css` defines `.hero__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }`. The hero is a split-column layout with an image on the right (`.hero__image { display: none !important; }` at mobile — meaning the right column is empty or contains a placeholder that's hidden).

The live home page actually does NOT use the generic `.hero` class — it uses `.hp-hero` (a custom class) which is a full-width single-column section with a long-form headline poem. This is structurally closer to the design system's Hero intent than the generic hero CSS suggests.

However, `.hp-hero { padding: 8rem 0 7rem; background: var(--white); }` — it is not full-height. It does not occupy 100svh. It does not use a lower-anchor. It is a conventional padded section.

**Result:** Failure on the spec. Partial success on editorial intent — the homepage's long-form headline poem is philosophically aligned but architecturally not the full-height cover arrival moment the design system specifies.

---

## 2. Specification Gaps

*Situations the frozen documentation does not resolve. Classification: B.*

---

### SG-01 · [B] — About page founder section has no defined styles
**Confidence: 8/10**

**Finding:**
`about/page.tsx` uses classes `about-founder`, `about-founder__inner`, `about-founder__portrait`, `about-founder__placeholder`, `about-founder__content`, `about-founder__name`, `about-founder__title`, `about-founder__quote`, `about-founder__cta` — none of which are defined in `globals.css`. The `globals.css` about section ends with `.about-member` patterns.

This means the about page founder section is currently rendering with no styles beyond browser defaults.

**Recommended amendment:** Define these styles, or (preferred) migrate the about page to the design system and use the existing Component 06 (Testimonial) + primitive patterns rather than a bespoke founder section.

---

### SG-02 · [B] — Navigation links reference routes that may not exist
**Confidence: 6/10**

**Finding:**
`Navbar.tsx` links to `/method` and `/work`. Neither `app/method/` nor `app/work/` appear in the directory structure audited. If these routes 404, they create a broken navigation experience.

`page.tsx` also links to `/start` (in `hp-cta__primary`) and `/thinking`. These also were not confirmed in the directory audit.

**Recommended action:** Audit all routes in `Navbar.tsx` and `page.tsx` against the actual `app/` directory. Create pages or update links before launch.

---

### SG-03 · [B] — Charity note has no design system equivalent
**Confidence: 7/10**

**Finding:**
The footer contains: "For every project completed, 5% of revenue is donated to non-government animal shelters." This is a human, differentiating element that builds trust and communicates values. The design system's Component 07 (Footer) does not have a slot for this.

When the design system is integrated, this element must be preserved. Its absence from the component spec means it has no defined typographic treatment, placement, or spacing relative to the brand statement.

**Recommended amendment:** Add a `footer-mission` slot to Component 07 specification with explicit typography and spacing rules.

---

## 3. Implementation Improvements

*Do not implement automatically. Classification: C.*

---

### II-01 · [C] — Homepage copy is the strongest asset; the visual system should support it, not compete
**Confidence: 9/10**

**Finding:**
The homepage content is exceptional. The opening section ("There is a specific kind of struggle that looks like a branding problem. Or a marketing problem. Or a website problem. It is none of these things.") is differentiated, substantive, and directly expresses the studio's philosophical positioning. The diagnosis section, the proof-of-thinking section, and the qualifier CTA ("We don't work with every business") all build on each other logically.

This copy would perform significantly better set in the design system's typographic language — DM Serif Display at display scale for the opening headline, near-achromatic field, generous section padding, no competing orange eyebrow tags — because the words deserve a visual environment that lets them carry full weight. Currently, the visual system competes with the copy by adding decorative elements that fragment attention.

**Recommended approach:** Prioritise the homepage as the first page migrated to the design system.

---

### II-02 · [C] — The about page "Standards" section is the site's strongest visual section
**Confidence: 8/10**

**Finding:**
`about-standards` uses `background: var(--dark)` — the near-achromatic dark field — with white text. The four standards ("Clarity over decoration", "Timeless over trending", "Systems over shortcuts", "Trust over impressiveness") are direct, undecorated, and credible. This section comes closest to the design system's intended feel: dark field, minimal, typographic.

The design system migration should treat this section as proof that the visual direction works — it is already doing what the system specifies.

---

### II-03 · [C] — The footer brand statement is the best copy on the site
**Confidence: 9/10**

**Finding:**
`Footer.tsx` line 29: "We help good businesses be seen for what they are."

This is the most concise, accurate, and credible articulation of the studio's position anywhere on the site. It should be promoted. The current footer renders it at `font-size: 0.9rem; color: rgba(255,255,255,0.75)` — muted, subordinated to the logo.

When migrated to the design system, this line should carry more typographic weight. It is the studio's position statement, not a descriptor.

---

## 4. Personal Preferences Rejected

*Classification: D — unsupported by existing philosophy.*

---

### D-01 · [D] — Argument: primary CTA should be orange throughout the site
**Rejected.**

Some will argue that using a dark (`--dark`) fill for the nav CTA button ("Start") and the homepage final CTA (`.hp-cta__primary`) makes the CTA harder to find. The correct response: Rule 07 (Orange Exclusivity) is not a preference — it is an architectural decision. The scarcity of orange is what gives the Threshold moment its weight. Orange on the nav button means orange has already fired before the visitor has read anything. The dark CTA in these positions is correct.

---

### D-02 · [D] — Argument: the homepage is too text-heavy; needs imagery
**Rejected.**

The homepage has no photography, no illustration, and no diagram. Some will call this a weakness. Against the frozen philosophy, it is a strength: "Whitespace is valuable. Simplicity is sophistication." The text-heavy approach forces the copy to carry the positioning, which tests whether the copy is strong enough. It is. Adding imagery before the copy is proven would introduce a dependency and potentially dilute the signal.

---

### D-03 · [D] — Argument: pill-shaped buttons are more approachable
**Rejected.**

`globals.css` uses `border-radius: 50px` on buttons. The design system uses no border-radius on primary buttons — the button is a rectangle. The pill shape is a UX convention borrowed from consumer mobile apps. For a premium B2B studio, the rectangle is more appropriate: it signals precision, not friendliness. The current pill shape is a personal preference that conflicts with "Timeless over trending."

---

## 5. Launch Readiness Score

**Overall: 34 / 100**

| Dimension | Score | Reasoning |
|---|---|---|
| Content quality (homepage, about) | 8/10 | Copy is strong, differentiated, and philosophically aligned |
| Content quality (services, other pages) | 3/10 | Stock photos, generic descriptions, possible broken routes |
| Typographic system | 2/10 | Wrong font stack, no optical sizing, no editorial/UI split |
| Colour system | 2/10 | Orange used everywhere, inverts Rule 07 |
| Design philosophy compliance | 2/10 | Shadows, border-radius, hover lifts, pill buttons — all decoration without justification |
| Design system integration | 0/10 | Not active. styles/ directory entirely disconnected from the app. |
| Technical correctness | 6/10 | Next.js + Sanity architecture is sound; schema.org markup present; font loading correct |
| Credibility signals | 5/10 | Founder narrative is genuine; charity note is human; but services page undercuts |
| Navigation / routing | 4/10 | Links to /method, /work, /start, /thinking — routes unconfirmed |

The score is low not because the studio lacks capability or positioning — the copy proves both. The score is low because the visual implementation does not yet deliver on what the copy promises.

---

## 6. The Single Biggest Weakness

**The site is making a promise it cannot yet visually keep.**

The homepage opens with: *"There is a specific kind of struggle that looks like a branding problem. Or a marketing problem. Or a website problem. It is none of these things."*

This copy is asking the visitor to trust that Raleway Studio sees something other agencies miss — that the problem is perception, not product. It is a high-intelligence position that signals genuine diagnostic thinking.

Then the visitor scrolls, and the visual language says: rounded buttons with orange hover glows, card shadows, service photos from Wix, and section labels in orange on every page.

The studio's copy diagnoses exactly the problem the studio's own visual design has. The gap between what Raleway Studio genuinely is — evidenced by the quality of its thinking, its copy, its philosophy — and what the world can currently see it to be — evidenced by the visual system currently running on the live site — is the gap the studio exists to close for others.

The design system built in Phases 1–6 is the solution. The typography, the near-achromatic field, the Orange Exclusivity rule, the lower-anchored hero, the threshold moment — all of it was designed precisely to translate the studio's intellectual positioning into a visual language that earns the same trust the copy promises.

The single necessary action: integrate `styles/main.css` into `layout.tsx`, migrate the homepage first, and let the visual system match the argument.

Until then, the site is doing to Raleway Studio exactly what Raleway Studio tells clients their current sites are doing to them.

---

*Implementation Validation Report — Complete*
*Phases 1–6: Design system built, audited, and v1.1 candidates produced*
*Phase 7 (implicit): Integrate the design system into the live Next.js application*
