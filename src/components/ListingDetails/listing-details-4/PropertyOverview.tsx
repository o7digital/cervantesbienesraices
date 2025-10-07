"use client"

import * as React from "react"

interface PropertyOverviewProps {
  property: {
    titulo?: string
    direccion?: string
    precio?: number
    operacion?: string
    tipo_propiedad?: string
    descripcion?: string
    recamaras?: number
    banos?: number
    area_construccion?: number
    area_terreno?: number
    estacionamientos?: number
    antiguedad?: string
    video_url?: string
    caracteristicas?: string
  }
}

export default function PropertyOverview({ property }: PropertyOverviewProps) {
  if (!property) return null

  return (
    <React.Fragment>
      <section className="property-overview bottom-line-dark pb-40 mb-60">
        <h4 className="mb-20">Detalles de la Propiedad</h4>

        <p className="fs-20 lh-lg">
          {property.descripcion || "Sin descripción disponible."}
        </p>

        <div className="row mt-40">
          <div className="col-md-6 mb-3">
            <strong>Título:</strong>
            <p>{property.titulo || "—"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Dirección:</strong>
            <p>{property.direccion || "—"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Tipo de Propiedad:</strong>
            <p>{property.tipo_propiedad || "—"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Operación:</strong>
            <p>{property.operacion || "Venta/Renta"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Precio:</strong>
            <p>
              {property.precio
                ? `$${property.precio.toLocaleString("es-MX")}`
                : "Consultar precio"}
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Recámaras:</strong>
            <p>{property.recamaras ?? "—"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Baños:</strong>
            <p>{property.banos ?? "—"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Superficie Construcción:</strong>
            <p>
              {property.area_construccion
                ? `${property.area_construccion} m²`
                : "—"}
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Superficie Terreno:</strong>
            <p>
              {property.area_terreno ? `${property.area_terreno} m²` : "—"}
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Estacionamientos:</strong>
            <p>{property.estacionamientos ?? "—"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <strong>Antigüedad:</strong>
            <p>{property.antiguedad || "—"}</p>
          </div>
        </div>

        {property.caracteristicas && (
          <div className="mt-40">
            <h5>Características adicionales</h5>
            <p className="fs-18 lh-lg">{property.caracteristicas}</p>
          </div>
        )}

        {property.video_url && (
          <div className="property-video mt-50">
            <h5>Video Tour</h5>
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-3">
              <iframe
                src={property.video_url}
                title="Video tour"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </React.Fragment>
  )
}
