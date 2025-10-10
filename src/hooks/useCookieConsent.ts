'use client'
import { useState, useEffect } from 'react'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  social: boolean
}

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    social: false
  })
  
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    // Load saved preferences on component mount
    const consentGiven = localStorage.getItem('cervantes-cookie-consent')
    const savedPreferences = localStorage.getItem('cervantes-cookie-preferences')
    
    if (consentGiven && savedPreferences) {
      setHasConsented(true)
      setPreferences(JSON.parse(savedPreferences))
    }
  }, [])

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences)
    localStorage.setItem('cervantes-cookie-consent', 'true')
    localStorage.setItem('cervantes-cookie-preferences', JSON.stringify(newPreferences))
    setHasConsented(true)
  }

  const resetConsent = () => {
    localStorage.removeItem('cervantes-cookie-consent')
    localStorage.removeItem('cervantes-cookie-preferences')
    setHasConsented(false)
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      social: false
    })
  }

  const canUseAnalytics = () => preferences.analytics
  const canUseMarketing = () => preferences.marketing  
  const canUseSocial = () => preferences.social

  return {
    preferences,
    hasConsented,
    updatePreferences,
    resetConsent,
    canUseAnalytics,
    canUseMarketing,
    canUseSocial
  }
}