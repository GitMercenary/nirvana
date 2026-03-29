export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Caffeine Nirvana',
    url: 'https://caffeinenirvana.net',
    logo: 'https://caffeinenirvana.net/images/logo-full.jpg',
    description:
      'Specialty green coffee exporter from Chikmagalur, India. Direct trade, traceable lots scoring 86-88 SCA.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chikmagalur',
      addressRegion: 'Karnataka',
      postalCode: '577101',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'danish.888.ali@gmail.com',
      telephone: '+918073728811',
      contactType: 'sales',
    },
    sameAs: [
      'https://linkedin.com/company/caffeine-nirvana',
      'https://instagram.com/caffeinenirvana',
      'https://typica.coffee/en/producers/caffeine-nirvana',
    ],
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Specialty Green Coffee — Chikmagalur, India',
    brand: { '@type': 'Brand', name: 'Caffeine Nirvana' },
    description:
      'High-scoring specialty green coffee lots (86-88 SCA) from small farmers in Chikmagalur, India. Washed, natural, and monsooned process.',
    category: 'Green Coffee Beans',
    countryOfOrigin: 'India',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      eligibleRegion: 'Worldwide',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  )
}
