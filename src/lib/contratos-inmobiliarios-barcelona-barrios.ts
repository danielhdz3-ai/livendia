import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";
import { localContratoArrasHref } from "@/lib/contrato-arras-local-cities";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";

export const CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIO_BASE =
  `${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}` as const;

export type ContratosInmobiliariosBarrioSlug =
  | "eixample"
  | "gracia"
  | "poblenou"
  | "el-born"
  | "sants-montjuic"
  | "les-corts"
  | "sarria-sant-gervasi"
  | "el-raval"
  | "barceloneta"
  | "vila-olimpica";

export type ContratosInmobiliariosBarrioFaq = {
  question: string;
  answer: string;
};

export type ContratosInmobiliariosBarrioPage = {
  slug: ContratosInmobiliariosBarrioSlug;
  /** Slug en landings locales contrato-alquiler / arras */
  localSlug: string;
  name: string;
  districtLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  localContext: string;
  /** Microzonas o ejes urbanos del barrio (contenido diferenciador SEO). */
  zoneHighlights: readonly string[];
  /** Normativa y actualidad 2026 aplicable al barrio (RDL, SERPAVI, ZMRT). */
  actualidad2026: string;
  servicesFocus: string[];
  /** FAQ específica del barrio; si falta, la landing usa preguntas genéricas. */
  barrioFaq?: readonly ContratosInmobiliariosBarrioFaq[];
  /** Bloques editoriales largos (SEO barrio). */
  editorialSections?: readonly { title: string; body: string }[];
  image: string;
  imageAlt: string;
  contratoAlquilerHref: string;
  contratoArrasHref: string;
};

export const CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS: readonly ContratosInmobiliariosBarrioPage[] = [
  {
    slug: "eixample",
    localSlug: "barcelona-eixample",
    name: "Eixample",
    districtLabel: "Distrito Eixample",
    metaTitle: "Contratos inmobiliarios Eixample Barcelona | Livendia",
    metaDescription:
      "Gestoría de contratos inmobiliarios en el Eixample: LAU, arras, habitación y compraventa entre particulares. Precios fijos, panel online y gestor en Les Corts.",
    keywords: [
      "contratos inmobiliarios eixample",
      "contrato alquiler eixample barcelona",
      "contrato arras eixample",
      "gestoría inmobiliaria eixample particulares",
    ],
    h1: "Contratos inmobiliarios en el Eixample de Barcelona",
    lead:
      "Redactamos y tramitamos contratos inmobiliarios para particulares en l'Eixample: alquiler LAU con inventario, arras penitenciales, habitación en piso compartido, temporada y acompañamiento de compraventa — con adaptación a zona tensionada y CCCat cuando procede.",
    localContext:
      "En Dreta y Esquerra de l'Eixample conviven operaciones de alto ticket, pisos señorials y alquiler por habitación. Revisamos coherencia de renta anterior, fianza INCASÒL, ITE de edificio y cláusulas de arras antes de firmar.",
    zoneHighlights: [
      "Quadrat d'Or y Passeig de Gràcia — compraventa entre particulares y arras de alto importe",
      "Sagrada Família y Sardenya — LAU con edificios en obra y ITE",
      "Entenca y Rocafort — habitación en piso compartido en ZMRT",
      "Consell de Cent y Comte Borrell — oficinas reconvertidas a vivienda",
    ],
    actualidad2026:
      "Barcelona capital está en ZMRT: informe SERPAVI anexo desde el 26/03/2026, topes de renta y, tras la convalidación del RDL 28/2026, cláusulas de prórroga e indemnización alineadas al sistema estatal de referencia. Livendia integra RDL 29/2026 (función social) en arras cuando interviene un comprador profesional.",
    servicesFocus: ["Contrato LAU e inventario", "Arras entre particulares", "Alquiler habitación", "Administración de alquiler"],
    image: getLocalCityCardImage("barcelona-eixample"),
    imageAlt: "Contratos inmobiliarios en el Eixample — Livendia Barcelona",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-eixample"),
    contratoArrasHref: localContratoArrasHref("barcelona-eixample"),
  },
  {
    slug: "gracia",
    localSlug: "barcelona-gracia",
    name: "Gràcia",
    districtLabel: "Distrito Gràcia",
    metaTitle: "Contratos inmobiliarios Gràcia Barcelona 2026 | LAU, habitación, arras y SERPAVI",
    metaDescription:
      "Gestoría de contratos inmobiliarios en Gràcia y Vila de Gràcia: LAU, habitación en piso compartido, arras CCCat, temporada y administración. ZMRT, SERPAVI, RDL 28/29. Precios fijos IVA incl.",
    keywords: [
      "contratos inmobiliarios gràcia",
      "contrato alquiler gracia barcelona",
      "contrato habitación gràcia",
      "gestoría contratos gracia",
      "serpavi gràcia alquiler",
      "contrato arras gracia barcelona",
    ],
    h1: "Contratos inmobiliarios en Gràcia: LAU, habitación y arras entre particulares",
    lead:
      "Gràcia es uno de los barrios con más alquiler de habitación y pisos compartidos de Barcelona — y también donde más se mezclan plantillas genéricas, fianzas en efectivo ilegales y temporadas mal calificadas. Livendia redacta contratos completos (LAU, habitación, temporada, arras) con anexo SERPAVI cuando toca, depósito INCASÒL y cláusulas adaptadas a la ZMRT y a los reales decretos-ley 28/2026 y 29/2026.",
    localContext:
      "En Gran de Gràcia, Travessera de Gràcia, Plaça del Sol o Camp d'en Grassot vemos pisos de planta baja con patio, áticos sin ascensor y coliving de 4–5 habitaciones. Cada modalidad exige inventario distinto, reparto de suministros claro y coherencia entre renta del piso y suma de habitaciones en zona tensionada.",
    zoneHighlights: [
      "Vila de Gràcia — plazas y calles comerciales, alta demanda de habitación",
      "Camp d'En Grassot — pisos medianos con terraza y coliving",
      "Salut y El Coll — acceso a parque Güell, contratos LAU familiares",
      "Penitents y Vallcarca — pendiente y accesibilidad en inventario",
    ],
    actualidad2026:
      "Gràcia está en ZMRT Barcelona: informe SERPAVI anexo desde 26/03/2026, topes en habitación desde 01/01/2026 y prórrogas LAU según RDL 28/2026 (preaviso 6 meses, indemnización con referencia estatal). El RDL 29/2026 refuerza la función social de la vivienda — clave en pisos compartidos y operaciones entre particulares.",
    servicesFocus: ["Alquiler habitación", "Contrato LAU", "Temporada", "Arras compraventa"],
    editorialSections: [
      {
        title: "Por qué en Gràcia no basta un PDF de internet",
        body:
          "En Gràcia el perfil del inquilino rota entre familias en Vila de Gràcia, estudiantes en habitación y teletrabajadores en áticos. Un contrato LAU copiado de otra ciudad no recoge bien el reparto de gastos de comunidad con ascensor antiguo, las normas de terraza compartida o el tope de renta cuando alquilas por habitaciones. Livendia redacta desde cero con checklist ZMRT: renta anterior vs SERPAVI, gran tenedor, avalloguer dentro de topes y cláusulas de actualización conforme a Ley de Vivienda 2023.",
      },
      {
        title: "Habitación en piso compartido: el caso más frecuente en Gràcia",
        body:
          "Muchos propietarios alquilan dos o tres habitaciones en el mismo piso manteniendo LAU en la vivienda completa o contratos de habitación separados. En ZMRT la suma de rentas puede estar limitada respecto al piso entero. Documentamos inventario por habitación, uso de cocina y baño, visitas, limpieza y fianza legal. Si el inquilino es extranjero o viene de otra provincia, el gestor explica depósito INCASÒL y Número de Control — evitando conflictos el primer mes.",
      },
      {
        title: "Arras y compraventa entre particulares en fincas de Gràcia",
        body:
          "En operaciones de compraventa en fincas de principios de siglo, revisamos arras penitenciales al CCCat, cargas registrales, derramas de rehabilitación de fachada en la comunidad y coherencia entre señal y estado real del piso (patio, altillo, legalización de reformas). No somos agencia: honorarios fijos en arras y servicio completo de venta/compra sin comisión sobre el precio del inmueble.",
      },
    ],
    barrioFaq: [
      {
        question: "¿Cuánto cuesta un contrato LAU en Gràcia con Livendia?",
        answer:
          "El contrato LAU está publicado en livendia.com/precios (145 € IVA incl. con inventario). Habitación y temporada tienen tarifas propias; la administración mensual es aparte si quieres delegar cobros e incidencias.",
      },
      {
        question: "¿Necesito SERPAVI para alquilar en Gràcia aunque no sea gran tenedor?",
        answer:
          "En vivienda habitual firmada en Cataluña desde 26/03/2026 el informe suele ser obligatorio como anexo al contrato y al depósito INCASÒL, aunque la renta se calcule por renta anterior. Livendia lo integra en el PDF del contrato.",
      },
    ],
    image: "/images/zonas barcelona/gracia2.jpg",
    imageAlt: "Gestoría de contratos inmobiliarios en Gràcia — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-gracia"),
    contratoArrasHref: localContratoArrasHref("barcelona-gracia"),
  },
  {
    slug: "poblenou",
    localSlug: "barcelona-poblenou",
    name: "Poblenou",
    districtLabel: "Sant Martí · Poblenou",
    metaTitle: "Contratos inmobiliarios Poblenou Barcelona | Livendia",
    metaDescription:
      "Contratos inmobiliarios en Poblenou y 22@: LAU, temporada, arras y habitación. Gestoría Livendia para particulares en Barcelona.",
    keywords: [
      "contratos inmobiliarios poblenou",
      "contrato alquiler poblenou",
      "contrato arras 22 barcelona",
      "gestoría inmobiliaria poblenou",
    ],
    h1: "Contratos inmobiliarios en Poblenou y 22@",
    lead:
      "Poblenou concentra lofts, pisos reconvertidos y alquiler temporal ligado a teletrabajo o estancia profesional. Redactamos LAU, contratos de temporada delimitados, habitación y arras con cláusulas acordes al edificio y al uso real del inmueble.",
    localContext:
      "En la Rambla del Poblenou y el entorno 22@ es habitual mezclar contratos de temporada con operaciones de compraventa entre particulares. Evitamos borradores genéricos que no describen terrazas, parking o instalaciones comunitarias.",
    zoneHighlights: [
      "22@ y Glòries — lofts, teletrabajo y temporada acreditada",
      "Rambla del Poblenou — LAU en plantas bajas con local comercial",
      "Diagonal Mar y Bogatell — vivienda unifamiliar en serie y parking anexo",
      "La Verneda — rotación de inquilinos y administración de alquiler",
    ],
    actualidad2026:
      "Temporada y habitual conviven en Sant Martí: desde 2026 los topes ZMRT también afectan a modalidades no habituales mal calificadas. Documentamos causa de temporada (Decreto 147/1997) y SERPAVI cuando el contrato es LAU en Cataluña.",
    servicesFocus: ["Temporada y LAU", "Arras penitenciales", "Compraventa acompañada", "Habitación"],
    image: getLocalCityCardImage("barcelona-poblenou"),
    imageAlt: "Contratos inmobiliarios Poblenou Barcelona — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-poblenou"),
    contratoArrasHref: localContratoArrasHref("barcelona-poblenou"),
  },
  {
    slug: "el-born",
    localSlug: "barcelona-born",
    name: "El Born",
    districtLabel: "Ciutat Vella · El Born",
    metaTitle: "Contratos inmobiliarios El Born Barcelona | Livendia",
    metaDescription:
      "Gestoría de contratos inmobiliarios en El Born: arras, alquiler LAU, habitación y temporada. Particulares en Barcelona con gestor Livendia.",
    keywords: [
      "contratos inmobiliarios el born",
      "contrato alquiler born barcelona",
      "contrato arras ciutat vella",
      "gestoría born barcelona",
    ],
    h1: "Contratos inmobiliarios en El Born (Ciutat Vella)",
    lead:
      "El Born y el entorno de la Ciutat Vella exigen contratos precisos: alquiler de larga duración, habitación, temporada turística bien delimitada y arras en compraventas entre particulares en edificios con cargas o protección patrimonial.",
    localContext:
      "Muchas viviendas son plantas en edificios históricos: comunidad, obras, licencias y coherencia entre precio de arras y estado real del piso son críticos. Tu gestor Livendia revisa documentación antes de firmar.",
    zoneHighlights: [
      "Passeig del Born y Santa Maria del Mar — arras entre particulares en finca protegida",
      "La Ribera — alquiler LAU en plantas con vigas vistas",
      "Parc de la Ciutadella — pisos turísticos mal etiquetados como temporada",
      "Front marítim del Born — terrazas y ruido en cláusulas de uso",
    ],
    actualidad2026:
      "Ciutat Vella concentra inspección y conflictos por uso turístico. El RDL 29/2026 refuerza la función social de la vivienda; en contratos Livendia del Born distinguimos temporada legal, LAU y habitación con anexo SERPAVI e INCASÒL.",
    servicesFocus: ["Arras CCCat", "LAU Ciutat Vella", "Temporada", "Habitación compartida"],
    image: getLocalCityCardImage("barcelona-born"),
    imageAlt: "Contratos inmobiliarios El Born — gestoría Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-born"),
    contratoArrasHref: localContratoArrasHref("barcelona-born"),
  },
  {
    slug: "sants-montjuic",
    localSlug: "barcelona-sants-montjuic",
    name: "Sants – Montjuïc",
    districtLabel: "Distrito Sants-Montjuïc",
    metaTitle: "Contratos inmobiliarios Sants Montjuïc | Livendia",
    metaDescription:
      "Contratos inmobiliarios en Sants, Poble-sec y Montjuïc: LAU, arras, habitación y administración de alquiler. Livendia Barcelona.",
    keywords: [
      "contratos inmobiliarios sants",
      "contrato alquiler poble sec",
      "contrato arras sants montjuic",
      "gestoría inmobiliaria sants",
    ],
    h1: "Contratos inmobiliarios en Sants y Montjuïc",
    lead:
      "Desde Sants Estació hasta Poble-sec y Hostafrancs, tramitamos contratos LAU, alquiler de habitación, arras y gestión de alquiler para propietarios particulares — online, con opción de cita en nuestro despacho de Les Corts.",
    localContext:
      "Zona de alta rotación de inquilinos y pisos compartidos cerca de universidades y ferrocarril. Cláusulas de duración, fianza, inventario y convivencia deben estar alineadas con la LAU y la normativa catalana de vivienda.",
    zoneHighlights: [
      "Sants Estació — habitación y LAU para familias en bloques altos",
      "Poble-sec — bares, terrazas comunitarias y obras de fachada",
      "Hostafrancs — arras en compraventa entre particulares",
      "Montjuïc — vistas, parking y cláusulas de acceso al parque",
    ],
    actualidad2026:
      "Cerca de la estación y de campus universitarios es frecuente renovar contratos en 2026: aplicamos RDL 28/2026 (ciclos de prórroga 5/7 años e indemnización con referencia SERPAVI) y depósito en INCASÒL con informe anexo.",
    servicesFocus: ["LAU larga duración", "Habitación", "Arras", "Administración alquiler"],
    image: getLocalCityCardImage("barcelona-sants-montjuic"),
    imageAlt: "Contratos inmobiliarios Sants Montjuïc — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-sants-montjuic"),
    contratoArrasHref: localContratoArrasHref("barcelona-sants-montjuic"),
  },
  {
    slug: "les-corts",
    localSlug: "barcelona-les-corts",
    name: "Les Corts",
    districtLabel: "Distrito Les Corts",
    metaTitle: "Contratos inmobiliarios Les Corts Barcelona | Despacho Livendia",
    metaDescription:
      "Contratos LAU, arras y habitación en Les Corts: Zona Universitària, Pedralbes y Maternitat. Despacho Livendia en Mejía Lequerica 44. Normativa 2026 y SERPAVI.",
    keywords: [
      "contratos inmobiliarios les corts",
      "contrato alquiler les corts barcelona",
      "gestoría inmobiliaria les corts",
      "contrato arras pedralbes",
    ],
    h1: "Contratos inmobiliarios en Les Corts — gestoría con despacho en el barrio",
    lead:
      "Les Corts concentra familias, estudiantes de la Zona Universitària y operaciones de compraventa en Pedralbes. Livendia redacta LAU, habitación, arras y administración de alquiler con despacho físico en el distrito (Mejía Lequerica 44) además del panel online.",
    localContext:
      "Propietarios e inquilinos suelen cerrar entre particulares tras visitas en Maternitat o Travessera de les Corts. Revisamos cèdula, comunidad con piscina o conserje y coherencia entre parking incluido y nota registral antes de firmar arras.",
    zoneHighlights: [
      "Zona Universitària — habitación, LAU compartido y rotación anual",
      "Maternitat i Sant Ramon — familias y contratos largos con prórroga LAU 2026",
      "Pedralbes — arras de alto importe y revisión documental pre-escritura",
      "Camp Nou i Entença — bloques con obras y cláusulas de derrama",
    ],
    actualidad2026:
      "Desde octubre de 2026 los contratos Livendia en Les Corts citan RDL 28/2026 y 29/2026 cuando entran en vigor. En vivienda habitual catalana seguimos anexando SERPAVI (DL 3/2026) y tramitando fianza INCASÒL; puedes pedir cita presencial en nuestro despacho del barrio.",
    servicesFocus: ["LAU familiar", "Arras Pedralbes", "Habitación universitaria", "Cita en despacho Les Corts"],
    barrioFaq: [
      {
        question: "¿Dónde está el despacho Livendia en Les Corts?",
        answer:
          "En Carrer de Mejía Lequerica, 44 (08028 Barcelona). Puedes reservar cita para revisar borrador de LAU o arras antes de firmar, además de tramitar todo online.",
      },
      {
        question: "¿Les Corts está en zona tensionada para el alquiler?",
        answer:
          "Barcelona capital aplica ZMRT: debes respetar topes de renta, anexo SERPAVI en habitual desde 26/03/2026 y depósito en INCASÒL. Livendia cruza renta anterior, informe y gran tenedor en cada borrador.",
      },
    ],
    image: getLocalCityCardImage("barcelona-les-corts"),
    imageAlt: "Contratos inmobiliarios Les Corts — despacho Livendia Barcelona",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-les-corts"),
    contratoArrasHref: localContratoArrasHref("barcelona-les-corts"),
  },
  {
    slug: "sarria-sant-gervasi",
    localSlug: "barcelona-sarria",
    name: "Sarrià – Sant Gervasi",
    districtLabel: "Distrito Sarrià-Sant Gervasi",
    metaTitle: "Contratos inmobiliarios Sarrià Sant Gervasi | Livendia Barcelona",
    metaDescription:
      "Gestoría de contratos inmobiliarios en Sarrià, Sant Gervasi y Bonanova: LAU, arras entre particulares, trastero y parking. Adaptado a ZMRT y normativa 2026.",
    keywords: [
      "contratos inmobiliarios sarrià",
      "contrato alquiler sant gervasi",
      "contrato arras sarria barcelona",
      "gestoría bonanova",
    ],
    h1: "Contratos inmobiliarios en Sarrià, Sant Gervasi y Bonanova",
    lead:
      "En uno de los distritos con mayor precio m² de Barcelona, un error en arras o en la cláusula de actualización de renta cuesta caro. Livendia redacta contratos para particulares en Sarrià, Galvany, Tres Torres y Sant Gervasi — con inventario, anejos de parking y referencia SERPAVI cuando la ley lo exige.",
    localContext:
      "Operaciones con trastero, plaza de garaje y vivienda principal requieren tres referencias registrales coherentes. En compraventa entre particulares revisamos ITE, comunidad de propietarios con conserje y calendario de escritura antes de la señal.",
    zoneHighlights: [
      "Sarrià centre — casas y bajos con patio, arras CCCat",
      "Tres Torres y Sant Gervasi — LAU de alto standing con fianza INCASÒL",
      "Bonanova i Galvany — familias y prórrogas LAU según RDL 28/2026",
      "Putxet i Ferrocarrils — vistas y cláusulas de obras en fachada",
    ],
    actualidad2026:
      "Aunque la renta pactada sea alta, en ZMRT siguen aplicando topes y SERPAVI como documento anexo. Si el arrendador no renueva tras 5/7 años, la indemnización puede calcularse con referencia estatal (RDL 28/2026), no solo con la renta del contrato.",
    servicesFocus: ["Arras alto ticket", "LAU con parking", "Revisión pre-señal", "Administración premium"],
    barrioFaq: [
      {
        question: "¿Cómo se incluye el parking en el contrato de alquiler en Sarrià?",
        answer:
          "Redactamos anexo con referencia registral del plaza, renta o cesión de uso y reparto de gastos de comunidad del aparcamiento. Evita conflictos cuando solo se alquila el piso.",
      },
    ],
    image: getLocalCityCardImage("barcelona-sarria"),
    imageAlt: "Contratos inmobiliarios Sarrià Sant Gervasi — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-sarria"),
    contratoArrasHref: localContratoArrasHref("barcelona-sarria"),
  },
  {
    slug: "el-raval",
    localSlug: "barcelona-el-raval",
    name: "El Raval",
    districtLabel: "Ciutat Vella · El Raval",
    metaTitle: "Contratos inmobiliarios El Raval Barcelona | LAU y habitación 2026",
    metaDescription:
      "Contratos inmobiliarios en el Raval: LAU, habitación en piso compartido, arras y función social de la vivienda. SERPAVI, INCASÒL y RDL 28/29. Livendia.",
    keywords: [
      "contratos inmobiliarios raval",
      "contrato alquiler raval barcelona",
      "contrato habitación raval",
      "gestoría ciutat vella",
    ],
    h1: "Contratos inmobiliarios en el Raval — LAU, habitación y normativa 2026",
    lead:
      "El Raval mezcla alquiler social, habitación en piso compartido, locales reconvertidos y compraventas entre particulares en fincas centenarias. Livendia adapta cada contrato al uso real del inmueble y a la ZMRT, evitando temporadas ficticias o cláusulas de garantía ilegales.",
    localContext:
      "En el Barri Gòtic limítrofe y la Rambla del Raval, la inspección de vivienda y las denuncias por sobreprecio de renta son más frecuentes. Un borrador claro de convivencia y depósito INCASÒL reduce conflictos entre propietario e inquilino.",
    zoneHighlights: [
      "Raval Sud — habitación y coliving cerca de MACBA",
      "Raval Nord — LAU familiar en bloques del Eixample limítrofe",
      "Sant Antoni abords — renovación urbana y arras en finca antigua",
      "Drassanes i La Boqueria — ruido y horarios en cláusulas de uso",
    ],
    actualidad2026:
      "El RDL 29/2026 refuerza la función social de la vivienda; en el Raval conviene documentar uso habitual frente a temporada. Livendia anexa SERPAVI, respeta topes ZMRT desde 2026 en habitación y deja constancia de preaviso de 6 meses si aplica el RDL 28/2026 en no renovación.",
    servicesFocus: ["Habitación ZMRT", "LAU Ciutat Vella", "Arras entre particulares", "Revisión cláusulas abusivas"],
    barrioFaq: [
      {
        question: "¿Puedo cobrar tres meses de fianza en efectivo en el Raval?",
        answer:
          "La fianza legal de vivienda habitual debe depositarse en INCASÒL; garantías adicionales solo dentro de topes legales (avalloguer). Cláusulas que exigen muchos meses en metálico son impugnables.",
      },
    ],
    image: getLocalCityCardImage("barcelona-el-raval"),
    imageAlt: "Contratos inmobiliarios El Raval Barcelona — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-el-raval"),
    contratoArrasHref: localContratoArrasHref("barcelona-el-raval"),
  },
  {
    slug: "barceloneta",
    localSlug: "barcelona-barceloneta",
    name: "La Barceloneta",
    districtLabel: "Ciutat Vella · La Barceloneta",
    metaTitle: "Contratos inmobiliarios La Barceloneta | Temporada y LAU Livendia",
    metaDescription:
      "Contratos de alquiler y arras en La Barceloneta: distinguir temporada legal de LAU, SERPAVI, comunidad de propietarios y normativa 2026. Gestoría Livendia.",
    keywords: [
      "contratos inmobiliarios barceloneta",
      "contrato alquiler barceloneta",
      "contrato temporada barceloneta",
      "gestoría barceloneta barcelona",
    ],
    h1: "Contratos inmobiliarios en La Barceloneta — mar, comunidad y uso real",
    lead:
      "A metros de la playa, muchos contratos intentan esquivar la LAU con etiqueta de temporada. Livendia redacta contratos de alquiler de vivienda habitual, temporada acreditada, habitación y arras en la Barceloneta — con inventario, normas de comunidad y anexo SERPAVI cuando corresponde.",
    localContext:
      "Edificios con restricciones de uso turístico en junta de propietarios, humedad marina en plantas bajas y terrazas compartidas deben reflejarse en el contrato. En compraventa entre particulares, la cèdula y el estado de la fachada marítima son puntos críticos pre-arras.",
    zoneHighlights: [
      "Passeig Marítim — vistas y ruido en cláusulas de uso",
      "Carrer de la Maquinista — pisos estrechos y habitación",
      "Port Olímpic limítrofe — confusión modalidad temporada vs LAU",
      "Mercat de la Barceloneta — vivienda de pescadores reconvertida",
    ],
    actualidad2026:
      "Desde enero de 2026 los topes ZMRT también afectan a temporadas y habitaciones mal calificadas. Tras el RDL 29/2026, inspección y función social tienen más peso: documentamos causa de temporada o LAU y evitamos prórrogas opacas.",
    servicesFocus: ["Temporada acreditada", "LAU habitual", "Arras CCCat", "Inventario detallado"],
    barrioFaq: [
      {
        question: "¿Un contrato de 11 meses en la Barceloneta evita la LAU?",
        answer:
          "No necesariamente: si el uso real es vivienda habitual, puede reclasificarse. Livendia redacta temporada solo con causa verificable (Decreto 147/1997) o LAU con SERPAVI e INCASÒL.",
      },
    ],
    image: getLocalCityCardImage("barcelona-barceloneta"),
    imageAlt: "Contratos inmobiliarios La Barceloneta — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-barceloneta"),
    contratoArrasHref: localContratoArrasHref("barcelona-barceloneta"),
  },
  {
    slug: "vila-olimpica",
    localSlug: "barcelona-vila-olimpica",
    name: "Vila Olímpica",
    districtLabel: "Sant Martí · Vila Olímpica",
    metaTitle: "Contratos inmobiliarios Vila Olímpica i Port Olímpic | Livendia",
    metaDescription:
      "Contratos inmobiliarios en Vila Olímpica, Port Olímpic y Poblenou marítim: LAU, temporada, arras y administración. Normativa catalana y RDL 2026.",
    keywords: [
      "contratos inmobiliarios vila olímpica",
      "contrato alquiler vila olimpica barcelona",
      "contrato arras sant martí",
      "gestoría port olímpic",
    ],
    h1: "Contratos inmobiliarios en la Vila Olímpica y el Port Olímpic",
    lead:
      "El distrito olímpico combina pisos con terraza, segundas residencias y alquileres ligados al mar y al 22@. Livendia prepara LAU, contratos de temporada para estancias profesionales, arras en compraventa entre particulares y packs con administración de alquiler para propietarios que no viven en Barcelona.",
    localContext:
      "Comunidades con portería, piscina comunitaria y parkings en planta son la norma. En el contrato detallamos acceso a trasteros, normas de la comunidad sobre alquiler temporal y reparto de IBI cuando se pacta.",
    zoneHighlights: [
      "Vila Olímpica — bloques del '92 y LAU con terraza",
      "Port Olímpic — segundas residencias y temporada",
      "Nova Icària — familias y escuelas, contratos largos",
      "Poblenou marítim — continuidad con 22@ y teletrabajo",
    ],
    actualidad2026:
      "En Sant Martí aplicamos SERPAVI anexo, ZMRT en habitación desde 2026 y estabilidad LAU del RDL 28/2026 en renovaciones. Si vendes entre particulares, el RDL 29/2026 puede afectar a compradores profesionales: revisamos arras antes de la señal.",
    servicesFocus: ["LAU con terraza", "Temporada profesional", "Arras y venta", "Administración a distancia"],
    barrioFaq: [
      {
        question: "¿La Vila Olímpica comparte normativa con Poblenou?",
        answer:
          "Ambos están en el distrito Sant Martí y en ZMRT de Barcelona capital. Las landings locales de alquiler y arras son específicas; esta página resume el contexto olímpico y portuario.",
      },
    ],
    image: getLocalCityCardImage("barcelona-vila-olimpica"),
    imageAlt: "Contratos inmobiliarios Vila Olímpica Barcelona — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-vila-olimpica"),
    contratoArrasHref: localContratoArrasHref("barcelona-vila-olimpica"),
  },
] as const;

export function contratosInmobiliariosBarrioPath(slug: ContratosInmobiliariosBarrioSlug): string {
  return `${CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIO_BASE}/${slug}`;
}

export function getContratosInmobiliariosBarrio(
  slug: string,
): ContratosInmobiliariosBarrioPage | undefined {
  return CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.find((b) => b.slug === slug);
}

export function isContratosInmobiliariosBarrioSlug(slug: string): slug is ContratosInmobiliariosBarrioSlug {
  return CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.some((b) => b.slug === slug);
}
