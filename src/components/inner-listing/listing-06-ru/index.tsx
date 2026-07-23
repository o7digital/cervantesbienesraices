import { Suspense } from "react";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeRu from "@/layouts/footers/FooterThreeRu";
import ListingSixAreaRu from "./ListingSixAreaRu";

const ListingSixRu = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderFive style="dark" />
      <Suspense fallback={<div>Загрузка...</div>}>
        <ListingSixAreaRu />
      </Suspense>
      <FooterThreeRu />
    </div>
  );
};

export default ListingSixRu;
