import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";

export type VentaPisoParticularBarrio = { name: string; description: string };

export type VentaPisoParticularSeoContent = {
  heroSubtitle: string;
  heroProblemLine: string;
  introParagraphs: readonly string[];
  localHeading: string;
  localParagraphs: readonly string[];
  barriosIntro: string;
  barrios: readonly VentaPisoParticularBarrio[];
  casuistica: readonly { title: string; body: string }[];
  commonMistakesLocal: readonly { title: string; body: string }[];
  precioMedio: number;
  faqLocal: readonly { question: string; answer: string }[];
};

function faqExtended(city: string): VentaPisoParticularSeoContent["faqLocal"] {
  return [
    {
      question: "¿Qué pasa si el comprador no consigue la hipoteca?",
      answer: `Si redactamos cláusula conforme al art. 621-49 CCCat, el comprador puede desistir en los términos pactados sin perder indebidamente la señal. Sin esa cláusula, el conflicto recae sobre las arras penitenciales. Tu gestor en ${city} lo incluye cuando la operación depende de financiación.`,
    },
    {
      question: "¿Quién paga la plusvalía municipal al vender?",
      answer:
        "El vendedor. Livendia no liquida la plusvalía, pero te orienta sobre plazos de presentación en el ayuntamiento correspondiente y qué documentación necesitas para la escritura.",
    },
    {
      question: "¿Puedo elegir la notaría para firmar?",
      answer:
        "Sí, vendedor y comprador acordáis notaría. Tu gestor prepara la documentación para la que elijáis, en el municipio que corresponda.",
    },
    {
      question: "¿Qué impuestos paga el vendedor en una compraventa entre particulares?",
      answer:
        "Principalmente plusvalía municipal (IIVTNU) e, en su caso, IRPF si hay ganancia patrimonial. El ITP lo paga el comprador. Te orientamos sobre plazos; la declaración fiscal la realiza el vendedor o su asesor.",
    },
    {
      question: "¿Cuánto tarda realmente una venta entre particulares hasta notaría?",
      answer: `En ${city} y el área metropolitana, lo habitual son 6 a 12 semanas desde arras hasta escritura, según hipoteca del comprador, cancelación de hipoteca del vendedor y velocidad de la comunidad. Tu gestor fija calendario realista desde la primera llamada.`,
    },
    {
      question: "¿Qué diferencia hay entre arras penitenciales y confirmatorias?",
      answer:
        "Las penitenciales permiten desistir perdiendo o recuperando la señal según CCCat (621-4); las confirmatorias vinculan más a las partes. Tu gestor te explica cuál conviene en tu operación antes de firmar.",
    },
    {
      question: "¿Puedo vender si tengo hipoteca pendiente?",
      answer:
        "Sí. El gestor coordina certificado de deuda del banco y cancelación en notaría el mismo día de la venta, alineado con lo pactado en arras.",
    },
    {
      question: "¿Qué documentos debe aportar el vendedor frente al comprador?",
      answer:
        "Nota simple, escrituras, certificado energético, cédula de habitabilidad, certificado de deuda de comunidad, IBI, y documentación de cancelación de hipoteca si aplica. Tu gestor genera checklist exacto y persigue cada certificado.",
    },
    {
      question: "¿Livendia me representa en notaría?",
      answer:
        "No comparecemos en tu lugar. Preparamos toda la documentación y resolvemos incidencias previas para que tú firmes con seguridad.",
    },
    {
      question: "¿Puedo contratar solo para revisar un borrador de arras?",
      answer: `Sí. Si solo necesitas revisión o redacción de arras, existe el servicio de contrato de arras local por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL}. El servicio completo (${SERVICIO_COMPLETO_CV_PRICE_LABEL}) cubre arras más toda la gestión hasta escritura.`,
    },
  ] as const;
}

function faqCore(city: string): VentaPisoParticularSeoContent["faqLocal"] {
  return [
    {
      question: `¿Livendia busca comprador para mi piso en ${city}?`,
      answer:
        "No. No somos inmobiliaria ni portal de anuncios. Nuestro servicio empieza cuando tú ya has encontrado comprador particular y necesitas un gestor inmobiliario que coordine arras, documentación y firma en notaría.",
    },
    {
      question: `¿Cuánto cuesta vender entre particulares con Livendia en ${city}?`,
      answer: `El servicio completo de acompañamiento cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, tarifa plana. No cobramos comisión sobre el precio de venta. Frente a un 3–5 % de agencia, el ahorro en una vivienda media de ${city} suele superar los 6.000–15.000 €.`,
    },
    {
      question: "¿Qué incluye exactamente el servicio?",
      answer:
        "Revisión de la operación, checklist documental, redacción o revisión de reserva y arras, coordinación de nota simple, comunidad, certificados, hipoteca pendiente si la hay, preparación pre-escritura y acompañamiento con gestor dedicado hasta la firma. Plusvalía e IRPF del vendedor no están incluidos, pero te orientamos.",
    },
    {
      question: `¿Puedo contratar si aún no he firmado arras en ${city}?`,
      answer:
        "Sí, y es lo ideal. Cuanto antes intervenga el gestor, más margen hay para redactar contratos equilibrados y obtener documentación de comunidad o banco sin presión de plazos.",
    },
    {
      question: "¿Redactáis el contrato de arras?",
      answer: `Sí, dentro del servicio completo (${SERVICIO_COMPLETO_CV_PRICE_LABEL}). Penitenciales o confirmatorias adaptadas al Codi civil de Catalunya, incluida cláusula 621-49 si el comprador financia. También puedes contratar solo arras por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} aparte.`,
    },
    {
      question: "¿En qué se diferencia de una agencia inmobiliaria?",
      answer:
        "La agencia capta comprador y cobra comisión sobre el precio. Livendia no capta ni comisiona: somos gestoría inmobiliaria digital. Tú mantienes la venta directa; nosotros la parte legal y documental.",
    },
    {
      question: `¿Atendéis ventas en todo ${city}?`,
      answer: `Sí. El servicio es 100 % online con gestor por teléfono y panel digital. Da igual el barrio: acompañamos operaciones entre particulares en cualquier zona de ${city} con el mismo protocolo.`,
    },
    {
      question: "¿Cuánto tarda el proceso hasta notaría?",
      answer:
        "Depende de arras, hipoteca del comprador y velocidad de la comunidad. Lo habitual en el área metropolitana de Barcelona es entre 6 y 12 semanas. Tu gestor fija un calendario realista desde la primera llamada.",
    },
  ] as const;
}

