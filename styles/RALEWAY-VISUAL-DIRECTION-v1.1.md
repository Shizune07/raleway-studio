# Raleway Studio — Version 1.1 Visual Direction & Art Direction

**Role:** Creative Director
**Scope:** Visual layer only — photography, imagery, composition, motion, editorial rhythm
**Explicitly out of scope:** copy, page structure, navigation, information architecture, positioning. V1.0 is frozen; nothing below proposes touching it.
**Reference aesthetic:** Pentagram, Apple, Notion, Linear, Framer, Aesop. Not a web agency.
**Grounded in:** the live V1.0 codebase — every section named below is a real section in `app/`, not a hypothetical. Every colour, spacing, and motion value referenced is a real token in `tokens.css` / `motion.css`.

---

## Before the page-by-page — the point of view

V1.0 currently ships with **zero photography**. Every page is typography, whitespace, and two surfaces (`#F6F4EF` light / `#1A1A18` dark). That was correct for V1.0 — the site had to prove the writing and the architecture could carry the business alone, without decoration doing the work language should do. It did.

V1.1 is not "add images to fill space." Adding an image to every section would be the fastest way to make this site look like every other studio site — the exact outcome the brief rejects. The job is the opposite: introduce photography and motion at a small number of high-conviction points, governed by rules strict enough that the site earns the Aesop/Linear comparison rather than reaching for it.

Four rules govern everything that follows. Every recommendation below is a consequence of these, not an independent choice.

**Rule 1 — The Hero never carries an image.** Every Hero on this site (Home, About, Method, Work, Thinking, Start) opens with a single sentence stating a problem or a stance. That sentence is the most important asset on the page. A background photograph competing for attention in the same 100svh frame — however tasteful — dilutes it, and it is the single fastest way to look like a generic agency landing page. The Hero stays exactly as built: typography on field, nothing else. This is a permanent house rule for V1.1, not a placeholder state.

