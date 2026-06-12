/** Contenido compartido del servicio de acompañamiento de compra de parking o trastero. */

export const PARKING_TRASTERO_INCLUDES = [
  {
    title: "Nota simple registral",
    description: "Solicitud y revisión de la situación registral del parking o trastero.",
  },
  {
    title: "Revisión IBI y comunidad",
    description: "Comprobación de deudas de IBI y cuotas de comunidad de propietarios.",
  },
  {
    title: "Coordinación con oficial de notaría",
    description: "Gestión de citas y requisitos previos con la notaría elegida.",
  },
  {
    title: "Documentación comprador y vendedor",
    description: "Preparación y verificación de toda la documentación de ambas partes.",
  },
  {
    title: "Copia autorizada electrónica",
    description: "Solicitud al notario de la copia autorizada electrónica tras la firma.",
  },
  {
    title: "Liquidación ITP (modelo 600)",
    description: "Cumplimentación en ATC, carta de pago e instrucciones al cliente (plazo máx. 1 mes).",
  },
  {
    title: "Inscripción en el Registro",
    description: "Presentación telemática en registradores.org y gestión de la provisión de fondos.",
  },
  {
    title: "Entrega documentación final",
    description: "Una vez inscrita la propiedad, entrega de toda la documentación al comprador.",
  },
] as const;

export const PARKING_TRASTERO_PROCESS_PHASES = [
  {
    phase: "Fase 1",
    title: "Preparación previa a notaría",
    description:
      "Nota simple registral, revisión de IBI y comunidad, coordinación con el oficial de notaría y preparación de la documentación del comprador y del vendedor.",
  },
  {
    phase: "Fase 2",
    title: "Día de notaría",
    description:
      "Comprador y vendedor firman la escritura. El notario cobra su factura directamente al cliente. Nosotros solicitamos al notario la copia autorizada electrónica.",
  },
  {
    phase: "Fase 3",
    title: "ITP (plazo máximo 1 mes)",
    description:
      "Cumplimentamos el modelo 600 en la ATC con certificado digital, generamos la carta de pago y la enviamos al cliente con el importe exacto e instrucciones. Tras el pago, presentamos la liquidación con el justificante.",
  },
  {
    phase: "Fase 4",
    title: "Registro de la Propiedad",
    description:
      "Presentación telemática en registradores.org con la escritura electrónica y el ITP liquidado. Gestionamos la provisión de fondos del Registro, el cliente paga y completamos la inscripción. Entrega de la documentación final.",
  },
] as const;

export const PARKING_TRASTERO_NOT_INCLUDED = [
  "Honorarios notariales (el notario cobra directamente al cliente).",
  "Tasas del Registro de la Propiedad (provisión de fondos a cargo del cliente).",
  "Impuesto de Transmisiones Patrimoniales (ITP): lo paga el cliente; nosotros gestionamos la liquidación.",
  "Compraventa de vivienda habitual (consulta el servicio completo de compra de 890 €).",
] as const;
