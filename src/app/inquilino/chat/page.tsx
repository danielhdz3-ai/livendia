import { ChatBox } from "@/app/dashboard/rental/chat/chat-box";
import { getTenantContextForUser } from "@/lib/rental-tenant-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: "Chat — Portal inquilino" };

export default async function TenantChatPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/inquilino/chat");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  const tenantCtx = await getTenantContextForUser(supabase, user.id);
  if (!tenantCtx) redirect("/inquilino");

  const { data: messages } = await supabase
    .from("messages")
    .select(`*, profiles:sender_id ( full_name, role )`)
    .eq("property_id", tenantCtx.propertyId)
    .order("created_at", { ascending: true });

  const formattedMessages = (messages ?? []).map((msg) => {
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
        <h1 className="text-3xl font-bold text-[#1E293B]">Chat con el gestor</h1>
        <p className="mt-1 text-[#64748B]">{tenantCtx.propertyAddress}</p>
      </div>

      <ChatBox
        propertyId={tenantCtx.propertyId}
        currentUserId={user.id}
        currentUserName={profile?.full_name || tenantCtx.tenantName}
        currentUserRole="tenant"
        initialMessages={formattedMessages}
      />
    </div>
  );
}
