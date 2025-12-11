"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "react-toastify"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import featureThumb from "@/assets/images/assets/screen_12.png";

const BLockFeatureFour = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      reason: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!formData.name || !formData.email || !formData.phone || !formData.reason) {
         toast.error("Por favor, completa todos los campos");
         return;
      }

      setIsSubmitting(true);
      try {
         const response = await fetch("/api/send-appraisal-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         const data = await response.json();
         if (response.ok) {
            toast.success("Solicitud de avalúo enviada. Te contactaremos pronto.");
            setFormData({ name: "", email: "", phone: "", reason: "" });
         } else {
            toast.error(data.error || "Error al enviar la solicitud. Intenta de nuevo.");
         }
      } catch (error) {
         console.error("Error submitting appraisal form:", error);
         toast.error("Ocurrió un error. Por favor, intenta más tarde.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 d-flex order-lg-last">
                  <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInRight">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">AVALÚOS</div>
                        <h3>Avalúos <span>realizados<Image src={titleShape} alt="" className="lazy-img" /></span> de su propiedad.</h3>
                        <p className="fs-24 color-dark">Evalúa tu propiedad y accede al mercado inmobiliario con seguridad y visión.</p>
                     </div>
                     <form onSubmit={handleSubmit} className="me-xl-4">
                        <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Tu nombre completo..."
                           className="mb-3"
                           required
                           disabled={isSubmitting}
                        />
                        <input
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="Tu correo electrónico..."
                           className="mb-3"
                           required
                           disabled={isSubmitting}
                        />
                        <input
                           type="tel"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           placeholder="Tu teléfono..."
                           className="mb-3"
                           required
                           disabled={isSubmitting}
                        />
                        <select
                           name="reason"
                           value={formData.reason}
                           onChange={handleChange}
                           className="mb-3"
                           required
                           disabled={isSubmitting}
                        >
                           <option value="">Motivo del avalúo</option>
                           <option value="Compra/Venta">Compra/Venta</option>
                           <option value="Crédito hipotecario">Crédito hipotecario</option>
                           <option value="Regularización">Regularización</option>
                           <option value="Seguro">Seguro</option>
                           <option value="Otro">Otro</option>
                        </select>
                        <button type="submit" disabled={isSubmitting}>
                           {isSubmitting ? "Enviando..." : "Solicitar avalúo"}
                        </button>
                     </form>
                     <div className="fs-16 mt-10 opacity-75">*Para información precisa por favor <Link href="/contact" className="fst-italic color-dark text-decoration-underline">contáctanos.</Link></div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
                     <div className="img-bg" style={{ backgroundImage: `url(/assets/images/media/img_11.jpg)` }}></div>
                     <div className="card-one">
                        <div className="text text-center z-1">
                           <h6>Su Avalúo desde:</h6>
                           <h3>$2900.00</h3>
                        </div>
                        <Image src={featureThumb} alt="Avalúo de propiedad" className="lazy-img w-100" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureFour
