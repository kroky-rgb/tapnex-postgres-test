export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TapNex",
    alternateName: "NextGen FC",
    url: "https://tapnex.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://tapnex.tech/tapnex-logo.png",
      width: 512,
      height: 512,
    },
    description:
      "TapNex is a smart NFC-based cashless payment system for events, offering instant transactions, real-time analytics, and seamless event management.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Prabhav Jain",
        jobTitle: "Founder & CEO",
        email: "prabhav@tapnex.tech",
        sameAs: ["https://www.linkedin.com/in/prabhavjain2004/"],
      },
      {
        "@type": "Person",
        name: "Moinak Mondal",
        jobTitle: "Co-Founder & CTO",
        email: "moinak@tapnex.tech",
        sameAs: ["https://linkedin.com/in/moinakm"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "770/2 Ankur Colony, Makroniya",
      addressLocality: "Sagar",
      addressRegion: "Madhya Pradesh",
      postalCode: "470004",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-78985-75626",
        contactType: "customer service",
        email: "info@tapnex.tech",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/tapnex",
      "https://twitter.com/tapnex",
      "https://www.instagram.com/tapnex",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: ["NFC Technology", "Event Management", "Cashless Payments", "Digital Ticketing"],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NFC Event Payment Solutions",
    description:
      "Comprehensive NFC-based cashless payment system for events including college fests, tech expos, and corporate events",
    provider: {
      "@type": "Organization",
      name: "TapNex",
      url: "https://tapnex.tech",
    },
    serviceType: "Event Technology Solutions",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TapNex Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "NFC Payments",
            description: "Contactless payment solutions for events with real-time processing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entry Management",
            description: "Automated access control and ticketing validation system",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Ticketing",
            description: "QR/NFC-based digital ticketing with fraud prevention",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real-time Analytics",
            description: "Live event analytics and reporting dashboard",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TapNex",
    url: "https://tapnex.tech",
    description: "Smart NFC-based cashless payment system for events",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tapnex.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "NextGen FC",
      logo: {
        "@type": "ImageObject",
        url: "https://tapnex.tech/nextgen-logo.png",
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tapnex.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://tapnex.tech/features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Solutions",
        item: "https://tapnex.tech/solutions",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About",
        item: "https://tapnex.tech/about",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://tapnex.tech/contact",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
