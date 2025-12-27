import Script from 'next/script'

interface PropertySchemaProps {
  property: {
    public_id: string
    title: string
    description?: string
    operations?: Array<{ type: string; amount?: number; currency?: string }>
    location?: string
    bedrooms?: number
    bathrooms?: number
    construction_size?: number
    lot_size?: number
    property_type?: string
    show_prices?: boolean
    updated_at?: string
  }
}

export default function PropertySchema({ property }: PropertySchemaProps) {
  // Determinar el precio
  const operation = property.operations?.[0]
  const price = operation?.amount
  const currency = operation?.currency || 'MXN'
  const operationType = operation?.type === 'sale' ? 'venta' : 'renta'

  // Construir la dirección
  const address = property.location || 'México'

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": property.description || property.title,
    "url": `https://cervantesbienesraices.vercel.app/listing_06?id=${property.public_id}`,
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
    "floorSize": property.construction_size ? {
      "@type": "QuantitativeValue",
      "value": property.construction_size,
      "unitCode": "MTK"
    } : undefined,
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Cervantes Bienes Raíces",
      "url": "https://cervantesbienesraices.vercel.app"
    }
  }

  // Eliminar campos undefined
  const cleanSchema = JSON.parse(JSON.stringify(schema))

  return (
    <Script
      id="property-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  )
}
