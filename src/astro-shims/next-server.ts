export class NextResponse extends Response {
  static json(body: unknown, init?: ResponseInit) {
    return new Response(JSON.stringify(body), {
      ...init,
      headers: {
        "content-type": "application/json",
        ...(init?.headers || {}),
      },
    });
  }

  static next() {
    return new Response(null);
  }
}

export type NextRequest = Request & {
  nextUrl: URL;
};
