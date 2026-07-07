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

export const TEMPORADA_LAU_COMPARISON_VALENCIA: readonly TemporadaLauComparisonRow[] = [
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
    temporada: "Acorde al motivo: curso UPV/UV, prácticas, teletrabajo temporal",
    lau: "Orientado a residencia estable del arrendatario",
  },
  {
    aspect: "Depósito / fianza",
    temporada: "Máximo 2 rentas (uso distinto de vivienda)",
    lau: "1 renta en alquiler de vivienda",
  },
  {
    aspect: "Caso típico en Valencia",
    temporada: "Piso amueblado 6–9 meses por estudiante o profesional en Ruzafa o Benimaclet",
    lau: "Alquiler de larga duración en Ciutat Vella o Mislata",
  },
  {
    aspect: "Error frecuente",
    temporada: "Copiar plantilla LAU para estancia de un curso o prácticas",
    lau: "Firmar LAU cuando ambas partes querían solo temporada entre particulares",
  },
];

export const TEMPORADA_LAU_COMPARISON_SEVILLA: readonly TemporadaLauComparisonRow[] = [
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
    temporada: "Acorde al motivo: curso US/UPO, prácticas, proyecto laboral acotado",
    lau: "Orientado a residencia estable del arrendatario",
  },
  {
    aspect: "Depósito / fianza",
    temporada: "Máximo 2 rentas (uso distinto de vivienda)",
    lau: "1 renta en alquiler de vivienda",
  },
  {
    aspect: "Caso típico en Sevilla",
    temporada: "Apartamento 4–8 meses por prácticas o proyecto en Nervión o Cartuja",
    lau: "Alquiler de larga duración en Triana o Los Remedios",
  },
  {
    aspect: "Error frecuente",
    temporada: "Usar LAU genérico para estancia temporal entre particulares",
    lau: "Confundir temporada contractual con alquiler turístico regulado",
  },
];

export const TEMPORADA_LAU_COMPARISON_MALAGA: readonly TemporadaLauComparisonRow[] = [
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
    temporada: "Acorde al motivo: curso UMA, verano, teletrabajo temporal",
    lau: "Orientado a residencia estable del arrendatario",
  },
  {
    aspect: "Depósito / fianza",
    temporada: "Máximo 2 rentas (uso distinto de vivienda)",
    lau: "1 renta en alquiler de vivienda",
  },
  {
    aspect: "Caso típico en Málaga",
    temporada: "Piso amueblado 3–8 meses por estudiante, teletrabajo o verano en Teatinos o costa",
    lau: "Alquiler de larga duración en centro o El Palo",
  },
  {
    aspect: "Error frecuente",
    temporada: "Usar LAU genérico para estancia estacional entre particulares",
    lau: "Confundir temporada contractual con alquiler turístico regulado",
  },
];

export const TEMPORADA_LAU_COMPARISON_ZARAGOZA: readonly TemporadaLauComparisonRow[] = [
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
    temporada: "Acorde al motivo: curso UNIZAR, prácticas, proyecto laboral acotado",
    lau: "Orientado a residencia estable del arrendatario",
  },
  {
    aspect: "Depósito / fianza",
    temporada: "Máximo 2 rentas (uso distinto de vivienda)",
    lau: "1 renta en alquiler de vivienda",
  },
  {
    aspect: "Caso típico en Zaragoza",
    temporada: "Piso amueblado 6–9 meses por estudiante o profesional en Delicias o Actur",
    lau: "Alquiler de larga duración en Casco Histórico",
  },
  {
    aspect: "Error frecuente",
    temporada: "Copiar plantilla LAU para estancia temporal entre particulares",
    lau: "Firmar LAU cuando ambas partes querían solo temporada",
  },
];

