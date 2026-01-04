import Image from "next/image";

const reasons = [
  {
    id: 1,
    icon: "/assets/images/icon/icon_40.svg",
    title: "Operazioni sicure",
    desc: "Proteggiamo ogni transazione per la tua tranquillità.",
  },
  {
    id: 2,
    icon: "/assets/images/icon/icon_41.svg",
    title: "Pagamenti verificati",
    desc: "I tuoi pagamenti sono elaborati con sistemi certificati.",
  },
  {
    id: 3,
    icon: "/assets/images/icon/icon_42.svg",
    title: "Esecuzione rapida",
    desc: "Acquista o vendi la tua proprietà in pochi minuti, senza problemi.",
  },
];

const BLockFeatureTwoIt = () => {
  return (
    <div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100 mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="title-one text-center wow fadeInUp">
          <h3 className="text-white">Perché sceglierci?</h3>
          <p className="fs-24 mt-xs text-white">Il tuo principale alleato immobiliare, trasformando le case in sogni.</p>
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

export default BLockFeatureTwoIt;
