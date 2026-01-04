import Image from "next/image";

const reasons = [
  {
    id: 1,
    icon: "/assets/images/icon/icon_40.svg",
    title: "Opérations sécurisées",
    desc: "Nous protégeons chaque transaction pour votre tranquillité d'esprit.",
  },
  {
    id: 2,
    icon: "/assets/images/icon/icon_41.svg",
    title: "Paiements vérifiés",
    desc: "Vos paiements sont traités avec des systèmes certifiés.",
  },
  {
    id: 3,
    icon: "/assets/images/icon/icon_42.svg",
    title: "Exécution rapide",
    desc: "Achetez ou vendez votre propriété en quelques minutes, sans tracas.",
  },
];

const BLockFeatureTwoFr = () => {
  return (
    <div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100 mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="title-one text-center wow fadeInUp">
          <h3 className="text-white">Pourquoi nous choisir ?</h3>
          <p className="fs-24 mt-xs text-white">Votre allié immobilier de premier plan, transformant les maisons en rêves.</p>
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

export default BLockFeatureTwoFr;
