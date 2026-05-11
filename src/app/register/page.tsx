import { RegisterClient } from "./register-client";
import { Suspense } from "react";

export const metadata = { title: "Registro — Livendia" };

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F1F5F9] text-[#475569]">
          Cargando…
        </div>
      }
    >
      <RegisterClient />
    </Suspense>
  );
}
