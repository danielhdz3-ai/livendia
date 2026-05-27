import type { PublicService } from "@/lib/catalog.public";
import {
  buildServicePageSchemaGraph,
  buildServicePageSchemaGraphMultiOffer,
  schemaFromPublicService,
  type ServiceSchemaInput,
} from "@/lib/service-schema";

type ServiceStructuredDataProps = ServiceSchemaInput;

/** Schema Service + Offer + BreadcrumbList para fichas /servicios/[slug]. */
export function ServiceStructuredData(props: ServiceStructuredDataProps) {
  const { service, breadcrumb } = buildServicePageSchemaGraph(props);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function ServiceStructuredDataFromCatalog({
  service,
  path,
}: {
  service: PublicService;
  path?: string;
}) {
  return <ServiceStructuredData {...schemaFromPublicService(service, path)} />;
}

type MultiOfferProps = Omit<ServiceSchemaInput, "priceCents" | "isRecurring"> & {
  offers: { priceCents: number; isRecurring?: boolean }[];
};

export function ServiceStructuredDataMultiOffer(props: MultiOfferProps) {
  const { service, breadcrumb } = buildServicePageSchemaGraphMultiOffer(props);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
