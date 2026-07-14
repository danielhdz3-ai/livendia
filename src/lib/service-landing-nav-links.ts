/**
 * Landings públicas de servicio (/servicios/…) enlazadas desde la navegación.
 * Mantener alineado con las page.tsx de cada servicio (excl. índices locales SEO).
 */

export type ServiceLandingNavLink = {
  href: string;
  label: string;
};

export type ServiceLandingNavGroup = {
  title: string;
  links: readonly ServiceLandingNavLink[];
};

/** Grupos para el desplegable «Servicios» del header. */
export const SERVICE_LANDING_NAV_GROUPS: readonly ServiceLandingNavGroup[] = [
  {
    title: "Compraventa",
    links: [
      { href: "/servicios/reserva-de-compra", label: "Reserva de compra" },
      { href: "/servicios/acompanamiento-reserva-arras", label: "Acompañamiento reserva hasta arras" },
      { href: "/servicios/servicio-completo-compra", label: "Servicio completo de compra" },
      { href: "/servicios/acompanamiento-compra-parking-trastero", label: "Compra parking o trastero" },
      { href: "/servicios/servicio-completo-venta", label: "Servicio completo de venta" },
      { href: "/servicios/revision-documental-post-arras", label: "Revisión documental comprador post-arras" },
      { href: "/servicios/gestion-documental-vendedor", label: "Gestión documental vendedor post-arras" },
      { href: "/servicios/contrato-arras-penitenciales", label: "Arras penitenciales" },
      { href: "/servicios/contrato-arras-confirmatorias", label: "Arras confirmatorias" },
      { href: "/servicios/contrato-de-arras", label: "Guía de contrato de arras" },
    ],
  },
  {
    title: "Alquiler",
    links: [
      { href: "/servicios/contrato-alquiler-lau", label: "Contrato LAU" },
      { href: "/servicios/contrato-alquiler-temporada", label: "Contrato de temporada" },
      { href: "/servicios/contrato-alquiler-habitacion", label: "Contrato de habitación" },
      { href: "/servicios/revision-contrato-alquiler", label: "Revisión de contrato de alquiler" },
      { href: "/servicios/contrato-de-alquiler", label: "Guía de contratos de alquiler" },
      { href: "/servicios/administracion-alquiler", label: "Administración de alquiler" },
    ],
  },
] as const;

export const SERVICE_LANDING_NAV_LINKS: readonly ServiceLandingNavLink[] =
  SERVICE_LANDING_NAV_GROUPS.flatMap((group) => group.links);
