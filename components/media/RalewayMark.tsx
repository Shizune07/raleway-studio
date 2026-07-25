/**
 * RalewayMark — Signature Mark System (Version 2)
 * Source: styles/RALEWAY-SIGNATURE-MARK-v2.md
 *
 * The site's one recurring geometric motif, derived from the actual studio
 * mark (public/assets/logo-icon.png — a ringed circle, segments radiating
 * from a centre point, one asymmetric leaf breaking the ring). This
 * component carries the mark's *structure* — ring, radiating spokes, one
 * broken arc — stripped of the literal citrus reading (no colour gradient,
 * no rind, no leaf shape). Same principle as IconMark's existing verbs:
 * abstract the geometry, never reproduce the literal object.
 *
 * `variant="full"` — ring + six spokes + the broken-arc tick. Used for
 * section dividers, diagram hubs, and the one large background placement.
 * `variant="fragment"` — a partial wedge (two spokes + arc segment), used
 * for bullets, nav cues, and annotation corner marks — small, quiet,
 * legible at 16–24px.
 *
 * Colour is set by the parent via `currentColor` — components apply
 * var(--colour-accent-warm), never var(--colour-accent) (that tier stays
 * reserved for the CTA/result/focus-ring, per tokens.css).
 */

interface RalewayMarkProps {
  variant?: 'full' | 'fragment'
  size?: number
  className?: string
  'aria-hidden'?: boolean
}

export default function RalewayMark({
  variant = 'full',
  size = 24,
  className,
  ...rest
}: RalewayMarkProps) {
  return (
    <svg
      className={`raleway-mark raleway-mark--${variant}${className ? ` ${className}` : ''}`}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={rest['aria-hidden'] !== false}
    >
      {variant === 'full' ? (
        <>
          {/* Ring */}
          <circle cx="20" cy="20" r="14" strokeWidth="1.75" />
          {/* Six spokes from centre */}
          <path
            d="M20 20L20 6M20 20L32.1 13M20 20L32.1 27M20 20L20 34M20 20L7.9 27M20 20L7.9 13"
            strokeWidth="1.4"
          />
          {/* Centre point */}
          <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
          {/* Broken-arc tick — the leaf's asymmetry, abstracted */}
          <path d="M31 7c2.4.4 4.2 1.8 5 3.8" strokeWidth="1.75" strokeDasharray="0.4 3.6" />
        </>
      ) : (
        <>
          {/* Fragment: one open arc + two spokes — a wedge, not the whole wheel */}
          <path d="M9 27a14 14 0 0 1 9.8-19.6" strokeWidth="1.75" />
          <path d="M20 20L20 8.1M20 20L30.5 14" strokeWidth="1.4" />
          <circle cx="20" cy="20" r="1.4" fill="currentColor" stroke="none" />
        </>
      )}
    </svg>
  )
}
