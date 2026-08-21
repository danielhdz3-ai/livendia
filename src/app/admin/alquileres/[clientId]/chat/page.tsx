import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ChatBox } from "@/app/dashboard/rental/chat/chat-box";

export const metadata = { title: { absolute: "Chat con cliente — Livendia Admin" } };

export default async function AdminClientChatPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: me } = await supabase.from("profiles").select("role, full_name").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", clientId).maybeSingle();

  const { data: property } = await supabase
    .from("properties")
    .select("id, address")
    .eq("user_id", clientId)
    .maybeSingle();

  if (!property) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8">
        <p className="text-[#64748B]">Este cliente aún no tiene inmueble registrado.</p>
        <Link href={`/admin/alquileres/${clientId}`} className="mt-4 inline-block text-[#1A4FBF] hover:underline">
          ← Volver al cliente
        </Link>
      </main>
    );
  }

  const { data: messages } = await supabase
    .from("messages")
    .select(`*, profiles:sender_id ( full_name, role )`)
    .eq("property_id", property.id)
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
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link
        href={`/admin/alquileres/${clientId}`}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:text-[#2563EB]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a {profile?.full_name || "cliente"}
      </Link>
      <h1 className="mb-2 text-2xl font-bold text-[#1E293B]">Chat con {profile?.full_name || "cliente"}</h1>
      <p className="mb-6 text-sm text-[#64748B]">{property.address as string}</p>
      <ChatBox
        propertyId={property.id as string}
        currentUserId={user.id}
        currentUserName={me?.full_name || "Gestor"}
        currentUserRole="admin"
        initialMessages={formattedMessages}
      />
    </main>
  );
}
