import {
  CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR,
  CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR,
  CONSULTA_FISCAL_VENDEDOR_PRICE_EUR,
} from "@/lib/catalog.public";
import { FISCAL_SELLER_DISCLAIMER, FISCAL_SELLER_RGPD_NOTICE } from "@/lib/fiscal-seller-disclaimer";

import { CONSULTA_FISCAL_COMPLEX_CASE_DEFINITION } from "@/lib/consulta-fiscal-vendedor-landing";

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
    answer: `${CONSULTA_FISCAL_VENDEDOR_PRICE_EUR} € IVA incl. hasta 2 titulares y un inmueble. +${CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € por cada titular desde el 3.º (3 titulares = ${CONSULTA_FISCAL_VENDEDOR_PRICE_EUR + CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € IVA incl.). ${CONSULTA_FISCAL_COMPLEX_CASE_DEFINITION}`,
  },
  {
    question: "¿Presentáis la plusvalía o la declaración de la renta?",
    answer:
      "No. Es una consulta orientativa: no presentamos autoliquidación municipal ni declaración de la renta. Te entregamos memoria y videollamada para que tú o tu asesor hagáis los trámites oficiales.",
  },
  {
    question: "¿Y si vendo con pérdida?",
    answer:
      "Si no hay incremento de valor del suelo, la plusvalía municipal puede ser cero. En IRPF, si la ganancia patrimonial es nula o negativa, no hay cuota por esta venta (salvo otros ingresos del ahorro que deban tenerse en cuenta).",
  },
  {
    question: "¿Cuándo se paga cada impuesto?",
    answer:
      "La plusvalía municipal se autoliquida en el ayuntamiento tras la escritura, con plazo breve según municipio. El IRPF de la venta se integra en la declaración de la renta del año en que se produce la transmisión.",
  },
  {
    question: "¿Qué pasa si soy no residente?",
    answer:
      "Tienen reglas propias (por ejemplo retención del comprador sobre parte del precio). El servicio estándar cubre residentes en España; para no residentes valoramos alcance y precio en presupuesto aparte por info@livendia.com o WhatsApp desde esta web.",
  },
  {
    question: "¿Puedo contratarlo antes de firmar arras?",
    answer:
      "Sí. Sirve para negociar el precio con una idea del neto aproximado tras plusvalía e IRPF, aunque el caso sea más preciso una vez exista arras con precio y fecha.",
  },
  {
    question: "¿Qué documentos necesito?",
    answer:
      "Obligatorios: contrato de arras (o acuerdo de venta), escritura de compra o nota simple (titulares y %), IBI o datos catastrales del valor del suelo, liquidación ITP/IVA de la compra. Para afinar IRPF: facturas de compra, reformas; vivienda habitual: empadronamiento y cronología. Opcional: certificado de saldo hipotecario.",
  },
  {
    question: "¿Cuánto tardáis?",
    answer:
      "3–5 días laborables desde que la documentación obligatoria esté completa y revisada por el gestor.",
  },
] as const;

export { FISCAL_SELLER_DISCLAIMER, FISCAL_SELLER_RGPD_NOTICE };