export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  image: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TapNex",
      logo: {
        "@type": "ImageObject",
        url: "https://tapnex.tech/tapnex-logo.png",
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image,
    url: article.url,
  }
}

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TapNex NFC Event Payment System",
    description: "Smart NFC-based cashless payment system for events",
    brand: {
      "@type": "Brand",
      name: "TapNex",
    },
    manufacturer: {
      "@type": "Organization",
      name: "NextGen FC",
    },
    category: "Event Technology",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "Contact for pricing",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: "TapNex",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TapNex",
    description: "NFC-based cashless payment system for events",
    url: "https://tapnex.tech",
    telephone: "+91-78985-75626",
    email: "info@tapnex.tech",
    address: {
      "@type": "PostalAddress",
      streetAddress: "770/2 Ankur Colony, Makroniya",
      addressLocality: "Sagar",
      addressRegion: "Madhya Pradesh",
      postalCode: "470004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.8388",
      longitude: "78.7378",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }
}
