import {
  buildAdministracionAlquilerLauSteps,
  ADMINISTRACION_ALQUILER_LAU_PROCESS_META,
} from "@/lib/administracion-alquiler-lau-modules";
import {
  buildAdministracionAlquilerTemporadaSteps,
  ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_META,
} from "@/lib/administracion-alquiler-temporada-modules";
import {
  buildComprarSinAgenciaBarcelonaSteps,
  COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS,
} from "@/lib/comprar-piso-sin-agencia-barcelona-modules";
import {
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  buildPackArrasGestionSteps,
  PACK_ARRAS_GESTION_PROCESS,
} from "@/lib/pack-arras-gestion-process-modules";
import {
  buildServicioAlquilerIntegralSteps,
  SERVICIO_ALQUILER_INTEGRAL_PROCESS_META,
} from "@/lib/servicio-alquiler-integral-modules";
import {
  buildConsultaFiscalVendedorSteps,
  CONSULTA_FISCAL_VENDEDOR_PROCESS,
} from "@/lib/consulta-fiscal-vendedor-paso-a-paso";
import {
  ACOMPANAMIENTO_ALQUILER_PROCESS,
  ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS,
  buildAcompanamientoAlquilerSteps,
  buildAcompanamientoReservaArrasSteps,
  buildContratoAlquilerLauSteps,
  buildContratoArrasPenitencialesSteps,
  buildContratoOpcionCompraSteps,
  buildHabitacionNationalSteps,
  buildParkingTrasteroSteps,
  buildReservaDeCompraSteps,
  buildRevisionContratoAlquilerSteps,
  buildRevisionDocumentalPostArrasSteps,
  buildTemporadaNationalSteps,
  CONTRATO_ARRAS_PROCESS,
  CONTRATO_LAU_PROCESS,
  CONTRATO_OPCION_COMPRA_PROCESS,
  HABITACION_NATIONAL_PROCESS,
  PARKING_TRASTERO_PROCESS,
  RESERVA_DE_COMPRA_PROCESS,
  REVISION_CONTRATO_ALQUILER_PROCESS,
  REVISION_POST_ARRAS_PROCESS,
  TEMPORADA_NATIONAL_PROCESS,
} from "@/lib/national-dedicated-paso-a-paso";
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import {
  buildVenderSinAgenciaBarcelonaSteps,
  VENDER_SIN_AGENCIA_BARCELONA_PROCESS,
} from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { SIN_AGENCIA_STEP_IMAGE_POOL } from "@/lib/sin-agencia-paso-a-paso-image-pools";
import type { ServiceLandingModuleKind } from "@/lib/service-landing-module-profile";

export type NationalExpertGestorsVariant =
  | "pack-arras"
  | "servicio-completo-venta"
  | "servicio-completo-compra"
  | "alquiler"
  | "admin"
  | "contratos"
  | "generic";

export type NationalOnlineModule = "gestoria-digital" | "alquiler-gestor" | "arras-gestor";

export type NationalPasoAPasoMeta = {
  eyebrow: string;
  title: string;
  intro: string;
  alwaysWithYouTitle: string;
  alwaysWithYouBody: string;
  serviceLine: string;
  feeNote?: string;
};

export type NationalServicePasoAPasoBundle = {
  meta: NationalPasoAPasoMeta;
  steps: readonly VenderSinAgenciaProcessStep[];
  expertVariant: NationalExpertGestorsVariant;
  onlineModule: NationalOnlineModule;
  gestoriaFocus: "all" | "alquiler" | "compraventa";
};

const CITY = "toda España";

function fallbackPriceFromSlug(primarySlug: string, priceLabel: string): string {
  if (priceLabel !== "—") return priceLabel;
  if (primarySlug.includes("arras")) return CONTRATO_ARRAS_LOCAL_PRICE_LABEL;
  if (primarySlug.includes("lau")) return CONTRATO_ALQUILER_LAU_PRICE_LABEL;
  return priceLabel;
}

