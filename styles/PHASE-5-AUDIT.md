# Phase 5 — Browser Audit Report
**Raleway Design System v1.0 — Component Implementation Audit**
**Date:** 2026-07-15
**Status:** Complete — 19 deviations found across 9 components

Each deviation is classified:
- **[SPEC]** — value or rule differs from written specification
- **[OMIT]** — specified element absent from implementation
- **[RULE06]** — raw CSS values used instead of token reference (Document Architecture Rule 06 violation)
- **[ARCH]** — structural CSS architecture problem (does not affect visual output but violates system conventions)

All deviations are reported. None have been silently fixed.

---

## Component 01 — Navbar (`01-navbar.css` + `motion/motion.css`)

### DEV-01 · [SPEC] — Nav link hover transition duration
**File:** `01-navbar.css`
**Spec:** "Nav link hover: `color` transition, `100ms`, `ease-out`" (Component 01 Motion Notes)
**Implementation:** `transition: color var(--motion-quick) var(--motion-ease)` — `--motion-quick` = 150ms
**Deviation:** 150ms vs specified 100ms

### DEV-02 · [SPEC] — Mobile navbar hide transition duration
**File:** `motion/motion.css`
**Spec:** "Mobile navbar hide: `transform: translateY(-100%)`, `150ms`, `ease-in`" (Component 01 Motion Notes)
**Implementation:** `transition: transform 250ms ease-in`
**Deviation:** 250ms vs specified 150ms

### DEV-03 · [SPEC] — Mobile navbar show transition duration
**File:** `motion/motion.css`
**Spec:** "Mobile navbar show: `transform: translateY(0)`, `100ms`, `ease-out`" (Component 01 Motion Notes)
**Implementation:** `transition-duration: 200ms`
**Deviation:** 200ms vs specified 100ms

### DEV-04 · [SPEC] — Mobile menu open transition easing
**File:** `motion/motion.css`
**Spec:** "Mobile menu open: `max-height` animation, `250ms`, `cubic-bezier(0.4, 0, 0.2, 1)`" (Component 01 Motion Notes)
**Implementation:** `transition: max-height 250ms var(--motion-ease)` — `--motion-ease` = `ease-out`
**Deviation:** `ease-out` vs specified `cubic-bezier(0.4, 0, 0.2, 1)`

### DEV-05 · [OMIT] — Mobile menu panel opacity animation absent
**File:** `motion/motion.css`
**Spec:** "Mobile menu open: Opacity: `0` to `1` simultaneously [with max-height]" (Component 01 Motion Notes)
**Implementation:** No `opacity` transition on `.nav-mobile`; only `max-height` animates
**Deviation:** Panel opacity not implemented

---

## Component 02 — Button System (`02-button.css`)

### DEV-06 · [SPEC] — Primary button active fill colour
**File:** `02-button.css`
**Spec:** "Active/Press: `--colour-accent-hover` (#C85015) fill" (Component 02 Colour Tokens)
**Implementation:** `.btn-primary:active { transform: scale(0.98); }` — `background-color` not set on `:active`
**Deviation:** The button does not deepen to `--colour-accent-hover` on keyboard activation (`:active` without hover). Visually correct when the mouse is held (hover + active both apply), but fails for keyboard-triggered active state.

### DEV-07 · [OMIT] — Secondary button disabled state absent
**File:** `02-button.css`
**Spec:** "Disabled: `opacity: 0.4`" on secondary button (Component 02 Colour Tokens)
**Implementation:** `.btn-secondary:disabled` rule not present in implementation
**Deviation:** Secondary disabled state not implemented

---

## Component 03 — Case Study Card (`03-case-study-card.css`)

### DEV-08 · [OMIT] — Card title hover underline absent
**File:** `03-case-study-card.css`
**Spec:** "Title: Gains `text-decoration: underline 1px solid --colour-ink`. The underline is immediate (0ms transition)" (Component 03 Interaction Behaviour)
**Implementation:** No `.card-link:hover .card-title` rule present; only image scale is implemented on hover
**Deviation:** Title does not gain underline on card hover

---

## Component 04 — Service Item (`04-service-item.css`)

### DEV-09 · [ARCH] — Duplicate hover selector blocks
**File:** `04-service-item.css`
**Spec:** No structural requirement; this is an implementation architecture issue
**Implementation:** `.service-item--linked:hover .service-name` appears as two separate rule blocks (one for text-decoration, one for color + transition)
**Deviation:** Duplicate selectors. CSS merges them correctly (different properties), but the architecture violates the principle of single, authoritative rule blocks. Should be one merged block.

