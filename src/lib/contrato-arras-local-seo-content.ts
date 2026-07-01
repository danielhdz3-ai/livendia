import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";

export type ArrasFinancingEducation = {
  heading: string;
  intro: string;
  withoutClauseTitle: string;
  withoutClauseBody: string;
  withClauseTitle: string;
  withClauseBody: string;
  gestorHeading: string;
  gestorIntro: string;
  steps: readonly { title: string; body: string }[];
  disclaimer: string;
};

export type ArrasLocalSeoContent = {
  heroSubtitle: string;
  gestorPitch: string;
  fairArrasHeading: string;
  fairArrasIntro: string;
  legalSpanish: string;
  legalCatalan: string;
  legalCatalanFinancing: string;
  cccatArrasArticles: string;
  cccatFinancingArticle: string;
  financingEducation: ArrasFinancingEducation;
  localMarketIntro: string;
  zonesHeading: string;
  zonesParagraph: string;
  zoneGroups: readonly { district: string; areas: string }[];
  arrasTypesIntro: string;
  moneyLossRisks: readonly { title: string; body: string }[];
  faqLocal: readonly { question: string; answer: string }[];
};

/** Bloque educativo compartido sobre art. 621-49 CCCat (financiación hipotecaria). */
export function buildArrasFinancingEducation(city: string): ArrasFinancingEducation {
  return {
    heading: `¿Compras con hipoteca en ${city}? El art. 621-49 CCCat puede salvarte la señal`,
    intro:
      "Muchos compradores particulares no saben que, en Catalunya, el Codi civil de Catalunya distingue el régimen de las arras (621-4 a 621-9) del desistimiento por falta de financiación (621-49). Si firmas arras sin esta cláusula y el banco te deniega la hipoteca, puedes perder la señal. Con la cláusula bien redactada, la ley catalana te permite desistir en los términos pactados y recuperar lo entregado.",
    withoutClauseTitle: "Sin cláusula art. 621-49 en el contrato",
    withoutClauseBody:
      "Firmas arras penitenciales (621-4 CCCat) y solicitas hipoteca después. Si el banco deniega el préstamo, el vendedor puede exigirte cumplir o perder la señal entregada — salvo que otra cláusula te proteja, que rara vez está en plantillas genéricas.",
    withClauseTitle: "Con cláusula art. 621-49 redactada por un gestor",
    withClauseBody:
      "El contrato recoge plazo, importe de financiación y documentación bancaria exigible. Si no obtienes la hipoteca en esas condiciones, puedes desistir conforme al 621-49 CCCat y recuperar las arras, sin quedar atrapado en una penalidad del 621-4 por un hecho ajeno a tu voluntad.",
    gestorHeading: "Cómo te ayuda el gestor especializado Livendia",
    gestorIntro:
      "Un gestor se asigna a tu expediente en Livendia. No es un PDF automático: te explica el trámite, redacta o corrige la cláusula 621-49 y la integra con el resto del contrato de arras antes de que transfieras la señal.",
    steps: [
      {
        title: "Diagnóstico de tu operación",
        body: "En la llamada previa analizamos si compras con hipoteca, el calendario del banco y si conviene penitenciales o confirmatorias junto al 621-49.",
      },
      {
        title: "Redacción de la cláusula 621-49",
        body: "Incluimos plazo para obtener financiación, condiciones del préstamo (importe, entidad, resolución escrita) y efecto del desistimiento: recuperación de la señal si no hay hipoteca.",
      },
      {
        title: "Coherencia con las arras (621-4 a 621-9)",
        body: "Evitamos contradicciones: la cláusula de financiación no puede quedar anulada por una penalidad genérica mal ubicada. Todo el contrato se lee en conjunto.",
      },
      {
        title: "Firma informada",
        body: "Resolvemos dudas con comprador y vendedor en lenguaje claro. Llegas a la firma sabiendo qué pasa con tu dinero si el banco dice no.",
      },
    ],
    disclaimer:
      "Información general sobre el CCCat, no asesoramiento jurídico personalizado. Cada operación tiene matices; el gestor Livendia adapta el contrato a tu caso concreto.",
  };
}

