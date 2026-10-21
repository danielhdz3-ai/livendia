import { DownloadButton } from "@/components/download-button";
import { ClientPanelKpiStrip } from "@/components/client-panel-premium";
import {
  PROPERTY_DOCUMENT_LABEL_ES,
  TENANT_DOCUMENT_LABEL_ES,
} from "@/lib/rental-document-labels";
import { resolveRentalDocStoragePath } from "@/lib/rental-doc-storage-path";
import type { RentalDashboardHomeData } from "@/lib/rental-dashboard-home-data";
import type { RentalDashboardNavPaths } from "@/lib/rental-admin-paths";
import Link from "next/link";
import {
  Building2,
  Users,
  AlertCircle,
  FileText,
  User,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import { PropertyForm } from "@/app/dashboard/rental/property-form";
import { TenantForm } from "@/app/dashboard/rental/tenant-form";

type Props = {
  data: RentalDashboardHomeData;
  paths: RentalDashboardNavPaths;
  /** Vista admin: sin formularios de alta ni enlaces a perfil del admin. */
  variant?: "client" | "admin";
  adminBanner?: React.ReactNode;
};

export function RentalDashboardHome({ data, paths, variant = "client", adminBanner }: Props) {
  const {
    firstName,
    hasProperty,
    hasTenant,
    isSetupComplete,
    property,
    tenant,
    propertyDocs,
    tenantDocs,
    openIncidents,
    pendingRent,
    awaitingApproval,
    yearExpensesTotal,
  } = data;

  if (!isSetupComplete) {
    return (
      <div className={variant === "client" ? "p-8" : ""}>
        {adminBanner}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#1A4FBF] via-[#2563EB] to-[#06B6D4] p-8 text-white shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Panel de administración de alquiler</h1>
              <p className="mt-2 text-blue-100">
                {variant === "admin"
                  ? "Estado de configuración que ve el cliente en su panel"
                  : "Completa los datos iniciales para empezar a gestionar tu alquiler"}
              </p>
            </div>
          </div>
        </div>

        {variant === "admin" ? (
          <div className="rounded-2xl bg-amber-50 p-6 text-sm text-amber-900 ring-1 ring-amber-200">
            {!hasProperty ? (
              <p>El cliente aún no ha registrado el inmueble en su panel.</p>
            ) : !hasTenant ? (
              <p>El inmueble está registrado pero falta el inquilino en el panel del cliente.</p>
            ) : null}
          </div>
        ) : (
          <>
            {!hasProperty && (
              <section className="mb-8">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-[#1E293B]">1. Datos del Inmueble</h2>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                  <PropertyForm />
                </div>
              </section>
            )}
            {hasProperty && !hasTenant && property && (
              <section className="mb-8">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-[#1E293B]">2. Datos del Inquilino</h2>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                  <TenantForm propertyId={property.id} />
                </div>
              </section>
            )}
          </>
        )}
      </div>
    );
  }

  if (!property || !tenant) return null;

  return (
    <div className={variant === "client" ? "p-8" : ""}>
      {adminBanner}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">
          {variant === "admin" ? `Panel del cliente — ${firstName}` : `¡Hola, ${firstName}! 👋`}
        </h1>
        <p className="mt-1 text-[#64748B]">
          {variant === "admin"
            ? "Vista espejo: mismos datos y documentación que en /dashboard/rental"
            : "Bienvenido a tu panel de gestión inmobiliaria"}
        </p>
      </div>

      <ClientPanelKpiStrip
        items={[
          {
            label: "Incidencias abiertas",
            value: openIncidents,
            hint: awaitingApproval > 0 ? `${awaitingApproval} esperan tu OK` : "Seguimiento activo",
          },
          { label: "Rentas pendientes", value: pendingRent, hint: "Cuotas por cobrar" },
          {
            label: "Gastos " + new Date().getFullYear(),
            value: `${yearExpensesTotal.toFixed(0)} €`,
            hint: "Registrados por el gestor",
          },
          {
            label: "Pagos y gastos",
            value: "Ver",
            hint: "Historial completo",
            href: paths.pagos,
          },
        ]}
      />

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-2">
                <Building2 className="h-6 w-6 text-[#1A4FBF]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1E293B]">Datos del Inmueble</h2>
                <p className="text-sm text-[#64748B]">Información de la propiedad</p>
              </div>
            </div>
            <Link href={paths.inmueble} className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
              Ver detalles →
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold text-[#64748B]">DIRECCIÓN</div>
              <div className="text-sm font-medium text-[#1E293B]">{property.address}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B]">ZONA</div>
                <div className="text-sm font-medium text-[#1E293B]">{property.zone || "—"}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B]">CÓDIGO POSTAL</div>
                <div className="text-sm font-medium text-[#1E293B]">{property.postal_code || "—"}</div>
              </div>
            </div>
            {property.cadastral_reference ? (
              <div>
                <div className="text-xs font-semibold text-[#64748B]">REFERENCIA CATASTRAL</div>
                <div className="text-sm font-medium text-[#1E293B]">{property.cadastral_reference}</div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-2">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1E293B]">Datos del Inquilino</h2>
                <p className="text-sm text-[#64748B]">Información del arrendatario</p>
              </div>
            </div>
            <Link href={paths.inquilino} className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
              Ver detalles →
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold text-[#64748B]">NOMBRE COMPLETO</div>
              <div className="text-sm font-medium text-[#1E293B]">{tenant.full_name}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B]">EMAIL</div>
                <div className="text-sm font-medium text-[#1E293B]">{tenant.email || "—"}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B]">TELÉFONO</div>
                <div className="text-sm font-medium text-[#1E293B]">{tenant.phone || "—"}</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#64748B]">RENTA MENSUAL</div>
              <div className="text-2xl font-bold text-emerald-600">{tenant.monthly_rent?.toFixed(2)} €</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-[#1E293B]">Acciones rápidas</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href={paths.incidencias}
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <AlertCircle className="mb-3 h-8 w-8 text-orange-600" />
            <h3 className="font-semibold text-[#1E293B]">Incidencias</h3>
            <p className="mt-1 text-sm text-[#64748B]">Ver reportes del gestor</p>
          </Link>
          <Link
            href={paths.chat}
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <MessageCircle className="mb-3 h-8 w-8 text-cyan-600" />
            <h3 className="font-semibold text-[#1E293B]">Chat con Gestor</h3>
            <p className="mt-1 text-sm text-[#64748B]">Mensajería directa</p>
          </Link>
          <Link
            href={paths.pagos}
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <CreditCard className="mb-3 h-8 w-8 text-emerald-600" />
            <h3 className="font-semibold text-[#1E293B]">Pagos y gastos</h3>
            <p className="mt-1 text-sm text-[#64748B]">Renta e imputaciones</p>
          </Link>
          {paths.perfil ? (
            <Link
              href={paths.perfil}
              className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
            >
              <User className="mb-3 h-8 w-8 text-[#1A4FBF]" />
              <h3 className="font-semibold text-[#1E293B]">Editar perfil</h3>
              <p className="mt-1 text-sm text-[#64748B]">Actualiza tu información personal</p>
            </Link>
          ) : null}
          {paths.metodosPago ? (
            <Link
              href={paths.metodosPago}
              className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
            >
              <CreditCard className="mb-3 h-8 w-8 text-[#1A4FBF]" />
              <h3 className="font-semibold text-[#1E293B]">Métodos de pago</h3>
              <p className="mt-1 text-sm text-[#64748B]">Gestiona tus formas de pago</p>
            </Link>
          ) : null}
        </div>

        <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#1A4FBF]/10 p-2">
                <FileText className="h-6 w-6 text-[#1A4FBF]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Mis documentos</h3>
                <p className="text-sm text-[#64748B]">
                  Archivos asociados a la administración de alquiler (inmueble e inquilino)
                </p>
              </div>
            </div>
            <Link
              href={paths.documentos}
              className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
            >
              Ver todo (facturas Livendia) →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DocColumn
              title="Del inmueble"
              manageHref={paths.inmueble}
              docs={propertyDocs}
              labels={PROPERTY_DOCUMENT_LABEL_ES}
            />
            <DocColumn
              title="Del inquilino"
              manageHref={paths.inquilino}
              docs={tenantDocs}
              labels={TENANT_DOCUMENT_LABEL_ES}
            />
          </div>
        </div>
      </div>

      {variant === "client" && isSetupComplete ? (
        <section className="mt-10 rounded-2xl border-2 border-dashed border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-bold text-[#1E293B]">¿Gestionas otro inmueble?</h2>
          <p className="mb-6 text-sm text-[#64748B]">
            Añade propiedades adicionales a tu cartera. Podrás cambiar entre ellas con el selector superior.
          </p>
          <PropertyForm variant="additional" />
        </section>
      ) : null}
    </div>
  );
}

function DocColumn({
  title,
  manageHref,
  docs,
  labels,
}: {
  title: string;
  manageHref: string;
  docs: RentalDashboardHomeData["propertyDocs"];
  labels: Record<string, string>;
}) {
  return (
    <div className="rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-sm font-bold text-[#1E293B]">{title}</span>
        <Link href={manageHref} className="text-xs font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
          Gestionar →
        </Link>
      </div>
      {!docs.length ? (
        <p className="text-sm text-[#64748B]">No hay archivos registrados todavía.</p>
      ) : (
        <ul className="space-y-3">
          {docs.map((doc) => {
            const resolved = resolveRentalDocStoragePath(doc.storage_path, doc.file_url);
            return (
              <li
                key={doc.id}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 last:border-0 last:pb-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#1E293B]">{doc.file_name}</p>
                  <p className="text-xs text-[#64748B]">{labels[doc.document_type] ?? doc.document_type}</p>
                </div>
                {resolved ? (
                  <DownloadButton
                    filePath={resolved}
                    fileName={doc.file_name || "documento"}
                    variant="link"
                    documentType="Descargar"
                  />
                ) : (
                  <span className="text-xs text-amber-700">Sin ruta de almacén</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