export const TEMPORADA_LAU_COMPARISON_ASTURIAS: readonly TemporadaLauComparisonRow[] = [
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
    temporada: "Acorde al motivo: verano costero, curso, obra, desplazamiento laboral",
    lau: "Orientado a residencia estable del arrendatario",
  },
  {
    aspect: "Depósito / fianza",
    temporada: "Máximo 2 rentas (uso distinto de vivienda)",
    lau: "1 renta en alquiler de vivienda",
  },
  {
    aspect: "Caso típico en Asturias",
    temporada: "Piso o casa 2–6 meses por verano en Gijón mar o estancia de prácticas en Oviedo",
    lau: "Alquiler de larga duración en Gijón centro u Oviedo",
  },
  {
    aspect: "Error frecuente",
    temporada: "Plantilla genérica sin cláusulas de humedad, leña o temporada costera",
    lau: "Confundir temporada entre particulares con alquiler turístico regulado",
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
      "En Madrid, muchos particulares — propietarios e inquilinos — alquilan por meses sin querer pagar comisión de agencia ni firmar un LAU de larga duración: oposiciones, másteres, desplazamientos a Azca o el CTBA y rodajes con plazos cerrados. En esos casos un contrato LAU de vivienda habitual suele ser un error: activa prórrogas y un régimen que no encaja con la estancia acordada. Livendia redacta el contrato de temporada entre particulares con causa de temporalidad explícita, fianza de dos mensualidades y cláusulas de salida claras — 200 € IVA incluido, entrega en 24-48 h laborables, gestor dedicado y tramitación 100 % online.",
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
      "En Barcelona, particulares propietarios e inquilinos alquilan por temporadas concretas: Erasmus, profesionales del 22@, congresos como el MWC o teletrabajo por trimestres — a menudo sin intermediarios. Mezclar ese uso con un contrato LAU de vivienda habitual genera fricciones: prórrogas no deseadas, fianza mal calculada y discusiones al renovar. Livendia redacta el contrato de temporada entre particulares con causa explícita (art. 3.2 LAU), plazos cerrados e inventario si hace falta — 200 € IVA incluido, entrega en 24-48 h laborables, sin comisión de agencia.",
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
  valencia: {
    introParagraph:
      "Valencia concentra miles de alquileres temporales entre particulares cada curso: estudiantes de la UPV y la UV, residentes en prácticas en La Fe o el Clínico, profesionales desplazados a la Ciudad de las Artes o teletrabajadores que buscan piso amueblado en Ruzafa, Benimaclet o la playa por meses. Firmar un LAU de vivienda habitual cuando ambas partes quieren solo una estancia acotada es uno de los errores más habituales — y el más caro de corregir después. Livendia redacta el contrato de alquiler por temporada entre particulares con causa de temporalidad, duración pactada, fianza de dos mensualidades e inventario — 200 € IVA incluido, sin comisión inmobiliaria, gestor dedicado y entrega en 24-48 h laborables.",
    whenToUseCases: [
      "Estudiantes UPV, UV o másteres presenciales que alquilan piso o habitación un curso o semestre en Benimaclet, Blasco Ibáñez o Ciutat Vella.",
      "Residentes médicos o prácticas hospitalarias con estancia de meses en La Fe, Clínico u otros centros de la Comunidad Valenciana.",
      "Profesionales desplazados a Valencia por proyecto con fecha de fin acordada (Puerto, Ciudad de las Artes, oficinas en Paterna).",
      "Propietarios en Ruzafa, El Carmen o Malvarrosa que alquilan verano o trimestres concretos sin agencia ni comisión.",
      "Teletrabajo temporal en piso amueblado: estancia de 3–9 meses sin activar prórrogas LAU de vivienda habitual.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_VALENCIA,
    risksParagraph:
      "Si el contrato no deja clara la causa de temporalidad y el inquilino acredita residencia habitual en Valencia, un juez puede recalificar el arrendamiento como LAU. También surgen conflictos sobre fianza (una vs dos mensualidades), limpieza de salida y suministros en pisos amueblados de Ruzafa o Benimaclet. Las plantillas copiadas de internet rara vez reflejan el motivo real de la estancia. Redactar bien desde el inicio cuesta menos que un procedimiento posterior.",
    savingsTitle: "Cuánto cuesta redactar un contrato de temporada en Valencia",
    savingsIntro:
      "Muchos particulares acuden a un despacho o pagan comisión a una agencia por gestionar el contrato. Livendia cobra tarifa plana sin comisión:",
    savingsRows: [
      { monthlyRent: 850, lawyerWithVat: 380, agencyEstimate: 468 },
      { monthlyRent: 1050, lawyerWithVat: 430, agencyEstimate: 578 },
      { monthlyRent: 1300, lawyerWithVat: 490, agencyEstimate: 715 },
      { monthlyRent: 1600, lawyerWithVat: 560, agencyEstimate: 880 },
    ],
    highlightRent: 1050,
    savingsFootnote:
      "Importes orientativos en Valencia: despacho de abogados (redacción contrato, IVA incl.) y gestión inmobiliaria por contrato (~50 % de una mensualidad de referencia). Livendia: 200 € IVA incl., entre particulares.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Puedo alquilar mi piso en Ruzafa solo un curso universitario?",
        answer:
          "Sí, con un contrato de temporada que indique el motivo (estudios), las fechas exactas y que no se trata de vivienda habitual indefinida. Livendia lo redacta por 200 € IVA incl., sin comisión de agencia.",
      },
      {
        question: "¿Atendéis propietarios que viven fuera de Valencia?",
        answer:
          "Sí. Todo el proceso es online: contratas, subes datos del inmueble y recibes el borrador con inventario sin desplazarte.",
      },
    ],
  },
  sevilla: {
    introParagraph:
      "En Sevilla, particulares propietarios e inquilinos cierran alquileres por temporada para estudios en la US o la UPO, prácticas en Virgen del Rocío o Macarena, proyectos en Cartuja o estancias laborales en Nervión y Triana — sin pagar comisión de agencia. Un LAU de larga duración copiado de internet no refleja ese uso: activa prórrogas, fianza mal dimensionada y discusiones al finalizar. Livendia redacta el contrato de alquiler por temporada entre particulares con causa de temporalidad explícita, duración pactada, fianza de dos mensualidades e inventario — 200 € IVA incluido, gestor dedicado, 24-48 h laborables y tramitación 100 % online.",
    whenToUseCases: [
      "Estudiantes US, UPO o másteres que alquilan piso amueblado un curso en Nervión, Reina Mercedes o el centro.",
      "Residentes y prácticas en hospitales sevillanos con estancia de meses y fecha de salida acordada.",
      "Profesionales desplazados a Cartuja, Sevilla Este o Torre Sevilla por proyecto con plazo definido.",
      "Propietarios en Triana, Los Remedios o Macarena que alquilan entre particulares sin intermediarios.",
      "Estancias temporales durante eventos o desplazamientos laborales — siempre con causa de temporalidad por escrito.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_SEVILLA,
    risksParagraph:
      "En Sevilla, confundir temporada contractual con LAU habitual o con alquiler turístico regulado genera litigios frecuentes. Sin causa de temporalidad por escrito, el propietario asume riesgo de recalificación y el inquilino incertidumbre sobre prórrogas y fianza. Los conflictos sobre limpieza de salida, mobiliario y suministros aparecen sobre todo en pisos amueblados del centro y Nervión. Un texto adaptado al caso real reduce costes y tensiones.",
    savingsTitle: "Ahorro en Sevilla: Livendia frente a abogado o inmobiliaria",
    savingsIntro:
      "Redactar un contrato en despacho o encargarlo a una agencia suele costar varios cientos de euros. Comparativa según renta mensual de referencia en Sevilla:",
    savingsRows: [
      { monthlyRent: 750, lawyerWithVat: 360, agencyEstimate: 413 },
      { monthlyRent: 950, lawyerWithVat: 410, agencyEstimate: 523 },
      { monthlyRent: 1150, lawyerWithVat: 470, agencyEstimate: 633 },
      { monthlyRent: 1400, lawyerWithVat: 530, agencyEstimate: 770 },
    ],
    highlightRent: 950,
    savingsFootnote:
      "Cálculo orientativo en Sevilla: honorarios despacho (IVA incl.) y tarifa agencia por contrato (~50 % mensualidad de referencia). Livendia 200 € IVA incl., tarifa plana entre particulares.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Puedo alquilar mi piso en Triana cuatro meses entre particulares?",
        answer:
          "Sí, si el contrato recoge duración, motivo de la estancia (prácticas, proyecto, etc.) y condiciones de salida. No debe ser una copia de LAU de larga duración.",
      },
      {
        question: "¿El contrato de temporada sustituye la licencia de alquiler turístico en Sevilla?",
        answer:
          "No. Son figuras distintas. Si la actividad es alquiler turístico regulado, aplican normas municipales y autonómicas adicionales. Livendia redacta el contrato civil de temporada entre arrendador e inquilino.",
      },
    ],
  },
  malaga: {
    introParagraph:
      "En Málaga capital y la Costa del Sol, particulares propietarios e inquilinos alquilan por temporada para estudios en la UMA, teletrabajo estacional, verano en El Palo o desplazamientos laborales en Teatinos, Torremolinos o Benalmádena — sin pagar comisión de agencia. Un LAU de larga duración no refleja esas estancias acotadas. Livendia redacta el contrato de alquiler por temporada entre particulares con causa de temporalidad, fianza de dos mensualidades e inventario — 200 € IVA incluido, gestor dedicado y entrega en 24-48 h laborables.",
    whenToUseCases: [
      "Estudiantes UMA o másteres que alquilan piso amueblado un curso en Teatinos o centro.",
      "Verano en El Palo, Pedregalejo o municipios costeros: estancia de meses con salida documentada.",
      "Teletrabajo estacional en piso amueblado por trimestres sin activar prórrogas LAU.",
      "Propietarios en Málaga o Costa del Sol que alquilan entre particulares sin intermediarios.",
      "Profesionales desplazados por proyecto con fecha de fin en Rincón de la Victoria o Fuengirola.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_MALAGA,
    risksParagraph:
      "En Málaga y la costa, confundir temporada contractual con LAU habitual o con alquiler turístico regulado genera litigios y sanciones. Sin causa de temporalidad por escrito, aumenta el riesgo de recalificación. Los conflictos sobre limpieza de salida, mobiliario y fianza son frecuentes en pisos amueblados de verano. Redactar bien desde el inicio protege a ambas partes.",
    savingsTitle: "Cuánto cuesta redactar un contrato de temporada en Málaga",
    savingsIntro:
      "Redactar en despacho o encargarlo a una agencia suele costar varios cientos de euros. Livendia cobra tarifa plana sin comisión:",
    savingsRows: [
      { monthlyRent: 800, lawyerWithVat: 370, agencyEstimate: 440 },
      { monthlyRent: 1000, lawyerWithVat: 420, agencyEstimate: 550 },
      { monthlyRent: 1250, lawyerWithVat: 480, agencyEstimate: 688 },
      { monthlyRent: 1500, lawyerWithVat: 540, agencyEstimate: 825 },
    ],
    highlightRent: 1000,
    savingsFootnote:
      "Importes orientativos en Málaga: despacho (IVA incl.) y agencia por contrato (~50 % mensualidad de referencia). Livendia: 200 € IVA incl., entre particulares.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Puedo alquilar mi piso en Teatinos solo un curso universitario?",
        answer:
          "Sí, con contrato de temporada que indique motivo (estudios), fechas y que no es vivienda habitual indefinida. Livendia lo redacta por 200 € IVA incl., sin comisión.",
      },
      {
        question: "¿Atendéis alquileres en Torremolinos o Benalmádena?",
        answer:
          "Sí. Misma gestoría online para Málaga capital y Costa del Sol, con tramitación 100 % online.",
      },
    ],
  },
  zaragoza: {
    introParagraph:
      "En Zaragoza, particulares propietarios e inquilinos cierran alquileres por temporada para estudios en la UNIZAR, prácticas hospitalarias, desplazamientos a PLAZA o proyectos en Delicias, Actur y Casco Histórico — sin comisión de agencia. Un LAU genérico activa prórrogas que ninguna de las partes quería. Livendia redacta el contrato de alquiler por temporada entre particulares con causa de temporalidad explícita, fianza de dos mensualidades e inventario — 200 € IVA incluido, 24-48 h laborables y gestor dedicado.",
    whenToUseCases: [
      "Estudiantes UNIZAR que alquilan piso o habitación un curso en Delicias, Actur o San Francisco.",
      "Prácticas y residencias en hospitales zaragozanos con estancia de meses.",
      "Profesionales desplazados a PLAZA o proyectos en Valdespartera con plazo definido.",
      "Propietarios en Zaragoza que alquilan entre particulares sin intermediarios.",
      "Teletrabajo temporal en piso amueblado por trimestres.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_ZARAGOZA,
    risksParagraph:
      "En Zaragoza, usar un borrador LAU para una estancia de nueve meses por estudios puede acabar recalificado si el inquilino demuestra residencia habitual. Sin causa de temporalidad por escrito, surgen conflictos sobre fianza, suministros y salida. Redactar bien desde el inicio cuesta menos que un procedimiento posterior.",
    savingsTitle: "Ahorro en Zaragoza: Livendia frente a abogado o inmobiliaria",
    savingsIntro:
      "Comparativa según renta mensual de referencia en Zaragoza:",
    savingsRows: [
      { monthlyRent: 650, lawyerWithVat: 340, agencyEstimate: 358 },
      { monthlyRent: 850, lawyerWithVat: 390, agencyEstimate: 468 },
      { monthlyRent: 1050, lawyerWithVat: 440, agencyEstimate: 578 },
      { monthlyRent: 1300, lawyerWithVat: 500, agencyEstimate: 715 },
    ],
    highlightRent: 850,
    savingsFootnote:
      "Cálculo orientativo en Zaragoza: honorarios despacho (IVA incl.) y tarifa agencia por contrato. Livendia 200 € IVA incl., tarifa plana entre particulares.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Puedo alquilar mi piso en Delicias seis meses entre particulares?",
        answer:
          "Sí, si el contrato recoge duración, motivo de la estancia y condiciones de salida. No debe ser una copia de LAU de larga duración.",
      },
      {
        question: "¿Atendéis propietarios que viven fuera de Zaragoza?",
        answer:
          "Sí. Todo el proceso es online: contratas, subes datos y recibes el borrador con inventario sin desplazarte.",
      },
    ],
  },
  asturias: {
    introParagraph:
      "En Asturias — Oviedo, Gijón, Avilés, costa o interior — particulares alquilan por temporada para verano, estudios, desplazamientos laborales o segunda residencia con plazos acotados, sin comisión de agencia. Un LAU genérico no cubre humedad, leña, parking comunitario ni estancias estacionales en la costa. Livendia redacta el contrato de alquiler por temporada entre particulares con causa de temporalidad, fianza de dos mensualidades e inventario — 200 € IVA incluido, ideal para propietarios fuera del Principado.",
    whenToUseCases: [
      "Verano en Gijón mar, Villaviciosa o costa: estancia de meses con fechas y limpieza de salida documentadas.",
      "Estudiantes en Oviedo o Gijón que alquilan piso un curso o semestre.",
      "Prácticas o desplazamientos laborales en Langreo, Avilés o Siero con plazo definido.",
      "Propietarios fuera de Asturias que alquilan su piso o casa rural por temporada sin agencia.",
      "Teletrabajo estacional en segunda residencia con duración acordada.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_ASTURIAS,
    risksParagraph:
      "En Asturias conviven alquiler urbano, veraneo costero y casas rurales. Confundir temporada con LAU habitual o con alquiler turístico genera litigios. Las plantillas genéricas ignoran humedad, calefacción, leña y equipamiento de costa. Sin causa de temporalidad por escrito, aumenta el riesgo de recalificación como LAU.",
    savingsTitle: "Cuánto cuesta redactar un contrato de temporada en Asturias",
    savingsIntro:
      "Muchos particulares pagan honorarios de despacho o comisión de agencia. Livendia cobra tarifa plana:",
    savingsRows: [
      { monthlyRent: 600, lawyerWithVat: 330, agencyEstimate: 330 },
      { monthlyRent: 750, lawyerWithVat: 370, agencyEstimate: 413 },
      { monthlyRent: 950, lawyerWithVat: 420, agencyEstimate: 523 },
      { monthlyRent: 1150, lawyerWithVat: 470, agencyEstimate: 633 },
    ],
    highlightRent: 750,
    savingsFootnote:
      "Importes orientativos en Asturias: despacho (IVA incl.) y agencia por contrato. Livendia: 200 € IVA incl., sin comisión.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Redactáis contratos de temporada para casas rurales en Asturias?",
        answer:
          "Sí. Adaptamos cláusulas a suministros, accesos, leña y estancias acotadas en casas del interior o costa.",
      },
      {
        question: "¿Atendéis alquileres solo en Oviedo y Gijón?",
        answer:
          "No. Cubrimos todo el Principado — costa, cuenca minera e interior — con la misma gestoría online.",
      },
    ],
  },
  mallorca: {
    introParagraph:
      "En Mallorca, particulares propietarios e inquilinos alquilan por temporada para verano, teletrabajo, estudios o segunda residencia con plazos acotados — a menudo sin agencia de por medio. Un LAU genérico no encaja: hace falta redacción específica con duración, fianza, suministros e inventario. Livendia redacta el contrato de alquiler por temporada entre particulares desde 200 € IVA incluido, con gestor dedicado, entrega en 24-48 h laborables y tramitación online para propietarios en la isla o en la península.",
    whenToUseCases: [
      "Verano en Palma, Calvià o Alcúdia: estancia de meses con fechas exactas y salida documentada.",
      "Teletrabajo o nómadas digitales en piso amueblado por trimestres en Portixol o Son Espanyolet.",
      "Profesionales desplazados a Mallorca por proyecto con duración acordada.",
      "Propietarios en la península que alquilan su segunda residencia en la isla sin comisión inmobiliaria.",
      "Estudiantes o familias con estancia acotada en Manacor, Inca o Pollensa.",
    ],
    includesItems: INCLUDES_ITEMS,
    lauComparisonRows: TEMPORADA_LAU_COMPARISON_BARCELONA,
    risksParagraph:
      "En las Baleares confundir temporada contractual con arrendamiento habitual o con régimen turístico genera sanciones y litigios. Sin causa de temporalidad por escrito, aumenta el riesgo de recalificación como LAU. Los conflictos sobre limpieza de salida, mobiliario y fianza de dos meses son frecuentes en apartamentos amueblados de la costa. Redactar bien desde el inicio protege a ambas partes.",
    savingsTitle: "Cuánto cuesta redactar un contrato de temporada en Mallorca",
    savingsIntro:
      "En la isla muchos particulares pagan honorarios de despacho o comisión de agencia por contrato. Livendia cobra tarifa plana:",
    savingsRows: [
      { monthlyRent: 1000, lawyerWithVat: 420, agencyEstimate: 550 },
      { monthlyRent: 1300, lawyerWithVat: 480, agencyEstimate: 715 },
      { monthlyRent: 1600, lawyerWithVat: 540, agencyEstimate: 880 },
      { monthlyRent: 2000, lawyerWithVat: 620, agencyEstimate: 1100 },
    ],
    highlightRent: 1300,
    savingsFootnote:
      "Importes orientativos en Mallorca: despacho (IVA incl.) y agencia por contrato (~50 % mensualidad de referencia). Livendia: 200 € IVA incl., sin comisión.",
    faq: [
      FAQ_GENERIC_1,
      FAQ_GENERIC_2,
      {
        question: "¿Puedo alquilar mi piso en Palma solo tres meses en verano entre particulares?",
        answer: `Sí, con un contrato de temporada redactado para esa duración (${CONTRATO_ALQUILER_TEMPORADA_PRICE_EUR} € IVA incl.). No debe ser una copia de contrato LAU de larga duración.`,
      },
      {
        question: "¿Atendéis propietarios que viven fuera de Mallorca?",
        answer:
          "Sí. Todo el proceso es online: contratas, subes datos y firmas con inventario sin viajar a la isla.",
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
