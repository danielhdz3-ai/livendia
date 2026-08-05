/** Texto de horario de respuesta (FAB, GestorContactCta, modal). */
export const WHATSAPP_RESPONSE_HOURS =
  "Respondemos en horario laboral (L–V 9:00–19:30). Si escribes fuera, te contestamos al día siguiente.";

export type WhatsAppNeedType = "arras" | "alquiler" | "venta" | "administracion" | "compra" | "otro";

export type WhatsAppLeadStage =
  | "valorando"
  | "tengo_contraparte"
  | "firmando_pronto";

export const WHATSAPP_NEED_OPTIONS: { value: WhatsAppNeedType; label: string }[] = [
  { value: "arras", label: "Arras o compraventa" },
  { value: "alquiler", label: "Contrato de alquiler / habitación" },
  { value: "venta", label: "Vender piso sin agencia" },
  { value: "administracion", label: "Administración de alquiler" },
  { value: "compra", label: "Comprar vivienda entre particulares" },
  { value: "otro", label: "Otro trámite inmobiliario" },
];

export const WHATSAPP_STAGE_OPTIONS: { value: WhatsAppLeadStage; label: string }[] = [
  { value: "valorando", label: "Solo estoy valorando / pidiendo presupuesto" },
  { value: "tengo_contraparte", label: "Ya tengo comprador, inquilino o vendedor" },
  { value: "firmando_pronto", label: "Firmo pronto o tengo fecha de notaría" },
];

export type WhatsAppPageContext = {
  serviceLabel: string;
  needType: WhatsAppNeedType;
  city?: string;
  pathname: string;
};

const CITY_SLUG_LABELS: Record<string, string> = {
  madrid: "Madrid",
  barcelona: "Barcelona",
  valencia: "Valencia",
  malaga: "Málaga",
  sevilla: "Sevilla",
  bilbao: "Bilbao",
  granada: "Granada",
  zaragoza: "Zaragoza",
  alicante: "Alicante",
  murcia: "Murcia",
  valladolid: "Valladolid",
  oviedo: "Oviedo",
  gijon: "Gijón",
  mallorca: "Mallorca",
  vigo: "Vigo",
  asturias: "Asturias",
  "hospitalet-de-llobregat": "L'Hospitalet de Llobregat",
  "cornella-de-llobregat": "Cornellà de Llobregat",
  badalona: "Badalona",
  "sant-cugat-del-valles": "Sant Cugat del Vallès",
  sabadell: "Sabadell",
  terrassa: "Terrassa",
};

