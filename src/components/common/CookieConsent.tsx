'use client'
import { useState, useEffect } from "react"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  social: boolean
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    social: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cervantes-cookie-consent')
    if (!consentGiven) {
      setShowBanner(true)
    } else {
      const savedPreferences = localStorage.getItem('cervantes-cookie-preferences')
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      social: true
    }
    setPreferences(allPreferences)
    saveConsent(allPreferences)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      social: false
    }
    setPreferences(essentialOnly)
    saveConsent(essentialOnly)
    setShowBanner(false)
  }

  const handleCustomize = () => {
    setShowModal(true)
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
    setShowBanner(false)
    setShowModal(false)
  }

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cervantes-cookie-consent', 'true')
    localStorage.setItem('cervantes-cookie-preferences', JSON.stringify(prefs))
    
    // Apply preferences (you would integrate with your analytics/marketing tools here)
    applyPreferences(prefs)
  }

  const applyPreferences = (prefs: CookiePreferences) => {
    // Google Analytics
    if (prefs.analytics) {
      // Enable Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        })
      }
    } else {
      // Disable Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'denied'
        })
      }
    }

    // Marketing cookies (Facebook Pixel, Google Ads, etc.)
    if (prefs.marketing) {
      // Enable marketing cookies
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted'
        })
      }
    } else {
      // Disable marketing cookies
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'denied'
        })
      }
    }

    // Social media cookies
    if (!prefs.social) {
      // Remove social media cookies if rejected
      // Implementation depends on which social media platforms you use
    }
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'essential') return // Cannot change essential cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner && !showModal) return null

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="cookie-banner fixed-bottom bg-dark text-white p-4 shadow-lg" style={{ zIndex: 9999 }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-3 mb-lg-0">
                <div className="d-flex align-items-start">
                  <i className="fa-solid fa-cookie-bite text-warning me-3 mt-1" style={{ fontSize: '24px' }}></i>
                  <div>
                    <h6 className="text-white mb-2">Uso de Cookies</h6>
                    <p className="mb-0 small text-light">
                      Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. 
                      Al continuar navegando, acepta nuestro uso de cookies según nuestra{' '}
                      <a href="/aviso-privacidad#cookies" className="text-warning text-decoration-underline">
                        Política de Cookies
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                  <button 
                    className="btn btn-outline-light btn-sm"
                    onClick={handleRejectAll}
                  >
                    <i className="fa-solid fa-times me-1"></i>
                    Rechazar
                  </button>
                  <button 
                    className="btn btn-outline-warning btn-sm"
                    onClick={handleCustomize}
                  >
                    <i className="fa-solid fa-cog me-1"></i>
                    Personalizar
                  </button>
                  <button 
                    className="btn btn-warning btn-sm text-dark fw-bold"
                    onClick={handleAcceptAll}
                  >
                    <i className="fa-solid fa-check me-1"></i>
                    Aceptar Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', zIndex: 10000 }} onClick={() => setShowModal(false)}>
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">
                  <i className="fa-solid fa-cookie-bite text-warning me-2"></i>
                  Preferencias de Cookies
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p className="text-muted mb-4">
                  Personalice sus preferencias de cookies. Puede cambiar estas configuraciones en cualquier momento.
                </p>

                {/* Essential Cookies */}
                <div className="cookie-category mb-4 p-3 border rounded">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-2">
                        <i className="fa-solid fa-cog text-success me-2"></i>
                        Cookies Esenciales
                      </h6>
                      <p className="text-muted small mb-0">
                        Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                      </p>
                    </div>
                    <div className="form-check form-switch ms-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="essential" 
                        checked={true}
                        disabled={true}
                      />
                      <label className="form-check-label text-success fw-bold" htmlFor="essential">
                        Siempre Activo
                      </label>
                    </div>
                  </div>
                  <div className="cookie-details">
                    <small className="text-muted">
                      <strong>Ejemplos:</strong> Cookies de sesión, autenticación, seguridad, preferencias del sitio
                    </small>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="cookie-category mb-4 p-3 border rounded">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-2">
                        <i className="fa-solid fa-chart-bar text-info me-2"></i>
                        Cookies Analíticas
                      </h6>
                      <p className="text-muted small mb-0">
                        Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web para mejorarlo.
                      </p>
                    </div>
                    <div className="form-check form-switch ms-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="analytics" 
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                      />
                      <label className="form-check-label" htmlFor="analytics">
                        {preferences.analytics ? 'Activado' : 'Desactivado'}
                      </label>
                    </div>
                  </div>
                  <div className="cookie-details">
                    <small className="text-muted">
                      <strong>Ejemplos:</strong> Google Analytics, estadísticas de uso, análisis de comportamiento
                    </small>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="cookie-category mb-4 p-3 border rounded">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-2">
                        <i className="fa-solid fa-bullhorn text-warning me-2"></i>
                        Cookies de Marketing
                      </h6>
                      <p className="text-muted small mb-0">
                        Utilizadas para mostrar publicidad relevante y medir la efectividad de nuestras campañas.
                      </p>
                    </div>
                    <div className="form-check form-switch ms-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="marketing" 
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                      />
                      <label className="form-check-label" htmlFor="marketing">
                        {preferences.marketing ? 'Activado' : 'Desactivado'}
                      </label>
                    </div>
                  </div>
                  <div className="cookie-details">
                    <small className="text-muted">
                      <strong>Ejemplos:</strong> Facebook Pixel, Google Ads, publicidad personalizada
                    </small>
                  </div>
                </div>

                {/* Social Media Cookies */}
                <div className="cookie-category mb-4 p-3 border rounded">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                      <h6 className="mb-2">
                        <i className="fa-solid fa-share-alt text-purple me-2"></i>
                        Cookies de Redes Sociales
                      </h6>
                      <p className="text-muted small mb-0">
                        Permiten compartir contenido en redes sociales y muestran contenido social integrado.
                      </p>
                    </div>
                    <div className="form-check form-switch ms-3">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="social" 
                        checked={preferences.social}
                        onChange={() => handlePreferenceChange('social')}
                      />
                      <label className="form-check-label" htmlFor="social">
                        {preferences.social ? 'Activado' : 'Desactivado'}
                      </label>
                    </div>
                  </div>
                  <div className="cookie-details">
                    <small className="text-muted">
                      <strong>Ejemplos:</strong> Botones de compartir, widgets sociales, contenido embebido
                    </small>
                  </div>
                </div>

                <div className="alert alert-info">
                  <i className="fa-solid fa-info-circle me-2"></i>
                  <small>
                    Para más información sobre cómo utilizamos las cookies, consulte nuestra{' '}
                    <a href="/aviso-privacidad#cookies" className="text-decoration-underline">
                      Política de Cookies completa
                    </a>.
                  </small>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-outline-secondary" onClick={handleRejectAll}>
                  <i className="fa-solid fa-times me-1"></i>
                  Solo Esenciales
                </button>
                <button type="button" className="btn btn-outline-primary" onClick={handleAcceptAll}>
                  <i className="fa-solid fa-check-double me-1"></i>
                  Aceptar Todo
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSavePreferences}>
                  <i className="fa-solid fa-save me-1"></i>
                  Guardar Preferencias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show" style={{ zIndex: 9999 }}></div>}
    </>
  )
}

export default CookieConsent