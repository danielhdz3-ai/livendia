import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { VENTA_LOCAL_DIFFERENTIATION } from "@/lib/servicio-completo-venta-local-differentiation";
import {
  getVentaLocalSeoContent,
  type VentaLocalSeoContent,
} from "@/lib/servicio-completo-venta-local-seo-content";

export const SERVICIO_COMPLETO_VENTA_LOCAL_BASE = "/servicios/servicio-completo-venta-local";

export const SERVICIO_COMPLETO_VENTA_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
  "valladolid",
  "granada",
];

export type ServicioCompletoVentaLocalLandingConfig = {
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  agencyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  seoContent?: VentaLocalSeoContent;
  faq?: readonly { question: string; answer: string }[];
} & LocalCityLandingFields;

export type ServicioCompletoVentaLocalCityDefinition = Omit<
  ServicioCompletoVentaLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localServicioCompletoVentaHref(slug: string): string {
  return `${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}/${slug}`;
}

function formatEur(n: number): string {
  return `${n.toLocaleString("es-ES")} €`;
}

function agencyIntroFromSeo(seo: VentaLocalSeoContent): string {
  const price = formatEur(seo.highlightSalePrice);
  const vs3 = formatEur(seo.savingVs3);
  const vs5 = formatEur(seo.savingVs5);
  return `En un piso de ${price}, una comisión del 3 % suponen ${vs3} + IVA (~${formatEur(Math.round(seo.savingVs3 * 1.21))}) y al 5 %, ${vs5} + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana de gestoría inmobiliaria, sin comisión sobre el precio de venta. Ideal cuando ya tienes comprador particular.`;
}

export function toVentaCompletaLandingConfig(
  def: ServicioCompletoVentaLocalCityDefinition,
): ServicioCompletoVentaLocalLandingConfig {
  const diff = VENTA_LOCAL_DIFFERENTIATION[def.slug] ?? {};
  const seoContent = getVentaLocalSeoContent(def.slug);
  const faq = seoContent?.faq;
  return {
    ...def,
    ...diff,
    ...(seoContent
      ? {
          seoContent,
          heroLead: seoContent.introParagraph,
          whyIntro: seoContent.marketParagraph,
          agencyIntro: agencyIntroFromSeo(seoContent),
        }
      : {}),
    ...(faq ? { faq } : {}),
    path: localServicioCompletoVentaHref(def.slug),
  };
}

