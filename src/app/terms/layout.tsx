import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms governing the use of caffeinenirvana.co — sample policy, Incoterms, confidentiality, governing law (India).',
  alternates: { canonical: 'https://caffeinenirvana.co/terms' },
  robots: { index: true, follow: false },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
