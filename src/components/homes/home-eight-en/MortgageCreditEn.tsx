"use client"
import Image from "next/image"

import titleShape from "@/assets/images/shape/title_shape_06.svg";

const MortgageCreditEn = () => {
   return (
      <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 d-flex">
                  <div className="pe-xxl-5 me-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInLeft">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">MORTGAGE LOAN</div>
                        <h3>Need a <span>Mortgage<Image src={titleShape} alt="" className="lazy-img" /></span> Loan?</h3>
                        <p className="fs-24 color-dark">We&apos;ll guide you through the entire process. Leave your details and we&apos;ll contact you.</p>
                     </div>
                     <form onSubmit={(e) => e.preventDefault()} className="me-xl-4">
                        <input type="text" placeholder="Your full name..." className="mb-3" />
                        <input type="email" placeholder="Your email address..." className="mb-3" />
                        <input type="tel" placeholder="Your phone number..." className="mb-3" />
                        <button type="submit">Request Consultation</button>
                     </form>
                     <div className="fs-16 mt-20 opacity-75">*Response within 24 hours</div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="position-relative z-1 w-100 h-100 ms-lg-5 wow fadeInRight d-flex flex-column align-items-center justify-content-center">
                     {/* House illustration */}
                     <div className="mb-4" style={{ maxWidth: '400px' }}>
                        <Image
                           src="/assets/images/media/morgage_house.png"
                           alt="Mortgage Credit"
                           width={400}
                           height={400}
                           style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                        />
                     </div>
                     
                     {/* Text below image */}
                     <div className="text-center mt-4">
                        <h3 className="mb-3">Financing</h3>
                        <h4 className="color-dark mb-2">For your next home</h4>
                        <p className="fs-18 opacity-75">Competitive rates and personalized advice</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MortgageCreditEn
