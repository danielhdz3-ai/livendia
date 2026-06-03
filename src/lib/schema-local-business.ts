import {
  buildBusinessPostalAddress,
  businessNap,
  BUSINESS_AREA_SERVED,
  BUSINESS_CATEGORY,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
} from "@/lib/business-nap";
import { getContactPhoneE164Plus } from "@/lib/contact";

/** Nodo único de negocio para el @graph global (sin valoración ni @context). */
export function buildLocalBusinessSchema() {
  const url = businessNap.url();
  const hours = businessNap.openingHours;
  const address = buildBusinessPostalAddress();

  const node: Record<string, unknown> = {
    "@type": address ? ["LocalBusiness", "ProfessionalService"] : "ProfessionalService",
    "@id": `${url}/#localbusiness`,
    name: BUSINESS_NAME,
    description: BUSINESS_CATEGORY,
    url,
    telephone: getContactPhoneE164Plus(),
    email: BUSINESS_EMAIL,
    image: `${url}/icon.svg`,
    priceRange: "€€",
    areaServed: BUSINESS_AREA_SERVED.map((name) => ({ "@type": "Country", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...hours.dayOfWeek],
        opens: hours.opens,
        closes: hours.closes,
      },
    ],
    sameAs: [url],
  };

  if (address) {
    node.address = address;
  }

  return node;
}

/** Valoración Google Business: un solo AggregateRating enlazado al negocio (no duplicar LocalBusiness). */
export function buildAggregateRatingSchema() {
  const url = businessNap.url();
  const { ratingValue, reviewCount, bestRating } = businessNap.aggregateRating;

  return {
    "@type": "AggregateRating",
    "@id": `${url}/#google-aggregate-rating`,
    ratingValue,
    reviewCount,
    bestRating,
    worstRating: 1,
    itemReviewed: { "@id": `${url}/#localbusiness` },
  };
}
