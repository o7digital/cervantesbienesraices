"use client";

import CookieConsent from "@/components/common/CookieConsent";
import PrivacyFloatingButton from "@/components/common/PrivacyFloatingButton";
import OliviaChat from "@/components/chat/OliviaChat";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";

export default function SiteChrome() {
  return (
    <>
      <CookieConsent />
      <PrivacyFloatingButton />
      <WhatsAppFloatingButton />
      <OliviaChat />
    </>
  );
}
