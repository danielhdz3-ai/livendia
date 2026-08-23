import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";

export type LocalFaqItem = { question: string; answer: string };

export type LocalDifferentiationFields = LocalCityLandingFields & {
  faq?: readonly LocalFaqItem[];
};

/** Combina definición base con bloques de diferenciación; concatena FAQ si ambos existen. */
export function mergeLocalDifferentiation<
  T extends LocalDifferentiationFields & { faq?: readonly LocalFaqItem[] },
>(
  base: T,
  diff: Partial<LocalDifferentiationFields & { faq?: readonly LocalFaqItem[] }> = {},
): T {
  const baseFaq = base.faq ?? [];
  const diffFaq = diff.faq ?? [];
  const mergedFaq =
    diffFaq.length > 0
      ? [...baseFaq, ...diffFaq.filter((d) => !baseFaq.some((b) => b.question === d.question))]
      : baseFaq;

  return {
    ...base,
    ...diff,
    ...(mergedFaq.length > 0 ? { faq: mergedFaq } : {}),
  };
}

/** Añade localMarketInsight por slug a un mapa de diferenciación. */
export function attachLocalMarketInsights<T extends LocalCityLandingFields>(
  record: Record<string, T>,
  insights: Record<string, string>,
): Record<string, T> {
  return Object.fromEntries(
    Object.entries(record).map(([slug, fields]) => [
      slug,
      insights[slug] ? { ...fields, localMarketInsight: insights[slug] } : fields,
    ]),
  ) as Record<string, T>;
}
