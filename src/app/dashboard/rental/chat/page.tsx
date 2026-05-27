import { createServerSupabaseClient } from "@/lib/supabase/server";
import { ChatBox } from "./chat-box";

export const metadata = { title: "Chat con el equipo" };

export default async function ChatPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>No autenticado</div>;
  }

  // Obtener perfil
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  // Obtener propiedad del usuario
  const { data: property } = await supabase
    .from("properties")
    .select("id, address")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!property) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
          Primero debes registrar una propiedad para poder chatear con tu gestor.
        </div>
      </div>
    );
  }

  // Obtener mensajes de la propiedad
  const { data: messages } = await supabase
    .from("messages")
    .select(`
      *,
      profiles:sender_id (
        full_name,
        role
      )
    `)
    .eq("property_id", property.id)
    .order("created_at", { ascending: true });

  // Formatear mensajes para el componente
  const formattedMessages = (messages || []).map((msg) => ({
    id: msg.id,
    sender_id: msg.sender_id,
    message: msg.message,
    attachments: msg.attachments,
    created_at: msg.created_at,
    sender_name: msg.profiles?.full_name || "Usuario",
    sender_role: msg.profiles?.role || "client",
  }));

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Chat Unificado</h1>
        <p className="mt-1 text-[#64748B]">
          Conversación con tu gestor - {property.address}
        </p>
      </div>

      <ChatBox
        propertyId={property.id}
        currentUserId={user.id}
        currentUserName={profile?.full_name || "Tú"}
        currentUserRole={profile?.role || "client"}
        initialMessages={formattedMessages}
      />
    </div>
  );
}
