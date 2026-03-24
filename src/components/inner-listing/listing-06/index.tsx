import { Suspense } from "react";
import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThree from "@/layouts/footers/FooterThree"
import ListingSixArea from "./ListingSixArea"

const ListingSix = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderFive style="dark" />
         <Suspense fallback={<div>Loading...</div>}>
           <ListingSixArea />
         </Suspense>
         <FooterThree />
      </div>
   )
}

export default ListingSix;
