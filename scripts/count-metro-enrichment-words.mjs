import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const enrichSrc = readFileSync(join(root, "src/lib/administracion-alquiler-metro-enrichment.ts"), "utf8");
const landingsSrc = readFileSync(join(root, "src/lib/administracion-alquiler-metro-landings.ts"), "utf8");

const keys = ["barcelona/les-corts", "barcelona/gracia", "l-hospitalet", "cornella"];

for (const key of keys) {
  const blockRe = new RegExp(`"${key.replace("/", "\\/")}": \\{([\\s\\S]*?)\\n  \\},`, "m");
  const m = enrichSrc.match(blockRe);
  let enrichWords = 0;
  if (m) {
    const strings = [...m[1].matchAll(/"([^"\\]|\\.)*"/g)].map((x) => JSON.parse(`"${x[1]}"`));
    enrichWords = wc(strings.join(" "));
  }

  const seg = key.split("/");
  const segPattern = seg.map((s) => `"${s}"`).join(", ");
  const landingRe = new RegExp(`segments: \\[${segPattern}\\][\\s\\S]*?localFaq: \\[([\\s\\S]*?)\\],\\s*finalCtaLead`, "m");
  const lm = landingsSrc.match(landingRe);
  let configWords = 0;
  if (lm) {
    const fields = [...landingsSrc.slice(landingsSrc.indexOf(lm[0])).matchAll(/(?:heroLead|eeatBlock|whyIntro|howIntro|barriosIntro):\s*\n\s*"([^"]*)"/g)].map((x) => x[1]);
    const faqStrings = [...lm[1].matchAll(/"(?:[^"\\]|\\.)*"/g)].map((x) => JSON.parse(x[0]));
    configWords = wc([...fields, ...faqStrings].join(" "));
  }

  console.log(`${key}: enrichment=${enrichWords} config+faq=${configWords} combined=${enrichWords + configWords}`);
}
