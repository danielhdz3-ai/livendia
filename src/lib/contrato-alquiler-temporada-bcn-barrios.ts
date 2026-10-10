import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";
import {
  TEMPORADA_LAU_COMPARISON_BARCELONA,
  type TemporadaLocalSeoContent,
} from "@/lib/contrato-alquiler-temporada-local-seo-content";
import { getTemporadaBcnBarrioHeroImage } from "@/lib/contrato-alquiler-temporada-bcn-images";

const PRICE = CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL;

const INCLUDES: readonly string[] = [
  "Identificación de partes e inmueble",
  "Cláusula de causa de temporalidad (obligatoria para blindar el contrato)",
  "Duración pactada y condiciones de prórroga o finalización",
  "Renta, forma de pago y actualización si procede",
  "Fianza (2 mensualidades en uso distinto de vivienda) y garantías adicionales",
  "Cláusulas de uso, conservación y prohibiciones",
  "Inventario del inmueble cuando el estado debe quedar documentado",
  "Entrega en PDF firmable y gestor hasta la firma",
];

type BarrioTemporadaSpec = {
  slug: string;
  city: string;
  zoneShort: string;
  heroH1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroLead: string;
  whyTitle: string;
  whySubtitle: string;
  whyIntro: string;
  howIntro: string;
  localZonesHeading: string;
  localZones: string;
  localBenefits: readonly { title: string; description: string }[];
  introParagraph: string;
  whenToUseCases: readonly string[];
  risksParagraph: string;
  savingsTitle: string;
  savingsIntro: string;
  highlightRent: number;
  savingsRows: readonly { monthlyRent: number; lawyerWithVat: number; agencyEstimate: number }[];
  savingsFootnote: string;
  faqLocal: readonly { question: string; answer: string }[];
  finalCtaLead: string;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
};

function buildSeo(spec: BarrioTemporadaSpec): TemporadaLocalSeoContent {
  return {
    introParagraph: spec.introParagraph,
    whenToUseCases: spec.whenToUseCases,
    includesItems: INCLUDES,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_BARCELONA,
    risksParagraph: spec.risksParagraph,
    savingsTitle: spec.savingsTitle,
    savingsIntro: spec.savingsIntro,
    savingsRows: spec.savingsRows,
    highlightRent: spec.highlightRent,
    savingsFootnote: spec.savingsFootnote,
    faq: spec.faqLocal,
  };
}

