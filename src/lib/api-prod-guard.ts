import { NextResponse } from "next/server";

/** Rutas de depuración: 404 en producción (no invocar funciones ni mail por bots). */
export function blockDebugRouteInProduction(): NextResponse | null {
  if (process.env.VERCEL_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }
  return null;
}