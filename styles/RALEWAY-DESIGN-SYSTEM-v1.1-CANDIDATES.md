# Raleway Design System — v1.1 Candidate Revisions

**Produced after:** Complete Phase 4 implementation and Phase 5 browser audit
**Date:** 2026-07-15
**Source:** Implementation discoveries only — no wishes, preferences, or redesign intent
**Scope:** Each candidate is a finding that emerged from building and auditing the system, not from re-reading the specs in isolation

This document is not a change log. It is a set of proposed clarifications, corrections, and additions to the specification that implementation exposed as genuinely missing or contradictory. Each candidate is evaluated against the same criteria as every other design decision: does it reduce unnecessary decisions while increasing confidence in the important ones?

Candidates are classified:
- **[CLARIFICATION]** — spec is ambiguous; implementation required a judgment call
- **[GAP]** — spec is silent on a situation that arises in practice
- **[CORRECTION]** — spec contains an internal inconsistency or an error
- **[EXTRACTION]** — a rule that exists inside one component spec but should be elevated to the Document Architecture Rules appendix

---

## CANDIDATE 01 · [CLARIFICATION] — Responsive container padding: token vs. component override

**Discovered during:** Components 07, 08, 09 (and implicitly all components with inner containers)

**Finding:**
`--space-container-x` already has responsive overrides defined in `tokens.css` (80px desktop → 48px tablet → 24px mobile). However, component CSS files that use `padding-inline: var(--space-container-x)` can also add their own breakpoint overrides with raw pixel values — creating Rule 06 violations and duplicated logic.

The spec is silent on whether component files should carry their own container padding media queries or rely entirely on the token file.

**Implementation judgment made:**
Several component `.inner` containers (`.footer-inner`, `.hero-inner`, `.threshold-inner`) were written with explicit breakpoint overrides using raw pixel values, duplicating the token file's logic.

**Proposed v1.1 clarification:**
Add to Document Architecture Rule 06 (Token Reference Rule):

> "Components that use `--space-container-x` for `padding-inline` must not add breakpoint overrides for this property in their own CSS files. The token's responsive behaviour, defined in `tokens.css`, is authoritative. Component files that override the token with raw pixel values at breakpoints violate Rule 06 and must be corrected."

**Scope of fix:** `07-footer.css`, `08-hero.css`, `09-threshold.css` — remove inline media query overrides for `padding-inline` on `.footer-inner`, `.hero-inner`, `.threshold-inner`. The responsive behaviour is already correct in `tokens.css`.

---

## CANDIDATE 02 · [GAP] — `--stack-*` tokens not sufficient for adjacent-sibling gaps in Flex column layouts

**Discovered during:** Components 05, 08, 09

**Finding:**
Components 08 (Hero) and 09 (Threshold) require differentiated gaps between specific children: headline → body at one size, body/CTA at a larger size. The `gap` property on a flex container applies the same gap between all children. A single `gap: var(--stack-xl)` value cannot express "32px here, 64px there."

The spec defines these gaps per element pair in the spacing tables but does not specify the CSS implementation pattern for achieving differentiated gaps in a flex column.

**Implementation judgment made:**
Both Hero and Threshold received a uniform gap, which is wrong against the spec.

**Proposed v1.1 addition:**
Add to Pillar IV — Design System, Section IV (Spacing), or to a new "Layout Patterns" section:

> "When a component requires differentiated gaps between specific children in a flex column, use `margin-block-start` on individual child elements rather than `gap` on the parent. The `gap` property produces uniform spacing; child-level margin produces specific spacing. Example: `.hero-content { display: flex; flex-direction: column; }` with `.hero-body { margin-block-start: var(--stack-md); }` and `.hero-actions { margin-block-start: var(--stack-lg); }`."

**Scope of fix:** `08-hero.css` and `09-threshold.css` — replace uniform `gap` on `.hero-content` and `.threshold-content` with child-specific `margin-block-start` rules.

