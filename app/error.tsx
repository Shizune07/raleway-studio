'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    // V1.0 design system — section + container pattern
    <section className="section section--divided" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="section-intro">
          <span className="section-eyebrow">Error</span>
          <h1 className="section-headline">Something went wrong.</h1>
          <p className="section-body">
            An unexpected error occurred. You can try again or return to the homepage.
          </p>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBlockStart: '2.5rem', flexWrap: 'wrap' }}>
            <button onClick={reset} className="btn-primary">
              Try Again
            </button>
            <Link href="/" className="btn-navigate">
              Go Home
              <svg
                width="14"
                height="14"
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
  )
}
