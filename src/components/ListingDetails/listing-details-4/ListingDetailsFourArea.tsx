"use client"
import { useEffect, useState } from "react"
import CommonBanner from "../listing-details-common/CommonBanner"
import MediaGallery from "./MediaGallery"
import PropertyOverview from "./PropertyOverview"
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan"
import CommonNearbyList from "../listing-details-common/CommonNearbyList"
import SimilarProperty from "./SimilarProperty"
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
import CommonLocation from "../listing-details-common/CommonLocation"
import NiceSelect from "@/ui/NiceSelect"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import AgencyFormOne from "@/components/forms/AgencyFormOne"
import LoginModal from "@/modals/LoginModal"
import Sidebar from "../listing-details-1/Sidebar"
import Link from "next/link"

const ListingDetailsFourArea = () => {
  const [property, setProperty] = useState<any>(null)
  const [loginModal, setLoginModal] = useState<boolean>(false)

  useEffect(() => {
    // 🔗 Remplace l’URL par ton instance Railway Directus
    fetch("https://cervantes-directus-backend-production.up.railway.app/items/propriedades/1")
      .then(res => res.json())
      .then(data => setProperty(data.data))
      .catch(err => console.error("Erreur de fetch:", err))
  }, [])

  if (!property) return <div>Chargement...</div>

  const selectHandler = (e: any) => {}

  return (
    <>
      <div className="listing-details-one theme-details-one border-top mt-130 lg-mt-100 pt-70 pb-150 xl-pb-120">
        <div className="container">
          {/* Données dynamiques de Directus */}
          <CommonBanner
            title={property.titulo}
            address={property.ubicacion}
            price={property.precio}
          />

          {/* Images depuis Directus */}
          <MediaGallery images={property.imagenes || []} />

          {/* Vue d'ensemble */}
          <PropertyOverview property={property} />

          <div className="row">
            <div className="col-xl-8">
              <div className="property-overview bottom-line-dark pb-40 mb-60">
                <h4 className="mb-20">Descripción</h4>
                <p className="fs-20 lh-lg">{property.descripcion}</p>
              </div>

              <div className="property-feature-accordion bottom-line-dark pb-40 mb-60">
                <h4 className="mb-20">Características</h4>
                <CommonPropertyFeatureList features={property.caracteristicas} />
              </div>

              <div className="property-amenities bottom-line-dark pb-40 mb-60">
                <CommonAmenities amenities={property.amenidades} />
              </div>

              <div className="property-video-tour bottom-line-dark pb-40 mb-60">
                <CommonPropertyVideoTour videoUrl={property.video_url} />
              </div>

              <CommonPropertyFloorPlan plan={property.planos} />
              <CommonNearbyList nearby={property.cercanias} />
              <SimilarProperty />
              <CommonProPertyScore score={property.calificacion} />
              <CommonLocation location={property.ubicacion_mapa} />

              <div className="review-panel-one bottom-line-dark pb-40 mb-60">
                <div className="position-relative z-1">
                  <div className="d-sm-flex justify-content-between align-items-center mb-10">
                    <h4 className="m0 xs-pb-30">Reseñas</h4>
                    <NiceSelect
                      className="nice-select rounded-0"
                      options={[
                        { value: "01", text: "Más recientes" },
                        { value: "02", text: "Mejor valoradas" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name=""
                      placeholder=""
                    />
                  </div>
                  <Review />
                </div>
              </div>

              <div className="review-form">
                <h4 className="mb-20">Deja un comentario</h4>
                <p className="fs-20 lh-lg pb-15">
                  <Link
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="color-dark fw-500 text-decoration-underline"
                  >
                    Inicia sesión
                  </Link>{" "}
                  para dejar tu comentario o regístrate si no tienes cuenta.
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

      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
    </>
  )
}

export default ListingDetailsFourArea
