export function usePathname() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

export function useSearchParams() {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
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
