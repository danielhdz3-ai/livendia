import { createServerSupabaseClient } from "@/lib/supabase/server";
import { rateLimitChat } from "@/lib/ratelimit";
import { assertAllowedUpload, MAX_CHAT_ATTACHMENTS } from "@/lib/uploads";
import { toPlainText } from "@/lib/text";
import { NextResponse } from "next/server";

const MAX_MESSAGE_LEN = 5000;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const propertyId = formData.get("propertyId") as string;
    const messageRaw = formData.get("message") as string;

    if (!propertyId || typeof messageRaw !== "string") {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const message = toPlainText(messageRaw, MAX_MESSAGE_LEN);
    if (!message.trim()) {
      return NextResponse.json({ error: "El mensaje está vacío" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    const rl = await rateLimitChat(user.id);
    if (!rl.ok) {
      return NextResponse.json({ error: "Demasiados mensajes. Espera un momento." }, { status: 429 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    const isAdmin = profile?.role === "admin";

    if (!isAdmin) {
      const { data: property } = await supabase
        .from("properties")
        .select("user_id")
        .eq("id", propertyId)
        .maybeSingle();

      if (!property || property.user_id !== user.id) {
        return NextResponse.json({ error: "No autorizado para esta propiedad" }, { status: 403 });
      }
    }

    const attachments: { file_name: string; file_path: string }[] = [];
    let attachmentIndex = 0;

    while (formData.has(`attachment_${attachmentIndex}`)) {
      if (attachments.length >= MAX_CHAT_ATTACHMENTS) {
        return NextResponse.json({ error: `Máximo ${MAX_CHAT_ATTACHMENTS} archivos` }, { status: 400 });
      }
      const file = formData.get(`attachment_${attachmentIndex}`) as File;
      if (file && file.size > 0) {
        const check = assertAllowedUpload(file);
        if (!check.ok) {
          return NextResponse.json({ error: check.error }, { status: 400 });
        }
        const timestamp = Date.now();
        const ext = file.name.split(".").pop() ?? "bin";
        const fileName = `${user.id}/${propertyId}/chat/${timestamp}_${attachmentIndex}.${ext}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("documents")
          .upload(fileName, file);

        if (uploadError) {
          console.error("Error subiendo archivo:", uploadError);
        } else if (uploadData) {
          attachments.push({
            file_name: file.name,
            file_path: uploadData.path,
          });
        }
      }

      attachmentIndex++;
    }

    const { data: newMessage, error: messageError } = await supabase
      .from("messages")
      .insert({
        property_id: propertyId,
        sender_id: user.id,
        message,
        attachments: attachments.length > 0 ? attachments : null,
      })
      .select()
      .single();

    if (messageError) {
      console.error("Error creando mensaje:", messageError);
      return NextResponse.json({ error: "Error al crear mensaje" }, { status: 500 });
    }

    return NextResponse.json({ message: newMessage });
  } catch (error) {
    console.error("Error en endpoint de mensajes:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
