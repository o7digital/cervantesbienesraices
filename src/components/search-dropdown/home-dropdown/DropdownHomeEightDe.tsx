"use client";
import NiceSelect from "@/ui/NiceSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DropdownHomeEightDe = () => {
  const router = useRouter();

  const [type, setType] = useState("buy_apartment");
  const [location, setLocation] = useState("cdmx");
  const [range, setRange] = useState("1");

  const handleType = (e: any) => setType(e.target.value);
  const handleLocation = (e: any) => setLocation(e.target.value);
  const handleRange = (e: any) => setRange(e.target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ tipo: type, ubicacion: location, rango: range });
    const href = `/de/listing_06?${params.toString()}`;

    if (typeof window !== "undefined") {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row gx-0 align-items-center">
        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Ich möchte</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "buy_apartment", text: "Wohnung kaufen" },
                { value: "buy_house", text: "Haus kaufen" },
                { value: "rent_apartment", text: "Wohnung mieten" },
                { value: "rent_house", text: "Haus mieten" },
              ]}
              defaultCurrent={0}
              onChange={handleType}
              name="type"
              placeholder="Auswählen"
            />
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Ort</div>
            <NiceSelect
              className="nice-select location fw-normal"
              options={[
                { value: "cdmx", text: "Mexiko-Stadt, Mexiko" },
                { value: "guadalajara", text: "Guadalajara, Jalisco" },
                { value: "monterrey", text: "Monterrey, Nuevo León" },
                { value: "puebla", text: "Puebla, Puebla" },
                { value: "toluca", text: "Toluca, Bundesstaat Mexiko" },
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
                { value: "queretaro2", text: "San Juan del Río, Querétaro" },
                { value: "madrid", text: "Madrid, Spanien" },
              ]}
              defaultCurrent={0}
              onChange={handleLocation}
              name="location"
              placeholder="Stadt wählen"
            />
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left border-lg-0">
            <div className="label">Preisspanne</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "1", text: "$10,000 - $200,000" },
                { value: "2", text: "$200,000 - $500,000" },
                { value: "3", text: "$500,000 - $1,000,000" },
              ]}
              defaultCurrent={0}
              onChange={handleRange}
              name="range"
              placeholder="Preisspanne"
            />
          </div>
        </div>

        <div className="col-xl-3">
          <div className="input-box-one lg-mt-10">
            <button className="fw-500 tran3s w-100 search-btn-three">Suchen</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownHomeEightDe;
