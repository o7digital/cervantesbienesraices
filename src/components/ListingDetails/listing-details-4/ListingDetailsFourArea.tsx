"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import CommonBanner from "../listing-details-common/CommonBanner"
import DirectusGallery from "../listing-details-4/DirectusGallery"
import PropertyOverview from "./PropertyOverview"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import Link from "next/link"
import Sidebar from "../listing-details-1/Sidebar"
import LoginModal from "@/modals/LoginModal"
import NiceSelect from "@/ui/NiceSelect"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import AgencyFormOne from "@/components/forms/AgencyFormOne"

const API_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL ||
  "https://cervantes-directus-backend-production.up.railway.app"

type DirectusFileId = { id: string; filename_download?: string }
type DirectusImageM2M = { id: string; title?: string; directus_files_id: DirectusFileId }

// Propiedad flexible: acepta tus campos en inglés/español
interface Property {
  id: number
  Title?: string
  titulo?: string
  Address?: string
  direccion?: string
  City?: string
  State?: string
  Country?: string
  Price?: number | string
  precio?: number | string
  operacion?: string
  Operation_type?: string
  tipo_propiedad?: string
  Property_type?: string
  Descripcion?: string
  descripcion?: string
  Recamaras?: number
  recamaras?: number
  BanOS?: number
  banos?: number
  Image?:
    | string
    | DirectusFileId
    | DirectusImageM2M[]
    | { id: string }
}

export default function ListingDetailsFourArea() {
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [loginModal, setLoginModal] = useState(false)
  const searchParams = useSearchParams()

  const selectedId = useMemo(() => {
    const raw = searchParams?.get("id")
    return raw ? Number(raw) : undefined
  }, [searchParams])

  useEffect(() => {
    async function fetchData() {
      try {
        // Si viene ?id= en la URL, buscamos esa propiedad. Si no, traemos la primera.
        const endpoint = selectedId
          ? `${API_URL}/items/propriedades/${selectedId}?fields=*,Image.*,Image.directus_files_id.*`
          : `${API_URL}/items/propriedades?limit=1&fields=*,Image.*,Image.directus_files_id.*`

        const res = await fetch(endpoint, { cache: "no-store" })
        const json = await res.json()

        if (selectedId) {
          setProperty(json?.data || null)
        } else {
          setProperty(json?.data?.[0] || null)
        }
      } catch (err) {
        console.error("❌ Error API Directus:", err)
        setProperty(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [selectedId])

  if (loading) {
    return (
      <div className="text-center py-5">
        <p className="fs-20">Cargando datos desde Directus…</p>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="text-center py-5">
        <p className="fs-20">No se encontró la propiedad.</p>
      </div>
    )
  }

  // Normalizamos campos bilingües
  const title = property.Title || property.titulo || "Propiedad sin título"
  const address = property.Address || property.direccion || ""
  const price = (property.Price ?? property.precio) as number | string | undefined

  return (
    <>
      <div className="listing-details-one theme-details-one border-top mt-130 lg-mt-100 pt-70 pb-150 xl-pb-120">
        <div className="container">
          <CommonBanner title={title} address={address} style_3={true} />

          {/* Galería: soporta 1 archivo, muchos archivos o id suelto */}
          <DirectusGallery apiUrl={API_URL} images={property.Image} />

          {/* Vista general (tu componente) */}
          <PropertyOverview property={property as any} />

          <div className="row mt-60">
            <div className="col-xl-8">
              <div className="property-amenities bottom-line-dark pb-40 mb-60">
                <h4 className="mb-20">Amenidades</h4>
                <CommonAmenities />
              </div>

              <div className="review-panel-one bottom-line-dark pb-40 mb-60">
                <div className="position-relative z-1">
                  <div className="d-sm-flex justify-content-between align-items-center mb-10">
                    <h4 className="m0 xs-pb-30">Reviews</h4>
                    <NiceSelect
                      className="nice-select rounded-0"
                      options={[
                        { value: "01", text: "Newest" },
                        { value: "02", text: "Best Seller" },
                        { value: "03", text: "Best Match" },
                      ]}
                      defaultCurrent={0}
                      onChange={() => {}}
                      name=""
                      placeholder=""
                    />
                  </div>
                  <Review />
                </div>
              </div>

              <div className="review-form">
                <h4 className="mb-20">Déjanos tu comentario</h4>
                <p className="fs-20 lh-lg pb-15">
                  <Link
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="color-dark fw-500 text-decoration-underline"
                  >
                    Inicia sesión
                  </Link>{" "}
                  para publicar tu comentario o regístrate si aún no tienes cuenta.
                </p>
                <div className="bg-dot p-30">
                  <AgencyFormOne />
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>

      {/* Modal login */}
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
    </>
  )
}
