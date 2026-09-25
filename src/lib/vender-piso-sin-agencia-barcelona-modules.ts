/** Contenido extendido — landing vender sin agencia Barcelona. */

export type VenderSinAgenciaProcessStep = {
  step: number;
  title: string;
  description: string;
  howWeDoIt: readonly string[];
  checklist: readonly string[];
  imageSrc: string;
  imageAlt: string;
};

export const VENDER_SIN_AGENCIA_BARCELONA_INTRO = {
  eyebrow: "Vender en Barcelona sin agencia",
  title: "Venta entre particulares en Barcelona: ahorra comisiones sin renunciar a seguridad jurídica",
  paragraphs: [
    "En Barcelona, donde el precio medio de un piso supera con frecuencia los 400.000 €, una comisión inmobiliaria del 3 % más IVA puede suponer más de 14.000 € solo por intermediar. Si tú has captado al comprador —Idealista, Fotocasa, redes o boca a boca— no tiene sentido pagar ese porcentaje por un trámite que es fundamentalmente legal y documental.",
    "La venta entre particulares en Barcelona es completamente legal. El riesgo no está en vender sin agencia, sino en firmar contratos genéricos, no revisar cargas registrales o llegar a notaría con documentación incompleta. Livendia no busca comprador: somos la gestoría especializada en compraventa entre particulares con un gestor legal que te acompaña de la primera llamada a la escritura pública.",
    "Operamos en Barcelona capital y área metropolitana con tarifa plana publicada, panel online para subir documentos y los mismos co-gestores expertos — Arnau Martí y Daniel Hernández — al frente del criterio jurídico de tu operación.",
  ],
} as const;

export const VENDER_SIN_AGENCIA_BARCELONA_PROCESS = {
  eyebrow: "Qué incluye tu servicio completo de venta",
  title: "Cómo funciona vender tu piso en Barcelona sin agencia, paso a paso",
  intro:
    "Seis fases con el mismo gestor Livendia. Tú sigues negociando con tu comprador; nosotros blindamos contratos, documentación y calendario hasta la escritura pública.",
  alwaysWithYouTitle: "Siempre contigo",
  alwaysWithYouBody:
    "Un gestor legal experto — no un call center — responde por WhatsApp y teléfono, conoce tu expediente y te orienta cuando surgen dudas de comunidad, hipoteca o notaría.",
} as const;

