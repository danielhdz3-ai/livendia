/** Ciudades prioritarias en home y footer. */
export const HOME_COVERAGE_CITY_SLUGS = [
  "madrid",
  "valencia",
  "barcelona",
  "malaga",
  "sevilla",
] as const;

export type HomeCoverageCitySlug = (typeof HOME_COVERAGE_CITY_SLUGS)[number];

export type HomeCoverageCity = {
  slug: HomeCoverageCitySlug;
  name: string;
  gestoriaHref: string;
  venderSinAgenciaHref: string;
  administracionHref: string;
  compraHref: string;
  ventaLocalHref: string;
};

export const HOME_COVERAGE_CITIES: readonly HomeCoverageCity[] = [
  {
    slug: "madrid",
    name: "Madrid",
    gestoriaHref: "/gestoria/madrid",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-madrid",
    administracionHref: "/servicios/administracion-alquiler-local/madrid",
    compraHref: "/servicios/servicio-completo-compra-local/madrid",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/madrid",
  },
  {
    slug: "valencia",
    name: "Valencia",
    gestoriaHref: "/gestoria/valencia",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-valencia",
    administracionHref: "/servicios/administracion-alquiler-local/valencia",
    compraHref: "/servicios/servicio-completo-compra-local/valencia",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/valencia",
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    gestoriaHref: "/gestoria/barcelona",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-barcelona",
    administracionHref: "/servicios/administracion-alquiler-local/barcelona",
    compraHref: "/servicios/servicio-completo-compra-local/barcelona",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/barcelona",
  },
  {
    slug: "malaga",
    name: "Málaga",
    gestoriaHref: "/gestoria/malaga",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-malaga",
    administracionHref: "/servicios/administracion-alquiler-local/malaga",
    compraHref: "/servicios/servicio-completo-compra-local/malaga",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/malaga",
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    gestoriaHref: "/gestoria/sevilla",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-sevilla",
    administracionHref: "/servicios/administracion-alquiler-local/sevilla",
    compraHref: "/servicios/servicio-completo-compra-local/sevilla",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/sevilla",
  },
];

/** Enlaces planos para footer, mapa del sitio, etc. */
export function getHomeCoverageCityFlatLinks(): { href: string; label: string }[] {
  return HOME_COVERAGE_CITIES.flatMap((c) => [
    { href: c.gestoriaHref, label: `Gestoría inmobiliaria ${c.name}` },
    { href: c.venderSinAgenciaHref, label: `Vender piso sin agencia ${c.name}` },
    { href: c.compraHref, label: `Comprar con garantías ${c.name}` },
    { href: c.ventaLocalHref, label: `Vender piso ${c.name}` },
    { href: c.administracionHref, label: `Administración alquiler ${c.name}` },
  ]);
}
