/**
 * Hubs SEO por ciudad y vertical: /gestoria/[slug]/alquiler | /compraventa
 * Agrupan landings locales publicadas (backlinks y descubrimiento).
 */

import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getGestoriaInmobiliariaLocalCity,
  isGestoriaInmobiliariaLocalSlugPublished,
  getPublishedGestoriaInmobiliariaLocalCities,
  localGestoriaInmobiliariaHref,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  isAdministracionAlquilerLocalSlugPublished,
  localAdministracionAlquilerHref,
} from "@/lib/administracion-alquiler-local-cities";
import {
  isContratoAlquilerLocalSlugPublished,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import {
  isContratoAlquilerTemporadaLocalSlugPublished,
  localContratoAlquilerTemporadaHref,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import {
  isContratoAlquilerHabitacionLocalSlugPublished,
  localContratoAlquilerHabitacionHref,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  isRedactarContratoAlquilerLocalSlugPublished,
  localRedactarContratoAlquilerHref,
} from "@/lib/redactar-contrato-alquiler-local-cities";
import {
  isRevisionContratoAlquilerLocalSlugPublished,
  localRevisionContratoAlquilerHref,
} from "@/lib/revision-contrato-alquiler-local-cities";
import {
  isContratoArrasLocalSlugPublished,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import {
  isServicioCompletoVentaLocalSlugPublished,
  localServicioCompletoVentaHref,
} from "@/lib/servicio-completo-venta-local-cities";
import {
  isVenderPisoSinAgenciaSlugPublished,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import {
  isComprarPisoSinAgenciaSlugPublished,
  localComprarPisoSinAgenciaHref,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import {
  isRevisionDocumentalPostArrasLocalSlugPublished,
  localRevisionDocumentalPostArrasHref,
} from "@/lib/revision-documental-post-arras-local-cities";
import {
  isAcompanamientoReservaArrasLocalSlugPublished,
  localAcompanamientoReservaArrasHref,
} from "@/lib/acompanamiento-reserva-arras-local-cities";
import { cityHubHref, isCityHubSlug } from "@/lib/ciudades-hub";

export const GESTORIA_CITY_VERTICALS = ["alquiler", "compraventa"] as const;
export type GestoriaCityVertical = (typeof GESTORIA_CITY_VERTICALS)[number];

/** Slugs de servicio local que no coinciden con el slug de gestoría. */
const GESTORIA_SERVICE_SLUG_CANDIDATES: Record<string, readonly string[]> = {
  "les-corts": ["les-corts", "barcelona-les-corts"],
};

export type GestoriaVerticalServiceLink = {
  title: string;
  description: string;
  href: string;
  price: string;
};

export type GestoriaCityVerticalHubConfig = {
  path: string;
  citySlug: string;
  city: string;
  schemaAdministrativeArea: string;
  vertical: GestoriaCityVertical;
  verticalLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  intro: string;
  services: readonly GestoriaVerticalServiceLink[];
  faq: readonly { question: string; answer: string }[];
  gestoriaHubHref: string;
  ciudadesHubHref?: string;
};

export function isGestoriaCityVertical(value: string): value is GestoriaCityVertical {
  return (GESTORIA_CITY_VERTICALS as readonly string[]).includes(value);
}

export function localGestoriaCityVerticalHref(
  citySlug: string,
  vertical: GestoriaCityVertical,
): string {
  return `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${citySlug}/${vertical}`;
}

function serviceSlugCandidates(gestoriaSlug: string): readonly string[] {
  return GESTORIA_SERVICE_SLUG_CANDIDATES[gestoriaSlug] ?? [gestoriaSlug];
}

function firstPublishedSlug(
  candidates: readonly string[],
  isPublished: (slug: string) => boolean,
): string | undefined {
  return candidates.find(isPublished);
}

function buildAlquilerLinks(gestoriaSlug: string, cityLabel: string): GestoriaVerticalServiceLink[] {
  const candidates = serviceSlugCandidates(gestoriaSlug);
  const links: GestoriaVerticalServiceLink[] = [];

  const adminSlug = firstPublishedSlug(candidates, isAdministracionAlquilerLocalSlugPublished);
  if (adminSlug) {
    links.push({
      title: `Gestión de alquileres en ${cityLabel}`,
      description:
        "Administración profesional: incidencias, averías y renovaciones. Tú no hablas con el inquilino. Tarifa mensual sin permanencia.",
      href: localAdministracionAlquilerHref(adminSlug),
      price: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
    });
  }

  const lauSlug = firstPublishedSlug(candidates, isContratoAlquilerLocalSlugPublished);
  if (lauSlug) {
    links.push({
      title: `Contrato de alquiler LAU en ${cityLabel}`,
      description:
        "Piso completo con fianza, IPC, gastos de comunidad e inventario. Entrega en 48-72 h con gestor online.",
      href: localContratoAlquilerHref(lauSlug),
      price: CONTRATO_ALQUILER_LAU_PRICE_LABEL,
    });
  }

  const redactarSlug = firstPublishedSlug(candidates, isRedactarContratoAlquilerLocalSlugPublished);
  if (redactarSlug) {
    links.push({
      title: `Redactar contrato de alquiler en ${cityLabel}`,
      description: "Misma redacción LAU con enfoque de conversión y enlaces a barrios cuando aplica.",
      href: localRedactarContratoAlquilerHref(redactarSlug),
      price: CONTRATO_ALQUILER_LAU_PRICE_LABEL,
    });
  }

  const tempSlug = firstPublishedSlug(candidates, isContratoAlquilerTemporadaLocalSlugPublished);
  if (tempSlug) {
    links.push({
      title: `Contrato alquiler temporada en ${cityLabel}`,
      description: "Estancias temporales, motivo de la estancia y suministros definidos por escrito.",
      href: localContratoAlquilerTemporadaHref(tempSlug),
      price: CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
    });
  }

  const habSlug = firstPublishedSlug(candidates, isContratoAlquilerHabitacionLocalSlugPublished);
  if (habSlug) {
    links.push({
      title: `Contrato alquiler habitación en ${cityLabel}`,
      description: "Piso compartido: convivencia, zonas comunes e inventario antes de entregar la fianza.",
      href: localContratoAlquilerHabitacionHref(habSlug),
      price: CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
    });
  }

  const revSlug = firstPublishedSlug(candidates, isRevisionContratoAlquilerLocalSlugPublished);
  if (revSlug) {
    links.push({
      title: `Revisión contrato de alquiler en ${cityLabel}`,
      description: "Segunda opinión sobre un borrador LAU o temporada antes de firmar.",
      href: localRevisionContratoAlquilerHref(revSlug),
      price: "145 €",
    });
  }

  links.push({
    title: "Pack LAU + administración de alquiler",
    description: "Contrato y gestión recurrente en un solo flujo — ideal si alquilas por primera vez.",
    href: "/servicios/pack-contrato-lau-administracion-alquiler",
    price: "Desde pack publicado",
  });

  return links;
}

function buildCompraventaLinks(gestoriaSlug: string, cityLabel: string): GestoriaVerticalServiceLink[] {
  const candidates = serviceSlugCandidates(gestoriaSlug);
  const links: GestoriaVerticalServiceLink[] = [];

  const ventaSlug = firstPublishedSlug(candidates, isServicioCompletoVentaLocalSlugPublished);
  if (ventaSlug) {
    links.push({
      title: `Servicio completo de venta en ${cityLabel}`,
      description: "Reserva, arras, documentación del inmueble y coordinación con notaría — sin comisión del 3 %.",
      href: localServicioCompletoVentaHref(ventaSlug),
      price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    });
  }

  const compraSlug = firstPublishedSlug(candidates, isServicioCompletoCompraLocalSlugPublished);
  if (compraSlug) {
    links.push({
      title: `Servicio completo de compra en ${cityLabel}`,
      description: "Gestor del comprador: arras, comunidad, ITE y checklist pre-escritura.",
      href: localServicioCompletoCompraHref(compraSlug),
      price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    });
  }

  const venderSlug = firstPublishedSlug(candidates, isVenderPisoSinAgenciaSlugPublished);
  if (venderSlug) {
    links.push({
      title: `Vender piso sin agencia en ${cityLabel}`,
      description: "Landing orientada a SEO de venta entre particulares con mismos 890 € de tarifa plana.",
      href: localVenderPisoSinAgenciaHref(venderSlug),
      price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    });
  }

  const comprarSlug = firstPublishedSlug(candidates, isComprarPisoSinAgenciaSlugPublished);
  if (comprarSlug) {
    links.push({
      title: `Comprar piso sin agencia en ${cityLabel}`,
      description: "Comprador entre particulares: revisión de arras y documentación antes de la señal.",
      href: localComprarPisoSinAgenciaHref(comprarSlug),
      price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    });
  }

  const arrasSlug = firstPublishedSlug(candidates, isContratoArrasLocalSlugPublished);
  if (arrasSlug) {
    links.push({
      title: `Contrato de arras en ${cityLabel}`,
      description: "Penitenciales o confirmatorias con plazos de hipoteca y penalidades equilibradas.",
      href: localContratoArrasHref(arrasSlug),
      price: "145 €",
    });
  }

  const revArrasSlug = firstPublishedSlug(candidates, isRevisionDocumentalPostArrasLocalSlugPublished);
  if (revArrasSlug) {
    links.push({
      title: `Revisión documental post-arras en ${cityLabel}`,
      description: "Due diligence para compradores tras firmar arras: comunidad, ITE y nota simple.",
      href: localRevisionDocumentalPostArrasHref(revArrasSlug),
      price: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
    });
  }

  const reservaSlug = firstPublishedSlug(candidates, isAcompanamientoReservaArrasLocalSlugPublished);
  if (reservaSlug) {
    links.push({
      title: `Acompañamiento reserva hasta arras en ${cityLabel}`,
      description: "Primer tramo de la compraventa: señal, borrador de arras y documentación inicial.",
      href: localAcompanamientoReservaArrasHref(reservaSlug),
      price: "424 €",
    });
  }

  links.push({
    title: "Reserva de compra (nacional)",
    description: "Señal y condiciones antes de arras — mismo catálogo online en toda España.",
    href: "/servicios/reserva-de-compra",
    price: "424 €",
  });

  return links;
}

function verticalCopy(
  vertical: GestoriaCityVertical,
  city: string,
): Pick<GestoriaCityVerticalHubConfig, "verticalLabel" | "metaTitle" | "metaDescription" | "h1" | "heroLead" | "intro" | "faq"> {
  if (vertical === "alquiler") {
    return {
      verticalLabel: "Alquiler",
      metaTitle: `Gestoría alquiler ${city}: LAU, temporada y administración | Livendia`,
      metaDescription: `Todos los servicios de alquiler en ${city}: contrato LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, habitación, temporada, revisión de contrato y administración ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}. Precios publicados y gestor online.`,
      h1: `Gestoría de alquiler en ${city}: contratos LAU y administración para particulares`,
      heroLead: `Directorio local de Livendia en ${city} para propietarios e inquilinos: redacción LAU, temporada, habitación en piso compartido y administración sin permanencia. Una sola página con enlaces a cada trámite y tarifa plana.`,
      intro: `En ${city}, el alquiler entre particulares suele cerrarse rápido tras la visita — pero un PDF genérico no refleja fianza, derramas ni suministros. Este hub reúne cada landing local de alquiler que tenemos publicada para ${city}, más packs nacionales, para que enlaces y compartas un único URL con todo el clúster.`,
      faq: [
        {
          question: `¿Cuánto cuesta un contrato LAU en ${city}?`,
          answer: `El contrato de alquiler LAU cuesta ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl., con inventario y gestor asignado. Si existe landing local para ${city}, el precio es el mismo: cambia el copy y la casuística del barrio.`,
        },
        {
          question: `¿Puedo contratar administración de alquiler solo en ${city}?`,
          answer: `Sí, cuando hay landing local de administración publicada para ${city}. La tarifa es ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
        },
        {
          question: `¿Este hub sustituye a la gestoría completa de ${city}?`,
          answer: `No. Es un índice vertical de alquiler. La gestoría completa (compraventa + contratos + admin) sigue en la página principal de gestoría de ${city}.`,
        },
      ],
    };
  }

  return {
    verticalLabel: "Compraventa",
    metaTitle: `Gestoría compraventa ${city}: venta y compra entre particulares | Livendia`,
    metaDescription: `Servicios de compraventa en ${city}: venta y compra ${SERVICIO_COMPLETO_CV_PRICE_LABEL}, arras 145 €, reserva 424 € y revisión post-arras ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}. Sin comisión sobre el precio del piso.`,
    h1: `Gestoría compraventa en ${city}: venta y compra entre particulares sin comisión`,
    heroLead: `Índice local para cerrar operaciones en ${city}: servicio completo de venta o compra, arras, revisión documental y landings sin agencia. Tarifas planas publicadas — no buscamos comprador ni cobramos porcentaje.`,
    intro: `Comprar o vender entre particulares en ${city} tiene el mismo riesgo documental que con agencia, pero sin intermediario que filtre arras y comunidad. Aquí agrupamos cada servicio local de compraventa que Livendia publica para ${city}, ideal para enlaces desde prensa local, asociaciones de vecinos o blogs de barrio.`,
    faq: [
      {
        question: `¿Cuánto cuesta vender un piso entre particulares en ${city} con Livendia?`,
        answer: `El servicio completo de venta cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl., tarifa plana sin comisión sobre el precio de venta.`,
      },
      {
        question: `¿Hay gestor del comprador en ${city}?`,
        answer: `Sí, con servicio completo de compra o landing «comprar sin agencia» cuando está publicada para ${city}. Revisamos arras y documentación antes de que ingreses la señal.`,
      },
      {
        question: `¿Qué es la revisión post-arras en ${city}?`,
        answer: `Pack de ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl. para compradores: comunidad, ITE, nota simple e informe con llamada de veredicto antes de escriturar.`,
      },
    ],
  };
}

export function getGestoriaCityVerticalHub(
  citySlug: string,
  vertical: GestoriaCityVertical,
): GestoriaCityVerticalHubConfig | undefined {
  if (!isGestoriaInmobiliariaLocalSlugPublished(citySlug)) return undefined;

  const def = getGestoriaInmobiliariaLocalCity(citySlug);
  if (!def) return undefined;

  const copy = verticalCopy(vertical, def.city);
  const services =
    vertical === "alquiler"
      ? buildAlquilerLinks(citySlug, def.city)
      : buildCompraventaLinks(citySlug, def.city);

  if (services.length === 0) return undefined;

  const path = localGestoriaCityVerticalHref(citySlug, vertical);
  const introFromCity =
    vertical === "alquiler"
      ? `${def.contratos.intro} ${def.administracion.intro}`
      : def.compraventa.intro;

  return {
    path,
    citySlug,
    city: def.city,
    schemaAdministrativeArea: def.schemaAdministrativeArea,
    vertical,
    gestoriaHubHref: localGestoriaInmobiliariaHref(citySlug),
    ciudadesHubHref: isCityHubSlug(citySlug) ? cityHubHref(citySlug) : undefined,
    ...copy,
    intro: `${copy.intro} ${introFromCity}`.replace(/\s{2,}/g, " ").trim(),
    services,
  };
}

export function getGestoriaCityVerticalStaticParams(): { slug: string; vertical: GestoriaCityVertical }[] {
  const out: { slug: string; vertical: GestoriaCityVertical }[] = [];
  for (const city of getPublishedGestoriaInmobiliariaLocalCities()) {
    for (const vertical of GESTORIA_CITY_VERTICALS) {
      if (getGestoriaCityVerticalHub(city.slug, vertical)) {
        out.push({ slug: city.slug, vertical });
      }
    }
  }
  return out;
}
