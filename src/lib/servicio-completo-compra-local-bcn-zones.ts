import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";
import type { CompraLocalSeoContent } from "@/lib/servicio-completo-compra-local-seo-content";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";

/** Distritos / zonas Barcelona — servicio completo de compra local. */
export const SERVICIO_COMPLETO_COMPRA_LOCAL_BCN_ZONE_PUBLISHED_SLUGS = [
  "barcelona-eixample",
  "barcelona-gracia",
  "barcelona-poblenou",
  "barcelona-les-corts",
  "barcelona-sarria-sant-gervasi",
  "barcelona-sants-montjuic",
  "barcelona-ciutat-vella",
  "barcelona-horta-guinardo",
  "barcelona-nou-barris",
  "barcelona-sant-andreu",
  "barcelona-sant-marti",
] as const;

export const SERVICIO_COMPLETO_COMPRA_LOCAL_BCN_ZONE_CITIES = [
  {
    slug: "barcelona-eixample",
    city: "Eixample (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras piso entre particulares en l'Eixample o ya tienes reserva y no quieres firmar a ciegas? Un gestor inmobiliario experto revisa reserva y arras bajo CCCat en Dreta, Esquerra, Sagrada Família o Fort Pienc — penalizaciones desequilibradas, ITE y comunidad antes de ingresar señal.",
    whyIntro:
      "En l'Eixample el ticket medio es alto y los borradores suelen venir de agencias del vendedor: plazos de hipoteca imposibles, honorarios encadenados y cláusulas que protegen solo al vendedor. Livendia es gestoría del comprador con tarifa plana — no pagas comisión sobre el precio del piso.",
    howIntro:
      "Cuatro hitos hasta la firma en notaría barcelonesa: revisión documental, defensa frente a cláusulas abusivas, gestor personal con panel Livendia y coordinación con vendedor y notaría.",
    testimonialsTitle: "Compradores en l'Eixample que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Dreta de l'Eixample a un particular. Livendia revisó la reserva, incluyó 621-49 CCCat y renegoció una penalización desproporcionada antes de la señal.",
        author: "Marc & Laia",
        role: "Compradores, Dreta de l'Eixample",
      },
      {
        quote:
          "El gestor detectó una derrama aprobada en actas que no nos habían comentado en la visita. Decidimos con datos, no con prisa.",
        author: "Núria P.",
        role: "Compradora, Esquerra de l'Eixample",
      },
    ],
    finalCtaLead: `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incluido) y compra en l'Eixample con un asesor experto hasta la escritura.`,
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras piso entre particulares en Gràcia o ya tienes reserva? Un gestor experto revisa reserva y arras bajo CCCat en Vila de Gràcia, Camp d'en Grassot o Vallcarca — planta baja mal delimitada, protección patrimonial e ITE antes de transferir señal.",
    whyIntro:
      "En Gràcia muchas operaciones se cierran entre vecinos o por Idealista sin agencia compradora. Locales en planta baja, usos mixtos y fincas con restricciones urbanísticas generan conflictos si el contrato es una plantilla genérica. Livendia adapta reserva y arras a tu caso concreto.",
    howIntro:
      "Mismo protocolo Livendia en cuatro fases: documentación, contratos CCCat, gestor asignado y calendario hasta escritura en notaría de Barcelona.",
    testimonialsTitle: "Compradores en Gràcia que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Vila de Gràcia. Livendia aclaró qué incluía la planta baja en el contrato y revisó actas de comunidad con obras de fachada pendientes.",
        author: "Jordi & Marta",
        role: "Compradores, Vila de Gràcia",
      },
      {
        quote:
          "Primera compra entre particulares en Camp d'en Grassot: el gestor explicó arras penitenciarias CCCat en castellano claro.",
        author: "Sílvia R.",
        role: "Compradora, Gràcia",
      },
    ],
    finalCtaLead: `Contrata el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y cierra en Gràcia con documentación profesional hasta notaría.`,
  },
  {
    slug: "barcelona-poblenou",
    city: "Poblenou (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Poblenou o 22@ entre particulares? Un gestor revisa reserva y arras bajo CCCat en lofts reconvertidos, promociones recientes y fincas post-olímpicas — servidumbres, terrazas y anexos mal descritos en el anuncio.",
    whyIntro:
      "Poblenou mezcla reconversiones industriales, familias en la Rambla del Poblenou y compradores tech con prisa. Lo verbal sobre calidades, parking o terraza suele no aparecer en arras copiadas. Livendia alinea contrato y documentación registral antes de la señal.",
    howIntro:
      "Cuatro hitos hasta escritura: due diligence en edificios del 22@ y eixample del Poblenou, cláusula 621-49 si pides hipoteca, panel con expediente digital.",
    testimonialsTitle: "Compradores en Poblenou que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos un loft en 22@ a un particular. Livendia revisó servidumbre en nota simple y cláusulas de instalaciones que el borrador del vendedor omitía.",
        author: "Laura & Pau",
        role: "Compradores, 22@",
      },
      {
        quote:
          "Piso en Rambla del Poblenou: coordinamos plazos de hipoteca y certificado de deuda de comunidad en un bloque grande.",
        author: "Arnau M.",
        role: "Comprador, Poblenou",
      },
    ],
    finalCtaLead: `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Poblenou con gestor hasta la escritura.`,
  },
  {
    slug: "barcelona-les-corts",
    city: "Les Corts (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Les Corts entre particulares? Un gestor experto revisa reserva y arras en Pedralbes, Zona Universitària o Les Corts centre — parking anexo, trastero mal descrito y fincas de alta cota con cargas registrales no comentadas en la visita.",
    whyIntro:
      "En Les Corts operaciones de importe elevado conviven con compradores jóvenes de la zona universitaria. Una cláusula mal redactada en un piso de 480.000 € puede costar más que toda la gestoría Livendia. Defendemos tus intereses con tarifa plana.",
    howIntro:
      "Protocolo completo: revisión de anexos en escritura, ITE, comunidad y coordinación con notaría barcelonesa.",
    testimonialsTitle: "Compradores en Les Corts que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Pedralbes con parking incluido. Livendia verificó que el anexo figuraba en contrato y en nota simple antes de las arras.",
        author: "Clara & Marc",
        role: "Compradores, Pedralbes",
      },
      {
        quote:
          "Piso en Zona Universitària: el gestor incluyó 621-49 CCCat y plazos realistas de financiación que el vendedor aceptó.",
        author: "Pol V.",
        role: "Comprador, Les Corts",
      },
    ],
    finalCtaLead: `Contrata el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Les Corts con asesor experto hasta escritura.`,
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Sarrià-Sant Gervasi entre particulares? Un gestor revisa reserva y arras en Sarrià, Sant Gervasi, Bonanova o Tres Torres — operaciones premium con anexos, portería, derramas exigentes e hipoteca en plazos cortos.",
    whyIntro:
      "En el distrito de mayor ticket de Barcelona, los borradores suelen favorecer al vendedor y asumir que el comprador absorbe cualquier imprevisto de comunidad. Livendia hace due diligence registral y contractual antes de que ingreses señal.",
    howIntro:
      "Cuatro fases con gestor de referencia: documentación, contratos CCCat equilibrados, panel Livendia y acompañamiento hasta firma en notaría.",
    testimonialsTitle: "Compradores en Sarrià-Sant Gervasi que ya compraron con Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Reina Elisenda. Livendia revisó derramas de ascensor en actas y coherencia entre precio, señal y calendario de escritura.",
        author: "Anna & Sergi",
        role: "Compradores, Sarrià",
      },
      {
        quote:
          "Operación en Bonanova con trastero anexo: el gestor dejó por escrito cada anexo antes de arras confirmatorias.",
        author: "Imma L.",
        role: "Compradora, Sant Gervasi",
      },
    ],
    finalCtaLead: `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Sarrià-Sant Gervasi con gestor hasta notaría.`,
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Sants-Montjuïc entre particulares? Un gestor revisa reserva y arras en Sants, Hostafrancs, Poble-sec o la Marina del Prat Vermell — mezcla de obra nueva e finca antigua, ITE y plazos de entrega confusos.",
    whyIntro:
      "En Sants-Montjuïc conviven promociones recientes y edificios con historial de rehabilitación. Firmar arras sin revisar ITE, licencias o derramas energéticas puede retrasar meses la operación o encarecerla miles de euros.",
    howIntro:
      "Cuatro hitos hasta escritura: revisión documental adaptada al tipo de edificio, defensa frente a cláusulas desequilibradas, gestor personal y coordinación con vendedor.",
    testimonialsTitle: "Compradores en Sants-Montjuïc que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Poble-sec a un particular. Livendia revisó ITE del edificio y plazos de hipoteca con cláusula 621-49 CCCat.",
        author: "Rosa & Joel",
        role: "Compradores, Poble-sec",
      },
      {
        quote:
          "Obra nueva en la Marina del Prat Vermell: el gestor alineó arras con calidades y fecha de entrega pactada en visita.",
        author: "Miquel T.",
        role: "Comprador, Sants",
      },
    ],
    finalCtaLead: `Contrata el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Sants-Montjuïc con gestor experto hasta escritura.`,
  },
  {
    slug: "barcelona-ciutat-vella",
    city: "Ciutat Vella (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Ciutat Vella entre particulares? Un gestor revisa reserva y arras bajo CCCat en el Gòtic, El Raval, Born o la Barceloneta — fincas centenarias, protección patrimonial, ITE exigente y locales en planta baja mal delimitados en contrato.",
    whyIntro:
      "En el casco antiguo, una plantilla genérica no cubre servidumbres, usos turísticos encubiertos ni obras en finca protegida. Livendia alinea objeto del contrato, cèdula e inspección técnica antes de que ingreses señal.",
    howIntro:
      "Cuatro hitos hasta escritura en notaría barcelonesa: due diligence en edificios históricos, arras CCCat equilibradas, gestor con panel Livendia y calendario con vendedor e hipoteca.",
    testimonialsTitle: "Compradores en Ciutat Vella que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en El Born. Livendia revisó actas con obras de fachada y dejó por escrito qué incluía la planta baja antes de arras confirmatorias.",
        author: "Marta & Oriol",
        role: "Compradores, Born",
      },
      {
        quote:
          "Piso en El Raval: el gestor detectó discrepancias entre cèdula y distribución real y renegoció plazos de hipoteca con cláusula 621-49 CCCat.",
        author: "Lucía G.",
        role: "Compradora, El Raval",
      },
    ],
    finalCtaLead: `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Ciutat Vella con gestor hasta la escritura.`,
  },
  {
    slug: "barcelona-horta-guinardo",
    city: "Horta-Guinardó (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Horta-Guinardó entre particulares? Un gestor experto revisa reserva y arras en El Carmel, La Teixonera, Horta centre o el Guinardó — fincas en ladera, ITE pendiente y comunidades con obras estructurales no comentadas en la visita.",
    whyIntro:
      "En el distrito norte, muchas operaciones se cierran rápido entre vecinos con arras copiadas. Sin revisión registral y de comunidad, derramas en bloques de los años 60-70 pueden sorprender después de la señal.",
    howIntro:
      "Protocolo Livendia en cuatro fases: documentación, contratos CCCat, gestor asignado y coordinación hasta notaría — Vall d'Hebron, Montbau o barrios del Carmel con el mismo estándar.",
    testimonialsTitle: "Compradores en Horta-Guinardó que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en El Carmel. Livendia revisó ITE del edificio en ladera y una derrama de ascensor en actas que no figuraba en el anuncio.",
        author: "Jordi & Núria",
        role: "Compradores, El Carmel",
      },
      {
        quote:
          "Primera vivienda en Horta centre: el gestor explicó arras penitenciarias CCCat y plazos realistas antes de transferir la señal.",
        author: "Alejandro R.",
        role: "Comprador, Horta",
      },
    ],
    finalCtaLead: `Contrata el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Horta-Guinardó con asesor experto hasta escritura.`,
  },
  {
    slug: "barcelona-nou-barris",
    city: "Nou Barris (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Nou Barris entre particulares? Un gestor revisa reserva y arras en Verdun, Roquetes, Trinitat Vella o la Porta — bloques de gran escala, deuda de comunidad y plazos de hipoteca apretados en borradores del vendedor.",
    whyIntro:
      "En Nou Barris el precio por m² atrae compradores con prisa, pero las plantillas suelen proteger solo al vendedor. Livendia verifica certificado de deuda cero, actas y coherencia entre anuncio y contrato antes de la señal.",
    howIntro:
      "Cuatro hitos hasta escritura: revisión documental en comunidades multi-bloque, defensa frente a cláusulas desequilibradas, panel Livendia y coordinación con notaría.",
    testimonialsTitle: "Compradores en Nou Barris que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Roquetes a un particular. Livendia persiguió certificado de comunidad y incluyó 621-49 CCCat con plazos que el banco aceptó.",
        author: "Rosa & Joel",
        role: "Compradores, Roquetes",
      },
      {
        quote:
          "Piso en Verdun: el gestor marcó una penalización desproporcionada en reserva y la renegociamos antes de ingresar señal.",
        author: "Miquel T.",
        role: "Comprador, Nou Barris",
      },
    ],
    finalCtaLead: `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Nou Barris con gestor hasta notaría.`,
  },
  {
    slug: "barcelona-sant-andreu",
    city: "Sant Andreu (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Sant Andreu entre particulares? Un gestor revisa reserva y arras en Sant Andreu de Palomar, La Sagrera, Bon Pastor o Trinitat Vella — mezcla de finca industrial reconvertida, obra reciente y bloques familiares con arras estándar poco equilibradas.",
    whyIntro:
      "Sant Andreu crece con la Sagrera y atrae compradores de toda Barcelona. Sin gestoría del comprador, lo pactado en visita sobre parking, trastero o calidades suele no reflejarse en arras copiadas de otra operación.",
    howIntro:
      "Mismo recorrido Livendia en cuatro fases: documentación, contratos CCCat, gestor personal y calendario hasta escritura en notaría barcelonesa.",
    testimonialsTitle: "Compradores en Sant Andreu que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en La Sagrera. Livendia alineó arras con fecha de entrega y anexos que habíamos acordado con el vendedor particular.",
        author: "Anna & Sergi",
        role: "Compradores, La Sagrera",
      },
      {
        quote:
          "En Sant Andreu de Palomar, el gestor revisó nota simple y actas de comunidad en un edificio de dos escaleras antes de confirmar arras.",
        author: "Imma L.",
        role: "Compradora, Sant Andreu",
      },
    ],
    finalCtaLead: `Contrata el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Sant Andreu con gestor experto hasta escritura.`,
  },
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí (Barcelona)",
    schemaAdministrativeArea: "Barcelona · Cataluña",
    heroLead:
      "¿Compras en Sant Martí entre particulares? Un gestor revisa reserva y arras en El Clot, La Verneda, Diagonal Mar o el 22@ — además de Poblenou: promociones recientes, comunidades multi-bloque y anexos mal descritos en el anuncio.",
    whyIntro:
      "Sant Martí concentra reconversiones, familias en La Verneda y compradores exigentes en Diagonal Mar. Livendia complementa la landing de Poblenou con foco en todo el distrito: mismo protocolo CCCat y tarifa plana de gestoría del comprador.",
    howIntro:
      "Cuatro hitos hasta escritura: due diligence según tipo de edificio, cláusula 621-49 si pides hipoteca, expediente digital y coordinación con vendedor y notaría.",
    testimonialsTitle: "Compradores en Sant Martí que ya compraron con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en El Clot. Livendia coordinó certificados de una comunidad grande y plazos de hipoteca que el borrador del vendedor acortaba demasiado.",
        author: "Laura & Pau",
        role: "Compradores, El Clot",
      },
      {
        quote:
          "Obra nueva en Diagonal Mar: el gestor revisó anexos de calidades y parking antes de arras confirmatorias.",
        author: "Arnau M.",
        role: "Comprador, Sant Martí",
      },
    ],
    finalCtaLead: `Contrata online el servicio completo de compra (${SERVICIO_COMPLETO_CV_PRICE_LABEL}, IVA incl.) y compra en Sant Martí con gestor hasta la escritura.`,
  },
];

