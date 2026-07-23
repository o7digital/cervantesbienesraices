import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeRu from "@/layouts/footers/FooterThreeRu";
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
  if (!property?.location) return "Местоположение не указано";
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

  return parts.length ? parts.join(", ") : "Местоположение не указано";
}

function buildPriceLabel(property: Property): string {
  const op = property.operations?.[0];
  return op?.formatted_amount || (op?.amount ? `${op.amount} ${op.currency || "MXN"}` : "Цена по запросу");
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
      title: "Объект не найден | Cervantes Недвижимость",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${BASE_URL}/ru/property/${property.public_id || params.id}`;
  const localizedTitle = localizePropertyTitle(property.title || "", "ru");
  const description = truncate(property.description) || "Недвижимость для продажи или аренды в Мексике.";
  const ogImage = property.property_images?.[0]?.url || "/images/assets/ogg.png";

  return {
    title: `${localizedTitle || property.title} | Cervantes Недвижимость`,
    description,
    alternates: {
      canonical,
      languages: {
        "ru-RU": canonical,
        "es-MX": `${BASE_URL}/property/${property.public_id || params.id}`,
        "fr-FR": `${BASE_URL}/fr/property/${property.public_id || params.id}`,
        "it-IT": `${BASE_URL}/it/property/${property.public_id || params.id}`,
        "de-DE": `${BASE_URL}/de/property/${property.public_id || params.id}`,
      },
    },
    openGraph: {
      title: `${localizedTitle || property.title} | Cervantes Недвижимость`,
      description,
      url: canonical,
      images: [{ url: ogImage }],
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title: `${localizedTitle || property.title} | Cervantes Недвижимость`,
      description,
      images: [ogImage],
    },
  };
}

export default async function PropertyDetailPageRu({ params }: { params: { id: string } }) {
  const property = await fetchProperty(params.id);
  if (!property) {
    notFound();
  }

  const localizedTitle = localizePropertyTitle(property.title || "", "ru");
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
          <p className="text-muted mb-4">Фотографии отсутствуют.</p>
        )}

        <h3>Цена</h3>
        <p>{priceLabel}</p>

        <h3>Описание</h3>
        <p>{property.description || "Описание отсутствует"}</p>

        <h3>Характеристики</h3>
        <ul>
          <li>Спальни: {property.bedrooms ?? "Нет данных"}</li>
          <li>Ванные комнаты: {property.bathrooms ?? "Нет данных"}</li>
          <li>Парковочные места: {property.parking_spaces ?? "Нет данных"}</li>
          <li>
            Площадь: {property.building_size?.size ?? "Нет данных"} {property.building_size?.unit}
          </li>
        </ul>
      </main>
      <FooterThreeRu />
      <PropertySchema property={property} />
    </div>
  );
}
