"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

/** Refresca la página cuando cambian incidencias del inmueble (Supabase Realtime). */
export function IncidentsRealtimeRefresh({
  propertyId,
  propertyIds,
}: {
  propertyId?: string;
  propertyIds?: string[];
}) {
  const router = useRouter();
  const ids = propertyIds ?? (propertyId ? [propertyId] : []);

  useEffect(() => {
    if (ids.length === 0) return;
    const supabase = createBrowserSupabaseClient();
    const channels = ids.map((pid) =>
      supabase
        .channel(`incidents:${pid}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "incidents",
            filter: `property_id=eq.${pid}`,
          },
          () => {
            router.refresh();
          },
        )
        .subscribe(),
    );

    return () => {
      for (const channel of channels) {
        void supabase.removeChannel(channel);
      }
    };
  }, [ids.join(","), router]);

  return null;
}
