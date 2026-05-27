/** Testimonios breves (web + bloques de confianza). Actualizar cuando haya citas reales verificables. */
export type Testimonial = {
  quote: string;
  author: string;
  context: string;
  service?: "administracion" | "contratos" | "compraventa" | "general";
};

export const LIVENDIA_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Delegué el contacto con el inquilino y dejé de recibir llamadas a deshoras. El gestor me explica solo lo importante y todo queda en el panel.",
    author: "Carmen R.",
    context: "Propietaria · Madrid",
    service: "administracion",
  },
  {
    quote:
      "Necesitaba un contrato de arras claro antes de firmar con la agencia. Revisaron cláusulas, me orientaron por teléfono y salí mucho más tranquilo.",
    author: "Javier M.",
    context: "Comprador · Valencia",
    service: "contratos",
  },
  {
    quote:
      "Contraté la administración del piso en Barcelona en pocos minutos. Las incidencias del inquilino las resuelven ellos; yo solo apruebo cuando toca.",
    author: "Laura P.",
    context: "Propietaria · Barcelona",
    service: "administracion",
  },
  {
    quote:
      "El acompañamiento en la compra nos ayudó a no firmar a ciegas: reserva, arras y documentación con un gestor que conocía nuestro expediente.",
    author: "Antonio y Elena",
    context: "Compradores · Zaragoza",
    service: "compraventa",
  },
];
