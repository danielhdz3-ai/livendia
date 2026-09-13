import { CONTRATO_ALQUILER_LAU_PRICE_EUR, CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";
import {
  isAdministracionAlquilerLocalSlugPublished,
  localAdministracionAlquilerHref,
} from "@/lib/administracion-alquiler-local-cities";

export const REDACTAR_CONTRATO_ALQUILER_BASE = "/servicios/redactar-contrato-alquiler" as const;

/** Mensaje claro al inicio de landings (sin asumir que el usuario conoce «LAU»). */
export const REDACTAR_CONTRATO_PLAIN_LANGUAGE = {
  brandLine: "Livendia, la gestoría inmobiliaria",
  promiseLine: "Redactamos tu contrato de alquiler con todas las garantías jurídicas",
  plainExplanation:
    "Contrato de arrendamiento conforme a la ley (LAU), inventario del piso y un gestor que te lo explica en castellano claro — sin comisión de agencia.",
  ctaContractLabel: "Contratar contrato de alquiler",
  lawFootnote: "Incluye arrendamiento de vivienda habitual y cláusulas adaptadas a la normativa vigente.",
} as const;

/** Módulo principal tras el hero: qué incluye la redacción del contrato (antes de admin). */
export const REDACTAR_CONTRATO_REDACCION_SERVICIO = {
  eyebrow: "Servicio de redacción",
  title: "Livendia redacta tu contrato de alquiler",
  intro:
    "No es una plantilla automática: un gestor inmobiliario especializado te acompaña en todo el proceso. Puedes hablar con el gestor, resolver dudas, contratar online y dejar el contrato e inventario en manos profesionales.",
  bullets: [
    "Contacto con tu gestor antes y durante el trámite — resolvemos dudas de propietario e inquilino",
    "Contratas el servicio online con pago seguro y acceso al panel Livendia",
    "El gestor tramita el contrato de alquiler adaptado a la ley y recoge lo pactado en la visita",
    "Inventario fotográfico del piso y entrega de un contrato de alquiler profesional, listo para firmar",
  ] as const,
  imageSrc: "/images/contratodealquiler.jpg",
  imageAlt: "Gestor Livendia redactando un contrato de alquiler con inventario",
} as const;

/** Módulo transversal: upsell administración de alquiler (49 €/mes). */
export const REDACTAR_CONTRATO_ADMIN_UPSELL = {
  eyebrow: "Después de firmar el contrato",
  title: "Livendia lleva la administración de tu alquiler",
  intro:
    "Si no quieres tratar directamente con el inquilino, Livendia asume todo el contacto: consultas, incidencias, averías y coordinación con técnicos. Tú decides; nosotros tramitamos.",
  bullets: [
    "Canal único con el inquilino — tú no atiendes llamadas ni urgencias",
    "Gestión y seguimiento de incidencias hasta su cierre",
    "Renovaciones, mediación y documentación de cada caso",
    "Tarifa plana sin permanencia — contratas cuando lo necesites",
  ] as const,
  imageSrc: "/images/gestoria3.jpg",
  imageAlt: "Gestora Livendia administrando un alquiler entre particulares",
  ctaPrimary: "Contratar administración",
  ctaSecondary: "Ver administración de alquiler",
} as const;

const REDACTAR_SLUG_TO_ADMIN_LOCAL: Partial<Record<string, string>> = {
  palma: "mallorca",
  asturias: "gijon",
};

/** Enlace a admin local si existe; si no, landing nacional de administración. */
export function redactarContratoAdministracionHref(redactarCitySlug: string): string {
  const adminSlug = REDACTAR_SLUG_TO_ADMIN_LOCAL[redactarCitySlug] ?? redactarCitySlug;
  if (isAdministracionAlquilerLocalSlugPublished(adminSlug)) {
    return localAdministracionAlquilerHref(adminSlug);
  }
  return "/servicios/administracion-alquiler";
}

export const REDACTAR_CONTRATO_ALQUILER_PRICE_LABEL = CONTRATO_ALQUILER_LAU_PRICE_LABEL;
export const REDACTAR_CONTRATO_ALQUILER_PRICE_EUR = CONTRATO_ALQUILER_LAU_PRICE_EUR;

export type AgencyRentalComparisonRow = {
  monthlyRent: number;
  agencyEstimateLow: number;
  agencyEstimateHigh: number;
  livendia: number;
};

/** Estimación orientativa: 1 mes de renta + honorarios de gestión inmobiliaria (2.000–3.000 €). */
export function buildAgencyRentalComparisonRows(
  monthlyRents: number[] = [850, 1_000, 1_200, 1_400],
): AgencyRentalComparisonRow[] {
  const livendia = REDACTAR_CONTRATO_ALQUILER_PRICE_EUR;
  return monthlyRents.map((monthlyRent) => ({
    monthlyRent,
    agencyEstimateLow: monthlyRent + 2_000,
    agencyEstimateHigh: monthlyRent + 3_000,
    livendia,
  }));
}

/** Mensaje transversal: online, gestor operativo y asesoramiento posterior al contrato. */
export const REDACTAR_CONTRATO_ONLINE_GESTOR = {
  sectionTitle: "Servicio 100% online — sin desplazarte",
  sectionIntro:
    "Todo el proceso es digital: contratas con pago seguro, subes documentación desde móvil u ordenador y hablas con tu gestor por panel, WhatsApp o teléfono. No hace falta acudir a un despacho físico.",
  onlineBullets: [
    "Contratación y pago online en minutos — acceso inmediato al panel",
    "Subida de DNI, fotos e inventario desde casa",
    "Gestor inmobiliario asignado a tu expediente, no un call center",
    "Asesoramiento operativo durante todo el proceso del alquiler",
    "Seguimiento y consultas posteriores a la entrega del contrato, dentro del servicio",
  ] as const,
  gestorTitle: "Un gestor adaptado a tu caso, operativo de principio a fin",
  gestorIntro:
    "No recibes una plantilla automática: un gestor inmobiliario conoce tu operación concreta — tipo de alquiler, barrio, partes y pactos especiales — y te acompaña en cada hito hasta la firma.",
  gestorSteps: [
    {
      title: "Briefing y recogida de datos",
      description:
        "Analizamos si necesitas LAU, temporada o habitación; recogemos renta, duración, fianza y particularidades del inmueble.",
    },
    {
      title: "Documentación e inventario",
      description:
        "Revisamos lo que subes al panel, pedimos lo que falte y orientamos el inventario fotográfico antes de las llaves.",
    },
    {
      title: "Redacción y revisión del contrato",
      description:
        "Adaptamos cláusulas a la LAU y al Código Civil aplicable. Resolvemos dudas entre propietario e inquilino con lenguaje claro.",
    },
    {
      title: "Entrega, firma y asesoramiento posterior",
      description:
        "Entregamos el documento con acabado profesional. Tras la firma, puedes consultar al gestor sobre cláusulas, fianza, prórrogas o incidencias habituales del arrendamiento — asesoramiento incluido en el servicio.",
    },
  ] as const,
  postRentalTitle: "Seguimiento después del alquiler",
  postRentalBody:
    "El servicio no termina al enviarte el PDF. Tu gestor sigue disponible para orientarte en dudas posteriores vinculadas al contrato y al arrendamiento: interpretación de cláusulas, depósito de fianza, actualización de renta, comunicaciones entre partes o primeros meses de convivencia contractual. Si necesitas gestión continuada del inquilino (cobros, incidencias, entradas y salidas), existe la administración de alquiler Livendia como servicio aparte.",
} as const;

export const REDACTAR_CONTRATO_ALQUILER_FAQ = [
  {
    question: "¿Incluye inventario profesional del piso?",
    answer:
      "Sí. El servicio incorpora inventario descriptivo y fotográfico del estado del inmueble para documentar la entrega de llaves y evitar conflictos al final del arrendamiento.",
  },
  {
    question: "¿Me ayudáis con la inscripción de la fianza?",
    answer:
      "Te orientamos para depositar la fianza en el organismo correcto según tu comunidad autónoma (AVS en Madrid, INCASÒL en Cataluña, etc.) antes de transferir dinero al propietario.",
  },
  {
    question: "¿Es lo mismo que una plantilla de internet?",
    answer:
      "No. Un gestor inmobiliario revisa tu caso, adapta cláusulas a la LAU y al Código Civil aplicable, y entrega un documento con acabado profesional — no un PDF genérico copiado.",
  },
  {
    question: "¿Livendia busca inquilino o publica mi anuncio?",
    answer:
      "No. Somos gestoría especializada en contratos inmobiliarios para particulares que ya tienen contraparte (Idealista, recomendación, conocido). Tú cierras el alquiler; nosotros el contrato y la documentación.",
  },
  {
    question: "¿Cuánto ahorro respecto a una inmobiliaria?",
    answer:
      "Muchas agencias cobran entre 2.000 y 3.000 € por la gestión del alquiler más un mes de renta de comisión. Livendia redacta el contrato profesional por 145 € IVA incl. — precio cerrado, sin comisión sobre la renta.",
  },
  {
    question: "¿Tengo acceso a una plataforma para subir documentos?",
    answer:
      "Sí. Tras contratar accedes al panel Livendia: expediente digital, subida segura de documentación, seguimiento del trámite y gestor asignado hasta la entrega del contrato.",
  },
  {
    question: "¿Tengo que ir a un despacho o puedo hacerlo todo online?",
    answer:
      "Todo es online: contratas, pagas, subes documentación y hablas con tu gestor desde el panel, WhatsApp o teléfono. No necesitas desplazarte a ninguna oficina.",
  },
  {
    question: "¿Hay gestor humano o es solo automatizado?",
    answer:
      "Hay un gestor inmobiliario asignado a tu expediente que conoce tu caso, adapta el contrato a tu situación y te acompaña operativamente en todo el proceso del alquiler.",
  },
  {
    question: "¿Me asesoráis después de firmar el contrato?",
    answer:
      "Sí, dentro del servicio contratado puedes consultar al gestor sobre cláusulas, fianza, prórrogas o dudas habituales tras la firma. Si buscas gestión continuada del inquilino (incidencias, cobros, rotaciones), existe la administración de alquiler como servicio aparte.",
  },
] as const;

export const REDACTAR_CONTRATO_ALQUILER_TESTIMONIALS = [
  {
    quote:
      "Encontré inquilino por Idealista y la agencia me pedía casi 2.500 €. Con Livendia tuve contrato impecable, inventario con fotos y orientación de la fianza por 145 €.",
    author: "Carlos M.",
    role: "Propietario, Valencia",
  },
  {
    quote:
      "El contrato que nos pasaron era una plantilla antigua. Livendia lo rehizo con cláusulas claras y un aspecto visual que da confianza al firmar entre particulares.",
    author: "Laura & David",
    role: "Propietario e inquilino, Madrid",
  },
] as const;
