import type { ComprarPisoSinAgenciaCopyOverrides } from "@/lib/comprar-piso-sin-agencia-local-cities";

type ComprarMetroDiff = {
  metaTitle?: string;
  metaDescription?: string;
  tramitesAreaNote?: string;
  benefitsAreaNote?: string;
  copy?: ComprarPisoSinAgenciaCopyOverrides;
  barcelonaZoneIntro?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
};

/** Copy único por zona AMB — perspectiva comprador (no duplica landings de venta). */
export const COMPRAR_PISO_BCN_METRO_DIFFERENTIATION: Record<string, ComprarMetroDiff> = {
  "barcelona-les-corts": {
    metaTitle: "Comprar piso sin agencia en Les Corts — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Les Corts entre particulares sin agencia? Parking anexo mal descrito en el anuncio y arras sin revisar cargas en fincas de alta cota. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Les Corts (Pedralbes, Zona Universitària…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Les Corts: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Les Corts",
      heroH1: "¿Compras piso en Les Corts sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Pedralbes, Zona Universitària o Les Corts centre? Parking anexo mal descrito en el anuncio y arras sin revisar cargas en fincas de alta cota. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Les Corts",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Les Corts, un 3 % orientativo sobre 480.000 € son 17.424 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Les Corts con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Les Corts — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Les Corts y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Les Corts con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Les Corts — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Les Corts · comprador particular",
      title: "Comprar en Les Corts sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Les Corts (Pedralbes, Zona Universitària o Les Corts centre) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Parking anexo mal descrito en el anuncio y arras sin revisar cargas en fincas de alta cota.",
        "Revisamos arras CCCat, cèdula e ITE antes de señal. Tarifa plana 890 € IVA incl.: gestoría del comprador, no agencia captadora.",
      ],
    },
  },
  "hospitalet-de-llobregat": {
    metaTitle: "Comprar piso sin agencia en L'Hospitalet de Llobregat — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en L'Hospitalet de Llobregat entre particulares sin agencia? Contratos estándar del vendedor con plazos de hipoteca imposibles en bloques del Baix Llobregat. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En L'Hospitalet de Llobregat (Collblanc, Bellvitge…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en L'Hospitalet de Llobregat: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · L'Hospitalet de Llobregat",
      heroH1: "¿Compras piso en L'Hospitalet de Llobregat sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Collblanc, Bellvitge o centre de L'Hospitalet? Contratos estándar del vendedor con plazos de hipoteca imposibles en bloques del Baix Llobregat. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en L'Hospitalet de Llobregat",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En L'Hospitalet de Llobregat, un 3 % orientativo sobre 240.000 € son 8712 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en L'Hospitalet de Llobregat con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en L'Hospitalet de Llobregat — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en L'Hospitalet de Llobregat y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en L'Hospitalet de Llobregat con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en L'Hospitalet de Llobregat — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "L'Hospitalet de Llobregat · comprador particular",
      title: "Comprar en L'Hospitalet de Llobregat sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En L'Hospitalet de Llobregat (Collblanc, Bellvitge o centre de L'Hospitalet) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Contratos estándar del vendedor con plazos de hipoteca imposibles en bloques del Baix Llobregat.",
        "Compradores de Barcelona capital aterrizan aquí por precio: conviene due diligence de comunidad y registral antes de la reserva.",
      ],
    },
  },
  "barcelona-horta-guinardo": {
    metaTitle: "Comprar piso sin agencia en Horta-Guinardó — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Horta-Guinardó entre particulares sin agencia? Edificios en ladera con ITE pendiente y arras firmadas el mismo fin de semana de la visita. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Horta-Guinardó (Guinardó, El Carmel, Horta centre…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Horta-Guinardó: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Horta-Guinardó",
      heroH1: "¿Compras piso en Horta-Guinardó sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Guinardó, El Carmel, Horta centre o La Teixonera? Edificios en ladera con ITE pendiente y arras firmadas el mismo fin de semana de la visita. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Horta-Guinardó",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Horta-Guinardó, un 3 % orientativo sobre 310.000 € son 11.253 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Horta-Guinardó con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Horta-Guinardó — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Horta-Guinardó y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Horta-Guinardó con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Horta-Guinardó — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Horta-Guinardó · comprador particular",
      title: "Comprar en Horta-Guinardó sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Horta-Guinardó (Guinardó, El Carmel, Horta centre o La Teixonera) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Edificios en ladera con ITE pendiente y arras firmadas el mismo fin de semana de la visita.",
        "Livendia traduce estado del edificio y cláusulas de arras a decisiones concretas — sin comisión sobre el precio del piso.",
      ],
    },
  },
  "barcelona-sant-marti": {
    metaTitle: "Comprar piso sin agencia en Sant Martí — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sant Martí entre particulares sin agencia? Mucha prisa por cerrar en Poblenou o El Clot y documentación de comunidad multi-bloque incompleta. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sant Martí (Poblenou, El Clot, Diagonal Mar…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sant Martí: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sant Martí",
      heroH1: "¿Compras piso en Sant Martí sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Poblenou, El Clot, Diagonal Mar o La Verneda? Suele haber prisa por cerrar y el certificado de comunidad tarda en edificios de varios portales. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sant Martí",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sant Martí, un 3 % orientativo sobre 390.000 € son 14.157 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sant Martí con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sant Martí — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sant Martí y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sant Martí con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sant Martí — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Martí · comprador particular",
      title: "Comprar en Sant Martí sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sant Martí (Poblenou, El Clot, Diagonal Mar o La Verneda) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. En Poblenou y El Clot es habitual cerrar en días y descubrir después que falta documentación de la comunidad.",
        "Ideal si compras entre particulares o con agencia solo del vendedor: un gestor fijo hasta notaría.",
      ],
    },
  },
  "barcelona-sant-andreu": {
    metaTitle: "Comprar piso sin agencia en Sant Andreu — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sant Andreu entre particulares sin agencia? Reformas recientes sin licencia reflejada en contrato y derramas no mencionadas en visita. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sant Andreu (Sant Andreu de Palomar, La Sagrera…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sant Andreu: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sant Andreu",
      heroH1: "¿Compras piso en Sant Andreu sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Sant Andreu de Palomar, La Sagrera o Trinitat Vella? Reformas recientes sin licencia reflejada en contrato y derramas no mencionadas en visita. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sant Andreu",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sant Andreu, un 3 % orientativo sobre 280.000 € son 10.164 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sant Andreu con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sant Andreu — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sant Andreu y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sant Andreu con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sant Andreu — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Andreu · comprador particular",
      title: "Comprar en Sant Andreu sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sant Andreu (Sant Andreu de Palomar, La Sagrera o Trinitat Vella) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Reformas recientes sin licencia reflejada en contrato y derramas no mencionadas en visita.",
        "Checklist comprador: nota simple, comunidad, energético y coherencia reserva–arras en el distrito nord-est.",
      ],
    },
  },
  "barcelona-eixample": {
    metaTitle: "Comprar piso sin agencia en Eixample — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Eixample entre particulares sin agencia? Precio alto y borradores de arras copiados de agencia con penalizaciones desequilibradas hacia el comprador. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Eixample (Dreta de l'Eixample, Esquerra, Sagrada Família…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Eixample: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Eixample",
      heroH1: "¿Compras piso en Eixample sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Dreta de l'Eixample, Esquerra, Sagrada Família o Fort Pienc? Precio alto y borradores de arras copiados de agencia con penalizaciones desequilibradas hacia el comprador. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Eixample",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Eixample, un 3 % orientativo sobre 450.000 € son 16.335 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Eixample con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Eixample — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Eixample y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Eixample con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Eixample — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Eixample · comprador particular",
      title: "Comprar en Eixample sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Eixample (Dreta de l'Eixample, Esquerra, Sagrada Família o Fort Pienc) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Precio alto y borradores de arras copiados de agencia con penalizaciones desequilibradas hacia el comprador.",
        "En el Eixample el margen de error en una cláusula mala supera con creces la gestoría: 890 € IVA incl. por acompañamiento completo.",
      ],
    },
  },
  "barcelona-gracia": {
    metaTitle: "Comprar piso sin agencia en Gràcia — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Gràcia entre particulares sin agencia? Locales comerciales en planta baja mal delimitados en arras y fincas con protección patrimonial. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Gràcia (Vila de Gràcia, Camp d'en Grassot…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Gràcia: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Gràcia",
      heroH1: "¿Compras piso en Gràcia sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Vila de Gràcia, Camp d'en Grassot o Vallcarca? Locales comerciales en planta baja mal delimitados en arras y fincas con protección patrimonial. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Gràcia",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Gràcia, un 3 % orientativo sobre 410.000 € son 14.883 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Gràcia con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Gràcia — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Gràcia y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Gràcia con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Gràcia — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Gràcia · comprador particular",
      title: "Comprar en Gràcia sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Gràcia (Vila de Gràcia, Camp d'en Grassot o Vallcarca) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Locales comerciales en planta baja mal delimitados en arras y fincas con protección patrimonial.",
        "Compra entre particulares muy habitual por boca a boca: revisamos objeto del contrato y cargas antes de señal.",
      ],
    },
  },
  "barcelona-sants-montjuic": {
    metaTitle: "Comprar piso sin agencia en Sants-Montjuïc — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sants-Montjuïc entre particulares sin agencia? Obra nueva junto a finca antigua: mezcla de garantías, ITE y plazos de entrega confusos. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sants-Montjuïc (Sants, Hostafrancs, Poble-sec…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sants-Montjuïc: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sants-Montjuïc",
      heroH1: "¿Compras piso en Sants-Montjuïc sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Sants, Hostafrancs, Poble-sec o la Marina del Prat Vermell? Obra nueva junto a finca antigua: mezcla de garantías, ITE y plazos de entrega confusos. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sants-Montjuïc",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sants-Montjuïc, un 3 % orientativo sobre 330.000 € son 11.979 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sants-Montjuïc con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sants-Montjuïc — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sants-Montjuïc y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sants-Montjuïc con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sants-Montjuïc — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sants-Montjuïc · comprador particular",
      title: "Comprar en Sants-Montjuïc sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sants-Montjuïc (Sants, Hostafrancs, Poble-sec o la Marina del Prat Vermell) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Obra nueva junto a finca antigua: mezcla de garantías, ITE y plazos de entrega confusos.",
        "Coordinamos calendario con vendedor e hipoteca sin que pierdas el piso por un plazo mal redactado.",
      ],
    },
  },
  "badalona": {
    metaTitle: "Comprar piso sin agencia en Badalona — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Badalona entre particulares sin agencia? Compradores que vienen de Barcelona capital y firman reserva sin certificado de deuda de comunidad. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Badalona (Centre, Gorg, La Salut…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Badalona: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Badalona",
      heroH1: "¿Compras piso en Badalona sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Gorg, La Salut o el litoral de Badalona? Compradores que vienen de Barcelona capital y firman reserva sin certificado de deuda de comunidad. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Badalona",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Badalona, un 3 % orientativo sobre 250.000 € son 9075 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Badalona con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Badalona — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Badalona y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Badalona con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Badalona — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Badalona · comprador particular",
      title: "Comprar en Badalona sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Badalona (Centre, Gorg, La Salut o el litoral de Badalona) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Compradores que vienen de Barcelona capital y firman reserva sin certificado de deuda de comunidad.",
        "Gestoría online del comprador con panel Livendia: misma rigurosidad que una agencia, sin % sobre el precio.",
      ],
    },
  },
  "sabadell": {
    metaTitle: "Comprar piso sin agencia en Sabadell — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sabadell entre particulares sin agencia? Operaciones Vallès con arras redactadas solo a favor del vendedor y sin condición suspensiva de hipoteca clara. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sabadell (Centre, Eixample de Sabadell…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sabadell: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sabadell",
      heroH1: "¿Compras piso en Sabadell sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Eixample de Sabadell o Creu Alta? Operaciones Vallès con arras redactadas solo a favor del vendedor y sin condición suspensiva de hipoteca clara. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sabadell",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sabadell, un 3 % orientativo sobre 260.000 € son 9438 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sabadell con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sabadell — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sabadell y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sabadell con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sabadell — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sabadell · comprador particular",
      title: "Comprar en Sabadell sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sabadell (Centre, Eixample de Sabadell o Creu Alta) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Operaciones Vallès con arras redactadas solo a favor del vendedor y sin condición suspensiva de hipoteca clara.",
        "Revisión de reserva y arras antes de transferir señal — protocolo Livendia desde la primera llamada.",
      ],
    },
  },
  "barcelona-sarria-sant-gervasi": {
    metaTitle: "Comprar piso sin agencia en Sarrià-Sant Gervasi — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sarrià-Sant Gervasi entre particulares sin agencia? Viviendas unifamiliares y pisos señorial con servidumbres o anejos mal descritos en contrato. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sarrià-Sant Gervasi (Sarrià, Sant Gervasi…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sarrià-Sant Gervasi: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sarrià-Sant Gervasi",
      heroH1: "¿Compras piso en Sarrià-Sant Gervasi sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Sarrià, Sant Gervasi o Bonanova? Viviendas unifamiliares y pisos señorial con servidumbres o anejos mal descritos en contrato. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sarrià-Sant Gervasi",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sarrià-Sant Gervasi, un 3 % orientativo sobre 580.000 € son 21.054 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sarrià-Sant Gervasi con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sarrià-Sant Gervasi — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sarrià-Sant Gervasi y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sarrià-Sant Gervasi con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sarrià-Sant Gervasi — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sarrià-Sant Gervasi · comprador particular",
      title: "Comprar en Sarrià-Sant Gervasi sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sarrià-Sant Gervasi (Sarrià, Sant Gervasi o Bonanova) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Viviendas unifamiliares y pisos señorial con servidumbres o anejos mal descritos en contrato.",
        "Due diligence registral exigente: encaja visita, anuncio y lo que firmas en arras penitenciales.",
      ],
    },
  },
  "barcelona-nou-barris": {
    metaTitle: "Comprar piso sin agencia en Nou Barris — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Nou Barris entre particulares sin agencia? Bloques con historial de derramas importantes y presión del vendedor para firmar arras en 48 h. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Nou Barris (Verdum, Roquetes, Trinitat Nova…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Nou Barris: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Nou Barris",
      heroH1: "¿Compras piso en Nou Barris sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Verdum, Roquetes, Trinitat Nova o Porta? Bloques con historial de derramas importantes y presión del vendedor para firmar arras en 48 h. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Nou Barris",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Nou Barris, un 3 % orientativo sobre 240.000 € son 8712 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Nou Barris con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Nou Barris — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Nou Barris y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Nou Barris con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Nou Barris — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Nou Barris · comprador particular",
      title: "Comprar en Nou Barris sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Nou Barris (Verdum, Roquetes, Trinitat Nova o Porta) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Bloques con historial de derramas importantes y presión del vendedor para firmar arras en 48 h.",
        "Te explicamos en castellano claro qué obliga cada cláusula antes de ingresar arras en Nou Barris.",
      ],
    },
  },
  "barcelona-ciutat-vella": {
    metaTitle: "Comprar piso sin agencia en Ciutat Vella — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Ciutat Vella entre particulares sin agencia? Fincas históricas: ITE, cèdula y licencias de reforma que no cuadran con lo visto en Idealista. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Ciutat Vella (Gòtic, Raval, Sant Pere…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Ciutat Vella: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Ciutat Vella",
      heroH1: "¿Compras piso en Ciutat Vella sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Gòtic, Raval, Sant Pere o la Barceloneta? Fincas históricas: ITE, cèdula y licencias de reforma que no cuadran con lo visto en Idealista. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Ciutat Vella",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Ciutat Vella, un 3 % orientativo sobre 360.000 € son 13.068 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Ciutat Vella con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Ciutat Vella — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Ciutat Vella y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Ciutat Vella con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Ciutat Vella — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Ciutat Vella · comprador particular",
      title: "Comprar en Ciutat Vella sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Ciutat Vella (Gòtic, Raval, Sant Pere o la Barceloneta) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Fincas históricas: ITE, cèdula y licencias de reforma que no cuadran con lo visto en Idealista.",
        "Informe semáforo pre-arras en casco antiguo — especialmente si compras sin agencia compradora.",
      ],
    },
  },
  "terrassa": {
    metaTitle: "Comprar piso sin agencia en Terrassa — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Terrassa entre particulares sin agencia? Compradores que desplazan desde Barcelona y no verifican deuda de comunidad en bloques grandes. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Terrassa (Centre, Sant Pere…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Terrassa: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Terrassa",
      heroH1: "¿Compras piso en Terrassa sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Sant Pere o la Maurina? Compradores que desplazan desde Barcelona y no verifican deuda de comunidad en bloques grandes. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Terrassa",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Terrassa, un 3 % orientativo sobre 250.000 € son 9075 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Terrassa con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Terrassa — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Terrassa y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Terrassa con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Terrassa — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Terrassa · comprador particular",
      title: "Comprar en Terrassa sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Terrassa (Centre, Sant Pere o la Maurina) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Compradores que desplazan desde Barcelona y no verifican deuda de comunidad en bloques grandes.",
        "Acompañamiento hasta escritura en notaría del Vallès con gestor humano, no call center.",
      ],
    },
  },
  "cornella-de-llobregat": {
    metaTitle: "Comprar piso sin agencia en Cornellà de Llobregat — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Cornellà de Llobregat entre particulares sin agencia? Arras con referencias a obra o parking compartido sin cuadro registral claro. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Cornellà de Llobregat (Centre, Sant Ildefons…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Cornellà de Llobregat: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Cornellà de Llobregat",
      heroH1: "¿Compras piso en Cornellà de Llobregat sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Sant Ildefons o Almeda? Arras con referencias a obra o parking compartido sin cuadro registral claro. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Cornellà de Llobregat",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Cornellà de Llobregat, un 3 % orientativo sobre 260.000 € son 9438 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Cornellà de Llobregat con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Cornellà de Llobregat — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Cornellà de Llobregat y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Cornellà de Llobregat con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Cornellà de Llobregat — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Cornellà de Llobregat · comprador particular",
      title: "Comprar en Cornellà de Llobregat sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Cornellà de Llobregat (Centre, Sant Ildefons o Almeda) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Arras con referencias a obra o parking compartido sin cuadro registral claro.",
        "Compra entre particulares en el Baix Llobregat con revisión CCCat y seguimiento post-arras.",
      ],
    },
  },
  "sant-cugat-del-valles": {
    metaTitle: "Comprar piso sin agencia en Sant Cugat del Vallès — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sant Cugat del Vallès entre particulares sin agencia? Precios altos del Vallès Occidental y contratos bilingües mal entendidos por compradores externos. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sant Cugat del Vallès (Centre, Mira-sol…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sant Cugat del Vallès: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sant Cugat del Vallès",
      heroH1: "¿Compras piso en Sant Cugat del Vallès sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Mira-sol o Valldoreix? Precios altos del Vallès Occidental y contratos bilingües mal entendidos por compradores externos. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sant Cugat del Vallès",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sant Cugat del Vallès, un 3 % orientativo sobre 460.000 € son 16.698 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sant Cugat del Vallès con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sant Cugat del Vallès — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sant Cugat del Vallès y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sant Cugat del Vallès con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sant Cugat del Vallès — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Cugat del Vallès · comprador particular",
      title: "Comprar en Sant Cugat del Vallès sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sant Cugat del Vallès (Centre, Mira-sol o Valldoreix) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Precios altos del Vallès Occidental y contratos bilingües mal entendidos por compradores externos.",
        "Detectamos honorarios encadenados de agencias y plazos de financiación irreales antes de la señal.",
      ],
    },
  },
  "esplugues-de-llobregat": {
    metaTitle: "Comprar piso sin agencia en Esplugues de Llobregat — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Esplugues de Llobregat entre particulares sin agencia? Compradores de Barcelona que cierran rápido sin revisar actas de comunidad en bloques en altura. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Esplugues de Llobregat (Centre, Can Vidalet…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Esplugues de Llobregat: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Esplugues de Llobregat",
      heroH1: "¿Compras piso en Esplugues de Llobregat sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Can Vidalet o Finestrelles? Compradores de Barcelona que cierran rápido sin revisar actas de comunidad en bloques en altura. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Esplugues de Llobregat",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Esplugues de Llobregat, un 3 % orientativo sobre 330.000 € son 11.979 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Esplugues de Llobregat con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Esplugues de Llobregat — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Esplugues de Llobregat y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Esplugues de Llobregat con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Esplugues de Llobregat — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Esplugues de Llobregat · comprador particular",
      title: "Comprar en Esplugues de Llobregat sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Esplugues de Llobregat (Centre, Can Vidalet o Finestrelles) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Compradores de Barcelona que cierran rápido sin revisar actas de comunidad en bloques en altura.",
        "Tarifa plana frente a errores que en Esplugues pueden costar miles de euros en derramas ocultas.",
      ],
    },
  },
  "castelldefels": {
    metaTitle: "Comprar piso sin agencia en Castelldefels — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Castelldefels entre particulares sin agencia? Segunda residencia y vivienda habitual mezcladas: documentación del vendedor incompleta antes de arras. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Castelldefels (Centre, Montmar…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Castelldefels: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Castelldefels",
      heroH1: "¿Compras piso en Castelldefels sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Montmar o Bellamar? Segunda residencia y vivienda habitual mezcladas: documentación del vendedor incompleta antes de arras. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Castelldefels",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Castelldefels, un 3 % orientativo sobre 400.000 € son 14.520 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Castelldefels con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Castelldefels — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Castelldefels y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Castelldefels con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Castelldefels — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Castelldefels · comprador particular",
      title: "Comprar en Castelldefels sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Castelldefels (Centre, Montmar o Bellamar) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Segunda residencia y vivienda habitual mezcladas: documentación del vendedor incompleta antes de arras.",
        "Castelldefels concentra compras entre particulares desde Idealista: revisamos ITE, cèdula y arras CCCat por 890 € IVA incl.",
      ],
    },
  },
  "gava": {
    metaTitle: "Comprar piso sin agencia en Gavà — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Gavà entre particulares sin agencia? Operaciones en primera línea de mar con cláusulas de estado del piso vagas en reserva. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Gavà (Centre, Gavà Mar…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Gavà: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Gavà",
      heroH1: "¿Compras piso en Gavà sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Gavà Mar o Santa Rosa? Operaciones en primera línea de mar con cláusulas de estado del piso vagas en reserva. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Gavà",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Gavà, un 3 % orientativo sobre 310.000 € son 11.253 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Gavà con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Gavà — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Gavà y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Gavà con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Gavà — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Gavà · comprador particular",
      title: "Comprar en Gavà sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Gavà (Centre, Gavà Mar o Santa Rosa) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Operaciones en primera línea de mar con cláusulas de estado del piso vagas en reserva.",
        "Gestor del comprador desde la reserva hasta notaría — sin buscar piso ni cobrar comisión sobre precio.",
      ],
    },
  },
  "sant-adria-de-besos": {
    metaTitle: "Comprar piso sin agencia en Sant Adrià de Besòs — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sant Adrià de Besòs entre particulares sin agencia? Bloques con comunidades complejas y arras firmadas sin certificado energético coherente. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sant Adrià de Besòs (Centre, La Verneda adrienca…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sant Adrià de Besòs: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sant Adrià de Besòs",
      heroH1: "¿Compras piso en Sant Adrià de Besòs sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, La Verneda adrienca o el Fòrum? Bloques con comunidades complejas y arras firmadas sin certificado energético coherente. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sant Adrià de Besòs",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sant Adrià de Besòs, un 3 % orientativo sobre 260.000 € son 9438 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sant Adrià de Besòs con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sant Adrià de Besòs — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sant Adrià de Besòs y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sant Adrià de Besòs con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sant Adrià de Besòs — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Adrià de Besòs · comprador particular",
      title: "Comprar en Sant Adrià de Besòs sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sant Adrià de Besòs (Centre, La Verneda adrienca o el Fòrum) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Bloques con comunidades complejas y arras firmadas sin certificado energético coherente.",
        "Comprar sin agencia en Sant Adrià es legal y habitual; el riesgo está en firmar sin gestoría del comprador.",
      ],
    },
  },
  "sant-boi-de-llobregat": {
    metaTitle: "Comprar piso sin agencia en Sant Boi de Llobregat — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sant Boi de Llobregat entre particulares sin agencia? Precio atractivo y presión para reserva inmediata sin nota simple actualizada. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sant Boi de Llobregat (Centre, Marianao…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sant Boi de Llobregat: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sant Boi de Llobregat",
      heroH1: "¿Compras piso en Sant Boi de Llobregat sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Marianao o el Prat de Llobregat colindante? Precio atractivo y presión para reserva inmediata sin nota simple actualizada. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sant Boi de Llobregat",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sant Boi de Llobregat, un 3 % orientativo sobre 250.000 € son 9075 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sant Boi de Llobregat con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sant Boi de Llobregat — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sant Boi de Llobregat y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sant Boi de Llobregat con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sant Boi de Llobregat — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Boi de Llobregat · comprador particular",
      title: "Comprar en Sant Boi de Llobregat sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sant Boi de Llobregat (Centre, Marianao o el Prat de Llobregat colindante) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Precio atractivo y presión para reserva inmediata sin nota simple actualizada.",
        "Cruzamos titular registral, cargas y lo pactado verbalmente antes de que el dinero quede atado.",
      ],
    },
  },
  "sant-joan-despi": {
    metaTitle: "Comprar piso sin agencia en Sant Joan Despí — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Sant Joan Despí entre particulares sin agencia? Pisos reformados con licencias urbanísticas pendientes no reflejadas en arras. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Sant Joan Despí (Centre, Les Planes…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Sant Joan Despí: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Sant Joan Despí",
      heroH1: "¿Compras piso en Sant Joan Despí sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Les Planes o la zona del TV3? Pisos reformados con licencias urbanísticas pendientes no reflejadas en arras. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Sant Joan Despí",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Sant Joan Despí, un 3 % orientativo sobre 310.000 € son 11.253 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Sant Joan Despí con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Sant Joan Despí — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Sant Joan Despí y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Sant Joan Despí con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Sant Joan Despí — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Sant Joan Despí · comprador particular",
      title: "Comprar en Sant Joan Despí sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Sant Joan Despí (Centre, Les Planes o la zona del TV3) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Pisos reformados con licencias urbanísticas pendientes no reflejadas en arras.",
        "Mismo gestor por WhatsApp durante toda la compra en Sant Joan Despí y área metropolitana.",
      ],
    },
  },
  "mollet-del-valles": {
    metaTitle: "Comprar piso sin agencia en Mollet del Vallès — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Mollet del Vallès entre particulares sin agencia? Compradores del Vallès Oriental que aceptan plantillas de arras sin plazo realista de hipoteca. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Mollet del Vallès (Centre, Gallecs…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Mollet del Vallès: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Mollet del Vallès",
      heroH1: "¿Compras piso en Mollet del Vallès sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en Centre, Gallecs o zona estación? Compradores del Vallès Oriental que aceptan plantillas de arras sin plazo realista de hipoteca. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Mollet del Vallès",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Mollet del Vallès, un 3 % orientativo sobre 240.000 € son 8712 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Mollet del Vallès con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Mollet del Vallès — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Mollet del Vallès y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Mollet del Vallès con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Mollet del Vallès — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Mollet del Vallès · comprador particular",
      title: "Comprar en Mollet del Vallès sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Mollet del Vallès (Centre, Gallecs o zona estación) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Compradores del Vallès Oriental que aceptan plantillas de arras sin plazo realista de hipoteca.",
        "Revisión documental y coordinación con notaría — gestoría Livendia 890 € IVA incl.",
      ],
    },
  },
  "barcelona-poblenou": {
    metaTitle: "Comprar piso sin agencia en Poblenou — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en Poblenou entre particulares sin agencia? Locales convertidos a vivienda y comunidades con obras aprobadas no declaradas al comprador. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En Poblenou (Rambla del Poblenou, Diagonal Mar…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en Poblenou: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · Poblenou",
      heroH1: "¿Compras piso en Poblenou sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en la Rambla del Poblenou, cerca del Bogatell o en Diagonal Mar? Locales convertidos a vivienda y comunidades con obras aprobadas no declaradas al comprador. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en Poblenou",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En Poblenou, un 3 % orientativo sobre 410.000 € son 14.883 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en Poblenou con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en Poblenou — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en Poblenou y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en Poblenou con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en Poblenou — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "Poblenou · comprador particular",
      title: "Comprar en Poblenou sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En Poblenou (Rambla del Poblenou, Diagonal Mar o La Verneda) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Locales convertidos a vivienda y comunidades con obras aprobadas no declaradas al comprador.",
        "Poblenou va rápido: conviene gestor antes de señal, no después de una cláusula irreversible.",
      ],
    },
  },
  "barcelona-born": {
    metaTitle: "Comprar piso sin agencia en El Born — gestoría comprador 890 €",
    metaDescription:
      "¿Compras en El Born entre particulares sin agencia? Encanto del casco antiguo con ITE severa o cargas que el vendedor minimiza en la visita. Livendia revisa reserva, arras e ITE. 890 € IVA incl.",
    tramitesAreaNote:
      "En El Born (El Born, la Ribera…), el gestor Livendia del comprador revisa reserva, arras CCCat, comunidad e ITE antes de ingresar señal — compra entre particulares sin comisión sobre el precio.",
    benefitsAreaNote:
      "Due diligence en El Born: registral, derramas, plazos de hipoteca y calendario con vendedor hasta notaría.",
    copy: {
      heroBadge: "Compra sin agencia · El Born",
      heroH1: "¿Compras piso en El Born sin agencia? — no firmes arras a ciegas",
      heroLead:
        "¿Has encontrado piso en El Born, la Ribera o Sant Pere de Ciutat Vella? Encanto del casco antiguo con ITE severa o cargas que el vendedor minimiza en la visita. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación antes de que transfieras la señal — gestoría del comprador, no agencia inmobiliaria.",
      heroBullets: [
        "Compra entre particulares o con agencia solo del vendedor",
        "Revisión ITE, cèdula y comunidad en El Born",
        "890 € fijos — sin % sobre el precio del inmueble",
      ],
      savingsIntro:
        "En El Born, un 3 % orientativo sobre 430.000 € son 15.609 € con IVA. Livendia fija la gestoría del comprador en ",
      finalCtaTitle: "Cierra la compra en El Born con gestoría profesional",
      faqTitle: "Comprar piso sin agencia en El Born — preguntas frecuentes",
      waPrefill:
        "Hola, compro piso entre particulares en El Born y quiero comprar sin agencia con gestor Livendia (servicio completo de compra).",
      jsonLdServiceName: "Comprar piso sin agencia en El Born con gestor comprador Livendia",
      imageAlt: "Comprar piso sin agencia en El Born — gestoría Livendia",
    },
    barcelonaZoneIntro: {
      eyebrow: "El Born · comprador particular",
      title: "Comprar en El Born sin agencia compradora, con gestoría Livendia",
      paragraphs: [
        "En El Born (El Born, la Ribera o Sant Pere de Ciutat Vella) muchas operaciones se cierran sin agencia del comprador: ahorras comisión, pero el borrador de arras suele venir redactado solo a favor del vendedor. Encanto del casco antiguo con ITE severa o cargas que el vendedor minimiza en la visita.",
        "Compra entre particulares en El Born con Arnau Martí y Daniel Hernández al frente del criterio jurídico Livendia.",
      ],
    },
  },
};
