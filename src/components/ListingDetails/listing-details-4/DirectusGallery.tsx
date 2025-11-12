"use client"

import Fancybox from "@/components/common/Fancybox"
import { useState } from "react"
import styles from "./DirectusGallery.module.css"

type FileId = { id: string; filename_download?: string }
type M2MItem = { id: string; title?: string; directus_files_id: FileId }

interface Props {
  apiUrl: string
  images?: string | FileId | { id: string } | M2MItem[]
}

function normalizeAssetIds(images?: Props["images"]): string[] {
  if (!images) return []

  // Caso: string con el id del asset
  if (typeof images === "string") return [images]

  // Caso: objeto con { id }
  if (!Array.isArray(images) && (images as any).id) return [(images as any).id as string]

  // Caso: array M2M [{ directus_files_id: { id }}, ...]
  if (Array.isArray(images)) {
    return images
      .map((it) => it?.directus_files_id?.id)
      .filter((x): x is string => Boolean(x))
  }

  return []
}

export default function DirectusGallery({ apiUrl, images }: Props) {
  const assetIds = normalizeAssetIds(images)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  if (!assetIds.length) {
    return (
      <div className="text-center py-5">
        <p className="fs-20 opacity-75">Sin imágenes disponibles.</p>
      </div>
    )
  }

  const handleImageError = (id: string) => {
    setImageErrors(prev => new Set(prev).add(id))
  }

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
          {assetIds.map((id, index) => {
            const imageUrl = `${apiUrl}/assets/${id}`
            const hasError = imageErrors.has(id)
            
            if (hasError) return null

            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                <a
                  data-fancybox="property-gallery"
                  href={imageUrl}
                  className={styles.galleryItem}
                >
                  <img
                    src={imageUrl}
                    alt={`Imagen ${index + 1} de la propiedad`}
                    className={styles.galleryImage}
                    loading="lazy"
                    onError={() => handleImageError(id)}
                  />
                  <div className={styles.overlayHover}>
                    <i className={`fa-solid fa-magnifying-glass-plus ${styles.zoomIcon}`}></i>
                  </div>
                </a>
              </div>
            )
          })}
        </Fancybox>
      </div>
    </section>
  )
}
