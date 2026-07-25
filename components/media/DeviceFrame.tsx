import ResponsiveImage from './ResponsiveImage'
import type { FrameRatio } from '@/lib/media'

/**
 * DeviceFrame — Version 1.1 Visual Layer, Device Frame System
 * Source: styles/RALEWAY-MOCKUP-SYSTEM-v1.1.md
 *
 * One component, one visual language, four variants — browser, laptop,
 * tablet, phone. Deliberately NOT skeuomorphic: no fake browser chrome
 * (no traffic-light dots, no URL bar), no device bezels, no notches, no
 * glossy effects, no drop shadows. The only things that differ between
 * variants are aspect ratio, corner radius, and (laptop only) a single
 * abstracted base line — everything else is shared: a 1px hairline
 * border in --colour-border, zero shadow at rest, and an optional
 * editorial caption set in the interface type layer instead of a
 * skeuomorphic toolbar.
 *
 * MockupFrame (the v1.1-first-pass browser frame with chrome dots) now
 * delegates to this component with variant="browser" — see MockupFrame.tsx.
 * Existing call sites (Work page) needed no changes.
 */

export type DeviceVariant = 'browser' | 'laptop' | 'tablet' | 'phone'

const VARIANT_ASPECT: Record<DeviceVariant, FrameRatio> = {
  browser: 'landscape',
  laptop: 'laptop',
  tablet: 'tablet',
  phone: 'phone',
}

interface DeviceFrameProps {
  variant: DeviceVariant
  src: string
  alt: string
  /** Editorial label below the frame — e.g. "Oneness Clinic — Homepage".
      This is the replacement for fake browser chrome: typography, not UI. */
  caption?: string
  /** Override the variant's default aspect ratio (browser only, in practice —
      e.g. `card` for a narrower thumbnail treatment). */
  aspect?: FrameRatio
  objectPosition?: string
  priority?: boolean
  sizes?: string
  className?: string
}

export default function DeviceFrame({
  variant,
  src,
  alt,
  caption,
  aspect,
  objectPosition,
  priority = false,
  sizes = '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw',
  className,
}: DeviceFrameProps) {
  const resolvedAspect = aspect ?? VARIANT_ASPECT[variant]
  const resolvedPosition = objectPosition ?? (variant === 'browser' ? '50% 0%' : '50% 50%')

  return (
    <figure
      className={`device-frame device-frame--${variant}${className ? ` ${className}` : ''}`}
    >
      <div className="device-frame__screen">
        <ResponsiveImage
          src={src}
          alt={alt}
          aspect={resolvedAspect}
          sizes={sizes}
          objectPosition={resolvedPosition}
          priority={priority}
        />
      </div>
      {variant === 'laptop' && <span className="device-frame__base" aria-hidden="true" />}
      {caption && <figcaption className="device-frame__caption">{caption}</figcaption>}
    </figure>
  )
}
