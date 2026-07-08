/** Bloque regulatorio local — verificar zona tensionada y depósito antes de campañas SEO. */
export type AlquilerRegulatoryLocal = {
  depositOrganism: string;
  depositNote: string;
  tensionedZone: string;
  rentIndex: string;
  extraNote?: string;
};

export const ALQUILER_REGULATORY_BY_SLUG: Record<string, AlquilerRegulatoryLocal> = {
  madrid: {
    depositOrganism: "Comunidad de Madrid (IVIMA / organismo autonómico de vivienda)",
    depositNote:
      "La fianza legal de un mes se deposita ante el organismo autonómico correspondiente en la Comunidad de Madrid, conforme a la LAU.",
    tensionedZone:
      "Madrid capital y parte del área metropolitana han sido declaradas zona de mercado residencial tensionado. Verifica el límite de actualización de renta (IRAV u otro índice aplicable) antes de renovar.",
    rentIndex: "IRAV (Índice de Referencia de Arrendamientos de Vivienda) cuando aplica en zona tensionada.",
  },
  barcelona: {
    depositOrganism: "Incasòl (Generalitat de Catalunya)",
    depositNote:
      "En Catalunya la fianza legal se deposita ante Incasòl. Livendia te recuerda plazos y documentación al alta del arrendamiento.",
    tensionedZone:
      "Barcelona capital y municipios del área metropolitana están en zona tensionada. La actualización de renta y la referencia de precio pueden estar limitadas — revisamos contrato y renovaciones con criterio LAU + normativa catalana vigente.",
    rentIndex: "IRAV en zonas declaradas tensionadas; verificar índice aplicable en cada renovación.",
  },
  valencia: {
    depositOrganism: "Generalitat Valenciana (organismo autonómico de vivienda)",
    depositNote:
      "La fianza de un mes debe depositarse en el organismo de la Comunitat Valenciana según la LAU.",
    tensionedZone:
      "Valencia capital y parte de la provincia pueden estar afectadas por declaración de zona tensionada. Comprueba el tope de subida antes de aplicar incrementos en renovación.",
    rentIndex: "IRAV u otro índice publicado para zonas tensionadas en la Comunitat Valenciana.",
  },
  sevilla: {
    depositOrganism: "Junta de Andalucía",
    depositNote: "Depósito de fianza legal ante el organismo autonómico andaluz conforme a LAU.",
    tensionedZone:
      "Consulta si el municipio está en área tensionada antes de renovar; la limitación de renta depende de la declaración vigente en Andalucía.",
    rentIndex: "IRAV cuando la zona esté declarada tensionada.",
  },
  malaga: {
    depositOrganism: "Junta de Andalucía",
    depositNote: "Fianza legal depositada en el organismo autonómico andaluz.",
    tensionedZone:
      "Málaga capital y costa pueden tener distinto grado de tensión de mercado. Verifica declaración municipal/autonómica antes de subir renta en renovación.",
    rentIndex: "IRAV en zonas tensionadas declaradas.",
  },
  mallorca: {
    depositOrganism: "Govern de les Illes Balears",
    depositNote: "Depósito de fianza en el organismo balear correspondiente.",
    tensionedZone:
      "Palma y parte de Mallorca concentran demanda turística y residencial. Revisa si aplica zona tensionada y límites de actualización.",
    rentIndex: "IRAV u índice autonómico aplicable en renovación.",
  },
  oviedo: {
    depositOrganism: "Principado de Asturias",
    depositNote: "Fianza legal depositada ante el organismo autonómico asturiano.",
    tensionedZone:
      "Oviedo capital no suele figurar entre las zonas más tensionadas de España, pero conviene verificar declaraciones autonómicas antes de renovar.",
    rentIndex: "Actualización según LAU; IRAV si el municipio entra en zona tensionada.",
  },
  gijon: {
    depositOrganism: "Principado de Asturias",
    depositNote: "Mismo régimen de depósito autonómico que el resto del Principado.",
    tensionedZone:
      "Gijón tiene presión en zonas costeras y universitarias. Comprueba normativa autonómica vigente en cada renovación.",
    rentIndex: "LAU + IRAV si aplica declaración de tensión.",
  },
  zaragoza: {
    depositOrganism: "Gobierno de Aragón",
    depositNote: "Depósito de la fianza legal ante el organismo aragonés.",
    tensionedZone:
      "Zaragoza capital ha sido objeto de análisis de mercado tensionado en barrios como Centro, Romareda y Actur (precios medios ~2.250–2.800 €/m² en 2026). Verifica declaración vigente antes de actualizar renta.",
    rentIndex: "IRAV en zonas declaradas; revisar boletín autonómico en renovaciones.",
    extraNote:
      "Mercado con fuerte demanda en Universidad y Romareda; documenta precio de referencia si alquilas en zona tensionada.",
  },
  murcia: {
    depositOrganism: "Región de Murcia",
    depositNote: "Fianza legal depositada en el organismo autonómico murciano.",
    tensionedZone:
      "Murcia capital y pedanías como Sucina o Corvera muestran subidas fuertes (precio medio región ~1.700–2.000 €/m² en 2026). Comprueba si tu municipio está declarado tensionado.",
    rentIndex: "IRAV cuando aplique zona tensionada; LAU en resto de casos.",
  },
  bilbao: {
    depositOrganism: "Departamento de Vivienda del Gobierno Vasco / HABE",
    depositNote: "En Euskadi rigen particularidades de depósito y contrato; la fianza legal se deposita conforme a normativa autonómica.",
    tensionedZone:
      "Bizkaia y Bilbao capital tienen mercado comprimido. Verifica declaración de zona tensionada y límites de actualización antes de renovar.",
    rentIndex: "IRAV u índice aplicable en renovaciones en zona tensionada.",
  },
};

