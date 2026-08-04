import Link from "next/link";
import { Search } from "lucide-react";
import { AdminDocumentActions } from "@/components/admin/admin-document-actions";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { ORDER_DOCUMENT_LABEL_ES } from "@/lib/order-document-labels";
import { fetchClientEmails } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ADMIN_TABLE_HEAD } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: { absolute: "Documentos — Livendia Admin" } };

export default async function AdminDocumentosPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  await requireAdmin("/admin/documentos");
  const { q } = await searchParams;
  const supabase = await createServerSupabaseClient();

  const { data: docsRaw } = await supabase
    .from("documents")
    .select(
      "id, file_name, file_path, document_type, created_at, client_id, order_id, orders ( services ( name ) )",
    )
    .order("created_at", { ascending: false });

  const clientIds = [...new Set((docsRaw ?? []).map((d) => d.client_id as string))];
  const emailByClient = await fetchClientEmails(clientIds);

  let docs = (docsRaw ?? []).map((d) => {
    const svc = d.orders;
    const order = Array.isArray(svc) ? svc[0] : svc;
    const services = order && typeof order === "object" && "services" in order ? order.services : null;
    const serviceName = Array.isArray(services)
      ? services[0]?.name
      : (services as { name?: string } | null)?.name;

    return {
      id: d.id as string,
      fileName: d.file_name as string,
      filePath: d.file_path as string,
      docType: d.document_type as string,
      createdAt: d.created_at as string,
      clientEmail: emailByClient.get(d.client_id as string) ?? "—",
      serviceName: serviceName ?? "Documento personal",
      orderId: d.order_id as string,
    };
  });

  const term = q?.trim().toLowerCase();
  if (term) {
    docs = docs.filter(
      (d) =>
        d.fileName.toLowerCase().includes(term) ||
        d.clientEmail.toLowerCase().includes(term) ||
        d.serviceName.toLowerCase().includes(term),
    );
  }

  return (
    <>
      <AdminPageHeader title="Documentos" subtitle="Archivos subidos por los clientes" />

      <form method="get" className={`${ADMIN_CARD_PAD} mb-4`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="search"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Buscar documento por nombre o cliente…"
            className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/15"
          />
        </div>
        <p className="mt-2 text-sm text-[#64748B]">{docs.length} documento(s)</p>
      </form>

      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                {["Archivo", "Cliente", "Tipo", "Servicio", "Subido", "Acciones"].map((h) => (
                  <th key={h} className={`px-4 py-3 ${ADMIN_TABLE_HEAD}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!docs.length ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-[#64748B]">
                    No hay documentos
                  </td>
                </tr>
              ) : (
                docs.map((d) => (
                  <tr key={d.id} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[#1E293B]">{d.fileName}</p>
                      <p className="font-mono text-[10px] text-[#94A3B8]">{d.id.slice(0, 8)}…</p>
                    </td>
                    <td className="px-4 py-3 text-[#64748B]">{d.clientEmail}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-[#475569]">
                        {ORDER_DOCUMENT_LABEL_ES[d.docType] ?? d.docType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#64748B]">{d.serviceName}</td>
                    <td className="px-4 py-3 text-[#64748B]">
                      {new Date(d.createdAt).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <AdminDocumentActions filePath={d.filePath} fileName={d.fileName} />
                        <Link href={`/admin/expedientes/${d.orderId}`} className="text-xs font-semibold text-[#64748B] hover:underline">
                          Expediente
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
