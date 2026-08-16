/**
 * Landings SEO: contratos inmobiliarios entre particulares por ciudad.
 * Rutas: /servicios/contrato-entre-particulares-local/[slug]
 *
 * Ciudades donde aún no hay cobertura local fuerte de contratos (alquiler/arras)
 * o donde conviene una landing unificada orientada al particular que ahorra.
 */

import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
} from "@/lib/catalog.public";

export const CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE = "/servicios/contrato-entre-particulares-local";

export const CONTRATO_ENTRE_PARTICULARES_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "bilbao",
  "granada",
  "zaragoza",
  "alicante",
  "gijon",
  "cordoba",
  "valladolid",
];

export type ContratoEntreParticularesLocalLandingConfig = {
  path: string;
  slug: string;
  city: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  heroBadge: string;
  heroH1: string;
  heroLead: string;
  heroBullets: readonly string[];
  whyTitle: string;
  whyIntro: string;
  zonesNote: string;
  faq: readonly { question: string; answer: string }[];
  finalCtaLead: string;
  waPrefill: string;
};

export type ContratoEntreParticularesLocalCityDefinition = Omit<
  ContratoEntreParticularesLocalLandingConfig,
  "path"
>;

export function localContratoEntreParticularesHref(slug: string): string {
  return `${CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE}/${slug}`;
}

