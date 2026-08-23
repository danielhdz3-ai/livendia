import { RentalTenantDocuments, type RentalTenantDocRow } from "@/app/dashboard/rental/rental-tenant-documents";
import { RentalTenantEditForm } from "@/components/rental-tenant-edit-form";
import { TenantInviteButton } from "@/components/tenant-invite-button";
import { getActivePropertyForUser } from "@/lib/rental-active-property";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Users, Phone, FileText } from "lucide-react";

export const metadata = { title: "Datos del inquilino" };

export default async function TenantDataPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { activeProperty, activeTenant: tenant } = await getActivePropertyForUser(supabase, user.id);

  let tenantDocs: RentalTenantDocRow[] = [];

  if (tenant) {
    const { data: rows } = await supabase
      .from("tenant_documents")
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .eq("tenant_id", tenant.id)
      .order("uploaded_at", { ascending: false });

    tenantDocs = (rows ?? []).map((d) => ({
      id: d.id as string,
      document_type: d.document_type as string,
      file_name: d.file_name as string,
      file_url: d.file_url as string,
      storage_path: (d.storage_path as string | null) ?? null,
      uploaded_at: d.uploaded_at as string,
    }));
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Datos del Inquilino</h1>
        <p className="mt-1 text-[#64748B]">
          {activeProperty ? `Inquilino del inmueble: ${activeProperty.address}` : "Información del arrendatario"}
        </p>
      </div>

      {tenant ? (
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-3">
              <Phone className="h-6 w-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-[#1E293B]">Editar datos del inquilino</h2>
            </div>
            <RentalTenantEditForm tenant={tenant as Parameters<typeof RentalTenantEditForm>[0]["tenant"]} />
            <div className="mt-6 border-t border-slate-100 pt-6">
              <TenantInviteButton
                tenantId={tenant.id as string}
                tenantEmail={tenant.email as string | null}
                tenantName={tenant.full_name as string}
                linked={Boolean((tenant as { user_id?: string | null }).user_id)}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-[#1E293B]">Documentación Adjunta</h2>
            </div>
            <RentalTenantDocuments
              key={[...tenantDocs].map((d) => d.id).sort().join("-")}
              tenantId={tenant.id}
              initialDocs={tenantDocs}
            />
          </div>
        </div>
      ) : activeProperty ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow-xl ring-1 ring-slate-200">
          <Users className="mx-auto h-16 w-16 text-[#64748B]" />
          <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">Sin inquilino en este inmueble</h3>
          <p className="mt-2 text-sm text-[#64748B]">
            Registra al arrendatario desde el panel principal o cambia de inmueble arriba.
          </p>
          <Link
            href="/dashboard/rental"
            className="mt-4 inline-block rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB]"
          >
            Ir al panel principal
          </Link>
        </div>
      ) : (
        <div className="rounded-2xl bg-white p-12 text-center shadow-xl ring-1 ring-slate-200">
          <Users className="mx-auto h-16 w-16 text-[#64748B]" />
          <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">No hay inmuebles registrados</h3>
          <p className="mt-2 text-sm text-[#64748B]">Completa el proceso de configuración inicial</p>
        </div>
      )}
    </div>
  );
}
