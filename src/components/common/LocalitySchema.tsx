import Script from 'next/script'

interface LocalitySchemaProps {
  name: string
  description: string
  neighborhood: string
  priceRange: string
  highlights: string[]
}

export default function LocalitySchema({ name, description, neighborhood, priceRange, highlights }: LocalitySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhood,
      "addressRegion": "CDMX",
      "addressCountry": "MX"
    },
    "containsPlace": {
      "@type": "RealEstateAgent",
      "name": "Cervantes Bienes Raíces",
      "priceRange": priceRange,
      "description": `Propiedades disponibles en ${neighborhood}`
    },
    "amenityFeature": highlights.map(highlight => ({
      "@type": "LocationFeatureSpecification",
      "name": highlight
    }))
  }

  return (
    <Script
      id={`locality-schema-${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
