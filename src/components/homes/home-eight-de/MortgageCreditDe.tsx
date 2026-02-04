"use client"
import { useState } from "react"
import Image from "next/image"
import { toast } from "react-toastify"

import titleShape from "@/assets/images/shape/title_shape_06.svg";

const MortgageCreditDe = () => {
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

      if (!formData.name || !formData.email || !formData.phone) {
         toast.error("Bitte füllen Sie alle Felder aus");
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
            toast.success("Anfrage erfolgreich gesendet! Wir melden uns in Kürze.");
            setFormData({ name: "", email: "", phone: "" });
         } else {
            toast.error(data.error || "Anfrage fehlgeschlagen. Bitte erneut versuchen.");
         }
      } catch (error) {
         console.error("Fehler beim Senden:", error);
         toast.error("Es ist ein Fehler aufgetreten. Bitte später erneut versuchen.");
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
                        <div className="upper-title">HYPOTHEK</div>
                        <h3>Brauchen Sie einen <span>Kredit<Image src={titleShape} alt="" className="lazy-img" /></span>?</h3>
                        <p className="fs-24 color-dark">Wir begleiten Sie durch den gesamten Prozess. Hinterlassen Sie Ihre Daten und wir kontaktieren Sie.</p>
                     </div>
                     <form onSubmit={handleSubmit} className="me-xl-4">
                        <input 
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Ihr vollständiger Name..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="Ihre E-Mail..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <input 
                           type="tel" 
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           placeholder="Ihre Telefonnummer..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <button type="submit" disabled={isSubmitting}>
                           {isSubmitting ? "Senden..." : "Beratung anfragen"}
                        </button>
                     </form>
                     <div className="fs-16 mt-20 opacity-75">*Antwort innerhalb von 24 Stunden</div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="w-100 h-100 ms-lg-5 wow fadeInRight d-flex flex-column align-items-center justify-content-start pt-100 xl-pt-80">
                     <div style={{ maxWidth: '800px', width: '100%' }}>
                        <Image
                           src="/assets/images/media/morgage_house.png"
                           alt="Hypothekenkredit"
                           width={800}
                           height={800}
                           style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                     </div>
                     
                     <div className="text-center mt-4">
                        <h3 className="mb-3">Finanzierung</h3>
                        <h4 className="color-dark mb-2">für Ihr nächstes Zuhause</h4>
                        <p className="fs-18 opacity-75">Attraktive Konditionen und persönliche Beratung</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MortgageCreditDe
