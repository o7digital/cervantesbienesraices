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
      title: (<>Kunde</>),
      desc: (<>Dank Cervantes Real Estate habe ich ein Haus verkauft, das 2 Jahre auf dem Markt war.</>),
   },
   {
      id: 2,
      avatar: avatar_2,
      title: (<>Kunde</>),
      desc: (<>Sie zeigten uns mehrere Apartments, bis wir das ideale fanden.</>),
   },
   {
      id: 3,
      avatar: avatar_3,
      title: (<>Kunde</>),
      desc: (<>Javier Cervantes begleitete mich durch den gesamten Verkaufsprozess und stimmte alles mit dem Notar ab.</>),
   },
   {
      id: 4,
      avatar: avatar_2,
      title: (<>Kunde</>),
      desc: (<>Julio Cervantes fand genau das Apartment, das meinen Vorgaben entsprach.</>),
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

const FeedbackDe = () => {
   return (
      <div className="feedback-section-six bg-pink-two position-relative z-1 mt-170 xl-mt-120 pt-110 xl-pt-80 pb-120 xl-pb-80">
         <div className="container container-large">
            <div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
               <h3>Kundenstimmen</h3>
               <p className="fs-20 mt-xs">Die Zufriedenheit unserer Kunden spricht für sich. Lesen Sie ihre Erfahrungen.</p>
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

export default FeedbackDe
