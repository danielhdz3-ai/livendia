import { resolvePostLoginPath } from "@/lib/admin-access";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

function safeNextPath(raw: string | null): string {
  const next = raw ?? "/dashboard";
  if (!next.startsWith("/") || next.startsWith("//")) return "/dashboard";
  return next;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = safeNextPath(requestUrl.searchParams.get("next"));

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon || !code) {
    return NextResponse.redirect(new URL("/login?error=oauth", requestUrl.origin));
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(url, anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
        });
      },
    },
  });

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error || !data.session) {
    return NextResponse.redirect(new URL("/login?error=oauth", requestUrl.origin));
  }

  try {
    await fetch(new URL("/api/email/welcome", requestUrl.origin), {
      method: "POST",
      headers: { Authorization: `Bearer ${data.session.access_token}` },
    });
  } catch {
    /* email opcional */
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.session.user.id)
    .maybeSingle();

  const resolvedNext = resolvePostLoginPath(data.session.user.email, profile?.role, next);

  const forwardedHost = request.headers.get("x-forwarded-host");
  const isDev = process.env.NODE_ENV === "development";
  const dest =
    !isDev && forwardedHost
      ? `https://${forwardedHost}${resolvedNext}`
      : `${requestUrl.origin}${resolvedNext}`;

  return NextResponse.redirect(dest);
}
