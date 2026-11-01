import type { CompraValenciaZoneInsight } from "@/lib/servicio-completo-compra-local-valencia-enrichment";

export type CompraLocalCityEnrichment = {
  marketNote: string;
  zones: readonly CompraValenciaZoneInsight[];
  sectionTitle: string;
};

const MADRID: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Madrid — zonas que revisamos",
  marketNote:
    "En Madrid capital y corredor muchas compras se cierran en 24–48 horas con borradores de agencia del vendedor. Sin gestor comprador, plazos de hipoteca imposibles, honorarios encadenados y cargas no comentadas en la visita son el patrón habitual. Livendia defiende tu bando con tarifa plana antes del primer ingreso relevante.",
  zones: [
    { name: "Salamanca y Chamberí", context: "Ticket alto; revisión de penalizaciones y condición suspensiva de financiación." },
    { name: "Retiro y Arganzuela", context: "Operaciones entre particulares por Idealista; arras copiadas de plantillas de agencia." },
    { name: "Tetuán y Chamartín", context: "Compradores nacionales; coherencia reserva–arras con plazos realistas de hipoteca." },
    { name: "Vallecas y Usera", context: "Precio medio más contenido; señal desproporcionada y cláusulas abusivas en reserva." },
    { name: "Getafe, Móstoles, Leganés", context: "Área metropolitana sur: mismo protocolo online hasta notaría madrileña." },
    { name: "Las Rozas, Alcobendas, Pozuelo", context: "Segunda residencia y familias: documentación de comunidad y ITE en edificios recientes." },
  ],
};

const BARCELONA: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Barcelona — zonas que revisamos",
  marketNote:
    "En Barcelona y AMB el comprador suele firmar reserva con prisa y arras bajo CCCat copiadas de otra operación. ITE, derramas en actas, cláusula 621-49 y coherencia castellano/catalán son los puntos críticos. Livendia es gestoría del comprador, no agencia de captación.",
  zones: [
    { name: "Eixample y Dreta", context: "Ticket alto; 621-49 CCCat y penalizaciones equilibradas antes de la señal." },
    { name: "Gràcia y Sarrià", context: "Edificios con obras de fachada; actas de comunidad y usos en planta baja." },
    { name: "Poblenou y Sant Martí", context: "Rehabilitación y locales; coherencia entre visita y contrato." },
    { name: "Les Corts y Sants", context: "Compradores locales y expatriados; revisión documental pre-arras." },
    { name: "L'Hospitalet y Badalona", context: "Misma tarifa Livendia; expediente online hasta notaría barcelonesa." },
    { name: "Ciutat Vella", context: "Patrimonio y licencias; checklist pre-escritura reforzado." },
  ],
};

const VALENCIA: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Valencia — zonas que revisamos",
  marketNote:
    "En Valencia muchas compras se cierran sin agencia compradora: el riesgo está en firmar reserva o arras copiadas de otra operación. El gestor Livendia defiende tu bando con tarifa plana, revisa nota simple, comunidad y cláusulas antes del primer ingreso relevante.",
  zones: [
    { name: "Ruzafa y Gran Vía", context: "Reservas en 24–48 h; revisión de penalizaciones y plazos de hipoteca." },
    { name: "Ciutat Vella y El Carmen", context: "Obras de fachada y licencias: actas de comunidad y coherencia reserva–arras." },
    { name: "Benimaclet y Algirós", context: "Arras copiadas sin condición suspensiva de financiación." },
    { name: "Campanar y Patraix", context: "Obra nueva y segunda mano: anexos de garaje y trastero." },
    { name: "Mislata, Torrent, Paterna", context: "Área metropolitana con protocolo Livendia online." },
    { name: "Cabanyal y Malvarrosa", context: "Rehabilitación: calendario de escritura y plusvalía municipal." },
  ],
};

const MALAGA: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Málaga — zonas que revisamos",
  marketNote:
    "En Málaga capital y Costa del Sol muchas compras son entre particulares con reserva rápida y arras copiadas. Segundas residencias, obra nueva en Teatinos y operaciones con comprador extranjero exigen revisión documental antes de la señal. Livendia no cobra comisión sobre el precio del inmueble.",
  zones: [
    { name: "Centro y Soho", context: "Ticket medio-alto; cláusulas de reserva con prisa." },
    { name: "Teatinos y UMA", context: "Obra nueva y alquiler estudiantil; anexos y calidades en contrato." },
    { name: "El Palo y Pedregalejo", context: "Segunda residencia; coherencia visita–arras." },
    { name: "Rincón de la Victoria y Torremolinos", context: "Costa: mismos 890 € con gestor online." },
    { name: "Marbella oriente (compradores malagueños)", context: "Operaciones interprovinciales; plazos de hipoteca." },
    { name: "Municipios del interior", context: "Herencias y venta de particular a particular." },
  ],
};

const SEVILLA: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Sevilla — zonas que revisamos",
  marketNote:
    "En Sevilla capital y área metropolitana es habitual comprar a particular por Idealista con borrador de agencia del vendedor. Casco Antiguo, Triana y Nervión mezclan edificios históricos y promociones recientes: el gestor revisa comunidad, cargas y penalizaciones antes de transferir señal.",
  zones: [
    { name: "Nervión y Sevilla Este", context: "Familias; arras con condición de financiación." },
    { name: "Triana y Macarena", context: "Edificios señoriales; actas de comunidad y obras." },
    { name: "Casco Antiguo", context: "Licencias y estado registral revisados pre-arras." },
    { name: "Los Remedios y Tablada", context: "Operaciones entre vecinos sin agencia compradora." },
    { name: "Dos Hermanas y Alcalá de Guadaíra", context: "Área metropolitana: expediente online Livendia." },
    { name: "Santa Justa y entorno", context: "Reservas rápidas tras visita única." },
  ],
};

const BY_SLUG: Record<string, CompraLocalCityEnrichment> = {
  madrid: MADRID,
  barcelona: BARCELONA,
  valencia: VALENCIA,
  malaga: MALAGA,
  sevilla: SEVILLA,
};

export function getCompraLocalCityEnrichment(citySlug: string): CompraLocalCityEnrichment | null {
  return BY_SLUG[citySlug] ?? null;
}
