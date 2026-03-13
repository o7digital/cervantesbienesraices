import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "CRM Demo Cervantes Bienes Raices",
    template: "%s | CRM Demo Cervantes",
  },
  description:
    "Demo conceptual de CRM inmobiliario premium para Cervantes Bienes Raices. Branch CRM-inmo.",
  robots: {
    index: false,
    follow: false,
  },
  themeColor: "#090b10",
};

export default function CrmLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
