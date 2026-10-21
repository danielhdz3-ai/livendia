import { RentalDocumentRequestsList, type DocRequestRow } from "@/components/rental-document-requests";
import { RentalDocumentationArchive } from "@/components/rental/rental-documentation-archive";
import { requireAdmin } from "@/lib/admin-auth";
import { getAdminMirrorRentalContext } from "@/lib/admin-rental-client-page";
import { loadRentalClientDocumentationArchive } from "@/lib/rental-client-documentation-archive";
import { syncFulfilledDocumentRequests } from "@/lib/rental-document-requests-sync";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FileText } from "lucide-react";

export const metadata = { title: { absolute: "Documentación y facturas — Livendia Admin" } };

export default async function AdminMirrorDocumentosPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();

  const archive = await loadRentalClientDocumentationArchive(supabase, clientId);
  const { activeProperty } = await getAdminMirrorRentalContext(supabase, clientId);

  let requests: DocRequestRow[] = [];
  if (activeProperty) {
    await syncFulfilledDocumentRequests(supabase, activeProperty.id);
    const { data } = await supabase
      .from("rental_document_requests")
      .select("*")
      .eq("property_id", activeProperty.id)
      .order("created_at", { ascending: false });
    requests = (data ?? []) as DocRequestRow[];
  }

  return (
    <div>
      <RentalDocumentationArchive
        archive={archive}
        title="Documentación y facturas"
        subtitle="Vista del cliente — propietario, inquilino, facturas Livendia y pagos"
      />

      {requests.length > 0 ? (
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-6 w-6 text-[#64748B]" />
            <h2 className="text-lg font-bold text-[#1E293B]">Solicitudes pendientes del gestor</h2>
          </div>
          <RentalDocumentRequestsList requests={requests} />
        </section>
      ) : null}
    </div>
  );
}
