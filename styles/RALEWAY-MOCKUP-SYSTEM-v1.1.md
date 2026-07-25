# Raleway Studio — Device Frame System (v1.1)

**Status:** Implemented — `components/media/DeviceFrame.tsx`, `styles/components/10-media.css`
**Component:** 10 — Media (extends the frozen v1.0 Component Library, modifies nothing in it)
**Supersedes:** the first-pass `.mockup-frame` (browser-chrome dots), now delegated through for backward compatibility — see "Migration note" at the end.

One system, four frame types — browser, laptop, tablet, phone — built from a single shared visual language rather than four separate treatments. This document is the Figma-buildable specification and the CSS implementation reference side by side, so a designer and an engineer are working from identical numbers.

---

## The shared visual language (read this first)

Every frame type in this system is a variation on one idea: **a hairline rectangle holding a screenshot, identified by typography instead of chrome.** Four rules hold across all four types without exception:

1. **No fake browser chrome.** No traffic-light dots, no URL bar, no tab strip. A "browser frame" is identified by its 16:9 proportions and a caption, not by drawing a toy Chrome window around it.
2. **No skeuomorphism.** No device bezels, no camera notches, no home buttons, no keyboard, no hinge shading, no glossy screen reflection. Where a device needs *some* shape distinction (Tablet, Phone), it's a small corner radius — nothing more.
3. **No heavy shadow — in practice, no shadow at all.** Elevation is communicated by a 1px hairline border and, on hover, a border-colour shift plus a 1px lift. There is no `box-shadow` anywhere in this system, at rest or on hover.
4. **Typography replaces chrome.** Where a commercial mockup system would use a URL bar or a title bar to say "this is the homepage," this system uses a small caption set in the interface type layer (`--text-caption`, 11px) beneath the frame. This is the single biggest reason the system reads as editorial rather than commercial — identification is a typographic act, not a UI-skeuomorphism act.

