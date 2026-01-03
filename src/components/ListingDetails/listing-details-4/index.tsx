import { Suspense } from "react";
import ListingDetailsFourArea from "./ListingDetailsFourArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFour from "@/layouts/headers/HeaderFour"

const ListingDetailsFour = () => {
   return (
      <>
         <HeaderFour />
         <Suspense fallback={<div>Loading...</div>}>
           <ListingDetailsFourArea />
         </Suspense>
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingDetailsFour
