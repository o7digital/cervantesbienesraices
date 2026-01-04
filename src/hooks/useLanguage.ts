import { usePathname } from "next/navigation";

type Language = "es" | "en" | "fr" | "it";

const useLanguage = () => {
  const pathname = usePathname() || "/";

  // Detect current language
  let currentLang: Language = "es";
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    currentLang = "en";
  } else if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    currentLang = "fr";
  } else if (pathname === "/it" || pathname.startsWith("/it/")) {
    currentLang = "it";
  }

  // Legacy support
  const isEnglish = currentLang === "en";

  // Get base path without language prefix
  const basePath = pathname.replace(/^\/(en|fr|it)/, "") || "/";
  const normalizedBasePath = basePath.startsWith("/") ? basePath : `/${basePath}`;

  // Generate paths for all languages
  const paths = {
    es: normalizedBasePath === "/" ? "/" : normalizedBasePath,
    en: normalizedBasePath === "/" ? "/en" : `/en${normalizedBasePath}`,
    fr: normalizedBasePath === "/" ? "/fr" : `/fr${normalizedBasePath}`,
    it: normalizedBasePath === "/" ? "/it" : `/it${normalizedBasePath}`,
  };

  // Legacy toggle (EN <-> ES)
  const togglePath = currentLang === "en" ? paths.es : paths.en;

  return { 
    currentLang, 
    isEnglish, 
    togglePath, 
    paths,
    basePath: normalizedBasePath
  };
};

export default useLanguage;
