import { Suspense } from "react";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeIt from "@/layouts/footers/FooterThreeIt";
import ListingSixAreaIt from "./ListingSixAreaIt";

const ListingSixIt = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderFive style="dark" />
      <Suspense fallback={<div>Caricamento...</div>}>
        <ListingSixAreaIt />
      </Suspense>
      <FooterThreeIt />
    </div>
  );
};

export default ListingSixIt;
