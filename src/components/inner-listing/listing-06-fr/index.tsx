import { Suspense } from "react";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeFr from "@/layouts/footers/FooterThreeFr";
import ListingSixAreaFr from "./ListingSixAreaFr";

const ListingSixFr = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderFive />
      <Suspense fallback={<div>Chargement...</div>}>
        <ListingSixAreaFr />
      </Suspense>
      <FooterThreeFr />
    </div>
  );
};

export default ListingSixFr;
