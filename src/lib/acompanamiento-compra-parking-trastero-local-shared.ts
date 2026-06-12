import { ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL } from "@/lib/catalog.public";
import { PARKING_TRASTERO_PROCESS_PHASES } from "@/lib/acompanamiento-compra-parking-trastero-shared";

export const PARKING_TRASTERO_FAQ_FIXED = [
  {
    question: "¿El servicio incluye los honorarios del notario y el ITP?",
    answer:
      "No. El notario cobra directamente al cliente y el ITP lo paga el comprador. Nosotros gestionamos la liquidación del ITP (modelo 600) y la presentación en el Registro; tú recibes las cartas de pago con el importe exacto e instrucciones claras.",
  },
  {
    question: "¿Puedo contratar si compro el parking o trastero entre particulares?",
    answer:
      "Sí. El servicio está pensado para compradores que ya tienen vendedor (particular o profesional) y quieren delegar notaría, ITP y registro en un gestor dedicado por tarifa fija.",
  },
] as const;

export const PARKING_TRASTERO_EMPATHY_CARDS = [
  {
    title: "¿La nota simple coincide con lo que me enseñaron?",
    body: "Plazas y trasteros suelen tener cargas, servidumbres o referencias registrales que no aparecen en el anuncio. Sin revisión previa, firmas a ciegas.",
  },
  {
    title: "¿Quién liquida el ITP y presenta en el Registro?",
    body: "Tras notaría quedan plazos críticos: modelo 600 en la ATC y presentación telemática en registradores.org. Un error o retraso puede costarte más que el servicio completo.",
  },
  {
    title: "¿La agencia me cobra de más por un anexo?",
    body: "Muchas inmobiliarias aplican porcentaje sobre parking o trastero o paquetes de gestión de 600–1.200 € solo por los trámites. Livendia cuesta 298 € fijos con gestor dedicado.",
  },
] as const;

export const PARKING_TRASTERO_AGENCY_COMPARISON_ROWS = [
  { aspect: "Tarifa", agencia: "5–10 % o paquete 600–1.200 €", livendia: `${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} IVA incl.` },
  { aspect: "Gestor dedicado", agencia: "Comercial o externo", livendia: "Mismo gestor todo el proceso" },
  { aspect: "Nota simple y cargas", agencia: "A veces omitido", livendia: "Revisión registral incluida" },
  { aspect: "IBI y comunidad", agencia: "Variable", livendia: "Verificación antes de notaría" },
  { aspect: "Liquidación ITP", agencia: "A menudo aparte", livendia: "Modelo 600 y carta de pago" },
  { aspect: "Registro telemático", agencia: "No siempre incluido", livendia: "Presentación y provisión de fondos" },
  { aspect: "Interés del intermediario", agencia: "Cerrar la operación", livendia: "Proteger al comprador" },
] as const;

export const PARKING_TRASTERO_LIVENDIA_COMPARISON_ROWS = [
  { aspect: "Nota simple registral", solo: "La pides tú", gestor: "Tu gestor la revisa" },
  { aspect: "IBI y comunidad", solo: "Contactas tú", gestor: "Verificación incluida" },
  { aspect: "Coordinación notaría", solo: "Tú llamas", gestor: "Oficial y documentación" },
  { aspect: "ITP (modelo 600)", solo: "ATC por tu cuenta", gestor: "Liquidación gestionada" },
  { aspect: "Registro de la Propiedad", solo: "registradores.org", gestor: "Presentación telemática" },
  {
    aspect: "Coste gestoría",
    solo: "0 € + 15–25 h",
    gestor: `${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} IVA incl.`,
  },
] as const;

export { PARKING_TRASTERO_PROCESS_PHASES };
