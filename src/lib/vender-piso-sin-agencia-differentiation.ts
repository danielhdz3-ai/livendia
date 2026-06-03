import type { VenderPisoSinAgenciaCopyOverrides } from "@/lib/vender-piso-sin-agencia-local-cities";

type VenderPisoDiff = {
  keywords?: readonly string[];
  metaTitle?: string;
  metaDescription?: string;
  tramitesAreaNote?: string;
  benefitsAreaNote?: string;
  faq?: readonly { question: string; answer: string }[];
  copy?: VenderPisoSinAgenciaCopyOverrides;
};

export const VENDER_PISO_DIFFERENTIATION: Record<string, VenderPisoDiff> = {
  madrid: {
    keywords: [
      "vender piso sin agencia madrid",
      "venta entre particulares madrid retiro",
      "tramites vender piso particular chamberi",
      "gestor legal venta piso madrid",
      "vender con comprador particular madrid",
      "ahorrar comision inmobiliaria madrid",
    ],
    copy: {
      heroBadge: "Venta sin agencia · Madrid",
      heroH1: "Vende en Madrid con comprador particular — gestor legal, no comisión del 3 %",
      heroLead:
        "¿Ya tienes comprador en Madrid (Retiro, Chamberí, Tetuán, Vallecas…)? Livendia redacta reserva y arras, ordena comunidad y registral y coordina notaría por {{price}} (IVA incl.) — sin pagar miles en comisión de agencia.",
      heroBullets: [
        "Mercado rápido: revisamos antes de que firmes la reserva estándar",
        "Cinturón sur y norte: misma gestoría online",
        "Gestor legal fijo por WhatsApp, no call center",
      ],
      savingsIntro:
        "En Madrid, un piso de 400.000 € con comisión del 3 % son 12.000 € + IVA solo por intermediar. Con comprador ya encontrado, Livendia cubre el tramo legal por tarifa plana.",
      benefitsFourthTitle: "Ideal si vendes tú el piso",
      benefitsFourthText:
        "Idealista, recomendación laboral, familia o comprador que viste el piso en Chamberí o Arganzuela — nosotros blindamos contratos.",
      finalCtaTitle: "Cierra la venta en Madrid con documentación profesional",
      waPrefill:
        "Hola, vendo mi piso en Madrid entre particulares (ya tengo comprador) y quiero gestoría Livendia para reserva, arras y notaría.",
    },
  },
  valencia: {
    keywords: [
      "vender piso sin agencia valencia",
      "venta particular ruzafa benimaclet",
      "tramites venta piso valencia horta",
      "gestor venta sin inmobiliaria valencia",
      "vender piso idealista valencia particular",
    ],
    copy: {
      heroBadge: "Venta sin agencia · Valencia y l'Horta",
      heroH1: "Vende en Valencia entre particulares — 890 € de gestoría, no 3 % de comisión",
      heroLead:
        "¿Comprador en Ruzafa, Campanar, Benimaclet o Mislata? Por {{price}} (IVA incl.) un gestor legal revisa reserva, redacta arras y te guía hasta escritura sin comisión sobre el precio de venta.",
      heroBullets: [
        "Reservas firmadas en 48 h: las revisamos antes de la señal",
        "Obra nueva y reventa en l'Horta",
        "Comunidad y nota simple antes de arras",
      ],
      savingsIntro:
        "En Valencia, el ahorro frente a una agencia del 3 % suele superar con creces los 890 € de Livendia cuando el precio supera 280.000 €.",
      finalCtaTitle: "Vende en Valencia con comprador que ya tienes",
      waPrefill:
        "Hola, vendo en Valencia entre particulares con comprador confirmado. Necesito el servicio completo de venta Livendia.",
    },
  },
  malaga: {
    keywords: [
      "vender piso sin agencia malaga",
      "venta entre particulares costa del sol",
      "vender piso teatinos torremolinos particular",
      "gestor venta segunda residencia malaga",
      "tramites vender piso particular malaga",
      "vender sin inmobiliaria rincon victoria",
    ],
    metaTitle: "Vender piso sin agencia en Málaga y Costa del Sol | Comprador particular",
    metaDescription:
      "¿Vendes en Teatinos, Centro, Torremolinos o la costa con comprador ya encontrado? Gestor legal Livendia: reserva, arras y notaría. 890 € IVA incl. Sin comisión 3–5 %.",
    tramitesAreaNote:
      "En Málaga capital y Costa del Sol (Teatinos, El Palo, Pedregalejo, Torremolinos, Benalmádena, Rincón de la Victoria, Fuengirola…), el gestor revisa comunidad turístico-residencial, nota simple y calendario con compradores nacionales o europeos.",
    benefitsAreaNote:
      "Especialmente útil en segunda residencia: tú vives fuera y el gestor coordina comunidad, técnico y notaría malagueña o costera.",
    faq: [
      {
        question: "¿Puedo vender mi piso en la costa sin agencia si ya tengo comprador?",
        answer:
          "Sí. Livendia es gestoría para venta entre particulares: reserva, arras, documentación y coordinación con notaría por 890 € IVA incl., sin comisión sobre el precio.",
      },
      {
        question: "¿Qué pasa si el edificio tiene apartamentos turísticos en la comunidad?",
        answer:
          "Revisamos estatutos y certificados de la comunidad para que el comprador no use limitaciones de uso como arma de rebaja tardía.",
      },
      {
        question: "¿Livendia publica mi piso en portales?",
        answer:
          "No. No somos agencia ni portal. Trabajamos cuando tú ya has encontrado comprador y necesitas trámites seguros.",
      },
      {
        question: "¿Cuánto ahorro respecto a una inmobiliaria en Málaga?",
        answer:
          "En un piso de 320.000 €, el 3 % son 9.600 € + IVA. Livendia cuesta 890 € fijos: la tabla de esta página muestra el ahorro según tu precio.",
      },
    ],
    copy: {
      heroBadge: "Venta sin agencia · Málaga y Costa del Sol",
      heroH1: "Vende en Málaga o en la costa entre particulares — sin comisión del 3 %",
      heroLead:
        "¿Ya tienes comprador en Teatinos, el Centro, Torremolinos o la costa? Por {{price}} (IVA incl.) un gestor legal de Livendia gestiona reserva, arras, trámites y notaría — tú ahorras la comisión de agencia cuando la venta la llevas tú.",
      heroBullets: [
        "Segunda residencia, herencia o traslado: gestoría sin desplazarte por cada papel",
        "Comunidades con uso turístico: documentación revisada",
        "Comprador de Idealista o recomendación — contratos equilibrados",
      ],
      savingsIntro:
        "En la Costa del Sol muchas agencias piden 3–5 % sobre venta aunque tú hayas traído al comprador. Livendia cobra tarifa plana y se centra en contratos y registral.",
      benefitsFourthTitle: "Venta costera con criterio",
      benefitsFourthText:
        "Experiencia en operaciones donde el vendedor vive en Madrid, Barcelona o extranjero y el piso está en Málaga o municipio costero.",
      finalCtaTitle: "Vende en Málaga con comprador particular y gestoría fija",
      finalCtaSubtitle:
        "{{price}} IVA incl.: reserva, arras, comunidad, nota simple y coordinación con notaría en capital o costa.",
      faqTitle: "Vender sin agencia en Málaga y la Costa del Sol",
      faqSubtitle: "Segunda residencia, trámites entre particulares y ahorro frente a comisiones.",
      waPrefill:
        "Hola, vendo mi piso en Málaga (o la costa) entre particulares y ya tengo comprador. Quiero el servicio completo de venta Livendia.",
      jsonLdServiceName: "Vender piso sin agencia en Málaga y Costa del Sol con gestoría Livendia",
      imageAlt: "Venta entre particulares en Málaga con gestor legal Livendia",
    },
  },
  sevilla: {
    keywords: [
      "vender piso sin agencia sevilla",
      "venta entre particulares triana nervion",
      "tramites venta piso particular sevilla",
      "gestor venta sin inmobiliaria sevilla",
      "vender piso tomares dos hermanas",
      "contrato arras vendedor sevilla particular",
    ],
    metaTitle: "Vender piso sin agencia en Sevilla | Comprador particular Livendia",
    metaDescription:
      "¿Vendes en Triana, Nervión, Los Remedios o área metropolitana con comprador ya encontrado? Gestor legal: reserva, arras y notaría. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sevilla capital (Triana, Macarena, Nervión, Los Remedios, Santa Cruz, Sevilla Este) y municipios (Tomares, Dos Hermanas, Alcalá de Guadaíra), revisamos patrimonio histórico, comunidad y coherencia registral.",
    benefitsAreaNote:
      "Checklist adaptado a edificios del casco y a urbanizaciones nuevas: derramas, licencias y certificados antes de arras.",
    faq: [
      {
        question: "¿Necesito agencia para vender en Triana o Nervión?",
        answer:
          "No es obligatorio. Si ya tienes comprador, Livendia cubre la parte legal con gestor dedicado por 890 € IVA incl.",
      },
      {
        question: "¿Qué revisáis en edificios históricos de Sevilla?",
        answer:
          "Licencias, estado de la comunidad, cargas en nota simple y coherencia entre lo mostrado al comprador y lo que se firma en arras.",
      },
      {
        question: "¿Atendéis Tomares y Dos Hermanas?",
        answer: "Sí, misma gestoría online y mismos precios publicados que en capital.",
      },
      {
        question: "¿Livendia busca comprador en Sevilla?",
        answer:
          "No. Somos gestoría documental y contractual para propietarios que venden sin agencia.",
      },
    ],
    copy: {
      heroBadge: "Venta sin agencia · Sevilla y área metropolitana",
      heroH1: "Vende en Sevilla entre particulares — gestor legal, no comisión de agencia",
      heroLead:
        "¿Comprador en Triana, Nervión, Los Remedios, Macarena o Tomares? Por {{price}} (IVA incl.) Livendia redacta reserva y arras, revisa comunidad y te acompaña hasta notaría sin pagar un 3 % sobre el precio de venta.",
      heroBullets: [
        "Casco histórico y Sevilla Este: checklist distinto según el edificio",
        "Comprador de Idealista o conocido — arras equilibradas",
        "Plusvalía municipal y plazos explicados con claridad",
      ],
      savingsIntro:
        "En Sevilla, con precios medios en torno a 250.000 €, una comisión del 3 % supera 7.500 € + IVA. Con comprador confirmado, la gestoría Livendia suele ser la opción racional.",
      benefitsFourthTitle: "Venta sevillana entre particulares",
      benefitsFourthText:
        "Gestor que conoce el ritmo local: rapidez en la visita, rigor en reserva y arras.",
      finalCtaTitle: "Cierra tu venta en Sevilla con gestoría de confianza",
      faqTitle: "Vender piso sin agencia en Sevilla — preguntas frecuentes",
      faqSubtitle: "Triana, Nervión, área metropolitana, trámites y ahorro frente a inmobiliarias.",
      waPrefill:
        "Hola, vendo mi piso en Sevilla entre particulares (ya tengo comprador). Me interesa Livendia para trámites y notaría.",
      jsonLdServiceName: "Vender piso sin agencia en Sevilla con comprador particular",
      imageAlt: "Venta entre particulares en Sevilla con gestor legal Livendia",
    },
  },
  bilbao: {
    keywords: [
      "vender piso sin agencia bilbao",
      "venta entre particulares deusto getxo",
      "gestor venta piso bizkaia sin comision",
      "tramites venta particular gran bilbao",
      "vender piso abando sin inmobiliaria",
    ],
    copy: {
      heroBadge: "Venta sin agencia · Gran Bilbao",
      heroH1: "Vende en Bilbao o Getxo con comprador particular — 890 €, no 13.000 € de comisión",
      heroLead:
        "¿Comprador en Abando, Deusto, Getxo o Barakaldo? Por {{price}} (IVA incl.) un gestor legal ordena reserva, arras y documentación en un mercado de precios altos donde un error contractual cuesta más que la gestoría.",
      heroBullets: [
        "Bizkaia: precios elevados, máximo ahorro sin agencia",
        "Comunidades con derramas: revisión antes de arras",
        "Coordinación con notaría del Gran Bilbao",
      ],
      savingsIntro:
        "En un piso de 380.000 € en Bilbao, el 3 % de comisión + IVA supera fácilmente los 13.000 €. Livendia trabaja con tarifa plana cuando tú traes al comprador.",
      finalCtaTitle: "Vende en Bizkaia con gestoría profesional",
      waPrefill:
        "Hola, vendo en Bilbao/Getxo entre particulares con comprador. Quiero el servicio completo de venta Livendia.",
    },
  },
};
