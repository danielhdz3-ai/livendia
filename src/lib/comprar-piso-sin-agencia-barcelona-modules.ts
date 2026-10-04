/** Contenido extendido — landing comprar sin agencia Barcelona y AMB. */

import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { getComprarPisoSinAgenciaStepImages } from "@/lib/comprar-piso-sin-agencia-images";
import { getComprarBcnZoneEnrichment } from "@/lib/comprar-piso-sin-agencia-bcn-zone-enrichment";

export const COMPRAR_SIN_AGENCIA_BARCELONA_INTRO = {
  eyebrow: "Comprar en Barcelona sin agencia",
  title: "Compra entre particulares en Barcelona: gestoría del comprador con tarifa plana",
  paragraphs: [
    "En Barcelona muchas operaciones se cierran en Idealista o Fotocasa sin agencia compradora: tú negocias con el propietario (o con una inmobiliaria solo del vendedor) y el riesgo está en firmar reserva o arras sin revisar ITE, derramas, cargas registrales o plazos de hipoteca imposibles.",
    "Comprar sin agencia no significa ir solo: significa no pagar comisión sobre el precio del piso por intermediación. Livendia no busca vivienda — somos la gestoría especializada en compradores particulares con un gestor legal que te acompaña de la primera llamada a la escritura pública.",
    "Operamos en Barcelona capital y área metropolitana con tarifa plana publicada, panel online para documentos y los mismos co-gestores expertos — Arnau Martí y Daniel Hernández — al frente del criterio jurídico de tu compra.",
  ],
} as const;

export const COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS = {
  eyebrow: "Qué incluye tu servicio completo de compra",
  title: "Cómo funciona comprar tu piso en Barcelona sin agencia, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia. Tú negocias precio y visitas; nosotros revisamos contratos, documentación y calendario hasta la escritura pública.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Cada documento, revisión y avance queda en tu área de cliente Livendia: referencia de expediente, barra de progreso e historial de actividad. Consulta en qué punto está tu compra sin depender de correos sueltos.",
} as const;

