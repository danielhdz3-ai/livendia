/**
 * Distritos Barcelona — contrato LAU local (batch publicación).
 * Rutas: /servicios/contrato-alquiler-local/barcelona-{distrito}
 */
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import type { LocalDifferentiationFields } from "@/lib/merge-local-differentiation";
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";
import type { ContratoAlquilerLocalCityDefinition } from "@/lib/contrato-alquiler-local-cities";

const BCN_LAU_PLATFORM_NOTES: LocalCityLandingFields["localServiceNotes"] = [
  {
    title: "Servicio 100 % online — sin visitar un despacho",
    body: "Contratas en livendia.com, subes documentación al panel y hablas con tu gestor por WhatsApp. No hace falta acudir a Les Corts ni a un despacho del Eixample para redactar el LAU.",
  },
  {
    title: "Plataforma Livendia: expediente centralizado",
    body: "Documentos, inventario fotográfico, estado del contrato y mensajes con el gestor en un solo panel. Propietario e inquilino siguen el avance antes de firmar.",
  },
  {
    title: "Livendia, referente en contratos de alquiler",
    body: "No somos agencia de captación: no publicamos tu anuncio ni cobramos un mes de renta. Nos especializamos en LAU, temporada, habitación, administración del alquiler y revisión legal de borradores.",
  },
];

export const CONTRATO_ALQUILER_LOCAL_BCN_DISTRICT_SLUGS = [
  "barcelona-sant-marti",
  "barcelona-sarria-sant-gervasi",
  "barcelona-nou-barris",
  "barcelona-ciutat-vella",
  "barcelona-horta-guinardo",
  "barcelona-sant-andreu",
] as const;

export type ContratoAlquilerLocalBcnDistrictSlug =
  (typeof CONTRATO_ALQUILER_LOCAL_BCN_DISTRICT_SLUGS)[number];

export const CONTRATO_ALQUILER_LOCAL_BCN_DISTRICT_MARKET_INSIGHTS: Record<string, string> = {
  "barcelona-sant-marti":
    "Sant Martí combina El Clot, La Verneda, Diagonal Mar y el eje Poblenou–22@ (~24 €/m² Brains Q2 2026). Los alquileres entre particulares cierran rápido, pero los LAU copiados no recogen comunidades multi-bloque, parking anexo ni renta anterior en zona tensionada. Livendia redacta contrato e inventario por barrio del distrito.",
  "barcelona-sarria-sant-gervasi":
    "Sarrià-Sant Gervasi encabeza ticket alto en Barcelona (~28,8 €/m², Brains Q2 2026): Pedralbes, Sant Gervasi, Tres Torres y Bonanova. Alquileres entre particulares sin agencia necesitan LAU que refleje parking, IRAV en renovación e INCASÒL — no plantillas genéricas.",
  "barcelona-nou-barris":
    "Nou Barris concentra bloques de los 60–70 en Verdun, Roquetes y Trinitat Vella con rentas más asequibles y alta rotación. Entre particulares, un LAU genérico no explica derramas en comunidades grandes ni depósito en INCASÒL. Livendia adapta cláusulas al edificio concreto.",
  "barcelona-ciutat-vella":
    "Ciutat Vella (Gòtic, Raval, Born, Barceloneta) mezcla fincas centenarias, pisos compartidos y zona tensionada obligatoria. Los alquileres directos tras una visita suelen firmar PDFs que no documentan humedades, locales en planta baja ni renta anterior. Livendia redacta LAU e inventario por barrio del distrito.",
  "barcelona-horta-guinardo":
    "Horta-Guinardó une El Carmel en ladera, Horta centre y el Guinardó con edificios sin ascensor y familias consolidadas (~21–23 €/m² según barrio). Sin contrato adaptado, calefacción comunitaria y reformas pendientes generan conflictos. Livendia cierra LAU e inventario antes de la fianza.",
  "barcelona-sant-andreu":
    "Sant Andreu crece con La Sagrera, Sant Andreu de Palomar y Bon Pastor: alquileres entre particulares cuando el inquilino ya viene de Idealista. Obra ferroviaria y bloques densos exigen plazos realistas en comunidad e INCASÒL en el contrato — Livendia redacta LAU del distrito.",
};

