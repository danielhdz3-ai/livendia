import {
  CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR,
  CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR,
  CONSULTA_FISCAL_VENDEDOR_PRICE_EUR,
} from "@/lib/catalog.public";
import { FISCAL_SELLER_DISCLAIMER, FISCAL_SELLER_RGPD_NOTICE } from "@/lib/fiscal-seller-disclaimer";

export const CONSULTA_FISCAL_VENDEDOR_FAQ = [
  {
    question: "¿Es lo mismo que el servicio completo de venta (890 €)?",
    answer:
      "No. Esta consulta es solo orientación tributaria: no redactamos reserva ni arras, no gestionamos notaría ni comunidad. Si necesitas acompañamiento integral hasta escritura, puedes contratar el servicio completo de venta.",
  },
  {
    question: "¿Las cifras son exactas?",
    answer:
      "No garantizamos cifras exactas ni exenciones. Entregamos una simulación prudente con las hipótesis indicadas; debes confirmar con tu gestoría fiscal antes de liquidar plusvalía o declarar el IRPF.",
  },
  {
    question: "¿Cuánto cuesta con varios titulares?",
    answer: `${CONSULTA_FISCAL_VENDEDOR_PRICE_EUR} € IVA incl. hasta 2 titulares; +${CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € por cada titular adicional. Casos complejos (herencia reciente, muchos titulares, reinversión con varias viviendas): ${CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR} € IVA incl. o presupuesto si no eres residente fiscal en España.`,
  },
  {
    question: "¿Cuánto tardáis?",
    answer:
      "3–5 días laborables desde que la documentación obligatoria esté completa y revisada por el gestor.",
  },
  {
    question: "¿Qué documentos necesito?",
    answer:
      "Contrato de arras, escritura de compra o nota simple (titulares y %), IBI o catastro (valor del suelo), liquidación ITP/IVA de la compra. Para afinar el IRPF: facturas de compra, reformas acreditadas; si aplica vivienda habitual: empadronamiento y cronología de residencia. Opcional: certificado de saldo hipotecario.",
  },
] as const;

export { FISCAL_SELLER_DISCLAIMER, FISCAL_SELLER_RGPD_NOTICE };