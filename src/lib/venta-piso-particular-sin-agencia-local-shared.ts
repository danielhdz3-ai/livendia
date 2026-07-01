import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";

/** Mensaje diferenciador principal — repetir de forma natural en la landing. */
export const LIVENDIA_DIFFERENTIATOR =
  "Tú encuentras al comprador; nosotros nos ocupamos de que la compraventa entre particulares llegue a buen puerto con total seguridad jurídica.";

export const VENTA_PARTICULAR_NOT_AGENCY = [
  "No somos una inmobiliaria ni captamos compradores por ti.",
  "No publicamos anuncios ni cobramos comisión sobre el precio de venta.",
  "No sustituimos a una agencia de marketing: tú ya has cerrado el acuerdo con tu comprador particular.",
  "Sí asignamos un gestor inmobiliario especializado que coordina toda la operación hasta notaría.",
] as const;

export const VENTA_PARTICULAR_WHAT_LIVENDIA_DOES = [
  {
    title: "Entramos cuando ya tienes comprador",
    body: "Livendia no interviene en la búsqueda ni en la negociación del precio. Nuestro trabajo empieza en el momento en que tú y tu comprador particular tenéis un acuerdo y necesitáis cerrarlo con seguridad.",
  },
  {
    title: "Tarifa plana, sin comisión",
    body: `El servicio completo cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — no un 3 % ni un 5 % sobre el precio de tu piso.`,
  },
  {
    title: "Un gestor asignado durante todo el proceso",
    body: "No es un PDF automático ni un call center: una persona conoce tu caso, responde tus dudas por teléfono y te guía desde las arras hasta la entrega de llaves.",
  },
  {
    title: "Acompañamiento humano, no solo papeles",
    body: "Te explicamos en lenguaje claro qué significa cada cláusula, qué pasa si el banco tarda o si la comunidad no responde — y qué opciones tienes en cada momento.",
  },
] as const;

export const VENTA_PARTICULAR_GESTOR_HUMAN = [
  {
    title: "Llamada de diagnóstico incluida",
    body: "Tras contratar, tu gestor te llama para entender la operación: precio pactado, plazos, hipoteca del comprador, cargas del inmueble y calendario realista.",
  },
  {
    title: "Disponible cuando surgen dudas",
    body: "¿El comprador pide modificar una cláusula? ¿La comunidad tarda? ¿El notario solicita un documento extra? Tu gestor responde y coordina — no te deja solo frente al papeleo.",
  },
  {
    title: "Panel digital para seguir el expediente",
    body: "Subes documentos, ves el estado de cada trámite y compartes información con tu comprador si procede — con un profesional supervisando todo.",
  },
  {
    title: "Hasta el día de la firma",
    body: "El gestor no desaparece tras redactar las arras: acompaña la obtención de certificados, la preparación pre-notaría y la resolución de incidencias de última hora.",
  },
] as const;

/** Línea temporal completa de la venta entre particulares. */
export const VENTA_PARTICULAR_TIMELINE = [
  {
    step: 1,
    title: "Acuerdo entre particulares",
    body: "Tú y tu comprador cerráis precio y condiciones. Livendia entra aquí: revisamos que el acuerdo sea viable antes de firmar nada vinculante.",
  },
  {
    step: 2,
    title: "Revisión documental",
    body: "Tu gestor genera checklist personalizado: nota simple, comunidad, cédula, energético, IBI e hipoteca pendiente si la hay.",
  },
  {
    step: 3,
    title: "Contrato de arras",
    body: "Redactamos o revisamos penitenciales o confirmatorias conforme al CCCat, incluida cláusula de financiación si el comprador pide hipoteca.",
  },
  {
    step: 4,
    title: "Preparación de la compraventa",
    body: "Obtenemos certificados pendientes, cruzamos documentación con lo pactado y resolvemos incidencias con margen de tiempo.",
  },
  {
    step: 5,
    title: "Notaría",
    body: "Coordinamos fecha, verificamos que no falte ningún documento y resolvemos dudas de última hora con comprador y notario.",
  },
  {
    step: 6,
    title: "Firma de escritura",
    body: "Compareces en notaría con la documentación en orden. Tu gestor ha preparado el terreno para que la firma sea un trámite, no una sorpresa.",
  },
  {
    step: 7,
    title: "Entrega de llaves",
    body: "Cierre de suministros, liquidación de IBI prorrateado y entrega conforme a lo pactado. Orientación sobre plusvalía e impuestos del vendedor.",
  },
] as const;

