"use client";

import { useEffect, useRef, useState } from "react";

export function PostCheckoutRedirect({ sessionId }: { sessionId: string }) {
  const started = useRef(false);
  const [message, setMessage] = useState("Preparando tu área de cliente…");

  useEffect(() => {
    if (!sessionId || started.current) return;
    started.current = true;

    void (async () => {
      try {
        const res = await fetch("/api/auth/post-checkout", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        const data = (await res.json()) as { redirectUrl?: string; error?: string };

        if (!res.ok || !data.redirectUrl) {
          setMessage(data.error ?? "No pudimos abrir tu panel. Usa el enlace de abajo.");
          return;
        }

        window.location.replace(data.redirectUrl);
      } catch {
        setMessage("Conexión interrumpida. Entra en tu panel desde el botón de abajo.");
      }
    })();
  }, [sessionId]);

  return (
    <p className="mt-4 text-sm font-medium text-[#1A4FBF]" role="status" aria-live="polite">
      {message}
    </p>
  );
}
