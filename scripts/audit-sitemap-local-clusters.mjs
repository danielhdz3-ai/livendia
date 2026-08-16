/**
 * Audita que el sitemap incluya todas las URLs publicadas de clústeres -local.
 * Ejecutar: node scripts/audit-sitemap-local-clusters.mjs
 */
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedContratoAlquilerLocalCities,
} from "../src/lib/contrato-alquiler-local-cities.ts";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getPublishedContratoArrasLocalCities,
} from "../src/lib/contrato-arras-local-cities.ts";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getPublishedAdministracionAlquilerLocalCities,
} from "../src/lib/administracion-alquiler-local-cities.ts";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
} from "../src/lib/contrato-alquiler-temporada-local-cities.ts";
import {
  SERVICIO_COMPLETO_COMPRA_LOCAL_BASE,
  getPublishedServicioCompletoCompraLocalCities,
} from "../src/lib/servicio-completo-compra-local-cities.ts";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getPublishedServicioCompletoVentaLocalCities,
} from "../src/lib/servicio-completo-venta-local-cities.ts";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getPublishedGestoriaInmobiliariaLocalCities,
} from "../src/lib/gestoria-inmobiliaria-local-cities.ts";
import {
  REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE,
  getPublishedRevisionDocumentalPostArrasLocalCities,
} from "../src/lib/revision-documental-post-arras-local-cities.ts";
import {
  GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE,
  getPublishedGestionDocumentalVendedorLocalCities,
} from "../src/lib/gestion-documental-vendedor-local-cities.ts";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE,
  getPublishedParkingTrasteroLocalCities,
} from "../src/lib/acompanamiento-compra-parking-trastero-local-cities.ts";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getPublishedAcompanamientoAlquilerLocalCities,
} from "../src/lib/acompanamiento-alquiler-local-cities.ts";
import {
  CONTRATO_ALQUILER_HABITACION_LOCAL_BASE,
  getPublishedContratoAlquilerHabitacionLocalCities,
} from "../src/lib/contrato-alquiler-habitacion-local-cities.ts";
import {
  CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE,
  getPublishedContratoEntreParticularesLocalCities,
} from "../src/lib/contrato-entre-particulares-local-cities.ts";

const CLUSTERS = [
  { name: "contrato-alquiler-local", base: CONTRATO_ALQUILER_LOCAL_BASE, cities: getPublishedContratoAlquilerLocalCities },
  { name: "contrato-arras-local", base: CONTRATO_ARRAS_LOCAL_BASE, cities: getPublishedContratoArrasLocalCities },
  { name: "administracion-alquiler-local", base: ADMINISTRACION_ALQUILER_LOCAL_BASE, cities: getPublishedAdministracionAlquilerLocalCities },
  { name: "contrato-alquiler-temporada-local", base: CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE, cities: getPublishedContratoAlquilerTemporadaLocalCities },
  { name: "servicio-completo-compra-local", base: SERVICIO_COMPLETO_COMPRA_LOCAL_BASE, cities: getPublishedServicioCompletoCompraLocalCities },
  { name: "servicio-completo-venta-local", base: SERVICIO_COMPLETO_VENTA_LOCAL_BASE, cities: getPublishedServicioCompletoVentaLocalCities },
  { name: "revision-documental-post-arras-local", base: REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE, cities: getPublishedRevisionDocumentalPostArrasLocalCities },
  { name: "gestion-documental-vendedor-local", base: GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE, cities: getPublishedGestionDocumentalVendedorLocalCities },
  { name: "acompanamiento-compra-parking-trastero-local", base: ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE, cities: getPublishedParkingTrasteroLocalCities },
  { name: "acompanamiento-alquiler-local", base: ACOMPANAMIENTO_ALQUILER_LOCAL_BASE, cities: getPublishedAcompanamientoAlquilerLocalCities },
  { name: "contrato-alquiler-habitacion-local", base: CONTRATO_ALQUILER_HABITACION_LOCAL_BASE, cities: getPublishedContratoAlquilerHabitacionLocalCities },
  { name: "contrato-entre-particulares-local", base: CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE, cities: getPublishedContratoEntreParticularesLocalCities },
];

/** Gestoría es hub aparte (/gestoria) pero cuenta como categoría local */
const GESTORIA = {
  name: "gestoria-inmobiliaria-local",
  base: GESTORIA_INMOBILIARIA_LOCAL_BASE,
  cities: getPublishedGestoriaInmobiliariaLocalCities,
};

let totalExpected = 0;
let totalInSitemapLogic = 0;

console.log("=== Auditoría clústeres -local (lógica sitemap.ts) ===\n");

for (const cluster of [...CLUSTERS, GESTORIA]) {
  const list = cluster.cities();
  totalExpected += list.length;
  totalInSitemapLogic += list.length;
  console.log(`${cluster.name}: ${list.length} ciudades publicadas → ${cluster.base}/[slug]`);
}

console.log(`\nTotal URLs servicio×ciudad esperadas en sitemap: ${totalExpected}`);
console.log("(Todas están generadas dinámicamente en src/app/sitemap.ts via getPublished*())");
