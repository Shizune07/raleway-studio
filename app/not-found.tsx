import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 – Page Not Found | Raleway Studio',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section style={{ padding: '8rem 0', textAlign: 'center' }}>
      <div className="container">
        <p style={{ fontSize: '5rem', margin: '0 0 1rem', lineHeight: 1 }}>🐾</p>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ maxWidth: 480, margin: '0 auto 2.5rem', fontSize: '1.05rem' }}>
          Looks like this page wandered off. Let&apos;s get you back on track.
        </p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
        </div>
      </div>
    </section>
  )
}
