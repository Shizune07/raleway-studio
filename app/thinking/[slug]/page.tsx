import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { client, postBySlugQuery, allSlugsQuery } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

type Params = { slug: string }

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allSlugsQuery)
    return slugs.map(s => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await client.fetch(postBySlugQuery, { slug })
    if (!post) return {}
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `https://www.ralewaystudio.com/thinking/${slug}` },
      openGraph: {
        url: `https://www.ralewaystudio.com/thinking/${slug}`,
        images: ['/assets/og-image.png'],
      },
    }
  } catch {
    return {}
  }
}

function buildArticleSchema(post: {
  title: string
  excerpt?: string
  publishedAt?: string
  slug: { current: string } | string
}) {
  const slugStr =
    typeof post.slug === 'string' ? post.slug : post.slug?.current ?? ''
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt ?? '',
    url: `https://www.ralewaystudio.com/thinking/${slugStr}`,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: 'Raleway Studio',
      url: 'https://www.ralewaystudio.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Raleway Studio',
      url: 'https://www.ralewaystudio.com',
    },
    isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ThinkingPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params
  let post: any = null

  try {
    post = await client.fetch(postBySlugQuery, { slug })
  } catch {
    notFound()
  }

  if (!post) notFound()

  const articleSchema = buildArticleSchema(post)

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── Section 01 — Hero ──
          Article title as h1. Date and category as hero-body metadata.
          No hero-actions — Threshold handles the CTA. */}
      <section
        id="main-content"
        className="hero"
        aria-label={post.title}
      >
        <div className="hero-inner">
          <div className="hero-content">
            {post.category && (
              <span className="hero-eyebrow hero-entrance hero-entrance--body">
                {post.category}
              </span>
            )}
            <h1 className="hero-headline hero-entrance hero-entrance--headline">
              {post.title}
            </h1>
            {post.publishedAt && (
              <p className="hero-body hero-entrance hero-entrance--body">
                {formatDate(post.publishedAt)}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 02 — Article Body ──
          PortableText rendered inside .article-body — V1.0-scoped prose styles.
          Container narrow (760px) for optimal reading measure. */}
      <section className="section section--divided" aria-label="Article">
        <div className="container">
          <div className="article-body animate-entrance">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p className="section-body">No content available.</p>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 03 — Threshold ──
          btn-navigate returns visitor to Thinking index.
          btn-primary → /start for direct conversion.
          Rule 11: One Threshold per page. Final section before Footer. */}
      <section className="threshold" aria-label="Continue reading">
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              If the thinking resonates, the work might be right for you.
            </h2>
            <p className="threshold-body animate-entrance">
              We work with businesses where there is a real gap to close —
              between what the business genuinely is and what the world can
              currently see it to be.
            </p>
            <div className="threshold-actions animate-entrance">
              <Link href="/start" className="btn-primary">
                Start a conversation
              </Link>
              <Link href="/thinking" className="btn-navigate">
                Back to Thinking
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
    </>
  )
}
