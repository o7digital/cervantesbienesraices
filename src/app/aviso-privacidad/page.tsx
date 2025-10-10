'use client'
import Wrapper from "@/layouts/Wrapper"
import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThree from "@/layouts/footers/FooterThree"
import AvisoPrivacidadContent from "@/components/inner-pages/AvisoPrivacidadContent"

export default function AvisoPrivacidad() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContent />
      <FooterThree />
    </Wrapper>
  )
}