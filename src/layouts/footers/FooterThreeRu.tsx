"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape_1 from "@/assets/images/shape/shape_52.svg"

const FooterThreeRu = () => {
   return (
      <div className="footer-three">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 mb-40 lg-mb-60">
                     <div className="footer-intro pe-xxl-5 pe-xl-3">
                        <div className="logo mb-15">
                           <Link href="/ru">
                              <Image src={footerLogo} alt="Cervantes Недвижимость" />
                           </Link>
                        </div>
                        <p className="mb-45 lg-mb-30">
                           Cervantes Недвижимость специализируется на продаже ранчо по всей Мексике.<br />
                           Cerrada de Bezares 133, Col. Lomas de Bezares, <br />
                           CP 11910, Miguel Hidalgo, CDMX.
                        </p>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                        </ul>
                        <Image src={footerShape_1} alt="" className="lazy-img ms-auto d-none d-xl-block" />
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                     <div className="footer-nav">
                        <h5 className="footer-title">Рассылка</h5>
                        <p className="mb-20">Подпишитесь, чтобы получать важные новости.</p>
                        <div className="email-input-group d-flex">
                           <input type="email" placeholder="Введите ваш email" />
                           <button type="submit" className="btn-four fw-500 text-uppercase">Отправить</button>
                        </div>
                        <div className="fs-14 mt-10">Мы отправляем только полезную и актуальную информацию.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bottom-footer">
            <div className="container text-center">
               <p className="seo-footer">
                  элитная недвижимость Мехико · премиальное агентство недвижимости Мехико · профессиональная консультация по недвижимости CDMX · премиальный консультант по недвижимости Мехико · премиальная недвижимость на продажу CDMX · элитные квартиры в Мехико · эксклюзивная недвижимость в Мехико · элитная недвижимость Поланко · премиальные квартиры Поланко · дома на продажу Поланко CDMX · премиальная недвижимость Кондеса CDMX · элитные квартиры Кондеса · элитная недвижимость Рома Норте · премиальная оценка недвижимости CDMX · премиальные инвестиции в недвижимость Мехико
               </p>
               <p className="m-0">© 2025 CERVANTES REAL ESTATE. Все права защищены.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterThreeRu
