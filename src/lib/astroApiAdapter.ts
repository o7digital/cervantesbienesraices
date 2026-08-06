type HeaderMap = Record<string, string>;

type NextLikeResponse = {
  status: (code: number) => NextLikeResponse;
  json: (body: unknown) => Response;
  setHeader: (name: string, value: string) => void;
};

export async function callNextApiHandler(
  handler: (req: any, res: NextLikeResponse) => unknown,
  request: Request,
  params: Record<string, string | undefined> = {}
) {
  const url = new URL(request.url);
  let statusCode = 200;
  const headers: HeaderMap = {};
  let response: Response | undefined;
  const body =
    request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.json().catch(() => undefined);

  const req = {
    method: request.method,
    query: Object.fromEntries(url.searchParams.entries()),
    body,
    headers: Object.fromEntries(request.headers.entries()),
  };

  Object.assign(req.query, params);

  const res: NextLikeResponse = {
    status(code: number) {
      statusCode = code;
      return res;
    },
    setHeader(name: string, value: string) {
      headers[name] = value;
    },
    json(payload: unknown) {
      response = new Response(JSON.stringify(payload), {
        status: statusCode,
        headers: {
          "content-type": "application/json",
          ...headers,
        },
      });
      return response;
    },
  };

  const result = await handler(req, res);
  return result instanceof Response ? result : response || new Response(null, { status: 204, headers });
}
