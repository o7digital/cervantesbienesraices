"use client"

import { useEffect, useState } from "react"
import CommonBanner from "../listing-details-common/CommonBanner"
import MediaGallery from "./MediaGallery"
import PropertyOverview from "./PropertyOverview"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import Link from "next/link"
import Sidebar from "../listing-details-1/Sidebar"
import LoginModal from "@/modals/LoginModal"
import NiceSelect from "@/ui/NiceSelect"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import AgencyFormOne from "@/components/forms/AgencyFormOne"

// URL de base de ton backend Directus (Railway)
const API_URL = "https://cervantes-directus-backend-production.up.railway.app"

const ListingDetailsFourArea = () => {
  const [property, setProperty] = useState<any>(null)
  const [loginModal, setLoginModal] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  // Charger UNE propriété (ici id=1 par défaut)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/items/propriedades/1?fields=*,Image.directus_files_id.*`)
        const data = await res.json()
        setProperty(data.data)
      } catch (err) {
        console.error("Erreur API Directus:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-5">
        <p className="fs-20">Chargement des données...</p>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="text-center py-5">
        <p className="fs-20">Aucune propriété trouvée.</p>
      </div>
    )
  }

  return (
    <>
      <div className="listing-details-one theme-details-one border-top mt-130 lg-mt-100 pt-70 pb-150 xl-pb-120">
        <div className="container">
          {/* Bannière titre + adresse */}
          <CommonBanner
            title={property.Title || "Propriété sans titre"}
            address={property.Address || ""}
            style_3={true}
          />

          {/* Galerie d’images */}
          {/* ✅ Correction ici : on utilise bien property.Image (champ Directus) */}
          <MediaGallery images={property?.Image || []} />

          {/* Vue d'ensemble */}
          <PropertyOverview property={property} />

          <div className="row mt-60">
            <div className="col-xl-8">
              {/* Équipements / commodités */}
              <div className="property-amenities bottom-line-dark pb-40 mb-60">
                <h4 className="mb-20">Amenidades</h4>
                <CommonAmenities />
              </div>

              {/* Section commentaires */}
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

              {/* Formulaire contact */}
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

export default ListingDetailsFourArea