const BARRIO_SPECS: BarrioTemporadaSpec[] = [
  {
    slug: "barcelona-eixample",
    city: "Eixample (Barcelona)",
    zoneShort: "l'Eixample",
    heroH1: "Contrato de alquiler por temporada en l'Eixample — Erasmus y profesionales sin comisión",
    metaTitle: `Contrato alquiler temporada Eixample — ${PRICE} · particulares`,
    metaDescription: `¿Alquiler temporal en l'Eixample entre particulares? Causa de temporalidad, fianza e inventario. ${PRICE} IVA incl. Gestor Livendia 24-48 h. Dreta, Esquerra, Sagrada Família.`,
    keywords: [
      "contrato alquiler temporada eixample",
      "alquiler temporal eixample particulares",
      "contrato temporada erasmus barcelona eixample",
      "redactar contrato alquiler temporal dreta eixample",
    ],
    heroLead: `En l'Eixample, particulares alquilan pisos amueblados por semestre, curso o proyecto sin pagar comisión de agencia. Livendia redacta el contrato de temporada con causa explícita, fianza de dos mensualidades e inventario — ${PRICE} IVA incluido, entrega 24-48 h.`,
    whyTitle: "l'Eixample: temporada contractual, no LAU de serie en finca señorial",
    whySubtitle:
      "Erasmus, másteres y ejecutivos en desplazamiento temporal necesitan plazos cerrados. Un borrador LAU de vivienda habitual en una finca de 1900 activa prórrogas que ninguna parte quería.",
    whyIntro:
      "La rotación en Dreta y Esquerra es alta; mezclar temporada con alquiler habitual tensiona fianzas y salidas en junio.",
    howIntro:
      "Cinco pasos con gestor dedicado: llamada, contratación online, documentación, redacción e inventario, firma asesorada.",
    localZonesHeading: "Zonas del Eixample donde redactamos contratos de temporada",
    localZones:
      "Dreta de l'Eixample (Passeig de Gràcia, Rambla Catalunya), Esquerra (Sant Antoni límite, Urgell), Sagrada Família, Fort Pienc y Nova Esquerra. Trámite 100 % online para propietarios en Cataluña o fuera.",
    localBenefits: [
      {
        title: "Erasmus y másteres",
        description: "Duración acorde al calendario académico UB/UPC con salida clara en verano.",
      },
      {
        title: "Ejecutivos en desplazamiento",
        description: "Estancia por meses en Passeig de Gràcia o zona señorial con contrato bilingüe si hace falta.",
      },
      {
        title: "Pisos amueblados de temporada",
        description: "Inventario de mobiliario y electrodomésticos en fincas centenarias compartidas o enteras.",
      },
      {
        title: "Sin comisión inmobiliaria",
        description: "Trato directo entre particulares; Livendia cobra tarifa plana por redacción.",
      },
      {
        title: "Contención de rentas",
        description: "Orientación cuando el uso pactado no es vivienda habitual en zona tensionada.",
      },
      {
        title: "Panel y gestor",
        description: `${PRICE} IVA incl., expediente online y mismo interlocutor hasta firmar.`,
      },
    ],
    introParagraph:
      "En l'Eixample, propietarios e inquilinos cierran alquileres temporales cada curso: Erasmus en piso amueblado de Dreta, consultores tres trimestres en Esquerra o veranos en piso señorial sin agencia. Firmar un LAU de vivienda habitual cuando ambas partes quieren solo nueve meses es el error más repetido — y el que más litigios genera al devolver la fianza. Livendia redacta contrato de temporada entre particulares con causa de temporalidad (art. 3.2 LAU), plazos cerrados e inventario — 200 € IVA incluido, gestor dedicado, 24-48 h laborables.",
    whenToUseCases: [
      "Estudiante internacional un semestre o curso en UB/UPC con piso amueblado en Esquerra o Sagrada Família.",
      "Profesional desplazado a oficinas de Passeig de Gràcia por proyecto de 6-12 meses.",
      "Propietario que alquila verano en finca de 1900 sin convertir el uso en turístico regulado.",
      "Teletrabajo temporal en piso compartido de alta rotación entre Dreta y Fort Pienc.",
      "Estancia por prácticas o máster con fecha de salida acordada antes de entregar llaves.",
    ],
    risksParagraph:
      "En l'Eixample un LAU genérico para una estancia académica puede recalificarse si el inquilino acredita residencia habitual. Los conflictos sobre comunidad cara, mobiliario antiguo y fianza de dos meses mal explicada son frecuentes en pisos amueblados. Sin causa de temporalidad por escrito, propietario e inquilino asumen riesgo judicial.",
    savingsTitle: "Redactar temporada en l'Eixample: Livendia frente a despacho o agencia",
    savingsIntro:
      "Honorarios de abogado o gestión de contrato en agencia suelen superar los 450 € en el distrito. Comparativa según renta mensual de referencia:",
    highlightRent: 1650,
    savingsRows: [
      { monthlyRent: 1350, lawyerWithVat: 470, agencyEstimate: 743 },
      { monthlyRent: 1650, lawyerWithVat: 540, agencyEstimate: 908 },
      { monthlyRent: 2000, lawyerWithVat: 610, agencyEstimate: 1100 },
      { monthlyRent: 2450, lawyerWithVat: 700, agencyEstimate: 1348 },
    ],
    savingsFootnote:
      "Orientativo l'Eixample: despacho (IVA incl.) y agencia ~50 % mensualidad ref. Livendia 200 € IVA incl., tarifa plana.",
    faqLocal: [
      {
        question: "¿Puedo alquilar por temporada un piso en Dreta de l'Eixample entre particulares?",
        answer: `Sí, con contrato de temporada redactado para el motivo real (estudios, trabajo acotado, etc.). Livendia gestiona online por ${PRICE} IVA incl.`,
      },
      {
        question: "¿Es lo mismo temporada que alquiler turístico en el Eixample?",
        answer:
          "No. El contrato civil de temporada entre particulares no sustituye licencia de uso turístico si la actividad es VUT. Conviene distinguir uso pactado y duración.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados señoriales?",
        answer:
          "Sí, cuando procede documentamos mobiliario y estado para entrada y salida — habitual en temporadas en fincas centenarias.",
      },
      {
        question: "¿Atendéis inquilinos que aún no han firmado con el propietario?",
        answer:
          "Sí. Muchos particulares contratan Livendia para equilibrar el documento antes de transferir fianza o primera mensualidad.",
      },
    ],
    finalCtaLead: `Contrato de temporada en l'Eixample — ${PRICE} IVA incl. · gestor Livendia`,
    testimonialsTitle: "Particulares en l'Eixample que redactaron temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos nueve meses a una estudiante Erasmus en Esquerra. El gestor dejó causa de temporalidad, fianza e inventario del piso amueblado antes de la entrada.",
        author: "Marta S.",
        role: "Propietaria — Esquerra de l'Eixample",
      },
      {
        quote:
          "Entré en Dreta por un proyecto de consultoría. Livendia explicó la diferencia con LAU habitual y el borrador cuadró con lo pactado con el propietario.",
        author: "James L.",
        role: "Inquilino temporal — Dreta",
      },
    ],
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia (Barcelona)",
    zoneShort: "Gràcia",
    heroH1: "Alquiler temporal en Gràcia entre particulares — contrato Livendia en 24-48 h",
    metaTitle: `Contrato temporada Gràcia Barcelona — ${PRICE} · sin agencia`,
    metaDescription: `Contrato alquiler por temporada en Gràcia: Vila de Gràcia, Joanic. Causa temporalidad, inventario. ${PRICE} IVA incl. Particulares, gestor Livendia.`,
    keywords: [
      "contrato alquiler temporada gracia",
      "alquiler temporal gracia particulares",
      "contrato temporada vila de gracia",
      "alquiler por meses gracia barcelona contrato",
    ],
    heroLead: `Gràcia mezcla propietarios locales, estudiantes y teletrabajadores en pisos de planta baja y áticos amueblados por temporadas. Livendia redacta el contrato civil de temporada entre particulares — ${PRICE} IVA incluido, sin comisión, entrega 24-48 h con inventario.`,
    whyTitle: "Gràcia: estancias por curso u obra, no un LAU copiado de internet",
    whySubtitle:
      "En Vila de Gràcia cerrar en verbal y firmar un LAU estándar deja la fianza y la salida en junio sin reglas claras.",
    whyIntro: "Planta baja, terrazas compartidas y rotación estudiantil exigen cláusulas de temporada explícitas.",
    howIntro:
      "Recogemos motivo y plazos, redactamos fuera del LAU habitual, integramos inventario y acompañamos hasta firmar.",
    localZonesHeading: "Barrios de Gràcia para contrato de alquiler temporal",
    localZones:
      "Vila de Gràcia (Plaça del Sol), Camp d'en Grassot i Gràcia Nova, La Salut (límite Park Güell), Vallcarca i Penitents. Gestoría online para propietarios en Barcelona o fuera de Cataluña.",
    localBenefits: [
      {
        title: "Curso académico",
        description: "Cláusulas de entrada en septiembre y salida en junio con preaviso claro.",
      },
      {
        title: "Obra en edificio",
        description: "Estancia temporal del inquilino mientras dura reforma en finca de Gràcia.",
      },
      {
        title: "Teletrabajo estacional",
        description: "Tres a nueve meses en piso amueblado con suministros e internet por escrito.",
      },
      {
        title: "Planta baja y usos mixtos",
        description: "Delimitación de uso del inmueble cuando conviven vivienda y local.",
      },
      {
        title: "Inventario fotográfico",
        description: "Estado de terraza, cocina equipada y mobiliario antes de entregar llaves.",
      },
      {
        title: "Tarifa plana",
        description: `${PRICE} IVA incl. — sin porcentaje sobre la renta.`,
      },
    ],
    introParagraph:
      "En Gràcia es habitual alquilar entre particulares por un curso, una obra en el edificio o un teletrabajo de invierno en piso amueblado de Vila de Gràcia. Las plantillas LAU de vivienda habitual no recogen terrazas compartidas, locales en planta baja ni calendarios de salida en junio. Livendia prepara contrato de temporada con causa documentada, fianza de dos mensualidades cuando corresponde e inventario — 200 € IVA incluido, trámite online y gestor hasta la firma.",
    whenToUseCases: [
      "Estudiante en Joanic o Travessera de Gràcia por un curso completo.",
      "Inquilino temporal durante reforma integral en finca del distrito.",
      "Propietario que alquila invierno en La Salut sin intermediarios.",
      "Profesional creativo tres trimestres en piso compartido amueblado.",
      "Estancia de meses con mascota o pareja visitante — pactos por escrito antes de la fianza.",
    ],
    risksParagraph:
      "En Gràcia los acuerdos verbales sobre limpieza de zonas comunes y devolución de fianza explotan al final del curso. Un LAU mal aplicado puede obligar a prórrogas no deseadas. Redactar temporada desde el inicio cuesta menos que mediación posterior.",
    savingsTitle: "Cuánto cuesta un contrato de temporada en Gràcia",
    savingsIntro: "Comparativa orientativa frente a despacho o agencia en el distrito:",
    highlightRent: 1400,
    savingsRows: [
      { monthlyRent: 1100, lawyerWithVat: 440, agencyEstimate: 605 },
      { monthlyRent: 1400, lawyerWithVat: 500, agencyEstimate: 770 },
      { monthlyRent: 1700, lawyerWithVat: 560, agencyEstimate: 935 },
      { monthlyRent: 2100, lawyerWithVat: 630, agencyEstimate: 1155 },
    ],
    savingsFootnote: "Gràcia: honorarios orientativos. Livendia 200 € IVA incl., sin comisión.",
    faqLocal: [
      {
        question: "¿Redactáis contratos de temporada en Vila de Gràcia?",
        answer: "Sí, para la dirección concreta con gestor dedicado y panel Livendia.",
      },
      {
        question: "¿Qué pasa si la estancia dura un curso escolar?",
        answer:
          "El contrato debe reflejar motivo académico, fechas y salida. No debe ser un LAU de cinco años con prórrogas automáticas.",
      },
      {
        question: "¿Puedo contratar si soy inquilino?",
        answer: `Sí. ${PRICE} IVA incl. — muchos inquilinos encargan el servicio antes de ingresar fianza.`,
      },
      {
        question: "¿Incluye cláusulas de suministros?",
        answer: "Sí, luz, agua, gas e internet se detallan según lo pactado entre particulares.",
      },
    ],
    finalCtaLead: `Contrato temporada Gràcia — ${PRICE} IVA incl. · llamada previa con gestor`,
    testimonialsTitle: "Temporadas en Gràcia gestionadas con Livendia",
    testimonials: [
      {
        quote:
          "Alquilé seis meses en Camp d'en Grassot. El contrato recogió obra en el edificio y salida sin prórroga LAU.",
        author: "Jordi P.",
        role: "Inquilino temporal — Gràcia",
      },
      {
        quote:
          "Propietaria en Vila de Gràcia: Livendia inventarió el piso amueblado y fijó fianza antes de la entrada del inquilino.",
        author: "Sílvia R.",
        role: "Propietaria — Gràcia",
      },
    ],
  },
  {
    slug: "barcelona-poblenou",
    city: "Poblenou / 22@ (Barcelona)",
    zoneShort: "Poblenou",
    heroH1: "Contrato temporada 22@ y Poblenou — estancias laborales y congresos",
    metaTitle: `Contrato alquiler temporada Poblenou 22@ — ${PRICE}`,
    metaDescription: `Alquiler temporal Poblenou y 22@ entre particulares. MWC, proyectos tech, inventario. ${PRICE} IVA incl. Gestor Livendia 24-48 h.`,
    keywords: [
      "contrato alquiler temporada poblenou",
      "contrato temporada 22 barcelona",
      "alquiler temporal poblenou particulares",
      "contrato estancia mwc barcelona",
    ],
    heroLead: `Poblenou y el 22@ concentran estancias por proyectos tech, equipos internacionales y congresos en Fira. Livendia redacta contrato de temporada entre particulares con duración del proyecto, inventario en lofts amueblados y causa explícita — ${PRICE} IVA incluido.`,
    whyTitle: "Poblenou: proyectos con fecha de fin, no residencia habitual encubierta",
    whySubtitle:
      "Lofts reconvertidos y pisos de 22@ exigen contrato alineado con la duración laboral o académica real.",
    whyIntro: "Rotación alta cerca del mar y Glòries: lo verbal sobre parking o coworking rara vez está en PDFs genéricos.",
    howIntro:
      "Cinco pasos Livendia: diagnóstico en llamada, contratación, expediente, redacción bilingüe si hace falta, firma.",
    localZonesHeading: "Poblenou, 22@ y Sant Martí — contrato de temporada",
    localZones:
      "22@ (lofts, oficinas reconvertidas), Rambla del Poblenou, Parc del Centre del Poblenou, Diagonal Mar (límite) y Vila Olímpica (límite). Online para propietarios en península o extranjero.",
    localBenefits: [
      {
        title: "Proyectos tech",
        description: "Duración 6-12 meses con salida al cerrar sprint o contrato laboral.",
      },
      {
        title: "MWC y congresos Fira",
        description: "Estancia por semanas o meses ligada a evento — sin confundir con VUT.",
      },
      {
        title: "Contrato bilingüe",
        description: "Castellano/catalán/inglés según perfiles internacionales del 22@.",
      },
      {
        title: "Lofts amueblados",
        description: "Inventario de electrodomésticos y zonas comunes en espacios diáfanos.",
      },
      {
        title: "Sin comisión",
        description: "Particulares que cierran directo; Livendia solo redacta y asesora.",
      },
      {
        title: "Entrega rápida",
        description: "24-48 h laborables con documentación completa en panel.",
      },
    ],
    introParagraph:
      "En Poblenou y el 22@ miles de estancias temporales se cierran al año entre particulares: developers seis meses, equipos de marketing durante el Mobile World Congress o másteres presenciales en lofts amueblados. Mezclar ese uso con LAU habitual o con alquiler turístico regulado genera sanciones y litigios. Livendia redacta contrato de temporada con fechas, causa, fianza e inventario — 200 € IVA incluido, gestor especializado y trámite 100 % online.",
    whenToUseCases: [
      "Profesional tech en 22@ por duración de proyecto con empresa y fecha de salida.",
      "Estancia ligada a congreso en Fira o evento en Glòries (semanas o meses).",
      "Máster o bootcamp presencial en piso compartido cerca de la Rambla del Poblenou.",
      "Propietario con loft amueblado que rota inquilinos sin agencia ni comisión.",
      "Teletrabajo híbrido tres trimestres con mobiliario y limpieza de salida pactados.",
    ],
    risksParagraph:
      "En el 22@ firmar LAU estándar para nueve meses de proyecto puede activar prórrogas no deseadas. Conflictos sobre internet incluido, parking y estado del loft al checkout son habituales sin inventario. Distinction temporada/VUT mal hecha expone a sanciones municipales.",
    savingsTitle: "Ahorro en Poblenou/22@: tarifa plana Livendia",
    savingsIntro: "Referencia de costes frente a abogado o agencia por contrato en Sant Martí:",
    highlightRent: 1500,
    savingsRows: [
      { monthlyRent: 1200, lawyerWithVat: 460, agencyEstimate: 660 },
      { monthlyRent: 1500, lawyerWithVat: 520, agencyEstimate: 825 },
      { monthlyRent: 1850, lawyerWithVat: 580, agencyEstimate: 1018 },
      { monthlyRent: 2200, lawyerWithVat: 650, agencyEstimate: 1210 },
    ],
    savingsFootnote: "Poblenou/22@: cálculo orientativo. Livendia 200 € IVA incl.",
    faqLocal: [
      {
        question: "¿Puedo alquilar por temporada durante el Mobile World Congress?",
        answer:
          "Sí, si el contrato recoge estancia temporal, fechas y salida. No sustituye licencia turística si la actividad es VUT.",
      },
      {
        question: "¿Redactáis contratos en inglés para inquilinos internacionales?",
        answer: "Podemos preparar texto bilingüe o aclaraciones según lo acordado entre las partes.",
      },
      {
        question: "¿Atendéis lofts en 22@?",
        answer: "Sí, con inventario de equipamiento y cláusulas de zonas comunes en espacios reconvertidos.",
      },
      {
        question: "¿Cuánto tarda la entrega?",
        answer: "24-48 h laborables desde que el expediente está completo en panel.",
      },
    ],
    finalCtaLead: `Temporada Poblenou / 22@ — ${PRICE} IVA incl. · gestor Livendia`,
    testimonialsTitle: "Estancias temporales en Poblenou con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un loft en 22@ ocho meses a un equipo tech. Causa de temporalidad, parking e inventario quedaron cerrados antes del check-in.",
        author: "Laura & Pau",
        role: "Propietarios — 22@",
      },
      {
        quote:
          "Estancia por congreso en Fira: Livendia diferenció temporada de turístico y el propietario firmó sin agencia.",
        author: "Arnau M.",
        role: "Inquilino temporal — Poblenou",
      },
    ],
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc (Barcelona)",
    zoneShort: "Sants-Montjuïc",
    heroH1: "Contrato alquiler por temporada en Sants-Montjuïc — Fira, estudios y obra",
    metaTitle: `Contrato temporada Sants Montjuïc — ${PRICE} · particulares`,
    metaDescription: `Alquiler temporal Sants, Hostafrancs, Poble-sec. Contrato causa temporalidad e inventario. ${PRICE} IVA incl. Livendia online.`,
    keywords: [
      "contrato alquiler temporada sants",
      "alquiler temporal montjuic barcelona",
      "contrato temporada fira barcelona",
      "alquiler por meses poble sec contrato",
    ],
    heroLead: `Sants-Montjuïc concentra estancias por Fira de Barcelona, estudios en la Zona Universitària límite, obras en fincas y teletrabajo en Hostafrancs. Livendia redacta contrato de temporada entre particulares — ${PRICE} IVA incluido, inventario y gestor 24-48 h.`,
    whyTitle: "Sants-Montjuïc: congresos, campus y obras piden plazo cerrado",
    whySubtitle:
      "Cerca de la estación de Sants y Montjuïc es fácil confundir temporada con LAU de larga duración si el PDF no refleja el motivo real.",
    whyIntro: "Pisos amueblados para ferias y estudiantes en tránsito necesitan salida clara al terminar el evento o curso.",
    howIntro:
      "Llamada, contratación online, documentación en panel, redacción con causa de temporalidad e inventario, firma asesorada.",
    localZonesHeading: "Sants-Montjuïc — zonas habituales de alquiler temporal",
    localZones:
      "Sants (Estació de Sants, carrer de Sants), Hostafrancs, La Bordeta, Poble-sec, Font de la Guatlla, Montjuïc (límite) y Zona Universitària (límite). Trámite online en toda Cataluña.",
    localBenefits: [
      {
        title: "Congresos y Fira",
        description: "Duración ligada a evento con suministros y checkout documentado.",
      },
      {
        title: "Estudiantes en tránsito",
        description: "Estancia acorde a prácticas o curso con salida en verano.",
      },
      {
        title: "Obra en edificio",
        description: "Temporalidad mientras dura la reforma o el desalojo parcial.",
      },
      {
        title: "Hostafrancs y Poble-sec",
        description: "Pisos amueblados por meses sin comisión de agencia.",
      },
      {
        title: "Fianza legal",
        description: "Hasta dos mensualidades en uso distinto de vivienda habitual.",
      },
      {
        title: "Gestor dedicado",
        description: `${PRICE} IVA incl. — mismo interlocutor hasta firmar.`,
      },
    ],
    introParagraph:
      "En Sants-Montjuïc muchos particulares alquilan por temporadas ligadas a Fira, formación sanitaria, obras en la finca o estancias laborales en Hostafrancs y Poble-sec. Un LAU de vivienda habitual no recoge la salida al terminar el congreso ni la fianza en pisos amueblados cerca de la estación. Livendia redacta contrato de temporada con motivo explícito, plazos e inventario — 200 € IVA incluido, sin comisión inmobiliaria.",
    whenToUseCases: [
      "Profesional desplazado por congreso o feria en recinto de Montjuïc / Fira.",
      "Estudiante o becario meses en piso cerca de Sants Estació.",
      "Inquilino temporal durante obra en edificio de La Bordeta o Hostafrancs.",
      "Propietario que alquila trimestre acotado en Poble-sec entre particulares.",
      "Teletrabajo seis meses con mobiliario incluido y limpieza de salida pactada.",
    ],
    risksParagraph:
      "Sin causa de temporalidad, una estancia de formación puede recalificarse como LAU. En Sants los conflictos sobre depósito, menaje y fecha de entrega de llaves tras eventos son frecuentes. Inventario y cláusulas de extinción evitan costes posteriores.",
    savingsTitle: "Coste de redactar temporada en Sants-Montjuïc",
    savingsIntro: "Comparativa según renta de referencia en el distrito:",
    highlightRent: 1300,
    savingsRows: [
      { monthlyRent: 1000, lawyerWithVat: 420, agencyEstimate: 550 },
      { monthlyRent: 1300, lawyerWithVat: 480, agencyEstimate: 715 },
      { monthlyRent: 1600, lawyerWithVat: 540, agencyEstimate: 880 },
      { monthlyRent: 1950, lawyerWithVat: 600, agencyEstimate: 1073 },
    ],
    savingsFootnote: "Sants-Montjuïc: orientativo. Livendia 200 € IVA incl., tarifa plana.",
    faqLocal: [
      {
        question: "¿Gestionáis contratos cerca de la Estació de Sants?",
        answer: "Sí, para cualquier dirección del distrito con expediente online.",
      },
      {
        question: "¿Qué motivo de temporalidad vale para una feria?",
        answer:
          "Desplazamiento laboral o estancia acotada por evento, con fechas y salida en el contrato — no un LAU indefinido.",
      },
      {
        question: "¿Incluye inventario?",
        answer: "Sí, cuando el piso amueblado requiere documentar estado y mobiliario.",
      },
      {
        question: "¿Propietarios fuera de Barcelona pueden contratar?",
        answer: "Sí, todo el proceso es online con gestor por teléfono o WhatsApp.",
      },
    ],
    finalCtaLead: `Contrato temporada Sants-Montjuïc — ${PRICE} IVA incl.`,
    testimonialsTitle: "Particulares en Sants-Montjuïc con contrato Livendia",
    testimonials: [
      {
        quote:
          "Estancia por congreso en piso de Hostafrancs: fechas, fianza e inventario listos en 48 horas entre particulares.",
        author: "Clara V.",
        role: "Propietaria — Hostafrancs",
      },
      {
        quote:
          "Alquiler temporal en Poble-sec durante obra en el edificio. El gestor explicó prórrogas LAU vs temporada antes de firmar.",
        author: "Pol M.",
        role: "Inquilino temporal — Poble-sec",
      },
    ],
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi (Barcelona)",
    zoneShort: "Sarrià-Sant Gervasi",
    heroH1: "Temporada en Sarrià-Sant Gervasi — contrato civil para particulares exigentes",
    metaTitle: `Contrato alquiler temporada Sarrià — ${PRICE} · inventario`,
    metaDescription: `Alquiler temporal Sarrià, Sant Gervasi, Tres Torres. Contrato temporada particulares. ${PRICE} IVA incl. Gestor Livendia, inventario detallado.`,
    keywords: [
      "contrato alquiler temporada sarria",
      "alquiler temporal sant gervasi",
      "contrato temporada tres torres",
      "alquiler por meses sarria barcelona",
    ],
    heroLead: `En Sarrià-Sant Gervasi el alquiler temporal exige formalidad: posgrados, familias en traslado y profesionales en Bonanova o Pedralbes. Livendia redacta contrato de temporada con inventario detallado — ${PRICE} IVA incluido, sin comisión, gestor hasta la firma.`,
    whyTitle: "Sarrià-Sant Gervasi: ticket alto, documento a la altura",
    whySubtitle:
      "Pisos señoriales y rentas elevadas multiplican el coste de un LAU mal elegido o de una fianza mal explicada.",
    whyIntro: "Propietarios e inquilinos premium esperan contrato preciso, no plantilla descargada.",
    howIntro:
      "Cinco fases: consulta con gestor, pago online, expediente completo, redacción e inventario exhaustivo, firma asesorada.",
    localZonesHeading: "Sarrià-Sant Gervasi — barrios de alquiler temporal",
    localZones:
      "Sarrià centre, Sant Gervasi - Galvany, Bonanova, Tres Torres, Putxet i Farró, Vallvidrera (límite). Online para propietarios residentes o en el extranjero.",
    localBenefits: [
      {
        title: "Posgrado y MBA",
        description: "Estancia acorde a programa académico con salida documentada.",
      },
      {
        title: "Traslado familiar temporal",
        description: "Meses en Barcelona por trabajo con cláusulas de conservación exigentes.",
      },
      {
        title: "Inventario premium",
        description: "Mobiliario y acabados de calidad fotografiados en expediente.",
      },
      {
        title: "Parking y portería",
        description: "Pactos accesorios recogidos cuando forman parte del alquiler.",
      },
      {
        title: "Sin agencia",
        description: "Particulares que negocian directo; Livendia redacta y asesora.",
      },
      {
        title: "Tarifa plana",
        description: `${PRICE} IVA incl. — precio publicado en web.`,
      },
    ],
    introParagraph:
      "Sarrià-Sant Gervasi concentra alquileres temporales de alto ticket: posgrados en ESADE/UB cercanos, familias en traslado por un año académico o ejecutivos en Tres Torres. Firmar un LAU estándar cuando ambas partes quieren solo diez meses expone a prórrogas y disputas sobre depósitos elevados. Livendia prepara contrato de temporada entre particulares con causa clara, inventario minucioso y cláusulas de conservación — 200 € IVA incluido, 24-48 h laborables.",
    whenToUseCases: [
      "Estudiante de posgrado en piso amueblado de Bonanova por duración del programa.",
      "Familia extranjera un curso escolar en vivienda unifamiliar compartida o entera.",
      "Profesional en Tres Torres por proyecto con fecha de repatriación acordada.",
      "Propietario que alquila entre temporadas sin ceder gestión a inmobiliaria.",
      "Inquilino que exige contrato serio antes de transferir fianza de dos mensualidades.",
    ],
    risksParagraph:
      "En Sarrià una fianza alta sin inventario detallado genera litigios costosos. Recalificar temporada como LAU obligaría a prórrogas indeseadas. Cláusulas sobre portería, parking y menaje deben estar alineadas con el uso temporal real.",
    savingsTitle: "Livendia frente a despacho en Sarrià-Sant Gervasi",
    savingsIntro: "Aun con rentas altas, la tarifa plana Livendia suele ser inferior a un solo honorario de abogado por contrato:",
    highlightRent: 2100,
    savingsRows: [
      { monthlyRent: 1600, lawyerWithVat: 520, agencyEstimate: 880 },
      { monthlyRent: 2100, lawyerWithVat: 600, agencyEstimate: 1155 },
      { monthlyRent: 2600, lawyerWithVat: 690, agencyEstimate: 1430 },
      { monthlyRent: 3100, lawyerWithVat: 780, agencyEstimate: 1705 },
    ],
    savingsFootnote: "Sarrià-Sant Gervasi: orientativo. Livendia 200 € IVA incl.",
    faqLocal: [
      {
        question: "¿Redactáis temporadas en Pedralbes o Tres Torres?",
        answer: "Sí, con inventario detallado acorde a acabados y mobiliario de gama alta.",
      },
      {
        question: "¿Puede una parte estar fuera de España?",
        answer: "Sí, el trámite es online; el gestor coordina por teléfono, WhatsApp y panel.",
      },
      {
        question: "¿Es obligatorio inventario?",
        answer: "Recomendable y habitual en pisos amueblados premium; lo integramos en el servicio cuando procede.",
      },
      {
        question: "¿Diferencia con alquiler habitual?",
        answer:
          "La temporada requiere causa y plazo acorde al motivo; el LAU de vivienda habitual activa prórrogas del art. 9.",
      },
    ],
    finalCtaLead: `Contrato temporada Sarrià-Sant Gervasi — ${PRICE} IVA incl.`,
    testimonialsTitle: "Temporadas en Sarrià-Sant Gervasi con Livendia",
    testimonials: [
      {
        quote:
          "Posgrado en Sant Gervasi: contrato con duración del máster, inventario fotográfico y fianza explicada línea a línea.",
        author: "Elena K.",
        role: "Inquilina temporal — Sant Gervasi",
      },
      {
        quote:
          "Alquiler temporal en Tres Torres sin agencia. Livendia cerró parking y portería en anexo antes de la firma.",
        author: "Marc D.",
        role: "Propietario — Tres Torres",
      },
    ],
  },
];

