import { sendWelcomeEmail } from "@/lib/email/send";
import { getResendFrom } from "@/lib/email/config";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Obtener el email del query parameter
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({
      error: "Falta parámetro 'email'. Usa: /api/test-email?email=tu@email.com",
    }, { status: 400 });
  }

  // Verificar que el usuario existe en la base de datos
  const supabase = createServiceRoleClient();
  const { data: users } = await supabase.auth.admin.listUsers();
  const user = users?.users.find(u => u.email === email);

  if (!user) {
    return NextResponse.json({
      error: "Usuario no encontrado",
      message: `No existe un usuario registrado con el email: ${email}`,
    }, { status: 404 });
  }

  // Enviar el email de bienvenida con más detalles
  try {
    const fullName = (user.user_metadata?.full_name as string | undefined) ?? email.split('@')[0];
    
    const result = await sendWelcomeEmail({
      to: email,
      customerName: fullName,
    });

    return NextResponse.json({
      success: true,
      message: "Email de bienvenida enviado correctamente",
      sentTo: email,
      customerName: fullName,
      resendResponse: result,
      instructions: `Revisa tu bandeja de entrada y carpeta de SPAM. El email viene de '${getResendFrom()}'`,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error enviando email",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}
