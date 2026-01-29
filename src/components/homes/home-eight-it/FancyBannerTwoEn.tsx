import Image from "next/image";
import fancyShape from "@/assets/images/shape/shape_30.svg";
import Link from "next/link";

const FancyBannerTwoEn = () => {
  return (
    <div className="fancy-banner-five position-relative z-1 pt-90 lg-pt-70 pb-110 lg-pb-70 mt-170 xl-mt-120" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 m-auto text-center">
            <div className="title-one mb-40 lg-mb-20">
              <h2 className="font-garamond fs-xl text-white">
                Hai una domanda? <br /> Contattaci.
              </h2>
            </div>
            <Link href="/contact" className="btn-nine text-uppercase">
              <span>Invia messaggio</span>
            </Link>
          </div>
        </div>
      </div>
      <Image src={fancyShape} alt="" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default FancyBannerTwoEn;
