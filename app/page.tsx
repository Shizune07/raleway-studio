import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import IconMark from '@/components/media/IconMark'
import DiagnosisScene from '@/components/media/DiagnosisScene'

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

// Principles — Section 04 (Service Item pattern)
const principles = [
  {
    num: '01',
    icon: 'diagnose' as const,
    title: 'We diagnose before we design.',
    desc: 'Every project begins with a structured discovery process. We need to understand what the problem actually is — not assume it is what it first appears to be.',
  },
  {
    num: '02',
    icon: 'challenge' as const,
    title: 'We challenge before we agree.',
    desc: "When we believe a direction is wrong, we say so. Agreement that doesn't serve the business isn't professionalism — it's self-protection.",
  },
  {
    num: '03',
    icon: 'strategy' as const,
    title: 'Strategy before surface.',
    desc: 'A website is not the solution. It is the expression of a solution. The positioning, the narrative, the content architecture — these come before anything visual.',
  },
  {
    num: '04',
    icon: 'legibility' as const,
    title: 'We measure by legibility, not aesthetics.',
    desc: 'The work is successful when the right people encounter our clients and understand — quickly, clearly — whether this business is right for them. Beautiful is secondary to clear.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />

      {/* ── Section 01 — The Problem (Component 08 — Hero) ──
          Component: hero / hero-inner / hero-content / hero-headline / hero-body / hero-actions
          Layout: 100svh, lower-anchored (content at bottom of viewport)
          Entrance: Pattern 07 (mount animation, not scroll) */}
      <section
        id="main-content"
        className="hero"
        aria-label="Introduction"
      >
        <div className="hero-inner hero-inner--split">
          <div className="hero-content">
            {/* Headline: 12 words — spec maximum (DEV-HP-01 resolved) */}
            <h1 className="hero-headline hero-headline--editorial hero-entrance hero-entrance--headline">
              There is a kind of struggle that looks like a branding problem.
            </h1>
            {/* Body: 22 words — names the mechanism (DEV-HP-02 resolved) */}
            <p className="hero-body hero-entrance hero-entrance--body">
              The problem is often the distance between what your business genuinely is
              and what the world can clearly see it to be.
            </p>
            <div className="hero-actions hero-entrance hero-entrance--cta">
              <Link href="/start" className="btn-primary">
                Start a conversation
              </Link>
              <Link href="/thinking" className="btn-navigate">
                Read our thinking
              </Link>
            </div>
          </div>
          {/* Original line-art illustration — owned artwork, not a stock
              photo. Sits beside the headline instead of stacked above it —
              the split hero is this direction's main structural move. */}
          <div className="hero-visual hero-entrance hero-entrance--headline">
            <DiagnosisScene aria-hidden />
          </div>
        </div>
      </section>

      {/* ── Section 02 — The Diagnosis ──
          Component: section / container / stack of body paragraphs
          Primitive: Section (divided variant) + Container
          Opens with the editorial sequence removed from the Hero (Option B resolution).
          The sequence completes the Hero's sentence before deepening into symptoms. */}
      <section className="section section--divided" aria-label="The diagnosis">
        <div className="container">
          <div className="home-diagnosis">
            {/* Poem continuation — three short lines that complete the Hero's hook.
                Preserved exactly. Rhythm via separate elements, not <br>. */}
            <div className="home-diagnosis__intro animate-entrance">
              <p className="home-diagnosis__intro-line">Or a marketing problem.</p>
              <p className="home-diagnosis__intro-line">Or a website problem.</p>
              <p className="home-diagnosis__intro-close">It is none of these things.</p>
            </div>
            {/* Rhythm System pass (V1.1 Phase 2): each item now sits in an
                .editorial-split row — a quiet numeral marker beside the
                paragraph, rather than four identical unmarked blocks.
                Same four sentences, same order. */}
            <div className="editorial-split home-diagnosis__row animate-entrance">
              <span className="section-marker" aria-hidden="true">I</span>
              <p className="home-diagnosis__item">
                Visitors land on your website and leave without contacting you. Not because you&rsquo;re
                unimpressive. Because they couldn&rsquo;t tell, quickly enough, whether you were the right fit.
              </p>
            </div>
            <div className="editorial-split home-diagnosis__row animate-entrance">
              <span className="section-marker" aria-hidden="true">II</span>
              <p className="home-diagnosis__item">
                You&rsquo;ve explained what you do to potential clients many times. The explanation keeps
                changing — not because you don&rsquo;t know your business, but because you haven&rsquo;t
                found the version of it that lands.
              </p>
            </div>
            <div className="editorial-split home-diagnosis__row animate-entrance">
              <span className="section-marker" aria-hidden="true">III</span>
              <p className="home-diagnosis__item">
                The clients who find you are inconsistent. Some are a perfect fit. Many aren&rsquo;t.
                The mismatch isn&rsquo;t random — it&rsquo;s a signal that the business isn&rsquo;t yet
                communicating clearly enough to attract the right people and repel the wrong ones.
              </p>
            </div>
            <div className="editorial-split home-diagnosis__row animate-entrance">
              <span className="section-marker" aria-hidden="true">IV</span>
              <p className="home-diagnosis__item">
                Your public presence — website, how you describe yourself, how you show up — doesn&rsquo;t
                yet reflect the quality of what happens behind closed doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 03 — Why We Built Raleway ──
          Component: section / container / Section Introduction (Component 05)
          Eyebrow: "Why We Built Raleway"
          Headline: the belief
          Body: the implication
          Rhythm System pass (V1.1 Phase 2): the closing line — previously
          a fourth paragraph in the same block — is now isolated as a
          .section-pause: the page's first monumental beat. Same sentence,
          same section, same position in the document. Different weight. */}
      <section className="section section--divided" aria-label="Why we built Raleway">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow">Why We Built Raleway</span>
            <h2 className="section-headline">
              We believe most businesses are closer to where they want to be
              than their market can currently see them.
            </h2>
            <p className="section-body">
              The problem is rarely the quality of the work. It is the distance between that quality
              and what the world can actually perceive.
            </p>
          </div>
          <div className="section-pause animate-entrance">
            <p className="section-pause__text">Raleway Studio was built for that distance.</p>
          </div>
        </div>
      </section>

      {/* ── Section 04 — How We Think ──
          Component: section / container / Service Item list (Component 04)
          Each principle maps to a service-item (static mode, no link)
          Counter used for numbering (optional, per spec)
          Navigate link at bottom → /method
          Rhythm System pass (V1.1 Phase 2): field alternation — this is
          Home's first dark section, the page's turn from belief into
          practice. Mirrors the same device already proven on Work and
          Method (their principle/client lists are dark fields). Dark-mode
          colour inversions for .home-method__label/.home-method__item and
          .btn-navigate live in globals.css / 12-rhythm.css. */}
      <section className="section section--dark" aria-label="How we work">
        <div className="container">
          <div className="home-method">
            <span className="section-eyebrow section-eyebrow--mono animate-entrance">The Method</span>
            <p className="home-method__label animate-entrance">This is how we work.</p>
            <ul className="home-method__list" role="list">
              {principles.map((p) => (
                <li key={p.num} className="home-method__item animate-entrance">
                  <div className="service-item">
                    {/* Icon — reuses the same IconMark set already established on the
                        Method page for these exact four principles (Rhythm/asset pass,
                        V1.1 Phase 2). Not a new visual language, pure consistency. */}
                    <IconMark name={p.icon} className="service-icon service-icon--hero" />
                    {/* Counter — sibling before name (DEV-HP-05 fix, Rule 04) */}
                    <span className="service-counter" aria-hidden="true">{p.num}</span>
                    <span className="service-name">{p.title}</span>
                    <p className="service-description">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/method" className="btn-navigate home-method__link animate-entrance">
              Explore the Raleway Method
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="btn-navigate__arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 05 — Proof of Thinking ──
          Component: section (light, divided) / container
          Light field — DEV-HP-03 fix: cannot be dark; Threshold below is already dark.
          No eyebrow — the content speaks without framing.
          Spacing via CSS classes (not inline styles — DEV-HP-09 fix).
          Version 1.1: one "breath" image (Rule 2) between the headline and
          the body — see RALEWAY-VISUAL-DIRECTION-v1.1.md, Home/Section 05.
          Temporary production asset (per Seira's stock-photography brief):
          licensed Unsplash photograph ("A piece of paper sitting on top of
          a wooden table," Joonas Sild), standing in for custom photography
          until the real self-audit page is shot — see asset checklist item
          10. Chosen for the same warm directional light and editorial,
          uncluttered composition specified in the original brief; swap
          `src` only when the real photograph exists, component API is
          unchanged.
          Rhythm System pass (V1.1 Phase 2): --generous vertical meter —
          a longer breath before the Threshold, distinguishing this
          reflective closing section from the standard-weight sections
          above it. No eyebrow decision (DEV-HP-03/04) untouched. */}
      <section className="section section--divided section--generous" aria-label="Proof of thinking">
        <div className="container">
          <div className="home-proof animate-entrance">
            <h2 className="section-headline">
              Before we wrote a single brief for a client, we applied our method to ourselves.
            </h2>
            {/* One frame, not two — restraint applied to the site's one
                real self-audit photo the same way it's applied everywhere
                else in this direction. */}
            <div className="photo-panel animate-entrance" style={{ width: '620px', maxWidth: '100%', height: '360px', margin: '0 auto' }}>
              <Image
                src="/assets/home-breath.jpg"
                alt="A planning document on a wooden desk in warm, directional afternoon light, with plant-leaf shadows crossing the page."
                fill
                sizes="(max-width: 767px) 100vw, 620px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="section-body" style={{ textAlign: 'center', fontStyle: 'italic' }}>Applied to ourselves first.</p>
            <div className="home-proof__body">
              <p className="section-body">
                We ran a full discovery process on our own business. We challenged our positioning,
                questioned assumptions we had held since the beginning, documented our standards, and
                rebuilt our brand identity from the foundation up — applying the same rigour we would
                apply to any client.
              </p>
              <p className="section-body home-proof__body-continuation">
                We did this because we believe a studio cannot honestly ask clients to do something
                it hasn&rsquo;t done first.
              </p>
              <p className="section-body home-proof__body-close">
                The care in this page is the same care we bring to yours.
              </p>
            </div>
            <Link href="/about" className="btn-navigate home-proof__link">
              See how we think
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="btn-navigate__arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 06 — Qualifier + CTA (Component 09 — Threshold) ──
          Component: threshold / threshold-inner / threshold-content
          Rule 11: One per page. Final section before Footer.
          Rule 07: Orange CTA — the only orange at this scroll depth.
          Headline: qualifier (not a service list, not a generic CTA)
          Body: the selection criteria
          CTA: "Start a conversation" */}
      <section
        className="threshold"
        aria-label="Start a conversation"
      >
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              We don&rsquo;t work with every business.
            </h2>
            <p className="threshold-body animate-entrance">
              We work best with founders who are seriously invested in understanding the gap
              between what their business is and what the market currently sees —
              and are prepared to do something about it.
            </p>
            <Link href="/start" className="btn-primary animate-entrance">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
