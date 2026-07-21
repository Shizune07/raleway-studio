import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 – Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      {/* ── 404 — Not Found ──────────────────────────────────────────────
          Layout: centred within a section, no hero (page is not a content page).
          Component: section / container — no design system component needed.
          CTA: btn-primary back to Home. btn-navigate secondary to Start.
          No Threshold — this is a utility page, not a conversion page.  */}
      <section
        id="main-content"
        className="section section--divided"
        aria-label="Page not found"
        style={{ minHeight: '70svh', display: 'flex', alignItems: 'center' }}
      >
        <div className="container">
          <div className="not-found">
            <p className="section-eyebrow">404</p>
            <h1 className="section-headline">
              This page doesn&rsquo;t exist.
            </h1>
            <p className="section-body not-found__body">
              It may have moved, been removed, or the address may be incorrect.
            </p>
            <div className="not-found__actions">
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
              <Link href="/start" className="btn-navigate">
                Start a conversation
                <svg
                  width="14" height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="btn-navigate__arrow"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
