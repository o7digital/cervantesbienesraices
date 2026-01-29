import Image from "next/image";

const reasons = [
  {
    id: 1,
    icon: "/assets/images/icon/icon_40.svg",
    title: "Secure operations",
    desc: "We protect each transaction for your peace of mind.",
  },
  {
    id: 2,
    icon: "/assets/images/icon/icon_41.svg",
    title: "Verified payments",
    desc: "Your payments are processed with certified systems.",
  },
  {
    id: 3,
    icon: "/assets/images/icon/icon_42.svg",
    title: "Fast execution",
    desc: "Buy or sell your property in minutes, hassle-free.",
  },
];

const BLockFeatureTwoEn = () => {
  return (
    <div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100 mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="title-one text-center wow fadeInUp">
          <h3 className="text-white">Why choose us?</h3>
          <p className="fs-24 mt-xs text-white">Your leading real estate ally, turning houses into dreams.</p>
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

export default BLockFeatureTwoEn;
