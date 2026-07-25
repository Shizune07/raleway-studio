/**
 * IconMark — Version 1.1 Visual Layer, Illustration System
 * Source: styles/RALEWAY-VISUAL-DIRECTION-v1.1.md — "Illustration System"
 *
 * Single-weight geometric line marks, used in exactly two places per the
 * Visual Direction doc: Method's four principles (Section 03) and four
 * process phases (Section 04). Not a general-purpose icon library — do not
 * reach for this component outside Method without updating the spec first.
 *
 * Construction: 24×24 viewBox, 1.5px stroke, no fill, compass-and-straightedge
 * geometry. Each mark abstracts its verb rather than depicting a literal
 * object (no stethoscopes, no magnifying glasses with a shine on them).
 * Colour is set by the parent via `currentColor` — see .icon-mark /
 * .section--dark .icon-mark in styles/components/10-media.css.
 *
 * Always aria-hidden: the adjacent service-name / service-counter already
 * labels the item; the mark is a structural flourish, not information.
 */

import type { ReactNode } from 'react'

export type IconName =
  | 'diagnose'
  | 'challenge'
  | 'strategy'
  | 'legibility'
  | 'discover'
  | 'define'
  | 'design'
  | 'deliver'

const PATHS: Record<IconName, ReactNode> = {
  // "We diagnose before we design" — viewfinder corners + centre point.
  // Abstracts close inspection without drawing a literal magnifying glass.
  diagnose: (
    <>
      <path d="M6 10V6h4" />
      <path d="M14 6h4v4" />
      <path d="M6 14v4h4" />
      <path d="M18 14v4h-4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  // "We challenge before we agree" — two lines crossing at an unequal angle,
  // suggesting friction/disagreement rather than a neutral "X" cancel mark.
  challenge: (
    <>
      <path d="M5 7l14 8" />
      <path d="M8 19l9-15" />
    </>
  ),
  // "Strategy before surface" — left-aligned stepped bars, widest at the
  // base: foundation before finish.
  strategy: (
    <>
      <path d="M4 7h8" />
      <path d="M4 12h12" />
      <path d="M4 17h16" />
    </>
  ),
  // "We measure by legibility, not aesthetics" — a focus reticle.
  legibility: (
    <>
      <circle cx="12" cy="12" r="6" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
    </>
  ),
  // Phase 01 — Discover: an open compass sweep, not yet closed.
  discover: (
    <>
      <path d="M7 6.5a8 8 0 1 0 10 10.3" />
      <circle cx="16.8" cy="16.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  // Phase 02 — Define: two opposite corner brackets — a boundary drawn,
  // distinct from Diagnose's four-corner viewfinder.
  define: (
    <>
      <path d="M6 10V6h4" />
      <path d="M18 14v4h-4" />
    </>
  ),
  // Phase 03 — Design: a composed 2×2 grid.
  design: (
    <>
      <rect x="4" y="4" width="7" height="7" />
      <rect x="13" y="4" width="7" height="7" />
      <rect x="4" y="13" width="7" height="7" />
      <rect x="13" y="13" width="7" height="7" />
    </>
  ),
  // Phase 04 — Deliver: a line arriving at a fixed point — handoff.
  deliver: (
    <>
      <path d="M4 20L17 7" />
      <rect x="14" y="4" width="6" height="6" />
    </>
  ),
}

interface IconMarkProps {
  name: IconName
  className?: string
}

export default function IconMark({ name, className }: IconMarkProps) {
  return (
    <svg
      className={`icon-mark${className ? ` ${className}` : ''}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
