import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

/** Copy y keywords únicos por ciudad — venta entre particulares. */
export const VENTA_LOCAL_DIFFERENTIATION: Record<string, LocalCityLandingFields> = {
  madrid: {
    keywords: [
      "vender piso entre particulares madrid",
      "gestor venta vivienda madrid sin agencia",
      "tramites vender piso particular madrid",
      "vender piso retiro chamberi sin inmobiliaria",
      "contrato arras vendedor madrid",
      "servicio completo venta piso madrid",
    ],
    heroBadge: "Venta entre particulares · Madrid",
    heroH1: "Vende en Madrid con comprador particular — gestor legal, no agencia del 3 %",
    metaTitle: "Vender piso entre particulares en Madrid | Gestor venta Livendia",
    metaDescription:
      "¿Vendes en Madrid con comprador ya encontrado? Gestor legal: reserva, arras, trámites y notaría. 890 € IVA incl. Sin comisión sobre el precio de venta.",
    heroBullets: [
      "Chamberí, Salamanca, Tetuán, Vallecas, cinturón sur",
      "Tabla de ahorro vs. comisión 3–5 % en precios madrileños",
      "Plusvalía municipal y calendario de escritura coordinados",
    ],
    whyTitle: "Vender en Madrid sin regalar miles en comisión",
    whySubtitle:
      "Si ya tienes comprador, el riesgo está en la documentación y en las arras — no en el cartel de venta. Livendia cubre el tramo legal con gestor fijo.",
    localZonesHeading: "Zonas donde gestionamos ventas entre particulares",
    localZones:
      "Operaciones en distritos céntricos, ensanche norte, periferia consolidada y municipios del cinturón (Móstoles, Getafe, Leganés) con el mismo checklist pre-escritura.",
    localBenefits: [
      {
        title: "Reserva y arras que protegen al vendedor",
        description:
          "Redactamos penalizaciones, plazos de desistimiento y señal coherentes con el precio pactado en un mercado donde el comprador suele llevar prisa.",
      },
      {
        title: "Comunidad y nota simple antes de arras",
        description:
          "Verificamos derramas, cargas y certificado de estar al corriente para que no aparezcan sorpresas días antes de notaría.",
      },
      {
        title: "Ahorro visible frente a agencia",
        description:
          `En un piso de 400.000 €, el 3 % son 12.000 € + IVA. Livendia: ${SERVICIO_COMPLETO_CV_PRICE_LABEL} fijos.`,
      },
      {
        title: "Coordinación con comprador y banco",
        description:
          "Mediamos hitos sin sustituirte: tú decides precio y plazos; el gestor ordena la documentación.",
      },
      {
        title: "Orientación plusvalía e impuestos vendedor",
        description:
          "Te indicamos plazos y documentación municipal sin confundirlo con honorarios de agencia.",
      },
      {
        title: "Panel y WhatsApp con un gestor",
        description: "Sin call center: misma persona desde la reserva hasta la firma.",
      },
    ],
  },
  barcelona: {
    keywords: [
      "vender piso entre particulares barcelona",
      "venta particular a particular barcelona",
      "gestor venta piso barcelona sin agencia",
      "vender piso eixample gracia sin inmobiliaria",
      "tramites venta particular hospitalet",
      "servicio completo venta barcelona 890",
    ],
    heroBadge: "Venta entre particulares · Barcelona",
    heroH1: "Vende en Barcelona entre particulares — gestoría, no comisión del 5 %",
    metaTitle: "Vender piso entre particulares en Barcelona | Gestor Livendia",
    metaDescription:
      "Venta en Eixample, Gràcia, Poblenou o área metropolitana con comprador particular. Reserva, arras y escritura. 890 € IVA incl.",
    heroBullets: [
      "Edificios con ITE, locales y pisos turísticos mal definidos",
      "Contratos en castellano/catalán revisados por gestor",
      "Idealista, recomendación o comprador que ya tienes",
    ],
    whyTitle: "Barcelona: precios altos, contratos complejos",
    whySubtitle:
      "Un error en arras en un piso de 450.000 € puede costar más que años de comisión de agencia. Livendia blinda la venta cuando tú traes al comprador.",
    localZonesHeading: "Barrios y municipios de venta",
    localZones:
      "Eixample, Gràcia, Sant Martí, Sants, L'Hospitalet, Badalona, Cornellà y operaciones en área metropolitana con revisión registral y de comunidad.",
    localBenefits: [
      {
        title: "Documentación urbanística al día",
        description:
          "Cédula, ITE, licencias de obra menor en comunidad: checklist antes de que el comprador exija rebaja de precio.",
      },
      {
        title: "Arras penitenciales o confirmatorias a medida",
        description:
          "Cláusulas que reflejan si el comprador financia o paga al contado — habitual en mercado barcelonés tensionado.",
      },
      {
        title: "Sin exclusiva ni intermediación",
        description:
          "No publicamos tu piso: gestionamos el tramo legal de la venta que tú has cerrado en la visita.",
      },
      {
        title: "Comprador particular o con agencia ligera",
        description:
          "Revisamos también contratos que te pase la agencia del comprador para que no te perjudiquen.",
      },
      {
        title: "Calendario hasta notaría",
        description:
          "Coherencia entre reserva, arras y minuta de escritura en notaría catalana.",
      },
      {
        title: "Tarifa plana",
        description: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido por todo el servicio de venta.`,
      },
    ],
  },
  valencia: {
    keywords: [
      "vender piso entre particulares valencia",
      "gestor venta vivienda valencia",
      "vender piso ruzafa benimaclet sin agencia",
      "tramites venta particular valencia",
      "contrato arras vendedor valencia",
      "vender sin inmobiliaria valencia horta",
    ],
    heroBadge: "Venta entre particulares · Valencia",
    heroH1: "Vende en Valencia con comprador particular — sin comisión sobre el precio",
    metaTitle: "Vender piso entre particulares en Valencia | Gestor Livendia",
    metaDescription:
      "Vende en Ruzafa, Campanar, Benimaclet o Mislata con gestor legal. Reserva, arras y notaría. 890 € IVA incl. Ahorra comisión de agencia.",
    heroBullets: [
      "Obra nueva y reventa en l'Horta",
      "Arras copiadas de otra operación — las reescribimos",
      "Coordinación con comprador valenciano o nacional",
    ],
    whyTitle: "Valencia: vende rápido, pero no mal documentado",
    whySubtitle:
      "El comprador suele pedir 48 h para firmar reserva. Livendia revisa antes de que firmes lo que no refleja tu precio ni tus plazos.",
    localZonesHeading: "Dónde vendemos con gestor dedicado",
    localZones:
      "Ciutat Vella, Ruzafa, Benimaclet, Campanar, Malvarrosa, Mislata, Torrent, Paterna y costa cercana con el mismo protocolo Livendia.",
    localBenefits: [
      {
        title: "Protección en señal y arras",
        description:
          "Evitas penalizaciones desproporcionadas si el comprador no obtiene hipoteca en plazo razonable.",
      },
      {
        title: "Comunidad al corriente",
        description:
          "Certificados y actas para que el comprador no use derramas pendientes para renegociar en el último momento.",
      },
      {
        title: "Venta sin cartel de agencia",
        description:
          "Ideal cuando el comprador viene de Idealista, trabajo o familia.",
      },
      {
        title: "Gestor que responde al comprador",
        description:
          "El comprador pregunta al gestor; tú no pierdes tiempo en mensajes técnicos.",
      },
      {
        title: "890 € vs. miles en comisión",
        description: "En precios valencianos medios, el ahorro frente al 3 % es muy superior al coste Livendia.",
      },
      {
        title: "Hasta escritura con checklist",
        description: "Nota simple, cargas, ITE si aplica y cita en notaría coordinada.",
      },
    ],
  },
  malaga: {
    keywords: [
      "vender piso entre particulares malaga",
      "gestor venta costa del sol sin agencia",
      "vender piso teatinos torremolinos particular",
      "tramites venta segunda residencia malaga",
      "contrato arras vendedor malaga",
      "vender sin inmobiliaria malaga",
    ],
    heroBadge: "Venta entre particulares · Málaga y Costa del Sol",
    heroH1: "Vende en Málaga o en la costa con comprador particular — gestor legal fijo",
    metaTitle: "Vender piso entre particulares en Málaga | Gestor venta Livendia",
    metaDescription:
      "Vende en Teatinos, Centro, Torremolinos o la costa con comprador ya encontrado. Reserva, arras y escritura. 890 € IVA incl. Sin comisión 3–5 %.",
    heroBullets: [
      "Segunda residencia, herencia o traslado a la costa",
      "Compradores nacionales y europeos — contratos claros",
      "Comunidades con uso turístico: documentación ordenada",
    ],
    whyTitle: "Málaga: vende entre particulares en capital y costa",
    whySubtitle:
      "Muchos vendedores ya tienen comprador de Idealista o recomendación. El riesgo está en arras desequilibradas y en derramas no declaradas — no en el cartel.",
    localZonesHeading: "Zonas de venta que cubrimos",
    localZones:
      "Centro, Teatinos, El Palo, Carretera de Cádiz, Torremolinos, Rincón de la Victoria, Benalmádena y Fuengirola oriente con gestoría online y mismo precio publicado.",
    localBenefits: [
      {
        title: "Arras para comprador exigente",
        description:
          "En la costa el comprador suele pedir garantías extra: las redactamos sin frenar la operación.",
      },
      {
        title: "Segunda residencia vendida con orden",
        description:
          "Si vives fuera de Málaga, el gestor coordina comunidad y notaría sin que viajes por cada papel.",
      },
      {
        title: "Sin comisión sobre el precio",
        description:
          `En 320.000 €, el 3 % son 9.600 € + IVA. Livendia: ${SERVICIO_COMPLETO_CV_PRICE_LABEL}.`,
      },
      {
        title: "Reserva coherente con el precio pactado",
        description:
          "Señal, plazos y condiciones de salida del comprador revisados antes de ingresar.",
      },
      {
        title: "Plusvalía y tasas municipales",
        description:
          "Orientación de plazos en ayuntamiento de Málaga o municipio costero correspondiente.",
      },
      {
        title: "Un gestor para toda la venta",
        description: "WhatsApp directo y panel de documentos hasta firma en notaría.",
      },
    ],
  },
  sevilla: {
    keywords: [
      "vender piso entre particulares sevilla",
      "gestor venta vivienda sevilla",
      "vender piso triana nervion sin agencia",
      "tramites venta particular sevilla",
      "vender piso tomares dos hermanas",
      "contrato arras vendedor sevilla",
    ],
    heroBadge: "Venta entre particulares · Sevilla",
    heroH1: "Vende en Sevilla con comprador particular — gestoría a 890 €, no 3 % de comisión",
    metaTitle: "Vender piso entre particulares en Sevilla | Gestor venta Livendia",
    metaDescription:
      "Vende en Triana, Nervión, Los Remedios o área metropolitana con comprador particular. Reserva, arras y notaría. 890 € IVA incl.",
    heroBullets: [
      "Patrimonio histórico: comunidad y licencias revisadas",
      "Comprador de Idealista o conocido — contratos equilibrados",
      "Tomares, Dos Hermanas, Alcalá de Guadaíra",
    ],
    whyTitle: "Sevilla: confianza con el comprador, rigor en el contrato",
    whySubtitle:
      "En barrios señorial y nuevas urbanizaciones el comprador pide rapidez. Livendia evita que la rapidez se convierta en arras que te perjudican.",
    localZonesHeading: "Barrios y municipios de venta",
    localZones:
      "Triana, Nervión, Los Remedios, Macarena, Heliópolis, Sevilla Este, Tomares, Dos Hermanas y Mairena del Aljarafe.",
    localBenefits: [
      {
        title: "Arras penitenciales bien calibradas",
        description:
          "Penalizaciones proporcionadas si el comprador incumple plazo de hipoteca o desiste sin causa.",
      },
      {
        title: "Edificios históricos y nuevas zonas",
        description:
          "Checklist adaptado a casco antiguo (licencias) y a promociones en Sevilla Este.",
      },
      {
        title: "Ahorro frente a inmobiliaria",
        description:
          "Si ya tienes comprador, no pagues comisión de venta: paga gestoría profesional.",
      },
      {
        title: "Documentación de comunidad",
        description:
          "Certificado de deuda cero y actas para que no reaparezcan derramas en la semana previa a escritura.",
      },
      {
        title: "Coordinación con notaría sevillana",
        description: "Calendario y minuta alineados con lo firmado en arras.",
      },
      {
        title: "Gestor legal dedicado",
        description: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — un interlocutor, no un departamento comercial.`,
      },
    ],
  },
  bilbao: {
    keywords: [
      "vender piso entre particulares bilbao",
      "gestor venta vivienda bilbao getxo",
      "vender piso deusto sin agencia",
      "tramites venta particular bizkaia",
      "contrato arras vendedor bilbao",
      "vender sin inmobiliaria gran bilbao",
    ],
    heroBadge: "Venta entre particulares · Gran Bilbao",
    heroH1: "Vende en Bilbao o Getxo entre particulares — tarifa plana, no comisión alta",
    metaTitle: "Vender piso entre particulares en Bilbao | Gestor venta Livendia",
    metaDescription:
      "Vende en Abando, Deusto, Getxo o Barakaldo con comprador particular. Reserva, arras y escritura. 890 € IVA incl. Mercado de precios altos.",
    heroBullets: [
      "Precios elevados: documentación impecable",
      "Comprador particular o recomendación profesional",
      "Plusvalía y calendario notarial vizcaíno",
    ],
    whyTitle: "Bizkaia: máximo ahorro cuando ya tienes comprador",
    whySubtitle:
      "En pisos de 380.000 €, una comisión del 3 % supera 13.000 €. Livendia concentra el valor en contratos y trámites.",
    localZonesHeading: "Área metropolitana de venta",
    localZones:
      "Bilbao (Abando, Deusto, Indautxu), Getxo, Portugalete, Barakaldo, Santurtzi y municipios del Gran Bilbao.",
    localBenefits: [
      {
        title: "Reserva que no te ata de más",
        description:
          "Plazos y señal coherentes con la realidad del comprador financiado en entidades vascas.",
      },
      {
        title: "Comunidades con fondos de reserva",
        description:
          "Revisión de derramas en edificios señoria y bloques recientes antes de arras.",
      },
      {
        title: "Sin exclusiva de agencia",
        description:
          "Vendes tú el piso; nosotros cerramos el tramo legal.",
      },
      {
        title: "Coherencia reserva–arras–escritura",
        description:
          "Evitas que el comprador pida rebaja por laguna documental a última hora.",
      },
      {
        title: "Gestor en tu expediente",
        description: "Comunicación directa durante toda la operación.",
      },
      {
        title: "890 € IVA incluido",
        description: "Tarifa publicada, sin porcentaje sobre venta.",
      },
    ],
  },
};
