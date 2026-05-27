import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filePath = searchParams.get("filePath");

    if (!filePath) {
      return NextResponse.json({ error: "filePath requerido" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    // Verificar permisos según el tipo de documento
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    const isAdmin = profile?.role === "admin";

    // Si no es admin, verificar que el archivo le pertenece
    if (!isAdmin && !filePath.startsWith(user.id)) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    // Generar URL firmada (válida por 1 hora)
    const { data, error } = await supabase.storage
      .from("documents")
      .createSignedUrl(filePath, 3600);

    if (error) {
      console.error("Error generando URL firmada:", error);
      return NextResponse.json(
        { error: "Error al generar URL de descarga" },
        { status: 500 }
      );
    }

    if (!data?.signedUrl) {
      return NextResponse.json(
        { error: "No se pudo generar URL de descarga" },
        { status: 500 }
      );
    }

    // Retornar la URL firmada
    return NextResponse.json({
      url: data.signedUrl,
      expiresIn: 3600,
    });
  } catch (error) {
    console.error("Error en endpoint de descarga:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
