"use client";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DropdownHomeEightIt from "@/components/search-dropdown/home-dropdown/DropdownHomeEightIt";
import Link from "next/link";

const formatLocation = (location: any) => {
  if (!location) return "Posizione non disponibile";

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

  return parts.length ? parts.join(", ") : "Posizione non disponibile";
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

const ListingSixAreaIt = () => {
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
          setError("Non siamo riusciti a caricare le proprietà al momento.");
          setProperties([]);
          setLoading(false);
          return;
        }

        if (data?.error) {
          console.error("/api/properties error:", data.error);
          setError("Non siamo riusciti a caricare le proprietà al momento.");
          setProperties([]);
          setLoading(false);
          return;
        }

        if (!Array.isArray(data?.content)) {
          console.warn("Unexpected response from /api/properties:", data);
          setError("Non siamo riusciti a caricare le proprietà al momento.");
          setProperties([]);
          setLoading(false);
          return;
        }

        setProperties(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading properties:", err);
        setError("Non siamo riusciti a caricare le proprietà al momento.");
        setLoading(false);
      });
  }, [statusView]);

  const locationOptions = useMemo(() => {
    if (!properties.length) return [];
    const locations = new Map<string, string>();

    properties.forEach((prop) => {
      const label = getLocationLabel(prop?.location) || formatLocation(prop?.location);
      if (!label || label === "Posizione non disponibile") return;
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
          if (tipoParam === "rentar_apartamento" || tipoParam === "rent_apartment") return operationTypes.includes("renta") && isApartment;
          if (tipoParam === "rentar_casa" || tipoParam === "rent_house") return operationTypes.includes("renta") && isHouse;
          return true;
        })();
      if (!matchesTipoParam) return false;

      const hasMin = filters.minPrice.trim() !== "";
      const hasMax = filters.maxPrice.trim() !== "";
      const min = hasMin ? Number(filters.minPrice) : null;
      const max = hasMax ? Number(filters.maxPrice) : null;

      if ((hasMin && (min === null || Number.isNaN(min))) || (hasMax && (max === null || Number.isNaN(max)))) {
        return false;
      }

      const matchesAmount =
        !hasMin && !hasMax
          ? true
          : amounts.some((amount) => {
              if (hasMin && min !== null && amount < min) return false;
              if (hasMax && max !== null && amount > max) return false;
              return true;
            });

      if (hasRange) {
        const [rMin, rMax] = rangeMap[rangoParam];
        const inRouteRange = amounts.some((amount) => {
          if (rMin !== null && amount < rMin) return false;
          if (rMax !== null && amount > rMax) return false;
          return true;
        });
        if (!inRouteRange) return false;
      }

      if (!matchesAmount) return false;

      let routeLocationMatch = true;
      if (hasUbicacion) {
        const tokens = ubicacionTokens[ubicacionKey].map((t) => normalizeText(t));
        routeLocationMatch = tokens.some((t) => propertyLocation.includes(t));
      }

      const matchesLocation = (!locationFilter || propertyLocation.includes(locationFilter)) && routeLocationMatch;

      return matchesLocation;
    });
  }, [properties, filters, searchParams]);

  const handleInputChange = (key: keyof typeof initialFilterState) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = event.target.value;
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setInputs(initialFilterState);
    setFilters(initialFilterState);
  };

  const hasFiltersApplied =
    Boolean(filters.type) ||
    Boolean(filters.location.trim()) ||
    Boolean(filters.minPrice.trim()) ||
    Boolean(filters.maxPrice.trim());

  const filtersMatchInputs =
    inputs.type === filters.type &&
    inputs.location.trim() === filters.location.trim() &&
    inputs.minPrice.trim() === filters.minPrice.trim() &&
    inputs.maxPrice.trim() === filters.maxPrice.trim();

  const inputsAreClear =
    !inputs.type &&
    !inputs.location.trim() &&
    !inputs.minPrice.trim() &&
    !inputs.maxPrice.trim();

  const isResetDisabled = inputsAreClear && !hasFiltersApplied;

  const handleApplyFilters = () => {
    setFilters({
      type: inputs.type,
      location: inputs.location.trim(),
      minPrice: inputs.minPrice.trim(),
      maxPrice: inputs.maxPrice.trim(),
    });
  };

  return (
    <div className="property-listing-six pt-200 xl-pt-150 pb-200 xl-pb-120">
      <div className="container">
        <h2 className="mb-40 text-center">Proprietà disponibili</h2>

        <div className="search-wrapper-one layout-one position-relative mb-40">
          <div className="bg-wrapper">
            <DropdownHomeEightIt />
          </div>
        </div>

        {loading && <p className="text-center">Caricamento delle proprietà...</p>}
        {!loading && error && <p className="text-center text-danger">{error}</p>}
        {!loading && !error && properties.length === 0 && <p>Nessuna proprietà trovata.</p>}

        <div className="row">
          {!loading && !error && properties.length > 0 && filteredProperties.length === 0 && (
            <div className="col-12">
              <p className="text-center">Nessuna proprietà corrisponde ai filtri selezionati.</p>
            </div>
          )}
          {filteredProperties.map((prop) => (
            <div key={prop.public_id} className="col-md-4 mb-4">
              <div className="property-card p-3 bg-white shadow-sm rounded">
                <img
                  src={prop.title_image_thumb || "/images/default-property.jpg"}
                  alt={prop.title}
                  className="img-fluid mb-3 rounded"
                />
                <h5>{prop.title}</h5>
                <p>{formatLocation(prop.location)}</p>
                <p>
                  <strong>
                    {prop.operations?.[0]?.formatted_amount || "Prezzo non disponibile"}
                  </strong>
                </p>
                <Link
                  href={`/it/property/${prop.public_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-one mt-3 d-block text-center"
                >
                  Visualizza dettagli
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingSixAreaIt;
