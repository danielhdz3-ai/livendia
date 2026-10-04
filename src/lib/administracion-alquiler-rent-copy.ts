/**
 * Copy unificado sobre pagos de renta en administración de alquiler Livendia.
 * - El inquilino paga en la cuenta del propietario (Livendia no cobra ni custodia el dinero).
 * - Livendia hace seguimiento, control y reclamación; no renta garantizada.
 */

export const ADMINISTRACION_ALQUILER_RENT_MONITORING_TITLE =
  "Seguimiento y control de la renta (sin cobrar por ti)";

export const ADMINISTRACION_ALQUILER_RENT_MONITORING_DESCRIPTION =
  "La renta la ingresa el inquilino directamente en la cuenta corriente del propietario: Livendia no recibe ese dinero ni garantiza el importe. Nosotros comprobamos cada mes que el pago se ha realizado en plazo, lo reflejamos en tu panel y, si hay retraso o impago, reclamamos y mediamos con el inquilino hasta resolver la incidencia. No es un servicio de renta garantizada; si quieres cobertura ante impago, el seguro se contrata aparte y podemos orientarte hacia nuestra aseguradora de confianza.";

/** Aviso breve bajo el título del bloque de alcance (todas las landings). */
export const ADMINISTRACION_ALQUILER_RENT_NOT_GUARANTEED_NOTE =
  "Importante: el inquilino paga en tu cuenta bancaria. Livendia no garantiza el dinero de la renta; hacemos el control mensual del pago y gestionamos cualquier problema con el inquilino. La renta garantizada o seguro de impago es un producto externo opcional.";

/** Párrafo didáctico (FAQ, fichas de servicio). */
export const ADMINISTRACION_ALQUILER_RENT_PAYMENT_EXPLAINER =
  "En la administración Livendia el flujo del dinero es siempre el mismo: el arrendatario transfiere la renta a la cuenta que tú indiques. Nosotros no actuamos como intermediario de cobro ni adelantamos importes. Nuestro trabajo es vigilar que el pago llegue cada mes, avisarte en el panel, recordar y reclamar al inquilino si se retrasa, y resolver contigo las incidencias relacionadas con el impago. Para proteger el cash-flow ante impagos prolongados existe el seguro de impago, que se contrata por separado.";

/** Mismo criterio que LAU, adaptado a temporada / habitaciones (más rotación). */
export const ADMINISTRACION_ALQUILER_TEMPORADA_RENT_PAYMENT_EXPLAINER =
  "En alquiler por temporada o por habitaciones cada ocupante ingresa la renta (o el tramo pactado) en la cuenta corriente del propietario. Livendia no recibe ese dinero, no garantiza el importe ni adelanta rentas. Controlamos que el pago llegue en plazo — también cuando hay rotación de inquilinos —, lo dejamos registrado en el panel y, si hay retraso o impago, reclamamos y mediamos con el inquilino hasta resolver la incidencia. La renta garantizada o el seguro de impago son productos externos opcionales; podemos orientarte hacia nuestra aseguradora de confianza.";

export const ADMINISTRACION_ALQUILER_TEMPORADA_RENT_BULLETS = [
  "Pago directo del inquilino a tu cuenta bancaria (Livendia no custodia la renta).",
  "Control mensual del ingreso y avisos en el panel del propietario.",
  "Reclamación y mediación con el inquilino ante retrasos o impagos.",
  "Sin renta garantizada en la cuota; seguro de impago contratable aparte.",
] as const;
