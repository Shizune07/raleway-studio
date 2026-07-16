import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About — Raleway Studio',
  description: 'Raleway Studio is a premium digital design studio. We help businesses close the gap between their real quality and how they appear online.',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Raleway Studio',
  description: 'Raleway Studio helps businesses close the gap between their real quality and how they appear online.',
  url: 'https://ralewaystudio.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Raleway Studio',
    url: 'https://ralewaystudio.com',
    founder: { '@type': 'Person', name: 'Seira', jobTitle: 'Founder & Strategic Lead' },
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
                fraction of their perceived value because their digital presence
                didn&apos;t reflect their real quality. Not because they didn&apos;t
                care. But because no one had ever taken the time to understand their
                business deeply enough to translate it into something their audience
                could actually feel.
              </p>
              <p>
                Raleway exists because most design work is surface-level. Pretty, but
                not positioned. Polished, but not purposeful. And the difference between
                a brand that earns trust and a brand that looks like it&apos;s trying to
                earn trust — that difference is usually invisible to the person building
                it and immediately obvious to the client evaluating it.
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

        {/* ── Team ── */}
        <section className="about-team">
          <div className="container">
            <p className="about-team__intro">
              These standards only hold if the people applying them share them. Everyone
              at Raleway is here because they understand that the work exists to serve
              the client&apos;t business — not to serve the portfolio.
            </p>

            {/* Seira — Strategic Lead */}
            <div className="about-team__lead">
              <div className="about-team__portrait" aria-hidden="true">
                {/* Swap for <img> or next/image once portrait is ready */}
                <div className="about-team__placeholder" />
              </div>
              <div className="about-team__lead-content">
                <span className="about-team__role">Strategy &amp; Leadership</span>
                <p className="about-team__name">Seira</p>
                <blockquote className="about-team__quote">
                  &ldquo;I built Raleway because I believe the gap between quality and
                  perceived quality is one of the most solvable problems in business.
                  And that digital design — done with real intention — closes it.&rdquo;
                </blockquote>
                <p className="about-team__desc">
                  Seira leads every engagement from discovery through delivery — shaping
                  positioning, information architecture, and the strategic thinking behind
                  every decision. He challenges assumptions before work begins and ensures
                  every recommendation stays aligned with the Raleway Method. His role is
                  to make sure Raleway&apos;t public promise never gets ahead of the
                  business&apos;s actual capability — including Raleway&apos;t own.
                </p>
                <Link href="/start" className="about-team__cta">Work with us →</Link>
              </div>
            </div>

            {/* Supporting members */}
            <div className="about-team__members">
              <div className="about-member">
                <div className="about-member__meta">
                  <span className="about-member__role">Technical Architecture</span>
                  <p className="about-member__name">Gabriel De Leon</p>
                </div>
                <p className="about-member__desc">
                  Gabriel translates strategy into reliable digital systems. He challenges
                  ideas from a technical perspective — making sure ambitious concepts remain
                  grounded in what can actually be built, sustained, and scaled. He also
                  leads Raleway&apos;s investment in future products and platforms, ensuring
                  the studio continues thinking beyond individual client work and toward
                  what the discipline requires next.
                </p>
              </div>
              <div className="about-member">
                <div className="about-member__meta">
                  <span className="about-member__role">Implementation &amp; Delivery</span>
                  <p className="about-member__name">Jet Danila</p>
                </div>
                <p className="about-member__desc">
                  Jet protects the quality of execution. He builds what the strategy
                  requires, communicates directly with clients throughout active projects,
                  and ensures that nothing is lost between what was agreed in discovery
                  and what appears in the final build. His presence in the delivery
                  process is what allows Raleway&apos;t thinking to stay consistent from
                  strategy to screen.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
