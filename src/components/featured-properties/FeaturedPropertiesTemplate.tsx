"use client";

import Image from "next/image";
import Link from "next/link";
import propertyData from "@/data/home-data/PropertyData";
import titleShape from "@/assets/images/shape/title_shape_03.svg";

const FeaturedPropertiesTemplate = () => (
  <div className="property-listing-one bg-pink-two pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100 mt-150 xl-mt-120">
    <div className="container">
      <div className="position-relative">
        <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
          <h3>Destacadas <span>Propiedades <Image src={titleShape} alt="" className="lazy-img" /></span></h3>
          <p className="fs-22 mt-xs">Explora las propiedades más recientes y destacadas en venta.</p>
        </div>

        <div className="row gx-xxl-5">
          {propertyData.filter((item) => item.page === "home_1").map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay={item.data_delay_time}>
              <div className="listing-card-one border-25 h-100 w-100">
                <div className="img-gallery p-15">
                  <div className="position-relative border-25 overflow-hidden">
                    <div className={`tag border-25 ${item.tag_bg ?? ""}`}>{item.tag}</div>
                    <div id={`carousel${item.carousel}`} className="carousel slide">
                      <div className="carousel-indicators">
                        {item.carousel_thumb.map((_, index) => (
                          <button key={index} type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`} />
                        ))}
                      </div>
                      <div className="carousel-inner">
                        {item.carousel_thumb.map((photo, index) => (
                          <div key={index} className={`carousel-item ${photo.active ?? ""}`} data-bs-interval="1000000">
                            <Link href="/listing_details_02" className="d-block"><Image src={photo.img} className="w-100" alt={item.title} /></Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="property-info p-25">
                  <Link href="/listing_details_02" className="title tran3s">{item.title}</Link>
                  <div className="address">{item.address}</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                    {item.property_info.map((info, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <Image src={info.icon} alt="" className="lazy-img icon me-2" />
                        <span className="fs-16">{info.total_feature} {info.feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      ${item.price.toLocaleString(undefined, { minimumFractionDigits: item.price_text ? 0 : 2, maximumFractionDigits: 2 })}{item.price_text && <>/<sub>m</sub></>}
                    </strong>
                    <Link href="/listing_details_02" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></Link>
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

export default FeaturedPropertiesTemplate;
