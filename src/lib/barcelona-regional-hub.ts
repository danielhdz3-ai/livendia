import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH } from "@/lib/administracion-alquiler-barcelona-hub-content";
import { GESTORIA_INMOBILIARIA_LOCAL_BASE } from "@/lib/gestoria-inmobiliaria-local-cities";
import { PACK_COMPRADOR_BARCELONA_LANDING_PATH } from "@/lib/catalog.public";

export const BARCELONA_REGIONAL_HUB_SECTION_ID = "barcelona-regional-hub" as const;

export type BarcelonaRegionalHubDoor = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  highlight?: boolean;
};

/** Cuatro puertas del hub Barcelona (contratos, compraventa, admin, despacho). */
export const BARCELONA_REGIONAL_HUB_DOORS: readonly BarcelonaRegionalHubDoor[] = [
  {
    id: "contratos",
    title: "Contratos por barrio",
    description:
      "LAU, temporada, habitación, arras y carrusel de servicios con normativa catalana (INCASÒL, zona tensionada, CCCat).",
    href: CONTRATOS_INMOBILIARIOS_BARCELONA_PATH,
    cta: "Hub contratos Barcelona",
    highlight: true,
  },
  {
    id: "compraventa",
    title: "Compraventa entre particulares",
    description:
      "Compra y venta sin comisión de agencia, revisión post-arras y pack comprador con cita en despacho Les Corts.",
    href: `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/barcelona`,
    cta: "Gestoría compraventa",
  },
  {
    id: "admin",
    title: "Administración de alquiler",
    description:
      "Gestión mensual online y gestor en el inmueble cuando hace falta — barrios y municipios del área metropolitana.",
    href: ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH,
    cta: "Admin alquiler Barcelona",
  },
  {
    id: "despacho",
    title: "Despacho Les Corts",
    description: "Carrer de Mejía Lequerica, 44 — cita presencial con tu gestor (metro Les Corts / Zona Universitària).",
    href: `${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}#despacho`,
    cta: "Reservar cita",
    highlight: true,
  },
] as const;

export const BARCELONA_PACK_COMPRADOR_HUB_LINK = {
  href: PACK_COMPRADOR_BARCELONA_LANDING_PATH,
  label: "Pack comprador Barcelona (post-arras + cita despacho)",
} as const;
