"use client"
import React, { useState } from "react"
import { toast } from "react-toastify"

interface AppraisalModalProps {
   isOpen: boolean;
   onClose: () => void;
   initialEmail: string;
   language?: 'es' | 'en';
}

const AppraisalModal = ({ isOpen, onClose, initialEmail, language = 'es' }: AppraisalModalProps) => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: initialEmail,
      propertyType: '',
      estimatedValue: ''
   });

   const translations = {
      es: {
         title: 'Solicitud de Avalúo',
         firstName: 'Nombre',
         lastName: 'Apellidos',
         phone: 'Teléfono',
         email: 'Correo electrónico',
         propertyType: 'Tipo de bien',
         estimatedValue: 'Valor estimado',
         submit: 'Enviar solicitud',
         cancel: 'Cancelar',
         propertyTypes: {
            casa: 'Casa',
            departamento: 'Departamento',
            terreno: 'Terreno',
            local: 'Local comercial',
            oficina: 'Oficina',
            otro: 'Otro'
         },
         sending: 'Enviando...',
         successMessage: '¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.',
         errorMessage: 'Error al enviar la solicitud. Por favor intente nuevamente.'
      },
      en: {
         title: 'Appraisal Request',
         firstName: 'First Name',
         lastName: 'Last Name',
         phone: 'Phone',
         email: 'Email address',
         propertyType: 'Property Type',
         estimatedValue: 'Estimated Value',
         submit: 'Submit request',
         cancel: 'Cancel',
         propertyTypes: {
            casa: 'House',
            departamento: 'Apartment',
            terreno: 'Land',
            local: 'Commercial space',
            oficina: 'Office',
            otro: 'Other'
         },
         sending: 'Sending...',
         successMessage: 'Request sent successfully! We will contact you soon.',
         errorMessage: 'Error sending request. Please try again.'
      }
   };

   const t = translations[language];

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const response = await fetch('/api/send-appraisal', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               ...formData,
               language
            }),
         });

         if (response.ok) {
            toast.success(t.successMessage, { position: 'top-center' });
            onClose();
            // Reset form
            setFormData({
               firstName: '',
               lastName: '',
               phone: '',
               email: '',
               propertyType: '',
               estimatedValue: ''
            });
         } else {
            const errorData = await response.json();
            toast.error(errorData.error || t.errorMessage, { position: 'top-center' });
         }
      } catch (error) {
         console.error('Error:', error);
         toast.error(t.errorMessage, { position: 'top-center' });
      } finally {
         setIsSubmitting(false);
      }
   };

   if (!isOpen) return null;

   return (
      <>
         <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">{t.title}</h5>
                     <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <form onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-md-6 mb-3">
                              <label className="form-label">{t.firstName} *</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 name="firstName"
                                 value={formData.firstName}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label">{t.lastName} *</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 name="lastName"
                                 value={formData.lastName}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                        </div>
                        
                        <div className="row">
                           <div className="col-md-6 mb-3">
                              <label className="form-label">{t.phone} *</label>
                              <input
                                 type="tel"
                                 className="form-control"
                                 name="phone"
                                 value={formData.phone}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label">{t.email} *</label>
                              <input
                                 type="email"
                                 className="form-control"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                        </div>

                        <div className="row">
                           <div className="col-md-6 mb-3">
                              <label className="form-label">{t.propertyType} *</label>
                              <select
                                 className="form-control"
                                 name="propertyType"
                                 value={formData.propertyType}
                                 onChange={handleChange}
                                 required
                              >
                                 <option value="">-- {language === 'es' ? 'Seleccione' : 'Select'} --</option>
                                 <option value="casa">{t.propertyTypes.casa}</option>
                                 <option value="departamento">{t.propertyTypes.departamento}</option>
                                 <option value="terreno">{t.propertyTypes.terreno}</option>
                                 <option value="local">{t.propertyTypes.local}</option>
                                 <option value="oficina">{t.propertyTypes.oficina}</option>
                                 <option value="otro">{t.propertyTypes.otro}</option>
                              </select>
                           </div>
                           <div className="col-md-6 mb-3">
                              <label className="form-label">{t.estimatedValue} *</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 name="estimatedValue"
                                 value={formData.estimatedValue}
                                 onChange={handleChange}
                                 placeholder="$"
                                 required
                              />
                           </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3 mt-4">
                           <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={onClose}
                              disabled={isSubmitting}
                           >
                              {t.cancel}
                           </button>
                           <button
                              type="submit"
                              className="btn btn-primary"
                              disabled={isSubmitting}
                           >
                              {isSubmitting ? t.sending : t.submit}
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {isOpen && <div className="modal-backdrop fade show" onClick={onClose}></div>}
      </>
   )
}

export default AppraisalModal
