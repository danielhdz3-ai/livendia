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
  malaga: {
    precioMedioAlquiler: 1_476,
    heroSubtitle:
      "Vas a alquilar en Málaga con inquilino ya seleccionado — residente, expat o nómada digital. Pack LAU + administración (194 € IVA incl.): contrato adaptado a normativa andaluza, depósito de fianza en AVRA y gestor que cobra renta e incidencias desde el primer mes.",
    marketIntro:
      "Málaga combina demanda residencial en Teatinos y Carretera de Cádiz con media estancia en Soho y Centro, y perfil internacional en la Costa del Sol. Ticket medio ~1.400–1.500 €/mes (Brains Real Estate, Q1 2026). Propietarios particulares evitan comisiones del 10 % anual de gestión inmobiliaria.",
    localProblemIntro:
      "En Málaga el propietario suele subestimar el depósito obligatorio en AVRA (Agencia de Vivienda y Rehabilitación de Andalucía) y las cláusulas sobre duración, suministros e idioma del contrato cuando el inquilino es extranjero. Sin inventario fotográfico, los conflictos al finalizar el arrendamiento son frecuentes.",
    stepLocalNotes: [
      "Recogemos datos del piso en Teatinos, Centro, El Limonar o Soho y del inquilino; redactamos LAU o contrato de temporada según tipología real.",
      "Orientación sobre depósito de fianza legal en AVRA: plazos, documentación y registro obligatorio conforme a normativa de la Junta de Andalucía.",
      "Tras la firma, administración Livendia (49 €/mes): canal único con inquilino, cobro de renta e incidencias en panel — útil si resides fuera de Málaga.",
      "Inventario detallado y comunicaciones con comunidad en urbanizaciones de la costa: el gestor filtra contacto diario.",
    ],
    empathyCards: LAU_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Alquiler a perfil internacional en Soho o Centro",
        body: "Contratos con cláusulas claras sobre idioma, duración, fianza adicional permitida por LAU y comunicación vía gestor Livendia. Evita malentendidos con inquilinos expats.",
      },
      {
        title: "Media estancia y nómadas digitales",
        body: "En Carretera de Cádiz o Teatinos es habitual alquilar 6–11 meses. El contrato debe distinguir LAU de temporada y topes de estancia para no vulnerar normativa.",
      },
      {
        title: "Depósito AVRA no tramitado",
        body: "La fianza legal debe depositarse en AVRA en plazo. Livendia orienta en el trámite al alta; omitirlo expone a sanciones autonómicas.",
      },
      {
        title: "Propietario no residente en la Costa del Sol",
        body: "Segunda residencia o inversión: panel Livendia y administración evitan gestionar averías e incidencias desde otro país.",
      },
    ],
    faqLocal: [
      {
        question: "¿Dónde se deposita la fianza legal del alquiler en Málaga?",
        answer:
          "En Andalucía, ante AVRA (Agencia de Vivienda y Rehabilitación de Andalucía), organismo dependiente de la Junta de Andalucía. Es obligatorio registrar la fianza legal de un mes conforme a LAU. Livendia te orienta en plazos y documentación al contratar el pack.",
      },
      {
        question: "¿Cómo gestionáis el alquiler a inquilinos internacionales en Málaga?",
        answer:
          "Redactamos cláusulas claras sobre duración, renta, suministros e inventario. Livendia actúa como interlocutor operativo (cobros, incidencias) para que no dependas de WhatsApp en varios idiomas. No somos agencia de búsqueda de inquilino.",
      },
      {
        question: "¿Cuánto tarda el depósito en AVRA una vez firmado el contrato?",
        answer:
          "El propietario debe depositar la fianza en un plazo legal limitado tras la firma. Tu gestor Livendia te indica documentación, importe exacto y vía de registro en AVRA para evitar sanciones.",
      },
      {
        question: "¿Precio del pack LAU + administración en Málaga?",
        answer: `194 € IVA incl. estimados (145 € contrato LAU + 49 € 1.er mes administración). Mismos precios en toda España. Sin comisión sobre la renta ni permanencia en administración.`,
      },
    ],
    barrios: ["Teatinos", "Carretera de Cádiz", "Centro", "Soho", "El Limonar", "La Malagueta", "Pedregalejo", "El Palo"],
    barriosIntro: "Alquiler entre particulares en Málaga capital y área metropolitana con normativa andaluza y depósito AVRA.",
    regulatory: ALQUILER_REGULATORY_BY_SLUG.malaga,
    platformParagraph:
      "Panel Livendia con contrato, justificantes de renta, inventario e incidencias. Ideal si alquilas en Málaga y vives en Madrid, extranjero o en otra ciudad de la costa: gestor dedicado por WhatsApp.",
    localBanners: [
      {
        title: "AVRA: depósito de fianza obligatorio en Andalucía",
        body: "La fianza legal no basta con entregarla al inquilino: debe registrarse en AVRA. El pack incluye contrato LAU profesional y orientación en el trámite autonómico — error habitual en propietarios primerizos en Málaga.",
      },
      {
        title: "LAU, temporada o media estancia en Teatinos y Soho",
        body: "Perfil expat y nómada digital exige cláusulas precisas. 145 € de gestoría vs plantilla genérica que no distingue tipología ni suministros en edificios con alta rotación.",
      },
    ],
  },
  sevilla: {
    precioMedioAlquiler: 986,
    heroSubtitle:
      "Alquilas en Sevilla con inquilino ya encontrado — familia, estudiante o profesional sanitario. Pack contrato LAU + administración (194 € IVA incl.): arrendamiento residencial o temporada académica, depósito AVRA e inventario detallado para prevenir conflictos al finalizar.",
    marketIntro:
      "Sevilla mezcla demanda estable en Nervión y Los Remedios con rotación académica en Heliópolis y Macarena, y alquiler a profesionales del sector sanitario. Ticket medio ~950–1.000 €/mes (Enalquiler / Idealista, 2026). Muchos propietarios son particulares sin experiencia previa.",
    localProblemIntro:
      "En Triana o el Casco Antiguo los contratos descargados de internet no recogen anexo de inventario ni depósito AVRA. Al finalizar el arrendamiento, disputas sobre estado del piso y fianza son el conflicto más habitual entre propietarios e inquilinos en Sevilla.",
    stepLocalNotes: [
      "Datos del piso en Nervión, Triana, Macarena, Los Remedios o Sevilla Este; contrato LAU o temporada académica/médica según duración pactada.",
      "Anexo de inventario fotográfico detallado y orientación depósito fianza en AVRA — trámite integral conforme a normativa andaluza.",
      "Administración Livendia desde mes 1: cobro de renta, incidencias documentadas, comunicación con comunidad en edificios históricos.",
      "Renovaciones y causas de resolución conforme a LAU: gestor filtra contacto; tú decides sobre obras y renta.",
    ],
    empathyCards: LAU_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Temporada académica en Heliópolis o Reina Mercedes",
        body: "Contratos de 9–11 meses ligados al curso universitario requieren cláusulas de duración, fianza y suministros distintas al LAU de larga duración.",
      },
      {
        title: "Alquiler a profesionales sanitarios (Macarena, Sevilla Este)",
        body: "Inquilinos con contrato laboral temporal: el LAU debe reflejar plazo, prórroga y gastos de comunidad en bloques con derramas de rehabilitación.",
      },
      {
        title: "Inventario insuficiente en Triana o Casco",
        body: "Edificios históricos con instalaciones antiguas: anexo fotográfico de grifos, carpintería y electrodomésticos evita disputas sobre la devolución de fianza.",
      },
      {
        title: "Depósito AVRA omitido",
        body: "Propietarios primerizos en Nervión o Los Remedios desconocen el registro obligatorio en AVRA. Livendia orienta en el trámite al alta del arrendamiento.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cómo se regula el alquiler en Sevilla — hay zona tensionada?",
        answer:
          "La Junta de Andalucía no ha activado oficialmente la figura de zona de mercado residencial tensionado en Sevilla (verificado MIVAU 2026). Rige LAU general sin tope IRAV. Tu gestor adapta cláusulas de actualización de renta en consecuencia.",
      },
      {
        question: "¿Qué derechos tiene el propietario al alquilar en Sevilla?",
        answer:
          "Los de LAU: cobro de renta, fianza legal (máx. un mes) y posible garantía adicional pactada, resolución por incumplimiento, recuperación por uso propio en supuestos legales. Livendia redacta cláusulas equilibradas y la administración gestiona incidencias e impagos con aviso temprano.",
      },
      {
        question: "¿Dónde deposito la fianza en Sevilla?",
        answer:
          "En AVRA (Agencia de Vivienda y Rehabilitación de Andalucía), organismo autonómico. Es obligatorio registrar la fianza legal tras la firma. Te orientamos en documentación y plazos.",
      },
      {
        question: "¿Precio del pack en Sevilla?",
        answer: `194 € IVA incl. (145 € LAU + 49 € 1.er mes admin). Administración cancelable con 30 días de preaviso, sin permanencia.`,
      },
    ],
    barrios: ["Nervión", "Triana", "Macarena", "Los Remedios", "Sevilla Este", "Heliópolis", "Cerro-Amate", "Casco Antiguo"],
    barriosIntro: "Contrato LAU, AVRA e inventario en Sevilla capital y municipios del área metropolitana.",
    regulatory: ALQUILER_REGULATORY_BY_SLUG.sevilla,
    platformParagraph:
      "Centraliza contrato, inventario, cobros e incidencias en panel Livendia. Útil si alquilas en Sevilla y resides en otra provincia: gestor dedicado canaliza comunicación con inquilino y comunidad.",
    localBanners: [
      {
        title: "Inventario detallado: prevención de conflictos en Sevilla",
        body: "En Triana, Macarena y Nervión los desgastes por uso son discutidos sin fotos ni anexo firmado. El pack incluye LAU con inventario integrado — clave en edificios históricos.",
      },
      {
        title: "AVRA y normativa andaluza desde el primer día",
        body: "Depósito de fianza en AVRA no es opcional. Livendia orienta el trámite y activa administración (49 €/mes) para que no gestiones tú las incidencias del inquilino.",
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
  malaga: {
    precioMedioVenta: 280_000,
    heroSubtitle:
      "Vendes tu piso en Málaga entre particulares con comprador ya encontrado. Pack arras + gestión documental (495 € IVA incl.): arras penitenciales, nota simple en el Registro de la Propiedad de Málaga, certificado energético y verificación de cargas — sin comisión de agencia.",
    marketIntro:
      "Málaga capital y Costa del Sol concentran ventas entre particulares con comprador local o internacional. Precio medio ~280.000 €; referencia ~16–17 €/m² en capital (Brains Real Estate / Idealista, 2026). El ahorro vs comisión del 3 % supera ampliamente los 495 € del pack.",
    localProblemIntro:
      "En Málaga el vendedor particular descubre entre arras y notaría que necesita nota simple actualizada, certificado energético vigente, certificado de deuda de comunidad y —si hay hipoteca— cancelación coordinada. Compradores extranjeros encarecen plazos documentales.",
    stepLocalNotes: [
      "Arras 145 € IVA incl.: cláusulas penitenciales equilibradas sobre señal, plazos e hipoteca del comprador en mercado malagueño.",
      "Gestión 350 €: solicitud nota simple Registro de la Propiedad de Málaga, certificado energético, ITE si aplica y certificado de comunidad.",
      "Verificación de cargas, IBI al corriente y orientación sobre ITP/AJD autonómico de Andalucía (tributo de la parte compradora, que conviene anticipar en negociación).",
      "Informe semáforo pre-notaría: reduces rebajas tardías por documentación incompleta.",
    ],
    empathyCards: ARRAS_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Nota Simple en el Registro de la Propiedad de Málaga",
        body: "El gestor solicita y analiza titularidad, cargas hipotecarias y discrepancias con catastro antes de fijar fecha de escritura.",
      },
      {
        title: "Certificado energético caducado o inexistente",
        body: "Obligatorio para transmitir. Muchos pisos en Centro o Teatinos llevan años sin operación de venta y lo tienen caducado.",
      },
      {
        title: "Comprador extranjero y plazos ajustados",
        body: "El gestor orienta qué documentación puede requerir traducción jurada para que el banco del comprador no retrase la operación.",
      },
      {
        title: "Licencia turística VFT en la Costa del Sol",
        body: "Si el piso tuvo uso turístico, el gestor verifica si afecta a la transmisión y lo refleja antes de notaría.",
      },
    ],
    faqLocal: [
      {
        question: "¿Qué documentos necesito para vender entre particulares en Málaga?",
        answer:
          "Nota simple registral, certificado energético vigente, certificado de deuda cero de comunidad, IBI al corriente, DNI/NIE y —si hay hipoteca— certificado de deuda pendiente del banco. El gestor Livendia gestiona el checklist completo post-arras.",
      },
      {
        question: "¿Quién paga el ITP o AJD en Andalucía?",
        answer:
          "El Impuesto sobre Transmisiones Patrimoniales (ITP) o, en su caso, Actos Jurídicos Documentados (AJD) los liquida la parte compradora ante la Junta de Andalucía. Tu gestor orienta sobre plazos y documentación que el comprador necesitará; la liquidación no está incluida en el pack del vendedor.",
      },
      {
        question: "¿Cuánto cuesta el pack arras + gestión en Málaga?",
        answer: `495 € IVA incl. (145 € arras + 350 € gestión). En un piso de ~280.000 €, el 3 % de comisión serían ~8.400 € + IVA — ahorro neto muy superior si ya tienes comprador.`,
      },
    ],
    barrios: ["Centro", "Teatinos", "Carretera de Cádiz", "El Limonar", "Soho", "Este", "Ciudad Jardín", "El Palo"],
    barriosIntro: "Venta entre particulares en Málaga capital y área metropolitana de la Costa del Sol.",
    platformParagraph:
      "Panel Livendia para nota simple, certificados de comunidad e informe semáforo. Especialmente útil si vendes en Málaga y resides en el extranjero o en otra CCAA.",
    localBanners: [
      {
        title: "Guía documental: Registro de la Propiedad de Málaga",
        body: "Nota simple, cargas hipotecarias y coherencia con escritura previa: el gestor lo verifica en la primera semana post-arras para no perder la fecha de notaría.",
      },
      {
        title: "495 € precio cerrado vs comisión inmobiliaria en Málaga 2026",
        body: "Con ~16–17 €/m² y precio medio ~280.000 €, una agencia al 3 % cobraría ~8.400 € + IVA. Si tú encontraste al comprador, el pack cubre arras y trámites hasta escritura.",
      },
    ],
  },
  sevilla: {
    precioMedioVenta: 200_000,
    heroSubtitle:
      "Vendes tu casa en Sevilla sin inmobiliaria con comprador ya cerrado. Pack arras + gestión documental (495 € IVA incl.): redacción de arras, preparación documental en capital y área metropolitana y acompañamiento hasta notaría.",
    marketIntro:
      "Sevilla capital y área metropolitana (Dos Hermanas, Alcalá, Tomares) concentran ventas entre particulares, muchas por herencia. Precio medio ~200.000 € (Idealista, 2026). Comisión tradicional del 3–5 % representa 6.000–10.000 € + IVA.",
    localProblemIntro:
      "En Triana, Macarena o Nervión las sorpresas habituales son derramas en edificios históricos, herencias no inscritas y certificado de deuda de comunidad lento. Sin gestor, el comprador pide rebaja días antes de notaría.",
    stepLocalNotes: [
      "Arras 145 €: contrato penitencial con plazos, señal y condición suspensiva de hipoteca del comprador en mercado sevillano.",
      "Gestión 350 €: nota simple, certificado energético, certificado de deuda de comunidad e IBI en edificios del Casco y Triana.",
      "Revisión cancelación de cargas hipotecarias y coherencia titular tras herencia — frecuente en ventas sevillanas.",
      "Escritura con informe semáforo: 495 € precio cerrado vs miles en comisión si ya tienes comprador.",
    ],
    empathyCards: ARRAS_EMPATHY_SHARED,
    casuistica: [
      {
        title: "Derramas en edificios históricos de Triana y Macarena",
        body: "Rehabilitaciones de 10.000–20.000 € por piso aprobadas en junta. El gestor cruza actas y certificado de deuda antes de notaría.",
      },
      {
        title: "Herencia no inscrita o varios herederos",
        body: "Titularidad registral imperfecta bloquea la escritura. Detección en nota simple de la semana 1.",
      },
      {
        title: "Certificado de deuda de comunidad lento",
        body: "En bloques con administrador externo puede tardar 2–3 semanas. Solicitud prioritaria al activar gestión documental.",
      },
      {
        title: "IBI y plusvalía municipal",
        body: "Orientación sobre recibos al corriente y plazos de plusvalía del vendedor; la liquidación fiscal es responsabilidad del propietario.",
      },
    ],
    faqLocal: [
      {
        question: "¿Qué trámites incluye la gestión documental para vender en Sevilla?",
        answer:
          "Nota simple, certificado energético, certificado de deuda cero de comunidad, revisión ITE si aplica, IBI, cargas hipotecarias e informe semáforo pre-escritura. Coordinación de hitos hasta notaría en Sevilla capital o área metropolitana.",
      },
      {
        question: "¿495 € incluye la comisión de agencia?",
        answer:
          "No hay comisión sobre el precio de venta. 495 € IVA incl. es tarifa plana por arras (145 €) + gestión documental (350 €). Comparado con 3–5 % de agencia (~6.000–10.000 € en precio medio sevillano), el ahorro es muy significativo si ya tienes comprador.",
      },
      {
        question: "¿Gestionáis ventas en Dos Hermanas o Alcalá de Guadaíra?",
        answer:
          "Sí. Mismo pack online para Sevilla capital y municipios del área metropolitana. Gestor dedicado por WhatsApp y panel Livendia.",
      },
    ],
    barrios: ["Nervión", "Triana", "Macarena", "Los Remedios", "Sevilla Este", "Casco Antiguo", "Heliópolis", "Dos Hermanas"],
    barriosIntro: "Compraventa entre particulares en Sevilla capital y área metropolitana con gestor documental Livendia.",
    platformParagraph:
      "Centraliza documentos en panel Livendia: el gestor persigue certificados de comunidad y registra incidencias mientras tú cierras con el comprador.",
    localBanners: [
      {
        title: "Sevilla capital y área metropolitana: mismo pack 495 €",
        body: "Dos Hermanas, Alcalá de Guadaíra, Tomares: mismos precios nacionales. Gestor documental online sin desplazarte a gestoría presencial.",
      },
      {
        title: "Evita sorpresas en notaría: comunidad, IBI y cargas",
        body: "Revisión documental completa post-arras. 495 € precio cerrado frente a 3–5 % de comisión inmobiliaria tradicional.",
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
