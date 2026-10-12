import { useMemo } from "react";

export function usePathname() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

export function useSearchParams() {
  const search = typeof window === "undefined" ? "" : window.location.search;
  return useMemo(() => new URLSearchParams(search), [search]);
}

export function useRouter() {
  return {
    push: (href: string) => {
      window.location.href = href;
    },
    replace: (href: string) => {
      window.location.replace(href);
    },
    back: () => {
      window.history.back();
    },
    refresh: () => {
      window.location.reload();
    },
  };
}

export function notFound(): never {
  throw new Error("Not found");
}

export function redirect(href: string): never {
  if (typeof window !== "undefined") window.location.href = href;
  throw new Error(`Redirect: ${href}`);
}
