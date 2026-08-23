import { getActivePropertyForUser } from "@/lib/rental-active-property";
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

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  const { activeProperty: property } = await getActivePropertyForUser(supabase, user.id);

  if (!property) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
          Primero debes registrar una propiedad para poder chatear con tu gestor.
        </div>
      </div>
    );
  }

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

  const formattedMessages = (messages || []).map((msg) => {
    const prof = msg.profiles as { full_name?: string; role?: string } | { full_name?: string; role?: string }[] | null;
    const p = Array.isArray(prof) ? prof[0] : prof;
    return {
      id: msg.id as string,
      sender_id: msg.sender_id as string,
      message: msg.message as string,
      attachments: msg.attachments as { file_name: string; file_path: string }[] | undefined,
      created_at: msg.created_at as string,
      sender_name: p?.full_name || "Usuario",
      sender_role: p?.role || "client",
    };
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Chat Unificado</h1>
        <p className="mt-1 text-[#64748B]">Conversación con tu gestor — {property.address}</p>
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
