import type { CompraValenciaZoneInsight } from "@/lib/servicio-completo-compra-local-valencia-enrichment";
import { getCompraLocalBcnZoneEnrichment } from "@/lib/servicio-completo-compra-local-bcn-zone-enrichment";

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

const BILBAO: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Bilbao — zonas que revisamos",
  marketNote:
    "En Bilbao y Gran Bilbao el ticket medio es alto: compradores suelen firmar reserva con prisa y arras copiadas del vendedor o su agencia. Fondos de reserva en comunidad, plazos de hipoteca vasca y coherencia reserva–arras son críticos antes de transferir señal. Livendia defiende al comprador con tarifa plana.",
  zones: [
    { name: "Abando e Indautxu", context: "Ticket alto; penalizaciones y condición de financiación." },
    { name: "Deusto y Uribarri", context: "Familias; revisión documental pre-arras." },
    { name: "Getxo y Algorta", context: "Costa vizcaína: mismo protocolo Livendia online." },
    { name: "Barakaldo y Santurtzi", context: "Área metropolitana; arras equilibradas." },
    { name: "Basurto y Rekalde", context: "Rehabilitación; ITE y actas de comunidad." },
    { name: "Durango y provincia", context: "Operaciones intermunicipales con plazos amplios." },
  ],
};

const ZARAGOZA: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Zaragoza — zonas que revisamos",
  marketNote:
    "En Zaragoza capital muchas compras son entre particulares con borrador de arras heredado de otra operación. Actur, Delicias y Casco Histórico mezclan promociones recientes y edificios con obras en comunidad. El gestor revisa cargas y plazos de hipoteca antes de la señal.",
  zones: [
    { name: "Actur y Parque Goya", context: "Obra nueva y segunda mano; anexos de garaje en contrato." },
    { name: "Centro y Casco Histórico", context: "Licencias y estado registral pre-arras." },
    { name: "Delicias y Universidad", context: "Compradores jóvenes; condición suspensiva de hipoteca." },
    { name: "Las Fuentes y Torrero", context: "Operaciones por Idealista sin agencia compradora." },
    { name: "Valdespartera y Movera", context: "Familias; calendario de escritura realista." },
    { name: "Utebo y Cuarte", context: "Área metropolitana con expediente online." },
  ],
};

const OVIEDO: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Oviedo — zonas que revisamos",
  marketNote:
    "En Oviedo y el área metropolitana asturiana muchas compras son entre particulares con reserva rápida y arras copiadas. Los Pilares, Pumarín y pedanías del entorno mezclan bloques recientes y edificios con ITE pendiente: el gestor revisa comunidad, cédula y cargas antes de transferir señal.",
  zones: [
    { name: "Centro y Casco Histórico", context: "Ticket en alza; penalizaciones y plazos de hipoteca realistas." },
    { name: "La Ería y Los Pilares", context: "Reservas en 24–48 h; certificado de deuda de comunidad." },
    { name: "Pumarín y Teatinos", context: "Familias; arras con condición suspensiva de financiación." },
    { name: "El Llano y Ciudad Naranco", context: "Operaciones por Idealista sin agencia compradora." },
    { name: "Siero y Langreo", context: "Área metropolitana: mismo protocolo Livendia online." },
    { name: "San Claudio y Las Caldas", context: "Segunda residencia; coherencia visita–contrato." },
  ],
};

const GIJON: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Gijón — zonas que revisamos",
  marketNote:
    "En Gijón capital y costa asturiana es habitual comprar a particular por portal o recomendación local. Edificios del centro, La Calzada y la franja costera exigen revisar ITE, derramas en actas y plazos de hipoteca antes de ingresar arras. Livendia defiende al comprador con tarifa plana.",
  zones: [
    { name: "Cimadevilla y Centro", context: "Edificios antiguos; licencias y estado registral pre-arras." },
    { name: "La Calzada y Roces", context: "Bloques recientes; fondos de reserva y obras en comunidad." },
    { name: "El Llano y Somió", context: "Familias; coherencia reserva–arras." },
    { name: "La Arena y Natahoyo", context: "Costa: ITE y humedades a contrastar con la visita." },
    { name: "Playa de San Lorenzo (entorno)", context: "Ticket variable; cláusulas de reserva con prisa." },
    { name: "Villaviciosa y oriente", context: "Operaciones intermunicipales con gestor online." },
  ],
};

const MURCIA: CompraLocalCityEnrichment = {
  sectionTitle: "Mercado de compra en Murcia — zonas que revisamos",
  marketNote:
    "En Murcia capital y huerta metropolitana abundan compras entre familias, herencias y urbanizaciones con varios cotitulares. Sin gestor comprador, arras copiadas, señal desproporcionada y titularidad no alineada son el patrón habitual. El gestor Livendia revisa nota simple y comunidad antes del primer ingreso relevante.",
  zones: [
    { name: "Centro y Santa Catalina", context: "Ticket alto en casco; revisión de penalizaciones." },
    { name: "Espinardo y Vistabella", context: "Universidad y familias; arras con financiación." },
    { name: "El Carmen y San Andrés", context: "Operaciones entre particulares por Idealista." },
    { name: "El Palmar y pedanías sur", context: "Boom inversor; documentación de urbanización." },
    { name: "Sucina y Corvera (entorno)", context: "Herencias; alinear titularidad antes de escritura." },
    { name: "Alcantarilla y Molina de Segura", context: "Área metropolitana: expediente online Livendia." },
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
  bilbao: BILBAO,
  zaragoza: ZARAGOZA,
  oviedo: OVIEDO,
  gijon: GIJON,
  murcia: MURCIA,
};

export function getCompraLocalCityEnrichment(citySlug: string): CompraLocalCityEnrichment | null {
  return getCompraLocalBcnZoneEnrichment(citySlug) ?? BY_SLUG[citySlug] ?? null;
}
