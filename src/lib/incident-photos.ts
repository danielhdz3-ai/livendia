import type { SupabaseClient } from "@supabase/supabase-js";
import { assertAllowedUpload } from "@/lib/uploads";

const MAX_INCIDENT_PHOTOS = 5;

export async function uploadIncidentPhotos(
  supabase: SupabaseClient,
  userId: string,
  propertyId: string,
  incidentId: string,
  files: File[],
): Promise<{ paths: string[]; errors: string[] }> {
  const paths: string[] = [];
  const errors: string[] = [];
  const slice = files.slice(0, MAX_INCIDENT_PHOTOS);

  for (let i = 0; i < slice.length; i++) {
    const file = slice[i];
    if (!file.type.startsWith("image/")) {
      errors.push(`${file.name}: solo imágenes`);
      continue;
    }
    const check = assertAllowedUpload(file);
    if (!check.ok) {
      errors.push(`${file.name}: ${check.error}`);
      continue;
    }
    const ext = file.name.split(".").pop() ?? "jpg";
    const fileName = `${userId}/${propertyId}/incidents/${incidentId}/${Date.now()}_${i}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { data, error } = await supabase.storage
      .from("documents")
      .upload(fileName, buffer, { contentType: file.type, upsert: false });

    if (error || !data) {
      errors.push(`${file.name}: ${error?.message ?? "error de subida"}`);
      continue;
    }
    paths.push(data.path);
  }

  return { paths, errors };
}
