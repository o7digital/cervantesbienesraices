"use client"
import { useState } from "react"
import Image from "next/image"
import { toast } from "react-toastify"

import titleShape from "@/assets/images/shape/title_shape_06.svg";

const MortgageCreditEn = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validation
      if (!formData.name || !formData.email || !formData.phone) {
         toast.error("Please fill in all fields");
         return;
      }

      setIsSubmitting(true);

      try {
         const response = await fetch("/api/send-mortgage-email", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await response.json();

         if (response.ok) {
            toast.success("Request sent successfully! We'll contact you soon.");
            setFormData({ name: "", email: "", phone: "" });
         } else {
            toast.error(data.error || "Failed to send request. Please try again.");
         }
      } catch (error) {
         console.error("Error submitting form:", error);
         toast.error("An error occurred. Please try again later.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="block-feature-four mt-80 xl-mt-60 md-mt-40">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 d-flex">
                  <div className="pe-xxl-5 me-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInLeft">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">MORTGAGE LOAN</div>
                        <h3>Need a <span>Mortgage<Image src={titleShape} alt="" className="lazy-img" /></span> Loan?</h3>
                        <p className="fs-24 color-dark">We&apos;ll guide you through the entire process. Leave your details and we&apos;ll contact you.</p>
                     </div>
                     <form onSubmit={handleSubmit} className="me-xl-4">
                        <input 
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Your full name..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="Your email address..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <input 
                           type="tel" 
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           placeholder="Your phone number..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <button type="submit" disabled={isSubmitting}>
                           {isSubmitting ? "Sending..." : "Request Consultation"}
                        </button>
                     </form>
                     <div className="fs-16 mt-20 opacity-75">*Response within 24 hours</div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="w-100 h-100 ms-lg-5 wow fadeInRight d-flex flex-column align-items-center justify-content-start pt-100 xl-pt-80">
                     <div style={{ maxWidth: '800px', width: '100%' }}>
                        <Image
                           src="/assets/images/media/morgage_house.png"
                           alt="Mortgage Credit"
                           width={800}
                           height={800}
                           style={{ width: '100%', height: 'auto', display: 'block' }}
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
