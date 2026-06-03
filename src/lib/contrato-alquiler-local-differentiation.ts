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
    keywords: [
      "contrato alquiler barcelona",
      "contrato lau barcelona",
      "alquiler piso barcelona contrato",
      "revisar contrato alquiler eixample",
    ],
    heroH1: "Contrato de alquiler en Barcelona — LAU, inventario y gestor",
    heroBullets: [
      "Eixample, Gràcia, Poblenou, L'Hospitalet, Badalona",
      "ITE y comunidad revisadas antes de firmar",
      "Contratos en castellano o mixtos bilingües explicados",
    ],
    whyTitle: "Barcelona: alquiler tensionado, contrato preciso",
    whySubtitle:
      "Regulación turística, pisos antiguos con obras en comunidad y rentas negociadas al detalle. El texto debe reflejar lo acordado, no un PDF de otra ciudad.",
    localZonesHeading: "Barrios y municipios del área metropolitana",
    localZones:
      "Eixample, Gràcia, Sant Martí, Sants, Les Corts, L'Hospitalet, Badalona, Cornellà y área metropolitana. Revisión LAU con inventario integrado.",
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
    metaTitle: "Contrato de alquiler en Asturias — Oviedo, Gijón y costa | Livendia",
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
};
