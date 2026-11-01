/**
 * Hubs /gestoria para municipios clave del área metropolitana de Barcelona y Cataluña.
 */
import type { GestoriaInmobiliariaLocalCityDefinition } from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
} from "@/lib/catalog.public";

const GESTORIA_H3_ARRAS = "Contrato de Arras — 145 € (IVA incl.)";
const GESTORIA_H3_LAU = `Contrato LAU — ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} (IVA incl.)`;
const GESTORIA_H3_TEMPORADA = `Contrato Temporada — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} (IVA incl.)`;
const GESTORIA_H3_ADMIN = `Tarifa plana ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} (IVA incl.) — sin permanencia`;
const LAU_TEMPORADA_CTA = `LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, temporada ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`;

function metroGestoriaCity(input: {
  slug: string;
  city: string;
  area: string;
  marketLine: string;
  zoneLine: string;
}): GestoriaInmobiliariaLocalCityDefinition {
  const { slug, city, area, marketLine, zoneLine } = input;
  return {
    slug,
    city,
    schemaAdministrativeArea: area,
    metaTitle: `${city}: gestoría inmobiliaria 890 € sin comisiones | Livendia`,
    metaDescription: `Gestoría ${city}: compraventa 890 €, reserva 424 €, arras 145 €, LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} y administración ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}. Gestor dedicado, 100 % online.`,
    h1: `Gestoría inmobiliaria en ${city}: compraventa, contratos y administración de alquileres`,
    heroLead: `Gestoría inmobiliaria digital en ${city} y área metropolitana. ${marketLine} Precios fijos en compraventa, contratos LAU/arras y administración mensual del alquiler.`,
    compraventa: {
      h2: `Gestoría compraventa en ${city} entre particulares`,
      intro: `En ${city}, ${zoneLine} conviene revisar reserva, arras y documentación de comunidad antes de entregar señal. Livendia acompaña con tarifa plana sin comisión sobre el precio.`,
      h3Reserva: "Acompañamiento Reserva hasta Arras — 424 € (IVA incl.)",
      reservaCopy:
        "Revisión de reserva, nota simple y borrador de arras antes de transferir la señal. Detectamos plazos irreales y cláusulas desequilibradas.",
      h3Completo: "Servicio Completo hasta Escritura — 890 € (IVA incl.)",
      completoCopy:
        "Gestor dedicado desde la señal hasta notaría: coordinación documental, arras y checklist de cierre sin porcentaje sobre el precio del piso.",
    },
    contratos: {
      h2: `Contratos de alquiler y arras en ${city}`,
      intro: `Redacción de arras, LAU, temporada y habitación con entrega en 48-72 h. Cláusulas adaptadas al mercado local y normativa catalana cuando aplica.`,
      h3Arras: GESTORIA_H3_ARRAS,
      arrasCopy: `Contrato de arras penitenciales o confirmatorias para operaciones en ${city} y municipios cercanos.`,
      h3Lau: GESTORIA_H3_LAU,
      lauCopy: "Arrendamiento de larga duración con fianza, IPC, gastos e inventario conforme a LAU.",
      h3Temporada: GESTORIA_H3_TEMPORADA,
      temporadaCopy: "Estancias temporales con duración, suministros y uso del piso definidos por escrito.",
    },
    administracion: {
      h2: `Administración de alquileres en ${city}`,
      intro: `Delega incidencias, averías y renovaciones. Canal único Livendia con el inquilino — tú solo autorizas cuando hace falta.`,
      h3Incluye: `Qué incluye la gestión en ${city}`,
      incluyeCopy:
        "Seguimiento de renta, mediación, coordinación de reparaciones y documentación en panel online. Sin permanencia.",
      h3Precio: GESTORIA_H3_ADMIN,
      precioCopy:
        "Tarifa mensual transparente: el propietario no gestiona WhatsApp con el inquilino; Livendia filtra y ejecuta.",
    },
    faq: [
      {
        question: `¿Atendéis operaciones solo en ${city}?`,
        answer: `Tramitamos ${city} y municipios del entorno metropolitano con el mismo protocolo online y gestor asignado.`,
      },
      {
        question: `¿Cuánto cuesta el servicio completo de venta en ${city}?`,
        answer: "890 € IVA incl., tarifa plana sin comisión sobre el precio de venta.",
      },
      {
        question: `¿Hay revisión post-arras en ${city}?`,
        answer: `Sí, pack de ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl. cuando existe landing local publicada.`,
      },
    ],
    finalCtaLead: `Contrata en ${city}: compraventa 424 € o 890 €, ${LAU_TEMPORADA_CTA} y administración ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    localMarketInsight: marketLine,
  };
}

export const GESTORIA_CATALUNYA_METRO_CITIES: GestoriaInmobiliariaLocalCityDefinition[] = [
  metroGestoriaCity({
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    area: "Cataluña",
    marketLine: "Segundo municipio catalán por población, alta demanda de alquiler entre particulares y compraventa sin agencia.",
    zoneLine: "Collblanc, La Torrassa, Centre y barrios junto a Barcelona",
  }),
  metroGestoriaCity({
    slug: "badalona",
    city: "Badalona",
    area: "Cataluña",
    marketLine: "Costa y interior de Badalona con operaciones rápidas de compraventa y alquiler LAU.",
    zoneLine: "centro, Montigalà, La Salut y zonas cercanas al metro",
  }),
  metroGestoriaCity({
    slug: "sabadell",
    city: "Sabadell",
    area: "Cataluña",
    marketLine: "Mercado estable del Vallès Occidental con particulares que venden sin comisión de agencia.",
    zoneLine: "Centre, Eixample de Sabadell y barrios residenciales del Vallès",
  }),
  metroGestoriaCity({
    slug: "terrassa",
    city: "Terrassa",
    area: "Cataluña",
    marketLine: "Terrassa y Vallès: demanda de contratos LAU y arras con revisión documental previa.",
    zoneLine: "Centre, Sant Pere y zonas bien comunicadas con Barcelona",
  }),
  metroGestoriaCity({
    slug: "girona",
    city: "Girona",
    area: "Cataluña",
    marketLine: "Capital gironina y Costa Brava cercana: segunda residencia, alquiler habitual y compraventa entre particulares.",
    zoneLine: "Barri Vell, Eixample de Girona y operaciones en la provincia",
  }),
];

export const GESTORIA_CATALUNYA_METRO_PUBLISHED_SLUGS = GESTORIA_CATALUNYA_METRO_CITIES.map((c) => c.slug);