function nationalizeVentaMeta(priceLabel: string, serviceLine: string): NationalPasoAPasoMeta {
  return {
    eyebrow: VENDER_SIN_AGENCIA_BARCELONA_PROCESS.eyebrow,
    title: "Cómo funciona el servicio, paso a paso",
    intro:
      "Seis fases con el mismo gestor Livendia. Tú sigues negociando con la otra parte; nosotros blindamos contratos, documentación y calendario hasta la escritura o el hito que corresponda.",
    alwaysWithYouTitle: VENDER_SIN_AGENCIA_BARCELONA_PROCESS.alwaysWithYouTitle,
    alwaysWithYouBody: VENDER_SIN_AGENCIA_BARCELONA_PROCESS.alwaysWithYouBody,
    serviceLine,
    feeNote: `Sin comisión sobre el precio del piso. Trámite 100 % online con gestor real en ${CITY}. Tarifa ${priceLabel} IVA incl.`,
  };
}

function nationalizeCompraMeta(priceLabel: string, serviceLine: string): NationalPasoAPasoMeta {
  return {
    eyebrow: COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.eyebrow,
    title: "Cómo funciona el servicio completo de compra, paso a paso",
    intro:
      "Cinco fases con el mismo gestor Livendia. Tú negocias precio y visitas; nosotros revisamos contratos, documentación y calendario hasta la escritura pública.",
    alwaysWithYouTitle: COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.alwaysWithYouTitle,
    alwaysWithYouBody: COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.alwaysWithYouBody,
    serviceLine,
    feeNote: `Tarifa plana ${priceLabel} IVA incl. — gestor comprador online en ${CITY}, sin comisión sobre el precio del piso.`,
  };
}

function nationalizePackArrasMeta(priceLabel: string): NationalPasoAPasoMeta {
  return {
    eyebrow: PACK_ARRAS_GESTION_PROCESS.eyebrow,
    title: `Cómo vender entre particulares con pack ${priceLabel}, paso a paso`,
    intro:
      "Cinco fases con el mismo gestor Livendia. Tú cierras precio con tu comprador; nosotros redactamos arras, recopilamos documentación y te preparamos la escritura en notaría.",
    alwaysWithYouTitle: PACK_ARRAS_GESTION_PROCESS.alwaysWithYouTitle,
    alwaysWithYouBody: PACK_ARRAS_GESTION_PROCESS.alwaysWithYouBody,
    serviceLine: PACK_ARRAS_GESTION_PROCESS.serviceLine,
    feeNote: `${priceLabel} IVA incl. · sin comisión sobre el precio de venta · gestor online en ${CITY}.`,
  };
}

function genericContratoMeta(priceLabel: string, serviceLabel: string): NationalPasoAPasoMeta {
  return {
    eyebrow: `Qué incluye ${serviceLabel}`,
    title: `Cómo funciona ${serviceLabel.toLowerCase()}, paso a paso`,
    intro:
      "Cinco fases con el mismo gestor Livendia: llamada inicial, contratación online, documentación en panel, entrega del trabajo y asesoramiento hasta cerrar.",
    alwaysWithYouTitle: "Tu expediente en el panel",
    alwaysWithYouBody:
      "Documentos, borradores e historial con tu gestor en el área de cliente Livendia — sin depender de correos sueltos.",
    serviceLine: `${serviceLabel} · Livendia`,
    feeNote: `${priceLabel} IVA incl. · trámite 100 % online en ${CITY}.`,
  };
}

