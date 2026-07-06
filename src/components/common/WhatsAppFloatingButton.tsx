const WHATSAPP_URL = "https://wa.me/5215587960451";

const WhatsAppFloatingButton = () => (
  <a
    href={WHATSAPP_URL}
    className="whatsapp-floating-button"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
  >
    <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    <span>WhatsApp</span>
  </a>
);

export default WhatsAppFloatingButton;
