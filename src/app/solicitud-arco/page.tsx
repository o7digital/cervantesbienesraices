import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import Header from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import ArcoFormulario from "@/components/forms/ArcoFormulario"

const BASE_URL = "https://cervantesbienesraices.vercel.app"

export const metadata: Metadata = {
  title: "Solicitud de Derechos ARCO | Cervantes Bienes Raíces",
  description:
    "Ejercita tus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) sobre tus datos personales con Cervantes Bienes Raíces.",
  alternates: {
    canonical: `${BASE_URL}/solicitud-arco`,
    languages: {
      "es-MX": `${BASE_URL}/solicitud-arco`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: "Solicitud ARCO | Cervantes Bienes Raíces",
    description:
      "Formulario para ejercer tus derechos de protección de datos personales.",
    url: `${BASE_URL}/solicitud-arco`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
}

export default function SolicitudArco() {
  return (
    <Wrapper>
      <Header />
      <div className="breadcrumb-section pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Inicio</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/aviso-privacidad">Aviso de Privacidad</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Solicitud ARCO
                  </li>
                </ol>
              </nav>
              <h1 className="breadcrumb-title">Solicitud de Derechos ARCO</h1>
              <p className="breadcrumb-text">
                Ejercite sus derechos de Acceso, Rectificación, Cancelación y Oposición de datos personales
              </p>
            </div>
          </div>
        </div>
      </div>
      <ArcoFormulario />
      <FooterOne />
    </Wrapper>
  )
}
