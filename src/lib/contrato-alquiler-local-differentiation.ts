import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { ALQUILER_LOCAL_DIFFERENTIATION_EXTENDED } from "@/lib/contrato-alquiler-local-differentiation-extended";
import { ALQUILER_LOCAL_CORE_MARKET_INSIGHTS } from "@/lib/contrato-alquiler-local-core-market-insights";
import { attachLocalMarketInsights, type LocalDifferentiationFields } from "@/lib/merge-local-differentiation";
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";

const BCN_LAU_PLATFORM_NOTES: LocalCityLandingFields["localServiceNotes"] = [
  {
    title: "Servicio 100 % online — sin visitar un despacho",
    body: "Contratas en livendia.com, subes documentación al panel y hablas con tu gestor por WhatsApp. No hace falta acudir a Les Corts ni a un despacho del Eixample para redactar el LAU.",
  },
  {
    title: "Plataforma Livendia: expediente centralizado",
    body: "Documentos, inventario fotográfico, estado del contrato y mensajes con el gestor en un solo panel. Propietario e inquilino siguen el avance antes de firmar.",
  },
  {
    title: "Livendia, referente en contratos de alquiler",
    body: "No somos agencia de captación: no publicamos tu anuncio ni cobramos un mes de renta. Nos especializamos en LAU, temporada, habitación, administración del alquiler y revisión legal de borradores.",
  },
  {
    title: "Otros servicios en Barcelona",
    body: "Administración de alquiler desde 65 €/mes, contrato de arras local, pack LAU + administración, contrato de habitación y revisión de contrato — accesibles desde el hub de servicios Livendia.",
  },
];

