import type { Metadata } from 'next'
import { Raleway, Inter, Source_Serif_4, DM_Sans } from 'next/font/google'
import './globals.css'
import '@/styles/main.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import MotionInit from '@/components/MotionInit'

// Legacy fonts — retained for non-migrated pages (globals.css)
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

// Design system fonts — Source Serif 4 (editorial) + DM Sans (interface)
const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  axes: ['opsz'],
  weight: ['300', '400'],
  variable: '--font-source-serif-4',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ralewaystudio.com'),
  title: {
    default: 'Raleway Studio — We help good businesses be seen for what they are',
    template: '%s | Raleway Studio',
  },
  description: 'Raleway Studio closes the gap between what your business genuinely is and what the world can currently see it to be. Premium website design, brand identity, and digital strategy.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
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
  description: 'We help good businesses be seen for what they are. Premium website design, brand identity, and digital strategy.',
  email: 'info@ralewaystudio.com',
  sameAs: [
    'https://www.instagram.com/raleway_studio/',
    'https://www.facebook.com/profile.php?id=61562921306084',
    'https://www.linkedin.com/company/104446233',
  ],
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  serviceType: ['Website Design', 'Brand Identity', 'Digital Strategy', 'SEO', 'AI Automation', 'Business Systems'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Raleway Studio',
  url: 'https://www.ralewaystudio.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} ${sourceSerif4.variable} ${dmSans.variable}`}
      style={{
        // Bridge tokens.css font variables to next/font's self-hosted fonts.
        // tokens.css is frozen (uses hard-coded family names); these inline overrides
        // take precedence via cascade, pointing --font-editorial and --font-interface
        // at the actual loaded font files.
        '--font-editorial': 'var(--font-source-serif-4)',
        '--font-interface': 'var(--font-dm-sans)',
      } as React.CSSProperties}
    >
      <body>
        {/*
          FOIC mitigation — Pattern 07 (Design System Motion Spec).
          Runs synchronously before first paint so animated elements
          begin at opacity:0 / translateY state, not their final position.
          Without this script, motion.css entrance classes are inert
          (elements render fully visible — degraded but not broken).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-motion-ready');`,
          }}
        />
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <MotionInit />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
