import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";
import { SIN_AGENCIA_STEP_IMAGE_POOL } from "@/lib/sin-agencia-paso-a-paso-image-pools";
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";

/** Notas locales por paso (5) — landings pack arras metro/zona. */
export function packArrasMetroStepLocalNotes(zoneDetail: string): readonly string[] {
  return [
    `Llamada inicial: comprador, señal y anejos (parking, trastero) — ${zoneDetail}.`,
    "Contratas el pack 495 € IVA incl. y abres expediente en panel Livendia.",
    "Recogida documental: cèdula, ITE, certificado de comunidad y nota simple.",
    `Arras 145 € CCCat (621-4 a 621-9), cláusula 621-49 si hay hipoteca — ${zoneDetail}.`,
    "Informe semáforo pre-notaría y coordinación de escritura sin rebajas tardías.",
  ] as const;
}

export const PACK_ARRAS_GESTION_PROCESS = {
  eyebrow: "Qué incluye tu pack arras + gestión documental",
  titleTemplate: (city: string) =>
    `Cómo vender en ${city} entre particulares con pack 495 €, paso a paso`,
  introTemplate: (city: string) =>
    `Cinco fases con el mismo gestor Livendia en ${city}. Tú cierras precio con tu comprador; nosotros redactamos arras CCCat, recopilamos documentación y te preparamos la escritura en notaría — sin comisión sobre el precio del piso.`,
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Nota simple, certificados de comunidad, informe semáforo e historial con tu gestor: todo en el área de cliente Livendia. Consulta el estado de la venta sin depender de correos sueltos.",
  serviceLine: "Pack arras + gestión vendedor · Livendia",
} as const;

export function getPackArrasGestionStepImages(slug: string): readonly [string, string, string, string, string] {
  const seed = slug.startsWith("barcelona-") || slug === "barcelona" ? slug : slug;
  const picked = pickUniqueLandingImages(
    `pack-arras-gestion:steps:${seed}`,
    5,
    SIN_AGENCIA_STEP_IMAGE_POOL,
  );
  return picked as unknown as readonly [string, string, string, string, string];
}

/** Asegura 5 notas locales (compatibilidad landings antiguas con 4 pasos). */
export function normalizePackArrasStepLocalNotes(
  notes: readonly string[],
  city: string,
): readonly [string, string, string, string, string] {
  const fifthDefault = `Informe semáforo pre-notaría y coordinación de hitos con el comprador en ${city}.`;
  if (notes.length >= 5) {
    return [notes[0]!, notes[1]!, notes[2]!, notes[3]!, notes[4]!];
  }
  if (notes.length === 4) {
    return [notes[0]!, notes[1]!, notes[2]!, notes[3]!, fifthDefault];
  }
  return [
    `Llamada con gestor: comprador, precio y plazos en ${city}.`,
    `Contratas el pack ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. y se abre expediente en panel.`,
    `Recogida documental: nota simple, comunidad, cèdula/ITE según el inmueble.`,
    `Redacción y firma de arras CCCat equilibradas con el comprador.`,
    fifthDefault,
  ];
}

