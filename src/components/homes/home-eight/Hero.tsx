"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DropdownHomeEightEs from "@/components/search-dropdown/home-dropdown/DropdownHomeEightEs";

const Hero = () => {
  const router = useRouter();

  const [tipo, setTipo] = useState("todos");
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [ubicacion, setUbicacion] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (tipo && tipo !== "todos") params.set("tipo", tipo);
    if (min) params.set("min", min);
    if (max) params.set("max", max);
    if (ubicacion) params.set("ubicacion", ubicacion);
    const qs = params.toString();
    router.push(`/home-eight${qs ? `?${qs}` : ""}`);
  };

  const onReset = () => {
    setTipo("todos");
    setMin("");
    setMax("");
    setUbicacion("");
    router.push("/home-eight");
  };

  return (
    <div className="hero-banner-eight z-1 pt-250 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
      <div className="container position-relative">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-10 m-auto">
            <h1 className="hero-heading text-white text-center wow fadeInUp">
              CERVANTES BIENES RAICES
            </h1>
            <p
              className="fs-24 text-white text-center pt-35 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Asesoría inmobiliaria con más de 20 años de experiencia.
            </p>
          </div>
        </div>

        {/* Barra de búsqueda estilo Home Three (ES) */}
        <div className="search-wrapper-overlay">
          <div className="search-wrapper-one layout-one position-relative">
            <div className="bg-wrapper">
              <DropdownHomeEightEs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
