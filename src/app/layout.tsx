import type { Metadata } from 'next'
import './globals.css'
import { FormProvider } from '@/context/FormContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://caffeinenirvana.net'),
  title: {
    default: 'Caffeine Nirvana — Specialty Green Coffee from India | Direct Trade',
    template: '%s | Caffeine Nirvana',
  },
  description:
    'Source high-scoring specialty green coffee direct from Chikmagalur, India. 86-88 SCA cupping scores. Traceable lots from small farmers. Direct trade, no middlemen.',
  keywords: [
    'specialty green coffee India',
    'Indian specialty coffee exporter',
    'high scoring coffee lots India',
    'SCA 86+ coffee India',
    'direct trade coffee India',
    'Chikmagalur specialty coffee',
    'green coffee beans India',
    'traceable coffee India origin',
    'Indian coffee for roasters',
    'single origin India coffee',
  ],
  authors: [{ name: 'Caffeine Nirvana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caffeinenirvana.net',
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
  },
  alternates: {
    canonical: 'https://caffeinenirvana.net',
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
        <link rel="preload" as="image" href="/images/hero-bg.png" />
        <link rel="icon" href="/images/logo-enzo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-enzo.png" />
        <StructuredData />
      </head>
      <body>
        <FormProvider>
          <Navigation />
          {children}
          <Footer />
        </FormProvider>
      </body>
    </html>
  )
}
