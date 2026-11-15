import {
  CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR,
  CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR,
  CONSULTA_FISCAL_VENDEDOR_PRICE_EUR,
  CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL,
} from "@/lib/catalog.public";
import { FISCAL_SELLER_DISCLAIMER } from "@/lib/fiscal-seller-disclaimer";

export const CONSULTA_FISCAL_PROCESS_STEPS = [
  {
    step: 1,
    title: "Contratas y aceptas el aviso",
    description: `Pagas ${CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL} (o la tarifa que corresponda) y aceptas que la memoria es orientativa, no vinculante.`,
  },
  {
    step: 2,
    title: "Subes tu documentación",
    description:
      "Arras, escritura de compra o nota simple, IBI/catastro y liquidación del ITP o IVA. Un checklist en panel indica lo que falta.",
  },
  {
    step: 3,
    title: "Calculamos tu caso",
    description:
      "Plusvalía municipal por los dos métodos y IRPF por titular según su % en escritura, con los escenarios que apliquen (vivienda habitual, 65 años, reinversión).",
  },
  {
    step: 4,
    title: "Revisión del gestor",
    description:
      "Un gestor Livendia comprueba coherencia entre arras y escritura, porcentajes, fechas y exenciones antes de entregarte nada.",
  },
  {
    step: 5,
    title: "Memoria y videollamada",
    description:
      "PDF con líquido aproximado, plazos orientativos y explicación en videollamada de 30–45 min. Plazo: 3–5 días laborables con documentación obligatoria completa.",
  },
] as const;

export const CONSULTA_FISCAL_FISCAL_KEYS = {
  title: "Claves fiscales (orientación general)",
  bullets: [
    "IRPF del ahorro 2026 (escala estatal sobre la ganancia patrimonial): 19 % hasta 6.000 €; 21 % hasta 50.000 €; 23 % hasta 200.000 €; 27 % hasta 300.000 €; 30 % por encima (se apila sobre otras rentas del ahorro del titular).",
    "Mayores de 65 años que venden su vivienda habitual: exención orientativa de la ganancia patrimonial cuando se cumplen los requisitos (sujeto a acreditación).",
    "Reinversión en vivienda habitual: exención parcial o total si el importe obtenido se reinvierte en otra vivienda habitual en el plazo legal (hasta 2 años en escenarios habituales).",
    "Plusvalía municipal (IIVTNU): se calculan método objetivo y método real; suele aplicarse el más favorable si hay incremento de valor, y cero si no hay incremento real.",
    "Fecha de escritura: comparamos la cuota según se escriture antes o después de la entrada en vigor de los nuevos coeficientes del método objetivo (sin publicar tablas concretas hasta verificación BOE/ayuntamiento).",
  ],
  disclaimer: FISCAL_SELLER_DISCLAIMER,
} as const;

export const CONSULTA_FISCAL_PRICE_EXAMPLE_3_OWNERS = `${CONSULTA_FISCAL_VENDEDOR_PRICE_EUR} € + ${CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € = ${CONSULTA_FISCAL_VENDEDOR_PRICE_EUR + CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € IVA incl. (3 titulares)`;

export const CONSULTA_FISCAL_COMPLEX_CASE_DEFINITION =
  "Caso complejo: herencia reciente, más de 4 titulares o reinversión con varias viviendas — tarifa fija de " +
  `${CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR} € IVA incl. o presupuesto si no eres residente fiscal en España.`;