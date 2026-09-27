import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import type { CompraLocalSeoContent } from "@/lib/servicio-completo-compra-local-seo-content";

function faqCccatMunicipio(city: string): CompraLocalSeoContent {
  return {
    faqTitle: `Preguntas frecuentes — servicio completo de compra en ${city}`,
    faqSubtitle: `Compra entre particulares en ${city} con gestor dedicado, CCCat y panel Livendia.`,
    faq: [
      {
        question: `¿Puedo comprar en ${city} sin pagar comisión de agencia compradora?`,
        answer:
          "Sí. Si ya has encontrado vivienda entre particulares o con agencia solo del vendedor, Livendia es gestoría en tu bando: revisión de reserva y arras por tarifa plana, sin porcentaje sobre el precio del inmueble.",
      },
      {
        question: `¿Revisáis arras conforme al CCCat en ${city}?`,
        answer:
          "Sí. Arras (621-4 a 621-9) y cláusula de financiación (621-49) se adaptan a tu operación. Te explicamos obligaciones en castellano claro aunque el borrador mezcle catalán.",
      },
      {
        question: `¿Qué incluye el servicio completo por ${SERVICIO_COMPLETO_CV_PRICE_LABEL}?`,
        answer: `Revisión de reserva y arras, nota simple, documentación de comunidad, redacción o corrección de contratos, gestor asignado con panel de expediente y coordinación hasta escritura en notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, pago único.`,
      },
      {
        question: "¿Cuándo debo contratar Livendia?",
        answer:
          "Antes de firmar reserva o transferir la primera señal. En operaciones con prisa, el gestor prioriza cláusulas críticas en la primera revisión.",
      },
      {
        question: "¿Livendia busca pisos o negocia el precio?",
        answer:
          "No. Somos gestoría inmobiliaria digital del comprador: acompañamiento jurídico-documental sin comisión sobre el precio de compra.",
      },
    ],
  };
}

export const COMPRA_LOCAL_EXTRA_SEO_CONTENT: Record<string, CompraLocalSeoContent> = {
  badalona: faqCccatMunicipio("Badalona"),
  castelldefels: faqCccatMunicipio("Castelldefels"),
  "cornella-de-llobregat": faqCccatMunicipio("Cornellà de Llobregat"),
  "esplugues-de-llobregat": faqCccatMunicipio("Esplugues de Llobregat"),
  gava: faqCccatMunicipio("Gavà"),
  "sant-boi-de-llobregat": faqCccatMunicipio("Sant Boi de Llobregat"),
  "sant-cugat-del-valles": faqCccatMunicipio("Sant Cugat del Vallès"),
  granada: {
    faqTitle: "Preguntas frecuentes — servicio completo de compra en Granada",
    faqSubtitle: "Compra entre particulares en Granada con gestor dedicado y panel Livendia.",
    faq: [
      {
        question: "¿Puedo comprar en Granada sin agencia compradora?",
        answer:
          "Sí. Si encuentras piso por Idealista, recomendación o vendedor particular, no necesitas pagar comisión de intermediación al comprador. Livendia revisa reserva, arras y documentación hasta escritura.",
      },
      {
        question: "¿Revisáis compras en Zaidín, Realejo o Albaicín?",
        answer:
          "Sí. El protocolo documental se adapta al tipo de edificio (histórico, PAU, bloque estándar) y a la documentación de comunidad disponible.",
      },
      {
        question: `¿Qué incluye el servicio por ${SERVICIO_COMPLETO_CV_PRICE_LABEL}?`,
        answer: `Revisión de contratos, nota simple, comunidad, gestor con panel de expediente y coordinación hasta notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido.`,
      },
      {
        question: "¿Atendéis compradores que vienen de otra provincia?",
        answer:
          "Sí. Expediente online con gestor asignado; te guiamos en plazos de hipoteca y documentación del inmueble mientras preparas tu expediente personal.",
      },
      {
        question: "¿Cuándo contratar el servicio completo de compra?",
        answer: "Antes de firmar reserva o ingresar señal — especialmente si el vendedor o una agencia presionan para cerrar en 48 horas.",
      },
    ],
  },
};
