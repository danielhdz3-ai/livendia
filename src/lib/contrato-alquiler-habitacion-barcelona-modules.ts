import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { HABITACION_BARCELONA_STEP_IMAGES } from "@/lib/contrato-alquiler-habitacion-images";

export const HABITACION_BARCELONA_PROCESS = {
  eyebrow: "Qué incluye tu contrato de alquiler de habitación",
  titleTemplate: "Cómo funciona tu contrato de habitación en {city}, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia especializado en pisos compartidos. Tanto si eres propietario como inquilino: llamada previa, contratación online, documentación en panel, redacción jurídica e implementación para firmar con asesoramiento en las cláusulas que más importan en convivencia.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Subes DNI, datos del piso, fotos de la habitación y zonas comunes; ves el borrador, comentarios del gestor e historial de actividad. Sin depender de correos sueltos: fianza, inventario con fotos y normas de convivencia quedan centralizados hasta la firma.",
} as const;

export const HABITACION_LEGAL_GUARANTEES = [
  {
    title: "Fianza garantizada conforme a la ley",
    description:
      "La fianza y el depósito se redactan dentro de los límites legales aplicables al alquiler de habitación, con criterio claro de devolución e inventario al entrar y salir.",
  },
  {
    title: "Precio legal garantizado",
    description:
      "Tarifa plana publicada en web: sin sorpresas ni comisiones sobre la renta mensual. Lo que ves en la landing es lo que pagas por el servicio de redacción.",
  },
  {
    title: "Derechos claros en la convivencia",
    description:
      "Horarios, visitas, cocina, baños compartidos, limpieza e internet por escrito — equilibrio entre propietario que comparte piso e inquilino con uso exclusivo de su habitación.",
  },
  {
    title: "Contratos blindados bajo la ley",
    description:
      "Régimen de habitación en vivienda compartida, no plantilla LAU de piso entero copiada de internet. Cláusulas adaptadas a la normativa vigente y a tu caso concreto.",
  },
  {
    title: "Inventario detallado con fotos",
    description:
      "Checklist de mobiliario, estado de la habitación y anexo fotográfico para evitar disputas sobre la fianza cuando alguien abandona el piso compartido.",
  },
] as const;

export function habitacionBarcelonaProcessTitle(city: string): string {
  return HABITACION_BARCELONA_PROCESS.titleTemplate.replace("{city}", city);
}

