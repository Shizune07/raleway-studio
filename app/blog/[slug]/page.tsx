import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { client, postBySlugQuery, allSlugsQuery, urlFor } from '@/lib/sanity'
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
      title: `${post.title} | Raleway Studio Blog`,
      description: post.excerpt,
      alternates: { canonical: `https://www.ralewaystudio.com/blog/${slug}` },
      openGraph: {
        url: `https://www.ralewaystudio.com/blog/${slug}`,
        images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage(
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

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › {post.title}</nav>
          <h1 style={{ maxWidth: 760 }}>{post.title}</h1>
          {post.publishedAt && (
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray)' }}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {post.mainImage && (
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem' }}>
              <Image
                src={urlFor(post.mainImage).width(760).height(420).url()}
                alt={post.title}
                width={760} height={420}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          )}
          <div className="prose">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Need Help With Your Website?</h2>
          <p>Let&apos;s talk about how Raleway Studio can help your business grow online.</p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-white">Get in Touch</Link>
            <Link href="/services" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
