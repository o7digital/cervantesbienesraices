import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeIt from "@/layouts/footers/FooterThreeIt";
import ImageGallery from "@/components/common/ImageGallery";
import PropertySchema from "@/components/common/PropertySchema";
import { localizePropertyTitle } from "@/utils/propertyLocalization";

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
  if (!property?.location) return "Posizione non disponibile";
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

  return parts.length ? parts.join(", ") : "Posizione non disponibile";
}

function buildPriceLabel(property: Property): string {
  const op = property.operations?.[0];
  return op?.formatted_amount || (op?.amount ? `${op.amount} ${op.currency || "MXN"}` : "Prezzo non disponibile");
}

function truncate(text?: string, max = 160): string | undefined {
  if (!text) return undefined;
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = await fetchProperty(id);

  if (!property) {
    return {
      title: "Proprietà non trovata | Cervantes Immobiliare",
      description: "La proprietà richiesta non esiste.",
    };
  }

  const localizedTitle = localizePropertyTitle(property.title || "", "it");
  const locationLabel = buildLocationLabel(property);
  const priceLabel = buildPriceLabel(property);
  const pageTitle = `${localizedTitle || property.title} – ${locationLabel}`;
  const pageDescription = truncate(
    property.description || `${localizedTitle || property.title} situata a ${locationLabel}. ${priceLabel}.`
  );
  const imageUrl = property.property_images?.[0]?.url || "/images/assets/ogg.png";
  const canonicalUrl = `${BASE_URL}/it/property/${id}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "it-IT": `${BASE_URL}/it/property/${id}`,
        "es-MX": `${BASE_URL}/property/${id}`,
        "en-US": `${BASE_URL}/en/property/${id}`,
        "fr-FR": `${BASE_URL}/fr/property/${id}`,
        "de-DE": `${BASE_URL}/de/property/${id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      images: [{ url: imageUrl }],
      locale: "it_IT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

export default async function PropertyDetailPageIt({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await fetchProperty(id);

  if (!property) {
    notFound();
  }

  const localizedTitle = localizePropertyTitle(property.title || "", "it");
  const locationLabel = buildLocationLabel(property);
  const priceLabel = buildPriceLabel(property);

  return (
    <div className="main-page-wrapper">
      <HeaderFive />
      <main className="property-detail container pt-100 pb-100">
        <h1 className="mb-4">{localizedTitle || property.title}</h1>
        <p className="text-muted">{locationLabel}</p>

        {property.property_images?.length ? (
          <ImageGallery images={property.property_images} title={localizedTitle || property.title} />
        ) : (
          <p className="text-muted mb-4">Nessuna immagine disponibile.</p>
        )}

        <h3>Prezzo</h3>
        <p>{priceLabel}</p>

        <h3>Descrizione</h3>
        <p>{property.description || "Nessuna descrizione disponibile"}</p>

        <h3>Caratteristiche</h3>
        <ul>
          <li>Camere da letto : {property.bedrooms ?? "N/A"}</li>
          <li>Bagni : {property.bathrooms ?? "N/A"}</li>
          <li>Parcheggio : {property.parking_spaces ?? "N/A"}</li>
          <li>
            Superficie : {property.building_size?.size ?? "N/A"} {property.building_size?.unit}
          </li>
        </ul>
      </main>
      <FooterThreeIt />
      <PropertySchema property={property} />
    </div>
  );
}