export function buildComprarSinAgenciaBarcelonaSteps(
  priceLabel: string,
  slug?: string,
  city?: string,
): readonly VenderSinAgenciaProcessStep[] {
  const zone = slug ? getComprarBcnZoneEnrichment(slug) : undefined;
  const imgs = slug ? getComprarPisoSinAgenciaStepImages(slug) : null;
  const zoneLabel = city ?? "Barcelona";
  return [
    {
      step: 1,
      title: "Llamada con tu gestor: le cuentas la operación",
      description:
        zone?.process.step1Description ??
        `Precio pactado, barrio, si hay parking o trastero, hipoteca en marcha y qué te ha pasado el vendedor (reserva, borrador de arras). En ${zoneLabel} conviene alinear cèdula, ITE y comunidad antes de ingresar señal: el gestor te dice qué pedir y qué no firmar aún.`,
      howWeDoIt: [
        "Primera toma de contacto por teléfono o WhatsApp — sin compromiso.",
        "Repaso de zona (Eixample, Gràcia, L'Hospitalet, Badalona…), tipo de finca y calendario realista.",
        "Detección temprana de riesgos: derramas, cargas, cláusulas de agencia del vendedor, financiación.",
        "Plan claro: revisión de reserva → arras → documentación → notaría.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Orientación sobre compra entre particulares en Barcelona",
        "Sin comisión sobre el precio del piso",
        "Misma persona hasta la escritura",
      ],
      imageSrc: imgs?.[0] ?? "/images/pexels-yankrukov-7693161.jpg",
      imageAlt: `Gestor Livendia en llamada con comprador en ${zoneLabel}`,
    },
    {
      step: 2,
      title: "Contratas el servicio completo de compra",
      description: `Pagas la tarifa plana online (${priceLabel} IVA incl.) y se abre tu expediente en el panel. Un único precio por acompañamiento jurídico-documental del comprador hasta notaría — sin porcentaje sobre el precio del inmueble.`,
      howWeDoIt: [
        "Contratación en minutos desde esta landing o tras la primera llamada.",
        "Confirmación de pago y acceso al área de cliente Livendia.",
        "Asignación de gestor y plazo orientativo de primera revisión documental.",
        "Factura y contrato de prestación de servicios archivados en panel.",
      ],
      checklist: [
        `${priceLabel} IVA incl. — precio cerrado`,
        "Panel de seguimiento desde el primer minuto",
        "Sin honorarios sobre el precio de compra",
        "Mismo gestor hasta la firma en notaría",
      ],
      imageSrc: imgs?.[1] ?? "/images/chicasofaazul.png",
      imageAlt: "Contratar servicio completo de compra Livendia online",
    },
    {
      step: 3,
      title: "Due diligence: documentación del inmueble bajo control",
      description:
        zone?.process.step3Description ??
        "Analizamos nota simple, certificados de comunidad, cèdula d'habitabilitat, certificado energético e ITE si el edificio lo exige. Cruzamos lo que viste en la visita con lo que declara el vendedor antes de que transfieras la señal.",
      howWeDoIt: [
        "Solicitud y revisión de nota simple registral y cargas.",
        "Comprobación de derramas aprobadas, obras en comunidad y deuda del vendedor.",
        "Validación de cèdula, energético e inspección técnica cuando aplica en Catalunya.",
        "Informe claro: qué está OK, qué negociar y qué condicionar en arras.",
      ],
      checklist: [
        "Checklist comprador en el panel",
        "Subida segura de documentos o envío al gestor",
        "Riesgos explicados en lenguaje claro",
        "Sin desplazamientos a gestoría física",
      ],
      imageSrc: imgs?.[2] ?? "/images/gestoria20.jpg",
      imageAlt: `Revisión documental compra vivienda ${zoneLabel} Livendia`,
    },
    {
      step: 4,
      title: "Revisamos o redactamos reserva y arras a tu favor",
      description:
        "El gestor analiza el borrador del vendedor o redacta arras penitenciales o confirmatorias — CCCat en Barcelona — con plazos de hipoteca realistas, penalizaciones equilibradas y objeto del contrato (anejos, parking) coherente con el precio.",
      howWeDoIt: [
        "Revisión de cláusulas de señal, desistimiento y condiciones suspensivas.",
        "Detección de honorarios encadenados o plazos imposibles impuestos por agencia.",
        "Coherencia entre reserva, arras y nota simple.",
        "Borrador listo para firmar con el vendedor.",
      ],
      checklist: [
        "Contratos revisados o redactados a medida",
        "Cláusulas explicadas antes de pagar señal",
        "Protección frente a plantillas solo a favor del vendedor",
        "Orientación sobre ingreso de arras y medios de pago seguros",
      ],
      imageSrc: imgs?.[3] ?? "/images/contratodearras.jpg",
      imageAlt: `Revisión contrato de arras comprador ${zoneLabel}`,
    },
    {
      step: 5,
      title: "Coordinamos banco, vendedor y escritura pública",
      description:
        zone?.process.step5Description ??
        "Seguimos condiciones suspensivas de hipoteca, pedimos certificado de deuda cero de comunidad, alineamos calendario con notaría y verificamos que lo pactado en arras coincide con el borrador notarial. Informe semáforo pre-escritura para evitar sorpresas el día de la firma.",
      howWeDoIt: [
        "Comunicación ordenada con vendedor y entidad financiera.",
        "Checklist pre-notaría: ITP, notaría, registro e impuestos orientados.",
        "Coordinación de fecha de escritura y documentación pendiente.",
        "Soporte hasta entrega de llaves según lo pactado.",
      ],
      checklist: [
        "Informe semáforo pre-escritura",
        "Seguimiento de hipoteca y plazos",
        "Coordinación en Barcelona o área metropolitana",
        "Gestor como filtro profesional — no sustituto del notario",
      ],
      imageSrc: imgs?.[4] ?? "/images/firma10.jpg",
      imageAlt: `Coordinación hasta escritura pública compra piso ${zoneLabel}`,
    },
  ];
}
