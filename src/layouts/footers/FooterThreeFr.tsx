"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape_1 from "@/assets/images/shape/shape_52.svg"

const FooterThreeFr = () => {
   return (
      <div className="footer-three">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 mb-40 lg-mb-60">
                     <div className="footer-intro pe-xxl-5 pe-xl-3">
                        <div className="logo mb-15">
                           <Link href="/fr">
                              <Image src={footerLogo} alt="Cervantes Immobilier" />
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
                        <h5 className="footer-title">Newsletter</h5>
                        <p className="mb-20">Abonnez-vous pour recevoir les mises à jour importantes.</p>
                        <div className="email-input-group d-flex">
                           <input type="email" placeholder="Entrez votre email" />
                           <button type="submit" className="btn-four fw-500 text-uppercase">Envoyer</button>
                        </div>
                        <div className="fs-14 mt-10">Nous envoyons uniquement des emails pertinents et de qualité.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bottom-footer">
            <div className="container text-center">
               <p className="seo-footer">
                  immobilier de luxe Mexico · agence immobilière premium CDMX · maisons Polanco · propriétés Lomas de Chapultepec · annonces exclusives Mexique · investissement immobilier Mexique · logement expatriés Mexico · conseil immobilier Mexique · appartements premium CDMX · quartiers sécurisés Mexico · relocation Mexique · évaluation immobilière Mexico · consulting immobilier CDMX · immobilier haut de gamme Mexique · experts immobiliers Mexico · investissement long terme Mexique · condos premium Mexico · immobilier acheteurs étrangers · maisons de luxe Mexique · agence immobilière de confiance CDMX
               </p>
               <p className="m-0">Copyright ©2025 CERVANTES IMMOBILIER. Tous droits réservés.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterThreeFr
