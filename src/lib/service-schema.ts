import type { PublicService } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";

export type ServiceSchemaInput = {
  /** Ruta pública, ej. /servicios/contrato-alquiler-lau */
  path: string;
  name: string;
  description: string;
  priceCents: number;
  isRecurring?: boolean;
  serviceType?: string;
  category?: string | null;
};

export function serviceTypeForCategory(category: string | null | undefined): string {
  switch (category) {
    case "administracion_alquiler":
    case "alquiler":
    case "contrato":
      return "Gestoría inmobiliaria";
    case "compraventa":
    case "acompanamiento":
    case "revision":
    case "pack":
      return "Asesoría jurídica";
    default:
      return "Gestoría inmobiliaria";
  }
}

export function servicePathFromSlug(slug: string): string {
  return `/servicios/${slug}`;
}

export function schemaFromPublicService(service: PublicService, path?: string): ServiceSchemaInput {
  return {
    path: path ?? servicePathFromSlug(service.slug),
    name: service.name,
    description: service.description ?? service.name,
    priceCents: service.price_cents,
    isRecurring: service.is_recurring,
    category: service.category,
    serviceType: serviceTypeForCategory(service.category),
  };
}

function buildOffer(pageUrl: string, priceCents: number, isRecurring?: boolean) {
  const price = Number((priceCents / 100).toFixed(2));
  return {
    "@type": "Offer" as const,
    price,
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification" as const,
      price,
      priceCurrency: "EUR",
      valueAddedTaxIncluded: true,
      description: "IVA incluido",
      ...(isRecurring ? { unitText: "mes" } : {}),
    },
    availability: "https://schema.org/InStock",
    url: pageUrl,
  };
}

/** JSON-LD @graph: Service + BreadcrumbList (sin @context duplicado en nodos del graph). */
export function buildServicePageSchemaGraph(input: ServiceSchemaInput) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = input.path.startsWith("http") ? input.path : `${base}${input.path}`;
  const serviceType = input.serviceType ?? serviceTypeForCategory(input.category);

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: input.name,
    description: input.description,
    serviceType,
    areaServed: {
      "@type": "Country" as const,
      name: "España",
      identifier: "ES",
    },
    provider: { "@id": `${base}/#organization` },
    offers: buildOffer(pageUrl, input.priceCents, input.isRecurring),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem" as const,
        position: 1,
        name: "Inicio",
        item: base,
      },
      {
        "@type": "ListItem" as const,
        position: 2,
        name: "Servicios",
        item: `${base}/servicios`,
      },
      {
        "@type": "ListItem" as const,
        position: 3,
        name: input.name,
        item: pageUrl,
      },
    ],
  };

  return { service, breadcrumb, pageUrl };
}

/** Varias ofertas en una misma ficha (p. ej. guía de arras). */
export function buildServicePageSchemaGraphMultiOffer(
  input: Omit<ServiceSchemaInput, "priceCents" | "isRecurring"> & {
    offers: { priceCents: number; isRecurring?: boolean; name?: string }[];
  },
) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = input.path.startsWith("http") ? input.path : `${base}${input.path}`;
  const serviceType = input.serviceType ?? serviceTypeForCategory(input.category);

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: input.name,
    description: input.description,
    serviceType,
    areaServed: {
      "@type": "Country" as const,
      name: "España",
      identifier: "ES",
    },
    provider: { "@id": `${base}/#organization` },
    offers: input.offers.map((o) => buildOffer(pageUrl, o.priceCents, o.isRecurring)),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Inicio", item: base },
      { "@type": "ListItem" as const, position: 2, name: "Servicios", item: `${base}/servicios` },
      { "@type": "ListItem" as const, position: 3, name: input.name, item: pageUrl },
    ],
  };

  return { service, breadcrumb };
}

/** Schema local: Service + Offer + BreadcrumbList (Inicio → Servicios → hub → ciudad). */
export function buildGestionVendedorLocalSchemaGraph(params: {
  path: string;
  city: string;
  administrativeArea: string;
  hubPath?: string;
  hubName?: string;
  priceCents: number;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${params.path}`;
  const hubPath = params.hubPath ?? "/servicios/gestion-documental-vendedor";
  const hubUrl = `${base}${hubPath}`;
  const hubName = params.hubName ?? "Gestión documental vendedor";
  const serviceName = `Gestión documental vendedor — arras a escritura en ${params.city}`;

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description: `Gestor dedicado que obtiene y verifica toda la documentación necesaria para que el vendedor particular pueda escriturar su piso en ${params.city} sin retrasos ni sorpresas.`,
    serviceType: "Gestión documental inmobiliaria",
    areaServed: {
      "@type": "City" as const,
      name: params.city,
      containedInPlace: {
        "@type": "AdministrativeArea" as const,
        name: params.administrativeArea,
      },
    },
    provider: { "@id": `${base}/#organization` },
    offers: buildOffer(pageUrl, params.priceCents, false),
    url: pageUrl,
    inLanguage: "es-ES",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Inicio", item: base },
      { "@type": "ListItem" as const, position: 2, name: "Servicios", item: `${base}/servicios` },
      { "@type": "ListItem" as const, position: 3, name: hubName, item: hubUrl },
      { "@type": "ListItem" as const, position: 4, name: params.city, item: pageUrl },
    ],
  };

  return { service, breadcrumb, pageUrl };
}

