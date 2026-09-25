import type { VenderPisoSinAgenciaCopyOverrides } from "@/lib/vender-piso-sin-agencia-local-cities";

type VenderPisoDiff = {
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
  copy?: VenderPisoSinAgenciaCopyOverrides;
};

export const VENDER_PISO_DIFFERENTIATION: Record<string, VenderPisoDiff> = {
  barcelona: {
    keywords: [
      "vender piso en barcelona sin comisiones",
      "vender piso sin comisiones en barcelona",
      "vender piso sin comisiones barcelona",
      "venta entre particulares barcelona",
      "venta de particular a particular barcelona",
      "gestoría venta piso particular barcelona",
      "vender piso sin agencia barcelona",
      "vender piso sin inmobiliaria barcelona",
      "trámites venta entre particulares barcelona",
    ],
    metaTitle: "Vender piso en Barcelona sin comisiones — 890 € IVA incl.",
    metaDescription:
      "Vender piso sin comisiones en Barcelona: venta entre particulares con gestoría por 890 € IVA incl. Reserva, arras, documentación y notaría. Ahorra el 3–5 % de agencia. Eixample, Gràcia, Sant Martí, L'Hospitalet.",
    tramitesAreaNote:
      "En Barcelona capital y área metropolitana (Eixample, Gràcia, Sant Martí, Sants, L'Hospitalet, Badalona, Poblenou…), un gestor legal experto de Livendia ordena reserva, arras, documentación y coordinación con notaría mientras tú vendes sin comisiones entre particulares.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, ITE si procede, registral y coordinación pre-escritura en Barcelona — gestoría para vender sin agencia cuando ya tienes comprador.",
    faq: [
      {
        question: "¿Cómo vender piso en Barcelona sin comisiones de agencia?",
        answer:
          "Si ya tienes comprador (Idealista, recomendación o conocido), no necesitas pagar un 3–5 % sobre el precio de venta. Livendia es gestoría por 890 € IVA incl.: redactamos reserva y arras, revisamos comunidad y registral, y coordinamos hasta notaría — venta entre particulares con respaldo legal.",
      },
      {
        question: "¿Qué es la venta de particular a particular en Barcelona?",
        answer:
          "Es cuando tú, como propietario, vendes tu piso a otro particular sin pagar comisión a una agencia inmobiliaria. Livendia es la gestoría que te acompaña en contratos, documentación y trámites hasta la escritura, con tarifa plana de 890 € IVA incl.",
      },
      {
        question: "¿Necesito una agencia para vender mi piso en Barcelona?",
        answer:
          "No es obligatorio. Si prefieres vender sin comisiones y llevas tú la captación o ya tienes comprador, una gestoría especializada como Livendia cubre la parte legal con un gestor experto dedicado a tu operación.",
      },
      {
        question: "¿Qué trámites incluye la gestoría para vender entre particulares en Barcelona?",
        answer:
          "Reserva (si aplica), contrato de arras, nota simple registral, certificados de la comunidad, revisión de cargas, coordinación con notaría y orientación sobre plusvalía e impuestos del vendedor. Todo con tarifa plana de 890 € IVA incl., sin comisiones sobre el precio de venta.",
      },
      {
        question: "¿Cuánto ahorro respecto a una agencia inmobiliaria en Barcelona?",
        answer:
          "En un piso de 400.000 €, una comisión del 3 % son 12.000 € + IVA (~14.520 €); al 5 %, 20.000 € + IVA. Livendia cuesta 890 € fijos: en la tabla de esta página ves el ahorro según el precio de tu vivienda en Barcelona.",
      },
      {
        question: "¿Livendia busca comprador o publica mi piso en Barcelona?",
        answer:
          "No. No somos agencia ni portal inmobiliario. Somos gestoría: acompañamiento jurídico-documental para propietarios que venden sin agencia y gestionan la venta entre particulares.",
      },
    ],
    copy: {
      heroBadge: "Venta sin comisiones · Barcelona",
      heroH1: "Vender piso en Barcelona sin comisiones — venta entre particulares con gestoría",
      heroLead:
        "¿Vendes tu piso en Barcelona y no quieres pagar el 3–5 % de una inmobiliaria? Si ya tienes comprador en Eixample, Gràcia, Sant Martí o L'Hospitalet, Livendia gestiona reserva, arras, trámites y notaría por {{price}} (IVA incl.) — venta de particular a particular con gestor legal experto, sin comisiones sobre el precio de venta.",
      heroBullets: [
        "Vender sin comisiones: tarifa plana frente a miles de euros de agencia",
        "Eixample, Poblenou, Sants, Badalona: mismo gestor online",
        "Contratos a medida — no plantillas copiadas de internet",
      ],
      savingsIntro:
        "En Barcelona, con precios medios altos, una comisión del 3 % sobre 400.000 € son 12.000 € + IVA solo por intermediar. Si tú llevas la venta entre particulares, Livendia te da el mismo acompañamiento jurídico por tarifa plana de 890 €.",
      benefitsFourthTitle: "Gestoría para vender sin agencia",
      benefitsFourthText:
        "Idealista, recomendación, familia o comprador que ya tienes — especialistas en venta inmobiliaria entre particulares en Barcelona y área metropolitana.",
      disclaimer:
        "Livendia no busca comprador ni hace marketing inmobiliario. Somos gestoría: acompañamiento jurídico-documental para propietarios que venden sin comisiones. Notaría, registro, plusvalía e IRPF del vendedor son independientes; te orientamos sobre plazos y documentación.",
      finalCtaTitle: "Vende en Barcelona sin comisiones — con gestoría de confianza",
      finalCtaSubtitle:
        "Tarifa plana {{price}} IVA incl.: reserva, arras, trámites y notaría con gestor legal experto dedicado.",
      faqTitle: "Vender piso en Barcelona sin comisiones — preguntas frecuentes",
      faqSubtitle: "Venta entre particulares, trámites, gestoría y ahorro frente a comisiones de agencia.",
      waPrefill:
        "Hola, quiero vender mi piso en Barcelona sin comisiones (entre particulares, ya tengo comprador). Me interesa el servicio completo de venta Livendia.",
      jsonLdServiceName: "Vender piso en Barcelona sin comisiones con gestoría Livendia",
      imageAlt: "Vender piso sin comisiones en Barcelona con gestoría Livendia",
    },
  },
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
    metaTitle: "Vender piso sin agencia en Bilbao y Getxo | Comprador particular",
    metaDescription:
      "¿Vendes en Abando, Deusto, Getxo o Barakaldo con comprador ya encontrado? Gestor legal: reserva, arras y notaría. 890 € IVA incl. Sin comisión 3–5 %.",
    tramitesAreaNote:
      "En Bilbao capital (Abando, Deusto, Indautxu, Basurto) y Gran Bilbao (Getxo, Portugalete, Barakaldo, Leioa), el gestor revisa comunidad con derramas RENOVE, nota simple y coherencia registral en un mercado de precios elevados.",
    benefitsAreaNote:
      "Checklist documental, certificado de deuda de comunidad y coordinación con notaría del Gran Bilbao — gestoría para vender sin agencia cuando ya tienes comprador.",
    faq: [
      {
        question: "¿Necesito agencia para vender en Bilbao si ya tengo comprador?",
        answer:
          "No es obligatorio. Livendia cubre reserva, arras, documentación y coordinación con notaría por 890 € IVA incl., sin comisión sobre el precio de venta.",
      },
      {
        question: "¿Qué revisáis en edificios con derramas RENOVE?",
        answer:
          "Certificado de deuda de la comunidad, actas de derramas aprobadas y coherencia entre lo declarado al comprador y lo que figura en documentación antes de arras.",
      },
      {
        question: "¿Atendéis Getxo y municipios del cinturón?",
        answer: "Sí, misma gestoría online y mismos precios publicados que en Bilbao capital.",
      },
      {
        question: "¿Cuánto ahorro respecto a una inmobiliaria en Bizkaia?",
        answer:
          "En un piso de 380.000 €, el 3 % son 11.400 € + IVA (~13.794 €). Livendia cuesta 890 € fijos: la tabla de esta página muestra el ahorro según tu precio.",
      },
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
  granada: {
    keywords: [
      "vender piso sin comisiones granada",
      "venta entre particulares granada",
      "vender piso sin agencia granada ugr",
      "gestoría venta particular granada",
    ],
    metaTitle: "Vender piso sin comisiones Granada — 890 € IVA incl.",
    metaDescription:
      "Vende entre particulares en Granada con gestoría Livendia: 890 € IVA incl., reserva, arras y notaría. Sin comisión del 3–5 %. Albaicín, Zaidín, Realejo.",
    tramitesAreaNote:
      "En Granada capital (Albaicín, Realejo, Zaidín, Ronda, Chana) y área metropolitana (Armilla, Maracena), el gestor revisa patrimonio histórico, comunidad y coherencia registral antes de vincular arras.",
    benefitsAreaNote:
      "Especialmente útil en ventas universitarias, herencias del casco histórico o segunda residencia: contratos equilibrados sin pagar comisión de agencia.",
    faq: [
      {
        question: "¿Puedo vender en el Albaicín entre particulares con comprador ya encontrado?",
        answer:
          "Sí. Livendia redacta reserva y arras, revisa nota simple y comunidad por 890 € IVA incl. El casco histórico exige documentación ordenada para evitar rebajas tardías.",
      },
      {
        question: "¿Tiene sentido una agencia si el comprador viene de Idealista?",
        answer:
          "En un piso de 170.000 €, el 3 % son 5.100 € + IVA. Si tú captaste al comprador, Livendia cubre el tramo legal por tarifa plana.",
      },
      {
        question: "¿Gestionáis ventas con comprador estudiante o de otra provincia?",
        answer:
          "Sí. Redactamos plazos realistas (hipoteca, venta previa del comprador) y centralizamos documentos en el panel Livendia.",
      },
      {
        question: "¿Livendia publica mi piso en portales?",
        answer:
          "No. Somos gestoría documental y contractual para propietarios que venden sin agencia.",
      },
    ],
    copy: {
      heroBadge: "Venta sin comisiones · Granada",
      heroH1: "Vender piso en Granada sin comisiones — entre particulares con gestoría",
      heroLead:
        "¿Ya tienes comprador en Granada (Idealista, UGR, recomendación)? Por {{price}} (IVA incl.) Livendia redacta reserva y arras — sin pagar miles de euros a una inmobiliaria por un trámite que tú ya llevas.",
      heroBullets: [
        "Albaicín, Zaidín, Realejo: mismo gestor online",
        "Herencia, segunda residencia o traslado",
        "No publicamos tu piso: solo gestoría legal",
      ],
      savingsIntro:
        "En un piso de 170.000 €, el 3 % de comisión son 5.100 € + IVA. Livendia cuesta 890 € fijos cuando vendes entre particulares.",
      finalCtaTitle: "Vende en Granada sin comisiones — con gestoría Livendia",
      finalCtaSubtitle:
        "{{price}} IVA incl.: reserva, arras, comunidad, nota simple y coordinación con notaría.",
      faqTitle: "Vender piso sin comisiones en Granada — preguntas frecuentes",
      faqSubtitle: "Albaicín, Zaidín, UGR, trámites entre particulares y ahorro frente a agencias.",
      waPrefill:
        "Hola, vendo mi piso en Granada entre particulares (ya tengo comprador) y quiero gestoría Livendia sin comisiones de agencia.",
      jsonLdServiceName: "Vender piso sin comisiones en Granada con gestoría Livendia",
    },
  },
  zaragoza: {
    keywords: [
      "vender piso sin comisiones zaragoza",
      "venta entre particulares zaragoza",
      "vender piso sin agencia zaragoza",
      "gestoría venta particular zaragoza",
    ],
    metaTitle: "Vender piso sin comisiones Zaragoza — 890 € IVA incl.",
    metaDescription:
      "Vende tu piso entre particulares en Zaragoza: gestoría 890 € IVA incl. Reserva, arras, trámites y notaría. Actur, Delicias, Centro — sin comisión de agencia.",
    tramitesAreaNote:
      "En Zaragoza capital (Actur, Delicias, Centro Histórico, Valdespartera, Las Fuentes) y área metropolitana, el gestor revisa comunidad en PAU recientes, nota simple y coherencia entre reserva y arras.",
    benefitsAreaNote:
      "Checklist adaptado a promociones nuevas y edificios del centro: derramas, cargas y certificados antes de la señal.",
    faq: [
      {
        question: "¿Necesito agencia para vender en Actur o Delicias?",
        answer:
          "No es obligatorio. Si ya tienes comprador, Livendia cubre la parte legal con gestor dedicado por 890 € IVA incl.",
      },
      {
        question: "¿Qué revisáis en ventas a varios herederos?",
        answer:
          "Titularidad registral, aceptación de herencia inscrita y firma coordinada de todos los cotitulares antes de vincular arras definitivas.",
      },
      {
        question: "¿Cuánto ahorro respecto a una inmobiliaria en Zaragoza?",
        answer:
          "En un piso de 190.000 €, el 3 % son 5.700 € + IVA (~6.897 €). Livendia cuesta 890 € fijos.",
      },
      {
        question: "¿Livendia busca comprador en Zaragoza?",
        answer:
          "No. Somos gestoría para propietarios que venden sin agencia y ya tienen comprador particular.",
      },
    ],
    copy: {
      heroBadge: "Venta sin comisiones · Zaragoza",
      heroH1: "Vender piso en Zaragoza sin comisiones — gestoría para particulares",
      heroLead:
        "¿Comprador en Actur, Delicias o Centro Histórico? Por {{price}} (IVA incl.) un gestor legal de Livendia gestiona la venta entre particulares — reserva, arras y documentación hasta notaría.",
      heroBullets: [
        "Tarifa plana vs 3 % sobre el precio de venta",
        "Ideal si publicaste en Idealista tú mismo",
        "Gestor dedicado por WhatsApp",
      ],
      savingsIntro:
        "En Zaragoza, con precios medios en torno a 190.000 €, una comisión del 3 % supera 5.700 € + IVA. Livendia cubre el tramo legal por 890 €.",
      finalCtaTitle: "Cierra tu venta en Zaragoza entre particulares",
      finalCtaSubtitle:
        "{{price}} IVA incl.: reserva, arras, trámites y notaría con gestor legal dedicado.",
      faqTitle: "Vender piso sin comisiones en Zaragoza — preguntas frecuentes",
      faqSubtitle: "Actur, Delicias, trámites entre particulares y ahorro frente a inmobiliarias.",
      waPrefill:
        "Hola, vendo en Zaragoza entre particulares con comprador confirmado. Me interesa Livendia sin comisiones de agencia.",
      jsonLdServiceName: "Vender piso sin comisiones en Zaragoza con gestoría Livendia",
    },
  },
  "barcelona-les-corts": {
    copy: {
      heroBadge: "Particular a particular · Les Corts",
      heroH1: "¿Vendes tu vivienda sin agencia y de particular en Les Corts?",
      heroLead:
        "Si ya tienes comprador en Pedralbes, Zona Universitària o Les Corts, Livendia es gestoría por {{price}} (IVA incl.): venta de particular a particular con arras CCCat, documentación y notaría — sin comisión sobre el precio.",
      heroBullets: [
        "Vender sin agencia cuando tú captas al comprador",
        "Tarifa plana frente al 3–5 % en fincas de Les Corts",
        "Gestor legal dedicado hasta la escritura",
      ],
      savingsIntro:
        "En Les Corts, con precios medios altos, una comisión del 3 % puede superar 14.000 € + IVA. Vender de particular a particular con Livendia fija la gestoría en 890 €.",
      finalCtaTitle: "Vende en Les Corts entre particulares — con gestoría Livendia",
      faqTitle: "Vender sin agencia y de particular en Les Corts — FAQ",
      waPrefill:
        "Hola, vendo mi vivienda en Les Corts sin agencia (particular a particular, ya tengo comprador). Me interesa Livendia.",
      jsonLdServiceName: "Vender vivienda sin agencia y de particular en Les Corts",
      imageAlt: "Vender piso de particular a particular en Les Corts con Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Les Corts · venta entre particulares",
      title: "Vender de particular a particular en Les Corts sin pagar comisión de agencia",
      paragraphs: [
        "Muchos propietarios en Pedralbes y Zona Universitària encuentran comprador por Idealista, recomendación o familia y prefieren vender sin agencia. Livendia no sustituye a una inmobiliaria de marketing: somos gestoría inmobiliaria digital con tarifa plana.",
        "Redactamos reserva y arras conforme al Código Civil de Catalunya, persiguimos cèdula d'habitabilitat, certificado de comunidad e ITE si procede, y coordinamos la firma en notaría mientras tú mantienes la venta entre particulares.",
      ],
    },
  },
  "hospitalet-de-llobregat": {
    copy: {
      heroBadge: "Sin comisiones · L'Hospitalet",
      heroH1: "¿Vendes tu vivienda sin comisiones en L'Hospitalet?",
      heroLead:
        "¿Comprador en Collblanc, Bellvitge o centre de L'Hospitalet? Por {{price}} (IVA incl.) gestionamos venta entre particulares: arras, trámites y notaría — vender piso sin comisiones de agencia sobre el precio de venta.",
      heroBullets: [
        "Vender piso sin comisiones con comprador ya confirmado",
        "Gestoría fija en el Baix Llobregat",
        "Documentación al día para compradores de Barcelona",
      ],
      savingsIntro:
        "En L'Hospitalet, el 3 % sobre 240.000 € son 7.200 € + IVA solo por intermediar. Si vendes sin comisiones entre particulares, Livendia cubre el tramo legal por tarifa plana.",
      finalCtaTitle: "Cierra tu venta en L'Hospitalet sin comisiones de agencia",
      faqTitle: "Vender vivienda sin comisiones en L'Hospitalet — preguntas frecuentes",
      waPrefill:
        "Hola, vendo en L'Hospitalet sin comisiones (entre particulares, ya tengo comprador). Quiero gestoría Livendia.",
      jsonLdServiceName: "Vender vivienda sin comisiones en L'Hospitalet con gestoría Livendia",
      imageAlt: "Vender piso sin comisiones en L'Hospitalet entre particulares",
    },
    barcelonaZoneIntro: {
      eyebrow: "L'Hospitalet · sin comisiones",
      title: "Vender piso sin comisiones en L'Hospitalet con gestor legal",
      paragraphs: [
        "En L'Hospitalet es habitual publicar el piso tú mismo y cerrar con un comprador particular. Livendia te acompaña en la parte jurídica por 890 € IVA incl., sin porcentaje sobre el precio.",
        "Gestionamos arras, deuda cero de comunidad en bloques densos y coordinación con notaría — la misma rigurosidad que esperarías de una agencia, pero sin comisión del 3–5 %.",
      ],
    },
  },
  "barcelona-horta-guinardo": {
    copy: {
      heroBadge: "Entre particulares · Horta-Guinardó",
      heroH1: "¿Vendes tu piso entre particulares en Horta-Guinardó?",
      heroLead:
        "Guinardó, El Carmel, Horta centre o La Teixonera: si ya tienes comprador, Livendia gestiona venta entre particulares por {{price}} (IVA incl.) — arras, ITE, cèdula y notaría sin comisión de inmobiliaria.",
      heroBullets: [
        "Vender piso entre particulares en fincas en ladera",
        "Checklist CCCat antes de firmar arras",
        "Gestor online hasta la escritura",
      ],
      savingsIntro:
        "En Horta-Guinardó, una comisión del 3 % sobre 310.000 € supera 9.000 € + IVA. Vender entre particulares con gestoría Livendia fija el coste legal en 890 €.",
      finalCtaTitle: "Vende en Horta-Guinardó entre particulares con seguridad jurídica",
      faqTitle: "Vender piso entre particulares en Horta-Guinardó — FAQ",
      waPrefill:
        "Hola, vendo mi piso en Horta-Guinardó entre particulares (ya tengo comprador). Me interesa el servicio Livendia.",
      jsonLdServiceName: "Vender piso entre particulares en Horta-Guinardó",
      imageAlt: "Venta entre particulares Horta-Guinardó con gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Horta-Guinardó · Guinardó y El Carmel",
      title: "Venta entre particulares en Horta-Guinardó con trámites bajo control",
      paragraphs: [
        "El distrito mezcla edificios con ITE pendiente y compradores exigentes. Si vendes tu piso entre particulares, un gestor Livendia ordena documentación y plazos antes de vincular arras definitivas.",
        "No buscamos comprador ni publicamos anuncios: blindamos la venta de particular a particular desde la reserva hasta la escritura.",
      ],
    },
  },
  "barcelona-sant-marti": {
    copy: {
      heroBadge: "Particular a particular · Sant Martí",
      heroH1: "¿Vendes piso de particular a particular en Sant Martí?",
      heroLead:
        "Poblenou, El Clot, Diagonal Mar o La Verneda: venta de particular a particular con Livendia por {{price}} (IVA incl.) — reserva, arras CCCat, comunidad multi-bloque y notaría sin pagar comisión de agencia.",
      heroBullets: [
        "Vender piso de particular a particular en el 22@ y Poblenou",
        "Tarifa plana vs miles de euros de inmobiliaria",
        "Gestor legal fijo por WhatsApp",
      ],
      savingsIntro:
        "En Sant Martí, el 3 % sobre 390.000 € son 11.700 € + IVA. Si ya negociaste con un comprador particular, Livendia cubre la gestoría por 890 € IVA incl.",
      finalCtaTitle: "Cierra en Sant Martí de particular a particular",
      faqTitle: "Vender piso de particular a particular en Sant Martí — FAQ",
      waPrefill:
        "Hola, vendo en Sant Martí de particular a particular (comprador confirmado). Quiero gestoría Livendia.",
      jsonLdServiceName: "Vender piso de particular a particular en Sant Martí",
      imageAlt: "Venta de particular a particular Sant Martí Poblenou",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Martí · Poblenou y El Clot",
      title: "Vender de particular a particular en Sant Martí con gestoría Livendia",
      paragraphs: [
        "Sant Martí concentra operaciones rápidas y compradores de Barcelona capital. Livendia acompaña la venta de particular a particular con contratos a medida y seguimiento documental post-arras.",
        "Ideal si publicaste en Idealista o cerraste con un conocido: nosotros no cobramos comisión sobre el precio, solo la tarifa plana de gestoría.",
      ],
    },
  },
  "barcelona-sant-andreu": {
    copy: {
      heroBadge: "Sin comisiones · Sant Andreu",
      heroH1: "¿Vendes sin comisiones de agencia en Sant Andreu?",
      heroLead:
        "La Sagrera, Bon Pastor o Sant Andreu de Palomar: venta entre particulares con gestoría Livendia por {{price}} (IVA incl.) — arras, trámites y notaría sin el 3–5 % de una inmobiliaria.",
      heroBullets: [
        "Vender sin comisiones cuando ya tienes comprador",
        "Cláusulas CCCat y hipoteca del comprador (621-49)",
        "Mismo gestor desde arras hasta escritura",
      ],
      savingsIntro:
        "En Sant Andreu, una comisión del 3 % sobre 280.000 € ronda 8.400 € + IVA. Vender sin comisiones de agencia con Livendia deja la gestoría en 890 € fijos.",
      finalCtaTitle: "Vende en Sant Andreu sin comisiones — con gestor dedicado",
      faqTitle: "Vender sin comisiones de agencia en Sant Andreu — FAQ",
      waPrefill:
        "Hola, vendo en Sant Andreu sin comisiones de agencia (entre particulares). Me interesa Livendia.",
      jsonLdServiceName: "Vender sin comisiones de agencia en Sant Andreu",
      imageAlt: "Vender piso sin comisiones Sant Andreu La Sagrera",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Andreu · La Sagrera y Palomar",
      title: "Vender sin comisiones de agencia en Sant Andreu entre particulares",
      paragraphs: [
        "Muchos vecinos de Sant Andreu prefieren vender sin comisiones cuando el comprador llega por recomendación o portal. Livendia ordena reserva, arras y certificados hasta la notaría.",
        "Somos gestoría, no agencia: no publicamos tu piso ni cobramos porcentaje sobre el precio de venta.",
      ],
    },
  },
};
