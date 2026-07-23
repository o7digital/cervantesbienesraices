'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

const SITE_CODE = 'cervantesbienesraices'
const LEAD_ENDPOINT = 'https://www.o7digital.com/api/o7-lead'
const CHAT_ENDPOINT = 'https://olivia-ai.o7digital.com/api/olivia/chat'
const CHANNEL_ENDPOINT = 'https://olivia-ai.o7digital.com/api/widget/conversations'
const OFFLINE = false

const COPY = {
  es: {
    title: 'Olivia AI', status: 'Asistente Cervantes Bienes Raices', online: 'En linea', teaser: 'Buscas propiedad?', open: 'Abrir chat', close: 'Cerrar chat',
    welcome: 'Hola, soy Olivia AI. En que puedo ayudarte con tu busqueda inmobiliaria?',
    leadIntro: 'Deja tus datos para que un asesor de Cervantes Bienes Raices pueda contactarte.',
    firstName: 'Nombre', lastName: 'Apellido', email: 'Email', phone: 'Telefono', submitLead: 'Enviar datos',
    leadThanks: 'Gracias. Tus datos fueron enviados y un asesor te contactara pronto.', placeholder: 'Escribe tu pregunta...', send: 'Enviar',
    error: 'No pude enviar el mensaje. Intenta de nuevo o contacta directamente a Cervantes Bienes Raices.',
  },
  en: {
    title: 'Olivia AI', status: 'Cervantes Real Estate Assistant', online: 'Online', teaser: 'Looking for property?', open: 'Open chat', close: 'Close chat',
    welcome: 'Hello, I am Olivia AI. How can I help with your real estate search?',
    leadIntro: 'Leave your details so a Cervantes Real Estate advisor can contact you.',
    firstName: 'First name', lastName: 'Last name', email: 'Email', phone: 'Phone', submitLead: 'Send details',
    leadThanks: 'Thanks. Your details were sent and an advisor will contact you soon.', placeholder: 'Write your question...', send: 'Send',
    error: 'I could not send the message. Please try again or contact Cervantes Real Estate directly.',
  },
  fr: {
    title: 'Olivia AI', status: 'Assistante Cervantes Immobilier', online: 'En ligne', teaser: 'Vous cherchez un bien ?', open: 'Ouvrir le chat', close: 'Fermer le chat',
    welcome: 'Bonjour, je suis Olivia AI. Comment puis-je vous aider dans votre recherche immobiliere ?',
    leadIntro: "Laissez vos coordonnees pour qu'un conseiller Cervantes Bienes Raices puisse vous contacter.",
    firstName: 'Prenom', lastName: 'Nom', email: 'Email', phone: 'Telephone', submitLead: 'Envoyer',
    leadThanks: 'Merci. Vos coordonnees ont ete envoyees et un conseiller vous contactera rapidement.', placeholder: 'Ecrivez votre question...', send: 'Envoyer',
    error: "Je n'ai pas pu envoyer le message. Reessayez ou contactez directement Cervantes Bienes Raices.",
  },
  it: {
    title: 'Olivia AI', status: 'Assistente Cervantes Immobiliare', online: 'Online', teaser: 'Cerchi una proprieta?', open: 'Apri chat', close: 'Chiudi chat',
    welcome: 'Ciao, sono Olivia AI. Come posso aiutarti nella tua ricerca immobiliare?',
    leadIntro: 'Lascia i tuoi dati cosi un consulente Cervantes Bienes Raices potra contattarti.',
    firstName: 'Nome', lastName: 'Cognome', email: 'Email', phone: 'Telefono', submitLead: 'Invia dati',
    leadThanks: 'Grazie. I tuoi dati sono stati inviati e un consulente ti contattera presto.', placeholder: 'Scrivi la tua domanda...', send: 'Invia',
    error: 'Non ho potuto inviare il messaggio. Riprova o contatta direttamente Cervantes Bienes Raices.',
  },
  de: {
    title: 'Olivia AI', status: 'Cervantes Immobilien Assistentin', online: 'Online', teaser: 'Immobilie gesucht?', open: 'Chat offnen', close: 'Chat schliessen',
    welcome: 'Hallo, ich bin Olivia AI. Wie kann ich Ihnen bei Ihrer Immobiliensuche helfen?',
    leadIntro: 'Hinterlassen Sie Ihre Kontaktdaten, damit ein Berater von Cervantes Bienes Raices Sie kontaktieren kann.',
    firstName: 'Vorname', lastName: 'Name', email: 'E-Mail', phone: 'Telefon', submitLead: 'Daten senden',
    leadThanks: 'Danke. Ihre Daten wurden gesendet und ein Berater wird Sie zeitnah kontaktieren.', placeholder: 'Schreiben Sie Ihre Frage...', send: 'Senden',
    error: 'Ich konnte die Nachricht nicht senden. Bitte versuchen Sie es erneut oder kontaktieren Sie Cervantes Bienes Raices direkt.',
  },
  ru: {
    title: 'Olivia AI', status: 'Помощник Cervantes Недвижимость', online: 'В сети', teaser: 'Ищете недвижимость?', open: 'Открыть чат', close: 'Закрыть чат',
    welcome: 'Здравствуйте, я Olivia AI. Чем я могу помочь вам в поиске недвижимости?',
    leadIntro: 'Оставьте свои контактные данные, чтобы консультант Cervantes Недвижимость мог связаться с вами.',
    firstName: 'Имя', lastName: 'Фамилия', email: 'Электронная почта', phone: 'Телефон', submitLead: 'Отправить данные',
    leadThanks: 'Спасибо. Ваши данные отправлены, и консультант скоро свяжется с вами.', placeholder: 'Напишите ваш вопрос...', send: 'Отправить',
    error: 'Не удалось отправить сообщение. Попробуйте еще раз или свяжитесь с Cervantes Недвижимость напрямую.',
  },
}

