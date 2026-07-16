import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About — Raleway Studio',
  description:
    'Raleway Studio is a premium digital design studio. We help businesses close the gap between their real quality and how they appear online.',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Raleway Studio',
  description:
    'Raleway Studio helps businesses close the gap between their real quality and how they appear online.',
  url: 'https://ralewaystudio.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Raleway Studio',
    url: 'https://ralewaystudio.com',
    founder: {
      '@type': 'Person',
      name: 'Seira',
      jobTitle: 'Founder',
    },
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schemaOrg} />
      <main>

        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="container">
            <span className="about-hero__eyebrow">About</span>
            <h1 className="about-hero__h1">
              We don&apos;t build websites.<br />
              We build the version of your business that earns trust.
            </h1>
            <p className="about-hero__sub">
              Most agencies ask what you need. We ask what your clients need to
              believe — and then we build the thing that makes them believe it.
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="about-story">
          <div className="container">
            <div className="about-story__body">
              <p className="about-story__lead">There is a pattern that kept appearing.</p>
              <p>
                Good businesses. Real expertise. Genuine results. And yet — invisible
                online, or worse, visually communicating something they weren&apos;t.
              </p>
              <p>
                The website looked like it was built in an afternoon. The brand felt
                inconsistent, generic, forgettable. The copywriting was busy trying to
                sound like every other competitor instead of saying the one clear thing
                that made the business worth choosing.
              </p>
              <p>
                Clients would arrive, confused. Opportunities would come and leave
                without converting. Growth kept happening through referrals — the one
                channel that bypasses the digital presence entirely — but plateaued the
                moment the business tried to scale beyond its existing network.
              </p>
              <p className="about-story__pivot">
                This is the pattern Raleway was built to solve.
              </p>
              <p>
                Seira built this studio after years of watching businesses operate at a
                fraction of their perceived value because their digital presence didn&apos;t
                reflect their real quality. Not because they didn&apos;t care. But because
                no one had ever taken the time to understand their business deeply enough
                to translate it into something their audience could actually feel.
              </p>
              <p>
                Raleway exists because most design work is surface-level. Pretty, but
                not positioned. Polished, but not purposeful. And the difference between
                a brand that earns trust and a brand that looks like it&apos;s trying to earn
                trust — that difference is usually invisible to the person building it
                and immediately obvious to the client evaluating it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Standards ── */}
        <section className="about-standards">
          <div className="container">
            <span className="about-standards__label">What we build against</span>
            <div className="about-standards__grid">
              <div className="about-standard">
                <h3>Clarity over decoration</h3>
                <p>Every element serves a purpose. If it doesn&apos;t communicate something, it doesn&apos;t exist.</p>
              </div>
              <div className="about-standard">
                <h3>Timeless over trending</h3>
                <p>Work that holds up in three years. Not work that references this year.</p>
              </div>
              <div className="about-standard">
                <h3>Systems over shortcuts</h3>
                <p>Everything we build is designed to grow with you, not against you.</p>
              </div>
              <div className="about-standard">
                <h3>Trust over impressiveness</h3>
                <p>We&apos;re not trying to win design awards. We&apos;re trying to make your clients feel confident before they even make contact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Founder ── */}
        <section className="about-founder">
          <div className="container">
            <div className="about-founder__inner">
              <div className="about-founder__portrait" aria-hidden="true">
                {/* Swap this div for an <img> or next/image once the portrait file is ready */}
                <div className="about-founder__placeholder" />
              </div>
              <div className="about-founder__content">
                <p className="about-founder__name">Seira</p>
                <p className="about-founder__title">Founder, Raleway Studio</p>
                <blockquote className="about-founder__quote">
                  &ldquo;I built Raleway because I believe the gap between quality and
                  perceived quality is one of the most solvable problems in business.
                  And that digital design — done with real intention — closes it.&rdquo;
                </blockquote>
                <Link href="/start" className="about-founder__cta">
                  Work with us →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
