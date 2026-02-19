"use client";
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
              options={[
                { value: "todas", text: "Todas las ubicaciones" },
                // Aguascalientes
                { value: "aguascalientes", text: "Aguascalientes, Aguascalientes" },
                // Baja California
                { value: "mexicali", text: "Mexicali, Baja California" },
                { value: "tijuana", text: "Tijuana, Baja California" },
                // Baja California Sur
                { value: "lapaz", text: "La Paz, Baja California Sur" },
                // Campeche
                { value: "campeche", text: "Campeche, Campeche" },
                // Chiapas
                { value: "tuxtla", text: "Tuxtla Gutiérrez, Chiapas" },
                // Chihuahua
                { value: "chihuahua", text: "Chihuahua, Chihuahua" },
                // Coahuila
                { value: "saltillo", text: "Saltillo, Coahuila" },
                { value: "torreon", text: "Torreón, Coahuila" },
                // Colima
                { value: "colima", text: "Colima, Colima" },
                { value: "manzanillo", text: "Manzanillo, Colima" },
                // Durango
                { value: "durango", text: "Durango, Durango" },
                // Estado de México
                { value: "toluca", text: "Toluca, Estado de México" },
                // Guanajuato
                { value: "guanajuato", text: "Guanajuato, Guanajuato" },
                { value: "leon", text: "León, Guanajuato" },
                // Guerrero
                { value: "ixtapa", text: "Ixtapa Zihuatanejo, Guerrero" },
                // Hidalgo
                { value: "pachuca", text: "Pachuca, Hidalgo" },
                // Jalisco
                { value: "guadalajara", text: "Guadalajara, Jalisco" },
                // Michoacán
                { value: "morelia", text: "Morelia, Michoacán" },
                // Morelos
                { value: "cuernavaca", text: "Cuernavaca, Morelos" },
                // Nayarit
                { value: "tepic", text: "Tepic, Nayarit" },
                // Nuevo León
                { value: "monterrey", text: "Monterrey, Nuevo León" },
                // Oaxaca
                { value: "oaxaca", text: "Oaxaca de Juárez, Oaxaca" },
                // Puebla
                { value: "puebla", text: "Puebla, Puebla" },
                // Querétaro
                { value: "queretaro", text: "Querétaro, Querétaro" },
                { value: "queretaro2", text: "San Juan del Río, Querétaro" },
                // Quintana Roo
                { value: "cancun", text: "Cancún, Quintana Roo" },
                { value: "chetumal", text: "Chetumal, Quintana Roo" },
                // San Luis Potosí
                { value: "slp", text: "San Luis Potosí, San Luis Potosí" },
                // Sinaloa
                { value: "culiacan", text: "Culiacán, Sinaloa" },
                // Sonora
                { value: "hermosillo", text: "Hermosillo, Sonora" },
                // Tabasco
                { value: "villahermosa", text: "Villahermosa, Tabasco" },
                // Tlaxcala
                { value: "tlaxcala", text: "Tlaxcala, Tlaxcala" },
                // Veracruz
                { value: "veracruz", text: "Veracruz, Veracruz" },
                { value: "xalapa", text: "Xalapa, Veracruz" },
                // Yucatán
                { value: "merida", text: "Mérida, Yucatán" },
                // Zacatecas
                { value: "zacatecas", text: "Zacatecas, Zacatecas" },
                // Ciudad de México
                { value: "cdmx", text: "CDMX, México" },
                // Internacional
                { value: "madrid", text: "Madrid, España" },
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
