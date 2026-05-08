import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Danish directly at danish@caffeinenirvana.co. Source from origin, request samples, or arrange a farm visit. Response within 24 hours.',
  alternates: { canonical: 'https://caffeinenirvana.co/contact' },
  openGraph: {
    title: 'Contact | Caffeine Nirvana',
    description:
      'Direct line to Danish at Caffeine Nirvana. Specialty green coffee enquiries, sample requests, and farm visits.',
    url: 'https://caffeinenirvana.co/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
