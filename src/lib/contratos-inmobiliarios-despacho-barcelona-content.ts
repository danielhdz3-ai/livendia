import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";
import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS,
  contratosInmobiliariosBarrioPath,
  type ContratosInmobiliariosBarrioSlug,
} from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { getBusinessAddressDisplayLine } from "@/lib/business-nap";

export const CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH =
  "/contratos-inmobiliarios-despacho-barcelona" as const;

export const CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META = {
  title: "Contratos inmobiliarios despacho Barcelona | Cita Les Corts · Livendia",
  description: `Gestoría inmobiliaria con despacho en Barcelona (Les Corts): ${getBusinessAddressDisplayLine()}. Reserva cita para revisar LAU, arras, habitación o compraventa entre particulares — mismo expediente online.`,
  keywords: [
    "contratos inmobiliarios despacho barcelona",
    "gestoría inmobiliaria despacho barcelona",
    "cita gestor inmobiliario barcelona",
    "despacho les corts contratos",
    "mejía lequerica gestoría",
    "contrato arras cita presencial barcelona",
  ],
} as const;

export function contratosInmobiliariosDespachoBarrioPath(slug: ContratosInmobiliariosBarrioSlug): string {
  return `${CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH}/${slug}`;
}

export const CONTRATOS_DESPACHO_BCN_HUB_LINKS = CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.map((b) => ({
  slug: b.slug,
  name: b.name,
  districtLabel: b.districtLabel,
  href: contratosInmobiliariosDespachoBarrioPath(b.slug),
  contratosHref: contratosInmobiliariosBarrioPath(b.slug),
  image: b.image,
  imageAlt: b.imageAlt,
}));

export const CONTRATOS_DESPACHO_BCN_FAQ = [
  {
    q: "¿Dónde está el despacho Livendia en Barcelona?",
    a: `En ${getBusinessAddressDisplayLine()}. Atendemos con cita previa de lunes a viernes, 9:00–19:30.`,
  },
  {
    q: "¿Puedo tramitar todo online sin ir al despacho?",
    a: "Sí. El panel Livendia y WhatsApp cubren el 100 % del expediente. La cita presencial es opcional para revisar borradores antes de firmar.",
  },
  {
    q: "¿Qué contratos puedo revisar en cita?",
    a: "LAU, habitación, temporada, arras CCCat y documentación de compraventa entre particulares — con gestor inmobiliario asignado.",
  },
  {
    q: "¿El despacho sirve para barrios fuera de Les Corts?",
    a: "Sí. Propietarios e inquilinos de Eixample, Gràcia, Sants, Badalona, Mataró, Rubí y resto del área metropolitana reservan cita; cada barrio tiene landing con indicaciones de metro.",
  },
] as const;

export const CONTRATOS_DESPACHO_BCN_RELATED = [
  { href: CONTRATOS_INMOBILIARIOS_BARCELONA_PATH, label: "Hub contratos inmobiliarios Barcelona" },
  { href: contratosInmobiliariosDespachoBarrioPath("les-corts"), label: "Despacho en Les Corts (detalle)" },
] as const;
