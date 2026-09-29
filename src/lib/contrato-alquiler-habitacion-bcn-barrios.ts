import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";
import type { HabitacionLocalSeoContent } from "@/lib/contrato-alquiler-habitacion-local-seo-content";

const PRICE = CONTRATO_ALQUILER_HABITACION_PRICE_LABEL;

type BarrioHabitacionSpec = {
  slug: string;
  city: string;
  zoneShort: string;
  heroH1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubtitle: string;
  localMarketIntro: string;
  zonesHeading: string;
  zonesParagraph: string;
  zoneGroups: readonly { district: string; areas: string }[];
  riskTitles: [string, string, string];
  profileBarrios: [string, string, string];
  finalCtaLead: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
};

function buildSeo(spec: BarrioHabitacionSpec): HabitacionLocalSeoContent {
  const z = spec.zoneShort;
  return {
    heroSubtitle: spec.heroSubtitle,
    localMarketIntro: spec.localMarketIntro,
    zonesHeading: spec.zonesHeading,
    zonesParagraph: spec.zonesParagraph,
    zoneGroups: spec.zoneGroups,
    whyContractMatters: [
      {
        title: "Piso compartido sin régimen escrito",
        body: `En ${z} muchos alquileres de habitación se cierran por Idealista o boca a boca. Sin contrato adaptado, la fianza y el reparto de luz acaban en conflicto en el segundo mes.`,
      },
      {
        title: "No es un LAU de piso entero",
        body: "Plantillas de vivienda completa no regulan convivencia, visitas ni limpieza de cocina y baños compartidos — lo que más se litiga en pisos de tres o cuatro habitaciones.",
      },
      {
        title: "Rotación y perfiles distintos",
        body: `En ${z} conviven estudiantes, teletrabajadores y propietarios que comparten piso. El contrato debe fijar preaviso, inventario con fotos y gastos incluidos en la renta.`,
      },
    ],
    typicalProfiles: {
      title: `Propietarios e inquilinos en ${z} que contratan Livendia`,
      intro: `Particulares sin agencia: estos son los casos más frecuentes en ${z}:`,
      profiles: [
        {
          title: "Propietario con una o dos habitaciones libres",
          body: "Compartes vivienda y necesitas normas claras de cocina, visitas y fianza antes de entregar llaves.",
          barrios: spec.profileBarrios[0],
        },
        {
          title: "Inquilino que entra en piso ya habitado",
          body: "Quieres contrato con preaviso, depósito e inventario antes de pagar la primera mensualidad.",
          barrios: spec.profileBarrios[1],
        },
        {
          title: "Piso de 3-4 habitaciones",
          body: "Varios inquilinos en el mismo piso: hace falta reparto de suministros e internet por escrito.",
          barrios: spec.profileBarrios[2],
        },
      ],
    },
    cityComparison: {
      title: `Alquiler de habitación en ${z} frente a otras zonas de Barcelona`,
      intro: `${z} tiene dinámica de mercado propia dentro del área metropolitana:`,
      rows: [
        {
          aspect: "Precio habitación",
          enEstaCiudad: spec.localMarketIntro.slice(0, 120) + "…",
          otrasCiudades: "Eixample o Sarrià suelen ser más caros; Nou Barris o L'Hospitalet más asequibles.",
        },
        {
          aspect: "Formalidad",
          enEstaCiudad: "Alto porcentaje de acuerdos verbales entre particulares.",
          otrasCiudades: "El riesgo legal es el mismo en todo Barcelona: hace falta contrato de habitación.",
        },
        {
          aspect: "Solución Livendia",
          enEstaCiudad: `Gestor por teléfono; ${PRICE} IVA incl.; entrega 48-72 h con documentación completa.`,
          otrasCiudades: "Mismo servicio en Cornellà, Sabadell, Terrassa y resto de distritos.",
        },
        {
          aspect: "Inventario",
          enEstaCiudad: "Inventario detallado con fotos incluido en el servicio.",
          otrasCiudades: "Recomendado en todas las zonas para proteger fianza y depósito.",
        },
      ],
    },
    localRisks: spec.riskTitles.map((title) => ({
      title,
      body: `En ${z}, sin cláusulas específicas de habitación en piso compartido, propietarios e inquilinos pierden prueba escrita de lo pactado. Livendia redacta fianza garantizada, convivencia e inventario fotográfico.`,
    })),
    faqLocal: [
      {
        question: `¿Atendéis alquileres de habitación en ${z}?`,
        answer: `Sí. Redactamos contrato para la dirección concreta en ${spec.city} con gestor especializado y panel Livendia.`,
      },
      {
        question: "¿Puedo contratar si soy inquilino y el propietario no tiene contrato?",
        answer:
          "Sí. Muchos particulares contratan Livendia para equilibrar el documento antes de ingresar fianza.",
      },
      {
        question: "¿Incluye inventario con fotos?",
        answer:
          "Sí. El servicio contempla inventario detallado de la habitación y anexo fotográfico en el expediente.",
      },
      {
        question: "¿Es lo mismo que un contrato LAU de piso entero?",
        answer:
          "No. El régimen de habitación en vivienda compartida requiere cláusulas de convivencia y zonas comunes distintas.",
      },
    ],
  };
}

