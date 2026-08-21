import { DownloadButton } from "@/components/download-button";
import { ClientPanelKpiStrip } from "@/components/client-panel-premium";
import {
  PROPERTY_DOCUMENT_LABEL_ES,
  TENANT_DOCUMENT_LABEL_ES,
} from "@/lib/rental-document-labels";
import { resolveRentalDocStoragePath } from "@/lib/rental-doc-storage-path";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Building2,
  Users,
  AlertCircle,
  Calendar,
  FileText,
  CheckCircle2,
  Clock,
  User,
  CreditCard,
  MessageCircle,
  FileSignature,
  ArrowRight,
} from "lucide-react";
import { PropertyForm } from "./property-form";
import { TenantForm } from "./tenant-form";

export const metadata = { title: "Panel de administración de alquileres" };

export default async function RentalDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  // Fetch properties
  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", user.id);

  const hasProperty = (properties?.length ?? 0) > 0;
  const firstProperty = properties?.[0];

  // Fetch tenants for first property
  const { data: tenants } = firstProperty
    ? await supabase
        .from("tenants")
        .select("*")
        .eq("property_id", firstProperty.id)
    : { data: null };

  const hasTenant = (tenants?.length ?? 0) > 0;
  const firstTenant = tenants?.[0];
  const isSetupComplete = hasProperty && hasTenant;

  const { data: propertyDocsDashboard } =
    isSetupComplete && firstProperty
      ? await supabase
          .from("property_documents")
          .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
          .eq("property_id", firstProperty.id)
          .order("uploaded_at", { ascending: false })
      : { data: null };

  const { data: tenantDocsDashboard } =
    isSetupComplete && firstTenant
      ? await supabase
          .from("tenant_documents")
          .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
          .eq("tenant_id", firstTenant.id)
          .order("uploaded_at", { ascending: false })
      : { data: null };

  let openIncidents = 0;
  let pendingRent = 0;
  let awaitingApproval = 0;
  let yearExpensesTotal = 0;

  if (isSetupComplete && firstProperty) {
    const { count: openCount } = await supabase
      .from("incidents")
      .select("id", { count: "exact", head: true })
      .eq("property_id", firstProperty.id)
      .in("status", ["pending", "in_progress", "waiting_approval", "approved"]);
    openIncidents = openCount ?? 0;

    const { count: approvalCount } = await supabase
      .from("incidents")
      .select("id", { count: "exact", head: true })
      .eq("property_id", firstProperty.id)
      .eq("status", "waiting_approval");
    awaitingApproval = approvalCount ?? 0;

    const { count: rentPending } = await supabase
      .from("rent_payments")
      .select("id", { count: "exact", head: true })
      .eq("property_id", firstProperty.id)
      .in("status", ["pending", "late"]);
    pendingRent = rentPending ?? 0;

    const yearStart = `${new Date().getFullYear()}-01-01`;
    const { data: yearExpenses } = await supabase
      .from("property_expenses")
      .select("amount")
      .eq("property_id", firstProperty.id)
      .gte("expense_date", yearStart);
    yearExpensesTotal = (yearExpenses ?? []).reduce((s, e) => s + Number(e.amount), 0);
  }

  // Si no está configurado, mostrar onboarding
  if (!isSetupComplete) {
    return (
      <div className="p-8">
        {/* Welcome Section */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#1A4FBF] via-[#2563EB] to-[#06B6D4] p-8 text-white shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Bienvenido a tu panel de administración de alquiler</h1>
              <p className="mt-2 text-blue-100">
                Completa los datos iniciales para empezar a gestionar tu alquiler
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Datos del Inmueble - Solo si no tiene inmueble */}
        {!hasProperty && (
          <section className="mb-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#1E293B]">1. Datos del Inmueble</h2>
              <p className="text-sm text-[#64748B]">Información y documentación de la propiedad</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <PropertyForm />
            </div>
          </section>
        )}

        {/* Section 2: Datos del Inquilino - Solo si tiene inmueble pero no inquilino */}
        {hasProperty && !hasTenant && (
          <section className="mb-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#1E293B]">2. Datos del Inquilino</h2>
              <p className="text-sm text-[#64748B]">Información del arrendatario y contrato activo</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <TenantForm propertyId={firstProperty!.id} />
            </div>
          </section>
        )}
      </div>
    );
  }

  // Dashboard completo cuando está configurado
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">¡Hola, {firstName}! 👋</h1>
        <p className="mt-1 text-[#64748B]">Bienvenido a tu panel de gestión inmobiliaria</p>
      </div>

      <ClientPanelKpiStrip
        items={[
          { label: "Incidencias abiertas", value: openIncidents, hint: awaitingApproval > 0 ? `${awaitingApproval} esperan tu OK` : "Seguimiento activo" },
          { label: "Rentas pendientes", value: pendingRent, hint: "Cuotas por cobrar" },
          { label: "Gastos " + new Date().getFullYear(), value: `${yearExpensesTotal.toFixed(0)} €`, hint: "Registrados por el gestor" },
          { label: "Pagos y gastos", value: "Ver", hint: "Historial completo", href: "/dashboard/rental/pagos" },
        ]}
      />

      {/* Datos del Inmueble y del Inquilino */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Datos del Inmueble */}
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
            <Link
              href="/dashboard/rental/inmueble"
              className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
            >
              Ver detalles →
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold text-[#64748B]">DIRECCIÓN</div>
              <div className="text-sm font-medium text-[#1E293B]">{firstProperty.address}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B]">ZONA</div>
                <div className="text-sm font-medium text-[#1E293B]">{firstProperty.zone || "—"}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B]">CÓDIGO POSTAL</div>
                <div className="text-sm font-medium text-[#1E293B]">{firstProperty.postal_code || "—"}</div>
              </div>
            </div>
            {firstProperty.cadastral_reference && (
              <div>
                <div className="text-xs font-semibold text-[#64748B]">REFERENCIA CATASTRAL</div>
                <div className="text-sm font-medium text-[#1E293B]">{firstProperty.cadastral_reference}</div>
              </div>
            )}
          </div>
        </div>

        {/* Datos del Inquilino */}
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
            <Link
              href="/dashboard/rental/inquilino"
              className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
            >
              Ver detalles →
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold text-[#64748B]">NOMBRE COMPLETO</div>
              <div className="text-sm font-medium text-[#1E293B]">{firstTenant.full_name}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B]">EMAIL</div>
                <div className="text-sm font-medium text-[#1E293B]">{firstTenant.email || "—"}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B]">TELÉFONO</div>
                <div className="text-sm font-medium text-[#1E293B]">{firstTenant.phone || "—"}</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#64748B]">RENTA MENSUAL</div>
              <div className="text-2xl font-bold text-emerald-600">
                {firstTenant.monthly_rent?.toFixed(2)} €
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-[#1E293B]">Acciones rápidas</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/dashboard/rental/incidencias"
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <AlertCircle className="mb-3 h-8 w-8 text-orange-600" />
            <h3 className="font-semibold text-[#1E293B]">Incidencias</h3>
            <p className="mt-1 text-sm text-[#64748B]">Ver reportes del gestor</p>
          </Link>

          <Link
            href="/dashboard/rental/chat"
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <MessageCircle className="mb-3 h-8 w-8 text-cyan-600" />
            <h3 className="font-semibold text-[#1E293B]">Chat con Gestor</h3>
            <p className="mt-1 text-sm text-[#64748B]">Mensajería directa</p>
          </Link>

          <Link
            href="/dashboard/rental/pagos"
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <CreditCard className="mb-3 h-8 w-8 text-emerald-600" />
            <h3 className="font-semibold text-[#1E293B]">Pagos y gastos</h3>
            <p className="mt-1 text-sm text-[#64748B]">Renta e imputaciones</p>
          </Link>

          <Link
            href="/dashboard/perfil"
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <User className="mb-3 h-8 w-8 text-[#1A4FBF]" />
            <h3 className="font-semibold text-[#1E293B]">Editar perfil</h3>
            <p className="mt-1 text-sm text-[#64748B]">Actualiza tu información personal</p>
          </Link>

          <Link
            href="/dashboard/pagos"
            className="rounded-xl border-2 border-slate-200 bg-white p-6 transition hover:border-[#1A4FBF] hover:shadow-lg"
          >
            <CreditCard className="mb-3 h-8 w-8 text-[#1A4FBF]" />
            <h3 className="font-semibold text-[#1E293B]">Métodos de pago</h3>
            <p className="mt-1 text-sm text-[#64748B]">Gestiona tus formas de pago</p>
          </Link>
        </div>

        {/* Documentación ya subida (inmueble + inquilino) */}
        <div className="mt-6 rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#1A4FBF]/10 p-2">
                <FileText className="h-6 w-6 text-[#1A4FBF]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Mis documentos</h3>
                <p className="text-sm text-[#64748B]">
                  Archivos asociados a tu administración de alquiler (inmueble e inquilino)
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-[#1E293B]">Del inmueble</span>
                <Link
                  href="/dashboard/rental/inmueble"
                  className="text-xs font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                >
                  Gestionar →
                </Link>
              </div>
              {!propertyDocsDashboard?.length ? (
                <p className="text-sm text-[#64748B]">
                  No hay archivos registrados todavía. Puedes subirlos en{" "}
                  <Link href="/dashboard/rental/inmueble" className="font-semibold text-[#1A4FBF] hover:underline">
                    Datos del inmueble
                  </Link>
                  .
                </p>
              ) : (
                <ul className="space-y-3">
                  {propertyDocsDashboard.map((doc) => {
                    const resolved = resolveRentalDocStoragePath(
                      doc.storage_path as string | null,
                      doc.file_url as string | null,
                    );
                    return (
                      <li
                        key={doc.id}
                        className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 last:border-0 last:pb-0"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-[#1E293B]">{doc.file_name as string}</p>
                          <p className="text-xs text-[#64748B]">
                            {PROPERTY_DOCUMENT_LABEL_ES[doc.document_type as string] ?? doc.document_type}
                          </p>
                        </div>
                        {resolved ? (
                          <DownloadButton
                            filePath={resolved}
                            fileName={(doc.file_name as string) || "documento"}
                            variant="link"
                            documentType="Descargar"
                          />
                        ) : (
                          <span className="text-xs text-amber-700">Consultar en datos del inmueble</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-[#1E293B]">Del inquilino</span>
                <Link
                  href="/dashboard/rental/inquilino"
                  className="text-xs font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                >
                  Gestionar →
                </Link>
              </div>
              {!tenantDocsDashboard?.length ? (
                <p className="text-sm text-[#64748B]">
                  No hay archivos registrados todavía. Puedes subirlos en{" "}
                  <Link href="/dashboard/rental/inquilino" className="font-semibold text-[#1A4FBF] hover:underline">
                    Datos del inquilino
                  </Link>
                  .
                </p>
              ) : (
                <ul className="space-y-3">
                  {tenantDocsDashboard.map((doc) => {
                    const resolved = resolveRentalDocStoragePath(
                      doc.storage_path as string | null,
                      doc.file_url as string | null,
                    );
                    return (
                      <li
                        key={doc.id}
                        className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 last:border-0 last:pb-0"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-[#1E293B]">{doc.file_name as string}</p>
                          <p className="text-xs text-[#64748B]">
                            {TENANT_DOCUMENT_LABEL_ES[doc.document_type as string] ?? doc.document_type}
                          </p>
                        </div>
                        {resolved ? (
                          <DownloadButton
                            filePath={resolved}
                            fileName={(doc.file_name as string) || "documento"}
                            variant="link"
                            documentType="Descargar"
                          />
                        ) : (
                          <span className="text-xs text-amber-700">Consultar en datos del inquilino</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

