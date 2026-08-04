import { getCachedAuthUser, getCachedUserProfile } from "@/lib/supabase/auth-cache";
import { redirect } from "next/navigation";

export async function requireAdmin(nextPath = "/admin") {
  const user = await getCachedAuthUser();
  if (!user) redirect(`/login?next=${encodeURIComponent(nextPath)}`);

  const profile = await getCachedUserProfile(user.id);
  if (profile?.role !== "admin") redirect("/dashboard");

  return { user, profile };
}
