"use client";

import { useCallback, useEffect, useState } from "react";
import type { OrderActivityRow } from "@/lib/order-activity";
import { OrderActivityFeed } from "@/components/order-activity-feed";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useToast } from "@/components/toast-provider";
import { useRouter } from "next/navigation";

export function OrderActivityFeedLive({
  orderId,
  initialItems,
}: {
  orderId: string;
  initialItems: OrderActivityRow[];
}) {
  const [items, setItems] = useState(initialItems);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const prependActivity = useCallback(
    (row: OrderActivityRow) => {
      setItems((prev) => {
        if (prev.some((p) => p.id === row.id)) return prev;
        return [row, ...prev];
      });
      toast("Nueva actividad en tu expediente", "info");
    },
    [toast],
  );

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    const channel = supabase
      .channel(`order-activity:${orderId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "order_activity",
          filter: `order_id=eq.${orderId}`,
        },
        (payload) => {
          prependActivity(payload.new as OrderActivityRow);
        },
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "orders",
          filter: `id=eq.${orderId}`,
        },
        () => {
          toast("Tu gestor ha actualizado el estado del expediente", "info");
          router.refresh();
        },
      )
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "order_deliverables",
          filter: `order_id=eq.${orderId}`,
        },
        () => {
          toast("Nueva entrega disponible en tu expediente", "success");
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [orderId, prependActivity, toast, router]);

  return <OrderActivityFeed items={items} />;
}