export function isContratoEntreParticularesLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ENTRE_PARTICULARES_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedContratoEntreParticularesLocalCities(): ContratoEntreParticularesLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ENTRE_PARTICULARES_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ENTRE_PARTICULARES_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export function getContratoEntreParticularesLocalCity(
  slug: string,
): ContratoEntreParticularesLocalCityDefinition | undefined {
  return CONTRATO_ENTRE_PARTICULARES_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function toContratoEntreParticularesLandingConfig(
  def: ContratoEntreParticularesLocalCityDefinition,
): ContratoEntreParticularesLocalLandingConfig {
  return { ...def, path: localContratoEntreParticularesHref(def.slug) };
}

const PRICE_TRIO = `${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, arras ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} o habitación ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}`;

export const CONTRATO_ENTRE_PARTICULARES_LOCAL_CITIES: ContratoEntreParticularesLocalCityDefinition[] = [
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    metaTitle: `Contrato entre particulares Bilbao — alquiler y arras desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Bilbao: alquiler LAU, arras penitenciales o habitación por ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Sin plantillas de internet. Gestoría Livendia para propietarios e inquilinos.`,
    keywords: [
      "contrato entre particulares bilbao",
      "contrato alquiler entre particulares bilbao",
      "contrato arras particulares bilbao",
      "alquiler particular bilbao contrato",
      "gestoría contratos particulares bilbao",
    ],
    heroBadge: "Entre particulares · Bilbao",
    heroH1: "Contratos entre particulares en Bilbao — sin plantillas copiadas de internet",
    heroLead: `¿Alquilas o vendes entre particulares en Bilbao? Livendia redacta tu contrato de alquiler LAU, arras o habitación por ${PRICE_TRIO} IVA incl. — gestoría profesional a precio cerrado, no agencia inmobiliaria.`,
    heroBullets: [
      "Propietario e inquilino, o vendedor y comprador particular",
      "Entrega en 48–72 h con gestor legal dedicado",
      "Abando, Deusto, Getxo y área metropolitana",
    ],
    whyTitle: "Por qué no firmar un Word encontrado en Google",
    whyIntro:
      "En Bilbao los precios son altos y un error en arras o en la cláusula de actualización de renta puede costarte miles de euros. Las plantillas genéricas no contemplan el IRAV vasco en zonas tensionadas, ni el reparto de gastos en edificios señoriales del Ensanche. Livendia adapta cada contrato a vuestra operación real entre particulares.",
    zonesNote: "Operamos en Bilbao capital, Abando, Indautxu, Deusto, Basurto, Santutxu y municipios del Gran Bilbao (Getxo, Barakaldo, Portugalete).",
    faq: [
      {
        question: "¿Puedo alquilar mi piso en Bilbao a un particular sin agencia?",
        answer:
          `Sí. Solo necesitas un contrato LAU bien redactado (${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. en Livendia), inventario del inmueble y depósito de fianza conforme a normativa. No hace falta inmobiliaria para el contrato.`,
      },
      {
        question: "¿Redactáis contrato de arras entre comprador y vendedor particular?",
        answer:
          `Sí. Arras penitenciales o confirmatorias por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl., con plazos, penalidades y objeto alineados a lo que habéis pactado entre particulares.`,
      },
      {
        question: "¿Livendia busca inquilino o comprador?",
        answer: "No. Somos gestoría de contratos: redactamos y revisamos documentos cuando las dos partes ya están identificadas.",
      },
    ],
    finalCtaLead: `Elige alquiler LAU, arras o habitación y contrata online desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} — gestoría entre particulares en Bilbao.`,
    waPrefill:
      "Hola, necesito un contrato entre particulares en Bilbao (alquiler o arras) y quiero gestoría Livendia en lugar de una plantilla de internet.",
  },
  {
    slug: "granada",
    city: "Granada",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Contrato entre particulares Granada — LAU, arras, habitación ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Granada: alquiler a estudiantes, arras de compraventa o habitación en piso compartido. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría Livendia, no agencia.`,
    keywords: [
      "contrato entre particulares granada",
      "contrato alquiler particular granada",
      "contrato habitación granada ugr",
      "contrato arras granada particulares",
      "alquiler entre particulares granada",
    ],
    heroBadge: "Entre particulares · Granada",
    heroH1: "Contratos entre particulares en Granada — alquiler, habitación o arras con gestoría",
    heroLead: `¿Alquilas en el Albaicín, vendes a un comprador de fuera o compartes piso con estudiantes de la UGR? Livendia redacta contratos entre particulares por ${PRICE_TRIO} IVA incl. — precio fijo de gestoría, sin comisión de agencia.`,
    heroBullets: [
      "Ideal para propietarios particulares y arrendadores de habitación",
      "Casco histórico, Zaidín, Realejo y área metropolitana",
      "Contrato a medida, no PDF genérico",
    ],
    whyTitle: "Granada: muchos particulares, pocos contratos bien hechos",
    whyIntro:
      "Entre universidad, turismo residencial y ventas entre conocidos, en Granada es habitual firmar arras o alquileres con modelos copiados. En el Albaicín o en edificios patrimoniales eso puede generar reclamaciones sobre licencias, obras de comunidad o plazos de hipoteca. Un gestor adapta el texto a vuestra operación entre particulares.",
    zonesNote: "Albaicín, Realejo, Zaidín, Ronda, Chana, Armilla, Maracena y resto del área metropolitana granadina.",
    faq: [
      {
        question: "¿Hacéis contrato de habitación para piso compartido en Granada?",
        answer:
          `Sí. Contrato de habitación por ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl., con normas de convivencia y reparto de gastos adaptado al piso compartido entre particulares.`,
      },
      {
        question: "¿Puedo vender mi piso en Granada a un particular sin inmobiliaria?",
        answer:
          `El contrato de arras es el primer paso legal (${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.). Para venta completa con trámites hasta notaría, mira nuestro servicio completo de venta (890 €).`,
      },
      {
        question: "¿Atendéis compradores de otra provincia?",
        answer: "Sí. Todo el proceso es online: subes datos al panel y el gestor redacta el contrato entre particulares.",
      },
    ],
    finalCtaLead: `Contrata tu contrato entre particulares en Granada desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} — LAU, arras o habitación con gestor Livendia.`,
    waPrefill:
      "Hola, necesito un contrato entre particulares en Granada (alquiler o arras) con gestoría Livendia.",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    metaTitle: `Contrato entre particulares Zaragoza — alquiler y arras ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Zaragoza: alquiler LAU, arras de compraventa o habitación. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría digital Livendia para propietarios particulares.`,
    keywords: [
      "contrato entre particulares zaragoza",
      "contrato alquiler zaragoza particular",
      "contrato arras zaragoza",
      "alquiler entre particulares zaragoza",
      "gestoría contratos zaragoza",
    ],
    heroBadge: "Entre particulares · Zaragoza",
    heroH1: "Contratos entre particulares en Zaragoza — gestoría a precio cerrado",
    heroLead: `¿Alquilas en Actur, vendes a un comprador particular o alquilas habitación cerca del campus? Livendia redacta contratos entre particulares por ${PRICE_TRIO} IVA incl. — ahorras frente a abogado por horas y evitas plantillas incompletas.`,
    heroBullets: [
      "Mercado accesible: contrato profesional sin coste de agencia",
      "Centro, Delicias, Actur-Rey Fernando, Universidad",
      "Entrega rápida y seguimiento por WhatsApp",
    ],
    whyTitle: "Zaragoza: operaciones entre particulares muy habituales",
    whyIntro:
      "En Zaragoza muchos alquileres y compraventas se cierran por recomendación o Idealista, sin intermediario. El riesgo está en firmar arras o LAU sin revisar cargas, derramas o plazos de financiación del comprador. Livendia pone un gestor en el medio del papel, no del precio de la vivienda.",
    zonesNote: "Centro Histórico, Delicias, Actur-Rey Fernando, Universidad-Romareda, Las Fuentes y área metropolitana.",
    faq: [
      {
        question: "¿Cuánto cuesta un contrato de alquiler entre particulares en Zaragoza?",
        answer: `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. por contrato LAU completo con inventario y revisión legal.`,
      },
      {
        question: "¿Redactáis arras si ya tengo comprador particular?",
        answer: `Sí, por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Si necesitas todo el trámite hasta notaría, el servicio completo de venta cuesta 890 € fijos.`,
      },
      {
        question: "¿Sois agencia inmobiliaria?",
        answer: "No. Gestoría especializada en contratos inmobiliarios para particulares.",
      },
    ],
    finalCtaLead: `Contrata online tu contrato entre particulares en Zaragoza — desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
    waPrefill: "Hola, busco gestoría para un contrato entre particulares en Zaragoza (alquiler o arras).",
  },
  {
    slug: "alicante",
    city: "Alicante",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Contrato entre particulares Alicante — LAU y arras ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Alicante: alquiler anual, temporada o arras de venta. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría Livendia — propietarios e inquilinos sin agencia.`,
    keywords: [
      "contrato entre particulares alicante",
      "contrato alquiler alicante particular",
      "contrato arras alicante",
      "alquiler particular alicante",
      "contrato alquiler playa san juan",
    ],
    heroBadge: "Entre particulares · Alicante",
    heroH1: "Contratos entre particulares en Alicante — alquiler, temporada o arras",
    heroLead: `¿Alquilas en el centro, en Playa de San Juan o vendes entre particulares? Livendia redacta contratos por ${PRICE_TRIO} IVA incl. — distinguimos LAU de temporada y evitamos confusiones que generan demandas.`,
    heroBullets: [
      "Residencial y costero: contrato adaptado al uso real",
      "Propietario particular sin comisión de captación",
      "Universidad, puerto y zona turística",
    ],
    whyTitle: "Alicante mezcla alquiler residencial y temporal",
    whyIntro:
      "Muchos conflictos vienen de usar un contrato LAU para una temporada o viceversa. Entre particulares en Alicante es frecuente alquilar a estudiantes Erasmus o vender a comprador británico o belga. El contrato debe reflejar duración, gastos y entrega de llaves con precisión.",
    zonesNote: "Centro, Playa de San Juan, San Blas, Campoamor, Universidad de Alicante y municipios del área.",
    faq: [
      {
        question: "¿Contrato LAU o temporada en Alicante?",
        answer:
          "Depende de la duración y uso. El gestor te orienta y redacta la modalidad correcta desde 145 € IVA incl.",
      },
      {
        question: "¿Puedo alquilar sin agencia inmobiliaria?",
        answer: `Sí. Solo necesitas contrato bien redactado (${CONTRATO_ALQUILER_LAU_PRICE_LABEL}) y cumplir depósito de fianza ante la Generalitat Valenciana.`,
      },
      {
        question: "¿Hacéis contrato de arras entre particulares?",
        answer: `Sí, ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. con plazos realistas para hipoteca del comprador.`,
      },
    ],
    finalCtaLead: `Firma en Alicante con contrato entre particulares revisado por Livendia — desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}.`,
    waPrefill: "Hola, necesito contrato entre particulares en Alicante (alquiler o venta).",
  },
  {
    slug: "gijon",
    city: "Gijón",
    schemaAdministrativeArea: "Asturias",
    metaTitle: `Contrato entre particulares Gijón — alquiler y arras ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Gijón: alquiler LAU, habitación o arras. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría Livendia para propietarios particulares en Asturias.`,
    keywords: [
      "contrato entre particulares gijon",
      "contrato alquiler gijon particular",
      "gestión alquiler gijon particular",
      "contrato arras gijon",
      "alquiler entre particulares gijon",
    ],
    heroBadge: "Entre particulares · Gijón",
    heroH1: "Contratos entre particulares en Gijón — gestoría sin agencia inmobiliaria",
    heroLead: `¿Alquilas en Cimadevilla, vendes a un comprador de Oviedo o compartes piso en la Universidad? Livendia redacta contratos entre particulares por ${PRICE_TRIO} IVA incl. — precio fijo, entrega en días.`,
    heroBullets: [
      "Propietarios particulares en mercado asturiano",
      "LAU sin límites de zona tensionada en Asturias",
      "Cimadevilla, La Calzada, Jove, Somió",
    ],
    whyTitle: "Gijón: confianza personal, contrato en papel",
    whyIntro:
      "En Asturias muchas operaciones son entre vecinos, familia o compañeros de trabajo. La confianza verbal no sustituye un LAU con inventario o unas arras con plazo de hipoteca claro. Livendia formaliza lo pactado sin convertirse en agencia.",
    zonesNote: "Centro, Cimadevilla, La Calzada, Jove, Somió, El Llano y área metropolitana de Gijón.",
    faq: [
      {
        question: "¿Asturias tiene zona de mercado tensionado?",
        answer:
          "No. El alquiler en Gijón se rige por LAU general. El gestor adapta cláusulas de actualización de renta a la normativa vigente.",
      },
      {
        question: "¿Contrato de habitación en piso compartido?",
        answer: `Sí, ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. con reparto de gastos y normas de convivencia.`,
      },
      {
        question: "¿Atendéis también Oviedo?",
        answer: "Sí, misma gestoría online para toda Asturias.",
      },
    ],
    finalCtaLead: `Contrata tu contrato entre particulares en Gijón desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} — gestoría Livendia.`,
    waPrefill: "Hola, necesito contrato entre particulares en Gijón (alquiler o arras).",
  },
  {
    slug: "cordoba",
    city: "Córdoba",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Contrato entre particulares Córdoba — LAU y arras ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Córdoba: alquiler LAU, habitación en piso compartido o arras. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría Livendia.`,
    keywords: [
      "contrato entre particulares cordoba",
      "contrato alquiler cordoba particular",
      "contrato habitación cordoba",
      "contrato arras cordoba",
    ],
    heroBadge: "Entre particulares · Córdoba",
    heroH1: "Contratos entre particulares en Córdoba — alquiler o arras con gestoría",
    heroLead: `¿Alquilas en el Judería, vendes entre conocidos o alquilas habitación a estudiantes? Livendia redacta contratos entre particulares por ${PRICE_TRIO} IVA incl.`,
    heroBullets: [
      "Casco histórico y barrios residenciales",
      "Inventario incluido en contrato LAU",
      "Sin comisión sobre la renta ni el precio de venta",
    ],
    whyTitle: "Córdoba: patios, muebles y contratos genéricos",
    whyIntro:
      "En Córdoba es habitual pactar verbalmente sobre patios, muebles o obras menores. Si no consta en el contrato LAU o en las arras, aparece el conflicto meses después. Entre particulares, un gestor por 145 € evita meses de abogado.",
    zonesNote: "Judería, Ciudad Jardín, Sector Sur, Levante, Campus Rabanales y pedanías cercanas.",
    faq: [
      {
        question: "¿Puedo alquilar mi piso en Córdoba sin inmobiliaria?",
        answer: `Sí. Contrato LAU por ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. con inventario y cláusulas adaptadas.`,
      },
      {
        question: "¿Qué incluye el servicio de arras?",
        answer: `Redacción de arras penitenciales o confirmatorias por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. entre comprador y vendedor particular.`,
      },
      {
        question: "¿Livendia publica mi anuncio?",
        answer: "No. Solo gestoría de contratos cuando ya tienes arrendatario o comprador.",
      },
    ],
    finalCtaLead: `Elige LAU, arras o habitación y contrata en Córdoba desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}.`,
    waPrefill: "Hola, busco gestoría para contrato entre particulares en Córdoba.",
  },
  {
    slug: "valladolid",
    city: "Valladolid",
    schemaAdministrativeArea: "Castilla y León",
    metaTitle: `Contrato entre particulares Valladolid — LAU y arras ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
    metaDescription:
      `Contratos entre particulares en Valladolid: alquiler, habitación o arras de compraventa. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría Livendia para propietarios particulares.`,
    keywords: [
      "contrato entre particulares valladolid",
      "contrato alquiler valladolid particular",
      "contrato arras valladolid",
      "alquiler entre particulares valladolid",
    ],
    heroBadge: "Entre particulares · Valladolid",
    heroH1: "Contratos entre particulares en Valladolid — gestoría a 145 €, no comisión de agencia",
    heroLead: `¿Alquilas en Parquesol, vendes a un comprador conocido o alquilas habitación en Delicias? Livendia redacta contratos entre particulares por ${PRICE_TRIO} IVA incl. — ideal cuando la operación es entre vecinos o familia.`,
    heroBullets: [
      "Herencias, ventas entre conocidos y alquileres particulares",
      "Centro, Delicias, Parquesol, Rondilla",
      "Gestor online sin desplazarte al despacho",
    ],
    whyTitle: "Valladolid: operaciones de confianza, papel deficiente",
    whyIntro:
      "En Valladolid es muy común vender o alquilar a alguien del entorno. La plantilla de internet no contempla herencias pendientes de inscripción, varios cotitulares o arras con condición de hipoteca. Livendia cierra ese hueco por tarifa plana.",
    zonesNote: "Centro, Delicias, Parquesol, Huerta del Rey, Rondilla, Laguna de Duero y área.",
    faq: [
      {
        question: "¿Contrato si vendo a un familiar en Valladolid?",
        answer: `Sí. Arras o servicio completo de venta (890 €) según lo que necesites. Entre particulares el contrato debe ser tan riguroso como con un desconocido.`,
      },
      {
        question: "¿Precio del contrato de alquiler?",
        answer: `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. con inventario y revisión LAU.`,
      },
      {
        question: "¿Sois agencia?",
        answer: "No. Gestoría de contratos inmobiliarios para particulares.",
      },
    ],
    finalCtaLead: `Contrata contrato entre particulares en Valladolid desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
    waPrefill: "Hola, necesito contrato entre particulares en Valladolid.",
  },
];
