import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";

export const VENTA_PARTICULAR_NOT_AGENCY = [
  "No somos una inmobiliaria ni captamos compradores por ti.",
  "No publicamos anuncios ni cobramos comisión sobre el precio de venta.",
  "No sustituimos a una agencia de marketing: tú ya has cerrado el acuerdo con tu comprador particular.",
  "Sí asignamos un gestor inmobiliario especializado que coordina toda la operación hasta notaría.",
] as const;

export const VENTA_PARTICULAR_WHAT_LIVENDIA_DOES = [
  {
    title: "Mantienes el control de la venta",
    body: "Tú negociaste el precio con tu comprador. Nosotros no intervenimos en la captación ni en la comercialización del inmueble.",
  },
  {
    title: "Tarifa plana, sin comisión",
    body: `El servicio completo cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — no un 3 % ni un 5 % sobre el precio de tu piso.`,
  },
  {
    title: "Gestor dedicado de principio a fin",
    body: "Un gestor inmobiliario se asigna a tu expediente y te acompaña en cada hito: arras, documentación, incidencias y firma en notaría.",
  },
  {
    title: "Seguridad jurídica y documental",
    body: "Revisamos o redactamos contratos, contrastamos registro y comunidad, y detectamos problemas antes de que comprometas la señal o llegues a notaría.",
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
  },
  {
    title: "Cargas e hipotecas",
    body: "Certificado de deuda del banco, calendario de cancelación en notaría y coherencia con lo pactado en arras.",
  },
  {
    title: "Contrato de arras",
    body: "Redacción o revisión de penitenciales o confirmatorias, cláusula 621-49 CCCat si el comprador financia, y plazos hasta escritura.",
  },
  {
    title: "Contrato de compraventa",
    body: "Orientación sobre el borrador notarial, condiciones suspensivas y entrega de llaves conforme a lo acordado entre particulares.",
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
