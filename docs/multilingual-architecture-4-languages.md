# Site Multilingue – Architecture Complète (ES, EN, FR, IT)

**Date:** 4 janvier 2026  
**Version:** 1.0  
**Langues supportées:** Espagnol (ES), Anglais (EN), Français (FR), Italien (IT)

## 🌍 Vue d'ensemble

Le site Cervantes Bienes Raíces supporte maintenant **4 langues complètes** avec duplication SEO optimisée :
- **ES (Espagnol)** : `/` - langue par défaut
- **EN (Anglais)** : `/en/` - version anglaise
- **FR (Français)** : `/fr/` - version française  
- **IT (Italien)** : `/it/` - version italienne

## 📁 Structure des Routes

### Pages principales
```
ES: /
EN: /en
FR: /fr
IT: /it
```

### Listings
```
ES: /listing_06
EN: /en/listing_06
FR: /fr/listing_06
IT: /it/listing_06
```

### Détails Propriété
```
ES: /property/[id]
EN: /en/property/[id]
FR: /fr/property/[id]
IT: /it/property/[id]
```

### Services
```
ES: /servicios
EN: /en/services
FR: /fr/services
IT: /it/services
```

## 🔧 Configuration Technique

### 1. Hook de langue (`src/hooks/useLanguage.ts`)
- Détection automatique de la langue courante
- Génération des paths pour les 4 langues
- Support du toggle EN ↔ ES (legacy)
- Export de `currentLang`, `paths`, `basePath`

### 2. Middleware (`src/middleware.ts`)
- Support des 3 préfixes de langue : `/en`, `/fr`, `/it`
- Gestion du `noindex` pour toutes les langues
- Strip du préfixe de langue avant vérification

### 3. Layout Root (`src/app/layout.tsx`)
- Alternates hreflang pour les 4 langues
- SEO metadata par défaut en ES
- Configuration OpenGraph multilingue

### 4. Sitemap (`src/app/sitemap.ts`)
- URLs statiques pour ES, EN, FR, IT
- URLs dynamiques de propriétés pour les 4 langues
- Format: `/{lang}/property/{id}` pour chaque propriété

## 📦 Composants par Langue

### Home Components
```
src/components/homes/
  ├── home-eight-en/    (Anglais)
  ├── home-eight-fr/    (Français)
  └── home-eight-it/    (Italien)
```

Chaque dossier contient :
- `index.tsx` - Point d'entrée principal
- `HeroFr/It.tsx` - Bannière hero traduite
- `AboutSectionFr/It.tsx` - Section À propos
- `ConsultoriaSectionFr/It.tsx` - Services
- `PropertyListingOneFr/It.tsx` - Liste propriétés
- `FeedbackFr/It.tsx` - Témoignages
- Et tous les autres composants traduits

### Listing Components
```
src/components/inner-listing/
  ├── listing-06-en/    (Anglais)
  ├── listing-06-fr/    (Français)
  └── listing-06-it/    (Italien)
```

### Search Dropdowns
```
src/components/search-dropdown/home-dropdown/
  ├── DropdownHomeEightEn.tsx
  ├── DropdownHomeEightFr.tsx
  └── DropdownHomeEightIt.tsx
```

### Footers
```
src/layouts/footers/
  ├── FooterThreeEn.tsx
  ├── FooterThreeFr.tsx
  └── FooterThreeIt.tsx
```

## 📊 Données de Contenu

### Services (`src/data/services.tsx`)
```typescript
export const servicesEs: ServiceItem[]  // Espagnol
export const servicesEn: ServiceItem[]  // Anglais
export const servicesFr: ServiceItem[]  // Français
export const servicesIt: ServiceItem[]  // Italien
```

Chaque ensemble contient 5 services traduits :
1. Acquisition/Compra de propriétés premium
2. Vente & Représentation
3. Conseil juridique & Documentation
4. Analyse de marché & Évaluation
5. Stratégie d'investissement & Patrimoine

## 🔍 SEO & Métadonnées

### Hreflang Tags
Chaque page génère automatiquement les alternates pour les 4 langues :
```typescript
alternates: {
  canonical: `${BASE_URL}/{lang}/{path}`,
  languages: {
    "es-MX": `${BASE_URL}/{path}`,
    "en-US": `${BASE_URL}/en/{path}`,
    "fr-FR": `${BASE_URL}/fr/{path}`,
    "it-IT": `${BASE_URL}/it/{path}`,
  },
}
```

### OpenGraph Locale
- ES: `es_MX`
- EN: `en_US`
- FR: `fr_FR`
- IT: `it_IT`

### Footer SEO Keywords
Chaque footer contient un bloc SEO avec keywords optimisés dans la langue respective :
- **FR**: "immobilier de luxe Mexico · agence immobilière premium CDMX · maisons Polanco..."
- **IT**: "immobiliare di lusso Città del Messico · agenzia immobiliare premium CDMX..."

