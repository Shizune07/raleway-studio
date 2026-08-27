import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { client, allPostsQuery } from '@/lib/sanity'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Thinking',
  description:
    'Long-form writing from Raleway Studio on digital strategy, brand identity, and the gap between quality and perception.',
  alternates: { canonical: 'https://www.ralewaystudio.com/thinking' },
  openGraph: { url: 'https://www.ralewaystudio.com/thinking' },
}

const thinkingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Thinking | Raleway Studio',
  url: 'https://www.ralewaystudio.com/thinking',
  description:
    'Long-form writing on digital strategy, brand identity, and the gap between quality and perception.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
}

type Post = {
  _id: string
  title: string
  slug: { current: string } | string
  excerpt?: string
  publishedAt?: string
  category?: string
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function postSlug(post: Post): string {
  if (typeof post.slug === 'string') return post.slug
  return post.slug?.current ?? ''
}

export default async function ThinkingPage() {
  let posts: Post[] = []
  try {
    posts = await client.fetch(allPostsQuery)
  } catch {
    posts = []
  }

  const hasPosts = posts.length > 0

  return (
    <>
      <JsonLd data={thinkingSchema} />

      {/* ── Section 01 — Hero (Component 08) ──
          Component: hero / hero-inner / hero-content / hero-headline / hero-body
          Layout: 100svh, lower-anchored content
          Entrance: Pattern 07 (mount animation)
          Rule 04: No hero-actions — CTA lives at the Threshold.
          Headline: 9 words (spec: 8–12) ✓
          Body: 21 words (spec: 18–25) ✓ */}
      <section
        id="main-content"
        className="hero texture-dots glow-field"
        aria-label="Thinking"
      >
        <div className="hero-inner">
          <div className="hero-content hero-content--centered">
            <h1 className="hero-headline hero-headline--bold hero-headline--display-xl hero-entrance hero-entrance--headline">
              How we{' '}
              <span className="chip-highlight chip-highlight--tint">
                think
              </span>{' '}
              about design, strategy, and trust.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              Long-form writing on the gap between what a business is and
              how the world is currently able to see it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — Article List or Editorial Statement ──
          Primitive: Section (divided) + Container
          If articles are published in Sanity: renders a navigational list.
          If no articles: renders an editorial statement about the forthcoming section.
          Note: article routes live at /blog/[slug] pending route migration. */}
      <section className="section section--divided" aria-label="Articles">
        <div className="container">
          {hasPosts ? (
            /* ── Article List — published posts ── */
            <>
              <span className="section-eyebrow animate-entrance">Writing</span>
              <ul className="thinking-list animate-entrance" role="list" data-delay="100">
                {posts.map((post) => (
                  <li key={post._id} className="thinking-list__item">
                    {/* Navigational service item pattern — whole row is a link */}
                    <Link
                      href={`/thinking/${postSlug(post)}`}
                      className="thinking-article service-item service-item--linked"
                    >
                      <div className="thinking-article__meta">
                        {post.category && (
                          <span className="service-counter">{post.category}</span>
                        )}
                        {post.publishedAt && (
                          <span className="thinking-article__date">
                            {formatDate(post.publishedAt)}
                          </span>
                        )}
                      </div>
                      <span className="service-name">{post.title}</span>
                      {post.excerpt && (
                        <p className="service-description">{post.excerpt}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            /* ── Empty State — editorial statement ── */
            <>
              <div className="section-intro animate-entrance">
                <span className="section-eyebrow">Writing</span>
                <h2 className="section-headline">
                  The articles are being written with the same care as the work.
                </h2>
                <p className="section-body">
                  We are preparing long-form writing on strategy, identity, and the specific
                  challenge of communicating quality to an audience that hasn&rsquo;t yet
                  encountered the business. The first pieces will be published soon.
                </p>
              </div>
              <Link
                href="/about"
                className="btn-navigate thinking-empty__link animate-entrance"
                data-delay="200"
              >
                In the meantime, read about how we think
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
            </>
          )}
        </div>
      </section>

      {/* ── Section 03 — Qualifier + CTA (Component 09 — Threshold) ──
          Rule 11: One per page. Final section before Footer.
          Rule 07: Orange CTA — the only orange at this scroll depth. */}
      <section className="threshold" aria-label="Start a project">
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              If the thinking resonates, the work might be right for you.
            </h2>
            <p className="threshold-body animate-entrance">
              We work with businesses where there is a real gap to close — between what
              the business genuinely is and what the world can currently see it to be.
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
