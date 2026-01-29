import { usePathname } from "next/navigation";

const SUPPORTED = ["es", "en"] as const;

const useLanguage = () => {
  const pathname = usePathname() || "/";
  const match = pathname.match(/^\/(en)(\/|$)/);
  const lang = (match?.[1] as (typeof SUPPORTED)[number]) || "es";

  const stripPrefix = (path: string) =>
    path.replace(/^\/(en)(?=\/|$)/, "") || "/";

  const buildPath = (targetLang: (typeof SUPPORTED)[number]) => {
    const basePath = stripPrefix(pathname);
    if (targetLang === "es") return basePath;
    return basePath === "/" ? `/${targetLang}` : `/${targetLang}${basePath}`;
  };

  return {
    lang,
    isEnglish: lang === "en",
    buildPath,
    languages: SUPPORTED,
  };
};

export default useLanguage;
