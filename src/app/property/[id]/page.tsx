import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThree from "@/layouts/footers/FooterThree";
import ImageGallery from "@/components/common/ImageGallery";
import PropertySchema from "@/components/common/PropertySchema";

const BASE_URL = "https://www.cervantesbienesraices.com";
const EB_API_URL = "https://api.easybroker.com/v1/properties";

type Property = {
  public_id: string;
  title: string;
  description?: string;
  operations?: Array<{ type: string; amount?: number; currency?: string; formatted_amount?: string; type_label?: string }>;
  location?: {
    name?: string;
    street?: string;
    exterior_number?: string;
    interior_number?: string;
    city?: string;
    state?: string;
    country?: string;
  } | string;
  bedrooms?: number;
  bathrooms?: number;
  parking_spaces?: number;
  building_size?: { size?: number; unit?: string };
  construction_size?: number;
  lot_size?: { size?: number; unit?: string };
  property_type?: string;
  property_images?: Array<{ url: string }>;
  updated_at?: string;
  show_prices?: boolean;
};

async function fetchProperty(id: string): Promise<Property | null> {
  const apiKey = process.env.EB_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch(`${EB_API_URL}/${id}`, {
      headers: {
        accept: "application/json",
        "X-Authorization": apiKey,
      },
      next: { revalidate: 900 },
    });

    if (!response.ok) return null;
    const data = await response.json();
    return (data?.property as Property) || (data as Property);
  } catch {
    return null;
  }
}

function buildLocationLabel(property: Property): string {
  if (!property?.location) return "Ubicación no disponible";
  if (typeof property.location === "string") return property.location;

  const parts = [
    property.location?.name,
    property.location?.street,
    property.location?.exterior_number,
    property.location?.interior_number,
    property.location?.city,
    property.location?.state,
    property.location?.country,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Ubicación no disponible";
}

function buildPriceLabel(property: Property): string {
  const op = property.operations?.[0];
  return op?.formatted_amount || (op?.amount ? `${op.amount} ${op.currency || "MXN"}` : "Precio no disponible");
}

function buildOperationLabel(property: Property): string {
  const operation = property.operations?.[0];
  const type = operation?.type_label || operation?.type || "";
  const normalized = type.toLowerCase();
  if (normalized === "sale" || normalized === "venta") return "En venta";
  if (normalized === "rent" || normalized === "renta") return "En renta";
  return type || "Disponible";
}

function formatArea(size?: number, unit = "m2") {
  if (!size) return "N/D";
  return `${size.toLocaleString("es-MX")} ${unit}`;
}

function truncate(text?: string, max = 160): string | undefined {
  if (!text) return undefined;
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = await fetchProperty(params.id);

  if (!property) {
    return {
      title: "Propiedad no encontrada | Cervantes Bienes Raíces",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${BASE_URL}/property/${property.public_id || params.id}`;
  const description = truncate(property.description) || "Propiedad en venta o renta en México.";
  const ogImage = property.property_images?.[0]?.url || "/images/assets/ogg.png";

  return {
    title: `${property.title} | Cervantes Bienes Raíces`,
    description,
    alternates: {
      canonical,
      languages: {
        "es-MX": canonical,
        "en-US": `${BASE_URL}/en/property/${property.public_id || params.id}`,
        "fr-FR": `${BASE_URL}/fr/property/${property.public_id || params.id}`,
        "it-IT": `${BASE_URL}/it/property/${property.public_id || params.id}`,
        "de-DE": `${BASE_URL}/de/property/${property.public_id || params.id}`,
      },
    },
    openGraph: {
      title: `${property.title} | Cervantes Bienes Raíces`,
      description,
      url: canonical,
      images: [{ url: ogImage }],
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Cervantes Bienes Raíces`,
      description,
      images: [ogImage],
    },
  };
}

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await fetchProperty(params.id);
  if (!property) {
    notFound();
  }

  const locationLabel = buildLocationLabel(property);
  const priceLabel = buildPriceLabel(property);
  const operationLabel = buildOperationLabel(property);
  const areaSize = property.building_size?.size || property.construction_size;
  const areaUnit = property.building_size?.unit || "m2";
  const featureItems = [
    { icon: "fa-bed", label: "Recamaras", value: property.bedrooms ?? "N/D" },
    { icon: "fa-bath", label: "Banos", value: property.bathrooms ?? "N/D" },
    { icon: "fa-car", label: "Estacionamientos", value: property.parking_spaces ?? "N/D" },
    { icon: "fa-ruler-combined", label: "Construccion", value: formatArea(areaSize, areaUnit) },
    { icon: "fa-vector-square", label: "Terreno", value: formatArea(property.lot_size?.size, property.lot_size?.unit || "m2") },
    { icon: "fa-house", label: "Tipo", value: property.property_type || "N/D" },
  ];

  return (
    <div className="main-page-wrapper">
      <HeaderFive />
      <main className="property-detail-page pt-160 lg-pt-130 pb-120">
        <div className="container">
          <div className="property-detail-hero">
            <div>
              <span className="property-detail-status">{operationLabel}</span>
              <h1>{property.title}</h1>
              <p className="property-detail-location">
                <i className="fa-solid fa-location-dot"></i>
                {locationLabel}
              </p>
            </div>
            <div className="property-detail-price">
              <span>Precio</span>
              <strong>{priceLabel}</strong>
            </div>
          </div>

          {property.property_images?.length ? (
            <ImageGallery images={property.property_images} title={property.title} />
          ) : (
            <div className="property-detail-empty">Sin imagenes disponibles.</div>
          )}

          <div className="property-detail-content">
            <section className="property-detail-main">
              <div className="property-detail-panel">
                <h2>Descripcion</h2>
                <p>{property.description || "Sin descripcion disponible."}</p>
              </div>
            </section>

            <aside className="property-detail-sidebar">
              <div className="property-detail-panel">
                <h2>Caracteristicas</h2>
                <div className="property-detail-features">
                  {featureItems.map((item) => (
                    <div className="property-detail-feature" key={item.label}>
                      <i className={`fa-solid ${item.icon}`}></i>
                      <div>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                className="property-detail-contact"
                href={`/contact?property=${encodeURIComponent(property.title)}&propertyId=${encodeURIComponent(
                  property.public_id
                )}&sourcePath=${encodeURIComponent(`/property/${property.public_id}`)}#contact-form`}
              >
                Contactar por esta propiedad
                <i className="fa-solid fa-envelope"></i>
              </a>
            </aside>
          </div>
        </div>
      </main>
      <FooterThree />
      <PropertySchema property={property} />
    </div>
  );
}
