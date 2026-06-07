import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";

export const TEMPORADA_LOCAL_DIFFERENTIATION: Record<
  string,
  LocalCityLandingFields & { faq?: readonly { question: string; answer: string }[] }
> = {
  madrid: {
    metaTitle: "Contrato alquiler temporada Madrid — 200 € | Livendia",
    metaDescription:
      "Contrato de alquiler por temporada en Madrid: 200 € IVA incl., entrega 24-48 h. Causa de temporalidad y fianza redactadas por gestor. Livendia online.",
    keywords: [
      "contrato alquiler temporada madrid",
      "contrato temporada oposicion madrid",
      "alquiler temporal azca madrid",
      "contrato arrendamiento temporada madrid",
    ],
    heroH1: `Contrato de alquiler por temporada en Madrid — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} | Livendia`,
    heroBullets: [
      "Oposiciones, IE/IESE, Azca y CTBA",
      "Causa de temporalidad y fianza 2 meses",
      "24-48 h laborables · gestor dedicado",
    ],
    whyTitle: "Madrid: estancias acotadas, contrato acorde",
    whySubtitle:
      "Oposiciones, desplazamientos corporativos y másteres intensivos exigen un contrato fuera del LAU de vivienda habitual. Adaptamos el texto al motivo real de la estancia.",
    localZonesHeading: "Zonas de Madrid donde redactamos contratos de temporada",
    localZones:
      "Centro, Salamanca, Chamberí, Retiro, Moncloa, Tetuán, Carabanchel, Vallecas y municipios del cinturón (Móstoles, Getafe, Alcobendas). Misma gestoría online en toda la Comunidad de Madrid.",
    localBenefits: [
      {
        title: "Oposiciones y funcionarios en tránsito",
        description: "Duración ligada a convocatoria, academia o periodo de pruebas en sedes de la capital.",
      },
      {
        title: "Ejecutivos en Castellana y Azca",
        description: "Proyectos con fecha de fin, empresa y condiciones de prórroga por escrito.",
      },
      {
        title: "Rodajes y equipos audiovisuales",
        description: "Entrega y devolución del piso documentadas con inventario.",
      },
      {
        title: "Fianza de dos mensualidades",
        description: "Art. 36.1 LAU para uso distinto de vivienda — no confundir con LAU habitual.",
      },
      {
        title: "Sin comisión de agencia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. tarifa plana gestoría inmobiliaria.`,
      },
      {
        title: "Entrega 24-48 h",
        description: "Tras recibir datos completos de partes e inmueble.",
      },
    ],
  },
  barcelona: {
    metaTitle: "Contrato alquiler temporada Barcelona — 200 €",
    metaDescription:
      "Contrato alquiler temporada Barcelona: 200 € IVA incl., 24-48 h. Erasmus, 22@, MWC. Causa temporalidad y fianza. Gestoría Livendia sin comisión.",
    keywords: [
      "contrato alquiler temporada barcelona",
      "contrato temporada erasmus barcelona",
      "alquiler temporal 22 barcelona",
      "contrato arrendamiento temporada cataluña",
    ],
    heroH1: `Contrato de alquiler por temporada en Barcelona — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} | Livendia`,
    heroBullets: [
      "Erasmus UB/UPC/ESADE, 22@, MWC y Sónar",
      "Causa de temporalidad explícita (art. 3.2 LAU)",
      "200 € IVA incl. · 24-48 h · 100 % online",
    ],
    whyTitle: "Barcelona: Erasmus, tech y eventos, no un LAU de serie",
    whySubtitle:
      "En Cataluña mezclar temporada contractual con alquiler habitual o turístico genera litigios. Livendia redacta el contrato según el uso pactado, no según un PDF de otra ciudad.",
    localZonesHeading: "Barcelona y área metropolitana: dónde gestionamos temporadas",
    localZones:
      "Eixample, Gràcia, Sant Martí, Poblenou (22@), Sants, Les Corts, L'Hospitalet, Badalona y Cornellà. Gestoría inmobiliaria digital para propietarios en península o extranjero.",
    localBenefits: [
      {
        title: "Estudiantes internacionales",
        description: "Semestre o curso en UB, UPC, UAB o ESADE con normas de convivencia y salida claras.",
      },
      {
        title: "Profesionales en 22@ y Glòries",
        description: "Contrato bilingüe si hace falta, con duración del proyecto y suministros.",
      },
      {
        title: "Eventos MWC y congresos Fira",
        description: "Estancia por semanas o meses sin activar prórrogas LAU.",
      },
      {
        title: "Verano en Barceloneta o costa metropolitana",
        description: "Distinto de VUT: contrato civil de temporada entre particulares.",
      },
      {
        title: "Inventario en pisos amueblados",
        description: "Mobiliario y estado documentados para entrada y salida.",
      },
      {
        title: "Tarifa plana Livendia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl., sin comisión inmobiliaria.`,
      },
    ],
  },
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
        answer: `Sí, con un contrato de temporada redactado para esa duración (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.). No debe ser una copia de contrato LAU de larga duración.`,
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
    ],
  },
};
