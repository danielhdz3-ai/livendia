import type { SupabaseClient } from "@supabase/supabase-js";

export async function syncFulfilledDocumentRequests(
  supabase: SupabaseClient,
  propertyId: string,
) {
  const { data: pending } = await supabase
    .from("rental_document_requests")
    .select("*")
    .eq("property_id", propertyId)
    .eq("status", "pending");

  if (!pending?.length) return;

  const { data: propDocs } = await supabase
    .from("property_documents")
    .select("document_type, uploaded_at")
    .eq("property_id", propertyId);

  const { data: tenants } = await supabase.from("tenants").select("id").eq("property_id", propertyId);

  const tenantIds = (tenants ?? []).map((t) => t.id as string);
  const { data: tenantDocs } =
    tenantIds.length > 0
      ? await supabase
          .from("tenant_documents")
          .select("tenant_id, document_type, uploaded_at")
          .in("tenant_id", tenantIds)
      : { data: [] };

  const now = new Date().toISOString();

  for (const req of pending) {
    const createdAt = new Date(req.created_at as string).getTime();
    let fulfilled = false;

    if (req.target === "property") {
      fulfilled = (propDocs ?? []).some(
        (d) =>
          d.document_type === req.document_type &&
          new Date(d.uploaded_at as string).getTime() >= createdAt,
      );
    } else if (req.target === "tenant" && req.tenant_id) {
      fulfilled = (tenantDocs ?? []).some(
        (d) =>
          d.tenant_id === req.tenant_id &&
          d.document_type === req.document_type &&
          new Date(d.uploaded_at as string).getTime() >= createdAt,
      );
    }

    if (fulfilled) {
      await supabase
        .from("rental_document_requests")
        .update({ status: "fulfilled", fulfilled_at: now })
        .eq("id", req.id as string);
    }
  }
}