/** Último recurso: textos neutros (nunca cuerpos de venta Barcelona con cédula/ITE). */
function buildGenericContratoSteps(
  priceLabel: string,
  serviceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  const bodies = [
    "Primera llamada o WhatsApp: nos cuentas el caso, plazos y qué documentación ya tienes. El gestor aclara alcance del servicio y qué no incluye el precio.",
    `Contratas ${serviceLabel.toLowerCase()} (${priceLabel} IVA incl.) y se abre expediente en panel Livendia.`,
    "Subes la documentación que pide el checklist del servicio: contratos, DNI, datos del inmueble u otros PDF según el producto contratado.",
    "El gestor elabora el trabajo contratado (contrato, revisión o informe) y lo deja en el panel para tu revisión.",
    "Entrega final, dudas hasta el hito acordado y orientación sobre el siguiente servicio Livendia si lo necesitas.",
  ];
  const titles = [
    "Llamada con tu gestor: alcance del servicio",
    `Contratas ${serviceLabel.toLowerCase()} online`,
    "Subes documentación al panel",
    "Tramitamos el trabajo contratado",
    "Entrega y asesoramiento posterior",
  ];
  return titles.map((title, i) => ({
    step: i + 1,
    title,
    description: bodies[i]!,
    howWeDoIt: [
      "Gestor humano asignado",
      "100 % online",
      "Expediente en panel Livendia",
      "Precio publicado en web",
    ],
    checklist: [
      `${priceLabel} IVA incl.`,
      "Sin comisión sobre el precio del inmueble",
      CITY,
      serviceLabel,
    ],
    imageSrc: SIN_AGENCIA_STEP_IMAGE_POOL[i % SIN_AGENCIA_STEP_IMAGE_POOL.length]!,
    imageAlt: `${serviceLabel} — paso ${i + 1} Livendia`,
  }));
}

function expertVariantForSlug(slug: string, kind: ServiceLandingModuleKind): NationalExpertGestorsVariant {
  if (slug.includes("servicio-completo-venta") || slug.includes("vender-piso")) return "servicio-completo-venta";
  if (slug.includes("servicio-completo-compra") || slug.includes("comprar-piso")) return "servicio-completo-compra";
  if (slug.includes("pack-arras") || slug.includes("gestion-documental-vendedor")) return "pack-arras";
  if (kind === "admin") return "admin";
  if (kind === "alquiler") return "alquiler";
  if (kind === "contratos" || slug.includes("revision")) return "contratos";
  return "generic";
}

function onlineModuleForKind(kind: ServiceLandingModuleKind): NationalOnlineModule {
  if (kind === "alquiler" || kind === "admin") return "alquiler-gestor";
  if (kind === "contratos") return "arras-gestor";
  return "gestoria-digital";
}

function gestoriaFocusForKind(kind: ServiceLandingModuleKind): "all" | "alquiler" | "compraventa" {
  if (kind === "alquiler" || kind === "admin") return "alquiler";
  if (kind === "compraventa" || kind === "contratos") return "compraventa";
  return "all";
}