/** Copy único por ciudad — contrato de alquiler local. */
const ALQUILER_LOCAL_DIFFERENTIATION_CORE: Record<string, LocalDifferentiationFields> = {
  madrid: {
    metaTitle: `LAU piso completo Madrid — ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, sin agencia`,
    metaDescription:
      "Contrato LAU piso entero Madrid 145 € IVA incl. Revisión profesional, inventario y cláusulas adaptadas a la Comunidad de Madrid — depósito AVS, IPC y pisos compartidos. No es contrato de habitación. Gestor humano por teléfono. Entrega 48-72 h.",
    keywords: [
      "contrato alquiler madrid",
      "contrato alquiler entre particulares madrid",
      "contrato lau madrid sin agencia",
      "alquiler piso madrid contrato particular",
      "redactar contrato alquiler madrid",
      "revisar contrato alquiler madrid",
      "inventario alquiler madrid",
    ],
    heroBadge: "Entre particulares · Madrid",
    heroH1: "Contrato de alquiler entre particulares en Madrid — LAU e inventario",
    heroBullets: [
      "Salamanca, Chamberí, Retiro, Vallecas y cinturón sur",
      "Sin comisión de agencia — gestoría 145 € IVA incl.",
      "Depósito AVS, IPC y inventario antes de la fianza",
    ],
    whyTitle: "Madrid: mayor volumen de alquileres, contrato a medida",
    whySubtitle:
      "Fotocasa (febrero 2026) sitúa la media en 21,59 €/m² — de 26-28 €/m² en Salamanca a 13-16 €/m² en Villaverde. Miles de contratos se firman con PDF idénticos; Livendia adapta cláusulas al barrio y a la LAU vigente.",
    localZonesHeading: "Zonas donde redactamos y revisamos contratos en Madrid",
    localZones:
      "Distrito Centro, Salamanca, Chamberí, Tetuán, Carabanchel, Vallecas, Fuencarral y municipios del cinturón (Móstoles, Getafe, Leganés, Alcorcón). Misma gestoría online con gestor dedicado.",
    localBenefits: [
      {
        title: "Actualización de renta y gastos en mercado madrileño",
        description:
          "Revisamos IPC, comunidad, IBI repercutido y causas de resolución para que cuadren con lo pactado en visitas rápidas.",
      },
      {
        title: "Pisos compartidos y habitación",
        description:
          "Normas de convivencia, uso de cocina y baños, limpieza y visitas — frecuente en pisos universitarios y zonas bien comunicadas.",
      },
      {
        title: "Inventario antes de entregar llaves",
        description:
          "Estado de electrodomésticos y pintura documentado para evitar disputas al final del arrendamiento.",
      },
      {
        title: "Temporada corta vs. LAU habitual",
        description:
          `Te orientamos si necesitas contrato de temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) en lugar de LAU de larga duración.`,
      },
      {
        title: "Gestor único en el expediente",
        description: "Un interlocutor por WhatsApp y panel Livendia, sin call center.",
      },
      {
        title: "Entrega en 48-72 h laborables",
        description: "Tras recibir datos completos de las partes y del inmueble.",
      },
    ],
  },
  barcelona: {
    metaTitle: `LAU piso completo Barcelona — 145 €, sin agencia`,
    metaDescription:
      "Contrato LAU piso entero Barcelona 145 € IVA incl. Revisión profesional, inventario y cláusulas zona tensionada. No es contrato de habitación. Gestor humano por teléfono. Entrega 48-72 h.",
    keywords: [
      "contrato alquiler barcelona",
      "contrato alquiler entre particulares barcelona",
      "contrato lau barcelona sin agencia",
      "alquiler piso barcelona contrato particular",
      "revisar contrato alquiler eixample",
      "redactar contrato alquiler barcelona particular",
    ],
    heroBadge: "Entre particulares · Barcelona",
    heroH1: "Contrato de alquiler entre particulares en Barcelona — LAU e inventario",
    heroBullets: [
      "Eixample, Gràcia, Les Corts, L'Hospitalet, Cornellà",
      "Sin comisión de agencia — gestoría 145 € IVA incl.",
      "INCASÒL, zona tensionada e inventario explicados",
    ],
    whyTitle: "Barcelona: alquiler tensionado, contrato preciso",
    whySubtitle:
      "Regulación turística, pisos antiguos con obras en comunidad y rentas negociadas al detalle. El texto debe reflejar lo acordado, no un PDF de otra ciudad.",
    localZonesHeading: "Barrios y municipios del área metropolitana",
    localZones:
      "Eixample, Gràcia, Sant Martí, Sants, Les Corts, L'Hospitalet, Badalona, Cornellà y área metropolitana. Landings específicas en Les Corts, Gràcia, L'Hospitalet y Cornellà. Revisión LAU con inventario integrado.",
    localBenefits: [
      {
        title: "Uso turístico-residencial bien delimitado",
        description:
          "Clarificamos límites de ocupación y estancia cuando el piso puede tener régimen especial municipal.",
      },
      {
        title: "Comunidad y derramas en edificios señorial",
        description:
          "Coherencia entre actas, certificado de deuda y lo que declara el contrato sobre obras futuras.",
      },
      {
        title: "Habitación en piso compartido",
        description:
          "Cláusulas de zonas comunes y convivencia redactadas para convivir sin conflictos posteriores.",
      },
      {
        title: "Explicación clara de cláusulas",
        description:
          "Traducimos tecnicismos a decisiones: qué negociar antes de la fianza.",
      },
      {
        title: "Tres modalidades en un solo gestor",
        description: `LAU, temporada o habitación con precios publicados en la misma landing.`,
      },
      {
        title: "Panel y pago seguro Stripe",
        description: "Contratas online y subes documentación sin desplazarte al despacho.",
      },
    ],
  },
  valencia: {
    metaTitle: `LAU piso completo Valencia — ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, sin agencia`,
    metaDescription:
      "Contrato LAU piso entero Valencia 145 € IVA incl. Revisión LAU, inventario y cláusulas para Ruzafa, Benimaclet y área metropolitana. Mercado ~14,3 €/m² (Idealista jun 2026). No es contrato de habitación. Gestor por teléfono. Entrega 48-72 h.",
    keywords: [
      "contrato alquiler valencia",
      "contrato alquiler entre particulares valencia",
      "contrato lau valencia sin agencia",
      "alquiler piso valencia contrato particular",
      "alquiler ruzafa contrato",
      "revisar contrato alquiler valencia",
    ],
    heroBadge: "Entre particulares · Valencia",
    heroH1: "Contrato de alquiler entre particulares en Valencia — LAU e inventario",
    heroBullets: [
      "Ruzafa, Benimaclet, Ciutat Vella, Campanar, Mislata",
      "Sin comisión de agencia — gestoría 145 € IVA incl.",
      "Rotación 8-12 días: revisamos antes de la señal",
    ],
    whyTitle: "Valencia: rotación rápida, contrato que recoge lo pactado",
    whySubtitle:
      "Idealista (junio 2026) sitúa la media en 14,3 €/m² y un piso puede reservarse en 8-12 días. Las promesas verbales de la visita exigen un LAU escrito antes de ingresar la fianza.",
    localZonesHeading: "Dónde gestionamos contratos de alquiler en Valencia",
    localZones:
      "Ciutat Vella, Ruzafa, Benimaclet, Malvarrosa, Patraix, Mislata, Torrent, Paterna y l'Horta. Gestoría digital con mismos precios que en toda España.",
    localBenefits: [
      {
        title: "Renta y gastos de comunidad explícitos",
        description: "Evitamos lagunas sobre IBI, basura o ascensor que generan reclamaciones.",
      },
      {
        title: "Alquiler por habitaciones",
        description: "Ideal en pisos compartidos cerca de universidades y polígonos.",
      },
      {
        title: "Temporada académica o laboral",
        description: "Duración, prórroga y salida anticipada redactadas con equilibrio.",
      },
      {
        title: "Inventario fotográfico",
        description: "Salida y entrada de inquilino documentadas.",
      },
      {
        title: "Gestor responde a ambas partes",
        description: "Mediamos dudas con tono profesional antes de firmar.",
      },
      {
        title: "Precio cerrado por modalidad",
        description: `LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. — sin sorpresas.`,
      },
    ],
  },
  asturias: {
    metaTitle: "Contrato de alquiler en Asturias — Oviedo, Gijón y costa",
    metaDescription:
      "Redactamos y revisamos contratos LAU, temporada y habitación en Asturias: Oviedo, Gijón, costa y casas rurales. Inventario incluido. Gestoría online Livendia.",
    keywords: [
      "contrato alquiler asturias",
      "contrato alquiler oviedo",
      "contrato alquiler gijon",
      "contrato lau asturias",
      "alquiler temporada asturias costa",
      "contrato alquiler casa rural asturias",
    ],
    heroH1: "Contrato de alquiler en Asturias — costa, ciudad y casa rural",
    heroBullets: [
      "Oviedo, Gijón, Avilés, costa y interior",
      "Humedad, leña, parking y temporada costera",
      "LAU, temporada o habitación con inventario",
    ],
    whyTitle: "Asturias: un mercado mixto que las plantillas ignoran",
    whySubtitle:
      "Conviven alquiler urbano, segunda residencia en la costa y casas rurales compartidas. Livendia adapta el contrato al uso real — no al PDF de Madrid.",
    localZonesHeading: "Municipios y entornos que cubrimos en Asturias",
    localZones:
      "Oviedo, Gijón, Avilés, Langreo, Mieres, Corvera de Asturias, franja costera (Gijón mar, Villaviciosa, Llanes oriente), concejos del interior y vivienda rural/turística regulada. Misma operativa online que en grandes ciudades.",
    localBenefits: [
      {
        title: "Costa: equipamiento y temporada",
        description:
          "Ropa de cama, parking comunitario, limpieza de salida y plazo de estancia veraniega por escrito.",
      },
      {
        title: "Casa rural y leña",
        description:
          "Reparto de suministros (leña, agua de pozo si aplica), acceso a fincas colindantes y aviso de salida.",
      },
      {
        title: "Humedad y calefacción",
        description:
          "Cláusulas de mantenimiento y ventilación acordes a viviendas antiguas del norte.",
      },
      {
        title: "Piso compartido en ciudad",
        description:
          "Normas de convivencia para estudiantes y trabajadores en Gijón u Oviedo.",
      },
      {
        title: "Inventario imprescindible en segunda residencia",
        description:
          "El propietario que vive fuera documenta el estado antes de alquilar meses concretos.",
      },
      {
        title: "Gestoría sin desplazamiento",
        description:
          "Contratas desde cualquier punto de España si el piso está en Asturias — ideal para propietarios expatriados.",
      },
    ],
    faq: [
      {
        question: "¿Redactáis contratos para casas rurales en Asturias?",
        answer:
          "Sí. Adaptamos cláusulas a suministros, accesos, temporada y convivencia en casas compartidas o alquiler a trabajadores desplazados.",
      },
      {
        question: "¿Qué diferencia hay entre LAU y temporada en la costa asturiana?",
        answer:
          "La LAU habitual protege arrendamientos de vivienda a largo plazo. La temporada cubre estancias acotadas (verano, obra, estudio). Te orientamos cuál encaja antes de firmar.",
      },
      {
        question: "¿Atendéis alquileres solo en Oviedo y Gijón?",
        answer:
          "No. Cubrimos todo el Principado: costa, cuenca minera y municipios del interior con la misma gestoría online.",
      },
      {
        question: "¿Incluye inventario del piso?",
        answer:
          "Sí, el pack gestor integra inventario descriptivo y fotográfico en el expediente Livendia.",
      },
    ],
  },
  "barcelona-les-corts": {
    metaTitle: "Contrato alquiler Les Corts entre particulares — 145 € IVA incl.",
    metaDescription:
      "¿Alquilas en Les Corts sin agencia? Contrato LAU entre propietario e inquilino por 145 € IVA incl. INCASÒL, zona tensionada e inventario. Diagonal, Zona Universitària, Pedralbes.",
    keywords: [
      "contrato alquiler les corts",
      "contrato alquiler entre particulares les corts",
      "contrato lau les corts barcelona",
      "alquilar piso les corts sin agencia",
      "redactar contrato alquiler les corts",
      "contrato alquiler diagonal barcelona particular",
      "alquiler zona universitaria barcelona contrato",
    ],
    heroBadge: "Entre particulares · Les Corts",
    heroH1: "Contrato de alquiler en Les Corts entre propietario e inquilino — sin agencia",
    heroBullets: [
      "Diagonal, Zona Universitària, Pedralbes, Camp Nou",
      "145 € IVA incl. — gestoría, no comisión inmobiliaria",
      "Renta anterior e INCASÒL revisados antes de firmar",
    ],
    whyTitle: "Les Corts: alquiler directo entre particulares, contrato a medida",
    whySubtitle:
      "Si ya tenéis contraparte por Idealista o recomendación, no hace falta pagar gestión de agencia solo para redactar el LAU. Livendia cierra cláusulas, inventario y normativa catalana.",
    localZonesHeading: "Zonas de Les Corts donde redactamos contratos LAU",
    localZones:
      "Pedralbes, la Maternitat i Sant Ramon, la Zona Universitària, Les Corts propiamente dicho y entorno del Camp Nou. Misma gestoría online que en toda Cataluña.",
    localBenefits: [
      {
        title: "Zona tensionada de Barcelona aplicada",
        description:
          "Verificamos tope de renta e información de renta anterior en anuncio y contrato — obligatorio en todo Barcelona.",
      },
      {
        title: "Fianza en INCASÒL, no en manos del casero",
        description:
          "Te orientamos para que el depósito se gestione en el organismo catalán dentro del plazo legal.",
      },
      {
        title: "Ideal si cerraste en Idealista sin agencia",
        description:
          "Redactamos el LAU cuando propietario e inquilino ya están de acuerdo en precio y fecha de entrada.",
      },
      {
        title: "Piso entero, temporada o habitación",
        description: `LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, temporada o habitación con el mismo gestor.`,
      },
      {
        title: "Inventario fotográfico incluido",
        description: "Estado del piso documentado antes de entregar llaves y fianza.",
      },
      {
        title: "Gestor por WhatsApp y panel",
        description: "Sin desplazarte a un despacho en Diagonal — tramitación 100 % online.",
      },
    ],
    finalCtaTitle: "Firma tu contrato en Les Corts entre particulares — con gestoría Livendia",
    faq: [
      {
        question: "¿Puedo alquilar en Les Corts sin pasar por una inmobiliaria?",
        answer:
          "Sí. Muchos arrendamientos cierran directo entre particulares. Livendia no busca inquilino ni cobra comisión sobre la renta: redacta o revisa el contrato LAU por 145 € IVA incl.",
      },
      {
        question: "¿Les Corts está en zona de mercado tensionado?",
        answer:
          "Sí, como todo Barcelona. El contrato debe respetar el tope de renta e informar la renta del arrendamiento anterior. Lo revisamos antes de que firmes.",
      },
    ],
  },
  "barcelona-gracia": {
    metaTitle: "Contrato alquiler Gràcia entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Gràcia sin agencia: propietario e inquilino particular por 145 € IVA incl. Vila de Gràcia, Camp d'en Grassot, inventario e INCASÒL. Livendia.",
    keywords: [
      "contrato alquiler gracia barcelona",
      "contrato alquiler entre particulares gracia",
      "contrato lau gracia",
      "alquiler piso gracia sin agencia",
      "redactar contrato alquiler vila de gracia",
      "alquilar piso gracia particular contrato",
      "contrato alquiler camp d en grassot",
    ],
    heroBadge: "Entre particulares · Gràcia",
    heroH1: "Contrato de alquiler en Gràcia entre particulares — LAU sin agencia",
    heroBullets: [
      "Vila de Gràcia, Camp d'en Grassot, la Salut",
      "145 € IVA incl. — no comisión del 1 mes de agencia",
      "Pisos compartidos y LAU de piso entero",
    ],
    whyTitle: "Gràcia: Idealista, acuerdo verbal y contrato LAU profesional",
    whySubtitle:
      "En Gràcia es habitual alquilar sin intermediario cuando el piso sale bien en fotos. El riesgo está en firmar plantillas que no reflejan reformas, ruido o convivencia en pisos compartidos.",
    localZonesHeading: "Barrios de Gràcia donde revisamos contratos",
    localZones:
      "Vila de Gràcia, Camp d'en Grassot i Gràcia Nova, la Salut, Vallcarca i els Penitents y el Torrent de l'Olla. Gestoría digital con precio cerrado.",
    localBenefits: [
      {
        title: "Piso compartido vs. vivienda entera",
        description:
          "Te orientamos si necesitas LAU habitual, contrato de habitación o temporada según el uso real del piso en Gràcia.",
      },
      {
        title: "Cláusulas de convivencia y ruido",
        description:
          "Frecuente en pisos señoriales convertidos en compartidos — las dejamos por escrito con tono equilibrado.",
      },
      {
        title: "Sin comisión de captación",
        description:
          "Livendia no publica tu anuncio ni cobra porcentaje sobre la renta: solo gestoría contractual.",
      },
      {
        title: "Renta anterior en zona tensionada",
        description: "Comprobamos coherencia con la normativa municipal de Barcelona.",
      },
      {
        title: "Inventario antes de la mudanza",
        description: "Mobiliario antiguo y estado de pintura documentados en el expediente.",
      },
      {
        title: "Entrega en 48-72 h laborables",
        description: "Tras recibir datos de ambas partes y del inmueble.",
      },
    ],
    finalCtaTitle: "Cierra tu alquiler en Gràcia entre particulares con contrato LAU",
    faq: [
      {
        question: "¿Redactáis contratos para pisos compartidos en Gràcia?",
        answer:
          "Sí. LAU de piso entero, contrato de habitación o temporada según corresponda. Muchos casos en Gràcia son habitaciones en piso compartido entre particulares.",
      },
      {
        question: "¿Necesito agencia para legalizar el alquiler?",
        answer:
          "No. Si ya tenéis contraparte, basta un contrato LAU bien redactado y el depósito en INCASÒL. Livendia cubre la parte legal por tarifa plana.",
      },
    ],
  },
  "barcelona-eixample": {
    metaTitle: "Contrato alquiler Eixample entre particulares — Dreta, Esquerra · 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en el Eixample sin agencia: Dreta, Esquerra, Fort Pienc, Sagrada Família. INCASÒL, renta anterior e inventario. 145 € IVA incl. Livendia.",
    keywords: [
      "contrato alquiler eixample barcelona",
      "contrato lau dreta eixample particular",
      "contrato alquiler entre particulares eixample",
      "redactar contrato alquiler sagrada familia",
      "contrato alquiler antiga esquerra",
      "alquilar piso eixample sin agencia contrato",
      "contrato lau fort pienc",
    ],
    heroBadge: "Entre particulares · Eixample",
    heroH1: "Contrato de alquiler en el Eixample entre particulares — LAU del ensanche",
    heroBullets: [
      "Dreta, Esquerra, Fort Pienc, Sagrada Família",
      "145 € IVA incl. — gestoría, no mes de agencia",
      "Fincas regias: comunidad, derramas e INCASÒL",
    ],
    whyTitle: "Eixample: ticket alto, zona tensionada y contrato LAU a medida",
    whySubtitle:
      "Si ya tenéis inquilino en Provença o Girona, el riesgo está en firmar plantillas que no mencionan renta anterior ni obras comunitarias. Livendia redacta cláusulas del ensanche real.",
    localZonesHeading: "Tramos del Eixample donde redactamos contratos LAU",
    localZones:
      "Dreta de l'Eixample, Antiga i Nova Esquerra, Fort Pienc, Sagrada Família y límite Sant Antoni. Misma gestoría online con revisión de topes legales.",
    localBenefits: [
      {
        title: "Renta anterior y tope legal",
        description: "Comprobamos coherencia con zona tensionada de Barcelona antes de firmar.",
      },
      {
        title: "Derramas y ascensor comunitario",
        description: "Cláusulas alineadas con actas frecuentes en edificios centenarios.",
      },
      {
        title: "Inventario en pisos amueblados premium",
        description: "Electrodomésticos y carpintería documentados con fotografías.",
      },
      {
        title: "Sin comisión de captación",
        description: "Livendia no publica el anuncio ni cobra porcentaje sobre la renta.",
      },
      {
        title: "Depósito orientado a INCASÒL",
        description: "Te guiamos para no ingresar la fianza solo en cuenta del propietario.",
      },
      {
        title: "Gestor online en 48–72 h",
        description: "Briefing, documentos e inventario desde el panel Livendia.",
      },
    ],
    finalCtaTitle: "Firma tu LAU en el Eixample entre particulares — con gestor Livendia",
    faq: [
      {
        question: "¿Gestionáis alquileres en Dreta de l'Eixample?",
        answer:
          "Sí. Redactamos LAU para pisos enteros, habitaciones o temporada según el uso acordado, con inventario incluido.",
      },
      {
        question: "¿Qué pasa si hay derrama en la comunidad?",
        answer:
          "Revisamos actas recientes y dejamos por escrito reparto de gastos y plazos antes de la entrada del inquilino.",
      },
    ],
  },
  "barcelona-sants-montjuic": {
    metaTitle: "Contrato alquiler larga duración Sants — redactamos tu LAU · 145 €",
    metaDescription:
      "Redactamos tu contrato de alquiler de larga duración en Sants-Montjuïc entre particulares: Sants, Poble-sec, Hostafrancs. LAU 145 € IVA incl., INCASÒL, inventario y gestor online. Livendia.",
    keywords: [
      "contrato alquiler larga duracion sants",
      "redactar contrato alquiler sants montjuic",
      "contrato lau sants entre particulares",
      "alquiler poble sec contrato profesional",
      "contrato alquiler hostafrancs sin agencia",
      "contrato alquiler larga duracion barcelona sants",
      "livendia contrato alquiler online sants",
    ],
    heroBadge: "Entre particulares · Sants-Montjuïc",
    heroH1: "Redactamos tu contrato de alquiler de larga duración en Sants",
    heroBullets: [
      "Sants, Hostafrancs, La Bordeta, Poble-sec y Montjuïc",
      "145 € IVA incl. — gestoría online, no mes de agencia",
      "Inventario, INCASÒL y renta anterior antes de la fianza",
    ],
    whyTitle: "Sants-Montjuïc: acuerdo en Idealista, contrato LAU que aguanta",
    whySubtitle:
      "Cuando propietario e inquilino ya se han encontrado en Sants o Poble-sec, el riesgo no es la visita sino firmar un PDF genérico sin renta anterior, depósito en INCASÒL ni cláusulas de calderas comunitarias. Livendia redacta el LAU a medida del piso concreto.",
    localZonesHeading: "Barrios de Sants-Montjuïc donde redactamos contratos LAU",
    localZones:
      "Sants centre, Hostafrancs, La Bordeta, Poble-sec, Font de la Guatlla, la Marina del Port y Montjuïc. Misma gestoría digital con panel Livendia y gestor por WhatsApp.",
    localBenefits: [
      {
        title: "Ideal tras cerrar en Idealista sin agencia",
        description:
          "Redactamos cuando ya hay acuerdo de renta y fecha — no captamos inquilinos ni cobramos comisión sobre la mensualidad.",
      },
      {
        title: "Zona tensionada e IRAV explicados",
        description:
          "Comprobamos tope legal, renta del arrendamiento anterior y coherencia con lo publicado en el anuncio.",
      },
      {
        title: "Calderas y comunidad en bloques de los 60–80",
        description:
          "Cláusulas sobre calefacción comunitaria, ascensor y derramas frecuentes en La Bordeta o Hostafrancs.",
      },
      {
        title: "Inventario fotográfico incluido",
        description: "Estado de cocina, baños y pintura documentado antes de entregar llaves y fianza.",
      },
      {
        title: "Plataforma Livendia y gestor humano",
        description:
          "Subes DNI, contrato previo y fotos al panel; el gestor responde por WhatsApp — servicio 100 % online.",
      },
      {
        title: "LAU, temporada o habitación",
        description: `Piso entero (${CONTRATO_ALQUILER_LAU_PRICE_LABEL}), habitación o temporada con el mismo equipo.`,
      },
    ],
    finalCtaTitle: "Firma tu LAU en Sants-Montjuïc — redacción profesional online",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Cómo funciona Livendia para redactar un contrato en Sants?",
        answer:
          "Contratas en livendia.com, completas el briefing online, subes documentación al panel y un gestor te contacta por WhatsApp. En 48–72 h laborables recibes borrador LAU con inventario — sin visitar un despacho en Sants ni pagar comisión de agencia.",
      },
      {
        question: "¿Puedo alquilar en Poble-sec o Hostafrancs entre particulares?",
        answer:
          "Sí. Muchos arrendamientos en Sants-Montjuïc cierran directo tras la visita. Livendia no busca inquilino: redacta o revisa el contrato LAU por 145 € IVA incl. cuando ambas partes ya están de acuerdo.",
      },
      {
        question: "¿Qué es la plataforma Livendia para propietario e inquilino?",
        answer:
          "Es el panel donde centralizáis documentos, inventario fotográfico, estado del expediente y mensajes con el gestor. Propietario e inquilino ven el avance antes de firmar — alternativa ordenada a cadenas de email y PDFs sueltos.",
      },
      {
        question: "¿Dónde ingreso la fianza en Barcelona?",
        answer:
          "En Cataluña el depósito legal suele gestionarse en INCASÒL, no solo en cuenta del propietario. Te orientamos sobre plazos y documentación antes de la entrada en Sants o Poble-sec.",
      },
      {
        question: "¿Qué otros servicios ofrece Livendia además del LAU?",
        answer:
          "Administración de alquiler desde 65 €/mes, contrato de arras, pack LAU + administración, contrato de habitación, temporada y revisión de borradores — todos accesibles desde el hub de servicios Livendia en Barcelona.",
      },
      {
        question: "¿Cuánto cuesta frente a una inmobiliaria en Sants?",
        answer:
          "Livendia cobra 145 € IVA incl. por redacción o revisión LAU. Una agencia de alquiler suele cobrar un mes de renta o porcentaje sobre la renta anual — aquí solo pagas gestoría contractual cuando ya tienes inquilino.",
      },
    ],
  },
  "barcelona-poblenou": {
    metaTitle: "Alquiler larga duración Poblenou particulares — contrato LAU · 145 €",
    metaDescription:
      "Alquiler de larga duración para particulares en Poblenou: redactamos tu contrato LAU por 145 € IVA incl. 22@, Rambla del Poblenou, inventario e INCASÒL. Servicio online Livendia.",
    keywords: [
      "alquiler larga duracion poblenou particulares",
      "contrato alquiler poblenou entre particulares",
      "contrato lau 22 barcelona",
      "redactar contrato alquiler rambla poblenou",
      "contrato alquiler sant marti particular",
      "contrato alquiler larga duracion poblenou",
      "livendia contrato alquiler online poblenou",
    ],
    heroBadge: "Entre particulares · Poblenou",
    heroH1: "Alquiler de larga duración para particulares en Poblenou",
    heroBullets: [
      "22@, Rambla del Poblenou, Clot límite, Vila Olímpica límite",
      "145 € IVA incl. — redacción LAU, no captación de inquilino",
      "Lofts, pisos familiares e inventario de instalaciones",
    ],
    whyTitle: "Poblenou: tech, familias y contratos LAU bien redactados",
    whySubtitle:
      "En el 22@ y la Rambla del Poblenou es habitual alquilar entre particulares tras pocas visitas. Los borradores copiados no distinguen uso vivienda vs. local en planta baja, terrazas en naves reconvertidas ni renta anterior en zona tensionada.",
    localZonesHeading: "Zonas del Poblenou y Sant Martí donde redactamos LAU",
    localZones:
      "22@, Rambla del Poblenou, Parc del Centre del Poblenou, Diagonal Mar límite, Clot límite y Vila Olímpica límite. Gestoría online Livendia con entrega en 48–72 h laborables.",
    localBenefits: [
      {
        title: "Lofts y reconversiones industriales",
        description:
          "Cláusulas sobre instalaciones eléctricas, terrazas y uso acordado en edificios del 22@.",
      },
      {
        title: "Renta anterior en zona tensionada",
        description: "Verificamos coherencia con normativa de Barcelona antes de firmar en Sant Martí.",
      },
      {
        title: "Servicio online sin despacho en Poblenou",
        description:
          "Briefing, documentos e inventario desde el panel — gestor disponible por WhatsApp.",
      },
      {
        title: "Inventario antes de la fianza",
        description: "Electrodomésticos, suelos y carpintería documentados con fotografías.",
      },
      {
        title: "Referente Livendia en contratos de alquiler",
        description:
          "Especialistas en LAU, habitación, temporada y administración — no agencia de captación.",
      },
      {
        title: "Depósito orientado a INCASÒL",
        description: "Te guiamos para cumplir plazos legales del depósito catalán.",
      },
    ],
    finalCtaTitle: "Contrato LAU en Poblenou entre particulares — gestoría Livendia",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Redactáis contratos LAU en el 22@ y la Rambla del Poblenou?",
        answer:
          "Sí. Adaptamos el contrato al inmueble concreto — loft, piso familiar o planta baja con uso mixto acordado — con inventario incluido y revisión de zona tensionada.",
      },
      {
        question: "¿Cómo trabaja Livendia si ya tengo inquilino en Poblenou?",
        answer:
          "Cuando propietario e inquilino ya han acordado renta y entrada, contratas online, subes datos al panel y el gestor redacta el LAU. No publicamos tu anuncio ni intervenimos en la negociación del precio.",
      },
      {
        question: "¿Es un servicio 100 % online?",
        answer:
          "Sí. Todo el proceso — contratación, documentación, inventario y entrega del borrador — se gestiona por livendia.com, panel Livendia y WhatsApp con tu gestor dedicado.",
      },
      {
        question: "¿Qué incluye la plataforma para clientes?",
        answer:
          "Expediente centralizado: contratos, fotos del inventario, hitos del servicio y comunicación con el gestor. Propietario e inquilino pueden seguir el estado sin depender de emails dispersos.",
      },
      {
        question: "¿Puedo combinar LAU con administración del alquiler?",
        answer:
          "Sí. Ofrecemos pack LAU + administración y administración mensual desde 65 €/mes para quien quiera delegar cobros, incidencias y renovaciones tras firmar en Poblenou.",
      },
      {
        question: "¿Temporada laboral o LAU habitual en Poblenou?",
        answer:
          `Te orientamos según la duración real: LAU de larga duración (${CONTRATO_ALQUILER_LAU_PRICE_LABEL}) o contrato de temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) si la estancia es acotada por trabajo o proyecto.`,
      },
    ],
  },
  "barcelona-gotic": {
    metaTitle: "Contrato alquiler larga duración Barri Gòtic — LAU particulares · 145 €",
    metaDescription:
      "Redactamos tu contrato de alquiler de larga duración en el Barri Gòtic entre particulares. Plaça Reial, Carrer del Bisbe, INCASÒL e inventario. 145 € IVA incl. Livendia online.",
    keywords: [
      "contrato alquiler larga duracion gotic",
      "contrato lau barri gothic entre particulares",
      "redactar contrato alquiler plaça reial",
      "contrato alquiler ciutat vella particular",
      "alquiler gotic sin agencia contrato",
      "contrato alquiler carrer del bisbe",
      "livendia contrato alquiler online gotic",
    ],
    heroBadge: "Entre particulares · Barri Gòtic",
    heroH1: "Redactamos tu contrato de alquiler de larga duración en el Barri Gòtic",
    heroBullets: [
      "Plaça Reial, Carrer del Bisbe, Jaume I, Call",
      "145 € IVA incl. — fincas sin ascensor e inventario",
      "INCASÒL, humedades y acceso estrecho documentados",
    ],
    whyTitle: "Barri Gòtic: fincas históricas exigen LAU a medida, no plantilla",
    whySubtitle:
      "En Ciutat Vella mezclan alquileres LAU entre particulares, locales en planta baja y pisos con humedades o escaleras estrechas. Un contrato genérico no protege a propietario ni inquilino antes de ingresar la fianza.",
    localZonesHeading: "Calles y zonas del Gòtic donde redactamos contratos LAU",
    localZones:
      "Barri Gòtic propiamente dicho, el Call, Plaça Sant Jaume, Plaça Reial, Carrer del Bisbe y límites con El Born y El Raval. Gestoría digital Livendia con precio cerrado.",
    localBenefits: [
      {
        title: "Fincas sin ascensor y accesos estrechos",
        description:
          "Protocolo de visitas de mantenimiento y mudanza documentado en el contrato.",
      },
      {
        title: "Humedades y estado del inmueble",
        description:
          "Inventario y cláusulas sobre patologías conocidas antes de la entrada — clave en edificios medievales.",
      },
      {
        title: "Renta anterior en zona tensionada",
        description: "Revisión obligatoria en todo Barcelona antes de firmar en Ciutat Vella.",
      },
      {
        title: "Servicio online Livendia",
        description:
          "Sin desplazarte a un despacho en Jaume I: briefing, panel y WhatsApp con gestor dedicado.",
      },
      {
        title: "Plataforma con expediente compartido",
        description: "Documentos e inventario visibles para propietario e inquilino antes de la firma.",
      },
      {
        title: "Otros servicios: arras, habitación, revisión",
        description:
          "Hub Livendia con contrato de arras, revisión de borrador ajeno y administración del alquiler.",
      },
    ],
    finalCtaTitle: "Firma en el Gòtic con LAU redactado por gestoría — 100 % online",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Puedo alquilar en el Barri Gòtic entre particulares sin agencia?",
        answer:
          "Sí. Es habitual cerrar en visita por Idealista o recomendación. Livendia redacta el LAU por 145 € IVA incl. cuando ya hay contraparte — no cobramos mes de agencia ni publicamos el anuncio.",
      },
      {
        question: "¿Cómo documentáis humedades o escaleras estrechas?",
        answer:
          "Con inventario fotográfico y cláusulas que reflejan el estado real del piso. En el Gòtic esto evita disputas sobre patologías preexistentes tras la mudanza.",
      },
      {
        question: "¿Qué es Livendia y en qué se diferencia de una inmobiliaria?",
        answer:
          "Somos gestoría inmobiliaria digital especializada en contratos: LAU, temporada, habitación, arras y administración. No captamos inquilinos ni vendemos pisos — redactamos y revisamos contratos entre particulares.",
      },
      {
        question: "¿El servicio es online aunque el piso esté en Plaça Reial?",
        answer:
          "Sí. Contratas en livendia.com, subes documentación al panel Livendia y el gestor coordina todo por WhatsApp. La firma puede ser presencial entre las partes con el borrador ya revisado.",
      },
      {
        question: "¿Dónde deposito la fianza en Ciutat Vella?",
        answer:
          "En Cataluña el depósito legal se gestiona habitualmente en INCASÒL. Te orientamos sobre plazos y documentación antes de entregar llaves en el Gòtic.",
      },
      {
        question: "¿Ofrecéis revisión si ya tengo un borrador del casero?",
        answer:
          "Sí. Además de redactar desde cero, revisamos contratos aportados por cualquiera de las partes para detectar cláusulas abusivas, lagunas de INCASÒL o errores de zona tensionada.",
      },
    ],
  },
  "barcelona-sarria": {
    metaTitle: "Contrato alquiler larga duración Sarrià particulares — LAU · 145 €",
    metaDescription:
      "Contrato de alquiler de larga duración en Sarrià para particulares: Reina Elisenda, Tres Torres, INCASÒL, IRAV e inventario premium. 145 € IVA incl. Livendia online.",
    keywords: [
      "contrato alquiler larga duracion sarria",
      "contrato lau sarria entre particulares",
      "alquiler sarria sin agencia contrato",
      "redactar contrato alquiler reina elisenda",
      "contrato alquiler tres torres barcelona",
      "contrato alquiler sarria sant gervasi",
      "livendia contrato alquiler online sarria",
    ],
    heroBadge: "Entre particulares · Sarrià",
    heroH1: "Contrato de alquiler de larga duración en Sarrià para particulares",
    heroBullets: [
      "Sarrià centre, Reina Elisenda, Tres Torres, Vallvidrera límite",
      "145 € IVA incl. — pisos señoriales, parking e inventario",
      "IRAV, INCASÒL y cláusulas de finca premium",
    ],
    whyTitle: "Sarrià: ticket alto, familias exigentes y LAU sin lagunas",
    whySubtitle:
      "En Sarrià y Reina Elisenda los alquileres entre particulares superan con frecuencia los 2.000 €/mes. Un LAU genérico no recoge parking, trastero, jardín privado ni tope IRAV en renovación — y ahí empiezan los conflictos costosos.",
    localZonesHeading: "Zonas de Sarrià-Sant Gervasi donde redactamos LAU",
    localZones:
      "Sarrià centre, Reina Elisenda, Les Tres Torres límite, Putxet i Farró límite, Vallvidrera límite y Bonanova límite. Misma gestoría online con panel Livendia.",
    localBenefits: [
      {
        title: "Parking, trastero y zonas comunes",
        description:
          "Anexos y plazas de garaje reflejados en el contrato e inventario — habitual en fincas de Sarrià.",
      },
      {
        title: "IRAV en renovaciones de renta alta",
        description:
          "Verificamos incremento máximo legal antes de proponer subida al inquilino en zona tensionada.",
      },
      {
        title: "Inventario premium en pisos señoriales",
        description: "Carpintería, suelos y electrodomésticos de gama alta documentados con fotos.",
      },
      {
        title: "Gestión online para propietarios en el extranjero",
        description:
          "Briefing y firma coordinados por panel y WhatsApp — sin volar a Barcelona solo por el contrato.",
      },
      {
        title: "Plataforma Livendia para ambas partes",
        description: "Expediente centralizado con hitos visibles antes de ingresar la fianza.",
      },
      {
        title: "Pack LAU + administración disponible",
        description:
          "Tras firmar, puedes delegar cobros e incidencias con administración desde 65 €/mes.",
      },
    ],
    finalCtaTitle: "Redacta tu LAU en Sarrià entre particulares — gestoría Livendia",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Redactáis contratos LAU en Sarrià y Reina Elisenda?",
        answer:
          "Sí. Adaptamos cláusulas a pisos señoriales, parking, trastero y expectativas de familias con colegios internacionales — siempre entre particulares, sin comisión de captación.",
      },
      {
        question: "¿Cómo funciona el proceso online en Livendia?",
        answer:
          "Contratas en la web, completas datos del inmueble y las partes, subes documentos al panel y un gestor redacta el LAU en 48–72 h laborables. Comunicación por WhatsApp y estado visible en la plataforma.",
      },
      {
        question: "¿Qué es la plataforma Livendia para clientes?",
        answer:
          "Panel donde centralizáis contratos, inventario fotográfico, mensajes con el gestor y avance del servicio. Diseñada para propietarios e inquilinos que quieren trazabilidad sin depender de una agencia tradicional.",
      },
      {
        question: "¿Cómo se calcula la subida de renta con IRAV en Sarrià?",
        answer:
          "Barcelona está en zona tensionada: la renovación tiene tope legal vinculado al IRAV. Revisamos coherencia entre renta pactada, renta anterior e incremento permitido antes de firmar o renovar.",
      },
      {
        question: "¿Qué otros servicios tiene Livendia en Barcelona?",
        answer:
          "Administración de alquiler, contrato de arras, contrato de habitación, temporada, revisión de borradores y packs combinados — consultables en el hub de servicios Livendia.",
      },
      {
        question: "¿Por qué Livendia y no una plantilla de internet?",
        answer:
          "Las plantillas no conocen tu piso en Sarrià ni la normativa catalana actual (INCASÒL, IRAV, renta anterior). Un gestor humano adapta cláusulas al inmueble y responde dudas antes de la fianza — por 145 € IVA incl.",
      },
    ],
  },
  "barcelona-born": {
    metaTitle: "Contrato alquiler larga duración El Born — LAU particulares · 145 €",
    metaDescription:
      "Redactamos tu contrato de alquiler de larga duración en El Born entre particulares. Passeig del Born, Santa Maria del Mar, INCASÒL e inventario. 145 € IVA incl. Livendia online.",
    keywords: [
      "contrato alquiler larga duracion born",
      "contrato lau el born entre particulares",
      "redactar contrato alquiler passeig del born",
      "alquiler born barcelona sin agencia",
      "contrato alquiler santa maria del mar",
      "contrato alquiler ciutat vella born",
      "livendia contrato alquiler online born",
    ],
    heroBadge: "Entre particulares · El Born",
    heroH1: "Redactamos tu contrato de alquiler de larga duración en El Born",
    heroBullets: [
      "Passeig del Born, Santa Maria del Mar, Sant Pere",
      "145 € IVA incl. — fincas históricas e inventario",
      "INCASÒL, renta anterior e IRAV revisados",
    ],
    whyTitle: "El Born: acuerdo en visita, LAU que refleja la finca real",
    whySubtitle:
      "En El Born es habitual alquilar entre particulares tras pocas visitas en calles del s. XVIII. El riesgo está en firmar plantillas que ignoran patios interiores, local en planta baja o renta anterior obligatoria en Barcelona.",
    localZonesHeading: "Calles de El Born donde redactamos contratos LAU",
    localZones:
      "Passeig del Born, carrer de la Princesa, Sant Pere més Baix, entorno Santa Maria del Mar, Sant Caterina límite y Gòtic límite. Gestoría digital Livendia con precio cerrado.",
    localBenefits: [
      {
        title: "Fincas del s. XVIII con patio interior",
        description: "Inventario de humedades conocidas y protocolo de acceso para reparaciones.",
      },
      {
        title: "Vivienda vs. local en planta baja",
        description: "Cláusulas sobre ruido, accesos y uso mixto acordado entre las partes.",
      },
      {
        title: "Servicio 100 % online Livendia",
        description: "Briefing, panel y WhatsApp — sin desplazarte a un despacho en Ciutat Vella.",
      },
      {
        title: "Renta anterior en zona tensionada",
        description: "Comprobamos coherencia con normativa municipal antes de firmar en El Born.",
      },
      {
        title: "Plataforma con expediente centralizado",
        description: "Documentos e inventario visibles para propietario e inquilino antes de la firma.",
      },
      {
        title: "Referente en contratos de alquiler",
        description: "LAU, habitación, temporada, administración y revisión — hub Livendia Barcelona.",
      },
    ],
    finalCtaTitle: "Firma tu LAU en El Born entre particulares — gestoría Livendia",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Cómo funciona Livendia para redactar un LAU en El Born?",
        answer:
          "Contratas en livendia.com, subes documentación al panel y un gestor redacta el contrato en 48–72 h laborables. Comunicación por WhatsApp — servicio online sin comisión de agencia de alquiler.",
      },
      {
        question: "¿Puedo alquilar en El Born entre particulares sin inmobiliaria?",
        answer:
          "Sí. Livendia no busca inquilino ni cobra mes de renta: redacta o revisa el LAU por 145 € IVA incl. cuando propietario e inquilino ya están de acuerdo.",
      },
      {
        question: "¿Qué incluye la plataforma Livendia?",
        answer:
          "Panel con expediente, inventario fotográfico, estado del servicio y mensajes con el gestor. Propietario e inquilino siguen el avance antes de firmar.",
      },
      {
        question: "¿Gestionáis pisos con local comercial en planta baja?",
        answer:
          "Sí. Dejamos por escrito uso vivienda, repercusión de ruidos y accesos — frecuente en edificios históricos del Born.",
      },
      {
        question: "¿Dónde ingreso la fianza en Ciutat Vella?",
        answer:
          "En Cataluña el depósito legal se gestiona habitualmente en INCASÒL. Te orientamos sobre plazos antes de entregar llaves en El Born.",
      },
      {
        question: "¿Qué otros servicios ofrece Livendia?",
        answer:
          "Administración de alquiler, contrato de arras, pack LAU + administración, habitación, temporada y revisión de borradores — accesibles desde el hub de servicios.",
      },
    ],
  },
  "barcelona-barceloneta": {
    metaTitle: "Alquiler larga duración La Barceloneta particulares — LAU · 145 €",
    metaDescription:
      "Alquiler de larga duración para particulares en La Barceloneta: contrato LAU por 145 € IVA incl. Joan de Borbó, platja, INCASÒL e inventario. Servicio online Livendia.",
    keywords: [
      "alquiler larga duracion barceloneta particulares",
      "contrato alquiler barceloneta entre particulares",
      "contrato lau joan de borbo",
      "redactar contrato alquiler barceloneta",
      "alquiler barceloneta sin agencia contrato",
      "contrato alquiler larga duracion platja barcelona",
      "livendia contrato alquiler online barceloneta",
    ],
    heroBadge: "Entre particulares · La Barceloneta",
    heroH1: "Alquiler de larga duración para particulares en La Barceloneta",
    heroBullets: [
      "Joan de Borbó, platja, barrio de pescadores",
      "145 € IVA incl. — pisos tradicionales e inventario",
      "LAU habitual vs. temporada bien definido",
    ],
    whyTitle: "La Barceloneta: pisos junto al mar, contrato LAU sin ambigüedades",
    whySubtitle:
      "En La Barceloneta mezclan familias locales, expatriados y alquileres cerrados en días por Idealista. Un borrador genérico no distingue LAU de uso estacional ni documenta humedad salina o climatización.",
    localZonesHeading: "Zonas de La Barceloneta donde redactamos LAU",
    localZones:
      "Passeig de Joan de Borbó, calles del barrio de pescadores, Platja de la Barceloneta, Port Vell límite y calles interiores de Ciutat Vella marítima. Gestoría online Livendia.",
    localBenefits: [
      {
        title: "Pisos tradicionales 45–65 m²",
        description: "Inventario adaptado a superficies compactas y orientación mar.",
      },
      {
        title: "LAU habitual vs. temporada",
        description: "Te orientamos si el arrendamiento es residencial estable o estancia acotada.",
      },
      {
        title: "Climatización y humedad salina",
        description: "Estado de instalaciones documentado en inventario antes de la fianza.",
      },
      {
        title: "INCASÒL y renta anterior",
        description: "Revisión obligatoria en zona tensionada de Barcelona.",
      },
      {
        title: "Servicio online con gestor humano",
        description: "Panel Livendia y WhatsApp — sin comisión de captación inmobiliaria.",
      },
      {
        title: "Otros servicios Livendia",
        description: "Administración mensual, arras, habitación y revisión de contrato ajeno.",
      },
    ],
    finalCtaTitle: "Contrato LAU en La Barceloneta — redacción profesional online",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Redactáis contratos LAU en La Barceloneta?",
        answer:
          "Sí. Adaptamos cláusulas a pisos tradicionales junto a la platja, con inventario incluido y revisión de zona tensionada e INCASÒL.",
      },
      {
        question: "¿Es Livendia un servicio online?",
        answer:
          "Sí. Contratas en la web, gestionas documentos en el panel y hablas con tu gestor por WhatsApp. No hace falta acudir a un despacho para redactar el LAU.",
      },
      {
        question: "¿Cómo trabaja Livendia si ya tengo inquilino?",
        answer:
          "Cuando ambas partes han acordado renta y fecha, el gestor redacta el contrato. Livendia no publica anuncios ni cobra porcentaje sobre la renta.",
      },
      {
        question: "¿Qué es la plataforma para clientes?",
        answer:
          "Expediente centralizado con contratos, fotos del inventario, hitos del servicio y chat con el gestor — visible para propietario e inquilino.",
      },
      {
        question: "¿Cuánto cuesta frente a una agencia?",
        answer:
          "145 € IVA incl. por redacción o revisión LAU. Una inmobiliaria suele cobrar un mes de renta — aquí solo pagas gestoría contractual.",
      },
      {
        question: "¿Puedo combinar con administración del alquiler?",
        answer:
          "Sí. Tras firmar, puedes contratar administración desde 65 €/mes o pack LAU + administración desde el hub Livendia.",
      },
    ],
  },
  "barcelona-vila-olimpica": {
    metaTitle: "Contrato alquiler larga duración Vila Olímpica — LAU · 145 €",
    metaDescription:
      "Redactamos tu contrato de alquiler de larga duración en la Vila Olímpica entre particulares. Port Olímpic, Icària, parking e INCASÒL. 145 € IVA incl. Livendia online.",
    keywords: [
      "contrato alquiler larga duracion vila olimpica",
      "contrato lau vila olimpica particulares",
      "alquiler port olimpic contrato profesional",
      "redactar contrato alquiler icaria barcelona",
      "contrato alquiler vila olimpica sin agencia",
      "contrato alquiler larga duracion sant marti",
      "livendia contrato alquiler online vila olimpica",
    ],
    heroBadge: "Entre particulares · Vila Olímpica",
    heroH1: "Redactamos tu contrato de alquiler de larga duración en la Vila Olímpica",
    heroBullets: [
      "Port Olímpic, Nova Icària, terrazas y parking",
      "145 € IVA incl. — bloques olímpicos e inventario",
      "IRAV, INCASÒL y zonas comunes documentadas",
    ],
    whyTitle: "Vila Olímpica: vistas al mar, contrato LAU con parking y terraza",
    whySubtitle:
      "En la Vila Olímpica alquilan familias y expatriados entre particulares en bloques de los 90. Un LAU genérico no recoge plaza de parking, trastero, terraza ni tope IRAV en renovación.",
    localZonesHeading: "Zonas de la Vila Olímpica donde redactamos LAU",
    localZones:
      "Vila Olímpica propiamente dicha, Port Olímpic, Platja de la Nova Icària, Parc de la Nova Icària, Ciutadella límite y Poblenou límite. Gestoría digital Livendia.",
    localBenefits: [
      {
        title: "Parking y trastero en anexo",
        description: "Plazas de garaje y trasteros reflejados en contrato e inventario.",
      },
      {
        title: "Terrazas y zonas comunes olímpicas",
        description: "Cláusulas sobre uso de terraza y mantenimiento acordado.",
      },
      {
        title: "Gestión online para propietarios en el extranjero",
        description: "Briefing y firma coordinados por panel — sin volar solo por el contrato.",
      },
      {
        title: "IRAV en zona tensionada",
        description: "Verificamos incremento máximo legal antes de renovar en Sant Martí.",
      },
      {
        title: "Plataforma Livendia",
        description: "Expediente, inventario y mensajes con gestor en un solo panel.",
      },
      {
        title: "Livendia, referente en contratos",
        description: "LAU, temporada, habitación, administración y revisión legal.",
      },
    ],
    finalCtaTitle: "Firma en la Vila Olímpica con LAU redactado por gestoría Livendia",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Cómo funciona Livendia en la Vila Olímpica?",
        answer:
          "Contratas online, subes datos al panel y un gestor redacta el LAU en 48–72 h. Comunicación por WhatsApp — servicio 100 % digital sin comisión de agencia.",
      },
      {
        question: "¿Incluís parking comunitario en el contrato?",
        answer:
          "Sí. Anexos de plaza de garaje y trastero quedan reflejados en el LAU e inventario — habitual en edificios olímpicos.",
      },
      {
        question: "¿Qué es la plataforma Livendia?",
        answer:
          "Panel donde centralizáis documentos, inventario fotográfico y avance del servicio. Propietario e inquilino ven el estado antes de firmar.",
      },
      {
        question: "¿Alquiler entre particulares sin inmobiliaria?",
        answer:
          "Sí. Livendia redacta el contrato cuando ya hay acuerdo entre las partes — no captamos inquilinos ni cobramos mes de renta.",
      },
      {
        question: "¿Otros servicios en Barcelona?",
        answer:
          "Administración de alquiler, arras, pack LAU + admin, habitación, temporada y revisión de borradores en livendia.com.",
      },
      {
        question: "¿Temporada o LAU en piso con vistas al mar?",
        answer:
          `Te orientamos según duración real: LAU habitual (${CONTRATO_ALQUILER_LAU_PRICE_LABEL}) o temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) si la estancia es acotada.`,
      },
    ],
  },
  "barcelona-el-raval": {
    metaTitle: "Contrato alquiler larga duración El Raval particulares — LAU · 145 €",
    metaDescription:
      "Contrato de alquiler de larga duración en El Raval para particulares: Rambla del Raval, MACBA, INCASÒL e inventario. 145 € IVA incl. Livendia online.",
    keywords: [
      "contrato alquiler larga duracion raval",
      "contrato lau el raval entre particulares",
      "redactar contrato alquiler rambla del raval",
      "alquiler raval sin agencia contrato",
      "contrato alquiler macba barcelona",
      "contrato habitacion raval lau",
      "livendia contrato alquiler online raval",
    ],
    heroBadge: "Entre particulares · El Raval",
    heroH1: "Contrato de alquiler de larga duración en El Raval para particulares",
    heroBullets: [
      "Rambla del Raval, MACBA, Raval sud, Sant Antoni límite",
      "145 € IVA incl. — pisos compartidos e inventario",
      "Convivencia, humedades e INCASÒL revisados",
    ],
    whyTitle: "El Raval: rotación alta, LAU con convivencia e inventario serio",
    whySubtitle:
      "El Raval concentra pisos compartidos, edificios del s. XIX y alquileres entre particulares con acuerdo verbal. Sin contrato adaptado, humedades, ruido y habitaciones mal reguladas generan conflictos en semanas.",
    localZonesHeading: "Calles de El Raval donde redactamos contratos LAU",
    localZones:
      "Rambla del Raval, entorno MACBA, Raval sud, Sant Antoni límite, Hospital Clínic límite y Gòtic límite. Gestoría online Livendia con entrega en 48–72 h.",
    localBenefits: [
      {
        title: "Piso entero vs. habitación en piso compartido",
        description: "LAU habitual o contrato de habitación según uso real del inmueble.",
      },
      {
        title: "Normas de convivencia por escrito",
        description: "Limpieza, ruido y visitas documentadas — clave en pisos compartidos.",
      },
      {
        title: "Humedades en patios interiores",
        description: "Inventario de patologías conocidas antes de entregar la fianza.",
      },
      {
        title: "Servicio online Livendia",
        description: "Panel, WhatsApp y gestor humano — sin despacho en Ciutat Vella.",
      },
      {
        title: "Renta anterior e INCASÒL",
        description: "Revisión en zona tensionada catalana antes de firmar en El Raval.",
      },
      {
        title: "Hub de servicios Livendia",
        description: "Administración, arras, revisión de borrador ajeno y pack LAU + admin.",
      },
    ],
    finalCtaTitle: "Redacta tu LAU en El Raval entre particulares — gestoría Livendia",
    localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    faq: [
      {
        question: "¿Redactáis LAU para pisos compartidos en El Raval?",
        answer:
          "Sí. LAU de piso entero o contrato de habitación con normas de convivencia — según el uso acordado entre las partes.",
      },
      {
        question: "¿Cómo funciona el servicio online de Livendia?",
        answer:
          "Contratas en livendia.com, subes documentación al panel y el gestor redacta el contrato. Todo por WhatsApp y plataforma — sin visitar un despacho.",
      },
      {
        question: "¿Qué es Livendia frente a una inmobiliaria?",
        answer:
          "Gestoría especializada en contratos: no publicamos anuncios ni cobramos comisión sobre la renta. Redactamos LAU por tarifa plana de 145 € IVA incl.",
      },
      {
        question: "¿Documentáis humedades antes de firmar?",
        answer:
          "Sí. Inventario fotográfico de estado del piso y patologías conocidas — imprescindible en edificios antiguos del Raval.",
      },
      {
        question: "¿Qué incluye la plataforma para clientes?",
        answer:
          "Expediente centralizado: contratos, fotos, hitos del servicio y mensajes con el gestor visible para propietario e inquilino.",
      },
      {
        question: "¿Qué otros servicios tiene Livendia?",
        answer:
          "Administración de alquiler desde 65 €/mes, contrato de arras, temporada, revisión legal y packs combinados — en el hub de servicios Livendia Barcelona.",
      },
    ],
  },
  "hospitalet-de-llobregat": {
    metaTitle: "Contrato alquiler L'Hospitalet entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en L'Hospitalet sin agencia inmobiliaria. Propietario e inquilino particular: 145 € IVA incl. Collblanc, Bellvitge, INCASÒL e inventario. Livendia.",
    keywords: [
      "contrato alquiler hospitalet entre particulares",
      "contrato lau l hospitalet de llobregat",
      "alquilar piso hospitalet sin agencia",
      "contrato alquiler collblanc particular",
      "contrato alquiler bellvitge",
      "redactar contrato alquiler hospitalet",
      "alquiler piso l hospitalet contrato lau",
    ],
    heroBadge: "Entre particulares · L'Hospitalet",
    heroH1: "Contrato de alquiler en L'Hospitalet entre particulares — sin inmobiliaria",
    heroBullets: [
      "Collblanc, Bellvitge, La Florida, centre",
      "145 € IVA incl. vs. gestión de agencia",
      "INCASÒL y zona tensionada del Baix Llobregat",
    ],
    whyTitle: "L'Hospitalet: alquiler metropolitano directo entre particulares",
    whySubtitle:
      "Muchos inquilinos eligen L'Hospitalet por precio frente a Barcelona y cierran con el propietario por Idealista. El contrato no puede ser una copia barcelonesa sin adaptar comunidad ni plazos.",
    localZonesHeading: "Barrios de L'Hospitalet donde gestionamos contratos LAU",
    localZones:
      "Collblanc, Bellvitge, La Florida, Sant Josep, Pubilla Cases, el centre y zona Can Serra. Misma operativa online que en Barcelona capital.",
    localBenefits: [
      {
        title: "Comunidad en bloques densos",
        description:
          "Revisamos cláusulas sobre derramas y certificado de deuda cuando el edificio tiene muchas viviendas.",
      },
      {
        title: "Compradores que vienen de Barcelona",
        description:
          "Contrato claro sobre entrada, fianza e inventario cuando la negociación fue rápida por precio.",
      },
      {
        title: "Sin comisión sobre la renta",
        description: "Gestoría contractual a precio cerrado — Livendia no es agencia de alquiler.",
      },
      {
        title: "Depósito INCASÒL explicado",
        description: "Igual que en Barcelona: fianza al organismo catalán, no al casero.",
      },
      {
        title: "LAU, temporada o habitación",
        description: `Tres modalidades desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. según tu caso.`,
      },
      {
        title: "Panel y firma digital",
        description: "Subes documentación y hablas con tu gestor sin citas presenciales.",
      },
    ],
    finalCtaTitle: "Alquila en L'Hospitalet entre particulares con contrato revisado",
    faq: [
      {
        question: "¿El contrato de L'Hospitalet es igual que el de Barcelona?",
        answer:
          "La LAU estatal y la normativa catalana (INCASÒL, zona tensionada) aplican igual. Adaptamos cláusulas al inmueble concreto y al barrio — no usamos plantillas genéricas.",
      },
      {
        question: "¿Atendéis alquileres encontrados por Idealista?",
        answer:
          "Sí. Es nuestro caso habitual: propietario e inquilino ya de acuerdo y necesitan contrato profesional sin pagar gestión de agencia.",
      },
    ],
  },
  "cornella-de-llobregat": {
    metaTitle: "Contrato alquiler Cornellà entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Cornellà de Llobregat sin agencia. Entre propietario e inquilino particular por 145 € IVA incl. Sant Ildefons, Can Mercader, inventario. Livendia.",
    keywords: [
      "contrato alquiler cornella entre particulares",
      "contrato lau cornella de llobregat",
      "alquilar piso cornella sin agencia",
      "contrato alquiler sant ildefons",
      "redactar contrato alquiler cornella",
      "alquiler piso cornella particular contrato",
      "contrato alquiler baix llobregat particular",
    ],
    heroBadge: "Entre particulares · Cornellà",
    heroH1: "Contrato de alquiler en Cornellà entre particulares — LAU sin agencia",
    heroBullets: [
      "Sant Ildefons, Can Mercader, centre, zona Renfe",
      "145 € IVA incl. — gestoría para particulares",
      "Inventario e INCASÒL antes de la fianza",
    ],
    whyTitle: "Cornellà: particulares que alquilan en el Baix Llobregat",
    whySubtitle:
      "Operaciones directas entre propietario e inquilino son habituales cuando el comprador trabaja en Barcelona y busca precio en Cornellà. Hace falta contrato LAU serio, no un PDF de otra ciudad.",
    localZonesHeading: "Zonas de Cornellà donde redactamos contratos",
    localZones:
      "Sant Ildefons, Can Mercader, el centre, la zona de la estación de Renfe y el entorno del Parc de Can Mercader. Gestoría online Livendia.",
    localBenefits: [
      {
        title: "Alquiler metropolitano sin intermediario",
        description:
          "Ideal cuando ya tenéis fecha de entrada y solo falta cerrar el texto legal del LAU.",
      },
      {
        title: "Zona tensionada catalana",
        description: "Revisamos tope de renta e información de contrato anterior.",
      },
      {
        title: "Comunidad y suministros claros",
        description: "Evitamos lagunas sobre IBI, basura o ascensor en bloques del Baix Llobregat.",
      },
      {
        title: "No somos agencia de alquiler",
        description: "No captamos inquilinos ni cobramos mes de gestión sobre la renta.",
      },
      {
        title: "Inventario fotográfico",
        description: "Entrada y salida documentadas para evitar disputas.",
      },
      {
        title: "Temporada laboral o LAU habitual",
        description: `Te orientamos sobre la modalidad correcta (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} temporada si aplica).`,
      },
    ],
    finalCtaTitle: "Firma en Cornellà con contrato LAU entre particulares",
    faq: [
      {
        question: "¿Gestionáis alquileres en Cornellà aunque viváis fuera?",
        answer:
          "Sí. Propietarios e inquilinos pueden contratar online desde cualquier lugar si el piso está en Cornellà de Llobregat.",
      },
      {
        question: "¿Cuánto cuesta frente a una agencia?",
        answer:
          "Livendia cobra 145 € IVA incl. por redacción o revisión LAU. Una agencia suele cobrar un mes de renta o porcentaje — aquí solo pagas gestoría contractual.",
      },
    ],
  },
};

export const ALQUILER_LOCAL_DIFFERENTIATION: Record<string, LocalDifferentiationFields> = {
  ...attachLocalMarketInsights(ALQUILER_LOCAL_DIFFERENTIATION_CORE, ALQUILER_LOCAL_CORE_MARKET_INSIGHTS),
  ...ALQUILER_LOCAL_DIFFERENTIATION_EXTENDED,
};
