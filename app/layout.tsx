import type { Metadata } from 'next'
import { Raleway, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
