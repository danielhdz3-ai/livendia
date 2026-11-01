export type CompraValenciaZoneInsight = {
  name: string;
  context: string;
};

/** Contenido único compra Valencia (piloto P1 — zonas y mercado). */
export const COMPRA_VALENCIA_ZONE_INSIGHTS: readonly CompraValenciaZoneInsight[] = [
  {
    name: "Ruzafa y Gran Vía",
    context: "Reservas en 24–48 h; revisión de penalizaciones y plazos de hipoteca antes de transferir señal.",
  },
  {
    name: "Ciutat Vella y El Carmen",
    context: "Edificios con obras de fachada o licencias: actas de comunidad y coherencia reserva–arras.",
  },
  {
    name: "Benimaclet y Algirós",
    context: "Compradores jóvenes; arras copiadas que no contemplan condición suspensiva de financiación.",
  },
  {
    name: "Campanar y Patraix",
    context: "Obra nueva y segunda mano: anexos de garaje, trastero y calidades en contrato.",
  },
  {
    name: "Mislata, Torrent, Paterna",
    context: "Área metropolitana con mismo protocolo Livendia online hasta notaría valenciana.",
  },
  {
    name: "Cabanyal y Malvarrosa",
    context: "Rehabilitación y plusvalía municipal: calendario de escritura y documentación de comunidad.",
  },
];

export const COMPRA_VALENCIA_MARKET_NOTE =
  "En Valencia muchas compras se cierran sin agencia compradora: el riesgo está en firmar reserva o arras copiadas de otra operación. El gestor Livendia defiende tu bando con tarifa plana, revisa nota simple, comunidad y cláusulas antes del primer ingreso relevante.";

export function getCompraValenciaEnrichment(citySlug: string) {
  if (citySlug !== "valencia") return null;
  return {
    marketNote: COMPRA_VALENCIA_MARKET_NOTE,
    zones: COMPRA_VALENCIA_ZONE_INSIGHTS,
  };
}
