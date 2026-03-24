"use client"
import { useRef } from 'react';
import { useSearchParams } from "next/navigation";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {
   const searchParams = useSearchParams();
   const propertyTitle = searchParams?.get("property")?.trim() || "";
   const propertyId = searchParams?.get("propertyId")?.trim() || "";
   const sourcePath = searchParams?.get("sourcePath")?.trim() || "";
   const contextualMessage = propertyTitle
      ? `Hola, me interesa recibir más información sobre esta propiedad:\n- Propiedad: ${propertyTitle}${propertyId ? `\n- Referencia: ${propertyId}` : ""}${sourcePath ? `\n- Página: ${sourcePath}` : ""}\n\nGracias.`
      : "";
   const defaultValues: FormData = {
      user_name: "",
      user_email: "",
      message: contextualMessage,
   };

   const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<FormData>({
      resolver: yupResolver(schema),
      defaultValues,
   });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = async (data: FormData) => {
      try {
         const response = await fetch("/api/send-contact-email", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name: data.user_name,
               email: data.user_email,
               message: data.message,
               propertyTitle,
               propertyId,
               sourcePath,
            }),
         });

         const result = await response.json();

         if (!response.ok) {
            throw new Error(result?.error || result?.message || "Failed to send message");
         }

         toast("Message sent successfully", { position: "top-center" });
         reset(defaultValues);
      } catch (error) {
         console.error("Error sending contact form:", error);
         toast("Unable to send the message right now. Please try again.", { position: "top-center" });
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
         <h3>Send Message</h3>
         {propertyTitle && (
            <div className="alert alert-light border mb-25">
               <strong>Property of interest:</strong> {propertyTitle}
               {propertyId && <> ({propertyId})</>}
            </div>
         )}
         <div className="messages"></div>
         <div className="row controls">
            <div className="col-12">
               <div className="input-group-meta form-group mb-30">
                  <label htmlFor="">Name*</label>
                  <input type="text" {...register("user_name")} name="user_name" placeholder="Your Name*" />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta form-group mb-40">
                  <label htmlFor="">Email*</label>
                  <input type="email" {...register("user_email")} placeholder="Email Address*" name="user_email" />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta form-group mb-35">
                  <textarea {...register("message")} placeholder="Your message*"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <button type='submit' className="btn-nine text-uppercase rounded-3 fw-normal w-100" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
               </button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