export const ADMINISTRACION_ALQUILER_TEMPLATE_FAQ = [
  {
    question: "¿Qué pasa si el inquilino no paga?",
    answer:
      "Livendia monitoriza vencimientos, reclama por los canales acordados y te avisa de forma temprana. Si persiste el impago, orientamos sobre requerimientos y, si hace falta, servicios legales adicionales (el pack mensual no incluye juicio de desahucio).",
  },
  {
    question: "¿Tenéis seguro de impago de alquiler?",
    answer:
      "No incluimos póliza de impago en la cuota de 49 €/mes. Podemos orientarte sobre compañías especializadas si quieres contratar seguro aparte; nuestro servicio cubre gestión, comunicación e incidencias.",
  },
  {
    question: "¿Puedo vender el piso con el inquilino dentro?",
    answer:
      "Sí, pero rige la LAU: el arrendamiento se transmite al comprador y hay plazos de preferencia del inquilino. Te ayudamos a coordinar comunicaciones y documentación sin romper el contrato vigente.",
  },
  {
    question: "¿Qué pasa si quiero recuperar la vivienda para uso propio?",
    answer:
      "Debe cumplirse causa legal de recuperación (LAU), plazos de antelación y requisitos formales. Te indicamos si procede en tu caso y redactamos o revisamos la comunicación al inquilino.",
  },
  {
    question: "¿Hay permanencia en la administración Livendia?",
    answer:
      "No. Son 49 €/mes IVA incluido y puedes cancelar cuando quieras desde el panel. Sin comisión sobre la renta ni honorarios ocultos.",
  },
] as const;

export function mergeAdministracionFaq(
  localFaq: readonly { question: string; answer: string }[] | undefined,
): { question: string; answer: string }[] {
  const seen = new Set<string>();
  const merged: { question: string; answer: string }[] = [];
  for (const item of [...ADMINISTRACION_ALQUILER_TEMPLATE_FAQ, ...(localFaq ?? [])]) {
    if (seen.has(item.question)) continue;
    seen.add(item.question);
    merged.push(item);
  }
  return merged;
}