export const VENTA_PARTICULAR_COMMON_MISTAKES = [
  {
    title: "Firmar arras copiadas de internet",
    body: "Plantillas genéricas omiten plazos, cláusula 621-49 CCCat si hay hipoteca o consecuencias del incumplimiento. Un error aquí puede costarte la señal entera o meses de conflicto.",
  },
  {
    title: "Fijar fecha de notaría sin tener la documentación",
    body: "El certificado de deuda de la comunidad o la cancelación de hipoteca pueden tardar semanas. Prometer escritura en 30 días sin haber pedido papeles es la principal causa de tensiones con el comprador.",
  },
  {
    title: "No verificar cargas antes de recibir señal",
    body: "Hipotecas, embargos, derramas aprobadas o discrepancias registrales aparecen en la nota simple — pero muchos vendedores las descubren tarde.",
  },
  {
    title: "Mezclar arras penitenciales y confirmatorias",
    body: "Un texto que dice una cosa y aplica otra genera disputas sobre quién pierde la señal si alguien se echa atrás.",
  },
  {
    title: "Entregar llaves antes de escritura sin protección",
    body: "Sin contrato que ampare la posesión, el vendedor asume riesgos si el comprador ocupa el piso y luego falla la operación.",
  },
  {
    title: "Ignorar la cédula de habitabilidad caducada",
    body: "En Catalunya no se puede transmitir vivienda sin cédula vigente. Detectarlo a la semana de notaría obliga a retrasar la venta.",
  },
] as const;

export const VENTA_PARTICULAR_PROCESS_STEPS = [
  {
    step: 1,
    title: "Revisamos la operación",
    body: "Analizamos el acuerdo con tu comprador particular: precio, plazos, hipoteca del comprador, cargas del inmueble y calendario realista hasta escritura.",
  },
  {
    step: 2,
    title: "Comprobamos toda la documentación",
    body: "Generamos un checklist personalizado según tu piso: nota simple, escrituras, IBI, comunidad, certificados y coherencia con lo que declaras al comprador.",
  },
  {
    step: 3,
    title: "Revisamos o redactamos el contrato de arras",
    body: `Penitenciales o confirmatorias adaptadas a CCCat en Catalunya. Si aún no tienes arras, las redactamos; si traes borrador, lo corregimos. (${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} solo si contratas arras por separado fuera del servicio completo.)`,
  },
  {
    step: 4,
    title: "Coordinamos la documentación necesaria",
    body: "Solicitamos certificados de comunidad, verificamos ITE y energético, coordinamos hipoteca pendiente y resolvemos incidencias con tiempo de margen.",
  },
  {
    step: 5,
    title: "Preparamos la firma",
    body: "Cruzamos lo pactado en arras con la documentación obtenida y preparamos el checklist pre-escritura para comprador, vendedor y notaría.",
  },
  {
    step: 6,
    title: "Acompañamos hasta notaría",
    body: "Tu gestor resuelve dudas de última hora, coordina fechas y verifica que no falte ningún documento el día de la compraventa.",
  },
  {
    step: 7,
    title: "Supervisamos el cierre de la compraventa",
    body: "Seguimos la operación hasta la firma y la entrega de llaves, con orientación sobre plusvalía e impuestos del vendedor (gestión fiscal aparte).",
  },
] as const;

export const VENTA_PARTICULAR_DOCUMENTATION = [
  {
    title: "Nota simple registral",
    body: "Titularidad actual, cargas, hipotecas, afecciones fiscales y coherencia con la escritura que vais a transmitir.",
    href: "/servicios/revision-documental-post-arras",
  },
  {
    title: "Escrituras y título de propiedad",
    body: "Revisión de superficies, anejos, trasteros o parkings incluidos y posibles discrepancias con catastro o registro.",
  },
  {
    title: "IBI y recibos municipales",
    body: "Último recibo, prorrateo entre vendedor y comprador y comprobación de que no hay deudas pendientes con el ayuntamiento.",
  },
  {
    title: "Certificado energético",
    body: "Obligatorio para escriturar. Verificamos vigencia (10 años) y coherencia con la vivienda que se transmite.",
  },
  {
    title: "Cédula de habitabilidad",
    body: "En Catalunya es exigible para transmitir. Comprobamos si está vigente o si debe renovarse antes de la firma.",
  },
  {
    title: "Certificados de comunidad",
    body: "Certificado de deuda cero, actas recientes, derramas aprobadas y estado de cuotas de comunidad.",
    href: "/servicios/gestion-documental-vendedor",
  },
  {
    title: "Cargas e hipotecas",
    body: "Certificado de deuda del banco, calendario de cancelación en notaría y coherencia con lo pactado en arras.",
  },
  {
    title: "Contrato de arras",
    body: "Redacción o revisión de penitenciales o confirmatorias, cláusula 621-49 CCCat si el comprador financia, y plazos hasta escritura.",
    href: "/servicios/contrato-de-arras",
  },
  {
    title: "Contrato de compraventa",
    body: "Orientación sobre el borrador notarial, condiciones suspensivas y entrega de llaves conforme a lo acordado entre particulares.",
  },
] as const;

