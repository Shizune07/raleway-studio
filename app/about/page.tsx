import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import ResponsiveImage from '@/components/media/ResponsiveImage'
import { seiraPortraitBlurDataURL } from '@/lib/media'

/* Specialist Support — real names, roles, and portraits, confirmed by Seira. */
const leadership = [
  {
    name: 'Gabriel De Leon',
    role: 'Lead Developer',
    bio: 'Gabriel transforms strategy into reliable digital experiences. He focuses on building websites that are fast, scalable, and thoughtfully engineered, ensuring every technical decision supports the business objective rather than getting in the way of it.',
    image: '/assets/gabriel-de-leon.jpg',
    imageAlt: 'Gabriel De Leon, Lead Developer at Raleway Studio',
  },
  {
    name: 'Jet Danila',
    role: 'Visual Designer',
    bio: 'Jet brings clarity through visual design. He shapes the details that influence how a brand is perceived, ensuring every interface feels cohesive, refined, and aligned with the strategic direction behind the work.',
    image: '/assets/jet-danila.jpg',
    imageAlt: 'Jet Danila, Visual Designer at Raleway Studio',
  },
]

export const metadata: Metadata = {
  title: 'About',
  description:
    'Raleway Studio grew from a pattern its co-founder couldn’t stop noticing — capable businesses struggling to be seen for what they actually are.',
  alternates: { canonical: 'https://www.ralewaystudio.com/about' },
  openGraph: { url: 'https://www.ralewaystudio.com/about' },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Raleway Studio',
  description:
    'Raleway Studio grew from a pattern its co-founder couldn’t stop noticing — capable businesses struggling to be seen for what they actually are.',
  url: 'https://www.ralewaystudio.com/about',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  mainEntity: {
    '@type': 'Organization',
    name: 'Raleway Studio',
    url: 'https://www.ralewaystudio.com',
    founder: {
      '@type': 'Person',
      name: 'Seira',
      jobTitle: 'Founder & Strategy Director',
    },
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      {/* ── Section 01 — Hero ──
          Copy frozen: Knowledge Architecture v1.0 + Founder Editorial Foundation, July 2026.
          "grew from" reflects cumulative origin — no single founding moment.
          Rule 04: No hero-actions — CTA lives at the Threshold. */}
      <section
        id="main-content"
        className="hero"
        aria-label="About Raleway Studio"
      >
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-headline hero-entrance hero-entrance--headline">
              Raleway Studio grew from a pattern I couldn&rsquo;t stop noticing.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              For years, I watched capable businesses struggle to be seen for
              what they actually were. I couldn&rsquo;t stop noticing the gap between
              the quality they had built and what people were actually able to
              recognise. Eventually, that changed how I work.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — The Pattern (Component 14 — Editorial) ──
          What kept recurring across different businesses and contexts.
          Ends with preserved key phrase on market legibility.
          Version 1.1 Editorial Layer: the closing sentence — "The market
          wasn't necessarily rewarding the best business. It was rewarding
          the business people could understand fastest" — is the studio's
          entire thesis in one line. It's a genuinely diagrammable
          relationship (quality vs. legibility, and the gap between them),
          not a mood to illustrate, so it gets the one signature diagram
          on the site — built once, here, deliberately not repeated
          elsewhere. Conceptual, not data: no fabricated measurements,
          one illustrative marker. Ink tones only, no colour. */}
      <section className="section section--divided" aria-label="The pattern">
        <div className="container">
          <div className="about-narrative animate-entrance">
            <p className="section-body">
              I didn&rsquo;t recognise the pattern through one defining project. I kept
              seeing versions of it across different businesses, in different contexts.
            </p>
            <p className="section-body">
              The businesses I encountered that were most trusted in their fields —
              referred constantly, relied upon by long-term clients — often had no
              presence online that reflected that trust. Find them through a search
              instead of through someone who already knew them, and they looked
              indistinguishable from competitors half as capable. The quality was
              real. It simply wasn&rsquo;t visible to anyone who hadn&rsquo;t already
              heard about them.
            </p>
            <p className="section-body">
              The market wasn&rsquo;t necessarily rewarding the best business. It was
              rewarding the business people could understand fastest.
            </p>
          </div>
          <figure className="diagram animate-entrance">
            <svg
              className="diagram-axis"
              viewBox="0 0 560 380"
              role="img"
              aria-labelledby="pattern-diagram-title pattern-diagram-desc"
            >
              <title id="pattern-diagram-title">Quality versus legibility</title>
              <desc id="pattern-diagram-desc">
                A conceptual diagram, not measured data. It shows that market reward
                tracks how clearly a business communicates, not how good the underlying
                work is. A single marked point sits well above the dotted line where
                quality and legibility would move together, illustrating a capable
                business whose quality far exceeds how clearly the market currently
                understands it — and the gap between the two.
              </desc>
              <line className="diagram-axis__line" x1="60" y1="330" x2="520" y2="330" />
              <line className="diagram-axis__line" x1="60" y1="330" x2="60" y2="30" />
              <line className="diagram-axis__diagonal" x1="60" y1="330" x2="520" y2="30" />
              <line className="diagram-axis__gap-line" x1="200" y1="90" x2="200" y2="239" />
              <circle className="diagram-axis__point" cx="200" cy="90" r="3.5" />
              <text className="diagram-axis__label" x="60" y="18">QUALITY ↑</text>
              <text className="diagram-axis__label" x="520" y="352" textAnchor="end">LEGIBILITY →</text>
              <text
                className="diagram-axis__label--diagonal"
                x="330"
                y="138"
                textAnchor="middle"
                transform="rotate(-33 330 138)"
              >
                if the two moved together
              </text>
              <text className="diagram-axis__label--point" x="214" y="86">
                many capable businesses sit here
              </text>
              <text className="diagram-axis__label--gap" x="210" y="168">THE GAP</text>
            </svg>
            <figcaption className="diagram__caption">
              The market doesn&rsquo;t reward quality directly — it rewards how clearly
              that quality can be understood. Most capable businesses sit above the
              line, not on it.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Section 03 — What Changed ──
          Honest revision of the prior belief: a good website isn't enough.
          Ends with preserved key phrase on clarity. */}
      <section className="section section--divided" aria-label="What changed">
        <div className="container">
          <div className="about-narrative animate-entrance">
            <p className="section-body">
              For a long time, I believed the answer was a better website. If the
              design was clean and professionally built, the business would become
              more credible.
            </p>
            <p className="section-body">
              What I learned, gradually, was that it wasn&rsquo;t enough. I could build
              something I was proud of and hand it over, and the business would still
              struggle to explain what made it worth choosing. The website reflected
              what the client had asked for, but not always what made the business
              worth choosing.
            </p>
            <p className="section-body">
              A website can communicate clarity, but it can&rsquo;t create clarity. When
              the underlying positioning is unclear, a better website can only present
              that uncertainty more professionally.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 04 — How the Work Changed (Component 14 — Editorial) ──
          Behavioural consequence — different questions, different pace.
          Most credible section: conviction becomes observable practice.
          Preserved phrase: "solving the brief, not the business problem."
          Version 1.1 Editorial Layer: the second and third paragraphs
          already contain a clean before/after — the old questions versus
          the new ones. A pull-quote annotation reproduces those exact
          sentences (no new copy) in a distinct two-column treatment, the
          standard print convention of re-presenting a fragment of the
          running text for emphasis. The paragraphs themselves are
          untouched. */}
      <section className="section section--divided" aria-label="How the work changed">
        <div className="container">
          <div className="about-narrative animate-entrance">
            <p className="section-body">
              The change didn&rsquo;t happen at once. It showed up first in the
              questions I started asking.
            </p>
            <p className="section-body">
              Before, my questions were mostly about execution. What pages do
              you need? What aesthetic do you prefer? Those questions helped me
              build what the client had imagined. They didn&rsquo;t help me understand
              whether what the client had imagined was the right answer to the
              problem they actually had.
            </p>
            <p className="section-body">
              I started asking different questions. What do customers choose you
              for — specifically, not generally? What do people consistently
              misunderstand about your business? Those conversations changed what
              I understood about the work in front of me.
            </p>
          </div>
          {/* Signature Mark System: the before/after questions, plotted
              instead of only read. Two rings reuse the mark's own
              centre-and-radius geometry — surface (outer, dashed, muted)
              and core (inner, warm) — with the four real questions
              placed at the depth they actually operated at. Conceptual,
              not data, same rule as the axis diagram above: one
              illustrative position per question, nothing measured. */}
          <figure className="diagram animate-entrance">
            <svg
              className="diagram-shift"
              viewBox="0 0 400 260"
              role="img"
              aria-labelledby="shift-diagram-title shift-diagram-desc"
            >
              <title id="shift-diagram-title">From surface questions to core questions</title>
              <desc id="shift-diagram-desc">
                A conceptual diagram, not data: two rings representing surface and core.
                The two &ldquo;before&rdquo; questions sit on the outer, surface ring; the two
                &ldquo;after&rdquo; questions sit near the centre, the core.
              </desc>
              <circle className="diagram-shift__ring--outer" cx="200" cy="130" r="110" />
              <circle className="diagram-shift__ring--inner" cx="200" cy="130" r="40" />
              <circle className="diagram-shift__centre" cx="200" cy="130" r="2.5" />
              <text className="diagram-shift__zone-label" x="200" y="14">Surface</text>
              <text className="diagram-shift__zone-label" x="200" y="168">Core</text>
              <path className="diagram-shift__arrow" d="M95 70C150 88 190 104 216 118" />
              <path className="diagram-shift__arrow" d="M88 190C145 172 188 158 214 145" />
              <circle className="diagram-shift__point--before" cx="95" cy="70" r="4" />
              <circle className="diagram-shift__point--before" cx="88" cy="190" r="4" />
              <circle className="diagram-shift__point--after" cx="216" cy="118" r="4" />
              <circle className="diagram-shift__point--after" cx="214" cy="145" r="4" />
            </svg>
            <div className="annotation annotation--compare diagram-shift__legend">
              <div className="annotation__group">
                <span className="annotation__label">Before</span>
                <p className="annotation__question">What pages do you need?</p>
                <p className="annotation__question">What aesthetic do you prefer?</p>
              </div>
              <div className="annotation__group annotation__group--after">
                <span className="annotation__label">After</span>
                <p className="annotation__question">
                  What do customers choose you for — specifically, not generally?
                </p>
                <p className="annotation__question">
                  What do people consistently misunderstand about your business?
                </p>
              </div>
            </div>
            <figcaption className="diagram__caption">
              Those conversations changed what I understood about the work in front of me.
            </figcaption>
          </figure>
          <div className="about-narrative animate-entrance">
            <p className="section-body">
              I realised I had been solving the brief, not the business problem.
              Sometimes those are the same thing. Often they aren&rsquo;t. If a brief
              is built on unclear positioning, executing it well still leaves the
              original problem untouched.
            </p>
            <p className="section-body">
              I became more willing to slow a project down when the thinking
              underneath it was still unclear. Sometimes that changed the scope
              significantly. Sometimes it meant saying that a new website wasn&rsquo;t
              the right starting point.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 05 — The Standard ──
          Working measure of success: accurate understanding, not impressive presentation.
          Ethical boundary: won't build what the business can't sustain. */}
      <section className="section section--divided" aria-label="The standard">
        <div className="container">
          <div className="about-narrative animate-entrance">
            <p className="section-body">
              That shift changed what I consider success.
            </p>
            <p className="section-body">
              Success was no longer just impressive presentation or polished
              execution. It was whether the business became more accurately
              understood by the specific people it exists to serve.
            </p>
            <p className="section-body">
              I&rsquo;m not trying to make businesses look more impressive than they
              are. I&rsquo;m trying to make them look as good as they actually are.
              A website can communicate what&rsquo;s true. It can&rsquo;t make something true.
            </p>
            <p className="section-body">
              I don&rsquo;t believe in building a presence that promises more than the
              business can consistently deliver. When the reality and the intended
              perception are too far apart, the honest work is to address that gap
              before amplifying it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 06 — Founder ──
          Portrait: Version 1.1 visual layer — real photograph, replacing the
          v1.0 empty placeholder div. Same aspect-ratio box (4:5), same grid
          column (300px / 1fr), no spacing or structure change — see
          .about-founder__portrait-frame in 10-media.css and
          RALEWAY-VISUAL-DIRECTION-v1.1.md, About/Section 06.
          No blockquote — synthesized quote removed in final copy approval.
          Multiple about-founder__statement paragraphs; margins collapse correctly at 32px.
          Ends on conviction ("same standard"), not studio structure. */}
      <section className="section section--divided" aria-label="The founder">
        <div className="container">
          <div className="about-founder animate-entrance">
            <div className="about-founder__portrait">
              <div className="about-founder__portrait-frame">
                <Image
                  src="/assets/seira-jho.jpg"
                  alt="Seira, Founder & Strategy Director at Raleway Studio"
                  fill
                  sizes="(max-width: 767px) 220px, (max-width: 1023px) 240px, 300px"
                  style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
                  placeholder="blur"
                  blurDataURL={seiraPortraitBlurDataURL}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-founder__content">
              <p className="about-founder__name">Seira</p>
              <p className="about-founder__role">Founder &amp; Strategy Director</p>
              <p className="about-founder__statement">
                I measure the work by a simple question: did this help the
                business become more accurately understood?
              </p>
              <p className="about-founder__statement">
                That question became one of Raleway Studio&rsquo;s defining
                standards: strong businesses should not have to become louder
                or less truthful to become easier to recognise.
              </p>
              <p className="about-founder__statement">
                Raleway Studio is an independent studio. We keep the core
                thinking close and bring in specialist support when the work
                genuinely requires it.
              </p>
              <p className="about-founder__statement">
                Everything on this page comes back to the same standard:
                helping businesses become more accurately understood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 07 — Specialist Support ──
          Version 1.1 addition. Placed after Founder, before Threshold —
          answers the visitor's next question ("who else helps deliver
          this?") without touching the frozen Founder copy above or the
          Threshold CTA below. Reuses Component 05 (Section Intro) for
          the heading block and Component 11 (Leadership) for the list.
          Names, roles, bios, and portraits confirmed by Seira. */}
      <section className="section section--divided" aria-label="Specialist support">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow">Specialist Support</span>
            <h2 className="section-headline">
              The people who join this work are chosen, not hired to fill a seat.
            </h2>
            <p className="section-body">
              Raleway Studio stays founder-led on every engagement — one person
              accountable for the thinking, start to finish. When a project needs
              expertise beyond that, specific specialists are brought in for
              exactly what the work requires. The studio stays small because
              that&rsquo;s what keeps the thinking sharp, not because it hasn&rsquo;t
              grown yet.
            </p>
          </div>
          <ul className="leadership-list animate-entrance" role="list" data-delay="150">
            {leadership.map((person) => (
              <li key={person.role} className="leadership-list__item">
                <div className="leadership-item">
                  <div className="leadership-item__portrait">
                    <ResponsiveImage
                      src={person.image}
                      alt={person.imageAlt}
                      aspect="portrait"
                      sizes="140px"
                    />
                  </div>
                  <div className="leadership-item__content">
                    <span className="leadership-item__name">{person.name}</span>
                    <span className="leadership-item__role">{person.role}</span>
                    <p className="leadership-item__bio">{person.bio}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 08 — Threshold ──
          Approved destination: /method (not /start).
          About = Stage 2 (Trust) → Method = Stage 3 (Clarity).
          btn-navigate signals progression, not conversion.
          .threshold .btn-navigate override in globals.css inverts colour for dark field. */}
      <section className="threshold" aria-label="The Method">
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              How the thinking becomes the work.
            </h2>
            <p className="threshold-body animate-entrance">
              The next step is understanding how this conviction shapes an
              actual engagement — from the questions we ask to the decisions
              we make before design begins.
            </p>
            <Link href="/method" className="btn-navigate animate-entrance">
              See the Method
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
      </section>
    </>
  )
}
