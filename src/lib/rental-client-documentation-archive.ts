import type { SupabaseClient } from "@supabase/supabase-js";
import { ORDER_DOCUMENT_LABEL_ES } from "@/lib/order-document-labels";
import {
  PROPERTY_DOCUMENT_LABEL_ES,
  TENANT_DOCUMENT_LABEL_ES,
} from "@/lib/rental-document-labels";
import { resolveRentalDocStoragePath } from "@/lib/rental-doc-storage-path";
import { getActivePropertyForClientUser } from "@/lib/rental-active-property";
import { formatEuros } from "@/lib/admin-data";

export type RentalArchiveFile = {
  id: string;
  fileName: string;
  filePath: string;
  typeLabel: string;
  detail?: string;
  date?: string;
};

export type RentalArchiveSection = {
  id: string;
  title: string;
  description: string;
  files: RentalArchiveFile[];
};

export type RentalLivendiaPaymentRow = {
  id: string;
  paidAt: string | null;
  amountLabel: string;
  notes: string | null;
  status: string;
  invoiceFiles: RentalArchiveFile[];
};

export type RentalClientDocumentationArchive = {
  propertyAddress: string | null;
  sections: RentalArchiveSection[];
  livendiaPayments: RentalLivendiaPaymentRow[];
  totalFiles: number;
};

function dedupeByPath(files: RentalArchiveFile[]): RentalArchiveFile[] {
  const byPath = new Map<string, RentalArchiveFile>();
  for (const f of files) {
    const key = f.filePath.trim();
    if (!key) continue;
    const prev = byPath.get(key);
    if (!prev || (f.detail && !prev.detail)) byPath.set(key, f);
  }
  return [...byPath.values()].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function loadRentalClientDocumentationArchive(
  supabase: SupabaseClient,
  clientUserId: string,
): Promise<RentalClientDocumentationArchive> {
  const { activeProperty, activeTenant } = await getActivePropertyForClientUser(supabase, clientUserId);

  const propertyFiles: RentalArchiveFile[] = [];
  const tenantFiles: RentalArchiveFile[] = [];
  const expedienteFiles: RentalArchiveFile[] = [];

  if (activeProperty) {
    const { data: propDocs } = await supabase
      .from("property_documents")
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .eq("property_id", activeProperty.id)
      .order("uploaded_at", { ascending: false });

    for (const d of propDocs ?? []) {
      const path = resolveRentalDocStoragePath(
        (d.storage_path as string | null) ?? null,
        (d.file_url as string | null) ?? null,
      );
      if (!path) continue;
      propertyFiles.push({
        id: d.id as string,
        fileName: (d.file_name as string) || "documento",
        filePath: path,
        typeLabel:
          PROPERTY_DOCUMENT_LABEL_ES[d.document_type as string] ?? (d.document_type as string),
        date: (d.uploaded_at as string)?.slice(0, 10),
      });
    }
  }

  if (activeTenant) {
    const { data: tenantDocs } = await supabase
      .from("tenant_documents")
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .eq("tenant_id", activeTenant.id)
      .order("uploaded_at", { ascending: false });

    for (const d of tenantDocs ?? []) {
      const path = resolveRentalDocStoragePath(
        (d.storage_path as string | null) ?? null,
        (d.file_url as string | null) ?? null,
      );
      if (!path) continue;
      tenantFiles.push({
        id: d.id as string,
        fileName: (d.file_name as string) || "documento",
        filePath: path,
        typeLabel: TENANT_DOCUMENT_LABEL_ES[d.document_type as string] ?? (d.document_type as string),
        date: (d.uploaded_at as string)?.slice(0, 10),
      });
    }
  }

  const { data: adminService } = await supabase
    .from("services")
    .select("id")
    .eq("slug", "administracion-alquiler")
    .maybeSingle();

  const livendiaPayments: RentalLivendiaPaymentRow[] = [];
  const invoiceCandidates: RentalArchiveFile[] = [];

  if (adminService?.id) {
    const { data: orders } = await supabase
      .from("orders")
      .select("id, status, paid_at, total_cents, notes, created_at")
      .eq("client_id", clientUserId)
      .eq("service_id", adminService.id)
      .order("paid_at", { ascending: false, nullsFirst: false });

    const orderIds = (orders ?? []).map((o) => o.id as string);
    let docsByOrder = new Map<string, RentalArchiveFile[]>();

    if (orderIds.length > 0) {
      const { data: orderDocs } = await supabase
        .from("documents")
        .select("id, order_id, file_name, file_path, document_type, description, created_at")
        .eq("client_id", clientUserId)
        .in("order_id", orderIds)
        .order("created_at", { ascending: false });

      for (const d of orderDocs ?? []) {
        const path = (d.file_path as string)?.trim();
        if (!path) continue;
        const row: RentalArchiveFile = {
          id: d.id as string,
          fileName: (d.file_name as string) || "documento",
          filePath: path,
          typeLabel: ORDER_DOCUMENT_LABEL_ES[d.document_type as string] ?? (d.document_type as string),
          detail: (d.description as string | null) ?? undefined,
          date: (d.created_at as string)?.slice(0, 10),
        };
        const oid = d.order_id as string;
        const list = docsByOrder.get(oid) ?? [];
        list.push(row);
        docsByOrder.set(oid, list);

        if (
          d.document_type === "otro" ||
          d.document_type === "recibos" ||
          /factura/i.test(row.fileName) ||
          /factura/i.test(row.detail ?? "")
        ) {
          invoiceCandidates.push(row);
        } else {
          expedienteFiles.push(row);
        }
      }
    }

    for (const o of orders ?? []) {
      const oid = o.id as string;
      const invForOrder = (docsByOrder.get(oid) ?? []).filter(
        (f) =>
          /factura/i.test(f.fileName) ||
          /factura/i.test(f.detail ?? "") ||
          f.typeLabel.toLowerCase().includes("recibo"),
      );
      livendiaPayments.push({
        id: oid,
        paidAt: (o.paid_at as string | null) ?? null,
        amountLabel: formatEuros(o.total_cents as number | null),
        notes: (o.notes as string | null) ?? null,
        status: o.status as string,
        invoiceFiles: invForOrder,
      });
    }
  }

  const invoiceFiles = dedupeByPath(invoiceCandidates);
  const sections: RentalArchiveSection[] = [
    {
      id: "propietario",
      title: "Documentación del propietario e inmueble",
      description: "Nota de encargo, contrato de arrendamiento, referencia catastral y resto de archivos del piso.",
      files: dedupeByPath(propertyFiles),
    },
    {
      id: "inquilino",
      title: "Documentación del inquilino",
      description: "DNI, contrato firmado y documentos del arrendatario.",
      files: dedupeByPath(tenantFiles),
    },
    {
      id: "facturas",
      title: "Facturas Livendia (administración de alquiler)",
      description: "Todas las facturas de cuota de gestión registradas en expediente.",
      files: invoiceFiles,
    },
    {
      id: "expediente",
      title: "Otros documentos de expediente",
      description: "Justificantes, contratos adjuntos al pedido y documentación complementaria.",
      files: dedupeByPath(expedienteFiles),
    },
  ].filter((s) => s.files.length > 0);

  const totalFiles = sections.reduce((n, s) => n + s.files.length, 0);

  return {
    propertyAddress: activeProperty?.address ?? null,
    sections,
    livendiaPayments,
    totalFiles,
  };
}
