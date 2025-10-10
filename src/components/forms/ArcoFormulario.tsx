'use client'
import { useState } from "react"

interface ArcoFormData {
  tipoSolicitud: 'acceso' | 'rectificacion' | 'cancelacion' | 'oposicion' | ''
  nombre: string
  email: string
  telefono: string
  direccion: string
  identificacion: string
  descripcionSolicitud: string
  datosRectificar?: string
  razonCancelacion?: string
  razonOposicion?: string
  documentoIdentidad: File | null
}

const ArcoFormulario = () => {
  const [formData, setFormData] = useState<ArcoFormData>({
    tipoSolicitud: '',
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    identificacion: '',
    descripcionSolicitud: '',
    datosRectificar: '',
    razonCancelacion: '',
    razonOposicion: '',
    documentoIdentidad: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        documentoIdentidad: e.target.files![0]
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.tipoSolicitud) newErrors.tipoSolicitud = 'Debe seleccionar un tipo de solicitud'
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio'
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio'
    if (!formData.email.includes('@')) newErrors.email = 'Ingrese un email válido'
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio'
    if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es obligatoria'
    if (!formData.identificacion.trim()) newErrors.identificacion = 'El número de identificación es obligatorio'
    if (!formData.descripcionSolicitud.trim()) newErrors.descripcionSolicitud = 'Debe describir su solicitud'
    if (!formData.documentoIdentidad) newErrors.documentoIdentidad = 'Debe adjuntar un documento de identidad'

    // Validaciones específicas por tipo
    if (formData.tipoSolicitud === 'rectificacion' && !formData.datosRectificar?.trim()) {
      newErrors.datosRectificar = 'Debe especificar qué datos desea rectificar'
    }
    
    if (formData.tipoSolicitud === 'cancelacion' && !formData.razonCancelacion?.trim()) {
      newErrors.razonCancelacion = 'Debe especificar la razón de cancelación'
    }
    
    if (formData.tipoSolicitud === 'oposicion' && !formData.razonOposicion?.trim()) {
      newErrors.razonOposicion = 'Debe especificar la razón de oposición'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Aquí enviarías los datos a tu backend
      console.log('Formulario ARCO enviado:', formData)
      
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        tipoSolicitud: '',
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        identificacion: '',
        descripcionSolicitud: '',
        datosRectificar: '',
        razonCancelacion: '',
        razonOposicion: '',
        documentoIdentidad: null
      })
      
    } catch (error) {
      console.error('Error al enviar formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="arco-form-container py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="success-message text-center p-60 bg-light rounded">
                <i className="fa-solid fa-check-circle text-success mb-30" style={{fontSize: '80px'}}></i>
                <h3 className="mb-30">¡Solicitud Enviada Exitosamente!</h3>
                <p className="mb-30">
                  Hemos recibido su solicitud de derechos ARCO. Le responderemos en un plazo máximo de 
                  <strong> 20 días hábiles</strong> a través del correo electrónico proporcionado.
                </p>
                <p className="mb-30 text-muted">
                  <strong>Número de folio:</strong> ARCO-{Date.now()}
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowSuccess(false)}
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="arco-form-container py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Información de Derechos ARCO */}
            <div className="arco-info-sidebar">
              <h4 className="mb-30">Derechos ARCO</h4>
              
              <div className="arco-right mb-30">
                <h6 className="mb-15">
                  <i className="fa-solid fa-eye text-primary me-2"></i>
                  Acceso
                </h6>
                <p className="small">Conocer qué datos personales tenemos sobre usted y cómo los utilizamos.</p>
              </div>

              <div className="arco-right mb-30">
                <h6 className="mb-15">
                  <i className="fa-solid fa-edit text-success me-2"></i>
                  Rectificación
                </h6>
                <p className="small">Solicitar la corrección de datos personales inexactos o incompletos.</p>
              </div>

              <div className="arco-right mb-30">
                <h6 className="mb-15">
                  <i className="fa-solid fa-trash text-danger me-2"></i>
                  Cancelación
                </h6>
                <p className="small">Solicitar la eliminación de sus datos personales de nuestros registros.</p>
              </div>

              <div className="arco-right mb-30">
                <h6 className="mb-15">
                  <i className="fa-solid fa-ban text-warning me-2"></i>
                  Oposición
                </h6>
                <p className="small">Oponerse al tratamiento de sus datos personales para fines específicos.</p>
              </div>

              <div className="alert alert-info">
                <h6>Documentos Requeridos</h6>
                <ul className="small mb-0">
                  <li>Identificación oficial (INE, pasaporte, etc.)</li>
                  <li>Comprobante de domicilio (no mayor a 3 meses)</li>
                  <li>En caso de representación: poder notarial</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="arco-form-content">
              <h3 className="mb-30">Formulario de Solicitud de Derechos ARCO</h3>
              
              <form onSubmit={handleSubmit} className="arco-form">
                {/* Tipo de Solicitud */}
                <div className="row mb-30">
                  <div className="col-12">
                    <label className="form-label">Tipo de Solicitud *</label>
                    <select 
                      name="tipoSolicitud"
                      value={formData.tipoSolicitud}
                      onChange={handleInputChange}
                      className={`form-select ${errors.tipoSolicitud ? 'is-invalid' : ''}`}
                    >
                      <option value="">Seleccione el tipo de solicitud</option>
                      <option value="acceso">Acceso - Conocer mis datos personales</option>
                      <option value="rectificacion">Rectificación - Corregir datos incorrectos</option>
                      <option value="cancelacion">Cancelación - Eliminar mis datos</option>
                      <option value="oposicion">Oposición - Oponerme al tratamiento</option>
                    </select>
                    {errors.tipoSolicitud && <div className="invalid-feedback">{errors.tipoSolicitud}</div>}
                  </div>
                </div>

                {/* Datos Personales */}
                <div className="row mb-30">
                  <div className="col-md-6">
                    <label className="form-label">Nombre Completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                      placeholder="Ingrese su nombre completo"
                    />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Correo Electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                <div className="row mb-30">
                  <div className="col-md-6">
                    <label className="form-label">Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      placeholder="55 1234 5678"
                    />
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Número de Identificación *</label>
                    <input
                      type="text"
                      name="identificacion"
                      value={formData.identificacion}
                      onChange={handleInputChange}
                      className={`form-control ${errors.identificacion ? 'is-invalid' : ''}`}
                      placeholder="CURP, RFC, INE, etc."
                    />
                    {errors.identificacion && <div className="invalid-feedback">{errors.identificacion}</div>}
                  </div>
                </div>

                <div className="row mb-30">
                  <div className="col-12">
                    <label className="form-label">Dirección Completa *</label>
                    <textarea
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleInputChange}
                      className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                      rows={3}
                      placeholder="Calle, número, colonia, ciudad, estado, código postal"
                    />
                    {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                  </div>
                </div>

                {/* Campos específicos según el tipo de solicitud */}
                {formData.tipoSolicitud === 'rectificacion' && (
                  <div className="row mb-30">
                    <div className="col-12">
                      <label className="form-label">Datos a Rectificar *</label>
                      <textarea
                        name="datosRectificar"
                        value={formData.datosRectificar}
                        onChange={handleInputChange}
                        className={`form-control ${errors.datosRectificar ? 'is-invalid' : ''}`}
                        rows={3}
                        placeholder="Especifique qué datos están incorrectos y cuál es la información correcta"
                      />
                      {errors.datosRectificar && <div className="invalid-feedback">{errors.datosRectificar}</div>}
                    </div>
                  </div>
                )}

                {formData.tipoSolicitud === 'cancelacion' && (
                  <div className="row mb-30">
                    <div className="col-12">
                      <label className="form-label">Razón de Cancelación *</label>
                      <textarea
                        name="razonCancelacion"
                        value={formData.razonCancelacion}
                        onChange={handleInputChange}
                        className={`form-control ${errors.razonCancelacion ? 'is-invalid' : ''}`}
                        rows={3}
                        placeholder="Explique por qué desea que eliminemos sus datos personales"
                      />
                      {errors.razonCancelacion && <div className="invalid-feedback">{errors.razonCancelacion}</div>}
                    </div>
                  </div>
                )}

                {formData.tipoSolicitud === 'oposicion' && (
                  <div className="row mb-30">
                    <div className="col-12">
                      <label className="form-label">Razón de Oposición *</label>
                      <textarea
                        name="razonOposicion"
                        value={formData.razonOposicion}
                        onChange={handleInputChange}
                        className={`form-control ${errors.razonOposicion ? 'is-invalid' : ''}`}
                        rows={3}
                        placeholder="Explique a qué tratamiento de sus datos se opone y por qué"
                      />
                      {errors.razonOposicion && <div className="invalid-feedback">{errors.razonOposicion}</div>}
                    </div>
                  </div>
                )}

                {/* Descripción de la Solicitud */}
                <div className="row mb-30">
                  <div className="col-12">
                    <label className="form-label">Descripción Detallada de su Solicitud *</label>
                    <textarea
                      name="descripcionSolicitud"
                      value={formData.descripcionSolicitud}
                      onChange={handleInputChange}
                      className={`form-control ${errors.descripcionSolicitud ? 'is-invalid' : ''}`}
                      rows={4}
                      placeholder="Describa detalladamente su solicitud..."
                    />
                    {errors.descripcionSolicitud && <div className="invalid-feedback">{errors.descripcionSolicitud}</div>}
                  </div>
                </div>

                {/* Documento de Identidad */}
                <div className="row mb-30">
                  <div className="col-12">
                    <label className="form-label">Documento de Identidad *</label>
                    <input
                      type="file"
                      name="documentoIdentidad"
                      onChange={handleFileChange}
                      className={`form-control ${errors.documentoIdentidad ? 'is-invalid' : ''}`}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <div className="form-text">
                      Adjunte una copia de su identificación oficial (PDF, JPG, PNG - máx. 5MB)
                    </div>
                    {errors.documentoIdentidad && <div className="invalid-feedback">{errors.documentoIdentidad}</div>}
                  </div>
                </div>

                {/* Aviso Legal */}
                <div className="alert alert-warning mb-30">
                  <h6>Importante:</h6>
                  <ul className="small mb-0">
                    <li>Su solicitud será procesada en un plazo máximo de 20 días hábiles</li>
                    <li>Nos reservamos el derecho de solicitar documentación adicional para verificar su identidad</li>
                    <li>La información proporcionada será utilizada únicamente para procesar su solicitud ARCO</li>
                    <li>Todas las comunicaciones se realizarán a través del correo electrónico proporcionado</li>
                  </ul>
                </div>

                {/* Botón de Envío */}
                <div className="row">
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Enviando Solicitud...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-paper-plane me-2"></i>
                          Enviar Solicitud ARCO
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArcoFormulario