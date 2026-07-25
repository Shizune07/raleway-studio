import DeviceFrame from './DeviceFrame'
import type { FrameRatio } from '@/lib/media'

/**
 * MockupFrame — Version 1.1 Visual Layer
 * Source: styles/RALEWAY-VISUAL-DIRECTION-v1.1.md + RALEWAY-MOCKUP-SYSTEM-v1.1.md
 *
 * Thin, backward-compatible wrapper around DeviceFrame's "browser" variant.
 * Kept as its own named export because every existing call site (the Work
 * page's Featured Study + four Selected Work case studies) already imports
 * MockupFrame — this lets the underlying frame system be replaced (fake
 * browser chrome removed, editorial caption added) without touching a
 * single page file. New call sites should generally reach for DeviceFrame
 * directly so the variant is explicit; MockupFrame remains valid for
 * "browser" specifically.
 */

interface MockupFrameProps {
  src: string
  alt: string
  caption?: string
  aspect?: Extract<FrameRatio, 'card' | 'landscape'>
  objectPosition?: string
  priority?: boolean
  sizes?: string
  className?: string
}

export default function MockupFrame({
  src,
  alt,
  caption,
  aspect = 'card',
  objectPosition,
  priority = false,
  sizes,
  className,
}: MockupFrameProps) {
  return (
    <DeviceFrame
      variant="browser"
      src={src}
      alt={alt}
      caption={caption}
      aspect={aspect}
      objectPosition={objectPosition}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  )
}
