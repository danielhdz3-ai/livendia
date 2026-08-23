import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Building2,
  Users,
  FileText,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { DownloadButton } from "@/components/download-button";
import { resolveRentalDocStoragePath } from "@/lib/rental-doc-storage-path";
import {
  PROPERTY_DOCUMENT_LABEL_ES,
  TENANT_DOCUMENT_LABEL_ES,
} from "@/lib/rental-document-labels";
import { IncidentSection } from "./incident-section";
import { RentalFinancePanel } from "@/components/rental-finance-panel";
import {
  AdminDocumentRequestForm,
  RentalDocumentRequestsList,
  type DocRequestRow,
} from "@/components/rental-document-requests";
import { syncFulfilledDocumentRequests } from "@/lib/rental-document-requests-sync";
import { AdminIncidentsList } from "@/components/admin-incidents-list";
import { TenantInviteButton } from "@/components/tenant-invite-button";

export const metadata = { title: { absolute: "Detalle de cliente — Livendia Admin" } };

export default async function AdminClientDetailPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/alquileres");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  // Obtener info del cliente
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", clientId)
    .maybeSingle();

  if (!profile) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-xl bg-white p-12 text-center shadow ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-[#1E293B]">Cliente no encontrado</h3>
          <Link
            href="/admin/alquileres"
            className="mt-4 inline-block font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
          >
            ← Volver a la lista
          </Link>
        </div>
      </main>
    );
  }

  // Obtener propiedades
  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", clientId);

  // Obtener inquilinos de todas las propiedades
  const propertyIds = properties?.map((p) => p.id) || [];
  const { data: tenants } = propertyIds.length > 0
    ? await supabase
        .from("tenants")
        .select("*")
        .in("property_id", propertyIds)
    : { data: null };

  // Obtener documentos de propiedades
  const { data: propertyDocs } = propertyIds.length > 0
    ? await supabase
        .from("property_documents")
        .select("*")
        .in("property_id", propertyIds)
    : { data: null };

  // Obtener documentos de inquilinos
  const tenantIds = tenants?.map((t) => t.id) || [];
  const { data: tenantDocs } = tenantIds.length > 0
    ? await supabase
        .from("tenant_documents")
        .select("*")
        .in("tenant_id", tenantIds)
    : { data: null };

  const { data: allPayments } = propertyIds.length > 0
    ? await supabase
        .from("rent_payments")
        .select("id, property_id, tenant_id, payment_date, amount, status, payment_method, notes")
        .in("property_id", propertyIds)
        .order("payment_date", { ascending: false })
    : { data: null };

  const { data: allExpenses } = propertyIds.length > 0
    ? await supabase
        .from("property_expenses")
        .select("id, property_id, expense_type, amount, expense_date, description, is_deductible")
        .in("property_id", propertyIds)
        .order("expense_date", { ascending: false })
    : { data: null };

  const firstPropertyId = properties?.[0]?.id as string | undefined;

  const docRequestsByProperty = new Map<string, DocRequestRow[]>();
  if (propertyIds.length > 0) {
    for (const pid of propertyIds) {
      await syncFulfilledDocumentRequests(supabase, pid);
    }
    const { data: allDocReqs } = await supabase
      .from("rental_document_requests")
      .select("*")
      .in("property_id", propertyIds)
      .order("created_at", { ascending: false });
    for (const row of allDocReqs ?? []) {
      const pid = row.property_id as string;
      const list = docRequestsByProperty.get(pid) ?? [];
      list.push(row as DocRequestRow);
      docRequestsByProperty.set(pid, list);
    }
  }

  const { data: allIncidents } = propertyIds.length > 0
    ? await supabase
        .from("incidents")
        .select("id, title, description, status, priority, created_at, property_id, estimated_cost")
        .in("property_id", propertyIds)
        .order("created_at", { ascending: false })
    : { data: null };

  const propertyAddresses = Object.fromEntries(
    (properties ?? []).map((p) => [p.id as string, p.address as string]),
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/alquileres"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a la lista
        </Link>
        <h1 className="text-3xl font-bold text-[#1E293B]">{profile.full_name || "Cliente"}</h1>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#64748B]">
          {profile.email && (
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {profile.email}
            </span>
          )}
          {profile.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </span>
          )}
        </div>
      </div>

      {/* Stats cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-[#1A4FBF]" />
            <div>
              <div className="text-sm text-[#64748B]">Propiedades</div>
              <div className="text-2xl font-bold text-[#1E293B]">{properties?.length || 0}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-emerald-600" />
            <div>
              <div className="text-sm text-[#64748B]">Inquilinos</div>
              <div className="text-2xl font-bold text-[#1E293B]">{tenants?.length || 0}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-sm text-[#64748B]">Docs Propiedades</div>
              <div className="text-2xl font-bold text-[#1E293B]">{propertyDocs?.length || 0}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-sm text-[#64748B]">Docs Inquilinos</div>
              <div className="text-2xl font-bold text-[#1E293B]">{tenantDocs?.length || 0}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <AdminIncidentsList
          incidents={(allIncidents ?? []) as Parameters<typeof AdminIncidentsList>[0]["incidents"]}
          propertyAddresses={propertyAddresses}
        />
      </div>

      {/* Propiedades */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-[#1E293B]">Propiedades</h2>
        {!properties?.length ? (
          <div className="rounded-xl bg-white p-8 text-center shadow ring-1 ring-slate-200">
            <Building2 className="mx-auto h-12 w-12 text-[#64748B]" />
            <p className="mt-2 text-sm text-[#64748B]">El cliente no ha registrado propiedades</p>
          </div>
        ) : (
          <div className="space-y-4">
            {properties.map((prop) => {
              const propTenants = tenants?.filter((t) => t.property_id === prop.id) || [];
              const propDocs = propertyDocs?.filter((d) => d.property_id === prop.id) || [];

              return (
                <div key={prop.id} className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#1E293B]">{prop.address}</h3>
                      <div className="mt-1 flex flex-wrap gap-4 text-sm text-[#64748B]">
                        {prop.zone && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {prop.zone}
                          </span>
                        )}
                        {prop.postal_code && <span>CP: {prop.postal_code}</span>}
                      </div>
                      {prop.cadastral_reference && (
                        <div className="mt-2 text-xs text-[#64748B]">
                          Ref. Catastral: {prop.cadastral_reference}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Documentación de la propiedad */}
                  <div className="mb-4 rounded-lg bg-blue-50/80 p-4 ring-1 ring-blue-100">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-900">
                      <FileText className="h-4 w-4" />
                      Documentos del inmueble ({propDocs.length})
                    </div>
                    {propDocs.length === 0 ? (
                      <p className="text-sm text-blue-800/90">
                        El cliente aún no ha subido documentación de esta propiedad desde su panel.
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {propDocs.map((doc) => {
                          const resolved = resolveRentalDocStoragePath(
                            (doc.storage_path as string | null) ?? null,
                            (doc.file_url as string | null) ?? null,
                          );
                          return (
                            <li
                              key={doc.id}
                              className="flex flex-wrap items-center justify-between gap-2 text-sm text-blue-950"
                            >
                              <div>
                                <span className="font-medium">
                                  {(doc.file_name as string) || "Archivo"}
                                </span>
                                <span className="ml-2 text-xs text-blue-800">
                                  (
                                  {PROPERTY_DOCUMENT_LABEL_ES[doc.document_type as string] ??
                                    (doc.document_type as string)}
                                  )
                                </span>
                              </div>
                              {resolved ? (
                                <DownloadButton
                                  filePath={resolved}
                                  fileName={(doc.file_name as string) || "documento"}
                                  documentType="Descargar"
                                  variant="link"
                                />
                              ) : (
                                <span className="text-xs text-amber-700">
                                  Sin ruta de almacén (actualizar registro en BD)
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Inquilinos de esta propiedad */}
                  {propTenants.length > 0 && (
                    <div>
                      <div className="mb-2 text-sm font-semibold text-[#64748B]">
                        Inquilinos ({propTenants.length})
                      </div>
                      <div className="space-y-3">
                        {propTenants.map((tenant) => {
                          const docs = tenantDocs?.filter((d) => d.tenant_id === tenant.id) || [];
                          return (
                            <div
                              key={tenant.id}
                              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="font-semibold text-[#1E293B]">{tenant.full_name}</div>
                                  <div className="mt-1 space-y-1 text-xs text-[#64748B]">
                                    {tenant.email && <div>📧 {tenant.email}</div>}
                                    {tenant.phone && <div>📞 {tenant.phone}</div>}
                                    {tenant.dni && <div>DNI: {tenant.dni}</div>}
                                  </div>
                                </div>
                                <div className="text-right">
                                  {tenant.monthly_rent && (
                                    <div className="text-lg font-bold text-emerald-600">
                                      {tenant.monthly_rent.toFixed(2)} €
                                    </div>
                                  )}
                                  <div className="text-xs text-[#64748B]">Renta mensual</div>
                                </div>
                              </div>

                              {/* Fechas del contrato */}
                              {(tenant.start_date || tenant.end_date) && (
                                <div className="mt-3 flex gap-4 text-xs text-[#64748B]">
                                  {tenant.start_date && (
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      Inicio: {new Date(tenant.start_date).toLocaleDateString("es-ES")}
                                    </span>
                                  )}
                                  {tenant.end_date && (
                                    <span>
                                      Fin: {new Date(tenant.end_date).toLocaleDateString("es-ES")}
                                    </span>
                                  )}
                                </div>
                              )}

                              <div className="mt-3">
                                <TenantInviteButton
                                  tenantId={tenant.id as string}
                                  tenantEmail={tenant.email as string | null}
                                  tenantName={tenant.full_name as string}
                                  linked={Boolean(tenant.user_id)}
                                />
                              </div>

                              {/* Documentos del inquilino */}
                              <div className="mt-3 rounded bg-white p-3 ring-1 ring-slate-100">
                                <div className="mb-2 text-xs font-semibold text-[#64748B]">
                                  Documentos ({docs.length})
                                </div>
                                {docs.length === 0 ? (
                                  <p className="text-xs text-[#64748B]">
                                    Sin archivos desde el dashboard del cliente.
                                  </p>
                                ) : (
                                  <ul className="space-y-2">
                                    {docs.map((doc) => {
                                      const resolved = resolveRentalDocStoragePath(
                                        (doc.storage_path as string | null) ?? null,
                                        (doc.file_url as string | null) ?? null,
                                      );
                                      return (
                                        <li
                                          key={doc.id}
                                          className="flex flex-wrap items-center justify-between gap-2 text-xs"
                                        >
                                          <div>
                                            <span className="font-medium text-[#475569]">
                                              {doc.file_name as string}
                                            </span>
                                            <span className="ml-1 text-[#94a3b8]">
                                              (
                                              {TENANT_DOCUMENT_LABEL_ES[doc.document_type as string] ??
                                                doc.document_type}
                                              )
                                            </span>
                                          </div>
                                          {resolved ? (
                                            <DownloadButton
                                              filePath={resolved}
                                              fileName={(doc.file_name as string) || "documento"}
                                              documentType="Descargar"
                                              variant="link"
                                            />
                                          ) : (
                                            <span className="text-amber-700">Sin ruta en bucket</span>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <div className="mt-6 space-y-4">
                    <AdminDocumentRequestForm
                      propertyId={prop.id as string}
                      tenantId={(propTenants.find((t) => t.is_active) ?? propTenants[0])?.id as string | undefined}
                    />
                    <RentalDocumentRequestsList
                      requests={docRequestsByProperty.get(prop.id as string) ?? []}
                      canManage
                    />
                  </div>
                  {(() => {
                    const activeTenant =
                      propTenants.find((t) => t.is_active) ?? propTenants[0];
                    if (!activeTenant) return null;
                    const propPayments =
                      allPayments?.filter((p) => p.property_id === prop.id) ?? [];
                    const propExpenses =
                      allExpenses?.filter((e) => e.property_id === prop.id) ?? [];
                    return (
                      <div id="finanzas" className="mt-6">
                        <RentalFinancePanel
                          propertyId={prop.id as string}
                          tenantId={activeTenant.id as string}
                          monthlyRent={Number(activeTenant.monthly_rent)}
                          payments={propPayments as Parameters<typeof RentalFinancePanel>[0]["payments"]}
                          expenses={propExpenses as Parameters<typeof RentalFinancePanel>[0]["expenses"]}
                          canManage
                        />
                      </div>
                    );
                  })()}
                  {/* Reportar incidencia */}
                  <IncidentSection
                    propertyId={prop.id as string}
                    propertyAddress={prop.address as string}
                    tenantId={
                      (propTenants.find((t) => t.is_active) ?? propTenants[0])?.id as
                        | string
                        | undefined
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Acciones rápidas */}
      <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
        <h3 className="mb-4 font-bold text-[#1E293B]">Acciones del Gestor</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <Link
            href={`/admin/alquileres/${clientId}/chat`}
            className="rounded-lg bg-white px-4 py-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow"
          >
            <div className="font-semibold text-[#1E293B]">Enviar Mensaje</div>
            <div className="text-xs text-[#64748B]">Chat con el cliente</div>
          </Link>
          <a
            href="#finanzas"
            className="rounded-lg bg-white px-4 py-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow"
          >
            <div className="font-semibold text-[#1E293B]">Solicitar Documentos</div>
            <div className="text-xs text-[#64748B]">Formulario en cada inmueble ↑</div>
          </a>
          <a
            href="#finanzas"
            className="rounded-lg bg-white px-4 py-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow"
          >
            <div className="font-semibold text-[#1E293B]">Ver Finanzas</div>
            <div className="text-xs text-[#64748B]">Pagos, renta y gastos</div>
          </a>
        </div>
      </div>
    </main>
  );
}
