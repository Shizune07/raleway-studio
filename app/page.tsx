import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Raleway Studio — We help good businesses be seen for what they are',
  description: 'Raleway Studio closes the gap between what your business genuinely is and what the world can currently see it to be. Premium website design, brand identity, and digital strategy.',
  alternates: { canonical: 'https://www.ralewaystudio.com/' },
  openGraph: { url: 'https://www.ralewaystudio.com/' },
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Raleway Studio',
  url: 'https://www.ralewaystudio.com/',
  description: 'We help good businesses be seen for what they are.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  about: { '@type': 'Organization', name: 'Raleway Studio' },
}

const principles = [
  {
    num: '01',
    title: 'We diagnose before we design.',
    desc: 'Every project begins with a structured discovery process. We need to understand what the problem actually is — not assume it is what it first appears to be.',
  },
  {
    num: '02',
    title: 'We challenge before we agree.',
    desc: 'When we believe a direction is wrong, we say so. Agreement that doesn\'t serve the business isn\'t professionalism — it\'s self-protection.',
  },
  {
    num: '03',
    title: 'Strategy before surface.',
    desc: 'A website is not the solution. It is the expression of a solution. The positioning, the narrative, the content architecture — these come before anything visual.',
  },
  {
    num: '04',
    title: 'We measure by legibility, not aesthetics.',
    desc: 'The work is successful when the right people encounter our clients and understand — quickly, clearly — whether this business is right for them. Beautiful is secondary to clear.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />

      {/* Section 01 — The Problem */}
      <section className="hp-hero">
        <div className="container">
          <span className="hp-hero__eyebrow">Raleway Studio</span>
          <h1 className="hp-hero__h1">
            There is a specific kind of struggle
            that looks like a branding problem.
            <span className="hp-hero__or">Or a marketing problem.</span>
            <span className="hp-hero__or">Or a website problem.</span>
            <span className="hp-hero__refute">It is none of these things.</span>
            <span className="hp-hero__reveal">
              It is the gap between what your business genuinely is — and what the world can currently see it to be.
            </span>
          </h1>
        </div>
      </section>

      {/* Section 02 — The Diagnosis */}
      <section className="hp-diagnosis">
        <div className="container">
          <div className="hp-diagnosis__inner">
            <p className="hp-diagnosis__item">
              Visitors land on your website and leave without contacting you. Not because you&rsquo;re
              unimpressive. Because they couldn&rsquo;t tell, quickly enough, whether you were the right fit.
            </p>
            <p className="hp-diagnosis__item">
              You&rsquo;ve explained what you do to potential clients many times. The explanation keeps
              changing — not because you don&rsquo;t know your business, but because you haven&rsquo;t
              found the version of it that lands.
            </p>
            <p className="hp-diagnosis__item">
              The clients who find you are inconsistent. Some are a perfect fit. Many aren&rsquo;t.
              The mismatch isn&rsquo;t random — it&rsquo;s a signal that the business isn&rsquo;t yet
              communicating clearly enough to attract the right people and repel the wrong ones.
            </p>
            <p className="hp-diagnosis__item">
              Your public presence — website, how you describe yourself, how you show up — doesn&rsquo;t
              yet reflect the quality of what happens behind closed doors.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03 — Why We Built Raleway */}
      <section className="hp-why">
        <div className="container">
          <div className="hp-why__inner">
            <span className="hp-why__eyebrow">Why We Built Raleway</span>
            <h2>We believe most businesses are closer to where they want to be than their market can currently see them.</h2>
            <p>
              The problem is rarely the quality of the work. It is the distance between that quality
              and what the world can actually perceive.
            </p>
            <p className="hp-why__close">
              Raleway Studio was built for that distance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 04 — How We Think */}
      <section className="hp-method">
        <div className="container">
          <p className="hp-method__label">This is how we work.</p>
          <ul className="hp-method__list">
            {principles.map(p => (
              <li key={p.num} className="hp-method__item">
                <span className="hp-method__num">{p.num}</span>
                <div className="hp-method__content">
                  <div className="hp-method__title">{p.title}</div>
                  <p className="hp-method__desc">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/method" className="hp-method__link">
            Explore the Raleway Method
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Section 05 — Proof of Thinking */}
      <section className="hp-proof">
        <div className="container">
          <div className="hp-proof__inner">
            <span className="hp-proof__eyebrow">Proof of Thinking</span>
            <h2>Before we wrote a single brief for a client, we applied our method to ourselves.</h2>
            <p>
              We ran a full discovery process on our own business. We challenged our positioning,
              questioned assumptions we had held since the beginning, documented our standards, and
              rebuilt our brand identity from the foundation up — applying the same rigour we would
              apply to any client.
            </p>
            <p>
              We did this because we believe a studio cannot honestly ask clients to do something
              it hasn&rsquo;t done first.
            </p>
            <p className="hp-proof__close">
              The care in this page is the same care we bring to yours.
            </p>
            <Link href="/about" className="hp-proof__link">
              See how we think
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 06 — Qualifier + Invitation */}
      <section className="hp-cta">
        <div className="container">
          <div className="hp-cta__qualifier">
            <p className="hp-cta__q1">We don&rsquo;t work with every business.</p>
            <p className="hp-cta__q2">
              We work best with founders who are seriously invested in understanding the gap between
              what their business is and what the market currently sees — and are prepared to do
              something about it.
            </p>
          </div>
          <div className="hp-cta__actions">
            <Link href="/start" className="hp-cta__primary">
              Start a conversation
            </Link>
            <Link href="/thinking" className="hp-cta__secondary">
              Read our thinking
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