export const VENTA_PARTICULAR_INTERNAL_LINKS = [
  {
    href: "/servicios/contrato-de-arras",
    label: "Revisión y redacción de contrato de arras",
    description: "Penitenciales o confirmatorias adaptadas a tu operación y al CCCat.",
  },
  {
    href: "/servicios/revision-documental-post-arras",
    label: "Revisión documental post-arras",
    description: "Checklist registral y de comunidad tras firmar la señal.",
  },
  {
    href: "/servicios/gestion-documental-vendedor",
    label: "Documentación para vender un piso",
    description: "Gestión documental de arras a escritura si ya firmaste señal.",
  },
  {
    href: "/gestoria/barcelona",
    label: "Gestoría inmobiliaria",
    description: "Asesoramiento integral en compraventa en Catalunya.",
  },
  {
    href: "/blog/que-es-un-contrato-de-arras",
    label: "Qué es un contrato de arras",
    description: "Guía para entender tipos, plazos y riesgos antes de firmar.",
  },
  {
    href: "/blog/diferencia-arras-penitenciales-confirmatorias",
    label: "Arras penitenciales vs confirmatorias",
    description: "Cuál conviene en una venta entre particulares.",
  },
  {
    href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria",
    label: "Cuánto cuesta una gestoría inmobiliaria",
    description: "Comparativa frente a comisiones de agencia tradicional.",
  },
] as const;

export const VENTA_PARTICULAR_COMPARISON_ROWS = [
  {
    aspect: "Buscar comprador",
    agencia: "Sí — comisión 3–5 % + IVA",
    solo: "Tú (Idealista, boca a boca…)",
    livendia: "No — ya tienes comprador",
  },
  {
    aspect: "Comisión sobre precio venta",
    agencia: "Miles de euros",
    solo: "0 €",
    livendia: `0 € — tarifa plana ${SERVICIO_COMPLETO_CV_PRICE_LABEL}`,
  },
  {
    aspect: "Contrato de arras",
    agencia: "A veces incluido en comisión",
    solo: "Plantilla de internet (riesgo)",
    livendia: "Redactado o revisado por gestor",
  },
  {
    aspect: "Documentación pre-escritura",
    agencia: "Variable según agencia",
    solo: "15–20 h de gestiones tuyas",
    livendia: "Checklist y gestión por tu gestor",
  },
  {
    aspect: "Coordinación notaría",
    agencia: "Sí, si pagas comisión",
    solo: "Tú llamas y persigues papeles",
    livendia: "Gestor Livendia coordina",
  },
  {
    aspect: "Gestor dedicado",
    agencia: "Agente comercial",
    solo: "Nadie",
    livendia: "Gestor inmobiliario asignado",
  },
  {
    aspect: "Riesgo de error documental",
    agencia: "Medio — depende del agente",
    solo: "Alto — descubres tarde",
    livendia: "Bajo — revisión profesional",
  },
] as const;

export const VENTA_PARTICULAR_BENEFITS = [
  {
    title: "Ahorro de comisiones",
    body: "Si ya tienes comprador, pagar un 3–5 % a una agencia no tiene sentido económico. Livendia cubre la parte legal y documental por tarifa fija.",
  },
  {
    title: "Tranquilidad",
    body: "Sabes qué documentos faltan, en qué plazo conseguirlos y qué pasa si aparece una incidencia — sin improvisar a la semana de notaría.",
  },
  {
    title: "Seguridad jurídica",
    body: "Contratos adaptados a tu operación y normativa catalana (CCCat en arras y financiación), no copias de otra venta.",
  },
  {
    title: "Gestor dedicado",
    body: "Un profesional conoce tu caso, responde por teléfono y te guía hasta la firma — no un call center genérico.",
  },
  {
    title: "Revisión documental exhaustiva",
    body: "Nota simple, comunidad, ITE, energético, cédula y hipoteca cruzados antes de comprometer plazos irreales con tu comprador.",
  },
  {
    title: "Coordinación con notaría",
    body: "Preparamos el terreno para que el día de la firma no falte un certificado ni surja una carga no prevista.",
  },
] as const;
