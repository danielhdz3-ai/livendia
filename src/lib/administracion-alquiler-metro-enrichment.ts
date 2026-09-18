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
      {
        title: "Ejemplo ilustrativo — Conflicto por mascota en Zona Universitària",
        body: "La comunidad cuestiona presencia de perro. Livendia revisa contrato y reglamento, habla con inquilino y propone solución documentada. El propietario recibe resumen sin reunión presencial en el edificio.",
      },
      {
        title: "Ejemplo ilustrativo — Suministro de agua sin lectura en Maternitat",
        body: "Tras rotación de inquilino, la compañía reclama lectura estimada. Livendia gestiona baja/alta, recoge lectura real y archiva justificantes en panel.",
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
      {
        title: "Ejemplo ilustrativo — Obra de comunidad en Vila de Gràcia",
        body: "Derrama por rehabilitación de fachada. Livendia explica cuota al propietario, plazos al inquilino y registra pagos sin mezclar conversaciones en el mismo hilo de WhatsApp.",
      },
      {
        title: "Ejemplo ilustrativo — Subarriendo sospechado en Camp d'en Grassot",
        body: "Vecinos reportan personas extra. Livendia revisa contrato, contacta inquilino titular y escala al propietario con opciones legales documentadas.",
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
      {
        title: "Ejemplo ilustrativo — Humedad en sótano en Centre",
        body: "Filtración en trastero/comunitario afecta percepción del inquilino. Livendia perita origen, habla con comunidad y presenta presupuesto antes de obra.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV en Collblanc",
        body: "Propietario compara renta con Idealista 21 €/m². Livendia calcula tope legal en zona tensionada y envía propuesta válida — evitando reclamación posterior.",
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
      {
        title: "Ejemplo ilustrativo — Impago en Almeda",
        body: "Inquilino retrasa dos meses. Protocolo de cobro con mediación formal antes de informar al propietario de escalado legal.",
      },
      {
        title: "Ejemplo ilustrativo — Rotación en Centre tras fin de contrato",
        body: "Livendia coordina entrega de llaves, inventario, baja de suministros y depósito Incasòl — propietario no gestiona citas con nuevo inquilino.",
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

  "barcelona/sants-montjuic": {
    rentPricePerSqm:
      "Distrito Sants-Montjuïc: 23,58 €/m² y renta media de publicación agregada (Brains Real Estate, Q2 2026). Sants centre suele superar Poble-sec y Montjuïc en oferta Idealista (2025). La Bordeta y Hostafrancs se sitúan en la franja media del distrito.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Sants-Montjuïc, 2025.",
    dominantHousingType:
      "Bloques de los 60–80 en Sants, Hostafrancs y La Bordeta (60–85 m²) con calderas comunitarias frecuentes. Edificios bajos y casas entre medianeras en Poble-sec y Font de la Guatlla. En Montjuïc, parque más disperso con viviendas unifamiliares y pisos en urbanizaciones.",
    tenantProfile: [
      "Familias en La Bordeta y Hostafrancs con contrato LAU estable",
      "Profesionales vinculados a Estació Sants, Fira y eje Diagonal",
      "Parejas jóvenes en Poble-sec y convivencias compartidas",
      "Inquilinos en rotación moderada cerca de Montjuïc y Zona Franca",
    ],
    localRegulatoryNote:
      "Sants-Montjuïc está en zona tensionada catalana (271 municipios, MIVAU 2024–2027). Renovaciones con IRAV y depósito Incasòl obligatorio; la brecha entre oferta en portales y contratos registrados condiciona cada subida legal.",
    marketContext:
      "Sants-Montjuïc es uno de los distritos más conectados de Barcelona (L3, L5, L1, Rodalies en Sants) con parque envejecido y demanda estable de familias y profesionales. Brains Real Estate (Q2 2026) lo sitúa en 23,58 €/m² de publicación. La heterogeneidad entre Sants (más caro) y Poble-sec/Montjuïc (más asequible) obliga a contrastar referencia por barrio en cada renovación. Para el propietario fuera del distrito, el coste oculto son incidencias en calderas comunitarias, humedades en sótanos y mediación de cobros sin horario fijo.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Caldera comunitaria en La Bordeta",
        body: "El inquilino avisa de falta de calefacción. Livendia abre incidencia con la comunidad y el mantenedor, hace seguimiento diario y reporta al propietario solo si hay derrama o gasto individual que deba autorizar.",
      },
      {
        title: "Ejemplo ilustrativo — Retraso de renta en Sants",
        body: "Transferencia el día 7 sin aviso previo. Livendia aplica protocolo desde el día 3, contacta al inquilino y registra justificante o escalado antes de informar al propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación con IRAV en Hostafrancs",
        body: "Antes del vencimiento, Livendia calcula incremento máximo legal y prepara propuesta documentada. El propietario revisa resumen online y aprueba sin reunión presencial.",
      },
      {
        title: "Ejemplo ilustrativo — Avería de ascensor en Poble-sec",
        body: "Edificio bajo sin ascensor alternativo viable. Livendia coordina mantenedor y comunidad, informa plazos al inquilino y avisa al propietario solo si hay coste individual.",
      },
      {
        title: "Ejemplo ilustrativo — Conflicto por obras Fira / ruido en Montjuïc",
        body: "Inquilino reclama por obras cercanas. Livendia verifica si afecta habitabilidad contractual, documenta respuesta y evita escalada directa propietario-inquilino.",
      },
    ],
    nearbyLandmarks: [
      "Estació de Sants",
      "Plaça dels Països Catalans",
      "Avinguda del Paral·lel",
      "Montjuïc / MNAC",
      "Parc de l'Espanya Industrial",
      "Fira de Barcelona (Montjuïc)",
    ],
  },

  "barcelona/sant-marti": {
    rentPricePerSqm:
      "Distrito Sant Martí: 24,12 €/m² y renta media de publicación (Brains Real Estate, Q2 2026). Poblenou y Diagonal Mar suelen superar La Verneda y el Besòs en oferta Idealista (2025). Clot se sitúa en la franja media-alta del distrito.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Sant Martí, 2025.",
    dominantHousingType:
      "Bloques de los 70–90 y promociones 2000–2015 en Poblenou y Diagonal Mar (75–110 m²). Edificios señoriales y reconversiones en Clot. En La Verneda i la Pau y Besòs, bloques compactos de los 60–80 con ascensores antiguos.",
    tenantProfile: [
      "Profesionales tech y familias jóvenes en Poblenou y 22@",
      "Familias estables en Clot y La Verneda",
      "Inquilinos con contrato LAU largo en Diagonal Mar",
      "Trabajadores del litoral y logística del Besòs",
    ],
    localRegulatoryNote:
      "Sant Martí está en zona tensionada catalana. IRAV en renovaciones, Incasòl en nuevos contratos y especial atención a contratos de habitaciones mal documentados en Poblenou.",
    marketContext:
      "Sant Martí combina la transformación del 22@ en Poblenou con barrios consolidados (Clot, Verneda) y nueva oferta en Diagonal Mar. Brains Real Estate (Q2 2026) cifra el distrito en 24,12 €/m² de publicación. La demanda de perfiles profesionales eleva expectativas de respuesta rápida a incidencias. Para propietarios que no viven en el distrito, Livendia desde Les Corts asume cobro, mediación comunitaria e industriales del Besòs-Maresme.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Queja de ruido en Poblenou",
        body: "La comunidad alerta por actividad nocturna. Livendia recoge el parte, verifica cláusulas del contrato, habla con el inquilino y propone medidas. El propietario recibe acta resumida sin entrar en el chat de la finca.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación en Diagonal Mar",
        body: "Livendia consulta renta de referencia, calcula tope IRAV y prepara comunicación al inquilino. El propietario solo firma si está de acuerdo con el resumen en una página.",
      },
      {
        title: "Ejemplo ilustrativo — Avería de ascensor en Clot",
        body: "Inquilino en planta alta sin ascensor operativo. Livendia coordina con comunidad y mantenedor, informa plazos al arrendatario y avisa al propietario solo si hay coste individual.",
      },
      {
        title: "Ejemplo ilustrativo — Impago en La Verneda",
        body: "Dos meses de retraso. Protocolo de cobro con cronología visible en panel del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Entrega de llaves tras salida en Poblenou",
        body: "Livendia coordina inventario, estado del piso y baja de suministros; propietario recibe informe fotográfico sin desplazarse.",
      },
    ],
    nearbyLandmarks: [
      "22@ / Districte de la innovació",
      "Parc del Clot",
      "Plaça de les Glòries",
      "Diagonal Mar i el Front Marítim",
      "Rambla del Poblenou",
      "Estació Clot-Aragó",
    ],
  },

  "barcelona/horta-guinardo": {
    rentPricePerSqm:
      "Distrito Horta-Guinardó: 21,34 €/m² y renta media de publicación ~1.687 €/mes (Brains Real Estate, Q2 2026). La Clota y Horta centre suelen superar El Carmel y La Teixonera en oferta Idealista (2025). Vall d'Hebron muestra demanda estable de personal sanitario.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Horta-Guinardó, 2025.",
    dominantHousingType:
      "Bloques de los 60–70 en El Carmel, La Teixonera y Guinardó (55–75 m²) en pendiente, con humedades por filtración frecuentes. Horta centre y La Clota: pisos de 70–95 m² con familias estables. Montbau y Can Baró: mezcla de chalet adosado y bloques con vistas.",
    tenantProfile: [
      "Familias en contrato LAU largo en Horta centre y La Clota",
      "Personal sanitario y investigadores del campus Vall d'Hebron",
      "Parejas jóvenes en pisos compactos en El Carmel",
      "Inquilinos estables en Guinardó con expectativa de mantenimiento profesional",
    ],
    localRegulatoryNote:
      "Horta-Guinardó está en zona tensionada catalana. IRAV e Incasòl aplican en renovaciones; la heterogeneidad de €/m² entre La Clota y El Carmel obliga a contrastar referencia por barrio, no solo media de distrito.",
    marketContext:
      "Horta-Guinardó es un distrito residencial con fuerte componente familiar en Horta centre y La Clota, y parque en pendiente en El Carmel/La Teixonera donde las incidencias de fontanería y fachada son más costosas en tiempo que en distritos planos. Brains Real Estate (Q2 2026) lo sitúa en 21,34 €/m² de publicación. Vall d'Hebron añade demanda de perfiles sanitarios con turnos rotativos — si el propietario no vive en el distrito, las urgencias a horas atípicas acaban en su móvil sin gestor. Livendia desde Les Corts canaliza cobro, IRAV e industriales habituados en ladera.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Filtración en fachada en El Carmel",
        body: "Tras lluvias persistentes aparece humedad en dormitorio. Livendia manda perito, determina origen comunitario, presiona a administrador de fincas y presenta presupuesto al propietario antes de obra. Inquilino recibe plazos por gestor.",
      },
      {
        title: "Ejemplo ilustrativo — Caldera comunitaria en Horta centre",
        body: "Fallo de calefacción en diciembre. Livendia coordina urgencia con comunidad y mantenedor, informa al inquilino familia y avisa al propietario solo si hay derrama individual.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV en La Clota",
        body: "Propietario quiere alinear renta con portal. Livendia calcula tope legal, explica diferencia baremo vs Idealista y envía propuesta válida al inquilino.",
      },
      {
        title: "Ejemplo ilustrativo — Incidencia nocturna cerca Vall d'Hebron",
        body: "Inquilino sanitario reporta avería elécnica tras turno. Livendia abre incidencia, programa visita en franja acordada y reporta al propietario con fotos — sin llamada al móvil personal a las 23 h.",
      },
      {
        title: "Ejemplo ilustrativo — Impago en La Teixonera",
        body: "Dos meses de retraso. Protocolo día 3 → mediación → aviso al propietario con cronología en panel.",
      },
    ],
    nearbyLandmarks: [
      "Parc del Laberint d'Horta",
      "Hospital Vall d'Hebron",
      "Metro Horta (L5)",
      "El Carmel / Parc Güell (límite)",
      "Guinardó",
      "Ronda de Dalt (acceso)",
    ],
  },

  "barcelona/sant-andreu": {
    rentPricePerSqm:
      "Distrito Sant Andreu: 21,88 €/m² y renta media de publicación ~1.734 €/mes (Brains Real Estate, Q2 2026). Navas y La Sagrera suelen superar el centre tradicional en oferta Idealista (2025). Bon Pastor (límite) más contenido.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Sant Andreu, 2025.",
    dominantHousingType:
      "Fincas de 65–85 m² en Sant Andreu centre cerca del mercado. Bloques rehabilitados y obra nueva en La Sagrera y Navas (70–95 m²). Trinitat Vella (límite): parque envejecido similar a Nou Barris. La Maquinista: mix reformas recientes.",
    tenantProfile: [
      "Familias estables en Sant Andreu centre",
      "Jóvenes profesionales en La Sagrera y Navas",
      "Inquilinos en pisos compartidos con rotación moderada",
      "Familias que priorizan metro L1/L5 frente a vivir en Eixample",
    ],
    localRegulatoryNote:
      "Sant Andreu está en zona tensionada. IRAV en renovaciones; especial atención a contratos tras reforma donde el propietario intenta recuperar inversión — la subida debe encajar en baremo legal.",
    marketContext:
      "Sant Andreu combina tradición de barrio (mercado, tejido comercial) con transformación en La Sagrera y Navas por obra pública y nueva vivienda. Brains Real Estate (Q2 2026) cifra el distrito en 21,88 €/m². La demanda busca más metros por euro que en Eixample o Sarrià. Propietarios fuera del distrito enfrentan mezcla de peticiones administrativas (empadronamiento) e incidencias de convivencia en pisos compartidos. Livendia unifica canal, cobro e IRAV desde Les Corts.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Queja de convivencia en Sant Andreu centre",
        body: "Vecinos reportan ruido en piso de tres habitaciones. Livendia revisa contrato, habla con arrendatarios, propone medidas y entrega acta al propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Ascensor en La Sagrera",
        body: "Avería prolongada en edificio rehabilitado. Livendia presiona mantenedor y comunidad, informa plazos al inquilino y avisa al propietario si hay coste individual.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación tras reforma en Navas",
        body: "Propietario quiere subir renta post-reforma. Livendia calcula IRAV, separa mejora voluntaria de obligación legal y comunica propuesta válida.",
      },
      {
        title: "Ejemplo ilustrativo — Certificado de empadronamiento",
        body: "Inquilino familia solicita documento para escolarizar. Livendia coordina firma con propietario residente en otra provincia y entrega copia — sin llamadas en horario laboral.",
      },
      {
        title: "Ejemplo ilustrativo — Retraso de renta en Trinitat Vella (límite)",
        body: "Transferencia día 8. Protocolo de cobro activado desde día 3; propietario ve estado en panel sin escribir al inquilino.",
      },
    ],
    nearbyLandmarks: [
      "Mercat de Sant Andreu",
      "Estació de La Sagrera (AVE / metro)",
      "Navas",
      "La Maquinista",
      "Pg. Fabra i Puig",
      "Metro Sant Andreu (L1)",
    ],
  },

  "barcelona/sarria-sant-gervasi": {
    rentPricePerSqm:
      "Distrito Sarrià-Sant Gervasi: 28,76 €/m² y renta media de publicación ~3.456 €/mes (Brains Real Estate, Q2 2026). Les Tres Torres y Bonanova suelen superar 30 €/m² en oferta Idealista (2025). Putxet i Farró y Sarrià centre se sitúan en la franja alta del distrito; Vallvidrera (límite) tiene ticket por superficie en chalets.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Sarrià-Sant Gervasi, 2025.",
    dominantHousingType:
      "Fincas regias del ensanche alto en Tres Torres y Bonanova (100–180 m², techos altos, ascensor antiguo o portería). Bloques señoriales en Sant Gervasi – Galvany y Putxet (80–110 m²). Sarrià centre: casas entre medianeras y pisos de carácter. Chalets y adosados en Vallvidrera con cubiertas y jardín.",
    tenantProfile: [
      "Familias con hijos en colegios internacionales o concertados del eje Sarrià–Bonanova",
      "Ejecutivos y expatriados en traslado 12–36 meses",
      "Profesionales sanitarios y académicos del entorno Diagonal–Zona Universitària",
      "Inquilinos estables LAU en pisos >90 m² con expectativa de servicio premium",
    ],
    localRegulatoryNote:
      "Sarrià-Sant Gervasi está en zona tensionada catalana. IRAV en renovaciones, Incasòl en altas y especial cuidado en contratos de larga duración con rentas >2.000 €/mes: un error de cálculo expone a reclamación del inquilino y costes de reversión.",
    marketContext:
      "Sarrià-Sant Gervasi encabeza el ranking de €/m² de Barcelona capital junto al Eixample. Brains Real Estate (Q2 2026) lo sitúa en 28,76 €/m² de publicación (+5,2 % interanual), con esfuerzo de alquiler elevado pero demanda estable de perfiles de alto poder adquisitivo. La gestión no es encontrar inquilino — es sostener la relación contractual sin desgaste: ascensores de finca regia, derramas sorpresa, renovaciones con IRAV cuando el inquilino conoce la normativa, y expectativa de respuesta inmediata. Propietarios fuera del distrito o en el extranjero delegan en Livendia desde Les Corts el canal único, el cobro el día 1 y la mediación con portería y comunidad.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Derrama de ascensor en finca de Les Tres Torres",
        body: "La comunidad convoca derrama urgente por motor de ascensor. Livendia recibe el acta, verifica cuota del propietario, explica plazos al inquilino si afecta al uso del piso y solicita autorización de pago al propietario con desglose — sin cadenas de email con el presidente y el arrendatario a la vez.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV con renta de 2.800 €/mes en Bonanova",
        body: "Tres meses antes del vencimiento, Livendia calcula incremento máximo legal, prepara propuesta documentada y canaliza conversación con inquilino. El propietario aprueba resumen de una página; si hay discrepancia, el gestor negocia dentro del marco legal sin exponer el móvil personal del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Avería de climatización en Putxet",
        body: "Inquilino expatriado reporta fallo de aire acondicionado en julio. Livendia envía técnico en 24 h laborables, contrasta presupuesto con segundo proveedor si supera umbral acordado y ejecuta reparación tras OK del propietario por panel.",
      },
      {
        title: "Ejemplo ilustrativo — Conflicto con portería por paquetería",
        body: "Portería limita entregas; inquilino presiona al propietario. Livendia media con portería y arrendatario, revisa reglamento de régimen interior y propone solución operativa (horarios, buzón). El propietario recibe acta, no veinte llamadas.",
      },
      {
        title: "Ejemplo ilustrativo — Retraso de transferencia internacional",
        body: "Inquilino paga desde cuenta extranjera el día 10. Livendia activa protocolo desde el día 3, solicita justificante SWIFT y confirma abono al propietario en panel cuando se acredita — sin persecución manual de la renta.",
      },
    ],
    nearbyLandmarks: [
      "FGC Sarrià / Reina Elisenda",
      "Monestir de Pedralbes (límite)",
      "Avinguda Diagonal (tramo alto)",
      "Tibidabo / Tramvia Blau (límite)",
      "Putxet i Farró",
      "Bonanova",
    ],
  },

  "barcelona/nou-barris": {
    rentPricePerSqm:
      "Distrito Nou Barris: 18,42 €/m² y renta media de publicación ~1.456 €/mes (Brains Real Estate, Q2 2026). Verdum y Porta suelen superar la media; Torre Baró i Vallbona más contenidos en Idealista (2025). Ciutat Meridiana y Trinitat Vella muestran oferta compacta (55–70 m²).",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Nou Barris, 2025.",
    dominantHousingType:
      "Macrobloques y edificios de los 60–80 en Verdum, Roquetes y Trinitat Vella (55–75 m²), muchos con ascensor antiguo y calderas comunitarias. Ciutat Meridiana: parque envejecido con rehabilitaciones parciales. Torre Baró: edificios en pendiente con humedades por filtración frecuentes.",
    tenantProfile: [
      "Familias estables en contratos LAU largos en Verdum y Roquetes",
      "Trabajadores con empleo en eje Meridiana o polígonos del Besòs",
      "Parejas jóvenes en pisos compactos de Porta y Vilaplana",
      "Convivencias compartidas puntuales — requieren cláusulas claras de convivencia",
    ],
    localRegulatoryNote:
      "Nou Barris está en zona tensionada aunque la oferta publicada sea más baja que en Eixample. IRAV e Incasòl aplican igual; la trampa es proponer subidas copiando precios de portal sin baremo — Livendia verifica referencia oficial antes de notificar al inquilino.",
    marketContext:
      "Nou Barris es el distrito con menor €/m² de publicación entre los grandes de Barcelona capital (Brains Real Estate, Q2 2026: 18,42 €/m²), lo que atrae inversión de propietarios que buscan rentabilidad por volumen. El parque envejecido implica incidencias recurrentes: humedades, ascensores parados semanas, calderas comunitarias sin mantenimiento. Muchos propietarios no viven en el distrito — viven en otro municipio o heredaron el piso — y el inquilino acaba usando su WhatsApp personal como línea de mantenimiento. Livendia desde Les Corts establece canal único, protocolo de cobro idéntico al de distritos premium y red de industriales en Verdum/Roquetes con tiempos de respuesta acordados.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Humedad capilar en planta baja de Roquetes",
        body: "Manchas en salón tras lluvias. Livendia manda perito, distingue origen comunitario (fachada) vs interior, abre conversación con administrador de fincas y presenta presupuesto al propietario antes de obra. Inquilino recibe plazos por gestor, no por propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Ascensor parado tres semanas en Trinitat Vella",
        body: "Inquilino en planta 6 sin ascensor. Livendia presiona a comunidad y mantenedor con registro diario, informa al arrendatario de previsión y avisa al propietario solo si hay derrama individual.",
      },
      {
        title: "Ejemplo ilustrativo — Impago reiterado en Verdum",
        body: "Dos meses de retraso. Protocolo día 3 → mediación → aviso formal. Propietario ve cronología en panel; Livendia no comparte teléfono del propietario con el inquilino en la fase de cobro.",
      },
      {
        title: "Ejemplo ilustrativo — Queja de ruido entre vecinos en Porta",
        body: "Comunidad alerta por actividad nocturna. Livendia revisa contrato, habla con inquilino, propone medidas y documenta acta para el propietario sin meterlo en el chat de la finca.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación con IRAV en Ciutat Meridiana",
        body: "Propietario quiere alinear renta con portal. Livendia calcula tope legal, explica diferencia entre oferta y baremo, y envía propuesta válida al inquilino — evitando reclamación posterior por subida indebida.",
      },
    ],
    nearbyLandmarks: [
      "Metro Verdum (L3)",
      "Trinitat Vella (L4)",
      "Ciutat Meridiana (L11)",
      "Avinguda Meridiana",
      "Parc de la Guineueta",
      "Torre Baró",
    ],
  },

  "barcelona/ciutat-vella": {
    rentPricePerSqm:
      "Distrito Ciutat Vella: 22,18 €/m² y renta media de publicación ~1.892 €/mes (Brains Real Estate, Q2 2026). El Born y Barceloneta suelen superar El Raval en oferta Idealista (2025). Barri Gòtic: alta heterogeneidad por planta baja vs áticos reformados.",
    rentPriceSourceNote:
      "Brains Real Estate, informe alquiler Barcelona Q2 2026; Idealista, oferta por barrio Ciutat Vella, 2025.",
    dominantHousingType:
      "Fincas centenarias estrechas en Gòtic y Born (45–85 m²), muchas sin ascensor, humedades en planta baja. El Raval: bloques del s. XX y rehabilitaciones con convivencias compartidas. Barceloneta: pisos pequeños orientados al mar, ventilación salina y normativa de usos vigilada.",
    tenantProfile: [
      "Estudiantes y jóvenes profesionales en El Raval y Gòtic",
      "Familias en El Born en pisos rehabilitados",
      "Estancias medias y perfiles internacionales en Barceloneta",
      "Inquilinos LAU estables en fincas reformadas del Gòtic",
    ],
    localRegulatoryNote:
      "Ciutat Vella está en zona tensionada y bajo escrutinio de uso de vivienda (LAU vs temporada vs turístico). Contratos mal encuadrados exponen a sanciones; Livendia revisa coherencia de uso declarado y canaliza incidencias sin mezclar usos incompatibles.",
    marketContext:
      "Ciutat Vella concentra el centro histórico turístico y la mayor presión reputacional para propietarios: ruido, convivencia, comunidades pequeñas muy activas. Brains Real Estate (Q2 2026) sitúa el distrito en 22,18 €/m² — por debajo del Eixample pero con coste de gestión más alto en tiempo (accesos estrechos, fincas patrimoniales, mediación). La brecha entre precio de portal y contrato registrado sigue marcada por IRAV. Livendia filtra contacto diario, documenta mediaciones y aplica cobro profesional para que el propietario no sea el 'soporte técnico' del piso en calles de ocio.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Queja de terraza en El Born",
        body: "Vecinos reportan ruido nocturno en terraza. Livendia verifica cláusulas de uso, habla con inquilino, propone horario y deja acta al propietario — sin reunión presencial en el barrio.",
      },
      {
        title: "Ejemplo ilustrativo — Humedad en planta baja del Gòtic",
        body: "Filtración en dormitorio en edificio del s. XVIII. Livendia coordina perito especializado en patrimonio, comunidad y obra interior con permisos mínimos; propietario autoriza presupuesto online.",
      },
      {
        title: "Ejemplo ilustrativo — Confusión LAU vs temporada en Barceloneta",
        body: "Inquilino solicita prórroga informal. Livendia revisa contrato vigente, explica marco legal al propietario y redacta comunicación formal al arrendatario — evitando prórroga tácita incompatible.",
      },
      {
        title: "Ejemplo ilustrativo — Convivencia tensa en piso compartido del Raval",
        body: "Dos habitaciones, conflicto por limpieza y visitas. Livendia aplica protocolo de convivencia del contrato, separa comunicaciones y propone medidas; propietario recibe informe sin unirse al grupo de WhatsApp.",
      },
      {
        title: "Ejemplo ilustrativo — Cobro retrasado con inquilino en efectivo informal",
        body: "Inquilino propone pago en mano. Livendia redirige a transferencia trazable, registra abono en panel y confirma al propietario — manteniendo trazabilidad fiscal y contractual.",
      },
    ],
    nearbyLandmarks: [
      "La Rambla (límite)",
      "El Born / Passeig del Born",
      "Barceloneta platja",
      "MACBA / El Raval",
      "Catedral de Barcelona (Gòtic)",
      "Port Vell",
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
      {
        title: "Ejemplo ilustrativo — Fontanería comunitaria en Antiga Esquerra",
        body: "Rotura en bajante comunitaria afecta a dos pisos. Livendia coordina urgencia con comunidad, informa plazos al inquilino y presenta al propietario solo la parte de derrama o reparación interior que deba autorizar.",
      },
      {
        title: "Ejemplo ilustrativo — Subarriendo no declarado en Fort Pienc",
        body: "Comunidad sospecha de tercera persona en el piso. Livendia revisa contrato, contacta inquilino, documenta respuesta y escala al propietario con opciones legales — sin confrontación directa del propietario en portal.",
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
      {
        title: "Ejemplo ilustrativo — Piscina comunitaria averiada en urbanización de Mira-sol",
        body: "Inquilino exige plazo de reparación. Livendia contacta administrador de la urbanización, registra incidencia y reporta al propietario si hay cuota extraordinaria — sin llamadas del inquilino al móvil del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Jardín y riego en chalet de Valldoreix",
        body: "Fallo de programador de riego en verano. Livendia envía jardinero acordado, contrasta presupuesto y ejecuta tras OK del propietario residente en otra provincia.",
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

  esplugues: {
    rentPricePerSqm:
      "Municipio Esplugues: oferta agregada habitualmente 15–18 €/m² en pisos (portales locales y agregadores 2025–2026), por debajo de Barcelona capital (~22 €/m², Idealista abril 2026). Can Vidalet y Centre suelen marcar la banda alta del municipio; Finestrelles y Les Planes varían según tipo (bloque vs adosado).",
    rentPriceSourceNote:
      "Idealista agregados Baix Llobregat, 2025–2026; comparativa Barcelona capital Idealista abril 2026.",
    dominantHousingType:
      "Bloques de los 70–90 en Can Vidalet y Centre (70–95 m²) con ascensores y calderas comunitarias frecuentes. Finestrelles y Les Planes mezclan casas adosadas en ladera y pisos con accesos en cuesta. Can Clota combina vivienda unifamiliar y bloques compactos cerca del eje hospitalario.",
    tenantProfile: [
      "Familias que trabajan en Barcelona y priorizan metro L5",
      "Profesionales del eje Diagonal y Zona Universitària en desplazamiento corto",
      "Inquilinos estables en Centre y Can Vidalet con contratos LAU largos",
      "Parejas en pisos reformados de Finestrelles",
    ],
    localRegulatoryNote:
      "Esplugues está en zona tensionada catalana (271 municipios, MIVAU 2024–2027). Renovaciones con IRAV e Incasòl obligatorio; contrastar baremo estatal antes de copiar €/m² de portales.",
    marketContext:
      "Esplugues equilibra precio de alquiler más contenido que Barcelona capital y excelente acceso por metro L5 y Diagonal. La demanda es mayoritariamente residencial estable — familias y profesionales — con menos rotación turística que distritos céntricos. El parque envejecido implica incidencias recurrentes en ascensores en ladera, calderas y humedades en sótanos. Para propietarios fuera del municipio, Livendia desde Les Corts (~15–20 min) asume cobro, mediación e industriales del Baix Llobregat.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Ascensor en ladera en Finestrelles",
        body: "El inquilino avisa de avería en ascensor de edificio en cuesta. Livendia abre incidencia con comunidad y mantenedor, hace seguimiento diario y reporta al propietario solo si hay derrama o gasto individual que deba autorizar.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV en Can Vidalet",
        body: "Propietario quiere alinear renta con oferta de portal. Livendia calcula tope legal, explica diferencia con baremo y envía propuesta documentada al inquilino — el propietario firma resumen de una página.",
      },
      {
        title: "Ejemplo ilustrativo — Impago reiterado en Centre",
        body: "Dos meses de retraso en transferencia. Protocolo de cobro desde el día 3, mediación formal y aviso al propietario solo si no hay justificante antes del día 7.",
      },
      {
        title: "Ejemplo ilustrativo — Filtración en fachada comunitaria",
        body: "Humedad tras lluvias en dormitorio. Livendia manda perito, determina origen comunitario o interior y coordina con seguro-comunidad antes de obra.",
      },
      {
        title: "Ejemplo ilustrativo — Rotación en Les Planes",
        body: "Fin de contrato en adosado: Livendia coordina entrega de llaves, inventario, baja de suministros y depósito Incasòl — sin citas cruzadas entre propietario e inquilino.",
      },
    ],
    nearbyLandmarks: [
      "Metro Can Vidalet / Esplugues (L5)",
      "Hospital Sant Joan Despí (límite)",
      "Finestrelles",
      "Les Planes",
      "Can Clota",
      "Diagonal / Zona Universitària (cercanía)",
    ],
  },

  "sant-joan-despi": {
    rentPricePerSqm:
      "Municipio Sant Joan Despí: rango habitual 13–17 €/m² en pisos según agregadores del Baix Llobregat (2025–2026). Centre y Torreblanca suelen superar Les Fonts en oferta publicada; chalets y adosados marcan ticket distinto al €/m² de bloque.",
    rentPriceSourceNote:
      "Agregadores inmobiliarios Baix Llobregat, 2025–2026; comparativa Engel & Völkers municipios vecinos julio 2026.",
    dominantHousingType:
      "Bloques de los 80–00 en Centre y Torreblanca (75–100 m²) con comunidades activas. Les Fonts y Can Trabal mezclan casas adosadas y pisos en urbanizaciones. Parque en buen estado en zonas nuevas; ascensores y calderas siguen siendo foco de incidencias.",
    tenantProfile: [
      "Familias con perceptor en Barcelona o polígonos del Llobregat",
      "Inquilinos vinculados al TRAM T1/T2",
      "Contratos LAU estables en Centre",
      "Profesionales del Hospital Sant Joan Despí (límite)",
    ],
    localRegulatoryNote:
      "Sant Joan Despí está en zona tensionada catalana. IRAV en renovaciones; depósito Incasòl y comunicación formal antes de subida de renta.",
    marketContext:
      "Sant Joan Despí crece como alternativa residencial al corredor TRAM con alquiler más asequible que Barcelona y buena conexión a polígonos y capital. La demanda familiar favorece contratos largos, pero el propietario ausente sufre fricción en cobros e incidencias comunitarias. Livendia opera desde Les Corts con panel remoto y desplazamiento puntual si hace falta firma.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Caldera comunitaria en Torreblanca",
        body: "Falta de calefacción en invierno. Livendia presiona a comunidad y mantenedor, informa plazos al inquilino y avisa al propietario solo si hay derrama individual.",
      },
      {
        title: "Ejemplo ilustrativo — Certificado de empadronamiento",
        body: "Inquilino solicita documentación para escolarizar. Livendia verifica procedencia, coordina firma con propietario y entrega copia — sin llamadas en horario laboral.",
      },
      {
        title: "Ejemplo ilustrativo — Mediación por convivencia en Centre",
        body: "Queja de vecinos por ruido. Livendia documenta conversación con inquilino, propone medidas del contrato LAU y resume al propietario en acta — sin escalado innecesario.",
      },
      {
        title: "Ejemplo ilustrativo — Cambio de suministros tras rotación",
        body: "Alta de nuevo arrendatario: Livendia gestiona luz y agua, recoge lecturas y archiva justificantes en panel.",
      },
      {
        title: "Ejemplo ilustrativo — Impago con mediación TRAM",
        body: "Inquilino retrasa renta alegando desplazamiento laboral. Protocolo de cobro con plazos claros y aviso al propietario solo si persiste sin justificante.",
      },
    ],
    nearbyLandmarks: [
      "TRAM T1/T2 Sant Joan Despí",
      "Centre vila",
      "Torreblanca",
      "Les Fonts",
      "Can Trabal",
      "Hospital Sant Joan Despí",
    ],
  },

  "sant-adria": {
    rentPricePerSqm:
      "Municipio Sant Adrià: oferta en corredor Besòs habitualmente 12–17 €/m² en pisos (agregadores 2025–2026), por debajo de Barcelona capital. Centre y Parc del Besòs suelen superar La Mina en ticket según estado y metro L2.",
    rentPriceSourceNote:
      "Agregadores corredor Besòs 2025–2026; comparativa Badalona Idealista 2025 y SERPAVI 2024.",
    dominantHousingType:
      "Bloques de los 60–80 en Centre, La Mina y Parc del Besòs (55–75 m²) con ascensores envejecidos. Entorno Fòrum mezcla vivienda más reciente. Parque compacto en La Mina con humedades y calderas frecuentes.",
    tenantProfile: [
      "Familias que trabajan en Barcelona con metro L2",
      "Trabajadores del sector logístico e industrial del Besòs",
      "Inquilinos jóvenes cerca de Fòrum y Parc del Besòs",
      "Contratos estables en Centre",
    ],
    localRegulatoryNote:
      "Sant Adrià está en zona tensionada catalana. Misma lógica IRAV/Incasòl que Badalona y Barcelona; brecha oferta portal vs contrato registrado exige cálculo antes de renovar.",
    marketContext:
      "Sant Adrià comparte dinámica con Badalona: alquiler asequible, metro directo a Barcelona y parque envejecido. Propietarios inversores fuera del municipio necesitan canal único para cobro e incidencias de humedad y ascensor. Livendia desde Les Corts (~20–25 min L2) documenta todo en panel.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Humedad en La Mina",
        body: "Filtración en salón tras temporal. Livendia manda perito, abre conversación con comunidad si origen comunitario y mantiene al propietario informado con fotos y presupuesto.",
      },
      {
        title: "Ejemplo ilustrativo — Impago en Parc del Besòs",
        body: "Retraso reiterado de transferencia. Protocolo de cobro desde el día 3 con mediación formal documentada.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV en renovación Centre",
        body: "Propietario propone subida según portal. Livendia calcula tope legal y envía propuesta válida al inquilino.",
      },
      {
        title: "Ejemplo ilustrativo — Ascensor en bloque de los 70",
        body: "Avería prolongada. Livendia coordina mantenedor y comunidad; propietario autoriza gasto individual solo si procede.",
      },
      {
        title: "Ejemplo ilustrativo — Queja de vecinos por convivencia",
        body: "Mediación Livendia con inquilino según contrato LAU; propietario recibe acta sin diez llamadas directas.",
      },
    ],
    nearbyLandmarks: [
      "Metro Artigues / Sant Adrià (L2)",
      "Parc del Besòs",
      "La Mina",
      "Fòrum (límite Barcelona)",
      "Riu Besòs",
      "Centre vila",
    ],
  },

  castelldefels: {
    rentPricePerSqm:
      "Municipio Castelldefels: oferta habitual 14–19 €/m² en pisos (agregadores Garraf/Baix Llobregat 2025–2026). Platja y Bellamar suelen marcar banda alta; Centre más estable. Chalets y adosados tienen ticket mensual distinto al cálculo por m² de bloque.",
    rentPriceSourceNote:
      "Agregadores Garraf y Baix Llobregat, 2025–2026; Rodalies R2 acceso Barcelona.",
    dominantHousingType:
      "Chalets adosados y casas en Bellamar, Montmar y Can Roca. Bloques de los 80–00 en Centre y cerca de platja (70–110 m²). Exposición litoral implica más incidencias de humedad, cerramientos y climatización.",
    tenantProfile: [
      "Familias residenciales estables en Centre y Montmar",
      "Profesionales con Rodalies R2 a Barcelona",
      "Inquilinos en viviendas cerca de platja con estacionalidad moderada",
      "Propietarios-inversores con segunda residencia en la costa",
    ],
    localRegulatoryNote:
      "Castelldefels está en zona tensionada catalana del Baix Llobregat. IRAV en renovaciones; distinguir contrato LAU largo de usos turísticos regulados por normativa aparte.",
    marketContext:
      "Castelldefels combina litoral, Rodalies R2 y parque mixto (chalets + bloques). La gestión remota es crítica para propietarios que no están en temporada en la costa: averías de climatización, temporales y renovaciones con IRAV. Livendia desde Les Corts coordina técnicos del Garraf y centraliza cobro e incidencias.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Avería de climatización en Bellamar",
        body: "Verano sin aire acondicionado. Livendia abre incidencia urgente, coordina técnico y reporta presupuesto al propietario para autorización — inquilino no contacta móvil personal.",
      },
      {
        title: "Ejemplo ilustrativo — Humedad tras temporal en platja",
        body: "Filtración en terraza o fachada. Perito, origen comunitario vs interior, conversación con seguro-comunidad si aplica.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV en Centre",
        body: "Cálculo de incremento máximo legal antes de enviar propuesta al inquilino en municipio tensionado.",
      },
      {
        title: "Ejemplo ilustrativo — Chalet adosado en Montmar",
        body: "Incidencia de persiana o cerramiento exterior. Livendia solicita presupuestos comparados y presenta opciones al propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Rotación post-contrato Rodalies",
        body: "Entrega de llaves, inventario y suministros en piso cerca estación — propietario en Barcelona capital sin desplazamiento semanal.",
      },
    ],
    nearbyLandmarks: [
      "Platja de Castelldefels",
      "Bellamar",
      "Estació Castelldefels (Rodalies R2)",
      "Centre vila",
      "Montmar",
      "Can Roca",
    ],
  },

  "sant-boi": {
    rentPricePerSqm:
      "Municipio Sant Boi: rango habitual 12–16 €/m² en pisos según agregadores Baix Llobregat (2025–2026), por debajo de Barcelona capital. Centre y Plaça Catalunya suelen marcar banda alta; Marianao y Camps Blancs más asequibles.",
    rentPriceSourceNote: "Agregadores Baix Llobregat 2025–2026; comparativa municipios vecinos Cornellà/Esplugues.",
    dominantHousingType:
      "Bloques de los 70–90 en Centre y Marianao (60–85 m²) con ascensores y calderas comunitarias. Camps Blancs con parque compacto. Comunidades muy activas en edificios envejecidos.",
    tenantProfile: [
      "Familias con perceptor en Barcelona o polígonos del Llobregat",
      "Inquilinos estables en Centre con contratos LAU largos",
      "Trabajadores del sector sanitario y servicios del municipio",
      "Parejas en pisos reformados cerca de Plaça Catalunya",
    ],
    localRegulatoryNote:
      "Sant Boi está en zona tensionada catalana. IRAV e Incasòl en renovaciones; no copiar €/m² de portal sin baremo legal.",
    marketContext:
      "Sant Boi es municipio del Baix Llobregat con demanda familiar estable y alquiler más contenido que Barcelona. Propietarios ausentes necesitan canal único para cobro e incidencias de ascensor y humedades. Livendia desde Les Corts (~20–25 min) documenta todo en panel.",
    operationalCases: [
      { title: "Ejemplo ilustrativo — Impago en Marianao", body: "Retraso reiterado. Protocolo de cobro desde el día 3 con mediación formal antes de escalar al propietario." },
      { title: "Ejemplo ilustrativo — IRAV en Centre", body: "Propuesta de subida según portal. Livendia calcula tope legal y envía documentación al inquilino." },
      { title: "Ejemplo ilustrativo — Caldera comunitaria", body: "Falta de calefacción en invierno. Coordinación con comunidad y mantenedor; aviso al propietario solo si hay derrama individual." },
      { title: "Ejemplo ilustrativo — Humedad en sótano", body: "Perito, origen comunitario vs interior, presupuesto antes de obra." },
      { title: "Ejemplo ilustrativo — Rotación en Camps Blancs", body: "Entrega de llaves, suministros e Incasòl sin citas cruzadas propietario-inquilino." },
    ],
    nearbyLandmarks: ["Plaça Catalunya Sant Boi", "Marianao", "Camps Blancs", "Hospital Sant Boi (límite)", "Baix Llobregat", "Centre vila"],
  },

  gava: {
    rentPricePerSqm:
      "Municipio Gavà: oferta habitual 14–18 €/m² en pisos (Garraf/Baix Llobregat 2025–2026). Gavà Mar y Centre suelen superar barrios interiores; chalets marcan ticket distinto al €/m² de bloque.",
    rentPriceSourceNote: "Agregadores Garraf 2025–2026; TRAM Baix Llobregat.",
    dominantHousingType:
      "Bloques en Centre y Can Ros (70–95 m²). Gavà Mar: vivienda cerca del litoral con más climatización y humedad. Casas adosadas en Torre Lluch y urbanizaciones TRAM.",
    tenantProfile: [
      "Familias residenciales en Centre",
      "Profesionales con TRAM a Barcelona",
      "Inquilinos en Gavà Mar con estacionalidad moderada",
      "Inversores con piso en costa y residencia en capital",
    ],
    localRegulatoryNote:
      "Gavà está en zona tensionada catalana. IRAV en renovaciones; distinguir LAU largo de usos turísticos regulados aparte.",
    marketContext:
      "Gavà combina TRAM, litoral y parque mixto. Gestión remota crítica para propietarios en Barcelona: climatización, temporales y renovaciones IRAV. Livendia coordina técnicos del Garraf desde Les Corts.",
    operationalCases: [
      { title: "Ejemplo ilustrativo — Climatización en Gavà Mar", body: "Avería en verano. Técnico urgente, presupuesto al propietario; inquilino no contacta móvil personal." },
      { title: "Ejemplo ilustrativo — Humedad tras temporal", body: "Filtración en terraza. Perito y conversación con comunidad si origen comunitario." },
      { title: "Ejemplo ilustrativo — IRAV en Centre", body: "Cálculo de incremento máximo antes de propuesta al inquilino." },
      { title: "Ejemplo ilustrativo — Queja de vecinos", body: "Mediación Livendia según contrato LAU; acta al propietario." },
      { title: "Ejemplo ilustrativo — Suministros post-rotación", body: "Alta/baja luz y agua con lecturas archivadas en panel." },
    ],
    nearbyLandmarks: ["Gavà Mar", "Centre vila", "TRAM Gavà", "Can Ros", "Torre Lluch", "C-32 / Garraf"],
  },

  "mollet-del-valles": {
    rentPricePerSqm:
      "Municipio Mollet: rango habitual 13–17 €/m² en pisos (Vallès 2025–2026), por debajo de Sant Cugat (~17 €/m² Fotocasa agosto 2026). Centre y estación RENFE suelen marcar banda alta del municipio.",
    rentPriceSourceNote: "Agregadores Vallès 2025–2026; comparativa Sant Cugat Fotocasa agosto 2026.",
    dominantHousingType:
      "Bloques de los 80–00 en Centre y entorno estación (75–95 m²). Can Borrell con promociones recientes. Gallecs mezcla vivienda unifamiliar y bloques con comunidades activas.",
    tenantProfile: [
      "Familias estables en Centre con contratos LAU largos",
      "Profesionales con RENFE a Barcelona",
      "Inquilinos en Can Borrell en promociones recientes",
      "Inversores con uno o dos pisos en el Vallès",
    ],
    localRegulatoryNote:
      "Mollet del Vallès está en zona tensionada catalana. IRAV e Incasòl obligatorios en renovaciones.",
    marketContext:
      "Mollet es alternativa asequible al Vallès con buena RENFE. Demanda familiar favorece contratos largos; fricción en cobros e incidencias de ascensor sin gestor local. Livendia opera remoto con panel desde Les Corts.",
    operationalCases: [
      { title: "Ejemplo ilustrativo — Ascensor en Centre", body: "Avería prolongada. Seguimiento diario con comunidad; autorización de gasto individual si procede." },
      { title: "Ejemplo ilustrativo — Renovación IRAV", body: "Propuesta documentada al inquilino tras cálculo legal." },
      { title: "Ejemplo ilustrativo — Impago puntual", body: "Mediación antes de informar al propietario de escalado legal." },
      { title: "Ejemplo ilustrativo — Certificado empadronamiento", body: "Coordinación de firma y entrega al arrendatario sin interrumpir jornada del propietario." },
      { title: "Ejemplo ilustrativo — Incidencia en Can Borrell", body: "Fontanería en piso recién reformado. Presupuestos comparados presentados al propietario." },
    ],
    nearbyLandmarks: ["Estació Mollet-Sant Fost", "Centre Mollet", "Can Borrell", "Gallecs", "Plaça Catalunya Mollet", "Vallès Oriental (límite)"],
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
      {
        title: "Ejemplo ilustrativo — Calderas comunitarias en bloque de Montigalà",
        body: "Fallo de caldera afecta a varias viviendas en invierno. Livendia presiona a comunidad y mantenedor, informa plazos al inquilino y avisa al propietario solo si hay derrama individual que deba autorizar.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV en Gorg con referencia de portal",
        body: "Propietario quiere alinear renta con Idealista. Livendia calcula tope legal en zona tensionada, explica brecha SERPAVI vs oferta y envía propuesta válida al inquilino — reduciendo riesgo de reclamación.",
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

  "barcelona/poblenou": {
    rentPricePerSqm:
      "Barrio Poblenou: oferta habitual 25–28 €/m² en pisos reformados (Idealista/Properfy por barrio, 2025–2026), por encima de La Verneda o el Besòs en el mismo distrito Sant Martí (Brains Real Estate Q2 2026: 24,12 €/m² agregado distrito).",
    rentPriceSourceNote:
      "Idealista/Properfy por barrio Poblenou, 2025–2026; Brains Real Estate, Sant Martí Q2 2026.",
    dominantHousingType:
      "Bloques de los 60–80 reformados (70–95 m²) en el Parc i la Llacuna y Provençals; naves reconvertidas del 22@ con viviendas de planta abierta. Calderas comunitarias y climatización individual en edificios recientes.",
    tenantProfile: [
      "Profesionales tech y nómadas en el 22@",
      "Familias jóvenes en la Rambla del Poblenou",
      "Parejas en pisos reformados cerca de metro Llacuna / Bogatell",
      "Inquilinos estables LAU en bloques pre-olímpicos",
    ],
    localRegulatoryNote:
      "Poblenou está en zona tensionada catalana (271 municipios). IRAV e Incasòl en renovaciones; la oferta Idealista suele superar la renta registrada en contratos anteriores.",
    marketContext:
      "El Poblenou es el barrio de referencia del distrito 22@: demanda de perfiles cualificados, stock reformado y expectativa de respuesta rápida ante incidencias. La brecha entre €/m² de portal y contratos con topes legales obliga a calcular IRAV antes de cada renovación. Propietarios no residentes delegan para evitar mediación directa con inquilinos exigentes y comunidades activas en bloques del Llacuna.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Climatización en piso 22@",
        body: "Avería en verano. Livendia coordina técnico, presupuesto al propietario e informa plazos al inquilino sin WhatsApp cruzado.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV en Rambla del Poblenou",
        body: "Propietario compara con Idealista 27 €/m². Livendia calcula tope legal y envía propuesta válida.",
      },
      {
        title: "Ejemplo ilustrativo — Queja de ruido en convivencia",
        body: "Mediación documentada según contrato LAU; acta al propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Rotación post-contrato",
        body: "Entrega llaves, suministros e Incasòl sin citas cruzadas.",
      },
      {
        title: "Ejemplo ilustrativo — Impago día 5",
        body: "Protocolo de cobro antes de escalar al propietario.",
      },
    ],
    nearbyLandmarks: [
      "Rambla del Poblenou",
      "22@ Barcelona",
      "Metro Bogatell / Llacuna",
      "Disseny Hub Barcelona",
      "Parc Central de Poblenou",
      "Platja de la Nova Icària (límite)",
    ],
  },

  "barcelona/pedralbes": {
    rentPricePerSqm:
      "Pedralbes: ~23 €/m² en oferta (Fotocasa, agosto 2026). Distrito Les Corts agregado: 24,90 €/m² (Brains Real Estate Q2 2026). Tickets mensuales altos por superficie (120–200 m²).",
    rentPriceSourceNote:
      "Fotocasa Pedralbes, agosto 2026; Brains Real Estate Les Corts Q2 2026.",
    dominantHousingType:
      "Pisos señoriales y chalets adosados en calles residenciales; bloques premium con portería en Diagonal. Ascensores y climatización individual de gama alta.",
    tenantProfile: [
      "Familias con hijos en colegios del eje Pedralbes–Maternitat",
      "Expatriados e IESE / ESADE",
      "Personal médico del Hospital Clínic",
      "Ejecutivos en traslado temporal LAU",
    ],
    localRegulatoryNote:
      "Pedralbes (Les Corts) en zona tensionada. IRAV obligatorio; gran tenedor puede condicionar renovación.",
    marketContext:
      "Pedralbes combina máxima renta por m² del distrito Les Corts con inquilinos que exigen mantenimiento premium. Livendia opera desde Mejía Lequerica 44 en el mismo distrito: desplazamientos cortos si hace falta presencia, panel online para propietarios internacionales.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Avería climatización Pedralbes",
        body: "Técnico autorizado mismo día laborable; propietario autoriza gasto por email.",
      },
      {
        title: "Ejemplo ilustrativo — Renovación IRAV",
        body: "Documentación completa antes de firma del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Portería y acceso",
        body: "Livendia coordina llaves y visitas técnicas con portería.",
      },
      {
        title: "Ejemplo ilustrativo — Certificado empadronamiento",
        body: "Coordinación de firma sin llamadas al móvil del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Conflicto comunidad",
        body: "Mediación con presidente y acta resumen.",
      },
    ],
    nearbyLandmarks: [
      "Avinguda Diagonal",
      "IESE Business School",
      "Hospital Clínic",
      "Real Club de Polo",
      "Monestir de Pedralbes",
      "Zona Universitària (límite)",
    ],
  },

  "barcelona/el-raval": {
    rentPricePerSqm:
      "El Raval dentro de Ciutat Vella: oferta ~22–26 €/m² según calle (Idealista/Properfy, 2025–2026). Rambla del Raval y MACBA en banda alta; Raval sud más contenido.",
    rentPriceSourceNote: "Idealista/Properfy por barrio, 2025–2026; Ciutat Vella agregado Brains Q2 2026.",
    dominantHousingType:
      "Edificios del s. XIX–XX sin ascensor en muchas manzanas; plantas bajas con local comercial. Pisos compartidos y habitaciones frecuentes. Humedades en patios interiores.",
    tenantProfile: [
      "Estudiantes y jóvenes profesionales",
      "Familias en calles consolidadas del Raval sud",
      "Inquilinos en pisos compartidos Rambla del Raval",
      "Perfil internacional cerca del MACBA",
    ],
    localRegulatoryNote:
      "El Raval (Ciutat Vella) en zona tensionada. IRAV en renovaciones; uso mixto vivienda/local exige revisar contrato antes de incidencias.",
    marketContext:
      "El Raval tiene rotación elevada y edificios envejecidos: el coste oculto del alquiler es la mediación continua. Livendia documenta humedades preexistentes, filtra conflictos de convivencia y aplica protocolo de cobro desde el día 3.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Humedad patio interior",
        body: "Perito, origen comunitario vs interior, presupuesto antes de obra.",
      },
      {
        title: "Ejemplo ilustrativo — Ruido en piso compartido",
        body: "Mediación según contrato; propietario recibe acta.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Rambla del Raval",
        body: "Cálculo legal antes de comunicar subida.",
      },
      {
        title: "Ejemplo ilustrativo — Rotación rápida",
        body: "Inventario y suministros en entrada/salida.",
      },
      {
        title: "Ejemplo ilustrativo — Impago",
        body: "Mediación formal antes de informar al propietario.",
      },
    ],
    nearbyLandmarks: [
      "Rambla del Raval",
      "MACBA",
      "Mercat de la Boqueria (límite)",
      "Hospital Clínic (límite)",
      "Liceu (límite Gòtic)",
      "Montjuïc (límite sud)",
    ],
  },

  "barcelona/sagrada-familia": {
    rentPricePerSqm:
      "Zona Sagrada Família / Eixample Dreta: 24–27 €/m² en oferta (Brains Eixample Q2 2026 ~25 €/m² agregado; Idealista por calle Provença/Marina, 2025–2026).",
    rentPriceSourceNote:
      "Brains Real Estate Eixample Q2 2026; Idealista Provença/Marina, 2025–2026.",
    dominantHousingType:
      "Bloques modernistas y del s. XX de 70–110 m², muchos con portería y ascensor centenario. Reformas parciales orientadas a familias e internacionales.",
    tenantProfile: [
      "Familias en Eixample Dreta",
      "Profesionales internacionales cerca del temple",
      "Parejas en pisos reformados Provença / Marina",
      "Inquilinos LAU estables en fincas señoriales",
    ],
    localRegulatoryNote:
      "Eixample Dreta en zona tensionada. IRAV e Incasòl; obras en entorno Sagrada Família pueden generar consultas sobre ruido — Livendia filtra comunicación.",
    marketContext:
      "La microzona Sagrada Família combina demanda turística residual en plantas bajas con alquiler LAU estable en plantas altas. Propietarios compiten por stock reformado; renovaciones mal calculadas generan reclamaciones. Livendia verifica IRAV y coordina ascensor/portería en fincas exigentes.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Ascensor finca señorial",
        body: "Coordinación con mantenedor y comunidad; aviso al propietario solo si hay derrama.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Provença",
        body: "Propuesta legal vs referencia Idealista.",
      },
      {
        title: "Ejemplo ilustrativo — Obras entorno temple",
        body: "Livendia informa al inquilino sobre plazos sin involucrar móvil del propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Suministros post-rotación",
        body: "Alta/baja con lecturas en panel.",
      },
      {
        title: "Ejemplo ilustrativo — Queja vecinal",
        body: "Mediación documentada.",
      },
    ],
    nearbyLandmarks: [
      "Temple Expiatori de la Sagrada Família",
      "Avinguda Gaudí",
      "Metro Sagrada Família (L2/L5)",
      "Hospital de Sant Pau (límite)",
      "Provença / Marina",
      "Fort Pienc (límite)",
    ],
  },

  "barcelona/born": {
    rentPricePerSqm:
      "El Born (Ciutat Vella): 22–26 €/m² en oferta según calle (Idealista/Properfy, 2025–2026). Picos en Passeig del Born y entorno Santa Maria del Mar.",
    rentPriceSourceNote: "Idealista/Properfy Ciutat Vella y Born, 2025–2026.",
    dominantHousingType:
      "Edificios del s. XVIII–XIX con patios interiores, plantas bajas con local comercial y pisos de 60–90 m² reformados. Humedades y ascensores pequeños frecuentes.",
    tenantProfile: [
      "Familias consolidadas en el Born",
      "Profesionales internacionales",
      "Parejas en pisos reformados cerca del Picasso",
      "Inquilinos LAU estables en fincas históricas",
    ],
    localRegulatoryNote:
      "El Born (Ciutat Vella) en zona tensionada. IRAV e Incasòl; uso mixto vivienda–local exige contrato claro antes de incidencias.",
    marketContext:
      "El Born combina demanda residencial premium y fricción por edificios antiguos: el coste oculto es la mediación continua entre inquilino, comunidad y locales. Livendia documenta humedades, filtra conflictos y aplica protocolo de cobro desde el día 3.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Humedad patio interior",
        body: "Perito, origen comunitario vs vivienda, presupuesto antes de obra.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Passeig del Born",
        body: "Cálculo legal antes de comunicar subida al inquilino.",
      },
      {
        title: "Ejemplo ilustrativo — Ruido local comercial",
        body: "Mediación según contrato; propietario recibe acta.",
      },
    ],
    nearbyLandmarks: [
      "Passeig del Born",
      "Basílica de Santa Maria del Mar",
      "Museu Picasso",
      "Mercat de Santa Caterina (límite)",
      "Parc de la Ciutadella (límite)",
      "Metro Jaume I (L4)",
    ],
  },

  "barcelona/vila-olimpica": {
    rentPricePerSqm:
      "Vila Olímpica / Port Olímpic: 25–28 €/m² en oferta (Idealista/Properfy, 2025–2026). Brains Real Estate Sant Martí Q2 2026: ~24 €/m² agregado distrito.",
    rentPriceSourceNote: "Idealista/Properfy Vila Olímpica, 2025–2026; Brains Sant Martí Q2 2026.",
    dominantHousingType:
      "Bloques olímpicos de los 90 (70–100 m²) con terrazas, parking comunitario y trasteros. Climatización individual; ascensores en buen estado.",
    tenantProfile: [
      "Familias con vistas al mar",
      "Profesionales internacionales",
      "Segunda residencia con inquilino LAU",
      "Parejas en pisos con terraza Icària",
    ],
    localRegulatoryNote:
      "Vila Olímpica (Sant Martí) en zona tensionada. IRAV e Incasòl en renovaciones; terrazas y parking comunitario generan consultas frecuentes.",
    marketContext:
      "La Vila Olímpica atrae perfiles exigentes y uso estacional residual en algunas fincas. Propietarios no residentes delegan para evitar mediación sobre parking, climatización y obras en el paseo marítimo.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Avería climatización verano",
        body: "Técnico, presupuesto al propietario, plazos al inquilino sin WhatsApp cruzado.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Port Olímpic",
        body: "Propuesta legal vs referencia Idealista en edificio Icària.",
      },
      {
        title: "Ejemplo ilustrativo — Parking comunitario",
        body: "Coordinación con administrador de finca y inquilino.",
      },
    ],
    nearbyLandmarks: [
      "Port Olímpic",
      "Platja de la Nova Icària",
      "Parc de la Nova Icària",
      "Torre Mapfre / Hotel Arts (entorno)",
      "Metro Ciutadella–Vila Olímpica (L4)",
      "Poblenou (límite nord)",
    ],
  },

  "barcelona/gotic": {
    rentPricePerSqm:
      "Barri Gòtic (Ciutat Vella): 22–27 €/m² en oferta según calle (Idealista/Properfy, 2025–2026). Picos en Plaça Reial y entorno Catedral.",
    rentPriceSourceNote: "Idealista/Properfy Ciutat Vella y Gòtic, 2025–2026.",
    dominantHousingType:
      "Fincas medievales y del s. XIX, 50–80 m² sin ascensor, patios interiores y plantas bajas con local. Humedades y escaleras estrechas frecuentes.",
    tenantProfile: [
      "Familias en el centro histórico",
      "Profesionales internacionales",
      "Parejas en pisos reformados junto a Jaume I",
      "Inquilinos LAU estables en fincas patrimoniales",
    ],
    localRegulatoryNote:
      "Barri Gòtic (Ciutat Vella) en zona tensionada. IRAV e Incasòl; edificios sin ascensor exigen protocolos de acceso claros.",
    marketContext:
      "El Gòtic combina demanda premium y fricción operativa en fincas centenarias. Propietarios no residentes delegan para evitar cerrajería de urgencia y mediación en calles de ocio.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Cerrajería finca sin ascensor",
        body: "Coordinación de acceso, técnico y acta para el propietario.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Plaça Reial",
        body: "Cálculo legal antes de comunicar subida.",
      },
      {
        title: "Ejemplo ilustrativo — Queja ruido calle ocio",
        body: "Mediación documentada con comunidad.",
      },
    ],
    nearbyLandmarks: [
      "Catedral de Barcelona",
      "Plaça Reial",
      "Plaça de Sant Jaume",
      "Metro Jaume I (L4)",
      "El Born (límite)",
      "MACBA / El Raval (límite)",
    ],
  },

  "barcelona/barceloneta": {
    rentPricePerSqm:
      "La Barceloneta: 24–28 €/m² en oferta (Idealista/Properfy, 2025–2026). Brains Ciutat Vella Q2 2026: ~22 €/m² agregado distrito.",
    rentPriceSourceNote: "Idealista/Properfy Barceloneta, 2025–2026; Brains Ciutat Vella Q2 2026.",
    dominantHousingType:
      "Pisos tradicionales de 45–65 m², orientación mar, terrazas pequeñas. Humedad salina y climatización individual frecuentes.",
    tenantProfile: [
      "Familias junto a la platja",
      "Profesionales internacionales",
      "Segunda residencia con inquilino LAU",
      "Parejas en pisos de pescadores reformados",
    ],
    localRegulatoryNote:
      "La Barceloneta (Ciutat Vella) en zona tensionada. IRAV e Incasòl; escrutinio municipal sobre usos turísticos.",
    marketContext:
      "La Barceloneta mezcla demanda residencial y presión turística residual. Propietarios delegan cobro e incidencias para evitar gestión estacional directa.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Climatización verano",
        body: "Técnico, presupuesto al propietario, plazos al inquilino.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Joan de Borbó",
        body: "Propuesta legal vs referencia Idealista.",
      },
      {
        title: "Ejemplo ilustrativo — Revisión uso contrato",
        body: "Escalado al propietario si hay incoherencia LAU/temporada.",
      },
    ],
    nearbyLandmarks: [
      "Platja de la Barceloneta",
      "Passeig de Joan de Borbó",
      "Port Vell",
      "W Hotel (entorno)",
      "Metro Barceloneta (L4)",
      "Vila Olímpica (límite)",
    ],
  },

  "barcelona/sarria": {
    rentPricePerSqm:
      "Sarrià: 28–34 €/m² en oferta (Idealista/Properfy y Brains Q2 2026). Entre los niveles más altos de Barcelona capital.",
    rentPriceSourceNote: "Idealista/Properfy Sarrià, 2025–2026; Brains Sarrià-Sant Gervasi Q2 2026.",
    dominantHousingType:
      "Pisos señoriales 90–140 m² y casas unifamiliares con jardín, parking y portería. Climatización centralizada o individual de calidad.",
    tenantProfile: [
      "Familias con colegios internacionales",
      "Expatriados consolidados",
      "Propietarios que alquilan casa unifamiliar",
      "Inquilinos LAU de larga duración",
    ],
    localRegulatoryNote:
      "Sarrià (Sarrià-Sant Gervasi) en zona tensionada. IRAV e Incasòl; fincas premium con parking comunitario.",
    marketContext:
      "Sarrià atrae inquilinos exigentes y propietarios que no quieren gestionar incidencias de standing desde fuera del barrio. Livendia centraliza renovaciones IRAV y mantenimiento.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — IRAV Reina Elisenda",
        body: "Cálculo legal en piso señorial antes de renovar.",
      },
      {
        title: "Ejemplo ilustrativo — Jardín casa unifamiliar",
        body: "Coordinación mantenimiento exterior con presupuesto al propietario.",
      },
      {
        title: "Ejemplo ilustrativo — Parking comunitario",
        body: "Mediación entre inquilino y administrador de finca.",
      },
    ],
    nearbyLandmarks: [
      "FGC Reina Elisenda",
      "Sarrià centre",
      "Vallvidrera (límite)",
      "Pedralbes (límite)",
      "Sant Gervasi (límite)",
      "Colegios internacionales (entorno)",
    ],
  },

  "barcelona/vila-de-gracia": {
    rentPricePerSqm:
      "Vila de Gràcia: 24–27 €/m² en oferta (Idealista/Properfy, 2025–2026). Brains Gràcia Q2 2026: ~24–26 €/m² agregado distrito.",
    rentPriceSourceNote: "Idealista/Properfy Vila de Gràcia, 2025–2026; Brains Gràcia Q2 2026.",
    dominantHousingType:
      "Fincas modernistas del s. XX, 70–100 m² con ascensor y terrazas. Plazas con vida comercial intensa (Sol, Virreina).",
    tenantProfile: [
      "Familias en la Vila",
      "Jóvenes profesionales",
      "Parejas en pisos con terraza",
      "Inquilinos LAU estables en Gràcia",
    ],
    localRegulatoryNote:
      "Vila de Gràcia (Gràcia) en zona tensionada. IRAV e Incasòl; Festa Major y terrazas generan consultas de convivencia.",
    marketContext:
      "La Vila de Gràcia combina demanda estable y fricción por eventos locales y fincas con terrazas. Propietarios no residentes delegan mediación y cobro.",
    operationalCases: [
      {
        title: "Ejemplo ilustrativo — Ruido Festa Major",
        body: "Mediación documentada; propietario recibe acta.",
      },
      {
        title: "Ejemplo ilustrativo — IRAV Plaça del Sol",
        body: "Referencia por edificio antes de renovar.",
      },
      {
        title: "Ejemplo ilustrativo — Fontanería finca modernista",
        body: "Técnico, presupuesto y seguimiento sin WhatsApp cruzado.",
      },
    ],
    nearbyLandmarks: [
      "Plaça del Sol",
      "Plaça de la Virreina",
      "Carrer Gran de Gràcia",
      "Verdi / Verdi Park",
      "Metro Fontana (L3)",
      "Joanic (L4)",
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
