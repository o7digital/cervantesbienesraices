"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape_1 from "@/assets/images/shape/shape_52.svg"

const FooterThreeIt = () => {
   return (
      <div className="footer-three">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 mb-40 lg-mb-60">
                     <div className="footer-intro pe-xxl-5 pe-xl-3">
                        <div className="logo mb-15">
                           <Link href="/it">
                              <Image src={footerLogo} alt="Cervantes Immobiliare" />
                           </Link>
                        </div>
                        <p className="mb-45 lg-mb-30">
                           Cervantes Immobiliare è specializzata nella vendita di ranch in Messico.<br />
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
                        <p className="mb-20">Iscriviti per ricevere aggiornamenti importanti.</p>
                        <div className="email-input-group d-flex">
                           <input type="email" placeholder="Inserisci la tua email" />
                           <button type="submit" className="btn-four fw-500 text-uppercase">Invia</button>
                        </div>
                        <div className="fs-14 mt-10">Inviamo solo email rilevanti e di valore.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bottom-footer">
            <div className="container text-center">
               <p className="seo-footer">
                  immobili di lusso Città del Messico · agenzia immobiliare premium Città del Messico · consulenza immobiliare professionale CDMX · consulente immobiliare premium Città del Messico · proprietà premium in vendita CDMX · appartamenti di lusso Città del Messico · immobili esclusivi a Città del Messico · immobili di lusso Polanco · appartamenti premium Polanco · case in vendita Polanco CDMX · immobili premium Condesa CDMX · appartamenti di lusso Condesa · immobili di lusso Roma Norte · proprietà a Valle de Bravo · proprietà a Cuernavaca Morelos · terreni e case per sviluppatori a Valle de Bravo · migliori case qualità prezzo a Valle de Bravo · migliori case qualità prezzo a Cuernavaca · case per sviluppatori a Cuernavaca · case e terreni per sviluppatori a CDMX Messico · valutazione immobiliare premium CDMX · investimento immobiliare premium Città del Messico
               </p>
               <p className="m-0">Copyright ©2025 CERVANTES IMMOBILIARE. Tutti i diritti riservati.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterThreeIt
