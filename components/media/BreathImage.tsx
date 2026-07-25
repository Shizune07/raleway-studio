import ResponsiveImage from './ResponsiveImage'

/**
 * BreathImage — Version 1.1 Visual Layer
 * Source: styles/RALEWAY-VISUAL-DIRECTION-v1.1.md — Rule 2 ("one breath image per page")
 *
 * Full-bleed still image used as a pause between reading passages — never
 * more than one per page. Deliberately reuses the existing scroll-entrance
 * infrastructure (`.animate-entrance` / MotionInit's IntersectionObserver)
 * rather than introducing a second JS-driven motion system: the wrapper
 * gets `.animate-entrance` like any other section element, and the slow
 * zoom is a pure-CSS animation gated on the same `.motion-entered` class
 * MotionInit already applies. No new client component or effect needed.
 *
 * `prefers-reduced-motion` is already handled globally in tokens.css
 * (suppresses all animation-duration), so the slow zoom is automatically
 * disabled for visitors who request it — see styles/components/10-media.css.
 */

interface BreathImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export default function BreathImage({ src, alt, priority = false, className }: BreathImageProps) {
  return (
    <div className={`breath-image animate-entrance${className ? ` ${className}` : ''}`}>
      <ResponsiveImage
        src={src}
        alt={alt}
        aspect="landscape"
        sizes="100vw"
        priority={priority}
        className="breath-image__media"
      />
    </div>
  )
}
