export type PropertyLanguage = "es" | "en" | "fr" | "it" | "de";

type TargetLanguage = Exclude<PropertyLanguage, "es">;

const REPLACEMENTS: Record<TargetLanguage, Array<[RegExp, string]>> = {
  en: [
    [/\bse vende\b/gi, "for sale"],
    [/\bvende\b/gi, "for sale"],
    [/\ben venta\b/gi, "for sale"],
    [/\ben renta\b/gi, "for rent"],
    [/\bconjunto\b/gi, "complex"],
    [/\bextraordinari[ao]s?\b/gi, "extraordinary"],
    [/\bbonit[ao]s?\b/gi, "beautiful"],
    [/\blocal comercial\b/gi, "retail space"],
    [/\bcasa en condominio\b/gi, "condominium house"],
    [/\bdepartamentos\b/gi, "apartments"],
    [/\bdepartamento\b/gi, "apartment"],
    [/\bcasas\b/gi, "houses"],
    [/\bcasa\b/gi, "house"],
    [/\bterrenos\b/gi, "land lots"],
    [/\bterreno\b/gi, "land lot"],
    [/\boficinas\b/gi, "offices"],
    [/\boficina\b/gi, "office"],
    [/\bedificio\b/gi, "building"],
    [/\brancho\b/gi, "ranch"],
    [/\bpropiedad\b/gi, "property"],
    [/\bventa\b/gi, "sale"],
    [/\brenta\b/gi, "rent"],
    [/\bciudad de mexico\b/gi, "Mexico City"],
    [/\bestado de mexico\b/gi, "State of Mexico"],
  ],
  fr: [
    [/\bse vende\b/gi, "a vendre"],
    [/\bvende\b/gi, "a vendre"],
    [/\ben venta\b/gi, "a vendre"],
    [/\ben renta\b/gi, "a louer"],
    [/\bconjunto\b/gi, "ensemble"],
    [/\bextraordinari[ao]s?\b/gi, "extraordinaire"],
    [/\bbonit[ao]s?\b/gi, "beau"],
    [/\blocal comercial\b/gi, "local commercial"],
    [/\bcasa en condominio\b/gi, "maison en copropriete"],
    [/\bdepartamentos\b/gi, "appartements"],
    [/\bdepartamento\b/gi, "appartement"],
    [/\bcasas\b/gi, "maisons"],
    [/\bcasa\b/gi, "maison"],
    [/\bterrenos\b/gi, "terrains"],
    [/\bterreno\b/gi, "terrain"],
    [/\boficinas\b/gi, "bureaux"],
    [/\boficina\b/gi, "bureau"],
    [/\bedificio\b/gi, "immeuble"],
    [/\brancho\b/gi, "ranch"],
    [/\bpropiedad\b/gi, "propriete"],
    [/\bventa\b/gi, "vente"],
    [/\brenta\b/gi, "location"],
    [/\bciudad de mexico\b/gi, "Ville de Mexico"],
    [/\bestado de mexico\b/gi, "Etat de Mexico"],
  ],
  it: [
    [/\bse vende\b/gi, "in vendita"],
    [/\bvende\b/gi, "in vendita"],
    [/\ben venta\b/gi, "in vendita"],
    [/\ben renta\b/gi, "in affitto"],
    [/\bconjunto\b/gi, "complesso"],
    [/\bextraordinari[ao]s?\b/gi, "straordinario"],
    [/\bbonit[ao]s?\b/gi, "bello"],
    [/\blocal comercial\b/gi, "locale commerciale"],
    [/\bcasa en condominio\b/gi, "casa in condominio"],
    [/\bdepartamentos\b/gi, "appartamenti"],
    [/\bdepartamento\b/gi, "appartamento"],
    [/\bcasas\b/gi, "case"],
    [/\bcasa\b/gi, "casa"],
    [/\bterrenos\b/gi, "terreni"],
    [/\bterreno\b/gi, "terreno"],
    [/\boficinas\b/gi, "uffici"],
    [/\boficina\b/gi, "ufficio"],
    [/\bedificio\b/gi, "edificio"],
    [/\brancho\b/gi, "tenuta"],
    [/\bpropiedad\b/gi, "proprieta"],
    [/\bventa\b/gi, "vendita"],
    [/\brenta\b/gi, "affitto"],
    [/\bciudad de mexico\b/gi, "Citta del Messico"],
    [/\bestado de mexico\b/gi, "Stato del Messico"],
  ],
  de: [
    [/\bse vende\b/gi, "zu verkaufen"],
    [/\bvende\b/gi, "zu verkaufen"],
    [/\ben venta\b/gi, "zu verkaufen"],
    [/\ben renta\b/gi, "zu vermieten"],
    [/\bconjunto\b/gi, "anlage"],
    [/\bextraordinari[ao]s?\b/gi, "aussergewohnlich"],
    [/\bbonit[ao]s?\b/gi, "schon"],
    [/\blocal comercial\b/gi, "geschaftsflache"],
    [/\bcasa en condominio\b/gi, "haus in wohnanlage"],
    [/\bdepartamentos\b/gi, "wohnungen"],
    [/\bdepartamento\b/gi, "wohnung"],
    [/\bcasas\b/gi, "hauser"],
    [/\bcasa\b/gi, "haus"],
    [/\bterrenos\b/gi, "grundstucke"],
    [/\bterreno\b/gi, "grundstuck"],
    [/\boficinas\b/gi, "buros"],
    [/\boficina\b/gi, "buro"],
    [/\bedificio\b/gi, "gebaude"],
    [/\brancho\b/gi, "landgut"],
    [/\bpropiedad\b/gi, "immobilie"],
    [/\bventa\b/gi, "verkauf"],
    [/\brenta\b/gi, "miete"],
    [/\bciudad de mexico\b/gi, "Mexiko-Stadt"],
    [/\bestado de mexico\b/gi, "Bundesstaat Mexiko"],
  ],
};

const applyCase = (match: string, replacement: string) => {
  if (match === match.toUpperCase()) return replacement.toUpperCase();
  if (match[0] && match[0] === match[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
};

export const localizePropertyTitle = (text: string, lang: PropertyLanguage): string => {
  if (!text || lang === "es") return text;
  let output = text;

  for (const [pattern, replacement] of REPLACEMENTS[lang]) {
    output = output.replace(pattern, (match) => applyCase(match, replacement));
  }

  return output;
};
