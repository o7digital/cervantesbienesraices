import { Suspense } from "react";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeDe from "@/layouts/footers/FooterThreeDe";
import ListingSixAreaDe from "./ListingSixAreaDe";

const ListingSixDe = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderFive style="dark" />
      <Suspense fallback={<div>Laden...</div>}>
        <ListingSixAreaDe />
      </Suspense>
      <FooterThreeDe />
    </div>
  );
};

export default ListingSixDe;
