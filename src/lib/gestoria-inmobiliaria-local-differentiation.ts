import type { LocalDifferentiationFields } from "@/lib/merge-local-differentiation";

/** Bloques adicionales por ciudad — hub gestoría (compraventa + contratos + admin). */
export const GESTORIA_INMOBILIARIA_LOCAL_DIFFERENTIATION: Record<string, LocalDifferentiationFields> = {
  madrid: {
    localMarketInsight:
      "Madrid concentra operaciones entre particulares en compraventa, arras y alquiler LAU con volumen alto y plazos cortos. Un hub de gestoría local debe distinguir venta sin comisión (890 €), arras (145 €), revisión post-arras para compradores y administración de rentas — cada servicio con keywords y casuística propia, no una página genérica de «gestoría inmobiliaria».",
  },
  barcelona: {
    localMarketInsight:
      "Barcelona añade capas normativas catalanas: INCASÒL en alquiler, cédula de habitabilidad en venta, CCCat en arras cuando aplica. El hub de gestoría en Barcelona debe enlazar servicios con copy en castellano orientado a particulares del Eixample, Gràcia y área metropolitana — no duplicar la misma intro que Madrid.",
  },
  "les-corts": {
    localMarketInsight:
      "Les Corts combina familias consolidadas, pisos cerca de la zona universitaria y operaciones entre particulares en edificios de los años 70-80. El hub local enlaza venta, arras y LAU con referencia a barrios concretos — Pedralbes, Numancia, Zona Universitària — para diferenciarse del hub genérico de Barcelona capital.",
  },
  valencia: {
    localMarketInsight:
      "Valencia capital y área metropolitana mueven ventas entre particulares a compradores de otras CCAA y alquileres en Ruzafa o Benimaclet. El hub gestoría debe articular servicio completo de venta, contrato LAU y revisión post-arras con datos de mercado valenciano — precios medios más bajos que Madrid pero mismos riesgos documentales.",
  },
  zaragoza: {
    localMarketInsight:
      "Zaragoza tiene mercado más pausado: herencias, ventas entre conocidos y alquiler universitario en Delicias. El hub local destaca tarifa plana frente a comisión y enlaza arras, LAU y gestión documental con barrios aragoneses concretos — Actur, Casco Histórico, Valdespartera.",
  },
  alicante: {
    localMarketInsight:
      "Alicante mezcla segunda residencia, universidad y costa en Playa San Juan y centro. El hub gestoría diferencia venta entre particulares, temporada y LAU habitual — perfiles de cliente distintos que no deben compartir el mismo párrafo introductorio que otras ciudades.",
  },
  murcia: {
    localMarketInsight:
      "Murcia capital y área metropolitana concentran alquiler cerca del campus y ventas entre vecinos con precios moderados. El hub local enlaza servicios con referencia a Espinardo, Vistabella y operaciones familiares — copy distinto al de Valencia o Alicante.",
  },
  malaga: {
    localMarketInsight:
      "Málaga combina venta a compradores de otras provincias, alquiler residencial en Teatinos y temporadas en Costa del Sol próxima. El hub gestoría articula pack venta, LAU y temporada con keywords costeras — no reutilizar intro de Sevilla o Granada.",
  },
  sevilla: {
    localMarketInsight:
      "Sevilla capital mueve ventas entre particulares en Triana y alquileres con rotación universitaria. El hub local diferencia arras, LAU y servicio completo de venta con barrios sevillanos y calendario feria/curso — contenido único respecto a Málaga o Córdoba.",
  },
  bilbao: {
    localMarketInsight:
      "Bilbao y margen izquierda registran ventas entre particulares en Deusto e Indautxu y alquiler LAU con demanda universitaria. El hub gestoría enlaza servicios con referencia al mercado vasco — edificios con ascensor antiguo, trasteros y operaciones sin comisión del 3 %.",
  },
  granada: {
    localMarketInsight:
      "Granada mezcla turismo residencial, UGR y ventas en Albaicín o Zaidín. El hub local articula venta entre particulares, LAU por habitación y revisión documental con barrios granadinos — copy distinto al de Sevilla o Málaga pese a compartir Andalucía.",
  },
};
