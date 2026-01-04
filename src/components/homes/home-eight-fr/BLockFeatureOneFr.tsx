import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_76.svg";
import icon_2 from "@/assets/images/icon/icon_77.svg";
import icon_3 from "@/assets/images/icon/icon_78.svg";

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: JSX.Element;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: "2M+ Propriétés",
    desc: <>Conseil juridique pour l&apos;immobilier au Mexique, Miami et Madrid.</>,
  },
  {
    id: 2,
    icon: icon_2,
    title: "ACHAT & LOCATION",
    desc: <>Vendez votre propriété rapidement au meilleur prix du marché.</>,
  },
  {
    id: 3,
    icon: icon_3,
    title: "Processus rapide",
    desc: <>Il ne faut que quelques minutes pour acheter ou vendre avec CERVANTES REAL ESTATE.</>,
  },
];

const BLockFeatureOneFr = () => {
  return (
    <div className="block-feature-one mt-150 xl-mt-120">
      <div className="container container-large">
        <div className="title-one text-center mb-60 xl-mb-30 lg-mb-20 wow fadeInUp">
          <h3>Trouvez la maison parfaite</h3>
          <p className="fs-24">Votre partenaire immobilier de confiance dans chaque transaction.</p>
        </div>

        <div className="row gx-xl-5">
          {feature_data.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card-style-twelve text-center wow fadeInUp mt-20" data-wow-delay="0.2s">
                <div className="icon d-flex align-items-center justify-content-center m-auto tran3s rounded-circle">
                  <Image src={item.icon} alt="" />
                </div>
                <h6 className="fs-20 text-uppercase fw-bold">{item.title}</h6>
                <p className="fs-24 ps-xxl-4 pe-xxl-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BLockFeatureOneFr;
