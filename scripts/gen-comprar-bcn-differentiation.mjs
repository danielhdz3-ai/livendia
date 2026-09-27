/**
 * Genera copy único de comprador por zona AMB (no copia literal de venta).
 * Salida: src/lib/comprar-piso-sin-agencia-bcn-metro-differentiation.ts
 */
import fs from "fs";

/** Barrios + ángulo de riesgo comprador por slug. */
const ZONE_BUYER_ANGLES = {
  "barcelona-les-corts": {
    hoods: "Pedralbes, Zona Universitària o Les Corts centre",
    risk: "Parking anexo mal descrito en el anuncio y arras sin revisar cargas en fincas de alta cota.",
    intro2:
      "Revisamos arras CCCat, cèdula e ITE antes de señal. Tarifa plana 890 € IVA incl.: gestoría del comprador, no agencia captadora.",
  },
  "hospitalet-de-llobregat": {
    hoods: "Collblanc, Bellvitge o centre de L'Hospitalet",
    risk: "Contratos estándar del vendedor con plazos de hipoteca imposibles en bloques del Baix Llobregat.",
    intro2:
      "Compradores de Barcelona capital aterrizan aquí por precio: conviene due diligence de comunidad y registral antes de la reserva.",
  },
  "barcelona-horta-guinardo": {
    hoods: "Guinardó, El Carmel, Horta centre o La Teixonera",
    risk: "Edificios en ladera con ITE pendiente y arras firmadas el mismo fin de semana de la visita.",
    intro2:
      "Livendia traduce estado del edificio y cláusulas de arras a decisiones concretas — sin comisión sobre el precio del piso.",
  },
  "barcelona-sant-marti": {
    hoods: "Poblenou, El Clot, Diagonal Mar o La Verneda",
    risk: "Operaciones rápidas en el 22@ con documentación de comunidad multi-bloque incompleta.",
    intro2:
      "Ideal si compras entre particulares o con agencia solo del vendedor: un gestor fijo hasta notaría.",
  },
  "barcelona-sant-andreu": {
    hoods: "Sant Andreu de Palomar, La Sagrera o Trinitat Vella",
    risk: "Reformas recientes sin licencia reflejada en contrato y derramas no mencionadas en visita.",
    intro2:
      "Checklist comprador: nota simple, comunidad, energético y coherencia reserva–arras en el distrito nord-est.",
  },
  "barcelona-eixample": {
    hoods: "Dreta de l'Eixample, Esquerra, Sagrada Família o Fort Pienc",
    risk: "Precio alto y borradores de arras copiados de agencia con penalizaciones desequilibradas hacia el comprador.",
    intro2:
      "En el Eixample el margen de error en una cláusula mala supera con creces la gestoría: 890 € IVA incl. por acompañamiento completo.",
  },
  "barcelona-gracia": {
    hoods: "Vila de Gràcia, Camp d'en Grassot o Vallcarca",
    risk: "Locales comerciales en planta baja mal delimitados en arras y fincas con protección patrimonial.",
    intro2:
      "Compra entre particulares muy habitual por boca a boca: revisamos objeto del contrato y cargas antes de señal.",
  },
  "barcelona-sants-montjuic": {
    hoods: "Sants, Hostafrancs, Poble-sec o la Marina del Prat Vermell",
    risk: "Obra nueva junto a finca antigua: mezcla de garantías, ITE y plazos de entrega confusos.",
    intro2:
      "Coordinamos calendario con vendedor e hipoteca sin que pierdas el piso por un plazo mal redactado.",
  },
  badalona: {
    hoods: "Centre, Gorg, La Salut o el litoral de Badalona",
    risk: "Compradores que vienen de Barcelona capital y firman reserva sin certificado de deuda de comunidad.",
    intro2:
      "Gestoría online del comprador con panel Livendia: misma rigurosidad que una agencia, sin % sobre el precio.",
  },
  sabadell: {
    hoods: "Centre, Eixample de Sabadell o Creu Alta",
    risk: "Operaciones Vallès con arras redactadas solo a favor del vendedor y sin condición suspensiva de hipoteca clara.",
    intro2:
      "Revisión de reserva y arras antes de transferir señal — protocolo Livendia desde la primera llamada.",
  },
  "barcelona-sarria-sant-gervasi": {
    hoods: "Sarrià, Sant Gervasi o Bonanova",
    risk: "Viviendas unifamiliares y pisos señorial con servidumbres o anejos mal descritos en contrato.",
    intro2:
      "Due diligence registral exigente: encaja visita, anuncio y lo que firmas en arras penitenciales.",
  },
  "barcelona-nou-barris": {
    hoods: "Verdum, Roquetes, Trinitat Nova o Porta",
    risk: "Bloques con historial de derramas importantes y presión del vendedor para firmar arras en 48 h.",
    intro2:
      "Te explicamos en castellano claro qué obliga cada cláusula antes de ingresar arras en Nou Barris.",
  },
  "barcelona-ciutat-vella": {
    hoods: "Gòtic, Raval, Sant Pere o la Barceloneta",
    risk: "Fincas históricas: ITE, cèdula y licencias de reforma que no cuadran con lo visto en Idealista.",
    intro2:
      "Informe semáforo pre-arras en casco antiguo — especialmente si compras sin agencia compradora.",
  },
  terrassa: {
    hoods: "Centre, Sant Pere o la Maurina",
    risk: "Compradores que desplazan desde Barcelona y no verifican deuda de comunidad en bloques grandes.",
    intro2:
      "Acompañamiento hasta escritura en notaría del Vallès con gestor humano, no call center.",
  },
  "cornella-de-llobregat": {
    hoods: "Centre, Sant Ildefons o Almeda",
    risk: "Arras con referencias a obra o parking compartido sin cuadro registral claro.",
    intro2:
      "Compra entre particulares en el Baix Llobregat con revisión CCCat y seguimiento post-arras.",
  },
  "sant-cugat-del-valles": {
    hoods: "Centre, Mira-sol o Valldoreix",
    risk: "Precios altos del Vallès Occidental y contratos bilingües mal entendidos por compradores externos.",
    intro2:
      "Detectamos honorarios encadenados de agencias y plazos de financiación irreales antes de la señal.",
  },
  "esplugues-de-llobregat": {
    hoods: "Centre, Can Vidalet o Finestrelles",
    risk: "Compradores de Barcelona que cierran rápido sin revisar actas de comunidad en bloques en altura.",
    intro2:
      "Tarifa plana frente a errores que en Esplugues pueden costar miles de euros en derramas ocultas.",
  },
  castelldefels: {
    hoods: "Centre, Montmar o Bellamar",
    risk: "Segunda residencia y vivienda habitual mezcladas: documentación del vendedor incompleta antes de arras.",
    intro2:
      "Castelldefels concentra compras entre particulares desde Idealista: revisamos ITE, cèdula y arras CCCat por 890 € IVA incl.",
  },
  gava: {
    hoods: "Centre, Gavà Mar o Santa Rosa",
    risk: "Operaciones en primera línea de mar con cláusulas de estado del piso vagas en reserva.",
    intro2:
      "Gestor del comprador desde la reserva hasta notaría — sin buscar piso ni cobrar comisión sobre precio.",
  },
  "sant-adria-de-besos": {
    hoods: "Centre, La Verneda adrienca o el Fòrum",
    risk: "Bloques con comunidades complejas y arras firmadas sin certificado energético coherente.",
    intro2:
      "Comprar sin agencia en Sant Adrià es legal y habitual; el riesgo está en firmar sin gestoría del comprador.",
  },
  "sant-boi-de-llobregat": {
    hoods: "Centre, Marianao o el Prat de Llobregat colindante",
    risk: "Precio atractivo y presión para reserva inmediata sin nota simple actualizada.",
    intro2:
      "Cruzamos titular registral, cargas y lo pactado verbalmente antes de que el dinero quede atado.",
  },
  "sant-joan-despi": {
    hoods: "Centre, Les Planes o la zona del TV3",
    risk: "Pisos reformados con licencias urbanísticas pendientes no reflejadas en arras.",
    intro2:
      "Mismo gestor por WhatsApp durante toda la compra en Sant Joan Despí y área metropolitana.",
  },
  "mollet-del-valles": {
    hoods: "Centre, Gallecs o zona estación",
    risk: "Compradores del Vallès Oriental que aceptan plantillas de arras sin plazo realista de hipoteca.",
    intro2:
      "Revisión documental y coordinación con notaría — gestoría Livendia 890 € IVA incl.",
  },
  "barcelona-poblenou": {
    hoods: "22@, Diagonal Mar o La Verneda al Poblenou",
    risk: "Locales convertidos a vivienda y comunidades con obras aprobadas no declaradas al comprador.",
    intro2:
      "Poblenou va rápido: conviene gestor antes de señal, no después de una cláusula irreversible.",
  },
  "barcelona-born": {
    hoods: "El Born, la Ribera o Sant Pere de Ciutat Vella",
    risk: "Encanto del casco antiguo con ITE severa o cargas que el vendedor minimiza en la visita.",
    intro2:
      "Compra entre particulares en El Born con Arnau Martí y Daniel Hernández al frente del criterio jurídico Livendia.",
  },
};

