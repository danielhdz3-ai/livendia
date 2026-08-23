import type { LocalCityMarketProfile } from "@/lib/local-city-market-profile-types";

/** Alias de slug de landing → clave en LOCAL_CITY_MARKET_PROFILES. */
const PROFILE_ALIASES: Record<string, string> = {
  mallorca: "palma",
  "palma-de-mallorca": "palma",
  "les-corts": "barcelona-les-corts",
  gracia: "barcelona-gracia",
  "l-hospitalet": "hospitalet-de-llobregat",
  "l-hospitalet-de-llobregat": "hospitalet-de-llobregat",
  cornella: "cornella-de-llobregat",
};

/** Si no hay perfil propio, resolver a esta clave (p. ej. comarca → capital). */
const PROFILE_FALLBACKS: Record<string, string> = {
  "baix-llobregat": "barcelona",
};

export function resolveCityProfileSlug(slug: string): string | undefined {
  const key = slug.trim().toLowerCase();
  const resolved = PROFILE_ALIASES[key] ?? key;
  if (resolved in LOCAL_CITY_MARKET_PROFILES) return resolved;
  const fallback = PROFILE_FALLBACKS[resolved];
  if (fallback && fallback in LOCAL_CITY_MARKET_PROFILES) return fallback;
  return undefined;
}

