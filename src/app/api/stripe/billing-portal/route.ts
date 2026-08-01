import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .maybeSingle();

  const customerId = typeof profile?.stripe_customer_id === "string" ? profile.stripe_customer_id.trim() : "";
  if (!customerId) {
    return NextResponse.json(
      {
        error:
          "No hay cuenta de facturación en Stripe todavía. Contrata primero Administración de alquileres o contacta con soporte.",
      },
      { status: 400 },
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (!appUrl) {
    return NextResponse.json({ error: "NEXT_PUBLIC_APP_URL no configurada" }, { status: 500 });
  }

  let returnPath = "/dashboard/pagos";
  try {
    const body = (await req.json()) as { returnPath?: string | null };
    if (typeof body.returnPath === "string" && body.returnPath.startsWith("/")) {
      returnPath = body.returnPath;
    }
  } catch {
    /* body opcional */
  }

  try {
    const stripe = getStripe();
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${appUrl}${returnPath}`,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "No se pudo abrir el portal de facturación" }, { status: 502 });
  }
}
