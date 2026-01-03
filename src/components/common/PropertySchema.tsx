import Script from 'next/script'

interface PropertySchemaProps {
  property: {
    public_id: string
    title: string
    description?: string
    operations?: Array<{ type: string; amount?: number; currency?: string; formatted_amount?: string; type_label?: string }>
    location?: string | { name?: string; city?: string; state?: string; country?: string; street?: string }
    bedrooms?: number
    bathrooms?: number
    building_size?: { size?: number; unit?: string }
    lot_size?: { size?: number; unit?: string }
    property_type?: string
    show_prices?: boolean
    updated_at?: string
    property_images?: Array<{ url: string }>
  }
}

const SITE_URL = "https://cervantesbienesraices.vercel.app"

export default function PropertySchema({ property }: PropertySchemaProps) {
  const operation = property.operations?.[0]
  const price = operation?.amount
  const currency = operation?.currency || 'MXN'

  const address =
    typeof property.location === "string"
      ? property.location
      : [
          property.location?.street,
          property.location?.city,
          property.location?.state,
          property.location?.country,
        ]
          .filter(Boolean)
          .join(", ") || "México"

  const canonicalUrl = `${SITE_URL}/property/${property.public_id}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": property.description || property.title,
    "url": canonicalUrl,
    "datePosted": property.updated_at || new Date().toISOString(),
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressLocality": address
    },
    "offers": property.show_prices !== false && price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    } : undefined,
    "numberOfRooms": property.bedrooms,
    "numberOfBathroomsTotal": property.bathrooms,
    "floorSize": property.building_size?.size ? {
      "@type": "QuantitativeValue",
      "value": property.building_size.size,
      "unitCode": "MTK"
    } : undefined,
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Cervantes Bienes Raíces",
      "url": SITE_URL
    }
  }

  const cleanSchema = JSON.parse(JSON.stringify(schema))

  return (
    <Script
      id="property-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  )
}