export function buildVenderSinAgenciaBarcelonaSteps(priceLabel: string): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Llamada con tu gestor: le explicas la operación",
      description:
        "Cuéntanos precio pactado, plazos, si hay hipoteca tuya o del comprador, parking anexo o inquilino. En Barcelona muchas ventas cierran rápido en precio pero arrastran documentación catalana (cèdula, ITE, comunidad): el gestor te dice qué conviene firmar primero y qué pedir al comprador.",
      howWeDoIt: [
        "Primera toma de contacto por teléfono o WhatsApp — sin compromiso.",
        "Repaso de barrio, tipo de finca y calendario realista hasta escritura.",
        "Detección temprana de riesgos (derramas, cargas, financiación del comprador).",
        "Plan claro: reserva → arras → documentación → notaría.",
      ],
      checklist: [
        "Gestor humano desde el minuto uno",
        "Orientación sobre venta entre particulares en Barcelona",
        "Sin exclusiva ni comisión sobre el precio",
        "Misma persona hasta la escritura",
      ],
      imageSrc: "/images/pexels-yankrukov-7693161.jpg",
      imageAlt: "Gestor Livendia en llamada con propietario que vende en Barcelona",
    },
    {
      step: 2,
      title: "Contratas el servicio completo de venta",
      description: `Pagas la tarifa plana online (${priceLabel} IVA incl.) y se abre tu expediente en el panel. Un único precio por acompañamiento jurídico-documental hasta notaría — sin comisión sobre el precio del piso ni sorpresas si tu vivienda vale más.`,
      howWeDoIt: [
        "Contratación en minutos desde esta landing o tras la primera llamada.",
        "Confirmación de pago y acceso al área de cliente Livendia.",
        "Asignación de gestor y plazo orientativo de primera entrega documental.",
        "Factura y contrato de prestación de servicios archivados en panel.",
      ],
      checklist: [
        `${priceLabel} IVA incl. — precio cerrado`,
        "Panel de seguimiento desde el primer minuto",
        "Sin porcentaje sobre el precio de venta",
        "Mismo gestor hasta la firma en notaría",
      ],
      imageSrc: "/images/chicasofaazul.png",
      imageAlt: "Contratar servicio completo de venta Livendia online",
    },
    {
      step: 3,
      title: "Subes la documentación al panel o se la envías al gestor",
      description:
        "Centralizamos datos de comprador, vendedor e inmueble. Adjuntas nota simple, DNI, precio pactado y condiciones en el panel o por WhatsApp; el gestor te indica qué falta y persigue certificados de comunidad, cèdula o ITE si procede en Catalunya.",
      howWeDoIt: [
        "Datos de las partes (DNI/CIF, domicilio, contacto).",
        "Dirección registral, precio de venta, importe de señal y plazo a escritura.",
        "Nota simple registral o datos para solicitarla.",
        "Condiciones suspensivas acordadas (hipoteca, licencias, etc.).",
      ],
      checklist: [
        "Checklist venta en el panel (comprador / vendedor / inmueble)",
        "Subida segura de documentos o envío al gestor",
        "Recordatorios hasta completar el 100 %",
        "Sin desplazamientos a gestoría física",
      ],
      imageSrc: "/images/gestoria20.jpg",
      imageAlt: "Subir documentación de venta al panel Livendia",
    },
    {
      step: 4,
      title: "Preparamos el contrato de arras blindado",
      description:
        "El gestor redacta arras penitenciales o confirmatorias a medida — CCCat en Barcelona — con señal, penalidades equilibradas, cláusula 621-49 si hay hipoteca del comprador y plazos realistas para la comunidad. No plantillas de internet.",
      howWeDoIt: [
        "Redacción personalizada conforme al Código Civil de Catalunya.",
        "Cláusulas de señal, desistimiento y objeto del contrato (parking, anejos).",
        "Revisión cruzada con nota simple y lo pactado verbalmente.",
        "Borrador listo para firmar entre las partes.",
      ],
      checklist: [
        "Contrato de arras a medida — no genérico",
        "Cláusulas revisadas por gestor inmobiliario colegiado",
        "Coherencia con precio y plazos acordados",
        "Orientación antes de entregar la señal",
      ],
      imageSrc: "/images/contratodearras.jpg",
      imageAlt: "Redacción de contrato de arras para venta entre particulares en Barcelona",
    },
    {
      step: 5,
      title: "Canalizamos al comprador y analizamos viabilidad",
      description:
        "Actuamos como interlocutor profesional con el comprador y su banco: condiciones suspensivas, plazo de financiación, coherencia de la señal y documentación que exigirá la entidad. Informe semáforo pre-notaría para reducir rebajas de última hora.",
      howWeDoIt: [
        "Comunicación ordenada con comprador sobre plazos y documentación.",
        "Análisis de viabilidad de hipoteca y calendario bancario realista.",
        "Detección de cargas, derramas o elementos no inscritos.",
        "Mediación de dudas sin que pierdas la relación comercial.",
      ],
      checklist: [
        "Informe semáforo pre-escritura",
        "Seguimiento de condiciones suspensivas",
        "Coordinación con comprador particular o banco",
        "Gestor como filtro profesional — no sustituto del notario",
      ],
      imageSrc: "/images/gestor6.jpg",
      imageAlt: "Gestor Livendia analizando viabilidad de la venta entre particulares",
    },
    {
      step: 6,
      title: "Recabamos documentación y coordinamos hasta la escritura pública",
      description:
        "Persuimos certificado de deuda de comunidad, cèdula d'habitabilitat, energético e hipoteca pendiente del vendedor. Verificamos que lo pactado en arras coincide con el borrador notarial y te orientamos sobre plusvalía e impuestos del vendedor antes de firmar.",
      howWeDoIt: [
        "Solicitud y seguimiento de certificados de comunidad y registrales.",
        "Checklist pre-notaría alineado con lo firmado en arras.",
        "Coordinación de fecha de escritura con notaría y partes.",
        "Soporte post-arras hasta entrega de llaves acordada.",
      ],
      checklist: [
        "Expediente ordenado para notaría en Barcelona o área metropolitana",
        "Orientación sobre plusvalía e IRPF del vendedor",
        "Misma gestoría desde la reserva hasta la escritura",
        "Soporte breve post-entrega para dudas de ejecución",
      ],
      imageSrc: "/images/firma10.jpg",
      imageAlt: "Coordinación hasta escritura pública venta piso Barcelona",
    },
  ];
}
