"use client"
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";

import avatar_1 from "@/assets/images/media/img_01.jpg"
import avatar_2 from "@/assets/images/media/img_02.jpg"
import avatar_3 from "@/assets/images/media/img_03.jpg"
import icon from "@/assets/images/icon/icon_29.svg"

interface DataType {
   id: number;
   avatar: StaticImageData;
   title: JSX.Element;
   desc: JSX.Element;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      avatar: avatar_1,
      title: (<>Client</>),
      desc: (<>Thanks to Cervantes Real Estate I sold a home that had been on the market for 2 years.</>),
   },
   {
      id: 2,
      avatar: avatar_2,
      title: (<>Client</>),
      desc: (<>They showed us several apartments until we found the one we loved the most.</>),
   },
   {
      id: 3,
      avatar: avatar_3,
      title: (<>Client</>),
      desc: (<>Javier Cervantes guided me through the entire sale process and coordinated everything with the notary.</>),
   },
   {
      id: 4,
      avatar: avatar_2,
      title: (<>Client</>),
      desc: (<>Julio Cervantes found the apartment I live in now, exactly with the specs I asked for.</>),
   },
];

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

const FeedbackEn = () => {
   return (
      <div className="feedback-section-six bg-pink-two position-relative z-1 mt-170 xl-mt-120 pt-110 xl-pt-80 pb-120 xl-pb-80">
         <div className="container container-large">
            <div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
               <h3>Client Testimonials</h3>
               <p className="fs-20 mt-xs">Our clients’ satisfaction speaks for itself. Read their stories.</p>
            </div>
         </div>
         <div className="slider-left">
            <Slider {...setting} className="feedback-slider-four">
               {feedback_data.map((item) => (
                  <div key={item.id} className="item">
                     <div className="feedback-block-six rounded-4">
                        <div className="d-flex justify-content-between align-items-center">
                           <ul className="rating style-none d-flex">
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                           </ul>
                           <Image src={icon} alt="" className="icon" />
                        </div>
                        <blockquote>{item.desc}</blockquote>
                        <div className="d-flex align-items-center justify-content-between">
                           <h6 className="fs-20 m0">{item.title}</h6>
                           <Image src={item.avatar} alt="" className="rounded-circle avatar" />
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>

         <div className="slider-right mt-50">
            <Slider {...setting} className="feedback-slider-four">
               {feedback_data.map((item) => (
                  <div key={item.id} className="item">
                     <div className="feedback-block-six rounded-4">
                        <div className="d-flex justify-content-between align-items-center">
                           <ul className="rating style-none d-flex">
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                              <li><i className="fa-sharp fa-solid fa-star"></i></li>
                           </ul>
                           <Image src={icon} alt="" className="icon" />
                        </div>
                        <blockquote>{item.desc}</blockquote>
                        <div className="d-flex align-items-center justify-content-between">
                           <h6 className="fs-20 m0">{item.title}</h6>
                           <Image src={item.avatar} alt="" className="rounded-circle avatar" />
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default FeedbackEn