/** Schema local habitación: Service + Offer + Breadcrumb (Inicio → Servicios → hub → ciudad). */
export function buildContratoHabitacionLocalSchemaGraph(params: {
  path: string;
  city: string;
  administrativeArea: string;
  hubPath?: string;
  hubName?: string;
  priceCents: number;
  serviceName?: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${params.path}`;
  const hubPath = params.hubPath ?? "/servicios/contrato-alquiler-habitacion";
  const hubUrl = `${base}${hubPath}`;
  const hubName = params.hubName ?? "Contrato de alquiler de habitación";
  const serviceName =
    params.serviceName ?? `Contrato de alquiler de habitación en ${params.city}`;

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description: `Redacción profesional de contrato de alquiler de habitación en piso compartido en ${params.city}: convivencia, gastos, fianza e inventario.`,
    serviceType: "Contrato de alquiler de habitación",
    areaServed: {
      "@type": "City" as const,
      name: params.city,
      containedInPlace: {
        "@type": "AdministrativeArea" as const,
        name: params.administrativeArea,
      },
    },
    provider: { "@id": `${base}/#organization` },
    offers: buildOffer(pageUrl, params.priceCents, false),
    url: pageUrl,
    inLanguage: "es-ES",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Inicio", item: base },
      { "@type": "ListItem" as const, position: 2, name: "Servicios", item: `${base}/servicios` },
      { "@type": "ListItem" as const, position: 3, name: hubName, item: hubUrl },
      { "@type": "ListItem" as const, position: 4, name: params.city, item: pageUrl },
    ],
  };

  return { service, breadcrumb, pageUrl };
}

/** Schema local parking/trastero: Service + Offer + BreadcrumbList. */
export function buildParkingTrasteroLocalSchemaGraph(params: {
  path: string;
  city: string;
  administrativeArea: string;
  hubPath?: string;
  hubName?: string;
  priceCents: number;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${params.path}`;
  const hubPath = params.hubPath ?? "/servicios/acompanamiento-compra-parking-trastero";
  const hubUrl = `${base}${hubPath}`;
  const hubName = params.hubName ?? "Acompañamiento compra parking o trastero";
  const serviceName = `Acompañamiento compra parking o trastero en ${params.city}`;

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description: `Gestor dedicado para comprar plaza de garaje o trastero en ${params.city}: nota simple, IBI, comunidad, notaría, ITP y registro telemático.`,
    serviceType: "Acompañamiento integral compraventa de anexo inmobiliario",
    areaServed: {
      "@type": "City" as const,
      name: params.city,
      containedInPlace: {
        "@type": "AdministrativeArea" as const,
        name: params.administrativeArea,
      },
    },
    provider: { "@id": `${base}/#organization` },
    offers: buildOffer(pageUrl, params.priceCents, false),
    url: pageUrl,
    inLanguage: "es-ES",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Inicio", item: base },
      { "@type": "ListItem" as const, position: 2, name: "Servicios", item: `${base}/servicios` },
      { "@type": "ListItem" as const, position: 3, name: hubName, item: hubUrl },
      { "@type": "ListItem" as const, position: 4, name: params.city, item: pageUrl },
    ],
  };

  return { service, breadcrumb, pageUrl };
}

/** Schema local venta piso particular sin agencia (comprador ya encontrado). */
export function buildVentaPisoParticularLocalSchemaGraph(params: {
  path: string;
  city: string;
  administrativeArea: string;
  hubPath?: string;
  hubName?: string;
  priceCents: number;
  serviceName?: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${params.path}`;
  const hubPath = params.hubPath ?? "/servicios/venta-piso-particular-sin-agencia";
  const hubUrl = `${base}${hubPath}`;
  const hubName = params.hubName ?? "Venta piso particular sin agencia";
  const serviceName =
    params.serviceName ?? `Venta de piso de particular sin agencia en ${params.city}`;

  const service = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description: `Gestor inmobiliario dedicado para vendedores particulares en ${params.city} que ya tienen comprador: arras, documentación y coordinación hasta notaría. Sin comisión de agencia.`,
    serviceType: "Acompañamiento venta entre particulares",
    areaServed: {
      "@type": "City" as const,
      name: params.city,
      containedInPlace: {
        "@type": "AdministrativeArea" as const,
        name: params.administrativeArea,
      },
    },
    provider: { "@id": `${base}/#organization` },
    offers: buildOffer(pageUrl, params.priceCents, false),
    url: pageUrl,
    inLanguage: "es-ES",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem" as const, position: 1, name: "Inicio", item: base },
      { "@type": "ListItem" as const, position: 2, name: "Servicios", item: `${base}/servicios` },
      { "@type": "ListItem" as const, position: 3, name: hubName, item: hubUrl },
      { "@type": "ListItem" as const, position: 4, name: params.city, item: pageUrl },
    ],
  };

  return { service, breadcrumb, pageUrl };
}
