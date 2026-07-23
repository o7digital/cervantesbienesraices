import Image from "next/image";

const reasons = [
  {
    id: 1,
    icon: "/assets/images/icon/icon_40.svg",
    title: "Безопасные сделки",
    desc: "We protect each transaction for your peace of mind.",
  },
  {
    id: 2,
    icon: "/assets/images/icon/icon_41.svg",
    title: "Проверенные платежи",
    desc: "Your payments are processed with certified systems.",
  },
  {
    id: 3,
    icon: "/assets/images/icon/icon_42.svg",
    title: "Быстрое сопровождение",
    desc: "Buy or sell your property in minutes, hassle-free.",
  },
];

const BLockFeatureTwoRu = () => {
  return (
    <div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100 mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="title-one text-center wow fadeInUp">
          <h3 className="text-white">Почему выбирают нас?</h3>
          <p className="fs-24 mt-xs text-white">Ваш надежный союзник в недвижимости: превращаем дома в решения для жизни и инвестиций.</p>
        </div>

        <div className="card-bg-wrapper wow fadeInUp mt-70 lg-mt-50">
          <div className="row">
            {reasons.map((item) => (
              <div key={item.id} className="col-lg-4">
                <div className="card-style-eight mt-45 wow fadeInUp">
                  <div className="d-flex align-items-start pe-xxl-5">
                    <Image src={item.icon} alt="" width={60} height={60} className="lazy-img icon" />
                    <div className="text">
                      <h5 className="text-white">{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLockFeatureTwoRu;