What *does* vary between the four types: aspect ratio, corner radius, and one frame-specific abstraction (Laptop's base line). That's the entire list.

---

## Token reference

All values below are real tokens in `styles/tokens.css` — nothing in this system introduces a raw, un-tokenised number.

| Token | Value | Used for |
|---|---|---|
| `--colour-border` | `#DED9D0` | Frame border, light sections |
| `--colour-border-strong` | `#C8C3BA` | Frame border on hover; Laptop base line, light sections |
| `--colour-border-dark` | `#2E2E2B` | Frame border, dark sections; Laptop base line, dark sections |
| `--colour-surface-secondary` | `#EFEDE7` | Frame background (behind the image, visible during load) |
| `--colour-surface-dark-secondary` | `#242421` | Frame background, dark sections |
| `--colour-ink-secondary` | `#6B6B67` | Caption text, light sections |
| `--colour-ink-secondary-inverted` | `#B5B3AE` | Caption text, dark sections |
| `--frame-landscape` | `16 / 9` | Browser frame ratio |
| `--frame-laptop` | `16 / 10` | Laptop frame ratio *(new in v1.1)* |
| `--frame-tablet` | `4 / 3` | Tablet frame ratio *(new in v1.1)* |
| `--frame-phone` | `9 / 19.5` | Phone frame ratio *(new in v1.1)* |
| `--frame-card` | `3 / 2` | Browser frame, card-thumbnail override (Work page case studies) |
| `--radius-flat` | `0` | Browser, Laptop *(new in v1.1)* |
| `--radius-sm` | `var(--space-2)` = `8px` | Tablet *(new in v1.1)* |
| `--radius-md` | `var(--space-4)` = `16px` | Phone *(new in v1.1)* |
| `--text-caption` | `11px / wght 400 / ls 0.03em` | Caption typography |
| `--stack-xs` | `8px` | Gap between frame and caption; gap above Laptop's base line |
| `--motion-quick` | `150ms ease-out` | Hover transition (border-colour, transform) |

---

## Browser Frame

**Ratio:** 16:9 (`--frame-landscape`), or 3:2 (`--frame-card`) when used as a narrower thumbnail — Work page's four Selected Work case studies use the card override; the Featured Study breath image uses the default landscape ratio.
**Radius:** 0 (`--radius-flat`) — flush corners, a print-page metaphor.
**Border:** 1px solid `--colour-border` (`--colour-border-dark` on dark sections).
**Background:** `--colour-surface-secondary`, visible behind the image during load.
**Chrome:** none.
**Caption:** optional, e.g. "Oneness Clinic — Homepage."

**Figma reference dimensions** (build at 1200px width, scale as a component):
- Landscape variant: 1200 × 675px (16:9)
- Card variant: 1200 × 800px (3:2)
- Corner radius: 0 on all four corners
- Stroke: 1px, inside, `#DED9D0`
- Fill (behind image): `#EFEDE7`
- Caption: 8px below frame, DM Sans, 11px/400, 3% letter-spacing, `#6B6B67`

**States:** at rest — 1px `#DED9D0` border, no shadow. On hover — border shifts to `#C8C3BA` (or `#B5B3AE` ink-secondary-inverted on dark), frame lifts 1px, 150ms ease-out. No shadow at either state.

---

## Laptop Frame

**Ratio:** 16:10 (`--frame-laptop`) — the one new ratio introduced for this system; slightly taller than the browser frame's 16:9, reading as a laptop screen without needing a literal laptop illustration.
**Radius:** 0 (`--radius-flat`) — same as Browser; the two are visually closest by design, since a laptop is "a browser in a slightly different proportion, sitting on something."
**Border:** identical to Browser.
**Chrome:** none.
**The one abstraction:** a single 3px-tall hairline, 60% of the frame's width, centred, 8px (`--stack-xs`) below the frame — standing in for the laptop's lower half. No hinge, no keyboard texture, no trackpad, no logo. This is the minimum mark that reads as "there is a base here" without illustrating one.

**Figma reference dimensions** (build at 1200px width):
- Screen: 1200 × 750px (16:10)
- Corner radius: 0
- Stroke: 1px, inside, `#DED9D0`
- Base line: 720px wide (60% of 1200), 3px tall, centred horizontally, 8px below the screen's bottom edge, fill `#C8C3BA`
- Caption (if used): 8px below the base line, not below the screen — the base line is part of the frame, the caption follows it

**States:** identical hover treatment to Browser (border-colour shift + 1px lift on the screen only — the base line does not move or change colour on hover, it's static infrastructure).

---

## Tablet Frame

**Ratio:** 4:3 (`--frame-tablet`) — a landscape tablet proportion, distinct enough from both Browser (16:9) and Laptop (16:10) to read as a different object at a glance.
**Radius:** 8px (`--radius-sm`) — the first point of shape differentiation in the system. Just enough curvature to read as "handheld," not enough to be a literal device illustration.
**Border:** identical to Browser/Laptop.
**Chrome:** none. No home button, no camera dot, no bezel.
**Width constraint:** unlike Browser/Laptop (which can stretch to fill a wide column), Tablet is capped at 480px and centred — it's meant to sit inline, not full-bleed.

**Figma reference dimensions** (build at 480px width — this is the frame's actual max-width, not just a reference scale):
- Screen: 480 × 360px (4:3)
- Corner radius: 8px, all four corners
- Stroke: 1px, inside, `#DED9D0`
- Centred within its containing column

**States:** same hover treatment as Browser.

---

## Phone Frame

**Ratio:** 9:19.5 (`--frame-phone`) — a contemporary phone screen proportion.
**Radius:** 16px (`--radius-md`) — the largest radius in the system, matching the proportionally larger curvature real phones have relative to their size. Still an abstraction: no notch, no Dynamic Island, no side buttons, no camera cutout.
**Border:** identical to the rest of the system.
**Chrome:** none.
**Width constraint:** capped at 280px, centred — the narrowest frame in the system, meant to sit inline within a paragraph-width column or beside other frames, never full-bleed.

**Figma reference dimensions** (build at 280px width — actual max-width):
- Screen: 280 × 607px (9:19.5, rounded)
- Corner radius: 16px, all four corners
- Stroke: 1px, inside, `#DED9D0`
- Centred within its containing column

**States:** same hover treatment as the rest of the system.

---

## Figma component structure

Build this as **one Figma component with a `Variant` property** (`Browser` / `Laptop` / `Tablet` / `Phone`), not four separate components — that's the direct Figma equivalent of the single `DeviceFrame.tsx` React component with a `variant` prop, and it keeps the shared properties (border colour, hover state, caption style) от drifting apart the way four independent components inevitably would.

**Recommended layer structure:**
```
DeviceFrame [component set]
 └─ Variant=Browser / Laptop / Tablet / Phone
     ├─ Screen (frame, fill = image or #EFEDE7 placeholder, stroke 1px #DED9D0, corner radius per variant)
     │   └─ Image (fill container, clipped to Screen's radius)
     ├─ Base (Laptop only — rectangle, 3px, 60% width, #C8C3BA, visible via boolean property "Show Base")
     └─ Caption (text layer, DM Sans 11px/400/3% tracking, #6B6B67, visible via boolean property "Show Caption")
```
Add two boolean component properties — `Show Base` (auto-true only when Variant=Laptop) and `Show Caption` (designer's choice per instance, matching the React component's optional `caption` prop) — plus a text override property for the caption content itself.

Add a second, nested component for the **hover state** (border `#C8C3BA`, Screen frame Y-offset −1) as a separate variant property (`State=Default/Hover`), so it can be swapped or used in interactive prototyping without duplicating the whole structure.

**Do not** build device bezels as separate detailed layers "just in case they're needed later" — the entire point of this system is that they're deliberately absent. If a future project genuinely needs literal device mockups (e.g. an App Store listing), that's a different, explicitly commercial system and should not be added as options to this component.

---

## CSS implementation notes

**Files:**
- `styles/tokens.css` — `--radius-flat/-sm/-md` and `--frame-laptop/-tablet/-phone` (v1.1 additions, Section 4 Layout and Section 6 Border)
- `styles/components/10-media.css` — `.device-frame` system (`.device-frame__screen`, `.device-frame__base`, `.device-frame__caption`, per-variant modifiers)
- `components/media/DeviceFrame.tsx` — the React component, `variant` prop drives everything
- `components/media/MockupFrame.tsx` — thin backward-compatible wrapper around `DeviceFrame` with `variant="browser"` fixed; existing call sites (Work page) needed zero changes

**Usage:**
```tsx
import DeviceFrame from '@/components/media/DeviceFrame'

// Browser (default landscape 16:9)
<DeviceFrame variant="browser" src="/assets/..." alt="..." caption="Oneness Clinic — Homepage" />

// Browser, card ratio (Work page case-study thumbnails)
<DeviceFrame variant="browser" aspect="card" src="..." alt="..." />

// Laptop
<DeviceFrame variant="laptop" src="..." alt="..." caption="..." />

// Tablet / Phone
<DeviceFrame variant="tablet" src="..." alt="..." />
<DeviceFrame variant="phone" src="..." alt="..." />
```

**What each variant resolves to automatically** (no need to pass `aspect` unless overriding): `browser` → `--frame-landscape`, `laptop` → `--frame-laptop`, `tablet` → `--frame-tablet`, `phone` → `--frame-phone`. The `aspect` prop exists specifically for the one documented override case (Browser/card).

**Accessibility:** `DeviceFrame` renders a semantic `<figure>` / `<figcaption>` pair when a caption is supplied — this is a real improvement over the original `.mockup-frame`, which had no semantic caption relationship at all. `alt` remains required on every instance (inherited from `ResponsiveImage`).

**Reduced motion:** the hover lift is wrapped in the existing sitewide `@media (prefers-reduced-motion: reduce)` rule in `tokens.css` (suppresses all `transition-duration`) plus an explicit `transform: none` override in `10-media.css` — consistent with how `BreathImage`'s zoom and `IconMark`'s (lack of) motion are already handled.

---

## Migration note — what changed from the first pass

The Work page's original `MockupFrame` (built in response to the Visual Direction document, before this system existed) used a small top toolbar with three dots — a light-touch skeuomorphic gesture that this system's explicit "no fake browser chrome" requirement rules out. Rather than leave two inconsistent frame treatments in the codebase, `MockupFrame.tsx` now renders `DeviceFrame` internally with `variant="browser"` fixed. Every existing usage (Featured Study breath image, four Selected Work case studies) picked up the new chrome-free, captioned treatment automatically — no page file was edited to make this happen. Verified with a full `next build` after the change: zero errors, chrome markup confirmed absent from the generated HTML.

**Not yet wired into any page:** Laptop, Tablet, and Phone variants are built and verified but not yet placed anywhere in the live site — the Visual Direction document only calls for Browser frames (Work page case studies + Featured Study). Use them wherever a future page genuinely needs to show a project across device sizes; the component is ready.
