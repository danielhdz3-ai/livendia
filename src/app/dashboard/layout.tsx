import { ClientPanelLayoutClient } from "@/components/client-panel-layout-client";
import { getClientShellProps } from "@/lib/client-shell-props";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const shell = await getClientShellProps();
  if (!shell) redirect("/login");

  return <ClientPanelLayoutClient shell={shell}>{children}</ClientPanelLayoutClient>;
}
