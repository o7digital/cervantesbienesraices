"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import UseSticky from "@/hooks/UseSticky"
import LoginModal from "@/modals/LoginModal"
import useLanguage from "@/hooks/useLanguage"

const HeaderFive = ({ style }: any) => {
   const { sticky } = UseSticky();
   const { lang, buildPath, languages } = useLanguage();
   const useDarkMenu = style === "dark";
   const homeHref = lang === "en"
      ? "/en"
      : lang === "fr"
      ? "/fr"
      : lang === "it"
      ? "/it"
      : lang === "de"
      ? "/de"
      : "/";

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-seven ${useDarkMenu ? "" : "white-vr"} sticky-menu ${sticky ? "fixed" : ""}`}>
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     {/* LOGO */}
                     <div className="logo order-lg-0">
                        <Link href={homeHref} className="d-flex align-items-center">
                           <Image 
                              src="/images/logo.png"
                              alt="LC Inmobiliaria" 
                              width={140} 
                              height={40} 
                              priority 
                           />
                        </Link>
                     </div>

                     {/* BOTONES DERECHA */}
                     <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           <li className="me-3">
                              <div className={`d-flex align-items-center gap-2 fw-500 ${useDarkMenu ? "text-dark" : "text-white"}`}>
                                 {languages.map((code) => (
                                    <Link
                                       key={code}
                                       href={buildPath(code)}
                                       className={`btn-link ${lang === code ? "text-decoration-underline" : ""}`}
                                    >
                                       {code.toUpperCase()}
                                    </Link>
                                 ))}
                              </div>
                           </li>
                           <li>
                              <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one">
                                 <i className="fa-regular fa-lock"></i> <span>Login</span>
                              </Link>
                           </li>
                           {/* 🚫 Eliminado el botón Add Listing */}
                        </ul>
                     </div>

                     {/* MENÚ */}
                     <nav className="navbar navbar-expand-lg p0 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>
         <LoginModal />
      </>
   )
}

export default HeaderFive
