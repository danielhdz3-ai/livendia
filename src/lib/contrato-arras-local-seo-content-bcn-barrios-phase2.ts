import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";
import type { ArrasLocalSeoContent } from "@/lib/contrato-arras-local-seo-content";

type BcnBarrioArrasSeo = Omit<ArrasLocalSeoContent, "financingEducation">;

/** Copy SEO único — fase 2 barrios Barcelona (contrato de arras CCCat). */
export const ARRAS_BCN_BARRIO_SEO_CONTENT_PHASE2: Record<string, BcnBarrioArrasSeo> = {
  "barcelona-sants-montjuic": {
    heroSubtitle: `Redactamos tu contrato de arras en Sants-Montjuïc entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestor asignado, CCCat (621-4 a 621-9), cláusula 621-49 si hay hipoteca. Sants, Poble-sec, Hostafrancs — servicio online Livendia.`,
    gestorPitch:
      "Comprador o vendedor en Sants o Poble-sec: tu gestor Livendia no te entrega una plantilla de agencia. Se asigna a tu expediente, explica penitenciales vs confirmatorias conforme al CCCat y redacta arras calibradas antes de transferir la señal.",
    fairArrasHeading: "Arras justas en Sants-Montjuïc entre particulares",
    fairArrasIntro:
      "En Hostafrancs, La Bordeta o Sants centre las compraventas cierran rápido tras visita en Idealista. Livendia contrasta penalidades, derramas en bloques de los 70–80 y plazos de cancelación de hipoteca antes de ingresar la señal.",
    legalSpanish:
      "El Código Civil español (art. 1454 y ss.) complementa el marco autonómico en operaciones inmobiliarias en Barcelona capital.",
    legalCatalan:
      "En Sants-Montjuïc rige el Codi civil de Catalunya. Los arts. 621-4 a 621-9 definen arras penitenciarias y confirmatòries con efectos claros si una parte incumple.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat protege al comprador con hipoteca: el gestor redacta plazo, importe del préstamo y resolución bancaria exigible por escrito.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "Sants-Montjuïc combina Estació Sants, familias en Hostafrancs y operaciones en Poble-sec con ticket medio (~23–26 €/m² alquiler publicado). Compradores y vendedores particulares acuerdan precio en visita pero firman arras copiadas que ignoran calderas comunitarias o ascensores antiguos.",
    zonesHeading: "Contrato de arras en barrios de Sants-Montjuïc",
    zonesParagraph: "Gestor asignado para particulares en:",
    zoneGroups: [
      { district: "Sants centre", areas: "Sants, Numància, entorno Estació Sants" },
      { district: "Hostafrancs", areas: "Hostafrancs, Plaça Espanya límite" },
      { district: "Poble-sec", areas: "Poble-sec, Font de la Guatlla, Montjuïc límite" },
      { district: "La Bordeta", areas: "La Bordeta, Magoria, entorno metro" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias redactadas según el inmueble: piso entero, herencia compartida o venta con inquilino LAU vigente — el gestor adapta cláusulas al caso concreto.",
    moneyLossRisks: [
      {
        title: "Penalidad desproporcionada en La Bordeta",
        body: "Señales mal calibradas en bloques densos — el gestor equilibra conforme al CCCat antes de firmar.",
      },
      {
        title: "Derrama comunitaria omitida",
        body: "Obras en ascensor o caldera comunitaria no reflejadas — checklist mínimo antes de arras.",
      },
      {
        title: "Financiación sin art. 621-49",
        body: "Comprador con hipoteca sin cláusula de desistimiento — riesgo de perder toda la señal si el banco dice no.",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis arras en Sants o Poble-sec entre particulares?",
        answer:
          "Sí. 145 € IVA incl., gestor asignado, trámite 100 % online. Revisamos borrador ajeno o redactamos desde cero conforme al CCCat.",
      },
      {
        question: "¿Cómo funciona Livendia para tramitar arras?",
        answer:
          "Contratas online, un gestor se asigna a tu caso, revisa el borrador por videollamada o teléfono y redacta el contrato en 48–72 h. Expediente en panel Livendia.",
      },
      {
        question: "¿Livendia busca comprador o vende mi piso?",
        answer:
          "No. Somos gestoría: redactamos o revisamos arras por 145 € IVA incl. cuando comprador y vendedor ya se han encontrado sin agencia.",
      },
      {
        question: "¿Incluye cláusula art. 621-49 para hipoteca?",
        answer:
          "Sí, si la operación lo requiere. El gestor redacta plazo, importe del préstamo y documentación bancaria exigible conforme al CCCat.",
      },
      {
        question: "¿Qué otros servicios ofrece Livendia en Barcelona?",
        answer:
          "LAU, administración de alquiler, servicio completo de venta (890 €), revisión post-arras y pack arras + gestión documental — hub en livendia.com.",
      },
    ],
  },

  "barcelona-poblenou": {
    heroSubtitle: `Tramitamos tu contrato de arras en el Poblenou entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. 22@, Rambla del Poblenou, CCCat 621-4 a 621-9 y cláusula 621-49. Gestor online Livendia — sin comisión de agencia.`,
    gestorPitch:
      "En el 22@ o la Rambla del Poblenou no firmes arras pensadas para otra operación. Tu gestor Livendia conoce lofts reconvertidos, terrazas y parking comunitario — y redacta el contrato antes de que transfieras la señal.",
    fairArrasHeading: "Tramitación de arras justa en el Poblenou",
    fairArrasIntro:
      "Sant Martí concentra transformación del 22@ y familias en la Rambla del Poblenou. Livendia calibra penalidades, describe anejos (parking, trastero) y protege la financiación hipotecaria con art. 621-49.",
    legalSpanish:
      "Marco del Código Civil español aplicado junto al Codi civil de Catalunya en compraventas en Barcelona.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat en el Poblenou: arras penitenciarias y confirmatòries adaptadas a lofts, pisos familiares y plantas baja comercial.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat integrado cuando el comprador financia — plazo, entidad y resolución bancaria exigible por escrito.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "El Poblenou mezcla lofts del 22@, familias en la Rambla y ticket medio-alto (~24–28 €/m²). Compradores tech y vendedores particulares cierran en visita pero firman arras que no describen instalaciones eléctricas ni terrazas comunitarias.",
    zonesHeading: "Contrato de arras en zonas del Poblenou",
    zonesParagraph: "Tramitamos arras para particulares en:",
    zoneGroups: [
      { district: "22@", areas: "22@, Poblenou tech, naves reconvertidas" },
      { district: "Rambla del Poblenou", areas: "Rambla, Parc del Centre del Poblenou" },
      { district: "Diagonal Mar (límite)", areas: "Diagonal Mar, Selva de Mar límite" },
      { district: "Clot — Vila Olímpica (límite)", areas: "Clot límite, Nova Icària límite" },
    ],
    arrasTypesIntro:
      "Te orientamos entre penitenciales y confirmatorias según tu operación en Sant Martí. El gestor adapta plazos, objeto del inmueble y documentación exigible antes del resto del precio.",
    moneyLossRisks: [
      {
        title: "Loft sin describir instalaciones",
        body: "Naves reconvertidas con terraza comunitaria mal delimitada — conflicto antes de escritura.",
      },
      {
        title: "Parking anexo omitido",
        body: "Plaza de garaje incluida en precio verbal pero no en arras — grieta registral.",
      },
      {
        title: "Señal sin art. 621-49",
        body: "Comprador con hipoteca en operación 22@ — cláusula imprescindible conforme al CCCat.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras en el 22@ y la Rambla del Poblenou?",
        answer:
          "Sí. Adaptamos el contrato al inmueble concreto — loft, piso familiar o planta baja — con gestor asignado y panel Livendia.",
      },
      {
        question: "¿Es un servicio 100 % online?",
        answer:
          "Sí. Contratas en livendia.com, subes documentación al panel y hablas con tu gestor por teléfono o WhatsApp — sin visitar un despacho en Poblenou.",
      },
      {
        question: "¿Qué es la plataforma Livendia?",
        answer:
          "Panel donde centralizáis documentos, contrato, hitos del servicio y mensajes con el gestor — trazabilidad antes de ingresar la señal.",
      },
      {
        question: "¿Cuánto ahorro vs inmobiliaria?",
        answer:
          "En una venta de 410.000 €, el 3 % de agencia supera 12.000 €. Livendia cubre el tramo de arras por 145 € IVA incl.",
      },
      {
        question: "¿Plazo de entrega del contrato?",
        answer: "48–72 h laborables tras la llamada con tu gestor asignado.",
      },
    ],
  },

  "barcelona-gotic": {
    heroSubtitle: `Redactamos tu contrato de arras en el Barri Gòtic entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Plaça Reial, Carrer del Bisbe, CCCat 621-4 a 621-9 y cláusula 621-49. Gestor online Livendia.`,
    gestorPitch:
      "En el Gòtic las fincas medievales exigen arras a medida. Tu gestor Livendia documenta humedades, accesos estrechos y uso mixto vivienda–local antes de que ingreses la señal — no una plantilla de Madrid.",
    fairArrasHeading: "Redacción de arras justas en el Barri Gòtic",
    fairArrasIntro:
      "Plaça Reial, Carrer del Bisbe y el Call concentran compraventas rápidas entre particulares. Livendia calibra penalidades, plazos hasta escritura y coherencia registral en fincas sin ascensor.",
    legalSpanish:
      "Código Civil español en complemento al Codi civil de Catalunya para compraventa entre particulares en Ciutat Vella.",
    legalCatalan:
      "Régimen de arras del CCCat (621-4 a 621-9) aplicado al Barri Gòtic: penitenciarias y confirmatòries con efectos claros para ambas partes.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat: cláusula de financiación redactada por el gestor cuando la operación depende de hipoteca.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "El Barri Gòtic mezcla fincas históricas, pisos sin ascensor y locales en planta baja (~22–26 €/m²). Compradores y vendedores cierran en visita pero firman arras copiadas que ignoran humedades en patio o conflicto vivienda–local.",
    zonesHeading: "Contrato de arras en el Barri Gòtic y entorno",
    zonesParagraph: "Gestor asignado en:",
    zoneGroups: [
      { district: "Plaça Reial", areas: "Plaça Reial, Ferran, Colom límite" },
      { district: "Carrer del Bisbe", areas: "Bisbe, Plaça Sant Jaume límite" },
      { district: "El Call", areas: "Call, Banys Nous, carrer de Sant Domènec" },
      { district: "Jaume I", areas: "Via Laietana límite, Argenteria" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias con cláusulas sobre estado del inmueble, acceso estrecho para mudanza y plazos hasta escritura en notaría barcelonesa.",
    moneyLossRisks: [
      {
        title: "Humedad preexistente no declarada",
        body: "Patologías en patio interior en edificios medievales — reflejarlas antes de arras.",
      },
      {
        title: "Local comercial sin delimitar",
        body: "Uso mixto vivienda–local mal descrito — conflicto antes de escritura.",
      },
      {
        title: "Confirmatorias mal identificadas",
        body: "Texto que mezcla regímenes del CCCat — confusión costosa en Ciutat Vella.",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis arras en Plaça Reial o Carrer del Bisbe?",
        answer:
          "Sí. 145 € IVA incl., gestor asignado, trámite online. Adaptamos arras a fincas históricas conforme al CCCat.",
      },
      {
        question: "¿Atendéis compradores que no viven en Barcelona?",
        answer:
          "Sí. Trámite online con gestor por videollamada o WhatsApp — habitual en operaciones en el Gòtic con comprador extranjero.",
      },
      {
        question: "¿Qué incluye la plataforma Livendia?",
        answer:
          "Expediente centralizado: contrato, documentos, hitos y comunicación con el gestor antes de la señal.",
      },
      {
        question: "¿Incluye art. 621-49?",
        answer:
          "Sí cuando compras con hipoteca. El gestor redacta desistimiento conforme al CCCat si el banco deniega el préstamo en plazo.",
      },
      {
        question: "¿Otros servicios tras las arras?",
        answer:
          "Servicio completo de venta (890 €), revisión post-arras (350 €), LAU y administración de alquiler — mismo hub Livendia.",
      },
    ],
  },

  "barcelona-sarria": {
    heroSubtitle: `Gestor que redacta tu contrato de arras en Sarrià entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Reina Elisenda, Sarrià centre, CCCat 621-4 a 621-9 y cláusula 621-49. Livendia online.`,
    gestorPitch:
      "En Sarrià y Reina Elisenda las señales suelen ser elevadas. Tu gestor Livendia calibra penalidades conforme al CCCat, revisa coherencia registral y redacta arras con anexos de parking o trastero — no copiadas de otra venta.",
    fairArrasHeading: "Arras equilibradas en Sarrià y Reina Elisenda",
    fairArrasIntro:
      "Pisos señoriales, colegios internacionales y ticket premium (~6.000 €/m² venta) exigen arras a medida. Livendia equilibra señal, plazos de cancelación de hipoteca y objeto del inmueble.",
    legalSpanish:
      "Código Civil español aplicado junto al Codi civil de Catalunya en operaciones en Sarrià-Sant Gervasi.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat en Sarrià: arras penitenciarias y confirmatòries calibradas para particulares en fincas premium.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat integrado en operaciones con hipoteca — plazo y resolución bancaria exigible por escrito.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "Sarrià encabeza el ticket de venta en Barcelona capital. Compradores y vendedores particulares acuerdan en visita pero firman arras genéricas que no reflejan parking comunitario, portería o derramas de ascensor.",
    zonesHeading: "Contrato de arras en Sarrià y entorno",
    zonesParagraph: "Gestor asignado para particulares en:",
    zoneGroups: [
      { district: "Sarrià centre", areas: "Sarrià, Major de Sarrià, Reis Catòlics" },
      { district: "Reina Elisenda", areas: "Reina Elisenda, Mandri, fincas señoriales" },
      { district: "Les Tres Torres (límite)", areas: "Tres Torres, Via Augusta límite" },
      { district: "Vallvidrera (límite)", areas: "Vallvidrera, Tibidabo límite" },
    ],
    arrasTypesIntro:
      "Arras penitenciales o confirmatorias con anexos de parking, trastero, terraza comunitaria o jardín cuando formen parte del precio pactado.",
    moneyLossRisks: [
      {
        title: "Señal desproporcionada en Reina Elisenda",
        body: "Importes altos sin calibrar al CCCat — el gestor equilibra penalidades antes de firmar.",
      },
      {
        title: "Parking no descrito en registro",
        body: "Plaza de garaje incluida verbalmente pero omitida en arras — grieta antes de notaría.",
      },
      {
        title: "Plazo de hipoteca irreal",
        body: "15 días para aprobación en operaciones complejas — plazos ajustados a la realidad bancaria.",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis arras en Sarrià y Reina Elisenda?",
        answer:
          "Sí. Adaptamos el contrato al inmueble concreto — parking, herencia o comprador con hipoteca — con gestor asignado y panel Livendia.",
      },
      {
        question: "¿Cómo trabaja Livendia?",
        answer:
          "Contratas online, gestor asignado revisa borrador, redacta arras en 48–72 h y centraliza documentos en la plataforma — sin comisión sobre el precio de venta.",
      },
      {
        question: "¿Qué es Livendia frente a una inmobiliaria?",
        answer:
          "Gestoría digital especializada en contratos y trámites: no captamos compradores ni cobramos porcentaje sobre la venta.",
      },
      {
        question: "¿Incluye art. 621-49?",
        answer:
          "Sí cuando compras con hipoteca. El gestor redacta desistimiento conforme al CCCat si el banco deniega el préstamo en plazo.",
      },
      {
        question: "¿Cuánto cuesta tramitar las arras?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incluido por contrato, con gestor asignado y llamada previa incluidas.`,
      },
    ],
  },

  "barcelona-barceloneta": {
    heroSubtitle: `Contrato de arras en La Barceloneta para particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Passeig Joan de Borbó, CCCat 621-4 a 621-9, cláusula 621-49. Gestor online Livendia — sin comisión de agencia.`,
    gestorPitch:
      "En La Barceloneta las compraventas van rápido entre particulares. Tu gestor Livendia redacta arras que reflejan orientación al mar, climatización e humedad salina — antes de ingresar la señal.",
    fairArrasHeading: "Arras justas en La Barceloneta entre particulares",
    fairArrasIntro:
      "Pisos compactos orientados al mar y edificios del barrio marinero exigen arras que documenten estado real del inmueble. Livendia calibra penalidades y protege financiación con art. 621-49.",
    legalSpanish:
      "Marco del Código Civil español junto al Codi civil de Catalunya en compraventas en Ciutat Vella.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat en La Barceloneta: arras penitenciarias y confirmatòries adaptadas a fincas marítimas.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat: cláusula de financiación cuando la operación depende de hipoteca bancaria.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "La Barceloneta concentra pisos tradicionales frente al mar y presión residencial en Ciutat Vella (~25–28 €/m²). Compradores y vendedores cierran en visita pero firman arras que no documentan carpintería expuesta a salitre o climatización.",
    zonesHeading: "Contrato de arras en La Barceloneta",
    zonesParagraph: "Gestor asignado en:",
    zoneGroups: [
      { district: "Passeig Joan de Borbó", areas: "Passeig de Joan de Borbó, fachada marítima" },
      { district: "Interior del barrio", areas: "Carrers estrets, barrio de pescadores" },
      { district: "Platja de la Barceloneta", areas: "Entorno playa, orientación mar" },
      { district: "Port Vell (límite)", areas: "Port Vell, Moll de la Fusta límite" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias con cláusulas sobre estado de carpintería, climatización y plazos hasta escritura.",
    moneyLossRisks: [
      {
        title: "Estado de carpintería no reflejado",
        body: "Ventanas y persianas expuestas al mar — documentar antes de arras.",
      },
      {
        title: "Uso turístico mal encuadrado",
        body: "Confusión entre compraventa habitual y segunda residencia — el gestor aclara régimen.",
      },
      {
        title: "Señal sin art. 621-49",
        body: "Comprador con hipoteca sin cláusula de desistimiento — riesgo de perder la señal.",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis arras en La Barceloneta entre particulares?",
        answer:
          "Sí. 145 € IVA incl., gestor asignado, trámite online. Adaptamos arras al inmueble concreto conforme al CCCat.",
      },
      {
        question: "¿Qué es la plataforma Livendia?",
        answer:
          "Panel con expediente, contrato, documentos y comunicación con el gestor — propietario e comprador siguen el avance antes de la señal.",
      },
      {
        question: "¿Livendia es referente en contratos inmobiliarios?",
        answer:
          "Nos especializamos en arras, venta entre particulares, LAU y revisión legal — no somos agencia de captación.",
      },
      {
        question: "¿Incluye cláusula art. 621-49?",
        answer:
          "Sí, si la operación lo requiere. El gestor redacta plazo, importe del préstamo y documentación bancaria exigible.",
      },
      {
        question: "¿Plazo de entrega?",
        answer: "48–72 h laborables tras la llamada con tu gestor asignado.",
      },
    ],
  },

  "barcelona-vila-olimpica": {
    heroSubtitle: `Tramitamos tu contrato de arras en la Vila Olímpica entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Port Olímpic, Nova Icària, CCCat 621-4 a 621-9 y cláusula 621-49. Livendia online.`,
    gestorPitch:
      "En la Vila Olímpica las operaciones incluyen parking comunitario, terrazas y compradores internacionales. Tu gestor Livendia redacta arras equilibradas conforme al CCCat — no plantillas genéricas.",
    fairArrasHeading: "Tramitación de arras en la Vila Olímpica",
    fairArrasIntro:
      "Bloques olímpicos de los 90 con ascensor y zonas comunes exigen arras que describan parking, trastero y terraza. Livendia calibra señal y plazos de financiación antes de firmar.",
    legalSpanish:
      "Código Civil español en complemento al Codi civil de Catalunya para compraventa en Sant Martí.",
    legalCatalan:
      "Régimen de arras del CCCat (621-4 a 621-9) en la Vila Olímpica: penitenciarias y confirmatòries con efectos claros.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat integrado cuando el comprador financia — plazo, entidad y resolución bancaria exigible.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "La Vila Olímpica combina bloques post-olímpicos, vistas al mar y demanda de familias (~26–28 €/m²). Operaciones directas sin agencia frecuentes; borradores copiados no describen parking comunitario ni terrazas.",
    zonesHeading: "Contrato de arras en la Vila Olímpica y entorno",
    zonesParagraph: "Gestor asignado en:",
    zoneGroups: [
      { district: "Vila Olímpica centre", areas: "Vila Olímpica, Icària, edificios olímpicos" },
      { district: "Port Olímpic", areas: "Port Olímpic, Marina, entorno marítimo" },
      { district: "Nova Icària", areas: "Nova Icària, terrazas orientación mar" },
      { district: "Parc Nova Icària (límite)", areas: "Parc de la Nova Icària, Poblenou límite" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias con anexos de parking, trastero y terraza comunitaria cuando formen parte del precio pactado.",
    moneyLossRisks: [
      {
        title: "Parking comunitario no anexado",
        body: "Plaza de garaje incluida en precio verbal pero omitida en arras — conflicto registral.",
      },
      {
        title: "Terraza comunitaria mal delimitada",
        body: "Uso de terraza compartida sin cláusula — disputa entre comprador y comunidad.",
      },
      {
        title: "Financiación internacional sin 621-49",
        body: "Comprador extranjero con hipoteca en España — cláusula imprescindible conforme al CCCat.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras en la Vila Olímpica y Port Olímpic?",
        answer:
          "Sí. Adaptamos arras al inmueble — parking, terraza, hipoteca — con gestor asignado y panel Livendia.",
      },
      {
        question: "¿Cómo funciona Livendia?",
        answer:
          "Contratas online, gestor asignado revisa borrador, redacta en 48–72 h y centraliza documentos — sin comisión sobre la venta.",
      },
      {
        question: "¿Atendéis compradores internacionales?",
        answer:
          "Sí. Trámite online con gestor por videollamada o WhatsApp — habitual en operaciones con comprador extranjero.",
      },
      {
        question: "¿Incluye art. 621-49?",
        answer:
          "Sí cuando compras con hipoteca. El gestor redacta desistimiento conforme al CCCat si el banco deniega el préstamo.",
      },
      {
        question: "¿Qué otros servicios ofrece Livendia?",
        answer:
          "LAU, administración de alquiler, servicio completo de venta y revisión post-arras — hub livendia.com.",
      },
    ],
  },

  "barcelona-el-raval": {
    heroSubtitle: `Redactamos tu contrato de arras en El Raval entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Rambla del Raval, MACBA, CCCat 621-4 a 621-9 y cláusula 621-49. Gestor online Livendia.`,
    gestorPitch:
      "En El Raval las compraventas mezclan edificios del s. XIX, plantas baja comerciales y rotación elevada. Tu gestor Livendia redacta arras que documentan humedades, uso de local y cargas registrales — antes de la señal.",
    fairArrasHeading: "Redacción de arras justas en El Raval",
    fairArrasIntro:
      "Rambla del Raval, MACBA y Raval sud concentran operaciones rápidas entre particulares. Livendia calibra penalidades, plazos hasta escritura y coherencia registral en fincas sin ascensor.",
    legalSpanish:
      "Marco del Código Civil español aplicado junto al Codi civil de Catalunya en Ciutat Vella.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat en El Raval: arras penitenciarias y confirmatòries calibradas para particulares.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat: cláusula de financiación redactada por el gestor cuando la operación depende de hipoteca.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "El Raval mezcla pisos compartidos, plantas baja comerciales y edificios antiguos (~20–26 €/m²). Compradores y vendedores cierran en visita pero firman arras genéricas que ignoran humedades, uso mixto o cargas registrales.",
    zonesHeading: "Contrato de arras en barrios de El Raval",
    zonesParagraph: "Gestor asignado para particulares en:",
    zoneGroups: [
      { district: "Rambla del Raval", areas: "Rambla del Raval, Sant Antoni límite" },
      { district: "MACBA — Carme", areas: "MACBA, Carrer de la Cera, Hospital" },
      { district: "Raval sud", areas: "Raval sud, Montalegre, Liceu límite" },
      { district: "Gòtic límite", areas: "Liceu, Sant Pau del Camp límite" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias con cláusulas sobre humedades conocidas, local en planta baja y plazos hasta escritura.",
    moneyLossRisks: [
      {
        title: "Local comercial no delimitado",
        body: "Uso mixto vivienda–local mal descrito — conflicto antes de escritura.",
      },
      {
        title: "Humedades en edificio antiguo",
        body: "Patologías preexistentes no reflejadas — el gestor recomienda documentarlas en arras.",
      },
      {
        title: "Penalidad desproporcionada",
        body: "Señales mal calibradas en operaciones rápidas — el gestor equilibra conforme al CCCat.",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis arras en El Raval entre particulares?",
        answer:
          "Sí. 145 € IVA incl., gestor asignado, trámite online. Revisamos borrador ajeno o redactamos desde cero conforme al CCCat.",
      },
      {
        question: "¿Qué incluye la plataforma Livendia?",
        answer:
          "Panel con expediente, contrato, documentos y comunicación con el gestor — trazabilidad antes de ingresar la señal.",
      },
      {
        question: "¿Livendia busca comprador?",
        answer:
          "No. Somos gestoría especializada: redactamos arras cuando comprador y vendedor ya se han encontrado sin agencia.",
      },
      {
        question: "¿Incluye art. 621-49 para hipoteca?",
        answer:
          "Sí, si la operación lo requiere. El gestor redacta plazo, importe del préstamo y documentación bancaria exigible.",
      },
      {
        question: "¿Cuánto cuesta frente a una inmobiliaria?",
        answer:
          "Livendia cobra 145 € IVA incl. por arras. Una agencia suele cobrar 3–5 % sobre el precio de venta — aquí solo pagas gestoría contractual.",
      },
    ],
  },
};
