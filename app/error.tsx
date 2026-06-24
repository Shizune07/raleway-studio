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
    <section style={{ padding: '8rem 0', textAlign: 'center' }}>
      <div className="container">
        <p style={{ fontSize: '4rem', margin: '0 0 1rem', lineHeight: 1 }}>⚠️</p>
        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', marginBottom: '1rem' }}>Something went wrong</h1>
        <p style={{ maxWidth: 480, margin: '0 auto 2.5rem', fontSize: '1.05rem' }}>
          An unexpected error occurred. You can try again or head back home.
        </p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <button onClick={reset} className="btn btn-primary">Try Again</button>
          <Link href="/" className="btn btn-outline">Go Home</Link>
        </div>
      </div>
    </section>
  )
}
