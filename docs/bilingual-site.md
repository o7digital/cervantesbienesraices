# English site duplication – quick guide

This project now has an English variant of the main site alongside the Spanish version. Use this note to remember where things live and how the switch works.

## Routes
- Spanish (default): `/`
- English: `/en`
- Listings: `/listing_06` (ES) and `/en/listing_06` (EN)
- Property detail: `/property/[id]` (ES) and `/en/property/[id]` (EN)

## Language switcher
- Added to the header right side, shows `EN` on Spanish pages and `ES` on English pages.
- It preserves the current path, only adding or removing the `/en` prefix.
- Logic: `src/hooks/useLanguage.ts`
- UI: `src/layouts/headers/HeaderFive.tsx`, `src/layouts/headers/Menu/NavMenu.tsx`

## English home clone
- Components: `src/components/homes/home-eight-en/` (Hero, About, Services, Featured, etc.)
- Page entry: `src/app/en/page.tsx`
- Footer: `src/layouts/footers/FooterThreeEn.tsx`
- Menu data (EN): `src/data/home-data/MenuDataEn.ts`

## English listings
- Listing page: `src/app/en/listing_06/page.tsx`
- Listing component: `src/components/inner-listing/listing-06-en/`
- Property detail: `src/app/en/property/[id]/page.tsx`

## Search dropdown (EN)
- Component: `src/components/search-dropdown/home-dropdown/DropdownHomeEightEn.tsx`
- Keeps the same query params (`tipo/ubicacion/rango`) so filters still match backend logic.

## Known lint warnings
- Next.js warns about several `<img>` elements (existing pattern in the project). The new English listing/detail pages follow the same approach; we can migrate to `next/image` later if desired.