## 🚀 Routes Spécifiques

### FR - Pages créées
- `/fr/page.tsx` - Home FR
- `/fr/listing_06/page.tsx` - Listings FR
- `/fr/property/[id]/page.tsx` - Détail propriété FR
- `/fr/services/page.tsx` - Services FR

### IT - Pages créées
- `/it/page.tsx` - Home IT
- `/it/listing_06/page.tsx` - Listings IT
- `/it/property/[id]/page.tsx` - Détail propriété IT
- `/it/services/page.tsx` - Services IT

## 🎨 Traductions Clés

### Français (FR)
- **Brand**: Cervantes Immobilier
- **CTA**: "Rechercher", "Voir les détails"
- **Sections**: "Services", "Propriétés", "Localisation"
- **Messages**: "Chargement...", "Aucune propriété trouvée"

### Italien (IT)
- **Brand**: Cervantes Immobiliare
- **CTA**: "Cerca", "Visualizza dettagli"
- **Sections**: "Servizi", "Proprietà", "Posizione"
- **Messages**: "Caricamento...", "Nessuna proprietà trovata"

## 📝 Maintenance Future

### Ajout d'une nouvelle page
1. Créer `src/app/fr/nouvelle-page/page.tsx`
2. Créer `src/app/it/nuova-pagina/page.tsx`
3. Ajouter les URLs au sitemap
4. Mettre à jour les menus si nécessaire

### Ajout d'un nouveau composant
1. Dupliquer le composant EN vers FR et IT
2. Traduire tous les textes user-facing
3. Mettre à jour les imports dans les pages
4. Tester les routes `/fr/...` et `/it/...`

### Checklist SEO
- ✅ Hreflang alternates sur chaque page
- ✅ OpenGraph locale correcte
- ✅ Canonical URL unique par langue
- ✅ Sitemap avec toutes les URLs
- ✅ Footer keywords optimisés
- ✅ Metadata descriptions traduites

## 🌐 Language Switcher (Future)

Le hook `useLanguage` expose :
```typescript
const { currentLang, paths, basePath } = useLanguage()

// currentLang: "es" | "en" | "fr" | "it"
// paths: { es: "/path", en: "/en/path", fr: "/fr/path", it: "/it/path" }
// basePath: "/path" (sans préfixe langue)
```

Pour créer un switcher 4 langues :
```tsx
<Link href={paths.fr}>🇫🇷 FR</Link>
<Link href={paths.it}>🇮🇹 IT</Link>
<Link href={paths.en}>🇬🇧 EN</Link>
<Link href={paths.es}>🇪🇸 ES</Link>
```

## ✅ Fichiers Modifiés/Créés

### Configuration Globale
- ✅ `src/hooks/useLanguage.ts` - Support 4 langues
- ✅ `src/middleware.ts` - Gestion FR/IT
- ✅ `src/app/layout.tsx` - Alternates FR/IT
- ✅ `src/app/sitemap.ts` - URLs FR/IT

### Pages FR
- ✅ `src/app/fr/page.tsx`
- ✅ `src/app/fr/listing_06/page.tsx`
- ✅ `src/app/fr/property/[id]/page.tsx`
- ✅ `src/app/fr/services/page.tsx`

### Pages IT
- ✅ `src/app/it/page.tsx`
- ✅ `src/app/it/listing_06/page.tsx`
- ✅ `src/app/it/property/[id]/page.tsx`
- ✅ `src/app/it/services/page.tsx`

### Composants FR (10 fichiers)
- ✅ `src/components/homes/home-eight-fr/` (tous les composants)
- ✅ `src/components/inner-listing/listing-06-fr/`
- ✅ `src/components/search-dropdown/home-dropdown/DropdownHomeEightFr.tsx`
- ✅ `src/layouts/footers/FooterThreeFr.tsx`

### Composants IT (10 fichiers)
- ✅ `src/components/homes/home-eight-it/` (tous les composants)
- ✅ `src/components/inner-listing/listing-06-it/`
- ✅ `src/components/search-dropdown/home-dropdown/DropdownHomeEightIt.tsx`
- ✅ `src/layouts/footers/FooterThreeIt.tsx`

### Données
- ✅ `src/data/services.tsx` - servicesFr + servicesIt

---

## 🎯 Résultat

Le site est maintenant **entièrement dupliqué** en 4 langues avec :
- ✅ Architecture de routing complète
- ✅ SEO optimisé avec hreflang
- ✅ Traductions professionnelles immobilières
- ✅ Sitemap multilingue
- ✅ Composants UI traduits
- ✅ Metadata et OpenGraph par langue
- ✅ Stratégie SEO internationale

**Total langues : 4 (ES + EN + FR + IT)**  
**Total pages créées : ~60+ (pages + composants)**  
**SEO ready : ✅ Oui**
