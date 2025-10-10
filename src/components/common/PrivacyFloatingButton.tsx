'use client'
import Link from "next/link"
import { useState } from "react"

const PrivacyFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="privacy-floating-button">
      <Link href="/aviso-privacidad" className="privacy-link">
        <i className="fa-solid fa-shield-alt me-2"></i>
        Aviso de Privacidad
      </Link>
      <button 
        className="privacy-close"
        onClick={() => setIsVisible(false)}
        aria-label="Cerrar"
      >
        <i className="fa-solid fa-times"></i>
      </button>
    </div>
  )
}

export default PrivacyFloatingButton