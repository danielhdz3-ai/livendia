import { HOME_COVERAGE_CITIES } from "@/lib/home-coverage-cities";

/**
 * Candidatas a sitelinks de Google para livendia.com.
 * Google decide qué enlaces muestra; esto alinea JSON-LD, navegación visible y anchor text.
 * Orden = prioridad (ItemList position). Madrid y Valencia van antes que Barcelona.
 */
export type SiteSitelink = {
  /** Texto del enlace (corto, como en SERP) */
  name: string;
  path: string;
};

/** Landings locales prioritarias — refuerzo Madrid, Valencia y Barcelona por igual. */
export const SITE_CITY_SITELINKS: readonly SiteSitelink[] = HOME_COVERAGE_CITIES.flatMap((c) => [
  { name: `Gestoría inmobiliaria ${c.name}`, path: c.gestoriaHref },
  { name: `Venta sin agencia ${c.name}`, path: c.venderSinAgenciaHref },
  { name: `Administración alquiler ${c.name}`, path: c.administracionHref },
  { name: `Comprar con garantías ${c.name}`, path: c.compraHref },
  { name: `Vender piso ${c.name}`, path: c.ventaLocalHref },
]);

export const SITE_GENERAL_SITELINKS: readonly SiteSitelink[] = [
  { name: "Servicios", path: "/servicios" },
  { name: "Precios", path: "/precios" },
  { name: "Contrato de alquiler", path: "/servicios/contrato-de-alquiler" },
  { name: "Contrato de arras", path: "/servicios/contrato-de-arras" },
  { name: "Servicio completo de compra", path: "/servicios/servicio-completo-compra" },
  { name: "Para propietarios", path: "/para-propietarios" },
  { name: "Administración de alquileres", path: "/servicios/administracion-alquiler" },
  { name: "Blog", path: "/blog" },
  { name: "Guías por ciudad", path: "/blog#guías-por-ciudad" },
  { name: "Contacto", path: "/contacto" },
  { name: "Equipo", path: "/equipo" },
] as const;

/** JSON-LD ItemList: ciudades primero, luego secciones generales. */
export const SITE_SITELINKS: readonly SiteSitelink[] = [...SITE_CITY_SITELINKS, ...SITE_GENERAL_SITELINKS];
