import Image from 'next/image'
import { FRAME_RATIO, type FrameRatio, shimmerBlurDataURL } from '@/lib/media'

/**
 * ResponsiveImage — Version 1.1 Visual Layer, base primitive
 * Source: styles/RALEWAY-VISUAL-DIRECTION-v1.1.md
 *
 * Every image on the site should render through this component (or through
 * MockupFrame / BreathImage, which both wrap it) rather than a bare
 * next/image — it is the single place responsive sizing, lazy loading,
 * blur-up, and CLS-safe aspect-ratio reservation are implemented once.
 *
 * CLS: the wrapper reserves `aspectRatio` before the image loads, so the
 * box never resizes when the image arrives — this is the zero-layout-shift
 * mechanism, independent of the blur placeholder (which is a visual nicety,
 * not what prevents CLS).
 *
 * Accessibility: `alt` is a required prop, not optional with a default —
 * every call site must supply real, specific alt text. Purely decorative
 * imagery should use IconMark (aria-hidden) or the CSS-only patterns
 * already in the design system, not this component with an empty alt.
 */

interface ResponsiveImageProps {
  src: string
  alt: string
  aspect?: FrameRatio
  /** Explicit aspect-ratio override (e.g. for a non-standard frame). Takes precedence over `aspect`. */
  aspectRatio?: string
  sizes?: string
  objectPosition?: string
  priority?: boolean
  /** Real blur data URL for a known, final photograph. Falls back to the generic on-brand shimmer. */
  blurDataURL?: string
  className?: string
}

export default function ResponsiveImage({
  src,
  alt,
  aspect = 'landscape',
  aspectRatio,
  sizes = '100vw',
  objectPosition = '50% 50%',
  priority = false,
  blurDataURL,
  className,
}: ResponsiveImageProps) {
  return (
    <div
      className={`responsive-image${className ? ` ${className}` : ''}`}
      style={{ aspectRatio: aspectRatio ?? FRAME_RATIO[aspect] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        placeholder="blur"
        blurDataURL={blurDataURL ?? shimmerBlurDataURL()}
        style={{ objectFit: 'cover', objectPosition }}
      />
    </div>
  )
}