const BARRIO_SPECS: BarrioHabitacionSpec[] = [
  {
    slug: "barcelona-eixample",
    city: "Eixample (Barcelona)",
    zoneShort: "l'Eixample",
    heroH1: "Contrato de habitación en l'Eixample — convivencia y fianza antes de la primera renta",
    metaTitle: `Contrato habitación Eixample Barcelona — ${PRICE} · inventario`,
    metaDescription: `¿Alquilas habitación en l'Eixample? Gestor Livendia: convivencia, fianza legal e inventario con fotos. ${PRICE} IVA incl. Dreta, Esquerra, Sagrada Família. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion eixample",
      "alquilar habitacion eixample contrato",
      "contrato piso compartido eixample barcelona",
      "modelo contrato habitacion dreta eixample",
    ],
    heroSubtitle: `En l'Eixample la habitación es de las más demandadas de España: precios altos, pisos señoriales repartidos en 3-4 habitaciones y mucha rotación. Por ${PRICE} IVA incl. un gestor Livendia redacta contrato de habitación — no LAU de piso entero — con fianza garantizada, inventario fotográfico y normas de convivencia.`,
    localMarketIntro:
      "L'Eixample concentra jóvenes profesionales, expatriados y estudiantes en fincas de 1900 convertidas en coliving. Propietarios e inquilinos suelen cerrar en días; sin contrato escrito, el reparto de comunidad, internet y limpieza de cocina genera litigios costosos.",
    zonesHeading: "Barrios del Eixample donde redactamos contratos de habitación",
    zonesParagraph: "Tramitamos contratos para habitaciones en estas áreas del distrito:",
    zoneGroups: [
      { district: "Dreta de l'Eixample", areas: "Passeig de Gràcia, Rambla Catalunya, zona señorial" },
      { district: "Esquerra de l'Eixample", areas: "Sant Antoni (límite), Urgell, Comte Borrell" },
      { district: "Sagrada Família", areas: "Gaudí, Provença, fincas altas compartidas" },
      { district: "Fort Pienc", areas: "Estación del Nord, Arc de Triomf" },
    ],
    riskTitles: [
      "Comunidad cara sin reparto claro en contrato",
      "Fianza de dos meses sin inventario fotográfico",
      "Coliving con expatriados y estancias cortas mal definidas",
    ],
    profileBarrios: ["Dreta, Esquerra", "Sagrada Família", "Sant Antoni (límite)"],
    finalCtaLead: "Contrato de habitación en l'Eixample — gestor y panel Livendia",
    testimonials: [
      {
        quote:
          "Alquilaba dos habitaciones en Esquerra de l'Eixample. El gestor fijó comunidad, internet y preaviso antes de que entrara la tercera inquilina.",
        author: "Laura M.",
        role: "Propietaria — Eixample",
      },
      {
        quote:
          "Entré en un piso de Dreta sin contrato. Livendia redactó inventario con fotos y normas de visitas; firmamos en 48 horas.",
        author: "Carlos R.",
        role: "Inquilino — Dreta de l'Eixample",
      },
    ],
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia (Barcelona)",
    zoneShort: "Gràcia",
    heroH1: "Contrato de habitación en Gràcia — piso compartido con normas claras de convivencia",
    metaTitle: `Contrato habitación Gràcia Barcelona — ${PRICE} · LAU habitación`,
    metaDescription: `Contrato alquiler habitación Gràcia: Vila de Gràcia, Camp d'en Grassot. ${PRICE} IVA incl. Fianza, inventario y gestor por teléfono.`,
    keywords: [
      "contrato alquiler habitacion gracia",
      "alquilar habitacion vila de gracia contrato",
      "contrato piso compartido gracia barcelona",
    ],
    heroSubtitle: `Gràcia mezcla propietarios locales, estudiantes y familias en pisos de planta baja y áticos compartidos. ${PRICE} IVA incl.: contrato de habitación con derechos de convivencia, fianza conforme a la ley e inventario detallado con fotos.`,
    localMarketIntro:
      "En Vila de Gràcia y Camp d'en Grassot es habitual alquilar habitaciones entre particulares en edificios de principios de siglo. Locales en planta baja y usos mixtos complican el contrato si se usa una plantilla genérica.",
    zonesHeading: "Zonas de Gràcia para contrato de habitación",
    zonesParagraph: "Redactamos contratos en estos barrios del distrito:",
    zoneGroups: [
      { district: "Vila de Gràcia", areas: "Plaça del Sol, Travessera de Gràcia" },
      { district: "Camp d'en Grassot", areas: "Joanic, Lesseps (límite)" },
      { district: "La Salut", areas: "Park Güell (límite), vivienda familiar compartida" },
      { district: "Vallcarca", areas: "Penitents, fincas en ladera" },
    ],
    riskTitles: [
      "Planta baja mal delimitada en contrato de habitación",
      "Acuerdos verbales sobre mascotas o parejas",
      "Limpieza de zonas comunes sin turnos por escrito",
    ],
    profileBarrios: ["Vila de Gràcia", "Camp d'en Grassot", "La Salut"],
    finalCtaLead: "Contrato de habitación en Gràcia — 48-72 h con gestor Livendia",
    testimonials: [
      {
        quote:
          "Compartía piso en Vila de Gràcia. El gestor dejó cocina, visitas y fianza claros; inventario con fotos de la habitación incluido.",
        author: "Jordi P.",
        role: "Inquilino — Gràcia",
      },
      {
        quote:
          "Alquilaba habitación en Camp d'en Grassot a estudiantes. Livendia incluyó duración de curso y preaviso de junio.",
        author: "Sílvia R.",
        role: "Propietaria — Gràcia",
      },
    ],
  },
  {
    slug: "barcelona-poblenou",
    city: "Poblenou / 22@ (Barcelona)",
    zoneShort: "Poblenou",
    heroH1: "Contrato de habitación en Poblenou y 22@ — lofts, tech y pisos compartidos",
    metaTitle: `Contrato habitación Poblenou 22@ — ${PRICE} IVA incl.`,
    metaDescription: `¿Habitación en Poblenou o 22@? Contrato piso compartido con inventario y convivencia. ${PRICE} IVA incl. Gestor Livendia.`,
    keywords: [
      "contrato alquiler habitacion poblenou",
      "contrato habitacion 22 barcelona",
      "alquilar habitacion poblenou contrato",
    ],
    heroSubtitle: `Poblenou y el 22@ atraen perfiles tech, lofts reconvertidos y pisos de 4 habitaciones cerca del mar. ${PRICE} IVA incl. — contrato blindado, fianza garantizada e inventario fotográfico para convivencia multicultural.`,
    localMarketIntro:
      "En la Rambla del Poblenou y el 22@ la rotación es alta: estancias de proyecto, teletrabajo híbrido y estudiantes de máster. Lo verbal sobre terraza, parking o calidades rara vez aparece en PDFs copiados de otras ciudades.",
    zonesHeading: "Poblenou y entorno — contrato de habitación",
    zonesParagraph: "Zonas donde más tramitamos contratos de habitación en Sant Martí (Poblenou):",
    zoneGroups: [
      { district: "22@", areas: "Lofts, oficinas reconvertidas, coliving" },
      { district: "Rambla del Poblenou", areas: "Familiar, bares, pisos señoriales compartidos" },
      { district: "Parc del Centre del Poblenou", areas: "Obra reciente, promociones" },
      { district: "Diagonal Mar (límite)", areas: "Promociones nuevas, 3-4 habitaciones" },
    ],
    riskTitles: [
      "Lofts con zonas comunes ambiguas",
      "Estancias cortas de proyecto sin preaviso",
      "Internet y coworking incluidos mal definidos",
    ],
    profileBarrios: ["22@", "Rambla del Poblenou", "Diagonal Mar (límite)"],
    finalCtaLead: "Contrato de habitación en Poblenou — gestor especializado Livendia",
    testimonials: [
      {
        quote:
          "Alquilaba habitación en 22@ a perfiles tech. El gestor definió horarios, visitas e inventario de electrodomésticos compartidos.",
        author: "Laura & Pau",
        role: "Propietaria — Poblenou",
      },
      {
        quote:
          "Entré en un loft compartido sin contrato. Livendia lo dejó listo con fianza e inventario fotográfico en 72 h.",
        author: "Arnau M.",
        role: "Inquilino — 22@",
      },
    ],
  },
  {
    slug: "barcelona-les-corts",
    city: "Les Corts (Barcelona)",
    zoneShort: "Les Corts",
    heroH1: "Contrato de habitación en Les Corts — Zona Universitària y Pedralbes",
    metaTitle: `Contrato habitación Les Corts Barcelona — ${PRICE}`,
    metaDescription: `Contrato habitación Les Corts: Zona Universitària, Pedralbes. ${PRICE} IVA incl. Estudiantes, fianza e inventario Livendia.`,
    keywords: [
      "contrato alquiler habitacion les corts",
      "contrato habitacion zona universitaria",
      "alquilar habitacion pedralbes contrato",
    ],
    heroSubtitle: `Les Corts combina Zona Universitària, familias en Pedralbes y pisos compartidos cerca del campus. ${PRICE} IVA incl.: contrato de habitación con cláusulas de curso académico, fianza legal e inventario con fotos.`,
    localMarketIntro:
      "Cerca de la UB y ESADE muchos alquileres duran un curso. Sin contrato, la salida en junio y la devolución de fianza se discuten cada verano.",
    zonesHeading: "Les Corts — barrios para contrato de habitación",
    zonesParagraph: "Áreas del distrito donde redactamos contratos:",
    zoneGroups: [
      { district: "Zona Universitària", areas: "Campus, residencias compartidas" },
      { district: "Pedralbes", areas: "Pisos señoriales, habitaciones premium" },
      { district: "Les Corts centre", areas: "Metro Les Corts, familias" },
      { district: "Maternitat-Sant Ramon", areas: "Zona residencial tranquila" },
    ],
    riskTitles: [
      "Contratos de curso sin cláusula de salida en junio",
      "Fianza alta sin inventario en Pedralbes",
      "Pisos de 4 habitaciones sin reparto de luz",
    ],
    profileBarrios: ["Zona Universitària", "Pedralbes", "Les Corts centre"],
    finalCtaLead: "Contrato de habitación en Les Corts — gestor por teléfono",
    testimonials: [
      {
        quote:
          "Alquilaba a estudiantes en Zona Universitària. Livendia fijó curso, fianza e inventario; el gestor nos llamó antes de contratar.",
        author: "Clara & Marc",
        role: "Propietarios — Les Corts",
      },
      {
        quote:
          "Habitación en Pedralbes: necesitaba contrato serio antes de pagar dos meses de depósito. Explicaron cada cláusula por WhatsApp.",
        author: "Pol V.",
        role: "Inquilino — Pedralbes",
      },
    ],
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi (Barcelona)",
    zoneShort: "Sarrià-Sant Gervasi",
    heroH1: "Contrato de habitación en Sarrià-Sant Gervasi — pisos premium compartidos",
    metaTitle: `Contrato habitación Sarrià Sant Gervasi — ${PRICE}`,
    metaDescription: `Contrato alquiler habitación Sarrià, Sant Gervasi, Tres Torres. ${PRICE} IVA incl. Fianza, inventario y convivencia Livendia.`,
    keywords: [
      "contrato alquiler habitacion sarria",
      "contrato habitacion sant gervasi",
      "alquilar habitacion tres torres contrato",
    ],
    heroSubtitle: `En Sarrià-Sant Gervasi el ticket de habitación es alto y los inquilinos exigen formalidad. ${PRICE} IVA incl. — contrato blindado, fianza garantizada, inventario fotográfico detallado y normas de convivencia en pisos señoriales.`,
    localMarketIntro:
      "Bonanova, Tres Torres y Sarrià centre: propietarios comparten piso grande con profesionales o estudiantes de posgrado. Una cláusula mal redactada sobre portería, parking o zonas comunes cuesta más que el servicio Livendia.",
    zonesHeading: "Sarrià-Sant Gervasi — zonas habituales",
    zonesParagraph: "Redactamos contratos de habitación en:",
    zoneGroups: [
      { district: "Sarrià centre", areas: "Fincas señoriales, familias" },
      { district: "Sant Gervasi", areas: "Bonanova, Galvany" },
      { district: "Les Tres Torres", areas: "Alta demanda, pisos amplios compartidos" },
      { district: "Putxet (límite)", areas: "Vivienda unifamiliar y pisos altos" },
    ],
    riskTitles: [
      "Anexos (parking, trastero) omitidos en contrato de habitación",
      "Servicio de limpieza incluido mal definido",
      "Preaviso corto en operaciones premium",
    ],
    profileBarrios: ["Sarrià", "Sant Gervasi", "Tres Torres"],
    finalCtaLead: "Contrato de habitación en Sarrià-Sant Gervasi — due diligence convivencia",
    testimonials: [
      {
        quote:
          "Habitación en Bonanova con trastero incluido. El gestor reflejó anexos e inventario fotográfico antes de la firma.",
        author: "Anna & Sergi",
        role: "Propietarios — Sant Gervasi",
      },
      {
        quote:
          "Entré en piso compartido en Sarrià sin documento. Livendia equilibró fianza y normas de visitas del propietario residente.",
        author: "Imma L.",
        role: "Inquilina — Sarrià",
      },
    ],
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc (Barcelona)",
    zoneShort: "Sants-Montjuïc",
    heroH1: "Contrato de habitación en Sants-Montjuïc — Sants, Poble-sec y Hostafrancs",
    metaTitle: `Contrato habitación Sants Poble-sec — ${PRICE}`,
    metaDescription: `Contrato habitación Sants-Montjuïc: Sants, Poble-sec, Hostafrancs. ${PRICE} IVA incl. Inventario, fianza y gestor Livendia.`,
    keywords: [
      "contrato alquiler habitacion sants",
      "contrato habitacion poble sec",
      "alquilar habitacion hostafrancs contrato",
    ],
    heroSubtitle: `Sants, Poble-sec y la Bordeta concentran pisos compartidos asequibles y alta rotación. ${PRICE} IVA incl.: contrato de habitación con gastos de suministros claros, fianza legal e inventario con fotos.`,
    localMarketIntro:
      "Cerca de Sants Estació y Poble-sec muchos inquilinos llegan por trabajo temporal. Obra nueva en Marina del Prat Vermell convive con fincas antiguas: el contrato debe reflejar qué incluye la renta.",
    zonesHeading: "Sants-Montjuïc — barrios",
    zonesParagraph: "Contratos de habitación en:",
    zoneGroups: [
      { district: "Sants", areas: "Estació, Creu Coberta, pisos 3-4 habitaciones" },
      { district: "Poble-sec", areas: "Montjuïc (límite), vida nocturna, rotación" },
      { district: "Hostafrancs", areas: "Familias, metro L1" },
      { district: "Marina del Prat Vermell", areas: "Obra nueva, promociones compartidas" },
    ],
    riskTitles: [
      "Obra nueva con gastos de comunidad mal repartidos",
      "Estancias cortas laborales sin preaviso",
      "Pisos antiguos sin inventario de electrodomésticos",
    ],
    profileBarrios: ["Sants", "Poble-sec", "Hostafrancs"],
    finalCtaLead: "Contrato de habitación en Sants-Montjuïc — listo en 48-72 h",
    testimonials: [
      {
        quote:
          "Piso compartido en Poble-sec. Livendia redactó convivencia, luz e inventario; firmamos con firma electrónica certificada.",
        author: "Rosa & Joel",
        role: "Propietaria — Poble-sec",
      },
      {
        quote:
          "Habitación en Sants Estació: el gestor explicó preaviso y fianza antes de que pagara depósito.",
        author: "Miquel T.",
        role: "Inquilino — Sants",
      },
    ],
  },
  {
    slug: "barcelona-ciutat-vella",
    city: "Ciutat Vella (Barcelona)",
    zoneShort: "Ciutat Vella",
    heroH1: "Contrato de habitación en Ciutat Vella — Born, Raval, Gòtic y Barceloneta",
    metaTitle: `Contrato habitación Ciutat Vella — ${PRICE} · Born Raval`,
    metaDescription: `Contrato alquiler habitación Ciutat Vella: Born, Raval, Gòtic, Barceloneta. ${PRICE} IVA incl. Convivencia e inventario Livendia.`,
    keywords: [
      "contrato alquiler habitacion raval",
      "contrato habitacion born barcelona",
      "alquilar habitacion gothic quarter contrato",
    ],
    heroSubtitle: `Ciutat Vella mezcla turismo, estudiantes y pisos centenarios compartidos. ${PRICE} IVA incl. — contrato de habitación adaptado a convivencia intensa, fianza garantizada e inventario fotográfico detallado.`,
    localMarketIntro:
      "En El Raval y el Born muchos pisos tienen habitaciones interiores sin ventana o locales en planta baja. El contrato debe describir la habitación concreta, ventilación y uso de terrazas comunes.",
    zonesHeading: "Ciutat Vella — barrios",
    zonesParagraph: "Redactamos contratos en:",
    zoneGroups: [
      { district: "El Raval", areas: "Universidad, multicultural, rotación alta" },
      { district: "El Born", areas: "Turismo residencial, pisos señoriales compartidos" },
      { district: "Barri Gòtic", areas: "Fincas estrechas, 3-4 habitaciones" },
      { district: "La Barceloneta", areas: "Estacionalidad, pisos pequeños compartidos" },
    ],
    riskTitles: [
      "Habitación interior mal descrita en anuncio",
      "Estancias turísticas encubiertas sin contrato",
      "Ruido y horarios no regulados por escrito",
    ],
    profileBarrios: ["El Raval", "El Born", "Gòtic"],
    finalCtaLead: "Contrato de habitación en Ciutat Vella — gestor Livendia",
    testimonials: [
      {
        quote:
          "Habitación en El Raval. El gestor incluyó inventario con fotos y normas de visitas en piso ya habitado.",
        author: "Lucía G.",
        role: "Inquilina — El Raval",
      },
      {
        quote:
          "Alquilaba en El Born a estudiantes Erasmus. Livendia fijó duración, fianza y limpieza de cocina compartida.",
        author: "Marta & Oriol",
        role: "Propietarios — Born",
      },
    ],
  },
  {
    slug: "barcelona-horta-guinardo",
    city: "Horta-Guinardó (Barcelona)",
    zoneShort: "Horta-Guinardó",
    heroH1: "Contrato de habitación en Horta-Guinardó — Carmel, Horta y Guinardó",
    metaTitle: `Contrato habitación Horta Guinardó — ${PRICE}`,
    metaDescription: `Contrato habitación El Carmel, Horta, Guinardó. ${PRICE} IVA incl. Piso compartido, fianza e inventario Livendia.`,
    keywords: [
      "contrato alquiler habitacion el carmel",
      "contrato habitacion horta barcelona",
      "alquilar habitacion guinardo contrato",
    ],
    heroSubtitle: `El Carmel, Horta centre y el Guinardó tienen pisos familiares convertidos en 3-4 habitaciones. ${PRICE} IVA incl. — contrato con convivencia, fianza conforme a la ley e inventario fotográfico.`,
    localMarketIntro:
      "En ladera y barrios residenciales, propietarios e inquilinos suelen conocerse de vista. Aun así, sin contrato escrito la fianza y la luz se discuten al primer cambio de inquilino.",
    zonesHeading: "Horta-Guinardó — zonas",
    zonesParagraph: "Contratos de habitación en:",
    zoneGroups: [
      { district: "El Carmel", areas: "Ladera, familias, pisos amplios compartidos" },
      { district: "Horta centre", areas: "Mercado, ambiente de barrio" },
      { district: "El Guinardó", areas: "Parc Güell (límite), vivienda densa" },
      { district: "La Teixonera", areas: "Rotación moderada, estudiantes" },
    ],
    riskTitles: [
      "Pisos en ladera con reparto de calefacción confuso",
      "Familias que alquilan habitación a estudiantes sin preaviso",
      "Inventario omitido en pisos amueblados",
    ],
    profileBarrios: ["El Carmel", "Horta centre", "Guinardó"],
    finalCtaLead: "Contrato de habitación en Horta-Guinardó — gestor especializado",
    testimonials: [
      {
        quote:
          "Dos habitaciones en El Carmel. El gestor repartió gastos y dejó inventario fotográfico de cada habitación.",
        author: "Jordi & Núria",
        role: "Propietarios — El Carmel",
      },
      {
        quote:
          "Entré en piso en Horta sin contrato. Livendia lo tramitó con normas de convivencia claras.",
        author: "Alejandro R.",
        role: "Inquilino — Horta",
      },
    ],
  },
  {
    slug: "barcelona-nou-barris",
    city: "Nou Barris (Barcelona)",
    zoneShort: "Nou Barris",
    heroH1: "Contrato de habitación en Nou Barris — Verdun, Roquetes y Trinitat Vella",
    metaTitle: `Contrato habitación Nou Barris — ${PRICE} IVA incl.`,
    metaDescription: `Contrato alquiler habitación Nou Barris: Verdun, Roquetes. ${PRICE} IVA incl. Fianza, inventario y gestor Livendia.`,
    keywords: [
      "contrato alquiler habitacion nou barris",
      "contrato habitacion verdun",
      "alquilar habitacion trinitat vella contrato",
    ],
    heroSubtitle: `Nou Barris ofrece habitaciones más asequibles con pisos de gran escala y muchas habitaciones. ${PRICE} IVA incl. — contrato blindado, fianza garantizada e inventario detallado para convivencia en bloques de los 60-70.`,
    localMarketIntro:
      "En Verdun, Roquetes y Trinitat Vella es habitual compartir piso entre trabajadores y familias. La formalidad del contrato protege tanto al propietario residente como al inquilino que llega de fuera.",
    zonesHeading: "Nou Barris — barrios",
    zonesParagraph: "Redactamos contratos en:",
    zoneGroups: [
      { district: "Verdun", areas: "Bloques amplios, 3-4 habitaciones" },
      { district: "Roquetes", areas: "Familias, metro L3" },
      { district: "Trinitat Vella", areas: "Renovación urbana, pisos compartidos" },
      { district: "La Porta", areas: "Límite Sant Andreu, demanda estable" },
    ],
    riskTitles: [
      "Comunidades grandes con derramas no explicadas al inquilino",
      "Fianza en efectivo sin recibo ni inventario",
      "Limpieza de escaleras y zonas comunes sin turnos",
    ],
    profileBarrios: ["Verdun", "Roquetes", "Trinitat Vella"],
    finalCtaLead: "Contrato de habitación en Nou Barris — precio legal garantizado",
    testimonials: [
      {
        quote:
          "Alquilaba habitación en Roquetes. Livendia dejó fianza, preaviso e inventario con fotos antes de cobrar la primera renta.",
        author: "Rosa & Joel",
        role: "Propietaria — Roquetes",
      },
      {
        quote:
          "Piso compartido en Verdun: el gestor explicó cláusulas de convivencia a todos los inquilinos por teléfono.",
        author: "Miquel T.",
        role: "Inquilino — Nou Barris",
      },
    ],
  },
  {
    slug: "barcelona-sant-andreu",
    city: "Sant Andreu (Barcelona)",
    zoneShort: "Sant Andreu",
    heroH1: "Contrato de habitación en Sant Andreu — Sagrera, Palomar y Bon Pastor",
    metaTitle: `Contrato habitación Sant Andreu — ${PRICE}`,
    metaDescription: `Contrato habitación Sant Andreu de Palomar, La Sagrera. ${PRICE} IVA incl. Convivencia, fianza e inventario Livendia.`,
    keywords: [
      "contrato alquiler habitacion sant andreu",
      "contrato habitacion la sagrera",
      "alquilar habitacion bon pastor contrato",
    ],
    heroSubtitle: `Sant Andreu crece con La Sagrera y atrae inquilinos de toda Barcelona. ${PRICE} IVA incl. — contrato de habitación con derechos de convivencia claros, fianza legal e inventario fotográfico.`,
    localMarketIntro:
      "En Sant Andreu de Palomar y Bon Pastor muchos propietarios alquilan una habitación en piso familiar. El contrato debe equilibrar privacidad del inquilino y normas de la casa.",
    zonesHeading: "Sant Andreu — zonas",
    zonesParagraph: "Contratos de habitación en:",
    zoneGroups: [
      { district: "Sant Andreu de Palomar", areas: "Centro del distrito, comercio local" },
      { district: "La Sagrera", areas: "AVE, obra, pisos reconvertidos" },
      { district: "Bon Pastor", areas: "Industrial reconvertido, familias" },
      { district: "Navas", areas: "Límite Sant Martí, pisos compartidos" },
    ],
    riskTitles: [
      "Obra y ruido en La Sagrera no reflejados en contrato",
      "Pisos familiares con niños y convivencia no regulada",
      "Varias habitaciones con gastos desiguales",
    ],
    profileBarrios: ["Palomar", "La Sagrera", "Bon Pastor"],
    finalCtaLead: "Contrato de habitación en Sant Andreu — gestor Livendia",
    testimonials: [
      {
        quote:
          "Habitación en La Sagrera. El gestor alineó fianza e inventario con lo pactado en la visita.",
        author: "Anna & Sergi",
        role: "Inquilinos — La Sagrera",
      },
      {
        quote:
          "Alquilaba dos habitaciones en Palomar. Livendia redactó contratos coherentes sobre luz e internet.",
        author: "Imma L.",
        role: "Propietaria — Sant Andreu",
      },
    ],
  },
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí (Barcelona)",
    zoneShort: "Sant Martí",
    heroH1: "Contrato de habitación en Sant Martí — Clot, Verneda y Diagonal Mar",
    metaTitle: `Contrato habitación Sant Martí El Clot — ${PRICE}`,
    metaDescription: `Contrato habitación Sant Martí: El Clot, La Verneda, Diagonal Mar. ${PRICE} IVA incl. También Poblenou. Gestor Livendia.`,
    keywords: [
      "contrato alquiler habitacion el clot",
      "contrato habitacion sant marti",
      "alquilar habitacion la verneda contrato",
    ],
    heroSubtitle: `Sant Martí va más allá del 22@: El Clot, La Verneda y Diagonal Mar tienen miles de pisos compartidos. ${PRICE} IVA incl. — contrato de habitación, inventario con fotos y asesoramiento hasta la firma.`,
    localMarketIntro:
      "El Clot y La Verneda combinan familias de largo recorrido con inquilinos jóvenes. Promociones en Diagonal Mar exigen contratos que reflejen parking, trastero y gastos de comunidad.",
    zonesHeading: "Sant Martí — barrios (distrito completo)",
    zonesParagraph: "Además de Poblenou (landing específica), tramitamos contratos en:",
    zoneGroups: [
      { district: "El Clot", areas: "Estació del Nord, Rambla del Clot" },
      { district: "La Verneda", areas: "Gran via, bloques 3-4 habitaciones" },
      { district: "Diagonal Mar", areas: "Obra nueva, promociones" },
      { district: "Provençals", areas: "Familiar, metro L4" },
    ],
    riskTitles: [
      "Promociones nuevas con cláusulas copiadas de otra ciudad",
      "Pisos multi-bloque con comunidad compleja",
      "Parking incluido en renta sin anexo escrito",
    ],
    profileBarrios: ["El Clot", "La Verneda", "Diagonal Mar"],
    finalCtaLead: "Contrato de habitación en Sant Martí — distrito completo",
    testimonials: [
      {
        quote:
          "Piso compartido en El Clot. Livendia definió convivencia e inventario fotográfico de habitaciones y salón.",
        author: "Laura & Pau",
        role: "Propietarios — El Clot",
      },
      {
        quote:
          "Habitación en La Verneda: contrato con fianza garantizada y explicación de cláusulas por WhatsApp.",
        author: "Arnau M.",
        role: "Inquilino — Sant Martí",
      },
    ],
  },
];

export const HABITACION_BCN_BARRIO_PUBLISHED_SLUGS: readonly string[] = BARRIO_SPECS.map((s) => s.slug);

const HERO_BULLETS = [
  "Fianza garantizada conforme a la ley",
  "Precio legal garantizado en web",
  "Derechos claros propietario-inquilino",
  "Inventario detallado con fotos",
  "Llamada con gestor antes de contratar",
] as const;

export const HABITACION_BCN_BARRIO_CITIES = BARRIO_SPECS.map((spec) => ({
    slug: spec.slug,
    city: spec.city,
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroBadge: `Piso compartido · ${spec.zoneShort}`,
    heroH1: spec.heroH1,
    metaTitle: spec.metaTitle,
    metaDescription: spec.metaDescription,
    keywords: spec.keywords,
    heroBullets: [...HERO_BULLETS],
    finalCtaLead: spec.finalCtaLead,
    testimonialsTitle: `Contratos de habitación en ${spec.zoneShort} con Livendia`,
    testimonials: spec.testimonials,
  }));

const SEO_BY_SLUG: Record<string, HabitacionLocalSeoContent> = Object.fromEntries(
  BARRIO_SPECS.map((spec) => [spec.slug, buildSeo(spec)]),
);

export function getHabitacionBcnBarrioSeoContent(slug: string): HabitacionLocalSeoContent | undefined {
  return SEO_BY_SLUG[slug];
}

export const HABITACION_BCN_BARRIO_HUB = BARRIO_SPECS.map((s) => ({
  slug: s.slug,
  shortName: s.zoneShort,
  name: s.city,
}));
