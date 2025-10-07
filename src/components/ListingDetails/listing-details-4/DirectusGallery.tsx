"use client"

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

  if (!assetIds.length) {
    return (
      <div className="text-center py-5">
        <p className="fs-20 opacity-75">Sin imágenes disponibles.</p>
      </div>
    )
  }

  return (
    <section className="media-gallery mb-60">
      <div className="row g-3">
        {assetIds.map((id) => (
          <div key={id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item position-relative overflow-hidden rounded-4">
              <img
                src={`${apiUrl}/assets/${id}`}
                alt="Imagen de propiedad"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
