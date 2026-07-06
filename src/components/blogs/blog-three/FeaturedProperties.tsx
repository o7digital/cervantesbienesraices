"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/common/PropertyCard";

type Property = {
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
};

type OperationFilter = "rent" | "sale" | "all";

const normalize = (value: unknown) =>
  String(value ?? "").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

const operationType = (property: Property) => normalize(property.operations?.[0]?.type);
const isRent = (property: Property) => ["rent", "renta", "rental"].includes(operationType(property));
const isSale = (property: Property) => ["sale", "venta"].includes(operationType(property));

const qualityScore = (property: Property) =>
  Number(Boolean(property.title_image_full || property.title_image_thumb)) * 4 +
  Number(Boolean(property.operations?.[0]?.formatted_amount)) * 2 +
  Number(Boolean(property.location)) * 2 +
  [property.bedrooms, property.bathrooms, property.construction_size]
    .filter((value) => value !== undefined && value !== null).length;

const propertyDate = (property: Property) =>
  new Date(property.updated_at || property.created_at || 0).getTime();

const FeaturedProperties = () => {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const requestedOperation = searchParams?.get("operacion");
  const [filter, setFilter] = useState<OperationFilter>(requestedOperation === "sale" ? "sale" : "rent");
  const [query, setQuery] = useState("");
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

  useEffect(() => {
    if (requestedOperation === "rent" || requestedOperation === "sale") {
      setFilter(requestedOperation);
    }
  }, [requestedOperation]);

  const filteredProperties = useMemo(() => {
    const search = normalize(query.trim());

    return properties
      .filter((property) => property.public_id && property.title && qualityScore(property) >= 7)
      .filter((property) => filter === "all" || (filter === "rent" ? isRent(property) : isSale(property)))
      .filter((property) => {
        if (!search) return true;
        return normalize(`${property.title} ${JSON.stringify(property.location)}`).includes(search);
      })
      .sort((a, b) => propertyDate(b) - propertyDate(a) || qualityScore(b) - qualityScore(a))
      .slice(0, 9);
  }, [filter, properties, query]);

  return (
    <section id="propiedades-destacadas" className="pt-100 lg-pt-80" aria-labelledby="featured-properties-heading">
      <div className="container">
        <div className="title-one text-center mb-45">
          <h2 id="featured-properties-heading">Propiedades destacadas</h2>
          <p className="fs-20 mt-xs">Encuentra propiedades seleccionadas para renta o compra.</p>
        </div>

        <div className="mx-auto mb-35" style={{ maxWidth: 760 }}>
          <label htmlFor="featured-property-search" className="visually-hidden">Buscar propiedades</label>
          <div className="position-relative">
            <input
              id="featured-property-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por propiedad, colonia o ubicación"
              className="w-100 border rounded-pill ps-4 pe-5"
              style={{ height: 58 }}
            />
            <i className="fa-regular fa-magnifying-glass position-absolute top-50 translate-middle-y" style={{ right: 22 }} />
          </div>
        </div>

        <div className="blog-filter-nav mb-20">
          <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
            {([
              ["rent", "Rentas"],
              ["sale", "Ventas"],
              ["all", "Todas"],
            ] as const).map(([value, label]) => (
              <li
                key={value}
                className={filter === value ? "is-checked" : ""}
                role="button"
                tabIndex={0}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setFilter(value);
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <p className="text-center fs-20 py-5">Cargando propiedades...</p>
        ) : filteredProperties.length ? (
          <div className="row gx-xxl-5">
            {filteredProperties.map((property) => (
              <div key={property.public_id} className="col-lg-4 col-md-6 mt-40">
                <PropertyCard {...property} language="es" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center fs-20 py-5">No encontramos propiedades con estos criterios.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
