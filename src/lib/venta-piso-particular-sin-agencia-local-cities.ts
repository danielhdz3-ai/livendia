/**
 * Landings SEO: venta de piso entre particulares cuando ya hay comprador.
 * Rutas: /servicios/venta-piso-particular-sin-agencia/[slug]
 */

import { getVentaPisoParticularSeoContent } from "@/lib/venta-piso-particular-sin-agencia-local-seo-content";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

export const VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE =
  "/servicios/venta-piso-particular-sin-agencia";

export const VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS: readonly string[] = [
  "barcelona-eixample",
  "barcelona-gracia",
  "barcelona-sants-montjuic",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "esplugues-de-llobregat",
  "sabadell",
  "terrassa",
];

export type VentaPisoParticularLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroBadge: string;
  heroH1: string;
  heroH2: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  savingsSalePrices: readonly number[];
  highlightSalePrice: number;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  seoContent: import("@/lib/venta-piso-particular-sin-agencia-local-seo-content").VentaPisoParticularSeoContent;
  faq: readonly { question: string; answer: string }[];
  arrasLocalSlug: string;
  gestoriaSlug: string;
};

export type VentaPisoParticularCityDefinition = Omit<
  VentaPisoParticularLocalLandingConfig,
  "path" | "seoContent" | "faq"
>;

export function localVentaPisoParticularSinAgenciaHref(slug: string): string {
  return `${VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE}/${slug}`;
}

export function toVentaPisoParticularLandingConfig(
  def: VentaPisoParticularCityDefinition,
): VentaPisoParticularLocalLandingConfig {
  const seoContent = getVentaPisoParticularSeoContent(def.slug);
  if (!seoContent) {
    throw new Error(`Missing SEO content for venta-piso-particular slug: ${def.slug}`);
  }
  return {
    ...def,
    path: localVentaPisoParticularSinAgenciaHref(def.slug),
    seoContent,
    faq: seoContent.faqLocal,
  };
}

export function getVentaPisoParticularLocalCity(
  slug: string,
): VentaPisoParticularCityDefinition | undefined {
  return VENTA_PISO_PARTICULAR_CITIES.find((c) => c.slug === slug);
}

export function isVentaPisoParticularSlugPublished(slug: string): boolean {
  return VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedVentaPisoParticularCities(): VentaPisoParticularCityDefinition[] {
  const pub = new Set(VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS);
  return VENTA_PISO_PARTICULAR_CITIES.filter((c) => pub.has(c.slug));
}

export const VENTA_PISO_PARTICULAR_CITIES: VentaPisoParticularCityDefinition[] = [
  {
    slug: "barcelona-eixample",
    city: "l'Eixample (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Eixample",
    heroH1: "Comprador en el Eixample: convierte el precio acordado en escritura segura",
    heroH2: "Gestor Livendia para arras, cédula y notaría — sin comisión del 3 %.",
    metaTitle: `Vender piso entre particulares en Eixample — gestor Livendia`,
    metaDescription: `Ya tienes comprador en l'Eixample. Arras CCCat, comunidad y notaría por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Sin agencia. Sant Antoni, Dreta, Sagrada Família.`,
    keywords: [
      "vender piso particular eixample barcelona",
      "venta entre particulares eixample",
      "gestor venta vivienda eixample",
      "vender sin agencia eixample barcelona",
      "arras eixample comprador particular",
    ],
    savingsSalePrices: [320_000, 380_000, 450_000, 520_000, 600_000, 720_000],
    highlightSalePrice: 450_000,
    arrasLocalSlug: "barcelona",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Vendedores del Eixample que cerraron con comprador particular y Livendia",
    testimonials: [
      {
        quote:
          "Comprador del Sant Antoni por recomendación. Livendia redactó arras con 621-49 y consiguió certificado de comunidad en un edificio de finca reglamentaria.",
        author: "Núria P.",
        role: "Vendedora — Sant Antoni",
      },
      {
        quote:
          "Piso en Dreta de l'Eixample: tres titulares y comprador con hipoteca. El gestor alineó plazos bancarios y notaría en ocho semanas.",
        author: "Marc & Irene",
        role: "Vendedores — Eixample",
      },
    ],
    finalCtaLead:
      "Eixample: tu comprador ya está — Livendia gestiona la venta documental hasta la escritura.",
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Gràcia",
    heroH1: "Vendes en Gràcia a un particular: ordena arras antes de la señal",
    heroH2: "Un gestor Livendia coordina CCCat, inventario de finca y notaría.",
    metaTitle: `Venta piso particular Gràcia Barcelona — sin comisión agencia`,
    metaDescription: `Comprador encontrado en Gràcia. Gestor Livendia: arras, documentación y firma. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Vila de Gràcia, Camp d'en Grassot, La Salut.`,
    keywords: [
      "vender piso particular gracia barcelona",
      "venta entre particulares gracia",
      "gestor venta vivienda gracia",
      "vender sin inmobiliaria gracia",
      "contrato arras gracia comprador particular",
    ],
    savingsSalePrices: [280_000, 340_000, 400_000, 460_000, 520_000, 580_000],
    highlightSalePrice: 400_000,
    arrasLocalSlug: "barcelona",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Propietarios en Gràcia que vendieron entre particulares con Livendia",
    testimonials: [
      {
        quote:
          "Venta en Vila de Gràcia sin ascensor. El gestor detectó cédula caducada tres semanas antes de notaría — tiempo de renovar sin perder al comprador.",
        author: "Jordi L.",
        role: "Vendedor — Gràcia",
      },
      {
        quote:
          "Compradora conocida del barrio. Livendia explicó arras penitenciales y reparto de IBI antes de que firmáramos la señal en un bar.",
        author: "Marta S.",
        role: "Vendedora — Camp d'en Grassot",
      },
    ],
    finalCtaLead:
      "Gràcia: cierra con tu comprador particular con gestor dedicado Livendia — tarifa plana.",
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Sants-Montjuïc",
    heroH1: "Comprador en Sants o Poble-sec: cierra la venta sin pagar captación",
    heroH2: "Livendia lleva arras, comunidad y banco del comprador hasta notaría.",
    metaTitle: `Vender piso particular Sants Poble-sec — gestor Livendia`,
    metaDescription: `Venta entre particulares en Sants-Montjuïc. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Arras, cédula, ITE y notaría. Sants, Hostafrancs, Poble-sec.`,
    keywords: [
      "vender piso particular sants barcelona",
      "venta entre particulares poble sec",
      "gestor venta vivienda sants montjuic",
      "vender sin agencia sants",
      "arras sants comprador particular",
    ],
    savingsSalePrices: [220_000, 260_000, 300_000, 340_000, 380_000, 420_000],
    highlightSalePrice: 300_000,
    arrasLocalSlug: "barcelona",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Vendedores en Sants-Montjuïc con comprador ya encontrado",
    testimonials: [
      {
        quote:
          "Comprador en Poble-sec con hipoteca. Cláusula 621-49 bien redactada evitó conflicto cuando el banco tardó diez días más.",
        author: "Sergi R.",
        role: "Vendedor — Poble-sec",
      },
      {
        quote:
          "Piso en Sants Estació vendido a compañero de trabajo. Livendia ordenó derrama en comunidad que no estaba en el borrador de arras.",
        author: "Aina V.",
        role: "Vendedora — Sants",
      },
    ],
    finalCtaLead:
      "Sants-Montjuïc: tu comprador te espera — Livendia es tu gestor inmobiliario hasta la firma.",
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · L'Hospitalet",
    heroH1: "Comprador en L'Hospitalet: ¿arras, comunidad y notaría sin improvisar?",
    heroH2: "Tu gestor Livendia cierra la venta documental — tarifa plana, cero comisión.",
    metaTitle: `Venta piso particular L'Hospitalet — gestor sin comisión`,
    metaDescription: `Ya tienes comprador en L'Hospitalet. Gestor inmobiliario Livendia: arras, documentación y notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Sin comisión. Centre, Bellvitge, Collblanc.`,
    keywords: [
      "vender piso de particular sin agencia hospitalet",
      "vender piso sin inmobiliaria l hospitalet",
      "venta entre particulares hospitalet",
      "vender piso sin comisiones hospitalet",
      "gestor venta vivienda hospitalet",
      "ayuda vender piso particular hospitalet",
      "gestión documental venta vivienda hospitalet",
    ],
    savingsSalePrices: [160_000, 200_000, 240_000, 280_000, 320_000, 360_000],
    highlightSalePrice: 240_000,
    arrasLocalSlug: "hospitalet-de-llobregat",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Vendedores particulares en L'Hospitalet que cerraron con Livendia",
    testimonials: [
      {
        quote:
          "Encontré comprador por Idealista en Collblanc. Livendia redactó las arras, pidió la comunidad y llegamos a notaría sin sorpresas — sin pagar comisión de agencia.",
        author: "Miguel R.",
        role: "Vendedor, Collblanc",
      },
      {
        quote:
          "Vendíamos entre familia y conocidos en Bellvitge. El gestor explicó el 621-49 al comprador con hipoteca y ordenó toda la documentación catalana.",
        author: "Ana & Pedro",
        role: "Vendedores, Bellvitge",
      },
    ],
    finalCtaLead:
      "Ya tienes comprador en L'Hospitalet — contrata tu gestor Livendia y cierra la venta con seguridad.",
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Cornellà",
    heroH1: "Vendes en Cornellà a un particular: blinda el acuerdo antes de la señal",
    heroH2: "Gestor Livendia, CCCat y checklist hasta escritura — sin captar comprador.",
    metaTitle: `Venta entre particulares Cornellà — gestor Livendia ${SERVICIO_COMPLETO_CV_PRICE_LABEL}`,
    metaDescription: `Comprador particular en Cornellà: gestor Livendia coordina arras, documentación y notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Sin comisión. Sant Ildefons, Centre, Can Mercader.`,
    keywords: [
      "vender piso de particular sin agencia cornella",
      "vender piso sin inmobiliaria cornella de llobregat",
      "venta entre particulares cornella",
      "vender piso sin comisiones cornella",
      "gestor venta vivienda cornella",
      "gestión documental venta vivienda cornella",
    ],
    savingsSalePrices: [170_000, 210_000, 250_000, 290_000, 330_000, 380_000],
    highlightSalePrice: 250_000,
    arrasLocalSlug: "cornella-de-llobregat",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Propietarios en Cornellà que vendieron entre particulares con Livendia",
    testimonials: [
      {
        quote:
          "Comprador particular en Sant Ildefons. El gestor detectó una derrama en comunidad que no estaba en el borrador de arras y la resolvimos a tiempo.",
        author: "Silvia M.",
        role: "Vendedora, Sant Ildefons",
      },
      {
        quote:
          "Venta sin agencia en Can Mercader: reserva, arras confirmatorias y checklist hasta notaría por tarifa plana. Ahorramos más de 8.000 € frente a comisión.",
        author: "David L.",
        role: "Vendedor, Cornellà",
      },
    ],
    finalCtaLead:
      "Tu comprador ya está — en Cornellà Livendia es tu gestor inmobiliario hasta la escritura.",
  },
  {
    slug: "esplugues-de-llobregat",
    city: "Esplugues de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Esplugues",
    heroH1: "Piso en Esplugues vendido entre conocidos — no dejes los papeles al azar",
    heroH2: "Livendia coordina arras, hipoteca del comprador y día de notaría.",
    metaTitle: `Vender piso particular Esplugues — acompañamiento Livendia`,
    metaDescription: `Vende en Esplugues a un particular con gestor Livendia: arras, documentación y notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Can Clota, Finestrelles, Centre.`,
    keywords: [
      "vender piso de particular sin agencia esplugues",
      "vender piso sin inmobiliaria esplugues de llobregat",
      "venta entre particulares esplugues",
      "vender piso sin comisiones esplugues",
      "gestor venta vivienda esplugues",
      "gestión documental venta vivienda esplugues",
    ],
    savingsSalePrices: [220_000, 280_000, 340_000, 400_000, 480_000, 550_000],
    highlightSalePrice: 340_000,
    arrasLocalSlug: "barcelona",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Vendedores en Esplugues que completaron la venta con gestor Livendia",
    testimonials: [
      {
        quote:
          "Vendí en Finestrelles a un comprador que conocía del trabajo. Livendia revisó arras, cédula y comunidad — operación impecable sin intermediarios.",
        author: "Elena V.",
        role: "Vendedora, Finestrelles",
      },
      {
        quote:
          "Piso en Can Clota con hipoteca pendiente. El gestor coordinó cancelación con el banco y la fecha de notaría sin que perdiéramos al comprador.",
        author: "Francesc P.",
        role: "Vendedor, Esplugues",
      },
    ],
    finalCtaLead:
      "Esplugues: vende a tu comprador particular con gestor especializado Livendia — sin comisión de agencia.",
  },
  {
    slug: "sabadell",
    city: "Sabadell",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Sabadell",
    heroH1: "Comprador en Sabadell (Creu Alta, centre, Can Rull): cierra sin regalar un 3 %",
    heroH2: "Gestor inmobiliario Livendia hasta notaría — tú ya elegiste al comprador.",
    metaTitle: `Venta piso particular Sabadell — gestor Livendia sin comisión`,
    metaDescription: `Ya tienes comprador en Sabadell. Gestor Livendia: arras, documentos y notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Creu Alta, Gràcia, Can Rull. Sin comisión.`,
    keywords: [
      "vender piso de particular sin agencia sabadell",
      "vender piso sin inmobiliaria sabadell",
      "venta entre particulares sabadell",
      "vender piso sin comisiones sabadell",
      "gestor venta vivienda sabadell",
      "gestión documental venta vivienda sabadell",
    ],
    savingsSalePrices: [180_000, 220_000, 260_000, 300_000, 350_000, 420_000],
    highlightSalePrice: 260_000,
    arrasLocalSlug: "sabadell",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Particulares en Sabadell que vendieron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Herencia de tres hermanos y comprador en Creu Alta. El gestor ordenó titularidades, arras y documentación de comunidad antes de fijar notaría.",
        author: "Montse & Joan",
        role: "Vendedores, Creu Alta",
      },
      {
        quote:
          "Venta entre particulares en Can Rull. Sin agencia, pero con gestor que entendió CCCat y plazos del banco del comprador. Cerramos en seis semanas.",
        author: "Rubén S.",
        role: "Vendedor, Sabadell",
      },
    ],
    finalCtaLead:
      "Sabadell: tu comprador te espera — Livendia gestiona la venta documental de principio a fin.",
  },
  {
    slug: "terrassa",
    city: "Terrassa",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Venta entre particulares · Terrassa",
    heroH1: "Acuerdo cerrado en Terrassa con tu comprador: conviértelo en escritura",
    heroH2: "Arras, ITE, comunidad y banco bajo un gestor Livendia de tarifa plana.",
    metaTitle: `Vender entre particulares Terrassa — servicio completo Livendia`,
    metaDescription: `Comprador particular en Terrassa: gestor Livendia coordina arras, documentos y firma. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Sant Pere, Les Arenes. Sin comisión.`,
    keywords: [
      "vender piso de particular sin agencia terrassa",
      "vender piso sin inmobiliaria terrassa",
      "venta entre particulares terrassa",
      "vender piso sin comisiones terrassa",
      "gestor venta vivienda terrassa",
      "gestión documental venta vivienda terrassa",
    ],
    savingsSalePrices: [170_000, 210_000, 250_000, 290_000, 330_000, 400_000],
    highlightSalePrice: 250_000,
    arrasLocalSlug: "terrassa",
    gestoriaSlug: "barcelona",
    testimonialsTitle: "Vendedores en Terrassa que cerraron venta entre particulares con Livendia",
    testimonials: [
      {
        quote:
          "Comprador de la zona de Sant Pere. Livendia redactó arras penitenciales equilibradas y consiguió el certificado de comunidad cuando el administrador tardaba.",
        author: "Carme T.",
        role: "Vendedora, Sant Pere",
      },
      {
        quote:
          "Vendí piso familiar en Les Arenes sin inmobiliaria. El gestor revisó ITE del edificio y energético caducado antes de que el comprador exigiera fecha.",
        author: "Oriol B.",
        role: "Vendedor, Terrassa",
      },
    ],
    finalCtaLead:
      "Terrassa: ya tienes acuerdo con tu comprador — Livendia es tu gestor hasta notaría.",
  },
];
