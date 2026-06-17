import { PurchaseSuccessTracker } from "@/components/purchase-success-tracker";
import { PostCheckoutRedirect } from "@/components/post-checkout-redirect";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gracias por tu contratación",
  description: "Pago recibido. Accede a tu área de cliente para los siguientes pasos.",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ session_id?: string; dest?: string }> };

export default async function GraciasPage({ searchParams }: Props) {
  const sp = await searchParams;
  const sessionId = sp.session_id?.trim() ?? "";
  const dest = sp.dest === "rental" ? "/dashboard/rental" : "/dashboard";

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      {sessionId ? <PurchaseSuccessTracker sessionId={sessionId} /> : null}
      <main className="flex flex-1 items-center justify-center bg-[#F8FAFC] px-4 py-16">
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" aria-hidden />
          <h1 className="mt-4 text-2xl font-bold text-[#1E293B]">¡Gracias! Pago recibido</h1>
          <p className="mt-3 text-[#475569]">
            Tu contratación se ha registrado correctamente. Te llevamos a tu expediente para que subas la
            documentación del contrato.
          </p>
          {sessionId ? <PostCheckoutRedirect sessionId={sessionId} /> : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href={dest}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2563EB]"
            >
              Ir a mi área de cliente
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#1E293B] hover:bg-slate-50"
            >
              Contacto
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