export function buildPackArrasGestionSteps(
  city: string,
  slug: string,
  priceLabel: string,
  localNotes: readonly string[],
): readonly VenderSinAgenciaProcessStep[] {
  const notes = normalizePackArrasStepLocalNotes(localNotes, city);
  const imgs = getPackArrasGestionStepImages(slug);

  return [
    {
      step: 1,
      title: "Llamada con tu gestor: cuentas la operación",
      description: `Explicas precio pactado, plazos a escritura, hipoteca del comprador y si hay parking o trastero. ${notes[0]}`,
      howWeDoIt: [
        "Contacto por teléfono o WhatsApp — sin compromiso.",
        "Repaso de riesgos documentales antes de firmar arras.",
        "Calendario realista hasta notaría en tu barrio o municipio.",
        "Decisión clara: arras primero, documentación en paralelo.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Orientación venta entre particulares",
        "Sin exclusiva ni comisión sobre el precio",
        "Misma persona hasta la escritura",
      ],
      imageSrc: imgs[0],
      imageAlt: `Gestor Livendia en llamada — pack arras ${city}`,
    },
    {
      step: 2,
      title: `Contratas el pack (${priceLabel} IVA incl.)`,
      description: `Un solo pago con tarjeta: arras (145 €) + gestión documental vendedor (350 €). ${notes[1]}`,
      howWeDoIt: [
        "Contratación online en minutos desde esta landing.",
        "Confirmación de pago y acceso al panel Livendia.",
        "Asignación de gestor dedicado a tu venta.",
        "Factura y condiciones archivadas en tu expediente.",
      ],
      checklist: [
        `${priceLabel} IVA incl. — precio cerrado`,
        "Sin porcentaje sobre el precio de venta",
        "Panel activo desde el primer día",
        "Pack pensado si ya tienes comprador",
      ],
      imageSrc: imgs[1],
      imageAlt: `Contratar pack arras y gestión Livendia — ${city}`,
    },
    {
      step: 3,
      title: "Subes documentación al panel o se la envías al gestor",
      description: `Centralizamos datos del inmueble, comprador y vendedor. ${notes[2]}`,
      howWeDoIt: [
        "Nota simple registral o datos para solicitarla.",
        "Certificado de deuda cero de comunidad.",
        "Cèdula d'habitabilitat, ITE o energético si procede.",
        "Cargas hipotecarias y orientación de cancelación.",
      ],
      checklist: [
        "Checklist vendedor en panel",
        "Subida segura de PDFs",
        "Recordatorios hasta completar el 100 %",
        "Gestor persigue plazos con la comunidad",
      ],
      imageSrc: imgs[2],
      imageAlt: `Documentación venta entre particulares — ${city}`,
    },
    {
      step: 4,
      title: "Redacción y firma de arras CCCat",
      description: `El gestor redacta cláusulas equilibradas (penitenciales o confirmatorias) y coordina la firma. ${notes[3]}`,
      howWeDoIt: [
        "Borrador de arras conforme al CCCat (621-4 a 621-9).",
        "Cláusula 621-49 si el comprador financia con hipoteca.",
        "Coherencia entre señal verbal y contrato escrito.",
        "Revisión conjunta antes de entregar la señal.",
      ],
      checklist: [
        "Arras adaptadas a tu operación",
        "Plazos y penalizaciones equilibradas",
        "Parking/trastero reflejados si aplica",
        "Sin plantillas genéricas de internet",
      ],
      imageSrc: imgs[3],
      imageAlt: `Contrato de arras entre particulares — ${city}`,
    },
    {
      step: 5,
      title: "Gestión documental e informe semáforo hasta notaría",
      description: `Informe verde/ámbar/rojo antes de escritura y coordinación de hitos con el comprador. ${notes[4]}`,
      howWeDoIt: [
        "Seguimiento de certificados pendientes post-arras.",
        "Informe semáforo con lo que falta o está en orden.",
        "Orientación sobre plusvalía e impuestos del vendedor.",
        "Preparación para firma en notaría sin rebajas tardías.",
      ],
      checklist: [
        "Expediente ordenado para el notario",
        "Menos sorpresas días antes de firmar",
        "Gestor disponible por WhatsApp",
        "Opción cita en despacho Les Corts (Barcelona)",
      ],
      imageSrc: imgs[4],
      imageAlt: `Preparación escritura notaría — pack gestión ${city}`,
    },
  ] as const;
}

export type PackArrasLocalTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export function defaultPackArrasGestionTestimonials(city: string): readonly PackArrasLocalTestimonial[] {
  return [
    {
      quote: `Ya tenía comprador en ${city} y no quería pagar comisión. El pack cubrió arras y el papeleo hasta notaría por 495 € — mucho más barato que una agencia.`,
      author: "Laura M.",
      role: `Vendedora particular · ${city}`,
    },
    {
      quote:
        "El gestor detectó una derrama en comunidad que no estaba en el borrador de arras. Lo resolvimos antes de la señal y evitamos una rebaja de última hora.",
      author: "Jordi P.",
      role: `Vendedor entre particulares · ${city}`,
    },
    {
      quote:
        "Subí todo al panel desde otra provincia. Misma persona en WhatsApp hasta la escritura; no tuve que ir a una gestoría física cada semana.",
      author: "Ana G.",
      role: `Propietaria no residente · ${city}`,
    },
  ] as const;
}
