/**
 * Pasos nacionales específicos por producto — no reutilizar cuerpos de "venta sin agencia Barcelona".
 */
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { ACOMPANAMIENTO_ALQUILER_PROCESS_INTRO, ACOMPANAMIENTO_ALQUILER_PROCESS_STEPS } from "@/lib/acompanamiento-alquiler-shared";
import { ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS_INTRO, ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS_STEPS } from "@/lib/acompanamiento-reserva-arras-shared";
import { PARKING_TRASTERO_PROCESS_PHASES } from "@/lib/acompanamiento-compra-parking-trastero-shared";
import { REVISION_CONTRATO_ALQUILER_PROCESS_INTRO, REVISION_CONTRATO_ALQUILER_PROCESS_STEPS } from "@/lib/revision-contrato-alquiler-shared";
import { REVISION_POST_ARRAS_HOW_STEPS } from "@/lib/revision-documental-post-arras-local-shared";
import { buildHabitacionBarcelonaSteps, HABITACION_BARCELONA_PROCESS } from "@/lib/contrato-alquiler-habitacion-barcelona-modules";
import { buildTemporadaBarcelonaSteps, TEMPORADA_BARCELONA_PROCESS } from "@/lib/contrato-alquiler-temporada-barcelona-modules";
import { SIN_AGENCIA_STEP_IMAGE_POOL } from "@/lib/sin-agencia-paso-a-paso-image-pools";
import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";

const CITY = "toda España";

function img(i: number): string {
  return SIN_AGENCIA_STEP_IMAGE_POOL[i % SIN_AGENCIA_STEP_IMAGE_POOL.length]!;
}

function fromPhases(
  phases: readonly { title: string; description: string }[],
  serviceLabel: string,
  extra?: { howWeDoIt?: readonly string[]; checklist?: readonly string[] },
): readonly VenderSinAgenciaProcessStep[] {
  const how = extra?.howWeDoIt ?? [
    "Contratación online y expediente en panel Livendia.",
    "Gestor asignado en horario laboral.",
    "Documentación centralizada y segura.",
    "Misma persona hasta el hito del servicio.",
  ];
  const check = extra?.checklist ?? [
    "100 % online en toda España",
    "Gestor humano",
    "Precio publicado en web",
    "Sin comisión sobre el precio del inmueble",
  ];
  return phases.map((p, i) => ({
    step: i + 1,
    title: p.title,
    description: p.description,
    howWeDoIt: how,
    checklist: check,
    imageSrc: img(i),
    imageAlt: `${serviceLabel} — paso ${i + 1} Livendia`,
  }));
}

export const CONTRATO_ARRAS_PROCESS = {
  eyebrow: "Qué incluye tu contrato de arras",
  title: "Cómo redactamos tu contrato de arras, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia: tipo de arras, datos de la operación, documentación, borrador equilibrado y entrega listo para firmar — sin textos copiados de venta integral ni gestión post-arras incluida de serie.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Borradores, comentarios del gestor e historial del contrato de arras en el área de cliente Livendia.",
  serviceLine: "Contrato de arras · Livendia",
} as const;

export function buildContratoArrasPenitencialesSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Llamada con tu gestor: tipo de arras y operación",
      description:
        "Explicas precio, señal, plazos a escritura, penalidades y si el comprador financia. Definimos penitenciales o confirmatorias y qué cláusulas de desistimiento conviene (p. ej. hipoteca) según la normativa aplicable en tu comunidad autónoma.",
      howWeDoIt: [
        "Contacto por teléfono o WhatsApp sin compromiso.",
        "Repaso de riesgos en la señal y plazos irreales.",
        "Orientación penitenciales vs confirmatorias.",
        "Plan: contratar → documentación → borrador → firma.",
      ],
      checklist: ["Gestor desde el primer contacto", "Particulares comprador y vendedor", "Sin comisión sobre el precio", "Asesoramiento previo al pago"],
      imageSrc: img(0),
      imageAlt: "Gestor Livendia en llamada sobre contrato de arras",
    },
    {
      step: 2,
      title: `Contratas el contrato de arras (${priceLabel} IVA incl.)`,
      description:
        "Pagas la tarifa plana online y se abre tu expediente. Cubre redacción o revisión profesional del contrato de arras — no incluye gestión documental hasta notaría ni servicio completo de venta.",
      howWeDoIt: [
        "Contratación en minutos desde la web.",
        "Confirmación de pago y acceso al panel.",
        "Asignación de gestor (plazo habitual 48-72 h con documentación completa).",
        "Factura archivada en expediente.",
      ],
      checklist: [`${priceLabel} IVA incl.`, "Precio cerrado en web", "Panel desde el minuto uno", "Mismo gestor hasta la entrega"],
      imageSrc: img(1),
      imageAlt: "Contratar contrato de arras Livendia",
    },
    {
      step: 3,
      title: "Subes datos del inmueble y de las partes",
      description:
        "DNI de comprador y vendedor, descripción del inmueble, importe de la señal, fecha límite de escritura, condiciones suspensivas acordadas y borrador previo si lo tenéis de internet o de la otra parte.",
      howWeDoIt: [
        "Checklist guiado en panel.",
        "Carga segura de PDFs.",
        "Aclaración de importes y cuenta de ingreso de la señal.",
        "Confirmación antes de redactar.",
      ],
      checklist: ["Nota simple si la tenéis", "Condiciones verbales por escrito", "Sin desplazarte a gestoría", "Gestor indica qué falta"],
      imageSrc: img(2),
      imageAlt: "Documentación contrato de arras",
    },
    {
      step: 4,
      title: "Redactamos o corregimos el contrato de arras",
      description:
        "El gestor equilibra penalidades, plazos, obligaciones de cada parte y cláusulas de financiación cuando procede. Entregamos borrador en el panel para revisión conjunta antes de firmar.",
      howWeDoIt: [
        "Coherencia entre señal, precio y plazo a escritura.",
        "Revisión de cargas y menciones al registro si aportáis nota simple.",
        "Ajustes por WhatsApp o llamada hasta cerrar texto.",
        "PDF listo para firma entre particulares.",
      ],
      checklist: ["Borrador revisable en panel", "Cláusulas en lenguaje claro", "48-72 h laborables con info completa", "No sustituye al notario en escritura"],
      imageSrc: img(3),
      imageAlt: "Redacción contrato de arras entre particulares",
    },
    {
      step: 5,
      title: "Entrega final y asesoramiento antes de firmar",
      description:
        "Recibes el contrato definitivo, resolvemos dudas de última hora y te orientamos sobre el siguiente hito (documentación para notaría, revisión post-arras si eres comprador, etc.) sin mezclar otros servicios en el precio de las arras.",
      howWeDoIt: [
        "Versión final en panel.",
        "Checklist de qué firmar y qué guardar copia.",
        "Orientación sobre siguiente servicio si lo necesitas.",
        "Soporte en horario laboral hasta la firma de arras.",
      ],
      checklist: ["PDF firmable", "Asesoramiento incluido", "Sin permanencia", "Gestoría inmobiliaria Livendia"],
      imageSrc: img(4),
      imageAlt: "Entrega contrato de arras Livendia",
    },
  ];
}

export const CONTRATO_LAU_PROCESS = {
  eyebrow: "Qué incluye tu contrato de alquiler LAU",
  title: "Cómo redactamos tu contrato de alquiler LAU, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia. Propietario o inquilino: llamada, contratación, documentación, redacción bajo LAU vigente con inventario, y entrega para firmar — no confundir con administración mensual del piso.",
  alwaysWithYouTitle: HABITACION_BARCELONA_PROCESS.alwaysWithYouTitle,
  alwaysWithYouBody: HABITACION_BARCELONA_PROCESS.alwaysWithYouBody,
  serviceLine: "Contrato de alquiler LAU · Livendia",
} as const;

export function buildContratoAlquilerLauSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Llamada con tu gestor: arrendamiento de vivienda habitual",
      description: `Antes de pagar, explicas renta, duración, fianza, actualización de renta, gastos y si hay parking o amueblado. Resolvemos dudas LAU y si necesitáis temporada u opción a compra en lugar de un arrendamiento ordinario.`,
      howWeDoIt: [
        "Contacto teléfono o WhatsApp sin compromiso.",
        "Orientación propietario e inquilino.",
        "Duración mínima legal y depósitos explicados.",
        "Plan: contratar → documentación → borrador → firma.",
      ],
      checklist: ["Gestor humano", "Sin comisión sobre la renta", "LAU vigente", "Asesoramiento previo"],
      imageSrc: img(0),
      imageAlt: "Gestor Livendia contrato alquiler LAU",
    },
    {
      step: 2,
      title: `Contratas el contrato LAU (${priceLabel} IVA incl.)`,
      description: "Tarifa plana por redacción profesional del contrato de arrendamiento urbano de vivienda — no un PDF genérico sin inventario.",
      howWeDoIt: ["Contratación online", "Expediente y gestor asignado", "Plazo orientativo 48-72 h", "Factura en panel"],
      checklist: [`${priceLabel} IVA incl.`, "Precio cerrado", "100 % online", "Mismo gestor hasta entrega"],
      imageSrc: img(1),
      imageAlt: "Contratar contrato LAU Livendia",
    },
    {
      step: 3,
      title: "Subes documentación e inventario",
      description:
        "DNI de arrendador e inquilino, dirección, renta, fianza y depósito legal, suministros, estado del inmueble y fotos para inventario descriptivo.",
      howWeDoIt: ["Checklist en panel", "Fotos para inventario", "Condiciones verbales por escrito", "Confirmación de datos completos"],
      checklist: ["Inventario integrado", "Gastos y actualización de renta definidos", "Depósito según LAU", "Sin desplazamientos"],
      imageSrc: img(2),
      imageAlt: "Documentación contrato LAU",
    },
    {
      step: 4,
      title: "Redactamos el contrato LAU adaptado",
      description:
        "Cláusulas de duración, prórroga, obras, visitas, subarriendo, penalizaciones y entrega de llaves. Borrador alineado con lo pactado en visita, no plantilla copiada de internet.",
      howWeDoIt: ["Coherencia fianza-renta-LAU", "Gastos de comunidad y suministros", "Inventario en anexo", "Borrador en panel"],
      checklist: ["Cláusulas claras", "Obligaciones de registro si aplica", "Revisión conjunta", "Entrega en plazo"],
      imageSrc: img(3),
      imageAlt: "Redacción contrato alquiler LAU",
    },
    {
      step: 5,
      title: "Entrega y firma con asesoramiento",
      description: "PDF definitivo, orientación sobre firma digital o presencial y qué depositar en INCASÒL u organismo autonómico cuando corresponda.",
      howWeDoIt: ["Versión final", "Firma electrónica si contratais el servicio", "Dudas hasta firmar", "Archivo en panel"],
      checklist: ["Contrato firmable", "Inventario adjunto", "Soporte del gestor", "Sin administración mensual incluida"],
      imageSrc: img(4),
      imageAlt: "Entrega contrato LAU Livendia",
    },
  ];
}

export const CONTRATO_OPCION_COMPRA_PROCESS = {
  eyebrow: "Alquiler con opción a compra",
  title: "Cómo redactamos tu contrato LAU + opción de compra, paso a paso",
  intro:
    "Cinco fases: datos del arrendamiento, pacto de opción (precio, plazo, imputación de rentas), inventario y entrega. No confundir con compraventa hasta escritura ni con LAU estándar sin opción.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody: "Borrador, inventario y comentarios del gestor centralizados hasta la firma.",
  serviceLine: "Alquiler con opción a compra · Livendia",
} as const;

export function buildContratoOpcionCompraSteps(
  priceLabel: string = CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL,
): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Llamada: arrendamiento y opción de compra",
      description:
        "Definimos renta, duración del alquiler, precio de ejercicio de la opción, plazo para comprar, imputación de rentas al precio final y qué ocurre si no se ejerce la opción.",
      howWeDoIt: [
        "Sin compromiso por teléfono o WhatsApp.",
        "Diferencia LAU + opción vs compraventa directa.",
        "Tanteo y derechos del inquilino explicados.",
        "Plan hasta borrador firmable.",
      ],
      checklist: ["Gestor especializado", "Particulares", `Desde ${priceLabel} IVA incl.`, "Sin comisión de agencia"],
      imageSrc: img(0),
      imageAlt: "Llamada alquiler opción compra Livendia",
    },
    {
      step: 2,
      title: `Contratas la redacción (${priceLabel} IVA incl.)`,
      description: "Un único pago por contrato LAU con pacto de opción de compra e inventario — no incluye futura escritura de compraventa.",
      howWeDoIt: ["Contratación online", "Panel y gestor", "48-72 h con documentación completa", "Factura archivada"],
      checklist: ["Precio cerrado", "Inventario incluido", "Online", "Mismo gestor"],
      imageSrc: img(1),
      imageAlt: "Contratar opción compra Livendia",
    },
    {
      step: 3,
      title: "Documentación del inmueble y del pacto",
      description:
        "DNI, dirección, renta, fianza, precio de la opción, calendario, porcentaje de renta imputable (si aplica) y escritura o nota simple para titularidad.",
      howWeDoIt: ["Checklist guiado", "Borrador previo si existe", "Fotos para inventario", "Validación antes de redactar"],
      checklist: ["Opción por escrito", "Imputación de rentas definida", "Cargas conocidas", "Subida segura"],
      imageSrc: img(2),
      imageAlt: "Documentación alquiler opción compra",
    },
    {
      step: 4,
      title: "Redacción LAU + bloque de opción",
      description:
        "Dos bloques coherentes: arrendamiento vigente y cláusulas de ejercicio, caducidad, precio final y consecuencias si no compra.",
      howWeDoIt: ["Cláusulas de opción explícitas", "Inventario anexo", "Revisión conjunta", "Borrador en panel"],
      checklist: ["No es solo LAU estándar", "Imputación rentas clara", "Plazo de ejercicio", "Lenguaje comprensible"],
      imageSrc: img(3),
      imageAlt: "Redacción contrato opción compra",
    },
    {
      step: 5,
      title: "Entrega y orientación al ejercicio",
      description:
        "Contrato listo para firmar. Si más adelante ejercéis la opción, podéis contratar arras o servicio completo de compraventa por separado.",
      howWeDoIt: ["PDF final", "Firma asesorada", "Próximos pasos si ejerce opción", "Soporte hasta firma del alquiler"],
      checklist: ["Contrato firmable", "Inventario incluido", "Sin gestión de escritura futura incluida", "Gestor Livendia"],
      imageSrc: img(4),
      imageAlt: "Entrega contrato opción compra",
    },
  ];
}

export function buildHabitacionNationalSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return buildHabitacionBarcelonaSteps(CITY, priceLabel).map((s) => ({
    ...s,
    description: s.description.replace(/área metropolitana/g, "toda España"),
  }));
}

export function buildTemporadaNationalSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return buildTemporadaBarcelonaSteps("espana", CITY, priceLabel);
}

export const HABITACION_NATIONAL_PROCESS = {
  ...HABITACION_BARCELONA_PROCESS,
  title: "Cómo funciona tu contrato de habitación, paso a paso",
  intro: HABITACION_BARCELONA_PROCESS.intro.replace("especializado en pisos compartidos", "especializado en pisos compartidos en toda España"),
} as const;

export const TEMPORADA_NATIONAL_PROCESS = {
  ...TEMPORADA_BARCELONA_PROCESS,
  title: "Cómo contratar tu contrato de temporada, paso a paso",
} as const;

export const REVISION_POST_ARRAS_PROCESS = {
  eyebrow: "Revisión documental post-arras",
  title: "Cómo audita Livendia tu expediente antes de escriturar",
  intro:
    "Cuatro fases comprador: subes arras y documentación, análisis registral y de comunidad, informe PDF con semáforo y llamada de veredicto — sin redactar nueva venta ni fiscalidad del vendedor.",
  alwaysWithYouTitle: "Panel comprador",
  alwaysWithYouBody: "Actas, ITE, informe y notas del gestor antes de notaría.",
  serviceLine: "Revisión documental post-arras · Livendia",
} as const;

export function buildRevisionDocumentalPostArrasSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  const phases = REVISION_POST_ARRAS_HOW_STEPS.map((s) => ({
    title: s.title,
    description: s.description,
  }));
  const steps = fromPhases(phases, "Revisión post-arras", {
    howWeDoIt: [
      `Pack ${priceLabel} IVA incl. — análisis en 48 h`,
      "Gestor comprador especializado",
      "Informe PDF con semáforo de riesgo",
      "Llamada de veredicto incluida",
    ],
    checklist: ["Comunidad y derramas", "ITE y registro", "No negociamos por ti", "No sustituye servicio completo compra"],
  });
  return [
    ...steps,
    {
      step: 5,
      title: "Decisión informada hasta escritura",
      description:
        "Con el informe en mano decides si negocias con el vendedor, pides documentación pendiente o valoras desistimiento de arras. El gestor orienta sin representarte en litigio.",
      howWeDoIt: [
        "Opciones concretas en la llamada",
        "Soporte telefónico hasta escritura",
        "Enlace a servicio completo si lo necesitas",
        "Sin cobro adicional por la llamada de veredicto",
      ],
      checklist: ["Informe en 3-5 días laborables", "Semáforo por área", "Comprador particular", "100 % online"],
      imageSrc: img(4),
      imageAlt: "Llamada veredicto revisión post-arras",
    },
  ];
}

export const ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS = {
  eyebrow: "Reserva hasta arras",
  title: "Cómo te acompañamos de la reserva al contrato de arras",
  intro: ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS_INTRO,
  alwaysWithYouTitle: "Expediente reserva–arras",
  alwaysWithYouBody: "Reserva, nota registral e informe de riesgos en panel antes de transferir importes relevantes.",
  serviceLine: "Acompañamiento reserva hasta arras · Livendia",
} as const;

export function buildAcompanamientoReservaArrasSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  const phases = ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS_STEPS.map((s) => ({
    title: s.title,
    description: s.description,
  }));
  return fromPhases(phases, "Acompañamiento reserva arras", {
    howWeDoIt: [
      `Tarifa ${priceLabel} IVA incl.`,
      "Revisión de reserva vinculante",
      "Nota registral y urbanismo básico",
      "Borrador de arras alineado",
    ],
    checklist: ["Tramo reserva–arras solo", "No incluye escritura", "Gestor inmobiliario", "Particulares"],
  });
}

export const RESERVA_DE_COMPRA_PROCESS = {
  eyebrow: "Reserva de compra",
  title: "Cómo redactamos tu documento de reserva, paso a paso",
  intro:
    "Cuatro fases: datos del acuerdo, contratación del documento de reserva, borrador equilibrado y entrega antes de arras. No incluye revisión registral profunda ni redacción de arras (ver acompañamiento 424 €).",
  alwaysWithYouTitle: "Panel Livendia",
  alwaysWithYouBody: "Borrador de reserva y mensajes con tu gestor en un solo expediente.",
  serviceLine: "Reserva de compra · Livendia",
} as const;

export function buildReservaDeCompraSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return fromPhases(
    [
      {
        title: "Nos cuentas precio, señal y plazos",
        description:
          "Indicas importe de la reserva, fecha orientativa de arras, identificación del inmueble y condiciones que ya pactasteis verbalmente. El gestor detecta lagunas antes de redactar.",
      },
      {
        title: `Contratas la reserva (${priceLabel} IVA incl.)`,
        description: "Pago único por redacción del documento de reserva entre particulares — no sustituye el pack reserva hasta arras ni el servicio completo de compra.",
      },
      {
        title: "Borrador de reserva equilibrado",
        description:
          "Cláusulas sobre devolución de señal, penalidades, condiciones suspensivas básicas y plazo para firmar arras. PDF en panel para revisión con la otra parte.",
      },
      {
        title: "Entrega y siguiente hito",
        description:
          "Documento listo para firmar. Si necesitas nota simple, revisión y arras, el siguiente paso es el acompañamiento reserva–arras o el servicio completo de compra.",
      },
    ],
    "Reserva de compra",
    {
      howWeDoIt: ["Solo documento de reserva", "Online", "Gestor asignado", "48-72 h con datos completos"],
      checklist: [`${priceLabel} IVA incl.`, "No incluye arras", "Particulares", "Orientación siguiente servicio"],
    },
  );
}

export const ACOMPANAMIENTO_ALQUILER_PROCESS = {
  eyebrow: "Acompañamiento de alquiler",
  title: "Cómo te acompaña Livendia en tu alquiler",
  intro: ACOMPANAMIENTO_ALQUILER_PROCESS_INTRO,
  alwaysWithYouTitle: "Expediente inquilino",
  alwaysWithYouBody: "Contratos, anexos y firma digital en panel hasta que cierres el servicio.",
  serviceLine: "Acompañamiento de alquiler · Livendia",
} as const;

export function buildAcompanamientoAlquilerSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return fromPhases(ACOMPANAMIENTO_ALQUILER_PROCESS_STEPS, "Acompañamiento alquiler", {
    howWeDoIt: [
      `${priceLabel} IVA incl.`,
      "Enfoque inquilino",
      "Revisión o redacción LAU/temporada/habitación",
      "Firma digital cuando toque",
    ],
    checklist: ["Sin fecha de caducidad fija", "No es administración propietario", "Mediación incluida", "Expediente online"],
  });
}

export const PARKING_TRASTERO_PROCESS = {
  eyebrow: "Compra parking o trastero",
  title: "Cómo gestionamos tu compra de parking o trastero, paso a paso",
  intro:
    "Cuatro fases notaría-registro-ITP: preparación documental, escritura, liquidación modelo 600 e inscripción. Enfocado en anejos, no en vivienda habitual completa.",
  alwaysWithYouTitle: "Panel comprador",
  alwaysWithYouBody: "Documentación, ITP y seguimiento registral del parking o trastero.",
  serviceLine: "Acompañamiento parking / trastero · Livendia",
} as const;

export function buildParkingTrasteroSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  const phases = PARKING_TRASTERO_PROCESS_PHASES.map((p) => ({
    title: p.title,
    description: p.description,
  }));
  return fromPhases(phases, "Compra parking trastero", {
    howWeDoIt: [
      `Servicio ${priceLabel} IVA incl.`,
      "Nota simple e IBI",
      "Coordinación notaría",
      "ITP y registro telemático",
    ],
    checklist: ["No es vivienda habitual", "Tasas notaría/registro a cargo cliente", "ITP gestionado", "Copia electrónica"],
  });
}

export const REVISION_CONTRATO_ALQUILER_PROCESS = {
  eyebrow: "Revisión contrato de alquiler",
  title: "Cómo revisamos tu borrador antes de firmar",
  intro: REVISION_CONTRATO_ALQUILER_PROCESS_INTRO,
  alwaysWithYouTitle: "Panel inquilino",
  alwaysWithYouBody: "Informe PDF y llamada de veredicto sobre el borrador del propietario.",
  serviceLine: "Revisión contrato alquiler · Livendia",
} as const;

export function buildRevisionContratoAlquilerSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return fromPhases(REVISION_CONTRATO_ALQUILER_PROCESS_STEPS, "Revisión contrato alquiler", {
    howWeDoIt: [
      `${priceLabel} IVA incl.`,
      "24-48 h laborables",
      "LAU, temporada o habitación",
      "Llamada de veredicto",
    ],
    checklist: ["No redactamos contrato nuevo", "Informe para negociar", "Sin representación legal", "100 % online"],
  });
}