import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR,
} from "@/lib/catalog.public";

export const GESTION_VENDEDOR_FAQ_FIXED = [
  {
    question: "¿El contrato de arras está incluido en este servicio?",
    answer: `No. Este servicio cubre exclusivamente la gestión documental para llegar a escritura: nota simple, comunidad, ITE, certificado energético, hipoteca y demás. Si necesitas redactar el contrato de arras, puedes contratarlo por separado por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incluido.`,
  },
  {
    question: "¿Cuándo debo contratar este servicio — antes o después de firmar arras?",
    answer:
      "Lo ideal es contratarlo en los primeros días tras firmar arras, cuando todavía tienes margen de tiempo para resolver cualquier incidencia documental antes de que el plazo de escritura se acerque. No esperes a la última semana.",
  },
] as const;

export const GESTION_VENDEDOR_EMPATHY_CARDS = [
  {
    title: "¿Qué documentos necesito exactamente?",
    body: "Nota simple, comunidad, ITE, certificado energético, hipoteca, IBI… La lista completa depende de tu piso. Sin gestor, la descubres tarde.",
  },
  {
    title: "¿Cuánto tardo en conseguirlos?",
    body: "Comunidades y bancos pueden tardar semanas. Si el comprador tiene prisa, cada día sin documentación suma tensión a la operación.",
  },
  {
    title: "¿Me faltará algo el día de la notaría?",
    body: "Es el miedo más habitual: llegar a notaría y que falte un certificado o aparezca una carga que no viste venir.",
  },
] as const;

export const GESTION_VENDEDOR_INCLUDES: readonly { title: string; description: string }[] = [
  { title: "Gestor dedicado", description: "Asignación en 24 h laborables desde la contratación." },
  { title: "Checklist personalizado", description: "Lista exacta según inmueble, registro y operación." },
  { title: "Nota simple registral", description: "Obtención y revisión de titularidad y cargas." },
  { title: "Certificado deuda comunidad", description: "Solicitud y revisión del certificado de deuda cero." },
  { title: "ITE vigente", description: "Verificación si el edificio exige inspección técnica." },
  { title: "Certificado energético", description: "Comprobación de vigencia (obligatorio para escriturar)." },
  { title: "Suministros", description: "Estado de luz, agua y gas para liquidación con el comprador." },
  { title: "IBI y prorrateo", description: "Último recibo y cálculo de prorrateo vendedor/comprador." },
  { title: "Cargas registrales", description: "Afecciones y cargas pendientes antes de escritura." },
  { title: "Hipoteca pendiente", description: "Coordinación con banco: certificado de deuda y cancelación notarial." },
  { title: "Coherencia con arras", description: "Cruce entre documentación obtenida y lo pactado en contrato." },
  { title: "Informe semáforo", description: "Estado documental verde/ámbar/rojo por ítem." },
  { title: "Asesoramiento hasta notaría", description: "Línea directa con tu gestor hasta la firma." },
  { title: "Área de cliente", description: "Centraliza y comparte documentos con el comprador si procede." },
];

export const GESTION_VENDEDOR_NOT_INCLUDED = [
  "Redacción del contrato de arras (145 € aparte)",
  "Cancelación registral de hipoteca (gestión notarial del banco)",
  "Representación en notaría ni firma por poder",
  "Gestión de plusvalía municipal ni IRPF del vendedor",
  "Búsqueda de comprador (ya tienes comprador particular)",
] as const;

export const GESTION_VENDEDOR_COMPARISON_ROWS = [
  { aspect: "Lista exacta de documentos", solo: "La buscas tú", gestor: "Checklist personalizado" },
  { aspect: "Obtención nota simple", solo: "Registro online", gestor: "Tu gestor lo gestiona" },
  { aspect: "Certificado deuda comunidad", solo: "Contactas tú", gestor: "Tu gestor lo solicita" },
  { aspect: "ITE y cert. energético", solo: "Buscas proveedor", gestor: "Tu gestor lo verifica" },
  { aspect: "Hipoteca pendiente", solo: "Llamas al banco", gestor: "Tu gestor coordina" },
  { aspect: "Problema detectado tarde", solo: "En notaría", gestor: "Con semanas de margen" },
  {
    aspect: "Coste",
    solo: "0 € + tu tiempo",
    gestor: `${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} IVA incl.`,
  },
  { aspect: "Tiempo dedicado", solo: "15-20 h de gestiones", gestor: "Prácticamente 0 h" },
] as const;

export const GESTION_VENDEDOR_PROCESS_STEPS = [
  {
    phase: "Semana 1",
    title: "Diagnóstico y checklist personalizado",
    description:
      "Tu gestor analiza el inmueble, la operación y genera un checklist exacto según registro, comunidad y ayuntamiento.",
  },
  {
    phase: "Semanas 1-4",
    title: "Obtención de documentación",
    description:
      "Gestiona nota simple, certificado de comunidad, ITE, certificado energético y documentación de hipoteca si la hay.",
  },
  {
    phase: "Semanas 2-6",
    title: "Revisión de coherencia y semáforo",
    description:
      "Informe de estado documental verde/ámbar/rojo. Detectamos cargas, derramas o certificados caducados antes del notario.",
  },
  {
    phase: "Hasta escritura",
    title: "Asesoramiento hasta la firma",
    description:
      "Línea directa con tu gestor hasta el día de notaría. Si el notario pide algo extra, lo gestionamos.",
  },
] as const;

export function livendiaPackArrasMasGestionLabel(): string {
  return `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR} €`;
}
