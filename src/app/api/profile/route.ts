import { normalizeProfileUpdate, validateProfileUpdate, type ProfileUpdateInput } from "@/lib/profile-update";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type PatchBody = {
  fullName?: string;
  phone?: string;
  dniNie?: string;
  fiscalAddress?: string;
};

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("full_name, phone, dni_nie, fiscal_address, role")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "No se pudo cargar el perfil" }, { status: 500 });
  }

  return NextResponse.json({
    fullName: profile?.full_name ?? "",
    email: user.email ?? "",
    phone: profile?.phone ?? "",
    dniNie: profile?.dni_nie ?? "",
    fiscalAddress: profile?.fiscal_address ?? "",
    role: profile?.role ?? "client",
  });
}

export async function PATCH(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  let body: PatchBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const input: ProfileUpdateInput = {
    fullName: typeof body.fullName === "string" ? body.fullName : "",
    phone: typeof body.phone === "string" ? body.phone : "",
    dniNie: typeof body.dniNie === "string" ? body.dniNie : "",
    fiscalAddress: typeof body.fiscalAddress === "string" ? body.fiscalAddress : "",
  };

  const validationError = validateProfileUpdate(input);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const payload = normalizeProfileUpdate(input);

  const { data, error } = await supabase
    .from("profiles")
    .update(payload)
    .eq("id", user.id)
    .select("full_name, phone, dni_nie, fiscal_address, role")
    .maybeSingle();

  if (error) {
    console.error("[api/profile] update failed", error.message);
    return NextResponse.json({ error: "No se pudieron guardar los cambios" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    profile: {
      fullName: data?.full_name ?? payload.full_name,
      email: user.email ?? "",
      phone: data?.phone ?? "",
      dniNie: data?.dni_nie ?? "",
      fiscalAddress: data?.fiscal_address ?? "",
      role: data?.role ?? "client",
    },
  });
}
