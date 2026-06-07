import { CONTRATO_ALQUILER_TEMPORADA_PRICE_EUR } from "@/lib/catalog.public";

export type TemporadaLauComparisonRow = {
  aspect: string;
  temporada: string;
  lau: string;
};

export type TemporadaSavingsRow = {
  monthlyRent: number;
  lawyerWithVat: number;
  agencyEstimate: number;
};

export type TemporadaLocalSeoContent = {
  introParagraph: string;
  whenToUseCases: readonly string[];
  includesItems: readonly string[];
  lauComparisonRows: readonly TemporadaLauComparisonRow[];
  risksParagraph: string;
  savingsTitle: string;
  savingsIntro: string;
  savingsRows: readonly TemporadaSavingsRow[];
  highlightRent: number;
  savingsFootnote: string;
  faq: readonly { question: string; answer: string }[];
};

const LIVENDIA_PRICE = CONTRATO_ALQUILER_TEMPORADA_PRICE_EUR;

/** Comparativa legal (hechos normativos — texto puede variar levemente por ciudad). */
export const TEMPORADA_LAU_COMPARISON_MADRID: readonly TemporadaLauComparisonRow[] = [
  {
    aspect: "Régimen legal",
    temporada: "Uso distinto de vivienda habitual (art. 3.2 LAU 29/1994)",
    lau: "Arrendamiento de vivienda para uso habitual",
  },
  {
    aspect: "Prórrogas obligatorias",
    temporada: "No aplican las del art. 9 LAU",
    lau: "Sí: prórrogas legales y contractuales",
  },
  {
    aspect: "Duración",
    temporada: "La pactada, coherente con la causa temporal",
    lau: "Mínimos y prórrogas vinculantes en vivienda habitual",
  },
  {
    aspect: "Fianza exigible",
    temporada: "Hasta 2 mensualidades (art. 36.1)",
    lau: "1 mensualidad en vivienda habitual",
  },
  {
    aspect: "Cuándo usarlo",
    temporada: "Oposición, curso, obra, desplazamiento laboral acotado",
    lau: "Residencia habitual del inquilino en el piso",
  },
  {
    aspect: "Riesgo si se usa mal",
    temporada: "Recalificación como LAU si se acredita vivienda habitual",
    lau: "Usar LAU para estancias cortas genera obligaciones no deseadas",
  },
];

export const TEMPORADA_LAU_COMPARISON_BARCELONA: readonly TemporadaLauComparisonRow[] = [
  {
    aspect: "Marco aplicable",
    temporada: "Arrendamiento temporal fuera del LAU de vivienda (art. 3.2)",
    lau: "LAU de vivienda habitual con prórrogas del art. 9",
  },
  {
    aspect: "Prórroga forzosa",
    temporada: "No — finaliza al terminar el plazo pactado si está bien redactado",
    lau: "Sí, salvo renuncia en los supuestos legales",
  },
  {
    aspect: "Plazo del contrato",
    temporada: "Acorde al motivo: Erasmus, MWC, prácticas, teletrabajo temporal",
    lau: "Orientado a residencia estable del arrendatario",
  },
  {
    aspect: "Depósito / fianza",
    temporada: "Máximo 2 rentas (uso distinto de vivienda)",
    lau: "1 renta en alquiler de vivienda",
  },
  {
    aspect: "Caso típico en Barcelona",
    temporada: "Piso amueblado 6–10 meses por estudiante o profesional 22@",
    lau: "Alquiler de larga duración en Eixample, Gràcia o L'Hospitalet",
  },
  {
    aspect: "Error frecuente",
    temporada: "Copiar plantilla LAU para estancia de un curso o evento",
    lau: "Firmar LAU cuando ambas partes querían solo temporada",
  },
];

const FAQ_GENERIC_1 = {
  question: "¿Cuánto tiempo puede durar un contrato de temporada?",
  answer:
    "Lo que acuerden las partes, siempre que la causa de temporalidad sea creíble y conste por escrito (curso, oposición, obra, desplazamiento laboral, etc.). No hay una duración legal fija, pero debe ser coherente con el motivo declarado; si dura años sin justificación, aumenta el riesgo de recalificación como LAU.",
};

const FAQ_GENERIC_2 = {
  question: "¿Necesito licencia turística para hacer un contrato de temporada?",
  answer:
    "No. El contrato de temporada entre particulares regula un arrendamiento temporal fuera del LAU de vivienda habitual. El alquiler turístico (VUT/VFT) tiene normativa autonómica y municipal propia y requiere licencia cuando la actividad es uso turístico. Son figuras distintas; Livendia redacta el contrato de temporada, no sustituye una licencia turística.",
};

