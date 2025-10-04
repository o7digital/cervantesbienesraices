"use client"

import Image from "next/image"

interface PropertyOverviewProps {
  property: {
    Title?: string
    Address?: string
    Price?: number
    Operation?: string
    Property_type?: string
    Descripcion?: string
    Bedrooms?: number
    Bathrooms?: number
    Construccion_area?: number
    Terreno_area?: number
    Garage?: number
    Antiguedad?: string
    Video_url?: string
    Caracteristicas?: string
  }
}

const PropertyOverview = ({ property }: PropertyOverviewProps) => {
  if (!property) return null

  return (
    <section className="property-overview bottom-line-dark pb-40 mb-60">
      <h4 className="mb-20">Detalles de la Propiedad</h4>

      {/* --- Description générale --- */}
      <p className="fs-20 lh-lg">
        {property.Descripcion || "Sin descripción disponible."}
      </p>

      {/* --- Bloc des infos principales --- */}
      <div className="row mt-40">
        <div className="col-md-6 mb-3">
          <strong>Título:</strong>
          <p>{property.Title || "—"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Dirección:</strong>
          <p>{property.Address || "—"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Tipo de Propiedad:</strong>
          <p>{property.Property_type || "—"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Operación:</strong>
          <p>{property.Operation || "Venta/Renta"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Precio:</strong>
          <p>
            {property.Price
              ? `$${property.Price.toLocaleString("es-MX")}`
              : "Consultar precio"}
          </p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Recámaras:</strong>
          <p>{property.Bedrooms ?? "—"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Baños:</strong>
          <p>{property.Bathrooms ?? "—"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Superficie Construcción:</strong>
          <p>
            {property.Construccion_area
              ? `${property.Construccion_area} m²`
              : "—"}
          </p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Superficie Terreno:</strong>
          <p>
            {property.Terreno_area
              ? `${property.Terreno_area} m²`
              : "—"}
          </p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Estacionamientos:</strong>
          <p>{property.Garage ?? "—"}</p>
        </div>

        <div className="col-md-6 mb-3">
          <strong>Antigüedad:</strong>
          <p>{property.Antiguedad || "—"}</p>
        </div>
      </div>

      {/* --- Caractéristiques --- */}
      {property.Caracteristicas && (
        <div className="mt-40">
          <h5>Características adicionales</h5>
          <p className="fs-18 lh-lg">{property.Caracteristicas}</p>
        </div>
      )}

      {/* --- Vidéo si disponible --- */}
      {property.Video_url && (
        <div className="property-video mt-50">
          <h5>Video Tour</h5>
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-3">
            <iframe
              src={property.Video_url}
              title="Video tour"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default PropertyOverview
