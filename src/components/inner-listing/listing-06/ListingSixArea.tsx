"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const formatLocation = (location: any) => {
  if (!location) return "Ubicación no disponible";

  if (typeof location === "string") {
    return location;
  }

  const parts = [
    location?.name,
    location?.street,
    location?.exterior_number,
    location?.interior_number,
    location?.city,
    location?.state,
    location?.country,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Ubicación no disponible";
};

const ListingSixArea = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => {
        if (data?.errors?.length) {
          console.error("EasyBroker API error:", data.errors);
          setError("No se pudieron cargar las propiedades en este momento.");
          setProperties([]);
          setLoading(false);
          return;
        }

        setProperties(data.content || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando propiedades:", err);
        setError("No se pudieron cargar las propiedades en este momento.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="property-listing-six pt-200 xl-pt-150 pb-200 xl-pb-120">
      <div className="container">
        <h2 className="mb-40 text-center">Propiedades disponibles</h2>

        {loading && <p className="text-center">Cargando propiedades...</p>}
        {!loading && error && <p className="text-center text-danger">{error}</p>}
        {!loading && !error && properties.length === 0 && <p>No se encontraron propiedades.</p>}

        <div className="row">
          {properties.map((prop) => (
            <div key={prop.public_id} className="col-md-4 mb-4">
              <div className="property-card p-3 bg-white shadow-sm rounded">
                <img
                  src={prop.title_image_thumb || "/images/default-property.jpg"}
                  alt={prop.title}
                  className="img-fluid mb-3 rounded"
                />
                <h5>{prop.title}</h5>
                <p>{formatLocation(prop.location)}</p>
                <p>
                  <strong>
                    {prop.operations?.[0]?.formatted_amount || "Precio no disponible"}
                  </strong>
                </p>
                <Link
                  href={`/property/${prop.public_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-one mt-3 d-block text-center"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingSixArea;