function zoneDiff(options: {
  slug: string;
  zoneShort: string;
  heroH1: string;
  metaTitle: string;
  metaDescription: string;
  whySubtitle: string;
  localZones: string;
  keywords: string[];
  heroImage?: string;
}): LocalCityLandingFields {
  const { zoneShort, heroH1, metaTitle, metaDescription, whySubtitle, localZones, keywords, heroImage } =
    options;
  return {
    keywords,
    heroBadge: `Servicio completo de compra · ${zoneShort} · CCCat`,
    heroH1,
    metaTitle,
    metaDescription,
    heroBullets: [
      "Compra entre particulares o con agencia solo del vendedor",
      "Revisión ITE, cèdula, comunidad y nota simple",
      "Panel Livendia con expediente hasta notaría",
    ],
    whyTitle: `${zoneShort}: compra con prisa, contratos que hay que leer`,
    whySubtitle,
    localZonesHeading: `Barrios de ${zoneShort} donde acompañamos compradores`,
    localZones,
    heroImage: heroImage ?? getLocalCityCardImage(options.slug),
    localBenefits: [
      {
        title: "Arras conforme al CCCat",
        description: "Penitenciarias, confirmatorias y cláusula 621-49 explicadas antes de ingresar señal.",
      },
      {
        title: "Gestor con nombre en tu expediente",
        description: "Profesional colegiado — no formulario anónimo: actividad registrada en el panel.",
      },
      {
        title: "Due diligence del inmueble",
        description: "Cargas registrales, comunidad e inspección técnica según el edificio concreto.",
      },
      {
        title: "Sin comisión de agencia compradora",
        description: `Tarifa plana ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — inviertes en gestoría, no en % sobre el precio.`,
      },
      {
        title: "Coordinación hasta notaría",
        description: "Calendario con vendedor, hipoteca y checklist pre-escritura.",
      },
      {
        title: "Tutorial y documentos en panel",
        description: "Sube PDF o fotos; ves progreso e historial de actividad del gestor.",
      },
    ],
    finalCtaTitle: `Cierra la compra en ${zoneShort} con documentación profesional`,
  };
}

