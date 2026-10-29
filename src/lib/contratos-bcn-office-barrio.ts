import {
  CONTRATOS_BCN_OFFICE_SECTION,
} from "@/lib/contratos-inmobiliarios-barcelona-content";
import type { ContratosInmobiliariosBarrioPage } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS,
  contratosInmobiliariosBarrioPath,
} from "@/lib/contratos-inmobiliarios-barcelona-barrios";

export type ContratosBcnOfficeContent = {
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  transport: string;
  bullets: readonly string[];
  sideImage: string;
  sideImageAlt: string;
  whatsAppPrefill: string;
};

const DEFAULT_IMAGE = "/images/zonas barcelona/lescorts4.jpg";
const DEFAULT_IMAGE_ALT = "Despacho Livendia en Les Corts, Barcelona — gestoría inmobiliaria";

/** Tiempo orientativo metro/bus desde el barrio hasta Mejía Lequerica 44. */
const TRAVEL_HINT: Partial<Record<ContratosInmobiliariosBarrioPage["slug"], string>> = {
  "les-corts":
    "Estás en el distrito del despacho: metro Les Corts o Zona Universitària (L3), FGC · aparcamiento en Mejía Lequerica.",
  eixample:
    "Desde el Eixample: metro L3 (Diagonal, Passeig de Gràcia) o L5 → Plaça de Espanya + L3 · ~15–20 min hasta Les Corts.",
  gracia:
    "Desde Gràcia: L3 Fontana o Lesseps → Plaça del Centre / Zona Universitària · ~20 min en metro.",
  poblenou:
    "Desde Poblenou / 22@: L4 Llacuna o Bogatell → transbordo L3 a Les Corts · ~25 min.",
  "el-born":
    "Desde El Born: L4 Jaume I o Barceloneta → L3 a Les Corts · ~20–25 min; también bus V11/Zona Universitària.",
  "sants-montjuic":
    "Desde Sants: metro L3 Plaça del Centre o L1/L5 Sants Estació + L3 · ~10–15 min — uno de los trayectos más cortos.",
  "sarria-sant-gervasi":
    "Desde Sarrià / Sant Gervasi: FGC Sarrià o L6 → L3 Zona Universitària · ~15–20 min.",
  "el-raval":
    "Desde El Raval: L3 Liceu o Paral·lel → Zona Universitària · ~15 min en metro.",
  barceloneta:
    "Desde La Barceloneta: L4 Barceloneta → L3 transfer · ~25 min; ideal combinar cita presencial tras revisión online.",
  "vila-olimpica":
    "Desde Vila Olímpica: L4 Ciutadella → L3 Les Corts · ~25 min; contratos temporada/LAU revisables en despacho.",
};

function focusLine(barrio: ContratosInmobiliariosBarrioPage): string {
  const f = barrio.servicesFocus[0] ?? "contratos inmobiliarios";
  return f.toLowerCase();
}

export function getContratosBcnOfficeContent(
  barrio?: ContratosInmobiliariosBarrioPage | null,
): ContratosBcnOfficeContent {
  if (!barrio) {
    return {
      ...CONTRATOS_BCN_OFFICE_SECTION,
      sideImage: DEFAULT_IMAGE,
      sideImageAlt: DEFAULT_IMAGE_ALT,
      whatsAppPrefill:
        "Hola Livendia, quiero reservar cita en el despacho de Les Corts para tramitar un contrato inmobiliario.",
    };
  }

  const inDistrict = barrio.slug === "les-corts";
  const travel =
    TRAVEL_HINT[barrio.slug] ??
    `Desde ${barrio.name}: cita en Carrer de Mejía Lequerica 44 (Les Corts) — te indicamos la mejor ruta en metro o FGC al confirmar.`;

  const zoneSample = barrio.zoneHighlights.slice(0, 2).join(" · ");

  return {
    eyebrow: inDistrict
      ? `Despacho en ${barrio.name} · Mejía Lequerica 44`
      : `${barrio.districtLabel} · cita en despacho Les Corts`,
    title: inDistrict
      ? `Ven a vernos en Les Corts: cita para contratos en ${barrio.name}`
      : `Contratos en ${barrio.name}: reserva cita en nuestro despacho`,
    lead: inDistrict
      ? `Livendia tiene sede en el propio distrito (${barrio.name}): revisamos contigo en persona ${focusLine(barrio)}, arras, LAU o habitación — además del panel online y WhatsApp.`
      : `Tramitas online desde ${barrio.name}, pero si prefieres cara a cara revisamos borradores en nuestro despacho de Les Corts (Mejía Lequerica 44). Especialmente útil para ${focusLine(barrio)} en ${zoneSample}.`,
    body: `${barrio.localContext} En cita presencial repasamos checklist documental, cláusulas CCCat o LAU y dudas antes de firmar — el mismo gestor que lleva tu expediente en el panel.`,
    transport: travel,
    bullets: [
      `Gestor inmobiliario para ${barrio.name} — sin comisión de agencia sobre el precio del piso.`,
      inDistrict
        ? "Despacho en el barrio: revisión de borradores y firma asistida con cita previa."
        : "Mismo despacho Les Corts para todo Barcelona: lo acordado en cita queda reflejado en tu expediente online.",
      "INCASÒL, SERPAVI y zona tensionada revisados en borrador LAU cuando aplica en Barcelona.",
      "Horario L–V 9:00–19:30; cita previa por contacto o WhatsApp.",
    ],
    sideImage: inDistrict ? DEFAULT_IMAGE : barrio.image,
    sideImageAlt: inDistrict
      ? DEFAULT_IMAGE_ALT
      : `Cita en despacho Livendia — contratos inmobiliarios en ${barrio.name}, Barcelona`,
    whatsAppPrefill: `Hola Livendia, quiero reservar cita en el despacho de Les Corts para un contrato inmobiliario en ${barrio.name} (Barcelona).`,
  };
}

export const CONTRATOS_BCN_DESPACHO_BARRIO_LINKS = CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.map((b) => ({
  slug: b.slug,
  name: b.name,
  href: `${contratosInmobiliariosBarrioPath(b.slug)}#despacho`,
  shortLead: b.servicesFocus[0] ?? "Contratos inmobiliarios",
}));
