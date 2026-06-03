import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";

export const TEMPORADA_LOCAL_DIFFERENTIATION: Record<
  string,
  LocalCityLandingFields & { faq?: readonly { question: string; answer: string }[] }
> = {
  mallorca: {
    metaTitle: "Contrato alquiler temporada Mallorca y Palma | Livendia",
    metaDescription:
      "Contrato de alquiler por temporada en Mallorca: Palma, Calvià, Alcúdia. Duración, fianza, inventario y suministros. Gestor online Livendia.",
    keywords: [
      "contrato alquiler temporada mallorca",
      "contrato temporada palma",
      "alquiler temporal calvia",
      "contrato verano mallorca",
      "alquiler por temporada baleares",
    ],
    heroH1: "Contrato de alquiler por temporada en Mallorca — no uses un LAU genérico",
    heroBullets: [
      "Palma, Calvià, Alcúdia, Manacor, Pollensa",
      "Estancias de verano, teletrabajo y segunda residencia",
      `Tarifa fija ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.`,
    ],
    whyTitle: "Mallorca: temporada contractual bien cerrada",
    whySubtitle:
      "En las Baleares confundir temporada con arrendamiento habitual o con régimen turístico de alquiler genera sanciones y litigios. Livendia redacta el contrato acorde al uso pactado.",
    localZonesHeading: "Isla de Mallorca: dónde redactamos contratos de temporada",
    localZones:
      "Palma ciudad (Portixol, Son Espanyolet, Pere Garau), Calvià, Palmanova, Magaluf, Alcúdia, Pollensa, Manacor, Inca, Sóller y núcleos de segunda residencia. Mismo gestor online para propietarios en la península.",
    localBenefits: [
      {
        title: "Duración y motivo de la estancia",
        description:
          "Por escrito: fechas exactas, prórroga, salida anticipada y qué ocurre con la señal si el inquilino no obtiene visado o obra.",
      },
      {
        title: "Mobiliario y ropa de cama",
        description:
          "Inventario de equipamiento incluido vs. aportado por inquilino — crítico en apartamentos amueblados.",
      },
      {
        title: "Limpieza de salida y fianza",
        description:
          "Depósito, checklist de limpieza y penalizaciones proporcionadas, no copiadas de un LAU de 5 años.",
      },
      {
        title: "Suministros y comunidad",
        description:
          "Agua, luz, basuras y uso de parking o trastero comunitario en edificios de la costa.",
      },
      {
        title: "No confundir con licencia turística",
        description:
          "Te orientamos: contrato de temporada entre particulares no sustituye licencias de vivienda de uso turístico si la normativa local lo exige.",
      },
      {
        title: "Inventario fotográfico Livendia",
        description: "Estado del piso al entrar y al salir documentado en el expediente.",
      },
    ],
    faq: [
      {
        question: "¿Puedo alquilar mi piso en Palma solo tres meses en verano?",
        answer:
          `Sí, con un contrato de temporada redactado para esa duración (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.). No debe ser una copia de contrato LAU de larga duración.`,
      },
      {
        question: "¿El contrato de temporada vale para alquiler turístico con licencia?",
        answer:
          "Son figuras distintas. Si alquilas con licencia turística, la normativa balear y municipal es adicional. Nosotros cubrimos el contrato civil entre arrendador e inquilino temporal.",
      },
      {
        question: "¿Qué pasa si el inquilino quiere quedarse más tiempo?",
        answer:
          "La prórroga y la nueva duración deben constar por escrito antes de ampliar. Te ayudamos a redactar addenda o nuevo contrato.",
      },
      {
        question: "¿Atendéis propietarios que viven fuera de Mallorca?",
        answer:
          "Sí. Todo el proceso es online: contratas, subes datos y firmas con inventario sin viajar a la isla.",
      },
      {
        question: "¿Incluye revisión si ya tengo un borrador del propietario?",
        answer:
          "Sí. Revisamos cláusulas desequilibradas de duración, fianza o suministros antes de que firmes.",
      },
    ],
  },
};
