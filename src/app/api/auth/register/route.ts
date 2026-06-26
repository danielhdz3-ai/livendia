import { getRequestIp } from "@/lib/request-ip";
import { rateLimitRegister } from "@/lib/ratelimit";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFullName(raw: string): string | null {
  const name = raw.trim().replace(/\s+/g, " ");
  const words = name.split(" ").filter(Boolean);
  if (words.length < 2) {
    return "Introduce nombre y apellidos (mínimo dos palabras).";
  }
  if (words.some((w) => w.length < 2)) {
    return "Cada parte del nombre debe tener al menos 2 caracteres.";
  }
  if (name.length > 80) {
    return "El nombre es demasiado largo.";
  }
  if (!/^[\p{L}\s'.-]+$/u.test(name)) {
    return "El nombre contiene caracteres no válidos.";
  }
  return null;
}

export async function POST(req: Request) {
  const ip = await getRequestIp();
  const rl = await rateLimitRegister(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Demasiados intentos de registro. Inténtalo más tarde." },
      { status: 429 },
    );
  }

  let body: {
    fullName?: string;
    email?: string;
    password?: string;
    turnstileToken?: string;
    companyUrl?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (typeof body.companyUrl === "string" && body.companyUrl.trim()) {
    return NextResponse.json({ ok: true, needsEmailConfirmation: false });
  }

  if (process.env.TURNSTILE_SECRET_KEY) {
    const okCaptcha = await verifyTurnstileToken(body.turnstileToken);
    if (!okCaptcha) {
      return NextResponse.json({ error: "Completa la verificación anti-spam." }, { status: 400 });
    }
  }

  const fullName = typeof body.fullName === "string" ? body.fullName : "";
  const nameError = validateFullName(fullName);
  if (nameError) {
    return NextResponse.json({ error: nameError }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Introduce un email válido." }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres." }, { status: 400 });
  }

  const admin = createServiceRoleClient();
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName.trim() },
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("already") || msg.includes("registered")) {
      return NextResponse.json({ error: "Este email ya está registrado. Inicia sesión." }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  if (!data.user?.id) {
    return NextResponse.json({ error: "No se pudo crear la cuenta." }, { status: 500 });
  }

  await admin
    .from("profiles")
    .update({ full_name: fullName.trim(), phone: null })
    .eq("id", data.user.id);

  return NextResponse.json({ ok: true, needsEmailConfirmation: false });
}