type Language = keyof typeof COPY
type ChatMessage = { role: 'assistant' | 'user'; content: string }

function getLanguage(pathname: string | null): Language {
  const firstSegment = pathname?.split('/').filter(Boolean)[0]
  if (firstSegment === 'en' || firstSegment === 'fr' || firstSegment === 'it' || firstSegment === 'de' || firstSegment === 'ru') return firstSegment
  return 'es'
}

function detectMessageLanguage(message: string, fallbackLanguage: Language): Language {
  const value = message.toLowerCase()
  if (/\b(hola|gracias|quiero|busco|propiedad|casa|departamento|renta|venta|comprar|vender|polanco|condesa|roma|inmobiliaria)\b/.test(value)) return 'es'
  if (/\b(bonjour|merci|cherche|bien|maison|appartement|location|vente|acheter|vendre|immobilier|polanco|condesa|roma)\b/.test(value)) return 'fr'
  if (/\b(hello|thanks|looking|property|house|apartment|rent|sale|buy|sell|real estate|polanco|condesa|roma)\b/.test(value)) return 'en'
  if (/\b(ciao|grazie|cerco|proprieta|casa|appartamento|affitto|vendita|comprare|vendere|immobiliare|polanco|condesa|roma)\b/.test(value)) return 'it'
  if (/\b(hallo|danke|suche|immobilie|haus|wohnung|miete|verkauf|kaufen|verkaufen|polanco|condesa|roma)\b/.test(value)) return 'de'
  if (/[а-яё]/i.test(value)) return 'ru'
  return fallbackLanguage
}

