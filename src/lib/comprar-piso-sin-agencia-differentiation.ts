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
    copy: {
      heroH1: "¿Compras piso en Valencia sin agencia? — reserva y arras revisadas",
      heroBadge: "Compra sin agencia · Valencia",
    },
  },
  malaga: {
    copy: {
      heroH1: "¿Compras piso en Málaga sin agencia? — due diligence antes de la señal",
      heroBadge: "Compra sin agencia · Málaga",
    },
  },
  sevilla: {
    copy: {
      heroH1: "¿Compras piso en Sevilla sin agencia? — gestor comprador hasta notaría",
      heroBadge: "Compra sin agencia · Sevilla",
    },
  },
  bilbao: {
    copy: {
      heroH1: "¿Compras piso en Bilbao sin agencia? — trámites del comprador con gestor fijo",
      heroBadge: "Compra sin agencia · Bilbao",
    },
  },
};
