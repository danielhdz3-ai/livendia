import type { ComprarPisoSinAgenciaCopyOverrides } from "@/lib/comprar-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

type ComprarPisoDiff = {
  keywords?: readonly string[];
  metaTitle?: string;
  metaDescription?: string;
  tramitesAreaNote?: string;
  benefitsAreaNote?: string;
  faq?: readonly { question: string; answer: string }[];
  barcelonaZoneIntro?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  copy?: ComprarPisoSinAgenciaCopyOverrides;
};

export const COMPRAR_PISO_DIFFERENTIATION: Record<string, ComprarPisoDiff> = {
  madrid: {
    keywords: [
      "comprar piso sin agencia madrid",
      "comprar piso entre particulares madrid",
      "gestor compra vivienda madrid",
      "revisar contrato reserva madrid",
      "acompañamiento compra chamberi retiro",
      "tramites compra piso particular madrid",
    ],
    metaTitle: "Comprar piso sin agencia en Madrid — gestor comprador · 890 € IVA incl.",
    metaDescription:
      "¿Compras en Madrid entre particulares? Gestor en tu bando: reserva, arras y escritura revisadas. Retiro, Chamberí, Tetuán. 890 € IVA incl. Sin comisión sobre el precio.",
    tramitesAreaNote:
      "En Madrid capital y corona, Livendia prioriza lo que no negocias después de la señal: arras, registral, comunidad y plazos de hipoteca con un gestor legal dedicado al comprador.",
    benefitsAreaNote:
      "Detectamos honorarios encadenados y plazos irreales; checklist documental y coordinación pre-escritura en Madrid.",
    faq: [
      {
        question: "¿Cómo comprar piso en Madrid sin agencia compradora?",
        answer:
          "Encuentras el inmueble (Idealista, particulares o vendedor directo) y contratas gestoría del comprador: Livendia revisa reserva y arras, ordena documentación y coordina hasta notaría por 890 € IVA incl., sin porcentaje sobre el precio.",
      },
      {
        question: "¿Qué revisa Livendia antes de firmar arras en Madrid?",
        answer:
          "Nota simple, cargas, cláusulas de penalización, plazos de financiación, certificados de comunidad, coherencia entre visita y contrato, y condiciones suspensivas de hipoteca.",
      },
      {
        question: "¿Cuánto cuesta frente a honorarios de intermediarios en Madrid?",
        answer: `Livendia cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} fijos. En la tabla de esta página comparas con un 3 % o 5 % orientativo sobre el precio de compra más IVA.`,
      },
    ],
    copy: {
      heroBadge: "Compra sin agencia · Madrid",
      heroH1: "¿Compras piso en Madrid sin agencia? — gestor en tu bando hasta escritura",
      heroLead:
        "¿Has encontrado piso entre particulares y no quieres firmar reserva o arras sin revisión? Un gestor legal de Livendia traduce riesgos, revisa documentación y te acompaña hasta notaría por {{price}} (IVA incl.) — tarifa plana, sin comisión sobre el precio del inmueble.",
      heroBullets: [
        "Chamberí, Retiro, Tetuán y cinturón: mismo gestor online",
        "Detectamos cláusulas de agencia y plazos de hipoteca irreales",
        "Due diligence antes de ingresar la señal",
      ],
      savingsIntro:
        "Si te piden honorarios sobre el precio de compra o firmas arras desequilibradas, el coste oculto supera con creces la gestoría. Livendia fija el acompañamiento en ",
      benefitsFourthTitle: "Tú negocias el precio",
      benefitsFourthText: "Nosotros ordenamos contratos, registral, comunidad y calendario hasta notaría.",
      disclaimer:
        "Livendia no busca vivienda ni actúa como agencia inmobiliaria. El servicio es acompañamiento jurídico-documental del comprador. Notaría, registro, impuestos (ITP o IVA) y comisiones bancarias son independientes; te orientamos sobre plazos y documentación.",
      waPrefill:
        "Hola, estoy comprando un piso entre particulares en Madrid y quiero comprar sin agencia con gestor Livendia. Me interesa el servicio completo de compra.",
    },
  },
  barcelona: {
    barcelonaZoneIntro: {
      eyebrow: "Comprar en Barcelona sin agencia",
      title: "Compra entre particulares en Barcelona: gestoría del comprador con tarifa plana",
      paragraphs: [
        "En Barcelona el mercado va rápido: muchos compradores firman reserva o arras en el mismo fin de semana de la visita. Sin agencia compradora el ahorro es real, pero el riesgo está en ITE pendiente, derramas de comunidad, cargas registrales o plazos de hipoteca imposibles en el borrador del vendedor.",
        "Livendia no busca piso ni cobra comisión sobre el precio: somos gestoría del comprador con tarifa plana de 890 € IVA incl., panel online y gestor legal dedicado hasta notaría.",
        "Eixample, Gràcia, Poblenou, L'Hospitalet, Badalona y el resto del área metropolitana comparten el mismo protocolo Livendia, con Arnau Martí y Daniel Hernández al frente del criterio jurídico.",
      ],
    },
    keywords: [
      "comprar piso sin agencia barcelona",
      "comprar piso entre particulares barcelona",
      "gestor compra vivienda barcelona",
      "revisar arras poblenou eixample",
      "compraventa particulares hospitalet badalona",
      "ITE compra piso barcelona gestoria",
    ],
    metaTitle: "Comprar piso sin agencia en Barcelona — 890 € IVA incl.",
    metaDescription:
      "¿Compras piso en Barcelona entre particulares? Reserva, arras e ITE revisadas. Eixample, Gràcia, Poblenou, L'Hospitalet. 890 € IVA incl., gestor del comprador.",
    tramitesAreaNote:
      "En Barcelona y área metropolitana, revisamos ITE, estado del edificio, contratos en castellano o catalán y documentación de comunidad antes de que la señal quede atada a cláusulas que no entiendes.",
    benefitsAreaNote:
      "Control de inspección técnica, derramas, arras bilingües y coordinación pre-escritura en Barcelona.",
    faq: [
      {
        question: "¿Cómo comprar piso en Barcelona sin agencia?",
        answer:
          "Compras al vendedor particular (o con agencia solo del vendedor) y contratas gestoría Livendia: revisión de reserva y arras, due diligence registral y acompañamiento hasta notaría por 890 € IVA incl.",
      },
      {
        question: "¿Por qué revisar ITE y comunidad antes de arras en Barcelona?",
        answer:
          "Muchos edificios tienen inspección pendiente, obras o derramas que no aparecen en el anuncio. Firmar arras sin revisar puede obligarte a asumir costes que no viste en la visita.",
      },
      {
        question: "¿Livendia habla catalán y castellano?",
        answer:
          "Sí. Te explicamos obligaciones reales aunque el borrador mezcle idiomas o referencias a normativa autonómica.",
      },
      {
        question: "¿Hay una guía larga sobre comprar sin agencia?",
        answer:
          "Sí: en /blog/comprar-piso-entre-particulares-sin-agencia-guia-completa encontrarás reserva, arras, checklist documental y enlaces al servicio completo de compra y a gestoría por ciudad.",
      },
    ],
    copy: {
      heroBadge: "Compra entre particulares · Barcelona",
      heroH1: "¿Compras piso en Barcelona sin agencia? — contratos e ITE bajo control",
      heroLead:
        "Mercado tensionado, edificios con historial urbanístico y contratos copiados de internet: antes de transferir la señal, un gestor Livendia revisa reserva, arras, ITE y comunidad por {{price}} (IVA incl.) — gestor fijo del comprador, sin comisión sobre el precio.",
      heroBullets: [
        "Eixample, Gràcia, Poblenou, L'Hospitalet y Badalona",
        "ITE, derramas y cláusulas bilingües explicadas en claro",
        "Tarifa plana frente a errores que cuestan miles de euros",
      ],
      savingsIntro:
        "Una cláusula mala en arras o una derrama oculta puede costarte más que cualquier comisión. El acompañamiento profesional de Livendia cuesta ",
      waPrefill:
        "Hola, compro piso entre particulares en Barcelona y quiero gestor Livendia para comprar sin agencia. Servicio completo de compra.",
    },
  },
  valencia: {
    keywords: [
      "comprar piso sin agencia valencia",
      "comprar piso entre particulares valencia",
      "gestor compra vivienda valencia",
      "revisar arras ruzafa valencia",
      "compraventa particulares cabanyal",
    ],
    metaTitle: "Comprar piso sin agencia en Valencia — gestor comprador · 890 €",
    metaDescription:
      "¿Compras en Valencia entre particulares? Ruzafa, Ciutat Vella, Benimaclet: reserva y arras revisadas. 890 € IVA incl. Sin comisión sobre el precio.",
    tramitesAreaNote:
      "En Valencia capital y área metropolitana, Livendia revisa arras copiadas, plazos de hipoteca y comunidad antes de que ingreses señal.",
    faq: [
      {
        question: "¿Cómo comprar en Valencia sin agencia compradora?",
        answer: `Encuentras piso (Idealista o particular) y contratas gestoría Livendia por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.: revisión de reserva, arras y documentación hasta notaría.`,
      },
      {
        question: "¿Qué revisáis en Ruzafa o el Carmen antes de arras?",
        answer:
          "Nota simple, cargas, actas de comunidad con obras de fachada, coherencia reserva–arras y condición suspensiva de financiación.",
      },
    ],
    copy: {
      heroBadge: "Compra sin agencia · Valencia",
      heroH1: "¿Compras piso en Valencia sin agencia? — reserva y arras revisadas",
      heroLead:
        "Ruzafa, Gran Vía o Cabanyal: antes de transferir señal, un gestor Livendia revisa contratos y documentación por {{price}} (IVA incl.) — tarifa plana del comprador.",
      heroBullets: [
        "Ciutat Vella, Campanar y área metropolitana",
        "Arras copiadas y plazos de hipoteca irreales",
        "Due diligence antes de la señal",
      ],
      waPrefill:
        "Hola, compro piso entre particulares en Valencia y quiero gestor Livendia para comprar sin agencia.",
    },
  },
  malaga: {
    keywords: [
      "comprar piso sin agencia malaga",
      "comprar piso entre particulares malaga",
      "gestor compra costa del sol",
      "revisar arras teatinos malaga",
      "compraventa particulares torremolinos",
    ],
    metaTitle: "Comprar piso sin agencia en Málaga — gestor comprador · 890 €",
    metaDescription:
      "Compra entre particulares en Málaga, Teatinos o costa. Reserva y arras revisadas. 890 € IVA incl. Gestor del comprador, no comisión sobre precio.",
    tramitesAreaNote:
      "En Málaga y Costa del Sol, revisamos segundas residencias, compradores extranjeros y arras post-verano antes de ingresar señal.",
    faq: [
      {
        question: "¿Compráis en la Costa del Sol sin agencia?",
        answer:
          "Sí. Mismo protocolo online para capital y municipios costeros hasta notaría en la provincia.",
      },
      {
        question: "¿Qué riesgos hay al comprar en Teatinos o Centro?",
        answer:
          "Arras desequilibradas, locales turísticos mal delimitados y plazos de hipoteca imposibles en borradores del vendedor.",
      },
    ],
    copy: {
      heroBadge: "Compra sin agencia · Málaga y Costa del Sol",
      heroH1: "¿Compras piso en Málaga sin agencia? — due diligence antes de la señal",
      heroLead:
        "Centro, Teatinos o costa: un gestor Livendia revisa reserva, arras y comunidad por {{price}} (IVA incl.) antes de que transfieras la señal.",
      heroBullets: [
        "Compradores locales y europeos",
        "Obra nueva y segunda residencia",
        "Tarifa plana frente a errores costosos",
      ],
      waPrefill:
        "Hola, compro piso entre particulares en Málaga y quiero gestor Livendia para comprar sin agencia.",
    },
  },
  sevilla: {
    keywords: [
      "comprar piso sin agencia sevilla",
      "comprar piso entre particulares sevilla",
      "gestor compra triana nervion",
      "revisar arras casco antiguo sevilla",
      "compraventa particulares dos hermanas",
    ],
    metaTitle: "Comprar piso sin agencia en Sevilla — gestor comprador · 890 €",
    metaDescription:
      "Compra entre particulares en Triana, Nervión o Los Remedios. Reserva y arras revisadas. 890 € IVA incl. Sin comisión sobre el precio del piso.",
    tramitesAreaNote:
      "En Sevilla capital y área metropolitana, el gestor revisa edificios históricos, plusvalía y arras copiadas antes de la señal.",
    faq: [
      {
        question: "¿Revisáis compras en el Casco Antiguo?",
        answer:
          "Sí. Licencias, cargas registrales y actas de comunidad antes de arras.",
      },
      {
        question: "¿Atendéis compradores en Dos Hermanas o Alcalá?",
        answer:
          "Sí. Expediente online Livendia con notaría en la provincia.",
      },
    ],
    copy: {
      heroBadge: "Compra sin agencia · Sevilla",
      heroH1: "¿Compras piso en Sevilla sin agencia? — gestor comprador hasta notaría",
      heroLead:
        "Triana, Nervión o Sevilla Este: revisión de reserva y arras por {{price}} (IVA incl.) con gestor fijo del comprador.",
      heroBullets: [
        "Patrimonio histórico y promociones nuevas",
        "Plazos de hipoteca negociados en contrato",
        "Sin comisión sobre el precio de compra",
      ],
      waPrefill:
        "Hola, compro piso entre particulares en Sevilla y quiero gestor Livendia para comprar sin agencia.",
    },
  },
  bilbao: {
    keywords: [
      "comprar piso sin agencia bilbao",
      "comprar piso entre particulares bilbao",
      "gestor compra getxo abando",
      "revisar arras bizkaia",
      "compraventa particulares gran bilbao",
    ],
    metaTitle: "Comprar piso sin agencia en Bilbao — gestor comprador · 890 €",
    metaDescription:
      "Compra entre particulares en Abando, Deusto o Getxo. Reserva y arras revisadas. 890 € IVA incl. Ticket alto: documentación impecable pre-señal.",
    tramitesAreaNote:
      "En Bilbao y Gran Bilbao, revisamos fondos de reserva en comunidad y plazos de financiación vasca antes de transferir señal.",
    faq: [
      {
        question: "¿Qué revisáis en operaciones de ticket alto en Bilbao?",
        answer:
          "Nota simple, derramas, coherencia reserva–arras y penalizaciones proporcionadas al precio (~380.000 € medio orientativo).",
      },
      {
        question: "¿Atendéis compras en Getxo o Barakaldo?",
        answer:
          "Sí. Misma tarifa y gestor online hasta notaría en Bizkaia.",
      },
    ],
    copy: {
      heroBadge: "Compra sin agencia · Gran Bilbao",
      heroH1: "¿Compras piso en Bilbao sin agencia? — trámites del comprador con gestor fijo",
      heroLead:
        "Abando, Deusto o Getxo: un gestor Livendia revisa contratos y comunidad por {{price}} (IVA incl.) antes de la señal.",
      heroBullets: [
        "Precios elevados: revisión documental rigurosa",
        "Plazos de hipoteca realistas en arras",
        "Tarifa plana del comprador",
      ],
      waPrefill:
        "Hola, compro piso entre particulares en Bilbao y quiero gestor Livendia para comprar sin agencia.",
    },
  },
};
