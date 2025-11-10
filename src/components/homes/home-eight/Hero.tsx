"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

        {/* Filtros en overlay, estilo Home Eight */}
        <div className="search-wrapper-overlay">
          <div className="search-wrapper-one layout-one position-relative">
            <div className="bg-wrapper border-0 rounded-0">
              <form onSubmit={onSubmit}>
                <div className="row gx-0 align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-3">
                    <div className="input-box-one border-left">
                      <div className="label">Tipo</div>
                      <select
                        className="form-select nice-select fw-normal"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        aria-label="Selecciona el tipo"
                      >
                        <option value="todos">Todos</option>
                        <option value="venta">Venta</option>
                        <option value="renta">Renta</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xxl-2 col-xl-2 col-lg-2">
                    <div className="input-box-one border-left">
                      <div className="label">Monto mín.</div>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="form-control"
                        placeholder="Ej. 5000000"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-2 col-xl-2 col-lg-2">
                    <div className="input-box-one border-left">
                      <div className="label">Monto máx.</div>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="form-control"
                        placeholder="Ej. 15000000"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3">
                    <div className="input-box-one border-left">
                      <div className="label">Ubicación</div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Teclea la ubicación o deja vacío"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-2 col-xl-2 col-lg-2">
                    <div className="input-box-one md-mt-10 d-flex gap-2 justify-content-center justify-content-xxl-end p-3 p-lg-0">
                      <button type="submit" className="search-btn-four">
                        <span>Buscar</span>
                        <i className="fa-light fa-magnifying-glass"></i>
                      </button>
                      <button
                        type="button"
                        className="search-modal-btn"
                        onClick={onReset}
                      >
                        Limpiar filtros
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
