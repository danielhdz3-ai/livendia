import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";
import { buildGestorWorkflowContent } from "@/lib/gestor-workflow-content";

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
  /** Catalunya (CCCat) o resto de España (CC art. 1454). Por defecto catalunya. */
  legalRegion?: "catalunya" | "espana";
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
  const workflow = buildGestorWorkflowContent({
    city,
    service: "contrato-arras",
    legalRegion: "catalunya",
  });

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
    gestorHeading: workflow.heading,
    gestorIntro: workflow.intro,
    steps: workflow.steps,
    disclaimer: workflow.disclaimer ?? "",
  };
}

/** Bloque educativo para compradores con hipoteca fuera de Catalunya (CC art. 1454). */
export function buildSpanishArrasFinancingEducation(city: string): ArrasFinancingEducation {
  const workflow = buildGestorWorkflowContent({
    city,
    service: "contrato-arras",
    legalRegion: "espana",
  });

  return {
    heading: `¿Compras con hipoteca en ${city}? La cláusula de financiación puede salvarte la señal`,
    intro:
      "En el resto de España rigen las arras penitenciales del art. 1454 del Código Civil: si firmas sin protección y el banco deniega la hipoteca, puedes perder la señal entera. Livendia redacta una cláusula de financiación con plazo, importe y documentación bancaria exigible — no un PDF genérico de agencia.",
    withoutClauseTitle: "Sin cláusula de financiación en el contrato",
    withoutClauseBody:
      "Firmas arras penitenciales (art. 1454 CC) y solicitas hipoteca después. Si el banco dice no, el vendedor puede exigirte cumplir o perder lo entregado como señal — salvo que otra cláusula te ampare, y rara vez está en plantillas copiadas de internet.",
    withClauseTitle: "Con cláusula de financiación redactada por tu gestor Livendia",
    withClauseBody:
      "El contrato recoge plazo para obtener préstamo, importe mínimo, entidad y resolución escrita del banco. Si no hay hipoteca en esas condiciones, puedes desistir y recuperar la señal conforme a lo pactado — sin quedar atrapado en una penalidad del 1454 por un hecho ajeno.",
    gestorHeading: workflow.heading,
    gestorIntro: workflow.intro,
    steps: workflow.steps,
    disclaimer: workflow.disclaimer ?? "",
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

  sevilla: {
    legalRegion: "espana",
    heroSubtitle: `¿Compras o vendes entre particulares en Sevilla sin pagar miles a una agencia? Por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. un gestor Livendia asignado redacta o revisa tus arras online — con asesoramiento constante hasta la firma. Sin comisión del 3–5 % sobre el precio.`,
    gestorPitch:
      "Una inmobiliaria puede cobrarte 6.000–12.000 € solo en gestión de una venta de 200.000–400.000 €. Livendia no busca comprador ni vende tu piso: somos gestoría para particulares que ya tienen contraparte. Tramitamos arras penitenciales o confirmatorias por 145 € IVA incl., 100 % online, con gestor experto que responde dudas por teléfono, WhatsApp y panel.",
    fairArrasHeading: "Arras justas en Sevilla — gestoría, no agencia",
    fairArrasIntro:
      "En Triana, Nervión o Los Remedios es habitual cerrar precio por Idealista y firmar arras a los dos días con un Word copiado. Ese ahorro de comisión se pierde si la señal queda mal calibrada: penalidades del art. 1454 CC, plazos imposibles de comunidad o hipoteca sin cláusula de protección.",
    legalSpanish:
      "El Código Civil español (arts. 1454 y 1451) distingue arras penitenciales y confirmatorias. En Sevilla aplicamos este marco estatal para calibrar qué pasa con la señal si alguien se echa atrás antes de escritura.",
    legalCatalan:
      "Art. 1454 CC — arras penitenciales: quien entrega la señal y desiste pierde lo entregado; quien la recibe e incumple devuelve el doble. Tu gestor traduce esto a cláusulas comprensibles para comprador y vendedor particular.",
    legalCatalanFinancing:
      "Si compras con hipoteca, conviene una cláusula de financiación con plazo, importe del préstamo y resolución bancaria escrita. Sin ella, una denegación del banco puede dejarte expuesto al régimen estricto del 1454. El gestor Livendia la redacta adaptada a tu operación en Sevilla.",
    cccatArrasArticles: "1454 y 1451",
    cccatFinancingArticle: "cláusula hipoteca",
    localMarketIntro:
      "Sevilla mezcla compraventa rápida entre particulares, herencias en barrios señoriales y operaciones con reforma pendiente en Macarena o el Casco. Las plantillas andaluzas genéricas no contemplan cédula de habitabilidad, comunidad numerosa o plazos realistas de cancelación de hipoteca.",
    zonesHeading: "Contrato de arras entre particulares en barrios de Sevilla",
    zonesParagraph: "Gestor asignado para operaciones en:",
    zoneGroups: [
      { district: "Triana — Los Remedios", areas: "Triana, Los Remedios, Plaza de Cuba, Puerta de Córdoba" },
      { district: "Nervión — San Bernardo", areas: "Nervión, San Bernardo, Santa Justa, Huerta del Valle" },
      { district: "Centro — Macarena", areas: "Centro, Alfalfa, Feria, Macarena, San Lorenzo" },
      { district: "Este — Cerro-Amate", areas: "Cerro del Águila, Amate, Torreblanca, Palmete" },
    ],
    arrasTypesIntro:
      "Te orientamos entre penitenciales (flexibilidad con coste de señal según art. 1454 CC) y confirmatorias (más vinculantes). El gestor explica la diferencia en la llamada previa — no firmes a ciegas.",
    moneyLossRisks: [
      {
        title: "Señal sin cláusula de hipoteca",
        body: "Comprador que pierde 15.000 € de arras aunque el banco deniega el préstamo — frecuente en operaciones entre particulares en Nervión o Triana.",
      },
      {
        title: "Plazo de comunidad irreal",
        body: "Arras con escritura en 30 días y certificado de deuda que tarda tres semanas en bloques grandes de Los Remedios — el gestor exige calendario verificable.",
      },
      {
        title: "Herencia sin resolver",
        body: "Vendedores múltiples o adjudicación pendiente no reflejada en el contrato — riesgo de anular la operación después de la señal.",
      },
    ],
    faqLocal: [
      {
        question: "¿Livendia es una inmobiliaria?",
        answer:
          "No. Somos gestoría digital para particulares: no publicamos tu piso ni cobramos comisión sobre el precio de venta. Redactamos o revisamos arras por tarifa plana de 145 € IVA incl.",
      },
      {
        question: "¿Cuánto ahorro frente a una agencia?",
        answer:
          "En una venta de 250.000 €, el 3 % de comisión son 7.500 € + IVA. Livendia cubre el tramo contractual de las arras por 145 € cuando ya tienes comprador o vendedor.",
      },
      {
        question: "¿Todo el trámite es online?",
        answer:
          "Sí. Contratas con tarjeta, subes documentación al panel, hablas con tu gestor asignado por teléfono o WhatsApp y recibes el contrato en 48-72 h laborables.",
      },
      {
        question: "¿Atendéis Triana, Nervión o municipios del área?",
        answer:
          "Sí. Misma gestoría online para Sevilla capital y operaciones en Tomares, Dos Hermanas, Alcalá de Guadaíra o Mairena del Aljarafe.",
      },
      {
        question: "¿Precio cerrado?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. con gestor asignado y llamada previa.`,
      },
    ],
  },

  malaga: {
    legalRegion: "espana",
    heroSubtitle: `Arras entre particulares en Málaga por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. — gestoría Livendia online, no agencia del 3–5 %. Tu asesor experto redacta penitenciales o confirmatorias en Centro, Teatinos o El Palo mientras resuelves dudas por WhatsApp.`,
    gestorPitch:
      "¿Encontraste comprador en Idealista y la agencia te pide miles de euros solo por redactar arras? Livendia asigna un gestor a tu expediente: trámite 100 % online, 145 € IVA incl., asesoramiento constante hasta la firma. No captamos inmuebles ni cobramos comisión sobre el precio de la vivienda.",
    fairArrasHeading: "Gestión de arras en Málaga sin comisiones de agencia",
    fairArrasIntro:
      "En la Costa del Sol conviven compradores locales, segundas residencias y operaciones rápidas en el centro histórico. Firmar arras sin revisión profesional es arriesgar la señal por cláusulas copiadas de otra provincia o por no distinguir arras penitenciales de confirmatorias.",
    legalSpanish:
      "En Andalucía rige el Código Civil español en materia de arras (arts. 1454 y 1451). Calibramos penalidades y plazos hasta escritura para compradores y vendedores particulares en Málaga.",
    legalCatalan:
      "Art. 1454 CC: régimen de arras penitenciales — pérdida o restitución doble de la señal según quién incumpla. El gestor Livendia lo explica en castellano claro antes de que transfieras dinero.",
    legalCatalanFinancing:
      "Muchas compraventas en Málaga van con hipoteca o comprador extranjero con financiación en España. Redactamos cláusula de obtención de préstamo con plazo y condiciones para que no pierdas la señal si el banco deniega.",
    cccatArrasArticles: "1454 y 1451",
    cccatFinancingArticle: "cláusula hipoteca",
    localMarketIntro:
      "Teatinos concentra demanda universitaria; El Palo y La Malagueta mezclan turismo residencial; Carretera de Cádiz mueve pisos entre particulares con prisa. Cada caso exige arras distintas — no la misma plantilla de Madrid.",
    zonesHeading: "Arras en zonas de Málaga capital",
    zonesParagraph: "Acompañamos particulares en:",
    zoneGroups: [
      { district: "Centro Histórico — Soho", areas: "Centro, Soho, La Malagueta, Perchel" },
      { district: "Teatinos — Universidad", areas: "Teatinos, Ciudad Jardín, Cruz de Humilladero" },
      { district: "El Palo — Pedregalejo", areas: "El Palo, Pedregalejo, Baños del Carmen" },
      { district: "Carretera de Cádiz — Huelin", areas: "Carretera de Cádiz, Huelin, Tabladilla" },
    ],
    arrasTypesIntro:
      "Segunda residencia, herencia o compra habitual: el gestor asignado adapta penitenciales o confirmatorias al calendario real de comunidad, ITE o cancelación de hipoteca en Málaga.",
    moneyLossRisks: [
      {
        title: "Uso turístico mal delimitado",
        body: "Arras en piso que el comprador cree alquilable turísticamente sin licencia — el gestor exige coherencia con el objeto de compraventa.",
      },
      {
        title: "Comprador internacional sin cláusula clara",
        body: "Operaciones con financiación desde el extranjero sin plazos de resolución bancaria — señal en riesgo si no hay cláusula de financiación.",
      },
      {
        title: "Comunidad y derrama omitidas",
        body: "Edificios del centro o Teatinos con obras aprobadas no reflejadas antes de arras — el gestor pide transparencia mínima documental.",
      },
    ],
    faqLocal: [
      {
        question: "¿Sirve si vendo entre particulares sin agencia?",
        answer:
          "Sí. Es nuestro caso habitual: ya tienes comprador y solo necesitas arras profesionales por 145 €, no una inmobiliaria que cobre miles por el mismo trámite.",
      },
      {
        question: "¿Atendéis El Palo, Teatinos o Rincón de la Victoria?",
        answer:
          "Sí. Gestoría online para Málaga capital y área metropolitana próxima con el mismo precio y gestor dedicado.",
      },
      {
        question: "¿Qué incluye el servicio online?",
        answer:
          "Contratación con tarjeta, panel de expediente, llamada con gestor experto, redacción o revisión de arras y consultas hasta la firma.",
      },
      {
        question: "¿Redactáis cláusula si compro con hipoteca?",
        answer:
          "Sí. Incluimos cláusula de financiación con plazo y condiciones del préstamo para proteger la señal si el banco deniega.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. — frente a 6.000–12.000 € de comisión de agencia en una venta media.`,
      },
    ],
  },

  zaragoza: {
    legalRegion: "espana",
    heroSubtitle: `Contrato de arras en Zaragoza entre particulares — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestoría online Livendia: asesor experto asignado, trámite digital y arras penitenciales o confirmatorias sin pagar comisión de inmobiliaria.`,
    gestorPitch:
      "En Zaragoza muchos compradores encuentran piso por Idealista o recomendación y cierran precio en días. La agencia cobraría miles por redactar arras; Livendia lo hace por 145 € IVA incl. con gestor que responde tus consultas por teléfono, WhatsApp y panel hasta que firmes con seguridad.",
    fairArrasHeading: "Arras en Zaragoza: gestoría económica para particulares",
    fairArrasIntro:
      "Actur, Delicias y el Casco Histórico mueven operaciones directas entre propietario e comprador. Sin gestor, las arras suelen arrastrar plazos irreales de hipoteca, cargas de comunidad ignoradas o penalidades del art. 1454 CC mal explicadas.",
    legalSpanish:
      "En Aragón aplican las arras del Código Civil español (arts. 1454 y 1451). Tu gestor Livendia calibra la señal para que comprador y vendedor entiendan las consecuencias del incumplimiento.",
    legalCatalan:
      "Art. 1454 CC — arras penitenciales con efecto de pérdida o duplicación de la cantidad entregada. Lo redactamos en lenguaje accesible, no en jurídico incomprensible.",
    legalCatalanFinancing:
      "En Zaragoza, donde muchas operaciones dependen de hipoteca, la cláusula de financiación es esencial: plazo para obtener préstamo, importe y resolución escrita del banco. Sin ella, perder la señal es un riesgo real.",
    cccatArrasArticles: "1454 y 1451",
    cccatFinancingArticle: "cláusula hipoteca",
    localMarketIntro:
      "Zaragoza combina mercado asequible frente a Madrid o Barcelona, fuerte componente universitario en Delicias y operaciones familiares en barrios como La Almozara o Torrero. Los borradores copiados de otras ciudades generan conflictos antes de notaría.",
    zonesHeading: "Arras por barrios de Zaragoza",
    zonesParagraph: "Tramitamos contratos para particulares en:",
    zoneGroups: [
      { district: "Casco Histórico — San Pablo", areas: "Casco Histórico, San Pablo, El Pilar, La Magdalena" },
      { district: "Actur — Rey Fernando", areas: "Actur, Parque Goya, Plaza Europa, Valdespartera" },
      { district: "Delicias — Universidad", areas: "Delicias, Romareda, San José, La Almozara" },
      { district: "Torrero — Las Fuentes", areas: "Torrero, Las Fuentes, Monzalbarba, Valdefierro" },
    ],
    arrasTypesIntro:
      "El gestor asignado te ayuda a elegir penitenciales o confirmatorias según si hay hipoteca, herencia o plazo corto hasta escritura en Zaragoza.",
    moneyLossRisks: [
      {
        title: "Arras con plazo de notaría imposible",
        body: "Compradores que comprometen señal sin margen para tasación bancaria o certificado de deuda — calendario irreal en bloques de Actur.",
      },
      {
        title: "Objeto del inmueble incompleto",
        body: "Garaje o trastero en registro no incluidos en arras — disputa habitual en operaciones entre particulares.",
      },
      {
        title: "Penalidad desproporcionada",
        body: "Plantillas que fijan el doble de la señal sin explicar el art. 1454 CC — el gestor equilibra consecuencias.",
      },
    ],
    faqLocal: [
      {
        question: "¿Por qué Livendia y no una agencia?",
        answer:
          "La agencia cobra comisión sobre la venta (miles de euros) y a veces extra por arras. Livendia es gestoría: 145 € IVA incl. por contrato cuando ya tienes contraparte.",
      },
      {
        question: "¿Cómo funciona el trámite online?",
        answer:
          "Contratas en la web, pagas con tarjeta, accedes al panel, tu gestor te llama en 24-48 h y entrega arras revisadas en 48-72 h laborables.",
      },
      {
        question: "¿Atendéis Actur, Delicias o Utebo?",
        answer:
          "Sí. Misma operativa para Zaragoza capital y municipios del área metropolitana próxima.",
      },
      {
        question: "¿Comprador o vendedor pueden contratar?",
        answer:
          "Ambos. Cualquier particular con borrador de la otra parte o sin borrador — el gestor redacta desde cero.",
      },
      {
        question: "¿Precio final?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. sin sorpresas ni comisión sobre el precio del piso.`,
      },
    ],
  },

  palma: {
    legalRegion: "espana",
    heroSubtitle: `Arras entre particulares en Palma de Mallorca por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestoría Livendia online — no agencia. Tu asesor experto en arras redacta penitenciales o confirmatorias en Eixample, Son Espanyolet o Santa Catalina con seguimiento constante.`,
    gestorPitch:
      "En Palma una inmobiliaria puede facturarte comisiones elevadas sobre una venta de 300.000–500.000 €. Si ya tienes comprador o vendedor, Livendia tramita las arras por 145 € IVA incl.: gestor asignado, panel digital, llamada previa y consultas resueltas hasta la firma — sin captación de inmuebles.",
    fairArrasHeading: "Arras en Palma: gestoría para particulares, no comisión de agencia",
    fairArrasIntro:
      "Palma combina demanda residencial, compradores nacionales e internacionales y normativa balear sobre vivienda. Firmar arras sin revisión es arriesgar la señal por cláusulas que no reflejan cédula, comunidad o calendario real de cancelación de hipoteca en las Islas.",
    legalSpanish:
      "En las Islas Baleares rige el Código Civil español en arras (arts. 1454 y 1451). Adaptamos el contrato al inmueble concreto en Palma — no plantillas peninsulares sin revisar.",
    legalCatalan:
      "Art. 1454 CC — arras penitenciales: el gestor explica qué ocurre con la señal si comprador o vendedor desiste antes de escritura pública en notaría palmesana.",
    legalCatalanFinancing:
      "Operaciones con hipoteca en Palma requieren cláusula de financiación bien redactada: plazo, importe del préstamo y documentación del banco. El gestor Livendia la integra en el contrato de arras.",
    cccatArrasArticles: "1454 y 1451",
    cccatFinancingArticle: "cláusula hipoteca",
    localMarketIntro:
      "Son Espanyolet y Santa Catalina concentran rotación entre particulares; el Eixample palmesano mezcla pisos señoriales y reformas; Playa de Palma y Portixol atraen segundas residencias. Cada operación necesita arras distintas — especialmente si hay comprador foráneo o herencia.",
    zonesHeading: "Contrato de arras en barrios de Palma",
    zonesParagraph: "Gestor asignado para particulares en:",
    zoneGroups: [
      { district: "Eixample — Son Armadans", areas: "Eixample, Son Armadans, La Bonanova, Porto Pi" },
      { district: "Son Espanyolet — Santa Catalina", areas: "Son Espanyolet, Santa Catalina, La Llotja" },
      { district: "Centro Histórico — Sindicato", areas: "Centro, Sindicato, La Seu, Mercat" },
      { district: "Playa de Palma — Portixol", areas: "Playa de Palma, Portixol, Can Pastilla, Coll d'en Rabassa" },
    ],
    arrasTypesIntro:
      "Segunda residencia, compra habitual o venta entre conocidos: penitenciales o confirmatorias redactadas con plazos realistas para comunidad, registro y financiación en Palma.",
    moneyLossRisks: [
      {
        title: "Comprador no residente sin cláusulas claras",
        body: "Operaciones con financiación o fiscalidad compleja sin plazos de resolución — señal en riesgo si no hay cláusula de financiación.",
      },
      {
        title: "Cargas y comunidad en edificios antiguos",
        body: "Palma centro: derramas o actas no reflejadas en arras — el gestor exige checklist mínimo antes de la señal.",
      },
      {
        title: "Confirmatorias mal identificadas",
        body: "Texto que mezcla penitenciales y confirmatorias — confusión costosa antes de notaría en Mallorca.",
      },
    ],
    faqLocal: [
      {
        question: "¿Livendia vende pisos en Palma?",
        answer:
          "No. Somos gestoría digital: redactamos o revisamos arras por 145 € IVA incl. cuando comprador y vendedor ya se han encontrado sin agencia.",
      },
      {
        question: "¿Atendéis compradores que vienen de fuera de Mallorca?",
        answer:
          "Sí. Trámite 100 % online: panel, videollamada o teléfono con tu gestor asignado y contrato adaptado al inmueble en Palma.",
      },
      {
        question: "¿Cuánto ahorro vs inmobiliaria?",
        answer:
          "En una venta de 350.000 €, el 3 % de agencia supera 10.000 €. Livendia cubre el tramo de arras por 145 € IVA incl.",
      },
      {
        question: "¿Incluye cláusula de hipoteca?",
        answer:
          "Sí, si la operación lo requiere. El gestor redacta cláusula de financiación con plazo y condiciones del préstamo.",
      },
      {
        question: "¿Plazo de entrega?",
        answer: "48-72 h laborables tras la llamada con tu gestor, una vez completos los datos de las partes.",
      },
    ],
  },
};

export function getArrasLocalSeoContent(slug: string, city?: string): ArrasLocalSeoContent | undefined {
  const base = ARRAS_LOCAL_SEO_CONTENT[slug];
  if (!base) return undefined;
  const region = base.legalRegion ?? "catalunya";
  const cityLabel = city ?? slug;
  return {
    ...base,
    financingEducation:
      region === "espana"
        ? buildSpanishArrasFinancingEducation(cityLabel)
        : buildArrasFinancingEducation(cityLabel),
  };
}
