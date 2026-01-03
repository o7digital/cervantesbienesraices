import { Suspense } from "react";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeEn from "@/layouts/footers/FooterThreeEn";
import ListingSixAreaEn from "./ListingSixAreaEn";

const ListingSixEn = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderFive />
      <Suspense fallback={<div>Loading...</div>}>
        <ListingSixAreaEn />
      </Suspense>
      <FooterThreeEn />
    </div>
  );
};

export default ListingSixEn;
