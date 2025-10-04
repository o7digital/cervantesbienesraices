"use client"

import React from "react"

interface CommonBannerProps {
  title?: string
  address?: string
  price?: number
  operation?: "Venta" | "Renta" | string
  propertyType?: string
}

const CommonBanner: React.FC<CommonBannerProps> = ({
  title = "Propiedad sin título",
  address = "Dirección no disponible",
  price,
  operation,
  propertyType,
}) => {
  return (
    <div className="property-banner bg-light p-4 mb-5 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <h2 className="fw-bold mb-2">{title}</h2>
          <p className="mb-1 text-muted">
            <i className="fa-solid fa-location-dot me-2"></i> {address}
          </p>
          <p className="mb-0 text-secondary">
            {propertyType ? propertyType : "Tipo no especificado"} —{" "}
            {operation ? operation : "Operación no especificada"}
          </p>
        </div>

        {price !== undefined && (
          <div className="text-end">
            <h3 className="text-success fw-bold mb-0">
              ${price.toLocaleString("es-MX")} MXN
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommonBanner
