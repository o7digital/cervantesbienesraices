import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeEn from "@/layouts/footers/FooterThreeEn";
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
  if (!property?.location) return "Location not available";
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

  return parts.length ? parts.join(", ") : "Location not available";
}

function buildPriceLabel(property: Property): string {
  const op = property.operations?.[0];
  return op?.formatted_amount || (op?.amount ? `${op.amount} ${op.currency || "MXN"}` : "Price not available");
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
      title: "Property not found | Cervantes Real Estate",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${BASE_URL}/en/property/${property.public_id || params.id}`;
  const localizedTitle = localizePropertyTitle(property.title || "", "en");
  const description = truncate(property.description) || "Property for sale or rent in Mexico.";
  const ogImage = property.property_images?.[0]?.url || "/images/assets/ogg.png";

  return {
    title: `${localizedTitle || property.title} | Cervantes Real Estate`,
    description,
    alternates: {
      canonical,
      languages: {
        "en-US": canonical,
        "es-MX": `${BASE_URL}/property/${property.public_id || params.id}`,
        "fr-FR": `${BASE_URL}/fr/property/${property.public_id || params.id}`,
        "it-IT": `${BASE_URL}/it/property/${property.public_id || params.id}`,
        "de-DE": `${BASE_URL}/de/property/${property.public_id || params.id}`,
      },
    },
    openGraph: {
      title: `${localizedTitle || property.title} | Cervantes Real Estate`,
      description,
      url: canonical,
      images: [{ url: ogImage }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${localizedTitle || property.title} | Cervantes Real Estate`,
      description,
      images: [ogImage],
    },
  };
}

export default async function PropertyDetailPageEn({ params }: { params: { id: string } }) {
  const property = await fetchProperty(params.id);
  if (!property) {
    notFound();
  }

  const localizedTitle = localizePropertyTitle(property.title || "", "en");
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
          <p className="text-muted mb-4">No images available.</p>
        )}

        <h3>Price</h3>
        <p>{priceLabel}</p>

        <h3>Description</h3>
        <p>{property.description || "No description available"}</p>

        <h3>Features</h3>
        <ul>
          <li>Bedrooms: {property.bedrooms ?? "N/A"}</li>
          <li>Bathrooms: {property.bathrooms ?? "N/A"}</li>
          <li>Parking: {property.parking_spaces ?? "N/A"}</li>
          <li>
            Area: {property.building_size?.size ?? "N/A"} {property.building_size?.unit}
          </li>
        </ul>
      </main>
      <FooterThreeEn />
      <PropertySchema property={property} />
    </div>
  );
}
