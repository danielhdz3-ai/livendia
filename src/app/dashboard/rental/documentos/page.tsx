import { RentalDocumentRequestsList, type DocRequestRow } from "@/components/rental-document-requests";
import { RentalDocumentationArchive } from "@/components/rental/rental-documentation-archive";
import { loadRentalClientDocumentationArchive } from "@/lib/rental-client-documentation-archive";
import { syncFulfilledDocumentRequests } from "@/lib/rental-document-requests-sync";
import { getActivePropertyForUser } from "@/lib/rental-active-property";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { FileText } from "lucide-react";

export const metadata = { title: "Documentación y facturas" };

export default async function RentalDocumentosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const archive = await loadRentalClientDocumentationArchive(supabase, user.id);
  const { activeProperty } = await getActivePropertyForUser(supabase, user.id);

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

  if (!activeProperty) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">Registra un inmueble para ver tu documentación.</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <RentalDocumentationArchive archive={archive} />

      {requests.length > 0 ? (
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-6 w-6 text-[#64748B]" />
            <h2 className="text-lg font-bold text-[#1E293B]">Documentación solicitada por tu gestor</h2>
          </div>
          <RentalDocumentRequestsList requests={requests} />
        </section>
      ) : null}
    </div>
  );
}
