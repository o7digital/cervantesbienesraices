"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Fancybox from "@/components/common/Fancybox";
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
  property_images?: Array<{ url: string; title?: string }>;
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
  property_images,
}: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);
  const [images, setImages] = useState<Array<{ url: string; title?: string }>>(property_images || []);
  const [loadingImages, setLoadingImages] = useState(!property_images);

  const imageUrl = title_image_full || title_image_thumb || "/images/default-property.jpg";
  const priceLabel = operations?.[0]?.formatted_amount || "Consultar precio";
  const operationType = operations?.[0]?.type || "";
  const isForSale = operationType.toLowerCase() === "sale";

  // Charger les images si elles ne sont pas déjà fournies
  useEffect(() => {
    if (!property_images && public_id) {
      fetch(`/api/property/${public_id}`)
        .then((res) => res.json())
        .then((data) => {
          const propertyData = data?.property ?? data;
          if (propertyData?.property_images) {
            setImages(propertyData.property_images);
          }
          setLoadingImages(false);
        })
        .catch((err) => {
          console.error("Error loading images:", err);
          setLoadingImages(false);
        });
    }
  }, [public_id, property_images]);

  const handleViewPhotos = (e: React.MouseEvent) => {
    e.preventDefault();
    // Déclencher le clic sur le premier lien Fancybox
    const firstLink = document.querySelector(`[data-fancybox="gallery-${public_id}"]`) as HTMLElement;
    if (firstLink) {
      firstLink.click();
    }
  };

  return (
    <>
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
            <button
              onClick={handleViewPhotos}
              className={styles.viewButton}
              disabled={loadingImages}
            >
              {loadingImages ? "Cargando..." : "Ver fotos"}
              <i className="fa-solid fa-images"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Galerie cachée pour Fancybox */}
      <div style={{ display: "none" }}>
        <Fancybox
          options={{
            Carousel: {
              infinite: true,
            },
            Toolbar: {
              display: {
                left: ["infobar"],
                middle: [],
                right: ["slideshow", "thumbs", "close"],
              },
            },
          }}
        >
          {images.map((img, index) => (
            <a
              key={index}
              data-fancybox={`gallery-${public_id}`}
              href={img.url}
              data-caption={`${title} - Imagen ${index + 1}`}
            >
              <img src={img.url} alt={`${title} ${index + 1}`} />
            </a>
          ))}
        </Fancybox>
      </div>
    </>
  );
}
