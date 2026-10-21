/** Rutas del panel de alquiler del propietario. */
export function rentalClientDashboardPaths() {
  const base = "/dashboard/rental";
  return {
    panel: base,
    inmueble: `${base}/inmueble`,
    inquilino: `${base}/inquilino`,
    incidencias: `${base}/incidencias`,
    chat: `${base}/chat`,
    pagos: `${base}/pagos`,
    documentos: `${base}/documentos`,
    perfil: "/dashboard/perfil",
    metodosPago: "/dashboard/pagos",
  } as const;
}

/** Misma estructura de navegación, vista admin (espejo del cliente). */
export function rentalAdminClientMirrorPaths(clientId: string) {
  const base = `/admin/alquileres/${clientId}`;
  return {
    panel: base,
    inmueble: `${base}/inmueble`,
    inquilino: `${base}/inquilino`,
    incidencias: `${base}/incidencias`,
    chat: `${base}/chat`,
    pagos: `${base}/pagos`,
    documentos: `${base}/documentos`,
    gestion: `${base}/gestion`,
    perfil: null,
    metodosPago: null,
  } as const;
}

export type RentalDashboardNavPaths = {
  panel: string;
  inmueble: string;
  inquilino: string;
  incidencias: string;
  chat: string;
  pagos: string;
  documentos: string;
  perfil: string | null;
  metodosPago: string | null;
  gestion?: string;
};
