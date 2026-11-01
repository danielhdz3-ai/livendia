/**
 * Inventario de módulos en landings (components/*landing*.tsx).
 * Uso: node scripts/audit-service-landing-modules.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "src/components");

const MODULES = [
  "ServiceLandingSharedSections",
  "FaqSection",
  "ServiceMidPageContactSection",
  "ServiceGestorPlatformSection",
  "TrustReviewsBlock",
  "RentalContractPlatformShowcase",
  "ArrasLandingLeadModules",
  "LocalCityContextSectionFromConfig",
  "ContratosBcnServicesCarousel",
  "ServiceCommissionCompareSection",
  "LandingLocalTestimonialsSection",
];

const files = fs
  .readdirSync(DIR)
  .filter((f) => f.includes("landing") && f.endsWith(".tsx") && !f.includes("shared-sections"));

const rows = [];
for (const f of files.sort()) {
  const t = fs.readFileSync(path.join(DIR, f), "utf8");
  const row = { file: f.replace(/\.tsx$/, "") };
  for (const m of MODULES) row[m] = t.includes(m);
  row.missingShared = !t.includes("ServiceLandingSharedSections");
  rows.push(row);
}

const missing = rows.filter((r) => r.missingShared);
console.log(JSON.stringify({ total: rows.length, missingShared: missing.map((r) => r.file), rows }, null, 2));
