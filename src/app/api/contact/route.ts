import { sendContactInquiryEmail } from "@/lib/email/send";
import { getRequestIp } from "@/lib/request-ip";
import { rateLimitContact } from "@/lib/ratelimit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const ip = await getRequestIp();
  const rl = await rateLimitContact(ip);
  if (!rl.ok) {
    return NextResponse.json({ error: "Demasiadas solicitudes. Inténtalo mañana." }, { status: 429 });
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    turnstileToken?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (process.env.TURNSTILE_SECRET_KEY) {
    const okCaptcha = await verifyTurnstileToken(body.turnstileToken);
    if (!okCaptcha) {
      return NextResponse.json({ error: "Completa la verificación anti‑spam." }, { status: 400 });
    }
  }
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phone =
    typeof body.phone === "string" && body.phone.trim() ? body.phone.trim().slice(0, 40) : undefined;
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Nombre no válido" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }
  if (message.length < 10 || message.length > 4000) {
    return NextResponse.json({ error: "El mensaje debe tener entre 10 y 4000 caracteres" }, { status: 400 });
  }

  try {
    await sendContactInquiryEmail({ name, email, phone, message });
  } catch {
    return NextResponse.json({ error: "No se pudo enviar el mensaje" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
