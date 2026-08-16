import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";

/** Copy único por ciudad — contrato de alquiler local. */
export const ALQUILER_LOCAL_DIFFERENTIATION: Record<string, LocalCityLandingFields & { faq?: readonly { question: string; answer: string }[] }> = {
  madrid: {
    keywords: [
      "contrato alquiler madrid",
      "contrato lau madrid",
      "redactar contrato alquiler madrid",
      "revisar contrato alquiler madrid",
      "inventario alquiler madrid",
    ],
    heroH1: "Contrato de alquiler en Madrid revisado por gestor LAU",
    heroBullets: [
      "Chamberí, Retiro, Tetuán, Vallecas y cinturón sur",
      `LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, temporada o habitación`,
      "Inventario fotográfico incluido en el expediente",
    ],
    whyTitle: "Alquilar en Madrid sin plantillas que generan litigios",
    whySubtitle:
      "En la Comunidad de Madrid miles de contratos se firman con PDF idénticos. Livendia adapta cláusulas a tu tipología real y a la LAU vigente.",
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
    keywords: [
      "contrato alquiler valencia",
      "contrato lau valencia",
      "alquiler ruzafa contrato",
      "revisar contrato alquiler valencia",
    ],
    heroH1: "Contrato de alquiler en Valencia con revisión LAU profesional",
    heroBullets: [
      "Ciutat Vella, Ruzafa, Benimaclet, Campanar, Mislata",
      "Rotación rápida: revisamos antes de la señal",
      "Inventario y suministros por escrito",
    ],
    whyTitle: "Valencia: mercado dinámico, contratos a medida",
    whySubtitle:
      "Reservas en 48 horas y promesas verbales en la visita exigen un contrato que las recoja por escrito.",
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
