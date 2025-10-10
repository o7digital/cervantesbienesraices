import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThree from "@/layouts/footers/FooterThree"
import FancyBanner from "@/components/common/FancyBanner"
import ListingSixArea from "./ListingSixArea"

const ListingSix = () => {
   return (
      <div className="main-page-wrapper">
         <HeaderFive />
         <ListingSixArea />
         <FancyBanner />
         <FooterThree />
      </div>
   )
}

export default ListingSix;
