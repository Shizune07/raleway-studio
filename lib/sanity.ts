import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/* ── Queries ── */
export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, category,
    mainImage { asset->{ url } }
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, publishedAt, category,
    mainImage { asset->{ url } },
    body
  }
`

export const allSlugsQuery = `
  *[_type == "post"] { "slug": slug.current }
`
