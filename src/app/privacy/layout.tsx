import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Caffeine Nirvana collects, uses, and retains the information you share through our enquiry forms. DPDP Act 2023 + GDPR aware.',
  alternates: { canonical: 'https://caffeinenirvana.co/privacy' },
  robots: { index: true, follow: false },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
