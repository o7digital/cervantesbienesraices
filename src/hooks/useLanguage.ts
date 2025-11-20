import { usePathname } from "next/navigation";

const useLanguage = () => {
  const pathname = usePathname() || "/";

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  // Toggle between /en and the same path without the prefix
  let togglePath = "/";
  if (isEnglish) {
    const withoutPrefix = pathname.replace(/^\/en/, "") || "/";
    togglePath = withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
  } else {
    togglePath = pathname === "/" ? "/en" : `/en${pathname}`;
  }

  return { isEnglish, togglePath };
};

export default useLanguage;
