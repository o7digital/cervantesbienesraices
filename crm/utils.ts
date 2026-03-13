export function formatCurrencyLabel(value: number, currency: "MXN" | "USD") {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCompactCurrency(value: number, currency: "MXN" | "USD") {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("es-MX").format(value);
}

export function formatPercent(value: number) {
  return `${value}%`;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
