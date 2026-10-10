import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { TEMPORADA_BCN_STEP_IMAGES } from "@/lib/contrato-alquiler-temporada-bcn-images";
import {
  getTemporadaBcnZoneEnrichment,
  type TemporadaBcnStepPatch,
} from "@/lib/contrato-alquiler-temporada-bcn-zone-enrichment";
import { TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS } from "@/lib/contrato-alquiler-temporada-bcn-barrios";

export const TEMPORADA_BARCELONA_PROCESS = {
  eyebrow: "Qué incluye tu contrato de alquiler por temporada",
  titleTemplate: "Cómo contratar tu contrato de temporada en {city}, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia especializado en arrendamientos temporales entre particulares. Propietario o inquilino: llamada previa sin compromiso, contratación online, documentación en panel, redacción con causa de temporalidad e inventario, e implementación para firmar con asesoramiento en cláusulas clave — sin comisión sobre la renta.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Subes DNI, datos del inmueble, calendario de la estancia e inventario; ves el borrador, comentarios del gestor e historial. Causa de temporalidad, fianza de dos mensualidades, suministros y salida quedan centralizados hasta la firma.",
} as const;

function applyPatch(step: VenderSinAgenciaProcessStep, patch?: TemporadaBcnStepPatch): VenderSinAgenciaProcessStep {
  if (!patch) return step;
  return {
    ...step,
    ...(patch.title ? { title: patch.title } : {}),
    ...(patch.description ? { description: patch.description } : {}),
    ...(patch.howWeDoIt ? { howWeDoIt: patch.howWeDoIt } : {}),
    ...(patch.checklist ? { checklist: patch.checklist } : {}),
  };
}

export function temporadaBarcelonaProcessTitle(city: string): string {
  return TEMPORADA_BARCELONA_PROCESS.titleTemplate.replace("{city}", city);
}

export function isTemporadaBarcelonaExtendedSlug(slug: string): boolean {
  return (TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS as readonly string[]).includes(slug);
}

export function buildTemporadaBarcelonaSteps(
  slug: string,
  city: string,
  priceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  const zone = city;
  const enrich = getTemporadaBcnZoneEnrichment(slug);

  const base: VenderSinAgenciaProcessStep[] = [
    {
      step: 1,
      title: "Llamada con tu gestor: le cuentas la operación de temporada",
      description: `Antes de pagar, hablas con un gestor de alquileres temporales en ${zone}. Explicas motivo de la estancia (estudios, trabajo acotado, obra, verano amueblado), duración, renta, fianza, suministros e inventario. Resolvemos si encaja contrato de temporada (art. 3.2 LAU) y no un LAU de vivienda habitual.`,
      howWeDoIt: [
        "Primera toma de contacto por teléfono o WhatsApp — sin compromiso.",
        "Orientación para propietarios: causa de temporalidad, plazos cerrados y salida.",
        "Orientación para inquilinos: qué exigir por escrito antes de transferir fianza.",
        "Plan claro: contratación → documentación → borrador → firma.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Particulares sin comisión inmobiliaria",
        "Diferencia temporada vs LAU explicada",
        "Asesoramiento antes de contratar",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.llamada,
      imageAlt: `Gestor Livendia sobre contrato de temporada en ${zone}`,
    },
    {
      step: 2,
      title: "Contratas el servicio de contrato de alquiler por temporada",
      description: `Contratas online desde esta web (${priceLabel} IVA incl.) y se abre tu expediente Livendia. Tarifa plana por redacción profesional del contrato de temporada — no un PDF genérico de vivienda habitual.`,
      howWeDoIt: [
        "Contratación en minutos tras la llamada o desde la landing.",
        "Confirmación de pago y acceso al área de cliente.",
        "Asignación de gestor y plazo orientativo (24-48 h laborables con documentación completa).",
        "Factura y condiciones archivadas en panel.",
      ],
      checklist: [
        `${priceLabel} IVA incl. — precio cerrado`,
        "Contratación 100 % online",
        "Sin comisión sobre la renta mensual",
        "Mismo gestor hasta la entrega",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.contratar,
      imageAlt: "Contratar contrato alquiler temporada Livendia online",
    },
    {
      step: 3,
      title: "Envías datos y documentación para preparar el contrato",
      description:
        "Subes al panel DNI de arrendador e inquilino, dirección, renta, fianza (hasta dos mensualidades en uso distinto de vivienda), duración, motivo de la estancia, suministros y fotos para inventario del piso amueblado.",
      howWeDoIt: [
        "Checklist guiado: partes, inmueble y condiciones verbales que deben quedar por escrito.",
        "Carga segura de documentos e imágenes para inventario.",
        "Aclaración de mobiliario, limpieza de salida y depósitos adicionales si procede.",
        "Confirmación de información completa antes de redactar.",
      ],
      checklist: [
        "Inventario desde el panel",
        "Causa de temporalidad documentada",
        "Renta, fianza y gastos definidos",
        "Sin desplazarte a gestoría física",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.documentacion,
      imageAlt: "Documentación contrato alquiler temporada Livendia",
    },
    {
      step: 4,
      title: "Redactamos el contrato de temporada adaptado a tu caso",
      description:
        "El gestor analiza la documentación y redacta cláusulas de duración, prórroga, extinción, fianza, uso del inmueble e inventario. El borrador refleja el motivo real de la estancia — Erasmus, proyecto, congreso u obra — no una plantilla LAU estándar.",
      howWeDoIt: [
        "Cláusula de causa de temporalidad explícita (art. 3.2 LAU).",
        "Coherencia entre plazo pactado y motivo de la estancia.",
        "Inventario integrado cuando el estado debe quedar documentado.",
        "Borrador en expediente para revisión conjunta.",
      ],
      checklist: [
        "Fuera del régimen LAU de vivienda habitual",
        "Prórrogas LAU no aplicables si está bien redactado",
        "Entrega 24-48 h laborables (info completa)",
        "Lenguaje claro para ambas partes",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.redaccion,
      imageAlt: "Redacción contrato alquiler temporada Livendia",
    },
    {
      step: 5,
      title: "Implementación para firmar y asesoramiento en cláusulas clave",
      description:
        "Entregamos contrato listo para firmar en papel o firma electrónica si lo necesitáis. El gestor explica fianza, salida, suministros e inventario hasta que propietario e inquilino firmen con criterio.",
      howWeDoIt: [
        "Repaso de extinción al terminar el plazo y devolución de fianza.",
        "Opción de firma presencial o electrónica certificada.",
        "Resolución de dudas antes de entregar llaves o cobrar depósito.",
        "Archivo final en expediente.",
      ],
      checklist: [
        "Asesoramiento hasta la firma",
        "Cláusulas críticas explicadas",
        "Inventario vinculado al contrato",
        "Gestor disponible por WhatsApp",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.firma,
      imageAlt: "Firma contrato temporada con gestor Livendia",
    },
  ];

  return [
    applyPatch(base[0]!, enrich?.step1),
    base[1]!,
    applyPatch(base[2]!, enrich?.step3),
    base[3]!,
    applyPatch(base[4]!, enrich?.step5),
  ];
}

export function temporadaBarcelonaProcessIntro(slug: string): string {
  return getTemporadaBcnZoneEnrichment(slug)?.processIntro ?? TEMPORADA_BARCELONA_PROCESS.intro;
}
