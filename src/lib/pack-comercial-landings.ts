import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL,
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  PACK_ARRAS_GESTION_VENDEDOR_SLUGS,
  PACK_LAU_ADMIN_LANDING_PATH,
  PACK_LAU_ADMIN_SLUGS,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";

export type PackCommercialLandingConfig = {
  path: string;
  serviceSlugs: readonly string[];
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  heroBadge: string;
  heroH1: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
  totalPriceLabel: string;
  priceBreakdown: readonly { label: string; price: string }[];
  primaryCtaSlug: string;
  primaryCtaLabel: string;
  secondaryCtaSlug: string;
  secondaryCtaLabel: string;
  includedTitle: string;
  includedIntro: string;
  includedItems: readonly string[];
  steps: readonly { title: string; description: string }[];
  infoBanners: readonly { title: string; body: string }[];
  audienceTitle: string;
  audienceParagraph: string;
  comparisonTitle: string;
  comparisonRows: readonly { label: string; pack: string; alternative: string }[];
  faq: readonly { question: string; answer: string }[];
  relatedLinks: readonly { href: string; label: string }[];
  finalCtaTitle: string;
  finalCtaLead: string;
  jsonLdName: string;
  jsonLdDescription: string;
  contactServiceLabel: string;
  contactNeedType: "alquiler" | "venta" | "arras";
};

