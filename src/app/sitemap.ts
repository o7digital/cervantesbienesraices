import { MetadataRoute } from 'next'

const BASE_URL = 'https://cervantesbienesraices.vercel.app'
const EASY_BROKER_URL = "https://api.easybroker.com/v1/properties"

async function fetchAllProperties() {
  const apiKey = process.env.EB_API_KEY
  if (!apiKey) {
    console.warn('EB_API_KEY no está configurada, sitemap sin propiedades dinámicas')
    return []
  }

  try {
    const properties = []
    let page = 1
    let hasMore = true

    while (hasMore) {
      const response = await fetch(
        `${EASY_BROKER_URL}?page=${page}&limit=50&search[statuses][]=published`,
        {
          headers: {
            accept: "application/json",
            "X-Authorization": apiKey,
          },
          next: { revalidate: 3600 } // Cache 1 hora
        }
      )

      if (!response.ok) {
        console.error('Error fetching properties for sitemap')
        break
      }

      const data = await response.json()
      
      if (data.content && data.content.length > 0) {
        properties.push(...data.content)
        hasMore = data.pagination?.next_page != null
        page++
      } else {
        hasMore = false
      }
    }

    return properties
  } catch (error) {
    console.error('Error in fetchAllProperties:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Obtener propiedades de EasyBroker
  const properties = await fetchAllProperties()
  
  // URLs de propiedades dinámicas (ES, EN, FR, IT)
  const propertyUrls: MetadataRoute.Sitemap = []
  
  properties.forEach((property: any) => {
    const lastMod = property.updated_at ? new Date(property.updated_at) : new Date()
    
    // ES (default)
    propertyUrls.push({
      url: `${BASE_URL}/property/${property.public_id}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
    
    // EN
    propertyUrls.push({
      url: `${BASE_URL}/en/property/${property.public_id}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
    
    // FR
    propertyUrls.push({
      url: `${BASE_URL}/fr/property/${property.public_id}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
    
    // IT
    propertyUrls.push({
      url: `${BASE_URL}/it/property/${property.public_id}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  })

  // URLs estáticas principales
  const staticUrls = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/quienes-somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/consultoria`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/listing_06`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // Páginas de localidades (SEO)
    {
      url: `${BASE_URL}/polanco`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/condesa`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/roma-norte`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/aviso-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    // Versión en inglés
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/listing_06`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    // Version française
    {
      url: `${BASE_URL}/fr`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fr/listing_06`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fr/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/fr/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    // Versione italiana
    {
      url: `${BASE_URL}/it`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/it/listing_06`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/it/politica-privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/it/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...staticUrls, ...propertyUrls]
}
