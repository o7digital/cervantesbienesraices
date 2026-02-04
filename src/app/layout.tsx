import "../styles/index.scss";
import "../styles/fancybox-custom.css";
import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/components/common/CookieConsent";
import PrivacyFloatingButton from "@/components/common/PrivacyFloatingButton";
import Providers from "@/redux/Providers";

const SITE_URL = "https://www.cervantesbienesraices.com";
const SITE_NAME = "Cervantes Bienes Raíces";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Venta y Renta de Propiedades en México`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Cervantes Bienes Raíces – Sitio oficial. Venta y renta de casas y departamentos en México con asesoría personalizada.",
  keywords: [
    "Cervantes Bienes Raíces",
    "bienes raíces México",
    "inmobiliaria CDMX",
    "venta de casas",
    "renta de departamentos",
    "propiedades Polanco",
    "propiedades Condesa",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Sitio oficial`,
    description:
      "Cervantes Bienes Raíces – Venta y renta de propiedades exclusivas en México.",
    images: [
      {
        url: "/images/assets/ogg.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Venta y Renta de Propiedades en México`,
    description:
      "Asesoría inmobiliaria con más de 20 años de experiencia. Propiedades exclusivas en CDMX y zonas premium.",
    images: ["/images/assets/ogg.png"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "fr-FR": `${SITE_URL}/fr`,
      "it-IT": `${SITE_URL}/it`,
      "de-DE": `${SITE_URL}/de`,
    },
  },
  themeColor: "#0D1A1C",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="es" suppressHydrationWarning={isDev}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="main-page-wrapper">
            {children}
            <CookieConsent />
            <PrivacyFloatingButton />
          </div>
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTBQZGNTJ7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTBQZGNTJ7');
          `}
        </Script>
      </body>
    </html>
  );
}
