import { asSingleProfile } from "@/lib/supabase-relation-single";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getAdminUnreadByProperty } from "@/lib/rental-chat-unread";
import { UnreadCountPill } from "@/components/admin-chat-nav-badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: { absolute: "Chat con propietarios — Livendia Admin" } };

export default async function AdminChatPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/chat");

  const { data: me } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const unread = await getAdminUnreadByProperty(supabase, user.id);

  const { data: properties } = await supabase
    .from("properties")
    .select("id, address, user_id, profiles(full_name, email)")
    .order("created_at", { ascending: false });

  const propertiesWithMessages = await Promise.all(
    (properties || []).map(async (prop) => {
      const { data: lastMessage, count } = await supabase
        .from("messages")
        .select("message, created_at, sender_id", { count: "exact" })
        .eq("property_id", prop.id)
        .order("created_at", { ascending: false })
        .limit(1);

      return {
        ...prop,
        lastMessage: lastMessage?.[0] || null,
        messageCount: count || 0,
        unreadCount: unread.byProperty[prop.id as string] ?? 0,
      };
    }),
  );

  propertiesWithMessages.sort((a, b) => b.unreadCount - a.unreadCount);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1E293B]">Chat con Propietarios</h1>
          <p className="mt-1 text-[#64748B]">Mensajería con los clientes del servicio de alquileres</p>
        </div>
        {unread.total > 0 ? (
          <div className="rounded-lg bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800 ring-1 ring-orange-200">
            {unread.total} mensaje{unread.total !== 1 ? "s" : ""} sin leer
          </div>
        ) : null}
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        {!properties || properties.length === 0 ? (
          <div className="py-12 text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm text-[#64748B]">No hay propiedades registradas</p>
          </div>
        ) : (
          <div className="space-y-3">
            {propertiesWithMessages.map((prop) => {
              const owner = asSingleProfile(prop.profiles);
              return (
                <Link
                  key={prop.id}
                  href={`/admin/chat/${prop.id}`}
                  className="block rounded-lg border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-cyan-600" />
                        <h3 className="font-semibold text-[#1E293B]">{prop.address}</h3>
                        <UnreadCountPill count={prop.unreadCount} />
                      </div>
                      <div className="mt-1 text-sm text-[#64748B]">
                        Propietario: {owner?.full_name || owner?.email || "Sin nombre"}
                      </div>
                      {prop.lastMessage ? (
                        <div className="mt-2 text-sm text-[#64748B]">
                          <span className="font-semibold">Último mensaje:</span>{" "}
                          {prop.lastMessage.message.substring(0, 100)}
                          {prop.lastMessage.message.length > 100 ? "..." : ""}
                        </div>
                      ) : null}
                      {prop.messageCount > 0 ? (
                        <div className="mt-2 text-xs text-[#64748B]">
                          {prop.messageCount} mensaje{prop.messageCount !== 1 ? "s" : ""}
                        </div>
                      ) : null}
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#64748B]" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
