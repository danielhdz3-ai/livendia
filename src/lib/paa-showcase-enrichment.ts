import type { GestoriaVerticalServiceShowcase } from "@/lib/gestoria-city-vertical-hub-enrichment";

/** Párrafo extra de promoción en micro-artículos (más contenido comercial, estilo hub Inmonest). */
const PAA_EXTRA_BODY: Partial<Record<GestoriaVerticalServiceShowcase["key"], string>> = {
  arras:
    " In Livendia un gestor recoge datos reales de las partes, revisa coherencia con la nota simple y entrega PDF firmable en unos días, con revisión incluida antes de ingresar la señal.",
  "revision-post-arras":
    " Tras firmar arras el comprador suele tener poco margen: este servicio concentra comunidad, derramas, ITE y cargas en un informe con llamada de veredicto antes de fijar notaría.",
  "compra-completa":
    " El gestor trabaja para ti como comprador: no cobramos porcentaje sobre el precio del piso y puedes seguir el expediente en panel online con WhatsApp directo al gestor asignado.",
  "venta-completa":
    " Ideal si vendes en Idealista o Fotocasa sin agencia: mismos 890 € de tarifa plana que un acompañamiento integral, con arras redactadas a tu favor y checklist documental hasta escritura.",
  "pack-arras-gestion":
    " Combina lo esencial del vendedor en la fase crítica: señal legalmente sólida y documentación del inmueble ordenada antes de comprometer la fecha en notaría.",
  lau: " Incluye inventario detallado, fianza legal y cláusulas LAU actualizadas (IPC, obras, mascotas, resolución) — no un modelo genérico descargado de internet.",
  temporada:
    " Delimitamos bien estancia temporal frente a LAU para evitar reclasificaciones; clave en pisos turísticos o estancias por estudios/trabajo.",
  habitacion:
    " Regulamos convivencia, zonas comunes, duración y fianza cuando alquilas una habitación en piso compartido entre particulares.",
  "revision-alquiler":
    " Segunda opinión profesional sobre el borrador que te envía el propietario: detectamos cláusulas abusivas antes de entregar la fianza.",
  admin: " Sin permanencia ni comisión sobre la renta: filtramos incidencias, renovaciones e IPC para que no gestiones tú el día a día con el inquilino.",
  "reserva-arras":
    " Puente entre la primera señal y las arras definitivas: borrador coherente y lista de documentos a pedir al vendedor.",
  "reserva-nacional":
    " Señal y condiciones por escrito antes de arras con el mismo flujo online en toda España.",
};

export function enrichShowcasesForPaa(
  showcases: GestoriaVerticalServiceShowcase[],
): GestoriaVerticalServiceShowcase[] {
  return showcases.map((s, index) => {
    const extra = PAA_EXTRA_BODY[s.key];
    return {
      ...s,
      sectionLabel: s.sectionLabel.replace(/^APARTADO \d+/, `APARTADO ${index + 1}`),
      body: extra ? `${s.body}${extra}` : s.body,
    };
  });
}
