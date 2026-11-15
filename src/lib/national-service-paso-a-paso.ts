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
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import {
  buildVenderSinAgenciaBarcelonaSteps,
  VENDER_SIN_AGENCIA_BARCELONA_PROCESS,
} from "@/lib/vender-piso-sin-agencia-barcelona-modules";
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

function buildGenericContratoSteps(
  priceLabel: string,
  serviceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  const imgs = buildVenderSinAgenciaBarcelonaSteps(priceLabel, "barcelona").map((s) => s.imageSrc);
  const titles = [
    "Llamada con tu gestor: le explicas el caso",
    `Contratas ${serviceLabel.toLowerCase()} online`,
    "Subes documentación al panel",
    "Preparamos el trabajo (contrato, revisión o informe)",
    "Entrega, firma y asesoramiento posterior",
  ];
  return titles.map((title, i) => {
    const base = buildVenderSinAgenciaBarcelonaSteps(priceLabel, "barcelona")[Math.min(i, 5)]!;
    return {
      ...base,
      step: i + 1,
      title,
      description: base.description.replace(/Barcelona/g, CITY).replace(/Catalunya/g, "tu comunidad autónoma"),
      imageSrc: imgs[i] ?? base.imageSrc,
      imageAlt: `${serviceLabel} — paso ${i + 1} Livendia`,
    };
  });
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
        eyebrow: "Qué incluye la revisión post-arras",
        title: "Cómo funciona la revisión documental antes de escriturar, paso a paso",
        intro:
          "Cinco fases con el mismo gestor comprador Livendia: subes contrato y documentación; analizamos comunidad, ITE, registro y urbanismo; entregamos informe y llamada de veredicto.",
        alwaysWithYouTitle: "Tu expediente en el panel",
        alwaysWithYouBody:
          "Actas, notas del gestor e informe PDF en tu área de cliente Livendia antes de ir a notaría.",
        serviceLine: "Revisión documental post-arras · Livendia",
        feeNote: `${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl. · análisis en 48 h · 100 % online.`,
      },
      steps: buildGenericContratoSteps(priceLabel, "Revisión documental post-arras"),
      expertVariant: "servicio-completo-compra",
      onlineModule: "gestoria-digital",
      gestoriaFocus: "compraventa",
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