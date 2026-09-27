import {
  isComprarPisoSinAgenciaSlugPublished,
  localComprarPisoSinAgenciaHref,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import {
  isVenderPisoSinAgenciaSlugPublished,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { localServicioCompletoCompraHref } from "@/lib/servicio-completo-compra-local-cities";
import { localServicioCompletoVentaHref } from "@/lib/servicio-completo-venta-local-cities";

export type SinAgenciaSide = "compra" | "venta";

export type SinAgenciaTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type SinAgenciaLocalEnrichment = {
  heroImageSrc: string;
  heroImageAlt: string;
  testimonials: readonly SinAgenciaTestimonial[];
  commonMistakes: readonly string[];
  /** Coste orientativo de un error documental (compra) o conflicto post-arras (venta). */
  typicalRiskEur: number;
  normativaTitle: string;
  normativaBullets: readonly string[];
  blogHref: string;
  blogLabel: string;
  gestorQuote: { name: "Arnau Martí" | "Daniel Hernández"; quote: string };
};

export type SinAgenciaCrossLink = { href: string; label: string };

const ZONAS = "/images/zonas barcelona";

const HERO_BY_SLUG: Record<string, string> = {
  barcelona: `${ZONAS}/barcelona.jpg`,
  "barcelona-eixample": `${ZONAS}/eixample.jpg`,
  "barcelona-gracia": `${ZONAS}/gracia.jpg`,
  "barcelona-horta-guinardo": `${ZONAS}/guinardo.jpg`,
  "barcelona-sant-marti": `${ZONAS}/santmarti.jpg`,
  "barcelona-sant-andreu": `${ZONAS}/santandreu.jpg`,
  "barcelona-sants-montjuic": `${ZONAS}/sants.jpg`,
  "barcelona-sarria-sant-gervasi": `${ZONAS}/santgervasi.jpg`,
  "barcelona-nou-barris": `${ZONAS}/barcelona2.jpg`,
  "barcelona-ciutat-vella": `${ZONAS}/ciutatvella.jpg`,
  "barcelona-born": `${ZONAS}/rabal.jpg`,
  "barcelona-poblenou": `${ZONAS}/poblenou.jpg`,
  "barcelona-les-corts": `${ZONAS}/santgervasi2.jpg`,
  "hospitalet-de-llobregat": `${ZONAS}/hospitalet.jpg`,
  "esplugues-de-llobregat": `${ZONAS}/esplugues.jpg`,
  "sant-joan-despi": `${ZONAS}/santjoandespi.jpg`,
  badalona: `${ZONAS}/barcelona2.jpg`,
  castelldefels: `${ZONAS}/barcelona.jpg`,
  madrid: "/images/gestoria3.jpg",
  valencia: "/images/gestoria3.jpg",
  malaga: "/images/gestoria3.jpg",
  sevilla: "/images/gestoria3.jpg",
  bilbao: "/images/gestoria3.jpg",
};

const SLUG_OVERRIDES: Record<
  string,
  Partial<Pick<SinAgenciaLocalEnrichment, "commonMistakes" | "typicalRiskEur" | "testimonials">>
> = {
  castelldefels: {
    typicalRiskEur: 12_000,
    commonMistakes: [
      "Firmar arras en Castelldefels sin comprobar si el vendedor tiene la vivienda al día con la comunidad.",
      "Confiar en el anuncio sobre el estado del edificio sin pedir ITE o acta de inspección reciente.",
      "Aceptar plazo de hipoteca de 15 días cuando el banco suele necesitar 5–8 semanas.",
    ],
  },
  "barcelona-eixample": {
    typicalRiskEur: 15_000,
    commonMistakes: [
      "Firmar arras en el Eixample con cláusula penal solo contra el comprador.",
      "No revisar si el parking o trastero anexo está inscrito como anejo registral.",
      "Pagar señal antes de ver certificado energético coherente con la visita.",
    ],
  },
  "barcelona-ciutat-vella": {
    typicalRiskEur: 18_000,
    commonMistakes: [
      "Comprar en finca protegida sin entender limitaciones de obra futura.",
      "Arras sin condicionar a ITE favorable o plan de subsanación acordado en comunidad.",
      "No contrastar metros útiles registrales con lo mostrado en la visita.",
    ],
  },
  "hospitalet-de-llobregat": {
    typicalRiskEur: 9_000,
    commonMistakes: [
      "Reserva firmada en L'Hospitalet sin cláusula de devolución si la hipoteca cae.",
      "No pedir certificado de deuda cero en bloques con derrama reciente.",
      "Aceptar arras redactadas por la agencia del vendedor sin revisión del comprador.",
    ],
  },
  madrid: {
    typicalRiskEur: 10_000,
    commonMistakes: [
      "Firmar reserva en Madrid con honorarios de agencia encadenados no negociados.",
      "Arras sin condición suspensiva de financiación clara.",
      "No revisar cargas antes de transferir señal en operaciones entre particulares.",
    ],
  },
};

function hubSlugForGestoria(slug: string): string {
  if (slug === "barcelona" || slug.startsWith("barcelona-")) return "barcelona";
  if (
    [
      "hospitalet-de-llobregat",
      "badalona",
      "castelldefels",
      "cornella-de-llobregat",
      "esplugues-de-llobregat",
      "sant-adria-de-besos",
      "sant-boi-de-llobregat",
      "sant-cugat-del-valles",
      "sant-joan-despi",
      "gava",
      "mollet-del-valles",
      "sabadell",
      "terrassa",
    ].includes(slug)
  ) {
    return "barcelona";
  }
  if (["madrid", "valencia", "malaga", "sevilla", "bilbao", "granada", "zaragoza"].includes(slug)) {
    return slug;
  }
  return "barcelona";
}

function normativaFor(area: string, side: SinAgenciaSide): { title: string; bullets: readonly string[] } {
  const isCatalunya = area === "Cataluña";
  if (isCatalunya && side === "compra") {
    return {
      title: "Marco legal en Catalunya (comprador)",
      bullets: [
        "Código Civil de Catalunya (CCCat) en arras penitenciales y confirmatorias — arts. 621-4 a 621-9.",
        "Cèdula d'habitabilitat y certificado energético obligatorios en compraventa.",
        "ITE / IITE en edificios con más de 45 años: conviene condicionar arras a informe favorable.",
        "Impuesto de transmisiones patrimoniales (ITP) en vivienda usada — plazos autonómicos.",
      ],
    };
  }
  if (isCatalunya && side === "venta") {
    return {
      title: "Marco legal en Catalunya (vendedor)",
      bullets: [
        "Arras y reserva conforme al CCCat; coherencia entre señal, precio y plazo a escritura.",
        "Certificado de estar al corriente con la comunidad antes de escritura en muchas operaciones.",
        "Plusvalía municipal (IIVTNU) — orientación sobre bonificaciones según municipio.",
        "Cèdula d'habitabilitat vigente exigida al vendedor en la compraventa.",
      ],
    };
  }
  if (side === "compra") {
    return {
      title: "Marco legal en la compra (España)",
      bullets: [
        "Código Civil estatal en arras penitenciales (art. 1454) y condiciones suspensivas de hipoteca.",
        "Nota simple registral antes de señal: titular, cargas y coherencia con el vendedor.",
        "ITP o IVA según tipo de inmueble y vendedor — plazos en la comunidad autónoma.",
        "Gastos de notaría y registro a cargo del comprador según arancel habitual.",
      ],
    };
  }
  return {
    title: "Marco legal en la venta entre particulares",
    bullets: [
      "Contrato de arras redactado antes de ingresos elevados de señal del comprador.",
      "Certificados de la comunidad y deuda cero cuando el estatuto lo exige.",
      "Plusvalía municipal e IRPF del vendedor — plazos orientativos según ayuntamiento.",
      "Coordinación con hipoteca del vendedor si cancelación pendiente antes de escritura.",
    ],
  };
}

function defaultTestimonials(city: string, side: SinAgenciaSide): SinAgenciaTestimonial[] {
  if (side === "compra") {
    return [
      {
        quote:
          "Nos presionaron con una reserva estándar en el barrio. Livendia marcó plazos imposibles y una derrama que no nos habían contado; negociamos antes de pagar.",
        author: "Sara & David",
        role: `Compradores, ${city}`,
      },
      {
        quote:
          "Primera compra entre particulares: el gestor nos guió de arras a notaría sin sentirnos solos frente al contrato del vendedor.",
        author: "Jorge M.",
        role: `Comprador, ${city}`,
      },
    ];
  }
  return [
    {
      quote:
        "Ya teníamos comprador por Idealista. Livendia ordenó arras y comunidad; evitamos pagar comisión de agencia sobre el precio.",
      author: "María T.",
      role: `Vendedora, ${city}`,
    },
    {
      quote:
        "Venta de particular a particular en el distrito: mismo gestor desde la llamada inicial hasta la firma en notaría.",
      author: "Pau R.",
      role: `Vendedor, ${city}`,
    },
  ];
}

function defaultMistakes(city: string, side: SinAgenciaSide): string[] {
  if (side === "compra") {
    return [
      `Firmar arras en ${city} sin revisar nota simple y cargas registrales.`,
      `Transferir señal con plazos de hipoteca irreales impuestos por el vendedor o su agencia.`,
      `No pedir certificado de deuda cero de comunidad antes de comprometer importes altos.`,
    ];
  }
  return [
    `Vender en ${city} con contrato de arras copiado de internet y penalizaciones desequilibradas.`,
    `Firmar reserva sin verificar certificados de comunidad o ITE pendiente del edificio.`,
    `Llegar a notaría con documentación incompleta y perder días de calendario con el comprador.`,
  ];
}

export function resolveSinAgenciaLocalEnrichment(params: {
  slug: string;
  city: string;
  schemaAdministrativeArea: string;
  side: SinAgenciaSide;
}): SinAgenciaLocalEnrichment {
  const { slug, city, schemaAdministrativeArea, side } = params;
  const override = SLUG_OVERRIDES[slug] ?? {};
  const heroImageSrc =
    HERO_BY_SLUG[slug] ?? (schemaAdministrativeArea === "Cataluña" ? `${ZONAS}/barcelona.jpg` : "/images/gestoria3.jpg");
  const sideLabel = side === "compra" ? "Compra" : "Venta";
  const normativa = normativaFor(schemaAdministrativeArea, side);

  const blog =
    side === "compra"
      ? {
          href: "/blog/comprar-piso-entre-particulares-sin-agencia-guia-completa",
          label: "Guía: comprar piso entre particulares sin agencia",
        }
      : {
          href: "/blog/que-es-un-contrato-de-arras",
          label: "Guía: qué es un contrato de arras entre particulares",
        };

  const gestorQuote =
    side === "compra"
      ? {
          name: "Arnau Martí" as const,
          quote: `En ${city}, la mayoría de conflictos de compradores empiezan en una arras firmada con prisa. Revisar CCCat o Código Civil antes de la señal cuesta una fracción de un error registral.`,
        }
      : {
          name: "Daniel Hernández" as const,
          quote: `Vender sin agencia en ${city} funciona bien cuando el tramo legal está ordenado: arras coherentes con el precio de mercado y documentación lista antes de notaría.`,
        };

  return {
    heroImageSrc,
    heroImageAlt: `${sideLabel} sin agencia en ${city} — gestoría Livendia`,
    testimonials: override.testimonials ?? defaultTestimonials(city, side),
    commonMistakes: override.commonMistakes ?? defaultMistakes(city, side),
    typicalRiskEur: override.typicalRiskEur ?? (side === "compra" ? 8_000 : 6_000),
    normativaTitle: normativa.title,
    normativaBullets: normativa.bullets,
    blogHref: blog.href,
    blogLabel: blog.label,
    gestorQuote,
  };
}

export function getSinAgenciaCrossLinks(params: {
  slug: string;
  city: string;
  side: SinAgenciaSide;
}): SinAgenciaCrossLink[] {
  const { slug, city, side } = params;
  const hub = hubSlugForGestoria(slug);
  const links: SinAgenciaCrossLink[] = [];

  if (side === "compra") {
    if (isVenderPisoSinAgenciaSlugPublished(slug)) {
      links.push({
        href: localVenderPisoSinAgenciaHref(slug),
        label: `Vender sin agencia en ${city}`,
      });
    } else if (isVenderPisoSinAgenciaSlugPublished(hub)) {
      links.push({
        href: localVenderPisoSinAgenciaHref(hub),
        label: `Vender sin agencia (${hub === "barcelona" ? "Barcelona" : city})`,
      });
    }
    links.push({
      href: localServicioCompletoCompraHref(hub),
      label: `Servicio completo de compra en ${hub === slug ? city : "Barcelona y área"}`,
    });
    links.push({
      href: "/servicios/revision-documental-post-arras",
      label: "Revisión documental post-arras (comprador)",
    });
  } else {
    if (isComprarPisoSinAgenciaSlugPublished(slug)) {
      links.push({
        href: localComprarPisoSinAgenciaHref(slug),
        label: `Comprar sin agencia en ${city}`,
      });
    } else if (isComprarPisoSinAgenciaSlugPublished(hub)) {
      links.push({
        href: localComprarPisoSinAgenciaHref(hub),
        label: `Comprar sin agencia (${hub === "barcelona" ? "Barcelona" : city})`,
      });
    }
    links.push({
      href: localServicioCompletoVentaHref(hub),
      label: `Servicio completo de venta en ${hub === slug ? city : "Barcelona y área"}`,
    });
    links.push({
      href: "/servicios/contrato-arras-penitenciales",
      label: "Contrato de arras penitenciales (145 €)",
    });
  }

  links.push({ href: `/gestoria/${hub}`, label: `Gestoría inmobiliaria ${city}` });
  links.push({ href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria", label: "Cuánto cuesta una gestoría inmobiliaria" });

  return links;
}
