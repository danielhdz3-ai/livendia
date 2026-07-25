/** Bloque regulatorio local — verificar zona tensionada y depósito antes de campañas SEO. */
export type AlquilerRegulatoryLocal = {
  depositOrganism: string;
  depositNote: string;
  tensionedZone: string;
  rentIndex: string;
  extraNote?: string;
};

export const ALQUILER_REGULATORY_BY_SLUG: Record<string, AlquilerRegulatoryLocal> = {
  // Fuente: Ministerio de Vivienda y Agenda Urbana (MIVAU), registro oficial de zonas de mercado
  // residencial tensionado (mivau.gob.es), verificado en vivo el 25/07/2026: la Comunidad de Madrid
  // no aparece en ninguna resolución publicada (1T2024–1T2026). Revisar cada 3-6 meses: el registro
  // se actualiza trimestralmente y la postura autonómica podría cambiar.
  madrid: {
    depositOrganism: "Comunidad de Madrid (IVIMA / organismo autonómico de vivienda)",
    depositNote:
      "La fianza legal de un mes se deposita ante el organismo autonómico correspondiente en la Comunidad de Madrid, conforme a la LAU.",
    tensionedZone:
      "Madrid no tiene zonas de mercado residencial tensionado declaradas. La Comunidad de Madrid no ha solicitado esta declaración al Ministerio de Vivienda, por lo que actualmente no aplican los límites de renta de la Ley de Vivienda en la capital, con independencia de la evolución del mercado.",
    rentIndex: "No aplica: al no haber declaración de zona tensionada, no rige el IRAV como tope de actualización de renta en Madrid capital.",
  },
  // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado (mivau.gob.es),
  // verificado en vivo el 25/07/2026: Barcelona figura en la Resolución de 14/03/2024 (declaración
  // catalana, 271 municipios), vigente desde el 16/03/2024 hasta el 16/03/2027. Revisar cada 3-6
  // meses: el registro se actualiza trimestralmente y la vigencia expira en marzo de 2027.
  barcelona: {
    depositOrganism: "Incasòl (Generalitat de Catalunya)",
    depositNote:
      "En Catalunya la fianza legal se deposita ante Incasòl. Livendia te recuerda plazos y documentación al alta del arrendamiento.",
    tensionedZone:
      "Barcelona está declarada zona de mercado residencial tensionado desde marzo de 2024, dentro de la declaración catalana que cubre 271 municipios. Esto implica límites legales a la subida de renta en nuevos contratos de alquiler y condiciones específicas si el propietario es considerado gran tenedor.",
    rentIndex: "IRAV (Índice de Referencia de Arrendamientos de Vivienda), tope aplicable a la actualización de renta en nuevos contratos mientras la declaración siga vigente (hasta marzo de 2027 salvo prórroga).",
  },
  // Precio medio: Idealista, junio 2026 (14,3 €/m²).
  valencia: {
    depositOrganism: "Generalitat Valenciana (organismo autonómico de vivienda)",
    depositNote:
      "La fianza de un mes debe depositarse en el organismo de la Comunitat Valenciana según la LAU.",
    tensionedZone:
      "Valencia no ha sido declarada zona de mercado residencial tensionado: el contrato de alquiler se rige por la LAU general, sin los límites adicionales de actualización de renta que aplican en zonas declaradas tensionadas.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración de zona tensionada en Valencia.",
  },
  // Precio medio: Brains Real Estate, Q1 2026 (19,1 €/m², ticket medio 1.556 €/mes).
  // Fuente zona tensionada: MIVAU, registro oficial, verificado en vivo el 25/07/2026 (Andalucía no
  // ha activado el mecanismo, mismo caso que Málaga). Revisar cada 3-6 meses.
  sevilla: {
    depositOrganism: "Junta de Andalucía",
    depositNote: "Depósito de fianza legal ante el organismo autonómico andaluz conforme a LAU.",
    tensionedZone:
      "La Junta de Andalucía no ha activado el mecanismo de zona de mercado residencial tensionado en Sevilla, el mismo caso que Málaga.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración oficial de zona tensionada en Sevilla; revisar en cada renovación.",
  },
  // Precio medio: Brains Real Estate, Q1 2026 (16-17 €/m², ticket medio 1.476 €/mes).
  malaga: {
    depositOrganism: "Junta de Andalucía",
    depositNote: "Fianza legal depositada en el organismo autonómico andaluz.",
    tensionedZone:
      "La Junta de Andalucía no ha declarado oficialmente Málaga zona de mercado residencial tensionado, aunque técnicamente todos sus distritos superan ya el umbral del 30 % de esfuerzo sobre la renta media. Verifica si hay declaración vigente antes de subir renta en renovación.",
    rentIndex: "LAU general — sin declaración oficial de zona tensionada a la fecha; revisar en cada renovación.",
  },
  // Precio medio: Idealista, Q2 2026 (19,1 €/m²).
  // Fuente zona tensionada: MIVAU, registro oficial, verificado en vivo el 25/07/2026 (Baleares no
  // ha presentado solicitud formal, aunque cumple el criterio técnico del 30% de esfuerzo). Revisar
  // cada 3-6 meses.
  mallorca: {
    depositOrganism: "Govern de les Illes Balears",
    depositNote: "Depósito de fianza en el organismo balear correspondiente.",
    tensionedZone:
      "Baleares no ha presentado ante el Ministerio de Vivienda la solicitud formal de declaración de zona de mercado residencial tensionado, aunque el criterio técnico de esfuerzo (más del 30 % de la renta media) ya se cumple en buena parte de la isla, incluida Palma.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración oficial de zona tensionada en Baleares; revisar en cada renovación por si cambia la postura autonómica.",
  },
  // Precio medio: Enalquiler, abril 2026 (986-995 €/mes).
  // Fuente zona tensionada: MIVAU, registro oficial, verificado en vivo el 25/07/2026 (Asturias no
  // ha activado el mecanismo). Revisar cada 3-6 meses.
  oviedo: {
    depositOrganism: "Principado de Asturias",
    depositNote: "Fianza legal depositada ante el organismo autonómico asturiano.",
    tensionedZone:
      "Asturias no ha activado la figura de zona de mercado residencial tensionado, por lo que Oviedo se rige por la LAU general sin límites adicionales de actualización de renta en las renovaciones.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración de zona tensionada en Asturias.",
  },
  // Precio medio: Indomio, enero 2026 (11,0 €/m², +7,98% interanual).
  gijon: {
    depositOrganism: "Principado de Asturias",
    depositNote: "Mismo régimen de depósito autonómico que el resto del Principado.",
    tensionedZone:
      "Asturias no ha activado la figura de zona de mercado tensionado, por lo que Gijón se rige por la LAU general sin límites adicionales de actualización de renta en las renovaciones.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración de zona tensionada en Asturias.",
  },
  // Precio medio: Idealista, mayo 2026 (11 €/m², 38-42% más barata que Madrid).
  // Fuente zona tensionada: MIVAU, registro oficial, verificado en vivo el 25/07/2026 (Aragón no
  // está entre las CCAA con declaración activa). Revisar cada 3-6 meses.
  zaragoza: {
    depositOrganism: "Gobierno de Aragón",
    depositNote: "Depósito de la fianza legal ante el organismo aragonés.",
    tensionedZone:
      "Aragón no está entre las comunidades autónomas que han activado la figura de zona de mercado residencial tensionado, por lo que Zaragoza se rige por la LAU general sin límites adicionales de actualización de renta.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración de zona tensionada en Aragón.",
    extraNote:
      "Centro Histórico y Universidad-Romareda concentran la demanda más alta; Actur-Rey Fernando ofrece la mejor relación calidad-precio (Idealista, mayo de 2026).",
  },
  // Precio medio: Engel & Völkers, junio 2026 (10,55 €/m² para pisos).
  // Fuente zona tensionada: MIVAU, registro oficial, verificado en vivo el 25/07/2026 (Región de
  // Murcia no está entre las CCAA con declaración activa). Revisar cada 3-6 meses.
  murcia: {
    depositOrganism: "Región de Murcia",
    depositNote: "Fianza legal depositada en el organismo autonómico murciano.",
    tensionedZone: "Murcia no está declarada zona de mercado residencial tensionado.",
    rentIndex: "LAU general — no aplica IRAV al no existir declaración de zona tensionada en la Región de Murcia.",
  },
  // Precio medio: BOE / Ministerio de Vivienda, índice de precios de referencia en vigor desde abril
  // de 2026 (700-950 €/mes, 800 € el más común).
  // Fuente zona tensionada: MIVAU, registro oficial, verificado en vivo el 25/07/2026 (Bilbao
  // declarada desde el 31/10/2025 junto con Vitoria-Gasteiz y San Sebastián). Revisar cada 3-6 meses.
  bilbao: {
    depositOrganism: "Departamento de Vivienda del Gobierno Vasco / HABE",
    depositNote: "En Euskadi rigen particularidades de depósito y contrato; la fianza legal se deposita conforme a normativa autonómica.",
    tensionedZone:
      "Bilbao está declarada zona de mercado residencial tensionado desde el 31 de octubre de 2025, junto con Vitoria-Gasteiz y San Sebastián (las tres capitales vascas). Esto implica límites legales a la subida de renta en nuevos contratos de alquiler y condiciones específicas para grandes tenedores.",
    rentIndex: "Índice de precios de referencia del Ministerio de Vivienda (BOE, en vigor desde abril de 2026), tope aplicable a la actualización de renta en nuevos contratos mientras la declaración siga vigente.",
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
