export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TapNex",
    alternateName: "NextGen FC",
    url: "https://tapnex.tech",
    logo: "https://tapnex.tech/logo.png",
    description:
      "TapNex is a smart NFC-based cashless payment system for events, offering instant transactions, real-time analytics, and seamless event management.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Prabhav Jain",
        jobTitle: "Founder",
        email: "prabhav@tapnex.tech",
      },
      {
        "@type": "Person",
        name: "Moinak Mondal",
        jobTitle: "Co-Founder",
        email: "moinak@tapnex.tech",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-78985-75626",
      contactType: "customer service",
      email: "info@tapnex.tech",
    },
    sameAs: ["https://www.linkedin.com/company/tapnex", "https://twitter.com/tapnex"],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NFC Event Payment Solutions",
    description: "Cashless NFC payment system for events including college fests, tech expos, and corporate events",
    provider: {
      "@type": "Organization",
      name: "TapNex",
    },
    serviceType: "Event Technology",
    areaServed: "India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TapNex Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "NFC Payments",
            description: "Contactless payment solutions for events",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entry Management",
            description: "Automated access control for events",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Ticketing",
            description: "Digital ticketing and validation system",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
