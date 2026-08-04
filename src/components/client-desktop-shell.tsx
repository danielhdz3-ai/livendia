import { ClientSidebar } from "@/components/client-sidebar";
import { PANEL_PAGE_BG } from "@/lib/client-panel-ui";
import type { ClientShellProps } from "@/lib/client-shell-props";

export function ClientDesktopShell({
  shell,
  header,
  children,
}: {
  shell: ClientShellProps;
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen ${PANEL_PAGE_BG}`}>
      <ClientSidebar {...shell} />
      <div className="flex min-w-0 flex-1 flex-col">
        {header}
        {children}
      </div>
    </div>
  );
}
