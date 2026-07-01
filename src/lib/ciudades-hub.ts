import {
  HOME_COVERAGE_CITIES,
  HOME_COVERAGE_CITY_SLUGS,
  type HomeCoverageCity,
  type HomeCoverageCitySlug,
} from "@/lib/home-coverage-cities";
import { PILLAR_BARCELONA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import { PILLAR_MADRID_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-madrid";
import { PILLAR_MALAGA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-malaga";
import { PILLAR_SEVILLA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-sevilla";
import { PILLAR_VALENCIA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-valencia";

export const CIUDADES_HUB_BASE = "/ciudades";

export function cityHubHref(slug: HomeCoverageCitySlug): string {
  return `${CIUDADES_HUB_BASE}/${slug}`;
}

export function getCityHub(slug: string): HomeCoverageCity | undefined {
  return HOME_COVERAGE_CITIES.find((c) => c.slug === slug);
}

export function isCityHubSlug(slug: string): slug is HomeCoverageCitySlug {
  return (HOME_COVERAGE_CITY_SLUGS as readonly string[]).includes(slug);
}

export const CITY_HUB_TAGLINES: Record<HomeCoverageCitySlug, string> = {
  madrid: "Capital y corredor del Henares: alquiler, arras y venta entre particulares.",
  valencia: "Ciudad y litoral: contratos LAU, habitación y gestión de alquileres.",
  barcelona: "Área metropolitana y CCCat: arras, habitación y venta sin agencia.",
  malaga: "Costa y provincia: gestoría online con precios cerrados.",
  sevilla: "Capital andaluza: compraventa, contratos y administración de alquiler.",
};

export const CITY_PILLAR_PATHS: Partial<Record<HomeCoverageCitySlug, string>> = {
  barcelona: PILLAR_BARCELONA_PATH,
  madrid: PILLAR_MADRID_PATH,
  valencia: PILLAR_VALENCIA_PATH,
  malaga: PILLAR_MALAGA_PATH,
  sevilla: PILLAR_SEVILLA_PATH,
};

export function getCityHubMeta(city: HomeCoverageCity) {
  return {
    title: `Gestoría inmobiliaria en ${city.name} — contratos y venta sin agencia | Livendia`,
    description: `Servicios de gestoría inmobiliaria en ${city.name}: contratos de alquiler y arras, venta entre particulares sin agencia, administración de alquileres y compraventa con gestor asignado. Precio cerrado, 100 % online.`,
  };
}
