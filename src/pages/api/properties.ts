import type { NextApiRequest, NextApiResponse } from "next";

const EASY_BROKER_URL = "https://api.easybroker.com/v1/properties";
const MAX_LIMIT = 50;

// Normaliza texto para comparaciones robustas (acentos/mayúsculas/espacios)
const normalize = (value?: string) =>
  (value || "")
    .toString()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

// Mapeo de estatus human-friendly -> enumeraciones EB
const EB_STATUSES = [
  "published",
  "not_published",
  "reserved",
  "sold",
  "rented",
  "suspended",
  "flagged",
] as const;
type EbStatus = typeof EB_STATUSES[number];

function mapToEbStatus(input?: string): EbStatus | undefined {
  const n = normalize(input);
  if (!n) return undefined;
  if (["published", "publicada", "publicado", "active", "activa", "activo"].includes(n)) return "published";
  if (["not_published", "no publicada", "no_publicada", "unpublished", "not published"].includes(n)) return "not_published";
  if (["sold", "vendida", "vendido"].includes(n)) return "sold";
  if (["rented", "rentada", "rentado"].includes(n)) return "rented";
  if (["reserved", "reservada", "reservado"].includes(n)) return "reserved";
  if (["suspended", "suspendida", "suspendido"].includes(n)) return "suspended";
  if (["flagged", "marcada", "marcado", "reportada", "reportado"].includes(n)) return "flagged";
  // si ya viene en formato EB
  if ((EB_STATUSES as readonly string[]).includes(n)) return n as EbStatus;
  return undefined;
}

function parseStatusesParam(raw?: string): EbStatus[] {
  if (!raw) return ["published"]; // por defecto: solo publicadas
  const parts = raw
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter(Boolean);
  const mapped = parts
    .map(mapToEbStatus)
    .filter((v): v is EbStatus => Boolean(v));
  return mapped.length ? Array.from(new Set(mapped)) : ["published"]; // fallback seguro
}

// Helpers de tokens de statut
const getStatusCandidates = (item: any): string[] => {
  const list: Array<string | undefined> = [
    typeof item?.publication_status === "string" ? item.publication_status : item?.publication_status?.name,
    typeof item?.status === "string" ? item.status : item?.status?.name,
    typeof item?.property_status === "string" ? item.property_status : item?.property_status?.name,
  ];
  return list
    .map((v) => normalize(v as string))
    .filter((v): v is string => Boolean(v));
};

const hasAny = (candidates: string[], tokens: string[]) => {
  const set = new Set(candidates);
  return tokens.some((t) => set.has(normalize(t)));
};

// Verifica si un item coincide con el estatus solicitado (p.ej. "No publicada")
const matchesStatus = (item: any, statusFilter: string) => {
  const target = normalize(statusFilter);
  const tokens = [target, target.replace(/\s+/g, "_")]; // p.ej. no_publicada
  const candidates = getStatusCandidates(item);

  if (typeof item?.publicly_visible === "boolean") {
    if (hasAny(tokens, ["no publicada", "no_publicada", "unpublished"])) {
      return item.publicly_visible === false;
    }
    if (hasAny(tokens, ["publicada", "published"])) {
      return item.publicly_visible === true;
    }
  }

  if (candidates.includes(target)) return true;
  if (
    hasAny(candidates, ["unpublished", "not published", "no publicada", "no_publicada"]) &&
    hasAny(tokens, ["unpublished", "not published", "no publicada", "no_publicada"]) 
  )
    return true;
  if (hasAny(candidates, ["published", "publicada", "publicado"]) && hasAny(tokens, ["published", "publicada", "publicado"])) return true;
  if (hasAny(candidates, ["archived", "archive", "archivado", "archivada"]) && hasAny(tokens, ["archived", "archivado", "archivada"])) return true;
  if (hasAny(candidates, ["draft", "borrador"]) && hasAny(tokens, ["draft", "borrador"])) return true;
  if (hasAny(candidates, ["active", "activa", "activo"]) && hasAny(tokens, ["active", "activa", "activo"])) return true;
  return false;
};