export const CONTRATO_ALQUILER_LOCAL_BCN_DISTRICT_CITIES: ContratoAlquilerLocalCityDefinition[] = [
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Alquilas o alquilas en Sant Martí entre particulares — El Clot, La Verneda, Diagonal Mar o Provençals — sin agencia? Redactamos o revisamos tu contrato LAU por 145 € IVA incl.: INCASÒL, renta anterior, inventario y gestor online Livendia.",
    whyIntro:
      "Sant Martí va más allá del 22@: miles de pisos en El Clot y La Verneda cierran por Idealista entre propietario e inquilino. Promociones en Diagonal Mar exigen LAU que refleje parking, trastero y gastos de comunidad — no un PDF de otra ciudad.",
    howIntro:
      "Cuatro pasos online hasta firmar en El Clot, La Verneda, Diagonal Mar, Provençals o el entorno del Parc del Clot.",
    testimonialsTitle: "Particulares en Sant Martí que redactaron LAU con Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en El Clot sin inmobiliaria. Livendia incluyó renta anterior, INCASÒL e inventario en bloque de los 70 — todo por panel.",
        author: "Núria S.",
        role: "Propietaria · El Clot",
      },
      {
        quote:
          "Piso en Diagonal Mar entre particulares. El gestor dejó parking y trastero en anexo antes de vincular la fianza.",
        author: "David L.",
        role: "Inquilino · Sant Martí",
      },
    ],
    finalCtaLead:
      "Contrato LAU en Sant Martí entre particulares — gestoría Livendia online, sin comisión sobre la renta.",
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "Contrato de alquiler de larga duración en Sarrià-Sant Gervasi para particulares: Pedralbes, Sant Gervasi, Tres Torres o Bonanova. 145 € IVA incl. — IRAV, INCASÒL, parking anexo e inventario. Servicio online Livendia.",
    whyIntro:
      "En Sarrià-Sant Gervasi el ticket es alto y las partes exigen formalidad sin pagar gestión de agencia. Un LAU genérico no recoge trastero, portería ni tope legal de subida en renovación.",
    howIntro:
      "Cuatro hitos digitales hasta la firma en Sarrià centre, Sant Gervasi, Les Tres Torres, Bonanova o Putxet.",
    testimonialsTitle: "Propietarios en Sarrià-Sant Gervasi con contrato LAU Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Bonanova sin agencia. Livendia redactó LAU con anexos de parking e inventario detallado — gestor por WhatsApp.",
        author: "Josep R.",
        role: "Propietario · Sant Gervasi",
      },
      {
        quote:
          "Entramos en Tres Torres entre particulares. Contrato con IRAV explicado y depósito orientado a INCASÒL antes de firmar.",
        author: "Elisabet T.",
        role: "Inquilina · Sarrià-Sant Gervasi",
      },
    ],
    finalCtaLead:
      "Redacta tu LAU en Sarrià-Sant Gervasi online — gestoría Livendia, entrega en 48–72 h.",
  },
  {
    slug: "barcelona-nou-barris",
    city: "Nou Barris",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Alquilas en Nou Barris entre particulares — Verdun, Roquetes, Trinitat Vella o la Porta — sin agencia? Contrato LAU por 145 € IVA incl.: INCASÒL, zona tensionada, inventario y gestor dedicado online.",
    whyIntro:
      "Nou Barris concentra bloques amplios y comunidades con muchos propietarios. Los alquileres directos suelen usar plantillas que no explican derramas ni certificado de deuda antes de entregar la fianza.",
    howIntro:
      "Cuatro pasos hasta rubricar en Verdun, Roquetes, Trinitat Vella, Torre Baró o Ciutat Meridiana.",
    testimonialsTitle: "Particulares en Nou Barris que cerraron LAU con Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Roquetes sin inmobiliaria. Livendia dejó comunidad, fianza INCASÒL e inventario fotográfico antes de la entrada.",
        author: "Rosa M.",
        role: "Propietaria · Roquetes",
      },
      {
        quote:
          "Piso en Verdun por Idealista. El gestor revisó renta anterior y cláusulas de ascensor comunitario — sin ir a un despacho.",
        author: "Miquel T.",
        role: "Inquilino · Nou Barris",
      },
    ],
    finalCtaLead:
      "Firma en Nou Barris con LAU redactado por gestoría — panel Livendia, sin comisión de agencia.",
  },
  {
    slug: "barcelona-ciutat-vella",
    city: "Ciutat Vella",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "Redactamos tu contrato LAU en Ciutat Vella entre particulares: Gòtic, El Raval, El Born y La Barceloneta. 145 € IVA incl. — humedades en inventario, INCASÒL, renta anterior y gestor online Livendia.",
    whyIntro:
      "Ciutat Vella mezcla fincas históricas, pisos compartidos y locales en planta baja. Si ya tenéis contraparte, el riesgo está en firmar un LAU copiado que no documenta patologías ni convivencia.",
    howIntro:
      "Cuatro pasos online hasta firmar en el Gòtic, El Raval, El Born, La Barceloneta o límites con Sant Pere.",
    testimonialsTitle: "Particulares en Ciutat Vella con contrato LAU Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en El Born sin agencia. Livendia adaptó LAU a patio interior e inventario con humedades conocidas — todo online.",
        author: "Marta G.",
        role: "Propietaria · El Born",
      },
      {
        quote:
          "Piso en El Raval entre particulares. El gestor reguló convivencia e INCASÒL antes de que pagáramos la fianza.",
        author: "Lucía G.",
        role: "Inquilina · Ciutat Vella",
      },
    ],
    finalCtaLead:
      "Contrato LAU en Ciutat Vella entre particulares — gestoría Livendia, referente en alquiler en Barcelona.",
  },
  {
    slug: "barcelona-horta-guinardo",
    city: "Horta-Guinardó",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Alquilas en Horta-Guinardó entre particulares — El Carmel, Horta centre o el Guinardó — sin agencia? LAU redactado o revisado por 145 € IVA incl.: inventario, INCASÒL, calefacción comunitaria y gestor Livendia online.",
    whyIntro:
      "Horta-Guinardó combina ladera, edificios sin ascensor y alquileres que cierran por recomendación o Idealista. Sin LAU adaptado, reformas pendientes y reparto de gastos se discuten en el primer trimestre.",
    howIntro:
      "Cuatro hitos digitales hasta la firma en El Carmel, Horta centre, el Guinardó, La Teixonera o Montbau.",
    testimonialsTitle: "Propietarios e inquilinos en Horta-Guinardó con LAU Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en El Carmel sin inmobiliaria. Livendia incluyó calefacción comunitaria e inventario en finca en ladera.",
        author: "Jordi P.",
        role: "Propietario · El Carmel",
      },
      {
        quote:
          "Entramos en Horta centre entre particulares. Contrato con renta anterior revisada y depósito INCASÒL explicado por WhatsApp.",
        author: "Alejandro R.",
        role: "Inquilino · Horta-Guinardó",
      },
    ],
    finalCtaLead:
      "Redacta tu LAU en Horta-Guinardó online — gestoría Livendia, sin comisión sobre la renta.",
  },
  {
    slug: "barcelona-sant-andreu",
    city: "Sant Andreu",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "Contrato de alquiler de larga duración en Sant Andreu para particulares: Palomar, La Sagrera, Bon Pastor o Navas. 145 € IVA incl. — INCASÒL, inventario, obra y convivencia en pisos familiares. Livendia online.",
    whyIntro:
      "Sant Andreu atrae inquilinos de toda Barcelona con La Sagrera y barrios consolidados. Los LAU genéricos no recogen ruido de obra, pisos familiares con habitaciones alquiladas ni plazos de comunidad.",
    howIntro:
      "Cuatro pasos hasta firmar en Sant Andreu de Palomar, La Sagrera, Bon Pastor, Navas o Trinitat Vella límite.",
    testimonialsTitle: "Particulares en Sant Andreu que redactaron LAU con Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en La Sagrera sin agencia. Livendia alineó fianza, inventario y cláusula sobre obras cercanas antes de firmar.",
        author: "Anna S.",
        role: "Propietaria · La Sagrera",
      },
      {
        quote:
          "Piso en Palomar entre particulares. El gestor dejó comunidad e INCASÒL claros — tramitación 100 % online.",
        author: "Imma L.",
        role: "Inquilina · Sant Andreu",
      },
    ],
    finalCtaLead:
      "Contrato LAU en Sant Andreu entre particulares — gestoría Livendia con panel y gestor dedicado.",
  },
];

