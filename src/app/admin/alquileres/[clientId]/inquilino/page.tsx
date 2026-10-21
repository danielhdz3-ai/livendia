import { RentalTenantDocuments, type RentalTenantDocRow } from "@/app/dashboard/rental/rental-tenant-documents";
import { RentalTenantEditForm } from "@/components/rental-tenant-edit-form";
import { TenantInviteButton } from "@/components/tenant-invite-button";
import { requireAdmin } from "@/lib/admin-auth";
import { requireAdminMirrorProperty } from "@/lib/admin-rental-client-page";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Users, FileText } from "lucide-react";

export const metadata = { title: { absolute: "Inquilino (vista cliente) — Livendia Admin" } };

export default async function AdminMirrorInquilinoPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();
  const { activeProperty, activeTenant: tenant } = await requireAdminMirrorProperty(supabase, clientId);

  if (!tenant) {
    redirect(`/admin/alquileres/${clientId}`);
  }

  const { data: rows } = await supabase
    .from("tenant_documents")
    .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
    .eq("tenant_id", tenant.id)
    .order("uploaded_at", { ascending: false });

  const tenantDocs: RentalTenantDocRow[] = (rows ?? []).map((d) => ({
    id: d.id as string,
    document_type: d.document_type as string,
    file_name: d.file_name as string,
    file_url: d.file_url as string,
    storage_path: (d.storage_path as string | null) ?? null,
    uploaded_at: d.uploaded_at as string,
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Datos del Inquilino</h1>
        <p className="mt-1 text-[#64748B]">Vista del cliente — {activeProperty!.address}</p>
      </div>
      <div className="space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <Users className="h-6 w-6 text-[#1A4FBF]" />
            <h2 className="text-xl font-bold text-[#1E293B]">Información</h2>
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
            <FileText className="h-6 w-6 text-[#1A4FBF]" />
            <h2 className="text-xl font-bold text-[#1E293B]">Documentación adjunta</h2>
          </div>
          <RentalTenantDocuments
            key={[...tenantDocs].map((d) => d.id).sort().join("-")}
            tenantId={tenant.id}
            initialDocs={tenantDocs}
          />
        </div>
      </div>
    </div>
  );
}
