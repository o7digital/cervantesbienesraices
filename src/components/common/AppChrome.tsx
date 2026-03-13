"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import CookieConsent from "@/components/common/CookieConsent";
import PrivacyFloatingButton from "@/components/common/PrivacyFloatingButton";

type AppChromeProps = {
  children: ReactNode;
};

export default function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const isCrmRoute = pathname?.startsWith("/crm");

  return (
    <div className="main-page-wrapper">
      {children}
      {!isCrmRoute ? <CookieConsent /> : null}
      {!isCrmRoute ? <PrivacyFloatingButton /> : null}
    </div>
  );
}
