"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const API_URL = "https://cervantes-directus-backend-production.up.railway.app"

const PropertyListingOne = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `${API_URL}/items/propriedades?filter[featured][_eq]=1&fields=id,Title,Address,Operation,Image.directus_files_id.id`
        )
        const data = await res.json()
        setProperties(data.data || [])
      } catch (err) {
        console.error("Error al cargar propiedades destacadas:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  if (loading) {
    return (
      <div className="property-listing-one mt-170 xl-mt-120">
        <div className="container container-large text-center">
          <h3>Cargando propiedades destacadas...</h3>
        </div>
      </div>
    )
  }

  if (!properties.length) {
    return (
      <div className="property-listing-one mt-170 xl-mt-120">
        <div className="container container-large text-center">
          <h3>No hay propiedades destacadas aún.</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="property-listing-one mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="position-relative">
          <div className="title-one text-center mb-25 lg-mb-10 wow fadeInUp">
            <h3>Propiedades Destacadas</h3>
            <p className="fs-22 mt-xs">Explora propiedades en venta y renta.</p>
          </div>

          <div className="row gx-xxl-5">
            {properties.map((item, index) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 mt-40 wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div
                  className="listing-card-four overflow-hidden d-flex align-items-end position-relative z-1"
                  style={{
                    backgroundImage: item.Image?.directus_files_id?.id
                      ? `url(${API_URL}/assets/${item.Image.directus_files_id.id})`
                      : "url(/images/home/placeholder.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "500px",
                    borderRadius: "12px",
                  }}
                >
                  {/* Tag: operación */}
                  <div className="tag fw-500">
                    {item.Operation === "Rent"
                      ? "Renta"
                      : item.Operation === "Sell"
                      ? "Venta"
                      : "Propiedad"}
                  </div>

                  <div className="property-info tran3s w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="pe-3">
                        <Link
                          href={`/listing_details_04?id=${item.id}`}
                          className="title fw-500 tran4s"
                        >
                          {item.Title}
                        </Link>
                        <div className="address tran4s">{item.Address}</div>
                      </div>
                      <Link
                        href={`/listing_details_04?id=${item.id}`}
                        className="btn-four inverse"
                      >
                        <span>Ver más</span>{" "}
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-100 md-mt-60">
            <Link href="/listing_06" className="btn-eight">
              <span>Ver todas las propiedades</span>{" "}
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyListingOne
