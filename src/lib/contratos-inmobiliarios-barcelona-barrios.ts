import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";
import { localContratoArrasHref } from "@/lib/contrato-arras-local-cities";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";

export const CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIO_BASE =
  `${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}` as const;

export type ContratosInmobiliariosBarrioSlug =
  | "eixample"
  | "gracia"
  | "poblenou"
  | "el-born"
  | "sants-montjuic";

export type ContratosInmobiliariosBarrioPage = {
  slug: ContratosInmobiliariosBarrioSlug;
  /** Slug en landings locales contrato-alquiler / arras */
  localSlug: string;
  name: string;
  districtLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  localContext: string;
  servicesFocus: string[];
  image: string;
  imageAlt: string;
  contratoAlquilerHref: string;
  contratoArrasHref: string;
};

export const CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS: readonly ContratosInmobiliariosBarrioPage[] = [
  {
    slug: "eixample",
    localSlug: "barcelona-eixample",
    name: "Eixample",
    districtLabel: "Distrito Eixample",
    metaTitle: "Contratos inmobiliarios Eixample Barcelona | Livendia",
    metaDescription:
      "Gestoría de contratos inmobiliarios en el Eixample: LAU, arras, habitación y compraventa entre particulares. Precios fijos, panel online y gestor en Les Corts.",
    keywords: [
      "contratos inmobiliarios eixample",
      "contrato alquiler eixample barcelona",
      "contrato arras eixample",
      "gestoría inmobiliaria eixample particulares",
    ],
    h1: "Contratos inmobiliarios en el Eixample de Barcelona",
    lead:
      "Redactamos y tramitamos contratos inmobiliarios para particulares en l'Eixample: alquiler LAU con inventario, arras penitenciales, habitación en piso compartido, temporada y acompañamiento de compraventa — con adaptación a zona tensionada y CCCat cuando procede.",
    localContext:
      "En Dreta y Esquerra de l'Eixample conviven operaciones de alto ticket, pisos señorials y alquiler por habitación. Revisamos coherencia de renta anterior, fianza INCASÒL, ITE de edificio y cláusulas de arras antes de firmar.",
    servicesFocus: ["Contrato LAU e inventario", "Arras entre particulares", "Alquiler habitación", "Administración de alquiler"],
    image: getLocalCityCardImage("barcelona-eixample"),
    imageAlt: "Contratos inmobiliarios en el Eixample — Livendia Barcelona",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-eixample"),
    contratoArrasHref: localContratoArrasHref("barcelona-eixample"),
  },
  {
    slug: "gracia",
    localSlug: "barcelona-gracia",
    name: "Gràcia",
    districtLabel: "Distrito Gràcia",
    metaTitle: "Contratos inmobiliarios Gràcia Barcelona | Livendia",
    metaDescription:
      "Contratos de alquiler, habitación y arras en Gràcia para particulares. Gestoría Livendia online con despacho en Les Corts. IVA incluido.",
    keywords: [
      "contratos inmobiliarios gràcia",
      "contrato alquiler gracia barcelona",
      "contrato habitación gràcia",
      "gestoría contratos gracia",
    ],
    h1: "Contratos inmobiliarios en Gràcia (Barcelona)",
    lead:
      "En Gràcia y Vila de Gràcia tramitamos contratos LAU, alquiler de habitación en piso compartido, arras y temporadas cortas con normas de convivencia claras — ideal para propietarios e inquilinos que cierran entre particulares sin agencia.",
    localContext:
      "Pisos de planta baja, áticos y coliving en calles como Gran de Gràcia o Travessera requieren cláusulas de uso, mascotas y reparto de suministros bien redactadas. Livendia los adapta al barrio y al tipo de inmueble.",
    servicesFocus: ["Alquiler habitación", "Contrato LAU", "Temporada", "Arras compraventa"],
    image: getLocalCityCardImage("barcelona-gracia"),
    imageAlt: "Gestoría de contratos inmobiliarios en Gràcia — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-gracia"),
    contratoArrasHref: localContratoArrasHref("barcelona-gracia"),
  },
  {
    slug: "poblenou",
    localSlug: "barcelona-poblenou",
    name: "Poblenou",
    districtLabel: "Sant Martí · Poblenou",
    metaTitle: "Contratos inmobiliarios Poblenou Barcelona | Livendia",
    metaDescription:
      "Contratos inmobiliarios en Poblenou y 22@: LAU, temporada, arras y habitación. Gestoría Livendia para particulares en Barcelona.",
    keywords: [
      "contratos inmobiliarios poblenou",
      "contrato alquiler poblenou",
      "contrato arras 22 barcelona",
      "gestoría inmobiliaria poblenou",
    ],
    h1: "Contratos inmobiliarios en Poblenou y 22@",
    lead:
      "Poblenou concentra lofts, pisos reconvertidos y alquiler temporal ligado a teletrabajo o estancia profesional. Redactamos LAU, contratos de temporada delimitados, habitación y arras con cláusulas acordes al edificio y al uso real del inmueble.",
    localContext:
      "En la Rambla del Poblenou y el entorno 22@ es habitual mezclar contratos de temporada con operaciones de compraventa entre particulares. Evitamos borradores genéricos que no describen terrazas, parking o instalaciones comunitarias.",
    servicesFocus: ["Temporada y LAU", "Arras penitenciales", "Compraventa acompañada", "Habitación"],
    image: getLocalCityCardImage("barcelona-poblenou"),
    imageAlt: "Contratos inmobiliarios Poblenou Barcelona — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-poblenou"),
    contratoArrasHref: localContratoArrasHref("barcelona-poblenou"),
  },
  {
    slug: "el-born",
    localSlug: "barcelona-born",
    name: "El Born",
    districtLabel: "Ciutat Vella · El Born",
    metaTitle: "Contratos inmobiliarios El Born Barcelona | Livendia",
    metaDescription:
      "Gestoría de contratos inmobiliarios en El Born: arras, alquiler LAU, habitación y temporada. Particulares en Barcelona con gestor Livendia.",
    keywords: [
      "contratos inmobiliarios el born",
      "contrato alquiler born barcelona",
      "contrato arras ciutat vella",
      "gestoría born barcelona",
    ],
    h1: "Contratos inmobiliarios en El Born (Ciutat Vella)",
    lead:
      "El Born y el entorno de la Ciutat Vella exigen contratos precisos: alquiler de larga duración, habitación, temporada turística bien delimitada y arras en compraventas entre particulares en edificios con cargas o protección patrimonial.",
    localContext:
      "Muchas viviendas son plantas en edificios históricos: comunidad, obras, licencias y coherencia entre precio de arras y estado real del piso son críticos. Tu gestor Livendia revisa documentación antes de firmar.",
    servicesFocus: ["Arras CCCat", "LAU Ciutat Vella", "Temporada", "Habitación compartida"],
    image: getLocalCityCardImage("barcelona-born"),
    imageAlt: "Contratos inmobiliarios El Born — gestoría Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-born"),
    contratoArrasHref: localContratoArrasHref("barcelona-born"),
  },
  {
    slug: "sants-montjuic",
    localSlug: "barcelona-sants-montjuic",
    name: "Sants – Montjuïc",
    districtLabel: "Distrito Sants-Montjuïc",
    metaTitle: "Contratos inmobiliarios Sants Montjuïc | Livendia",
    metaDescription:
      "Contratos inmobiliarios en Sants, Poble-sec y Montjuïc: LAU, arras, habitación y administración de alquiler. Livendia Barcelona.",
    keywords: [
      "contratos inmobiliarios sants",
      "contrato alquiler poble sec",
      "contrato arras sants montjuic",
      "gestoría inmobiliaria sants",
    ],
    h1: "Contratos inmobiliarios en Sants y Montjuïc",
    lead:
      "Desde Sants Estació hasta Poble-sec y Hostafrancs, tramitamos contratos LAU, alquiler de habitación, arras y gestión de alquiler para propietarios particulares — online, con opción de cita en nuestro despacho de Les Corts.",
    localContext:
      "Zona de alta rotación de inquilinos y pisos compartidos cerca de universidades y ferrocarril. Cláusulas de duración, fianza, inventario y convivencia deben estar alineadas con la LAU y la normativa catalana de vivienda.",
    servicesFocus: ["LAU larga duración", "Habitación", "Arras", "Administración alquiler"],
    image: getLocalCityCardImage("barcelona-sants-montjuic"),
    imageAlt: "Contratos inmobiliarios Sants Montjuïc — Livendia",
    contratoAlquilerHref: localContratoAlquilerHref("barcelona-sants-montjuic"),
    contratoArrasHref: localContratoArrasHref("barcelona-sants-montjuic"),
  },
] as const;

export function contratosInmobiliariosBarrioPath(slug: ContratosInmobiliariosBarrioSlug): string {
  return `${CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIO_BASE}/${slug}`;
}

export function getContratosInmobiliariosBarrio(
  slug: string,
): ContratosInmobiliariosBarrioPage | undefined {
  return CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.find((b) => b.slug === slug);
}

export function isContratosInmobiliariosBarrioSlug(slug: string): slug is ContratosInmobiliariosBarrioSlug {
  return CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.some((b) => b.slug === slug);
}
