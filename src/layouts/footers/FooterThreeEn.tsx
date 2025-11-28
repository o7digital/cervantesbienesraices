"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape_1 from "@/assets/images/shape/shape_52.svg"

const FooterThreeEn = () => {
   return (
      <div className="footer-three">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 mb-40 lg-mb-60">
                     <div className="footer-intro pe-xxl-5 pe-xl-3">
                        <div className="logo mb-15">
                           <Link href="/en">
                              <Image src={footerLogo} alt="Cervantes Real Estate" />
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
                        <p className="mb-20">Subscribe to receive important updates.</p>
                        <div className="email-input-group d-flex">
                           <input type="email" placeholder="Enter your email" />
                           <button type="submit" className="btn-four fw-500 text-uppercase">Send</button>
                        </div>
                        <div className="fs-14 mt-10">We only send relevant and valuable emails.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bottom-footer">
            <div className="container text-center">
               <p className="seo-footer">
                  luxury real estate Mexico City · premium real estate agency CDMX · homes in Polanco · houses in Lomas de Chapultepec · exclusive listings Mexico · investment property Mexico · expat housing Mexico City · Mexico real estate advisor · premium apartments CDMX · safe neighborhoods Mexico City · relocation to Mexico · property valuation Mexico · real estate consulting CDMX · high-end real estate Mexico · Mexico City property experts · long-term investment Mexico · premium condos Mexico · real estate for foreign buyers · luxury homes Mexico · trusted real estate agency CDMX
               </p>
               <p className="m-0">Copyright ©2025 CERVANTES REAL ESTATE. All rights reserved.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterThreeEn
