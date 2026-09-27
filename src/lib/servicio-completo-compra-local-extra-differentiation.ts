import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";

type CompraLocalDiff = Partial<LocalCityLandingFields>;

function cccatMunicipioDiff(options: {
  slug: string;
  city: string;
  metaPlace: string;
  heroZones: string;
  localZones: string;
  whySubtitle: string;
  keywords: string[];
}): CompraLocalDiff {
  const { city, metaPlace, heroZones, localZones, whySubtitle, keywords } = options;
  return {
    keywords,
    heroBadge: `Compra entre particulares · ${city} · CCCat`,
    heroH1: `Compra de particular a particular en ${city} — con asesor experto en CCCat`,
    metaTitle: `Comprar piso entre particulares en ${city} | Gestor comprador Livendia`,
    metaDescription: `¿Compras en ${metaPlace}? Gestor comprador: reserva, arras CCCat y art. 621-49. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Sin comisión de agencia.`,
    heroBullets: [
      `Compras a particular por Idealista o recomendación en ${city}`,
      "Cláusula 621-49 CCCat si compras con hipoteca",
      "Gestor fijo hasta firma en notaría de la zona",
    ],
    whyTitle: `${city}: compra entre particulares, contratos que hay que revisar`,
    whySubtitle,
    localZonesHeading: `Zonas de ${city} donde acompañamos compradores`,
    localZones,
    heroImage: "/images/barcelona2.jpg",
    localBenefits: [
      {
        title: "Arras conforme al CCCat",
        description:
          "Penitenciarias y confirmatorias explicadas antes de ingresar señal — especialmente en operaciones con prisa.",
      },
      {
        title: "Cláusula 621-49 si pides hipoteca",
        description: "Evita perder la señal si el banco deniega el préstamo.",
      },
      {
        title: "Comunidad y certificado de deuda",
        description: `Revisamos actas y plazos realistas del administrador en ${heroZones}.`,
      },
      {
        title: "Compra sin comisión de comprador",
        description: "Encuentras el piso tú; nosotros blindamos el tramo legal con tarifa plana.",
      },
      {
        title: "Panel Livendia con expediente",
        description: "Documentos, progreso e historial de actividad en tu área de cliente.",
      },
      {
        title: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido`,
        description: "Desde reserva hasta escritura en notaría.",
      },
    ],
    finalCtaTitle: `Cierra la compra en ${city} con documentación profesional`,
  };
}

export const COMPRA_LOCAL_EXTRA_DIFFERENTIATION: Record<string, CompraLocalDiff> = {
  badalona: cccatMunicipioDiff({
    slug: "badalona",
    city: "Badalona",
    metaPlace: "Badalona (centre, Montigala, Gorg, La Salut)",
    heroZones: "Montigala, Gorg o centre",
    localZones:
      "Centre, Montigala, Gorg, La Salut, Canyet, Bufalà y Sant Roc — gestoría online con protocolo CCCat en el Barcelonès Nord.",
    whySubtitle:
      "En el Maresme metropolitano muchas operaciones se cierran sin agencia compradora. Livendia adapta reserva y arras al CCCat antes de la señal.",
    keywords: [
      "comprar piso entre particulares badalona",
      "gestor compra vivienda badalona",
      "servicio completo compra badalona",
      "revisar reserva arras badalona",
      "clausula 621-49 cccat comprador badalona",
    ],
  }),
  castelldefels: cccatMunicipioDiff({
    slug: "castelldefels",
    city: "Castelldefels",
    metaPlace: "Castelldefels (centre, Montmar, Bellamar)",
    heroZones: "centre, Montmar o Bellamar",
    localZones:
      "Centre, Montmar, Bellamar, Baixador y urbanizaciones del litoral — mismo protocolo CCCat y panel Livendia.",
    whySubtitle:
      "Segundas residencias y compradores de fuera conviven con arras copiadas de Barcelona. Revisamos ITE, comunidad y cargas antes de transferir señal.",
    keywords: [
      "comprar piso entre particulares castelldefels",
      "gestor compra vivienda castelldefels",
      "servicio completo compra castelldefels",
      "revisar arras castelldefels",
      "compraventa particulares playa castelldefels",
    ],
  }),
  "cornella-de-llobregat": cccatMunicipioDiff({
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    metaPlace: "Cornellà (centre, Sant Ildefons, Almeda)",
    heroZones: "Sant Ildefons o Almeda",
    localZones:
      "Centre, Sant Ildefons, Almeda, Sant Joan Despí lindero y sector Can Trabal — gestoría online CCCat.",
    whySubtitle:
      "Bloques densos con certificados de comunidad lentos: conviene alinear arras con plazos reales del administrador.",
    keywords: [
      "comprar piso entre particulares cornella",
      "gestor compra vivienda cornella de llobregat",
      "servicio completo compra cornella",
      "revisar reserva arras cornella",
    ],
  }),
  "esplugues-de-llobregat": cccatMunicipioDiff({
    slug: "esplugues-de-llobregat",
    city: "Esplugues de Llobregat",
    metaPlace: "Esplugues (centre, Can Clota, Finestrelles)",
    heroZones: "Can Clota o Finestrelles",
    localZones:
      "Centre, Can Clota, Finestrelles, Ca n'Amat y sector hospitalario — gestoría online CCCat para compradores del Baix Llobregat.",
    whySubtitle:
      "Muchos compradores trabajan en Barcelona y cierran rápido en Esplugues. Livendia revisa el borrador antes de que la prisa cueste caro.",
    keywords: [
      "comprar piso entre particulares esplugues",
      "gestor compra vivienda esplugues de llobregat",
      "servicio completo compra esplugues",
      "revisar arras esplugues",
    ],
  }),
  gava: cccatMunicipioDiff({
    slug: "gava",
    city: "Gavà",
    metaPlace: "Gavà (centre, Gavà Mar, Les Pedritxes)",
    heroZones: "Gavà Mar o centre",
    localZones:
      "Centre, Gavà Mar, Les Pedritxes, Can Ros y sector industrial-residencial — protocolo CCCat y panel Livendia.",
    whySubtitle:
      "Operaciones entre particulares en el litoral del Baix Llobregat: ITE, derramas de fachada y arras desequilibradas son frecuentes.",
    keywords: [
      "comprar piso entre particulares gava",
      "gestor compra vivienda gava",
      "servicio completo compra gava",
      "revisar arras gava mar",
    ],
  }),
  "sant-boi-de-llobregat": cccatMunicipioDiff({
    slug: "sant-boi-de-llobregat",
    city: "Sant Boi de Llobregat",
    metaPlace: "Sant Boi (centre, Marianao, Camps Blancs)",
    heroZones: "Marianao o Camps Blancs",
    localZones:
      "Centre, Marianao, Camps Blancs, St. Ramon y sector fluvial — gestoría online CCCat en el Baix Llobregat.",
    whySubtitle:
      "Compra entre vecinos o anuncios locales: conviene dejar por escrito hipoteca, penalizaciones y calendario de comunidad antes de la señal.",
    keywords: [
      "comprar piso entre particulares sant boi",
      "gestor compra vivienda sant boi de llobregat",
      "servicio completo compra sant boi",
      "revisar arras sant boi",
    ],
  }),
  "sant-cugat-del-valles": cccatMunicipioDiff({
    slug: "sant-cugat-del-valles",
    city: "Sant Cugat del Vallès",
    metaPlace: "Sant Cugat (centre, Mira-sol, Valldoreix)",
    heroZones: "Mira-sol o Valldoreix",
    localZones:
      "Centre, Mira-sol, Valldoreix, Sant Cugat la Floresta y sector universitario — gestoría online CCCat en el Vallès.",
    whySubtitle:
      "Operaciones de mayor importe con anexos, parkings y arras copiadas de Barcelona: revisamos coherencia registral y contractual.",
    keywords: [
      "comprar piso entre particulares sant cugat",
      "gestor compra vivienda sant cugat del valles",
      "servicio completo compra sant cugat",
      "revisar arras valldoreix",
    ],
  }),
  granada: {
    keywords: [
      "comprar piso entre particulares granada",
      "gestor compra vivienda granada",
      "servicio completo compra granada",
      "revisar reserva arras granada",
      "compraventa particulares zaidin realejo",
    ],
    heroBadge: "Compra entre particulares · Granada",
    heroH1: "Compra de particular a particular en Granada — con gestor comprador Livendia",
    metaTitle: "Comprar piso entre particulares en Granada | Servicio completo Livendia",
    metaDescription: `¿Compras en Granada (Zaidín, Realejo, Albaicín)? Gestor comprador: reserva, arras y documentación. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    heroBullets: [
      "Compras a particular por Idealista o recomendación",
      "Revisión de nota simple, comunidad y arras",
      "Gestor fijo hasta firma en notaría granadina",
    ],
    whyTitle: "Granada: mercado universitario y compradores de fuera",
    whySubtitle:
      "Arras copiadas, edificios históricos con licencias complejas y promesas verbales: Livendia deja por escrito lo crítico antes de la señal.",
    localZonesHeading: "Zonas de Granada donde acompañamos compradores",
    localZones:
      "Zaidín, Realejo, Albaicín, Chana, Ronda, Genil y municipios del área metropolitana — gestoría online con panel Livendia.",
    heroImage: "/images/santander2.jpg",
    localBenefits: [
      {
        title: "Compra sin comisión de comprador",
        description: "Encuentras el piso tú; nosotros blindamos reserva, arras y camino a escritura.",
      },
      {
        title: "Operaciones con hipoteca",
        description: "Plazos negociables y cláusulas de financiación revisadas antes de ingresar señal.",
      },
      {
        title: "Edificios antiguos y comunidad",
        description: "Actas, derramas y coherencia entre anuncio y documentación registral.",
      },
      {
        title: "Compradores de otra provincia",
        description: "Expediente 100 % online con gestor asignado hasta notaría en Granada.",
      },
      {
        title: "Panel con expediente digital",
        description: "Documentos centralizados, progreso e historial de actividad.",
      },
      {
        title: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido`,
        description: "Tarifa plana de gestoría inmobiliaria del comprador.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Granada con documentación profesional",
  },
};
