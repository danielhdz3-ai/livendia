export type LivendiaFounderSeal = { src: string; alt: string };

export type LivendiaFounder = {
  name: string;
  role: string;
  credentials: readonly string[];
  image: string;
  imageAlt: string;
  seals: readonly LivendiaFounderSeal[];
  /** Bio completa — página /equipo. */
  paragraphs: readonly string[];
  /** Bio orientada a venta, arras y gestión documental — landings comerciales. */
  ventaBio: readonly string[];
  /** Bio orientada a compra entre particulares — landings comprador. */
  compraBio: readonly string[];
};

export const LIVENDIA_FOUNDERS: readonly LivendiaFounder[] = [
  {
    name: "Arnau Martí",
    role: "Socio fundador",
    credentials: ["Abogado colegiado (ICAB)", "Gestor administrativo colegiado", "Derecho inmobiliario"],
    image: "/images/fundador-arnau.png",
    imageAlt: "Arnau Martí, socio fundador de Livendia",
    seals: [
      {
        src: "/images/sello confianza/Logo-ICAB-2023-scaled.jpg",
        alt: "Il·lustre Col·legi de l'Advocacia de Barcelona (ICAB)",
      },
      {
        src: "/images/sello confianza/banner-consejo.jpg",
        alt: "Consejo General de Colegios de Gestores Administrativos de España",
      },
    ],
    paragraphs: [
      "Arnau Martí es abogado colegiado en el Il·lustre Col·legi de l'Advocacia de Barcelona (ICAB) y gestor administrativo colegiado, con especialización en derecho inmobiliario y en la gestión de operaciones entre particulares.",
      "Lleva más de una década acompañando compradores, vendedores e inversores en operaciones donde el detalle importa: contratos de arras con garantías bien calibradas, alquileres con cláusulas LAU ajustadas al caso real, compraventas con riesgos identificados antes de firmar y revisiones documentales cuando la operación ya está en marcha.",
      "En Livendia lidera el criterio jurídico del despacho: traduce la normativa en decisiones comprensibles, anticipa escenarios de conflicto y diseña procesos que protegen al cliente sin frenar la operación. Su enfoque combina rigor de despacho con cercanía de gestor: escucha antes de redactar, explica antes de firmar y no desaparece cuando la documentación se complica.",
    ],
    ventaBio: [
      "Abogado colegiado en el ICAB y gestor administrativo colegiado. Especialista en contratos de arras con garantías bien calibradas, CCCat (621-4 a 621-9) y revisión documental cuando la venta ya está en marcha.",
      "En operaciones entre particulares lidera el criterio jurídico del pack: coherencia entre señal, arras y documentación hasta notaría — sin cláusulas genéricas que den margen al comprador para pedir rebaja.",
    ],
    compraBio: [
      "Abogado colegiado en el ICAB y gestor administrativo colegiado. Revisa arras y reservas desde la perspectiva del comprador: cargas, plazos de hipoteca y cláusulas CCCat antes de que ingreses la señal.",
      "En compras entre particulares traduce riesgos registrales y de comunidad a decisiones concretas — qué negociar, qué condicionar y qué no firmar sin documentación completa.",
    ],
  },
  {
    name: "Daniel Hernández",
    role: "Socio fundador",
    credentials: ["API colegiado", "Gestor administrativo", "+15 años en el sector inmobiliario"],
    image: "/images/fundador-daniel.png",
    imageAlt: "Daniel Hernández, socio fundador de Livendia",
    seals: [
      {
        src: "/images/sello confianza/api.jpg",
        alt: "Asociación Profesional Inmobiliaria (API)",
      },
      {
        src: "/images/sello confianza/banner-consejo.jpg",
        alt: "Consejo General de Colegios de Gestores Administrativos de España",
      },
    ],
    paragraphs: [
      "Daniel Hernández es Agente de la Propiedad Inmobiliaria (API) colegiado y gestor administrativo, con más de quince años de experiencia en compraventas, alquileres y tramitación inmobiliaria.",
      "Domina la redacción de contratos de alquiler y de compraventa, la preparación documental previa a la firma y el acompañamiento integral de compradores y vendedores: desde la revisión de garantías y plazos hasta la coordinación con notaría, registro, entidades financieras y terceros implicados en la operación.",
      "En Livendia aplica ese recorrido para que cada expediente avance con orden: documentación completa, cláusulas adaptadas al caso concreto y un interlocutor identificable que explica cada paso. Su objetivo es que compres o vendas con todas las garantías, sin sorpresas de última hora ni procesos a medias.",
    ],
    ventaBio: [
      "Agente de la Propiedad Inmobiliaria (API) colegiado y gestor administrativo, con más de quince años en compraventas y tramitación inmobiliaria entre particulares.",
      "Coordina redacción de arras, preparación documental post-arras y seguimiento con notaría, registro y entidades financieras. Interlocutor identificable: no desaparece cuando la comunidad tarda o el banco pide más papeles.",
    ],
    compraBio: [
      "Agente de la Propiedad Inmobiliaria (API) colegiado y gestor administrativo, con más de quince años acompañando compradores en operaciones entre particulares y con agencia solo del vendedor.",
      "Coordina due diligence, revisión de contratos del vendedor, calendario con banco y notaría. Interlocutor fijo por WhatsApp: no desaparece cuando la ITE tarda o el vendedor presiona para firmar arras.",
    ],
  },
] as const;
