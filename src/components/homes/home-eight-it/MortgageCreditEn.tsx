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
         toast.error("Per favore compila tutti i campi");
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
            toast.success("Richiesta inviata con successo! Ti contatteremo a breve.");
            setFormData({ name: "", email: "", phone: "" });
         } else {
            toast.error(data.error || "Invio fallito. Riprova.");
         }
      } catch (error) {
         console.error("Error submitting form:", error);
         toast.error("Si è verificato un errore. Riprova più tardi.");
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
                        <div className="upper-title">MUTUO</div>
                        <h3>Hai bisogno di un <span>mutuo<Image src={titleShape} alt="" className="lazy-img" /></span>?</h3>
                        <p className="fs-24 color-dark">Ti guidiamo in tutto il processo. Lascia i tuoi dati e ti contatteremo.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="me-xl-4">
                        <input 
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Il tuo nome completo..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="La tua email..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <input 
                           type="tel" 
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           placeholder="Il tuo telefono..." 
                           className="mb-3"
                           disabled={isSubmitting}
                           required
                        />
                        <button type="submit" disabled={isSubmitting}>
                           {isSubmitting ? "Invio..." : "Richiedi consulenza"}
                        </button>
                    </form>
                     <div className="fs-16 mt-20 opacity-75">*Risposta entro 24 ore</div>
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
                        <h3 className="mb-3">Finanziamento</h3>
                        <h4 className="color-dark mb-2">Per la tua prossima casa</h4>
                        <p className="fs-18 opacity-75">Tassi competitivi e consulenza personalizzata</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MortgageCreditEn
