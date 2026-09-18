/**
 * Alcance operativo del servicio mensual de administración de alquiler LAU
 * (mismo protocolo en panel, WhatsApp y gestor asignado).
 */

export type AdministracionAlquilerOperationsScopeItem = {
  title: string;
  description: string;
};

export const ADMINISTRACION_ALQUILER_OPERATIONS_SCOPE: readonly AdministracionAlquilerOperationsScopeItem[] =
  [
    {
      title: "Cobro mensual de la renta",
      description:
        "Seguimiento y control de los pagos mensuales de la renta, con reclamación al inquilino en caso de impago.",
    },
    {
      title: "Incidencias y consultas del inquilino",
      description:
        "Gestión de incidencias y atención a las consultas de los inquilinos. Livendia es el único canal de contacto.",
    },
    {
      title: "Siniestros con la aseguradora",
      description:
        "Gestión de siniestros ante la compañía aseguradora de cada vivienda (continente y contenido), con seguimiento hasta la resolución.",
    },
    {
      title: "Reparaciones con industriales",
      description:
        "Gestión de reparaciones con industriales cuando el siniestro o la incidencia no esté cubierta por el seguro.",
    },
    {
      title: "Actualización anual de la renta",
      description:
        "Gestión de la actualización anual de la renta conforme al índice de referencia legalmente aplicable a cada contrato (LAU, IRAV u otro tope autonómico).",
    },
    {
      title: "Renovación del contrato",
      description:
        "Renovación del contrato con el inquilino actual a la finalización de su vigencia, con propuesta documentada y mediación.",
    },
    {
      title: "Altas, bajas y rescisiones",
      description:
        "Formalización de nuevos contratos o rescisiones con inquilinos al entrar o dejar la vivienda, coordinando llaves, inventario y suministros.",
    },
    {
      title: "Comunicados de la comunidad",
      description:
        "Traslado de los comunicados relevantes de la comunidad de propietarios (obras, afectaciones u otras incidencias) y coordinación cuando afecta al arrendamiento.",
    },
  ] as const;

export type AdministracionAlquilerOnlineScopeVariant = "national" | "local-outside-barcelona" | "barcelona-area";

/** Texto del apartado «100% online» según contexto de la landing. */
export function getAdministracionAlquilerOnlineScopeIntro(
  variant: AdministracionAlquilerOnlineScopeVariant,
  cityLabel?: string,
): { heading: string; lead: string; note?: string } {
  switch (variant) {
    case "local-outside-barcelona":
      return {
        heading: `Administración de alquiler en ${cityLabel ?? "tu ciudad"} — 100% online`,
        lead:
          `Si tu piso está en ${cityLabel ?? "una ciudad fuera de Barcelona"}, todos los trámites con Livendia son 100% online: alta del servicio, seguimiento de la renta, incidencias, siniestros, renovaciones y relación con el inquilino mediante panel del propietario, WhatsApp y email. No necesitas acudir a un despacho en Barcelona ni desplazarte para firmar cada gestión rutinaria.`,
        note:
          "En Barcelona y área metropolitana también puedes visitarnos en Les Corts (Mejía Lequerica 44) si lo prefieres; fuera de Barcelona el protocolo es íntegramente a distancia.",
      };
    case "barcelona-area":
      return {
        heading: "Barcelona y AMB: oficina en Les Corts y trámite online",
        lead:
          "En Barcelona capital y municipios del área metropolitana que gestionamos puedes acudir a nuestra oficina en el distrito de Les Corts (Mejía Lequerica 44) cuando lo necesites. Si vives fuera de Barcelona o prefieres no desplazarte, el mismo servicio se presta 100% online: panel, WhatsApp, email y firma electrónica cuando proceda.",
        note:
          "Para pisos en el resto de España (Madrid, Valencia, Málaga, etc.), todos los trámites son 100% online con el mismo alcance operativo que se detalla a continuación.",
      };
    case "national":
    default:
      return {
        heading: "Fuera de Barcelona, trámite 100% online",
        lead:
          "Si tu vivienda en alquiler está fuera de Barcelona, todos los trámites con Livendia son 100% online: alta, cobro de renta, incidencias, siniestros con la aseguradora, renovaciones, comunicación con el inquilino y con la comunidad. Panel del propietario, WhatsApp y gestor asignado — sin visitar un despacho.",
        note:
          "En Barcelona y área metropolitana también operamos online; además, puedes acudir presencialmente a Mejía Lequerica 44 (Les Corts) si lo deseas.",
      };
  }
}