export const COMPRA_LOCAL_BCN_ZONE_DIFFERENTIATION: Record<string, LocalCityLandingFields> = {
  "barcelona-eixample": zoneDiff({
    slug: "barcelona-eixample",
    zoneShort: "l'Eixample",
    heroH1: "Servicio completo de compra en l'Eixample — arras desequilibradas no se negocian solas",
    metaTitle: "Servicio completo de compra en l'Eixample Barcelona | Gestor comprador Livendia",
    metaDescription: `¿Compras en l'Eixample entre particulares? Revisión de reserva, arras CCCat e ITE. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Gestor comprador Livendia.`,
    whySubtitle:
      "Dreta, Esquerra y Sagrada Família concentran operaciones de alto importe con borradores copiados de agencias. Livendia equilibra el contrato en tu bando antes de la señal.",
    localZones:
      "Dreta de l'Eixample, Esquerra de l'Eixample, Sagrada Família, Fort Pienc, Sant Antoni (límite) — gestoría online con protocolo CCCat.",
    keywords: [
      "servicio completo compra eixample barcelona",
      "comprar piso entre particulares eixample",
      "gestor compra vivienda eixample",
      "revisar arras eixample cccat",
    ],
  }),
  "barcelona-gracia": zoneDiff({
    slug: "barcelona-gracia",
    zoneShort: "Gràcia",
    heroH1: "Comprar en Gràcia con gestor Livendia — planta baja, finca protegida y CCCat",
    metaTitle: "Servicio completo de compra en Gràcia Barcelona | Gestor comprador Livendia",
    metaDescription: `¿Compras en Gràcia entre particulares? Reserva, arras CCCat, ITE y comunidad. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Vila de Gràcia y Camp d'en Grassot: compras entre vecinos con contratos que no delimitan bien locales ni usos. Revisamos objeto del contrato y cargas.",
    localZones:
      "Vila de Gràcia, Camp d'en Grassot, Vallcarca, Penitents, Salut — mismo gestor de referencia y panel Livendia.",
    keywords: [
      "servicio completo compra gracia barcelona",
      "comprar piso entre particulares gracia",
      "gestor compra vivienda gracia",
      "revisar arras gracia",
    ],
  }),
  "barcelona-poblenou": zoneDiff({
    slug: "barcelona-poblenou",
    zoneShort: "Poblenou",
    heroH1: "Comprar en Poblenou y 22@ — lofts, servidumbres y expediente digital hasta escritura",
    metaTitle: "Servicio completo de compra en Poblenou Barcelona | Gestor Livendia",
    metaDescription: `¿Compras en Poblenou o 22@? Gestor comprador: arras, ITE, anexos. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Reconversiones, lofts y promociones recientes exigen contratos que reflejen terrazas, instalaciones y plazos reales — no plantillas de otra operación.",
    localZones:
      "22@, Rambla del Poblenou, Parc del Centre del Poblenou, Diagonal Mar (límite) — due diligence adaptada al tipo de inmueble.",
    keywords: [
      "servicio completo compra poblenou",
      "comprar piso 22 barcelona gestoria",
      "comprar loft poblenou particular",
      "revisar arras poblenou",
    ],
  }),
  "barcelona-les-corts": zoneDiff({
    slug: "barcelona-les-corts",
    zoneShort: "Les Corts",
    heroH1: "Servicio completo de compra en Les Corts — parking anexo y fincas de alta cota revisadas",
    metaTitle: "Servicio completo de compra en Les Corts Barcelona | Gestor comprador Livendia",
    metaDescription: `¿Compras en Les Corts o Pedralbes? Reserva, arras CCCat, parking y trastero. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Pedralbes y Zona Universitària: verificamos coherencia entre anuncio, contrato y nota simple antes de transferir señal.",
    localZones:
      "Pedralbes, Zona Universitària, Les Corts centre, Maternitat-Sant Ramon — gestoría del comprador con tarifa plana.",
    keywords: [
      "servicio completo compra les corts",
      "comprar piso pedralbes gestoria",
      "gestor compra vivienda les corts",
      "revisar arras les corts",
    ],
  }),
  "barcelona-sarria-sant-gervasi": zoneDiff({
    slug: "barcelona-sarria-sant-gervasi",
    zoneShort: "Sarrià-Sant Gervasi",
    heroH1: "Comprar en Sarrià-Sant Gervasi — due diligence en operaciones premium",
    metaTitle: "Servicio completo de compra Sarrià-Sant Gervasi | Gestor comprador Livendia",
    metaDescription: `¿Compras en Sarrià o Sant Gervasi? Gestor experto: arras, derramas, anexos. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Fincas señoriales, portería y derramas de ascensor: el margen de error en una cláusula supera con creces la gestoría Livendia.",
    localZones:
      "Sarrià centre, Sant Gervasi, Bonanova, Tres Torres, Vallvidrera (límite) — protocolo CCCat y panel con expediente.",
    keywords: [
      "servicio completo compra sarria sant gervasi",
      "comprar piso sarria particular gestor",
      "revisar arras sarria barcelona",
      "gestor compra pedralbes sarria",
    ],
  }),
  "barcelona-sants-montjuic": zoneDiff({
    slug: "barcelona-sants-montjuic",
    zoneShort: "Sants-Montjuïc",
    heroH1: "Comprar en Sants-Montjuïc — obra nueva e ITE en finca antigua, sin firmar a ciegas",
    metaTitle: "Servicio completo de compra Sants-Montjuïc Barcelona | Gestor Livendia",
    metaDescription: `¿Compras en Sants, Poble-sec o Hostafrancs? Arras CCCat, ITE y obra nueva. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Sants y Poble-sec mezclan edificios rehabilitados y promociones nuevas: alineamos contrato con el estado real del inmueble.",
    localZones:
      "Sants, Hostafrancs, Poble-sec, la Bordeta, Marina del Prat Vermell — gestor asignado hasta notaría.",
    keywords: [
      "servicio completo compra sants montjuic",
      "comprar piso poble sec gestoria",
      "revisar arras sants barcelona",
      "gestor compra hostafrancs",
    ],
  }),
  "barcelona-ciutat-vella": zoneDiff({
    slug: "barcelona-ciutat-vella",
    zoneShort: "Ciutat Vella",
    heroH1: "Comprar en Ciutat Vella — finca histórica, ITE y arras CCCat revisadas antes de la señal",
    metaTitle: "Servicio completo de compra en Ciutat Vella Barcelona | Gestor Livendia",
    metaDescription: `¿Compras en Gòtic, Raval, Born o Barceloneta? Gestor comprador: arras, ITE, cèdula. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Casco antiguo: protección patrimonial, locales en planta baja y contratos que no reflejan el estado real del inmueble. Revisamos antes de vincular arras.",
    localZones:
      "Gòtic, El Raval, El Born, La Barceloneta, Sant Pere — due diligence en fincas centenarias y panel Livendia hasta notaría.",
    keywords: [
      "servicio completo compra ciutat vella",
      "comprar piso entre particulares gothic quarter",
      "gestor compra vivienda born barcelona",
      "revisar arras raval barcelona",
    ],
  }),
  "barcelona-horta-guinardo": zoneDiff({
    slug: "barcelona-horta-guinardo",
    zoneShort: "Horta-Guinardó",
    heroH1: "Servicio completo de compra en Horta-Guinardó — ITE en ladera y comunidad antes de firmar",
    metaTitle: "Servicio completo de compra Horta-Guinardó Barcelona | Gestor comprador Livendia",
    metaDescription: `¿Compras en El Carmel o Guinardó entre particulares? Arras CCCat, ITE y derramas. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "El Carmel y La Teixonera: edificios en pendiente con inspecciones exigentes. Livendia cruza actas, ITE y contrato antes de la señal.",
    localZones:
      "El Carmel, La Teixonera, Horta centre, El Guinardó, Montbau, Vall d'Hebron — gestoría del comprador con tarifa plana.",
    keywords: [
      "servicio completo compra horta guinardo",
      "comprar piso el carmel gestoria",
      "gestor compra vivienda guinardo",
      "revisar arras horta barcelona",
    ],
  }),
  "barcelona-nou-barris": zoneDiff({
    slug: "barcelona-nou-barris",
    zoneShort: "Nou Barris",
    heroH1: "Comprar en Nou Barris entre particulares — deuda de comunidad y arras equilibradas",
    metaTitle: "Servicio completo de compra Nou Barris Barcelona | Gestor Livendia",
    metaDescription: `¿Compras en Verdun, Roquetes o Trinitat Vella? Gestor comprador: arras CCCat y certificados. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Bloques de los años 60-70 con derramas recurrentes: verificamos certificado de deuda y cláusulas antes de ingresar señal.",
    localZones:
      "Verdun, Roquetes, Trinitat Vella, la Porta, Torre Baró — mismo gestor de referencia y protocolo CCCat.",
    keywords: [
      "servicio completo compra nou barris",
      "comprar piso entre particulares verdun",
      "gestor compra vivienda nou barris",
      "revisar arras trinitat vella",
    ],
  }),
  "barcelona-sant-andreu": zoneDiff({
    slug: "barcelona-sant-andreu",
    zoneShort: "Sant Andreu",
    heroH1: "Comprar en Sant Andreu — La Sagrera, Palomar y arras CCCat con gestor Livendia",
    metaTitle: "Servicio completo de compra Sant Andreu Barcelona | Gestor comprador Livendia",
    metaDescription: `¿Compras en Sant Andreu entre particulares? Reserva, arras, anexos e hipoteca. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    whySubtitle:
      "Palomar, Bon Pastor y La Sagrera: operaciones rápidas donde lo verbal sobre anexos debe quedar en contrato antes de la señal.",
    localZones:
      "Sant Andreu de Palomar, La Sagrera, Bon Pastor, Trinitat Vella (límite) — panel Livendia hasta notaría.",
    keywords: [
      "servicio completo compra sant andreu barcelona",
      "comprar piso la sagrera gestoria",
      "gestor compra vivienda sant andreu",
      "revisar arras bon pastor",
    ],
  }),
  "barcelona-sant-marti": zoneDiff({
    slug: "barcelona-sant-marti",
    zoneShort: "Sant Martí",
    heroH1: "Servicio completo de compra en Sant Martí — El Clot, Verneda y Diagonal Mar sin firmar a ciegas",
    metaTitle: "Servicio completo de compra Sant Martí Barcelona | Gestor comprador Livendia",
    metaDescription: `¿Compras en Sant Martí (El Clot, Verneda, Diagonal Mar)? Arras CCCat e ITE. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. También Poblenou.`,
    whySubtitle:
      "Distrito completo más allá del 22@: comunidades multi-bloque, promociones nuevas y arras copiadas que no describen parking ni trastero.",
    localZones:
      "El Clot, La Verneda, Diagonal Mar, Provençals, Besòs i Maresme — complementa la landing de Poblenou con foco en todo Sant Martí.",
    keywords: [
      "servicio completo compra sant marti barcelona",
      "comprar piso el clot gestoria",
      "gestor compra vivienda diagonal mar",
      "revisar arras la verneda",
    ],
  }),
};

function faqZone(zoneLabel: string): CompraLocalSeoContent {
  return {
    faqTitle: `Preguntas frecuentes — servicio completo de compra en ${zoneLabel}`,
    faqSubtitle: `Compra entre particulares en ${zoneLabel} (Barcelona) con gestor dedicado y CCCat.`,
    faq: [
      {
        question: `¿Incluye el servicio completo operaciones en ${zoneLabel}?`,
        answer: `Sí. Mismo servicio de 890 € IVA incl.: revisión de reserva y arras, documentación de comunidad, nota simple, gestor con panel Livendia y coordinación hasta escritura en Barcelona.`,
      },
      {
        question: "¿Revisáis contratos bajo el Codi civil de Catalunya?",
        answer:
          "Sí. Arras (621-4 a 621-9) y cláusula 621-49 para hipoteca se adaptan a tu operación. Te explicamos obligaciones en castellano claro.",
      },
      {
        question: "¿Livendia busca pisos en Idealista?",
        answer:
          "No. Somos gestoría del comprador cuando ya has encontrado vivienda entre particulares o con agencia solo del vendedor.",
      },
      {
        question: `¿Puedo contratar si compro en ${zoneLabel} pero vivo fuera de Barcelona?`,
        answer:
          "Sí. Expediente 100 % online: subes documentos al panel y tu gestor coordina hitos hasta la notaría que corresponda.",
      },
      {
        question: "¿Cuándo debo contratar Livendia?",
        answer:
          "Antes de firmar reserva o ingresar señal — especialmente si el vendedor presiona para cerrar en 48 horas.",
      },
    ],
  };
}

export const COMPRA_LOCAL_BCN_ZONE_SEO: Record<string, CompraLocalSeoContent> = {
  "barcelona-eixample": faqZone("l'Eixample"),
  "barcelona-gracia": faqZone("Gràcia"),
  "barcelona-poblenou": faqZone("Poblenou"),
  "barcelona-les-corts": faqZone("Les Corts"),
  "barcelona-sarria-sant-gervasi": faqZone("Sarrià-Sant Gervasi"),
  "barcelona-sants-montjuic": faqZone("Sants-Montjuïc"),
  "barcelona-ciutat-vella": faqZone("Ciutat Vella"),
  "barcelona-horta-guinardo": faqZone("Horta-Guinardó"),
  "barcelona-nou-barris": faqZone("Nou Barris"),
  "barcelona-sant-andreu": faqZone("Sant Andreu"),
  "barcelona-sant-marti": faqZone("Sant Martí"),
};

/** Hub índice compra local — enlaces a distritos Barcelona. */
export const COMPRA_LOCAL_BARCELONA_DISTRICTS = [
  { slug: "barcelona-eixample", shortName: "Eixample", name: "Eixample (Barcelona)" },
  { slug: "barcelona-gracia", shortName: "Gràcia", name: "Gràcia (Barcelona)" },
  { slug: "barcelona-poblenou", shortName: "Poblenou", name: "Poblenou / 22@" },
  { slug: "barcelona-les-corts", shortName: "Les Corts", name: "Les Corts (Barcelona)" },
  {
    slug: "barcelona-sarria-sant-gervasi",
    shortName: "Sarrià-Sant Gervasi",
    name: "Sarrià-Sant Gervasi",
  },
  { slug: "barcelona-sants-montjuic", shortName: "Sants-Montjuïc", name: "Sants-Montjuïc" },
  { slug: "barcelona-ciutat-vella", shortName: "Ciutat Vella", name: "Ciutat Vella (Barcelona)" },
  { slug: "barcelona-horta-guinardo", shortName: "Horta-Guinardó", name: "Horta-Guinardó" },
  { slug: "barcelona-nou-barris", shortName: "Nou Barris", name: "Nou Barris" },
  { slug: "barcelona-sant-andreu", shortName: "Sant Andreu", name: "Sant Andreu (distrito)" },
  { slug: "barcelona-sant-marti", shortName: "Sant Martí", name: "Sant Martí (distrito)" },
] as const;
