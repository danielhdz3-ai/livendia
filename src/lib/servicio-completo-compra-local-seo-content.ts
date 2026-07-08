import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

export type CompraLocalFaqItem = { question: string; answer: string };

export type CompraLocalSeoContent = {
  faqTitle: string;
  faqSubtitle: string;
  faq: readonly CompraLocalFaqItem[];
};

export const COMPRA_LOCAL_SEO_CONTENT: Record<string, CompraLocalSeoContent> = {
  madrid: {
    faqTitle: "Preguntas frecuentes sobre comprar en Madrid entre particulares",
    faqSubtitle:
      "Compra sin agencia compradora, reserva con prisa y financiación hipotecaria en el mercado más competitivo de España.",
    faq: [
      {
        question: "¿Puedo comprar en Madrid sin pagar comisión de agencia al comprador?",
        answer:
          "Sí. Si encuentras el piso por Idealista, recomendación o vendedor particular, no estás obligado a contratar una inmobiliaria que cobre un 3 % sobre el precio de compra. Livendia es gestoría en el bando del comprador: revisamos reserva, arras y camino a escritura por tarifa plana, sin porcentaje sobre el inmueble.",
      },
      {
        question: "¿Cuándo debo contratar el servicio completo de compra en Madrid?",
        answer:
          "Lo ideal es antes de firmar reserva o transferir la primera señal. En Madrid muchas operaciones se cierran en 24–48 horas; si ya tienes borrador del vendedor o de una agencia ligera, el gestor lo revisa de inmediato para que no firmes cláusulas irreversibles.",
      },
      {
        question: "¿Qué incluye el servicio por 890 € en una compra madrileña?",
        answer: `Revisión de reserva y arras, análisis de nota registral y documentación de comunidad, detección de cláusulas abusivas (honorarios encadenados, plazos de hipoteca imposibles, penalizaciones desproporcionadas), redacción o corrección de contratos, gestor dedicado por WhatsApp y teléfono, y coordinación hasta la firma en notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, pago único.`,
      },
      {
        question: "¿Revisáis operaciones en el cinturón (Móstoles, Getafe, Las Rozas…)?",
        answer:
          "Sí. Misma operativa online para Madrid capital y municipios del área metropolitana: el gestor trabaja sobre la documentación del inmueble y los contratos, independientemente de dónde firmes en notaría.",
      },
      {
        question: "¿Y si el vendedor o la agencia me presionan para firmar hoy la reserva?",
        answer:
          "Es habitual en Madrid. El gestor prioriza lo crítico en la primera revisión: penalizaciones, plazo de hipoteca, honorarios ocultos y coherencia con lo pactado en la visita. Muchos compradores contratan Livendia precisamente cuando sienten presión y no quieren perder el piso por revisar el contrato.",
      },
    ],
  },
  barcelona: {
    faqTitle: "Preguntas frecuentes sobre comprar en Barcelona entre particulares",
    faqSubtitle:
      "ITE, contratos bilingües y compraventa sin comisión de agencia en capital y área metropolitana.",
    faq: [
      {
        question: "¿Necesito agencia inmobiliaria para comprar en Barcelona si ya tengo piso elegido?",
        answer:
          "No. La agencia compradora cobra comisión por buscarte vivienda; si tú has encontrado anuncio de particular o compras a conocido, lo que necesitas es revisión legal. Livendia no capta pisos: defiende tus intereses en reserva, arras y escritura.",
      },
      {
        question: "¿Revisáis contratos en castellano y catalán?",
        answer:
          "Sí. Te explicamos obligaciones reales aunque el borrador mezcle idiomas o referencias al Codi civil de Catalunya. Si hay cláusula de financiación (art. 621-49 CCCat), la adaptamos para que no pierdas la señal si el banco deniega la hipoteca.",
      },
      {
        question: "¿Qué riesgos hay al comprar sin gestor en Barcelona?",
        answer:
          "ITE pendiente, cargas registrales no comentadas en la visita, derramas aprobadas en comunidad, licencias urbanísticas y arras copiadas que protegen solo al vendedor. Una penalización mal redactada en un piso de 400.000 € puede costar más que todo el servicio Livendia.",
      },
      {
        question: "¿Atendéis compras en L'Hospitalet, Badalona o área metropolitana?",
        answer:
          "Sí. El expediente es 100 % online: subes documentación al panel, el gestor revisa contratos y coordina hitos hasta notaría en el municipio que corresponda.",
      },
      {
        question: "¿Puedo contratar si compro desde otra provincia o desde el extranjero?",
        answer:
          "Sí. Muchos compradores en Barcelona capital no residen en la ciudad. Livendia tramita online con gestor asignado; te guiamos en documentación del inmueble y en plazos de hipoteca mientras preparas tu expediente personal (NIE, poderes, etc.).",
      },
    ],
  },
  valencia: {
    faqTitle: "Preguntas frecuentes sobre comprar en Valencia entre particulares",
    faqSubtitle:
      "Reservas rápidas, obra nueva y compra sin comisión en capital y l'Horta.",
    faq: [
      {
        question: "¿Tiene sentido Livendia si compro a un particular en Idealista?",
        answer:
          `Sí. No pagas comisión de agencia compradora (suele ser 3 % del precio). Por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido tienes gestor dedicado que revisa reserva, arras y documentación hasta escritura — especialmente útil cuando firmas reserva en 48 h y el borrador viene copiado de otra operación.`,
      },
      {
        question: "¿Revisáis compras de obra nueva en Valencia?",
        answer:
          "Sí. Verificamos coherencia entre anuncio, reserva y arras: plazos de entrega, calidades, anexos de garaje o trastero y condición de hipoteca. En promociones de l'Horta y capital es frecuente que lo verbal no figure en el contrato.",
      },
      {
        question: "¿Qué documentación revisa el gestor antes de las arras?",
        answer:
          "Contrato de reserva, nota simple, certificado de deuda de la comunidad, actas recientes, cédula de habitabilidad si aplica, y coherencia entre precio, señal y calendario de escritura. Te indicamos qué negociar antes de ingresar la señal.",
      },
      {
        question: "¿Gestionáis compras en Mislata, Torrent, Paterna o playa?",
        answer:
          "Sí. Misma gestoría online para Valencia capital y municipios del área: el protocolo documental se adapta al tipo de inmueble (segunda mano, obra nueva, edificio con locales).",
      },
      {
        question: "¿Puedo contratar después de firmar reserva en Valencia?",
        answer:
          "Sí, aunque lo recomendable es antes del primer ingreso relevante. Si ya firmaste reserva, el gestor revisa de inmediato penalizaciones y plazos para limitar riesgos antes de pasar a arras confirmatorias.",
      },
    ],
  },
  bilbao: {
    faqTitle: "Preguntas frecuentes sobre comprar en Bilbao entre particulares",
    faqSubtitle:
      "Compraventa de particular a particular en Bizkaia: arras equilibradas y sin comisión de agencia.",
    faq: [
      {
        question: "¿Puedo comprar en Bilbao sin agencia que cobre comisión al comprador?",
        answer:
          "Sí. En Bizkaia muchos compradores encuentran piso por Idealista o recomendación y compran a particular. Livendia no busca vivienda: revisa reserva y arras, analiza nota simple y te acompaña hasta notaría por tarifa plana.",
      },
      {
        question: "¿Por qué importa revisar arras en un mercado con precios altos?",
        answer:
          "Con precios medios elevados en Abando, Getxo o Deusto, una penalización mal calculada o una señal desproporcionada puede superar con creces los 890 € del servicio completo. El gestor equilibra el contrato antes de que transfieras dinero.",
      },
      {
        question: "¿Revisáis condición suspensiva de hipoteca?",
        answer:
          "Sí. Negociamos plazos realistas con vendedor particular y calendario compatible con la financiación. En operaciones vizcaínas es habitual que el borrador del vendedor no deje margen suficiente al comprador hipotecado.",
      },
      {
        question: "¿Atendéis compras en Getxo, Portugalete o Gran Bilbao?",
        answer:
          "Sí. Operativa digital con gestor de referencia para todo Bizkaia: misma revisión de comunidad, derramas y nota registral sin desplazarte al despacho.",
      },
      {
        question: "¿Qué pasa si el vendedor me envía sus propias arras?",
        answer:
          "Es lo habitual entre particulares. El gestor las corrige o redacta alternativa equilibrada para que el vendedor las acepte sin romper la operación. No tienes que firmar el texto que te pasan sin revisión profesional.",
      },
    ],
  },
  sevilla: {
    faqTitle: "Preguntas frecuentes sobre comprar en Sevilla entre particulares",
    faqSubtitle:
      "Compra sin agencia en barrios históricos, área metropolitana y operaciones entre conocidos.",
    faq: [
      {
        question: "¿Es seguro comprar en Sevilla entre particulares sin inmobiliaria?",
        answer:
          "Sí, si revisas contratos y documentación. El riesgo no es comprar sin agencia, sino firmar arras copiadas, confiar en promesas verbales o no verificar cargas y comunidad. Livendia cubre ese tramo con gestor dedicado al comprador.",
      },
      {
        question: "¿Revisáis compras en edificios históricos (Triana, Macarena, Santa Cruz)?",
        answer:
          "Sí. Prestamos atención a licencias, ITE, obras en comunidad y limitaciones urbanísticas en casco antiguo. Lo que no aparece en la visita suele salir en actas o en la nota registral.",
      },
      {
        question: "¿Cuándo contratar si compro a un familiar o vecino en Sevilla?",
        answer:
          "Antes de entregar señal, aunque confíes en el vendedor. En operaciones entre conocidos se relajan los plazos por escrito y luego surgen conflictos. Un gestor neutral deja pactado lo crítico sin romper la relación personal.",
      },
      {
        question: "¿Gestionáis compras en Tomares, Dos Hermanas o Alcalá de Guadaíra?",
        answer:
          "Sí. Misma gestoría online para Sevilla capital y municipios del área metropolitana, con revisión de documentación adaptada al inmueble.",
      },
      {
        question: "¿Qué incluye el servicio completo de compra en Sevilla?",
        answer: `Revisión de reserva y arras, defensa frente a cláusulas abusivas, análisis registral y de comunidad, gestor personal hasta escritura y coordinación con vendedor y notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — sin comisión sobre el precio del piso.`,
      },
    ],
  },
  malaga: {
    faqTitle: "Preguntas frecuentes sobre comprar en Málaga entre particulares",
    faqSubtitle:
      "Segunda residencia, costa y compra sin comisión de agencia en capital y municipios cercanos.",
    faq: [
      {
        question: "¿Puedo comprar en Málaga o la costa sin pagar comisión de agencia compradora?",
        answer:
          "Sí. Si encuentras el piso tú (portal, recomendación o vendedor particular), Livendia blinda el tramo legal por tarifa plana. No cobramos porcentaje sobre el precio de compra ni buscamos anuncios.",
      },
      {
        question: "¿Revisáis compras de segunda residencia si vivo fuera de Andalucía?",
        answer:
          "Sí. Es un perfil habitual en Teatinos, Torremolinos o la costa. Revisamos comunidad, estatutos, derramas y coherencia entre arras y uso real (habitual, larga estancia o segunda vivienda) antes de que ingreses la señal.",
      },
      {
        question: "¿Qué riesgos hay en edificios de playa o con uso mixto turístico?",
        answer:
          "Derramas de mantenimiento, normas de ocupación vecinal, obras en fachada y lagunas sobre alquiler turístico en la comunidad. El gestor cruza actas y contrato para que no heredes conflictos que el vendedor no detalló.",
      },
      {
        question: "¿Atendéis compras en Benalmádena, Fuengirola o Rincón de la Victoria?",
        answer:
          "Sí. Expediente online con el mismo gestor de referencia para Málaga capital y municipios de la Costa del Sol oriente.",
      },
      {
        question: "¿Puedo contratar si el vendedor ya me pasó reserva estándar de agencia?",
        answer:
          "Sí. Revisamos honorarios encadenados, penalizaciones y cláusulas que suelen ir en contra del comprador aunque el piso sea de particular. Muchos compradores recuperan el coste del servicio al eliminar una sola cláusula abusiva.",
      },
    ],
  },
  zaragoza: {
    faqTitle: "Preguntas frecuentes sobre comprar en Zaragoza entre particulares",
    faqSubtitle:
      "PAUs recientes, herencias familiares y compra sin agencia en capital y comarca.",
    faq: [
      {
        question: "¿Puedo comprar en Zaragoza entre particulares sin pagar comisión de agencia?",
        answer:
          "Sí. Si encuentras piso por Idealista, recomendación o herencia compartida, no necesitas agencia compradora. Livendia revisa reserva, arras y documentación por tarifa plana, defendiendo tus intereses frente al vendedor o a plantillas desequilibradas.",
      },
      {
        question: "¿Verificáis cargas de urbanización en PAUs como Valdespartera o Parque Goya?",
        answer:
          "Sí. En obra nueva reciente las cargas de urbanización a veces no figuran totalmente canceladas en registro cuando firmas arras. El gestor cruza información urbanística y nota registral antes de que comprometas la señal.",
      },
      {
        question: "¿Revisáis compras a varios herederos en Zaragoza?",
        answer:
          "Sí. Muchas operaciones zaragozanas proceden de herencias familiares. Verificamos que la titularidad permite transmitir con garantías y que la aceptación de herencia está correctamente inscrita antes de escriturar.",
      },
      {
        question: "¿Qué pasa con ITE y derramas en el Casco Histórico?",
        answer:
          "Revisamos inspección técnica si existe, acuerdos de rehabilitación en actas de comunidad y coherencia con lo pactado en visita. En edificios antiguos del centro, estas cargas suelen ser el principal riesgo oculto.",
      },
      {
        question: "¿Puedo contratar si me traslado a Zaragoza por trabajo (DGA, empresas locales)?",
        answer:
          "Sí. Perfil frecuente: comprador que cierra arras con prisa desde otra provincia. Livendia prioriza revisión express de contrato y plazos de hipoteca para que no pierdas el piso ni firmes condiciones imposibles.",
      },
    ],
  },
  oviedo: {
    faqTitle: "Preguntas frecuentes sobre comprar en Oviedo entre particulares",
    faqSubtitle:
      "Compra a vecino o particular sin agencia: comunidad, cédula de habitabilidad y arras equilibradas.",
    faq: [
      {
        question: "¿Necesito agencia inmobiliaria para comprar en Oviedo si ya tengo vendedor?",
        answer:
          "No. La agencia compradora cobra por buscarte piso; si compras a particular, vecino o anuncio en portal, lo que necesitas es gestoría en tu bando. Livendia revisa contratos y documentación hasta escritura sin comisión sobre el precio.",
      },
      {
        question: "¿Por qué tarda tanto el certificado de comunidad en Oviedo?",
        answer:
          "En bloques de La Ería, Los Pilares o Pumarín, con administradores saturados o comunidades sin gestor profesional, el certificado de deuda cero puede tardar semanas. El gestor te indica cuándo pedirlo y qué revisar en actas mientras tanto.",
      },
      {
        question: "¿Revisáis cédula de habitabilidad antes de las arras?",
        answer:
          "Sí. Para transmitir vivienda en Oviedo hace falta cédula vigente. Si caducó, debe renovarse antes de escriturar; el gestor lo detecta en el checklist de la primera semana para no frenar la operación a última hora.",
      },
      {
        question: "¿Atendéis compras en Siero, Langreo o área metropolitana?",
        answer:
          "Sí. Misma operativa online para Oviedo capital y municipios del área con inmueble en el Principado de Asturias.",
      },
      {
        question: "¿Qué incluye el servicio completo de compra en Oviedo?",
        answer: `Revisión de reserva y arras, análisis de nota simple y comunidad, defensa frente a cláusulas abusivas, gestor dedicado y coordinación hasta notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, sin porcentaje sobre el precio de compra.`,
      },
    ],
  },
  gijon: {
    faqTitle: "Preguntas frecuentes sobre comprar en Gijón entre particulares",
    faqSubtitle:
      "Compra sin agencia en centro, zona universitaria y franja costera del Principado.",
    faq: [
      {
        question: "¿Puedo comprar en Gijón entre particulares sin pagar comisión de agencia compradora?",
        answer:
          "Sí. Si encuentras el piso por Idealista o recomendación local, Livendia cubre el tramo legal por tarifa plana. No somos agencia: no buscamos anuncios ni cobramos un 3 % sobre el precio del inmueble.",
      },
      {
        question: "¿Revisáis edificios en la costa o con ITE pendiente?",
        answer:
          "Sí. En Gijón mar y barrios costeros verificamos estado del edificio, inspección técnica, obras en comunidad y derramas antes de que las arras te obliguen a asumir costes no vistos en la visita.",
      },
      {
        question: "¿Qué riesgo hay al firmar arras que me envía el vendedor particular?",
        answer:
          "Las plantillas suelen proteger al vendedor: penalizaciones altas, plazos de hipoteca cortos y señal desproporcionada. El gestor equilibra el texto o redacta alternativa que el vendedor puede aceptar sin romper la operación.",
      },
      {
        question: "¿Gestionáis compras en Avilés, Villaviciosa o municipios cercanos?",
        answer:
          "Sí. Expediente 100 % online con gestor de referencia para operaciones en el área central y costera de Asturias.",
      },
      {
        question: "¿Puedo contratar si es mi primera compra entre particulares?",
        answer:
          "Sí, es el perfil más habitual. El gestor te explica nota simple, derramas, plazos de financiación y qué negociar antes de entregar la señal — sin asumir que conoces el lenguaje de reserva y arras.",
      },
    ],
  },
  murcia: {
    faqTitle: "Preguntas frecuentes sobre comprar en Murcia entre particulares",
    faqSubtitle:
      "Urbanizaciones, herencias familiares y compra sin comisión en capital y huerta.",
    faq: [
      {
        question: "¿Puedo comprar en Murcia entre particulares sin agencia compradora?",
        answer:
          "Sí. En capital y huerta metropolitana es habitual comprar a familia, vecino o anuncio en portal. Livendia revisa reserva, arras y documentación por tarifa plana, sin comisión sobre el precio del piso.",
      },
      {
        question: "¿Revisáis compras en urbanizaciones y herencias familiares?",
        answer:
          "Sí. Muchas operaciones murcianas son entre varios herederos o en urbanizaciones donde deben alinearse titularidad y certificados antes de escritura. El gestor verifica nota registral y documentación de comunidad con antelación.",
      },
      {
        question: "¿Qué documentación suele frenar la compra en Murcia?",
        answer:
          "Certificado de deuda cero de la comunidad, cédula de habitabilidad, certificado energético y coherencia entre reserva y arras. En operaciones entre particulares el cuello de botella casi siempre es el papeleo, no la negociación de precio.",
      },
      {
        question: "¿Atendéis compras en Alcantarilla, Molina de Segura o El Palmar?",
        answer:
          "Sí. Misma gestoría online para Murcia capital y municipios del área metropolitana, con checklist adaptado al tipo de inmueble.",
      },
      {
        question: "¿Cuándo debo contratar el servicio completo de compra en Murcia?",
        answer:
          "Antes de firmar reserva o transferir señal. Si el vendedor te presiona con un borrador estándar, el gestor prioriza penalizaciones, condición de hipoteca y lo que quedó solo en conversación de WhatsApp.",
      },
    ],
  },
  "hospitalet-de-llobregat": {
    faqTitle: "Preguntas frecuentes sobre comprar en L'Hospitalet entre particulares",
    faqSubtitle:
      "CCCat, cláusula 621-49, comunidades numerosas y compra sin comisión de agencia en el Baix Llobregat.",
    faq: [
      {
        question: "¿Puedo comprar en L'Hospitalet sin pagar comisión de agencia compradora?",
        answer:
          "Sí. Si encuentras el piso por Idealista o vendedor particular, Livendia revisa reserva y arras por tarifa plana. No cobramos porcentaje sobre el precio de compra ni buscamos anuncios.",
      },
      {
        question: "¿Qué es el artículo 621-49 del CCCat y por qué importa al comprador?",
        answer:
          "Regula el desistimiento del comprador si no obtiene la financiación bancaria en plazo y condiciones pactadas. En L'Hospitalet, donde muchas operaciones van con hipoteca, evita perder la señal si el banco deniega el préstamo.",
      },
      {
        question: "¿Revisáis arras copiadas de operaciones en Barcelona capital?",
        answer:
          "Sí. Es el caso más frecuente: plantillas que no contemplan plazos realistas de comunidad en bloques densos de Collblanc o Bellvitge. El gestor las adapta al CCCat y a tu operación concreta.",
      },
      {
        question: "¿Atendéis compradores que vienen desde Barcelona a buscar precio en L'Hospitalet?",
        answer:
          "Sí. Perfil habitual: comprador del área metropolitana que cierra rápido en precio pero necesita revisión profesional de contrato y documentación antes de la señal.",
      },
      {
        question: "¿Cuándo debo contratar el servicio completo de compra?",
        answer:
          "Antes de firmar reserva o transferir señal. Si el vendedor te presiona, el gestor prioriza penalizaciones, 621-49 CCCat y coherencia con lo pactado en la visita.",
      },
    ],
  },
  "baix-llobregat": {
    faqTitle: "Preguntas frecuentes sobre comprar en el Baix Llobregat entre particulares",
    faqSubtitle:
      "Comarca del Llobregat: CCCat, 621-49, comunidades numerosas y compra sin comisión de agencia.",
    faq: [
      {
        question: "¿Qué municipios cubre la landing de compra del Baix Llobregat?",
        answer:
          "Acompañamos compradores en L'Hospitalet, Cornellà, Esplugues, Sant Boi, Sant Feliu, El Prat, Castelldefels, Sant Joan Despí, Gavà, Sant Andreu de la Barca y resto de la comarca — siempre con protocolo CCCat y gestor online.",
      },
      {
        question: "¿Puedo comprar en el Baix Llobregat sin pagar comisión de agencia compradora?",
        answer:
          "Sí. Si encuentras piso por Idealista o vendedor particular, Livendia revisa reserva y arras por tarifa plana. No cobramos porcentaje sobre el precio de compra.",
      },
      {
        question: "¿Por qué revisar arras si compro en Cornellà o Esplugues y no en Barcelona?",
        answer:
          "Los borradores suelen ser copias barcelonesas que no contemplan plazos realistas de comunidad en bloques del Baix Llobregat ni la cláusula 621-49 CCCat si pides hipoteca.",
      },
      {
        question: "¿Tengo landing específica si compro en L'Hospitalet?",
        answer:
          "Sí. Además de esta landing comarcal, existe la página de servicio completo de compra en L'Hospitalet de Llobregat con detalle de barrios como Collblanc o Bellvitge.",
      },
      {
        question: "¿Cuándo debo contratar el servicio completo de compra?",
        answer:
          "Antes de firmar reserva o transferir señal. El gestor prioriza penalizaciones, 621-49 CCCat y documentación de comunidad.",
      },
    ],
  },
  "sant-andreu": {
    faqTitle: "Preguntas frecuentes sobre comprar en Sant Andreu (Barcelona) entre particulares",
    faqSubtitle:
      "Distrito barcelonés — Sant Andreu de Palomar, La Sagrera y Navas. No es Sant Andreu de la Barca.",
    faq: [
      {
        question: "¿Sant Andreu es un municipio o un barrio de Barcelona?",
        answer:
          "Es un distrito de Barcelona capital (Sant Andreu de Palomar, La Sagrera, Navas…). No confundir con Sant Andreu de la Barca, municipio del Baix Llobregat — para ese caso consulta la landing del Baix Llobregat.",
      },
      {
        question: "¿Puedo comprar en Sant Andreu sin pagar comisión de agencia compradora?",
        answer:
          "Sí. Livendia es gestoría en el bando del comprador: revisa reserva, arras y documentación por tarifa plana, sin porcentaje sobre el precio del inmueble.",
      },
      {
        question: "¿Revisáis ITE y derramas en edificios del distrito?",
        answer:
          "Sí. Barcelona exige inspección técnica estricta; en Sant Andreu y La Sagrera revisamos ITE, actas de comunidad y acuerdos de rehabilitación antes de arras.",
      },
      {
        question: "¿Qué es la cláusula 621-49 CCCat en mi compra con hipoteca?",
        answer:
          "Permite desistir si no obtienes financiación en plazo pactado, sin perder indebidamente la señal. El gestor la redacta conforme al Codi civil de Catalunya.",
      },
      {
        question: "¿En qué se diferencia de la landing de Barcelona capital?",
        answer:
          "Mismo servicio y precio, copy adaptado al mercado del distrito: zonas como Sant Andreu de Palomar, La Sagrera y Navas, con foco en ITE y operaciones entre particulares sin agencia.",
      },
    ],
  },
  sabadell: {
    faqTitle: "Preguntas frecuentes sobre comprar en Sabadell entre particulares",
    faqSubtitle:
      "Herencias, hipoteca y arras CCCat en el Vallès Occidental — sin comisión de agencia compradora.",
    faq: [
      {
        question: "¿Puedo comprar en Sabadell entre particulares sin pagar comisión al comprador?",
        answer:
          "Sí. Livendia es gestoría en el bando del comprador: revisa contratos y documentación por tarifa plana, sin porcentaje sobre el precio del inmueble.",
      },
      {
        question: "¿Revisáis compras a herederos o con varios titulares en Sabadell?",
        answer:
          "Sí. Verificamos titularidad registral y que la aceptación de herencia esté inscrita antes de que entregues señal — casuística frecuente en Creu Alta y barrios del centre.",
      },
      {
        question: "¿Qué es la cláusula 621-49 CCCat en una compra con hipoteca?",
        answer:
          "Permite desistir si no obtienes financiación en plazo pactado, sin perder indebidamente la señal. En Sabadell, donde muchas operaciones van hipotecadas, es clave redactarla bien.",
      },
      {
        question: "¿Atendéis compradores que vienen desde Terrassa o Barcelona?",
        answer:
          "Sí. Operaciones entre municipios del Vallès con gestor online, revisión de contrato CCCat y calendario realista hasta notaría en Sabadell.",
      },
      {
        question: "¿Puedo contratar si el vendedor me envía sus propias arras?",
        answer:
          "Sí. El gestor las corrige o redacta alternativa equilibrada para que el vendedor las acepte. No firmes el texto que te pasan sin revisión profesional.",
      },
    ],
  },
  terrassa: {
    faqTitle: "Preguntas frecuentes sobre comprar en Terrassa entre particulares",
    faqSubtitle:
      "ITE en el centre, herencias en Sant Pere y compra sin agencia en el Vallès Occidental.",
    faq: [
      {
        question: "¿Puedo comprar en Terrassa sin agencia que cobre comisión al comprador?",
        answer:
          "Sí. Si encuentras piso por portal o vendedor particular, Livendia blinda el tramo legal por tarifa plana. No somos agencia: no buscamos anuncios ni cobramos un 3 % sobre el precio.",
      },
      {
        question: "¿Revisáis ITE y derramas en edificios del centre de Terrassa?",
        answer:
          "Sí. En edificios antiguos del centre y Sant Pere verificamos inspección técnica y acuerdos de rehabilitación en actas de comunidad antes de arras.",
      },
      {
        question: "¿Aplica el CCCat a mi compra en Terrassa?",
        answer:
          "Sí. Arras (621-4 a 621-9) y cláusula de financiación (621-49) se redactan conforme al Codi civil de Catalunya. El gestor te lo explica en castellano claro.",
      },
      {
        question: "¿Gestionáis compras con vendedor de Sabadell o del Vallès?",
        answer:
          "Sí. Lo relevante es la ubicación del inmueble en Terrassa y la normativa catalana aplicable, con el mismo protocolo Livendia online.",
      },
      {
        question: "¿Cuándo contratar el servicio completo de compra en Terrassa?",
        answer:
          "Antes de firmar reserva o transferir señal. En operaciones entre familia o vecinos, conviene dejar por escrito plazos, hipoteca y penalizaciones antes del primer ingreso.",
      },
    ],
  },
};

export function getCompraLocalSeoContent(slug: string): CompraLocalSeoContent | undefined {
  return COMPRA_LOCAL_SEO_CONTENT[slug];
}