---

## CANDIDATE 03 · [GAP] — Mobile menu panel opacity animation: implementation pattern unspecified

**Discovered during:** Component 01, `motion/motion.css`

**Finding:**
The spec says "Opacity: `0` to `1` simultaneously" with the `max-height` animation on mobile menu open. However, the `max-height` animation on a container with `overflow: hidden` means the panel's content is revealed by clipping rather than true visibility. Applying `opacity` to the same container creates a compound transition but with a potential visual conflict: the panel is both clipping and fading simultaneously.

The spec does not specify whether `opacity` should apply to `.nav-mobile` (the panel container) or to `.nav-mobile-item` elements individually. The implementation applies `opacity` to individual items (`.nav-mobile-item`), which is different from fading the panel itself.

**Implementation judgment made:**
Per-item opacity transition was implemented. This is defensible but not what the spec literally specifies.

**Proposed v1.1 clarification:**
Add to Component 01 Motion Notes:

> "The mobile menu panel opacity transition applies to the panel container (`.nav-mobile`), not to individual items. Both `max-height` and `opacity` transition simultaneously on the container. The per-item stagger pattern (`.nav-mobile-item` fading individually) is a permitted enhancement but is not the base specification. Base: container opacity 0→1, 250ms cubic-bezier(0.4, 0, 0.2, 1)."

---

## CANDIDATE 04 · [GAP] — Testimonial attribution structure: DOM not specified for combined name+role cases

**Discovered during:** Component 06, `06-testimonial.css`

**Finding:**
The spec defines two separate `<span>` elements for attribution — one for name, one for role/company — with distinct typography. However, the DOM example in the Primitive Assembly section shows:

```html
<figcaption class="testimonial-attribution">
  <span class="attribution-name">Helena Marceau</span>
  <span class="attribution-role">Co-founder, Maison Luc</span>
</figcaption>
```

But the DOM structure in the Status: FROZEN header at the top of the component CSS shows a single `.testimonial-author` element:

```html
<a href="..." class="testimonial-author">First Name L., Company / Role</a>
```

This internal inconsistency meant the implementation followed the simplified stub header rather than the full Primitive Assembly specification.

**Implementation judgment made:**
Single `.testimonial-author` class was used, collapsing name and role typography.

**Proposed v1.1 correction:**
The full Primitive Assembly specification takes precedence over any simplified stub comment. The CSS must implement:
- `.testimonial-attribution-name` (or `.attribution-name`): `--text-label`, 10px, weight 500, uppercase, `0.14em` tracking, `--colour-ink`
- `.testimonial-attribution-role` (or `.attribution-role`): `--text-meta`, 11px, weight 300, `0.04em` tracking, `--colour-ink-secondary`

The stub comment at the top of the component CSS file is for context only; it does not override the full specification.

**Scope of fix:** `06-testimonial.css` — replace `.testimonial-author` with two distinct classes. Update any associated DOM templates.

---

## CANDIDATE 05 · [CLARIFICATION] — `--space-headline-after` vs `--stack-md`: Section Introduction gap

**Discovered during:** Component 05, `05-section-intro.css`

**Finding:**
`tokens.css` defines `--space-headline-after: var(--space-7)` = 48px. The token's semantic name ("after headline") suggests it should be used between headlines and what follows them. But Component 05 — Section Introduction explicitly specifies `--stack-md` (32px) for the headline → body gap, not `--space-headline-after`.

This creates a naming ambiguity: which token is correct when a headline is followed by body copy in the Section Introduction specifically?

**Implementation judgment made:**
`--space-headline-after` (48px) was used, which is semantically reasonable but contradicts the spec's explicit 32px.

**Proposed v1.1 clarification:**
Add a note to the `--space-headline-after` token definition in `tokens.css`:

> "`--space-headline-after` is defined for use in prose/flow contexts (long-form content, article body). It is NOT used in the Section Introduction component. The Section Introduction has its own spacing table (headline → body: `--stack-md`, 32px) and that table is authoritative for that component."

