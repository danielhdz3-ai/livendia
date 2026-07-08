import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { COMPRA_LOCAL_DIFFERENTIATION } from "@/lib/servicio-completo-compra-local-differentiation";
import {
  getCompraLocalSeoContent,
  type CompraLocalFaqItem,
} from "@/lib/servicio-completo-compra-local-seo-content";

/**
 * Landings SEO locales: servicio completo de compra por ciudad.
 * Rutas: /servicios/servicio-completo-compra-local/[slug]
 */

export const SERVICIO_COMPLETO_COMPRA_LOCAL_BASE = "/servicios/servicio-completo-compra-local";

export const SERVICIO_COMPLETO_COMPRA_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "bilbao",
  "malaga",
  "sevilla",
  "zaragoza",
  "oviedo",
  "gijon",
  "murcia",
];

export type ServicioCompletoCompraLocalLandingConfig = {
  path: string;
  slug: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  faqTitle?: string;
  faqSubtitle?: string;
  faq?: readonly CompraLocalFaqItem[];
} & LocalCityLandingFields;

export type ServicioCompletoCompraLocalCityDefinition = Omit<
  ServicioCompletoCompraLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localServicioCompletoCompraHref(slug: string): string {
  return `${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}/${slug}`;
}

export function toCompraCompletaLandingConfig(
  def: ServicioCompletoCompraLocalCityDefinition,
): ServicioCompletoCompraLocalLandingConfig {
  const diff = COMPRA_LOCAL_DIFFERENTIATION[def.slug] ?? {};
  const seoContent = getCompraLocalSeoContent(def.slug);
  return {
    ...def,
    ...diff,
    ...(seoContent
      ? {
          faq: seoContent.faq,
          faqTitle: seoContent.faqTitle,
          faqSubtitle: seoContent.faqSubtitle,
        }
      : {}),
    path: localServicioCompletoCompraHref(def.slug),
    slug: def.slug,
  };
}

