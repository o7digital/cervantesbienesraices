'use client'
import Link from "next/link"
import { useState } from "react"
import useLanguage from "@/hooks/useLanguage"

const PrivacyFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { currentLang } = useLanguage()

  // Définir le lien et le texte selon la langue
  let privacyLink = "/aviso-privacidad"
  let privacyText = "Aviso de Privacidad"

  if (currentLang === "en") {
    privacyLink = "/en/privacy-policy"
    privacyText = "Privacy Policy"
  } else if (currentLang === "fr") {
    privacyLink = "/fr/politique-confidentialite"
    privacyText = "Politique de Confidentialité"
  } else if (currentLang === "it") {
    privacyLink = "/it/politica-privacy"
    privacyText = "Informativa sulla Privacy"
  }

  if (!isVisible) return null

  return (
    <div className="privacy-floating-button">
      <Link href={privacyLink} className="privacy-link">
        <i className="fa-solid fa-shield-alt me-2"></i>
        {privacyText}
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