**Scope of fix:** `05-section-intro.css` — change `.section-body { margin-block-start: var(--space-headline-after); }` to `margin-block-start: var(--stack-md);`

---

## CANDIDATE 06 · [EXTRACTION] — Hero content gap pattern should be in Document Architecture Rules

**Discovered during:** Components 08 and 09 (same pattern repeated)

**Finding:**
Both the Hero and the Threshold use the same internal spacing pattern: headline → body at `--stack-md` (32px), body → CTA at `--stack-lg` (64px). The rationale is identical in both specs: "the gap signals the shift from reading to acting." This pattern is likely to recur in any future component that pairs editorial content with a commitment CTA.

**Proposed v1.1 extraction:**
Add to Document Architecture Rules appendix as Rule 12 (or next available number):

> **Rule 12 — Editorial-to-Action Gap**
> When editorial content (headline, body copy) is followed by a commitment action (primary CTA button), the gap between the last editorial element and the first action element is always `--stack-lg` (64px). The gap between headline and body copy within the editorial group is `--stack-md` (32px). This pattern is defined in both the Hero and Threshold components and applies to any future component that follows the same structure.

---

## CANDIDATE 07 · [CLARIFICATION] — Footer inner gap: single `gap` vs. two-step spacing

**Discovered during:** Component 07, `07-footer.css`

**Finding:**
The spec defines footer-inner spacing as two distinct gaps: 64px from brand/nav to separator, then 32px from separator to copyright. But the implementation uses `display: flex; flex-direction: column; gap: var(--space-section-y-sm)` which applies a single 96px gap between `.footer-main` and `.footer-base`.

The `border-top` on `.footer-base` acts as the separator, but the 96px gap is measured from the bottom of `.footer-main` to the top of `.footer-base` (which includes the `border-top`). The 32px spec gap refers to space between the separator line and the copyright text below it — this would need to be `padding-block-start` on `.footer-base`, not part of the flex `gap`.