export function getServicioCompletoCompraLocalCity(
  slug: string,
): ServicioCompletoCompraLocalCityDefinition | undefined {
  return SERVICIO_COMPLETO_COMPRA_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isServicioCompletoCompraLocalSlugPublished(slug: string): boolean {
  return SERVICIO_COMPLETO_COMPRA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedServicioCompletoCompraLocalCities(): ServicioCompletoCompraLocalCityDefinition[] {
  const pub = new Set(SERVICIO_COMPLETO_COMPRA_LOCAL_PUBLISHED_SLUGS);
  return SERVICIO_COMPLETO_COMPRA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export const SERVICIO_COMPLETO_COMPRA_LOCAL_CITIES: ServicioCompletoCompraLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroLead:
      "En Madrid y área metropolitana, un gestor inmobiliario experto revisa reserva, arras y camino a escritura para que compres con criterio: detectamos cláusulas de agencias, plazos irreales y lagunas registrales antes de que el dinero quede atado a un texto que no entendiste.",
    whyIntro:
      "El mercado madrileño va rápido y las plantillas se repiten. Muchos compradores firman con prisa lo que luego no pueden negociar. Te damos un interlocutor dedicado que traduce riesgos a lenguaje claro y prioriza lo que conviene pelear antes de la señal.",
    howIntro:
      "Cuatro fases desde la documentación inicial hasta la firma en notaría: operaciones en Centro, Chamberí, Tetuán o municipios del cinturón con el mismo protocolo Livendia.",
    testimonialsTitle: "Compradores en Madrid que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "La agencia nos presionó con una reserva estándar. Livendia marcó honorarios encadenados y un plazo de hipoteca imposible; negociamos antes de pagar.",
        author: "Sara & David",
        role: "Compradores, distrito Retiro",
      },
      {
        quote:
          "Primera vivienda en propiedad: nuestro gestor nos guió de arras a escritura sin sentirnos solos frente a la inmobiliaria.",
        author: "Jorge M.",
        role: "Comprador, Vallecas",
      },
    ],
    finalCtaLead:
      `Contrata el servicio completo (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y trabaja con tu gestor personal hasta rubricar en Madrid con documentación revisada.`,
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "En Barcelona ciudad y área metropolitana, acompañamos tu compra de principio a fin: revisión de reserva y arras, coordinación con agencia y notaría, y alerta temprana ante prácticas que suelen costar miles de euros si no se leen a tiempo.",
    whyIntro:
      "Comprar en un mercado tensionado sin segundo par profesional es arriesgado: mezclas de idiomas en contratos, ITE pendientes o cargas que no cuadran con lo visto en la visita. Alineamos el expediente con lo que realmente habéis pactado.",
    howIntro:
      "Mismo recorrido en cuatro hitos hasta escritura: Eixample, Gràcia, Sant Martí, Badalona u otros núcleos donde también gestionamos compras entre particulares.",
    testimonialsTitle: "Compradores en Barcelona que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Teníamos dudas sobre una cláusula de penalización en arras confirmatorias. Livendia la reescribió con equilibrio y el vendedor aceptó sin romper la operación.",
        author: "Marc & Laia",
        role: "Compradores, Poblenou",
      },
      {
        quote:
          "Revisaron la nota simple y detectaron una servidumbre que no nos habían comentado en la visita. Decidimos con datos, no con prisa.",
        author: "Núria P.",
        role: "Compradora, Sarrià",
      },
    ],
    finalCtaLead:
      "Contrata online el pack completo y llega a la firma en Barcelona con un gestor que ya conoce tu expediente.",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      "En Valencia capital y l’Horta, un gestor inmobiliario experto te acompaña desde la reserva hasta la escritura: control documental, defensa frente a cláusulas abusivas y comunicación clara en cada fase de la compra.",
    whyIntro:
      "Reservas firmadas en 48 horas, arras copiadas de otra operación y promesas verbales que no aparecen por escrito: patrones habituales que generan litigios. Anticipamos el conflicto con revisión profesional antes del primer ingreso relevante.",
    howIntro:
      "Cuatro pasos hasta la firma con seguridad: Ciutat Vella, Ruzafa, Benimaclet, Mislata o municipios del área metropolitana.",
    testimonialsTitle: "Compradores en Valencia que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Livendia nos ahorró más de 3.000 € al detectar cláusulas en el contrato de la agencia. El servicio completo se pagó solo.",
        author: "María L.",
        role: "Compradora, Ruzafa",
      },
      {
        quote:
          "Comprábamos piso de obra nueva: coordinaron plazos de entrega y revisión de anexos antes de las arras.",
        author: "Vicent & Ana",
        role: "Compradores, Campanar",
      },
    ],
    finalCtaLead:
      "Contrata el acompañamiento completo y cierra en Valencia con reserva, arras y escritura bajo revisión gestora.",
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    heroLead:
      "¿Compras piso de particular a particular en Bilbao o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas abusivas y te acompaña hasta la escritura — el mismo acompañamiento profesional en Abando, Deusto, Getxo o el Gran Bilbao.",
    whyIntro:
      "En Bizkaia muchos compradores encuentran vivienda por Idealista, recomendación o vendedor particular, sin agencia que defienda sus intereses. Las plantillas de reserva y arras suelen proteger al vendedor; sin asesor, plazos de hipoteca, penalidades o cargas ocultas pueden costarte miles de euros. Livendia es tu gestor dedicado en el bando del comprador.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría: revisión documental, defensa frente a cláusulas desequilibradas, gestor personal de referencia y coordinación con vendedor y notaría en Bilbao, Barakaldo, Portugalete o Getxo.",
    testimonialsTitle: "Compradores en Bilbao que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos a un particular en Deusto. Livendia revisó la reserva que nos pasó el vendedor, ajustó plazos de financiación y redactó arras equilibradas. Llegamos a escritura sin sorpresas.",
        author: "Ane & Iker",
        role: "Compradores, Deusto",
      },
      {
        quote:
          "Primera compra entre particulares: el gestor explicó la nota simple, derramas pendientes y qué negociar antes de entregar la señal. Valió cada euro del servicio completo.",
        author: "Patricia L.",
        role: "Compradora, Getxo",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Bilbao con un asesor experto hasta la escritura.`,
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "¿Compras piso de particular a particular en Sevilla o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas desequilibradas y te acompaña hasta la escritura — el mismo acompañamiento profesional en Triana, Nervión, Los Remedios, Tomares o el área metropolitana.",
    whyIntro:
      "En Sevilla muchos compradores encuentran vivienda por Idealista, recomendación o vendedor particular, sin agencia que defienda sus intereses. Las plantillas de reserva y arras suelen proteger al vendedor; sin asesor, plazos de hipoteca, penalidades o cargas ocultas pueden costarte miles de euros. Livendia es tu gestor dedicado en el bando del comprador, con tarifa plana frente a comisiones abusivas de intermediación.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría: revisión documental, defensa frente a cláusulas desequilibradas, gestor personal de referencia y coordinación con vendedor y notaría en Sevilla capital, Dos Hermanas, Alcalá de Guadaíra o municipios cercanos.",
    testimonialsTitle: "Compradores en Sevilla que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos a un particular en Nervión. Livendia revisó la reserva que nos pasó el vendedor, ajustó plazos de financiación y redactó arras equilibradas. Llegamos a escritura sin sorpresas.",
        author: "Raquel & Pablo",
        role: "Compradores, Nervión",
      },
      {
        quote:
          "Primera compra entre particulares: el gestor explicó la nota simple, derramas pendientes y qué negociar antes de entregar la señal. Valió cada euro del servicio completo.",
        author: "Manuel G.",
        role: "Comprador, Los Remedios",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Sevilla con un asesor experto hasta la escritura.`,
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "¿Compras piso de particular a particular en Málaga, la costa o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas abusivas y te acompaña hasta la escritura — en Centro, Teatinos, El Palo, Torremolinos o Rincón de la Victoria.",
    whyIntro:
      "En Málaga y la Costa del Sol es habitual comprar por portales o a un vendedor particular (segunda residencia, traslado o inversión) sin un profesional en tu bando. Reservas copiadas, arras desequilibradas y promesas verbales que no aparecen por escrito generan litigios caros. Livendia te da un gestor dedicado al comprador, con tarifa plana frente a los miles de euros que suelen costar errores o cláusulas de agencia.",
    howIntro:
      "Mismo protocolo en cuatro fases hasta escritura: revisión de documentación, defensa frente a cláusulas perjudiciales, gestor personal y coordinación con vendedor y notaría en Málaga capital, Benalmádena, Fuengirola o municipios del área.",
    testimonialsTitle: "Compradores en Málaga que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos apartamento de particular en Teatinos. Livendia revisó la reserva, negoció arras confirmatorias y nos alertó de una derrama en la comunidad que no nos habían comentado.",
        author: "Laura & Miguel",
        role: "Compradores, Teatinos",
      },
      {
        quote:
          "Vivienda en la costa con vendedor particular: el gestor coordinó plazos, revisó la nota simple y nos ahorró firmar una penalización desproporcionada en arras.",
        author: "Antonio R.",
        role: "Comprador, Torremolinos",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Málaga con un asesor experto hasta la escritura.`,
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    heroLead:
      "¿Compras piso de particular a particular en Zaragoza o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas abusivas y te acompaña hasta la escritura — en Casco Histórico, Delicias, Actur, Valdespartera o la comarca próxima.",
    whyIntro:
      "En Zaragoza muchos compradores encuentran vivienda por Idealista, recomendación o vendedor particular, sin agencia que defienda sus intereses. PAUs recientes, herencias familiares y plantillas de arras desequilibradas pueden costarte miles de euros si nadie las lee antes de la señal. Livendia es tu gestor dedicado en el bando del comprador.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría: revisión documental, defensa frente a cláusulas perjudiciales, gestor personal y coordinación con vendedor y notaría en Zaragoza capital, Utebo, Cuarte o municipios del área.",
    testimonialsTitle: "Compradores en Zaragoza que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Valdespartera a un particular. Livendia revisó cargas de urbanización en el PAU y ajustó plazos de hipoteca antes de entregar la señal.",
        author: "Elena & Marcos",
        role: "Compradores, Valdespartera",
      },
      {
        quote:
          "Herencia familiar con varios titulares: el gestor detectó lagunas registrales y nos guió hasta escritura sin romper la operación.",
        author: "Javier R.",
        role: "Comprador, Casco Histórico",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Zaragoza con un asesor experto hasta la escritura.`,
  },
  {
    slug: "oviedo",
    city: "Oviedo",
    schemaAdministrativeArea: "Asturias",
    heroLead:
      "¿Compras piso de particular a particular en Oviedo o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas abusivas y te acompaña hasta la escritura — en La Ería, Los Pilares, Pumarín, Teatinos o el área metropolitana.",
    whyIntro:
      "En Oviedo es habitual comprar entre particulares sin agencia compradora: vecino, compañero de trabajo o anuncio en portal. Las plantillas de reserva y arras suelen proteger al vendedor; sin asesor, ITE, derramas o plazos de hipoteca pueden costarte miles de euros. Livendia es tu gestor dedicado en el bando del comprador.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría: revisión documental, defensa frente a cláusulas desequilibradas, gestor personal y coordinación con vendedor y notaría en Oviedo, Siero, Langreo o municipios del área.",
    testimonialsTitle: "Compradores en Oviedo que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos a un particular en Los Pilares. Livendia revisó la reserva, negoció arras equilibradas y nos alertó de una derrama en la comunidad que no nos habían comentado.",
        author: "Carmen & Luis",
        role: "Compradores, Los Pilares",
      },
      {
        quote:
          "Primera compra entre particulares: el gestor explicó la nota simple, la cédula de habitabilidad y qué negociar antes de entregar la señal.",
        author: "Beatriz M.",
        role: "Compradora, Teatinos",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Oviedo con un asesor experto hasta la escritura.`,
  },
  {
    slug: "gijon",
    city: "Gijón",
    schemaAdministrativeArea: "Asturias",
    heroLead:
      "¿Compras piso de particular a particular en Gijón o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas abusivas y te acompaña hasta la escritura — en Cimadevilla, La Calzada, Roces, El Llano o la costa cercana.",
    whyIntro:
      "En Gijón muchos compradores encuentran vivienda por Idealista, recomendación o vendedor particular, sin agencia que defienda sus intereses. Edificios con ITE, derramas costeras y arras copiadas de otra operación generan litigios caros si nadie las revisa antes de la señal. Livendia es tu gestor dedicado en el bando del comprador.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría: revisión documental, defensa frente a cláusulas perjudiciales, gestor personal y coordinación con vendedor y notaría en Gijón, Avilés, Villaviciosa o municipios del área.",
    testimonialsTitle: "Compradores en Gijón que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en La Calzada a un particular. Livendia revisó la reserva que nos pasó el vendedor, ajustó plazos de financiación y redactó arras equilibradas.",
        author: "Marta & Iván",
        role: "Compradores, La Calzada",
      },
      {
        quote:
          "Piso cerca del mar con vendedor particular: el gestor coordinó plazos, revisó la nota simple y nos ahorró firmar una penalización desproporcionada en arras.",
        author: "Roberto S.",
        role: "Comprador, Playa de San Lorenzo",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Gijón con un asesor experto hasta la escritura.`,
  },
  {
    slug: "murcia",
    city: "Murcia",
    schemaAdministrativeArea: "Región de Murcia",
    heroLead:
      "¿Compras piso de particular a particular en Murcia o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras, detecta cláusulas abusivas y te acompaña hasta la escritura — en Centro, Espinardo, El Carmen, Vistabella o la huerta metropolitana.",
    whyIntro:
      "En Murcia capital y área metropolitana es habitual comprar entre particulares sin agencia compradora: familia, vecino o anuncio en portal. Urbanizaciones, herencias y plantillas de arras desequilibradas pueden costarte miles de euros si nadie las lee antes de la señal. Livendia es tu gestor dedicado en el bando del comprador.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría: revisión documental, defensa frente a cláusulas perjudiciales, gestor personal y coordinación con vendedor y notaría en Murcia, Alcantarilla, Molina de Segura o municipios del área.",
    testimonialsTitle: "Compradores en Murcia que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Espinardo a un particular. Livendia revisó la reserva, negoció arras confirmatorias y nos alertó de una derrama en la comunidad que no nos habían comentado.",
        author: "Laura & Antonio",
        role: "Compradores, Espinardo",
      },
      {
        quote:
          "Primera compra entre particulares en urbanización: el gestor explicó la nota simple, certificado de comunidad y qué negociar antes de entregar la señal.",
        author: "Francisco G.",
        role: "Comprador, El Palmar",
      },
    ],
    finalCtaLead:
      `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en Murcia con un asesor experto hasta la escritura.`,
  },
];
