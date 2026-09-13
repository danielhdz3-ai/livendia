/**
 * Aplica la migración rental_admin_billing en Supabase (requiere SUPABASE_DB_URL).
 * Uso: SUPABASE_DB_URL="postgresql://..." node scripts/apply-rental-admin-billing-sql.mjs
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sql = readFileSync(
  resolve(root, "supabase/migrations/20260913194500_rental_admin_billing.sql"),
  "utf8",
);

const dbUrl = process.env.SUPABASE_DB_URL || process.env.DATABASE_URL;
if (!dbUrl) {
  console.error("Define SUPABASE_DB_URL (URI directa Postgres de Supabase → Settings → Database).");
  process.exit(1);
}

const { default: pg } = await import("pg");
const client = new pg.Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });
await client.connect();
await client.query(sql);
await client.end();
console.log("Migración rental_admin_billing aplicada.");