const slugs = Object.keys(ZONE_BUYER_ANGLES);

function buildEntry(slug, z) {
  const cityMatch = fs
    .readFileSync("src/lib/comprar-piso-sin-agencia-bcn-metro-cities.ts", "utf8")
    .match(new RegExp(`slug: "${slug}"[\\s\\S]*?city: "([^"]+)"`));
  const city = cityMatch?.[1] ?? slug;
  const highlightMatch = fs
    .readFileSync("src/lib/comprar-piso-sin-agencia-bcn-metro-cities.ts", "utf8")
    .match(new RegExp(`slug: "${slug}"[\\s\\S]*?highlightSalePrice: ([\\d_]+)`));
  const highlight = highlightMatch?.[1]?.replace(/_/g, "") ?? "350000";
  const highlightNum = Number(highlight);
  const agency3 = Math.round(highlightNum * 0.03 * 1.21);

  return `  "${slug}": {
    metaTitle: "Comprar piso sin agencia en ${city} — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en ${city} entre particulares sin agencia? ${z.risk.split(".")[0]}. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En ${city} (${z.hoods.split(" o ")[0]}…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en ${city}: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · ${city}",
      heroH1: "¿Compras piso en ${city} sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en ${z.hoods}? ${z.risk} Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en ${city}",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En ${city}, un 3 % orientativo sobre ${highlightNum.toLocaleString("es-ES")} € son ${agency3.toLocaleString("es-ES")} € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en ${city} con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en ${city} — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en ${city} y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en ${city} con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en ${city} — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "${city} · comprador particular",
      title: "Comprar en ${city} sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En ${city} (${z.hoods}) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. ${z.risk}",
        "${z.intro2}",
      ],
    },
  }`;
}

const body = slugs.map((s) => buildEntry(s, ZONE_BUYER_ANGLES[s])).join(",\n");

const out = `import type { ComprarPisoSinAgenciaCopyOverrides } from "@/lib/comprar-piso-sin-agencia-local-cities";

type ComprarMetroDiff = {
  metaTitle?: string;
  metaDescription?: string;
  tramitesAreaNote?: string;
  benefitsAreaNote?: string;
  copy?: ComprarPisoSinAgenciaCopyOverrides;
  barcelonaZoneIntro?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
};

/** Copy único por zona AMB — perspectiva comprador (no duplica landings de venta). */
export const COMPRAR_PISO_BCN_METRO_DIFFERENTIATION: Record<string, ComprarMetroDiff> = {
${body},
};
`;

fs.writeFileSync("src/lib/comprar-piso-sin-agencia-bcn-metro-differentiation.ts", out);
console.log("Wrote differentiation for", slugs.length, "zones");
