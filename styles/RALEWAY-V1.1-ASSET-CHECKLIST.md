# Raleway Studio — Version 1.1 Visual Asset Checklist

**Purpose:** every visual asset committed to by `RALEWAY-VISUAL-DIRECTION-v1.1.md`, cross-checked against the live codebase (`app/`, `components/media/`, `public/assets/`) as of this build. Nineteen assets total: 9 already complete, 6 currently live as placeholders and blocking real completion, 1 required for library completeness with no page slot yet, 1 flagged review, 2 reserve/nice-to-have. Sources for every dimension and location below: the actual `<DeviceFrame>` / `<BreathImage>` / `<Image>` calls in `app/page.tsx`, `app/about/page.tsx`, `app/method/page.tsx`, `app/work/page.tsx`.

Check items off in order — the sections are sequenced by what actually blocks completion first.

---

## Section A — Complete, no action needed

- [x] **01 — `seira-jho.jpg`** (Founder Portrait — Primary)
  - Dimensions: 7008 × 4672px source, cropped to 4:5 via CSS `object-fit`
  - Aspect ratio: 4:5
  - Location: About page, Section 06 (Founder)
  - Priority: High (Must Have)
  - Owner: Seira
  - Status: **Done** — real photograph, live in production

- [x] **02 — Method Icon Mark: Diagnose**
  - Dimensions: 24 × 24px viewBox (vector, scales freely)
  - Aspect ratio: 1:1
  - Location: Method page, Section 03 (principle 01, "We diagnose before we design")
  - Priority: Medium
  - Owner: Claude (built as code, `components/media/IconMark.tsx`)
  - Status: **Done**

- [x] **03 — Method Icon Mark: Challenge**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 03 (principle 02, "We challenge before we agree")
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

- [x] **04 — Method Icon Mark: Strategy**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 03 (principle 03, "Strategy before surface")
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

- [x] **05 — Method Icon Mark: Legibility**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 03 (principle 04, "We measure by legibility, not aesthetics")
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

- [x] **06 — Method Icon Mark: Discover**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 04 (phase 01, Discover)
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

- [x] **07 — Method Icon Mark: Define**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 04 (phase 02, Define)
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

- [x] **08 — Method Icon Mark: Design**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 04 (phase 03, Design)
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

- [x] **09 — Method Icon Mark: Deliver**
  - Dimensions: 24 × 24px viewBox
  - Aspect ratio: 1:1
  - Location: Method page, Section 04 (phase 04, Deliver)
  - Priority: Medium
  - Owner: Claude
  - Status: **Done**

---

## Section B — Blocking: placeholder currently live

These six were the real gate on Version 1.1. Two are now closed (10, 11). The remaining four are still blocking — and are **not** candidates for stock photography, since each one claims to depict a specific real client website. Seira's stock-photography authorization (see note below) explicitly applies to atmospheric/editorial imagery, not to anything presented as a factual screenshot of real work.

