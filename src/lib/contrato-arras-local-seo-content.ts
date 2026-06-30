import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";

export type ArrasLocalSeoContent = {
  heroSubtitle: string;
  gestorPitch: string;
  fairArrasHeading: string;
  fairArrasIntro: string;
  legalSpanish: string;
  legalCatalan: string;
  cccatArticles: string;
  localMarketIntro: string;
  zonesHeading: string;
  zonesParagraph: string;
  zoneGroups: readonly { district: string; areas: string }[];
  arrasTypesIntro: string;
  moneyLossRisks: readonly { title: string; body: string }[];
  faqLocal: readonly { question: string; answer: string }[];
};

export const ARRAS_LOCAL_SEO_CONTENT: Record<string, ArrasLocalSeoContent> = {
  "hospitalet-de-llobregat": {
    heroSubtitle:
      `¿Buscas un gestor que te tramite el contrato de arras en L'Hospitalet entre particulares? Por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. tendrás un gestor asignado a tu caso, especialista en Código Civil español y Código Civil de Catalunya — con arras justas y sin perder la señal por cláusulas desequilibradas.`,
    gestorPitch:
      "No firmes arras copiadas de internet. En Livendia un gestor inmobiliario-jurídico se asigna a tu expediente: revisa penitenciales o confirmatorias, te explica consecuencias en lenguaje claro y redacta un contrato equilibrado antes de ingresar un euro de señal.",
    fairArrasHeading: "Gestión de arras justa en L'Hospitalet",
    fairArrasIntro:
      "Las arras no son un trámite menor: fijan qué pasa con tu dinero si alguien se echa atrás. En Livendia contrastamos penalidades, plazos hasta escritura y coherencia registral para que comprador y vendedor particulares firmen sin sorpresas entre Collblanc, Bellvitge o el centre.",
    legalSpanish:
      "El Código Civil español (art. 1454 y ss.) regula las arras penitenciales a nivel estatal. En operaciones inmobiliarias en Catalunya, además aplican las reglas del Codi civil de Catalunya sobre compraventa y señal.",
    legalCatalan:
      "En L'Hospitalet rige el Codi civil de Catalunya. Los arts. 621-4 a 621-9 definen arras penitenciarias y confirmatòries, sus efectos si una parte incumple y cómo se vincula la señal al contrato definitivo.",
    cccatArticles: "621-4 a 621-9",
    localMarketIntro:
      "L'Hospitalet concentra compraventas rápidas entre particulares: pisos en Bellvitge, Collblanc, La Florida o Sant Josep. Muchos borradores mezclan plantillas de agencia con cláusulas pensadas para Barcelona capital — y ahí empiezan las pérdidas de señal mal calibradas.",
    zonesHeading: "Contrato de arras en barrios de L'Hospitalet",
    zonesParagraph: "Tramitamos arras para particulares en todo el municipio:",
    zoneGroups: [
      { district: "Collblanc — La Torrassa", areas: "Collblanc, La Torrassa, zona metro" },
      { district: "Bellvitge", areas: "Bellvitge, hospital, entorno universitario" },
      { district: "Centre — Sant Josep", areas: "Centre, Sant Josep, Granvia" },
      { district: "La Florida — Pubilla Cases", areas: "La Florida, Pubilla Cases, Les Planes" },
    ],
    arrasTypesIntro:
      "Te orientamos entre arras penitenciales (señal con posibilidad de desistir perdiendo o ganando la cantidad pactada, según art. 621-4 CCCat) y confirmatorias (más vinculantes). El gestor asignado adapta el tipo a tu operación real.",
    moneyLossRisks: [
      {
        title: "Penalidad desproporcionada",
        body: "Plantillas que fijan el doble de la señal sin explicar el régimen del art. 621-4 CCCat — el gestor equilibra consecuencias para ambas partes.",
      },
      {
        title: "Plazo imposible hasta escritura",
        body: "Financiación o licencias pendientes con calendario irreal: si falla el plazo, alguien pierde dinero injustamente.",
      },
      {
        title: "Objeto del inmueble ambiguo",
        body: "Superficie, anejos o parking no descritos igual que en registro — grieta entre arras y notaría.",
      },
    ],
    faqLocal: [
      {
        question: "¿Quién es mi gestor en Livendia?",
        answer:
          "Tras contratar online se te asigna un gestor especializado en compraventa entre particulares. Te llama, revisa tu borrador y redacta las arras con criterio CC + CCCat.",
      },
      {
        question: "¿Qué dice el artículo 621-4 del Código Civil catalán?",
        answer:
          "Regula las arras penitenciarias: si quien entregó la señal no formaliza la compraventa, la pierde; si quien la recibió incumple, devuelve el doble. El gestor calibra la cláusula para que sea justa y comprensible.",
      },
      {
        question: "¿Sirve si compro o vendo en Bellvitge o Collblanc?",
        answer: "Sí. Adaptamos el contrato a la dirección real del inmueble en L'Hospitalet de Llobregat.",
      },
      {
        question: "¿Cuánto cuesta tramitar las arras?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incluido por contrato (penitenciales o confirmatorias), con gestor asignado y llamada previa incluidas.`,
      },
    ],
  },

  "cornella-de-llobregat": {
    heroSubtitle:
      `Gestor que tramita tu contrato de arras en Cornellà de Llobregat: ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl., gestor asignado especialista en Código Civil español y catalán. Arras justas conforme al CCCat (arts. 621-4 a 621-9), sin perder la señal por cláusulas abusivas.`,
    gestorPitch:
      "Comprador o vendedor particular: tu gestor Livendia analiza el borrador, detecta cláusulas que te harían perder dinero y redacta arras equilibradas antes de la firma. Especialistas en compraventa en Catalunya, no plantillas genéricas.",
    fairArrasHeading: "Arras equilibradas en Cornellà",
    fairArrasIntro:
      "En Sant Ildefons, Can Mercader o el centre de Cornellà las operaciones van entre particulares con frecuencia. Una arras mal redactada puede costarte la señal entera — nos encargamos de que la gestión sea justa y transparente.",
    legalSpanish:
      "Complementamos la base del Código Civil español en materia de obligaciones y compraventa con el marco autonómico aplicable en Catalunya.",
    legalCatalan:
      "El Codi civil de Catalunya (Llibre VI, arts. 621-4 a 621-9) regula arras penitenciarias y confirmatòries. En Cornellà aplicamos este régimen para calibrar penalidades y efectos del incumplimiento.",
    cccatArticles: "621-4 a 621-9",
    localMarketIntro:
      "Cornellà combina pisos de segunda mano, operaciones con reforma pendiente y compradores que llegan desde Barcelona. Los borradores circulan entre particulares sin revisión jurídica — hasta que alguien pierde la señal.",
    zonesHeading: "Contrato de arras por zonas de Cornellà",
    zonesParagraph: "Atendemos particulares en:",
    zoneGroups: [
      { district: "Sant Ildefons", areas: "Sant Ildefons, metro L5, alta densidad residencial" },
      { district: "Centre — Almeda", areas: "Centre, Almeda, Can Pelà" },
      { district: "Can Mercader", areas: "Can Mercader, zona industrial residencial" },
      { district: "La Guàrdia", areas: "La Guàrdia, polígonos y vivienda mixta" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias: el gestor asignado explica la diferencia práctica (incluido el art. 621-4 CCCat sobre pérdida o duplicación de la señal) y redacta lo pactado sin letra pequeña confusa.",
    moneyLossRisks: [
      {
        title: "Mezcla penitenciales / confirmatorias",
        body: "Borradores que dicen una cosa y aplican otra — riesgo directo de perder la señal.",
      },
      {
        title: "Cargas ocultas",
        body: "Deudas de comunidad o hipoteca no reflejadas antes de arras — el gestor exige coherencia mínima documental.",
      },
      {
        title: "Financiación mal amarrada",
        body: "Cláusula de hipoteca genérica que no protege al comprador si el banco deniega el préstamo.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras para compradores particulares?",
        answer:
          "Sí. Muchos compradores contratan Livendia porque el vendedor trae un borrador desequilibrado. El gestor asignado defiende un texto justo antes de transferir la señal.",
      },
      {
        question: "¿Aplicáis el Código Civil catalán?",
        answer:
          "Sí. En Cornellà aplicamos el CCCat (arts. 621-4 a 621-9) junto con el marco del Código Civil español, según corresponda a la operación.",
      },
      {
        question: "¿Evitáis cláusulas que hagan perder todo el depósito?",
        answer:
          "Ese es nuestro foco: calibrar penalidades y plazos para que las arras sean justas y comprensibles para ambas partes.",
      },
      {
        question: "¿Plazo de entrega?",
        answer: "48-72 h laborables tras la llamada con tu gestor asignado.",
      },
    ],
  },

  sabadell: {
    heroSubtitle:
      `¿Necesitas un gestor que tramite tu contrato de arras en Sabadell? ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl., gestor asignado experto en CC español y Codi civil de Catalunya. Gestión justa de la señal (arts. 621-4 a 621-9 CCCat) para particulares en Creu Alta, Gràcia o Can Feu.`,
    gestorPitch:
      "En Livendia no compartes gestor anónimo: uno se asigna a tu compraventa, revisa arras penitenciales o confirmatorias y te guía hasta una firma informada — sin perder dinero por cláusulas copiadas de otra operación.",
    fairArrasHeading: "Gestión de arras justa en el Vallès",
    fairArrasIntro:
      "Sabadell mueve operaciones entre particulares en Creu Alta, Eixample o Can Feu. Las arras mal calibradas son la principal causa de pérdida de señal antes de notaría — las redactamos con equilibrio y base en CCCat.",
    legalSpanish:
      "El Código Civil español aporta el marco general de obligaciones; en compraventa de vivienda en Catalunya prevalece la disciplina del Codi civil de Catalunya.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat: régimen de arras penitenciarias (pérdida o restitución doble de la señal) y confirmatòries. Tu gestor traduce esto a cláusulas concretas en castellano claro.",
    cccatArticles: "621-4 a 621-9",
    localMarketIntro:
      "En Sabadell hay compraventas con herencia, pisos con varios propietarios y operaciones con hipoteca en curso. Plantillas madrileñas o barcelonesas sin adaptar son un riesgo directo para tu bolsillo.",
    zonesHeading: "Arras en barrios de Sabadell",
    zonesParagraph: "Landings y gestión para particulares en:",
    zoneGroups: [
      { district: "Centre — Eixample", areas: "Centre, Eixample, Plaça Major" },
      { district: "Creu Alta", areas: "Creu Alta, Concòrdia" },
      { district: "Gràcia — Can Feu", areas: "Gràcia, Can Feu, Can Rull" },
      { district: "La Concòrdia", areas: "La Concòrdia, Sant Oleguer" },
    ],
    arrasTypesIntro:
      "El gestor asignado te ayuda a elegir penitenciales (flexibilidad con coste de señal regulado por 621-4 CCCat) o confirmatorias (más vinculantes) según tu operación en Sabadell.",
    moneyLossRisks: [
      {
        title: "Herencia sin resolver en arras",
        body: "Vendedores múltiples o adjudicación pendiente — el gestor exige hitos documentados antes de comprometer toda la señal.",
      },
      {
        title: "Obra o licencia pendiente",
        body: "Promesas verbales de reforma sin plazo en el contrato — quien incumple pierde, pero a veces el inocente también.",
      },
      {
        title: "Doble penalidad encubierta",
        body: "Cláusulas acumuladas que superan lo razonable bajo CCCat — las depuramos.",
      },
    ],
    faqLocal: [
      {
        question: "¿Puedo contratar si aún no tengo borrador?",
        answer:
          "Sí. El gestor asignado redacta arras desde cero con los datos de la operación en Sabadell.",
      },
      {
        question: "¿Qué diferencia hay entre penitenciales y confirmatorias?",
        answer:
          "Te lo explica tu gestor en la llamada: penitenciales permiten desistir con régimen de señal (621-4 CCCat); confirmatorias vinculan más fuerte al contrato definitivo.",
      },
      {
        question: "¿Atendéis vendedores particulares?",
        answer: "Sí. Redactamos arras equilibradas para que el comprador firme con confianza y tú no asumas riesgos posteriores.",
      },
      {
        question: "¿Precio cerrado?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. con gestor asignado.`,
      },
    ],
  },

  terrassa: {
    heroSubtitle:
      `Tramita tu contrato de arras en Terrassa con gestor asignado: ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Especialistas en Código Civil español y Código Civil de Catalunya (arts. 621-4 a 621-9). Arras justas para particulares — sin perder la señal por penalidades abusivas.`,
    gestorPitch:
      "Tu gestor Livendia conoce compraventa entre particulares en Terrassa: Sant Pere, La Maurina, Ca n'Anglada… Revisa o redacta tus arras, alinea cláusulas con CCCat y te acompaña por teléfono hasta la firma.",
    fairArrasHeading: "Arras transparentes en Terrassa",
    fairArrasIntro:
      "En Terrassa, como en el resto del Vallès, firmar arras sin gestor especializado es apostar tu señal a un Word de internet. Nos encargamos de una gestión justa: plazos, penalidades y objeto del inmueble coherentes.",
    legalSpanish:
      "Aplicamos el Código Civil español en lo que corresponda y el régimen catalán de compraventa inmobiliaria para operaciones en Terrassa.",
    legalCatalan:
      "Los arts. 621-4 a 621-9 del Codi civil de Catalunya regulan las arras en Catalunya. Calibramos la señal para que las consecuencias del incumplimiento sean previsibles y proporcionadas.",
    cccatArticles: "621-4 a 621-9",
    localMarketIntro:
      "Terrassa combina pisos de barrio obrero rehabilitado, chalets en Les Fonts y operaciones familiares entre particulares. El error más caro: arras penitenciales mal explicadas que acaban en demanda.",
    zonesHeading: "Contrato de arras en barrios de Terrassa",
    zonesParagraph: "Gestor asignado para operaciones en:",
    zoneGroups: [
      { district: "Sant Pere", areas: "Sant Pere, centre històric" },
      { district: "La Maurina — Sant Pere Nord", areas: "La Maurina, Sant Pere Nord, Vallparadís" },
      { district: "Ca n'Anglada", areas: "Ca n'Anglada, Montserrat" },
      { district: "Can Jofresa — Ègara", areas: "Can Jofresa, Segle XX, Ègara" },
    ],
    arrasTypesIntro:
      "Explicamos en la llamada cómo afecta el 621-4 CCCat a tu señal si eliges arras penitenciales, o qué implica firmar confirmatorias en una operación en Terrassa.",
    moneyLossRisks: [
      {
        title: "Señal sin condición de hipoteca",
        body: "Comprador que pierde la señal aunque el banco no preste — cláusula salvadora mal redactada.",
      },
      {
        title: "Vendedor con carga no cancelable a tiempo",
        body: "Hipoteca o embargo no previsto en calendario de arras — el gestor exige hitos verificables.",
      },
      {
        title: "Arras confirmatorias mal identificadas",
        body: "Texto que dice penitenciales pero aplica efectos de confirmatorias — confusión costosa.",
      },
    ],
    faqLocal: [
      {
        question: "¿Evitáis perder dinero en las arras?",
        answer:
          "Revisamos penalidades, plazos y coherencia registral para que la señal esté protegida según CC y CCCat. No garantizamos resultado judicial, sí gestión profesional y justa.",
      },
      {
        question: "¿Gestor especialista en derecho catalán?",
        answer:
          "Sí. Trabajamos compraventa en Catalunya aplicando Codi civil de Catalunya (621-4 a 621-9) y Código Civil español.",
      },
      {
        question: "¿Comprador o vendedor?",
        answer: "Ambos. Cualquier particular puede contratar; el gestor se asigna a tu expediente.",
      },
      {
        question: "¿También revisáis borradores de agencia?",
        answer: "Sí. Si la agencia te pasa un borrador, lo analizamos y proponemos correcciones antes de firmar.",
      },
    ],
  },
};

export function getArrasLocalSeoContent(slug: string): ArrasLocalSeoContent | undefined {
  return ARRAS_LOCAL_SEO_CONTENT[slug];
}
