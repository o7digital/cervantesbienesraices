"use client"

import Image from "next/image"

interface MediaGalleryProps {
  images?: {
    id: string
    title?: string
    directus_files_id: {
      id: string
      filename_download: string
    }
  }[]
}

const MediaGallery = ({ images }: MediaGalleryProps) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="fs-20 opacity-75">Sin imágenes disponibles.</p>
      </div>
    )
  }

  const BASE_URL = "https://cervantes-directus-backend-production.up.railway.app/assets"

  return (
    <section className="media-gallery mb-60">
      <div className="row g-3">
        {images.map((img) => (
          <div key={img.id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item position-relative overflow-hidden rounded-4">
              <Image
                src={`${BASE_URL}/${img.directus_files_id.id}`}
                alt={img.title || "Imagen de propiedad"}
                width={600}
                height={400}
                className="w-100 h-auto rounded-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MediaGallery
