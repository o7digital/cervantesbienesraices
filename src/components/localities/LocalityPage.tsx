"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import LocalitySchema from "@/components/common/LocalitySchema"

interface LocalityPageProps {
  name: string
  neighborhood: string
  description: string
  longDescription: string
  priceRange: string
  avgPriceSale: string
  avgPriceRent: string
  highlights: string[]
  attractions: string[]
  transportation: string[]
  heroImage: string
}

const LocalityPage = ({
  name,
  neighborhood,
  description,
  longDescription,
  priceRange,
  avgPriceSale,
  avgPriceRent,
  highlights,
  attractions,
  transportation,
  heroImage
}: LocalityPageProps) => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`/api/properties?location=${neighborhood}`)
        const data = await res.json()
        setProperties(data.content?.slice(0, 6) || [])
      } catch (error) {
        console.error("Error fetching properties:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProperties()
  }, [neighborhood])

  return (
    <div className="locality-page">
      <LocalitySchema 
        name={name}
        description={description}
        neighborhood={neighborhood}
        priceRange={priceRange}
        highlights={highlights}
      />

      {/* Hero Section */}
      <div className="inner-banner-one position-relative" style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="hero-heading text-white text-center">
                {name}
              </h1>
              <p className="fs-22 text-white text-center mt-25">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-80 mb-100">
        <div className="row">
          <div className="col-lg-8">
            {/* Description */}
            <div className="locality-content mb-60">
              <h2 className="mb-30">Vivir en {neighborhood}</h2>
              <p className="fs-20 lh-lg" style={{ whiteSpace: 'pre-line' }}>
                {longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="locality-highlights mb-60">
              <h3 className="mb-30">¿Por qué elegir {neighborhood}?</h3>
              <div className="row">
                {highlights.map((highlight, index) => (
                  <div key={index} className="col-md-6 mb-20">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success fs-20 me-3"></i>
                      <p className="fs-18 mb-0">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attractions */}
            <div className="locality-attractions mb-60">
              <h3 className="mb-30">Lugares de interés</h3>
              <ul className="list-style-two">
                {attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
            </div>

            {/* Transportation */}
            <div className="locality-transport mb-60">
              <h3 className="mb-30">Transporte y accesibilidad</h3>
              <div className="row">
                {transportation.map((transport, index) => (
                  <div key={index} className="col-md-6 mb-15">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-train-front fs-20 me-3 text-primary"></i>
                      <span>{transport}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Properties */}
            <div className="locality-properties mb-60">
              <h3 className="mb-30">Propiedades disponibles en {neighborhood}</h3>
              {loading ? (
                <p>Cargando propiedades...</p>
              ) : properties.length > 0 ? (
                <div className="row">
                  {properties.map((property) => (
                    <div key={property.public_id} className="col-md-6 mb-30">
                      <Link href={`/property/${property.public_id}`} className="card">
                        <div className="property-card">
                          {property.title}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Consulta nuestro catálogo completo de propiedades.</p>
              )}
              <div className="text-center mt-40">
                <Link href="/listing_06" className="btn-nine">
                  Ver todas las propiedades
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-sticky">
              {/* Price Info */}
              <div className="price-info-card mb-40 p-30 bg-white shadow-sm rounded">
                <h4 className="mb-25">Precios promedio en {neighborhood}</h4>
                <div className="mb-20">
                  <p className="text-muted mb-5">Venta</p>
                  <h5 className="text-dark">{avgPriceSale}</h5>
                </div>
                <div>
                  <p className="text-muted mb-5">Renta mensual</p>
                  <h5 className="text-dark">{avgPriceRent}</h5>
                </div>
              </div>

              {/* CTA */}
              <div className="cta-card p-30 bg-dark text-white rounded">
                <h5 className="text-white mb-20">¿Buscas una propiedad en {neighborhood}?</h5>
                <p className="mb-25">Nuestros asesores te ayudarán a encontrar tu hogar ideal.</p>
                <Link href="/contact" className="btn-five w-100 text-center">
                  Contactar asesor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalityPage
