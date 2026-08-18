import type { AlquilerRegulatoryLocal } from "@/lib/administracion-alquiler-local-regulatory";
import { ALQUILER_REGULATORY_BY_SLUG } from "@/lib/administracion-alquiler-local-regulatory";
import {
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL,
} from "@/lib/catalog.public";

export type PackCommercialEmpathyCard = { title: string; body: string };
export type PackCommercialCasuistica = { title: string; body: string };

export type PackCommercialLocalSeoContent = {
  /** Párrafo bajo el hero — sustituye heroLead en landings locales. */
  heroSubtitle: string;
  /** Intro de mercado local (precio medio, demanda). */
  marketIntro: string;
  precioMedioAlquiler?: number;
  precioMedioVenta?: number;
  /** Problema local que el pack resuelve. */
  localProblemIntro: string;
  /** Notas locales por paso (misma longitud que steps del pack nacional). */
  stepLocalNotes: readonly string[];
  /** Tarjetas de empatía (3 recomendadas). */
  empathyCards: readonly PackCommercialEmpathyCard[];
  /** Situaciones frecuentes en la ciudad. */
  casuistica: readonly PackCommercialCasuistica[];
  /** FAQ adicional local — se fusiona con la nacional. */
  faqLocal: readonly { question: string; answer: string }[];
  /** Barrios / zonas atendidas. */
  barrios: readonly string[];
  barriosIntro: string;
  /** Bloque regulatorio (pack LAU). */
  regulatory?: AlquilerRegulatoryLocal;
  /** Texto sobre panel Livendia adaptado a la ciudad. */
  platformParagraph: string;
  /** Banners informativos extra locales. */
  localBanners: readonly { title: string; body: string }[];
};

const LAU_EMPATHY_SHARED: readonly PackCommercialEmpathyCard[] = [
  {
    title: "Ya tienes inquilino, pero el contrato te preocupa",
    body: "Encontraste arrendatario por Idealista o recomendación. Falta el contrato LAU bien redactado y alguien que gestione incidencias sin que te llamen a las 22 h.",
  },
  {
    title: "No quieres pagar comisión de agencia sobre la renta",
    body: "Las inmobiliarias de gestión cobran un mes de renta al año solo por cobrar y atender averías. Livendia cobra tarifa plana: 145 € contrato + 49 €/mes administración.",
  },
  {
    title: "Vives lejos del piso o tienes poco tiempo",
    body: "Segunda residencia, herencia o traslado al extranjero: el panel Livendia y el gestor dedicado centralizan cobros, incidencias y documentación sin desplazarte.",
  },
];

export const PACK_LAU_ADMIN_LOCAL_SEO: Record<string, PackCommercialLocalSeoContent> = {
  madrid: {
    precioMedioAlquiler: 1_350,
    heroSubtitle:
      "Vas a alquilar tu piso en Madrid con inquilino ya seleccionado. Este pack une contrato LAU redactado por gestor legal (145 €) y el primer mes de administración Livendia (49 €) para que Chamberí, Salamanca o Vallecas no te exijan estar disponible 24/7 desde el día uno.",
    marketIntro:
      "Madrid concentra el mercado de alquiler más activo de España: rotación rápida, visitas en 48 h y propietarios particulares que evitan comisiones del 10 % anual de las inmobiliarias de gestión. El ticket medio ronda 1.200–1.400 €/mes según distrito (Idealista, 2026).",
    localProblemIntro:
      "En Madrid el riesgo no suele ser encontrar inquilino, sino firmar un contrato genérico que no refleja gastos de comunidad en bloques grandes de Tetuán o Carabanchel, o asumir tú mismo el cobro y las averías cuando vives en otra provincia.",
    stepLocalNotes: [
      "El gestor recoge datos del piso en Madrid capital o cinturón (Móstoles, Getafe, Leganés) y del inquilino para redactar el LAU.",
      "Revisamos cláusulas de actualización de renta conforme a LAU general — Madrid no tiene zona tensionada declarada.",
      "Tras la firma, Livendia pasa a ser interlocutor del inquilino: cobro por transferencia, incidencias documentadas en panel.",
      "Renovaciones, IBI repercutido y comunicaciones con comunidad: tú decides sobre obras; el gestor filtra el contacto diario.",
    ],
    empathyCards: LAU_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Comunidades saturadas en Salamanca y Chamberí",
        body: "Bloques con decenas de propietarios exigen certificados y autorizaciones de obras por escrito. El contrato LAU debe detallar quién paga derramas y cómo se comunican las incidencias con la comunidad.",
      },
      {
        title: "Alquiler en cinturón sur con inquilino de empresa",
        body: "Contratos con aval bancario o empresa pagadora requieren cláusulas específicas. El gestor las adapta sin plantillas de otra CCAA.",
      },
      {
        title: "Propietario no residente en Madrid",
        body: "Vives en otra ciudad o en el extranjero: la administración Livendia evita que el inquilino te contacte directamente para averías, certificados o retrasos de transferencia.",
      },
      {
        title: "Segunda vivienda heredada sin experiencia previa",
        body: "Primera vez alquilando en Madrid: orientamos depósito ante IVIMA, fianza legal y causas de resolución conforme a la LAU de la Comunidad de Madrid.",
      },
    ],
    faqLocal: [
      {
        question: "¿Aplica zona tensionada o IRAV en Madrid capital?",
        answer:
          "No. La Comunidad de Madrid no tiene zonas de mercado residencial tensionado declaradas ante el Ministerio de Vivienda (verificado 2026). Los nuevos contratos se rigen por la LAU general sin tope IRAV.",
      },
      {
        question: "¿Dónde se deposita la fianza legal en Madrid?",
        answer:
          "Ante el organismo autonómico de vivienda de la Comunidad de Madrid (IVIMA u organismo equivalente). Livendia te orienta en plazos y documentación al alta.",
      },
      {
        question: "¿Cuánto cuesta el pack LAU + administración en Madrid?",
        answer: `Mismos precios en toda España: ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl. estimados (contrato LAU 145 € + primer mes administración 49 €). Sin comisión sobre la renta.`,
      },
    ],
    barrios: [
      "Centro",
      "Salamanca",
      "Chamberí",
      "Tetuán",
      "Carabanchel",
      "Vallecas",
      "Fuencarral",
      "Móstoles",
      "Getafe",
      "Leganés",
    ],
    barriosIntro: "Atendemos alquileres en Madrid capital y municipios del cinturón con el mismo pack y gestor dedicado online.",
    regulatory: ALQUILER_REGULATORY_BY_SLUG.madrid,
    platformParagraph:
      "Desde el panel Livendia ves contratos, justificantes de renta, historial de incidencias y mensajes con tu gestor — útil si el piso está en Madrid y tú resides en otra provincia. Sin app propia del inquilino invasiva: canal profesional Livendia-arrendatario.",
    localBanners: [
      {
        title: "Madrid: mercado caliente, contrato preciso",
        body: "Con demanda alta, los inquilinos firman rápido pero también reclaman con rigor. Un LAU mal redactado sobre gastos, mascotas o subarriendo puede generar conflictos costosos. 145 € de gestoría vs meses de litigio.",
      },
      {
        title: "Administración desde el primer mes en distritos con mucha rotación",
        body: "En barrios universitarios o de alta demanda las incidencias son frecuentes. Por 49 €/mes Livendia asume cobro, seguimiento de averías y comunicación con el inquilino sin permanencia.",
      },
    ],
  },
  barcelona: {
    precioMedioAlquiler: 1_556,
    heroSubtitle:
      "Alquilas en Barcelona o área metropolitana con inquilino ya encontrado. Pack LAU + administración (194 € IVA incl. estimados): contrato adaptado a zona tensionada, INCASÒL e IRAV, más gestor que gestiona cobros e incidencias desde el primer mes.",
    marketIntro:
      "Barcelona es uno de los mercados más regulados de España: 271 municipios catalanes declarados zona tensionada, IRAV como tope en nuevos contratos y depósito en Incasòl. El ticket medio supera 1.500 €/mes (Brains Real Estate, Q1 2026).",
    localProblemIntro:
      "En Eixample, Gràcia o L'Hospitalet un PDF de internet no contempla IRAV, gran tenedor, cèdula d'habitabilitat ni cláusulas sobre turismo. Y cuando empieza el alquiler, el propietario particular recibe llamadas de averías y comunidad sin filtro.",
    stepLocalNotes: [
      "Recogemos datos del piso (zona tensionada, INCASÒL, tipología) y del inquilino para redactar LAU conforme a normativa catalana.",
      "Borrador con cláusulas sobre actualización IRAV, fianza en Incasòl y causas de resolución — revisión antes de firma.",
      "Administración activa: Livendia canal único con inquilino; cobro de renta e incidencias en panel 24/7.",
      "Renovaciones y comunicaciones con comunidad en edificios con obras o derramas: gestor filtra, tú decides.",
    ],
    empathyCards: LAU_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Zona tensionada e IRAV en Eixample y Gràcia",
        body: "Nuevos contratos tienen tope de renta según IRAV si procede. El gestor verifica si aplica límite y redacta cláusulas conforme a la declaración vigente hasta marzo de 2027.",
      },
      {
        title: "Depósito en Incasòl (Generalitat)",
        body: "La fianza legal se deposita ante Incasòl, no ante organismo estatal. Livendia orienta plazos y documentación al alta del arrendamiento.",
      },
      {
        title: "Pisos con régimen turístico previo o habitaciones",
        body: "Si alquilas piso completo tras uso turístico o compartido, el contrato debe reflejar la tipología real. Plantillas genéricas generan conflictos con comunidad y administración.",
      },
      {
        title: "Propietario en L'Hospitalet, Cornellà o Badalona",
        body: "Mismo pack y precios en área metropolitana. Administración centralizada si vives fuera del municipio donde está el piso.",
      },
    ],
    faqLocal: [
      {
        question: "¿Barcelona es zona tensionada para el contrato LAU?",
        answer:
          "Sí. Barcelona está en la declaración catalana de zona de mercado residencial tensionado (271 municipios, vigente desde marzo 2024). Afecta a nuevos contratos: límites de renta e IRAV. El gestor Livendia lo contempla en el borrador.",
      },
      {
        question: "¿Hay que depositar la fianza en Incasòl?",
        answer:
          "Sí, en Catalunya la fianza legal de un mes se deposita ante Incasòl. Te orientamos en plazos y documentación.",
      },
      {
        question: "¿Cuánto cuesta el pack en Barcelona?",
        answer: `Tarifa nacional sin recargo: ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl. (145 € LAU + 49 € 1.er mes admin). Sin comisión sobre la renta ni permanencia en administración.`,
      },
    ],
    barrios: [
      "Eixample",
      "Gràcia",
      "Les Corts",
      "Sants",
      "Sant Martí",
      "L'Hospitalet",
      "Badalona",
      "Cornellà",
      "Sant Cugat",
    ],
    barriosIntro: "Landings específicas en Les Corts, Gràcia, L'Hospitalet y Cornellà; mismo pack en toda el área metropolitana.",
    regulatory: ALQUILER_REGULATORY_BY_SLUG.barcelona,
    platformParagraph:
      "Panel Livendia con contratos, rentas, incidencias y contacto con gestor por WhatsApp. Especialmente útil en Barcelona si el piso está en un barrio y tú gestionas desde otra ciudad o país.",
    localBanners: [
      {
        title: "Barcelona exige más que un PDF de alquiler",
        body: "IRAV, Incasòl, zona tensionada y estatutos de comunidad en edificios antiguos del Eixample. 145 € de contrato LAU profesional evita errores que cuestan meses de conflicto.",
      },
      {
        title: "Administración: evita ser el 'propietario de WhatsApp'",
        body: "Averías, certificados de comunidad, retrasos de transferencia: 49 €/mes para que Livendia sea el interlocutor desde el día uno, sin comisión del 10 % anual de agencia.",
      },
    ],
  },
  valencia: {
    precioMedioAlquiler: 986,
    heroSubtitle:
      "Alquilas en Valencia o l'Horta con inquilino ya seleccionado. Pack contrato LAU + administración (194 € IVA incl.): redacción conforme a LAU y normativa valenciana, más gestor que cobra renta y gestiona incidencias desde el primer mes.",
    marketIntro:
      "Valencia combina mercado dinámico (Ruzafa, Benimaclet, Ciutat Vella) con rotación rápida y muchos propietarios primerizos. Ticket medio ~950–1.000 €/mes (Enalquiler / Idealista, 2026), por debajo de Madrid y Barcelona.",
    localProblemIntro:
      "En Ruzafa o Benimaclet es habitual reservar en 48 h y firmar promesas verbales. Sin contrato LAU que recoja renta, gastos y suministros por escrito, las reclamaciones aparecen en el segundo mes. Y las comunidades sin administrador profesional complican certificados.",
    stepLocalNotes: [
      "Datos del piso en Valencia capital, Mislata, Torrent o Paterna; contrato LAU adaptado a Comunitat Valenciana.",
      "Cláusulas sobre IBI, basura, ascensor y actualización de renta — LAU general sin IRAV en Valencia.",
      "Alta de administración: canal Livendia-inquilino, cobro y registro de incidencias en panel.",
      "Seguimiento de comunidades sin gestor profesional: el gestor contacta presidente y documenta comunicaciones.",
    ],
    empathyCards: LAU_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Comunidades sin administrador en Ruzafa y Benimaclet",
        body: "El presidente gestiona el papeleo a tiempo parcial. El contrato debe ser claro sobre gastos; la administración Livendia ayuda a canalizar incidencias sin depender de vecinos.",
      },
      {
        title: "Alquiler por habitaciones mal convertido a piso completo",
        body: "Si pasas de habitaciones a contrato LAU de vivienda entera, las cláusulas deben reflejar inventario, suministros y estado del piso. Plantillas genéricas no bastan.",
      },
      {
        title: "Propietario en Madrid que alquila en Valencia",
        body: "Segunda residencia o herencia: panel Livendia y gestor dedicado evitan desplazamientos para cobros, averías o renovación de contrato.",
      },
      {
        title: "Rotación rápida en Ciutat Vella",
        body: "Reservas en días exigen contrato listo antes de la señal. Livendia entrega borrador LAU en 48–72 h laborables tras contratar.",
      },
    ],
    faqLocal: [
      {
        question: "¿Valencia es zona tensionada?",
        answer:
          "No. Valencia no está declarada zona de mercado residencial tensionado. Los contratos se rigen por LAU general sin tope IRAV.",
      },
      {
        question: "¿Dónde se deposita la fianza en la Comunitat Valenciana?",
        answer:
          "Ante el organismo autonómico de vivienda de la Generalitat Valenciana, conforme a LAU. Te orientamos al alta.",
      },
      {
        question: "¿Precio del pack en Valencia?",
        answer: `Igual que en toda España: ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl. Sin comisión sobre la renta ni permanencia en administración.`,
      },
    ],
    barrios: ["Ciutat Vella", "Ruzafa", "Benimaclet", "Campanar", "Malvarrosa", "Patraix", "Mislata", "Torrent", "Paterna"],
    barriosIntro: "Valencia capital y municipios del área metropolitana con gestoría online y mismos precios nacionales.",
    regulatory: ALQUILER_REGULATORY_BY_SLUG.valencia,
    platformParagraph:
      "Centraliza contrato, cobros e incidencias en el panel Livendia. Ideal si alquilas en Valencia y resides en otra ciudad: el gestor es tu interlocutor operativo con el inquilino.",
    localBanners: [
      {
        title: "Valencia: reserva rápida, contrato a medida",
        body: "Promesas verbales en la visita exigen un LAU que las recoja por escrito: renta, fianza, gastos de comunidad e IBI. 145 € vs reclamaciones en el segundo mes.",
      },
      {
        title: "Administración sin comisión del 10 % anual",
        body: "49 €/mes IVA incl. para cobro, incidencias y comunicación con inquilino. Cancelación con 30 días de preaviso, sin permanencia.",
      },
    ],
  },
};

const ARRAS_EMPATHY_SHARED: readonly PackCommercialEmpathyCard[] = [
  {
    title: "Tienes comprador pero el papeleo te abruma",
    body: "Firmaste de palabra en Idealista. Entre arras y notaría descubres comunidad, nota simple, ITE y certificado energético. Este pack une arras profesionales y gestor documental.",
  },
  {
    title: "No quieres pagar miles en comisión de agencia",
    body: `En un piso de 300.000 €, el 3 % son ~9.000 € + IVA solo por intermediar. Si tú trajiste al comprador, el pack cuesta ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
  },
  {
    title: "Vendes desde otra ciudad o país",
    body: "Segunda residencia, herencia o expatriado: el panel Livendia centraliza documentos y tu gestor persigue certificados de comunidad sin que viajes.",
  },
];

export const PACK_ARRAS_GESTION_LOCAL_SEO: Record<string, PackCommercialLocalSeoContent> = {
  madrid: {
    precioMedioVenta: 350_000,
    heroSubtitle:
      "Vendes tu piso en Madrid entre particulares con comprador ya encontrado. Pack arras + gestión documental (495 € IVA incl.): contrato de arras equilibrado y gestor que recopila comunidad, nota simple, ITE e hipoteca hasta notaría — sin comisión del 3–5 %.",
    marketIntro:
      "Madrid es el mercado de venta más líquido de España: plazos ajustados, compradores con hipoteca preconcedida y vendedores particulares que ahorran miles evitando agencia. Precio medio ~350.000 € (Idealista, 2026).",
    localProblemIntro:
      "En Salamanca y Chamberí las comunidades saturadas tardan semanas en el certificado de deuda cero. Edificios de los 60–70 con derramas de fachada y plazos cortos con el comprador: un retraso documental puede tumbar la operación.",
    stepLocalNotes: [
      "Arras por 145 € IVA incl.: cláusulas sobre señal, plazos, penalizaciones e hipoteca del comprador en mercado madrileño acelerado.",
      "Gestión documental 350 €: solicitud prioritaria de certificado de comunidad en bloques grandes y coordinación con banco del vendedor.",
      "Checklist: ITE en edificios +50 años, energético vigente, nota simple sin cargas ocultas — informe semáforo pre-notaría.",
      "Escritura con expediente ordenado: reduces rebajas tardías del comprador por documentación incompleta.",
    ],
    empathyCards: ARRAS_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Comunidades saturadas en Salamanca y Chamberí",
        body: "Certificado de deuda cero en 2–3 semanas si el administrador está saturado. El gestor lo solicita en la semana 1.",
      },
      {
        title: "Derramas de rehabilitación en Carabanchel y Tetuán",
        body: "Derramas de 5.000–15.000 € por piso aprobadas en junta. Cruce de actas y certificado antes de notaría.",
      },
      {
        title: "ITE obligatoria en edificios antiguos del centro",
        body: "Madrid no exige cédula de habitabilidad, pero sí ITE en muchos edificios +50 años. Verificación de vigencia y deficiencias.",
      },
      {
        title: "Hipoteca pendiente con plazos ajustados",
        body: "Compradores que compiten por el piso: retraso del banco en certificado de deuda puede tumbar la operación. Coordinación desde el día uno.",
      },
    ],
    faqLocal: [
      {
        question: "¿Hace falta cédula de habitabilidad para vender en Madrid?",
        answer:
          "No. Madrid eliminó la exigencia para transmitir vivienda. Sí pueden ser obligatorios ITE (+50 años) y certificado energético vigente.",
      },
      {
        question: "¿Cuánto cuesta el pack arras + gestión en Madrid?",
        answer: `495 € IVA incl. estimados (145 € arras + 350 € gestión documental). Sin comisión sobre el precio de venta. En un piso de 350.000 € ahorras miles vs agencia.`,
      },
      {
        question: "¿Gestionáis ventas si vivo fuera de Madrid pero el piso está en la capital?",
        answer:
          "Sí. Panel Livendia y gestor dedicado por WhatsApp. Mismo pack online con seguimiento de comunidad y registros sin desplazarte.",
      },
    ],
    barrios: ["Centro", "Salamanca", "Chamberí", "Retiro", "Tetuán", "Carabanchel", "Vallecas", "Fuencarral", "Moncloa"],
    barriosIntro: "Venta entre particulares en Madrid capital y cinturón con gestor documental dedicado.",
    platformParagraph:
      "Sube y consulta documentos en el panel Livendia: nota simple, certificados de comunidad, informe semáforo. Tu gestor persigue plazos mientras tú cierras la negociación con el comprador.",
    localBanners: [
      {
        title: "Madrid: plazos cortos, documentación impecable",
        body: "Con demanda alta, el comprador no espera semanas por el certificado de comunidad. Pack 495 € vs 10.000 €+ de comisión si ya tienes comprador.",
      },
      {
        title: "Arras equilibradas en mercado competitivo",
        body: "Penalizaciones desequilibradas o plazos irreales dan al comprador margen para pedir rebaja antes de notaría. Gestor legal redacta lo pactado verbalmente.",
      },
    ],
  },
  barcelona: {
    precioMedioVenta: 420_000,
    heroSubtitle:
      "Vendes en Barcelona o área metropolitana entre particulares. Pack arras + gestión documental (495 € IVA incl.): arras profesionales y gestor que gestiona cèdula d'habitabilitat, ITE, comunidad e Incasòl hasta escritura.",
    marketIntro:
      "Barcelona concentra ventas entre particulares con comprador de Idealista, herencias en Eixample y segundas residencias. Precio medio ~420.000 €. La normativa catalana (cèdula, ITE, comunidades lentas) complica el tramo arras–notaría.",
    localProblemIntro:
      "El principal retraso en Barcelona es la documentación de comunidad: certificado de deuda cero puede tardar 10–20 días en bloques grandes del Eixample o Gràcia. Sin gestor, pierdes la fecha de escritura.",
    stepLocalNotes: [
      "Arras 145 €: cláusulas sobre señal, derramas conocidas e hipoteca del comprador en operación catalana.",
      "Gestión 350 €: verificación ITE en Eixample/Gràcia, cèdula d'habitabilitat vigente y certificado de comunidad.",
      "Informe semáforo: terrazas no inscritas, derramas aprobadas, energético caducado — antes de fijar notaría.",
      "Escritura con expediente coherente: el notario no sustituye la revisión previa del gestor.",
    ],
    empathyCards: ARRAS_EMPATHY_SHARED,
    casuistica: [
      {
        title: "ITE con deficiencias en Eixample y Gràcia",
        body: "Edificios anteriores a 1970 con ITE desfavorable. Sin regularizar, el notario lo pedirá el día de la firma.",
      },
      {
        title: "Cèdula d'habitabilitat caducada",
        body: "Obligatoria para transmitir en Catalunya. Validez 10 años; muchos pisos la tienen caducada sin que el vendedor lo sepa.",
      },
      {
        title: "Derramas de fachada o ascensor no reflejadas",
        body: "En Sarrià-Sant Gervasi y Eixample hay derramas aprobadas en junta. Cruce de actas y certificado de deuda.",
      },
      {
        title: "Terrazas o trasteros no inscritos en registro",
        body: "Elementos en escritura pero no en nota simple deben regularizarse antes de transmitir.",
      },
    ],
    faqLocal: [
      {
        question: "¿Es obligatoria la cèdula d'habitabilitat en Barcelona?",
        answer:
          "Sí, para transmitir vivienda en Catalunya. Si está caducada, debe renovarse antes de escriturar. El gestor lo verifica en el checklist inicial.",
      },
      {
        question: "¿Cuánto tarda la comunidad en dar el certificado de deuda cero?",
        answer:
          "De 3–5 días en comunidades pequeñas a 2–3 semanas en bloques grandes. Conviene contratar el pack justo tras firmar arras.",
      },
      {
        question: "¿Precio del pack en Barcelona?",
        answer: `495 € IVA incl. (145 € arras + 350 € gestión). Sin comisión sobre los ~420.000 € de precio medio. Alternativa: servicio completo 890 € si quieres acompañamiento integral.`,
      },
    ],
    barrios: ["Eixample", "Gràcia", "Les Corts", "Sarrià", "Sants", "L'Hospitalet", "Badalona", "Cornellà", "Sant Cugat"],
    barriosIntro: "Venta entre particulares en Barcelona ciudad y área metropolitana con gestor documental Livendia.",
    platformParagraph:
      "Panel Livendia para centralizar nota simple, certificados de comunidad e informe semáforo. Especialmente útil si vendes en Barcelona y resides fuera de Catalunya.",
    localBanners: [
      {
        title: "Barcelona: normativa catalana + plazos de comunidad",
        body: "Cèdula, ITE e Incasòl no aparecen en plantillas de arras de otras CCAA. Pack con gestor que conoce el trámite local.",
      },
      {
        title: "495 € vs comisión de agencia en piso de 420.000 €",
        body: "El 3 % serían 12.600 € + IVA solo por intermediar. Si tú encontraste al comprador, el pack cubre arras y documentación hasta notaría.",
      },
    ],
  },
  valencia: {
    precioMedioVenta: 220_000,
    heroSubtitle:
      "Vendes en Valencia entre particulares con comprador ya cerrado. Pack arras + gestión documental (495 € IVA incl.): arras equilibradas y gestor que gestiona cédula valenciana, comunidad sin administrador e ITE hasta escritura.",
    marketIntro:
      "Valencia vive un mercado en alza con muchos vendedores primerizos: precio medio ~220.000 €, operaciones rápidas en Ruzafa y Benimaclet, y documentación que sorprende entre arras y notaría.",
    localProblemIntro:
      "En Ruzafa o Benimaclet abundan comunidades sin administrador profesional: el certificado de deuda depende de un vecino que tarda semanas. La Llei 8/2004 exige cèdula de habitabilidad vigente para transmitir.",
    stepLocalNotes: [
      "Arras 145 €: señal, plazos y condición de hipoteca del comprador en mercado valenciano dinámico.",
      "Gestión 350 €: contacto con comunidades sin gestor, verificación cèdula según normativa valenciana.",
      "Checklist: energético, nota simple, licencias en promociones 2000–2010 del cinturón metropolitano.",
      "Escritura sin sorpresas: informe semáforo antes de que el banco del comprador pida documentación adicional.",
    ],
    empathyCards: ARRAS_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Comunidades sin administrador en Ruzafa y Benimaclet",
        body: "El presidente gestiona a tiempo parcial. El gestor contacta, hace seguimiento y evita que el certificado frene la escritura.",
      },
      {
        title: "Cèdula de habitabilidad (Llei 8/2004)",
        body: "Obligatoria en Comunitat Valenciana. Caducada = no se puede ir a notaría hasta renovar.",
      },
      {
        title: "Certificado energético caducado",
        body: "Vendedores primerizos no lo detectan. El gestor lo incluye en el checklist de la primera semana.",
      },
      {
        title: "Licencias en municipios del cinturón",
        body: "Promociones 2000–2010 en Torrent o Paterna pueden tener licencias pendientes. Revisión antes del banco del comprador.",
      },
    ],
    faqLocal: [
      {
        question: "¿Es obligatoria la cédula de habitabilidad en Valencia?",
        answer:
          "Sí. La Llei 8/2004 de la Comunitat Valenciana exige cèdula vigente para transmitir. El gestor lo verifica al inicio.",
      },
      {
        question: "¿Qué pasa si mi comunidad no tiene administrador de fincas?",
        answer:
          "El certificado lo firma el presidente o administrador designado. Tu gestor contacta a la comunidad y hace seguimiento.",
      },
      {
        question: "¿Cuánto cuesta el pack en Valencia?",
        answer: `495 € IVA incl. (145 € arras + 350 € gestión). En un piso de 220.000 € el ahorro vs comisión del 3 % (~6.600 € + IVA) es muy significativo si ya tienes comprador.`,
      },
    ],
    barrios: ["Ciutat Vella", "Ruzafa", "Benimaclet", "Campanar", "Malvarrosa", "Patraix", "Mislata", "Torrent", "Paterna"],
    barriosIntro: "Venta entre particulares en Valencia capital y área metropolitana con gestoría online Livendia.",
    platformParagraph:
      "Centraliza documentos en panel Livendia: el gestor persigue certificados mientras tú negocias con el comprador. Ideal si vendes en Valencia y vives en otra ciudad.",
    localBanners: [
      {
        title: "Valencia: vendedores primerizos, trámites sorprendentes",
        body: "Entre arras y notaría aparecen cédula, comunidad y energético. Pack 495 € con gestor que conoce la normativa valenciana.",
      },
      {
        title: "Ahorro real en precio medio ~220.000 €",
        body: "Comisión del 3 % = ~6.600 € + IVA. Si encontraste comprador en Idealista, pagas tarifa plana por arras y documentación profesional.",
      },
    ],
  },
};

export function getPackLauAdminLocalSeo(slug: string): PackCommercialLocalSeoContent | undefined {
  return PACK_LAU_ADMIN_LOCAL_SEO[slug];
}

export function getPackArrasGestionLocalSeo(slug: string): PackCommercialLocalSeoContent | undefined {
  return PACK_ARRAS_GESTION_LOCAL_SEO[slug];
}
