/**
 * DiagnosisScene — original line-art illustration (Version 0.7, bold-blend branch)
 *
 * Built after Seira pointed at pleurat.com and asked for the illustrated,
 * hand-drawn quality of that portfolio. Pleurat's own scenes (a city
 * street, a live workspace demo) are bespoke to his personal brand and
 * his AI/product-design audience — not something to reproduce. What
 * carries over is the *method*: an original, owned line-art illustration
 * can do the "make it feel alive" work that a stock photo was never
 * going to do honestly (see RALEWAY-VISUAL-DIRECTION-v1.1.md Rule 4 —
 * no stock photography of people, still true even mid-override).
 *
 * The scene is literal, not decorative: a magnifying lens held over a
 * cluttered signboard reveals three clean, evenly-spaced bars inside its
 * circle — the exact claim Raleway's whole site is making ("the distance
 * between what your business genuinely is and what the world can clearly
 * see it to be"). Same stroke discipline as RalewayMark — round caps,
 * consistent weight, no fill except the two accent moments (the lens
 * handle, one clean "mark" dot) — so it reads as part of the same visual
 * system, not a bolted-on asset.
 *
 * Pure SVG, hand-coded, no external image dependency — this is the
 * illustrated-content answer to the "empty background" problem raised at
 * the start of this session, after every route to real photography
 * proved unreachable in this environment (see project memory).
 */

interface DiagnosisSceneProps {
  className?: string
  'aria-hidden'?: boolean
}

export default function DiagnosisScene({ className, ...rest }: DiagnosisSceneProps) {
  return (
    <svg
      className={`diagnosis-scene${className ? ` ${className}` : ''}`}
      viewBox="0 0 580 420"
      fill="none"
      aria-hidden={rest['aria-hidden'] !== false}
      role="img"
    >
      {/* Signboard frame */}
      <rect
        x="30" y="60" width="480" height="270" rx="10"
        stroke="var(--colour-border-strong)" strokeWidth="1.5"
      />

      {/* Cluttered content — the "before": illegible scribble */}
      <g stroke="var(--colour-ink-tertiary)" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
        <line x1="70" y1="110" x2="150" y2="97" />
        <line x1="92" y1="140" x2="205" y2="153" />
        <line x1="62" y1="182" x2="172" y2="171" />
        <line x1="86" y1="222" x2="232" y2="236" />
        <line x1="101" y1="262" x2="211" y2="251" />
        <line x1="252" y1="101" x2="341" y2="120" />
        <line x1="262" y1="150" x2="311" y2="136" />
        <line x1="232" y1="191" x2="301" y2="205" />
        <line x1="241" y1="241" x2="321" y2="227" />
        <line x1="182" y1="281" x2="261" y2="291" />
        <line x1="311" y1="271" x2="381" y2="285" />
        <line x1="401" y1="111" x2="440" y2="97" />
        <line x1="411" y1="151" x2="455" y2="160" />
        <line x1="421" y1="261" x2="460" y2="246" />
        <line x1="61" y1="281" x2="110" y2="271" />
        <circle cx="132" cy="121" r="3.5" fill="var(--colour-ink-tertiary)" opacity="0.85" />
        <circle cx="281" cy="271" r="3" fill="var(--colour-ink-tertiary)" opacity="0.85" />
      </g>

      {/* Shelf line + small product silhouettes */}
      <g stroke="var(--colour-ink-tertiary)" strokeWidth="1.4" strokeLinecap="round" opacity="0.7">
        <line x1="60" y1="326" x2="470" y2="326" />
        <rect x="70" y="300" width="26" height="26" rx="4" />
        <circle cx="140" cy="311" r="15" />
        <rect x="188" y="305" width="20" height="21" rx="10" />
      </g>

      {/* Lens — occludes the clutter behind it, fill matches the page surface */}
      <defs>
        <clipPath id="diagnosisLensClip">
          <circle cx="380" cy="190" r="115" />
        </clipPath>
      </defs>
      <circle cx="380" cy="190" r="115" fill="var(--colour-surface)" />

      {/* Clean content revealed inside the lens — the "after" */}
      <g clipPath="url(#diagnosisLensClip)">
        <circle cx="335" cy="150" r="6" fill="var(--colour-accent-warm)" />
        <line x1="352" y1="150" x2="440" y2="150" stroke="var(--colour-ink)" strokeWidth="3" strokeLinecap="round" />
        <line x1="335" y1="180" x2="425" y2="180" stroke="var(--colour-ink-secondary)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="335" y1="200" x2="405" y2="200" stroke="var(--colour-ink-secondary)" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="335" y="222" width="76" height="20" rx="10" fill="var(--colour-accent)" />
      </g>

      {/* Lens ring + handle */}
      <circle cx="380" cy="190" r="115" stroke="var(--colour-ink)" strokeWidth="2.5" />
      <line
        x1="468" y1="264" x2="537" y2="322"
        stroke="var(--colour-accent-warm)" strokeWidth="10" strokeLinecap="round"
      />
    </svg>
  )
}
