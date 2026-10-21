import { DownloadButton } from "@/components/download-button";
import type {
  RentalArchiveSection,
  RentalClientDocumentationArchive,
} from "@/lib/rental-client-documentation-archive";
import { FileText, Receipt, Wallet } from "lucide-react";

function FileList({ files }: { files: RentalArchiveSection["files"] }) {
  if (!files.length) {
    return <p className="text-sm text-[#64748B]">No hay archivos en esta categoría.</p>;
  }
  return (
    <ul className="divide-y divide-slate-100">
      {files.map((f) => (
        <li key={f.id} className="flex flex-wrap items-center justify-between gap-3 py-3 first:pt-0">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-[#1E293B]">{f.fileName}</p>
            <p className="text-xs text-[#64748B]">
              {f.typeLabel}
              {f.detail ? ` · ${f.detail}` : ""}
              {f.date ? ` · ${new Date(f.date).toLocaleDateString("es-ES")}` : ""}
            </p>
          </div>
          <DownloadButton filePath={f.filePath} fileName={f.fileName} variant="link" documentType="Descargar" />
        </li>
      ))}
    </ul>
  );
}

export function RentalDocumentationArchive({
  archive,
  title = "Documentación y facturas",
  subtitle,
}: {
  archive: RentalClientDocumentationArchive;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1E293B]">{title}</h1>
        <p className="mt-1 text-[#64748B]">
          {subtitle ??
            (archive.propertyAddress
              ? `Expediente completo — ${archive.propertyAddress}`
              : "Todos los archivos de administración de alquiler")}
        </p>
        <p className="mt-2 text-sm font-medium text-[#1A4FBF]">
          {archive.totalFiles} archivo{archive.totalFiles === 1 ? "" : "s"} en total
        </p>
      </div>

      {archive.livendiaPayments.length > 0 ? (
        <section className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <Wallet className="h-6 w-6 text-emerald-600" />
            <div>
              <h2 className="text-lg font-bold text-[#1E293B]">Pagos a Livendia (cuota administración)</h2>
              <p className="text-sm text-[#64748B]">Transferencias registradas y factura asociada cuando exista.</p>
            </div>
          </div>
          <ul className="space-y-3">
            {archive.livendiaPayments.map((p) => (
              <li key={p.id} className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-[#1E293B]">{p.amountLabel}</p>
                    <p className="text-xs text-[#64748B]">
                      {p.paidAt
                        ? `Pagado ${new Date(p.paidAt).toLocaleDateString("es-ES")}`
                        : "Pendiente de pago"}
                      {p.notes ? ` · ${p.notes}` : ""}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-[#475569] ring-1 ring-slate-200">
                    {p.status}
                  </span>
                </div>
                {p.invoiceFiles.length > 0 ? (
                  <ul className="mt-3 space-y-2 border-t border-slate-200/80 pt-3">
                    {p.invoiceFiles.map((f) => (
                      <li key={f.id} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                        <span className="flex items-center gap-2 text-[#1E293B]">
                          <Receipt className="h-4 w-4 text-[#1A4FBF]" />
                          {f.fileName}
                        </span>
                        <DownloadButton
                          filePath={f.filePath}
                          fileName={f.fileName}
                          variant="link"
                          documentType="Factura"
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-xs text-amber-800">Sin PDF de factura vinculado a este pago.</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {archive.sections.map((section) => (
        <section key={section.id} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-6 w-6 text-[#1A4FBF]" />
            <div>
              <h2 className="text-lg font-bold text-[#1E293B]">{section.title}</h2>
              <p className="text-sm text-[#64748B]">{section.description}</p>
            </div>
          </div>
          <FileList files={section.files} />
        </section>
      ))}

      {archive.totalFiles === 0 && archive.livendiaPayments.length === 0 ? (
        <div className="rounded-2xl bg-amber-50 p-6 text-sm text-amber-900 ring-1 ring-amber-200">
          Aún no hay documentación registrada para este cliente.
        </div>
      ) : null}
    </div>
  );
}
