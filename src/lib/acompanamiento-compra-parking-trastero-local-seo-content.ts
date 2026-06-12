import { ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL } from "@/lib/catalog.public";

export type ParkingTrasteroZoneGroup = { district: string; areas: string };

export type ParkingTrasteroSeoContent = {
  heroSubtitle: string;
  localProblemIntro: string;
  precioMedio: number;
  zoneGroups: readonly ParkingTrasteroZoneGroup[];
  zonesHeading: string;
  zonesParagraph: string;
  casuistica: readonly { title: string; body: string }[];
  faqLocal: readonly { question: string; answer: string }[];
};

const BARCELONA_ZONES: readonly ParkingTrasteroZoneGroup[] = [
  { district: "Eixample", areas: "Dreta, Esquerra, Sagrada Família, Sant Antoni" },
  { district: "Gràcia", areas: "Vila de Gràcia, Camp d'en Grassot, La Salut" },
  { district: "Sants-Montjuïc", areas: "Sants, Hostafrancs, Poble-sec" },
  { district: "Sant Martí", areas: "Poblenou, Diagonal Mar, Clot, La Verneda" },
  { district: "Sarrià-Sant Gervasi", areas: "Sarrià, Sant Gervasi, Les Tres Torres" },
  { district: "Les Corts", areas: "Zona universitaria, Pedralbes" },
];

const MADRID_ZONES: readonly ParkingTrasteroZoneGroup[] = [
  { district: "Centro", areas: "Sol, Lavapiés, Malasaña, Chueca" },
  { district: "Chamberí", areas: "Trafalgar, Almagro, Gaztambide" },
  { district: "Salamanca", areas: "Recoletos, Goya, Lista" },
  { district: "Retiro", areas: "Pacífico, Adelfas, Ibiza" },
  { district: "Tetuán", areas: "Cuatro Caminos, Valdeacederas" },
  { district: "Moncloa-Aravaca", areas: "Argüelles, Ciudad Universitaria" },
];

export const PARKING_TRASTERO_SEO_CONTENT: Record<string, ParkingTrasteroSeoContent> = {
  barcelona: {
    precioMedio: 28_000,
    heroSubtitle:
      "Compras un parking o trastero en Barcelona y quieres que alguien se encargue de nota simple, IBI, comunidad, notaría, ITP y registro. En la ciudad condensada, las plazas suelen ir ligadas a fincas con derramas o servidumbres que no aparecen en el anuncio. Tu gestor Livendia gestiona todo por 298 € IVA incl.",
    localProblemIntro:
      "En Barcelona es habitual que el parking se venda junto al piso o meses después: el comprador asume ITP, provisión del Registro y coordinación con una comunidad que a veces tarda semanas en certificar deudas del anexo.",
    zonesHeading: "Compra de parking y trastero en todos los distritos de Barcelona",
    zonesParagraph:
      "Gestionamos compras en Barcelona ciudad y área metropolitana inmediata. El inmueble anexo puede estar en cualquiera de estos distritos y barrios:",
    zoneGroups: BARCELONA_ZONES,
    casuistica: [
      {
        title: "Plaza de garaje no inscrita o mal descrita",
        body: "En el Eixample y Gràcia es frecuente que el parking figure como elemento común o con superficie distinta a la real. La nota simple lo revela antes de notaría.",
      },
      {
        title: "Cuota de comunidad del anexo",
        body: "Algunas comunidades cobran cuota específica por plaza o trastero. El gestor verifica deuda cero y coherencia con el reparto de gastos.",
      },
      {
        title: "ITP en Cataluña (modelo 600)",
        body: "Tras la firma hay plazo máximo de un mes para liquidar. Cumplimentamos en la ATC, enviamos carta de pago al cliente y presentamos con justificante.",
      },
      {
        title: "Copia autorizada electrónica",
        body: "Sin ella no se presenta en registradores.org. La solicitamos al notario el día de la firma para no retrasar la inscripción.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto tarda la inscripción de un parking en Barcelona?",
        answer:
          "Tras liquidar el ITP, la presentación telemática en el Registro suele resolverse en días o pocas semanas según carga del registrador. Tu gestor hace seguimiento hasta la entrega de la documentación inscrita.",
      },
      {
        question: "¿Puedo comprar solo el trastero sin el piso en Barcelona?",
        answer:
          "Sí, si está inscrito como finca independiente o elemento registral separable. El gestor revisa la nota simple para confirmar que la transmisión es viable.",
      },
    ],
  },
  "barcelona-eixample": {
    precioMedio: 32_000,
    heroSubtitle:
      "Compras parking o trastero en el Eixample barcelonés: fincas centenarias, plazas en sótano compartido y referencias registrales complejas. Livendia revisa nota simple, comunidad y tramita notaría, ITP y Registro por 298 €.",
    localProblemIntro:
      "En Dreta y Esquerra del Eixample muchas plazas comparten acceso por rampa comunitaria; si la comunidad tiene derrama de ascensor o fachada, el certificado de deuda del anexo debe estar al día.",
    zonesHeading: "Barrios del Eixample donde acompañamos compradores",
    zonesParagraph: "Servicio en toda la extensión del distrito 01 — Eixample:",
    zoneGroups: [
      { district: "Dreta de l'Eixample", areas: "Sagrada Família, Provença, Girona" },
      { district: "Esquerra de l'Eixample", areas: "Sant Antoni, Universitat" },
      { district: "Sants-Montjuïc límite", areas: "Poble-sec (plazas colindantes)" },
    ],
    casuistica: [
      {
        title: "Rampas y servidumbres de paso",
        body: "El acceso al parking puede ser servidumbre de paso sobre finca vecina. Lo comprobamos en nota simple y escritura previa.",
      },
      {
        title: "Plazas vinculadas al piso de referencia",
        body: "Si compraste piso en la misma finca, el gestor verifica que la plaza que adquieres es la correcta y no duplica derechos.",
      },
    ],
    faqLocal: [
      {
        question: "¿El ITP del parking en Eixample es el mismo que en el resto de Cataluña?",
        answer:
          "Sí, el impuesto se liquida según la base imponible de la transmisión en la ATC catalana. Nosotros gestionamos el modelo 600 y la carta de pago.",
      },
    ],
  },
  "barcelona-gracia": {
    precioMedio: 26_000,
    heroSubtitle:
      "Parking o trastero en Gràcia: calles estrechas, plazas en edificios de principios de siglo y trasteros en planta baja o sótano. Gestor Livendia desde nota simple hasta inscripción por 298 €.",
    localProblemIntro:
      "En Vila de Gràcia y Camp d'en Grassot los trasteros antiguos a veces carecen de descripción registral precisa; conviene alinear catastro, comunidad y registro antes de firmar.",
    zonesHeading: "Barrios de Gràcia",
    zonesParagraph: "Distrito 06 — Gràcia y zonas colindantes:",
    zoneGroups: [
      { district: "Vila de Gràcia", areas: "Plaza del Sol, Travessera de Gràcia" },
      { district: "Camp d'en Grassot", areas: "Joanic, Sant Joan" },
      { district: "La Salut", areas: "Park Güell, Vallcarca" },
    ],
    casuistica: [
      {
        title: "Trasteros sin número de finca propia",
        body: "Pueden figurar como anejos. El gestor confirma si se transmiten como derecho independiente o accesorio.",
      },
    ],
    faqLocal: [
      {
        question: "¿Hay diferencia de precio del servicio Livendia en Gràcia?",
        answer: `No. ${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} IVA incluido en toda Barcelona, mismo gestor y mismas cuatro fases hasta registro.`,
      },
    ],
  },
  "barcelona-poblenou": {
    precioMedio: 30_000,
    heroSubtitle:
      "Compras plaza o trastero en Poblenou o 22@: promociones recientes, parkings subterráneos amplios y comunidades con administrador profesional. Livendia coordina documentación, notaría, ITP y registro.",
    localProblemIntro:
      "En Sant Martí — Poblenou muchas operaciones son segundas transmisiones tras compra de obra nueva; el vendedor a veces no tiene copia electrónica anterior y hay que reconstruir el expediente.",
    zonesHeading: "Poblenou y Sant Martí",
    zonesParagraph: "Distrito 10 — Sant Martí:",
    zoneGroups: [
      { district: "Poblenou", areas: "22@, Rambla del Poblenou, Bogatell" },
      { district: "Diagonal Mar", areas: "Plazas en promociones recientes" },
      { district: "La Verneda", areas: "Trasteros en bloques del 70-80" },
    ],
    casuistica: [
      {
        title: "Segunda transmisión en obra nueva",
        body: "Verificamos que la primera inscripción del parking está cerrada y que no quedan cargas del promotor.",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis compras en promociones del 22@?",
        answer:
          "Sí. Revisamos nota simple, estatutos de comunidad y cuota del anexo en bloques con parking subterráneo de dos o más plantas.",
      },
    ],
  },
  "barcelona-sants": {
    precioMedio: 24_000,
    heroSubtitle:
      "Parking o trastero en Sants, Hostafrancs o Poble-sec: buena oferta de plazas en zonas bien comunicadas. Gestor dedicado Livendia por 298 € hasta la entrega de documentación inscrita.",
    localProblemIntro:
      "En Sants-Montjuïc las plazas cerca de estación suelen tener alta rotación; compradores de fuera delegan ITP y registro porque desconocen la ATC catalana.",
    zonesHeading: "Sants-Montjuïc",
    zonesParagraph: "Distrito 03:",
    zoneGroups: [
      { district: "Sants", areas: "Plaça de Sants, Badal" },
      { district: "Hostafrancs", areas: "Plazas en bloques junto a la estación" },
      { district: "Poble-sec", areas: "Trasteros y plazas en fincas mixtas" },
    ],
    casuistica: [
      {
        title: "IBI del anexo",
        body: "Comprobamos recibo de IBI específico o prorrateo en fincas donde solo figura el piso en catastro.",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compradores que no viven en Barcelona?",
        answer:
          "Sí. Todo el proceso es online: área de cliente, cartas de pago por email y firma en notaría presencial solo el día acordado.",
      },
    ],
  },
  "barcelona-sarria": {
    precioMedio: 38_000,
    heroSubtitle:
      "Plaza de garaje o trastero en Sarrià-Sant Gervasi: uno de los mercados con precios más altos de Barcelona. Revisión registral rigurosa y gestión integral por 298 €.",
    localProblemIntro:
      "En Les Tres Torres y Sant Gervasi - Galvany las plazas dobles y trasteros amplios encadenan operaciones de alto importe; un error en el ITP o en la provisión del Registro cuesta más que el servicio completo.",
    zonesHeading: "Sarrià-Sant Gervasi",
    zonesParagraph: "Distrito 05:",
    zoneGroups: [
      { district: "Sarrià", areas: "Sant Gervasi, Putxet" },
      { district: "Sant Gervasi - Galvany", areas: "Bonanova, Turo Park" },
      { district: "Les Tres Torres", areas: "Plazas dobles y trasteros vinculados" },
    ],
    casuistica: [
      {
        title: "Plazas dobles y superficies",
        body: "Verificamos que la descripción registral coincide con la plaza física (una o dos plantas, dimensiones).",
      },
    ],
    faqLocal: [
      {
        question: "¿Conviene el servicio Livendia en plazas de alto precio en Sarrià?",
        answer:
          "Sí. Las agencias suelen aplicar porcentaje sobre el precio del anexo; con 35.000 € un 8 % son 2.800 € frente a 298 € de tarifa fija Livendia.",
      },
    ],
  },
  "barcelona-sant-marti": {
    precioMedio: 27_000,
    heroSubtitle:
      "Compra de parking o trastero en Sant Martí (Clot, La Verneda, Diagonal Mar): gestor Livendia para nota simple, comunidad, notaría, ITP y registro telemático.",
    localProblemIntro:
      "En el Clot y la Verneda abundan comunidades de medianas dimensiones; el certificado de deuda del anexo puede tardar si el administrador gestiona varios bloques.",
    zonesHeading: "Sant Martí — zonas habituales",
    zonesParagraph: "Distrito 10 completo:",
    zoneGroups: [
      { district: "El Clot", areas: "Plazas junto a mercado y estación" },
      { district: "La Verneda", areas: "Trasteros en plantas bajas" },
      { district: "Diagonal Mar", areas: "Promociones costeras" },
    ],
    casuistica: [
      {
        title: "Comunidades con varios bloques",
        body: "El gestor identifica qué CIF y qué presidente firma el certificado de deuda del parking correcto.",
      },
    ],
    faqLocal: [
      {
        question: "¿Qué documentación pide el notario en Sant Martí?",
        answer:
          "Nota simple, IBI, certificado de comunidad, DNI de partes y copia de estatutos si hay dudas sobre el anexo. El gestor prepara el checklist antes de pedir cita.",
      },
    ],
  },
  madrid: {
    precioMedio: 25_000,
    heroSubtitle:
      "Compras parking o trastero en Madrid capital o área metropolitana: un gestor Livendia revisa nota simple, IBI, comunidad, coordina notaría, liquida ITP y presenta en el Registro. Tarifa fija 298 € IVA incl.",
    localProblemIntro:
      "En Madrid muchas plazas se venden desvinculadas del piso años después de la compra. El comprador debe liquidar ITP en la Comunidad de Madrid y presentar telemáticamente sin errores en el modelo 600.",
    zonesHeading: "Distritos y barrios de Madrid donde gestionamos compras de anexos",
    zonesParagraph:
      "Madrid capital y corona (Alcobendas, Las Rozas, Pozuelo, Getafe…) con el mismo protocolo Livendia:",
    zoneGroups: MADRID_ZONES,
    casuistica: [
      {
        title: "Plaza en finca horizontal sin descripción clara",
        body: "En Chamberí y Tetuán es habitual que el registro describa la plaza por número y planta; verificamos coherencia con la realidad y con el contrato privado.",
      },
      {
        title: "Comunidad y derramas del garaje",
        body: "Rampas y puertas automáticas generan derramas específicas. Revisamos actas y certificado de deuda del anexo.",
      },
      {
        title: "ITP Comunidad de Madrid",
        body: "Liquidamos en la ATC madrileña con certificado digital, carta de pago al cliente y presentación con justificante en plazo.",
      },
      {
        title: "Operaciones con hipoteca del vendedor",
        body: "Si el parking tenía carga hipotecaria, coordinamos con el banco la cancelación el día de la venta.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto suele costar un parking en Madrid y merece la pena el gestor?",
        answer:
          "Entre 15.000 y 40.000 € según zona. Una agencia al 8 % sobre 25.000 € cobra 2.000 € solo en honorarios; Livendia son 298 € por todo el acompañamiento.",
      },
      {
        question: "¿Gestionáis trasteros en bloques de los años 60-70?",
        answer:
          "Sí. Revisamos si el trastero tiene finca registral propia o es elemento accesorio y qué documentación exige el notario madrileño.",
      },
    ],
  },
};

export function getParkingTrasteroLocalSeoContent(slug: string): ParkingTrasteroSeoContent | undefined {
  return PARKING_TRASTERO_SEO_CONTENT[slug];
}
