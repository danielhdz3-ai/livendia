/** Ciudades prioritarias en home y footer. */
export const HOME_COVERAGE_CITY_SLUGS = [
  "madrid",
  "valencia",
  "barcelona",
  "malaga",
  "sevilla",
  "bilbao",
  "granada",
  "zaragoza",
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
  /** Solo ciudades con landing temporada publicada. */
  temporadaHref?: string;
  /** Compra parking o trastero (local o nacional). */
  parkingTrasteroHref?: string;
  /** Contrato de habitación local publicado. */
  habitacionHref?: string;
  /** Contrato de arras local publicado. */
  arrasLocalHref?: string;
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
    temporadaHref: "/servicios/contrato-alquiler-temporada-local/madrid",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero-local/madrid",
    habitacionHref: "/servicios/contrato-alquiler-habitacion/madrid",
    arrasLocalHref: "/servicios/contrato-arras-local/madrid",
  },
  {
    slug: "valencia",
    name: "Valencia",
    gestoriaHref: "/gestoria/valencia",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-valencia",
    administracionHref: "/servicios/administracion-alquiler-local/valencia",
    compraHref: "/servicios/servicio-completo-compra-local/valencia",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/valencia",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero",
    habitacionHref: "/servicios/contrato-alquiler-habitacion/valencia",
    arrasLocalHref: "/servicios/contrato-arras-local/valencia",
    temporadaHref: "/servicios/contrato-alquiler-temporada-local/valencia",
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    gestoriaHref: "/gestoria/barcelona",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-barcelona",
    administracionHref: "/servicios/administracion-alquiler-local/barcelona",
    compraHref: "/servicios/servicio-completo-compra-local/barcelona",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/barcelona",
    temporadaHref: "/servicios/contrato-alquiler-temporada-local/barcelona",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero-local/barcelona",
    habitacionHref: "/servicios/contrato-alquiler-habitacion/barcelona",
    arrasLocalHref: "/servicios/contrato-arras-local/barcelona",
  },
  {
    slug: "malaga",
    name: "Málaga",
    gestoriaHref: "/gestoria/malaga",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-malaga",
    administracionHref: "/servicios/administracion-alquiler-local/malaga",
    compraHref: "/servicios/servicio-completo-compra-local/malaga",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/malaga",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero",
    habitacionHref: "/servicios/contrato-alquiler-habitacion/malaga",
    temporadaHref: "/servicios/contrato-alquiler-temporada-local/malaga",
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    gestoriaHref: "/gestoria/sevilla",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-sevilla",
    administracionHref: "/servicios/administracion-alquiler-local/sevilla",
    compraHref: "/servicios/servicio-completo-compra-local/sevilla",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/sevilla",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero",
    habitacionHref: "/servicios/contrato-alquiler-habitacion/sevilla",
    temporadaHref: "/servicios/contrato-alquiler-temporada-local/sevilla",
    arrasLocalHref: "/servicios/contrato-arras-local/sevilla",
  },
  {
    slug: "bilbao",
    name: "Bilbao",
    gestoriaHref: "/gestoria/bilbao",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-bilbao",
    administracionHref: "/servicios/administracion-alquiler-local/bilbao",
    compraHref: "/servicios/servicio-completo-compra-local/bilbao",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/bilbao",
    habitacionHref: "/servicios/contrato-alquiler-habitacion/bilbao",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero",
  },
  {
    slug: "granada",
    name: "Granada",
    gestoriaHref: "/gestoria/granada",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-granada",
    administracionHref: "/servicios/administracion-alquiler",
    compraHref: "/servicios/servicio-completo-compra",
    ventaLocalHref: "/servicios/servicio-completo-venta-local/granada",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero",
  },
  {
    slug: "zaragoza",
    name: "Zaragoza",
    gestoriaHref: "/gestoria/zaragoza",
    venderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-zaragoza",
    administracionHref: "/servicios/administracion-alquiler-local/zaragoza",
    compraHref: "/servicios/servicio-completo-compra-local/zaragoza",
    ventaLocalHref: "/servicios/servicio-completo-venta",
    temporadaHref: "/servicios/contrato-alquiler-temporada-local/zaragoza",
    arrasLocalHref: "/servicios/contrato-arras-local/zaragoza",
    parkingTrasteroHref: "/servicios/acompanamiento-compra-parking-trastero",
  },
];

/** Imágenes de ciudad para tarjetas en home (Cobertura online). */
export const HOME_CITY_CARD_IMAGES: Record<HomeCoverageCitySlug, string> = {
  madrid: "/images/madrid.jpg",
  valencia: "/images/valencia.jpg",
  barcelona: "/images/barcelona.jpg",
  malaga: "/images/malaga.jpg",
  sevilla: "/images/sevilla.jpg",
  bilbao: "/images/bilbao2.jpg",
  granada: "/images/tipo2.jpg",
  zaragoza: "/images/zaragoza.jpg",
};

/** Enlaces planos para footer, mapa del sitio, etc. */
export function getHomeCoverageCityFlatLinks(): { href: string; label: string }[] {
  return HOME_COVERAGE_CITIES.flatMap((c) => [
    { href: c.gestoriaHref, label: `Gestoría inmobiliaria ${c.name}` },
    { href: c.venderSinAgenciaHref, label: `Vender piso sin agencia ${c.name}` },
    { href: c.compraHref, label: `Comprar con garantías ${c.name}` },
    { href: c.ventaLocalHref, label: `Vender piso ${c.name}` },
    { href: c.administracionHref, label: `Administración alquiler ${c.name}` },
    ...(c.temporadaHref
      ? [{ href: c.temporadaHref, label: `Contrato alquiler temporada ${c.name}` }]
      : []),
    ...(c.parkingTrasteroHref
      ? [{ href: c.parkingTrasteroHref, label: `Compra parking o trastero ${c.name}` }]
      : []),
    ...(c.habitacionHref
      ? [{ href: c.habitacionHref, label: `Contrato habitación ${c.name}` }]
      : []),
    ...(c.arrasLocalHref
      ? [{ href: c.arrasLocalHref, label: `Contrato arras ${c.name}` }]
      : []),
  ]);
}