function districtDiff(
  slug: ContratoAlquilerLocalBcnDistrictSlug,
  spec: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroBadge: string;
    heroH1: string;
    heroBullets: string[];
    whyTitle: string;
    whySubtitle: string;
    localZonesHeading: string;
    localZones: string;
    localBenefits: LocalCityLandingFields["localBenefits"];
    finalCtaTitle: string;
    faq: LocalCityLandingFields["faq"];
  },
): [string, LocalDifferentiationFields] {
  return [
    slug,
    {
      ...spec,
      localServiceNotes: BCN_LAU_PLATFORM_NOTES,
    },
  ];
}

export const CONTRATO_ALQUILER_LOCAL_BCN_DISTRICT_DIFFERENTIATION: Record<string, LocalDifferentiationFields> =
  Object.fromEntries([
    districtDiff("barcelona-sant-marti", {
      metaTitle: "Contrato alquiler Sant Martí entre particulares — 145 € IVA incl.",
      metaDescription:
        "Contrato LAU en Sant Martí sin agencia: El Clot, La Verneda, Diagonal Mar. 145 € IVA incl. INCASÒL e inventario. Livendia online.",
      keywords: [
        "contrato alquiler sant marti barcelona",
        "contrato lau el clot entre particulares",
        "contrato alquiler la verneda",
        "alquiler diagonal mar contrato lau",
        "redactar contrato alquiler sant marti",
        "contrato alquiler entre particulares sant marti",
      ],
      heroBadge: "Entre particulares · Sant Martí",
      heroH1: "Contrato de alquiler en Sant Martí entre particulares — LAU sin agencia",
      heroBullets: [
        "El Clot, La Verneda, Diagonal Mar, Provençals",
        "145 € IVA incl. — gestoría, no comisión inmobiliaria",
        "Comunidades multi-bloque e INCASÒL revisados",
      ],
      whyTitle: "Sant Martí: alquiler directo con LAU adaptado al barrio",
      whySubtitle:
        "Si ya tenéis contraparte por Idealista, Livendia cierra el texto legal: parking, trastero, renta anterior e inventario antes de la fianza.",
      localZonesHeading: "Barrios de Sant Martí donde redactamos contratos LAU",
      localZones:
        "El Clot, La Verneda i la Pau, Diagonal Mar, Provençals del Poblenou, el Parc i la Llacuna del Poblenou (límite) y el Camp de l'Arpa. También tenemos landing específica en Poblenou / 22@.",
      localBenefits: [
        {
          title: "Promociones y segunda mano",
          description: "Cláusulas de garaje, trastero y zonas comunes en edificios recientes.",
        },
        {
          title: "Comunidades grandes",
          description: "Certificado de deuda y derramas explicados al inquilino antes de firmar.",
        },
        {
          title: "Zona tensionada",
          description: "Renta anterior e INCASÒL revisados — obligatorio en Barcelona.",
        },
        {
          title: "Sin comisión de captación",
          description: "145 € IVA incl. — Livendia no cobra un mes de renta por redactar el LAU.",
        },
        {
          title: "Inventario fotográfico",
          description: "Estado del piso documentado en panel Livendia.",
        },
        {
          title: "LAU, temporada o habitación",
          description: `Modalidades desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} según uso real del inmueble.`,
        },
      ],
      finalCtaTitle: "Firma en Sant Martí con contrato LAU entre particulares",
      faq: [
        {
          question: "¿Tenéis landing solo para Poblenou?",
          answer:
            "Sí. Poblenou / 22@ tiene página propia; esta landing cubre el resto del distrito (Clot, Verneda, Diagonal Mar…).",
        },
        {
          question: "¿Puedo alquilar en Sant Martí sin inmobiliaria?",
          answer:
            "Sí. Livendia redacta el LAU cuando propietario e inquilino ya están de acuerdo — no buscamos inquilino ni cobramos comisión sobre la renta.",
        },
      ],
    }),
    districtDiff("barcelona-sarria-sant-gervasi", {
      metaTitle: "Contrato alquiler Sarrià-Sant Gervasi — 145 € IVA incl.",
      metaDescription:
        "LAU entre particulares en Sarrià-Sant Gervasi: Pedralbes, Sant Gervasi, Tres Torres. 145 € IVA incl. IRAV, INCASÒL e inventario. Livendia.",
      keywords: [
        "contrato alquiler sarria sant gervasi",
        "contrato lau pedralbes particular",
        "contrato alquiler tres torres barcelona",
        "alquiler sant gervasi sin agencia contrato",
        "redactar contrato alquiler sarria",
      ],
      heroBadge: "Entre particulares · Sarrià-Sant Gervasi",
      heroH1: "Contrato de alquiler en Sarrià-Sant Gervasi entre particulares",
      heroBullets: [
        "Pedralbes, Sant Gervasi, Tres Torres, Bonanova",
        "145 € IVA incl. — fincas señoriales e anexos",
        "IRAV en renovación e INCASÒL explicados",
      ],
      whyTitle: "Sarrià-Sant Gervasi: LAU premium sin gestión de agencia",
      whySubtitle:
        "Ticket alto y partes exigentes: hace falta contrato que refleje parking, portería y anexos — no un PDF estándar.",
      localZonesHeading: "Zonas del distrito donde redactamos LAU",
      localZones:
        "Sarrià centre, Sant Gervasi – Galvany, Les Tres Torres, Bonanova, Putxet i Farró y Pedralbes (límite Les Corts).",
      localBenefits: [
        {
          title: "Parking y trastero en contrato",
          description: "Anexos y plazas comunitarias reflejados antes de la fianza.",
        },
        {
          title: "IRAV en renovación",
          description: "Orientación sobre tope legal de subida en Cataluña.",
        },
        {
          title: "INCASÒL",
          description: "Depósito al organismo catalán, no en manos del casero.",
        },
        {
          title: "Servicio online",
          description: "Panel, WhatsApp y gestor humano — sin despacho presencial.",
        },
        {
          title: "Inventario detallado",
          description: "Imprescindible en pisos amueblados de alta gama.",
        },
        {
          title: "Temporada vs. LAU habitual",
          description: `Te orientamos si la estancia encaja en LAU o temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}).`,
        },
      ],
      finalCtaTitle: "Redacta tu LAU en Sarrià-Sant Gervasi — gestoría Livendia",
      faq: [
        {
          question: "¿Es lo mismo que la landing de Sarrià barrio?",
          answer:
            "Sarrià (barrio) es micro-zona; esta página cubre todo el distrito Sarrià-Sant Gervasi, incluido Sant Gervasi y Tres Torres.",
        },
        {
          question: "¿Atendéis propietarios que viven fuera de España?",
          answer: "Sí. Contratación y firma online con gestor en castellano o catalán si lo necesitáis.",
        },
      ],
    }),
    districtDiff("barcelona-nou-barris", {
      metaTitle: "Contrato alquiler Nou Barris entre particulares — 145 €",
      metaDescription:
        "Contrato LAU en Nou Barris: Verdun, Roquetes, Trinitat Vella. 145 € IVA incl. INCASÒL, inventario y gestor Livendia online.",
      keywords: [
        "contrato alquiler nou barris",
        "contrato lau verdun barcelona",
        "contrato alquiler roquetes particular",
        "alquiler trinitat vella contrato",
        "redactar contrato alquiler nou barris",
      ],
      heroBadge: "Entre particulares · Nou Barris",
      heroH1: "Contrato de alquiler en Nou Barris entre particulares — LAU sin agencia",
      heroBullets: [
        "Verdun, Roquetes, Trinitat Vella, la Porta",
        "145 € IVA incl. — bloques densos y comunidad",
        "Renta anterior e INCASÒL revisados",
      ],
      whyTitle: "Nou Barris: particulares con LAU claro en bloques grandes",
      whySubtitle:
        "Alquileres directos frecuentes cuando el precio es más asequible que en el centro. El contrato debe explicar derramas y certificados de comunidad.",
      localZonesHeading: "Barrios de Nou Barris",
      localZones:
        "Verdun, Roquetes, Trinitat Vella, Trinitat Nova, Torre Baró, Ciutat Meridiana, la Porta y Vallbona.",
      localBenefits: [
        {
          title: "Comunidad con muchos propietarios",
          description: "Plazos realistas para certificado de deuda cero.",
        },
        {
          title: "Zona tensionada de Barcelona",
          description: "Tope de renta e información de contrato anterior.",
        },
        {
          title: "Piso entero o habitación",
          description: "LAU habitual o contrato de habitación según convivencia.",
        },
        {
          title: "Sin comisión de agencia",
          description: "Tarifa plana de gestoría contractual.",
        },
        {
          title: "Inventario fotográfico",
          description: "Entrada documentada en panel Livendia.",
        },
        {
          title: "100 % online",
          description: "Gestor por WhatsApp — sin desplazarte a un despacho.",
        },
      ],
      finalCtaTitle: "Alquila en Nou Barris entre particulares con LAU revisado",
      faq: [
        {
          question: "¿El LAU es igual que en el Eixample?",
          answer:
            "La normativa catalana (INCASÒL, zona tensionada) es la misma; adaptamos cláusulas al edificio y barrio de Nou Barris.",
        },
        {
          question: "¿Redactáis contratos encontrados por Idealista?",
          answer: "Sí. Es el caso habitual: partes de acuerdo y necesitan contrato profesional sin mes de gestión.",
        },
      ],
    }),
    districtDiff("barcelona-ciutat-vella", {
      metaTitle: "Contrato alquiler Ciutat Vella — LAU particulares · 145 €",
      metaDescription:
        "Contrato LAU en Ciutat Vella: Gòtic, Raval, Born, Barceloneta. 145 € IVA incl. Inventario, humedades e INCASÒL. Livendia online.",
      keywords: [
        "contrato alquiler ciutat vella",
        "contrato lau barcelona centro particular",
        "contrato alquiler gothic quarter",
        "contrato alquiler raval lau",
        "redactar contrato alquiler born",
      ],
      heroBadge: "Entre particulares · Ciutat Vella",
      heroH1: "Contrato de alquiler en Ciutat Vella entre particulares",
      heroBullets: [
        "Gòtic, El Raval, El Born, La Barceloneta",
        "145 € IVA incl. — fincas históricas e inventario",
        "Convivencia, humedades e INCASÒL",
      ],
      whyTitle: "Ciutat Vella: LAU de distrito con barrios finos enlazados",
      whySubtitle:
        "Además de esta landing de distrito, existen páginas para El Born, Gòtic, Raval y Barceloneta. Livendia unifica criterio jurídico en todo el casco antiguo.",
      localZonesHeading: "Barrios de Ciutat Vella",
      localZones:
        "Barri Gòtic, El Raval, Sant Pere – Santa Caterina i la Ribera (El Born), La Barceloneta y el Call. Enlaces a landings de barrio fino en el hub Barcelona.",
      localBenefits: [
        {
          title: "Fincas centenarias",
          description: "Escaleras, patios y humedades en inventario antes de la fianza.",
        },
        {
          title: "Pisos compartidos",
          description: "Normas de convivencia en LAU o contrato de habitación.",
        },
        {
          title: "Locales en planta baja",
          description: "Uso mixto vivienda–local revisado en cláusulas.",
        },
        {
          title: "Renta anterior",
          description: "Obligatoria en zona tensionada — la verificamos.",
        },
        {
          title: "Gestoría online Livendia",
          description: "Referente en contratos de alquiler en Barcelona.",
        },
        {
          title: "Hub de servicios",
          description: "Administración, arras, temporada y revisión de borradores.",
        },
      ],
      finalCtaTitle: "Firma en Ciutat Vella con LAU entre particulares",
      faq: [
        {
          question: "¿Duplicáis contenido con El Born o el Gòtic?",
          answer:
            "Esta página orienta al distrito completo; las landings de barrio fino profundizan en calles concretas. Canonical propio en cada URL.",
        },
        {
          question: "¿Documentáis humedades preexistentes?",
          answer: "Sí. Inventario fotográfico de patologías conocidas — clave en edificios antiguos.",
        },
      ],
    }),
    districtDiff("barcelona-horta-guinardo", {
      metaTitle: "Contrato alquiler Horta-Guinardó — 145 € IVA incl.",
      metaDescription:
        "LAU en Horta-Guinardó entre particulares: El Carmel, Horta, Guinardó. 145 € IVA incl. INCASÒL, inventario y gestor Livendia.",
      keywords: [
        "contrato alquiler horta guinardo",
        "contrato lau el carmel barcelona",
        "contrato alquiler guinardo particular",
        "alquiler horta centre contrato",
        "redactar contrato alquiler horta guinardo",
      ],
      heroBadge: "Entre particulares · Horta-Guinardó",
      heroH1: "Contrato de alquiler en Horta-Guinardó entre particulares",
      heroBullets: [
        "El Carmel, Horta centre, el Guinardó, La Teixonera",
        "145 € IVA incl. — ladera y fincas sin ascensor",
        "Calefacción comunitaria e INCASÒL",
      ],
      whyTitle: "Horta-Guinardó: LAU adaptado a ladera y comunidad",
      whySubtitle:
        "Alquileres entre vecinos o por Idealista son habituales. Sin contrato, calefacción comunitaria y reformas pendientes generan disputas rápidas.",
      localZonesHeading: "Zonas de Horta-Guinardó",
      localZones:
        "El Carmel, Horta centre, el Guinardó, La Teixonera, Montbau, la Clota y Vall d'Hebron (límite).",
      localBenefits: [
        {
          title: "Edificios en ladera",
          description: "Accesos, ascensor y estado de fachada en inventario.",
        },
        {
          title: "Calefacción y comunidad",
          description: "Reparto de gastos y derramas explicados por escrito.",
        },
        {
          title: "Zona tensionada",
          description: "Renta anterior e INCASÒL antes de ingresar la fianza.",
        },
        {
          title: "Sin agencia de alquiler",
          description: "Gestoría a precio cerrado — no comisión sobre renta.",
        },
        {
          title: "Panel Livendia",
          description: "Expediente online para propietario e inquilino.",
        },
        {
          title: "Temporada laboral",
          description: `Orientación LAU vs. temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) si la estancia es acotada.`,
        },
      ],
      finalCtaTitle: "Redacta tu LAU en Horta-Guinardó — gestoría Livendia",
      faq: [
        {
          question: "¿Atendéis pisos sin ascensor en El Carmel?",
          answer: "Sí. Inventario y cláusulas de acceso adaptadas — frecuente en fincas en ladera.",
        },
        {
          question: "¿Cuánto tarda la entrega?",
          answer: "Orientativamente 48–72 h laborables tras recibir documentación completa en panel.",
        },
      ],
    }),
    districtDiff("barcelona-sant-andreu", {
      metaTitle: "Contrato alquiler Sant Andreu entre particulares — 145 €",
      metaDescription:
        "Contrato LAU en Sant Andreu: Palomar, La Sagrera, Bon Pastor. 145 € IVA incl. INCASÒL, inventario y gestor online Livendia.",
      keywords: [
        "contrato alquiler sant andreu barcelona",
        "contrato lau la sagrera",
        "contrato alquiler bon pastor",
        "alquiler sant andreu palomar contrato",
        "redactar contrato alquiler sant andreu",
      ],
      heroBadge: "Entre particulares · Sant Andreu",
      heroH1: "Contrato de alquiler en Sant Andreu entre particulares — LAU sin agencia",
      heroBullets: [
        "Palomar, La Sagrera, Bon Pastor, Navas",
        "145 € IVA incl. — pisos familiares e INCASÒL",
        "Obra y convivencia reflejadas en contrato",
      ],
      whyTitle: "Sant Andreu: alquiler directo con LAU del distrito",
      whySubtitle:
        "La Sagrera y el Palomar concentran alquileres entre particulares cuando el inquilino ya viene de portal. Hace falta contrato que anticipe obra, ruido y comunidad.",
      localZonesHeading: "Barrios de Sant Andreu",
      localZones:
        "Sant Andreu de Palomar, La Sagrera, Bon Pastor, Navas, Trinitat Vella (límite) y el barrio de la Sagrera – Sant Andreu.",
      localBenefits: [
        {
          title: "La Sagrera y obra",
          description: "Cláusulas sobre ruido o accesos cuando afectan al inmueble.",
        },
        {
          title: "Pisos familiares",
          description: "Equilibrio entre privacidad del inquilino y normas de la casa.",
        },
        {
          title: "INCASÒL y renta anterior",
          description: "Revisión en zona tensionada catalana.",
        },
        {
          title: "Idealista sin agencia",
          description: "Redacción LAU cuando ya hay acuerdo de precio y fecha.",
        },
        {
          title: "Inventario incluido",
          description: "Fotos y estado del piso en expediente Livendia.",
        },
        {
          title: "Gestor dedicado",
          description: "WhatsApp y panel — sin permanencia ni comisión.",
        },
      ],
      finalCtaTitle: "Firma en Sant Andreu con contrato LAU entre particulares",
      faq: [
        {
          question: "¿Gestionáis alquiler de habitación en piso familiar?",
          answer:
            "Sí. LAU de piso entero o contrato de habitación con normas de convivencia — según el caso.",
        },
        {
          question: "¿Livendia administra el alquiler después?",
          answer:
            "Opcional: administración LAU desde 65 €/mes IVA incl. — contrato y gestión en la misma plataforma.",
        },
      ],
    }),
  ]);
