import { createServerSupabaseClient } from "@/lib/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChatBox } from "@/app/dashboard/rental/chat/chat-box";
import { asSingleProfile } from "@/lib/supabase-relation-single";

export const metadata = { title: { absolute: "Chat — Livendia Admin" } };

export default async function AdminChatPropertyPage({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const { propertyId } = await params;

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/chat");

  const { data: me } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", user.id)
    .maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  // Obtener propiedad con propietario
  const { data: property } = await supabase
    .from("properties")
    .select("id, address, user_id, profiles(full_name, email)")
    .eq("id", propertyId)
    .maybeSingle();

  if (!property) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-xl bg-white p-12 text-center shadow ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-[#1E293B]">Propiedad no encontrada</h3>
          <Link
            href="/admin/chat"
            className="mt-4 inline-block font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
          >
            ← Volver
          </Link>
        </div>
      </main>
    );
  }

  // Obtener mensajes
  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("property_id", propertyId)
    .order("created_at", { ascending: true });

  // Formatear mensajes con info del sender
  const formattedMessages = await Promise.all(
    (messages || []).map(async (msg) => {
      const { data: senderProfile } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", msg.sender_id)
        .maybeSingle();

      return {
        id: msg.id,
        message: msg.message,
        sender_id: msg.sender_id,
        sender_name: senderProfile?.full_name || "Usuario",
        sender_role: senderProfile?.role || "client",
        created_at: msg.created_at,
        attachments: msg.attachments,
      };
    })
  );

  const owner = asSingleProfile(property.profiles);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <Link
          href="/admin/chat"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a la lista
        </Link>
        <h1 className="text-3xl font-bold text-[#1E293B]">{property.address}</h1>
        <p className="mt-1 text-[#64748B]">
          Propietario: {owner?.full_name || owner?.email || "Sin nombre"}
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <ChatBox
          propertyId={propertyId}
          currentUserId={user.id}
          currentUserName={me?.full_name || "Admin"}
          currentUserRole="admin"
          initialMessages={formattedMessages}
        />
      </div>
    </main>
  );
}