**Rule 2 — One "breath" image per page, never more.** Long-form editorial pages (Vogue, The Gentlewoman, Pentagram's own site) use a single full-bleed image as a pause between reading passages — not illustration of the adjacent paragraph, just presence. Each page below gets exactly one of these, placed at a specific structural point, or explicitly none if the page doesn't earn one. This is the only new photographic pattern introduced site-wide.

**Rule 3 — Photography follows the same accent discipline as colour.** `tokens.css` already states orange appears in exactly three contexts and is "never decorative." Photography gets the same restriction: images are graded toward the site's own near-achromatic palette (warm neutrals, close to `#F6F4EF` / `#1A1A18`), never saturated, never stock-photo-blue. If orange appears inside a photograph at all, it is one real object in frame — not a graphic overlay — and it follows the one-per-viewport rule exactly like the CTA button does.

**Rule 4 — No stock photography of people, ever.** Not handshakes, not laptop-and-coffee, not diverse-team-laughing-at-whiteboard. The only people this site should photograph are Seira (real, specific, sittable-for) and, where a client case study calls for it, the client's own product/interface — never a generic model standing in for "a founder" or "a client."

The two most consequential structural facts from the live code:

The **About → Founder section** (`about-founder__portrait`) currently renders an empty `about-founder__placeholder` div — this is a real gap, not a hypothetical opportunity, and it is the single highest-leverage shot on the entire site.

The **Work page** has four real client case studies (Oneness Clinic, Amos Home Team, Manwaring Consulting, Inner Life School) with zero visuals. This is not a "photography" need — it's an interface-mockup need. Fixing it doesn't require a photoshoot; it requires screenshotting the actual delivered sites into a consistent frame system.

---

## HOME

Six sections, live in `app/page.tsx`: Hero → The Diagnosis → Why We Built Raleway → How We Think → Proof of Thinking → Threshold.

### Section 01 — Hero
**Purpose:** State the core problem in language alone.
**Visual type:** None. Typography only — see Rule 1.
**Art direction:** N/A.
**Placement:** N/A.
**Motion:** Unchanged — existing hero-entrance stagger (headline → body → CTA, 600ms, 150ms/300ms delay steps) is correct and should not be touched.
**Priority:** Hold — do not add a visual here. This is a deliberate omission, not an unfinished item.

### Section 02 — The Diagnosis
**Purpose:** Land four short paragraphs naming the visitor's specific frustration. Pure rhythm and reading pace.
**Visual type:** None.
**Art direction:** N/A.
**Placement:** N/A.
**Motion:** Unchanged (`animate-entrance`, 400ms).
**Priority:** Hold. Photography here would break the reading rhythm the copy is built on — this section works because nothing else is competing for attention while the visitor recognises themselves in it.

### Section 03 — Why We Built Raleway
**Purpose:** State the studio's founding belief.
**Visual type:** None — Section Introduction pattern, text only.
**Priority:** Hold.

### Section 04 — How We Think (the four principles)
**Purpose:** List the four operating principles as a numbered service-item list.
**Visual type:** None. This is the "Illustration System" candidate discussed below, but not for V1.1 Home — see Method page, which is the authoritative home for these principles (Home explicitly references them "briefly" per the code comments). Illustrating them twice would be redundant and would undercut Method's authority.
**Priority:** Hold on Home. Treat at Method instead (Section 03 below).

### Section 05 — Proof of Thinking
**Purpose:** The pivot moment — "we applied our method to ourselves." This is the emotional high point of the Home page and the best-earned image placement on the site.
**Visual type:** Full-bleed breath image (Rule 2). Single frame, no caption, no overlay text.
**Art direction:** A close, quiet, single-subject photograph — not of a person, but of the studio's own working material: a single annotated page from the Raleway self-audit, or a detail shot of a hand adjusting a printed layout on a desk, shot from directly above or at a shallow oblique angle. Natural window light only, slightly underexposed toward the shadows — never bright/airy "startup" lighting. Warm neutral colour grade matching `--colour-surface` (#F6F4EF) in the highlights and `--colour-ink` (#1A1A18) in the shadows — the image should look like it was lit by the same light as the page around it. No text, no logo, no laptop screen visible. Generous negative space on at least one third of the frame so the image can breathe at full width without feeling cropped-in.
**Placement:** Full-width, edge-to-edge (breaks the 1200px container), positioned immediately after the "Before we wrote a single brief..." headline and before the closing three lines of body copy — i.e., interrupts the section rather than sitting at its edge. Height: roughly 60vh on desktop, using `--frame-landscape` (16:9) as the governing ratio.
**Motion:** Slow zoom only — `scale(1.0 → 1.04)` over 12–20s, linear, no easing curve change, never reversing. This is the one place a "Ken Burns" effect is appropriate on the whole site because the image is a still-life, not a subject that can look manipulated by movement. On scroll entrance: fade-in only (`opacity 0→1`, `--motion-deliberate` 500ms), no translateY — a full-bleed image sliding in reads as a gimmick.
**Priority:** High. This is the single strongest photography opportunity on Home and should be produced first among Home's needs.

### Section 06 — Threshold
**Purpose:** Qualifier + primary CTA. Final section before Footer.
**Visual type:** None — dark field, orange CTA is already the single accent per Rule 3/tokens.css. Adding an image here competes with the one orange element the section is built around.
**Priority:** Hold.

---

## ABOUT

Seven sections, live in `app/about/page.tsx`: Hero → The Pattern → What Changed → How the Work Changed → The Standard → Founder → Threshold.

### Section 01 — Hero
**Priority:** Hold (Rule 1).

### Sections 02–05 — The Pattern / What Changed / How the Work Changed / The Standard
**Purpose:** Four consecutive narrative passages — the founder's origin story told in first person, no section breaks visually distinguished from each other.
**Visual type:** None.
**Art direction:** N/A.
**Motion:** Unchanged (`animate-entrance`).
**Priority:** Hold on all four. This is deliberate: the strength of this passage is that it reads like a single uninterrupted essay. Breaking it up with images would turn a confession into a slideshow. If any one of these four earns a visual in a future version, it should be Section 04 ("How the Work Changed") — but not in V1.1.

### Section 06 — Founder
**Purpose:** The single moment on the entire site where the studio puts a real, specific person in front of the visitor. This is the highest-leverage shot in the whole project — currently an empty placeholder div in production.
**Visual type:** Portrait photograph.
**Art direction:** Three-quarter or profile portrait, not a straight-on "corporate headshot" angle — camera at eye level or very slightly below, shot on a longer lens (85mm-equivalent look) to compress and flatter without distorting. Seira not looking directly at the lens in at least the primary candidate — looking slightly off-frame, mid-thought, unposed expression (the "caught thinking" look, not the "smiling at camera" look). Wardrobe: solid, muted, warm-neutral tones that sit inside the site's own palette family — no white shirts (they'll blow out against `#F6F4EF`), no saturated colour, no visible logos or text. Background: shallow depth of field, softly out of focus, either a plain wall in warm neutral tone or a genuinely lived-in workspace detail (edge of a desk, a window) — never a seamless studio backdrop, which reads as stock. Lighting: single soft source (window light, or one large soft key light simulating it), directional enough to model the face with real shadow — flat, shadowless beauty lighting is wrong for this brand. Crop: portrait orientation, subject occupying roughly 60–70% of frame height, generous headroom, positioned so the composition can sit in a fixed-width column beside the founder statement text without cropping awkwardly at different breakpoints.
**Placement:** Replaces `about-founder__placeholder` exactly where it lives now — beside the founder name, role, and the four `about-founder__statement` paragraphs. No layout change.
**Motion:** Scroll entrance only, matching the section's existing `animate-entrance` (fade + translateY(16px), 400ms) — do not give the portrait a different, more elaborate treatment than the text it sits beside. It should enter with the section, not perform separately from it.
**Priority:** Must Have — highest priority single shot in this entire document. Everything else in this brief is optional relative to this one.

