/**
 * IconMark — Signature Mark System (Version 2)
 * Source: styles/RALEWAY-SIGNATURE-MARK-v2.md (supersedes the V1.1
 * "Illustration System" section of RALEWAY-VISUAL-DIRECTION-v1.1.md)
 *
 * Used in the same two places as before — Method's four principles
 * (Section 03) and four process phases (Section 04). Not a general-purpose
 * icon library — do not reach for this component outside Method without
 * updating the spec first.
 *
 * V1.1 → V2 change, by explicit direction: these marks were geometric
 * (compass-and-straightedge) and structural-only (never the accent
 * colour). V2 redraws all eight from the studio's own mark geometry —
 * the ring, the radiating spokes, the one broken arc — shared vocabulary
 * with RalewayMark.tsx, rendered in --colour-accent-warm rather than ink.
 * Each mark still abstracts its verb rather than depicting a literal
 * object; only the drawing language and colour changed, not that rule.
 *
 * Construction: 40×40 viewBox (up from 24×24 — meant to be seen, not just
 * present), 1.75px primary / 1.4px secondary stroke, no fill except the
 * small centre-point dots the ring-and-spoke vocabulary uses throughout.
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
  // "We diagnose before we design" — two opposite ring-arc fragments (the
  // mark's own ring, opened into a viewfinder) + the mark's centre point.
  diagnose: (
    <>
      <path d="M8 15a14 14 0 0 1 7-11.5" strokeWidth="1.75" />
      <path d="M32 25a14 14 0 0 1-7 11.5" strokeWidth="1.75" />
      <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // "We challenge before we agree" — two spokes, drawn through rather than
  // from the centre, crossing at an unequal angle: friction, not an X.
  challenge: (
    <>
      <path d="M7.9 13L32.1 27" strokeWidth="1.75" />
      <path d="M13.5 32.5L28 8.5" strokeWidth="1.75" />
    </>
  ),
  // "Strategy before surface" — three spoke-length bars, widest at the
  // base: foundation before finish.
  strategy: (
    <>
      <path d="M7 14h14" strokeWidth="1.4" />
      <path d="M7 20h20" strokeWidth="1.75" />
      <path d="M7 26h26" strokeWidth="1.4" />
    </>
  ),
  // "We measure by legibility, not aesthetics" — the ring at half scale
  // plus four spoke ticks: a focus reticle built from the same vocabulary.
  legibility: (
    <>
      <circle cx="20" cy="20" r="8" strokeWidth="1.75" />
      <path d="M20 4v4M20 32v4M4 20h4M32 20h4" strokeWidth="1.4" />
    </>
  ),
  // Phase 01 — Discover: the ring, open — one continuous arc that hasn't
  // closed yet, ending at a single point (the same broken-arc logic as
  // RalewayMark's full variant, drawn larger).
  discover: (
    <>
      <path d="M11 9.5a14 14 0 1 0 17.5 18" strokeWidth="1.75" />
      <circle cx="28.5" cy="27.5" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // Phase 02 — Define: two opposite spoke-corner brackets — a boundary
  // drawn, distinct from Diagnose's ring-arc viewfinder.
  define: (
    <>
      <path d="M8 15V8h7" strokeWidth="1.75" />
      <path d="M32 25v7h-7" strokeWidth="1.75" />
    </>
  ),
  // Phase 03 — Design: four short wedge-pairs radiating from a shared
  // centre — the mark's own segments, composed rather than whole.
  design: (
    <>
      <path d="M20 20L20 9M20 20L28 14" strokeWidth="1.4" />
      <path d="M20 20L31 20M20 20L28 27" strokeWidth="1.4" />
      <path d="M20 20L20 31M20 20L12 27" strokeWidth="1.4" />
      <path d="M20 20L9 20M20 20L12 14" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // Phase 04 — Deliver: a spoke arriving at a fixed point on the ring —
  // handoff, drawn off the true diagonal.
  deliver: (
    <>
      <path d="M8 32L26 12" strokeWidth="1.75" />
      <path d="M19 11l7 .6.8 7" strokeWidth="1.4" />
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
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