**Implementation judgment made:**
A single `gap` was used, which merges the two intended spacing values (64px + 32px = 96px total, approximately matching the implementation's 96px `--space-section-y-sm`). The arithmetic is close but the structure is wrong.

**Proposed v1.1 clarification:**
Add to Component 07 Spacing:

> "The `.footer-inner` flex gap governs the distance between `.footer-main` and the top of `.footer-base` (i.e., the separator line). This gap is `--stack-lg` (64px). The distance between the separator line and the copyright text is `padding-block-start: var(--stack-md)` (32px) on `.footer-base`. These are two separate CSS values on two separate elements, not a single `gap` value."

**Scope of fix:** `07-footer.css` — change `.footer-inner { gap: var(--space-section-y-sm); }` to `gap: var(--stack-lg)`, and add `padding-block-start: var(--stack-md)` to `.footer-base` (keeping the `border-top`).

---

## CANDIDATE 08 · [GAP] — Motion token coverage: `100ms` duration has no token

**Discovered during:** Component 01 audit (DEV-01 through DEV-04)

**Finding:**
The Motion Specifications define durations of 0ms, 80ms, 150ms, 300ms, 400ms, 500ms, 600ms — all of which have tokens. Component 01 specifies `100ms` for nav link hover and mobile navbar show transitions. No `--motion-*` token exists for 100ms.

The implementation was forced to choose between using a raw value (violating Rule 06) or the nearest token (`--motion-quick` = 150ms, producing DEV-01 and DEV-03).

**Proposed v1.1 addition:**
Either:
1. Add `--motion-nimble: 100ms` to the motion token scale in `tokens.css`, reflecting the Navbar's specific interaction timing; OR
2. Revise Component 01's Motion Notes to use the nearest existing tokens: `--motion-responsive` (80ms) or `--motion-quick` (150ms), and update the spec values accordingly.

Option 2 is preferred — it avoids adding a token for a single component use. The Component 01 motion spec should be updated to align with the token scale rather than introducing a one-off value.

**Scope of fix:**
If Option 2 (recommended): Update Component 01 Motion Notes to read `--motion-responsive` (80ms) for show and `--motion-quick` (150ms) for hide. Update `motion/motion.css` to clarify these token references. No new token needed.

---

## CANDIDATE 09 · [GAP] — Service counter styles: optional elements still require CSS

**Discovered during:** Component 04, `04-service-item.css`

**Finding:**
The Service Item's counter is "optional, not default." Because it's optional, the implementation omitted the CSS for `.service-counter`. However, optional in the context of DOM rendering (Rule 04) means the element is omitted when not used — it does not mean the CSS for the element is omitted. If a counter is ever rendered, it must have styles.

This exposes a documentation gap: the spec says elements are "conditional" but does not explicitly distinguish between "conditional DOM" (the HTML element may be absent) and "conditional CSS" (the styles may be absent). CSS must exist for all specified elements even if they render conditionally.

**Proposed v1.1 clarification:**
Add to Document Architecture Rule 04 (Conditional DOM Rendering):

> "Conditional DOM rendering means the HTML element is omitted when not in use. It does not mean the CSS for that element is omitted. CSS rules must exist for every element that appears in a component's Primitive Assembly, including optional ones. The CSS is part of the component's specification; the HTML is the instantiation of it."

---

## CANDIDATE 10 · [CLARIFICATION] — Hero mobile CTA layout: horizontal vs. vertical stack

**Discovered during:** Component 08, `08-hero.css`

**Finding:**
The spec says: "At mobile (<768px): CTAs stack vertically. Full width at mobile for both buttons."

The current implementation uses `.hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-5); }` — which at mobile will wrap to two rows if the buttons don't fit side by side, but does not force a full-width vertical stack.

The spec explicitly says both buttons are full-width at mobile. This requires `flex-direction: column; align-items: stretch` at the mobile breakpoint on `.hero-actions`, with `width: 100%` on the buttons.

**Proposed v1.1 addition:**
Add to Component 08 Responsive Behaviour:

> "At mobile (<768px), `.hero-actions` switches to `flex-direction: column; align-items: stretch`. Both buttons receive `width: 100%` at mobile — this is the one context in Version 1 where full-width primary and secondary buttons are specified. The vertical Stack uses `--stack-sm` (16px) gap between them."

**Scope of fix:** `08-hero.css` — add mobile media query: `.hero-actions { flex-direction: column; align-items: stretch; }` and `btn-primary, btn-navigate` within hero-actions get `width: 100%` at mobile.

---

## Summary

| # | Type | Component | Priority |
|---|---|---|---|
| C-01 | CLARIFICATION | All container components | High — Rule 06 batch fix |
| C-02 | GAP | Hero, Threshold | High — significant spacing deviation |
| C-03 | GAP | Navbar / Motion | Low — enhancement, not blocking |
| C-04 | GAP | Testimonial | High — visual register error |
| C-05 | CLARIFICATION | Section Introduction | Medium — 16px gap error |
| C-06 | EXTRACTION | Hero, Threshold | Medium — document for future components |
| C-07 | CLARIFICATION | Footer | Medium — structural spacing error |
| C-08 | GAP | Motion tokens | Low — token scale refinement |
| C-09 | GAP | All optional elements | Low — process clarification |
| C-10 | CLARIFICATION | Hero | Medium — mobile CTA layout |

**Total candidates: 10**
**None introduce new design philosophy or override existing architectural decisions.**
**All are resolutions to ambiguities or gaps that implementation exposed.**

---

*Raleway Design System v1.1 Candidate Revisions*
*Produced at end of Phase 6*
*Next step: present candidates for review. Approved candidates update the relevant Pillar IV documents and component CSS files. No candidate is implemented without explicit approval.*
