import { createServerClient } from "@supabase/ssr";
import { shouldRedirectToAdminPanel } from "@/lib/admin-access";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    return response;
  }

  const supabase = createServerClient(url, anon, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const viewAsClient = request.cookies.get("livendia_view_as_client")?.value === "1";

  let profileRole: string | null = null;
  async function loadProfileRole() {
    if (!user) return null;
    if (profileRole !== null) return profileRole;
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    profileRole = profile?.role ?? null;
    return profileRole;
  }

  if ((path.startsWith("/dashboard") || path.startsWith("/mis-pedidos")) && !user) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", path);
    return NextResponse.redirect(login);
  }

  if (user) {
    const role = await loadProfileRole();
    if (shouldRedirectToAdminPanel(user.email, role)) {
      if (path === "/login" || path === "/register") {
        const cambiar = request.nextUrl.searchParams.get("cambiar");
        if (cambiar !== "1") {
          return NextResponse.redirect(new URL("/admin", request.url));
        }
      }
      if ((path === "/dashboard" || path.startsWith("/dashboard/")) && !viewAsClient) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
  }

  if (path.startsWith("/admin")) {
    if (viewAsClient) {
      response.cookies.set("livendia_view_as_client", "", { maxAge: 0, path: "/" });
    }
    if (!user) {
      const login = new URL("/login", request.url);
      login.searchParams.set("next", path);
      return NextResponse.redirect(login);
    }
    const role = await loadProfileRole();
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if ((path === "/login" || path === "/register") && user) {
    const cambiar = request.nextUrl.searchParams.get("cambiar");
    if (cambiar !== "1") {
      const role = await loadProfileRole();
      const dest = shouldRedirectToAdminPanel(user.email, role) ? "/admin" : "/dashboard";
      return NextResponse.redirect(new URL(dest, request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
