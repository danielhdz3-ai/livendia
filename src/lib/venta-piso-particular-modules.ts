import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { getVentaPisoParticularStepImages } from "@/lib/venta-piso-particular-images";

export const VENTA_PISO_PARTICULAR_PROCESS_META = {
  eyebrow: "Qué incluye el servicio completo de venta",
  titleTemplate: "Cómo Livendia cierra tu venta en {city} con comprador ya encontrado, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia. Tú negociaste precio y elegiste comprador; nosotros blindamos contratos, documentación catalana y calendario hasta la escritura — sin comisión sobre el precio de venta.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Nota simple, arras, certificados de comunidad, cédula e historial con tu gestor en un solo sitio. Sabes qué falta y en qué plazo, sin depender de correos sueltos con el comprador.",
  serviceLine: "Venta entre particulares · Livendia",
} as const;

export function ventaPisoParticularProcessTitle(city: string): string {
  return VENTA_PISO_PARTICULAR_PROCESS_META.titleTemplate.replace("{city}", city);
}

export function buildVentaPisoParticularSteps(
  city: string,
  priceLabel: string,
  slug: string,
): readonly VenderSinAgenciaProcessStep[] {
  const zone = city;
  const imgs = getVentaPisoParticularStepImages(slug);
  return [
    {
      step: 1,
      title: "Llamada con tu gestor: ya tienes comprador y precio",
      description: `Cuéntanos en ${zone} quién compra, importe pactado, plazos, hipoteca del comprador y si hay parking, herencia o varios titulares. Livendia no capta comprador: entramos cuando el acuerdo existe y hay que convertirlo en contratos y papeles defendibles.`,
      howWeDoIt: [
        "Primera toma de contacto por teléfono o WhatsApp — sin compromiso.",
        "Calendario realista hasta escritura (comunidad, banco, cédula).",
        "Detección temprana de cargas, derramas o financiación lenta.",
        "Plan: contratar → documentación → arras → pre-notaría.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Sin comisión sobre el precio de venta",
        "No sustituimos a una inmobiliaria de captación",
        "Misma persona hasta la firma",
      ],
      imageSrc: imgs.llamada,
      imageAlt: `Gestor Livendia con vendedor que ya tiene comprador en ${zone}`,
    },
    {
      step: 2,
      title: "Contratas el servicio completo de venta online",
      description: `Pagas la tarifa plana (${priceLabel} IVA incl.) y se abre tu expediente. Un único precio por acompañamiento jurídico-documental hasta notaría — no un porcentaje aunque tu piso valga más que la media de ${zone}.`,
      howWeDoIt: [
        "Contratación segura desde esta landing o tras la llamada.",
        "Acceso al panel Livendia y asignación de gestor.",
        "Factura y condiciones archivadas en expediente.",
        "Plazo orientativo de primera entrega documental.",
      ],
      checklist: [
        `${priceLabel} IVA incl. — precio cerrado`,
        "Panel de seguimiento desde el primer minuto",
        "Sin exclusiva de venta",
        "Gestor dedicado hasta escritura",
      ],
      imageSrc: imgs.contratar,
      imageAlt: "Contratar servicio venta entre particulares Livendia",
    },
    {
      step: 3,
      title: "Centralizamos documentación de vendedor, comprador e inmueble",
      description:
        "Subes al panel nota simple, DNI, datos del comprador, IBI y condiciones verbales que deben quedar por escrito. El gestor genera checklist personalizado y persigue certificado de deuda de comunidad, cédula d'habitabilitat, energético e hipoteca pendiente si la hay.",
      howWeDoIt: [
        "Checklist según tipo de finca y titularidad en Catalunya.",
        "Subida segura de documentos o envío al gestor.",
        "Solicitud y seguimiento de certificados lentos (comunidad, banco).",
        "Confirmación de expediente completo antes de redactar arras.",
      ],
      checklist: [
        "Nota simple y coherencia registral",
        "Comunidad, cédula y energético bajo control",
        "Sin desplazarte a gestoría física",
        "Informe de estado documental",
      ],
      imageSrc: imgs.documentacion,
      imageAlt: "Documentación venta piso entre particulares Livendia",
    },
    {
      step: 4,
      title: "Redactamos o revisamos el contrato de arras",
      description:
        "Arras penitenciales o confirmatorias conforme al Codi civil de Catalunya: señal, plazos realistas, cláusula 621-49 si el comprador financia, parking y anejos. No plantillas de internet copiadas de otra operación.",
      howWeDoIt: [
        "Redacción a medida o revisión de borrador del comprador.",
        "Equilibrio de penalidades y condiciones suspensivas.",
        "Cruce con nota simple y lo pactado en visita o WhatsApp.",
        "Orientación antes de que transfieras la señal.",
      ],
      checklist: [
        "Contrato de arras adaptado a tu venta",
        "Cláusula 621-49 cuando hay hipoteca",
        "Coherencia con precio y plazos acordados",
        "Gestor explica consecuencias en lenguaje claro",
      ],
      imageSrc: imgs.arras,
      imageAlt: "Contrato de arras venta entre particulares Catalunya",
    },
    {
      step: 5,
      title: "Coordinamos con comprador, banco y notaría hasta la escritura",
      description: `Actuamos como interlocutor profesional: condiciones suspensivas, certificados pendientes, borrador notarial y dudas de última hora. En ${zone} preparamos el terreno para que la firma sea un trámite, no una sorpresa — con orientación sobre plusvalía e impuestos del vendedor (liquidación aparte).`,
      howWeDoIt: [
        "Seguimiento de hipoteca del comprador y calendario bancario.",
        "Checklist pre-escritura alineado con lo firmado en arras.",
        "Coordinación de fecha con notaría y partes.",
        "Soporte hasta entrega de llaves acordada.",
      ],
      checklist: [
        "Informe semáforo pre-notaría",
        "Mediación sin romper la relación con tu comprador",
        "Expediente ordenado para el notario",
        "Mismo gestor post-arras hasta cierre",
      ],
      imageSrc: imgs.notaria,
      imageAlt: `Coordinación hasta escritura pública venta particular ${zone}`,
    },
  ];
}