export const VENTA_PISO_PARTICULAR_SEO_CONTENT: Record<string, Omit<VentaPisoParticularSeoContent, never>> = {
  "hospitalet-de-llobregat": {
    precioMedio: 240_000,
    heroProblemLine:
      "Has encontrado comprador en L'Hospitalet — por Idealista, por un vecino o porque ya os conocíais. El precio está acordado. Y ahora empieza la parte que asusta: arras, comunidad, cédula, hipoteca y notaría.",
    heroSubtitle:
      "Livendia entra cuando tú ya tienes comprador. Un gestor inmobiliario especializado se asigna a tu expediente y coordina toda la gestión documental y jurídica hasta la firma — sin comisión de inmobiliaria.",
    introParagraphs: [
      "Has encontrado comprador para tu piso en L'Hospitalet — por Idealista, por recomendación o porque ya conocíais al comprador. Esa es la parte que muchos propietarios resuelven solos y bien. Lo que viene después es donde se complica: contrato de arras, certificado de deuda de la comunidad, cédula de habitabilidad, nota simple, hipoteca pendiente y coordinación con notaría. Sin gestor, descubres la lista de papeles cuando el comprador ya te presiona por fecha.",
      "Livendia no es una inmobiliaria. No publicamos tu anuncio ni buscamos comprador. Somos gestoría inmobiliaria digital para propietarios que venden entre particulares y quieren un profesional al otro lado del teléfono durante toda la operación. Por una tarifa plana de 890 € IVA incluido, un gestor se asigna a tu expediente y coordina la venta documental hasta la firma.",
      "En L'Hospitalet el mercado entre particulares es muy activo: pisos en Collblanc, Bellvitge, La Florida o el centre cambian de manos sin agencia, sobre todo cuando el precio es competitivo frente a Barcelona capital. Pero los borradores de arras suelen ser copias barcelonesas que no contemplan plazos realistas de comunidad en bloques grandes, ni la cláusula 621-49 CCCat cuando el comprador pide hipoteca. Ese desajuste es la principal causa de conflictos antes de notaría.",
      "Con Livendia mantienes el control: tú negociaste el precio, tú eliges al comprador. Nosotros traducimos el acuerdo a contratos defendibles, obtenemos documentación y te avisamos si algo no cuadra antes de que transfieras la señal o fijes fecha de escritura.",
    ],
    localHeading: "Vender entre particulares en L'Hospitalet: qué tiene de particular",
    localParagraphs: [
      "L'Hospitalet concentra edificios de gran densidad con comunidades numerosas. Conseguir el certificado de deuda cero puede tardar dos o tres semanas si el administrador está saturado — plazo que muchos vendedores particulares no anticipan cuando firman arras con fecha de notaría en un mes.",
      "Otra particularidad: muchos compradores llegan desde Barcelona y comparan precios por metro cuadrado. La operación suele cerrarse rápido en precio, pero luego el comprador exige la misma diligencia documental que esperaría en Eixample. Sin gestor, el vendedor hospitaletense improvisa trámites que en Barcelona capital haría una gestoría.",
      "Livendia acompaña ventas en todo el municipio — desde el centre y Collblanc hasta Pubilla Cases, La Torrassa o Bellvitge — con el mismo protocolo: diagnóstico, checklist, arras conforme a CCCat y seguimiento hasta notaría.",
    ],
    barriosIntro:
      "Acompañamos operaciones entre particulares en los principales núcleos de L'Hospitalet. Cada zona tiene su ritmo de venta, pero el riesgo documental es el mismo si firmas arras sin revisión profesional.",
    barrios: [
      {
        name: "Centre",
        description:
          "Operaciones en el centre y Granvia suelen ser pisos de segunda mano con compradores que ya viven en el municipio. Revisamos comunidad y cédula con especial atención a derramas de fachada en edificios rehabilitados.",
      },
      {
        name: "Collblanc",
        description:
          "Zona de alta rotación entre particulares cerca del metro. Muchas ventas sin agencia; el gestor adapta arras y plazos a operaciones con hipoteca del comprador (621-49 CCCat).",
      },
      {
        name: "Santa Eulàlia",
        description:
          "Barrio residencial con mezcla de herencias y ventas directas. Coordinamos titularidades múltiples y documentación de comunidad antes de comprometer señal.",
      },
      {
        name: "Bellvitge",
        description:
          "Cerca del hospital y campus universitario: compradores jóvenes con financiación bancaria. Clave redactar bien la cláusula de hipoteca y no perder la señal si el banco tarda.",
      },
      {
        name: "Pubilla Cases",
        description:
          "Bloques de vivienda protegida y libre conviven aquí. Verificamos restricciones o condiciones en titulo y coherencia con lo pactado al comprador particular.",
      },
      {
        name: "La Florida",
        description:
          "Ventas familiares frecuentes. El gestor explica en castellano claro las consecuencias de arras penitenciales (621-4 CCCat) antes de firmar.",
      },
      {
        name: "La Torrassa",
        description:
          "Operaciones rápidas en precio; documentación no tan rápida. Solicitamos certificados en la primera semana para no retrasar notaría.",
      },
    ],
    casuistica: [
      {
        title: "Comprador con hipoteca y arras sin 621-49",
        body: "En Bellvitge y Collblanc es habitual. Si el banco deniega el préstamo y no hay cláusula de desistimiento, el vendedor puede exigir cumplir o perder la señal. El gestor redacta el 621-49 CCCat desde el borrador inicial.",
      },
      {
        title: "Comunidad lenta en bloques de La Florida",
        body: "Administradores externos que tardan semanas. Tu gestor solicita certificado de deuda en paralelo a las arras para no encorsetar la fecha de escritura.",
      },
      {
        title: "Cédula caducada en edificios antiguos del centre",
        body: "Sin cédula de habitabilidad vigente no hay escritura en Catalunya. Lo detectamos en el checklist inicial, no la víspera de notaría.",
      },
      {
        title: "Parking o trastero no descrito igual que en registro",
        body: "Frecuente en Pubilla Cases y La Torrassa. La nota simple revela discrepancias que el comprador particular usará para renegociar si no se resuelven antes.",
      },
    ],
    faqLocal: [
      ...faqCore("L'Hospitalet de Llobregat"),
      {
        question: "¿Qué pasa si mi comprador pide hipoteca y el banco tarda?",
        answer:
          "Por eso redactamos cláusula conforme al art. 621-49 CCCat: plazo, condiciones del préstamo y efecto si no hay financiación. Protege a ambas partes y evita disputas sobre la señal en L'Hospitalet.",
      },
      {
        question: "¿Necesito cédula de habitabilidad para vender en L'Hospitalet?",
        answer:
          "Sí, en Catalunya es obligatoria para transmitir vivienda. Si está caducada, debe renovarse antes de la escritura. Tu gestor lo comprueba en la primera semana del servicio.",
      },
      {
        question: "¿Puedo vender si tengo hipoteca pendiente?",
        answer:
          "Sí. El gestor coordina certificado de deuda del banco y cancelación en notaría el mismo día de la venta, alineado con lo pactado en arras.",
      },
      {
        question: "¿Livendia sustituye al notario?",
        answer:
          "No. El notario autoriza la escritura pública. Livendia prepara la documentación, revisa contratos privados y coordina para que el día de firma no falte nada.",
      },
      {
        question: "¿Qué ahorro real tengo frente a una agencia al 3 %?",
        answer:
          "En un piso de 240.000 €, un 3 % + IVA supera los 8.700 €. Livendia cuesta 890 € IVA incl. Si ya tienes comprador, la agencia solo aportaría gestión similar a la nuestra — sin captación.",
      },
      {
        question: "¿Cómo contrato y cuándo me llaman?",
        answer:
          "Contratas online el servicio completo de venta. En 24 h laborables se asigna gestor, accedes al panel y concertáis llamada para revisar tu operación en L'Hospitalet.",
      },
      {
        question: "¿Puedo contratar solo gestión documental sin arras?",
        answer: `Si ya firmaste arras y solo necesitas documentación hasta notaría, existe el servicio de gestión documental vendedor por ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL}. Si aún no tienes arras, el servicio completo (${SERVICIO_COMPLETO_CV_PRICE_LABEL}) es lo adecuado.`,
      },
      {
        question: "¿Atendéis si el comprador trae abogado o gestor?",
        answer:
          "Sí. Coordinamos con el asesor del comprador para alinear contratos y plazos. Tu gestor Livendia defiende tus intereses como vendedor particular.",
      },
      ...faqExtended("L'Hospitalet de Llobregat"),
    ],
    commonMistakesLocal: [
      {
        title: "Arras barcelonesas sin adaptar a L'Hospitalet",
        body: "Copiar plantillas de Eixample sin plazos realistas para comunidades grandes de Bellvitge o La Florida es la causa más frecuente de retrasos antes de notaría.",
      },
      {
        title: "Subestimar el certificado de comunidad en bloques densos",
        body: "En Collblanc o Pubilla Cases, administradores saturados pueden tardar tres semanas. Firmar arras con fecha de escritura en un mes sin haber pedido el certificado es un error evitable.",
      },
    ],
  },

  "cornella-de-llobregat": {
    precioMedio: 250_000,
    heroProblemLine:
      "En Cornellà has cerrado venta con un particular — quizá de Sant Ildefons o del centre — y sientes alivio. Hasta que te piden arras mañana y no sabes si el Word que te pasaron protege tu señal.",
    heroSubtitle:
      "Tú ya tienes comprador; Livendia se encarga del resto. Gestor inmobiliario asignado, documentación en orden y acompañamiento hasta la firma en notaría por tarifa plana.",
    introParagraphs: [
      "En Cornellà cada vez más propietarios cierran venta sin agencia: el comprador llega por portal, por contacto directo o por recomendación en el barrio. Ahorras miles de euros en comisión, pero la responsabilidad documental recae en ti. Un error en las arras, un certificado de comunidad caducado o una hipoteca mal calendarizada puede costarte la operación entera.",
      "Livendia existe para ese momento. No vamos a enseñarte el piso ni a negociar el precio por ti. Vamos a ser tu gestor inmobiliario de confianza: revisar la operación, redactar o corregir contratos, pedir nota simple y certificados, hablar con la comunidad si hace falta y acompañarte hasta que firmes en notaría.",
      "Cornellà comparte con L'Hospitalet muchos patrones de mercado — pisos de segunda mano, compradores que trabajan en Barcelona y operaciones con financiación — pero con dinámica propia en Sant Ildefons, Can Mercader o el centre. Los borradores genéricos fallan cuando no reflejan el calendario real del ayuntamiento o de administradores de fincas del Baix Llobregat.",
      "Por 890 € IVA incluido tienes gestor dedicado, panel online y línea directa. Sin comisión. Sin exclusiva. Sin anuncios. Solo gestión profesional de la venta que ya has acordado.",
    ],
    localHeading: "Cornellà: venta entre particulares sin improvisar",
    localParagraphs: [
      "En Cornellà las ventas entre particulares crecieron cuando los precios subieron y las comisiones de agencia dejaron de compensar si el vendedor ya tenía comprador. El problema es que muchos propietarios confunden 'no necesito agencia' con 'no necesito gestor'. Son cosas distintas: la agencia capta; el gestor protege la operación.",
      "Can Mercader y Sant Ildefons concentran operaciones con reforma pendiente o herencia. Es frecuente que varios propietarios firmen arras sin haber verificado titularidad conjunta o sin acuerdo sobre quién comparece en notaría. Livendia ordena esos puntos antes de la señal.",
      "Trabajamos con vendedores de toda Cornellà — centre, Riera, Almeda, Fontsanta, Gavarra — con protocolo idéntico al de Barcelona capital, adaptado a plazos y documentación del municipio.",
    ],
    barriosIntro:
      "Gestor Livendia para ventas entre particulares en los barrios donde más operaciones cerramos en Cornellà de Llobregat:",
    barrios: [
      {
        name: "Centre",
        description:
          "Operaciones en el centre y alrededors de la Rambla con compradores locales. Revisión de ITE del edificio y estado de la comunidad en bloques de los 70.",
      },
      {
        name: "Riera",
        description:
          "Zona consolidada con mezcla de pisos y locales. Verificamos que el objeto en arras coincide con registro y catastro.",
      },
      {
        name: "Almeda",
        description:
          "Ventas rápidas entre particulares; documentación menos rápida. Certificado de deuda se solicita en la semana 1.",
      },
      {
        name: "Fontsanta",
        description:
          "Barrio residencial con operaciones familiares. El gestor explica arras penitenciales vs confirmatorias en la llamada inicial.",
      },
      {
        name: "Sant Ildefons",
        description:
          "Alta densidad y muchas operaciones sin agencia. Clave calibrar cláusula 621-49 cuando el comprador financia.",
      },
      {
        name: "Gavarra",
        description:
          "Proximidad industrial-residencial: compradores sensibles a cargas y derramas. Cruzamos actas de junta con certificado de comunidad.",
      },
    ],
    casuistica: [
      {
        title: "Herencia sin adjudicación reflejada en arras",
        body: "En Fontsanta y centre hay ventas de herederos. Si no todos firman o falta escritura de adjudicación, notaría para. Lo verificamos antes de arras.",
      },
      {
        title: "Derrama aprobada no mencionada al comprador",
        body: "Comprador particular que revisa actas y reclama. El gestor exige transparencia en contrato y certificados desde el inicio.",
      },
      {
        title: "Reforma prometida verbalmente",
        body: "En Sant Ildefons algunos vendedores pactan dejar obra hecha. Sin cláusula escrita, conflicto garantizado. Lo traducimos a hitos en arras o compraventa.",
      },
      {
        title: "Energético caducado en pisos largo tiempo en venta",
        body: "Validez 10 años. Sin certificado vigente no hay escritura. Detectado en checklist, no el día de firma.",
      },
    ],
    faqLocal: [
      ...faqCore("Cornellà de Llobregat"),
      {
        question: "¿Vale la pena Livendia si ya tengo abogado de confianza?",
        answer:
          "Livendia complementa: gestor inmobiliario especializado en checklist documental, comunidad, registros y coordinación práctica con notaría. Si tu abogado revisa contratos, nosotros aceleramos la obtención de certificados y el seguimiento operativo.",
      },
      {
        question: "¿Redactáis reserva antes de arras?",
        answer:
          "Sí, si lo necesitas. Reserva con señal, plazos y condiciones coherentes con la compraventa definitiva en Cornellà.",
      },
      {
        question: "¿Qué ocurre si el comprador se echa atrás después de arras?",
        answer:
          "Depende del tipo de arras (621-4 a 621-9 CCCat). Por eso calibramos penitenciales o confirmatorias antes de firmar — para que las consecuencias sean claras y justas.",
      },
      {
        question: "¿Intervenís en la negociación del precio?",
        answer:
          "No. El precio lo acordáis vendedor y comprador. Intervenimos en la parte legal y documental de ese acuerdo.",
      },
      {
        question: "¿Cuánto tarda la comunidad en Cornellà?",
        answer:
          "Entre 5 y 20 días según tamaño del bloque y administrador. Por eso no fijamos fecha de notaría sin certificado encargado.",
      },
      {
        question: "¿Ofrecéis presencia física en Cornellà?",
        answer:
          "El servicio es digital con gestor por teléfono y panel. No hace falta desplazarte a una oficina; sí compareces en notaría el día de firma.",
      },
      {
        question: "¿Puedo vender piso alquilado con inquilino?",
        answer:
          "Sí, con matices de contrato de arrendamiento y vacante. Tu gestor revisa LAU y plazos de entrega al comprador particular.",
      },
      {
        question: "¿Enlazáis con contrato de arras solo si no contrato el servicio completo?",
        answer: `Sí. Arras sueltas por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} en Cornellà si solo necesitas ese trámite. Para venta integral hasta notaría, servicio completo ${SERVICIO_COMPLETO_CV_PRICE_LABEL}.`,
      },
      ...faqExtended("Cornellà de Llobregat"),
    ],
    commonMistakesLocal: [
      {
        title: "Herencia sin adjudicación antes de arras",
        body: "En Fontsanta o el centre, vender sin que todos los herederos figuren correctamente en contrato frena la operación en notaría.",
      },
      {
        title: "Ocultar derramas aprobadas al comprador",
        body: "En Gavarra o Sant Ildefons es habitual encontrar derramas de fachada en actas recientes. El comprador particular las descubre y reclama.",
      },
    ],
  },

  "esplugues-de-llobregat": {
    precioMedio: 340_000,
    heroProblemLine:
      "En Esplugues has encontrado comprador — a menudo en Finestrelles, Can Clota o cerca de Ciudad Diagonal — y el ahorro de no pagar comisión de agencia es enorme. Pero una operación de 350.000 € mal documentada puede costarte mucho más que esos miles.",
    heroSubtitle:
      "Livendia actúa cuando el acuerdo ya está hecho: gestor inmobiliario especializado, gestión documental completa y acompañamiento humano hasta la entrega de llaves.",
    introParagraphs: [
      "Esplugues combina perfil residencial de alto poder adquisitivo con ventas directas entre particulares — sobre todo cuando el vendedor ya conoce al comprador o cuando el piso no necesita marketing agresivo. En Can Clota, Finestrelles o Ciudad Diagonal, una comisión del 3 % puede superar fácilmente los 10.000 € sin aportar valor si el comprador ya está.",
      "Livendia cubre el vacío entre 'vendo solo' y 'pago agencia'. Asignamos gestor inmobiliario a tu expediente: alguien que ha visto cientos de operaciones entre particulares y sabe qué documentos pide notaría en Catalunya, qué cláusulas equilibran arras y qué plazos son realistas cuando hay hipoteca de por medio.",
      "No publicamos anuncios. No hacemos visitas comerciales. No cobramos porcentaje sobre tu precio. Coordinamos la venta documental que tú ya has cerrado en términos económicos con tu comprador.",
      "Esplugues tiene particularidades urbanísticas y de edificio — zonas cerca de Ciudad Diagonal, chalets adosados en Can Clota, comunidades pequeñas en La Plana — que exigen checklist distinto al de un piso estándar en Barcelona. Por eso cada operación tiene gestor dedicado, no plantilla automática.",
    ],
    localHeading: "Esplugues: cuando el comprador ya está, falta la gestión",
    localParagraphs: [
      "En Esplugues muchos vendedores llegan a Livendia tras semanas negociando con un comprador concreto — a menudo profesional de la zona o familia ampliada — y quieren cerrar sin meter una agencia que pida exclusiva o renegocie condiciones.",
      "El nivel de precio medio eleva el impacto de una comisión tradicional. Ahorrar 12.000–18.000 € en comisión manteniendo gestión profesional es la propuesta de valor central en Esplugues.",
      "Acompañamos ventas en todo el municipio: desde el centre histórico hasta Finestrelles, Can Clota, La Plana y entorno de Ciudad Diagonal, con revisión registral rigurosa en pisos con parking y trastero incluidos.",
    ],
    barriosIntro:
      "Operaciones entre particulares en Esplugues de Llobregat donde Livendia actúa como gestor inmobiliario de referencia:",
    barrios: [
      {
        name: "Can Clota",
        description:
          "Zona de chalets y adosados con operaciones de ticket alto entre particulares conocidos. Aquí revisamos con especial rigor parcela, lindes, anejos y coherencia entre catastro y registro — un error en arras sobre qué se transmite puede tumbar la venta en notaría.",
      },
      {
        name: "La Plana",
        description:
          "Barrio residencial tranquilo donde muchas ventas van sin agencia entre vecinos. Comunidades más pequeñas permiten certificados más ágiles, pero el comprador suele ser exigente: el gestor adelanta energético, cédula e ITE antes de fijar señal.",
      },
      {
        name: "Finestrelles",
        description:
          "Ventas directas muy frecuentes entre conocidos del trabajo o del barrio. El gestor formaliza lo pactado verbalmente en contratos ejecutables y explica al comprador y al vendedor qué pasa con la señal si el banco tarda.",
      },
      {
        name: "Centre",
        description:
          "Núcleo urbano de Esplugues con pisos de segunda mano e edificios que exigen ITE y cédula al día. Coordinamos con notarías del Baix Llobregat y adaptamos plazos de comunidad al calendario real de la operación.",
      },
      {
        name: "Ciudad Diagonal",
        description:
          "Operaciones con compradores profesionales y financiación compleja. Cláusula 621-49 CCCat redactada con precisión; parking y trastero incluidos en registro se verifican antes de arras.",
      },
    ],
    casuistica: [
      {
        title: "Parking subterráneo con titulo separado",
        body: "En Finestrelles y Ciudad Diagonal es habitual. Hay que describir en arras y escritura futura qué se transmite y verificar registro.",
      },
      {
        title: "Comprador que exige auditoría documental previa",
        body: "Profesionales que piden informe completo antes de señal. Livendia adelanta checklist y semáforo documental.",
      },
      {
        title: "Cancelación hipoteca same-day",
        body: "Vendedor con préstamo pendiente y comprador con prisa. Coordinación banco-notaría crítica; el gestor lleva el calendario.",
      },
      {
        title: "Obra menor sin licencia reflejada",
        body: "Reformas en Can Clota o centre. Riesgo urbanístico si no consta en documentación; lo señalamos antes de arras.",
      },
    ],
    faqLocal: [
      ...faqCore("Esplugues de Llobregat"),
      {
        question: "¿Es Esplugues un mercado distinto al de Barcelona capital?",
        answer:
          "Precio medio más alto y compradores más exigentes, pero la normativa de transmisión es la misma (CCCat, cédula, energético). La diferencia está en el ticket y en la complejidad registral, no en el trámite.",
      },
      {
        question: "¿Tenéis landing de arras en Esplugues?",
        answer: `Contrato de arras específico en Barcelona capital y área metro; para Esplugues usamos el servicio completo (${SERVICIO_COMPLETO_CV_PRICE_LABEL}) que incluye arras, o arras en Barcelona / metro si solo necesitas ese paso por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL}.`,
      },
      {
        question: "¿Qué pasa si vendo y compro a la vez?",
        answer:
          "Coordinamos plazos de tu venta en Esplugues con la compra que tengas pendiente: arras, hitos y fechas alineadas cuando es posible.",
      },
      {
        question: "¿El comprador puede pagar parte en B?",
        answer:
          "Aspectos fiscales y de blanqueo los debe validar notario y asesor. Nosotros reflejamos el precio pactado en contratos privados de forma coherente con la escritura.",
      },
      {
        question: "¿Revisáis estatutos de comunidad?",
        answer:
          "Sí, cuando hay dudas sobre uso turístico, actividad o limitaciones de obra. Cruzamos con certificado y actas recientes.",
      },
      {
        question: "¿Cuánto ahorro en un piso de 400.000 €?",
        answer:
          "Un 3 % + IVA ronda los 14.520 €. Livendia: 890 € IVA incl. La diferencia financia la gestión profesional y te sobra ahorro significativo.",
      },
      {
        question: "¿Puedo hablar con el gestor antes de pagar?",
        answer:
          "Contratas online, pero puedes escribir por WhatsApp o contacto previo. Tras pago, llamada de diagnóstico incluida.",
      },
      ...faqExtended("Esplugues de Llobregat"),
    ],
    commonMistakesLocal: [
      {
        title: "No describir parking en arras en Finestrelles o Ciudad Diagonal",
        body: "Plazas de garaje con título registral separado deben figurar expresamente en contrato. Si no, el comprador puede exigir ajuste de precio en notaría.",
      },
      {
        title: "Confiar en acuerdos verbales en Can Clota",
        body: "Reformas, muebles incluidos o plazos de obra pactados de palabra sin cláusula escrita generan conflictos costosos en operaciones de ticket alto.",
      },
    ],
  },

  sabadell: {
    precioMedio: 260_000,
    heroProblemLine:
      "En Sabadell has encontrado comprador — en Creu Alta, el centre o Can Rull — y quieres cerrar sin regalar miles en comisión. Pero las arras, la herencia o la hipoteca del comprador pueden complicarlo todo si nadie coordina.",
    heroSubtitle:
      "Livendia entra cuando ya hay acuerdo entre particulares. Tu gestor inmobiliario especializado gestiona arras, documentación y notaría hasta que firmes con tranquilidad.",
    introParagraphs: [
      "Sabadell mueve un volumen importante de compraventas entre particulares en el Vallès Occidental: herencias en Creu Alta, pisos en el centre, operaciones familiares en Can Rull o Gràcia del Vallès. Muchos propietarios encuentran comprador por boca a boca o por portal, evitan agencia, y se encuentran solos frente a arras, comunidad y notaría.",
      "Livendia no sustituye tu acuerdo con el comprador — lo protege. Un gestor inmobiliario se asigna a tu caso, revisa si el calendario es viable, redacta contratos conforme al Codi civil de Catalunya y persigue certificados mientras tú sigues con tu vida.",
      "En Sabadell aparecen casuísticas de herencia múltiple, pisos con varios propietarios y operaciones con hipoteca del comprador que tarda más de lo previsto. Sin cláusula 621-49 CCCat bien redactada, la señal se convierte en conflicto. Sin certificado de comunidad a tiempo, el comprador amenaza con desistir.",
      "Tarifa plana 890 € IVA incluido. Sin exclusiva. Sin comisión. Gestor dedicado hasta la firma.",
    ],
    localHeading: "Sabadell: gestión profesional sin perder la venta directa",
    localParagraphs: [
      "El mercado sabadellense mezcla compradores locales y familias que llegan desde Terrassa o Barcelona por precio. La venta entre particulares funciona bien en precio; falla en papeles cuando nadie coordina.",
      "Creu Alta y el centre concentran edificios con ITE y derramas. Can Rull y Ca n'Oriac tienen operaciones con parking y trastero. Livendia adapta checklist a cada inmueble.",
      "Acompañamos vendedores en todo Sabadell con el mismo estándar Livendia: panel digital, informe de estado documental y teléfono directo con tu gestor.",
    ],
    barriosIntro:
      "Barrios de Sabadell donde acompañamos ventas entre particulares con gestor asignado:",
    barrios: [
      {
        name: "Centre",
        description:
          "Operaciones en el centre y Eixample sabadellense. Edificios centenarios con revisión de ITE y cargas.",
      },
      {
        name: "Creu Alta",
        description:
          "Herencias y ventas familiares frecuentes. Coordinación de titularidades y arras confirmatorias.",
      },
      {
        name: "Can Rull",
        description:
          "Zona residencial con compradores con hipoteca. Cláusula 621-49 y plazos bancarios en contrato.",
      },
      {
        name: "Gràcia",
        description:
          "Ventas directas sin agencia; documentación de comunidad a veces lenta. Solicitud temprana de certificados.",
      },
      {
        name: "Ca n'Oriac",
        description:
          "Mezcla de pisos unifamiliares en finca. Verificación de elementos comunes y cuotas.",
      },
      {
        name: "Can Llong",
        description:
          "Operaciones con compradores del Vallès. Calendario realista hasta notaría de Terrassa o Sabadell.",
      },
    ],
    casuistica: [
      {
        title: "Tres hermanos venden y uno no firma arras",
        body: "Frecuente en Creu Alta. Sin todos los titulares, la operación se para. Ordenamos comparecientes antes de señal.",
      },
      {
        title: "Comprador de Terrassa con financiación lenta",
        body: "Plazos cruzados entre municipios. Cláusula 621-49 evita penalizar al comprador si el banco falla.",
      },
      {
        title: "ITE con deficiencias en edificio del centre",
        body: "Notario puede exigir subsanación. Detectado en semana 1, no a las 48 h de firma.",
      },
      {
        title: "Plusvalía y fecha de escritura",
        body: "Orientamos sobre presentación municipal; la liquidación es responsabilidad del vendedor con su asesor fiscal.",
      },
    ],
    faqLocal: [
      ...faqCore("Sabadell"),
      {
        question: "¿Notaría en Sabadell o en otro municipio?",
        answer:
          "Puedes firmar en la notaría que acordéis. Tu gestor prepara documentación independientemente del notario elegido.",
      },
      {
        question: "¿Intervenís si el comprador es de Terrassa o Barcelona?",
        answer:
          "Sí. Lo relevante es la ubicación del inmueble en Sabadell y la normativa catalana aplicable.",
      },
      {
        question: "¿Qué es el art. 621-49 y por qué importa en Sabadell?",
        answer:
          "Regula desistimiento del comprador si no obtiene hipoteca en plazo pactado. En Sabadell, donde muchas operaciones van financiadas, evita que pierda la señal por causas ajenas.",
      },
      {
        question: "¿Gestionáis la plusvalía municipal?",
        answer:
          "No incluida en el servicio. Te orientamos sobre plazos; la declaración la realiza el vendedor o su gestor fiscal.",
      },
      {
        question: "¿Puedo vender si estoy en el extranjero?",
        answer:
          "Sí, con poder notarial para firma si no puedes comparecer. Te indicamos requisitos; la escritura requiere presencia o apoderado.",
      },
      {
        question: "¿Hay permanencia o exclusiva con Livendia?",
        answer: "No. Contratas el servicio para esta operación. Sin exclusiva de venta ni captación.",
      },
      {
        question: "¿Qué diferencia hay con contratar solo gestión documental?",
        answer: `Gestión documental (350 €) empieza tras arras firmadas. Servicio completo (890 €) incluye reserva, arras y coordinación integral — lo habitual si aún no has formalizado contratos.`,
      },
      {
        question: "¿Enlazáis con arras en Sabadell?",
        answer: `Sí, tenemos landing de contrato de arras en Sabadell por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} si solo necesitas ese trámite.`,
      },
      ...faqExtended("Sabadell"),
    ],
    commonMistakesLocal: [
      {
        title: "Vender piso en herencia sin todos los titulares",
        body: "En Creu Alta y el centre es frecuente. Si un hermano no firma arras o no comparece en notaría, la operación se para.",
      },
      {
        title: "Calendario imposible por hipoteca del comprador",
        body: "Compradores del Vallès con financiación lenta necesitan cláusula 621-49; sin ella, la señal queda en riesgo si el banco deniega.",
      },
    ],
  },

  terrassa: {
    precioMedio: 250_000,
    heroProblemLine:
      "En Terrassa ya tienes comprador — quizá en Sant Pere, Les Arenes o Ca n'Aurell — y la parte difícil empieza ahora: papeles, arras y la presión de una fecha de notaría que quizá no es realista.",
    heroSubtitle:
      "Tú cierras la venta directa; Livendia asegura el camino hasta la firma. Gestor inmobiliario asignado, acompañamiento continuo y gestión documental completa.",
    introParagraphs: [
      "Terrassa tiene un mercado activo de venta entre particulares: pisos en Sant Pere, Les Arenes, Ca n'Aurell o Can Palet cambian de manos sin agencia cuando el vendedor ya tiene comprador — a menudo vecino, familiar o contacto de trabajo en el Vallès.",
      "El error más caro no es no vender; es vender mal documentado. Arras penitenciales mal explicadas, cédula caducada, certificado de comunidad que tarda un mes o hipoteca del vendedor mal calendarizada pueden tumbar una operación que en precio ya estaba cerrada.",
      "Livendia entra ahí. No somos inmobiliaria. No cobramos comisión. Asignamos gestor inmobiliario especializado que habla contigo, revisa tu operación en Terrassa y lleva el hilo hasta notaría.",
      "890 € IVA incluido por toda la gestión de venta documental. Tú mantienes la relación directa con tu comprador; nosotros la capa profesional que evita sorpresas.",
    ],
    localHeading: "Terrassa: venta directa con respaldo profesional",
    localParagraphs: [
      "En Terrassa conviven pisos de barrio obrero rehabilitado, áticos en el centre y chalets en Les Fonts. Cada tipología arrastra documentación distinta: ITE en edificios antiguos del centre, herencias en Sant Pere, operaciones con dos propietarios en Can Palet.",
      "Muchos vendedores terrassencs comparan con Terrassa la comisión que les pidió una agencia 'solo por papeles' y buscan alternativa. Livendia es esa alternativa cuando el comprador ya está.",
      "Cubrimos todo el municipio — centre, Ca n'Aurell, Sant Pere, Les Arenes, Can Palet, Vallparadís — con gestor asignado y seguimiento en panel online.",
    ],
    barriosIntro:
      "Zonas de Terrassa donde Livendia acompaña vendedores particulares con comprador ya encontrado:",
    barrios: [
      {
        name: "Centre",
        description:
          "Operaciones en el centre histórico y Vallparadís. Edificios con ITE y protección patrimonial a verificar.",
      },
      {
        name: "Ca n'Aurell",
        description:
          "Ventas familiares y entre particulares con plazos ajustados. Arras con calendario documental realista.",
      },
      {
        name: "Sant Pere",
        description:
          "Barrio consolidado; operaciones con hipoteca del comprador. Cláusula 621-49 CCCat en borrador inicial.",
      },
      {
        name: "Les Arenes",
        description:
          "Proximidad FGC y compradores pendulares Barcelona-Terrassa. Coordinación de fechas y financiación.",
      },
      {
        name: "Can Palet",
        description:
          "Pisos con reformas recientes. Verificación de licencias y coherencia con lo declarado al comprador.",
      },
      {
        name: "Vallparadís",
        description:
          "Entorno parque y vivienda mixta. Revisión de anejos y cuotas de comunidad.",
      },
    ],
    casuistica: [
      {
        title: "Arras confirmatorias mal identificadas",
        body: "Texto que mezcla penitenciales y confirmatorias. En Sant Pere y centre genera demandas. El gestor unifica criterio CCCat.",
      },
      {
        title: "Comprador que pide entrega inmediata tras arras",
        body: "Sin escritura no hay entrega legal. Plazos en contrato alineados con documentación y notaría.",
      },
      {
        title: "Certificado energético de hace 11 años",
        body: "Caducado. Renovación antes de transmitir; gestionado en checklist inicial.",
      },
      {
        title: "Vendedor con usufructo o nuda propiedad",
        body: "Operaciones familiares en Ca n'Aurell. Todos los titulares y derechos deben reflejarse antes de arras.",
      },
    ],
    faqLocal: [
      ...faqCore("Terrassa"),
      {
        question: "¿Terrassa tiene requisitos distintos a Sabadell?",
        answer:
          "Mismo marco catalán (CCCat, cédula, energético). Plazos de comunidad y notarías locales pueden variar; tu gestor adapta calendario.",
      },
      {
        question: "¿Puedo vender piso de protección oficial entre particulares?",
        answer:
          "Depende de titulo y normativa de vivienda protegida. Revisamos restricciones en nota simple y te orientamos antes de arras.",
      },
      {
        question: "¿Qué pasa si el comprador quiere entrada antes de escritura?",
        answer:
          "Legalmente la posesión suele ser tras escritura salvo pacto arrendaticio temporal. Te asesoramos para no ceder llaves sin cobertura contractual.",
      },
      {
        question: "¿Incluye revisión del contrato de la agencia del comprador?",
        answer:
          "Sí, si el comprador trae borrador. Analizamos cláusulas desequilibradas para el vendedor en Terrassa.",
      },
      {
        question: "¿Cuánto tarda una venta típica en Terrassa?",
        answer:
          "Entre 8 y 12 semanas desde arras hasta escritura, según hipoteca y comunidad. Sin arras aún, añade 1-2 semanas de redacción y negociación contractual.",
      },
      {
        question: "¿Trabajáis con notarías de Terrassa?",
        answer:
          "Preparamos documentación para la notaría que elijas en Terrassa o alrededores; no imponemos notario concreto.",
      },
      {
        question: "¿Enlazáis con arras en Terrassa?",
        answer: `Sí, landing específica de contrato de arras en Terrassa (${CONTRATO_ARRAS_LOCAL_PRICE_LABEL}) si solo necesitas ese paso.`,
      },
      {
        question: "¿Por qué no usar solo plantillas de internet?",
        answer:
          "Porque en Terrassa, como en toda Catalunya, arras mal redactadas y ausencia de 621-49 son la primera causa de pérdida de señal o conflicto pre-notaría. Un gestor cuesta menos que un litigio.",
      },
      ...faqExtended("Terrassa"),
    ],
    commonMistakesLocal: [
      {
        title: "Confundir arras penitenciales y confirmatorias en el centre",
        body: "En Sant Pere y el centre histórico, textos ambiguos generan demandas. El gestor unifica criterio CCCat antes de firmar.",
      },
      {
        title: "Prometer entrega de llaves antes de escritura",
        body: "Sin protección contractual, ceder posesión antes de cobrar es un riesgo grave para el vendedor particular.",
      },
    ],
  },
};

export function getVentaPisoParticularSeoContent(slug: string): VentaPisoParticularSeoContent | undefined {
  return VENTA_PISO_PARTICULAR_SEO_CONTENT[slug];
}
