import type { LocalDifferentiationFields } from "@/lib/merge-local-differentiation";
import { mergeLocalDifferentiation } from "@/lib/merge-local-differentiation";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import {
  LOCAL_CITY_MARKET_PROFILES,
  resolveCityProfileSlug,
} from "@/lib/local-city-market-profiles";
import type {
  LocalCityMarketProfile,
  LocalLandingServiceKind,
  LocalNeighborhoodDetail,
} from "@/lib/local-city-market-profile-types";
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

function serviceInsight(profile: LocalCityMarketProfile, service: LocalLandingServiceKind): string {
  const p = profile.prices;
  const city = profile.cityLabel;
  const rent = p.rentalAvgPerSqm ? `El alquiler publicado ronda ${p.rentalAvgPerSqm}` : "";
  const rentRange = p.rentalRangePerSqm ? ` (${p.rentalRangePerSqm})` : "";
  const sale = p.saleAvgPerSqm ? `La venta se mueve en torno a ${p.saleAvgPerSqm}` : "";
  const saleRange = p.saleRangePerSqm ? ` (${p.saleRangePerSqm})` : "";

  const hoodSample = profile.neighborhoods
    .slice(0, 3)
    .map((n) => n.name)
    .join(", ");

  switch (service) {
    case "alquiler-lau":
      return `${profile.marketSummary} ${rent}${rentRange}. En barrios como ${hoodSample}, propietario e inquilino suelen cerrar alquiler entre particulares por Idealista o recomendación — pero firman PDF genéricos que no reflejan renta de mercado del barrio, comunidad en bloques sin ascensor ni reparto de suministros. Livendia redacta contrato LAU (${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.) con inventario, cláusulas adaptadas al inmueble concreto y orientación sobre modalidad habitual frente a temporada cuando aplica.`;
    case "alquiler-temporada":
      return `${profile.marketSummary} ${rent}${rentRange}. En ${city}, temporada académica, estancia laboral o veraneo exigen contrato distinto al LAU de larga duración: límites de estancia, ocupación máxima y suministros mal definidos generan conflictos en ${hoodSample} y zonas similares. Livendia redacta contrato de temporada con duración acorde al motivo real del arrendamiento e inventario fotográfico antes de entregar la fianza.`;
    case "venta":
      return `${profile.marketSummary} ${sale}${saleRange}${p.avgSalePrice ? `. Precio medio de vivienda usada: ${p.avgSalePrice}` : ""}. Si ya tienes comprador en ${hoodSample} u otra zona, el riesgo no es el cartel sino arras penitenciales, comunidad y nota simple. Livendia gestiona servicio completo de venta por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — sin comisión del 3–5 % sobre el precio de venta.`;
    case "compra":
      return `${profile.marketSummary} ${sale}${saleRange}. Comprar entre particulares en ${city} — especialmente en ${hoodSample} — suele ir con prisa: conviene revisar arras, derramas e ITE antes de ingresar la señal. Livendia actúa como gestor del comprador: traduce riesgos registrales y contractuales con tarifa plana de gestoría.`;
    case "vender-sin-agencia":
      return `${profile.marketSummary} ${sale}${saleRange}${p.avgSalePrice ? `. Con precio medio ~${p.avgSalePrice}, una comisión del 3 % supone miles de euros solo por intermediar` : ""}. Vender sin agencia en ${city} tiene sentido cuando ya tienes comprador en ${hoodSample} o barrios colindantes. Livendia cubre reserva, arras, trámites y notaría por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — no buscamos comprador ni cobramos porcentaje sobre el precio.`;
    case "gestoria":
      return `${profile.marketSummary} ${rent}${rentRange}; ${sale}${saleRange}. El hub de gestoría en ${city} agrupa venta entre particulares, contrato de arras, LAU, temporada y revisión documental — cada servicio con tarifa plana publicada y gestor humano, adaptado a barrios como ${hoodSample} donde conviven operaciones residenciales, universitarias y de segunda residencia.`;
  }
}

