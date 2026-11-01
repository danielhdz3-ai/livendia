import {
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  isComprarPisoSinAgenciaSlugPublished,
  localComprarPisoSinAgenciaHref,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import {
  isPackArrasGestionLocalSlugPublished,
  localPackArrasGestionHref,
} from "@/lib/pack-comercial-local-cities";
import {
  HOME_COVERAGE_CITIES,
  type HomeCoverageCitySlug,
} from "@/lib/home-coverage-cities";
import { localGestoriaCityVerticalHref } from "@/lib/gestoria-city-vertical-hub";
import { isGestoriaInmobiliariaLocalSlugPublished } from "@/lib/gestoria-inmobiliaria-local-cities";

export const SEO_PRIMARY_LANDING_CITY_SLUGS = [
  "madrid",
  "barcelona",
  "valencia",
  "malaga",
  "sevilla",
] as const satisfies readonly HomeCoverageCitySlug[];

export type SeoCityPrimaryLinkRole =
  | "vender-head"
  | "pack495"
  | "venta890"
  | "compra890"
  | "comprar-head"
  | "gestoria-compraventa";

export type SeoCityPrimaryLink = {
  href: string;
  label: string;
  priceHint: string;
  role: SeoCityPrimaryLinkRole;
};

export function getSeoCityPrimaryLandings(citySlug: HomeCoverageCitySlug): {
  cityName: string;
  links: SeoCityPrimaryLink[];
} | null {
  const city = HOME_COVERAGE_CITIES.find((c) => c.slug === citySlug);
  if (!city) return null;

  const links: SeoCityPrimaryLink[] = [
    {
      href: city.venderSinAgenciaHref,
      label: "Vender piso sin agencia",
      priceHint: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      role: "vender-head",
    },
  ];

  if (isPackArrasGestionLocalSlugPublished(citySlug)) {
    links.push({
      href: localPackArrasGestionHref(citySlug),
      label: "Pack arras + gestión vendedor",
      priceHint: `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      role: "pack495",
    });
  }

  links.push({
    href: city.ventaLocalHref,
    label: "Servicio completo de venta",
    priceHint: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    role: "venta890",
  });

  links.push({
    href: city.compraHref,
    label: "Servicio completo de compra",
    priceHint: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    role: "compra890",
  });

  if (isComprarPisoSinAgenciaSlugPublished(citySlug)) {
    links.push({
      href: localComprarPisoSinAgenciaHref(citySlug),
      label: "Comprar piso sin agencia",
      priceHint: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      role: "comprar-head",
    });
  }

  if (isGestoriaInmobiliariaLocalSlugPublished(citySlug)) {
    links.push({
      href: localGestoriaCityVerticalHref(citySlug, "compraventa"),
      label: `Índice compraventa en ${city.name}`,
      priceHint: "Hub local",
      role: "gestoria-compraventa",
    });
  }

  return { cityName: city.name, links };
}

export function getSeoPrimaryLandingCityBlocks() {
  return SEO_PRIMARY_LANDING_CITY_SLUGS.map((slug) => getSeoCityPrimaryLandings(slug)).filter(
    (block): block is NonNullable<ReturnType<typeof getSeoCityPrimaryLandings>> => block != null,
  );
}
