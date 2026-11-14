/**
 * APIs de depuración deben estar bloqueadas en producción.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const testEmail = path.join(root, "src", "app", "api", "test-email", "route.ts");
const text = fs.readFileSync(testEmail, "utf8");

if (!text.includes("blockDebugRouteInProduction")) {
  console.error("test-email debe usar blockDebugRouteInProduction en producción.");
  process.exit(1);
}
console.log("OK — API debug protegida.");