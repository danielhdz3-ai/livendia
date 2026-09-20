import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";
import type { ArrasLocalSeoContent } from "@/lib/contrato-arras-local-seo-content";

type BcnBarrioArrasSeo = Omit<ArrasLocalSeoContent, "financingEducation">;

/** Copy SEO único — contrato de arras barrios Barcelona (CCCat). */
export const ARRAS_BCN_BARRIO_SEO_CONTENT: Record<string, BcnBarrioArrasSeo> = {
  "barcelona-eixample": {
    heroSubtitle: `¿Compras o vendes en el Eixample entre particulares? Tramitamos tu contrato de arras por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.: gestor asignado, CCCat (621-4 a 621-9) y cláusula 621-49 si hay hipoteca. Servicio online Livendia — sin comisión de agencia.`,
    gestorPitch:
      "No firmes arras copiadas de una inmobiliaria del ensanche. En Livendia un gestor inmobiliario-jurídico se asigna a tu expediente: explica penitenciales vs confirmatorias, calibra la señal y redacta el contrato antes de que transfieras un euro.",
    fairArrasHeading: "Arras justas en el Eixample entre particulares",
    fairArrasIntro:
      "En Dreta, Esquerra o Sagrada Família las compraventas cierran rápido — y circulan borradores pensados para otra operación. Livendia contrasta penalidades, plazos hasta escritura, derramas en fincas regias y coherencia registral.",
    legalSpanish:
      "El Código Civil español (art. 1454 y ss.) complementa el marco autonómico. En operaciones inmobiliarias en Barcelona capital aplican las reglas del Codi civil de Catalunya sobre compraventa y señal.",
    legalCatalan:
      "En el Eixample rige el Codi civil de Catalunya. Los arts. 621-4 a 621-9 definen arras penitenciarias y confirmatòries, sus efectos si una parte incumple y cómo se vincula la señal al contrato definitivo.",
    legalCatalanFinancing:
      "El art. 621-49 CCCat regula el desistimiento del comprador cuando no obtiene la financiación bancaria en los términos pactados. Si compras con hipoteca en el Eixample, el gestor redacta esta cláusula para no perder la señal si el banco deniega el préstamo.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "El Eixample concentra fincas del ensanche, ascensores antiguos y ticket alto (~26–30 €/m² alquiler publicado). Compradores y vendedores particulares suelen acordar precio en visita pero firmar arras genéricas que no reflejan derramas comunitarias ni plazos realistas de cancelación de hipoteca.",
    zonesHeading: "Contrato de arras en barrios del Eixample",
    zonesParagraph: "Gestor asignado para particulares en:",
    zoneGroups: [
      { district: "Dreta de l'Eixample", areas: "Dreta, Passeig de Gràcia, Provença, fincas regias" },
      { district: "Esquerra de l'Eixample", areas: "Antiga Esquerra, Nova Esquerra, Comte Borrell" },
      { district: "Fort Pienc — Sagrada Família", areas: "Fort Pienc, Sagrada Família, Nàpols" },
      { district: "Sant Antoni (límite)", areas: "Sant Antoni, Urgell, entorno mercado" },
    ],
    arrasTypesIntro:
      "Te orientamos entre arras penitenciales (621-4 CCCat) y confirmatorias según tu operación en el ensanche. El gestor adapta plazos, objeto del inmueble y documentación exigible antes del resto del precio.",
    moneyLossRisks: [
      {
        title: "Penalidad desproporcionada en finca premium",
        body: "Señales de 30.000 €+ mal calibradas — el gestor recalibra conforme al CCCat antes de firmar.",
      },
      {
        title: "Derrama comunitaria no reflejada",
        body: "Edificios centenarios con obras pendientes: checklist mínimo antes de arras en el Eixample.",
      },
      {
        title: "Financiación sin art. 621-49",
        body: "Comprador con hipoteca sin cláusula de desistimiento — riesgo de perder toda la señal si el banco dice no.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cómo funciona Livendia para tramitar arras en el Eixample?",
        answer:
          "Contratas online, un gestor se asigna a tu caso, revisa el borrador por videollamada o teléfono y redacta el contrato en 48–72 h. Expediente en panel Livendia — servicio 100 % digital.",
      },
      {
        question: "¿Livendia busca comprador o vende mi piso?",
        answer:
          "No. Somos gestoría: redactamos o revisamos arras por 145 € IVA incl. cuando comprador y vendedor ya se han encontrado sin agencia.",
      },
      {
        question: "¿Qué es la plataforma Livendia?",
        answer:
          "Panel donde centralizáis documentos, contrato, hitos del servicio y mensajes con el gestor — trazabilidad antes de ingresar la señal.",
      },
      {
        question: "¿Incluye cláusula art. 621-49 para hipoteca?",
        answer:
          "Sí, si la operación lo requiere. El gestor redacta plazo, importe del préstamo y documentación bancaria exigible conforme al CCCat.",
      },
      {
        question: "¿Qué otros servicios ofrece Livendia?",
        answer:
          "Servicio completo de venta (890 €), revisión post-arras, LAU, administración de alquiler y pack arras + gestión documental — hub en livendia.com.",
      },
    ],
  },

  "barcelona-gracia": {
    heroSubtitle: `Contrato de arras en Gràcia para particulares: gestor asignado por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. CCCat 621-4 a 621-9, cláusula 621-49 si hay hipoteca. Tramitación online Livendia — Vila de Gràcia, Camp d'en Grassot, La Salut.`,
    gestorPitch:
      "Comprador o vendedor en Gràcia: tu gestor Livendia domina CC español y Codi civil de Catalunya, explica qué pasa con tu señal si alguien se echa atrás y redacta arras equilibradas — no plantillas de agencia.",
    fairArrasHeading: "Gestión de arras justa en Gràcia",
    fairArrasIntro:
      "En Gràcia es habitual vender entre particulares cuando ya hay comprador por recomendación. El riesgo está en arras penitenciales con penalidad excesiva o sin protección hipotecaria (621-49) en pisos sin ascensor o con reforma pendiente.",
    legalSpanish:
      "Base estatal del Código Civil en obligaciones y compraventa, aplicada junto al Codi civil de Catalunya en operaciones en Barcelona.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat: arras penitenciarias y confirmatòries. En Gràcia calibramos efectos del incumplimiento y vinculación al contrato de compraventa definitivo.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat: desistimiento del comprador si no obtiene financiación en plazo y condiciones pactadas. Imprescindible en operaciones con hipoteca en el distrito.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "Gràcia mezcla pisos señoriales sin ascensor, reformas recientes y compradores jóvenes. Las operaciones van rápido — pero los borradores copiados no contemplan estado real del inmueble ni plazos de comunidad en edificios antiguos.",
    zonesHeading: "Contrato de arras en barrios de Gràcia",
    zonesParagraph: "Tramitamos arras para particulares en:",
    zoneGroups: [
      { district: "Vila de Gràcia", areas: "Vila de Gràcia, Torrent de l'Olla, Plaça del Sol" },
      { district: "Camp d'en Grassot", areas: "Camp d'en Grassot i Gràcia Nova" },
      { district: "La Salut", areas: "La Salut, Park Güell límite" },
      { district: "Vallcarca — El Coll", areas: "Vallcarca, El Coll (límite)" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias redactadas según uso real: piso entero, herencia compartida o venta con inquilino en LAU vigente — el gestor adapta cláusulas al caso.",
    moneyLossRisks: [
      {
        title: "Reforma pendiente no reflejada",
        body: "Vendedor promete obra acabada antes de escritura — sin plazos escritos, la señal queda en disputa.",
      },
      {
        title: "Inquilino en LAU no mencionado",
        body: "Compraventa con arrendatario vigente sin cláusula de ocupación — riesgo registral y contractual.",
      },
      {
        title: "Confirmatorias mal identificadas",
        body: "Texto que mezcla regímenes — confusión costosa antes de notaría.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras si compro en Gràcia entre particulares?",
        answer:
          "Sí. Gestor asignado, 145 € IVA incl., trámite online. Revisamos borrador del vendedor o redactamos desde cero con CCCat.",
      },
      {
        question: "¿Es un servicio online?",
        answer:
          "Sí. Contratas en livendia.com, subes documentación al panel y hablas con tu gestor por teléfono o WhatsApp — sin visitar un despacho en Gràcia.",
      },
      {
        question: "¿Qué otros servicios tiene Livendia en Barcelona?",
        answer:
          "Venta completa sin agencia, LAU, administración de alquiler, revisión documental post-arras y contrato entre particulares — accesibles desde el hub de servicios.",
      },
      {
        question: "¿Cuánto ahorro vs inmobiliaria?",
        answer:
          "En una venta de 400.000 €, el 3 % de agencia supera 12.000 €. Livendia cubre el tramo de arras por 145 € IVA incl.",
      },
      {
        question: "¿Plazo de entrega del contrato?",
        answer: "48–72 h laborables tras la llamada con tu gestor asignado.",
      },
    ],
  },

  "barcelona-les-corts": {
    heroSubtitle: `Gestor que tramita tu contrato de arras en Les Corts: ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl., especialista CCCat (621-4 a 621-9) y art. 621-49. Pedralbes, Zona Universitària, Diagonal — servicio online Livendia.`,
    gestorPitch:
      "En Les Corts y Pedralbes las operaciones suelen ir entre particulares con ticket alto. Tu gestor Livendia se asigna al expediente, revisa coherencia registral y redacta arras donde la señal está calibrada — no copiada de otra venta.",
    fairArrasHeading: "Arras equilibradas en Les Corts y Pedralbes",
    fairArrasIntro:
      "Pisos señoriales, parking comunitario y compradores con financiación exigen arras a medida. Livendia calibra penalidades, plazos de cancelación de hipoteca y objeto del inmueble antes de transferir la señal.",
    legalSpanish:
      "Código Civil español en complemento al Codi civil de Catalunya para compraventa entre particulares en Barcelona.",
    legalCatalan:
      "Régimen de arras del CCCat (621-4 a 621-9) aplicado a operaciones en Les Corts: penitenciarias y confirmatòries con efectos claros para ambas partes.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat integrado cuando el comprador financia — plazo, entidad y resolución bancaria exigible por escrito.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "Les Corts combina Pedralbes premium, familias en Maternitat y operaciones vinculadas al campus. Muchos vendedores viven fuera del distrito: el trámite online de Livendia evita desplazamientos solo para firmar arras mal redactadas.",
    zonesHeading: "Contrato de arras en zonas de Les Corts",
    zonesParagraph: "Gestor asignado en:",
    zoneGroups: [
      { district: "Pedralbes", areas: "Pedralbes, Diagonal alta, fincas señoriales" },
      { district: "Les Corts centre", areas: "Les Corts, Numància, entorno Camp Nou" },
      { district: "Zona Universitària", areas: "Zona Universitària, Tarragona, Diagonal" },
      { district: "Maternitat — Sant Ramon", areas: "Maternitat i Sant Ramon" },
    ],
    arrasTypesIntro:
      "Arras penitenciales o confirmatorias con anexos de parking, trastero o terraza comunitaria cuando formen parte del precio pactado.",
    moneyLossRisks: [
      {
        title: "Señal desproporcionada en Pedralbes",
        body: "Importes altos sin calibrar al CCCat — el gestor equilibra penalidades antes de firmar.",
      },
      {
        title: "Plazo de hipoteca irreal",
        body: "15 días para aprobación bancaria en operaciones complejas — plazos ajustados a la realidad.",
      },
      {
        title: "Cargas registrales omitidas",
        body: "Nota simple no contrastada — checklist mínimo antes de ingresar la señal.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis arras en Pedralbes y Les Corts?",
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
        question: "¿Otros servicios tras las arras?",
        answer:
          "Servicio completo de venta (890 €), revisión post-arras (350 €) y gestión documental del vendedor — mismo hub Livendia.",
      },
    ],
  },

  "barcelona-born": {
    heroSubtitle: `Redactamos tu contrato de arras en El Born entre particulares por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestor asignado, CCCat 621-4 a 621-9 y cláusula 621-49. Passeig del Born, Santa Maria del Mar — trámite online Livendia.`,
    gestorPitch:
      "En El Born las compraventas mezclan fincas históricas, locales en planta baja y compradores internacionales. Tu gestor Livendia redacta arras que reflejan el inmueble real — humedades conocidas, uso mixto y financiación — antes de la señal.",
    fairArrasHeading: "Arras justas en El Born (Ciutat Vella)",
    fairArrasIntro:
      "Ciutat Vella exige rigor: edificios del s. XVIII, patios interiores y operaciones rápidas entre particulares. Una arras genérica no protege al comprador ni al vendedor cuando aparecen cargas o el banco tarda en aprobar la hipoteca.",
    legalSpanish:
      "Marco del Código Civil español aplicado junto al Codi civil de Catalunya en compraventas en Barcelona capital.",
    legalCatalan:
      "Arts. 621-4 a 621-9 CCCat en El Born: arras penitenciarias y confirmatòries calibradas para particulares en fincas históricas.",
    legalCatalanFinancing:
      "Art. 621-49 CCCat: cláusula de financiación redactada por el gestor cuando la operación depende de hipoteca — evita perder la señal por denegación bancaria.",
    cccatArrasArticles: "621-4 a 621-9",
    cccatFinancingArticle: "621-49",
    localMarketIntro:
      "El Born concentra pisos reformados, locales comerciales en planta baja y ticket medio-alto en Ciutat Vella (~22–26 €/m²). Compradores y vendedores cierran en visita pero firman arras copiadas que ignoran humedades en patio o conflicto vivienda–local.",
    zonesHeading: "Contrato de arras en El Born y entorno",
    zonesParagraph: "Gestor asignado para particulares en:",
    zoneGroups: [
      { district: "Passeig del Born", areas: "Passeig del Born, Picasso, Ribera alta" },
      { district: "Santa Maria del Mar", areas: "Santa Maria del Mar, carrer Montcada límite" },
      { district: "Sant Pere — Santa Caterina", areas: "Sant Pere més Baix, Mercat Santa Caterina límite" },
      { district: "Gòtic límite", areas: "Princesa, Jaume I límite" },
    ],
    arrasTypesIntro:
      "Penitenciales o confirmatorias con cláusulas sobre estado del inmueble, local en planta baja y plazos hasta escritura en notaría barcelonesa.",
    moneyLossRisks: [
      {
        title: "Humedad preexistente no declarada",
        body: "Patologías en patio interior — el gestor recomienda reflejarlas antes de arras.",
      },
      {
        title: "Local comercial sin delimitar",
        body: "Uso mixto vivienda–local mal descrito — conflicto antes de escritura.",
      },
      {
        title: "Señal sin art. 621-49",
        body: "Comprador internacional con hipoteca en España — cláusula imprescindible.",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis arras en El Born entre particulares?",
        answer:
          "Sí. 145 € IVA incl., gestor asignado, trámite 100 % online. Revisamos borrador ajeno o redactamos desde cero conforme al CCCat.",
      },
      {
        question: "¿Qué incluye la plataforma Livendia?",
        answer:
          "Panel con expediente, contrato, documentos y comunicación con el gestor — propietario e comprador siguen el avance antes de la señal.",
      },
      {
        question: "¿Livendia es referente en contratos inmobiliarios?",
        answer:
          "Nos especializamos en arras, venta entre particulares, LAU y revisión legal — no somos agencia de captación.",
      },
      {
        question: "¿Atendéis compradores que no viven en Barcelona?",
        answer:
          "Sí. Trámite online con gestor por videollamada o WhatsApp — habitual en operaciones en El Born con comprador extranjero.",
      },
      {
        question: "¿Cuánto cuesta tramitar las arras?",
        answer: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incluido por contrato, con gestor asignado y llamada previa incluidas.`,
      },
    ],
  },
};