// Public: incluir solo si hay señal clara de publicación; excluir archived/unpublished/draft
const isPublished = (item: any) => {
  // Señal booleana explícita
  if (typeof item?.publicly_visible === "boolean") {
    if (item.publicly_visible === false) return false;
    // true mais on double-checke pour descartes explícitos
  }

  const candidates = getStatusCandidates(item);

  // Exclusiones explícitas
  if (hasAny(candidates, [
    "unpublished", "not published", "no publicada", "no_publicada",
    "inactive", "inactivo", "inactiva",
    "hidden", "oculto", "oculta",
  ])) return false;
  if (hasAny(candidates, ["archived", "archive", "archivado", "archivada"])) return false;
  if (hasAny(candidates, ["draft", "borrador"])) return false;

  // Inclusiones explícitas
  if (item?.publicly_visible === true) return true;
  if (hasAny(candidates, ["published", "publicada", "publicado", "active", "activa", "activo"])) return true;

  // Si no hay señales claras, incluimos por defecto (para no vaciar)
  return true;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pageParam = Number(req.query.page);
    const limitParam = Number(req.query.limit);
    const debugParam = (req.query.debug as string | undefined) || "";
    const debugStatuses = debugParam === "1" || debugParam === "statuses" || debugParam === "all";
    const debugFields = debugParam === "fields" || debugParam === "items" || debugParam === "all";
    const statusParam = (req.query.status as string | undefined) || (req.query.publication_status as string | undefined);
    const ebStatuses = parseStatusesParam(statusParam);
    const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, MAX_LIMIT) : MAX_LIMIT;
    const headers = {
      accept: "application/json",
      "X-Authorization": process.env.EB_API_KEY!, // usamos la API Key guardada en .env.local
    };

    // Si el cliente solicita una página concreta, devolvemos esa página únicamente.
    if (Number.isFinite(pageParam) && pageParam > 0) {
      const statusQs = ebStatuses.map((s) => `search[statuses][]=${encodeURIComponent(s)}`).join("&");
      const url = `${EASY_BROKER_URL}?page=${pageParam}&limit=${limit}${statusQs ? `&${statusQs}` : ""}`;
      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error("Error al consultar EasyBroker");
      }

      const pageData = await response.json();

      if (Array.isArray(pageData?.content)) {
        // Si on a demandé un statut explicite, on fait confiance au filtre EasyBroker
        const filtered = statusParam ? pageData.content : pageData.content.filter((item: any) => isPublished(item));

        if (debugStatuses || debugFields) {
          const stats = debugStatuses ? buildStatusStats(pageData.content) : undefined;
          const items = debugFields ? pageData.content.map(extractStatusFields) : undefined;
          return res.status(200).json({
            ...pageData,
            content: filtered,
            debug: {
              ...(stats ? { statuses: stats } : {}),
              ...(items ? { items } : {}),
              filtered_count: filtered.length,
              original_count: pageData.content.length,
            },
            pagination: { ...(pageData.pagination || {}), total_returned: filtered.length },
          });
        }

        return res.status(200).json({
          ...pageData,
          content: filtered,
          pagination: { ...(pageData.pagination || {}), total_returned: filtered.length },
        });
      }

      return res.status(200).json(pageData);
    }

    // Por defecto, agregamos todas las páginas disponibles (hasta agotar next_page).
    let page = 1;
    const allContent: any[] = [];
    let lastPagination: any = null;

    while (true) {
      const statusQs = ebStatuses.map((s) => `search[statuses][]=${encodeURIComponent(s)}`).join("&");
      const url = `${EASY_BROKER_URL}?page=${page}&limit=${limit}${statusQs ? `&${statusQs}` : ""}`;
      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error("Error al consultar EasyBroker");
      }

      const data = await response.json();
      if (Array.isArray(data.content)) {
        allContent.push(...data.content);
      }

      lastPagination = data.pagination ?? null;

      const nextPage = data.pagination?.next_page;
      if (!nextPage || nextPage === page) {
        break;
      }

      page = nextPage;
    }

    // Par défaut (pas de param), on ne renvoie que les biens publiés
    const resultContent = statusParam ? allContent : allContent.filter((item: any) => isPublished(item));

    if (debugStatuses || debugFields) {
      const stats = debugStatuses ? buildStatusStats(allContent) : undefined;
      const items = debugFields ? allContent.map(extractStatusFields) : undefined;
      return res.status(200).json({
        content: resultContent,
        debug: {
          ...(stats ? { statuses: stats } : {}),
          ...(items ? { items } : {}),
          filtered_count: resultContent.length,
          original_count: allContent.length,
        },
        pagination: {
          ...lastPagination,
          total_returned: resultContent.length,
        },
      });
    }

    return res.status(200).json({
      content: resultContent,
      pagination: {
        ...lastPagination,
        total_returned: resultContent.length,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Compila valores únicos de estatus para diagnóstico
function buildStatusStats(items: any[]) {
  const tokens: Record<string, number> = {};
  let visibleTrue = 0;
  let visibleFalse = 0;
  for (const it of items) {
    if (it && typeof it.publicly_visible === "boolean") {
      if (it.publicly_visible) visibleTrue++;
      else visibleFalse++;
    }
    const cand = getStatusCandidates(it);
    for (const t of cand) tokens[t] = (tokens[t] || 0) + 1;
  }
  return { tokens, publicly_visible_true: visibleTrue, publicly_visible_false: visibleFalse };
}

// Extrae campos de estatus por propiedad para depurar
function extractStatusFields(item: any) {
  const op = (Array.isArray(item?.operations) ? item.operations : []).map((o: any) => ({
    type: o?.type ?? null,
    status: o?.status ?? null,
    amount: typeof o?.amount === "number" ? o.amount : o?.amount ?? o?.formatted_amount ?? null,
  }));
  return {
    public_id: item?.public_id ?? null,
    title: item?.title ?? null,
    publicly_visible: item?.publicly_visible ?? null,
    publication_status: item?.publication_status ?? null,
    status: item?.status ?? null,
    property_status: item?.property_status ?? null,
    operations: op,
    // Lo que nuestro filtro decidiría:
    computed_isPublished: isPublished(item),
  };
}