export const PACK_LAU_ADMIN_LANDING: PackCommercialLandingConfig = {
  path: PACK_LAU_ADMIN_LANDING_PATH,
  serviceSlugs: PACK_LAU_ADMIN_SLUGS,
  metaTitle: `Pack contrato LAU + administración de alquiler — ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl.`,
  metaDescription:
    "Pack para propietarios particulares: contrato de alquiler LAU (145 €) + primer mes de administración (49 €). Gestor legal, cobro de renta e incidencias desde el día uno. Sin permanencia.",
  keywords: [
    "pack contrato alquiler LAU administración",
    "contrato alquiler y gestión inquilino",
    "gestoría alquiler propietarios particulares",
    "administración alquiler contrato LAU",
    "alquilar piso con gestor legal",
    "contrato LAU 145 euros administración 49",
  ],
  heroBadge: "Alquiler · Propietarios particulares",
  heroH1: "Pack contrato LAU + administración de alquiler",
  heroLead:
    "¿Vas a alquilar tu piso a largo plazo? Este pack une lo esencial para arrancar bien: un contrato LAU redactado por gestor legal (145 € IVA incl.) y el primer mes de administración Livendia (49 €/mes) para que el inquilino no te llame al móvil personal desde el primer día.",
  heroImage: "/images/contratodealquiler.jpg",
  heroImageAlt: "Propietario firmando contrato de alquiler LAU con gestor Livendia",
  totalPriceLabel: LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL,
  priceBreakdown: [
    { label: "Contrato de alquiler LAU", price: CONTRATO_ALQUILER_LAU_PRICE_LABEL },
    { label: "Administración de alquiler (1.er mes)", price: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL },
  ],
  primaryCtaSlug: PACK_LAU_ADMIN_SLUGS[0],
  primaryCtaLabel: "Contratar contrato LAU",
  secondaryCtaSlug: PACK_LAU_ADMIN_SLUGS[1],
  secondaryCtaLabel: "Contratar administración",
  includedTitle: "Qué incluye el pack para propietarios",
  includedIntro:
    "Dos servicios complementarios que cubren el arranque legal y operativo del alquiler. Contratas cada partida por separado con pago seguro; el total del pack es la suma de tarifas publicadas.",
  includedItems: [
    "Contrato LAU adaptado a tu vivienda: duración, renta, fianza, actualización IPC/IRAV si procede, gastos y suministros",
    "Revisión de cláusulas conforme a la Ley de Arrendamientos Urbanos y normativa autonómica",
    "Depósito en INCASÒL cuando corresponda y orientación sobre zona tensionada",
    "Administración mensual: canal único Livendia-inquilino, cobro de renta e incidencias documentadas",
    "Panel del propietario 24/7: contratos, justificantes, historial de incidencias",
    "Gestor dedicado por WhatsApp — sin call center ni comisión de agencia inmobiliaria",
    "Sin permanencia en administración: cancelación con 30 días de preaviso",
  ],
  steps: [
    {
      title: "Contratas el contrato LAU",
      description:
        "Registras tus datos, pagas 145 € IVA incl. y un gestor recoge datos del piso y del inquilino para redactar el contrato.",
    },
    {
      title: "Revisión y firma del contrato",
      description:
        "Recibes borrador para validar cláusulas. Coordinamos firma digital o presencial según prefieras.",
    },
    {
      title: "Activas la administración",
      description:
        "Tras el alta del arrendamiento, suscribes administración a 49 €/mes. Livendia pasa a ser el interlocutor del inquilino.",
    },
    {
      title: "Día a día delegado",
      description:
        "Cobro de renta, incidencias, renovaciones e IRAV: tú decides sobre la renta y obras; el gestor filtra el contacto diario.",
    },
  ],
  infoBanners: [
    {
      title: "¿Por qué no basta con un contrato de internet?",
      body: "Las plantillas genéricas no contemplan tu municipio (zona tensionada, topes IRAV, fianza en INCASÒL), ni cláusulas sobre mascotas, subarriendo o obras. Un error en el contrato puede costar más que 145 € en un conflicto posterior con el inquilino.",
    },
    {
      title: "¿Por qué añadir administración desde el primer mes?",
      body: "El propietario particular suele subestimar el volumen de llamadas: averías, certificados, retrasos de transferencia, quejas de vecinos. Con 49 €/mes Livendia asume ese canal desde el día uno — especialmente útil si vives lejos del piso o tienes varios alquileres.",
    },
    {
      title: "Ideal si vienes de Idealista o conoces al inquilino",
      body: "No somos agencia: no buscamos inquilino ni cobramos comisión sobre la renta. Este pack es para propietarios que ya tienen arrendatario y quieren legalidad + operativa profesional sin pagar el 10 % anual de una inmobiliaria de gestión.",
    },
  ],
  audienceTitle: "¿Para quién es este pack?",
  audienceParagraph:
    "Para propietarios particulares en España que van a alquilar un piso completo con contrato LAU de larga duración — ya sea primera vez, segunda vivienda, herencia o traslado al extranjero. El perfil típico: tienes inquilino seleccionado (Idealista, recomendación, empresa) y quieres contrato defendible más gestión del día a día sin convertirte en administrador de fincas. Si alquilas por habitaciones o temporada, mira nuestros contratos específicos en el catálogo.",
  comparisonTitle: "Pack vs contratar por separado vs agencia tradicional",
  comparisonRows: [
    {
      label: "Coste inicial",
      pack: `${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} (LAU + 1.er mes admin)`,
      alternative: "Agencia: 1 mes de renta + IVA solo por gestionar",
    },
    {
      label: "Contrato LAU a medida",
      pack: "145 € IVA incl. — gestor legal",
      alternative: "Plantilla web: 0 € pero riesgo contractual",
    },
    {
      label: "Contacto con inquilino",
      pack: "Canal único Livendia desde mes 1",
      alternative: "Tú atiendes WhatsApp y llamadas",
    },
    {
      label: "Permanencia",
      pack: "Admin sin permanencia (30 días preaviso)",
      alternative: "Muchas agencias exigen 12 meses",
    },
  ],
  faq: [
    {
      question: "¿Cuánto cuesta el pack contrato LAU + administración?",
      answer: `El total estimado es ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl.: ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} por el contrato LAU más ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} del primer mes de administración. Cada servicio se contrata por separado en el orden recomendado.`,
    },
    {
      question: "¿En qué orden debo contratar?",
      answer:
        "Primero el contrato LAU (redacción y firma). Cuando el arrendamiento está activo, activas la suscripción mensual de administración de alquiler.",
    },
    {
      question: "¿Livendia busca inquilino o publica mi piso?",
      answer:
        "No. Somos gestoría inmobiliaria online: contratos, administración y trámites. Tú seleccionas al inquilino; nosotros blindamos el contrato y gestionamos la relación una vez firmado.",
    },
    {
      question: "¿Qué pasa si solo quiero el contrato LAU?",
      answer:
        "Puedes contratar solo el contrato LAU por 145 € IVA incl. y añadir administración más adelante desde la ficha del servicio o desde /precios.",
    },
    {
      question: "¿Incluye el pack la defensa en juicio de desahucio?",
      answer:
        "La administración mensual cubre gestión ordinaria, cobro y mediación. Procedimientos judiciales de desahucio son servicios legales adicionales no incluidos en la cuota de 49 €/mes.",
    },
    {
      question: "¿Atendéis alquileres en Barcelona, Madrid y otras ciudades?",
      answer:
        "Sí. Mismo pack y mismos precios en toda España. Tenemos landings locales de contrato LAU y administración por ciudad en el catálogo.",
    },
  ],
  relatedLinks: [
    { href: "/servicios/contrato-alquiler-lau", label: "Ficha contrato LAU" },
    { href: "/servicios/administracion-alquiler", label: "Ficha administración de alquiler" },
    { href: "/para-propietarios", label: "Hub para propietarios" },
    { href: "/servicios/contrato-alquiler-local/barcelona", label: "Contrato alquiler Barcelona" },
    { href: "/precios", label: "Todos los precios" },
  ],
  finalCtaTitle: "Arranca tu alquiler con contrato LAU y gestor desde el día uno",
  finalCtaLead:
    "Contrato legal + administración sin comisión de agencia. Pago seguro por tarjeta y gestor asignado en 24 h laborables.",
  jsonLdName: "Pack contrato LAU + administración de alquiler Livendia",
  jsonLdDescription:
    "Pack para propietarios particulares: contrato LAU y primer mes de administración de alquiler con gestor legal dedicado.",
  contactServiceLabel: "Pack contrato LAU + administración de alquiler",
  contactNeedType: "alquiler",
};

