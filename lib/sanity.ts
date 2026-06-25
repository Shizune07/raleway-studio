import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
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

export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id, name, role, bio, badges, order,
    photo { asset->{ url }, hotspot }
  }
`

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id, title, slug, icon, tagline, description, features, order
  }
`

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id, title, slug, icon, tagline, description, features
  }
`

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(order asc) {
    _id, clientName, businessName, location, rating, quote, service, initials,
    photo { asset->{ url }, hotspot }
  }
`

export const featuredTestimonialsQuery = `
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id, clientName, businessName, location, rating, quote, service, initials,
    photo { asset->{ url }, hotspot }
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    siteName, tagline, email, heroHeadline, heroSubtext, charityText,
    socialLinks,
    logo { asset->{ url } },
    logoWhite { asset->{ url } }
  }
`
