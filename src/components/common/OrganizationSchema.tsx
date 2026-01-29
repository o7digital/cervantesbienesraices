import Script from 'next/script'

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Cervantes Bienes Raíces",
    "description": "Asesoría inmobiliaria con más de 20 años de experiencia en México. Venta y renta de casas y departamentos.",
    "url": "https://www.cervantesbienesraices.com",
    "logo": "https://www.cervantesbienesraices.com/images/assets/ogg.png",
    "image": "https://www.cervantesbienesraices.com/images/assets/ogg.png",
    "telephone": "+52-55-XXXX-XXXX",
    "email": "info@cervantesbienesraices.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressRegion": "CDMX",
      "addressLocality": "Ciudad de México"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ciudad de México"
      },
      {
        "@type": "City", 
        "name": "Área Metropolitana"
      }
    ],
    "priceRange": "$$-$$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/cervantesbienesraices",
      "https://www.instagram.com/cervantesbienesraices"
    ]
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
