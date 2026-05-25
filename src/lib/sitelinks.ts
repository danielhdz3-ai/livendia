/**
 * Candidatas a sitelinks de Google para livendia.com.
 * Google decide qué enlaces muestra; esto alinea JSON-LD, navegación visible y anchor text.
 * Orden = prioridad (ItemList position).
 */
export type SiteSitelink = {
  /** Texto del enlace (corto, como en SERP) */
  name: string;
  path: string;
};

export const SITE_SITELINKS: readonly SiteSitelink[] = [
  { name: "Servicios", path: "/servicios" },
  { name: "Gestoría por ciudad", path: "/gestoria" },
  { name: "Precios", path: "/precios" },
  { name: "Contrato de alquiler", path: "/servicios/contrato-de-alquiler" },
  { name: "Contrato de arras", path: "/servicios/contrato-de-arras" },
  { name: "Servicio completo de compra", path: "/servicios/servicio-completo-compra" },
  { name: "Administración de alquileres", path: "/servicios/administracion-alquiler" },
  { name: "Contacto", path: "/contacto" },
  { name: "Blog", path: "/blog" },
  { name: "Equipo", path: "/equipo" },
] as const;
