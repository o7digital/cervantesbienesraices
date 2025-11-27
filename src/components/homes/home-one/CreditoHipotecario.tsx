"use client"
import Image from "next/image"

import titleShape from "@/assets/images/shape/title_shape_06.svg";

const CreditoHipotecario = () => {
   return (
      <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 d-flex">
                  <div className="pe-xxl-5 me-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInLeft">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">CRÉDITO HIPOTECARIO</div>
                        <h3>¿Necesitas hacer un <span>Crédito<Image src={titleShape} alt="" className="lazy-img" /></span> Hipotecario?</h3>
                        <p className="fs-24 color-dark">Te asesoramos en todo el proceso. Déjanos tus datos y te contactamos.</p>
                     </div>
                     <form onSubmit={(e) => e.preventDefault()} className="me-xl-4">
                        <input type="text" placeholder="Tu nombre completo..." className="mb-3" />
                        <input type="email" placeholder="Tu correo electrónico..." className="mb-3" />
                        <input type="tel" placeholder="Tu teléfono..." className="mb-3" />
                        <button type="submit">Solicitar Asesoría</button>
                     </form>
                     <div className="fs-16 mt-20 opacity-75">*Respuesta en menos de 24 horas</div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="position-relative z-1 w-100 h-100 ms-lg-5 wow fadeInRight d-flex flex-column align-items-center justify-content-center">
                     {/* Ilustración de casa */}
                     <div className="mb-4" style={{ maxWidth: '400px' }}>
                        <Image
                           src="/assets/images/media/morgage_house.png"
                           alt="Crédito Hipotecario"
                           width={400}
                           height={400}
                           style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                        />
                     </div>
                     
                     {/* Texto debajo de la imagen */}
                     <div className="text-center mt-4">
                        <h3 className="mb-3">Financiamiento</h3>
                        <h4 className="color-dark mb-2">Para tu próximo hogar</h4>
                        <p className="fs-18 opacity-75">Tasas competitivas y asesoría personalizada</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CreditoHipotecario
