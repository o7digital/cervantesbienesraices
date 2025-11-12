"use client";

import Image from "next/image";
import Fancybox from "@/components/common/Fancybox";
import { useState } from "react";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Array<{
    url: string;
    title?: string;
  }>;
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="fs-20 opacity-75">Sin imágenes disponibles.</p>
      </div>
    );
  }

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  return (
    <section className="media-gallery mb-60">
      <div className="row g-3">
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
          {images.map((img, index) => {
            const hasError = imageErrors.has(index);

            if (hasError) return null;

            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <a
                  data-fancybox="property-gallery"
                  href={img.url}
                  className={styles.galleryItem}
                >
                  <Image
                    src={img.url}
                    alt={title ? `${title} - Imagen ${index + 1}` : `Imagen ${index + 1}`}
                    className={styles.galleryImage}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    onError={() => handleImageError(index)}
                  />
                  <div className={styles.overlayHover}>
                    <i className={`fa-solid fa-magnifying-glass-plus ${styles.zoomIcon}`}></i>
                  </div>
                </a>
              </div>
            );
          })}
        </Fancybox>
      </div>
    </section>
  );
}
