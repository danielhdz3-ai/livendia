import {
  ADMINISTRACION_ALQUILER_LAU_PROCESS_META,
  ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES,
  buildAdministracionAlquilerLauSteps,
} from "@/lib/administracion-alquiler-lau-modules";
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";

export function administracionLauBarcelonaProcessTitle(zoneLabel: string): string {
  return `Cómo administramos tu alquiler en ${zoneLabel}, paso a paso`;
}

export function administracionLauBarcelonaProcessIntro(zoneLabel: string): string {
  return `Cinco fases con el mismo gestor Livendia en ${zoneLabel} y área metropolitana. Operativa online (panel y WhatsApp) y gestor presencial en el piso cuando la operación lo exige — entrega, inventario, industrial o mediación — incluido en ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`;
}

/** Cinco pasos visibles (Paso 1…5) — administración LAU Barcelona/AMB. */
export function buildAdministracionAlquilerLauBarcelonaSteps(
  zoneLabel: string,
  priceLabel: string,
  zoneHeroImage: string,
): readonly VenderSinAgenciaProcessStep[] {
  const national = buildAdministracionAlquilerLauSteps(priceLabel);

  return [
    {
      ...national[0],
      title: `Contratas y das de alta el piso en ${zoneLabel}`,
      description: `Pagas ${priceLabel} IVA incl. sin permanencia y abres expediente con contrato LAU, inquilino y cuenta bancaria. Tu gestor en Les Corts confirma el arranque y conoce la normativa catalana (zona tensionada, INCASÒL, IRAV) aplicable a ${zoneLabel}.`,
      imageSrc: zoneHeroImage.startsWith("/") ? zoneHeroImage : national[0].imageSrc,
      imageAlt: `Alta administración alquiler LAU en ${zoneLabel}`,
    },
    {
      ...national[1],
      description: `Desde la activación en ${zoneLabel}, el arrendatario contacta solo con Livendia. Filtramos consultas, averías y reclamaciones; tú no recibes WhatsApp directos salvo decisiones que requieran tu firma.`,
      imageSrc: national[1].imageSrc,
    },
    national[2],
    {
      ...national[3],
      description: `Incidencias, averías y coordinación con industriales del barrio: el inquilino abre parte con nosotros. Vigilamos también renovaciones y plazos legales en Cataluña antes de que venzan.`,
      howWeDoIt: [
        ...national[3].howWeDoIt,
        "Avisos de renovación, IRAV y fin de contrato con margen para decidir.",
        "Addenda o nuevo contrato si lo necesitas (servicio aparte).",
      ],
    },
    {
      step: 5,
      title: "Gestor presencial en el inmueble o en tu zona",
      description: `Si no basta con gestión online, un gestor Livendia acude a ${zoneLabel}: entrega o recogida de llaves, inventario fotográfico, visita con industrial o perito, mediación in situ o gestiones puntuales en comunidad. Incluido en la cuota mensual — no es un extra opcional.`,
      howWeDoIt: [
        "Check-in / check-out e inventario cuando el arrendamiento lo requiere.",
        "Presencia en averías graves, siniestros o peritajes.",
        "Inspección presencial antes de cargos, reparaciones o renovaciones conflictivas.",
        "Despacho en Les Corts (Mejía Lequerica 44) para reuniones con tu gestor.",
      ],
      checklist: [
        "Online + presencial incluido",
        `${priceLabel} IVA incl.`,
        "Mismo gestor online y en campo",
        "Sin suplemento por desplazamiento AMB",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES.renovaciones,
      imageAlt: `Gestor Livendia presencial en ${zoneLabel}`,
    },
  ];
}

export const ADMINISTRACION_ALQUILER_LAU_BARCELONA_PROCESS_META = {
  eyebrow: ADMINISTRACION_ALQUILER_LAU_PROCESS_META.eyebrow,
  alwaysWithYouTitle: ADMINISTRACION_ALQUILER_LAU_PROCESS_META.alwaysWithYouTitle,
  alwaysWithYouBody: ADMINISTRACION_ALQUILER_LAU_PROCESS_META.alwaysWithYouBody,
  serviceLine: "Administración de alquiler LAU · Livendia",
  feeNote: `${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. · sin permanencia · gestor online y presencial en Barcelona/AMB.`,
} as const;
