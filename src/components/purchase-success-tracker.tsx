"use client";

import { trackPurchase } from "@/lib/analytics";
import { useEffect, useRef } from "react";

type SessionSummary = {
  transactionId: string;
  serviceName: string;
  serviceSlug: string;
  valueEur: number;
  currency: string;
};

export function PurchaseSuccessTracker({ sessionId }: { sessionId: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (!sessionId || fired.current) return;
    fired.current = true;

    (async () => {
      try {
        const res = await fetch(`/api/analytics/checkout-session?session_id=${encodeURIComponent(sessionId)}`);
        if (!res.ok) return;
        const data = (await res.json()) as SessionSummary;
        trackPurchase({
          transactionId: data.transactionId,
          value: data.valueEur,
          currency: data.currency,
          items: [
            {
              item_id: data.serviceSlug,
              item_name: data.serviceName,
              price: data.valueEur,
              quantity: 1,
            },
          ],
        });
      } catch {
        /* analytics no bloquea UX */
      }
    })();
  }, [sessionId]);

  return null;
}