### DEV-10 · [OMIT] — Service counter styles absent
**File:** `04-service-item.css`
**Spec:** "Counter (optional): `--text-label` | 10px | DM Sans | 500 | 0.14em uppercase | `--colour-ink-tertiary`" (Component 04 Typography Tokens)
**Implementation:** No `.service-counter` CSS rule present
**Deviation:** If a counter is rendered, it inherits unstyled browser defaults. The counter style must exist even though the element is optional.

### DEV-11 · [OMIT] — Service name active/press state absent
**File:** `04-service-item.css`
**Spec:** "Active/press: Name colour shifts to `--colour-ink-secondary` for `80ms`" (Component 04 Interaction Behaviour)
**Implementation:** No `.service-item--linked:active .service-name` rule present
**Deviation:** Press state not implemented

---

## Component 05 — Section Introduction (`05-section-intro.css`)

### DEV-12 · [SPEC] — Headline → body gap incorrect
**File:** `05-section-intro.css`
**Spec:** "Headline → body: `--stack-md` (32px)" (Component 05 Spacing)
**Implementation:** `.section-body { margin-block-start: var(--space-headline-after); }` — `--space-headline-after: var(--space-7)` = 48px
**Deviation:** 48px vs specified 32px. The `--space-headline-after` token is semantically correct for body text following a headline in prose contexts, but the Section Introduction spec explicitly defines 32px (`--stack-md`) for this gap.

---

## Component 06 — Testimonial (`06-testimonial.css`)

### DEV-13 · [SPEC] — Attribution typography: name and role not distinguished
**File:** `06-testimonial.css`
**Spec:** Two distinct attribution elements with separate typography:
- Attribution name: `--text-label` (10px), weight 500, uppercase, `--colour-ink`
- Attribution role/company: `--text-meta` (11px), weight 300, `--colour-ink-secondary`
(Component 06 Typography Tokens)
**Implementation:** Single `.testimonial-author` class applied to a combined `<a>` or `<span>` using `--text-meta` (11px), weight 300, `--colour-ink-secondary` — the name's distinct typography (10px, weight 500, uppercase, `--colour-ink`) is not implemented.
**Deviation:** Name and role/company receive identical typography instead of the two-layer typographic split specified. The implementation flattens the attribution into a single register.

---

## Component 07 — Footer (`07-footer.css`)

### DEV-14 · [SPEC] — Footer-inner vertical gap incorrect
**File:** `07-footer.css`
**Spec:** 
- "Footer main → separator: `--stack-lg` (64px)" 
- "Separator → copyright: `--stack-md` (32px)"
(Component 07 Spacing)
**Implementation:** `.footer-inner { gap: var(--space-section-y-sm); }` = 96px single gap between `.footer-main` and `.footer-base`
**Deviation:** The implementation applies 96px between the brand/nav block and the entire base block. The spec intends 64px from the nav/brand to the separator line, then 32px from the separator to the copyright text. The single gap misrepresents this hierarchy.

### DEV-15 · [RULE06] — Raw pixel values in footer padding media queries
**File:** `07-footer.css`
**Spec:** Rule 06 — Token Reference Rule: "No component specification or implementation uses raw CSS values for colours, spacing, or typography."
**Implementation:** `padding-inline: 48px` and `padding-inline: 24px` in media query overrides within `.footer-inner` and `.footer-brand`
**Deviation:** `--space-container-x` already has these responsive overrides in `tokens.css`. Component should reference `var(--space-container-x)` with no media queries; token handles breakpoints.

---

## Component 08 — Hero (`08-hero.css`)

### DEV-16 · [SPEC] — Hero content gaps: uniform instead of differentiated
**File:** `08-hero.css`
**Spec:**
- "Headline → body copy: `--stack-md` (32px)"
- "Body copy → CTA group: `--stack-lg` (64px)"
(Component 08 Spacing)
**Implementation:** `.hero-content { gap: var(--stack-xl); }` = 96px uniform gap between all children
**Deviation:** 96px uniform gap vs specified 32px (headline → body) and 64px (body → CTA). The differentiated gaps signal conceptual separation: claim vs. elaboration vs. action. The uniform gap erases this hierarchy.

### DEV-17 · [SPEC] — Hero mobile bottom padding not compressed
**File:** `08-hero.css`
**Spec:** "The `--space-section-y` (128px) bottom anchor may compress slightly at mobile — `--space-section-y-sm` (96px) at mobile viewports." (Component 08 Responsive Behaviour)
**Implementation:** `.hero { padding-block-end: var(--space-section-y); }` — no mobile override
**Deviation:** 128px bottom padding at all breakpoints vs specified 96px at mobile

### DEV-18 · [RULE06] — Raw pixel values in hero-inner media queries
**File:** `08-hero.css`
**Spec:** Rule 06 — Token Reference Rule
**Implementation:** `padding-inline: 48px` and `padding-inline: 24px` in `.hero-inner` media query overrides
**Deviation:** Same as DEV-15. `--space-container-x` is already responsive in `tokens.css`; component should not redeclare raw values.

