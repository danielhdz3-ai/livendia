import { RentalDocumentRequestsList, type DocRequestRow } from "@/components/rental-document-requests";
import { getActivePropertyForUser } from "@/lib/rental-active-property";
import { syncFulfilledDocumentRequests } from "@/lib/rental-document-requests-sync";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = { title: "Documentación solicitada" };

export default async function RentalDocumentosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { activeProperty } = await getActivePropertyForUser(supabase, user.id);

  if (!activeProperty) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">Registra un inmueble para ver solicitudes.</div>
      </div>
    );
  }

  await syncFulfilledDocumentRequests(supabase, activeProperty.id);

  const { data } = await supabase
    .from("rental_document_requests")
    .select("*")
    .eq("property_id", activeProperty.id)
    .order("created_at", { ascending: false });

  const requests = (data ?? []) as DocRequestRow[];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Documentación solicitada</h1>
        <p className="mt-1 text-[#64748B]">{activeProperty.address}</p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-4 flex items-center gap-3">
          <FileText className="h-6 w-6 text-[#1A4FBF]" />
          <h2 className="text-lg font-bold text-[#1E293B]">Peticiones de tu gestor</h2>
        </div>
        <RentalDocumentRequestsList requests={requests} />
        <p className="mt-6 text-sm text-[#64748B]">
          Sube los archivos en{" "}
          <Link href="/dashboard/rental/inmueble" className="font-semibold text-[#1A4FBF] hover:underline">
            Datos del inmueble
          </Link>{" "}
          o{" "}
          <Link href="/dashboard/rental/inquilino" className="font-semibold text-[#1A4FBF] hover:underline">
            Datos del inquilino
          </Link>
          . Al subirlos, la solicitud se marcará automáticamente como recibida.
        </p>
      </div>
    </div>
  );
}
