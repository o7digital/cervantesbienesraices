import Image from "next/image";

const reasons = [
  {
    id: 1,
    icon: "/assets/images/icon/icon_40.svg",
    title: "Sichere Abläufe",
    desc: "Wir schützen jede Transaktion für Ihre Sicherheit.",
  },
  {
    id: 2,
    icon: "/assets/images/icon/icon_41.svg",
    title: "Geprüfte Zahlungen",
    desc: "Ihre Zahlungen laufen über zertifizierte Systeme.",
  },
  {
    id: 3,
    icon: "/assets/images/icon/icon_42.svg",
    title: "Schnelle Umsetzung",
    desc: "Kaufen oder verkaufen Sie Ihre Immobilie in Minuten – ohne Stress.",
  },
];

const BLockFeatureTwoDe = () => {
  return (
    <div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100 mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="title-one text-center wow fadeInUp">
          <h3 className="text-white">Warum wir?</h3>
          <p className="fs-24 mt-xs text-white">Ihr starker Immobilienpartner – wir machen aus Häusern echte Zuhause.</p>
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

export default BLockFeatureTwoDe;
