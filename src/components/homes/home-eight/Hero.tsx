"use client"
import Image from "next/image"

const Hero = () => {
   return (
      <div className="hero-banner-eight z-1 pt-250 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
         <div className="container position-relative">
            <div className="row">
               <div className="col-xl-9 col-lg-10 col-md-10 m-auto">
                  {/* ✅ Título cambiado */}
                  <h1 className="hero-heading text-white text-center wow fadeInUp">
                     CERVANTES BIENES RAÍCES
                  </h1>
                  {/* ✅ Subtítulo cambiado */}
                  <p 
                     className="fs-24 text-white text-center pt-35 wow fadeInUp" 
                     data-wow-delay="0.1s"
                  >
                     Asesoría inmobiliaria con más de 20 años de experiencia.
                  </p>
               </div>
            </div>

            {/* ✅ Botón EasyBroker en lugar del buscador */}
            <div className="d-flex justify-content-center mt-45 lg-mt-20">
               <a 
                  href="https://cervantesbienesraices.easybroker.com/properties" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-lg btn-light fw-bold px-5 py-3"
               >
                  Ver todas las propiedades
               </a>
            </div>
         </div>
      </div>
   )
}

export default Hero
