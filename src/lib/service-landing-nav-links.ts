/**
 * Landings públicas de servicio (/servicios/…) enlazadas desde la navegación.
 * Solo fichas genéricas (nacionales); landings SEO por ciudad viven en /ciudades, hubs y rutas locales.
 */

export type ServiceLandingNavLink = {
  href: string;
  label: string;
};

export type ServiceLandingNavGroup = {
  title: string;
  /** Subtítulo bajo el encabezado de columna (mega-menú desktop). */
  subtitle: string;
  links: readonly ServiceLandingNavLink[];
};

/** Grupos para el mega-menú «Servicios» del header (PC: 4 columnas). */
export const SERVICE_LANDING_NAV_GROUPS: readonly ServiceLandingNavGroup[] = [
  {
    title: "Compraventa",
    subtitle: "Arras, reserva y trámites comunes",
    links: [
      { href: "/servicios/contrato-de-arras", label: "Guía de contrato de arras" },
      { href: "/servicios/contrato-arras-penitenciales", label: "Arras penitenciales" },
      { href: "/servicios/acompanamiento-reserva-arras", label: "Acompañamiento hasta arras" },
      { href: "/servicios/acompanamiento-compra-parking-trastero", label: "Compra parking o trastero" },
      { href: "/servicios/pack-arras-gestion-documental-vendedor", label: "Pack arras + gestión vendedor (495 €)" },
      { href: "/servicios/reserva-de-compra", label: "Reserva de compra" },
      { href: "/precios", label: "Todos los precios y contratar" },
    ],
  },
  {
    title: "Vendedor",
    subtitle: "Vende entre particulares",
    links: [
      { href: "/servicios/servicio-completo-venta", label: "Servicio completo de venta" },
      { href: "/servicios/vender-piso-sin-agencia", label: "Vender sin agencia" },
      { href: "/servicios/gestion-documental-vendedor", label: "Gestión documental post-arras" },
    ],
  },
  {
    title: "Comprador",
    subtitle: "Compra con respaldo legal",
    links: [
      { href: "/servicios/servicio-completo-compra", label: "Servicio completo de compra" },
      { href: "/servicios/comprar-piso-sin-agencia", label: "Comprar sin agencia" },
      { href: "/servicios/revision-documental-post-arras", label: "Revisión documental post-arras" },
      { href: "/servicios/consulta-fiscal-vendedor", label: "Consulta fiscal vendedor (neto venta)" },
    ],
  },
  {
    title: "Alquiler",
    subtitle: "Propietarios e inquilinos",
    links: [
      { href: "/servicios/servicio-alquiler-integral", label: "Alquiler integral (captación)" },
      { href: "/servicios/pack-contrato-lau-administracion-alquiler", label: "Pack LAU + administración" },
      { href: "/servicios/redactar-contrato-alquiler", label: "Redactar contrato alquiler" },
      { href: "/servicios/contrato-alquiler-lau", label: "Contrato LAU" },
      { href: "/servicios/contrato-alquiler-opcion-compra", label: "Alquiler con opción a compra" },
      { href: "/servicios/contrato-alquiler-temporada", label: "Contrato de temporada" },
      { href: "/servicios/contrato-alquiler-habitacion", label: "Contrato de habitación" },
      { href: "/servicios/administracion-alquiler", label: "Administración de alquiler" },
      { href: "/servicios/administracion-alquiler-temporada", label: "Admin. temporada / habitaciones" },
      { href: "/servicios/acompanamiento-alquiler", label: "Acompañamiento de alquiler" },
      { href: "/servicios/revision-contrato-alquiler", label: "Revisión contrato (inquilinos)" },
      { href: "/servicios/contrato-de-alquiler", label: "Guía de contratos de alquiler" },
    ],
  },
] as const;

export const SERVICE_LANDING_NAV_LINKS: readonly ServiceLandingNavLink[] =
  SERVICE_LANDING_NAV_GROUPS.flatMap((group) => group.links);