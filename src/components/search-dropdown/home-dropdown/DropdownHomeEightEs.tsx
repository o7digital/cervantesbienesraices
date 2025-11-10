"use client";
import NiceSelect from "@/ui/NiceSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DropdownHomeEightEs = () => {
  const router = useRouter();

  const [tipo, setTipo] = useState("comprar_departamento");
  const [ubicacion, setUbicacion] = useState("berlin");
  const [rango, setRango] = useState("1");

  const handleTipo = (e: any) => setTipo(e.target.value);
  const handleUbicacion = (e: any) => setUbicacion(e.target.value);
  const handleRango = (e: any) => setRango(e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ tipo, ubicacion, rango });
    router.push(`/home-eight?${params.toString()}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row gx-0 align-items-center">
        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Estoy buscando</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "comprar_departamento", text: "Comprar un Departamento" },
                { value: "comprar_casa", text: "Comprar una Casa" },
                { value: "rentar_apartamento", text: "Rentar un Apartamento" },
                { value: "rentar_casa", text: "Rentar una Casa" },
              ]}
              defaultCurrent={0}
              onChange={handleTipo}
              name="tipo"
              placeholder="Selecciona"
            />
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Ubicación</div>
            <NiceSelect
              className="nice-select location fw-normal"
              options={[
                { value: "berlin", text: "Berlin, Germany" },
                { value: "acapulco", text: "Acapulco, Mexico" },
                { value: "cannes", text: "Cannes, France" },
                { value: "delhi", text: "Delhi, India" },
                { value: "giza", text: "Giza, Egypt" },
                { value: "havana", text: "Havana, Cuba" },
              ]}
              defaultCurrent={0}
              onChange={handleUbicacion}
              name="ubicacion"
              placeholder="Elige ubicación"
            />
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left border-lg-0">
            <div className="label">Rango de Precios</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "1", text: "$10,000 - $200,000" },
                { value: "2", text: "$200,000 - $500,000" },
                { value: "3", text: "$500,000 - $1,000,000" },
              ]}
              defaultCurrent={0}
              onChange={handleRango}
              name="rango"
              placeholder="Elige rango"
            />
          </div>
        </div>

        <div className="col-xl-3">
          <div className="input-box-one lg-mt-10">
            <button className="fw-500 tran3s w-100 search-btn-three">Buscar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownHomeEightEs;

