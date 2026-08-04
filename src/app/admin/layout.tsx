import { AdminLayoutShell } from "@/components/admin/admin-layout-shell";
import { requireAdmin } from "@/lib/admin-auth";

export default async function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const { user } = await requireAdmin("/admin");

  return <AdminLayoutShell adminEmail={user.email ?? "admin@livendia.com"}>{children}</AdminLayoutShell>;
}