export function getServicioCompletoVentaLocalCity(
  slug: string,
): ServicioCompletoVentaLocalCityDefinition | undefined {
  return SERVICIO_COMPLETO_VENTA_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isServicioCompletoVentaLocalSlugPublished(slug: string): boolean {
  return SERVICIO_COMPLETO_VENTA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedServicioCompletoVentaLocalCities(): ServicioCompletoVentaLocalCityDefinition[] {
  const pub = new Set(SERVICIO_COMPLETO_VENTA_LOCAL_PUBLISHED_SLUGS);
  return SERVICIO_COMPLETO_VENTA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export const SERVICIO_COMPLETO_VENTA_LOCAL_CITIES: ServicioCompletoVentaLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroLead:
      "¿Ya tienes comprador particular? En Madrid y área metropolitana, un gestor legal redacta reserva y arras, gestiona los trámites de venta y coordina la notaría — sin exclusiva ni comisiones del 3–5 % de una agencia tradicional.",
    whyIntro:
      "El mercado madrileño mueve mucho volumen y las plantillas de reserva y arras se copian entre operaciones. Si vendes entre particulares, un error en plazos, arras penitenciales o cargas no declaradas puede costarte meses o dinero. Livendia pone un gestor dedicado en tu bando del vendedor.",
    agencyIntro:
      `En un piso de 300.000 €, una comisión del 3 % son 9.000 € más IVA. El servicio completo de venta Livendia (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) cubre acompañamiento profesional de punta a punta: no sustituye al comprador ni a la notaría, pero evita improvisar el tramo donde más se pierde si no hay experto.`,
    howIntro:
      "Mismo protocolo en Chamberí, Vallecas, Getafe o Las Rozas: estudio de operación, contratos, checklist documental y seguimiento hasta firma.",
    testimonialsTitle: "Propietarios en Madrid que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Teníamos comprador particular y la agencia nos pedía exclusiva. Contratamos Livendia: redactaron arras y nos guiaron con la comunidad y la nota simple hasta escritura.",
        author: "Rosa & Miguel",
        role: "Vendedores, distrito Salamanca",
      },
      {
        quote:
          "Ahorramos la comisión de intermediación y tuvimos un gestor que respondía dudas del comprador sin que yo negociara a ciegas.",
        author: "Andrés V.",
        role: "Propietario, Fuencarral",
      },
    ],
    finalCtaLead:
      `Contrata el servicio completo de venta (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y trabaja con tu gestor personal hasta la escritura en Madrid.`,
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "En Barcelona ciudad y área metropolitana, vende tu vivienda a un comprador particular con un gestor inmobiliario experto en ventas: reserva, arras, documentación y coordinación pre-escritura — sin depender de una agencia con honorarios elevados.",
    whyIntro:
      "Cataluña tiene particularidades (plusvalua, idioma en contratos, ITE en edificios antiguos). Vender «entre conocidos» o por anuncio propio no elimina el riesgo jurídico: conviene que reserva y arras reflejen lo pactado y que el comprador no encuentre sorpresas que tiren la operación.",
    agencyIntro:
      "Muchas inmobiliarias en Barcelona combinan exclusiva, marketing y comisión sobre precio de venta. Si ya tienes comprador, pagar ese porcentaje suele ser desproporcionado. Livendia te da estructura profesional por tarifa fija y trazabilidad en panel de cliente.",
    howIntro:
      "Acompañamiento en Eixample, Gràcia, L'Hospitalet, Badalona u otros municipios con el mismo estándar Livendia.",
    testimonialsTitle: "Propietarios en Barcelona que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Vendimos piso en Poblenou sin agencia. Livendia revisó la reserva que nos pasó el comprador y redactó las arras penitenciales con plazos realistas.",
        author: "Montse & Jordi",
        role: "Vendedores, Barcelona",
      },
      {
        quote:
          "El gestor nos ayudó con certificado de comunidad y calendario para notaría. Llegamos a escritura sin el caos de mensajes sueltos.",
        author: "Carles M.",
        role: "Propietario, Sarrià",
      },
    ],
    finalCtaLead:
      "Contrata online el pack de venta completo y cierra en Barcelona con documentación ordenada y gestor asignado.",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      "En Valencia capital y l'Horta, un gestor inmobiliario especializado te guía para vender entre particulares: contratos de reserva y arras, recopilación de documentos del inmueble y asesoramiento hasta notaría, evitando comisiones de agencia cuando ya tienes comprador.",
    whyIntro:
      "En Valencia es habitual mezclar reserva de agencia, arras copiadas y promesas verbales sobre obra o mobiliario. Como vendedor, lo que no está en contrato puede volverse reclamación. Anticipamos el conflicto con redacción clara y checklist pre-escritura.",
    agencyIntro:
      "Si tu piso está en 250.000 € y la agencia pide el 3 %, hablamos de 7.500 € solo en honorarios. El acompañamiento Livendia concentra el valor donde lo necesitas: legalidad del tramo privado y documentación, no en carteles ni portales.",
    howIntro:
      "Operaciones en Ciutat Vella, Ruzafa, Benimaclet, Mislata o la huerta metropolitana con gestor único de referencia.",
    testimonialsTitle: "Propietarios en Valencia que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Llevábamos meses con anuncio propio y comprador serio. Livendia nos ahorró firmar una reserva deficiente y cerró arras en una semana bien redactadas.",
        author: "Elena P.",
        role: "Vendedora, Ruzafa",
      },
      {
        quote:
          "Queríamos vender sin exclusiva. El gestor coordinó con el notario y nos avisó de la plusvalía municipal con tiempo.",
        author: "Francisco y Lucía",
        role: "Vendedores, Campanar",
      },
    ],
    finalCtaLead:
      "Contrata el acompañamiento de venta completo y escritura en Valencia con reserva, arras y expediente bajo control profesional.",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "En Málaga capital y Costa del Sol, vende tu vivienda a un comprador particular con un gestor inmobiliario experto: reserva, arras, documentación y coordinación pre-escritura — sin pagar comisión del 3–5 % cuando ya tienes comprador.",
    whyIntro:
      "En Málaga es frecuente mezclar anuncios en portales, reservas de agencia y arras copiadas. Si vendes entre particulares (segunda residencia, herencia o traslado), un error en plazos o cargas no declaradas puede retrasar meses la operación. Livendia ordena el tramo legal con gestor dedicado.",
    agencyIntro:
      `En un piso de 320.000 €, una comisión del 3 % son 9.600 € más IVA. El servicio completo de venta Livendia (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) concentra el valor en contratos y documentación, no en carteles ni exclusivas.`,
    howIntro:
      "Mismo protocolo en Centro, Teatinos, El Palo, Torremolinos o municipios del área: estudio de operación, contratos, checklist documental y seguimiento hasta firma.",
    testimonialsTitle: "Propietarios en Málaga que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Vendíamos apartamento en la costa con comprador ya encontrado. Livendia redactó arras y nos ayudó con la comunidad y la nota simple sin firmar exclusiva con una inmobiliaria.",
        author: "Carmen R.",
        role: "Vendedora, Rincón de la Victoria",
      },
      {
        quote:
          "Queríamos vender en Málaga capital sin pagar comisión sobre el precio. El gestor respondió dudas del comprador y llegamos a escritura con todo ordenado.",
        author: "Javier M.",
        role: "Propietario, Teatinos",
      },
    ],
    finalCtaLead:
      `Contrata el servicio completo de venta (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y cierra en Málaga con gestor personal hasta la escritura.`,
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "En Sevilla capital y área metropolitana, vende tu vivienda a un comprador particular con un gestor inmobiliario experto: reserva, arras, documentación y coordinación pre-escritura — sin pagar comisión del 3–5 % cuando ya tienes comprador.",
    whyIntro:
      "En Sevilla es habitual vender entre particulares (Idealista, recomendación o comprador ya encontrado). Las plantillas de reserva y arras suelen proteger al vendedor; sin gestor, plazos, derramas o cargas ocultas pueden retrasar meses la operación o costarte miles de euros.",
    agencyIntro:
      `En un piso de 250.000 €, una comisión del 3 % son 7.500 € más IVA. El servicio completo de venta Livendia (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) concentra el valor en contratos y documentación, no en exclusivas ni carteles.`,
    howIntro:
      "Mismo protocolo en Triana, Nervión, Los Remedios, Macarena, Tomares o Dos Hermanas: estudio de operación, contratos, checklist documental y seguimiento hasta firma.",
    testimonialsTitle: "Propietarios en Sevilla que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Vendíamos en Nervión con comprador particular. Livendia revisó la reserva, redactó arras equilibradas y coordinó la comunidad sin firmar exclusiva con una inmobiliaria.",
        author: "Raquel & Pablo",
        role: "Vendedores, Nervión",
      },
      {
        quote:
          "Ahorramos la comisión de intermediación y tuvimos un gestor que nos guió con plusvalía municipal y calendario de notaría hasta escritura.",
        author: "Manuel G.",
        role: "Propietario, Los Remedios",
      },
    ],
    finalCtaLead:
      `Contrata el servicio completo de venta (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y cierra en Sevilla con gestor personal hasta la escritura.`,
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    heroLead:
      "En Bilbao y área metropolitana, vende entre particulares con un gestor legal especializado en ventas: reserva, arras, documentación del inmueble y coordinación con notaría — tarifa fija frente a honorarios elevados de agencia.",
    whyIntro:
      "En el mercado vizcaíno los precios son altos y las agencias suelen pedir exclusiva y comisión sobre venta. Si ya tienes comprador (Idealista, recomendación o conocido), lo crítico es que reserva y arras reflejen lo pactado y que no aparezcan cargas o derramas sorpresa antes de escritura.",
    agencyIntro:
      `En un piso de 380.000 €, el 3 % de comisión más IVA supera los 13.000 €. Livendia (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) te da acompañamiento profesional de punta a punta en el tramo privado de la venta, con panel de cliente y gestor de referencia.`,
    howIntro:
      "Operaciones en Abando, Deusto, Getxo, Barakaldo o municipios del Gran Bilbao con el mismo estándar Livendia.",
    testimonialsTitle: "Propietarios en Bilbao que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Teníamos comprador particular y nos ofrecían exclusiva. Contratamos Livendia: revisaron la reserva, redactaron arras penitenciales y coordinaron documentación de la comunidad.",
        author: "Ane & Iker",
        role: "Vendedores, Deusto",
      },
      {
        quote:
          "Ahorramos la comisión de intermediación y tuvimos un gestor que nos guió con plusvalía municipal y calendario de notaría.",
        author: "Patricia L.",
        role: "Propietaria, Getxo",
      },
    ],
    finalCtaLead:
      "Contrata online el pack de venta completo y escritura en Bilbao con reserva, arras y expediente bajo control profesional.",
  },
  {
    slug: "valladolid",
    city: "Valladolid",
    schemaAdministrativeArea: "Castilla y León",
    heroLead:
      `En Valladolid el precio medio de un piso ronda los 150.000 €. Una comisión del 3 % son 4.500 € + IVA (~5.445 €); al 5 %, 7.500 € + IVA. Con Livendia pagas ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, pago único, sin comisión sobre el precio de venta. Aquí abundan vendedores mayores, herencias entre hermanos y operaciones entre vecinos o familiares que ya tienen comprador y no quieren ceder miles de euros a una inmobiliaria por un trámite documental.`,
    whyIntro:
      "El mercado vallisoletano es más pausado que Madrid o Barcelona, pero no menos delicado: muchas ventas son entre particulares que se conocen desde hace años. El perfil típico es el propietario senior o la familia que liquida una herencia y vende a un comprador ya encontrado (hijo de vecinos, compañero de trabajo, comprador de otra provincia). Los problemas suelen venir de aceptación de herencia pendiente, varios cotitulares que deben firmar arras al unísono, o cargas antiguas en la nota simple que el comprador descubre tarde.",
    agencyIntro:
      `En un piso de 150.000 €, una comisión del 3 % suponen 4.500 € + IVA (~5.445 €) y al 5 %, 7.500 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana de gestoría inmobiliaria, sin comisión sobre el precio de venta. Ideal cuando ya tienes comprador particular.`,
    howIntro:
      "Mismo protocolo en Centro, Delicias, Parquesol, Rondilla o municipios del área: estudio de operación, contratos, checklist documental y seguimiento hasta firma.",
    testimonialsTitle: "Propietarios en Valladolid que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Vendíamos piso en Parquesol a un comprador que conocíamos. Livendia redactó arras y revisó la herencia pendiente de inscripción sin que pagáramos comisión de agencia.",
        author: "María J.",
        role: "Vendedora, Parquesol",
      },
      {
        quote:
          "Teníamos comprador de otra provincia. El gestor ordenó reserva, comunidad y calendario de notaría por 890 € cuando una inmobiliaria pedía el 3 %.",
        author: "Antonio & Lucía",
        role: "Vendedores, Delicias",
      },
    ],
    finalCtaLead:
      `Contrata el servicio completo de venta (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y cierra en Valladolid con gestor personal hasta la escritura.`,
  },
  {
    slug: "granada",
    city: "Granada",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      `En Granada el precio medio de un piso ronda los 170.000 €. Una comisión del 3 % son 5.100 € + IVA (~6.171 €); al 5 %, 8.500 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana de gestoría inmobiliaria, sin comisión sobre la venta. En la ciudad conviven turismo residencial, universidad (UGR), y ventas en el Albaicín o Realejo entre particulares que ya tienen comprador.`,
    whyIntro:
      "Granada mezcla compradores locales, estudiantes que compran piso pequeño, y adquirentes de otras provincias atraídos por calidad de vida. El vendedor particular suele ser propietario de piso en zona universitaria, heredero de vivienda en el casco histórico, o familia que vende segunda residencia en la Vega. Las casuísticas frecuentes: licencias en edificios antiguos del Albaicín, comunidades con obras de accesibilidad, arras copiadas que no contemplan el arrendamiento turístico del vecino, o compradores que piden plazo corto para hipoteca.",
    agencyIntro:
      `En un piso de 170.000 €, una comisión del 3 % suponen 5.100 € + IVA (~6.171 €) y al 5 %, 8.500 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana de gestoría inmobiliaria, sin comisión sobre el precio de venta. Ideal cuando ya tienes comprador particular.`,
    howIntro:
      "Mismo protocolo en Albaicín, Zaidín, Ronda, Chana o municipios del área metropolitana: estudio de operación, contratos, checklist documental y seguimiento hasta firma.",
    testimonialsTitle: "Propietarios en Granada que vendieron con gestor Livendia",
    testimonials: [
      {
        quote:
          "Vendimos piso en Zaidín con comprador de la UGR. Livendia revisó arras y documentación de comunidad sin exclusiva ni comisión sobre el precio.",
        author: "Pablo R.",
        role: "Vendedor, Zaidín",
      },
      {
        quote:
          "Comprador de Madrid, piso en Realejo. El gestor coordinó plazos de hipoteca y nota simple antes de firmar arras penitenciales.",
        author: "Carmen & Diego",
        role: "Vendedores, Realejo",
      },
    ],
    finalCtaLead:
      `Contrata el servicio completo de venta (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y cierra en Granada con gestor personal hasta la escritura.`,
  },
];
