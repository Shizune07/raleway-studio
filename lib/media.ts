/**
 * Media utilities — Version 1.1 Visual Layer
 * Source: styles/RALEWAY-VISUAL-DIRECTION-v1.1.md
 *
 * Shared helpers for the reusable image components in components/media/.
 * Kept framework-light on purpose: no external blur/plaiceholder dependency,
 * just a small generated shimmer SVG in the site's own surface tokens so
 * every image component has a correct, on-brand blur-up state without a
 * build-time asset pipeline.
 */

const SURFACE = '#F6F4EF'
const SURFACE_ALT = '#EFEDE7'

function shimmerSvg(w: number, h: number): string {
  return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop stop-color="${SURFACE_ALT}" offset="0%" />
      <stop stop-color="${SURFACE}" offset="50%" />
      <stop stop-color="${SURFACE_ALT}" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${SURFACE}" />
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`
}

function toBase64(str: string): string {
  // Works in both the server (Node) and edge/client bundling paths.
  if (typeof globalThis.btoa === 'function') return globalThis.btoa(str)
  return Buffer.from(str, 'utf-8').toString('base64')
}

/**
 * Generic shimmer blur placeholder — used for any image component that
 * does not have a real photograph to derive a blur hash from yet
 * (i.e. every placeholder asset under /public/assets/placeholders/).
 * Once a real asset replaces a placeholder, generate a real blurDataURL
 * for it the same way seiraPortraitBlurDataURL was produced below, rather
 * than continuing to use the generic shimmer.
 */
export function shimmerBlurDataURL(w = 32, h = 20): string {
  return `data:image/svg+xml;base64,${toBase64(shimmerSvg(w, h))}`
}

/**
 * Real blur placeholder for the founder portrait (public/assets/seira-jho.jpg),
 * generated once from the actual photograph (16×20 thumbnail, cropped to the
 * same 4:5 frame the component renders at, base64-encoded JPEG). This is the
 * correct approach for any real, final photograph — regenerate if the source
 * image is ever replaced or re-cropped.
 */
export const seiraPortraitBlurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDOEYxGpbZuAXd6ZOKasLRTyQSOH2DhvY54PvVyBEYxFyuML97oeelLrTrFesiqA20cgdaxcjeML21IbVBOpWTJAVTjP1qrqSbSX3MST3NFFL7QJ+6f/9k='

/**
 * Frame ratios — reference tokens.css custom properties directly (rather
 * than duplicating the numeric ratio in JS) so the two files can never
 * drift apart. `portrait` and `square` have no tokens.css equivalent yet
 * (used only by one-off frames like About's founder portrait, which is
 * built directly rather than through ResponsiveImage) and stay literal.
 */
export const FRAME_RATIO = {
  landscape: 'var(--frame-landscape)',  // 16 / 9
  card: 'var(--frame-card)',            // 3 / 2
  laptop: 'var(--frame-laptop)',        // 16 / 10 — Device Frame System
  tablet: 'var(--frame-tablet)',        // 4 / 3   — Device Frame System
  phone: 'var(--frame-phone)',          // 9 / 19.5 — Device Frame System
  portrait: '4 / 5',
  square: '1 / 1',
} as const

export type FrameRatio = keyof typeof FRAME_RATIO
