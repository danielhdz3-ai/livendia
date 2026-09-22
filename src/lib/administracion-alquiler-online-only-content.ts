/**
 * Copy — administración de alquiler fuera de Barcelona / toda España: 100% online, sin presencial.
 * Perfil: propietario que ya tiene inquilino y delega contacto y gestión.
 */

export type AdministracionAlquilerOnlineOnlyStep = {
  title: string;
  description: string;
};

export const ADMINISTRACION_ALQUILER_ONLINE_ONLY_CONTENT = {
  badge: "100% online · Toda España",
  audienceTitle: "Para propietarios que ya tienen inquilino",
  audienceIntro:
    "Este servicio no busca inquilino ni publica el piso: asumes que el arrendatario ya está en la vivienda —particular, familia o profesional— y quieres quedar absuelto del día a día. Livendia se convierte en el único interlocutor del inquilino; tú solo decides lo importante.",
  audienceBullets: [
    "Cero llamadas del inquilino a tu móvil personal",
    "Gestor asignado con panel, WhatsApp y email — sin call center",
    "Misma mensualidad publicada en toda España (IVA incl.)",
    "Sin permanencia: puedes cancelar cuando quieras",
  ] as const,
  remoteTitle: "Gestión íntegra a distancia — sin desplazamientos",
  remoteIntro:
    "Livendia tiene sede en Barcelona (Les Corts). Fuera del área metropolitana no desplazamos gestores al inmueble: toda la administración se resuelve online, con comunicación directa con el inquilino y coordinación remota de terceros cuando haga falta.",
  remoteSteps: [
    {
      title: "Contacto con el inquilino solo vía Livendia",
      description:
        "Incidencias, consultas, reclamaciones de pago y avisos contractuales: el inquilino habla con tu gestor, no contigo.",
    },
    {
      title: "Cobro, renovaciones y documentación en panel",
      description:
        "Seguimiento de renta, actualización según índice legal, prórrogas y mediación documentada — sin acudir a un despacho.",
    },
    {
      title: "Siniestros y reparaciones coordinados en remoto",
      description:
        "Tramitamos con la aseguradora y orientamos industriales de la zona del piso; la operativa no exige que un gestor Livendia viaje a tu ciudad.",
    },
    {
      title: "Entregas de llaves o inventarios sin visita Livendia",
      description:
        "Si hay cambio de inquilino, coordinamos protocolo e inventario con las partes o profesionales locales; fuera de Barcelona no incluimos presencia física de Livendia en el piso.",
    },
  ] as const satisfies readonly AdministracionAlquilerOnlineOnlyStep[],
  boundaryNote:
    "Fuera de Barcelona y área metropolitana el servicio es exclusivamente online: no hay visitas presenciales del gestor Livendia al inmueble. En Barcelona/AMB también operamos online y, además, podemos actuar presencialmente cuando la operación lo requiere.",
  closingNote:
    "Tú mantienes el control de las decisiones; Livendia ejecuta la administración y absorbe el contacto con el inquilino — en toda España, desde Barcelona, sin desplazamientos.",
} as const;

export function getAdministracionAlquilerOnlineOnlyHeading(cityLabel?: string): string {
  if (cityLabel) {
    return `Administración de alquiler en ${cityLabel} — 100% online, sin visitas al piso`;
  }
  return "Administración de alquiler en toda España — 100% online";
}

export function getAdministracionAlquilerOnlineOnlyLead(cityLabel?: string): string {
  if (cityLabel) {
    return `Si tu piso está en ${cityLabel}, Livendia gestiona el alquiler en remoto: sede en Barcelona, operativa digital en tu ciudad y cero contacto directo entre tú y el inquilino.`;
  }
  return "Livendia gestiona alquileres en toda España desde Barcelona: operativa 100% online, gestor asignado y el inquilino solo habla con nosotros.";
}
