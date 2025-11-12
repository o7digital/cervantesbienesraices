"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  public_id: string;
  title: string;
  location: any;
  title_image_full?: string;
  title_image_thumb?: string;
  operations?: Array<{
    formatted_amount?: string;
    type?: string;
  }>;
  bedrooms?: number;
  bathrooms?: number;
  parking_spaces?: number;
  construction_size?: number;
}

const formatLocation = (location: any) => {
  if (!location) return "Ubicación no disponible";
  
  if (typeof location === "string") {
    return location;
  }

  const parts = [
    location?.name,
    location?.city,
    location?.state,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Ubicación no disponible";
};

export default function PropertyCard({
  public_id,
  title,
  location,
  title_image_full,
  title_image_thumb,
  operations,
  bedrooms,
  bathrooms,
  parking_spaces,
  construction_size,
}: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = title_image_full || title_image_thumb || "/images/default-property.jpg";
  const priceLabel = operations?.[0]?.formatted_amount || "Consultar precio";
  const operationType = operations?.[0]?.type || "";
  const isForSale = operationType.toLowerCase() === "sale";

  return (
    <div className={styles.propertyCard}>
      <div className={styles.imageContainer}>
        {!imageError ? (
          <img
            src={imageUrl}
            alt={title}
            className={styles.propertyImage}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <i className="fa-solid fa-house fa-3x"></i>
          </div>
        )}
        <div className={styles.tag}>
          {isForSale ? "EN VENTA" : "EN RENTA"}
        </div>
      </div>

      <div className={styles.propertyInfo}>
        <h3 className={styles.propertyTitle}>{title}</h3>
        <p className={styles.propertyLocation}>
          <i className="fa-solid fa-location-dot"></i>
          {formatLocation(location)}
        </p>

        <div className={styles.propertyFeatures}>
          {bedrooms !== undefined && bedrooms !== null && (
            <div className={styles.feature}>
              <i className="fa-solid fa-bed"></i>
              <span>{bedrooms}</span>
            </div>
          )}
          {bathrooms !== undefined && bathrooms !== null && (
            <div className={styles.feature}>
              <i className="fa-solid fa-bath"></i>
              <span>{bathrooms}</span>
            </div>
          )}
          {parking_spaces !== undefined && parking_spaces !== null && (
            <div className={styles.feature}>
              <i className="fa-solid fa-car"></i>
              <span>{parking_spaces}</span>
            </div>
          )}
          {construction_size !== undefined && construction_size !== null && (
            <div className={styles.feature}>
              <i className="fa-solid fa-ruler-combined"></i>
              <span>{construction_size} m²</span>
            </div>
          )}
        </div>

        <div className={styles.propertyFooter}>
          <div className={styles.price}>{priceLabel}</div>
          <Link
            href={`/property/${public_id}`}
            className={styles.viewButton}
          >
            Ver detalles
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
