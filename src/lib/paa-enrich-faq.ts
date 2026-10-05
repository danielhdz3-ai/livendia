import type { FaqItem } from "@/lib/faq-types";
import { findPaaEntryForQuestion, getPaaCanonicalHref } from "@/lib/paa-registry";

const DEFAULT_READ_MORE_LABEL = "Guía ampliada (PAA) →";

export function enrichFaqItems(items: FaqItem[]): FaqItem[] {
  return items.map((item) => {
    if (item.readMoreHref) return item;
    const entry = findPaaEntryForQuestion(item.question);
    if (!entry) return item;
    return {
      ...item,
      readMoreHref: getPaaCanonicalHref(entry),
      readMoreLabel: item.readMoreLabel ?? DEFAULT_READ_MORE_LABEL,
    };
  });
}
