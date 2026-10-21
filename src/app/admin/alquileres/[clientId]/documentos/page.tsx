import { RentalDocumentRequestsList, type DocRequestRow } from "@/components/rental-document-requests";
import { requireAdmin } from "@/lib/admin-auth";
import { requireAdminMirrorProperty } from "@/lib/admin-rental-client-page";
import { syncFulfilledDocumentRequests } from "@/lib/rental-document-requests-sync";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = { title: { absolute: "Documentación (vista cliente) — Livendia Admin" } };

export default async function AdminMirrorDocumentosPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();
  const { activeProperty } = await requireAdminMirrorProperty(supabase, clientId);

  await syncFulfilledDocumentRequests(supabase, activeProperty!.id);

  const { data } = await supabase
    .from("rental_document_requests")
    .select("*")
    .eq("property_id", activeProperty!.id)
    .order("created_at", { ascending: false });

  const requests = (data ?? []) as DocRequestRow[];
  const base = `/admin/alquileres/${clientId}`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Documentación solicitada</h1>
        <p className="mt-1 text-[#64748B]">Vista del cliente — {activeProperty!.address}</p>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-4 flex items-center gap-3">
          <FileText className="h-6 w-6 text-[#1A4FBF]" />
          <h2 className="text-lg font-bold text-[#1E293B]">Peticiones del gestor</h2>
        </div>
        <RentalDocumentRequestsList requests={requests} />
        <p className="mt-6 text-sm text-[#64748B]">
          Archivos del inmueble e inquilino en{" "}
          <Link href={`${base}/inmueble`} className="font-semibold text-[#1A4FBF] hover:underline">
            Inmueble
          </Link>{" "}
          e{" "}
          <Link href={`${base}/inquilino`} className="font-semibold text-[#1A4FBF] hover:underline">
            Inquilino
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
