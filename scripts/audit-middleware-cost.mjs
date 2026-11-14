/**
 * Middleware solo en rutas autenticadas (no marketing).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const file = path.join(root, "src", "middleware.ts");
const text = fs.readFileSync(file, "utf8");

if (text.includes("isPublicAnonymousPath")) {
  console.error("middleware no debe ejecutarse en todo el sitio (quitar isPublicAnonymousPath).");
  process.exit(1);
}

if (!text.includes('"/dashboard/:path*"') || text.includes("/((?!")) {
  console.error("matcher debe listar solo rutas con sesión, no regex global.");
  process.exit(1);
}

console.log("OK — middleware acotado a panel/login.");