export function buildHabitacionBarcelonaSteps(
  city: string,
  priceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  const zone = city;
  return [
    {
      step: 1,
      title: "Llamada con tu gestor: le cuentas la operación",
      description: `Antes de pagar, hablas con un gestor especializado en alquiler de habitación en ${zone}. Explicas si eres propietario o inquilino, cuántas personas conviven, renta acordada, fianza, duración y dudas sobre convivencia, gastos o preaviso. Resolvemos preguntas habituales en pisos compartidos del área metropolitana.`,
      howWeDoIt: [
        "Primera toma de contacto por teléfono o WhatsApp — sin compromiso.",
        "Orientación para propietarios: normas de cocina, visitas, subarriendo y varias habitaciones en el mismo piso.",
        "Orientación para inquilinos: qué exigir por escrito antes de transferir fianza o primera mensualidad.",
        "Plan claro: contratación → documentación → borrador → firma o firma electrónica certificada.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Propietarios e inquilinos particulares",
        "Sin comisión sobre la renta mensual",
        "Asesoramiento antes de contratar",
      ],
      imageSrc: HABITACION_BARCELONA_STEP_IMAGES.llamada,
      imageAlt: `Gestor Livendia en llamada sobre contrato de habitación en ${zone}`,
    },
    {
      step: 2,
      title: "Contratas el servicio de contrato de alquiler de habitación",
      description: `Contratas online desde esta web (${priceLabel} IVA incl.) y se abre tu expediente Livendia. Un único precio por redacción profesional del contrato de habitación — no un PDF genérico de vivienda completa.`,
      howWeDoIt: [
        "Contratación en minutos tras la llamada o directamente desde la landing.",
        "Confirmación de pago y acceso al área de cliente.",
        "Asignación de gestor y plazo orientativo (48-72 h laborables con documentación completa).",
        "Factura y condiciones del servicio archivadas en panel.",
      ],
      checklist: [
        `${priceLabel} IVA incl. — precio cerrado`,
        "Contratación 100 % online",
        "Precio legal garantizado en web",
        "Mismo gestor hasta la entrega del contrato",
      ],
      imageSrc: HABITACION_BARCELONA_STEP_IMAGES.contratar,
      imageAlt: "Contratar contrato de habitación Livendia online",
    },
    {
      step: 3,
      title: "Envías datos y documentación para preparar el contrato",
      description:
        "Subes al panel (o envías al gestor) DNI de propietario e inquilino, dirección del piso, importe de renta, fianza pactada, duración, reparto de suministros y fotos de la habitación y zonas comunes para el inventario detallado.",
      howWeDoIt: [
        "Checklist guiado: partes, piso, habitación concreta y condiciones verbales que deben quedar por escrito.",
        "Carga segura de documentos e imágenes para inventario fotográfico.",
        "Aclaración de convivencia: mascotas, parejas, horarios, limpieza y uso de salón.",
        "Confirmación de que la información está completa antes de redactar.",
      ],
      checklist: [
        "Inventario con fotos desde el panel",
        "Datos de propietario e inquilino",
        "Renta, fianza y gastos incluidos definidos",
        "Sin desplazarte a gestoría física",
      ],
      imageSrc: HABITACION_BARCELONA_STEP_IMAGES.documentacion,
      imageAlt: "Documentación contrato habitación piso compartido Livendia",
    },
    {
      step: 4,
      title: "Tramitamos, analizamos la documentación y redactamos el contrato",
      description:
        "El gestor analiza la documentación, contrasta lo pactado en visita o por WhatsApp y redacta el contrato de habitación: convivencia, fianza garantizada, preaviso, causas de resolución e inventario. Te enviamos el borrador al expediente.",
      howWeDoIt: [
        "Revisión de coherencia entre fianza, renta y normativa aplicable.",
        "Redacción de cláusulas de zonas comunes, visitas y suministros.",
        "Anexo de inventario detallado con referencia a las fotos aportadas.",
        "Borrador listo para revisión conjunta propietario-inquilino.",
      ],
      checklist: [
        "Contrato blindado bajo la ley — no plantilla LAU de piso entero",
        "Derechos de convivencia explícitos",
        "Borrador en 48-72 h laborables (info completa)",
        "Comentarios del gestor en lenguaje claro",
      ],
      imageSrc: HABITACION_BARCELONA_STEP_IMAGES.redaccion,
      imageAlt: "Redacción contrato alquiler habitación Livendia",
    },
    {
      step: 5,
      title: "Implementación para firmar y asesoramiento en cláusulas clave",
      description:
        "Entregamos el contrato listo para firmar en papel o con firma electrónica certificada si lo necesitáis. El gestor explica las cláusulas más importantes — fianza, preaviso, gastos, inventario y resolución — hasta que propietario e inquilino firmen con criterio.",
      howWeDoIt: [
        "Repaso línea a línea de fianza, preaviso y devolución de depósito.",
        "Opción de firma presencial o electrónica certificada según vuestra operación.",
        "Resolución de últimas dudas antes de entregar llaves o cobrar la fianza.",
        "Archivo final en expediente para ambas partes.",
      ],
      checklist: [
        "Asesoramiento hasta la firma",
        "Firma electrónica certificada disponible",
        "Cláusulas críticas explicadas",
        "Inventario y fotos vinculados al contrato",
      ],
      imageSrc: HABITACION_BARCELONA_STEP_IMAGES.firma,
      imageAlt: "Firma contrato habitación con asesoramiento gestor Livendia",
    },
  ];
}

/** Slugs con módulo extendido (5 pasos visuales + garantías). */
export const HABITACION_BARCELONA_EXTENDED_SLUGS = new Set<string>([
  "barcelona",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "sabadell",
  "terrassa",
]);

export function isHabitacionBarcelonaExtendedSlug(slug: string): boolean {
  if (HABITACION_BARCELONA_EXTENDED_SLUGS.has(slug)) return true;
  return slug.startsWith("barcelona-");
}