export default function OliviaChat() {
  const pathname = usePathname()
  const language = getLanguage(pathname)
  const copy = COPY[language]
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [leadSent, setLeadSent] = useState(false)
  const [lead, setLead] = useState({ firstName: '', lastName: '', email: '', phone: '' })
  const [messages, setMessages] = useState<ChatMessage[]>(
    OFFLINE ? [{ role: 'assistant', content: 'Offline' }] : [{ role: 'assistant', content: copy.welcome }]
  )
  const visitorId = useMemo(() => {
    if (typeof window === 'undefined') return ''
    const key = `oliviaVisitor:${SITE_CODE}`
    const saved = localStorage.getItem(key)
    const id = saved || crypto.randomUUID()
    localStorage.setItem(key, id)
    return id
  }, [])

  useEffect(() => {
    if (OFFLINE) return
    setMessages((prev) => {
      if (prev.length !== 1 || prev[0]?.role !== 'assistant') return prev
      return [{ role: 'assistant', content: copy.welcome }]
    })
  }, [copy.welcome])

  const transcript = useMemo(() => messages.map((message) => `${message.role}: ${message.content}`).join('\n'), [messages])

  const handleLeadSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (OFFLINE) return
    if (!lead.firstName.trim() || !lead.lastName.trim() || !lead.email.trim() || !lead.phone.trim() || isLoading) return
    setIsLoading(true)
    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: lead.firstName.trim(), lastName: lead.lastName.trim(), email: lead.email.trim(), phone: lead.phone.trim(),
          source: 'Chat Olivia AI Cervantes Bienes Raices', language, siteCode: SITE_CODE,
          message: `Lead Chat Olivia AI Cervantes Bienes Raices (${language}, ${SITE_CODE})\n\n${transcript}`,
        }),
      })
      if (!response.ok) throw new Error('Lead delivery failed')
      await fetch(CHANNEL_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientCode: SITE_CODE,
          visitorId,
          content: `Lead: ${lead.firstName.trim()} ${lead.lastName.trim()} · ${lead.email.trim()} · ${lead.phone.trim()}`,
          visitorName: `${lead.firstName.trim()} ${lead.lastName.trim()}`,
          email: lead.email.trim(),
          phone: lead.phone.trim(),
          source: 'website',
          language,
          metadata: { page: window.location.href, type: 'lead' },
        }),
      })
      setLeadSent(true)
      setMessages((prev) => [...prev, { role: 'assistant', content: copy.leadThanks }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: copy.error }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSend = async () => {
    if (OFFLINE) return
    const message = input.trim()
    if (!message || isLoading || !leadSent) return
    const messageLanguage = detectMessageLanguage(message, language)
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: message }])
    setIsLoading(true)
    try {
      const stored = await fetch(CHANNEL_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientCode: SITE_CODE,
          visitorId,
          content: message,
          visitorName: `${lead.firstName.trim()} ${lead.lastName.trim()}`,
          email: lead.email.trim(),
          phone: lead.phone.trim(),
          source: 'website',
          language: messageLanguage,
          metadata: { page: window.location.href, pageTitle: document.title },
        }),
      })
      if (!stored.ok) throw new Error('Channel Manager delivery failed')
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, language: messageLanguage, clientCode: SITE_CODE, visitorId, metadata: { page: window.location.href } }),
      })
      const data = await response.json()
      const reply = data.reply || copy.error
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
      await fetch(CHANNEL_ENDPOINT, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientCode: SITE_CODE, visitorId, content: reply, model: data.mode || 'olivia-v2' }),
      })
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: copy.error }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="sofia-cervantes-chat">
      {isOpen && (
        <section className="sofia-cervantes-panel" aria-label={copy.status}>
          <header className="sofia-cervantes-header">
            <div><p className="sofia-cervantes-title">{copy.title}</p><p className="sofia-cervantes-status">{OFFLINE ? 'Offline' : `${copy.status} · ${copy.online}`}</p></div>
            <button type="button" className="sofia-cervantes-close" onClick={() => setIsOpen(false)} aria-label={copy.close}>x</button>
          </header>
          <div className="sofia-cervantes-messages">
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`sofia-cervantes-message ${message.role}`}>{message.content}</div>)}
            {isLoading && <div className="sofia-cervantes-message assistant">...</div>}
          </div>
          {!OFFLINE && !leadSent && (
            <form className="sofia-cervantes-lead" onSubmit={handleLeadSubmit}>
              <p>{copy.leadIntro}</p>
              <input required placeholder={copy.firstName} value={lead.firstName} onChange={(event) => setLead((prev) => ({ ...prev, firstName: event.target.value }))} />
              <input required placeholder={copy.lastName} value={lead.lastName} onChange={(event) => setLead((prev) => ({ ...prev, lastName: event.target.value }))} />
              <input required type="email" placeholder={copy.email} value={lead.email} onChange={(event) => setLead((prev) => ({ ...prev, email: event.target.value }))} />
              <input required type="tel" placeholder={copy.phone} value={lead.phone} onChange={(event) => setLead((prev) => ({ ...prev, phone: event.target.value }))} />
              <button type="submit" disabled={isLoading}>{copy.submitLead}</button>
            </form>
          )}
          <div className="sofia-cervantes-composer">
            <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') handleSend() }} disabled={OFFLINE || !leadSent || isLoading} placeholder={OFFLINE ? 'Offline' : copy.placeholder} />
            <button type="button" onClick={handleSend} disabled={OFFLINE || isLoading || !leadSent} aria-label={copy.send}>{'>'}</button>
          </div>
        </section>
      )}
      <div className="sofia-cervantes-closed">
        {!isOpen && <button type="button" className="sofia-cervantes-teaser" onClick={() => setIsOpen(true)}><span className="sofia-cervantes-avatar">O</span><span>{OFFLINE ? 'Offline' : copy.teaser}</span></button>}
        <button type="button" className="sofia-cervantes-toggle" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? copy.close : copy.open}>{isOpen ? 'x' : copy.title}</button>
      </div>
    </div>
  )
}
