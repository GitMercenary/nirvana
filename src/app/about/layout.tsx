import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Why we named it Caffeine Nirvana — a 150-year coffee heritage, the producer, the roaster, and the people behind every lot we source from Chikmagalur.',
  alternates: { canonical: 'https://caffeinenirvana.co/about' },
  openGraph: {
    title: 'Our Story | Caffeine Nirvana',
    description:
      'A 150-year coffee heritage in Chikmagalur. Meet Danish, Ayesha, and Harsh, and the philosophy that drives every lot we source.',
    url: 'https://caffeinenirvana.co/about',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