export function resolveNationalServicePasoAPaso(
  primarySlug: string,
  priceLabel: string,
  serviceLabel: string,
  kind: ServiceLandingModuleKind,
): NationalServicePasoAPasoBundle {
  const expertVariant = expertVariantForSlug(primarySlug, kind);
  const onlineModule = onlineModuleForKind(kind);
  const gestoriaFocus = gestoriaFocusForKind(kind);

  if (
    primarySlug === "servicio-completo-venta" ||
    primarySlug === "vender-piso-sin-agencia" ||
    primarySlug === "venta-piso-particular-sin-agencia"
  ) {
    return {
      meta: nationalizeVentaMeta(priceLabel, "Servicio completo venta · Livendia"),
      steps: buildVenderSinAgenciaBarcelonaSteps(priceLabel, "barcelona").map((s) => ({
        ...s,
        description: s.description
          .replace(/en Barcelona/g, `en ${CITY}`)
          .replace(/Barcelona/g, "España")
          .replace(/Catalunya/g, "tu comunidad autónoma")
          .replace(/CCCatalunya/g, "normativa aplicable"),
      })),
      expertVariant,
      onlineModule,
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "servicio-completo-compra" || primarySlug === "comprar-piso-sin-agencia") {
    return {
      meta: nationalizeCompraMeta(priceLabel, "Servicio completo compra · Livendia"),
      steps: buildComprarSinAgenciaBarcelonaSteps(priceLabel, "barcelona-capital", CITY),
      expertVariant,
      onlineModule,
      gestoriaFocus: "compraventa",
    };
  }

  if (
    primarySlug === "pack-arras-gestion-documental-vendedor" ||
    primarySlug === "gestion-documental-vendedor"
  ) {
    const notes = [
      "Llamada inicial: comprador, señal y plazos a escritura.",
      `Contratas el pack ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. y abres expediente en panel.`,
      "Recogida documental: nota simple, comunidad, ITE y certificado energético si procede.",
      "Redacción y firma de arras equilibradas con el comprador.",
      "Informe semáforo pre-notaría y coordinación de hitos hasta escritura.",
    ] as const;
    return {
      meta: nationalizePackArrasMeta(priceLabel),
      steps: buildPackArrasGestionSteps(CITY, "espana", priceLabel, notes),
      expertVariant,
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "consulta-fiscal-vendedor") {
    return {
      meta: {
        ...CONSULTA_FISCAL_VENDEDOR_PROCESS,
        feeNote: `${priceLabel} IVA incl. · 3–5 días laborables · 100 % online.`,
      },
      steps: buildConsultaFiscalVendedorSteps(priceLabel),
      expertVariant: "servicio-completo-venta",
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "revision-documental-post-arras") {
    return {
      meta: {
        ...REVISION_POST_ARRAS_PROCESS,
        feeNote: `${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl. · análisis en 48 h · 100 % online.`,
      },
      steps: buildRevisionDocumentalPostArrasSteps(priceLabel),
      expertVariant: "servicio-completo-compra",
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "contrato-arras-penitenciales" || primarySlug === "contrato-arras-confirmatorias") {
    return {
      meta: { ...CONTRATO_ARRAS_PROCESS, feeNote: `${fallbackPriceFromSlug(primarySlug, priceLabel)} IVA incl. · 48-72 h laborables · ${CITY}.` },
      steps: buildContratoArrasPenitencialesSteps(fallbackPriceFromSlug(primarySlug, priceLabel)),
      expertVariant: "contratos",
      onlineModule: "arras-gestor",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "contrato-alquiler-lau") {
    const p = fallbackPriceFromSlug(primarySlug, priceLabel);
    return {
      meta: { ...CONTRATO_LAU_PROCESS, feeNote: `${p} IVA incl. · redacción LAU · ${CITY}.` },
      steps: buildContratoAlquilerLauSteps(p),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "contrato-alquiler-habitacion") {
    const p = fallbackPriceFromSlug(primarySlug, priceLabel);
    return {
      meta: {
        eyebrow: HABITACION_NATIONAL_PROCESS.eyebrow,
        title: HABITACION_NATIONAL_PROCESS.title,
        intro: HABITACION_NATIONAL_PROCESS.intro,
        alwaysWithYouTitle: HABITACION_NATIONAL_PROCESS.alwaysWithYouTitle,
        alwaysWithYouBody: HABITACION_NATIONAL_PROCESS.alwaysWithYouBody,
        serviceLine: "Contrato alquiler habitación · Livendia",
        feeNote: `${p} IVA incl. · ${CITY}.`,
      },
      steps: buildHabitacionNationalSteps(p),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "contrato-alquiler-temporada") {
    const p = fallbackPriceFromSlug(primarySlug, priceLabel);
    return {
      meta: {
        eyebrow: TEMPORADA_NATIONAL_PROCESS.eyebrow,
        title: TEMPORADA_NATIONAL_PROCESS.title,
        intro: TEMPORADA_NATIONAL_PROCESS.intro,
        alwaysWithYouTitle: TEMPORADA_NATIONAL_PROCESS.alwaysWithYouTitle,
        alwaysWithYouBody: TEMPORADA_NATIONAL_PROCESS.alwaysWithYouBody,
        serviceLine: "Contrato alquiler temporada · Livendia",
        feeNote: `${p} IVA incl. · ${CITY}.`,
      },
      steps: buildTemporadaNationalSteps(p),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "contrato-alquiler-opcion-compra") {
    const p = fallbackPriceFromSlug(primarySlug, priceLabel);
    return {
      meta: { ...CONTRATO_OPCION_COMPRA_PROCESS, feeNote: `${p} IVA incl. · inventario incluido · ${CITY}.` },
      steps: buildContratoOpcionCompraSteps(p),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "acompanamiento-reserva-arras") {
    return {
      meta: { ...ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS, feeNote: `${priceLabel} IVA incl. · reserva hasta arras · ${CITY}.` },
      steps: buildAcompanamientoReservaArrasSteps(priceLabel),
      expertVariant: "servicio-completo-compra",
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "reserva-de-compra") {
    return {
      meta: { ...RESERVA_DE_COMPRA_PROCESS, feeNote: `${priceLabel} IVA incl. · solo documento reserva · ${CITY}.` },
      steps: buildReservaDeCompraSteps(priceLabel),
      expertVariant: "servicio-completo-compra",
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "acompanamiento-alquiler") {
    return {
      meta: { ...ACOMPANAMIENTO_ALQUILER_PROCESS, feeNote: `${priceLabel} IVA incl. · inquilino · ${CITY}.` },
      steps: buildAcompanamientoAlquilerSteps(priceLabel),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "acompanamiento-compra-parking-trastero") {
    return {
      meta: { ...PARKING_TRASTERO_PROCESS, feeNote: `${priceLabel} IVA incl. · anejos · ${CITY}.` },
      steps: buildParkingTrasteroSteps(priceLabel),
      expertVariant: "servicio-completo-compra",
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
    };
  }

  if (primarySlug === "revision-contrato-alquiler") {
    return {
      meta: { ...REVISION_CONTRATO_ALQUILER_PROCESS, feeNote: `${priceLabel} IVA incl. · 24-48 h · ${CITY}.` },
      steps: buildRevisionContratoAlquilerSteps(priceLabel),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "administracion-alquiler") {
    return {
      meta: {
        ...ADMINISTRACION_ALQUILER_LAU_PROCESS_META,
        title: "Cómo administramos tu piso de larga duración, paso a paso",
      },
      steps: buildAdministracionAlquilerLauSteps(priceLabel),
      expertVariant: "admin",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "administracion-alquiler-temporada") {
    return {
      meta: ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_META,
      steps: buildAdministracionAlquilerTemporadaSteps(priceLabel),
      expertVariant: "admin",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  if (primarySlug === "servicio-alquiler-integral") {
    return {
      meta: {
        ...SERVICIO_ALQUILER_INTEGRAL_PROCESS_META,
        title: "Cómo funciona el alquiler integral, paso a paso",
      },
      steps: buildServicioAlquilerIntegralSteps(priceLabel),
      expertVariant: "alquiler",
      onlineModule: "alquiler-gestor",
      gestoriaFocus: "alquiler",
    };
  }

  const label =
    serviceLabel ||
    (primarySlug.includes("alquiler")
      ? "Contrato de alquiler"
      : primarySlug.includes("arras")
        ? "Contrato de arras"
        : "Servicio Livendia");

  const fallbackPrice =
    priceLabel === "—"
      ? primarySlug.includes("arras")
        ? CONTRATO_ARRAS_LOCAL_PRICE_LABEL
        : primarySlug.includes("lau")
          ? CONTRATO_ALQUILER_LAU_PRICE_LABEL
          : priceLabel
      : priceLabel;

  return {
    meta: genericContratoMeta(fallbackPrice, label),
    steps: buildGenericContratoSteps(fallbackPrice, label),
    expertVariant,
    onlineModule,
    gestoriaFocus,
  };
}