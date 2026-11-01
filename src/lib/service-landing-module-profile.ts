import type { Testimonial } from "@/lib/testimonials";

export type ServiceLandingModuleKind = "compraventa" | "contratos" | "alquiler" | "admin" | "general";

export type ServiceLandingResourceLink = { href: string; label: string };

export type ServiceLandingModuleProfile = {
  kind: ServiceLandingModuleKind;
  testimonialService: Testimonial["service"];
  showCommissionCompare: boolean;
  crossSell: readonly { slug: string; label: string }[];
  resources: readonly ServiceLandingResourceLink[];
};

const COMPRAVENTA_CROSS_SELL = [
  { slug: "contrato-arras-penitenciales", label: "Contrato de arras" },
  { slug: "revision-documental-post-arras", label: "Revisión post-arras" },
  { slug: "acompanamiento-reserva-arras", label: "Reserva hasta arras" },
] as const;

const ALQUILER_CROSS_SELL = [
  { slug: "contrato-alquiler-lau", label: "Contrato LAU" },
  { slug: "administracion-alquiler", label: "Administración de alquiler" },
  { slug: "contrato-alquiler-temporada", label: "Contrato temporada" },
] as const;

const CONTRATOS_CROSS_SELL = [
  { slug: "servicio-completo-compra", label: "Servicio completo compra" },
  { slug: "revision-documental-post-arras", label: "Revisión post-arras" },
  { slug: "contrato-alquiler-lau", label: "Contrato LAU" },
] as const;

const RESOURCES_BY_KIND: Record<ServiceLandingModuleKind, readonly ServiceLandingResourceLink[]> = {
  compraventa: [
    { href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria", label: "Coste gestoría inmobiliaria" },
    { href: "/blog/que-es-un-contrato-de-arras", label: "Qué es un contrato de arras" },
  ],
  contratos: [
    { href: "/blog/que-es-un-contrato-de-arras", label: "Qué es un contrato de arras" },
    { href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria", label: "Precios gestoría" },
  ],
  alquiler: [
    { href: "/blog/administracion-alquiler-propietarios-guia", label: "Guía administración alquiler" },
    { href: "/blog/contrato-alquiler-habitacion-piso-compartido", label: "Alquiler de habitación" },
  ],
  admin: [
    { href: "/blog/administracion-alquiler-propietarios-guia", label: "Guía administración alquiler" },
    { href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria", label: "Coste gestoría" },
  ],
  general: [
    { href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria", label: "Coste gestoría inmobiliaria" },
    { href: "/contacto", label: "Hablar con un gestor" },
  ],
};

function slugKind(primarySlug?: string): ServiceLandingModuleKind {
  if (!primarySlug) return "general";
  const s = primarySlug.toLowerCase();
  if (
    s.includes("servicio-completo") ||
    s.includes("vender-piso") ||
    s.includes("comprar-piso") ||
    s.includes("venta-piso") ||
    s.includes("gestion-documental") ||
    s.includes("acompanamiento-reserva") ||
    s.includes("reserva-de-compra") ||
    s.includes("pack-comprador") ||
    (s.includes("pack-") && (s.includes("venta") || s.includes("comprador")))
  ) {
    return "compraventa";
  }
  if (s.includes("administracion-alquiler")) return "admin";
  if (s.includes("contrato-alquiler") || s.includes("redactar-contrato") || s.includes("revision-contrato-alquiler")) {
    return "alquiler";
  }
  if (s.includes("arras") || s.includes("revision-documental")) return "contratos";
  return "general";
}

function labelKind(serviceLabel?: string): ServiceLandingModuleKind | undefined {
  if (!serviceLabel) return undefined;
  const l = serviceLabel.toLowerCase();
  if (l.includes("venta") || l.includes("compra") || l.includes("compraventa")) return "compraventa";
  if (l.includes("administración") || l.includes("administracion")) return "admin";
  if (l.includes("alquiler") || l.includes("lau")) return "alquiler";
  if (l.includes("arras")) return "contratos";
  return undefined;
}

export function resolveServiceLandingModuleProfile(options: {
  primarySlug?: string;
  serviceLabel?: string;
}): ServiceLandingModuleProfile {
  const kind = labelKind(options.serviceLabel) ?? slugKind(options.primarySlug);
  const testimonialService: Testimonial["service"] =
    kind === "compraventa"
      ? "compraventa"
      : kind === "admin" || kind === "alquiler"
        ? "administracion"
        : kind === "contratos"
          ? "contratos"
          : "general";

  const crossSell =
    kind === "compraventa"
      ? COMPRAVENTA_CROSS_SELL
      : kind === "alquiler" || kind === "admin"
        ? ALQUILER_CROSS_SELL
        : kind === "contratos"
          ? CONTRATOS_CROSS_SELL
          : COMPRAVENTA_CROSS_SELL;

  return {
    kind,
    testimonialService,
    showCommissionCompare: kind === "compraventa",
    crossSell,
    resources: RESOURCES_BY_KIND[kind],
  };
}
