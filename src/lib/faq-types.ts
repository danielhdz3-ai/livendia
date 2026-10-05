export type FaqItem = {
  question: string;
  answer: string;
  /** Guía PAA o blog ampliada (se puede autocompletar vía paa-registry). */
  readMoreHref?: string;
  readMoreLabel?: string;
};
