/** Datos de mercado local verificados — landings metro administración de alquiler. */

export type MetroOperationalCase = {
  title: string;
  body: string;
};

export type MetroLandingEnrichment = {
  rentPricePerSqm: string;
  rentPriceSourceNote: string;
  dominantHousingType: string;
  tenantProfile: readonly string[];
  localRegulatoryNote: string;
  marketContext: string;
  operationalCases: readonly MetroOperationalCase[];
  nearbyLandmarks: readonly string[];
};

export const METRO_ENRICHMENT_BY_KEY: Record<string, MetroLandingEnrichment> = {
  "barcelona/les-corts": {
    rentPricePerSqm:
      "Distrito Les Corts: 24,90 €/m² y renta media de publicación ~3.127 €/mes. Pedralbes: 23 €/m² (Fotocasa, agosto 2026). Zona universitaria y Maternitat: oferta en torno a 21–22 €/m² según agregadores de Idealista (Properfy, 2026).",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Fotocasa, índice Pedralbes, agosto 2026; Properfy agregando Idealista, 2026.",
    dominantHousingType:
      "En Pedralbes predominan pisos amplios (120–200 m²) y chalets adosados en calles residenciales de baja densidad. En La Maternitat i Sant Ramon y Les Corts centre, bloques de los años 60–80 con viviendas de 70–95 m², muchos con ascensor comunitario y calderas colectivas o individuales antiguas.",
    tenantProfile: [
      "Familias con hijos en colegios del eje Pedralbes–Maternitat",
      "Personal sanitario, investigadores y residentes del Hospital Clínic y campus universitario",
      "Profesionales y expatriados en traslado cerca del eje Diagonal y IESE",
      "Estudiantes de máster y doctorado en la Zona Universitària",
    ],
    localRegulatoryNote:
      "Les Corts está dentro de la declaración catalana de zona de mercado residencial tensionado (271 municipios, MIVAU, vigente 2024–2027). En renovaciones, el tope IRAV y la condición de gran tenedor condicionan cualquier subida: lo verificamos antes de enviar propuesta al inquilino.",
    marketContext:
      "Les Corts combina el segmento premium de Pedralbes — donde la oferta de alquiler se mueve en torno a 23 €/m² (Fotocasa, agosto 2026) — con barrios más asequibles hacia Maternitat y la Zona Universitària. Brains Real Estate (Q2 2026) sitúa el distrito en 24,90 €/m² de publicación (+8 % interanual), con esfuerzo de alquiler del 38,5 %, por debajo de la media barcelonesa. La proximidad al Clínic, a IESE y al campus condiciona una demanda estable de perfiles profesionales y familias que buscan estabilidad contractual más que rotación turística. Para el propietario, el reto no es solo fijar renta: son las incidencias en edificios envejecidos y las renovaciones con IRAV en un mercado donde un punto de €/m² representa cientos de euros anuales.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Avería de caldera en un bloque de Maternitat",
        body: "Un inquilino avisa un domingo por la noche de falta de agua caliente. Livendia abre incidencia, contacta con el servicio de urgencias acordado y coordina la revisión de la caldera comunitario el lunes por la mañana. El propietario recibe el presupuesto por email y solo interviene para autorizar el gasto; no habla con el inquilino ni con el presidente de la comunidad.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación con tope IRAV en Pedralbes",
        body: "Antes de la fecha de renovación, Livendia consulta la renta de referencia aplicable, calcula el incremento máximo legal y prepara la propuesta documentada para el inquilino. El propietario revisa una sola hoja resumen y firma si está de acuerdo; Livendia gestiona la conversación y deja constancia en el panel.",
      },
      {
        title: "Ejemplo ilustrativo — Retraso reiterado de transferencia",
        body: "El inquilino lleva dos meses pagando entre el día 5 y el 8. Livendia aplica el protocolo de cobro: recordatorio automático el día 3, llamada de mediación el día 5 y aviso al propietario solo si no hay justificante antes del día 7. El propietario no persigue la renta por WhatsApp.",
      },
    ],
    nearbyLandmarks: [
      "Hospital Clínic de Barcelona",
      "Camp Nou / Spotify Camp Nou",
      "IESE Business School",
      "Zona Universitària (UB, UPC)",
      "Parc de l'Espanya Industrial",
      "Avinguda Diagonal",
    ],
  },

  "barcelona/gracia": {
    rentPricePerSqm:
      "Distrito Gràcia: 25,30 €/m² y renta media de publicación ~2.014 €/mes (Brains Real Estate, Q2 2026). Por barrio en oferta: Vila de Gràcia 25,7 €/m²; Camp d'en Grassot 21,1 €/m²; Vallcarca 20,7 €/m²; La Salut 24,3 €/m²; El Coll 19,6 €/m² (Properfy/Idealista, 2026).",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Properfy agregando Idealista por barrio, 2026.",
    dominantHousingType:
      "Edificios de principios del s. XX en Vila de Gràcia y Camp d'en Grassot (60–90 m², techos altos, sin ascensor en muchos casos). Vallcarca y El Coll, casas entre medianeras y bloques en pendiente con viviendas más pequeñas. Alta proporción de pisos reformados para alquiler por habitaciones o estancias medias.",
    tenantProfile: [
      "Jóvenes profesionales y parejas sin hijos en Vila de Gràcia",
      "Nómadas digitales y estancias de media duración (3–11 meses)",
      "Familias en La Salut y Camp d'en Grassot",
      "Estudiantes y artistas en convivencias compartidas",
    ],
    localRegulatoryNote:
      "Gràcia está en zona tensionada catalana: contratos de temporada exigen causa real y duración acorde; el uso turístico encubierto expone a sanciones. Incasòl registró en 1T 2025 un alquiler medio real en el distrito de 1.041,60 €/mes — inferior a la oferta de portal (~23,7 €/m² en enero 2026, Idealista vía Selekta Properties) por el efecto de los topes legales.",
    marketContext:
      "Gràcia cerró 2025 entre los distritos más demandados de Barcelona y en Q2 2026 la oferta se sitúa en 25,30 €/m² (Brains Real Estate), con una ligera corrección interanual del −1 %. La heterogeneidad entre barrios es marcada: Vila de Gràcia supera los 25 €/m² mientras El Coll ronda los 20 €/m² (Properfy/Idealista, 2026). El 24 % de la población del distrito es extranjera (Idescat, 1/1/2025), lo que alimenta rotación y mezcla de contratos LAU, habitaciones y temporadas reguladas. Para el propietario, el riesgo principal no es el impago aislado sino la convivencia mal gestionada — ruido, subarriendo, mascotas — y las renovaciones en un mercado tensionado donde la oferta publicada y el alquiler real registrado divergen.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Queja de vecinos por ruido en piso compartido",
        body: "La comunidad contacta por actividad nocturna en un piso de cuatro habitaciones. Livendia recoge el parte, verifica las cláusulas de convivencia del contrato, habla con cada arrendatario y propone medidas (horarios, aforo). El propietario recibe un acta resumida; no entra en el grupo de WhatsApp de la finca.",
      },
      {
        title: "Ejemplo ilustrativo — Contrato de temporada en Vallcarca",
        body: "Un propietario recibe solicitud de estancia de seis meses. Livendia revisa causa justificada, duración y documentación antes de prorrogar. Durante la estancia, el inquilino canaliza averías y pagos a través del gestor; al finalizar, Livendia coordina entrega de llaves e inventario sin que el propietario gestione la salida.",
      },
      {
        title: "Ejemplo ilustrativo — Impago tras cambio de inquilino",
        body: "Tras una rotación en plena Festa Major, el nuevo inquilino no ingresa la renta el día 1. Livendia activa el protocolo desde el día 3, solicita justificante bancario y, si no hay respuesta, escala con mediación formal antes de informar al propietario de posibles pasos legales adicionales.",
      },
    ],
    nearbyLandmarks: [
      "Plaça del Sol / Vila de Gràcia",
      "Park Güell (La Salut)",
      "Plaça de Lesseps",
      "Mercat de l'Abaceria",
      "Vallcarca (Metro Penitents)",
      "Camp d'en Grassot",
    ],
  },

  "l-hospitalet": {
    rentPricePerSqm:
      "Municipio: 17,3 €/m² en oferta (Idealista vía Properfy, febrero 2026) y 20 €/m² según índice Fotocasa (agosto 2026). Por barrio (Fotocasa, agosto 2026): Collblanc–La Torrassa 21 €/m²; Santa Eulàlia 20 €/m²; Bellvitge–Granvia 19 €/m²; Centre 15 €/m²; Can Serra–Pubilla Cases 16 €/m².",
    rentPriceSourceNote:
      "Properfy agregando Idealista, febrero 2026; Fotocasa, índice municipal y por barrio, agosto 2026.",
    dominantHousingType:
      "Parque densificado de bloques de los años 60–80, predominantemente 55–75 m² (mediana ~56 m² según contratos registrados, Agencia Tributaria 2024 vía precioalquiler.com). Muchos edificios con ascensor antiguo, tuberías comunitarias y escasa aislamiento. En Granvia Sud y zonas más recientes, pisos algo mayores orientados a familias.",
    tenantProfile: [
      "Familias que trabajan en Barcelona y buscan alquiler más asequible que la capital",
      "Parejas jóvenes en Collblanc y Centre, bien comunicados en metro",
      "Trabajadores del sector servicios y logística del Baix Llobregat",
      "Inquilinos de origen extranjero en barrios consolidados (Santa Eulàlia, Bellvitge)",
    ],
    localRegulatoryNote:
      "L'Hospitalet está incluido en la declaración de zona tensionada de Cataluña. Los nuevos contratos y renovaciones deben respetar el baremo estatal de referencia e IRAV cuando corresponda. El municipio registró caída de contratos nuevos (~−20 % interanual en 2025 según Idealista/news citando Incasòl), lo que no elimina la presión de precios en oferta.",
    marketContext:
      "L'Hospitalet es el segundo municipio más poblado del área metropolitana (>300.000 hab.) y alternativa habitual a Barcelona capital: Idealista situaba el alquiler en 17,3 €/m² en febrero 2026 (Properfy), frente a ~23,9 €/m² en Barcelona ciudad en la misma época (El Periódico citando Idealista, junio 2025). Fotocasa (agosto 2026) eleva la media municipal a 20 €/m², con Collblanc–La Torrassa en 21 €/m² y Centre en 15 €/m². El parque es compacto y envejecido — mediana ~56 m² en contratos reales (AT 2024) —, lo que concentra incidencias de fontanería, ascensor y comunidad. Para propietarios fuera del municipio, el coste oculto no es la renta sino el tiempo en averías y cobros reiterados.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Avería de ascensor en Bellvitge",
        body: "El inquilino avisa de que el ascensor lleva dos días parado en un quinto sin ascensor alternativo viable para una familia con carrito. Livendia abre incidencia con la comunidad y el mantenedor, hace seguimiento diario y reporta al propietario solo si hay derrama o coste individual que deba autorizar.",
      },
      {
        title: "Ejemplo ilustrativo — Certificado de empadronamiento para escolarización",
        body: "Un inquilino solicita documentación para escolarizar a su hijo. Livendia verifica que la petición es procedente, coordina con el propietario la firma necesaria y entrega copia al arrendatario — sin que el propietario atienda llamadas entre horario laboral y fin de semana.",
      },
      {
        title: "Ejemplo ilustrativo — Retraso de renta tras fin de mes",
        body: "La transferencia no aparece el día 1. Livendia envía recordatorio automático el día 3, contacta el día 5 y registra el justificante cuando llega el día 6. El propietario ve el estado en el panel; no envía mensajes personales al inquilino.",
      },
    ],
    nearbyLandmarks: [
      "Metro Collblanc / L1",
      "Gran Via de l'Hospitalet",
      "Hospital de Bellvitge",
      "Fira de Barcelona (límite con Barcelona)",
      "Rambla de Just Oliveras",
      "Centre d'Esports Municipal de Bellvitge",
    ],
  },

  cornella: {
    rentPricePerSqm:
      "Municipio: 15,22 €/m² en pisos según Engel & Völkers (julio 2026). Rango de mercado en portales locales: 12–15 €/m² (Inmobiliarias Barcelona, 2025). Por zona, Centre y Almeda suelen situarse en la banda alta del municipio.",
    rentPriceSourceNote:
      "Engel & Völkers, precios alquiler Cornellà de Llobregat, julio 2026; Inmobiliarias Barcelona, datos agregados 2025.",
    dominantHousingType:
      "Bloques de los 70–90 en Almeda, Centre y Sant Ildefons (70–95 m²), con reformas parciales orientadas a familias que trabajan en Barcelona o en polígonos del Baix Llobregat. En Gavarra y Riu Sud, chalets adosados y pisos algo más amplios. Parque en buen estado general, con comunidades activas.",
    tenantProfile: [
      "Familias con uno o dos perceptor en Barcelona o Cornellà",
      "Trabajadores de oficinas y polígonos del Baix Llobregat (Zona Franca, Granvia)",
      "Parejas jóvenes que priorizan FGC y Rodalies frente a vivir en Barcelona capital",
      "Inquilinos estables en Sant Ildefons y Centre con contratos LAU largos",
    ],
    localRegulatoryNote:
      "Cornellà está en zona tensionada catalana. La Oficina Local d'Habitatge (OLH Cornellà) remite al Índice estatal de referencia para nuevos contratos. Idealista/news (2025) señala rentas en máximos históricos por m² en municipios del Baix Llobregat, incluido Cornellà, pese al descenso de contratos nuevos.",
    marketContext:
      "Cornellà combina buena conexión con Barcelona (FGC, Rodalies, Granvia) y alquiler más contenido que la capital: Engel & Völkers (julio 2026) sitúa los pisos en 15,22 €/m², estable respecto al año anterior. Inmobiliarias Barcelona (2025) estima un rango de 12–15 €/m² según barrio — Centre y Almeda en la banda alta, Riu Sud más asequible. Es municipio tensionado: cada renovación exige contrastar IRAV y baremo estatal. La demanda proviene de familias que buscan equilibrio entre precio y superficie; el propietario suele competir con stock reformado recientemente, no solo con el precio por m².",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Solicitud de mejoras antes de renovar",
        body: "El inquilino pide pintura y cambio de grifería antes de firmar la prórroga. Livendia filtra qué es obligación legal del propietario y qué es mejora voluntaria, solicita presupuestos comparados y presenta al propietario opciones con plazos — sin negociación directa entre las partes.",
      },
      {
        title: "Ejemplo ilustrativo — Cambio de titularidad de suministros",
        body: "Tras el alta de un nuevo arrendatario en Sant Ildefons, Livendia gestiona la baja/alta de luz y agua, recoge lecturas de contador y archiva los justificantes en el panel. El propietario no llama a las compañías ni coordina citas con el inquilino.",
      },
      {
        title: "Ejemplo ilustrativo — Humedad por filtración en fachada",
        body: "Aparece humedad en un dormitorio tras lluvias. Livendia manda perito/industrial, determina si es origen comunitario o interior, abre conversación con la seguro-comunidad si procede y mantiene informado al propietario con fotos y presupuesto antes de cualquier obra.",
      },
    ],
    nearbyLandmarks: [
      "Estación FGC Cornellà Centre",
      "Museu Agbar de les Aigües",
      "Parc de Can Mercader",
      "Gran Via de Cornellà",
      "Riu Llobregat / Riu Sud",
      "Polígon industrial Almeda",
    ],
  },
};

export function getMetroEnrichment(segments: readonly string[]): MetroLandingEnrichment | undefined {
  return METRO_ENRICHMENT_BY_KEY[segments.join("/")];
}

/** Palabras únicas aproximadas del bloque enrichment (para auditoría). */
export function countEnrichmentWords(e: MetroLandingEnrichment): number {
  const text = [
    e.rentPricePerSqm,
    e.rentPriceSourceNote,
    e.dominantHousingType,
    ...e.tenantProfile,
    e.localRegulatoryNote,
    e.marketContext,
    ...e.operationalCases.flatMap((c) => [c.title, c.body]),
    ...e.nearbyLandmarks,
  ].join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}