---

## Component 09 — Threshold (`09-threshold.css`)

### DEV-19 · [SPEC] — Threshold section padding incorrect
**File:** `09-threshold.css`
**Spec:** "Section top padding: `--space-section-y-lg` (192px)" and "Section bottom padding: `--space-section-y-lg` (192px)" (Component 09 Spacing)
**Implementation:** `.threshold { padding-block: var(--space-section-y); }` = 128px
**Deviation:** 128px vs specified 192px (`--space-section-y-lg`). The generous padding is load-bearing in the spec: "Maximum section padding — generosity signals importance."

### DEV-20 · [SPEC] — Threshold body font size incorrect
**File:** `09-threshold.css`
**Spec:** "Body copy (optional): `--text-body` | 16px" (Component 09 Typography Tokens)
**Implementation:** `.threshold-body { font-size: var(--text-body-lg); }` = 18px
**Deviation:** 18px vs specified 16px

### DEV-21 · [SPEC] — Threshold content gap: body → CTA incorrect
**File:** `09-threshold.css`
**Spec:**
- "Headline → body copy: `--stack-md` (32px)"
- "Body copy → CTA: `--stack-lg` (64px)"
(Component 09 Spacing)
**Implementation:** `.threshold-content { gap: var(--stack-md); }` = 32px uniform gap
**Deviation:** Same pattern as DEV-16 (Hero). The 32px uniform gap misses the 64px editorial/action separation before the CTA. The gap between body copy and the orange CTA button should be `--stack-lg` (64px) to match the Hero's body-to-CTA gap and to signal the shift from reading to acting.

### DEV-22 · [RULE06] — Raw pixel values in threshold-inner media queries
**File:** `09-threshold.css`
**Spec:** Rule 06 — Token Reference Rule
**Implementation:** `padding-inline: 48px` and `padding-inline: 24px` in `.threshold-inner` media query overrides
**Deviation:** Same as DEV-15 and DEV-18.

---

## Summary Table

| # | Component | File | Type | Severity |
|---|---|---|---|---|
| DEV-01 | Navbar | `01-navbar.css` | SPEC | Minor |
| DEV-02 | Navbar | `motion/motion.css` | SPEC | Minor |
| DEV-03 | Navbar | `motion/motion.css` | SPEC | Minor |
| DEV-04 | Navbar | `motion/motion.css` | SPEC | Minor |
| DEV-05 | Navbar | `motion/motion.css` | OMIT | Minor |
| DEV-06 | Button | `02-button.css` | SPEC | Minor |
| DEV-07 | Button | `02-button.css` | OMIT | Minor |
| DEV-08 | Card | `03-case-study-card.css` | OMIT | Moderate |
| DEV-09 | Service Item | `04-service-item.css` | ARCH | Cosmetic |
| DEV-10 | Service Item | `04-service-item.css` | OMIT | Minor |
| DEV-11 | Service Item | `04-service-item.css` | OMIT | Minor |
| DEV-12 | Section Intro | `05-section-intro.css` | SPEC | Moderate |
| DEV-13 | Testimonial | `06-testimonial.css` | SPEC | Significant |
| DEV-14 | Footer | `07-footer.css` | SPEC | Moderate |
| DEV-15 | Footer | `07-footer.css` | RULE06 | Minor |
| DEV-16 | Hero | `08-hero.css` | SPEC | Significant |
| DEV-17 | Hero | `08-hero.css` | SPEC | Minor |
| DEV-18 | Hero | `08-hero.css` | RULE06 | Minor |
| DEV-19 | Threshold | `09-threshold.css` | SPEC | Significant |
| DEV-20 | Threshold | `09-threshold.css` | SPEC | Moderate |
| DEV-21 | Threshold | `09-threshold.css` | SPEC | Significant |
| DEV-22 | Threshold | `09-threshold.css` | RULE06 | Minor |

**Total deviations: 22**
**Significant (visual hierarchy or register impact):** 4 — DEV-13, DEV-16, DEV-19, DEV-21
**Moderate:** 5 — DEV-08, DEV-12, DEV-14, DEV-17, DEV-20
**Minor / Cosmetic:** 13

---

## Notes for v1.1 Candidate Evaluation

The significant deviations (DEV-13, DEV-16, DEV-19, DEV-21) should be evaluated first — they affect typographic register clarity and component scale intent. The Rule 06 violations (DEV-15, DEV-18, DEV-22) are systemic and should be resolved as a batch.

No deviations introduce new design decisions or redesign intent. All deviations are implementation gaps against the existing frozen specifications.
