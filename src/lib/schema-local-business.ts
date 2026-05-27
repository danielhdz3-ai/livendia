import { businessNap, BUSINESS_AREA_SERVED, BUSINESS_CATEGORY, BUSINESS_EMAIL, BUSINESS_NAME } from "@/lib/business-nap";
import { getContactPhoneE164Plus } from "@/lib/contact";

export function buildLocalBusinessSchema(options?: { withContext?: boolean }) {
  const url = businessNap.url();
  const hours = businessNap.openingHours;
  const { ratingValue, reviewCount, bestRating } = businessNap.aggregateRating;

  const node = {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${url}/#localbusiness`,
    name: BUSINESS_NAME,
    description: BUSINESS_CATEGORY,
    url,
    telephone: getContactPhoneE164Plus(),
    email: BUSINESS_EMAIL,
    image: `${url}/icon.svg`,
    priceRange: "€€",
    areaServed: BUSINESS_AREA_SERVED.map((name) => ({ "@type": "Country", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...hours.dayOfWeek],
      opens: hours.opens,
      closes: hours.closes,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
    },
    sameAs: [url],
  };

  if (options?.withContext) {
    return { "@context": "https://schema.org", ...node };
  }
  return node;
}
