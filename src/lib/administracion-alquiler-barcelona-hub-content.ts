import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_SLUG,
} from "@/lib/catalog.public";
import { ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB } from "@/lib/administracion-alquiler-barcelona-metro";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";

export const ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH = "/administracion-alquiler-barcelona" as const;

export const ADMINISTRACION_ALQUILER_BARCELONA_HUB_META = {
  title: "Administración de alquiler Barcelona | Online y presencial AMB",
  description: `Administración de alquileres en Barcelona y área metropolitana desde ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. Panel online, gestor en el piso cuando hace falta y despacho en Les Corts (Mejía Lequerica 44). Sin permanencia.`,
  keywords: [
    "administración alquiler barcelona",
    "gestión alquiler barcelona propietarios",
    "administrador fincas barcelona particulares",
    "gestor alquiler les corts",
    "administración alquiler área metropolitana",
    "gestión inquilino barcelona online",
  ],
};

export const ADMIN_ALQUILER_BCN_HUB_FAQ = [
  {
    q: "¿Qué incluye la administración de alquiler en Barcelona?",
    a: `Por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. Livendia es el único canal con el inquilino: seguimiento de renta, incidencias, renovaciones e IRAV/Incasòl documentados en panel y WhatsApp. Sin comisión sobre la renta ni permanencia (30 días de preaviso).`,
  },
  {
    q: "¿Hay gestor presencial en Barcelona?",
    a: "Sí. El día a día es digital, pero cuando la operación lo exige un gestor puede desplazarse al piso, al portal o coordinar con industriales en el AMB. También puedes reunirte en nuestro despacho de Les Corts (Mejía Lequerica 44).",
  },
  {
    q: "¿Atendéis L'Hospitalet, Badalona o Sant Cugat?",
    a: "Sí. Tenemos landings por distrito de Barcelona capital y por municipios del área metropolitana con el mismo precio mensual publicado.",
  },
  {
    q: "¿En qué se diferencia de una agencia de alquileres?",
    a: "No buscamos inquilino ni cobramos comisión del 8–10 % anual. Administramos la relación contractual cuando tú ya tienes arrendatario o acabas de firmar contrato LAU con nosotros.",
  },
] as const;

export const ADMIN_ALQUILER_BCN_HUB_LINKS = {
  cityLanding: ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB,
  contratosHub: CONTRATOS_INMOBILIARIOS_BARCELONA_PATH,
  serviceSlug: ADMINISTRACION_ALQUILER_SLUG,
} as const;
