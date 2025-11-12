"use client";
import NiceSelect from "@/ui/NiceSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DropdownHomeEightEs = () => {
  const router = useRouter();

  const [tipo, setTipo] = useState("todos");
  const [ubicacion, setUbicacion] = useState("cdmx");
  const [rango, setRango] = useState("1");

  const handleTipo = (e: any) => setTipo(e.target.value);
  const handleUbicacion = (e: any) => setUbicacion(e.target.value);
  const handleRango = (e: any) => setRango(e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (tipo && tipo !== 'todos') params.set('tipo', tipo);
    if (ubicacion) params.set('ubicacion', ubicacion);
    if (rango) params.set('rango', rango);
    const qs = params.toString();
    const href = `https://cervantesbienesraices.vercel.app/listing_06${qs ? `?${qs}` : ''}`;
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
                // México
                { value: "cdmx", text: "CDMX, México" },
                { value: "guadalajara", text: "Guadalajara, Jalisco" },
                { value: "monterrey", text: "Monterrey, Nuevo León" },
                { value: "puebla", text: "Puebla, Puebla" },
                { value: "toluca", text: "Toluca, Estado de México" },
                { value: "queretaro", text: "Querétaro, Querétaro" },
                { value: "morelia", text: "Morelia, Michoacán" },
                { value: "merida", text: "Mérida, Yucatán" },
                { value: "cancun", text: "Cancún, Quintana Roo" },
                { value: "chetumal", text: "Chetumal, Quintana Roo" },
                { value: "campeche", text: "Campeche, Campeche" },
                { value: "villahermosa", text: "Villahermosa, Tabasco" },
                { value: "tuxtla", text: "Tuxtla Gutiérrez, Chiapas" },
                { value: "oaxaca", text: "Oaxaca de Juárez, Oaxaca" },
                { value: "xalapa", text: "Xalapa, Veracruz" },
                { value: "veracruz", text: "Veracruz, Veracruz" },
                { value: "hermosillo", text: "Hermosillo, Sonora" },
                { value: "chihuahua", text: "Chihuahua, Chihuahua" },
                { value: "culiacan", text: "Culiacán, Sinaloa" },
                { value: "tepic", text: "Tepic, Nayarit" },
                { value: "zacatecas", text: "Zacatecas, Zacatecas" },
                { value: "aguascalientes", text: "Aguascalientes, Aguascalientes" },
                { value: "slp", text: "San Luis Potosí, San Luis Potosí" },
                { value: "saltillo", text: "Saltillo, Coahuila" },
                { value: "torreon", text: "Torreón, Coahuila" },
                { value: "durango", text: "Durango, Durango" },
                { value: "lapaz", text: "La Paz, Baja California Sur" },
                { value: "mexicali", text: "Mexicali, Baja California" },
                { value: "tijuana", text: "Tijuana, Baja California" },
                { value: "colima", text: "Colima, Colima" },
                { value: "manzanillo", text: "Manzanillo, Colima" },
                { value: "guanajuato", text: "Guanajuato, Guanajuato" },
                { value: "leon", text: "León, Guanajuato" },
                { value: "pachuca", text: "Pachuca, Hidalgo" },
                { value: "tlaxcala", text: "Tlaxcala, Tlaxcala" },
                { value: "cuernavaca", text: "Cuernavaca, Morelos" },
                { value: "ixtapa", text: "Ixtapa Zihuatanejo, Guerrero" },
                { value: "queretaro2", text: "San Juan del Río, Querétaro" },
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
              options={[
                { value: "1", text: "$3,000,000 - $10,000,000" },
                { value: "2", text: "$10,000,000 - $30,000,000" },
                { value: "3", text: "$30,000,000+" },
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
