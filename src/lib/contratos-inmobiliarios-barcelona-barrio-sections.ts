import type { ContratosInmobiliariosBarrioPage } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import {
  CONTRATOS_BCN_SERVICE_SECTIONS,
  type ContratosBcnServiceSection,
} from "@/lib/contratos-inmobiliarios-barcelona-content";
import { localAdministracionAlquilerHref } from "@/lib/administracion-alquiler-local-cities";

/** Mismos apartados que el hub, con título/contexto y landings locales del barrio. */
export function getContratosBcnServiceSectionsForBarrio(
  barrio: ContratosInmobiliariosBarrioPage,
): ContratosBcnServiceSection[] {
  const adminLocal = localAdministracionAlquilerHref("barcelona");

  return CONTRATOS_BCN_SERVICE_SECTIONS.map((section) => {
    let title = section.title;
    if (section.id === "arras") {
      title = `Contrato de arras en ${barrio.name} (Barcelona)`;
    } else if (section.id === "lau") {
      title = `Contrato de alquiler LAU en ${barrio.name}`;
    } else if (section.id === "temporada") {
      title = `Contrato de alquiler de temporada en ${barrio.name}`;
    } else if (section.id === "habitacion") {
      title = `Contrato de alquiler de habitación en ${barrio.name}`;
    } else if (section.id === "compraventa") {
      title = `Compra y venta entre particulares en ${barrio.name}`;
    } else if (section.id === "admin") {
      title = `Administración de alquiler en ${barrio.name}`;
    }

    let localHref = section.localHref;
    if (section.id === "arras") localHref = barrio.contratoArrasHref;
    else if (section.id === "lau" || section.id === "temporada" || section.id === "habitacion") {
      localHref = barrio.contratoAlquilerHref;
    } else if (section.id === "admin") localHref = adminLocal;

    const localContext = `${section.localContext} En ${barrio.name} (${barrio.districtLabel}): ${barrio.localContext}`;

    return { ...section, title, localHref, localContext };
  });
}
