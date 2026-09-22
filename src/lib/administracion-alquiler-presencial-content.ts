/**
 * Copy — administración de alquiler: operativa online + acciones presenciales incluidas (Barcelona / AMB).
 */

export type AdministracionAlquilerPresencialStep = {
  title: string;
  description: string;
};

export const ADMINISTRACION_ALQUILER_PRESENCIAL_CONTENT = {
  badge: "Online + presencial",
  sectionTitle: "Gestión online y acciones presenciales cuando la operación lo exige",
  sectionIntro:
    "El día a día es digital — panel, WhatsApp y gestor asignado —, pero la administración no se queda solo en pantalla: cuando hace falta un gestor Livendia en el inmueble o en la zona, esas actuaciones entran en el mismo servicio mensual.",
  onlineBullets: [
    "Cobro de renta, incidencias y consultas del inquilino desde panel y WhatsApp",
    "Coordinación con aseguradora, comunidad e industriales con trazabilidad",
    "Renovaciones, IRAV/Incasòl y altas o bajas documentadas sin desplazarte",
    "Oficina en Les Corts (Mejía Lequerica 44) si prefieres reunión presencial con tu gestor",
  ] as const,
  presencialTitle: "Gestor Livendia en el inmueble o en tu zona",
  presencialIntro:
    "Si la operación no puede resolverse solo a distancia, un gestor Livendia puede desplazarse al piso, al portal o al entorno del barrio/municipio. No es un extra opcional de la mensualidad: son acciones presenciales que forman parte del protocolo de administración cuando son necesarias.",
  presencialSteps: [
    {
      title: "Entrega, recogida o inventario en el piso",
      description:
        "Coordinación de llaves, check-in/check-out con inquilino y registro fotográfico cuando el arrendamiento lo requiere.",
    },
    {
      title: "Visita con industrial o perito",
      description:
        "Presencia del gestor en averías graves, siniestros o peritajes para acelerar la resolución y documentar lo acordado contigo.",
    },
    {
      title: "Inspección y mediación in situ",
      description:
        "Cuando una incidencia, daño o conflicto necesita valoración presencial antes de decidir reparación, cargo o renovación.",
    },
    {
      title: "Coordinación en comunidad o suministros",
      description:
        "Gestiones presenciales puntuales en el edificio o con proveedores locales del AMB si el caso lo exige y tú no quieres desplazarte.",
    },
  ] as const satisfies readonly AdministracionAlquilerPresencialStep[],
  closingNote:
    "Tú sigues decidiendo lo importante; Livendia ejecuta online y, cuando toca, también presencialmente — con el mismo gestor y el mismo precio mensual publicado.",
} as const;

export function getAdministracionAlquilerPresencialHeading(zoneLabel: string): string {
  return `Administración de alquiler en ${zoneLabel}: online y presencial incluido`;
}
