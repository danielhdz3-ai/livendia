"use client";

import { ClientPanelProvider } from "@/components/client-panel-provider";
import { ClientNotificationCenter } from "@/components/client-notification-center";
import { RentalPropertySelector } from "@/components/rental-property-selector";
import type { ReactNode } from "react";

type PropertyOption = {
  id: string;
  address: string;
  zone?: string | null;
};

export function RentalPanelShell({
  children,
  properties,
  activePropertyId,
  chatUnreadCount = 0,
}: {
  children: ReactNode;
  properties: PropertyOption[];
  activePropertyId?: string;
  chatUnreadCount?: number;
}) {
  return (
    <ClientPanelProvider>
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
            {activePropertyId && properties.length > 0 ? (
              <RentalPropertySelector properties={properties} activePropertyId={activePropertyId} />
            ) : null}
            {chatUnreadCount > 0 ? (
              <span className="rounded-full bg-[#06B6D4] px-2.5 py-0.5 text-xs font-bold text-white">
                {chatUnreadCount} mensaje{chatUnreadCount === 1 ? "" : "s"} sin leer
              </span>
            ) : null}
          </div>
          <ClientNotificationCenter />
        </div>
      </div>
      {children}
    </ClientPanelProvider>
  );
}
