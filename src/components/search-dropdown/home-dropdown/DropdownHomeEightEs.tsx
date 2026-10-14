"use client";
import { locationOptions } from "@/data/searchLocations";
import NiceSelect from "@/ui/NiceSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DropdownHomeEightEs = () => {
  const router = useRouter();

  const [tipo, setTipo] = useState("todos");
  const [ubicacion, setUbicacion] = useState("todas");
  const [rango, setRango] = useState("todos");

  const handleTipo = (e: any) => setTipo(e.target.value);
  const handleUbicacion = (e: any) => setUbicacion(e.target.value);
  const handleRango = (e: any) => setRango(e.target.value);

  // Déterminer si c'est une location ou une vente
  const isRental = tipo === 'rentar_departamento' || tipo === 'rentar_casa';
  
  // Options de prix pour vente
  const ventaPriceOptions = [
    { value: "todos", text: "Todos los precios" },
    { value: "1", text: "$3,000,000 - $10,000,000" },
    { value: "2", text: "$10,000,000 - $30,000,000" },
    { value: "3", text: "$30,000,000+" },
  ];
  
  // Options de prix pour location
  const rentaPriceOptions = [
    { value: "todos", text: "Todos los precios" },
    { value: "1", text: "$25,000 - $50,000" },
    { value: "2", text: "$50,000 - $100,000" },
    { value: "3", text: "$100,000+" },
  ];
  
  const priceOptions = isRental ? rentaPriceOptions : ventaPriceOptions;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (tipo && tipo !== 'todos') params.set('tipo', tipo);
    if (ubicacion && ubicacion !== "todas") params.set('ubicacion', ubicacion);
    if (rango && rango !== "todos") params.set('rango', rango);
    const qs = params.toString();
    const href = `https://www.cervantesbienesraices.com/listing_06${qs ? `?${qs}` : ''}`;
    if (typeof window !== 'undefined') {
      window.location.href = href;
    } else {
      router.push(`/listing_06${qs ? `?${qs}` : ''}`);
    }
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
                { value: "todos", text: "Todos" },
                { value: "comprar_departamento", text: "Comprar un Departamento" },
                { value: "comprar_casa", text: "Comprar una Casa" },
                { value: "rentar_departamento", text: "Rentar un Departamento" },
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
              options={[{ value: "todas", text: "Todas las ubicaciones" }, ...locationOptions]}
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
              options={priceOptions}
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