### Section 07 — Threshold
**Priority:** Hold (Rule 1's sibling — thresholds are always CTA-only, orange-disciplined).

---

## METHOD

Five sections, live in `app/method/page.tsx`: Hero → The Diagnostic Standard → The Four Principles (dark) → The Process (four phases) → Threshold.

### Section 01 — Hero
**Priority:** Hold.

### Section 02 — The Diagnostic Standard
**Purpose:** Explain what "diagnosis before design" means in practice.
**Visual type:** None — text only.
**Priority:** Hold.

### Section 03 — The Four Principles (dark field)
**Purpose:** The four governing principles, presented as a numbered list on the dark surface.
**Visual type:** This is the correct home for a small, restrained **iconographic system** — not photography, not illustration in the storybook sense. See Illustration System below for the full spec; applied here as one glyph per principle, appearing beside the `service-counter` number.
**Art direction:** Single-weight line marks, roughly 32×32px, drawn at 1.5px stroke, no fill, no colour beyond `--colour-ink-inverted` at full opacity on this dark section. Each mark is an abstraction of the principle's verb, not a literal icon: "We diagnose before we design" → a simple magnifying-glass-adjacent mark reduced to its essential geometry, not a clip-art magnifying glass. "We challenge before we agree" → two intersecting lines at a deliberate angle, suggesting friction without being a literal collision icon. Treat these as a typographic flourish, closer to a printer's dingbat than an "icon set" — restrained enough that removing them would be a real (if small) loss, not enough that the section reads as illustrated.
**Placement:** Directly left of or above the `service-counter` numeral (01–04), same visual weight as the numeral itself — small, quiet, structural.
**Motion:** No independent motion. Enters with the existing `method-list` stagger (`data-delay="150"`) — it is part of the list item, not a separate animated element.
**Priority:** Medium. This is the one place on the site an illustration system genuinely earns its place; it should not be skipped, but it is not urgent relative to the Founder portrait or Work case-study frames.

### Section 04 — The Process (four phases: Discover, Define, Design, Deliver)
**Purpose:** Walk through the four-phase engagement process in detail.
**Visual type:** Same iconographic mark system as Section 03, one per phase (four total, reused set — Discover/Define/Design/Deliver get their own four marks, distinct from the four principle marks above so the two lists remain visually distinguishable from each other despite using the same system).
**Placement:** Same treatment as Section 03 — beside each phase's `service-counter`.
**Priority:** Medium, bundled with Section 03 as one production task (eight marks total, one system).

### Section 05 — Threshold
**Priority:** Hold.

---

## WORK

Four sections, live in `app/work/page.tsx`: Hero → Featured Study: Raleway Studio → Selected Work (dark, four client projects) → Threshold.

### Section 01 — Hero
**Priority:** Hold.

### Section 02 — Featured Study: Raleway Studio
**Purpose:** The self-applied case study — Raleway's own redesign, described through strategic transformation, not visual transformation.
**Visual type:** This is the page's one "breath" image (Rule 2), and it should be a before/after device frame rather than a lifestyle photograph.
**Art direction:** A single browser-frame mockup (see Image Library, Mockup Frame System below) showing the current homepage at a meaningful scroll position — not a full-page screenshot squeezed into a thumbnail, but one considered crop that shows the Hero and the start of The Diagnosis, i.e., the actual sentence-first opening the section is describing in words. No browser chrome beyond a minimal top bar (traffic-light dots optional, very small, low-contrast) — the frame should feel like an editorial device treatment, not a literal "here's Chrome" screenshot.
**Placement:** After the third paragraph ("Once that was clear, the architecture became obvious...") and before the section ends — functions as evidence for the claim just made, not decoration.
**Motion:** Fade + slight scale-in on scroll entrance (`opacity 0→1`, `scale(0.98→1)`, `--motion-deliberate` 500ms) — a small, controlled "settling into place" that suits a screen mockup better than the site's translateY pattern, which was designed for text blocks.
**Priority:** High.

### Section 03 — Selected Work (four client case studies, dark field)
**Purpose:** Oneness Clinic, Amos Home Team, Manwaring Consulting, Inner Life School — each currently text-only (name, challenge, decision).
**Visual type:** One mockup frame per project — a single representative screen from each live site, not a gallery. This is the highest-value production task on the Work page: four real, existing, screenshottable assets, zero photoshoot required.
**Art direction:** Same Mockup Frame System as Section 02, applied consistently across all four so the set reads as one system, not four different treatments. For each: choose the single screen that best embodies the "one decision" already described in the copy — Oneness Clinic: the goal-led homepage (not a service list). Amos Home Team: the live MLS listings view (not the homepage hero). Manwaring Consulting: the positioning statement before the service catalogue. Inner Life School: the quiz entry screen, not the course catalogue. Each choice should make the existing sentence self-evident on sight, functioning as proof, not illustration.
**Placement:** Within each `service-item`, positioned above or beside the counter/name/description block — becomes part of the list item, not a separate gallery section (preserves the existing `method-list` structure; Rule against redesigning page structure means this integrates into the current DOM pattern rather than replacing it with a grid).
**Motion:** Same as Section 02 — fade + subtle scale-in, staggered with the existing `data-delay="150"` list entrance so mockups and text arrive together, not as a separate wave.
**Priority:** High — this is the second-most consequential shot list item after the Founder portrait, because it converts the entire portfolio from a claims-only list into visible evidence, and it costs nothing but four careful screenshots of work that already exists and is already live.

### Section 04 — Threshold
**Priority:** Hold.

---

## THINKING

Three sections, live in `app/thinking/page.tsx` (index) and `app/thinking/[slug]/page.tsx` (article): Hero → Article List / Empty State → Threshold. Plus the article template itself.

### Section 01 — Hero
**Priority:** Hold.

### Section 02 — Article List (when posts exist) / Editorial Statement (current empty state)
**Purpose:** List published long-form writing, or (currently, with zero posts) state that writing is coming.
**Visual type:** None for the empty state — an image next to "the articles are being written" would look like it's compensating for absent content, which is worse than the current honest text-only statement. Once real articles exist: a small, consistent **category mark** (not a photo, not a generic blog thumbnail) per article, reusing the Illustration System's mark language from Method rather than introducing a third visual system.
**Placement:** Beside `service-counter`/category label in `thinking-article__meta`, same position pattern as Method's principle marks.
**Priority:** Low — gated entirely on articles actually existing. Do not build this ahead of content; per the Operations Mandate, this should follow real editorial output, not precede it.

### Article template (`/thinking/[slug]`)
**Purpose:** Individual long-form article page — currently pure PortableText prose in a 760px measure.
**Visual type:** None prescribed system-wide. Individual articles may embed a single in-line image where the writing specifically calls for one (a diagram referenced in the text, a screenshot of a described interface) — but this is an editorial decision made per-article by whoever writes the piece, not a template requirement. Do not add a mandatory "featured image" banner at the top of every article; that is the single fastest way to make long-form writing look like a generic content-marketing blog, which the brief explicitly rejects.
**Priority:** Hold as a template rule; leave to editorial judgment per piece.

### Section 03 — Threshold
**Priority:** Hold.

---

## START

Four sections, live in `app/start/page.tsx`: Hero → What to Expect (three call points) → Book the Call (Calendly embed) → What Happens Next (three steps).

### All sections
**Purpose:** This page is the conversion destination, not a routing page — the code comments note it deliberately has no Threshold ("this page IS the threshold moment") and deliberately keeps two consecutive light sections rather than alternating to dark, specifically to avoid breaking the flow toward booking.
**Visual type:** None, anywhere on this page.
**Art direction:** N/A.
**Motion:** Unchanged.
**Priority:** Hold, all sections, as a single deliberate decision rather than four separate ones. Photography or illustration on a conversion page adds friction and cognitive load at the exact moment the visitor should be doing one thing: picking a time. This mirrors why the page already avoids a second CTA competing with the Calendly widget — the same discipline that removed extra buttons should keep out extra visuals.

---

## Brand Photography Shot List

### Must Have
1. **Founder portrait — primary.** About page, Section 06. Full spec above. Without this, the site's single moment of "a real person built this" remains an empty div in production.
2. **Founder portrait — secondary/alternate crop.** Same shoot, second usable frame (different angle or expression) — held in reserve for future use (Thinking article bylines if the site ever attributes articles individually, press/media requests, LinkedIn/social presence). Shooting two usable frames in one session is close to free once the shoot is set up; not shooting it means a second session later.
3. **Work case study screens — all four.** Oneness Clinic, Amos Home Team, Manwaring Consulting, Inner Life School. Not photography — deliberate, considered screenshots per the art direction in Work/Section 03 above. Zero cost beyond time; the sites already exist and are live.

### Should Have
4. **Home "breath" image** — the self-audit / working-material still life described in Home/Section 05. Elevates the single highest-emotion moment on the homepage.
5. **Work "breath" image** — the Raleway self-redesign browser frame described in Work/Section 02.

### Nice to Have
6. A small library of **texture/material stills** (paper stock, print proofs, a printed page with pen marks) — warm-neutral graded, unpeopled — held in reserve as alternate "breath" images if the Home or Work image needs to be swapped later, or for use in future case-study pages if the portfolio grows beyond four projects.
7. **Environment establishing shot** of wherever Seira actually works, shot in the same visual language as the Founder portrait (same light, same grade) — a genuine "this is real" signal, useful for an eventual press kit or About page expansion, not required for V1.1 launch.

---

## Image Library

Every reusable visual asset the studio should own and maintain going forward, independent of any single page:

**Founder portrait set.** The Must Have shots above, delivered in at least two crops (portrait for About, a tighter square crop for any future avatar/byline use) and colour-graded to the site's warm-neutral palette so any future placement matches without re-editing.

**Mockup Frame System.** A single, reusable browser-frame template (minimal chrome, consistent proportions, consistent shadow/elevation treatment) that every Work case-study screenshot gets dropped into. This should be built once as a Figma/CSS component, not recreated per screenshot — it is infrastructure, exactly like `--frame-card` and `--frame-landscape` are infrastructure in `tokens.css` today. Two aspect ratios only, matching the existing frame tokens: `--frame-landscape` (16:9) for full-width breath-image mockups, `--frame-card` (3:2) for the four Selected Work thumbnails.

**Breath-image set.** The Home and Work still-life photographs, graded consistently with each other so that if a visitor happens to see both on the same visit, they read as one photographic voice, not two different shoots.

**Wordmark / logo assets.** Not new photography, but confirmed as part of the image library: current `logo.png`, `og-image.png`, `icon.png` should be audited against this same warm-neutral, restrained visual language before V1.1 ships (flagged for later — not a new task here, just noting it belongs in this inventory).

---

## Illustration System

One system, used in exactly two places: Method's principle/phase marks (Sections 03–04) and, conditionally, Thinking's category marks once articles exist. Not used anywhere else — Work uses photography (real screens), not illustration, because illustrating a client's actual product would misrepresent it.

**Style:** Single-weight line marks. 1.5px stroke, no fill, geometric construction (compass-and-straightedge feel, not hand-drawn/organic) — closer to a printer's dingbat or a wayfinding pictogram than a "brand illustration." Roughly 32×32px at default size, scalable as SVG.

**Colour:** `--colour-ink` on light sections, `--colour-ink-inverted` on dark sections. Never the accent orange — these are structural marks, not CTAs, and giving them orange would violate the one-accent-per-viewport rule the moment a section shows more than one mark at a time (which every list on Method does, by definition).

**Construction logic:** Each mark should abstract the verb of its principle/phase rather than depict a literal object — "diagnose" is not a stethoscope, "discover" is not a magnifying glass with a shine on it. This keeps the system from aging the way literal icon sets do, and keeps it consistent with the studio's own stated standard of judgment over decoration.

**What this system is not:** not a full icon library, not applied to every list on the site (Home's "How We Think" list stays unillustrated per the Home/Section 04 note above — Method is the one authoritative home for this treatment), not a substitute for photography anywhere Rule 4 calls for a real photograph instead.

---

## Motion System

Extends the existing `motion.css` token system (`--motion-responsive` 80ms through `--motion-grand` 600ms, `ease-out` only, no custom cubic-bezier) — this section adds patterns for the new visual layer, it does not replace anything currently working.

**Max duration:** 600ms (`--motion-grand`) remains the ceiling, matching the existing Hero entrance. Nothing in the visual layer should introduce a longer animation than the site's own most important entrance moment.

**Easing:** `ease-out` only, as already specified in `tokens.css`. No new easing curves for photography — a still-life image settling into place should feel like it belongs to the same physical system as a headline fading in, not like it arrived from a different design tool.

**Image reveal (new pattern, for breath images and mockup frames):** `opacity 0→1` over `--motion-deliberate` (500ms), with mockup frames additionally getting `scale(0.98→1)` over the same duration. No translateY on images — the existing translateY(16px)/(20px) patterns were tuned for text blocks and read as "sliding" when applied to a large photograph; images should feel like they're resolving into focus, not entering from off-screen.

**Slow zoom (new pattern, breath images only):** `scale(1.0→1.04)` over 12–20 seconds, linear, triggered once on entering viewport, never reversing, never looping. Reserved exclusively for the two full-bleed breath images (Home/Section 05, Work/Section 02) — this is a "presence" effect, not something applied to case-study thumbnails or the founder portrait, both of which should hold still so they read as considered, composed photographs rather than motion pieces.

**Hover elevation (new pattern, Work case-study frames only):** On the four Selected Work mockups, a very small `translateY(-2px)` plus a soft shadow increase, `--motion-quick` (150ms) — mirrors the restraint of the existing Case Study Card image hover already specified in `motion.css` (`scale(1.03)`, 300ms), applied here to whole-frame elevation instead of internal image scale, since these mockups sit inside list items rather than card grids.

**Explicitly rejected:** parallax scrolling anywhere on the site (the brief names this directly as a gimmick to avoid, and it also fights the existing `.animate-entrance` scroll-observer pattern, which triggers once and holds — parallax implies continuous scroll-linked movement, a different and incompatible motion philosophy). Also rejected: cursor-follow effects, image hover zoom on the Founder portrait (a person's photograph zooming on hover reads as unintentionally strange, not premium), and any auto-playing video or cinemagraph anywhere on the site — motion should always be a direct response to the visitor's own scroll or hover, never ambient.

**Page transitions:** Not addressed here — out of scope for the visual layer; this is a routing/framework-level decision (and the site's current instant, App-Router client-side navigation is already correct for a site this content-dense; a manufactured transition would slow down every single page view to add a flourish visible once).

---

## Sequencing recommendation

If this is executed in phases rather than all at once, the order that returns the most brand credibility per unit of effort:

1. Founder portrait (About) — closes the single most visible gap in production today.
2. Work case-study mockup frames, all four — converts the portfolio from claims to evidence, and costs only screenshots of sites that already exist and are already live.
3. Method illustration system (eight marks) — the one new visual system, self-contained, no photography dependency.
4. Home and Work breath images — the two most produced/art-directed pieces here, correctly sequenced last because they add polish to pages that already work, rather than closing a functional gap.

Nothing in Thinking's illustration treatment should be built ahead of actual published articles.
