import Image from "next/image";

const FancyBannerOneFr = () => {
  return (
    <div className="fancy-banner-nine mt-110 lg-mt-80">
      <div className="container container-large">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="d-flex align-items-center md-mb-30 gap-4 flex-wrap">
              <div className="profile-wrapper">
                <Image
                  src="/assets/images/icon/fotojavier.png"
                  alt="Javier Cervantes"
                  width={260}
                  height={293}
                  className="profile-photo"
                  priority
                />
              </div>
              <div className="ps-3 text" style={{ width: "auto", flex: "1 1 240px" }}>
                <h6 className="fs-22">Javier Cervantes</h6>
                <span className="fs-20">Fondateur & PDG de CERVANTES REAL ESTATE</span>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-8">
            <blockquote>&quot;Nous suivons un processus rigoureux pour offrir les meilleures opportunités à nos investisseurs.&quot;</blockquote>
          </div>
        </div>

        <div className="fact-wrapper d-flex flex-wrap mt-60 md-mt-40">
          <div className="fact-box">
            <div className="text-meta text-sm-start d-inline-block">
              <div className="numb">300</div>
              <span>Terrains analysés</span>
            </div>
          </div>
          <div className="fact-box">
            <div className="text-meta text-sm-start d-inline-block">
              <div className="numb">0.2%</div>
              <span>Ont passé l&apos;évaluation initiale</span>
            </div>
          </div>
          <div className="fact-box">
            <div className="text-meta text-sm-start d-inline-block">
              <div className="numb">15%</div>
              <span>Approuvés par le comité</span>
            </div>
          </div>
          <div className="fact-box">
            <div className="text-meta text-sm-start d-inline-block">
              <div className="numb">5%</div>
              <span>Acquis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerOneFr;
