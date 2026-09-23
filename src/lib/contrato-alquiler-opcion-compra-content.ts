import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";

export const CONTRATO_ALQUILER_OPCION_COMPRA_FAQ = [
  {
    question: "¿Qué es un contrato de alquiler con opción a compra?",
    answer:
      "Es un arrendamiento de vivienda (LAU) al que se añade un pacto por el que el inquilino puede adquirir el inmueble en un plazo y a un precio acordados. No es un LAU estándar ni una compraventa: combina el alquiler con una opción futura de compra que debe quedar bien definida por escrito.",
  },
  {
    question: "¿En qué se diferencia del contrato LAU habitual?",
    answer:
      "El LAU estándar regula solo el arrendamiento. Aquí añadimos cláusulas específicas: precio de ejercicio de la opción, plazo para ejercerla, qué ocurre si no se ejerce, si parte de la renta se imputa al precio final y cómo convive con los derechos del inquilino (tanteo, retracto, etc.). Livendia redacta ambos bloques de forma coherente.",
  },
  {
    question: "¿Pueden imputarse las rentas al precio de compra?",
    answer:
      "Sí, si las partes lo pactan expresamente. Hay que definir qué porcentaje o importe de cada mensualidad se descuenta del precio final, desde qué mes y qué pasa si el inquilino deja de pagar o no ejerce la opción. Lo recogemos en cláusulas claras para evitar conflictos posteriores.",
  },
  {
    question: "¿Qué documentación necesito para contratar?",
    answer:
      "DNI de propietario e inquilino, datos del inmueble (dirección, referencia catastral), renta pactada, duración del arrendamiento, precio de la opción de compra y plazo para ejercerla. Si ya tenéis borrador o acuerdo previo, adjuntadlo. Nota simple o escrituras ayudan a verificar titularidad y cargas.",
  },
  {
    question: `¿Cuánto cuesta el servicio?`,
    answer: `La redacción completa del contrato con opción a compra cuesta ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incluido. Incluye inventario, gestor dedicado y asesoramiento hasta la firma. El cobro es único; no hay comisión de agencia.`,
  },
  {
    question: "¿Livendia gestiona la compraventa cuando se ejerce la opción?",
    answer:
      "Este servicio cubre la redacción del contrato de alquiler con opción a compra. Si más adelante se ejerce la opción y necesitáis arras, gestión documental o servicio completo hasta escritura, podéis contratar esos servicios por separado en Livendia.",
  },
] as const;

export const CONTRATO_ALQUILER_OPCION_COMPRA_INCLUDES = [
  "Arrendamiento conforme a LAU con pacto de opción de compra",
  "Precio de ejercicio, plazo y condiciones de la opción",
  "Cláusulas sobre imputación de rentas (si aplica)",
  "Inventario descriptivo y fotográfico del inmueble",
  "Asesoramiento sobre tanteo y derechos del inquilino",
  "Gestor dedicado hasta la entrega del contrato firmable",
] as const;
