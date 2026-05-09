import { Suspense } from "react";
import { LoginForm } from "./login-form";

export const metadata = { title: "Entrar — Livendia" };

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F1F5F9] text-[#475569]">
          Cargando…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
