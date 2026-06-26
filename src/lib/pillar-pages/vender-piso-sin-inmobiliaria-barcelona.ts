/**
 * Contenido pilar editorial — /vender-piso-sin-inmobiliaria/barcelona
 * Guía de referencia (~4.000 palabras) orientada a intención de búsqueda P2P.
 */

import { SERVICIO_COMPLETO_CV_PRICE_EUR, SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { VENDER_PISO_SIN_INMOBILIARIA_BASE } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";

export const PILLAR_BARCELONA_PATH = `${VENDER_PISO_SIN_INMOBILIARIA_BASE}/barcelona`;

export const PILLAR_BARCELONA_META = {
  title: "Vender piso sin comisiones en Barcelona | Entre particulares con gestor legal | Livendia",
  description:
    "Guía completa para vender tu piso en Barcelona sin inmobiliaria ni comisiones del 3-5 %. Proceso entre particulares, documentación, riesgos, ahorro real y acompañamiento jurídico Livendia por 890 € IVA incl.",
  keywords: [
    "vender piso sin inmobiliaria barcelona",
    "vender piso sin comisiones barcelona",
    "vender vivienda entre particulares barcelona",
    "vender piso directamente a un particular barcelona",
    "ahorrar comisión inmobiliaria barcelona",
    "vender casa sin agencia barcelona",
    "vender piso sin agencia barcelona",
    "venta entre particulares barcelona",
    "vender piso de particular a particular barcelona",
    "trámites vender piso particular barcelona",
  ],
} as const;

export type PillarSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type PillarProcessStep = {
  phase: string;
  title: string;
  duration: string;
  body: string;
  livendiaRole: string;
};

export type PillarDocument = {
  name: string;
  whoProvides: string;
  whyItMatters: string;
};

export type PillarRisk = {
  risk: string;
  alone: string;
  withLivendia: string;
};

export type PillarCaseStudy = {
  title: string;
  scenario: string;
  challenge: string;
  outcome: string;
  savings: string;
};

export type PillarFaq = { question: string; answer: string };

export type PillarRelatedLink = {
  href: string;
  label: string;
  description: string;
  category: "servicio" | "local" | "guia";
};

export const PILLAR_BARCELONA_TOC = [
  { id: "por-que-vender-sin-inmobiliaria", label: "Por qué vender sin inmobiliaria" },
  { id: "que-es-venta-entre-particulares", label: "Venta entre particulares" },
  { id: "que-hace-livendia", label: "Qué hace y qué no hace Livendia" },
  { id: "proceso-completo", label: "Proceso completo de venta" },
  { id: "documentacion", label: "Documentación necesaria" },
  { id: "riesgos", label: "Riesgos y cómo evitarlos" },
  { id: "comparativa", label: "Agencia, solo o Livendia" },
  { id: "ahorro-comisiones", label: "Cuánto ahorras en comisiones" },
  { id: "financiacion-comprador", label: "Si el comprador pide hipoteca" },
  { id: "barcelona-mercado", label: "Vender en Barcelona" },
  { id: "casos-ejemplo", label: "Ejemplos reales de ahorro" },
  { id: "errores-frecuentes", label: "Errores que cuestan dinero" },
  { id: "livendia-vs-otros", label: "Livendia vs otras opciones" },
  { id: "servicios-relacionados", label: "Servicios relacionados" },
  { id: "preguntas-frecuentes", label: "Preguntas frecuentes" },
] as const;

export const PILLAR_BARCELONA_SECTIONS: readonly PillarSection[] = [
  {
    id: "por-que-vender-sin-inmobiliaria",
    title: "Por qué cada vez más propietarios en Barcelona venden sin inmobiliaria",
    paragraphs: [
      "Vender un piso en Barcelona sin inmobiliaria no es un atajo ni una rareza: es una decisión económica y de control que cada año adoptan miles de propietarios en Cataluña. La razón principal es sencilla de entender con una calculadora: en un mercado donde el precio medio de una vivienda en la capital catalana supera con frecuencia los 400.000 €, una comisión del 3 % más IVA supone más de 14.500 €, y al 5 % se acerca a los 24.200 €. Esa cantidad no se paga por la escritura ni por el notario; se paga por intermediar, por colgar un anuncio y por coordinar visitas.",
      "Sin embargo, el perfil del vendedor barcelonés ha cambiado. Muchos propietarios ya no necesitan que nadie «traiga» al comprador: encuentran interesados en Idealista o Fotocasa, por recomendación de un vecino, entre compañeros de trabajo o dentro del círculo familiar. En esos casos, pagar un porcentaje sobre el precio de venta equivale a financiar un servicio de captación que no han utilizado. La venta entre particulares —vender tu casa sin agencia, directamente a otro particular— es legal, habitual y, si se hace con criterio, tan segura como con intermediario.",
      "El reto no está en prescindir de la agencia, sino en no prescindir de la seguridad jurídica. Vender piso sin comisiones ahorra dinero; vender sin asesoramiento cuando el comprador pide financiación, cuando hay hipoteca pendiente o cuando la comunidad tiene derrama abierta puede costar meses de retraso o miles de euros en correcciones. Por eso crece la demanda de un tercer camino: mantener el ahorro de la venta directa y sumar un gestor legal que redacte contratos, revise cargas y coordine la operación hasta notaría.",
      "En Barcelona, además, el comprador suele llegar con preaprobación bancaria o con intención de solicitar hipoteca en entidades que exigen arras formalizadas y documentación impecable de la comunidad. El vendedor que vende sin agencia pero con orden documental cierra en plazos similares a una operación intermediada; el que improvisa descubre que «entre particulares» no significa «entre amigos sin papeles».",
      "Esta guía está pensada para ti si ya tienes comprador o estás en proceso de encontrarlo por tu cuenta y quieres ahorrar la comisión inmobiliaria sin asumir riesgos innecesarios. Aquí encontrarás el proceso completo, la documentación exigida en Barcelona, los errores más caros y cómo encaja Livendia en una operación entre particulares.",
    ],
  },
  {
    id: "que-es-venta-entre-particulares",
    title: "Qué significa vender vivienda entre particulares (y qué no implica)",
    paragraphs: [
      "Vender vivienda entre particulares significa que el propietario —tú— y el comprador son personas físicas (o, en algunos casos, personas jurídicas no dedicadas a la intermediación) que acuerdan la compraventa sin que una agencia inmobiliaria actúe como mandataria de la venta. No existe una definición legal distinta de «compraventa entre particulares»: la operación se rige por el Código Civil y la normativa tributaria y registral como cualquier otra transmisión de inmuebles.",
      "Vender piso directamente a un particular no significa saltarse la notaría, el Registro de la Propiedad ni los impuestos. La escritura pública sigue siendo el instrumento que garantiza la inscripción y la protección frente a terceros. Tampoco implica que deba ser un trato informal: al contrario, cuanto más claro quede por escrito en la fase privada (reserva, arras, condiciones suspensivas), menos fricción habrá ante el notario y el banco del comprador.",
      "En la práctica barcelonesa, la venta sin agencia suele combinar tres piezas: (1) captación del comprador por el propietario, (2) negociación directa del precio y calendario, y (3) acompañamiento jurídico-documental profesional en la parte que genera conflictos —contratos, nota simple, certificados de la comunidad, coordinación con entidades financieras—. Livendia ocupa exclusivamente esta tercera pieza.",
      "Confundir «sin inmobiliaria» con «sin profesionales» es el error más repetido. Puedes vender casa sin agencia y, al mismo tiempo, contratar a un gestor inmobiliario o abogado que defienda tus intereses en los contratos privados. Eso no convierte la operación en una venta «con agencia»; sigue siendo una venta entre particulares con apoyo legal puntual.",
    ],
  },
  {
    id: "que-hace-livendia",
    title: "Qué hace Livendia cuando vendes sin inmobiliaria — y qué no hace",
    paragraphs: [
      "Livendia es una gestoría inmobiliaria digital especializada en compraventa entre particulares. Nuestro servicio completo de venta cubre el tramo que va desde que tienes un comprador interesado hasta la firma de la escritura en notaría, por una tarifa plana de 890 € IVA incluido. No cobramos comisión sobre el precio de venta ni exigimos exclusiva.",
      "Lo que hacemos: asignarte un gestor legal experto dedicado a tu expediente; revisar la nota simple registral y advertirte de cargas, hipotecas o anotaciones; redactar contrato de reserva y contrato de arras adaptados a tu operación; orientarte sobre certificados de la comunidad de propietarios, eficiencia energética y documentación urbanística; coordinar el calendario hacia la escritura; revisar que lo pactado en privado se refleja en el borrador notarial; acompañarte por WhatsApp y teléfono durante todo el proceso; y centralizar la documentación en tu área de cliente online.",
      "Lo que no hacemos —y es importante que lo sepas antes de contratar—: no publicamos tu piso en portales inmobiliarios; no hacemos fotografías profesionales ni home staging; no organizamos visitas ni filtramos curiosos; no negociamos el precio en tu nombre con el comprador; no somos una inmobiliaria «sin comisiones» al estilo Housfy o Properfy, que captan comprador y gestionan la comercialización. Si necesitas que alguien traiga compradores, una agencia tradicional o los portales siguen siendo tu canal. Si ya tienes comprador y quieres ahorrar comisión inmobiliaria, Livendia es el complemento jurídico que muchos propietarios echaban en falta.",
      "En resumen: Livendia no sustituye tu trabajo de vendedor en la captación; sustituye la parte legal que muchas agencias cobran como si hubieran traído al comprador, cuando en realidad solo redactan un contrato estándar. Vender piso sin comisiones con Livendia significa pagar gestoría profesional, no porcentaje de agencia.",
    ],
  },
];

export const PILLAR_BARCELONA_PROCESS: readonly PillarProcessStep[] = [
  {
    phase: "Fase 1",
    title: "Preparar la vivienda y el precio",
    duration: "1–4 semanas",
    body: "Antes de enseñar el piso o aceptar una oferta, conviene acotar un precio realista según comparables en tu barrio (Eixample, Gràcia, Sant Martí, etc.), estado de la vivienda y situación registral. Reúne el certificado de eficiencia energética —obligatorio para anunciar— y una copia de la escritura. Si hay inquilino, revisa el contrato de arrendamiento y los plazos de desalojo o subrogación.",
    livendiaRole:
      "En esta fase Livendia puede orientarte si ya tienes comprador y quieres validar que el precio y el calendario son coherentes antes de firmar nada vinculante.",
  },
  {
    phase: "Fase 2",
    title: "Captar comprador por tu cuenta",
    duration: "Variable",
    body: "Publicas en Idealista, Fotocasa, en redes o cierras con alguien de tu entorno. Filtras solvencia: preguntas por financiación, entrega de señal y plazos. En Barcelona es habitual que el comprador pida visita con acompañante técnico o arquitecto; no es obligatorio aceptar condiciones abusivas en la primera visita.",
    livendiaRole:
      "Livendia no participa en la captación. Te recomendamos no firmar reservas ni entregar señal sin revisar el borrador con un profesional.",
  },
  {
    phase: "Fase 3",
    title: "Reserva y señal (opcional pero frecuente)",
    duration: "1–2 semanas",
    body: "Muchas operaciones entre particulares en Barcelona arrancan con un contrato de reserva o señal: fija precio, plazo para arras, condiciones de devolución si falla la financiación del comprador y penalizaciones por desistimiento. Un documento mal redactado aquí genera conflictos antes de llegar a arras.",
    livendiaRole: "Redacción del contrato de reserva adaptado a vuestra operación y revisión de cláusulas que te protegen como vendedor.",
  },
  {
    phase: "Fase 4",
    title: "Contrato de arras",
    duration: "2–6 semanas",
    body: "Las arras penitenciales o confirmatorias vinculan a las partes y fijan el calendario hacia escritura. Deben reflejar el precio, el plazo, quién paga qué gastos, qué pasa si el comprador no obtiene hipoteca (cláusula suspensiva) y el estado de la vivienda a la entrega. En Barcelona, con operaciones con banco involucrado, el comprador suele necesitar arras firmadas para iniciar el expediente hipotecario.",
    livendiaRole:
      "Redacción de arras a medida, verificación de coherencia con la nota simple y coordinación con la gestoría del comprador si la hay.",
  },
  {
    phase: "Fase 5",
    title: "Reunir documentación para el comprador y el banco",
    duration: "2–8 semanas",
    body: "El comprador y su entidad financiera pedirán certificado de estar al corriente en la comunidad, últimos recibos de IBI, copia de estatutos si aplica, cédula de habitabilidad según normativa catalana, nota simple actualizada y, en edificios con cierta antigüedad, certificados de instalaciones o ITE. Cualquier laguna retrasa la tasación y la aprobación del préstamo.",
    livendiaRole:
      "Checklist personalizado, solicitud y revisión de documentos, y seguimiento hasta que el expediente está completo para notaría.",
  },
  {
    phase: "Fase 6",
    title: "Cancelación de hipoteca o subrogación (si procede)",
    duration: "2–4 semanas",
    body: "Si vendes con hipoteca pendiente, hay que coordinar con tu banco la provisión de fondos o la subrogación del comprador. En operaciones entre particulares en Barcelona esto es rutinario pero delicado en plazos: el banco no siempre se mueve al ritmo de las partes.",
    livendiaRole:
      "Orientación sobre calendario y coherencia entre lo pactado en arras y las condiciones que impone la entidad financiera.",
  },
  {
    phase: "Fase 7",
    title: "Plusvalía municipal e impuestos del vendedor",
    duration: "En paralelo",
    body: "El vendedor puede estar sujeto al impuesto sobre el incremento de valor de los terrenos (plusvalía municipal), al IRPF por la ganancia patrimonial y a otros gastos locales. El comprador, por su parte, asume ITP en segunda mano. Cada ayuntamiento del área metropolitana aplica sus normas; Barcelona capital tiene sus propios plazos y bonificaciones que conviene conocer.",
    livendiaRole:
      "Te orientamos sobre qué gastos son tuyos, plazos orientativos y documentación fiscal; la liquidación definitiva corresponde a gestoría fiscal o al propio vendedor.",
  },
  {
    phase: "Fase 8",
    title: "Escritura pública en notaría",
    duration: "1 día (+ cita previa)",
    body: "La compraventa se perfecciona ante notario. El borrador debe coincidir con lo pactado en arras: precio, cargas, estado de ocupación, mobiliario incluido, fecha de entrega de llaves. Tras la firma, se presenta en el Registro de la Propiedad para inscripción.",
    livendiaRole:
      "Revisión del borrador notarial, asistencia en la resolución de discrepancias de última hora y verificación de que no se introducen cláusulas que perjudiquen lo acordado.",
  },
];

export const PILLAR_BARCELONA_DOCUMENTS: readonly PillarDocument[] = [
  {
    name: "Certificado de eficiencia energética (CEE)",
    whoProvides: "Técnico certificador autorizado",
    whyItMatters:
      "Obligatorio para publicar y vender. Sin él, el comprador y el banco pueden paralizar la operación. En Barcelona capital es una de las primeras causas de retraso en ventas entre particulares.",
  },
  {
    name: "Nota simple registral actualizada",
    whoProvides: "Registro de la Propiedad",
    whyItMatters:
      "Acredita titularidad, hipotecas, embargos y cargas. Livendia la revisa para que no firmes arras sobre un estado registral distinto al que declaraste al comprador.",
  },
  {
    name: "Escritura de propiedad y referencia catastral",
    whoProvides: "Propietario",
    whyItMatters: "Base para identificar el inmueble en contratos y en notaría. Cualquier discrepancia con la realidad física debe resolverse antes de la escritura.",
  },
  {
    name: "Certificado de estar al corriente de pagos (comunidad)",
    whoProvides: "Administrador de fincas / comunidad",
    whyItMatters:
      "El comprador y el banco exigen saber que no hay deudas ni derramas impagadas. En edificios con obras aprobadas en Barcelona, esto es crítico.",
  },
  {
    name: "Último recibo del IBI",
    whoProvides: "Ayuntamiento / propietario",
    whyItMatters: "Prueba que el impuesto municipal está al día. Se prorratea habitualmente en la escritura.",
  },
  {
    name: "Cédula de habitabilidad",
    whoProvides: "Técnico habilitado (según normativa catalana)",
    whyItMatters:
      "Requisito en Cataluña para la transmisión. Su ausencia puede impedir la inscripción o generar responsabilidad del vendedor.",
  },
  {
    name: "Contrato de arras y, en su caso, de reserva",
    whoProvides: "Redacción profesional — Livendia",
    whyItMatters:
      "Documentos privados que fijan precio, plazos y consecuencias del desistimiento. Son el núcleo de la seguridad jurídica entre particulares.",
  },
  {
    name: "Certificados de instalaciones / ITE (si aplica)",
    whoProvides: "Según edificio y normativa",
    whyItMatters:
      "En edificios antiguos de Barcelona o con reformas relevantes, el comprador o la comunidad pueden exigirlos antes de cerrar.",
  },
];

export const PILLAR_BARCELONA_RISKS: readonly PillarRisk[] = [
  {
    risk: "Contrato de arras copiado de internet",
    alone: "Cláusulas genéricas, plazos irreales o arras que no protegen al vendedor si el comprador falla.",
    withLivendia: "Redacción a medida con cláusulas penitenciales o confirmatorias según convenga a tu caso.",
  },
  {
    risk: "Cargas ocultas (hipoteca, embargo, anotación)",
    alone: "Descubiertas tarde por el comprador o el banco; operación paralizada o pleito.",
    withLivendia: "Revisión registral previa y transparencia documentada antes de comprometer el inmueble.",
  },
  {
    risk: "Comprador sin financiación aprobada",
    alone: "Meses perdidos si no hay cláusula suspensiva clara y calendario realista.",
    withLivendia: "Arras con condiciones suspensivas bien redactadas y seguimiento del calendario.",
  },
  {
    risk: "Derrama o deuda de comunidad",
    alone: "El banco puede denegar el préstamo; el comprador exige rebaja de precio.",
    withLivendia: "Checklist con administrador y certificados antes de fijar precio definitivo.",
  },
  {
    risk: "Doble venta o incoherencia notarial",
    alone: "Borrador de escritura distinto a lo pactado en privado; conflictos el día de la firma.",
    withLivendia: "Revisión del borrador y alineación entre contratos privados y escritura pública.",
  },
];

export const PILLAR_BARCELONA_COMPARE_ROWS = [
  { aspect: "Coste en piso de 400.000 €", agency: "14.520–24.200 € (3–5 % + IVA)", alone: "0 € de gestoría", livendia: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.` },
  { aspect: "Publica anuncio y trae visitas", agency: "Sí", alone: "Tú (Idealista, etc.)", livendia: "No" },
  { aspect: "Contratos redactados por profesional", agency: "Variable", alone: "Riesgo con plantillas", livendia: "Sí — gestor dedicado" },
  { aspect: "Comisión sobre precio de venta", agency: "Sí (habitual)", alone: "No", livendia: "No" },
  { aspect: "Exclusiva de venta", agency: "Suele exigirse", alone: "No", livendia: "No" },
  { aspect: "Revisión nota simple y cargas", agency: "A veces", alone: "Tu responsabilidad", livendia: "Incluida" },
  { aspect: "Coordinación hasta notaría", agency: "Sí", alone: "Tu responsabilidad", livendia: "Sí" },
  { aspect: "Panel online y gestor directo", agency: "Depende", alone: "No", livendia: "Sí" },
] as const;

export const PILLAR_BARCELONA_SAVINGS_ROWS = [
  { price: 280_000, agency3: 10_164, agency5: 16_940, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 350_000, agency3: 12_705, agency5: 21_175, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 400_000, agency3: 14_520, agency5: 24_200, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 480_000, agency3: 17_424, agency5: 29_040, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 550_000, agency3: 19_965, agency5: 33_275, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
  { price: 650_000, agency3: 23_595, agency5: 39_325, livendia: SERVICIO_COMPLETO_CV_PRICE_EUR },
] as const;

export const PILLAR_BARCELONA_CASE_STUDIES: readonly PillarCaseStudy[] = [
  {
    title: "Piso en Eixample vendido a compañero de trabajo",
    scenario:
      "Propietario con piso de 85 m² en Eixample Esquerre. Comprador identificado en su empresa. Precio acordado: 420.000 €.",
    challenge:
      "El comprador necesitaba hipoteca y el banco exigía arras con cláusula suspensiva y certificado de comunidad sin derramas pendientes. El vendedor casi firmó una plantilla de arras sin plazo de financiación.",
    outcome:
      "Con Livendia se redactaron arras con suspensión a 60 días, se ordenó la documentación de la comunidad y se alineó el calendario con la entidad financiera. Escritura en 11 semanas desde la reserva.",
    savings: "Frente a una agencia al 3 % + IVA: ahorro de 13.630 € (comisión 12.705 € menos 890 € de Livendia).",
  },
  {
    title: "Ático en Gràcia entre vecinos del edificio",
    scenario:
      "Vivienda de 72 m² en Gràcia. Compradora del tercer piso del mismo edificio. Precio: 385.000 €. Sin intermediarios.",
    challenge:
      "La comunidad tenía una derrama aprobada para ascensor. Había que reflejar en contrato quién asume qué parte y evitar sorpresas en la tasación del banco.",
    outcome:
      "El gestor Livendia incorporó la situación de la derrama en las arras, coordinó certificado actualizado del administrador y revisó el borrador notarial. Venta cerrada sin rebaja de precio.",
    savings: "Frente al 5 % + IVA de una agencia: ahorro de 20.285 €.",
  },
  {
    title: "Piso en Sant Martí con hipoteca pendiente del vendedor",
    scenario:
      "Propietario en el Poblenou vende a 310.000 € a un particular con financiación. Hipoteca pendiente de 120.000 €.",
    challenge:
      "Coordinar cancelación registral, provisión de fondos del banco del vendedor y plazos del comprador sin que las arras queden desalineadas con la realidad financiera.",
    outcome:
      "Livendia alineó calendario de arras con la fecha de cancelación, revisó nota simple actualizada en dos momentos del proceso y acompañó hasta escritura con subrogación.",
    savings: "Frente al 3 % + IVA: ahorro de 10.375 €. El coste de cancelación hipotecaria fue independiente y previsto desde el inicio.",
  },
];

export const PILLAR_BARCELONA_BARCELONA_EXTRA: readonly PillarSection[] = [
  {
    id: "financiacion-comprador",
    title: "Si el comprador necesita hipoteca: qué debe saber el vendedor sin agencia",
    paragraphs: [
      "La mayoría de compradores particulares en Barcelona financian parte del precio con un préstamo hipotecario. Para el vendedor que ha decidido ahorrar comisión inmobiliaria, esto significa que la operación ya no es solo un trato entre dos personas: entra en juego el departamento de riesgos de un banco, un tasador y una gestoría hipotecaria que pedirá documentación en plazos estrictos.",
      "El banco del comprador solicitará copia de las arras firmadas, certificado de estar al corriente en la comunidad, nota simple reciente, cédula de habitabilidad y, en muchos edificios del Eixample o del Ensanche, certificados de instalaciones o actas que acrediten que no hay litigios vecinales relevantes. Si el vendedor entregó señal sin haber reunido estos papeles, el comprador puede usar el retraso bancario para renegociar precio o condiciones.",
      "Las cláusulas suspensivas en el contrato de arras son la herramienta que protege a ambas partes cuando hay financiación de por medio: el comprador se compromete a solicitar hipoteca en un plazo determinado; si no la obtiene, se establece qué ocurre con la señal entregada. Redactar mal esta cláusula —o omitirla— es la causa más frecuente de disputas en ventas entre particulares en Barcelona.",
      "Livendia alinea el calendario contractual con los plazos realistas de aprobación hipotecaria (suele oscilar entre cuatro y diez semanas desde arras, según entidad y tasación) y revisa que la documentación que el banco va a pedir esté encargada o disponible antes de que el comprador presente el expediente. Así el vendedor no pierde tiempo ni poder de negociación por causas evitables.",
      "Si el comprador paga al contado, el calendario se acorta, pero la revisión registral y los certificados de comunidad siguen siendo imprescindibles. Vender piso directamente a un particular al contado no elimina la necesidad de escritura pública ni de comprobar que el inmueble se puede transmitir libre de cargas.",
    ],
  },
  {
    id: "barcelona-mercado",
    title: "Particularidades de vender en Barcelona y área metropolitana",
    paragraphs: [
      "Barcelona no es un mercado homogéneo. Vender piso sin inmobiliaria en Eixample, Gràcia, Sarrià-Sant Gervasi o Sant Martí implica compradores con perfiles distintos —familias que buscan plaza de colegio, inversores, compradores con hipoteca joven— y tiempos de cierre variables. Conocer tu microzona ayuda a fijar precio y a anticipar qué documentación pedirá el banco del comprador.",
      "En el área metropolitana —L'Hospitalet, Badalona, Santa Coloma, Cornellà— los precios son más bajos pero el proceso legal es idéntico: arras, comunidad, cédula de habitabilidad catalana, ITP del comprador y plusvalía municipal del vendedor. Livendia aplica el mismo protocolo y la misma tarifa plana en toda la demarcación.",
      "La Generalitat y el Ayuntamiento de Barcelona han ido ajustando requisitos de habitabilidad, alquiler turístico y eficiencia energética. Si tu piso tuvo uso turístico, reforma sin licencia o cambio de uso, conviene resolverlo antes de comprometer el inmueble con arras. Un gestor que conoce el marco catalán evita que estos temas salten en la due diligence del comprador.",
      "El mercado de segunda mano en distritos como Poblenou o la Sagrera ha atraído compradores jóvenes con financiación; en zonas como Pedralbes o Sant Gervasi, operaciones entre particulares con herencias compartidas son frecuentes. En ambos casos, la venta sin agencia funciona si los herederos o copropietarios están alineados y la documentación registral está unificada antes de anunciar precio.",
      "Si vendes para comprar otro piso en Barcelona, el calendario encadenado (venta + compra) requiere arras bien redactadas en ambas patas. Livendia puede coordinar la venta; para la compra existe el servicio completo de compra con la misma filosofía: pagas gestoría, no comisión sobre el precio del inmueble.",
    ],
  },
  {
    id: "errores-frecuentes",
    title: "Errores frecuentes al vender sin agencia (y cómo evitarlos)",
    paragraphs: [
      "Primer error: confundir interés con solvencia. En un mercado caliente de Barcelona no faltan visitas; faltan compradores que realmente obtengan hipoteca. Filtra antes de reservar el piso y exige prueba de fondos o preaprobación bancaria cuando sea razonable.",
      "Segundo error: entregar señal en mano sin contrato claro. Los pagos en efectivo por encima de los límites legales y los justificantes vagos generan problemas con Hacienda y con el comprador. Todo por transferencia trazable y con texto que diga qué pasa si alguien se echa atrás.",
      "Tercer error: fijar precio sin mirar la comunidad. Una derrama de 15.000 € repartida en diez años cambia la ecuación para el comprador financiado. Pide certificado actualizado antes de cerrar precio.",
      "Cuarto error: pensar que «entre conocidos no hace falta contrato». Las operaciones entre familiares y vecinos son las que más acaban en conflicto porque se saltan formalidades. Las arras no ofenden; protegen la relación.",
      "Quinto error: comparar solo el precio de la agencia con «gratis» vender solo. El coste real de un retraso de tres meses, una rebaja forzada del 5 % o un mes de doble hipoteca suele superar con creces los 890 € de un acompañamiento profesional.",
      "Sexto error: anunciar en portales con datos registrales desactualizados. Si en la nota simple aparece una carga que no mencionaste, el comprador puede desistir o exigir descuento. Pide nota simple antes de fijar precio público.",
      "Séptimo error: no reservar cita notarial con antelación. En temporada alta en Barcelona, las agendas de notarías céntricas se llenan. Coordina la fecha de escritura en las arras con margen realista.",
    ],
  },
  {
    id: "livendia-vs-otros",
    title: "Livendia frente a inmobiliarias sin comisiones y a la gestoría tradicional",
    paragraphs: [
      "Las inmobiliarias de tarifa plana o «sin comisiones» (Housfy, Properfy y otras) compiten en captación: fotos, portales, visitas, negociación. Su honorario fijo cubre marketing y cierre comercial. Si ya tienes comprador, estás pagando —directa o indirectamente— por servicios que no necesitas. Livendia parte de un supuesto distinto: tú traes al comprador; nosotros blindamos la operación.",
      "Una gestoría de barrio tradicional puede redactar contratos y llevar documentación, pero rara vez está especializada en compraventa entre particulares con panel online, precio publicado y gestor dedicado por expediente. Livendia combina precio cerrado nacional, experiencia en operaciones P2P y seguimiento digital —útil si vives fuera de Barcelona o trabajas horario intenso.",
      "Vender piso sin comisiones no es sinónimo de vender sin coste. Notaría, registro, plusvalía, certificados y posible cancelación hipotecaria tienen importe propio. La comisión de agencia es el gasto que más sentido pierde cuando la captación la hiciste tú. Ahí es donde el ahorro de miles de euros es real y medible.",
    ],
  },
];

export const PILLAR_BARCELONA_FAQ: readonly PillarFaq[] = [
  {
    question: "¿Es legal vender mi piso en Barcelona sin inmobiliaria?",
    answer:
      "Sí. En España no existe obligación de contratar agencia para vender una vivienda. Puedes vender directamente a un particular siempre que cumplas la normativa, dispongas de la documentación exigida y formalices la compraventa ante notario.",
  },
  {
    question: "¿Qué diferencia hay entre vender sin inmobiliaria y vender sin comisiones?",
    answer:
      "En la práctica suelen ser lo mismo: no pagas el porcentaje del 3–5 % sobre el precio de venta. «Sin comisiones» enfatiza el ahorro económico; «sin inmobiliaria» enfatiza que no hay intermediario comercial. Livendia encaja cuando ya tienes comprador y quieres ambas cosas: ahorro y seguridad jurídica.",
  },
  {
    question: "¿Livendia publica mi piso en Idealista o Fotocasa?",
    answer:
      "No. No somos portal ni agencia de marketing. Si necesitas visibilidad de anuncio, debes publicar tú o contratar una agencia. Livendia entra cuando ya hay comprador o negociación avanzada y necesitas contratos y trámites.",
  },
  {
    question: "¿Cuánto cuesta vender con Livendia frente a una agencia en Barcelona?",
    answer: `El servicio completo de venta cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, precio fijo. En un piso de 400.000 €, una agencia al 3 % + IVA cobra unos 14.520 €; al 5 %, unos 24.200 €. El ahorro neto supera con creces los 13.000 € en la mayoría de operaciones barcelonesas.`,
  },
  {
    question: "¿Puedo vender entre particulares si tengo hipoteca?",
    answer:
      "Sí, es habitual. Hay que coordinar cancelación o subrogación con tu banco y reflejar plazos realistas en las arras. Livendia revisa la nota simple y alinea el calendario contractual con la entidad financiera.",
  },
  {
    question: "¿Qué documentos necesita el comprador para la hipoteca?",
    answer:
      "Suele pedir nota simple, certificado de comunidad, CEE, IBI, escritura, arras firmadas y, en Cataluña, cédula de habitabilidad. Cada banco añade requisitos. Livendia mantiene un checklist y te avisa de lo que falta antes de que el comprador lo reclame con urgencia.",
  },
  {
    question: "¿Las arras penitenciales o confirmatorias? ¿Cuál conviene al vendedor?",
    answer:
      "Depende del calendario, la financiación del comprador y el riesgo de desistimiento. Las penitenciales permiten romper con pérdida o entrega de señal según lo pactado; las confirmatorias vinculan más a las partes hacia escritura. Un gestor Livendia recomienda la fórmula según tu caso —no vendemos plantillas únicas.",
  },
  {
    question: "¿Puedo contratar solo el contrato de arras sin el servicio completo?",
    answer:
      "Sí. Si solo necesitas arras en Barcelona, existe el servicio de contrato de arras local. Si ya firmaste arras y necesitas documentación hacia escritura, está la gestión documental vendedor. El servicio completo de venta es la opción más habitual cuando quieres un único interlocutor de la reserva a notaría.",
  },
  {
    question: "¿Livendia me representa ante el comprador en la negociación?",
    answer:
      "No negociamos precio ni condiciones comerciales en tu nombre. Te asesoramos sobre aspectos legales y documentales de lo que acuerdes. La negociación económica sigue siendo tuya —como en cualquier venta entre particulares.",
  },
  {
    question: "¿Cuánto tarda una venta entre particulares en Barcelona?",
    answer:
      "Desde unas pocas semanas (comprador al contado, documentación lista) hasta tres o cuatro meses si hay hipoteca de ambas partes, derramas o tasaciones bancarias lentas. Un calendario mal pactado en arras es la principal causa de retrasos evitables.",
  },
  {
    question: "¿Qué pasa con la plusvalía municipal si vendo sin agencia?",
    answer:
      "La obligación tributaria del vendedor es la misma haya o no agencia. El ayuntamiento correspondiente liquida el incremento de valor del suelo según su normativa. Livendia te orienta sobre plazos; la liquidación puede hacerla tu asesor fiscal.",
  },
  {
    question: "¿Sirve esta guía si vendo en L'Hospitalet o Badalona?",
    answer:
      "Sí. El marco legal de la compraventa es estatal; la cédula de habitabilidad y aspectos urbanísticos siguen la normativa catalana. Livendia cubre Barcelona capital y área metropolitana con el mismo servicio y tarifa.",
  },
  {
    question: "¿Cómo contrato el servicio?",
    answer:
      "Online en livendia.com: pago seguro, alta de expediente y asignación de gestor. Puedes empezar aunque aún no hayas firmado reserva; es recomendable hacerlo antes de entregar señal al comprador.",
  },
  {
    question: "¿Esta página sustituye a la de «vender piso sin agencia Barcelona»?",
    answer:
      "Esta es la guía pilar más completa sobre venta sin inmobiliaria en la ciudad. La landing en /servicios/vender-piso-sin-agencia-barcelona sigue activa como ficha de servicio; ambas enlazan entre sí y al servicio completo de venta.",
  },
];

export const PILLAR_BARCELONA_RELATED: readonly PillarRelatedLink[] = [
  {
    href: "/servicios/servicio-completo-venta",
    label: "Servicio completo de venta",
    description: "Ficha nacional del servicio que contratas: alcance, precio y checkout.",
    category: "servicio",
  },
  {
    href: "/servicios/servicio-completo-venta-local/barcelona",
    label: "Servicio completo de venta en Barcelona",
    description: "Landing de conversión local enlazada desde esta guía.",
    category: "local",
  },
  {
    href: "/servicios/contrato-arras-local/barcelona",
    label: "Contrato de arras en Barcelona",
    description: "Si solo necesitas arras con revisión legal en esta fase.",
    category: "servicio",
  },
  {
    href: "/servicios/gestion-documental-vendedor/barcelona",
    label: "Gestión documental vendedor",
    description: "Para después de arras: documentación hacia escritura.",
    category: "servicio",
  },
  {
    href: "/gestoria/barcelona",
    label: "Gestoría inmobiliaria Barcelona",
    description: "Todos los servicios Livendia disponibles en la ciudad.",
    category: "local",
  },
  {
    href: "/servicios/vender-piso-sin-agencia-barcelona",
    label: "Vender piso sin agencia Barcelona",
    description: "Ficha complementaria de venta sin agencia.",
    category: "guia",
  },
  {
    href: VENDER_PISO_SIN_INMOBILIARIA_BASE,
    label: "Vender sin inmobiliaria (España)",
    description: "Hub nacional desde el que se enlazan futuras guías por ciudad.",
    category: "guia",
  },
  {
    href: "/servicios/servicio-completo-compra-local/barcelona",
    label: "Comprar piso entre particulares en Barcelona",
    description: "Para propietarios que venden y compran en cadena.",
    category: "local",
  },
];

export const PILLAR_BARCELONA_NEIGHBORHOODS = [
  "Eixample",
  "Gràcia",
  "Sants-Montjuïc",
  "Sant Martí",
  "Sarrià-Sant Gervasi",
  "Les Corts",
  "Horta-Guinardó",
  "Nou Barris",
  "Sant Andreu",
  "Ciutat Vella",
  "L'Hospitalet de Llobregat",
  "Badalona",
  "Cornellà de Llobregat",
  "Sant Cugat del Vallès",
] as const;
