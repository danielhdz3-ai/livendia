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

  "barcelona/eixample": {
    rentPricePerSqm:
      "Distrito Eixample: 30,32 €/m² y renta media de publicación ~3.113 €/mes (Brains Real Estate, Q2 2026). Idealista (abril 2025) sitúa la oferta del distrito en 26,5 €/m². Incasòl registró en contratos firmados una mediana de ~1.284 €/mes en el distrito (Nitia, datos agregados 2024). Por subzonas, Dreta de l'Eixample y Sagrada Família suelen superar la media municipal barcelonesa.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, precio medio distrito Eixample, abril 2025; Nitia/Incasòl, mediana contratos firmados Eixample, 2024.",
    dominantHousingType:
      "Ensanche clásico (Eixample esquerre i dret): pisos de 80–120 m² en fincas regias con techos altos, muchos sin ascensor en plantas bajas o con ascensor antiguo. Bloques del s. XX en Fort Pienc y Sagrada Família con viviendas de 65–95 m². Alta proporción de pisos reformados para alquiler de larga duración, estancias corporativas y expatriados.",
    tenantProfile: [
      "Profesionales y familias en Dreta de l'Eixample y Passeig de Gràcia",
      "Expatriados y personal médico cerca del Hospital Clínic y Sant Pau",
      "Ejecutivos en traslado temporal (3–24 meses) en Fort Pienc",
      "Parejas jóvenes en Antiga Esquerra de l'Eixample con contrato LAU estable",
    ],
    localRegulatoryNote:
      "Eixample está en zona tensionada catalana (271 municipios, MIVAU 2024–2027). La brecha entre oferta en portales (~26–30 €/m²) y contratos registrados (~1.284 €/mes mediana Nitia/Incasòl) refleja topes IRAV y baremo estatal. Cada renovación exige cálculo legal antes de proponer subida al inquilino.",
    marketContext:
      "El Eixample es el distrito con mayor peso en la oferta de alquiler de Barcelona capital: Brains Real Estate (Q2 2026) lo sitúa en 30,32 €/m² de publicación (+6,8 % interanual), con esfuerzo de alquiler del 42,1 %. Idealista (abril 2025) mostraba 26,5 €/m² en oferta agregada — la diferencia con contratos reales (~1.284 €/mes mediana Incasòl vía Nitia, 2024) confirma la presión regulatoria. Para el propietario, el reto no es encontrar inquilino sino gestionar renovaciones con IRAV, incidencias en fincas centenarias (fontanería comunitaria, ascensores) y perfiles exigentes que esperan respuesta inmediata. Livendia filtra ese contacto diario desde Les Corts, a 10–15 minutos del distrito.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Renovación con tope IRAV en Dreta de l'Eixample",
        body: "Un propietario quiere subir la renta en la renovación de un piso de 95 m². Livendia consulta la renta de referencia, calcula el incremento máximo legal en zona tensionada y prepara la propuesta documentada. El inquilino recibe la comunicación del gestor; el propietario solo firma si está de acuerdo con el resumen en una página.",
      },
      {
        title: "Ejemplo ilustrativo — Avería de ascensor en finca regia",
        body: "El inquilino avisa de ascensor averiado en un quinto sin alternativa viable. Livendia abre incidencia con la comunidad y el mantenedor, hace seguimiento diario y reporta al propietario solo si hay derrama o coste individual que deba autorizar — sin llamadas del inquilino al móvil personal del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Retraso de transferencia en estancia corporativa",
        body: "Un inquilino con empresa pagadora retrasa la renta al día 8. Livendia aplica el protocolo desde el día 3, contacta con el arrendatario y con la empresa si procede, y registra el justificante. El propietario ve el estado en el panel sin perseguir pagos por email.",
      },
    ],
    nearbyLandmarks: [
      "Passeig de Gràcia",
      "Sagrada Família",
      "Hospital Clínic de Barcelona",
      "Plaça de Catalunya",
      "Rambla de Catalunya",
      "Estació de Sants (límite oeste)",
    ],
  },

  "sant-cugat": {
    rentPricePerSqm:
      "Municipio Sant Cugat del Vallès: 17 €/m² según Fotocasa (agosto 2026). Idealista vía La Voz Central (~20,66 €/m² en oferta agregada, 2025). Incasòl fijó máximos de referencia en 2023 para contratos nuevos en municipios tensionados del Vallès. Por zonas, Centre-Vila y Volpelleres suelen estar por encima de la media municipal.",
    rentPriceSourceNote:
      "Fotocasa, índice municipal Sant Cugat, agosto 2026; La Voz Central citando Idealista, 2025; Incasòl, baremos zona tensionada Vallès, 2023.",
    dominantHousingType:
      "Chalets adosados y casas unifamiliares en Mira-sol, Valldoreix y Les Planes. Bloques de los 80–2000 en Centre-Vila, Can Matas y Volpelleres (75–110 m²). Promociones recientes en Parc Central y Eixample Sant Cugat con viviendas orientadas a familias con hijos en colegios concertados o internacionales.",
    tenantProfile: [
      "Familias con hijos en colegios de Sant Cugat o Barcelona",
      "Ejecutivos del Vallès y teletrabajadores de alta renta",
      "Personal sanitario y investigadores del entorno hospitalario",
      "Inquilinos estables en contratos LAU largos (2–5 años)",
    ],
    localRegulatoryNote:
      "Sant Cugat está incluido en la declaración de zona tensionada de Cataluña. Los nuevos contratos y renovaciones deben respetar baremo estatal e IRAV. El municipio combina oferta premium (casas y pisos amplios) con topes legales que obligan a contrastar cada subida con referencia oficial antes de notificar al inquilino.",
    marketContext:
      "Sant Cugat es uno de los municipios con mayor renta per cápita del área metropolitana barcelonesa. Fotocasa (agosto 2026) sitúa el alquiler en 17 €/m² municipal — por debajo de Barcelona capital (~23–30 €/m² según distrito) pero con ticket medio alto por superficie (muchas viviendas de 90–130 m²). La Voz Central (2025) citaba ~20,66 €/m² en oferta Idealista. La demanda proviene de familias que priorizan colegios, FGC y calidad de vida frente a vivir en Barcelona ciudad. Para el propietario fuera del municipio — habitual en Mira-sol y Valldoreix — el coste oculto son incidencias en casas (jardín, piscina comunitaria, portería) y renovaciones con IRAV en un mercado donde el inquilino tipo espera servicio profesional.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Incidencia en chalet adosado de Mira-sol",
        body: "Filtración en cubierta tras temporal. Livendia manda industrial, determina si es origen individual o comunitario, gestiona con la seguro-comunidad si procede y presenta presupuesto al propietario antes de autorizar obra. El inquilino canaliza todo por el gestor.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación en Volpelleres con IRAV",
        body: "Antes del vencimiento contractual, Livendia calcula incremento máximo legal, prepara propuesta y documenta la comunicación al inquilino. El propietario residente en Madrid revisa el resumen online y aprueba sin reunión presencial en el municipio.",
      },
      {
        title: "Ejemplo ilustrativo — Cambio de titularidad de suministros",
        body: "Tras rotación de inquilino en Centre-Vila, Livendia gestiona baja/alta de luz y agua, recoge lecturas y archiva justificantes en el panel. El propietario no coordina citas con el nuevo arrendatario.",
      },
    ],
    nearbyLandmarks: [
      "Monestir de Sant Cugat",
      "Estació FGC Sant Cugat",
      "Parc Central de Sant Cugat",
      "Mira-sol / Valldoreix (FGC)",
      "Hospital General de Catalunya (límite)",
      "Camp Nou (15 min en FGC)",
    ],
  },

  badalona: {
    rentPricePerSqm:
      "Municipio Badalona: 19,22 €/m² en oferta (Idealista, datos agregados 2025). SERPAVI/contratos registrados 2024: mediana ~10,17 €/m² en alquiler real. Engel & Völkers (julio 2026) sitúa pisos en 14,16 €/m². Por barrios, Centre y Gorg suelen superar la mediana; Sant Roc y Llefià más asequibles.",
    rentPriceSourceNote:
      "Idealista, oferta agregada Badalona, 2025; SERPAVI, mediana contratos 2024; Engel & Völkers, precios alquiler Badalona, julio 2026.",
    dominantHousingType:
      "Bloques de los 60–90 en Centre, Gorg y Sant Josep (55–80 m²), muchos con ascensor antiguo y reformas parciales. Edificios más recientes en Montigalà y Bufalà (70–95 m²). En Sant Roc y Llefià, parque envejecido con viviendas compactas y alta densidad.",
    tenantProfile: [
      "Familias que trabajan en Barcelona y buscan alquiler más asequible que la capital",
      "Parejas jóvenes en Gorg y Centre, bien comunicados en metro L2",
      "Trabajadores del sector industrial y logístico del Besòs",
      "Inquilinos estables en barrios consolidados (Montigalà, Nova Lloreda)",
    ],
    localRegulatoryNote:
      "Badalona está en zona tensionada catalana. La brecha entre oferta Idealista (~19 €/m²) y contratos SERPAVI (~10,17 €/m² mediana 2024) muestra el efecto de topes legales e IRAV. Depósito en Incasòl obligatorio; renovaciones con cálculo de referencia antes de cualquier comunicación al inquilino.",
    marketContext:
      "Badalona es el tercer municipio más poblado de Cataluña (>220.000 hab.) y alternativa habitual a Barcelona por precio y metro directo (L2, L10). Idealista (2025) sitúa la oferta en 19,22 €/m²; Engel & Völkers (julio 2026) en 14,16 €/m² para pisos; SERPAVI (2024) registra mediana real de 10,17 €/m² — la divergencia confirma presión regulatoria. El parque es compacto y envejecido; incidencias de fontanería, ascensor y humedades son frecuentes. Para propietarios fuera del municipio, Livendia desde Les Corts (~25 min) asume cobro, mediación e industriales del Maresme-Besòs.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Humedad por filtración en Gorg",
        body: "Aparece humedad en salón tras lluvias. Livendia manda perito, determina origen comunitario o interior, abre conversación con la comunidad si procede y mantiene informado al propietario con fotos y presupuesto antes de obra.",
      },
      {
        title: "Ejemplo ilustrativo — Impago reiterado en Sant Roc",
        body: "El inquilino retrasa la transferencia dos meses consecutivos. Livendia aplica protocolo de cobro desde el día 3, registra justificantes y escala con mediación formal antes de informar al propietario de pasos legales adicionales.",
      },
      {
        title: "Ejemplo ilustrativo — Certificado de empadronamiento",
        body: "Un inquilino solicita documentación para escolarizar. Livendia verifica procedencia, coordina firma con el propietario y entrega copia al arrendatario — sin llamadas al móvil del propietario en horario laboral.",
      },
    ],
    nearbyLandmarks: [
      "Metro Gorg / Pep Ventura (L2)",
      "Platja de Badalona",
      "Rambla de Badalona",
      "Anís del Mono (fábrica histórica)",
      "Montigalà",
      "Hospital Germans Trias i Pujol (límite)",
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
