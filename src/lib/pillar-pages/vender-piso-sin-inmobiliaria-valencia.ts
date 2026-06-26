/**
 * Contenido pilar editorial — /vender-piso-sin-inmobiliaria/valencia
 */

import { SERVICIO_COMPLETO_CV_PRICE_EUR, SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { VENDER_PISO_SIN_INMOBILIARIA_BASE } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import type {
  PillarCaseStudy,
  PillarDocument,
  PillarFaq,
  PillarProcessStep,
  PillarRelatedLink,
  PillarRisk,
  PillarSection,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";

export const PILLAR_VALENCIA_PATH = `${VENDER_PISO_SIN_INMOBILIARIA_BASE}/valencia`;

export const PILLAR_VALENCIA_META = {
  title: "Vender piso sin comisiones en Valencia | Entre particulares con gestor legal | Livendia",
  description:
    "Guía completa para vender tu piso en Valencia sin inmobiliaria ni comisiones del 3-5 %. Proceso entre particulares, documentación, riesgos, ahorro real y acompañamiento jurídico Livendia por 890 € IVA incl.",
  keywords: [
    "vender piso sin inmobiliaria valencia",
    "vender piso sin comisiones valencia",
    "vender vivienda entre particulares valencia",
    "vender piso directamente a un particular valencia",
    "ahorrar comisión inmobiliaria valencia",
    "vender casa sin agencia valencia",
    "vender piso sin agencia valencia",
    "venta entre particulares valencia",
    "vender piso de particular a particular valencia",
    "trámites vender piso particular valencia",
  ],
} as const;

export const PILLAR_VALENCIA_TOC = [
  { id: "por-que-vender-sin-inmobiliaria", label: "Por qué vender sin inmobiliaria" },
  { id: "que-es-venta-entre-particulares", label: "Venta entre particulares" },
  { id: "que-hace-livendia", label: "Qué hace y qué no hace Livendia" },
  { id: "proceso-completo", label: "Proceso completo de venta" },
  { id: "documentacion", label: "Documentación necesaria" },
  { id: "riesgos", label: "Riesgos y cómo evitarlos" },
  { id: "comparativa", label: "Agencia, solo o Livendia" },
  { id: "ahorro-comisiones", label: "Cuánto ahorras en comisiones" },
  { id: "financiacion-comprador", label: "Si el comprador pide hipoteca" },
  { id: "valencia-mercado", label: "Vender en Valencia" },
  { id: "casos-ejemplo", label: "Ejemplos reales de ahorro" },
  { id: "errores-frecuentes", label: "Errores que cuestan dinero" },
  { id: "livendia-vs-otros", label: "Livendia vs otras opciones" },
  { id: "servicios-relacionados", label: "Servicios relacionados" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
] as const;

export const PILLAR_VALENCIA_SECTIONS: readonly PillarSection[] = [
  {
    id: "por-que-vender-sin-inmobiliaria",
    title: "Por qué cada vez más propietarios en Valencia venden sin inmobiliaria",
    paragraphs: [
      "Vender un piso en Valencia sin inmobiliaria deja de ser una excepción: en la Comunidad Valenciana, donde el precio medio de la vivienda usada supera con frecuencia los 320.000 € en la capital, una comisión del 3 % más IVA representa más de 16.000 € y al 5 % se acerca a los 27.000 €. Ese importe no cubre la escritura ni el notario; es el coste de intermediar cuando tú ya has encontrado al comprador.",
      "El perfil del vendedor madrileño ha cambiado. Muchos cierran con un compañero de trabajo, un familiar, un vecino o alguien que contactó por Idealista o Fotocasa. En esos casos, pagar un porcentaje sobre el precio de venta equivale a financiar captación que no usaste. Vender vivienda entre particulares —vender casa sin agencia, directamente a otro particular— es legal, habitual y tan seguro como con intermediario si la parte contractual está bien hecha.",
      "El reto no es prescindir de la agencia, sino no prescindir de la seguridad jurídica. Vender piso sin comisiones ahorra dinero; vender sin asesoramiento cuando hay hipoteca pendiente, derrama en la comunidad o comprador que financia puede costar meses o miles de euros en correcciones. Por eso crece el tercer camino: ahorro de la venta directa más gestor legal que redacta contratos, revisa cargas y coordina hasta notaría.",
      "En Valencia capital y corredor del Henares el comprador suele llegar con preaprobación bancaria. Entidades con sede en Paseo de la Ciudad de las Artes, Mestalla o Puerto exigen arras formalizadas y documentación impecable de la comunidad. El vendedor que vende sin agencia pero con orden documental cierra en plazos similares a una operación intermediada.",
      "Esta guía está pensada para ti si ya tienes comprador o lo estás negociando por tu cuenta y quieres ahorrar la comisión inmobiliaria sin asumir riesgos innecesarios. Aquí encontrarás el proceso completo en Valencia, la documentación exigida, los errores más caros y cómo encaja Livendia.",
    ],
  },
  {
    id: "que-es-venta-entre-particulares",
    title: "Qué significa vender vivienda entre particulares en Valencia (y qué no implica)",
    paragraphs: [
      "Vender vivienda entre particulares significa que tú y el comprador acordáis la compraventa sin que una agencia actúe como mandataria comercial. No existe un régimen legal distinto: la operación se rige por el Código Civil y la normativa tributaria y registral como cualquier transmisión.",
      "Vender piso directamente a un particular no significa saltarse la notaría, el Registro de la Propiedad ni los impuestos. La escritura pública sigue siendo obligatoria para inscribir la propiedad. Cuanto más claro quede por escrito en reserva y arras, menos fricción habrá ante el notario y el banco del comprador.",
      "En Valencia, la venta sin agencia suele combinar: (1) captación del comprador por el propietario, (2) negociación directa del precio y calendario, y (3) acompañamiento jurídico-documental profesional. Livendia ocupa exclusivamente esta tercera pieza.",
      "Confundir «sin inmobiliaria» con «sin profesionales» es el error más repetido en operaciones en Ruzafa, Benimaclet o Campanar. Puedes vender casa sin agencia y contratar gestoría especializada en compraventa entre particulares. Eso no convierte la operación en venta «con agencia».",
    ],
  },
  {
    id: "que-hace-livendia",
    title: "Qué hace Livendia cuando vendes sin inmobiliaria en Valencia — y qué no hace",
    paragraphs: [
      "Livendia es una gestoría inmobiliaria digital especializada en compraventa entre particulares. El servicio completo de venta cubre desde que tienes comprador interesado hasta la firma en notaría, por 890 € IVA incluido. No cobramos comisión sobre el precio de venta ni exigimos exclusiva.",
      "Lo que hacemos: gestor legal dedicado; revisión de nota simple y cargas; redacción de reserva y arras; orientación sobre certificados de comunidad, eficiencia energética y documentación urbanística; coordinación del calendario hacia escritura; revisión del borrador notarial; acompañamiento por WhatsApp y teléfono; panel online para centralizar documentos.",
      "Lo que no hacemos: no publicamos en Idealista ni Fotocasa; no hacemos fotos ni visitas; no negociamos el precio por ti; no somos Housfy ni Properfy — no captamos comprador. Si ya tienes comprador y quieres ahorrar comisión inmobiliaria, Livendia es el complemento jurídico que muchos propietarios madrileños echaban en falta.",
      "Vender piso sin comisiones con Livendia significa pagar gestoría profesional, no porcentaje de agencia sobre los cientos de miles de euros de tu vivienda en Valencia.",
    ],
  },
];

export const PILLAR_VALENCIA_PROCESS: readonly PillarProcessStep[] = [
  {
    phase: "Fase 1",
    title: "Preparar la vivienda y el precio en Valencia",
    duration: "1–4 semanas",
    body: "Acota un precio realista según comparables en tu barrio —Ruzafa, Benimaclet, Campanar, Malvarrosa, Algirós—, estado de la vivienda y situación registral. Reúne el certificado de eficiencia energética y la escritura. Si hay inquilino, revisa el contrato y plazos de desalojo.",
    livendiaRole: "Orientación si ya tienes comprador y quieres validar precio y calendario antes de firmar nada vinculante.",
  },
  {
    phase: "Fase 2",
    title: "Captar comprador por tu cuenta",
    duration: "Variable",
    body: "Publicas en portales, redes o cierras con alguien de tu entorno. Filtras solvencia: financiación, señal y plazos. En Valencia es habitual que el comprador pida segunda visita con técnico; no aceptes condiciones abusivas en caliente.",
    livendiaRole: "No participamos en captación. No firmes reserva ni entregues señal sin revisar el borrador con un profesional.",
  },
  {
    phase: "Fase 3",
    title: "Reserva y señal",
    duration: "1–2 semanas",
    body: "Muchas operaciones entre particulares en Valencia arrancan con reserva: fija precio, plazo para arras, devolución si falla la hipoteca y penalizaciones por desistimiento.",
    livendiaRole: "Redacción del contrato de reserva adaptado a vuestra operación en la Comunidad Valenciana.",
  },
  {
    phase: "Fase 4",
    title: "Contrato de arras",
    duration: "2–6 semanas",
    body: "Las arras vinculan a las partes y fijan calendario hacia escritura. Deben reflejar precio, plazos, gastos, cláusula suspensiva de financiación y estado del inmueble. El comprador con hipoteca suele necesitar arras firmadas para abrir expediente en su banco.",
    livendiaRole: "Redacción de arras a medida, coherencia con nota simple y coordinación con gestoría del comprador.",
  },
  {
    phase: "Fase 5",
    title: "Documentación para comprador y banco",
    duration: "2–8 semanas",
    body: "Certificado de comunidad, IBI, nota simple, CEE y, en edificios antiguos del centro o Ensanche, certificados de instalaciones o ITE. Cualquier laguna retrasa tasación y aprobación del préstamo.",
    livendiaRole: "Checklist personalizado, revisión de documentos y seguimiento hasta expediente completo.",
  },
  {
    phase: "Fase 6",
    title: "Cancelación de hipoteca (si procede)",
    duration: "2–4 semanas",
    body: "Si vendes con hipoteca pendiente, coordina con tu banco provisión de fondos o subrogación. En Valencia esto es rutinario pero delicado en plazos.",
    livendiaRole: "Orientación sobre calendario y coherencia entre arras y condiciones bancarias.",
  },
  {
    phase: "Fase 7",
    title: "Plusvalía e impuestos del vendedor",
    duration: "En paralelo",
    body: "Plusvalía municipal, IRPF por ganancia patrimonial y gastos locales. El comprador asume ITP en segunda mano. Valencia capital y municipios del cinturón tienen normativas y bonificaciones propias.",
    livendiaRole: "Orientación sobre gastos y plazos; liquidación definitiva con tu asesor fiscal.",
  },
  {
    phase: "Fase 8",
    title: "Escritura pública en notaría",
    duration: "1 día (+ cita previa)",
    body: "La compraventa se perfecciona ante notario. El borrador debe coincidir con arras: precio, cargas, ocupación, mobiliario, entrega de llaves.",
    livendiaRole: "Revisión del borrador notarial y resolución de discrepancias de última hora.",
  },
];

export const PILLAR_VALENCIA_DOCUMENTS: readonly PillarDocument[] = [
  {
    name: "Certificado de eficiencia energética (CEE)",
    whoProvides: "Técnico certificador autorizado",
    whyItMatters: "Obligatorio para publicar y vender. Sin él, banco y comprador paralizan la operación.",
  },
  {
    name: "Nota simple registral actualizada",
    whoProvides: "Registro de la Propiedad",
    whyItMatters: "Acredita titularidad, hipotecas y cargas. Livendia la revisa antes de arras.",
  },
  {
    name: "Escritura y referencia catastral",
    whoProvides: "Propietario",
    whyItMatters: "Base para contratos y notaría. Discrepancias deben resolverse antes de escritura.",
  },
  {
    name: "Certificado de estar al corriente (comunidad)",
    whoProvides: "Administrador de fincas",
    whyItMatters: "Imprescindible para hipoteca del comprador. Derramas en curso son causa frecuente de retraso en Valencia.",
  },
  {
    name: "Último recibo del IBI",
    whoProvides: "Ayuntamiento / propietario",
    whyItMatters: "Prueba impuesto municipal al día. Se prorratea en escritura.",
  },
  {
    name: "Contrato de arras y reserva",
    whoProvides: "Redacción profesional — Livendia",
    whyItMatters: "Núcleo de la seguridad jurídica entre particulares en Valencia.",
  },
  {
    name: "Certificados de instalaciones / ITE (si aplica)",
    whoProvides: "Según edificio",
    whyItMatters: "En edificios del centro, Ciutat Vella o El Carmen antiguos, comprador o banco pueden exigirlos.",
  },
  {
    name: "Licencia de primera ocupación o cédula (obra nueva o reforma)",
    whoProvides: "Según caso",
    whyItMatters: "En promociones recientes de Benicalap, La Safranar o Nazaret puede ser requisito del comprador.",
  },
];

export const PILLAR_VALENCIA_RISKS: readonly PillarRisk[] = [
  {
    risk: "Arras copiadas de internet",
    alone: "Plazos irreales o cláusulas que no protegen al vendedor si el comprador falla.",
    withLivendia: "Redacción a medida con penitenciales o confirmatorias según tu caso.",
  },
  {
    risk: "Cargas ocultas en nota simple",
    alone: "Operación paralizada o pleito cuando el banco las descubre.",
    withLivendia: "Revisión registral previa y transparencia documentada.",
  },
  {
    risk: "Comprador sin financiación clara",
    alone: "Meses perdidos sin cláusula suspensiva bien redactada.",
    withLivendia: "Arras con condiciones suspensivas y seguimiento de calendario.",
  },
  {
    risk: "Derrama impagada en la comunidad",
    alone: "Denegación de hipoteca o rebaja de precio forzada.",
    withLivendia: "Checklist con administrador antes de fijar precio definitivo.",
  },
  {
    risk: "Borrador notarial distinto a arras",
    alone: "Conflictos el día de la firma en la notaría de Valencia.",
    withLivendia: "Revisión y alineación entre contratos privados y escritura.",
  },
];

export const PILLAR_VALENCIA_COMPARE_ROWS = [
  { aspect: "Coste en piso de 320.000 €", agency: "11.616–19.360 € (3–5 % + IVA)", alone: "0 € de gestoría", livendia: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.` },
  { aspect: "Publica anuncio y trae visitas", agency: "Sí", alone: "Tú (Idealista, etc.)", livendia: "No" },
  { aspect: "Contratos por profesional", agency: "Variable", alone: "Riesgo con plantillas", livendia: "Sí — gestor dedicado" },
  { aspect: "Comisión sobre precio", agency: "Sí (habitual)", alone: "No", livendia: "No" },
  { aspect: "Exclusiva", agency: "Suele exigirse", alone: "No", livendia: "No" },
  { aspect: "Revisión nota simple", agency: "A veces", alone: "Tu responsabilidad", livendia: "Incluida" },
  { aspect: "Coordinación hasta notaría", agency: "Sí", alone: "Tu responsabilidad", livendia: "Sí" },
  { aspect: "Panel online y gestor directo", agency: "Depende", alone: "No", livendia: "Sí" },
] as const;

export const PILLAR_VALENCIA_SAVINGS_ROWS = [
  { price: 220_000, agency3: 7_986, agency5: 13_310, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 260_000, agency3: 9_438, agency5: 15_730, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 320_000, agency3: 11_616, agency5: 19_360, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 380_000, agency3: 13_794, agency5: 22_990, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 450_000, agency3: 16_335, agency5: 27_225, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 520_000, agency3: 18_876, agency5: 31_460, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
] as const;

export const PILLAR_VALENCIA_CASE_STUDIES: readonly PillarCaseStudy[] = [
  {
    title: "Piso en Ruzafa vendido a compañero de trabajo",
    scenario: "Propietario con piso de 85 m² en Ruzafa. Comprador de su empresa. Precio: 335.000 €.",
    challenge: "Comprador con hipoteca en entidad valenciana. Banco exigía arras con suspensión a 60 días y certificado de comunidad sin derramas.",
    outcome: "Livendia redactó arras, ordenó documentación y alineó calendario con la entidad. Escritura en 10 semanas.",
    savings: "Frente a agencia al 3 % + IVA: ahorro de 11.245 € (12.135 € menos 890 € Livendia).",
  },
  {
    title: "Vivienda en Campanar entre familiares",
    scenario: "Piso de 78 m² en Malvarrosa. Venta a sobrino. Precio: 285.000 €.",
    challenge: "Operación familiar sin contrato claro: riesgo de recalificar condiciones y problemas con Hacienda por precio simbólico mal justificado.",
    outcome: "Contrato de arras con precio de mercado documentado, inventario y calendario de escritura. Venta cerrada sin litigio familiar.",
    savings: "Frente al 5 % + IVA: ahorro de 16.085 €.",
  },
  {
    title: "Piso en Benimaclet con hipoteca pendiente",
    scenario: "Propietario en Benimaclet vende a 245.000 €. Hipoteca pendiente de 98.000 €.",
    challenge: "Coordinar cancelación, provisión del banco vendedor y plazos del comprador financiado.",
    outcome: "Livendia alineó arras con fecha de cancelación y revisó nota simple en dos momentos. Escritura con subrogación.",
    savings: "Frente al 3 % + IVA: ahorro de 8.125 €.",
  },
];

export const PILLAR_VALENCIA_VALENCIA_EXTRA: readonly PillarSection[] = [
  {
    id: "financiacion-comprador",
    title: "Si el comprador necesita hipoteca en Valencia: qué debe saber el vendedor",
    paragraphs: [
      "La mayoría de compradores particulares en Valencia financian con préstamo hipotecario. Para el vendedor que ahorra comisión inmobiliaria entra en juego el banco del comprador, el tasador y plazos estrictos de documentación.",
      "Entidades con oficinas en Ciudad de las Artes, Mestalla o Puerto piden arras firmadas, certificado de comunidad, nota simple reciente, CEE e IBI al día. Si entregaste señal sin papeles, el comprador puede usar el retraso bancario para renegociar.",
      "Las cláusulas suspensivas en arras protegen a ambas partes: el comprador solicita hipoteca en plazo; si no la obtiene, se establece qué pasa con la señal. Mal redactadas u omitidas, son la causa más frecuente de disputas en ventas entre particulares en Valencia.",
      "Livendia alinea calendario con plazos realistas de aprobación (cuatro a diez semanas desde arras) y revisa que la documentación esté lista antes de que el comprador presente expediente.",
      "Si el comprador paga al contado, el calendario se acorta, pero nota simple y certificados de comunidad siguen siendo imprescindibles.",
    ],
  },
  {
    id: "valencia-mercado",
    title: "Particularidades de vender en Valencia capital y área metropolitana",
    paragraphs: [
      "Valencia no es un mercado único. Vender sin inmobiliaria en Ruzafa, Benimaclet, Campanar o Malvarrosa implica compradores distintos —familias, estudiantes UV/UPV, teletrabajadores post-pandemia, inversores— y tiempos de cierre variables.",
      "En el área metropolitana —Mislata, Burjassot, Torrent, Paterna, Alboraya— los precios son más contenidos pero el proceso legal es idéntico: arras, comunidad, ITP del comprador y plusvalía del vendedor. Livendia aplica el mismo protocolo y tarifa plana.",
      "La Comunidad Valenciana y el Ayuntamiento han ido ajustando requisitos de eficiencia energética y urbanismo. Si hubo reforma sin licencia o cambio de uso, conviene resolverlo antes de arras.",
      "Operaciones entre particulares con herencias compartidas son frecuentes en barrios consolidados. Todos los herederos deben estar alineados y la documentación registral unificada antes de anunciar precio.",
      "Si vendes para comprar otro piso en Valencia, el calendario encadenado requiere arras bien redactadas en ambas patas. Livendia coordina la venta; para la compra existe el servicio completo de compra con la misma filosofía.",
    ],
  },
  {
    id: "errores-frecuentes",
    title: "Errores frecuentes al vender sin agencia en Valencia",
    paragraphs: [
      "Confundir interés con solvencia: en Valencia no faltan visitas; faltan compradores que obtengan hipoteca. Filtra antes de reservar y exige preaprobación cuando sea razonable.",
      "Entregar señal en mano sin contrato claro. Pagos sin trazabilidad generan problemas con Hacienda y con el comprador.",
      "Fijar precio sin mirar la comunidad. Una derrama de 20.000 € repartida en años cambia la ecuación para el comprador financiado.",
      "Pensar que «entre familiares no hace falta contrato». Las operaciones entre parientes son las que más acaban en conflicto.",
      "Comparar solo el precio de agencia con «gratis» vender solo. Un retraso de tres meses o una rebaja del 5 % suele costar más que 890 € de acompañamiento profesional.",
      "Anunciar con datos registrales desactualizados. Si aparece una carga no mencionada, el comprador desiste o exige descuento.",
      "No reservar cita notarial con antelación. En temporada alta, agendas de notarías céntricas se llenan.",
    ],
  },
  {
    id: "livendia-vs-otros",
    title: "Livendia frente a inmobiliarias sin comisiones y gestoría tradicional en Valencia",
    paragraphs: [
      "Housfy, Properfy y similares compiten en captación: fotos, portales, visitas. Si ya tienes comprador, pagas por servicios que no necesitas. Livendia parte de otro supuesto: tú traes al comprador; nosotros blindamos la operación.",
      "Una gestoría de barrio en Valencia puede redactar contratos, pero rara vez está especializada en compraventa P2P con panel online y gestor dedicado por expediente.",
      "Vender piso sin comisiones no es vender sin coste. Notaría, registro, plusvalía y cancelación hipotecaria tienen importe propio. La comisión de agencia es el gasto que más sentido pierde cuando la captación la hiciste tú.",
    ],
  },
];

export const PILLAR_VALENCIA_FAQ: readonly PillarFaq[] = [
  {
    question: "¿Es legal vender mi piso en Valencia sin inmobiliaria?",
    answer: "Sí. No existe obligación de contratar agencia. Puedes vender directamente a un particular cumpliendo normativa, documentación y escritura ante notario.",
  },
  {
    question: "¿Qué diferencia hay entre vender sin inmobiliaria y sin comisiones?",
    answer: "En la práctica suelen ser lo mismo: no pagas el 3–5 % sobre el precio. Livendia encaja cuando ya tienes comprador y quieres ahorro y seguridad jurídica.",
  },
  {
    question: "¿Livendia publica mi piso en Idealista?",
    answer: "No. No somos portal ni agencia de marketing. Livendia entra cuando hay comprador o negociación avanzada y necesitas contratos y trámites.",
  },
  {
    question: "¿Cuánto cuesta vender con Livendia frente a una agencia en Valencia?",
    answer: `El servicio completo cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido. En un piso de 320.000 €, una agencia al 3 % + IVA cobra unos 16.335 €; al 5 %, unos 27.225 €.`,
  },
  {
    question: "¿Puedo vender entre particulares si tengo hipoteca?",
    answer: "Sí, es habitual. Hay que coordinar cancelación o subrogación y reflejar plazos realistas en arras. Livendia revisa la nota simple y alinea el calendario.",
  },
  {
    question: "¿Qué documentos pide el banco del comprador?",
    answer: "Nota simple, certificado de comunidad, CEE, IBI, escritura y arras firmadas. Cada entidad añade requisitos. Livendia mantiene checklist actualizado.",
  },
  {
    question: "¿Arras penitenciales o confirmatorias en Valencia?",
    answer: "Depende del calendario, financiación y riesgo de desistimiento. Un gestor Livendia recomienda la fórmula según tu caso.",
  },
  {
    question: "¿Puedo contratar solo arras sin servicio completo?",
    answer: "Sí. Existe contrato de arras local en Valencia. Si ya firmaste arras, está la gestión documental vendedor. El servicio completo es lo habitual de reserva a notaría.",
  },
  {
    question: "¿Livendia negocia el precio por mí?",
    answer: "No. Te asesoramos en lo legal y documental. La negociación económica sigue siendo tuya.",
  },
  {
    question: "¿Cuánto tarda una venta entre particulares en Valencia?",
    answer: "Desde unas semanas (contado, documentación lista) hasta tres o cuatro meses con hipotecas y derramas. Arras mal pactadas son la principal causa de retrasos evitables.",
  },
  {
    question: "¿Qué pasa con la plusvalía municipal?",
    answer: "La obligación del vendedor es la misma haya o no agencia. El ayuntamiento liquida según su normativa. Livendia orienta sobre plazos.",
  },
  {
    question: "¿Sirve esta guía si vendo en Mislata, Torrent o la huerta?",
    answer: "Sí. El marco legal es estatal. Livendia cubre Valencia capital y área metropolitana con el mismo servicio y tarifa.",
  },
  {
    question: "¿Cómo contrato el servicio?",
    answer: "Online en livendia.com: pago seguro, expediente y gestor asignado. Recomendable antes de entregar señal al comprador.",
  },
  {
    question: "¿Esta página sustituye a vender piso sin agencia Valencia?",
    answer: "Esta es la guía pilar más completa. La landing en /servicios/vender-piso-sin-agencia-Valencia sigue activa como ficha complementaria.",
  },
];

export const PILLAR_VALENCIA_RELATED: readonly PillarRelatedLink[] = [
  {
    href: "/servicios/servicio-completo-venta",
    label: "Servicio completo de venta",
    description: "Ficha nacional del servicio: alcance, precio y checkout.",
    category: "servicio",
  },
  {
    href: "/servicios/servicio-completo-venta-local/valencia",
    label: "Servicio completo de venta en Valencia",
    description: "Landing de conversión local enlazada desde esta guía.",
    category: "local",
  },
  {
    href: "/servicios/contrato-arras-local/valencia",
    label: "Contrato de arras en Valencia",
    description: "Si solo necesitas arras con revisión legal.",
    category: "servicio",
  },
  {
    href: "/servicios/gestion-documental-vendedor/valencia",
    label: "Gestión documental vendedor Valencia",
    description: "Después de arras: documentación hacia escritura.",
    category: "servicio",
  },
  {
    href: "/gestoria/valencia",
    label: "Gestoría inmobiliaria Valencia",
    description: "Todos los servicios Livendia en la capital.",
    category: "local",
  },
  {
    href: "/servicios/vender-piso-sin-agencia-valencia",
    label: "Vender piso sin agencia Valencia",
    description: "Ficha complementaria de venta sin agencia.",
    category: "guia",
  },
  {
    href: VENDER_PISO_SIN_INMOBILIARIA_BASE,
    label: "Vender sin inmobiliaria (España)",
    description: "Hub nacional de guías por ciudad.",
    category: "guia",
  },
  {
    href: "/vender-piso-sin-inmobiliaria/madrid",
    label: "Vender sin comisiones en Madrid",
    description: "Guía pilar equivalente en Madrid.",
    category: "guia",
  },
  {
    href: "/vender-piso-sin-inmobiliaria/barcelona",
    label: "Vender sin comisiones en Barcelona",
    description: "Guía pilar equivalente en Cataluña.",
    category: "guia",
  },
  {
    href: "/servicios/servicio-completo-compra-local/valencia",
    label: "Comprar piso entre particulares en Valencia",
    description: "Para propietarios que venden y compran en cadena.",
    category: "local",
  },
];

export const PILLAR_VALENCIA_NEIGHBORHOODS = [
  "Ciutat Vella",
  "El Carmen",
  "Ruzafa",
  "Benimaclet",
  "Campanar",
  "Malvarrosa",
  "Algirós",
  "Patraix",
  "Benicalap",
  "La Safranar",
  "Mislata",
  "Burjassot",
  "Torrent",
  "Paterna",
  "Alboraya",
  "Sagunto",
  "Gandía",
  "Castellón de la Plana",
] as const;