export const PACK_ARRAS_GESTION_LANDING: PackCommercialLandingConfig = {
  path: PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  serviceSlugs: PACK_ARRAS_GESTION_VENDEDOR_SLUGS,
  metaTitle: `Pack arras + gestión documental vendedor — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
  metaDescription:
    "Pack venta entre particulares: contrato de arras (145 €) + gestión documental vendedor post-arras (350 €). Para vender sin agencia con comprador ya encontrado. 495 € IVA incl.",
  keywords: [
    "pack arras gestión documental vendedor",
    "vender piso entre particulares arras",
    "gestoría venta sin agencia documentación",
    "contrato arras y trámites escritura vendedor",
    "vender sin inmobiliaria con comprador",
    "pack venta particular 495 euros",
  ],
  heroBadge: "Venta · Propietarios particulares",
  heroH1: "Pack arras + gestión documental vendedor",
  heroLead:
    "¿Vendes tu piso entre particulares y ya tienes comprador? Este pack cubre el tramo crítico: contrato de arras equilibrado (145 € IVA incl.) y un gestor que recopila comunidad, nota simple, ITE y coherencia documental hasta notaría (350 € IVA incl.) — sin pagar el 3–5 % de una agencia inmobiliaria.",
  heroImage: "/images/servicio-completo-venta-hero.jpg",
  heroImageAlt: "Vendedor particular cerrando venta de piso con gestoría Livendia",
  totalPriceLabel: LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  priceBreakdown: [
    { label: "Contrato de arras (penitenciales)", price: CONTRATO_ARRAS_LOCAL_PRICE_LABEL },
    { label: "Gestión documental vendedor post-arras", price: GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL },
  ],
  primaryCtaSlug: PACK_ARRAS_GESTION_VENDEDOR_SLUGS[0],
  primaryCtaLabel: "Contratar arras",
  secondaryCtaSlug: PACK_ARRAS_GESTION_VENDEDOR_SLUGS[1],
  secondaryCtaLabel: "Contratar gestión documental",
  includedTitle: "Qué incluye el pack para vendedores particulares",
  includedIntro:
    "Pensado para propietarios que llevan la venta sin agencia: tú encuentras al comprador; Livendia blinda contratos y ordena la documentación hasta la escritura.",
  includedItems: [
    "Contrato de arras penitenciales o confirmatorias redactado a medida — plazos, señal, penalizaciones y condición de hipoteca del comprador",
    "Revisión de coherencia entre precio pactado, reserva previa y borrador de arras",
    "Gestor dedicado post-arras: nota simple, certificado de deuda de comunidad, ITE si procede",
    "Certificado energético, IBI, cargas hipotecarias y orientación sobre cancelación",
    "Informe semáforo (verde/ámbar/rojo) antes de notaría",
    "Coordinación de hitos con comprador y orientación sobre plusvalía e impuestos del vendedor",
    "Panel Livendia para centralizar documentos — ideal si vendes desde otra ciudad",
  ],
  steps: [
    {
      title: "Contratas y firmas arras",
      description:
        "Con comprador confirmado, contratas arras por 145 € IVA incl. El gestor redacta cláusulas equilibradas y coordina la firma.",
    },
    {
      title: "Activas gestión documental",
      description:
        "Tras arras, contratas gestión documental vendedor (350 € IVA incl.). El gestor solicita y verifica toda la documentación.",
    },
    {
      title: "Checklist pre-escritura",
      description:
        "Comunidad al corriente, nota simple sin sorpresas, ITE y energético: informe semáforo con lo que falta o está en orden.",
    },
    {
      title: "Firma en notaría con tranquilidad",
      description:
        "Llegas a escritura con expediente ordenado. El notario no sustituye la revisión previa: este pack reduce rebajas tardías y retrasos.",
    },
  ],
  infoBanners: [
    {
      title: "Ahorro frente a comisión de agencia",
      body: `En un piso de 300.000 €, una comisión del 3 % son 9.000 € + IVA (~10.890 €) solo por intermediar — aunque tú hayas traído al comprador. Este pack cuesta ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. cuando la venta la llevas tú entre particulares.`,
    },
    {
      title: "Arras copiadas de internet = riesgo real",
      body: "Plazos irreales, penalizaciones desequilibradas, olvidos sobre derramas o hipoteca del comprador: el comprador usa esos fallos para pedir rebaja días antes de notaría. Un gestor redacta arras que reflejan lo pactado verbalmente.",
    },
    {
      title: "¿Prefieres acompañamiento completo?",
      body: `Si quieres reserva + arras + documentación + coordinación integral en un solo servicio, el servicio completo de venta cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Este pack de 495 € encaja cuando ya tienes comprador y solo necesitas arras + tramo documental post-arras.`,
    },
  ],
  audienceTitle: "¿Para quién es este pack?",
  audienceParagraph:
    "Para propietarios particulares en España que venden sin agencia inmobiliaria y ya tienen comprador (Idealista, recomendación, familiar, comprador de otra provincia). El perfil típico: quieres ahorrar miles de euros en comisión pero no asumir solo la responsabilidad legal de arras y la recopilación de documentos entre firma de arras y escritura. Especialmente habitual en herencias, segundas residencias y ventas en Barcelona, Madrid, Valencia o costa.",
  comparisonTitle: "Pack 495 € vs agencia vs servicio completo 890 €",
  comparisonRows: [
    {
      label: "Comisión sobre precio venta",
      pack: "0 € — tarifa plana",
      alternative: "3–5 % del precio (miles de €)",
    },
    {
      label: "Contrato de arras",
      pack: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} — gestor legal`,
      alternative: "Plantilla o redacción del comprador",
    },
    {
      label: "Documentación hasta notaría",
      pack: `${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} — gestor dedicado`,
      alternative: "Tú persigues comunidad y registros",
    },
    {
      label: "Alcance integral reserva→escritura",
      pack: "Pack parcial (arras + docs)",
      alternative: `Servicio completo ${SERVICIO_COMPLETO_CV_PRICE_LABEL} si quieres todo`,
    },
  ],
  faq: [
    {
      question: "¿Cuánto cuesta el pack arras + gestión documental vendedor?",
      answer: `El total estimado es ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.: ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} por arras más ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} por gestión documental post-arras. Se contrata en ese orden habitual.`,
    },
    {
      question: "¿Puedo usar este pack si el comprador viene de Idealista?",
      answer:
        "Es el caso más frecuente: tú publicaste y cerraste con el comprador; Livendia evita que pagues comisión de agencia por un trámite que ya no necesita marketing inmobiliario.",
    },
    {
      question: "¿Livendia busca comprador o valora mi piso?",
      answer:
        "No. No somos agencia ni portal. Gestionamos contratos y documentación para vendedores que ya tienen comprador particular.",
    },
    {
      question: "¿Qué diferencia hay con el servicio completo de venta (890 €)?",
      answer: `El servicio completo incluye reserva, arras, documentación y acompañamiento integral hasta escritura. Este pack (495 €) cubre arras + gestión documental post-arras cuando ya tienes comprador y no necesitas el alcance completo.`,
    },
    {
      question: "¿Incluye la plusvalía municipal o el IRPF del vendedor?",
      answer:
        "Orientamos sobre plazos y documentación; la liquidación de impuestos y tasas municipales es responsabilidad del vendedor salvo encargo específico adicional.",
    },
    {
      question: "¿Atendéis ventas en toda España?",
      answer:
        "Sí. Mismo pack online con gestor dedicado. Disponemos de landings locales de venta entre particulares por ciudad.",
    },
  ],
  relatedLinks: [
    { href: "/servicios/contrato-de-arras", label: "Guía contrato de arras" },
    { href: "/servicios/gestion-documental-vendedor", label: "Ficha gestión documental vendedor" },
    { href: "/servicios/vender-piso-sin-agencia", label: "Vender sin agencia" },
    { href: "/servicios/servicio-completo-venta", label: "Servicio completo venta 890 €" },
    { href: "/servicios/servicio-completo-venta-local/barcelona", label: "Venta particular Barcelona" },
  ],
  finalCtaTitle: "Vende entre particulares con arras y documentación profesional",
  finalCtaLead:
    "495 € IVA incl. estimados · Sin comisión sobre el precio de venta · Gestor asignado en 24 h laborables.",
  jsonLdName: "Pack arras + gestión documental vendedor Livendia",
  jsonLdDescription:
    "Pack para vendedores particulares: contrato de arras y gestión documental hasta notaría sin comisión de agencia.",
  contactServiceLabel: "Pack arras + gestión documental vendedor",
  contactNeedType: "venta",
};

export const PACK_COMMERCIAL_LANDINGS = [PACK_LAU_ADMIN_LANDING, PACK_ARRAS_GESTION_LANDING] as const;