- [x] **10 — `home-breath.jpg`** (Home Breath Image)
  - Dimensions: 2400 × 1350px
  - Aspect ratio: 16:9
  - Location: Home page, Section 05 ("Proof of Thinking") — between the headline and body copy
  - Priority: High
  - Owner: Claude (licensed stock, per Seira's authorization to use temporary premium stock photography)
  - Status: **Done (temporary)** — `/public/assets/home-breath.jpg`. Licensed Unsplash photograph ("A piece of paper sitting on top of a wooden table," photographer Joonas Sild) — warm directional light, editorial desk composition, no people. Standing in for a real photograph of the actual self-audit page until that shoot happens.

- [x] **11 — `work-breath.jpg`** (Work Breath Image — Featured Study)
  - Dimensions: 2400 × 1350px
  - Aspect ratio: 16:9
  - Location: Work page, Section 02 ("Featured Study: Raleway Studio") — after the closing paragraph
  - Priority: High
  - Owner: Claude
  - Status: **Done** — `/public/assets/work-breath.jpg`. Real screenshot of the live `www.ralewaystudio.com` homepage, captured directly — not stock, since this image's whole purpose is to show the actual site.

- [ ] **12 — `work-case-oneness.jpg`** (Selected Work — Oneness Clinic)
  - Dimensions: 1200 × 800px minimum
  - Aspect ratio: 3:2
  - Location: Work page, Section 03 ("Selected Work"), case study 01
  - Priority: High
  - Owner: **Claude, pending the live Oneness Clinic URL from Seira** — a real screenshot, not stock. Using a generic stock photo here would misrepresent this as the actual client site.
  - Status: **Placeholder live** — replace `/public/assets/placeholders/work-case-oneness.jpg`

- [ ] **13 — `work-case-amos.jpg`** (Selected Work — Amos Home Team)
  - Dimensions: 1200 × 800px minimum
  - Aspect ratio: 3:2
  - Location: Work page, Section 03 ("Selected Work"), case study 02
  - Priority: High
  - Owner: **Claude, pending the live Amos Home Team URL from Seira**
  - Status: **Placeholder live** — replace `/public/assets/placeholders/work-case-amos.jpg`

- [ ] **14 — `work-case-manwaring.jpg`** (Selected Work — Manwaring Consulting)
  - Dimensions: 1200 × 800px minimum
  - Aspect ratio: 3:2
  - Location: Work page, Section 03 ("Selected Work"), case study 03
  - Priority: High
  - Owner: **Claude, pending the live Manwaring Consulting URL from Seira**
  - Status: **Placeholder live** — replace `/public/assets/placeholders/work-case-manwaring.jpg`

- [ ] **15 — `work-case-innerlife.jpg`** (Selected Work — Inner Life School)
  - Dimensions: 1200 × 800px minimum
  - Aspect ratio: 3:2
  - Location: Work page, Section 03 ("Selected Work"), case study 04
  - Priority: High
  - Owner: **Claude, pending the live Inner Life School URL from Seira**
  - Status: **Placeholder live** — replace `/public/assets/placeholders/work-case-innerlife.jpg`

**Stock photography policy (added this pass):** Seira authorized carefully selected premium stock photography and icons as temporary production assets, explicitly excluding generic agency imagery, stock people, and clichés. This applies to atmospheric/mood imagery (breath images, still life) where the picture isn't claiming to be a specific verifiable thing. It does not apply to the four Work case-study images above — those are presented as screenshots of real client websites, and a stock substitute there would be a factual misrepresentation, not a placeholder.

---

## Section C — Required for asset library completeness (no live slot yet)

- [ ] **16 — Founder Portrait — Secondary/Alternate Crop**
  - Dimensions: 1600 × 2000px recommended
  - Aspect ratio: 4:5 (matching the primary)
  - Location: no page slot today — held in reserve per the approved Shot List, for future Thinking article bylines, press/media requests, or a second About page angle
  - Priority: High (listed as Must Have in the approved Shot List, even though nothing on the live site is waiting on it)
  - Owner: Seira (same session as the primary photo, if not already captured — shooting a second usable frame in one sitting is close to free; a separate session later is not)
  - Status: **Not started**

---

## Section D — Recommended review, not a new shoot

- [ ] **17 — Logo / Wordmark Asset Audit**
  - Files: `public/assets/logo.png`, `logo.webp`, `logo-nav.webp`, `logo-footer.webp`, `logo-white.png`, `logo-icon.png`
  - Dimensions: n/a — existing files, no new production
  - Aspect ratio: n/a
  - Location: Navbar, Footer, favicon/OG metadata (site-wide)
  - Priority: Medium
  - Owner: Claude (visual comparison against the warm-neutral v1.1 palette) with Seira sign-off
  - Status: **Not started** — flagged explicitly in `RALEWAY-VISUAL-DIRECTION-v1.1.md`, Image Library section, as belonging in this inventory before V1.1 ships; not yet acted on

---

## Section E — Reserve / Nice to Have (non-blocking)

- [ ] **18 — Texture / Material Stills Set**
  - Dimensions: 1600 × 1600px minimum (flexible crop source — not tied to one placement)
  - Aspect ratio: flexible (square source, crop as needed)
  - Location: no page slot — reserve library for future breath-image swaps or new case-study pages
  - Priority: Low
  - Owner: Seira or a contracted photographer (see `RALEWAY-AI-IMAGE-PROMPTS-v1.1.md`, Still Life prompts S-01–S-04, for generated alternatives)
  - Status: **Not started**

- [ ] **19 — Environment Establishing Shot**
  - Dimensions: 1600 × 900px minimum
  - Aspect ratio: 16:9
  - Location: no page slot — reserve for a future About page expansion or press kit
  - Priority: Low
  - Owner: Seira (must be a real photograph of an actual workspace to serve its stated purpose — see `RALEWAY-AI-IMAGE-PROMPTS-v1.1.md` note on Workspace prompts, which are generated stand-ins, not a substitute for this)
  - Status: **Not started**

---

## Summary

| Section | Count | Status |
|---|---|---|
| A — Complete | 9 | ✅ Done |
| B — Blocking (2 done, 4 remaining) | 6 | 🟡 In progress |
| C — Library completeness | 1 | ⬜ Not started |
| D — Review | 1 | ⬜ Not started |
| E — Reserve, non-blocking | 2 | ⬜ Not started |
| **Total** | **19** | **11 done / 8 remaining** |

**Fastest path to closing Section B (the only remaining blocker):** send the four Selected Work URLs (Oneness Clinic, Amos Home Team, Manwaring Consulting, Inner Life School) — real screenshots, not stock, since these are presented as the actual client sites. That closes the section entirely.
