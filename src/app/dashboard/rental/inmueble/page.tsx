import { RentalPropertyDocuments, type RentalPropertyDocRow } from "@/app/dashboard/rental/rental-property-documents";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Building2, MapPin, FileText } from "lucide-react";

export const metadata = { title: "Datos del inmueble" };

export default async function PropertyDataPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", user.id);

  const property = properties?.[0];

  let propertyDocs: RentalPropertyDocRow[] = [];

  if (property) {
    const { data: rows } = await supabase
      .from("property_documents")
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .eq("property_id", property.id)
      .order("uploaded_at", { ascending: false });

    propertyDocs = (rows ?? []).map((d) => ({
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
        <h1 className="text-3xl font-bold text-[#1E293B]">Datos del Inmueble</h1>
        <p className="mt-1 text-[#64748B]">Información y documentación de la propiedad</p>
      </div>

      {property ? (
        <div className="space-y-6">
          {/* Información básica */}
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#1A4FBF]" />
              <h2 className="text-xl font-bold text-[#1E293B]">Información Básica</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold text-[#64748B]">DIRECCIÓN</div>
                <div className="text-sm font-medium text-[#1E293B]">{property.address}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B]">ZONA</div>
                <div className="text-sm font-medium text-[#1E293B]">{property.zone || "—"}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B]">CÓDIGO POSTAL</div>
                <div className="text-sm font-medium text-[#1E293B]">{property.postal_code || "—"}</div>
              </div>
              {property.cadastral_reference && (
                <div>
                  <div className="text-xs font-semibold text-[#64748B]">REFERENCIA CATASTRAL</div>
                  <div className="text-sm font-medium text-[#1E293B]">{property.cadastral_reference}</div>
                </div>
              )}
            </div>
          </div>

          {/* Documentación */}
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-[#1A4FBF]" />
              <h2 className="text-xl font-bold text-[#1E293B]">Documentación Adjunta</h2>
            </div>
            <RentalPropertyDocuments
              key={[...propertyDocs].map((d) => d.id).sort().join("-")}
              propertyId={property.id as string}
              initialDocs={propertyDocs}
            />
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-white p-12 text-center shadow-xl ring-1 ring-slate-200">
          <Building2 className="mx-auto h-16 w-16 text-[#64748B]" />
          <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">No hay inmuebles registrados</h3>
          <p className="mt-2 text-sm text-[#64748B]">
            Completa el proceso de configuración inicial
          </p>
        </div>
      )}
    </div>
  );
}
