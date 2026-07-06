import Image from "next/image"
import Link from "next/link"

import breadcrumbImg from "@/assets/images/assets/ils_07.svg"

interface BreadcrumbOneProps {
   title: string;
   sub_title: string;
   style?: boolean;
   link?: string;
   link_title?: string;
   backgroundImage?: string;
}

const BreadcrumbOne = ({ title, sub_title, style, link = "/", link_title, backgroundImage }: BreadcrumbOneProps) => {
   return (
      <div className={`inner-banner-one inner-banner text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative overflow-hidden ${backgroundImage ? "" : "bg-pink"}`}>
         {backgroundImage && (
            <>
               <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center 52%", zIndex: -2 }}
               />
               <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.48)", zIndex: -1 }} />
            </>
         )}
         <div className={`container position-relative ${backgroundImage ? "text-white" : ""}`}>
            <h3 className={`mb-35 xl-mb-20 pt-15 ${backgroundImage ? "text-white" : ""}`}>{title}</h3>
            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
               <li><Link href="/">Home</Link></li>
               <li>/</li>
               {style && <>
                  <li><Link href={link}>{link_title}</Link></li>
                  <li>/</li>
               </>}
               <li>{sub_title}</li>
            </ul>
         </div>
         {!backgroundImage && <Image src={breadcrumbImg} alt="" className="lazy-img shapes w-100 illustration" />}
      </div>
   )
}

export default BreadcrumbOne;
