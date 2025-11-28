"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape_1 from "@/assets/images/shape/shape_52.svg"

const FooterThree = () => {
   return (
      <div className="footer-three">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 mb-40 lg-mb-60">
                     <div className="footer-intro pe-xxl-5 pe-xl-3">
                        <div className="logo mb-15">
                           <Link href="/">
                              <Image src={footerLogo} alt="Cervantes Bienes Raíces" />
                           </Link>
                        </div>
                        <p className="mb-45 lg-mb-30">
                           Cerrada de Bezares 133, Col. Lomas de Bezares, <br />
                           CP 11910, Miguel Hidalgo, CDMX.
                        </p>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                        </ul>
                        <Image src={footerShape_1} alt="" className="lazy-img ms-auto d-none d-xl-block" />
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                     <div className="footer-nav">
                        <h5 className="footer-title">Boletín</h5>
                        <p className="mb-20">Suscríbete y recibe noticias importantes regularmente</p>
                        <div className="email-input-group d-flex">
                           <input type="email" placeholder="Ingresa tu correo electrónico" />
                           <button type="submit" className="btn-four fw-500 text-uppercase">Enviar</button>
                        </div>
                        <div className="fs-14 mt-10">Solo enviamos correos interesantes y relevantes.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bottom-footer">
            <div className="container text-center">
               <p className="seo-footer">
                  bienes raíces de lujo CDMX · inmobiliaria premium Ciudad de México · departamentos en Polanco · casas en Lomas de Chapultepec · propiedades exclusivas CDMX · inversión inmobiliaria México · asesoría inmobiliaria profesional · compra de propiedades en CDMX · casas premium Ciudad de México · vivienda para expatriados México · propiedades en Roma · inmuebles en Condesa · zonas seguras CDMX · mercado inmobiliario premium · valuación inmobiliaria CDMX · consultores inmobiliarios México · patrimonio inmobiliario · propiedades de alto nivel · compra y venta de inmuebles premium · agencia inmobiliaria de confianza
               </p>
               <p className="m-0">Copyright ©2025 CERVANTES BIENES RAÍCES. Todos los derechos reservados.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterThree
