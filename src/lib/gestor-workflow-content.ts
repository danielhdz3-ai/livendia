import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";

export type GestorWorkflowStep = { title: string; body: string };

export type GestorWorkflowContent = {
  heading: string;
  intro: string;
  steps: readonly GestorWorkflowStep[];
  disclaimer?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
};

export type GestorWorkflowService =
  | "contrato-arras"
  | "contrato-alquiler"
  | "servicio-completo-compra"
  | "servicio-completo-venta"
  | "generic";

const DEFAULT_HEADING = "Trámite 100 % online con asesor experto asignado";

function cityPhrase(city?: string): string {
  return city ? ` en ${city}` : "";
}

function step3ForService(service: GestorWorkflowService, serviceLabel?: string): GestorWorkflowStep {
  switch (service) {
    case "contrato-arras":
      return {
        title: "Redacción o revisión del contrato de arras",
        body: "Entregamos borrador en 48-72 h laborables con cláusula de financiación si la necesitas, calendario hasta escritura y objeto del inmueble coherente con registro.",
      };
    case "contrato-alquiler":
      return {
        title: "Redacción o revisión del contrato de alquiler",
        body: "Preparamos el contrato LAU adaptado a tu vivienda, fianza, actualización IPC y cláusulas habituales en 48-72 h laborables tras la llamada con tu gestor.",
      };
    case "servicio-completo-compra":
      return {
        title: "Revisión de reserva, arras y documentación",
        body: "Tu gestor analiza nota simple, cargas, reserva y contrato de arras. Te guía en cada hito hasta la escritura de compra.",
      };
    case "servicio-completo-venta":
      return {
        title: "Gestión documental y contratos de venta",
        body: "Coordinamos arras, documentación del inmueble y coherencia registral para que la venta avance sin sorpresas hasta la firma en notaría.",
      };
    default:
      return {
        title: serviceLabel ? `Tramitación de ${serviceLabel.toLowerCase()}` : "Tramitación de tu servicio",
        body: "Tu gestor prepara o revisa la documentación del trámite en 48-72 h laborables y te indica qué falta en el expediente.",
      };
  }
}

function step1ForService(
  service: GestorWorkflowService,
  city?: string,
  legalRegion?: "catalunya" | "espana",
): GestorWorkflowStep {
  const loc = cityPhrase(city);

  if (service === "contrato-arras") {
    if (legalRegion === "catalunya") {
      return {
        title: "Llamada con tu gestor experto (24-48 h)",
        body: `Repasamos si compras o vendes entre particulares${loc}, si hay hipoteca (621-49 CCCat), herencia o cargas. Te explicamos arras 621-4 y qué conviene en tu operación.`,
      };
    }
    return {
      title: "Llamada con tu gestor experto (24-48 h)",
      body: `Repasamos si compras o vendes entre particulares${loc}, si hay hipoteca, herencia o cargas. Te explicamos art. 1454 vs confirmatorias y qué conviene en tu operación.`,
    };
  }

  if (service === "servicio-completo-compra") {
    return {
      title: "Llamada con tu gestor experto (24-48 h)",
      body: `Analizamos tu compra${loc}: reserva, arras, hipoteca, cargas del inmueble y calendario hasta escritura. Resolvemos dudas antes de comprometer dinero.`,
    };
  }

  if (service === "servicio-completo-venta") {
    return {
      title: "Llamada con tu gestor experto (24-48 h)",
      body: `Repasamos tu venta${loc}: precio pactado, comprador, arras, documentación registral y plazos. Sin comisión de agencia sobre el precio de venta.`,
    };
  }

  if (service === "contrato-alquiler") {
    return {
      title: "Llamada con tu gestor experto (24-48 h)",
      body: `Repasamos el alquiler${loc}: LAU, fianza, duración, actualización de renta y cláusulas que suelen generar conflictos. Te orientamos antes de firmar.`,
    };
  }

  return {
    title: "Llamada con tu gestor experto (24-48 h)",
    body: `Tu gestor contacta contigo para entender el trámite${loc}, resolver dudas iniciales y definir el calendario del servicio.`,
  };
}

function step2ForService(service: GestorWorkflowService, priceLabel?: string): GestorWorkflowStep {
  const price =
    service === "contrato-arras"
      ? ` Por ${priceLabel ?? CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.`
      : " Tarifa cerrada publicada en livendia.com.";

  if (service === "contrato-arras") {
    return {
      title: "Contratas online y pagas con tarjeta",
      body: `Eliges penitenciales o confirmatorias, completas datos del inmueble y las partes.${price} En minutos tienes expediente en el panel Livendia — sin desplazarte a un despacho.`,
    };
  }

  return {
    title: "Contratas online y pagas con tarjeta",
    body: `Contratas el servicio, completas los datos necesarios y pagas con tarjeta.${price} Accedes al panel Livendia con tu expediente digital.`,
  };
}

function step4ForService(service: GestorWorkflowService): GestorWorkflowStep {
  if (service === "servicio-completo-compra") {
    return {
      title: "Asesoramiento hasta la escritura",
      body: "Resolvemos dudas de reserva, arras, hipoteca y documentación. Llegas a la firma sabiendo qué ocurre en cada hito de la compra.",
    };
  }

  if (service === "servicio-completo-venta") {
    return {
      title: "Asesoramiento hasta la venta",
      body: "Acompañamos comprador y vendedor hasta la firma en notaría. Consultas por WhatsApp, teléfono y panel hasta cerrar la operación.",
    };
  }

  if (service === "contrato-alquiler") {
    return {
      title: "Asesoramiento hasta firmar",
      body: "Resolvemos dudas de arrendador e inquilino en lenguaje claro. Llegas a la firma con contrato LAU coherente y sin cláusulas conflictivas.",
    };
  }

  return {
    title: "Asesoramiento hasta cerrar",
    body: "Resolvemos dudas en lenguaje claro por WhatsApp, teléfono y panel. Tu gestor responde consultas hasta completar el trámite.",
  };
}

function introForService(
  service: GestorWorkflowService,
  city?: string,
  priceLabel?: string,
): string {
  const loc = city ? ` desde ${city}` : "";

  if (service === "contrato-arras") {
    return `Contratas${loc} por ${priceLabel ?? CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. — no miles de euros de comisión de agencia. Tu gestor se asigna al expediente, te llama para resolver dudas, redacta o corrige las arras y responde consultas por WhatsApp y panel hasta la firma.`;
  }

  if (service === "servicio-completo-compra") {
    return `Contratas${loc} el servicio completo de compra (890 € IVA incl.). Tu gestor se asigna al expediente, te llama en 24-48 h y te acompaña desde la reserva hasta la escritura.`;
  }

  if (service === "servicio-completo-venta") {
    return `Contratas${loc} la gestión de venta sin comisión sobre el precio. Tu gestor se asigna, te llama en 24-48 h y coordina documentación y contratos hasta la firma.`;
  }

  if (service === "contrato-alquiler") {
    return `Contratas${loc} el contrato de alquiler con tarifa cerrada. Tu gestor se asigna al expediente, te llama para resolver dudas y redacta el LAU antes de la firma.`;
  }

  return `Contratas${loc} online con tarifa cerrada. Tu gestor se asigna al expediente, te llama en 24-48 h y responde consultas por WhatsApp y panel hasta cerrar el trámite.`;
}

function disclaimerForService(service: GestorWorkflowService, legalRegion?: "catalunya" | "espana"): string {
  if (service === "contrato-arras") {
    return legalRegion === "catalunya"
      ? "Información general sobre el CCCat, no asesoramiento jurídico personalizado. El gestor Livendia adapta el contrato a tu caso concreto."
      : "Información general sobre el Código Civil español, no asesoramiento jurídico personalizado. El gestor Livendia adapta el contrato a tu caso concreto.";
  }
  return "Información general sobre trámites inmobiliarios, no asesoramiento jurídico personalizado. El gestor Livendia adapta el servicio a tu caso concreto.";
}

/** Inferir tipo de servicio a partir del label del mockup o landing. */
export function inferGestorWorkflowService(serviceLabel?: string): GestorWorkflowService {
  if (!serviceLabel) return "generic";
  const label = serviceLabel.toLowerCase();
  if (label.includes("arras")) return "contrato-arras";
  if (label.includes("alquiler")) return "contrato-alquiler";
  if (label.includes("compra")) return "servicio-completo-compra";
  if (label.includes("venta")) return "servicio-completo-venta";
  return "generic";
}

export function buildGestorWorkflowContent(options: {
  city?: string;
  service?: GestorWorkflowService;
  serviceLabel?: string;
  legalRegion?: "catalunya" | "espana";
  priceLabel?: string;
}): GestorWorkflowContent {
  const service = options.service ?? inferGestorWorkflowService(options.serviceLabel);

  return {
    heading: DEFAULT_HEADING,
    intro: introForService(service, options.city, options.priceLabel),
    steps: [
      step1ForService(service, options.city, options.legalRegion),
      step2ForService(service, options.priceLabel),
      step3ForService(service, options.serviceLabel),
      step4ForService(service),
    ],
    disclaimer: disclaimerForService(service, options.legalRegion),
    primaryCtaLabel: "Contratar con gestor asignado",
    secondaryCtaLabel:
      service === "contrato-arras" && options.legalRegion === "catalunya"
        ? "Preguntar por el 621-49"
        : service === "contrato-arras"
          ? "Preguntar por cláusula hipoteca"
          : "Consultar por WhatsApp",
  };
}
