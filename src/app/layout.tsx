import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Caffeine Nirvana — Single-Estate Specialty Coffee From Origin',
  description: 'Zoya Estate, Chikmagalur. Direct-export specialty green coffee. Traceable, transparent, and award-winning. Ernesto Illy International Coffee Award 2020.',
  keywords: 'specialty coffee, green coffee, single estate, Chikmagalur, India, direct export, Zoya Estate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
