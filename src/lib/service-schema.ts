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
