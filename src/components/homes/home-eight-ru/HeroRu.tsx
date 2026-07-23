"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DropdownHomeEightRu from "@/components/search-dropdown/home-dropdown/DropdownHomeEightRu";
import Slider from "react-slick";

const sliderSettings = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};

const HeroRu = () => {
  const router = useRouter();

  const [type, setType] = useState("all");
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [location, setLocation] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type && type !== "all") params.set("type", type);
    if (min) params.set("min", min);
    if (max) params.set("max", max);
    if (location) params.set("location", location);
    const qs = params.toString();
    router.push(`/ru${qs ? `?${qs}` : ""}`);
  };

  const onReset = () => {
    setType("all");
    setMin("");
    setMax("");
    setLocation("");
    router.push("/ru");
  };

  return (
    <div className="hero-banner-eight z-1 pt-250 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
      <Slider {...(sliderSettings as any)} className="hero-slider-one m0">
        <div className="item m0">
          <div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/img_26.jpg)` }}></div>
        </div>
        <div className="item m0">
          <div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/img_27.jpg)` }}></div>
        </div>
        <div className="item m0">
          <div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/img_28.jpg)` }}></div>
        </div>
      </Slider>
      <div className="container position-relative">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-10 m-auto">
            <h1 className="hero-heading text-white text-center wow fadeInUp">
              Недвижимость в Мексике: покупка, продажа и аренда
            </h1>
            <p className="fs-24 text-white text-center pt-35 wow fadeInUp" data-wow-delay="0.1s">
              Cervantes Bienes Raices специализируется на премиальной недвижимости и продаже ранчо по всей Мексике, опираясь на более чем 20 лет опыта.
            </p>
          </div>
        </div>

        <div className="search-wrapper-overlay">
          <div className="search-wrapper-one layout-one position-relative">
            <div className="bg-wrapper">
              <DropdownHomeEightRu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRu;
