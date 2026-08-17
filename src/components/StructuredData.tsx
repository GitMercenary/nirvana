// Structured data, split so each schema appears only where it belongs:
//  - Organization: sitewide (rendered in the root layout)
//  - ProductSchema: render ONLY on /offerings
//  - FaqSchema:     render ONLY on the homepage
// (Duplicating Product/FAQ on every page dilutes rich results, so they are scoped.)

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Caffeine Nirvana',
    url: 'https://caffeinenirvana.co',
    logo: 'https://caffeinenirvana.co/images/logo-full.jpg',
    description:
      'Specialty green coffee exporter from Chikmagalur, India. Direct trade, traceable lots scoring 85.5–87.75 SCA.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chikmagalur',
      addressRegion: 'Karnataka',
      postalCode: '577101',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'danish@caffeinenirvana.co',
      contactType: 'sales',
    },
    sameAs: [
      'https://typica.coffee/en/producers/caffeine-nirvana',
      'https://www.instagram.com/caffeine_nirvana/',
      // LinkedIn: add here when the company page is active
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}

// Render only on /offerings
export function ProductSchema() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Specialty Green Coffee — Chikmagalur, India',
    brand: { '@type': 'Brand', name: 'Caffeine Nirvana' },
    description:
      'High-scoring specialty green coffee lots (85.5–87.75 SCA) from Chikmagalur, India. Washed, natural, and experimental anaerobic processes.',
    category: 'Green Coffee Beans',
    countryOfOrigin: 'India',
    // Product image (swap for a dedicated green-coffee product render when available)
    image: 'https://caffeinenirvana.co/images/estate-zoya-hero.png',
    // 'offers' intentionally omitted — no public B2B price to state honestly.
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  )
}

// Render only on the homepage
export function FaqSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Caffeine Nirvana coffee grown?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'All Caffeine Nirvana coffee is grown in Chikmagalur, Karnataka, India — the birthplace of Indian coffee. We work with three partner estates: Zoya Estate (our flagship, at 4,180 ft msl), Sheethal Estate (lakeside, organic, Panchgavya practices), and Kardigandi Estate (Aldur, Rainforest Alliance Certified).',
        },
      },
      {
        '@type': 'Question',
        name: 'What SCA scores do Caffeine Nirvana coffees achieve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Our current lots score between SCA 85.5 and SCA 87.75. The Supernatural Process Triple from Zoya Estate is our highest-scoring lot at 87.75. All cup scores are independently verified.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I request a sample?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Use the Request Sample button on any lot in our Offerings page, or email Danish directly at danish@caffeinenirvana.co. We offer 1kg samples per lot to qualified trade buyers. Shipping is at the buyer’s cost unless agreed otherwise.',
        },
      },
      {
        '@type': 'Question',
        name: 'What Incoterms does Caffeine Nirvana ship under?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Standard FOB Mangalore. CIF terms are available on request. Lot documentation, ICO marks, certificates of origin, and quality certifications are shared as applicable to each shipment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who runs Caffeine Nirvana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Danish Ali (Founder) — 150-year family coffee-growing heritage in Chikmagalur, runs the producer / export side from Zoya Estate. Ayesha Naseer (Director) — Bengaluru-based, founder of the Café Azzure chain, leads market and customer relationships. Harsh Jain (Roasting Head) — Chikmagalur-born, headquartered in Gujarat, runs the roasted-bean and white-label division.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Caffeine Nirvana also supply roasted coffee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. We supply roasted single-origin beans wholesale to cafés and retailers, develop custom roast profiles for partner brands, and run white-label programmes. See /roasted-supply for details, or contact danish@caffeinenirvana.co.',
        },
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
