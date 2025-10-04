"use client"
import Image from "next/image"

interface ImageType {
  id: string
  directus_files_id: string
}

interface Props {
  images: ImageType[] | null
}

const MediaGallery = ({ images }: Props) => {
  if (!images || images.length === 0) {
    return <p>No hay imágenes disponibles</p>
  }

  return (
    <div className="media-gallery d-flex flex-wrap gap-3 mb-40">
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          <Image
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${img.directus_files_id}`}
            alt="Imagen de propiedad"
            width={400}
            height={300}
            className="rounded-3"
          />
        </div>
      ))}
    </div>
  )
}

export default MediaGallery