export const TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS: readonly string[] = BARRIO_SPECS.map((s) => s.slug);

const HERO_BULLETS = [
  "Sin comisión inmobiliaria · trato entre particulares",
  "Causa de temporalidad explícita (art. 3.2 LAU)",
  "Inventario del inmueble cuando procede",
  "Entrega 24-48 h laborables",
  "Llamada con gestor antes de contratar",
] as const;

export const TEMPORADA_BCN_BARRIO_CITIES = BARRIO_SPECS.map((spec) => ({
  slug: spec.slug,
  city: spec.city,
  schemaAdministrativeArea: "Barcelona · Cataluña",
  heroBadge: `Temporada · ${spec.zoneShort}`,
  heroH1: spec.heroH1,
  metaTitle: spec.metaTitle,
  metaDescription: spec.metaDescription,
  keywords: spec.keywords,
  heroLead: spec.heroLead,
  heroBullets: [...HERO_BULLETS],
  heroImage: getTemporadaBcnBarrioHeroImage(spec.slug),
  whyTitle: spec.whyTitle,
  whySubtitle: spec.whySubtitle,
  whyIntro: spec.whyIntro,
  howIntro: spec.howIntro,
  localZonesHeading: spec.localZonesHeading,
  localZones: spec.localZones,
  localBenefits: spec.localBenefits,
  finalCtaLead: spec.finalCtaLead,
  testimonialsTitle: spec.testimonialsTitle,
  testimonials: [...spec.testimonials],
}));

const SEO_BY_SLUG: Record<string, TemporadaLocalSeoContent> = Object.fromEntries(
  BARRIO_SPECS.map((spec) => [spec.slug, buildSeo(spec)]),
);

export function getTemporadaBcnBarrioSeoContent(slug: string): TemporadaLocalSeoContent | undefined {
  return SEO_BY_SLUG[slug];
}

export const TEMPORADA_BCN_BARRIO_HUB = BARRIO_SPECS.map((s) => ({
  slug: s.slug,
  shortName: s.zoneShort,
  name: s.city,
}));
