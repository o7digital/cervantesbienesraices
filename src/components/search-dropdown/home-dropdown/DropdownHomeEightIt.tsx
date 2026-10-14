"use client";
import { locationOptions } from "@/data/searchLocations";
import NiceSelect from "@/ui/NiceSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DropdownHomeEightIt = () => {
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
    const href = `/it/listing_06?${params.toString()}`;

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
            <div className="label">Sto cercando</div>
            <NiceSelect
              className="nice-select fw-normal"
              options={[
                { value: "buy_apartment", text: "Comprare un appartamento" },
                { value: "buy_house", text: "Comprare una casa" },
                { value: "rent_apartment", text: "Affittare un appartamento" },
                { value: "rent_house", text: "Affittare una casa" },
              ]}
              defaultCurrent={0}
              onChange={handleType}
              name="type"
              placeholder="Select"
            />
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Località</div>
            <NiceSelect
              className="nice-select location fw-normal"
              options={[{ value: "todas", text: "Tutte le località" }, ...locationOptions]}
              defaultCurrent={0}
              onChange={handleLocation}
              name="location"
              placeholder="Choose a city"
            />
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left border-lg-0">
            <div className="label">Budget</div>
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
              placeholder="Select range"
            />
          </div>
        </div>

        <div className="col-xl-3">
          <div className="input-box-one lg-mt-10">
            <button className="fw-500 tran3s w-100 search-btn-three">Cerca</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownHomeEightIt;
