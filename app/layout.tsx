import type { Metadata } from 'next'
import { Raleway, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-raleway',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ralewaystudio.com'),
  title: {
    default: 'Raleway Studio | Custom Websites & Digital Services to Grow Your Business',
    template: '%s | Raleway Studio',
  },
  description: 'Custom websites, SEO, graphic design, and more — Raleway Studio helps small businesses grow online. Remote-friendly, available worldwide.',
  openGraph: {
    siteName: 'Raleway Studio',
    type: 'website',
    images: ['/assets/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Raleway Studio',
  url: 'https://www.ralewaystudio.com',
  logo: 'https://www.ralewaystudio.com/assets/logo.png',
  foundingDate: '2024',
  description: 'Custom websites, SEO, graphic design, and digital services for small businesses — remote, professional, and available worldwide.',
  email: 'info@ralewaystudio.com',
  sameAs: [
    'https://www.instagram.com/raleway_studio/',
    'https://www.facebook.com/profile.php?id=61562921306084',
    'https://www.linkedin.com/company/104446233',
  ],
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  serviceType: ['Website Design', 'Graphic Design', 'SEO', 'Social Media Management', 'Virtual Assistance', 'AI Automation', 'Project Management'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Raleway Studio',
  url: 'https://www.ralewaystudio.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.ralewaystudio.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
