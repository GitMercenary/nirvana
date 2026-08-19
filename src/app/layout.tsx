import type { Metadata } from 'next'
import './globals.css'
import { FormProvider } from '@/context/FormContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import MotionProvider from '@/components/MotionProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://caffeinenirvana.co'),
  title: {
    default: 'Caffeine Nirvana — Specialty Green Coffee from India | Direct Trade',
    template: '%s | Caffeine Nirvana',
  },
  description:
    'Source high-scoring specialty green coffee direct from Chikmagalur, India — 85.5–87.75 SCA, traceable lots, direct trade, no middlemen.',
  authors: [{ name: 'Caffeine Nirvana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caffeinenirvana.co',
    siteName: 'Caffeine Nirvana',
    title: 'Caffeine Nirvana — Specialty Green Coffee from India',
    description:
      'Source high-scoring specialty green coffee direct from Chikmagalur, India. Traceable, transparent, direct.',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caffeine Nirvana — Specialty Green Coffee from India',
    description:
      'Source high-scoring specialty green coffee direct from Chikmagalur, India.',
    images: ['/images/logo-full.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://caffeinenirvana.co',
  },
  // Search Console / Bing verified via domain (DNS) — no HTML meta tag needed.
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Chikmagalur, Karnataka',
    'geo.position': '13.2189;75.7817',
    'ICBM': '13.2189, 75.7817',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" />
        <link rel="icon" href="/images/logo-enzo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-enzo.png" />
        <StructuredData />
      </head>
      <body>
        <MotionProvider>
          <FormProvider>
            <Navigation />
            {children}
            <Footer />
          </FormProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
