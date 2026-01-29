import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const NOINDEX_PREFIXES = [
  "/home-two",
  "/home-three",
  "/home-four",
  "/home-five",
  "/home-six",
  "/home-seven",
  "/home-eight",
  "/about_us_01",
  "/about_us_02",
  "/listing_01",
  "/listing_02",
  "/listing_03",
  "/listing_04",
  "/listing_05",
  "/listing_07",
  "/listing_08",
  "/listing_09",
  "/listing_10",
  "/listing_11",
  "/listing_12",
  "/listing_13",
  "/listing_14",
  "/listing_15",
  "/listing_16",
  "/listing_17",
  "/listing_details_01",
  "/listing_details_02",
  "/listing_details_03",
  "/listing_details_04",
  "/listing_details_05",
  "/listing_details_06",
  "/project_01",
  "/project_02",
  "/project_03",
  "/project_04",
  "/pricing_01",
  "/pricing_02",
  "/service_01",
  "/service_02",
  "/service_details",
  "/blog_01",
  "/blog_02",
  "/blog_03",
  "/blog_details",
  "/agency",
  "/agency_details",
  "/agent",
  "/agent_details",
  "/compare",
  "/faq",
  "/dashboard",
];

function shouldNoIndex(pathname: string) {
  const normalized = pathname.toLowerCase().replace(/\/$/, "");
  const stripped = normalized.startsWith("/en")
    ? normalized.slice(3) || "/"
    : normalized.startsWith("/fr")
    ? normalized.slice(3) || "/"
    : normalized.startsWith("/it")
    ? normalized.slice(3) || "/"
    : normalized;

  return NOINDEX_PREFIXES.some((prefix) => stripped.startsWith(prefix));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/fr") || pathname.startsWith("/it")) {
    // Redirect FR/IT to English locale for now
    const rewritten = pathname.replace(/^\/(fr|it)/, "/en") || "/en";
    const url = request.nextUrl.clone();
    url.pathname = rewritten;
    return NextResponse.redirect(url);
  }

  if (shouldNoIndex(pathname)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
