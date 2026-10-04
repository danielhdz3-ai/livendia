import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

export type ComprarBcnZoneEnrichment = {
  metaTitle: string;
  metaDescription: string;
  copy: {
    heroH1: string;
    heroLead: string;
    faqTitle: string;
  };
  faqExtra: readonly { question: string; answer: string }[];
  process: {
    step1Description: string;
    step3Description: string;
    step5Description: string;
  };
};

const P = SERVICIO_COMPLETO_CV_PRICE_LABEL;

function e(
  metaTitle: string,
  metaDescription: string,
  heroH1: string,
  heroLead: string,
  faqTitle: string,
  process: ComprarBcnZoneEnrichment["process"],
  faqExtra: ComprarBcnZoneEnrichment["faqExtra"],
): ComprarBcnZoneEnrichment {
  return { metaTitle, metaDescription, copy: { heroH1, heroLead, faqTitle }, process, faqExtra };
}

/** Copy único por landing AMB comprador — prioridad sobre metro-differentiation genérico. */
export const COMPRAR_BCN_ZONE_ENRICHMENT: Record<
  ComprarPisoSinAgenciaBcnMetroSlug,
  ComprarBcnZoneEnrichment
> = {
  "barcelona-sant-marti": e(
    "Comprar entre particulares Sant Martí — gestor comprador 890 €",
    `Compra piso en Sant Martí (Poblenou, El Clot, Diagonal Mar) sin agencia compradora. Revisión arras, comunidad multi-bloque e ITE. ${P} IVA incl.`,
    "Comprador en Sant Martí: revisa arras antes de la señal en Poblenou o El Clot",
    `¿Has encontrado piso en Poblenou, El Clot, La Verneda o Diagonal Mar? Mucha prisa por cerrar y certificados de comunidad lentos en bloques grandes. Por {{price}} (IVA incl.) un gestor Livendia revisa reserva, arras y documentación — gestoría del comprador, no captación.`,
    "Comprar sin agencia en Sant Martí — FAQ comprador",
    {
      step1Description:
        "Cuéntanos barrio (Poblenou, El Clot, Diagonal Mar…), precio, parking y borrador de arras del vendedor. En Sant Martí es habitual que prometan notaría en pocas semanas sin haber pedido certificado de deuda a una comunidad de varios portales.",
      step3Description:
        "Cruzamos nota simple con lo visto en visita: lofts reconvertidos en el Poblenou, promociones en Diagonal Mar, fincas de los 70 en El Clot con ITE y derramas. Validamos cèdula y energético antes de que ingreses señal.",
      step5Description:
        "Coordinamos hipoteca, vendedor y notaría en Barcelona: checklist pre-escritura alineado con arras. Si la comunidad del bloque en El Clot o La Verneda tarda, renegociamos plazos con criterio — no el día antes de firmar.",
    },
    [
      {
        question: "¿Revisáis compras en obra nueva en Diagonal Mar?",
        answer:
          "Sí. Comprobamos anexos de calidades, parking y trastero en contrato y coherencia con lo publicado en el anuncio antes de arras confirmatorias.",
      },
      {
        question: "¿Qué pasa si la comunidad en El Clot tarda en dar el certificado?",
        answer:
          "Tu gestor solicita el certificado de deuda con antelación y negocia en arras un plazo realista. Firmar con fecha de notaría fija sin ese papel es el conflicto más habitual en Sant Martí.",
      },
      {
        question: "¿Atendéis pisos en nave reconvertida en el Poblenou?",
        answer:
          "Sí. Revisamos uso registrado, instalaciones, terrazas comunitarias y coherencia entre visita, catastro y contrato — típico en lofts del Poblenou.",
      },
    ],
  ),
  "barcelona-poblenou": e(
    "Comprar piso particular Poblenou — gestor comprador Livendia",
    `Compra entre particulares en el Poblenou (Rambla, Bogatell). Arras CCCat, lofts e ITE. ${P} IVA incl. Sin comisión sobre el precio.`,
    "Compras en el Poblenou: lofts y fincas post-olímpicas bajo revisión de gestor",
    `¿Piso en la Rambla del Poblenou o cerca del Bogatell? Locales reconvertidos y comunidades con obras aprobadas que no te contaron en la visita. {{price}} IVA incl. — gestor del comprador hasta notaría.`,
    "Comprar sin agencia en el Poblenou — preguntas frecuentes",
    {
      step1Description:
        "Precio, trastero, terraza y qué te ha enviado el vendedor tras la visita. En el Poblenou muchas operaciones cierran en días: conviene alinear cèdula, ITE y estatutos de comunidad antes de transferir arras.",
      step3Description:
        "Analizamos naves reconvertidas, promociones recientes y pisos en la Rambla: servidumbres, instalaciones eléctricas y derramas en edificios multi-propietario del barrio.",
      step5Description:
        "Seguimos hipoteca y plazos con el vendedor sin romper la relación. Informe semáforo pre-escritura adaptado a compras rápidas en el Poblenou.",
    },
    [
      {
        question: "¿Revisáis contratos cuando el vendedor solo tiene agencia propia?",
        answer:
          "Sí. Es el caso habitual: tú compras sin agencia compradora y el borrador de arras suele favorecer al vendedor. Equilibramos cláusulas y plazos de hipoteca (621-49 CCCat).",
      },
      {
        question: "¿Qué documentación pido en un loft reconvertido?",
        answer:
          "Nota simple, ITE si aplica, cèdula, certificado de comunidad, licencias de obra relevantes y descripción escrita de terraza o anejos incluidos en el precio.",
      },
    ],
  ),
  "barcelona-eixample": e(
    "Comprar entre particulares Eixample Barcelona — gestor 890 €",
    `Gestor comprador en l'Eixample: arras, finca reglamentaria, parking anexo. ${P} IVA incl. Sant Antoni, Dreta, Esquerra.`,
    "Eixample: no firmes arras en finca reglamentaria sin revisar comunidad",
    `¿Compras en Esquerra, Dreta o Sant Antoni? Parking mal descrito y arras copiadas de otra CCAA. {{price}} IVA incl. — due diligence del comprador con gestor fijo.`,
    "Comprar piso sin agencia en l'Eixample — FAQ",
    {
      step1Description:
        "Repaso de precio, anejos en Registro y plazo que te exige el vendedor. En el Eixample el certificado de deuda en comunidades grandes puede tardar más de lo que marca un borrador de arras estándar.",
      step3Description:
        "Verificamos finca reglamentaria, derramas de fachada, ascensor y coherencia entre metros útiles del anuncio y escritura — frecuente en pisos señoriales del distrito.",
      step5Description:
        "Coordinación con notaría en Barcelona y seguimiento de hipoteca hasta escritura, con checklist pensado para ticket alto y compradores exigentes del Eixample.",
    },
    [
      {
        question: "¿Qué riesgo hay si el parking no está inscrito?",
        answer:
          "Que no puedas transmitir lo que pagaste. Revisamos Registro y proponemos redacción en arras antes de señal.",
      },
      {
        question: "¿Gestionáis compras en Sant Antoni con prisa del vendedor?",
        answer:
          "Sí. Priorizamos solicitud de certificados y cláusulas 621-49 para no quedar atrapado si la hipoteca tarda.",
      },
    ],
  ),
  "barcelona-gracia": e(
    "Comprar piso particular Gràcia — gestor comprador sin comisión",
    `Compra entre particulares en Gràcia. Arras CCCat, cèdula, edificios sin ascensor. ${P} IVA incl.`,
    "Gràcia: compra entre particulares con cèdula e ITE bajo control",
    `¿Piso en Vila de Gràcia, La Salut o Camp d'en Grassot? Fincas sin ascensor y cédulas caducadas aparecen tarde. {{price}} IVA incl. — gestor Livendia en tu bando.`,
    "Comprar sin agencia en Gràcia — FAQ comprador",
    {
      step1Description:
        "Tipo de edificio, planta, reforma reciente y borrador de arras. En Gràcia muchos compradores cierran en confianza; conviene pedir cèdula e ITE antes de señal.",
      step3Description:
        "Revisión de estado del edificio en ladera (El Coll, La Salut), terrazas compartidas y cargas en fincas centenarias del distrito.",
      step5Description:
        "Calendario realista hasta notaría en Barcelona, con margen para renovar cèdula si hace falta — evita retrasos de última hora en Gràcia.",
    },
    [
      {
        question: "¿Compráis pisos en planta baja sin ascensor en Gràcia?",
        answer: "Sí. Revisamos humedades, normativa de uso y coherencia entre visita y contrato.",
      },
      {
        question: "¿Revisáis arras penitenciales firmadas el mismo fin de semana de la visita?",
        answer:
          "Recomendamos contratar gestor antes de firmar. Si ya tienes borrador, lo analizamos y te decimos qué no cuadra.",
      },
    ],
  ),
  "barcelona-les-corts": e(
    "Comprar sin agencia Les Corts — gestor comprador 890 €",
    `Comprador particular en Les Corts y Pedralbes. Parking, Zona Universitària. ${P} IVA incl.`,
    "Les Corts: revisa parking anexo y arras antes de señal en Pedralbes o Zona Univ.",
    `¿Compras cerca del Camp Nou, Pedralbes o Zona Universitària? Ticket alto y anejos mal descritos. {{price}} IVA incl.`,
    "Comprar en Les Corts sin agencia — FAQ",
    {
      step1Description:
        "Parking, trastero, hipoteca y borrador del vendedor. En Les Corts es frecuente que el precio incluya plaza que no coincide con el Registro.",
      step3Description:
        "Due diligence en fincas de alta cota: comunidad, ITE y coherencia de anejos en Pedralbes y Les Corts centre.",
      step5Description:
        "Coordinación hasta escritura con checklist para operaciones de ticket alto en el distrito.",
    },
    [
      {
        question: "¿Revisáis operaciones con vendedor en el extranjero?",
        answer: "Sí. Orientamos sobre poderes y documentación para firma en notaría barcelonesa.",
      },
    ],
  ),
  "barcelona-sants-montjuic": e(
    "Comprar entre particulares Sants-Montjuïc — gestor 890 €",
    `Gestor comprador Sants, Poble-sec, Hostafrancs. Arras e ITE. ${P} IVA incl.`,
    "Sants-Montjuïc: arras equilibradas en edificios envejecidos del distrito",
    `¿Compras en Sants, Poble-sec o la Bordeta? Calderas comunitarias e ITE. {{price}} IVA incl.`,
    "Comprar sin agencia en Sants-Montjuïc — FAQ",
    {
      step1Description:
        "Barrio concreto, estado del edificio y plazos del vendedor. Cerca de Estació Sants muchos compradores financian: conviene 621-49 CCCat bien redactada.",
      step3Description:
        "Control de ITE, derramas y cèdula en fincas de los 30–60 en Poble-sec, Hostafrancs y Sants centre.",
      step5Description:
        "Seguimiento bancario y comunidad hasta escritura en Barcelona o área metropolitana.",
    },
    [
      {
        question: "¿Qué pasa si el edificio tiene deficiencias en ITE?",
        answer:
          "Te informamos antes de arras. A veces conviene condicionar la compra o renegociar plazo de subsanación.",
      },
    ],
  ),
  "barcelona-horta-guinardo": e(
    "Comprar piso particular Horta-Guinardó — gestor comprador",
    `Compra entre particulares El Carmel, Horta, Guinardó. ITE en ladera. ${P} IVA incl.`,
    "Horta-Guinardó: due diligence en fincas en pendiente antes de la señal",
    `¿Compras en El Carmel, Horta centre o La Teixonera? ITE y accesos. {{price}} IVA incl.`,
    "Comprar sin agencia en Horta-Guinardó — FAQ",
    {
      step1Description:
        "Pendiente, ascensor, estado estructural y arras del vendedor. En ladera conviene no apresurar señal sin informes.",
      step3Description:
        "Revisión de ITE, humedades habituales en edificios en terraza y coherencia registral en el distrito.",
      step5Description:
        "Coordinación con notaría y margen para certificados lentos de comunidades en bloques grandes del Carmel.",
    },
    [
      {
        question: "¿Compráis en edificios sin ascensor en El Carmel?",
        answer: "Sí. Adaptamos checklist y cláusulas a la realidad del inmueble y del edificio.",
      },
    ],
  ),
  "barcelona-sant-andreu": e(
    "Comprar entre particulares Sant Andreu — gestor 890 €",
    `Gestor comprador Sant Andreu, Sagrera, Navas. Reformas y arras. ${P} IVA incl.`,
    "Sant Andreu: revisa reformas recientes y licencias antes de arras",
    `¿Piso en La Sagrera, Palomar o Navas? Reformas no reflejadas en contrato. {{price}} IVA incl.`,
    "Comprar sin agencia en Sant Andreu — FAQ",
    {
      step1Description:
        "Si hubo reforma integral, licencias y qué prometió el vendedor en visita. Sant Andreu crece con La Sagrera: operaciones con prisa.",
      step3Description:
        "Cruce de obra reciente, derramas y certificado de comunidad en bloques de los 60–70.",
      step5Description:
        "Calendario hasta notaría con seguimiento de hipoteca en compradores que vienen de otros distritos.",
    },
    [
      {
        question: "¿Qué revisáis si el piso está reformado hace poco?",
        answer: "Licencias, descripción en arras y coherencia con estado en visita e inventario.",
      },
    ],
  ),
  "barcelona-sarria-sant-gervasi": e(
    "Comprar piso particular Sarrià-Sant Gervasi — gestor 890 €",
    `Comprador en Sarrià, Sant Gervasi, Tres Torres. Ticket alto. ${P} IVA incl.`,
    "Sarrià-Sant Gervasi: due diligence premium antes de transferir arras",
    `¿Compras en Sarrià, Bonanova o Les Tres Torres? Vendedores exigen rapidez y documentación impecable. {{price}} IVA incl.`,
    "Comprar sin agencia en Sarrià-Sant Gervasi — FAQ",
    {
      step1Description:
        "Anejos, trasteros, servidumbres y borrador de arras. Ticket alto: un error en parking o cuota de comunidad pesa en euros.",
      step3Description:
        "Revisión exhaustiva de Registro, comunidad exigente y coherencia de descripción en pisos señoriales.",
      step5Description:
        "Coordinación discreta con vendedor y banco hasta escritura en notaría de confianza.",
    },
    [
      {
        question: "¿Revisáis compras con dos compradores en hipoteca conjunta?",
        answer: "Sí. Alineamos comparecientes, arras y condiciones suspensivas con la entidad.",
      },
    ],
  ),
  "barcelona-nou-barris": e(
    "Comprar entre particulares Nou Barris — gestor comprador",
    `Gestor comprador Nou Barris, Verdun, Roquetes. Comunidades grandes. ${P} IVA incl.`,
    "Nou Barris: certificado de comunidad antes de señal en bloques grandes",
    `¿Compras en Verdun, Roquetes o Trinitat Vella? Comunidades lentas. {{price}} IVA incl.`,
    "Comprar sin agencia en Nou Barris — FAQ",
    {
      step1Description:
        "Plazo del vendedor vs tiempo real de administrador de finca en bloques de gran escala del distrito.",
      step3Description:
        "Derramas en fachada, ascensores y deuda de comunidad en edificios de los 60–70.",
      step5Description:
        "Renegociación de plazos si el certificado de deuda tarda — habitual en Nou Barris.",
    },
    [
      {
        question: "¿Es habitual comprar sin agencia compradora en Nou Barris?",
        answer:
          "Sí. Muchos cierran en Idealista; el riesgo está en arras con plazos imposibles para la comunidad.",
      },
    ],
  ),
  "barcelona-ciutat-vella": e(
    "Comprar piso particular Ciutat Vella — gestor 890 €",
    `Comprador Born, Gòtic, Raval, Barceloneta. ITE severa. ${P} IVA incl.`,
    "Ciutat Vella: ITE y cargas en casco antiguo antes de ingresar señal",
    `¿Compras en el Born, Gòtic o Barceloneta? Edificios protegidos e ITE exigente. {{price}} IVA incl.`,
    "Comprar sin agencia en Ciutat Vella — FAQ",
    {
      step1Description:
        "Estado del edificio, protección patrimonial y borrador de arras. En casco antiguo el vendedor a veces minimiza ITE en visita.",
      step3Description:
        "Análisis de cargas, servidumbres, obras en comunidad y cèdula en fincas centenarias.",
      step5Description:
        "Margen amplio en calendario: certificados y notaría en Ciutat Vella suelen ser más lentos.",
    },
    [
      {
        question: "¿Compráis pisos turísticos mal regularizados?",
        answer:
          "Revisamos uso declarado vs licencias. Te avisamos de riesgos antes de arras, sin sustituir asesoramiento urbanístico específico.",
      },
    ],
  ),
  "barcelona-born": e(
    "Comprar entre particulares El Born — gestor comprador Livendia",
    `Gestor comprador Born y Ribera. Finca histórica. ${P} IVA incl.`,
    "El Born: compra entre particulares con revisión de ITE y comunidad",
    `¿Piso en el Born o la Ribera? Encanto del casco con papeles complejos. {{price}} IVA incl.`,
    "Comprar sin agencia en El Born — FAQ",
    {
      step1Description:
        "Antigüedad del edificio, reformas y arras del vendedor. Operaciones turísticas mezcladas con vivienda habitual.",
      step3Description:
        "ITE, humedades y estatutos de comunidad en fincas estrechas del barrio.",
      step5Description:
        "Coordinación hasta escritura con checklist para compradores nacionales y extranjeros.",
    },
    [
      {
        question: "¿Atendéis compradores que no viven en Barcelona?",
        answer: "Sí. Expediente online y gestor por WhatsApp hasta el día de firma.",
      },
    ],
  ),
  "hospitalet-de-llobregat": e(
    "Comprar entre particulares L'Hospitalet — gestor 890 €",
    `Comprador en L'Hospitalet: Collblanc, Bellvitge, centre. Arras CCCat. ${P} IVA incl.`,
    "L'Hospitalet: arras realistas en bloques densos del Baix Llobregat",
    `¿Compras en Collblanc, Bellvitge o centre? Comunidades saturadas. {{price}} IVA incl.`,
    "Comprar sin agencia en L'Hospitalet — FAQ",
    {
      step1Description:
        "Plazos de hipoteca y certificado de comunidad en bloques de gran densidad — el vendedor a menudo copia arras de Barcelona capital.",
      step3Description:
        "Derramas de fachada y coherencia entre precio y estado en edificios de los 70–80.",
      step5Description:
        "Notaría en L'Hospitalet o Barcelona según acordéis; misma gestoría Livendia.",
    },
    [
      {
        question: "¿Revisáis arras pensadas para Barcelona en piso de L'Hospitalet?",
        answer: "Sí. Adaptamos plazos y referencias al municipio y al edificio concreto.",
      },
    ],
  ),
  badalona: e(
    "Comprar piso particular Badalona — gestor comprador 890 €",
    `Compra entre particulares Badalona, centro, Gorg, Montigalà. ${P} IVA incl.`,
    "Badalona: gestor del comprador en operaciones rápidas junto al mar",
    `¿Compras en centro, Gorg o Montigalà? Vendedor con prisa y comunidad lenta. {{price}} IVA incl.`,
    "Comprar sin agencia en Badalona — FAQ",
    {
      step1Description:
        "Distancia a Barcelona, tipo de finca y financiación. Muchos compradores vienen del área metropolitana.",
      step3Description:
        "Certificados de comunidad en bloques de Badalona sur y primera línea de playa.",
      step5Description:
        "Coordinación hasta escritura en notaría de Badalona o Barcelona.",
    },
    [
      {
        question: "¿Gestionáis normativa catalana en Badalona?",
        answer: "Sí. CCCat, cèdula e ITE aplican igual que en Barcelona capital.",
      },
    ],
  ),
  sabadell: e(
    "Comprar entre particulares Sabadell — gestor comprador",
    `Gestor comprador Sabadell, Creu Alta, centre. ${P} IVA incl. Sin comisión.`,
    "Sabadell: revisa arras antes de señal en el Vallès Occidental",
    `¿Compras en Creu Alta, centre o Can Rull? Hipoteca lenta del comprador. {{price}} IVA incl.`,
    "Comprar sin agencia en Sabadell — FAQ",
    {
      step1Description:
        "Compradores de Terrassa o Barcelona y plazos bancarios. Cláusula 621-49 evita conflictos si la entidad tarda.",
      step3Description:
        "ITE en edificios del centre y titularidades en herencias frecuentes en el Vallès.",
      step5Description:
        "Notaría en Sabadell con documentación alineada a arras.",
    },
    [
      {
        question: "¿Intervenís si el vendedor está en otro municipio del Vallès?",
        answer: "Sí. Lo relevante es la ubicación del inmueble en Sabadell.",
      },
    ],
  ),
  terrassa: e(
    "Comprar piso particular Terrassa — gestor 890 €",
    `Comprador Terrassa, Sant Pere, Les Arenes. ${P} IVA incl.`,
    "Terrassa: due diligence industrial y residencial antes de arras",
    `¿Compras en centre, Sant Pere o Les Arenes? Edificios con ITE. {{price}} IVA incl.`,
    "Comprar sin agencia en Terrassa — FAQ",
    {
      step1Description:
        "Entorno industrial cercano, estado del edificio y borrador de arras.",
      step3Description:
        "ITE, energético caducado y comunidad en bloques de gran escala terrassencs.",
      step5Description:
        "Calendario hasta notaría en Terrassa con seguimiento de hipoteca.",
    },
    [
      {
        question: "¿Revisáis arras si compro desde Barcelona?",
        answer: "Sí. Operamos 100 % online con gestor asignado.",
      },
    ],
  ),
  "cornella-de-llobregat": e(
    "Comprar entre particulares Cornellà — gestor comprador",
    `Gestor Cornellà, Sant Ildefons, centre. ${P} IVA incl.`,
    "Cornellà: arras CCCat en compra rápida tras Idealista",
    `¿Compras en Sant Ildefons o centre? Derramas sorpresa. {{price}} IVA incl.`,
    "Comprar sin agencia en Cornellà — FAQ",
    {
      step1Description:
        "Precio competitivo y prisa del vendedor — típico en Cornellà frente a Barcelona.",
      step3Description:
        "Certificado de deuda y derramas en comunidades del Baix Llobregat.",
      step5Description:
        "Escritura en Cornellà o Barcelona según notaría elegida.",
    },
    [
      {
        question: "¿Qué es lo primero que revisáis del borrador de arras?",
        answer: "Plazos, objeto (parking), penalizaciones y cláusula de financiación.",
      },
    ],
  ),
  "esplugues-de-llobregat": e(
    "Comprar piso particular Esplugues — gestor 890 €",
    `Comprador Esplugues, Finestrelles, Can Clota. Ticket alto. ${P} IVA incl.`,
    "Esplugues: revisión de anejos en compras de ticket alto",
    `¿Compras en Finestrelles o Can Clota? Vendedor particular exigente. {{price}} IVA incl.`,
    "Comprar sin agencia en Esplugues — FAQ",
    {
      step1Description:
        "Parking, trastero y calidades prometidas en visita en zona residencial de ticket alto.",
      step3Description:
        "Nota simple, comunidad y coherencia de precio con mercado de Esplugues.",
      step5Description:
        "Coordinación bancaria y pre-escritura en operaciones familiares.",
    },
    [
      {
        question: "¿Atendéis compradores que venden en Barcelona y compran en Esplugues?",
        answer: "Sí. Un gestor por operación de compra.",
      },
    ],
  ),
  "castelldefels": e(
    "Comprar entre particulares Castelldefels — gestor comprador",
    `Gestor Castelldefels, centro, Bellamar. Segunda residencia. ${P} IVA incl.`,
    "Castelldefels: compra junto al mar con documentación en orden",
    `¿Compras en Castelldefels? Segundas residencias y arras copiadas. {{price}} IVA incl.`,
    "Comprar sin agencia en Castelldefels — FAQ",
    {
      step1Description:
        "Uso vivienda habitual vs segunda residencia y plazos estacionales de cierre.",
      step3Description:
        "Comunidades con obras en fachada marítima y certificados lentos en verano.",
      step5Description:
        "Notaría en Castelldefels o Barcelona con checklist completo.",
    },
    [
      {
        question: "¿Compráis pisos con hipoteca en el extranjero?",
        answer: "Revisamos 621-49 y plazos realistas con tu entidad en España.",
      },
    ],
  ),
  gava: e(
    "Comprar piso particular Gavà — gestor comprador 890 €",
    `Comprador Gavà, centre, Lluminetes. ${P} IVA incl.`,
    "Gavà: gestor comprador en operaciones Baix Llobregat sur",
    `¿Compras en Gavà? Mismo riesgo documental que en Barcelona. {{price}} IVA incl.`,
    "Comprar sin agencia en Gavà — FAQ",
    {
      step1Description:
        "Operación entre particulares tras portal; revisión de arras antes de señal.",
      step3Description:
        "Comunidad, ITE y cèdula en fincas de los 70 en el municipio.",
      step5Description:
        "Seguimiento hasta escritura con informe semáforo.",
    },
    [
      {
        question: "¿Cuánto tarda una compra típica en Gavà?",
        answer: "Entre 8 y 12 semanas desde arras, según hipoteca y comunidad.",
      },
    ],
  ),
  "sant-cugat-del-valles": e(
    "Comprar entre particulares Sant Cugat — gestor 890 €",
    `Gestor comprador Sant Cugat, centre, Mira-sol. ${P} IVA incl.`,
    "Sant Cugat: due diligence en compra de ticket alto sin agencia compradora",
    `¿Compras en centre o Mira-sol? Vendedor con agencia solo suya. {{price}} IVA incl.`,
    "Comprar sin agencia en Sant Cugat — FAQ",
    {
      step1Description:
        "Promociones recientes, calidades y parking en operaciones de familias del Vallès.",
      step3Description:
        "Revisión registral y comunidad en urbanizaciones y fincas unifamiliares.",
      step5Description:
        "Coordinación con notaría santcugatenca o Barcelona.",
    },
    [
      {
        question: "¿Revisáis arras de promociones del vendedor?",
        answer: "Sí. Comprobamos anexos, fianzas y plazos de entrega vs realidad registral.",
      },
    ],
  ),
  "sant-adria-de-besos": e(
    "Comprar piso particular Sant Adrià — gestor comprador",
    `Gestor Sant Adrià, Barceloneta adrián, centre. ${P} IVA incl.`,
    "Sant Adrià: arras antes de señal en fincas junto al Besòs",
    `¿Compras en Sant Adrià? Operaciones rápidas con Barcelona. {{price}} IVA incl.`,
    "Comprar sin agencia en Sant Adrià — FAQ",
    {
      step1Description:
        "Compradores de Barcelona capital y plazos ajustados del vendedor.",
      step3Description:
        "Derramas en edificios junto a zona industrial reconvertida.",
      step5Description:
        "Escritura en Sant Adrià o Barcelona.",
    },
    [
      {
        question: "¿Gestionáis compras con vendedor en Badalona?",
        answer: "Sí. Importa la ubicación del inmueble y la normativa catalana.",
      },
    ],
  ),
  "sant-boi-de-llobregat": e(
    "Comprar entre particulares Sant Boi — gestor 890 €",
    `Comprador Sant Boi, centre, Marianao. ${P} IVA incl.`,
    "Sant Boi: gestor del comprador en el Baix Llobregat",
    `¿Compras en Sant Boi? Arras copiadas de Barcelona. {{price}} IVA incl.`,
    "Comprar sin agencia en Sant Boi — FAQ",
    {
      step1Description:
        "Precio asequible y prisa — revisión de plazos de comunidad y hipoteca.",
      step3Description:
        "Certificados en bloques de los 60–80 del municipio.",
      step5Description:
        "Calendario hasta notaría con gestor único.",
    },
    [
      {
        question: "¿Livendia negocia el precio por mí?",
        answer: "No. Revisamos contratos y documentación; la negociación es tuya.",
      },
    ],
  ),
  "sant-joan-despi": e(
    "Comprar piso particular Sant Joan Despí — gestor 890 €",
    `Gestor Sant Joan Despí, centre, Les Planes. ${P} IVA incl.`,
    "Sant Joan Despí: revisión de arras en compra familiar",
    `¿Compras en Les Planes o centre? Operaciones entre conocidos. {{price}} IVA incl.`,
    "Comprar sin agencia en Sant Joan Despí — FAQ",
    {
      step1Description:
        "Compras entre vecinos o compañeros de trabajo — conviene formalizar antes de señal.",
      step3Description:
        "Coherencia entre precio verbal y arras; comunidad en fincas unifamiliares y bloques.",
      step5Description:
        "Hasta escritura con informe semáforo pre-notaría.",
    },
    [
      {
        question: "¿Puedo contratar solo para revisar un borrador?",
        answer: `El servicio completo (${P}) incluye revisión y coordinación integral; es lo habitual antes de señal.`,
      },
    ],
  ),
  "mollet-del-valles": e(
    "Comprar entre particulares Mollet — gestor comprador",
    `Gestor Mollet del Vallès, centre, Gallecs. ${P} IVA incl.`,
    "Mollet: arras CCCat en compra desde el Vallès Oriental",
    `¿Compras en Mollet? Plazos de hipoteca desde Barcelona. {{price}} IVA incl.`,
    "Comprar sin agencia en Mollet — FAQ",
    {
      step1Description:
        "Compradores que trabajan en Barcelona y cierran en fin de semana — riesgo de arras apresuradas.",
      step3Description:
        "ITE y comunidad en edificios del centre y zona estación.",
      step5Description:
        "Notaría en Mollet o Gran Barcelona.",
    },
    [
      {
        question: "¿Atendéis compras con vendedor en Sabadell o Granollers?",
        answer: "Sí. El inmueble en Mollet determina la documentación municipal y registral.",
      },
    ],
  ),
};

export function getComprarBcnZoneEnrichment(
  slug: string,
): ComprarBcnZoneEnrichment | undefined {
  return COMPRAR_BCN_ZONE_ENRICHMENT[slug as ComprarPisoSinAgenciaBcnMetroSlug];
}

export function comprarProcessTitle(city: string): string {
  return `Cómo comprar tu piso en ${city} sin agencia, paso a paso`;
}
