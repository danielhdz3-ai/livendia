import {
  ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_META,
  ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES,
} from "@/lib/administracion-alquiler-temporada-modules";
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
} from "@/lib/catalog.public";
import { isAdminTemporadaBcnBarrioSlug } from "@/lib/administracion-alquiler-temporada-bcn-barrios";
import { isAdminTemporadaAmbSlug } from "@/lib/administracion-alquiler-temporada-amb-batch";
import { TEMPORADA_BCN_STEP_IMAGES } from "@/lib/contrato-alquiler-temporada-bcn-images";

export function isAdministracionTemporadaBarcelonaLocalSlug(slug: string): boolean {
  return slug === "barcelona" || isAdminTemporadaBcnBarrioSlug(slug) || isAdminTemporadaAmbSlug(slug);
}

export function administracionTemporadaBarcelonaProcessTitle(zoneLabel: string): string {
  return `Cómo administramos alquiler por temporada o habitaciones en ${zoneLabel}, paso a paso`;
}

export function administracionTemporadaBarcelonaProcessIntro(zoneLabel: string): string {
  return `Cinco pasos con el mismo gestor Livendia y panel online en ${zoneLabel}. No captamos inquilinos ni cobramos comisión sobre la renta: administramos rotación, entradas y salidas, contacto con ocupantes, servicio técnico y, cuando hace falta, gestor presencial en el piso — incluido en ${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL} IVA incl.`;
}

/** Cinco pasos (módulo Paso 1…5) — administración temporada/habitaciones Barcelona. */
export function buildAdministracionAlquilerTemporadaBarcelonaSteps(
  zoneLabel: string,
  priceLabel: string,
  zoneHeroImage: string,
): readonly VenderSinAgenciaProcessStep[] {
  const contrato = ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL;
  const zonePhoto =
    zoneHeroImage.startsWith("/") ? zoneHeroImage : TEMPORADA_BCN_STEP_IMAGES.contratar;

  return [
    {
      step: 1,
      title: `Llamada: administración de temporada o habitaciones en ${zoneLabel}`,
      description: `Antes de contratar, hablas con un gestor Livendia especializado en pisos compartidos y estancias acotadas en ${zoneLabel}. Cuéntanos si alquilas por habitación, temporada entre particulares o mezcla; cuántas rotaciones prevés, estado del contrato y si necesitas check-in presencial. Resolvemos dudas sobre la cuota mensual, contratos nuevos aparte y rescisiones incluidas.`,
      howWeDoIt: [
        "Contacto por teléfono o WhatsApp en horario laboral — sin compromiso.",
        "Orientación: administración 79 €/mes vs. alquiler integral si aún buscas inquilino.",
        "Explicación de qué incluye presencia del gestor en entregas e incidencias graves.",
        "Plan claro: contratación → alta en panel → gestión diaria → presencial si toca.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Sin comisión sobre la renta mensual",
        "Barcelona / AMB · oficina Les Corts",
        "Asesoramiento antes de pagar",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.llamada,
      imageAlt: `Llamada administración alquiler temporada ${zoneLabel}`,
    },
    {
      step: 2,
      title: "Contratas la administración mensual online",
      description: `Activas el servicio por ${priceLabel} IVA incl. al mes, sin permanencia. Accedes al panel Livendia, subes contratos vigentes, inventarios y datos de cada ocupante o habitación. Confirmación de pago y gestor asignado en el expediente.`,
      howWeDoIt: [
        "Contratación segura online tras la llamada o desde esta landing.",
        "Cuota mensual: inquilinos, entradas/salidas y servicio técnico.",
        `Contrato nuevo de habitación o temporada: ${contrato} IVA incl. por contrato, aparte.`,
        "Rescisiones tramitadas sin coste con la administración activa.",
      ],
      checklist: [
        `${priceLabel} IVA incl. / mes`,
        "Sin permanencia",
        "Panel 24/7",
        "Mismo gestor todo el ciclo",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.contratar,
      imageAlt: "Contratar administración alquiler temporada Livendia",
    },
    {
      step: 3,
      title: "Alta de inquilinos, calendario y documentación",
      description: `Registramos en ${zoneLabel} fechas de entrada y salida, fianzas por tramo y condiciones de cada ocupante. Subes DNI, contratos, inventarios y contactos; el gestor valida la información antes de asumir el canal con los inquilinos.`,
      howWeDoIt: [
        "Calendario de rotaciones y recordatorios de check-out.",
        "Inventario y fotos al cambio de inquilino cuando procede.",
        "Checklist por habitación en pisos compartidos.",
        "Archivo centralizado en panel — no carpetas sueltas.",
      ],
      checklist: [
        "Entradas y salidas coordinadas",
        "Estado del piso documentado",
        "Varios ocupantes bajo control",
        "100 % online salvo entrega presencial",
      ],
      imageSrc: TEMPORADA_BCN_STEP_IMAGES.documentacion,
      imageAlt: `Documentación administración temporada ${zoneLabel}`,
    },
    {
      step: 4,
      title: "Día a día: inquilinos, renta y servicio técnico",
      description: `Los ocupantes contactan con Livendia, no contigo. Controlamos que la renta llegue a tu cuenta, reclamamos retrasos, gestionamos averías (caldera, wifi, convivencia) y mediación entre habitaciones. Solo te avisamos para autorizar gastos o decisiones importantes.`,
      howWeDoIt: [
        "Canal único Livendia — cero WhatsApp al propietario por incidencias menores.",
        "Seguimiento mensual del ingreso en tu banco (sin cobrar la renta por ti).",
        "Coordinación de técnicos y cierre documentado en panel.",
        "Mediación profesional antes de escalar conflictos.",
      ],
      checklist: [
        "Renta directa inquilino → tu banco",
        "Incidencias y técnico incluidos",
        "Sin renta garantizada en cuota",
        "Histórico por ocupante",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES.tecnico,
      imageAlt: `Servicio técnico administración temporada ${zoneLabel}`,
    },
    {
      step: 5,
      title: "Gestor presencial en el piso o en tu zona",
      description: `Cuando la operación en ${zoneLabel} no se resuelve solo online, un gestor Livendia acude al inmueble: entrega o recogida de llaves, inventario fotográfico, visita con industrial o perito, mediación in situ o gestiones puntuales en comunidad. Incluido en ${priceLabel} IVA incl. — no es un extra opcional.`,
      howWeDoIt: [
        "Check-in / check-out presencial con registro de estado.",
        "Presencia en averías graves o peritajes.",
        "Inspección antes de cargos a fianza o renovaciones conflictivas.",
        "Despacho Les Corts (Mejía Lequerica 44) para reuniones con tu gestor.",
      ],
      checklist: [
        "Online + presencial incluido",
        "Sin suplemento por km en AMB",
        "Mismo gestor online y en campo",
        "Ideal para alta rotación",
      ],
      imageSrc: zonePhoto,
      imageAlt: `Gestor presencial administración alquiler ${zoneLabel}`,
    },
  ];
}

export const ADMINISTRACION_ALQUILER_TEMPORADA_BARCELONA_PROCESS_META = {
  eyebrow: "Qué incluye la administración de alquiler por temporada o habitaciones",
  alwaysWithYouTitle: ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_META.alwaysWithYouTitle,
  alwaysWithYouBody: ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_META.alwaysWithYouBody,
  serviceLine: "Admin. temporada / habitaciones · Livendia",
} as const;
