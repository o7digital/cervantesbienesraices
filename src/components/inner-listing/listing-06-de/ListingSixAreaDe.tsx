"use client";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DropdownHomeEightDe from "@/components/search-dropdown/home-dropdown/DropdownHomeEightDe";
import Link from "next/link";

const formatLocation = (location: any) => {
  if (!location) return "Standort nicht verfügbar";

  if (typeof location === "string") {
    return location;
  }

  const parts = [
    location?.name,
    location?.street,
    location?.exterior_number,
    location?.interior_number,
    location?.city,
    location?.state,
    location?.country,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Standort nicht verfügbar";
};

const normalizeText = (value?: string) => {
  if (!value) return "";
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
};

const mapOperationType = (operationType?: string) => {
  if (!operationType) return "";
  const normalized = operationType.toLowerCase();
  if (normalized === "sale") return "venta";
  if (normalized === "rent") return "renta";
  return normalized;
};

const getLocationLabel = (location: any) => {
  if (!location) return "";
  const parts = [location.city, location.state].filter(Boolean);
  if (parts.length) return parts.join(", ");
  if (location.name) return location.name;
  return "";
};

const extractOperationAmounts = (operations: any[] | undefined) => {
  if (!Array.isArray(operations)) return [];
  return operations
    .map((operation) => {
      if (typeof operation?.amount === "number") return operation.amount;
      if (typeof operation?.amount === "string") {
        const parsed = Number(operation.amount);
        if (!Number.isNaN(parsed)) return parsed;
      }
      if (typeof operation?.formatted_amount === "string") {
        const cleaned = operation.formatted_amount.replace(/[^\d.,]/g, "").replace(/,/g, "");
        const parsed = Number(cleaned);
        if (!Number.isNaN(parsed)) return parsed;
      }
      return null;
    })
    .filter((value): value is number => typeof value === "number" && !Number.isNaN(value));
};

const initialFilterState = {
  type: "",
  location: "",
  minPrice: "",
  maxPrice: "",
};

const ListingSixAreaDe = () => {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusView, setStatusView] = useState<"published" | "archived">("published");
  const [inputs, setInputs] = useState(initialFilterState);
  const [filters, setFilters] = useState(initialFilterState);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const url =
      statusView === "published"
        ? "/api/properties?status=published"
        : "/api/properties?status=not_published,suspended";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.errors?.length) {
          console.error("EasyBroker API error:", data.errors);
          setError("Wir konnten die Immobilien gerade nicht laden.");
          setProperties([]);
          setLoading(false);
          return;
        }

        if (data?.error) {
          console.error("/api/properties error:", data.error);
          setError("Wir konnten die Immobilien gerade nicht laden.");
          setProperties([]);
          setLoading(false);
          return;
        }

        if (!Array.isArray(data?.content)) {
          console.warn("Unexpected response from /api/properties:", data);
          setError("Wir konnten die Immobilien gerade nicht laden.");
          setProperties([]);
          setLoading(false);
          return;
        }

        setProperties(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading properties:", err);
        setError("Wir konnten die Immobilien gerade nicht laden.");
        setLoading(false);
      });
  }, [statusView]);

  const locationOptions = useMemo(() => {
    if (!properties.length) return [];
    const locations = new Map<string, string>();

    properties.forEach((prop) => {
      const label = getLocationLabel(prop?.location) || formatLocation(prop?.location);
      if (!label || label === "Standort nicht verfügbar") return;
      const key = normalizeText(label);
      if (!locations.has(key)) {
        locations.set(key, label);
      }
    });

    return Array.from(locations.values()).sort((a, b) =>
      normalizeText(a).localeCompare(normalizeText(b), "es")
    );
  }, [properties]);

  const filteredProperties = useMemo(() => {
    if (!properties.length) return [];

    const tipoParam = normalizeText(searchParams?.get("tipo") || "");
    const ubicacionKey = normalizeText(searchParams?.get("ubicacion") || "");
    const rangoParam = normalizeText(searchParams?.get("rango") || "");

    const ubicacionTokens: Record<string, string[]> = {
      cdmx: ["ciudad de mexico", "cdmx", "mexico city", "distrito federal"],
      guadalajara: ["guadalajara", "jalisco"],
      monterrey: ["monterrey", "nuevo leon", "nuevo león"],
      puebla: ["puebla"],
      toluca: ["toluca", "estado de mexico", "edomex"],
      queretaro: ["queretaro", "querétaro"],
      morelia: ["morelia", "michoacan", "michoacán"],
      merida: ["merida", "mérida", "yucatan", "yucatán"],
      cancun: ["cancun", "cancún", "quintana roo"],
      chetumal: ["chetumal", "quintana roo"],
      campeche: ["campeche"],
      villahermosa: ["villahermosa", "tabasco"],
      tuxtla: ["tuxtla gutierrez", "tuxtla gutiérrez", "chiapas"],
      oaxaca: ["oaxaca", "oaxaca de juarez", "oaxaca de juárez"],
      xalapa: ["xalapa", "veracruz"],
      veracruz: ["veracruz"],
      hermosillo: ["hermosillo", "sonora"],
      chihuahua: ["chihuahua"],
      culiacan: ["culiacan", "culiacán", "sinaloa"],
      tepic: ["tepic", "nayarit"],
      zacatecas: ["zacatecas"],
      aguascalientes: ["aguascalientes"],
      slp: ["san luis potosi", "san luis potosí"],
      saltillo: ["saltillo", "coahuila"],
      torreon: ["torreon", "torreón", "coahuila"],
      durango: ["durango"],
      lapaz: ["la paz", "baja california sur"],
      mexicali: ["mexicali", "baja california"],
      tijuana: ["tijuana", "baja california"],
      colima: ["colima"],
      manzanillo: ["manzanillo", "colima"],
      guanajuato: ["guanajuato"],
      leon: ["leon", "león", "guanajuato"],
      pachuca: ["pachuca", "hidalgo"],
      tlaxcala: ["tlaxcala"],
      cuernavaca: ["cuernavaca", "morelos"],
      queretaro2: ["san juan del rio", "san juan del río", "queretaro", "querétaro"],
      madrid: ["madrid", "espana", "españa", "spain"],
    };

    const rangeMap: Record<string, [number, number]> = {
      "1": [10000, 200000],
      "2": [200000, 500000],
      "3": [500000, 1000000],
    };

    const hasTipo = Boolean(tipoParam);
    const hasUbicacion = Boolean(ubicacionKey) && Boolean(ubicacionTokens[ubicacionKey]);
    const hasRange = Boolean(rangoParam) && Boolean(rangeMap[rangoParam]);

    return properties.filter((prop) => {
      const propertyType = prop?.property_type?.toString().trim().toLowerCase() || "";
      const operationTypes = Array.isArray(prop?.operations)
        ? prop.operations
            .map((operation: any) => mapOperationType(operation?.type))
            .filter(Boolean)
        : [];
      const amounts = extractOperationAmounts(prop?.operations);
      const locationFilter = normalizeText(filters.location);
      const propertyLocation = normalizeText(formatLocation(prop?.location));

      const matchesType =
        !filters.type ||
        (filters.type.startsWith("property:") &&
          filters.type.replace("property:", "") === propertyType) ||
        (filters.type.startsWith("operation:") &&
          (() => {
            const selectedOperation = filters.type.replace("operation:", "");
            if (selectedOperation === "compra") {
              return operationTypes.includes("venta");
            }
            return operationTypes.includes(selectedOperation);
          })());

      if (!matchesType) return false;

      const propTypeNorm = normalizeText(propertyType);
      const isApartment = /apartment|departament|depa|apto|apartament/.test(propTypeNorm);
      const isHouse = /house|casa|residenc/.test(propTypeNorm);
      const matchesTipoParam = !hasTipo ||
        (() => {
          if (tipoParam === "comprar_departamento" || tipoParam === "buy_apartment") return operationTypes.includes("venta") && isApartment;
          if (tipoParam === "comprar_casa" || tipoParam === "buy_house") return operationTypes.includes("venta") && isHouse;
          if (tipoParam === "rentar_departamento" || tipoParam === "rent_apartment") return operationTypes.includes("renta") && isApartment;
          if (tipoParam === "rentar_casa" || tipoParam === "rent_house") return operationTypes.includes("renta") && isHouse;
          return true;
        })();

      if (!matchesTipoParam) return false;

      const matchesLocation =
        !locationFilter ||
        propertyLocation.includes(locationFilter) ||
        getLocationLabel(prop?.location).toLowerCase().includes(filters.location.toLowerCase());

      if (!matchesLocation) return false;

      const matchesUbicacionParam =
        !hasUbicacion ||
        (() => {
          const tokens = ubicacionTokens[ubicacionKey] || [];
          const normalizedLocation = normalizeText(propertyLocation);
          return tokens.some((token) => normalizedLocation.includes(token));
        })();

      if (!matchesUbicacionParam) return false;

      const matchesRange =
        !filters.minPrice && !filters.maxPrice
          ? true
          : amounts.some((amount) => {
              const minOk = !filters.minPrice || amount >= Number(filters.minPrice);
              const maxOk = !filters.maxPrice || amount <= Number(filters.maxPrice);
              return minOk && maxOk;
            });

      if (!matchesRange) return false;

      const matchesRangeParam =
        !hasRange ||
        (() => {
          const [min, max] = rangeMap[rangoParam];
          return amounts.some((amount) => amount >= min && amount <= max);
        })();

      return matchesRangeParam;
    });
  }, [properties, filters, searchParams, statusView]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    setFilters(inputs);
  };

  const clearFilters = () => {
    setInputs(initialFilterState);
    setFilters(initialFilterState);
  };

  return (
    <section className="listing-six pb-120 xl-pb-80">
      <div className="container container-large">
        <div className="top-filter">
          <div className="d-sm-flex justify-content-between align-items-center mb-20">
            <h2 className="mb-3 mb-sm-0">Immobilien durchsuchen</h2>
            <div className="d-flex align-items-center gap-2">
              <button
                className={`btn btn-sm ${statusView === "published" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setStatusView("published")}
              >
                Veröffentlicht
              </button>
              <button
                className={`btn btn-sm ${statusView === "archived" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setStatusView("archived")}
              >
                Archiviert
              </button>
            </div>
          </div>

          <div className="filter-box bg-light p-4 rounded-3 mb-40">
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label fw-500">Typ</label>
                <select name="type" value={inputs.type} onChange={handleFilterChange} className="form-select">
                  <option value="">Alle</option>
                  <option value="operation:venta">Kaufen</option>
                  <option value="operation:renta">Mieten</option>
                  <option value="property:house">Haus</option>
                  <option value="property:apartment">Apartment</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-500">Ort</label>
                <select name="location" value={inputs.location} onChange={handleFilterChange} className="form-select">
                  <option value="">Alle</option>
                  {locationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label fw-500">Min. Preis</label>
                <input
                  type="number"
                  name="minPrice"
                  value={inputs.minPrice}
                  onChange={handleFilterChange}
                  className="form-control"
                  placeholder="0"
                />
              </div>
              <div className="col-md-2">
                <label className="form-label fw-500">Max. Preis</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={inputs.maxPrice}
                  onChange={handleFilterChange}
                  className="form-control"
                  placeholder="1000000"
                />
              </div>
              <div className="col-md-2 d-flex gap-2">
                <button className="btn btn-primary w-100" onClick={applyFilters}>
                  Anwenden
                </button>
                <button className="btn btn-outline-secondary" onClick={clearFilters}>
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="mb-30">
            <DropdownHomeEightDe />
          </div>
        </div>

        {loading && <p>Laden...</p>}
        {error && <p className="text-danger">{error}</p>}

        <div className="row gx-xxl-5">
          {!loading &&
            !error &&
            filteredProperties.map((item) => {
              const imageUrl =
                item.property_images?.[0]?.url ||
                "/assets/images/media/img_01.jpg";

              const operation = item.operations?.[0];
              const priceLabel =
                operation?.formatted_amount ||
                (operation?.amount ? `${operation.amount} ${operation.currency || "MXN"}` : "Preis auf Anfrage");

              return (
                <div key={item.public_id} className="col-lg-4 col-md-6 mt-40">
                  <div className="listing-card-four overflow-hidden d-flex align-items-end position-relative z-1">
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "400px",
                        width: "100%",
                      }}
                    ></div>

                    <div className="property-info tran3s w-100 p-20 bg-white position-absolute bottom-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="pe-3">
                          <Link href={`/de/property/${item.public_id}`} className="title fw-500 tran4s">
                            {item.title || "Unbenannte Immobilie"}
                          </Link>
                          <div className="address tran4s">
                            {formatLocation(item.location)}
                          </div>
                        </div>
                        <Link href={`/de/property/${item.public_id}`} className="btn-four inverse">
                          <span>Mehr sehen</span> <i className="bi bi-arrow-up-right"></i>
                        </Link>
                      </div>

                      <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between mt-3">
                        <li>
                          <strong className="color-dark fw-500">{item.bedrooms ?? "-"}</strong>
                          <span className="fs-16">Schlafzimmer</span>
                        </li>
                        <li>
                          <strong className="color-dark fw-500">{item.bathrooms ?? "-"}</strong>
                          <span className="fs-16">Badezimmer</span>
                        </li>
                        <li>
                          <strong className="color-dark fw-500">{priceLabel}</strong>
                          <span className="fs-16">{operation?.type_label || operation?.type || "Kauf/Miete"}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {!loading && !error && filteredProperties.length === 0 && (
          <div className="text-center mt-60">
            <h4>Keine Immobilien gefunden</h4>
            <p className="text-muted">Passen Sie die Filter an oder setzen Sie sie zurück.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListingSixAreaDe;