function serviceNotes(
  profile: LocalCityMarketProfile,
  service: LocalLandingServiceKind,
): readonly { title: string; body: string }[] {
  const city = profile.cityLabel;
  switch (service) {
    case "alquiler-lau":
      return [
        {
          title: `Inventario acorde al parque de ${city}`,
          body: "Documentamos estado de pintura, electrodomésticos y zonas comunes antes de entregar llaves — clave en edificios antiguos o pisos amueblados.",
        },
        {
          title: "Fianza y actualización de renta",
          body: "Verificamos depósito legal, cláusulas de IPC o referencia indexada y coherencia con la renta pactada en visita.",
        },
        {
          title: "Piso completo, habitación o LAU atípico",
          body: "Redactamos contrato según uso real: piso entero, habitación en piso compartido u operaciones con garaje o trastero incluido.",
        },
      ];
    case "alquiler-temporada":
      return [
        {
          title: "Duración y causa de la estancia",
          body: "Definimos plazo máximo, prórroga y motivo (curso, trabajo, reforma) para no confundir temporada con LAU habitual.",
        },
        {
          title: "Suministros y ocupación",
          body: "Reparto de luz, agua, gas o internet y límite de personas/pernoctaciones — especialmente en zonas turísticas o universitarias.",
        },
        {
          title: "Addenda si se alarga la estancia",
          body: "Te orientamos si conviene nuevo contrato o addenda antes de prorrogar sin escrito.",
        },
      ];
    case "venta":
    case "vender-sin-agencia":
      return [
        {
          title: "Arras antes de ingresar señal",
          body: "Redactamos penalizaciones, plazos de hipoteca del comprador y objeto del contrato coherentes con el precio de mercado local.",
        },
        {
          title: "Comunidad y registral",
          body: "Checklist de derramas, certificado de deuda cero y nota simple antes de comprometer el inmueble.",
        },
        {
          title: "Plusvalía y calendario de notaría",
          body: "Coordinamos hitos con comprador y orientamos documentación municipal del vendedor.",
        },
      ];
    case "compra":
      return [
        {
          title: "Revisión de arras firmadas",
          body: "Detectamos cláusulas desequilibradas, plazos irreales o lagunas sobre cargas antes de que transfieras la señal.",
        },
        {
          title: "Due diligence pre-escritura",
          body: "Cruzamos nota simple, ITE si procede, comunidad y coherencia entre reserva y contrato definitivo.",
        },
        {
          title: "Mediación sin sustituirte",
          body: "Tú negocias precio; el gestor ordena documentación y plazos hasta notaría.",
        },
      ];
    case "gestoria":
      return [
        {
          title: "Tarifas planas publicadas",
          body: "Venta 890 €, arras 145 €, LAU 145 €, revisión post-arras 350 € — sin comisión sobre precio de operación.",
        },
        {
          title: "Un gestor por expediente",
          body: "Misma persona por WhatsApp y panel Livendia, no call center.",
        },
        {
          title: "Cobertura barrios y municipios del área",
          body: `Operamos en capital y área metropolitana de ${city} con el mismo protocolo documental.`,
        },
      ];
  }
}

function priceFaq(profile: LocalCityMarketProfile, service: LocalLandingServiceKind) {
  const p = profile.prices;
  const items: { question: string; answer: string }[] = [];
  if (p.rentalAvgPerSqm && (service === "alquiler-lau" || service === "alquiler-temporada" || service === "gestoria")) {
    items.push({
      question: `¿Cuánto cuesta alquilar un piso en ${profile.cityLabel}?`,
      answer: `Referencia orientativa: ${p.rentalAvgPerSqm}${p.rentalRangePerSqm ? `; rango por barrio: ${p.rentalRangePerSqm}` : ""}. ${p.sourceNote} Livendia no fija rentas: redacta el contrato LAU o temporada acorde a lo pactado entre las partes.`,
    });
  }
  if (p.saleAvgPerSqm && service !== "alquiler-lau" && service !== "alquiler-temporada") {
    items.push({
      question: `¿A cuánto se vende el metro cuadrado en ${profile.cityLabel}?`,
      answer: `Referencia orientativa: ${p.saleAvgPerSqm}${p.saleRangePerSqm ? ` (${p.saleRangePerSqm})` : ""}${p.avgSalePrice ? `; precio medio vivienda usada ~${p.avgSalePrice}` : ""}. ${p.sourceNote}`,
    });
  }
  if (profile.neighborhoods.length >= 2) {
    const top = profile.neighborhoods.slice(0, 2);
    items.push({
      question: `¿En qué barrios de ${profile.cityLabel} trabajáis con más frecuencia?`,
      answer: `Entre otros: ${top.map((n) => `${n.name}${n.rentalPerSqm || n.salePerSqm ? ` (${n.rentalPerSqm ?? n.salePerSqm})` : ""}`).join("; ")}. Cubrimos capital y área metropolitana con gestoría online.`,
    });
  }
  return items;
}

/** Enriquece campos de diferenciación con barrios, precios €/m² y notas de servicio. */
export function enrichWithCityMarketProfile(
  slug: string,
  service: LocalLandingServiceKind,
  fields: LocalDifferentiationFields = {},
): LocalCityLandingFields & { faq?: readonly { question: string; answer: string }[] } {
  const profileKey = resolveCityProfileSlug(slug);
  const profile = profileKey ? LOCAL_CITY_MARKET_PROFILES[profileKey] : undefined;
  if (!profile) return fields;

  const neighborhoods: readonly LocalNeighborhoodDetail[] = profile.neighborhoods;
  const enrichedInsight = serviceInsight(profile, service);
  const localMarketInsight = enrichedInsight;

  return mergeLocalDifferentiation(fields, {
    localMarketInsight,
    localPriceSnapshot: profile.prices,
    localNeighborhoods: neighborhoods,
    localServiceNotes: serviceNotes(profile, service),
    localZonesHeading: fields.localZonesHeading ?? `Barrios de ${profile.cityLabel} donde trabajamos`,
    localZones:
      fields.localZones ??
      neighborhoods.map((n) => `${n.name}${n.rentalPerSqm ? ` (${n.rentalPerSqm} alquiler)` : n.salePerSqm ? ` (${n.salePerSqm} venta)` : ""}`).join(", ") +
        " y municipios del área metropolitana.",
    faq: priceFaq(profile, service),
  });
}