export const LOCAL_CITY_MARKET_PROFILES: Record<string, LocalCityMarketProfile> = {
  madrid: {
    slug: "madrid",
    cityLabel: "Madrid",
    prices: {
      rentalAvgPerSqm: "21,59 €/m²",
      rentalRangePerSqm: "13–28 €/m²",
      saleAvgPerSqm: "4.920 €/m²",
      saleRangePerSqm: "3.200–7.800 €/m²",
      avgSalePrice: "385.000 €",
      sourceNote:
        "Alquiler: Fotocasa, índice Madrid capital, agosto 2026. Venta: Idealista, precio medio vivienda usada Madrid, julio 2026.",
    },
    marketSummary:
      "Madrid concentra el mayor volumen de operaciones residenciales entre particulares de España, con una dispersión extrema entre distritos premium y el cinturón sur más asequible. La capital no está declarada zona tensionada, pero la rotación alta y el parque envejecido multiplican incidencias de comunidad y renovaciones mal documentadas.",
    neighborhoods: [
      {
        name: "Salamanca",
        rentalPerSqm: "26–28 €/m²",
        salePerSqm: "6.800–8.200 €/m²",
        note: "Referencia premium de la capital: pisos amplios en fincas señoriales y demanda estable de familias y expatriados. Las operaciones entre particulares suelen cerrarse tras pocas visitas, pero las arras genéricas no contemplan derramas en comunidades grandes ni plazos de hipoteca del comprador.",
      },
      {
        name: "Chamberí",
        rentalPerSqm: "24–26 €/m²",
        salePerSqm: "5.900–7.100 €/m²",
        note: "Mezcla de edificios de principios del s. XX y reformas recientes orientadas a alquiler de larga duración. El inquilino tipo es profesional con contrato estable; el propietario fuera de Madrid necesita gestoría que filtre incidencias de ascensor y calderas comunitarias.",
      },
      {
        name: "Retiro",
        rentalPerSqm: "22–24 €/m²",
        salePerSqm: "5.400–6.500 €/m²",
        note: "Barrio residencial consolidado con buena oferta de vivienda familiar y demanda de parejas sin hijos. Las ventas entre particulares son frecuentes cuando el comprador ya está en la zona laboral del eje Paseo de la Castellana.",
      },
      {
        name: "Carabanchel",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "2.800–3.400 €/m²",
        note: "Uno de los distritos con mejor relación calidad-precio del sur de Madrid, con alta rotación de inquilinos jóvenes. Los contratos LAU copiados de internet suelen omitir cláusulas de convivencia en pisos compartidos.",
      },
      {
        name: "Vallecas",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Demanda sostenida de familias que buscan más superficie por euro que en el centro. Las operaciones directas entre vecinos son habituales, pero conviene revisar comunidad y estado de fachada antes de firmar arras.",
      },
      {
        name: "Getafe",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.700 €/m²",
        note: "Municipio del sur metropolitano con buena conexión Cercanías y demanda de trabajadores del eje M-40. El mercado es más pausado que la capital, pero las herencias con varios herederos retrasan escrituras si no hay gestoría coordinada.",
      },
    ],
  },

  barcelona: {
    slug: "barcelona",
    cityLabel: "Barcelona",
    prices: {
      rentalAvgPerSqm: "22 €/m²",
      rentalRangePerSqm: "15–30 €/m²",
      saleAvgPerSqm: "4.380 €/m²",
      saleRangePerSqm: "2.900–6.800 €/m²",
      avgSalePrice: "345.000 €",
      sourceNote:
        "Alquiler: Idealista, informe grandes capitales, agosto 2026 (−7,6 % interanual). Venta: Fotocasa, precio medio Barcelona ciudad, julio 2026.",
    },
    marketSummary:
      "Barcelona es la única gran capital española con corrección interanual del alquiler en 2026, aunque sigue entre las ciudades más caras del país y está declarada zona tensionada en toda Cataluña. La brecha entre oferta en portales y contratos registrados con IRAV condiciona cada renovación y operación entre particulares.",
    neighborhoods: [
      {
        name: "Eixample",
        rentalPerSqm: "26–30 €/m²",
        salePerSqm: "5.200–6.800 €/m²",
        note: "Distrito con mayor peso en la oferta de alquiler de la capital: fincas regias, ascensores antiguos y perfiles exigentes de expatriados y personal sanitario. Cada renovación exige cálculo IRAV antes de proponer subida al inquilino.",
      },
      {
        name: "Gràcia",
        rentalPerSqm: "21–25 €/m²",
        salePerSqm: "4.600–5.400 €/m²",
        note: "Alta proporción de pisos compartidos, plantas sin ascensor y mezcla de contratos LAU y temporada regulada. Los conflictos por ruido, subarriendo o mascotas aparecen en el primer año si el contrato no incluye normas de convivencia.",
      },
      {
        name: "Sant Martí",
        rentalPerSqm: "19–22 €/m²",
        salePerSqm: "3.800–4.600 €/m²",
        note: "Zona en transformación con demanda de familias en Poblenou y perfiles jóvenes cerca del Besòs. Edificios de los 60–80 con incidencias frecuentes de fontanería comunitaria y ascensor.",
      },
      {
        name: "Nou Barris",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Alternativa asequible dentro del municipio con buena conexión metro y demanda de familias migrantes. El parque envejecido concentra averías que escalan a la comunidad si no hay gestor intermediando.",
      },
      {
        name: "Sants-Montjuïc",
        rentalPerSqm: "17–20 €/m²",
        salePerSqm: "3.400–4.100 €/m²",
        note: "Mezcla de Sants consolidado y zonas en regeneración cerca de la Fira. Operaciones entre particulares habituales cuando el comprador ya trabaja en el eje Zona Franca o Sants Estació.",
      },
    ],
  },

  valencia: {
    slug: "valencia",
    cityLabel: "Valencia",
    prices: {
      rentalAvgPerSqm: "14,3 €/m²",
      rentalRangePerSqm: "10–18 €/m²",
      saleAvgPerSqm: "2.680 €/m²",
      saleRangePerSqm: "1.900–3.600 €/m²",
      avgSalePrice: "228.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Valencia capital, junio 2026. Venta: Fotocasa, precio medio Comunitat Valenciana capital, agosto 2026.",
    },
    marketSummary:
      "Valencia capital y l'Horta registran una de las rotaciones más altas de España: un piso bien ubicado puede alquilarse en 8–12 días. No está declarada zona tensionada, pero la velocidad del mercado multiplica incidencias en las primeras semanas tras cada cambio de inquilino.",
    neighborhoods: [
      {
        name: "Ruzafa",
        rentalPerSqm: "16–18 €/m²",
        salePerSqm: "3.200–3.900 €/m²",
        note: "Barrio de referencia para jóvenes profesionales y parejas sin hijos, con oferta reformada y rotación acelerada. Los alquileres entre particulares se cierran en visita, pero el inventario fotográfico suele omitirse.",
      },
      {
        name: "Benimaclet",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Demanda universitaria sostenida y mezcla de pisos compartidos con contratos LAU mal adaptados. Las averías de caldera y humedades en edificios de los 70 son la fricción más habitual en renovaciones.",
      },
      {
        name: "El Carmen",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "3.000–3.700 €/m²",
        note: "Casco histórico con edificios antiguos, normativas de protección patrimonial y compradores atraídos por el turismo residencial. Conviene revisar cédula de habitabilidad y estado de fachada antes de arras.",
      },
      {
        name: "Campanar",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.700 €/m²",
        note: "Zona familiar con buena relación calidad-precio y demanda de familias con hijos. Operaciones entre particulares más pausadas que Ruzafa, pero con checklist documental igualmente necesario.",
      },
      {
        name: "Malvarrosa",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.800–3.400 €/m²",
        note: "Proximidad al mar y demanda de perfiles que combinan teletrabajo con estilo de vida costero. Temporada y LAU conviven; el contrato debe reflejar la modalidad real del arrendamiento.",
      },
      {
        name: "Mislata",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "1.850–2.300 €/m²",
        note: "Municipio limítrofe con metro directo y alquiler más contenido que la capital. Familias que trabajan en Valencia capital buscan equilibrio entre precio y comunicaciones.",
      },
    ],
  },

  sevilla: {
    slug: "sevilla",
    cityLabel: "Sevilla",
    prices: {
      rentalAvgPerSqm: "19,1 €/m²",
      rentalRangePerSqm: "12–22 €/m²",
      saleAvgPerSqm: "2.480 €/m²",
      saleRangePerSqm: "1.700–3.500 €/m²",
      avgSalePrice: "215.000 €",
      sourceNote:
        "Alquiler: Brains Real Estate, informe Sevilla Q2 2026 (ticket medio 1.556 €/mes). Venta: Idealista, precio medio vivienda usada Andalucía capital, julio 2026.",
    },
    marketSummary:
      "Sevilla combina revalorización muy desigual por barrio —Casco Antiguo lidera subidas interanuales— con un mercado de venta más pausado que Madrid o Barcelona. Andalucía no ha activado zona tensionada, pero la presión en el centro histórico eleva expectativas de renta en renovaciones.",
    neighborhoods: [
      {
        name: "Casco Antiguo",
        rentalPerSqm: "20–22 €/m²",
        salePerSqm: "3.200–4.000 €/m²",
        note: "Barrio con mayor revalorización reciente de la capital, edificios históricos y demanda turística residencial. Las operaciones entre particulares requieren revisar protección patrimonial y estado de instalaciones antiguas.",
      },
      {
        name: "Triana",
        rentalPerSqm: "18–20 €/m²",
        salePerSqm: "2.900–3.500 €/m²",
        note: "Identidad de barrio consolidada con demanda local y compradores de otras provincias. Ventas entre vecinos frecuentes; las herencias con varios herederos retrasan escritura si no hay gestoría.",
      },
      {
        name: "Nervión",
        rentalPerSqm: "17–19 €/m²",
        salePerSqm: "2.700–3.300 €/m²",
        note: "Zona de ensanche con familias consolidadas y buena oferta de servicios. Alquileres estables de larga duración con renovaciones que conviene documentar con referencia de mercado del distrito.",
      },
      {
        name: "Los Remedios",
        rentalPerSqm: "16–18 €/m²",
        salePerSqm: "2.500–3.100 €/m²",
        note: "Barrio residencial de referencia en la margen izquierda del Guadalquivir, con demanda de familias que priorizan colegios y transporte. Incidencias de comunidad en bloques de los 80 son habituales.",
      },
      {
        name: "Macarena",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Mezcla de casco antiguo y ensanche con perfil de inquilino más asequible que Nervión. Operaciones directas habituales cuando el comprador ya reside en el barrio.",
      },
      {
        name: "Torreblanca",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "1.600–2.000 €/m²",
        note: "Una de las zonas más económicas de la capital, con demanda de familias que buscan superficie por precio. Rotación moderada y contratos LAU que suelen omitir reparto de suministros.",
      },
    ],
  },

  malaga: {
    slug: "malaga",
    cityLabel: "Málaga",
    prices: {
      rentalAvgPerSqm: "16,5 €/m²",
      rentalRangePerSqm: "11–20 €/m²",
      saleAvgPerSqm: "3.120 €/m²",
      saleRangePerSqm: "2.200–4.500 €/m²",
      avgSalePrice: "268.000 €",
      sourceNote:
        "Alquiler: Brains Real Estate, informe Málaga Q2 2026 (ticket medio 1.476 €/mes). Venta: Idealista, precio medio Costa del Sol capital, agosto 2026.",
    },
    marketSummary:
      "Málaga capital y Costa del Sol próxima combinan alquiler residencial, temporada y fuerte presión inversora, con distritos como Victoria en plena revalorización interanual. Técnicamente todos los distritos superan el umbral de esfuerzo del 30 %, aunque Andalucía no ha declarado zona tensionada.",
    neighborhoods: [
      {
        name: "Centro Histórico",
        rentalPerSqm: "17–19 €/m²",
        salePerSqm: "3.400–4.200 €/m²",
        note: "Demanda de segundas residencias, teletrabajadores y compradores europeos. Edificios antiguos con obras de accesibilidad pendientes en comunidad; conviene checklist antes de arras.",
      },
      {
        name: "Teatinos",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Zona universitaria con rotación de inquilinos cada curso y pisos compartidos mal regulados. Familias también demandan vivienda cerca del campus con contratos LAU estables.",
      },
      {
        name: "El Palo",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "2.800–3.500 €/m²",
        note: "Barrio costero con mezcla de vivienda habitual y estancias de media duración. Temporada y LAU conviven; el contrato debe reflejar duración y causa real de la estancia.",
      },
      {
        name: "Victoria",
        rentalPerSqm: "16–18 €/m²",
        salePerSqm: "2.900–3.600 €/m²",
        note: "Distrito con fuerte revalorización reciente y rotación acelerada de inquilinos. El propietario compite con stock reformado; la gestión documental en renovaciones es crítica.",
      },
      {
        name: "Torremolinos",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.400–3.000 €/m²",
        note: "Municipio costero con demanda turística residencial y alquiler anual. Segundas residencias alquiladas todo el año requieren gestoría que filtre incidencias en temporada alta.",
      },
    ],
  },

  zaragoza: {
    slug: "zaragoza",
    cityLabel: "Zaragoza",
    prices: {
      rentalAvgPerSqm: "11 €/m²",
      rentalRangePerSqm: "8–14 €/m²",
      saleAvgPerSqm: "1.960 €/m²",
      saleRangePerSqm: "1.400–2.600 €/m²",
      avgSalePrice: "168.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Zaragoza capital, mayo 2026 (38–42 % por debajo de Madrid). Venta: Fotocasa, precio medio Aragón capital, julio 2026.",
    },
    marketSummary:
      "Zaragoza es una de las capitales de provincia más asequibles de España, con demanda concentrada en Centro Histórico y Universidad-Romareda. Aragón no ha activado zona tensionada; el mercado es pausado pero las operaciones entre particulares necesitan revisión registral igualmente rigurosa.",
    neighborhoods: [
      {
        name: "Centro Histórico",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.800 €/m²",
        note: "Barrio más caro de la capital, con edificios históricos y demanda de profesionales del sector público y turístico. Ventas entre particulares frecuentes cuando el comprador ya reside en la ciudad.",
      },
      {
        name: "Romareda",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.000–2.500 €/m²",
        note: "Zona universitaria con rotación de inquilinos jóvenes y pisos compartidos. Propietarios fuera de Aragón delegan gestión por la distancia y la rotación académica.",
      },
      {
        name: "Actur-Rey Fernando",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.800–2.200 €/m²",
        note: "Mejor relación calidad-precio de la capital, con familias que buscan vivienda amplia y buenas comunicaciones. Perfil de inquilino más estable que el centro histórico.",
      },
      {
        name: "Delicias",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.500–1.900 €/m²",
        note: "Uno de los barrios más económicos, con demanda de familias migrantes y trabajadores del sector logístico. Operaciones directas habituales con contratos LAU genéricos.",
      },
      {
        name: "Las Fuentes",
        rentalPerSqm: "8–10 €/m²",
        salePerSqm: "1.350–1.700 €/m²",
        note: "Zona periférica asequible con parque envejecido e incidencias de comunidad frecuentes. Precio medio bajo no reduce el riesgo legal en arras mal redactadas.",
      },
    ],
  },

  bilbao: {
    slug: "bilbao",
    cityLabel: "Bilbao",
    prices: {
      rentalAvgPerSqm: "14,2 €/m²",
      rentalRangePerSqm: "11–18 €/m²",
      saleAvgPerSqm: "3.850 €/m²",
      saleRangePerSqm: "2.800–5.200 €/m²",
      avgSalePrice: "298.000 €",
      sourceNote:
        "Alquiler: índice de precios de referencia Ministerio de Vivienda, vigente abril 2026 (700–950 €/mes). Venta: Idealista, precio medio Gran Bilbao, agosto 2026.",
    },
    marketSummary:
      "Bilbao está declarada zona de mercado residencial tensionado desde octubre de 2025 junto con Vitoria-Gasteiz y San Sebastián, con límites legales a la subida de renta en nuevos contratos. El mercado comprimido y edificios históricos del Gran Bilbao exigen gestoría que conozca normativa vasca y estatal.",
    neighborhoods: [
      {
        name: "Abando",
        rentalPerSqm: "16–18 €/m²",
        salePerSqm: "4.800–5.800 €/m²",
        note: "Núcleo financiero y comercial con demanda de profesionales y expatriados. Fincas señoriales con ascensores antiguos; cada renovación debe respetar topes de zona tensionada.",
      },
      {
        name: "Deusto",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "3.900–4.700 €/m²",
        note: "Barrio universitario y residencial consolidado con demanda de familias y estudiantes de máster. Ventas entre particulares frecuentes cuando el comprador ya trabaja en la margen derecha.",
      },
      {
        name: "Indautxu",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "4.200–5.100 €/m²",
        note: "Zona de ensanche con buena oferta de servicios y demanda estable de contratos LAU largos. Derramas de fachada y ascensor son fricciones habituales en edificios del s. XX.",
      },
      {
        name: "Basurto",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.900–3.500 €/m²",
        note: "Alternativa más asequible dentro del municipio, con regeneración urbana en curso cerca del San Mamés. Operaciones directas con checklist de comunidad imprescindible.",
      },
      {
        name: "Getxo",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "4.500–5.500 €/m²",
        note: "Municipio de la margen izquierda con demanda premium y segundas residencias. Propietarios fuera del País Vasco necesitan gestoría local que conozca normativa de arrendamientos vasca.",
      },
    ],
  },

  granada: {
    slug: "granada",
    cityLabel: "Granada",
    prices: {
      rentalAvgPerSqm: "12,2 €/m²",
      rentalRangePerSqm: "9–16 €/m²",
      saleAvgPerSqm: "2.140 €/m²",
      saleRangePerSqm: "1.500–3.200 €/m²",
      avgSalePrice: "188.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Granada capital, julio 2026. Venta: Fotocasa, precio medio vivienda usada Granada, agosto 2026.",
    },
    marketSummary:
      "Granada combina demanda universitaria sostenida, turismo residencial en el Albaicín y un mercado de venta entre particulares activo en Zaidín y Realejo. Andalucía no ha declarado zona tensionada, pero edificios antiguos del casco histórico generan fricciones en comunidad y accesibilidad.",
    neighborhoods: [
      {
        name: "Albaicín",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.800–3.600 €/m²",
        note: "Patrimonio UNESCO con edificios históricos, calles estrechas y demanda turística residencial. Operaciones entre particulares requieren revisar protección patrimonial y estado de instalaciones antes de arras.",
      },
      {
        name: "Realejo",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.800 €/m²",
        note: "Barrio bohemio con mezcla de locales en planta baja y viviendas en plantas superiores. Alquileres entre particulares frecuentes; conviene distinguir uso comercial de vivienda en contrato.",
      },
      {
        name: "Zaidín",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.800–2.300 €/m²",
        note: "Zona residencial moderna con familias consolidadas y buena relación calidad-precio. Perfil de inquilino estable; ventas entre vecinos habituales con herencias que requieren coordinación.",
      },
      {
        name: "Centro",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.500–3.100 €/m²",
        note: "Núcleo comercial y administrativo con demanda de profesionales y personal universitario. Edificios del s. XIX con obras de accesibilidad pendientes en comunidad.",
      },
      {
        name: "Cartuja",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.000–2.500 €/m²",
        note: "Proximidad al campus y demanda de estudiantes de máster y doctorado. Rotación académica elevada; contratos LAU mal adaptados generan conflictos en convivencia.",
      },
    ],
  },

  murcia: {
    slug: "murcia",
    cityLabel: "Murcia",
    prices: {
      rentalAvgPerSqm: "10,55 €/m²",
      rentalRangePerSqm: "8–13 €/m²",
      saleAvgPerSqm: "1.680 €/m²",
      saleRangePerSqm: "1.200–2.300 €/m²",
      avgSalePrice: "148.000 €",
      sourceNote:
        "Alquiler: Engel & Völkers, índice Murcia capital pisos, junio 2026. Venta: Idealista, precio medio Región de Murcia capital, julio 2026.",
    },
    marketSummary:
      "Murcia capital ofrece uno de los mercados más asequibles del sureste peninsular, con regeneración urbana en Santa Eulalia y El Carmen que atrae nuevos inquilinos. No está declarada zona tensionada; la rotación en Espinardo y zonas universitarias multiplica incidencias en las primeras semanas.",
    neighborhoods: [
      {
        name: "Centro",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "1.900–2.400 €/m²",
        note: "Núcleo histórico con demanda de profesionales y familias consolidadas. Edificios antiguos con humedades y ascensores antiguos; checklist de comunidad imprescindible antes de arras.",
      },
      {
        name: "La Flota",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.700–2.100 €/m²",
        note: "Zona residencial activa con buena oferta de servicios y demanda de familias. Operaciones entre particulares frecuentes con contratos LAU genéricos que omiten reparto de suministros.",
      },
      {
        name: "Espinardo",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.500–1.900 €/m²",
        note: "Proximidad al campus universitario con rotación de inquilinos cada curso. Propietarios fuera de Murcia delegan gestión por distancia y rotación académica.",
      },
      {
        name: "El Carmen",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.650–2.050 €/m²",
        note: "Barrio en pleno proceso de regeneración urbana con llegada de nuevos inquilinos y compradores. Las obras de entorno pueden generar consultas sobre ruido y accesos.",
      },
      {
        name: "Vistalegre",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.450–1.850 €/m²",
        note: "Zona periférica asequible con demanda de familias que buscan superficie por precio. Mercado pausado pero arras mal redactadas generan litigios igualmente costosos.",
      },
    ],
  },

  alicante: {
    slug: "alicante",
    cityLabel: "Alicante",
    prices: {
      rentalAvgPerSqm: "13,1 €/m²",
      rentalRangePerSqm: "10–17 €/m²",
      saleAvgPerSqm: "2.380 €/m²",
      saleRangePerSqm: "1.700–3.400 €/m²",
      avgSalePrice: "198.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Alicante capital, agosto 2026. Venta: Fotocasa, precio medio Costa Blanca capital, julio 2026.",
    },
    marketSummary:
      "Alicante capital combina demanda local, compradores europeos de segunda residencia y teletrabajadores atraídos por clima y precios moderados respecto a Madrid o Barcelona. El mercado costero mezcla alquiler anual, temporada y ventas entre particulares con prisa.",
    neighborhoods: [
      {
        name: "Centro",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Casco urbano con demanda de profesionales y compradores de otras CCAA. Edificios del s. XX con terrazas no inscritas; conviene revisar registral antes de arras.",
      },
      {
        name: "Playa de San Juan",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.400–3.000 €/m²",
        note: "Zona costera con mezcla de vivienda habitual y estancias de media duración. Temporada y LAU conviven; el contrato debe reflejar duración y causa real.",
      },
      {
        name: "Carolinas Altas",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.700 €/m²",
        note: "Barrio residencial consolidado con familias y demanda de alquiler estable. Operaciones directas habituales cuando el comprador ya reside en la provincia.",
      },
      {
        name: "San Blas",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.000–2.500 €/m²",
        note: "Zona popular con buena relación calidad-precio y demanda de familias migrantes. Parque envejecido con incidencias de fontanería comunitaria frecuentes.",
      },
      {
        name: "Albufereta",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.700–3.300 €/m²",
        note: "Barrio en revalorización con vistas al mar y demanda de parejas sin hijos. Compradores europeos frecuentes; checklist documental en idioma claro imprescindible.",
      },
    ],
  },

  palma: {
    slug: "palma",
    cityLabel: "Palma de Mallorca",
    prices: {
      rentalAvgPerSqm: "19,1 €/m²",
      rentalRangePerSqm: "14–24 €/m²",
      saleAvgPerSqm: "3.680 €/m²",
      saleRangePerSqm: "2.600–5.500 €/m²",
      avgSalePrice: "315.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Palma Q2 2026. Venta: Fotocasa, precio medio Baleares capital, agosto 2026.",
    },
    marketSummary:
      "Palma de Mallorca registra uno de los alquileres más caros de España, con presión sostenida de demanda turística y residencial. Baleares no ha declarado zona tensionada formalmente, pero el esfuerzo sobre renta media supera el umbral técnico del 30 % en buena parte de la isla.",
    neighborhoods: [
      {
        name: "Llevant-La Soledat",
        rentalPerSqm: "20–22 €/m²",
        salePerSqm: "3.900–4.600 €/m²",
        note: "Barrio con mayor revalorización reciente de Palma, en plena transformación urbana. Rotación acelerada de inquilinos y exigencia sobre estado del inmueble en cada entrada.",
      },
      {
        name: "Centro Histórico",
        rentalPerSqm: "19–21 €/m²",
        salePerSqm: "3.800–4.800 €/m²",
        note: "Casco antiguo con edificios señoriales y demanda de expatriados y profesionales. Operaciones entre particulares frecuentes; conviene revisar cédula y estado de fachada.",
      },
      {
        name: "Son Espanyolet",
        rentalPerSqm: "18–20 €/m²",
        salePerSqm: "3.500–4.200 €/m²",
        note: "Barrio residencial consolidado con familias y demanda de alquiler estable. Edificios de los 60–70 con calderas comunitarias e incidencias de ascensor habituales.",
      },
      {
        name: "Pere Garau",
        rentalPerSqm: "16–18 €/m²",
        salePerSqm: "3.100–3.700 €/m²",
        note: "Alternativa más asequible dentro del municipio con buena conexión al centro. Demanda de familias locales y trabajadores del sector servicios.",
      },
      {
        name: "Portixol",
        rentalPerSqm: "20–24 €/m²",
        salePerSqm: "4.200–5.500 €/m²",
        note: "Frente marítimo con demanda premium y segundas residencias. Temporada y LAU conviven; el contrato debe distinguir modalidad y duración con precisión.",
      },
    ],
  },

  "las-palmas": {
    slug: "las-palmas",
    cityLabel: "Las Palmas de Gran Canaria",
    prices: {
      rentalAvgPerSqm: "11,6 €/m²",
      rentalRangePerSqm: "9–15 €/m²",
      saleAvgPerSqm: "2.240 €/m²",
      saleRangePerSqm: "1.600–3.200 €/m²",
      avgSalePrice: "188.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Las Palmas capital, julio 2026. Venta: Fotocasa, precio medio Canarias capital, agosto 2026.",
    },
    marketSummary:
      "Las Palmas de Gran Canaria combina demanda local, teletrabajadores atraídos por clima fiscal y compradores de otras islas o península. El mercado es más contenido que Palma o Madrid, pero las operaciones entre particulares requieren revisión de comunidad en edificios costeros expuestos a humedad.",
    neighborhoods: [
      {
        name: "Vegueta",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.500–3.100 €/m²",
        note: "Casco histórico patrimonial con edificios antiguos y demanda turística residencial. Protección patrimonial y estado de instalaciones condicionan operaciones de venta.",
      },
      {
        name: "Triana",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Núcleo comercial y residencial con demanda de profesionales y familias consolidadas. Ventas entre particulares frecuentes cuando el comprador ya reside en la isla.",
      },
      {
        name: "Alcaravaneras",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "2.800–3.400 €/m²",
        note: "Zona costera con demanda de parejas sin hijos y teletrabajadores. Humedad por salitre y filtraciones en fachada son fricciones habituales en comunidad.",
      },
      {
        name: "Tamaraceite",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "2.000–2.500 €/m²",
        note: "Barrio popular con buena relación calidad-precio y demanda de familias. Operaciones directas habituales con contratos LAU genéricos.",
      },
      {
        name: "Las Canteras",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "3.000–3.800 €/m²",
        note: "Frente a la playa con demanda premium y estancias de media duración. Mezcla de alquiler anual y temporada; el contrato debe reflejar la modalidad real.",
      },
    ],
  },

  cordoba: {
    slug: "cordoba",
    cityLabel: "Córdoba",
    prices: {
      rentalAvgPerSqm: "10,2 €/m²",
      rentalRangePerSqm: "8–13 €/m²",
      saleAvgPerSqm: "1.780 €/m²",
      saleRangePerSqm: "1.300–2.400 €/m²",
      avgSalePrice: "158.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Córdoba capital, junio 2026. Venta: Fotocasa, precio medio Andalucía interior, julio 2026.",
    },
    marketSummary:
      "Córdoba capital ofrece un mercado asequible con demanda universitaria, turismo residencial en el casco histórico y familias locales en barrios del ensanche. Andalucía no ha declarado zona tensionada; edificios antiguos del Judería generan fricciones en patrimonio y comunidad.",
    neighborhoods: [
      {
        name: "Judería",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.800 €/m²",
        note: "Patrimonio UNESCO con calles estrechas y edificios históricos. Operaciones entre particulares requieren revisar protección patrimonial y estado de instalaciones.",
      },
      {
        name: "Centro",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.000–2.500 €/m²",
        note: "Núcleo comercial con demanda de profesionales y turismo residencial. Mezcla de locales en planta baja y viviendas en plantas superiores.",
      },
      {
        name: "Levante",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.600–2.000 €/m²",
        note: "Zona residencial moderna con familias consolidadas y buena relación calidad-precio. Perfil de inquilino estable; ventas entre vecinos habituales.",
      },
      {
        name: "Sector Sur",
        rentalPerSqm: "8–10 €/m²",
        salePerSqm: "1.400–1.800 €/m²",
        note: "Barrio popular con demanda de familias migrantes y precios contenidos. Parque envejecido con incidencias de comunidad frecuentes.",
      },
      {
        name: "Ciudad Jardín",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.750–2.200 €/m²",
        note: "Zona universitaria con rotación de inquilinos jóvenes. Contratos LAU mal adaptados a pisos compartidos generan conflictos en convivencia.",
      },
    ],
  },

  valladolid: {
    slug: "valladolid",
    cityLabel: "Valladolid",
    prices: {
      rentalAvgPerSqm: "10,4 €/m²",
      rentalRangePerSqm: "8–13 €/m²",
      saleAvgPerSqm: "1.880 €/m²",
      saleRangePerSqm: "1.350–2.500 €/m²",
      avgSalePrice: "162.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Valladolid capital, julio 2026. Venta: Fotocasa, precio medio Castilla y León capital, agosto 2026.",
    },
    marketSummary:
      "Valladolid tiene un mercado de venta entre particulares muy ligado a herencias, propietarios senior y compradores de otra provincia. Castilla y León no ha declarado zona tensionada; el precio medio bajo no reduce el riesgo legal en arras mal redactadas.",
    neighborhoods: [
      {
        name: "Centro",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Casco histórico con demanda de profesionales y familias consolidadas. Edificios antiguos con obras de accesibilidad pendientes en comunidad.",
      },
      {
        name: "Parquesol",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.900–2.300 €/m²",
        note: "Zona residencial moderna con familias y buena oferta de servicios. Operaciones entre particulares frecuentes; herencias con varios herederos retrasan escritura.",
      },
      {
        name: "Delicias",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.650–2.050 €/m²",
        note: "Barrio popular con demanda de familias y precios contenidos. Ventas entre vecinos habituales con checklist documental imprescindible.",
      },
      {
        name: "Rondilla",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.850–2.250 €/m²",
        note: "Zona universitaria con rotación de inquilinos cada curso. Propietarios fuera de Castilla y León delegan gestión por distancia.",
      },
      {
        name: "La Victoria",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.600–2.000 €/m²",
        note: "Barrio en regeneración con llegada de nuevos inquilinos y compradores. Obras de entorno pueden generar consultas sobre ruido y accesos.",
      },
    ],
  },

  vigo: {
    slug: "vigo",
    cityLabel: "Vigo",
    prices: {
      rentalAvgPerSqm: "11,3 €/m²",
      rentalRangePerSqm: "9–14 €/m²",
      saleAvgPerSqm: "2.080 €/m²",
      saleRangePerSqm: "1.500–2.800 €/m²",
      avgSalePrice: "178.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Vigo capital, agosto 2026. Venta: Fotocasa, precio medio Galicia sur, julio 2026.",
    },
    marketSummary:
      "Vigo es el mayor núcleo urbano del sur de Galicia, con demanda portuaria, universitaria y de familias que buscan precios más moderados que Madrid o Barcelona. Galicia no ha declarado zona tensionada; la humedad en edificios costeros condiciona operaciones y revisiones pre-arras.",
    neighborhoods: [
      {
        name: "Centro",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.300–2.800 €/m²",
        note: "Núcleo comercial con demanda de profesionales del sector portuario y servicios. Edificios del s. XX con humedades frecuentes en fachada y sótanos.",
      },
      {
        name: "Coia",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Barrio residencial consolidado con familias y buena oferta de servicios. Operaciones entre particulares frecuentes cuando el comprador ya trabaja en el área metropolitana.",
      },
      {
        name: "Teis",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.900–2.300 €/m²",
        note: "Zona popular con demanda de familias migrantes y precios contenidos. Parque envejecido con incidencias de fontanería comunitaria.",
      },
      {
        name: "Navia",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.050–2.500 €/m²",
        note: "Barrio en revalorización con demanda de parejas jóvenes y familias. Rotación moderada; contratos LAU genéricos omiten cláusulas de convivencia.",
      },
      {
        name: "Bouzas",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.700 €/m²",
        note: "Zona costera con demanda de teletrabajadores y segundas residencias. Humedad por salitre y filtraciones en fachada son fricciones habituales.",
      },
    ],
  },

  gijon: {
    slug: "gijon",
    cityLabel: "Gijón",
    prices: {
      rentalAvgPerSqm: "11,0 €/m²",
      rentalRangePerSqm: "9–14 €/m²",
      saleAvgPerSqm: "1.980 €/m²",
      saleRangePerSqm: "1.450–2.600 €/m²",
      avgSalePrice: "168.000 €",
      sourceNote:
        "Alquiler: Indomio, índice Gijón, enero 2026 (+7,98 % interanual). Venta: Idealista, precio medio Asturias capital costera, agosto 2026.",
    },
    marketSummary:
      "Gijón combina alquiler residencial en La Arena y El Natahoyo con un mercado en crecimiento acelerado respecto al resto del norte peninsular. Asturias no ha activado zona tensionada; edificios históricos en Cimadevilla y humedades son variables críticas en contratos.",
    neighborhoods: [
      {
        name: "Cimadevilla",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.300–2.900 €/m²",
        note: "Barrio histórico del cerro con edificios antiguos y demanda turística residencial. Protección patrimonial y estado de instalaciones condicionan operaciones.",
      },
      {
        name: "La Arena",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Zona residencial consolidada con familias y demanda de alquiler estable. Propietarios fuera de Asturias delegan gestión por distancia y rotación.",
      },
      {
        name: "El Natahoyo",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.900–2.300 €/m²",
        note: "Barrio popular con buena relación calidad-precio y demanda de familias. Parque envejecido con calderas comunitarias e incidencias de ascensor.",
      },
      {
        name: "Somió",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.050–2.550 €/m²",
        note: "Zona en revalorización con proximidad al campus y demanda de estudiantes. Rotación académica elevada en septiembre.",
      },
      {
        name: "Laviada",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.200–2.700 €/m²",
        note: "Ensanche señorial con edificios de principios del s. XX y demanda de profesionales. Ventas entre particulares frecuentes con herencias pendientes.",
      },
    ],
  },

  oviedo: {
    slug: "oviedo",
    cityLabel: "Oviedo",
    prices: {
      rentalAvgPerSqm: "11,2 €/m²",
      rentalRangePerSqm: "9–14 €/m²",
      saleAvgPerSqm: "2.120 €/m²",
      saleRangePerSqm: "1.550–2.800 €/m²",
      avgSalePrice: "178.000 €",
      sourceNote:
        "Alquiler: Enalquiler, índice Oviedo, abril 2026 (986–995 €/mes). Venta: Idealista, precio medio Asturias capital, julio 2026.",
    },
    marketSummary:
      "Oviedo concentra demanda universitaria, familias en expansión y propietarios que viven fuera del Principado. Asturias no ha activado zona tensionada; humedades, calefacción y ascensores antiguos son variables críticas en edificios asturianos.",
    neighborhoods: [
      {
        name: "Centro",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Casco histórico con demanda de profesionales y familias consolidadas. Edificios antiguos con obras de accesibilidad pendientes en comunidad.",
      },
      {
        name: "La Ería",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Proximidad al campus con rotación de inquilinos cada curso. Propietarios fuera de Asturias delegan gestión por distancia y rotación académica.",
      },
      {
        name: "Los Pilares",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.950–2.400 €/m²",
        note: "Barrio universitario con pisos compartidos y contratos LAU mal adaptados. Conflictos por convivencia y reparto de suministros frecuentes.",
      },
      {
        name: "Ciudad Naranco",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.150–2.650 €/m²",
        note: "Zona residencial con familias y demanda de alquiler estable. Propietarios en Madrid o León con segunda vivienda alquilada todo el año.",
      },
      {
        name: "Pumarín",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.700–2.100 €/m²",
        note: "Barrio popular extenso con demanda de familias y precios contenidos. Parque envejecido con incidencias de fontanería y calderas comunitarias.",
      },
    ],
  },

  asturias: {
    slug: "asturias",
    cityLabel: "Asturias",
    prices: {
      rentalAvgPerSqm: "10,6 €/m²",
      rentalRangePerSqm: "8–13 €/m²",
      saleAvgPerSqm: "1.920 €/m²",
      saleRangePerSqm: "1.400–2.700 €/m²",
      avgSalePrice: "165.000 €",
      sourceNote:
        "Alquiler: agregado Idealista/Fotocasa Principado de Asturias, agosto 2026. Venta: Idealista, precio medio vivienda usada Asturias, julio 2026.",
    },
    marketSummary:
      "El Principado de Asturias combina alquiler urbano en Oviedo y Gijón, costa veraniega y viviendas rurales con calefacción y humedad como variables críticas. No está declarada zona tensionada; un contrato peninsular genérico no sirve para un piso en Cimadevilla o una casa en la costa.",
    neighborhoods: [
      {
        name: "Oviedo — Centro",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Capital administrativa con demanda de profesionales y familias. Edificios antiguos con humedades y calefacción central como variables contractuales.",
      },
      {
        name: "Gijón — La Arena",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Mayor núcleo costero del Principado con demanda residencial y laboral. Propietarios fuera de Asturias delegan gestión por distancia.",
      },
      {
        name: "Avilés",
        rentalPerSqm: "9–11 €/m²",
        salePerSqm: "1.650–2.050 €/m²",
        note: "Tercer núcleo urbano con precios más contenidos y demanda industrial. Operaciones entre particulares habituales con checklist documental necesario.",
      },
      {
        name: "Costa — Llanes/Ribadesella",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "1.800–2.400 €/m²",
        note: "Segundas residencias y alquiler estacional en temporada alta. Contrato debe distinguir LAU de temporada con duración y causa real.",
      },
      {
        name: "Langreo/Siero",
        rentalPerSqm: "8–10 €/m²",
        salePerSqm: "1.400–1.800 €/m²",
        note: "Área metropolitana de Oviedo con precios asequibles y demanda de familias. Parque envejecido con incidencias de comunidad frecuentes.",
      },
    ],
  },

  santander: {
    slug: "santander",
    cityLabel: "Santander",
    prices: {
      rentalAvgPerSqm: "12,4 €/m²",
      rentalRangePerSqm: "10–16 €/m²",
      saleAvgPerSqm: "2.620 €/m²",
      saleRangePerSqm: "1.900–3.600 €/m²",
      avgSalePrice: "225.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Santander capital, agosto 2026. Venta: Fotocasa, precio medio Cantabria capital, julio 2026.",
    },
    marketSummary:
      "Santander combina demanda universitaria, turismo residencial en el Sardinero y familias locales en barrios del ensanche. Cantabria no ha declarado zona tensionada; la humedad en edificios costeros y el mercado de segundas residencias condicionan operaciones entre particulares.",
    neighborhoods: [
      {
        name: "Centro",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.800–3.400 €/m²",
        note: "Núcleo comercial con demanda de profesionales y familias consolidadas. Edificios del s. XX con obras de accesibilidad pendientes.",
      },
      {
        name: "El Sardinero",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "3.000–3.800 €/m²",
        note: "Zona costera premium con demanda de segundas residencias y teletrabajadores. Temporada y LAU conviven; contrato debe reflejar modalidad real.",
      },
      {
        name: "Cueto",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.300–2.800 €/m²",
        note: "Barrio residencial con familias y buena relación calidad-precio. Operaciones entre particulares frecuentes cuando el comprador ya reside en Cantabria.",
      },
      {
        name: "Monte",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Zona universitaria con rotación de inquilinos jóvenes. Propietarios fuera de Cantabria delegan gestión por distancia.",
      },
      {
        name: "Peñacastillo",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Barrio popular con demanda de familias migrantes y precios contenidos. Parque envejecido con incidencias de comunidad.",
      },
    ],
  },

  pamplona: {
    slug: "pamplona",
    cityLabel: "Pamplona",
    prices: {
      rentalAvgPerSqm: "13,2 €/m²",
      rentalRangePerSqm: "10–16 €/m²",
      saleAvgPerSqm: "2.880 €/m²",
      saleRangePerSqm: "2.100–3.700 €/m²",
      avgSalePrice: "245.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Pamplona capital, julio 2026. Venta: Fotocasa, precio medio Navarra capital, agosto 2026.",
    },
    marketSummary:
      "Pamplona combina demanda universitaria sostenida, Sanfermines como factor estacional y un mercado de venta activo en barrios del ensanche. Navarra no ha declarado zona tensionada; edificios del casco antiguo generan fricciones en patrimonio y comunidad.",
    neighborhoods: [
      {
        name: "Casco Antiguo",
        rentalPerSqm: "14–16 €/m²",
        salePerSqm: "3.200–3.900 €/m²",
        note: "Patrimonio histórico con calles estrechas y demanda turística en Sanfermines. Operaciones entre particulares requieren revisar protección patrimonial.",
      },
      {
        name: "Iturrama",
        rentalPerSqm: "12–14 €/m²",
        salePerSqm: "2.700–3.300 €/m²",
        note: "Barrio residencial consolidado con familias y buena oferta de servicios. Perfil de inquilino estable; ventas entre vecinos habituales.",
      },
      {
        name: "San Juan",
        rentalPerSqm: "13–15 €/m²",
        salePerSqm: "2.850–3.500 €/m²",
        note: "Zona universitaria con rotación de inquilinos cada curso. Contratos LAU mal adaptados a pisos compartidos generan conflictos.",
      },
      {
        name: "Rochapea",
        rentalPerSqm: "11–13 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Barrio en regeneración con llegada de nuevos inquilinos y compradores. Obras de entorno pueden generar consultas sobre ruido.",
      },
      {
        name: "Burlada",
        rentalPerSqm: "10–12 €/m²",
        salePerSqm: "2.200–2.700 €/m²",
        note: "Municipio limítrofe con buena conexión y alquiler más contenido que la capital. Familias que trabajan en Pamplona buscan equilibrio precio-superficie.",
      },
    ],
  },

  "barcelona-les-corts": {
    slug: "barcelona-les-corts",
    cityLabel: "Les Corts, Barcelona",
    prices: {
      rentalAvgPerSqm: "24,90 €/m²",
      rentalRangePerSqm: "21–26 €/m²",
      saleAvgPerSqm: "5.180 €/m²",
      saleRangePerSqm: "4.200–6.500 €/m²",
      avgSalePrice: "420.000 €",
      sourceNote:
        "Alquiler: Brains Real Estate, informe Les Corts Q2 2026; Fotocasa Pedralbes, agosto 2026. Venta: Idealista, precio medio distrito Les Corts, julio 2026.",
    },
    marketSummary:
      "Les Corts mezcla el segmento premium de Pedralbes con barrios más asequibles hacia Maternitat y la Zona Universitària. El distrito está en zona tensionada catalana; cada renovación exige cálculo IRAV antes de proponer subida al inquilino.",
    neighborhoods: [
      {
        name: "Pedralbes",
        rentalPerSqm: "23–25 €/m²",
        salePerSqm: "5.800–7.200 €/m²",
        note: "Referencia premium del distrito: pisos amplios, chalets adosados y demanda de familias con hijos en colegios del eje. Operaciones entre particulares frecuentes con checklist de IRAV imprescindible.",
      },
      {
        name: "La Maternitat i Sant Ramon",
        rentalPerSqm: "21–23 €/m²",
        salePerSqm: "4.600–5.400 €/m²",
        note: "Bloques de los 60–80 con viviendas de 70–95 m² y calderas comunitarias antiguas. Personal del Hospital Clínic y familias consolidadas; incidencias de ascensor frecuentes.",
      },
      {
        name: "Les Corts centre",
        rentalPerSqm: "22–24 €/m²",
        salePerSqm: "4.800–5.600 €/m²",
        note: "Núcleo del distrito con buena conexión metro y demanda de profesionales del eje Diagonal. Edificios envejecidos con fontanería comunitaria como fricción habitual.",
      },
      {
        name: "Zona Universitària",
        rentalPerSqm: "20–22 €/m²",
        salePerSqm: "4.200–5.000 €/m²",
        note: "Demanda de estudiantes de máster y doctorado con rotación académica. Pisos compartidos mal regulados generan conflictos de convivencia en el primer año.",
      },
    ],
  },

  "barcelona-gracia": {
    slug: "barcelona-gracia",
    cityLabel: "Gràcia, Barcelona",
    prices: {
      rentalAvgPerSqm: "25,30 €/m²",
      rentalRangePerSqm: "20–26 €/m²",
      saleAvgPerSqm: "4.880 €/m²",
      saleRangePerSqm: "4.000–5.800 €/m²",
      avgSalePrice: "395.000 €",
      sourceNote:
        "Alquiler: Brains Real Estate, informe Gràcia Q2 2026; Properfy/Idealista por barrio, 2026. Venta: Fotocasa, precio medio distrito Gràcia, agosto 2026.",
    },
    marketSummary:
      "Gràcia cerró 2025 entre los distritos más demandados de Barcelona, con heterogeneidad marcada entre Vila de Gràcia y El Coll. Zona tensionada catalana: la oferta publicada y el alquiler real registrado divergen por efecto de topes IRAV.",
    neighborhoods: [
      {
        name: "Vila de Gràcia",
        rentalPerSqm: "25–26 €/m²",
        salePerSqm: "5.000–5.800 €/m²",
        note: "Corazón del distrito con edificios de principios del s. XX, techos altos y muchos sin ascensor. Jóvenes profesionales y parejas sin hijos; pisos compartidos mal regulados.",
      },
      {
        name: "Camp d'en Grassot",
        rentalPerSqm: "21–22 €/m²",
        salePerSqm: "4.400–5.200 €/m²",
        note: "Barrio consolidado con familias y buena oferta de servicios. Operaciones entre particulares frecuentes; conviene inventario fotográfico antes de entregar fianza.",
      },
      {
        name: "Vallcarca",
        rentalPerSqm: "20–21 €/m²",
        salePerSqm: "4.200–5.000 €/m²",
        note: "Pendiente y casas entre medianeras con viviendas más pequeñas. Estancias de media duración y contratos de temporada que exigen causa real y duración acorde.",
      },
      {
        name: "La Salut",
        rentalPerSqm: "24–25 €/m²",
        salePerSqm: "4.800–5.600 €/m²",
        note: "Proximidad Park Güell con demanda de familias y expatriados. Revalorización sostenida; renovaciones con IRAV imprescindibles.",
      },
      {
        name: "El Coll",
        rentalPerSqm: "19–20 €/m²",
        salePerSqm: "3.800–4.600 €/m²",
        note: "Alternativa más asequible dentro del distrito con demanda de artistas y convivencias compartidas. Rotación elevada; conflictos por ruido y subarriendo frecuentes.",
      },
    ],
  },

  "hospitalet-de-llobregat": {
    slug: "hospitalet-de-llobregat",
    cityLabel: "L'Hospitalet de Llobregat",
    prices: {
      rentalAvgPerSqm: "18,5 €/m²",
      rentalRangePerSqm: "15–21 €/m²",
      saleAvgPerSqm: "3.120 €/m²",
      saleRangePerSqm: "2.400–3.800 €/m²",
      avgSalePrice: "245.000 €",
      sourceNote:
        "Alquiler: Fotocasa, índice municipal L'Hospitalet, agosto 2026; Properfy/Idealista, febrero 2026. Venta: Idealista, precio medio Baix Llobregat norte, julio 2026.",
    },
    marketSummary:
      "L'Hospitalet es el segundo municipio más poblado del área metropolitana y alternativa habitual a Barcelona capital por precio. Zona tensionada catalana: parque compacto y envejecido concentra incidencias de fontanería, ascensor y comunidad.",
    neighborhoods: [
      {
        name: "Collblanc–La Torrassa",
        rentalPerSqm: "20–21 €/m²",
        salePerSqm: "3.300–3.900 €/m²",
        note: "Mejor comunicado en metro L1 con demanda de familias que trabajan en Barcelona. Bloques densos de los 60–80 con ascensores antiguos.",
      },
      {
        name: "Bellvitge",
        rentalPerSqm: "18–19 €/m²",
        salePerSqm: "2.900–3.500 €/m²",
        note: "Proximidad Hospital de Bellvitge con demanda de personal sanitario. Parque envejecido; averías de ascensor y fontanería comunitaria frecuentes.",
      },
      {
        name: "Centre",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.500–3.100 €/m²",
        note: "Núcleo histórico del municipio con precios más contenidos. Operaciones entre particulares habituales; arras deben contemplar INCASÒl y zona tensionada.",
      },
      {
        name: "Santa Eulàlia",
        rentalPerSqm: "19–20 €/m²",
        salePerSqm: "3.100–3.700 €/m²",
        note: "Barrio consolidado con familias y demanda de alquiler estable. Inquilinos de origen extranjero en edificios de los 70.",
      },
      {
        name: "Can Serra–Pubilla Cases",
        rentalPerSqm: "15–16 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Zona periférica asequible con demanda de familias migrantes. Mediana de ~56 m² en contratos reales; contratos LAU genéricos omiten reparto de suministros.",
      },
    ],
  },

  "cornella-de-llobregat": {
    slug: "cornella-de-llobregat",
    cityLabel: "Cornellà de Llobregat",
    prices: {
      rentalAvgPerSqm: "15,22 €/m²",
      rentalRangePerSqm: "12–16 €/m²",
      saleAvgPerSqm: "2.780 €/m²",
      saleRangePerSqm: "2.200–3.400 €/m²",
      avgSalePrice: "228.000 €",
      sourceNote:
        "Alquiler: Engel & Völkers, índice Cornellà pisos, julio 2026; Inmobiliarias Barcelona, rango 12–15 €/m², 2025. Venta: Idealista, precio medio Baix Llobregat, agosto 2026.",
    },
    marketSummary:
      "Cornellà combina buena conexión con Barcelona (FGC, Rodalies, Granvia) y alquiler más contenido que la capital. Municipio tensionado: cada renovación exige contrastar IRAV y baremo estatal antes de notificar al inquilino.",
    neighborhoods: [
      {
        name: "Centre",
        rentalPerSqm: "15–16 €/m²",
        salePerSqm: "2.900–3.400 €/m²",
        note: "Núcleo del municipio con bloques de los 70–90 y demanda de familias que trabajan en Barcelona o polígonos del Baix Llobregat.",
      },
      {
        name: "Almeda",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.750–3.250 €/m²",
        note: "Zona industrial y residencial con buena conexión Granvia. Operaciones entre particulares frecuentes en Sant Ildefons y Can Mercader.",
      },
      {
        name: "Sant Ildefons",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.700–3.200 €/m²",
        note: "Barrio consolidado con inquilinos estables en contratos LAU largos. Humedad por filtración en fachada es fricción habitual tras lluvias.",
      },
      {
        name: "Gavarra",
        rentalPerSqm: "13–14 €/m²",
        salePerSqm: "2.500–3.000 €/m²",
        note: "Chalets adosados y pisos amplios orientados a familias. Propietarios compiten con stock reformado recientemente, no solo con precio por m².",
      },
      {
        name: "Riu Sud",
        rentalPerSqm: "12–13 €/m²",
        salePerSqm: "2.300–2.800 €/m²",
        note: "Zona más asequible del municipio con demanda de parejas jóvenes. Operaciones directas habituales con checklist de IRAV en renovaciones.",
      },
    ],
  },

  sabadell: {
    slug: "sabadell",
    cityLabel: "Sabadell",
    prices: {
      rentalAvgPerSqm: "14,1 €/m²",
      rentalRangePerSqm: "11–17 €/m²",
      saleAvgPerSqm: "2.680 €/m²",
      saleRangePerSqm: "2.100–3.300 €/m²",
      avgSalePrice: "235.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Sabadell capital, agosto 2026. Venta: Fotocasa, precio medio Vallès Occidental, julio 2026.",
    },
    marketSummary:
      "Sabadell combina compradores locales y del área metropolitana que evitan precios de Barcelona capital. Zona tensionada catalana: FGC directo a Plaça Catalunya y precio más contenido que la capital condicionan demanda de familias.",
    neighborhoods: [
      {
        name: "Centre",
        rentalPerSqm: "15–16 €/m²",
        salePerSqm: "2.850–3.400 €/m²",
        note: "Núcleo histórico con demanda de profesionales y familias consolidadas. Edificios del s. XIX con obras de accesibilidad pendientes.",
      },
      {
        name: "Sant Oleguer",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.700–3.250 €/m²",
        note: "Barrio residencial con buena relación calidad-precio y demanda de familias. Operaciones entre particulares frecuentes con revisión de comunidad.",
      },
      {
        name: "Can Rull",
        rentalPerSqm: "12–13 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Zona periférica asequible con demanda de familias migrantes. Parque envejecido con incidencias de fontanería comunitaria.",
      },
      {
        name: "La Creu Alta",
        rentalPerSqm: "13–14 €/m²",
        salePerSqm: "2.550–3.100 €/m²",
        note: "Barrio en revalorización con proximidad FGC. Rotación moderada; contratos LAU deben contemplar INCASÒl y zona tensionada.",
      },
      {
        name: "Gràcia (Sabadell)",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.750–3.300 €/m²",
        note: "Ensanche modernista con edificios señoriales y demanda de profesionales. Ventas entre particulares con herencias pendientes frecuentes.",
      },
    ],
  },

  terrassa: {
    slug: "terrassa",
    cityLabel: "Terrassa",
    prices: {
      rentalAvgPerSqm: "13,4 €/m²",
      rentalRangePerSqm: "10–16 €/m²",
      saleAvgPerSqm: "2.480 €/m²",
      saleRangePerSqm: "1.900–3.100 €/m²",
      avgSalePrice: "218.000 €",
      sourceNote:
        "Alquiler: Idealista, índice Terrassa capital, julio 2026. Venta: Fotocasa, precio medio Vallès Occidental sur, agosto 2026.",
    },
    marketSummary:
      "Terrassa atrae compradores por precio y conexión con Barcelona vía FGC y Cercanías. Zona tensionada catalana: operaciones entre particulares en el centre o Sant Pere necesitan revisión registral y de arras antes del ingreso de la señal.",
    neighborhoods: [
      {
        name: "Centre",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.650–3.200 €/m²",
        note: "Casco histórico con demanda de profesionales y familias. Edificios antiguos con obras de accesibilidad pendientes en comunidad.",
      },
      {
        name: "Sant Pere",
        rentalPerSqm: "13–14 €/m²",
        salePerSqm: "2.500–3.000 €/m²",
        note: "Barrio residencial consolidado con buena oferta de servicios. Operaciones entre particulares frecuentes; checklist de IRAV en renovaciones.",
      },
      {
        name: "La Maurina",
        rentalPerSqm: "12–13 €/m²",
        salePerSqm: "2.300–2.800 €/m²",
        note: "Zona popular con demanda de familias y precios contenidos. Parque envejecido con incidencias de ascensor y calderas comunitarias.",
      },
      {
        name: "Les Fonts",
        rentalPerSqm: "11–12 €/m²",
        salePerSqm: "2.100–2.600 €/m²",
        note: "Barrio periférico asequible con demanda de familias migrantes. Operaciones directas habituales con contratos LAU genéricos.",
      },
      {
        name: "Ca n'Anglada",
        rentalPerSqm: "13–14 €/m²",
        salePerSqm: "2.450–2.950 €/m²",
        note: "Zona en revalorización con demanda de parejas jóvenes. Rotación moderada; conviene inventario fotográfico antes de entregar fianza.",
      },
    ],
  },

  "sant-andreu": {
    slug: "sant-andreu",
    cityLabel: "Sant Andreu, Barcelona",
    prices: {
      rentalAvgPerSqm: "19,2 €/m²",
      rentalRangePerSqm: "16–22 €/m²",
      saleAvgPerSqm: "3.420 €/m²",
      saleRangePerSqm: "2.700–4.200 €/m²",
      avgSalePrice: "285.000 €",
      sourceNote:
        "Alquiler: Brains Real Estate, informe Sant Andreu Q2 2026; Idealista por barrio, agosto 2026. Venta: Fotocasa, precio medio distrito Sant Andreu, julio 2026.",
    },
    marketSummary:
      "Sant Andreu combina barrios consolidados como Sant Andreu de Palomar con zonas en transformación cerca del 22@ norte. Distrito en zona tensionada catalana: edificios de los 60–70 con ITE y derramas como riesgos frecuentes en compraventa entre particulares.",
    neighborhoods: [
      {
        name: "Sant Andreu de Palomar",
        rentalPerSqm: "18–20 €/m²",
        salePerSqm: "3.200–3.900 €/m²",
        note: "Corazón del distrito con identidad de barrio consolidada y demanda de familias. Edificios de los 60–70 con obras de accesibilidad pendientes.",
      },
      {
        name: "La Sagrera",
        rentalPerSqm: "17–19 €/m²",
        salePerSqm: "3.000–3.700 €/m²",
        note: "Transformación urbana con nueva estación AVE y demanda creciente. Operaciones entre particulares aceleradas; conviene revisar cargas registrales.",
      },
      {
        name: "Bon Pastor",
        rentalPerSqm: "15–17 €/m²",
        salePerSqm: "2.700–3.300 €/m²",
        note: "Barrio histórico en regeneración con llegada de nuevos inquilinos. Obras de entorno pueden generar consultas sobre ruido y accesos.",
      },
      {
        name: "Trinitat Vella",
        rentalPerSqm: "16–18 €/m²",
        salePerSqm: "2.850–3.500 €/m²",
        note: "Zona en revalorización con buena conexión metro. Rotación moderada; contratos LAU deben contemplar INCASÒl y zona tensionada.",
      },
      {
        name: "Navas",
        rentalPerSqm: "19–21 €/m²",
        salePerSqm: "3.400–4.100 €/m²",
        note: "Barrio consolidado con demanda de profesionales y familias. Ventas entre particulares frecuentes con checklist de comunidad imprescindible.",
      },
    ],
  },

  "baix-llobregat": {
    slug: "baix-llobregat",
    cityLabel: "Baix Llobregat",
    prices: {
      rentalAvgPerSqm: "14,8 €/m²",
      rentalRangePerSqm: "12–18 €/m²",
      saleAvgPerSqm: "2.620 €/m²",
      saleRangePerSqm: "2.100–3.400 €/m²",
      avgSalePrice: "238.000 €",
      sourceNote:
        "Alquiler: agregado Idealista/Fotocasa comarca Baix Llobregat, agosto 2026. Venta: Idealista, precio medio vivienda usada Baix Llobregat, julio 2026.",
    },
    marketSummary:
      "El Baix Llobregat concentra compradores y arrendatarios que trabajan en Barcelona y buscan equilibrio entre precio y superficie en Cornellà, Sant Boi, Gavà o Castelldefels. Toda la comarca está en zona tensionada catalana; operaciones entre particulares necesitan revisión de IRAV e INCASÒl.",
    neighborhoods: [
      {
        name: "Cornellà de Llobregat",
        rentalPerSqm: "15,2 €/m²",
        salePerSqm: "2.780 €/m²",
        note: "Municipio de referencia del Baix con buena conexión FGC y Rodalies. Familias que trabajan en Barcelona o polígonos del Granvia; renovaciones con IRAV imprescindibles.",
      },
      {
        name: "Sant Boi de Llobregat",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.550–3.100 €/m²",
        note: "Alternativa asequible con metro directo a Barcelona. Parque envejecido con incidencias de fontanería comunitaria frecuentes.",
      },
      {
        name: "Gavà",
        rentalPerSqm: "13–14 €/m²",
        salePerSqm: "2.400–2.900 €/m²",
        note: "Proximidad playa y aeropuerto con demanda de teletrabajadores y familias. Segundas residencias y alquiler anual conviven.",
      },
      {
        name: "Castelldefels",
        rentalPerSqm: "15–16 €/m²",
        salePerSqm: "2.900–3.500 €/m²",
        note: "Municipio costero con demanda premium y expatriados. Temporada y LAU conviven; contrato debe reflejar modalidad real.",
      },
      {
        name: "Esplugues de Llobregat",
        rentalPerSqm: "16–17 €/m²",
        salePerSqm: "3.100–3.700 €/m²",
        note: "Municipio limítrofe con Barcelona con precios más altos que el resto de la comarca. Demanda de familias con hijos en colegios del Vallès-Llobregat.",
      },
      {
        name: "El Prat de Llobregat",
        rentalPerSqm: "14–15 €/m²",
        salePerSqm: "2.600–3.200 €/m²",
        note: "Proximidad aeropuerto y Zona Franca con demanda de trabajadores del sector logístico. Rotación moderada; arras deben contemplar zona tensionada.",
      },
    ],
  },
};
