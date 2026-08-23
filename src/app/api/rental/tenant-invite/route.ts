import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { isUserAdmin } from "@/lib/rental-api-auth";
import { getAppUrl, getResendFrom } from "@/lib/email/config";
import { getResend } from "@/lib/email/resend-client";
import { NextResponse } from "next/server";

async function findUserIdByEmail(email: string): Promise<string | null> {
  const admin = createServiceRoleClient();
  let page = 1;
  while (page <= 20) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error) return null;
    const match = data.users.find((u) => u.email?.toLowerCase() === email);
    if (match?.id) return match.id;
    if (data.users.length < 200) break;
    page += 1;
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { tenantId?: string };
    const tenantId = body.tenantId?.trim();
    if (!tenantId) {
      return NextResponse.json({ error: "Falta tenantId" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

    const { data: tenant } = await supabase
      .from("tenants")
      .select("id, email, full_name, property_id, user_id, properties:property_id ( user_id, address )")
      .eq("id", tenantId)
      .maybeSingle();

    if (!tenant?.property_id) {
      return NextResponse.json({ error: "Inquilino no encontrado" }, { status: 404 });
    }

    const email = (tenant.email as string | null)?.trim().toLowerCase();
    if (!email) {
      return NextResponse.json({ error: "El inquilino no tiene email" }, { status: 400 });
    }

    const prop = tenant.properties as { user_id?: string; address?: string } | { user_id?: string; address?: string }[] | null;
    const property = Array.isArray(prop) ? prop[0] : prop;
    const ownerId = property?.user_id;

    const adminUser = await isUserAdmin(supabase, user.id);
    if (!adminUser && ownerId !== user.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    if (tenant.user_id) {
      return NextResponse.json({
        message: "Este inquilino ya tiene acceso al portal",
        linked: true,
      });
    }

    const admin = createServiceRoleClient();
    let userId = await findUserIdByEmail(email);

    if (userId && ownerId && userId === ownerId) {
      return NextResponse.json(
        { error: "El email del inquilino coincide con el propietario. Usa otro email." },
        { status: 400 },
      );
    }

    if (!userId) {
      const { data: created, error: createErr } = await admin.auth.admin.createUser({
        email,
        email_confirm: true,
        user_metadata: { full_name: tenant.full_name },
      });
      if (createErr || !created.user?.id) {
        return NextResponse.json(
          { error: createErr?.message ?? "No se pudo crear la cuenta del inquilino" },
          { status: 500 },
        );
      }
      userId = created.user.id;
    }

    await admin.from("profiles").update({
      full_name: (tenant.full_name as string) || undefined,
      role: "tenant",
    }).eq("id", userId);

    await admin.from("tenants").update({ user_id: userId }).eq("id", tenantId);

    const redirectTo = `${getAppUrl()}/inquilino`;
    const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
      type: "magiclink",
      email,
      options: { redirectTo },
    });

    if (linkErr || !linkData.properties?.action_link) {
      return NextResponse.json(
        { error: linkErr?.message ?? "Cuenta vinculada pero no se pudo generar el enlace de acceso" },
        { status: 500 },
      );
    }

    const resend = getResend();
    if (resend) {
      const tenantName = (tenant.full_name as string) || "Inquilino";
      const address = property?.address ?? "tu inmueble";
      await resend.emails.send({
        from: getResendFrom(),
        to: email,
        subject: "Acceso al portal de inquilino — Livendia",
        html: `
          <p>Hola ${tenantName},</p>
          <p>Tu gestor Livendia te ha invitado al portal de inquilino para <strong>${address}</strong>.</p>
          <p>Desde ahí podrás reportar incidencias y chatear con el equipo.</p>
          <p><a href="${linkData.properties.action_link}">Entrar al portal</a></p>
          <p>Si no esperabas este correo, puedes ignorarlo.</p>
        `,
      });
    }

    return NextResponse.json({
      message: resend
        ? "Invitación enviada por email"
        : "Cuenta vinculada (email no configurado en servidor)",
      linked: true,
    });
  } catch (e) {
    console.error("tenant-invite:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
