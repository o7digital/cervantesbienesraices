'use client'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";
import CookieConsent from "@/components/common/CookieConsent";
import PrivacyFloatingButton from "@/components/common/PrivacyFloatingButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="es" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="Cervantes Bienes Raíces, bienes raíces, inmobiliaria, venta de casas, renta de casas, departamentos, México" />
        <meta name="description" content="Cervantes Bienes Raíces – Sitio oficial. Venta y renta de casas y departamentos en México. Experiencia exclusiva en bienes raíces." />
        <meta property="og:site_name" content="Cervantes Bienes Raíces" />
        <meta property="og:url" content="https://cervantesbienesraices.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cervantes Bienes Raíces – Sitio oficial" />
        <meta name='og:image' content='images/assets/ogg.png' />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Resposive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#0D1A1C" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />

        {/* 👇 Aquí el cambio */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" />
        <title>Cervantes Bienes Raíces – Sitio oficial | Venta y Renta de Casas y Departamentos en México</title>
      </head>
      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>
            {children}
            <CookieConsent />
            <PrivacyFloatingButton />
          </Provider>
        </div>
      </body>
    </html>
  )
}
