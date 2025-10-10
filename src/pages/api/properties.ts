import type { NextApiRequest, NextApiResponse } from "next";

const EASY_BROKER_URL = "https://api.easybroker.com/v1/properties";
const MAX_LIMIT = 50;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pageParam = Number(req.query.page);
    const limitParam = Number(req.query.limit);
    const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, MAX_LIMIT) : MAX_LIMIT;
    const headers = {
      accept: "application/json",
      "X-Authorization": process.env.EB_API_KEY!, // usamos la API Key guardada en .env.local
    };

    // Si el cliente solicita una página concreta, devolvemos esa página únicamente.
    if (Number.isFinite(pageParam) && pageParam > 0) {
      const response = await fetch(`${EASY_BROKER_URL}?page=${pageParam}&limit=${limit}`, { headers });

      if (!response.ok) {
        throw new Error("Error al consultar EasyBroker");
      }

      const pageData = await response.json();
      return res.status(200).json(pageData);
    }

    // Por defecto, agregamos todas las páginas disponibles (hasta agotar next_page).
    let page = 1;
    const allContent: any[] = [];
    let lastPagination: any = null;

    while (true) {
      const response = await fetch(`${EASY_BROKER_URL}?page=${page}&limit=${limit}`, { headers });

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

    res.status(200).json({
      content: allContent,
      pagination: {
        ...lastPagination,
        total_returned: allContent.length,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