const INCLUDES_ITEMS: readonly string[] = [
  "Identificación de partes e inmueble",
  "Cláusula de causa de temporalidad (obligatoria para blindar el contrato)",
  "Duración pactada y condiciones de prórroga o finalización",
  "Renta, forma de pago y actualización si procede",
  "Fianza (2 mensualidades en uso distinto de vivienda) y garantías adicionales",
  "Cláusulas de uso, conservación y prohibiciones",
  "Inventario del inmueble cuando el estado debe quedar documentado",
  "Entrega en PDF firmable y gestor hasta la firma",
];

export const TEMPORADA_LOCAL_SEO_CONTENT: Record<string, TemporadaLocalSeoContent> = {
  madrid: {
    introParagraph:
      "En Madrid el alquiler temporal no va a la misma velocidad que el de larga duración: conviven opositores que se instalan meses en la capital, consultores y mandos medios en Azca o el CTBA, estudiantes de másteres en IE o IESE y equipos de rodaje que necesitan pisos por campañas concretas. En esos casos un contrato LAU de vivienda habitual suele ser un error: activa prórrogas y un régimen que no encaja con una estancia acotada. La gestoría inmobiliaria Livendia redacta el contrato de temporada con la causa de temporalidad explícita, duración pactada, fianza de dos mensualidades y cláusulas de salida claras — 200 € IVA incluido, entrega en 24-48 h laborables, gestor dedicado y tramitación 100 % online.",
    whenToUseCases: [
      "Oposiciones y concursos en sedes de Hacienda, Correos, Ministerios o comunidades autónomas: estancia de varios meses hasta la resolución.",
      "Desplazamiento profesional a torres de negocio en Paseo de la Castellana, Azca o Nuevos Ministerios: proyectos con fecha de fin.",
      "Estudiantes de programas intensivos (IE, IESE campus Madrid, másteres presenciales) que alquilan piso amueblado por el curso académico.",
      "Producción audiovisual (rodajes en Madrid y alrededores): alquiler del inmueble por el periodo de grabación.",
      "Segunda residencia temporal en Chamberí, Retiro o Moncloa para familias con estancia académica o sanitaria en la capital.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_MADRID,
    risksParagraph:
      "Si el contrato no deja clara la causa de temporalidad y el inquilino acredita que el piso era su vivienda habitual, un juez puede recalificar el arrendamiento como LAU y activar prórrogas obligatorias que ninguna de las partes había previsto. También surgen conflictos sobre la fianza (una vs dos mensualidades), la salida y los suministros al finalizar la estancia. En Madrid, con alta rotación y plantillas copiadas de internet, esos fallos aparecen a menudo. Un texto adaptado al caso real y al art. 3.2 LAU reduce litigios al entregar llaves o al irse el inquilino.",
    savingsTitle: "Cuánto cuesta redactar un contrato de temporada en Madrid",
    savingsIntro:
      "En la capital muchos propietarios acuden a un despacho de abogados o a una inmobiliaria que cobra honorarios por contrato o medio mes de renta. Livendia cobra tarifa plana sin comisión:",
    savingsRows: [
      { monthlyRent: 1100, lawyerWithVat: 420, agencyEstimate: 605 },
      { monthlyRent: 1400, lawyerWithVat: 480, agencyEstimate: 770 },
      { monthlyRent: 1700, lawyerWithVat: 540, agencyEstimate: 935 },
      { monthlyRent: 2100, lawyerWithVat: 620, agencyEstimate: 1155 },
    ],
    highlightRent: 1400,
    savingsFootnote:
      "Importes orientativos en Madrid: despacho de abogados (redacción contrato arrendamiento, IVA incl.) y gestión inmobiliaria por contrato (~50 % de una mensualidad de referencia). Livendia: 200 € IVA incl., sin comisión.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Puedo hacer contrato de temporada para una plaza de oposición en Madrid?",
        answer:
          "Sí, es uno de los casos habituales: estancia ligada a convocatoria, academias o periodo de pruebas en la capital. El contrato debe indicar el motivo (oposición o proceso selectivo), las fechas y que no se trata de residencia habitual indefinida.",
      },
      {
        question: "¿Un piso en Chamberí puede alquilarse por temporada a un ejecutivo desplazado al CTBA?",
        answer:
          "Sí, si la estancia es temporal y el contrato recoge duración del proyecto, empresa y condiciones de prórroga o salida. Conviene detallar mobiliario, parking y suministros; un LAU estándar de larga duración no refleja ese uso.",
      },
    ],
  },
  barcelona: {
    introParagraph:
      "Barcelona concentra un alquiler temporal muy heterogéneo: Erasmus y posgrados en UB, UPC o ESADE, profesionales del 22@ y Poblenou, estancias vinculadas al MWC o Sónar y nómadas que buscan piso amueblado por trimestres. Mezclar ese uso con un contrato LAU de vivienda habitual genera fricciones: prórrogas que no querían, fianza mal calculada y discusiones al renovar. Livendia redacta el contrato de temporada con causa de temporalidad explícita (art. 3.2 LAU), plazos cerrados, inventario si hace falta y entrega en 24-48 h laborables por 200 € IVA incluido — gestoría inmobiliaria digital, sin comisión de agencia.",
    whenToUseCases: [
      "Estudiantes Erasmus o máster (UB, UPC, UAB, ESADE) que alquilan habitación o piso amueblado un semestre o curso completo.",
      "Profesionales tech y consultoras en el 22@ o Glòries: proyecto de 6–12 meses con fecha de salida acordada.",
      "Estancias ligadas a eventos (Mobile World Congress, Sónar, congresos en Fira): alquiler por semanas o meses, no residencia habitual.",
      "Profesionales extranjeros en startups del ecosistema barcelonés que necesitan contrato en castellano o bilingüe con cláusulas claras.",
      "Propietarios en Eixample, Gràcia o Barceloneta que alquilan en verano sin convertir el piso en vivienda turística regulada.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_BARCELONA,
    risksParagraph:
      "Un borrador LAU genérico en una estancia de nueve meses por estudios puede acabar recalificado si el inquilino demuestra residencia habitual. En Barcelona, con regulación municipal exigente y mercado tensionado, los conflictos al finalizar (limpieza, mobiliario, fianza de dos meses mal explicada) son frecuentes. Sin causa de temporalidad por escrito, el propietario asume riesgo judicial y el inquilino incertidumbre. Redactar bien desde el inicio cuesta menos que un procedimiento posterior.",
    savingsTitle: "Ahorro en Barcelona: Livendia frente a abogado o inmobiliaria",
    savingsIntro:
      "En el área metropolitana es habitual pagar entre 450 € y 900 € por redacción en despacho o por gestión de contrato en agencia. Comparativa según renta mensual de referencia en Barcelona:",
    savingsRows: [
      { monthlyRent: 1250, lawyerWithVat: 450, agencyEstimate: 688 },
      { monthlyRent: 1550, lawyerWithVat: 520, agencyEstimate: 852 },
      { monthlyRent: 1900, lawyerWithVat: 590, agencyEstimate: 1045 },
      { monthlyRent: 2350, lawyerWithVat: 680, agencyEstimate: 1293 },
    ],
    highlightRent: 1550,
    savingsFootnote:
      "Cálculo orientativo en Barcelona: honorarios despacho (contrato arrendamiento, IVA incl.) y tarifa agencia por contrato (~50 % mensualidad de referencia). Livendia 200 € IVA incl., tarifa plana gestoría inmobiliaria.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿El contrato de temporada está afectado por la regulación de contención de rentas de Barcelona?",
        answer:
          "La contención de rentas en Cataluña afecta sobre todo a contratos LAU de vivienda habitual en determinadas zonas y supuestos. El arrendamiento temporal fuera de ese régimen sigue otro marco; conviene que el contrato deje claro que no es vivienda habitual. Te orientamos según el inmueble y el uso pactado.",
      },
      {
        question: "¿Puedo alquilar por temporada en Poblenou durante la Mobile World Congress?",
        answer:
          "Sí, si el uso es estancia temporal y el contrato recoge fechas del evento o del desplazamiento laboral, suministros y salida. No sustituye una licencia de uso turístico si la actividad es alquiler turístico regulado; son figuras distintas.",
      },
    ],
  },
};

export function getTemporadaLocalSeoContent(slug: string): TemporadaLocalSeoContent | undefined {
  return TEMPORADA_LOCAL_SEO_CONTENT[slug];
}

export function temporadaSavingsDerived(row: TemporadaSavingsRow) {
  return {
    ...row,
    livendiaPrice: LIVENDIA_PRICE,
    savingVsLawyer: row.lawyerWithVat - LIVENDIA_PRICE,
    savingVsAgency: row.agencyEstimate - LIVENDIA_PRICE,
  };
}