function slugToCityLabel(slug: string): string {
  return CITY_SLUG_LABELS[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function needLabel(type: WhatsAppNeedType): string {
  return WHATSAPP_NEED_OPTIONS.find((o) => o.value === type)?.label ?? "Trámite inmobiliario";
}

function stageLabel(stage: WhatsAppLeadStage): string {
  return WHATSAPP_STAGE_OPTIONS.find((o) => o.value === stage)?.label ?? stage;
}

/** Inferencia de servicio y ciudad a partir de la URL pública. */
export function resolveWhatsAppPageContext(pathname: string): WhatsAppPageContext {
  const path = pathname.split("?")[0] ?? "/";
  const segments = path.split("/").filter(Boolean);

  let city: string | undefined;
  const last = segments[segments.length - 1];
  if (
    segments.length >= 2 &&
    (segments[0] === "servicios" || segments[0] === "gestoria" || segments[0] === "ciudades") &&
    last &&
    !["servicios", "gestoria", "ciudades", "blog", "para-propietarios"].includes(last)
  ) {
    const maybeCity = segments[segments.length - 1];
    if (segments.length >= 3 || segments[0] === "gestoria" || segments[0] === "ciudades") {
      city = slugToCityLabel(maybeCity);
    }
  }

  const servicePath = segments.slice(0, 2).join("/");
  const fullPath = segments.join("/");

  const rules: { match: (p: string) => boolean; label: string; need: WhatsAppNeedType }[] = [
    { match: (p) => p.includes("servicio-completo-venta"), label: "Servicio completo de venta", need: "venta" },
    { match: (p) => p.includes("vender-piso"), label: "Vender piso sin agencia", need: "venta" },
    { match: (p) => p.includes("gestion-documental-vendedor"), label: "Gestión documental vendedor", need: "venta" },
    { match: (p) => p.includes("servicio-completo-compra"), label: "Servicio completo de compra", need: "compra" },
    { match: (p) => p.includes("reserva-de-compra"), label: "Reserva de compra", need: "compra" },
    { match: (p) => p.includes("acompanamiento-reserva-arras"), label: "Acompañamiento reserva hasta arras", need: "arras" },
    { match: (p) => p.includes("revision-documental-post-arras"), label: "Revisión documental post-arras", need: "arras" },
    { match: (p) => p.includes("contrato-arras"), label: "Contrato de arras", need: "arras" },
    { match: (p) => p.includes("contrato-de-arras"), label: "Guía contrato de arras", need: "arras" },
    { match: (p) => p.includes("administracion-alquiler"), label: "Administración de alquiler", need: "administracion" },
    { match: (p) => p.includes("acompanamiento-alquiler"), label: "Acompañamiento alquiler", need: "alquiler" },
    { match: (p) => p.includes("revision-contrato-alquiler"), label: "Revisión contrato de alquiler", need: "alquiler" },
    { match: (p) => p.includes("contrato-alquiler-habitacion"), label: "Contrato de habitación", need: "alquiler" },
    { match: (p) => p.includes("contrato-alquiler-temporada"), label: "Contrato alquiler temporada", need: "alquiler" },
    { match: (p) => p.includes("contrato-alquiler"), label: "Contrato de alquiler LAU", need: "alquiler" },
    { match: (p) => p.includes("contrato-de-alquiler"), label: "Guía contrato de alquiler", need: "alquiler" },
    { match: (p) => p.includes("acompanamiento-compra-parking"), label: "Compra parking o trastero", need: "compra" },
    { match: (p) => p.startsWith("gestoria/"), label: "Gestoría inmobiliaria", need: "otro" },
    { match: (p) => p.startsWith("ciudades/"), label: "Gestoría inmobiliaria por ciudad", need: "otro" },
    { match: (p) => p.startsWith("para-propietarios"), label: "Servicios para propietarios", need: "administracion" },
    { match: (p) => p.startsWith("blog/"), label: "Blog Livendia", need: "otro" },
    { match: (p) => p === "servicios" || p === "", label: "Catálogo de servicios Livendia", need: "otro" },
  ];

  for (const rule of rules) {
    if (rule.match(fullPath) || rule.match(servicePath)) {
      return { serviceLabel: rule.label, needType: rule.need, city, pathname: path };
    }
  }

  return {
    serviceLabel: "Gestoría inmobiliaria Livendia",
    needType: "otro",
    city,
    pathname: path,
  };
}

export function buildWhatsAppLeadMessage(params: {
  serviceLabel: string;
  needType: WhatsAppNeedType;
  city: string;
  stage: WhatsAppLeadStage;
  caseDetail?: string;
}): string {
  const cityLine = params.city.trim() || "—";
  const detail = params.caseDetail?.trim();
  return [
    `Hola, estoy en la web de Livendia (${params.serviceLabel}). Quiero presupuesto.`,
    "",
    `• Necesito: ${needLabel(params.needType)}`,
    `• Ciudad: ${cityLine}`,
    `• Situación: ${stageLabel(params.stage)}`,
    "",
    detail ? `Mi caso: ${detail}` : "Mi caso: ",
  ].join("\n");
}

/** Prefill rápido sin modal (enlaces hero, blog). */
export function getQuickWhatsAppPrefill(context: WhatsAppPageContext): string {
  const cityPart = context.city ? `\n• Ciudad: ${context.city}` : "\n• Ciudad: ";
  return [
    `Hola, estoy en la web de Livendia (${context.serviceLabel}). Quiero presupuesto.`,
    "",
    `• Necesito: ${needLabel(context.needType)}${cityPart}`,
    "",
    "Mi caso: ",
  ].join("\n");
}

export function mergeWhatsAppContext(
  pathname: string,
  overrides?: Partial<Pick<WhatsAppPageContext, "serviceLabel" | "needType" | "city">>,
): WhatsAppPageContext {
  const base = resolveWhatsAppPageContext(pathname);
  return { ...base, ...overrides, pathname: base.pathname };
}
