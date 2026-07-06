"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PropertyCard from "@/components/common/PropertyCard";

interface Property {
  public_id: string;
  title: string;
  location: unknown;
  title_image_full?: string;
  title_image_thumb?: string;
  operations?: Array<{ formatted_amount?: string; type?: string }>;
  bedrooms?: number;
  bathrooms?: number;
  parking_spaces?: number;
  construction_size?: number;
  created_at?: string;
  updated_at?: string;
}

const propertyQuality = (property: Property) => {
  const hasImage = Boolean(property.title_image_full || property.title_image_thumb);
  const hasPrice = Boolean(property.operations?.[0]?.formatted_amount);
  const hasLocation = Boolean(property.location);
  const details = [property.bedrooms, property.bathrooms, property.construction_size]
    .filter((value) => value !== undefined && value !== null).length;

  return Number(hasImage) * 4 + Number(hasPrice) * 2 + Number(hasLocation) * 2 + details;
};

const propertyDate = (property: Property) =>
  new Date(property.updated_at || property.created_at || 0).getTime();

const PropertyListingOne = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/properties?status=published&limit=50", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("No se pudieron cargar las propiedades");
        return response.json();
      })
      .then((data) => setProperties(Array.isArray(data?.content) ? data.content : []))
      .catch((error) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error cargando propiedades destacadas:", error);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const featuredProperties = useMemo(
    () =>
      [...properties]
        .filter((property) => property.public_id && property.title && propertyQuality(property) >= 7)
        .sort((a, b) => propertyDate(b) - propertyDate(a) || propertyQuality(b) - propertyQuality(a))
        .slice(0, 6),
    [properties]
  );

  if (!loading && !featuredProperties.length) return null;

  return (
    <section className="property-listing-one mt-170 xl-mt-120" aria-labelledby="featured-properties-title">
      <div className="container container-large">
        <div className="title-one text-center mb-25 lg-mb-10 wow fadeInUp">
          <h3 id="featured-properties-title">Propiedades destacadas</h3>
          <p className="fs-22 mt-xs">Descubre nuestras propiedades más nuevas y de mayor calidad.</p>
        </div>

        {loading ? (
          <p className="text-center fs-20 py-5">Cargando propiedades...</p>
        ) : (
          <div className="row gx-xxl-5">
            {featuredProperties.map((property) => (
              <div key={property.public_id} className="col-lg-4 col-md-6 mt-40 wow fadeInUp">
                <PropertyCard {...property} language="es" />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-70 md-mt-50">
          <Link href="/listing_06" className="btn-eight">
            <span>Ver todas las propiedades</span> <i className="bi bi-arrow-up-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyListingOne;