export const ARRAS_LOCAL_SEO_CONTENT: Record<string, Omit<ArrasLocalSeoContent, "financingEducation">> = {
  "hospitalet-de-llobregat": {
    heroSubtitle:
      `¿Buscas un gestor que te tramite el contrato de arras en L'Hospitalet entre particulares? Por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. tendrás un gestor asignado a tu caso, especialista en Código Civil español y Código Civil de Catalunya — con arras justas y sin perder la señal por cláusulas desequilibradas.`,
    gestorPitch:
      "No firmes arras copiadas de internet. En Livendia un gestor inmobiliario-jurídico se asigna a tu expediente: te explica la diferencia entre arras (621-4) y cláusula de financiación (621-49), redacta el contrato y te acompaña en el trámite antes de ingresar la señal.",
    fairArrasHeading: "Gestión de arras justa en L'Hospitalet",
    fairArrasIntro:
      "Las arras no son un trámite menor: fijan qué pasa con tu dinero si alguien se echa atrás. En Livendia contrastamos penalidades, plazos hasta escritura y coherencia registral para que comprador y vendedor particulares firmen sin sorpresas entre Collblanc, Bellvitge o el centre.",
    legalSpanish:
      "El Código Civil español (art. 1454 y ss.) regula las arras penitenciales a nivel estatal. En operaciones inmobiliarias en Catalunya, además aplican las reglas del Codi civil de Catalunya sobre compraventa y señal.",
    legalCatalan:
      "En L'Hospitalet rige el Codi civil de Catalunya. Los arts. 621-4 a 621-9 definen arras penitenciarias y confirmatòries, sus efectos si una parte incumple y cómo se vincula la señal al contrato definitivo.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat regula el desistimiento del comprador cuando no obtiene la financiación bancaria en los términos pactados en el contrato. Si compras con hipoteca, el gestor asignado redacta o revisa esta cláusula para que no pierdas la señal si el banco deniega el préstamo.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
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
        title: "Financiación mal amarrada",
        body: "Sin cláusula conforme al art. 621-49 CCCat, el comprador puede perder la señal aunque el banco deniegue la hipoteca — el gestor la redacta con plazos y condiciones exigibles.",
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
        question: "¿Qué regula el artículo 621-49 del CCCat?",
        answer:
          "El desistimiento del comprador cuando no obtiene la financiación bancaria en el plazo y condiciones pactadas en el contrato. Si incluimos esta cláusula, no quedas expuesto solo al régimen de pérdida de señal del 621-4 cuando el banco deniega la hipoteca. El gestor Livendia te lo explica y lo redacta.",
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
      "Comprador o vendedor particular: tu gestor Livendia te enseña la diferencia entre arras (621-4) y cláusula de hipoteca (621-49), redacta el contrato completo y te acompaña en el trámite — sin plantillas que te hagan perder la señal.",
    fairArrasHeading: "Arras equilibradas en Cornellà",
    fairArrasIntro:
      "En Sant Ildefons, Can Mercader o el centre de Cornellà las operaciones van entre particulares con frecuencia. Una arras mal redactada puede costarte la señal entera — nos encargamos de que la gestión sea justa y transparente.",
    legalSpanish:
      "Complementamos la base del Código Civil español en materia de obligaciones y compraventa con el marco autonómico aplicable en Catalunya.",
    legalCatalan:
      "El Codi civil de Catalunya (Llibre VI, arts. 621-4 a 621-9) regula arras penitenciarias y confirmatòries. En Cornellà aplicamos este régimen para calibrar penalidades y efectos del incumplimiento.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat ampara al comprador que no consigue la financiación bancaria pactada: puede desistir del contrato sin perder la señal si se cumplen los requisitos legales. Lo redactamos cuando la operación depende de hipoteca.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
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
        title: "Financiación sin art. 621-49",
        body: "Cláusula de hipoteca genérica que no ampara al comprador si el banco deniega el préstamo — el gestor adapta el desistimiento al CCCat.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras para compradores particulares?",
        answer:
          "Sí. Muchos compradores contratan Livendia porque el vendedor trae un borrador desequilibrado. El gestor asignado defiende un texto justo antes de transferir la señal.",
      },
      {
        question: "¿Aplicáis el artículo 621-49 si compro con hipoteca?",
        answer:
          "Sí. El art. 621-49 CCCat regula el desistimiento del comprador cuando no obtiene la financiación bancaria en los términos del contrato. El gestor asignado lo incluye o revisa en Cornellà.",
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
      "En Livendia un gestor se asigna a tu compraventa: te explica el 621-49 si compras con hipoteca, redacta arras equilibradas (621-4 a 621-9) y coordina todo el trámite hasta la firma.",
    fairArrasHeading: "Gestión de arras justa en el Vallès",
    fairArrasIntro:
      "Sabadell mueve operaciones entre particulares en Creu Alta, Eixample o Can Feu. Las arras mal calibradas son la principal causa de pérdida de señal antes de notaría — las redactamos con equilibrio y base en CCCat.",
    legalSpanish:
      "El Código Civil español aporta el marco general de obligaciones; en compraventa de vivienda en Catalunya prevalece la disciplina del Codi civil de Catalunya.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat: régimen de arras penitenciarias (pérdida o restitución doble de la señal) y confirmatòries. Tu gestor traduce esto a cláusulas concretas en castellano claro.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat permite al comprador desistir si no obtiene la financiación bancaria en plazo y condiciones pactadas. En Sabadell, donde muchas operaciones van con hipoteca, esta cláusula evita perder la señal por denegación del banco.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
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
        question: "¿Qué es el artículo 621-49 del CCCat?",
        answer:
          "Regula el desistimiento del comprador cuando no consigue la financiación bancaria prevista. Si compras con hipoteca, el gestor redacta esta cláusula conforme a la ley catalana.",
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
      "Tu gestor Livendia en Terrassa te explica en la llamada qué es el art. 621-49, si lo necesitas con hipoteca, y redacta el contrato de arras completo antes de que entregues la señal.",
    fairArrasHeading: "Arras transparentes en Terrassa",
    fairArrasIntro:
      "En Terrassa, como en el resto del Vallès, firmar arras sin gestor especializado es apostar tu señal a un Word de internet. Nos encargamos de una gestión justa: plazos, penalidades y objeto del inmueble coherentes.",
    legalSpanish:
      "Aplicamos el Código Civil español en lo que corresponda y el régimen catalán de compraventa inmobiliaria para operaciones en Terrassa.",
    legalCatalan:
      "Los arts. 621-4 a 621-9 del Codi civil de Catalunya regulan las arras en Catalunya. Calibramos la señal para que las consecuencias del incumplimiento sean previsibles y proporcionadas.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat protege al comprador que no obtiene financiación bancaria: puede desistir del contrato de compraventa en las condiciones legales, sin perder indebidamente la señal. Es clave en operaciones con hipoteca en Terrassa.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
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
        title: "Señal sin cláusula 621-49",
        body: "Comprador que pierde la señal aunque el banco no preste — el gestor redacta el desistimiento por falta de financiación conforme al CCCat.",
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
        question: "¿El art. 621-49 protege si no me dan la hipoteca?",
        answer:
          "Sí, en los términos del Codi civil de Catalunya: regula el desistimiento del comprador cuando no obtiene la financiación bancaria pactada. Tu gestor asignado adapta plazos y condiciones al contrato.",
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

  badalona: {
    heroSubtitle:
      `¿Buscas gestor para tramitar arras en Badalona entre particulares? ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl., gestor asignado experto en CC español y Codi civil de Catalunya. Arras justas (621-4 a 621-9) y cláusula 621-49 si compras con hipoteca.`,
    gestorPitch:
      "En Livendia un gestor se asigna a tu expediente en Badalona: te explica la diferencia entre arras (621-4) y cláusula de financiación (621-49), redacta el contrato y te acompaña en el trámite antes de ingresar la señal.",
    fairArrasHeading: "Arras equilibradas en Badalona",
    fairArrasIntro:
      "Badalona mueve operaciones rápidas entre particulares en Centre, Montigalà o La Salut. Una arras mal calibrada puede costarte toda la señal — la redactamos con equilibrio y base en CCCat.",
    legalSpanish:
      "El Código Civil español regula las obligaciones y la señal a nivel estatal; en compraventa de vivienda en Catalunya prevalece el marco del Codi civil de Catalunya.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat: arras penitenciarias (pérdida o restitución doble de la señal) y confirmatòries. Tu gestor traduce esto a cláusulas concretas para operaciones en Badalona.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat regula el desistimiento del comprador cuando no obtiene la financiación bancaria pactada. En Badalona, donde muchas compraventas van con hipoteca, esta cláusula evita perder la señal si el banco deniega el préstamo.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "Badalona combina pisos de segunda mano, operaciones con reforma pendiente y compradores que llegan desde Barcelona capital. Los borradores circulan sin revisión jurídica — hasta que alguien pierde la señal por no incluir el 621-49.",
    zonesHeading: "Contrato de arras por zonas de Badalona",
    zonesParagraph: "Tramitamos arras para particulares en:",
    zoneGroups: [
      { district: "Centre — Dalt de la Vila", areas: "Centre, Dalt de la Vila, Rambla" },
      { district: "Montigalà — Bufalà", areas: "Montigalà, Bufalà, Sant Pere de Sant Pau" },
      { district: "La Salut — Lloreda", areas: "La Salut, Lloreda, Sant Roc" },
      { district: "Gorg — Progrés", areas: "Gorg, Progrés, Sant Joan de Déu" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias: el gestor asignado explica la diferencia práctica (621-4 CCCat) y redacta lo pactado, incluyendo cláusula 621-49 si la operación depende de hipoteca.",
    moneyLossRisks: [
      {
        title: "Plantilla barcelonesa sin adaptar",
        body: "Borradores pensados para Eixample aplicados a Badalona — penalidades o plazos que no encajan con tu operación real.",
      },
      {
        title: "Financiación sin art. 621-49",
        body: "Comprador que pierde la señal aunque el banco no preste — el gestor redacta el desistimiento conforme al CCCat.",
      },
      {
        title: "Cargas de comunidad ocultas",
        body: "Deudas o derramas no reflejadas antes de arras — el gestor exige coherencia mínima documental.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras para compradores particulares en Badalona?",
        answer:
          "Sí. Muchos compradores contratan Livendia porque el vendedor trae un borrador desequilibrado. El gestor asignado defiende un texto justo antes de transferir la señal.",
      },
      {
        question: "¿Qué regula el artículo 621-49 del CCCat?",
        answer:
          "El desistimiento del comprador cuando no obtiene la financiación bancaria en plazo y condiciones pactadas. Si incluimos esta cláusula, no quedas expuesto solo al régimen de pérdida de señal del 621-4 cuando el banco deniega la hipoteca. El gestor Livendia te lo explica y lo redacta.",
      },
      {
        question: "¿Sirve si compro o vendo en Montigalà o La Salut?",
        answer: "Sí. Adaptamos el contrato a la dirección real del inmueble en Badalona.",
      },
      {
        question: "¿Cuánto cuesta tramitar las arras?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incluido por contrato, con gestor asignado y llamada previa incluidas.`,
      },
    ],
  },

  "sant-cugat-del-valles": {
    heroSubtitle:
      `Tramita tu contrato de arras en Sant Cugat del Vallès con gestor asignado: ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Especialistas en CC español y CCCat (621-4 a 621-9). Cláusula 621-49 si compras con hipoteca — sin perder la señal.`,
    gestorPitch:
      "Tu gestor Livendia en Sant Cugat te explica en la llamada qué es el art. 621-49, si lo necesitas con hipoteca, y redacta el contrato de arras completo antes de que entregues la señal.",
    fairArrasHeading: "Arras transparentes en Sant Cugat del Vallès",
    fairArrasIntro:
      "En Sant Cugat, como en el resto del Vallès Occidental, firmar arras sin gestor especializado es apostar tu señal a un Word de internet. Nos encargamos de plazos, penalidades y cláusula de financiación coherentes con CCCat.",
    legalSpanish:
      "Aplicamos el Código Civil español en lo que corresponda y el régimen catalán de compraventa inmobiliaria para operaciones en Sant Cugat del Vallès.",
    legalCatalan:
      "Los arts. 621-4 a 621-9 del Codi civil de Catalunya regulan las arras en Catalunya. Calibramos la señal para que las consecuencias del incumplimiento sean previsibles y proporcionadas.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat protege al comprador que no obtiene financiación bancaria: puede desistir del contrato en las condiciones legales, sin perder indebidamente la señal. Es clave en operaciones con hipoteca en Sant Cugat.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "Sant Cugat combina pisos de alta demanda en el centre, chalets en Mira-sol o Valldoreix y operaciones familiares entre particulares. El error más caro: arras penitenciales mal explicadas o sin cláusula 621-49 cuando hay hipoteca.",
    zonesHeading: "Contrato de arras en barrios de Sant Cugat del Vallès",
    zonesParagraph: "Gestor asignado para operaciones en:",
    zoneGroups: [
      { district: "Centre — Plaça Mercat", areas: "Centre històric, Plaça Mercat, Rambla" },
      { district: "Mira-sol — Volpelleres", areas: "Mira-sol, Volpelleres, estación FGC" },
      { district: "Valldoreix", areas: "Valldoreix, Les Planes, entorno Collserola" },
      { district: "Parc Central — Can Matas", areas: "Parc Central, Can Matas, Sant Cugat nord" },
    ],
    arrasTypesIntro:
      "Explicamos en la llamada cómo afecta el 621-4 CCCat a tu señal si eliges arras penitenciales, o qué implica firmar confirmatorias, y si conviene incluir el 621-49 por hipoteca.",
    moneyLossRisks: [
      {
        title: "Señal sin cláusula 621-49",
        body: "Comprador que pierde la señal aunque el banco no preste — el gestor redacta el desistimiento por falta de financiación conforme al CCCat.",
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
        question: "¿Evitáis perder dinero en las arras en Sant Cugat?",
        answer:
          "Revisamos penalidades, plazos y coherencia registral para que la señal esté protegida según CC y CCCat. No garantizamos resultado judicial, sí gestión profesional y justa.",
      },
      {
        question: "¿El art. 621-49 protege si no me dan la hipoteca?",
        answer:
          "Sí, en los términos del Codi civil de Catalunya: regula el desistimiento del comprador cuando no obtiene la financiación bancaria pactada. Tu gestor asignado adapta plazos y condiciones al contrato.",
      },
      {
        question: "¿Comprador o vendedor?",
        answer: "Ambos. Cualquier particular puede contratar; el gestor se asigna a tu expediente.",
      },
      {
        question: "¿Precio cerrado?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. con gestor asignado.`,
      },
    ],
  },
};

export function getArrasLocalSeoContent(slug: string, city?: string): ArrasLocalSeoContent | undefined {
  const base = ARRAS_LOCAL_SEO_CONTENT[slug];
  if (!base) return undefined;
  return {
    ...base,
    financingEducation: buildArrasFinancingEducation(city ?? slug),
  };
}
