/**
 * Audita unicidad de texto en landings metro administracion-alquiler.
 * Uso: node scripts/audit-metro-landings-uniqueness.mjs
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Extraer textos de config desde el TS (campos string por landing)
const configPath = join(root, "src/lib/administracion-alquiler-metro-landings.ts");
const configSrc = readFileSync(configPath, "utf8");

const landingBlocks = [...configSrc.matchAll(/\{\s*\n\s*segments: \[(.*?)\]/gs)].map((m, i) => {
  const start = m.index;
  const next = configSrc.indexOf("\n  },", start);
  return configSrc.slice(start, next + 5);
});

function extractStrings(block, i) {
  const fields = {};
  const stringFields = [
    "zoneLabel",
    "metaTitle",
    "metaDescription",
    "h1",
    "subtitle",
    "heroLead",
    "eeatHeading",
    "eeatBlock",
    "whyIntro",
    "howIntro",
    "barriosIntro",
    "testimonialsTitle",
    "finalCtaLead",
    "primaryCtaLabel",
    "waPlaceLabel",
  ];
  for (const f of stringFields) {
    const re = new RegExp(`${f}:\\s*\\n\\s*"([^"]*(?:\\\\.[^"]*)*)"`, "s");
    const m = block.match(re);
    if (m) fields[f] = m[1].replace(/\\"/g, '"');
  }
  // arrays
  for (const arr of ["barrios", "localFaq", "testimonials", "serviceGrid", "serviceBullets"]) {
    const re = new RegExp(`${arr}:\\s*\\[([\\s\\S]*?)\\],`, "m");
    const m = block.match(re);
    if (m) {
      const texts = [...m[1].matchAll(/"(?:[^"\\]|\\.)*"/g)].map((x) =>
        JSON.parse(x[0].replace(/\\"/g, '"'))
      );
      fields[arr] = texts.join(" ");
    }
  }
  const seg = block.match(/segments: \[(.*?)\]/s)?.[1];
  fields._key = seg?.replace(/["\s]/g, "") ?? `landing-${i}`;
  return fields;
}

const landings = landingBlocks.map((block, i) => extractStrings(block, i));

// Texto compartido del componente (hardcoded)
const componentPath = join(root, "src/components/administracion-alquiler-metro-seo-landing.tsx");
const comp = readFileSync(componentPath, "utf8");

const sharedComponentTexts = [
  "Livendia se encarga del inquilino. Tú de las decisiones.",
  "Cero contacto con el inquilino",
  "Incidencias resueltas por nosotros",
  "Cobro y calendario bajo control",
  "Mediación profesional",
  "Panel del propietario 24/7",
  "Gestor asignado en Les Corts",
  "Coordinamos técnicos, presupuestos y seguimiento hasta el cierre. Tú apruebas cuando hace falta, no gestionas el día a día.",
  "Seguimiento de la renta el día 1, renovaciones, plazos legales e IRAV en Cataluña con aviso previo.",
  "Conflictos de convivencia, retrasos o peticiones del inquilino los filtramos con criterio antes de llegar a ti.",
  "Contratos, recibos e historial de incidencias en un solo lugar. Consulta desde móvil sin llamar al despacho.",
  "Oficina física en Barcelona: no eres un ticket anónimo. Hablas con un profesional que conoce tu zona.",
  "Nos convertimos en tu intermediario",
  "Gestionamos todas las comunicaciones",
  "Coordinamos reparaciones e impagos",
  "Te informamos solo de lo crítico",
  "Consultas, averías y reclamaciones las atiende tu gestor con tiempos de respuesta publicados.",
  "Industriales de confianza, protocolo de cobro desde el día 3 y mediación antes de escalar.",
  "Livendia habla con el inquilino — tú no",
  "Cobro de renta e incidencias coordinadas",
  "Oficina física en Les Corts (Barcelona)",
  "El servicio no incluye procesos judiciales",
];

const commonFaq = [
  "¿Dónde están ubicadas las oficinas de Livendia?",
  "¿Qué incluye exactamente la cuota de 49 €/mes?",
  "¿Existe compromiso de permanencia?",
];

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function configText(l) {
  const { _key, ...rest } = l;
  return Object.values(rest).join(" ");
}

const configTexts = landings.map(configText);
const configWords = configTexts.map(wordCount);

// Palabras únicas vs compartidas entre configs (n-gramas de frases)
function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

function sentenceSplit(text) {
  return text.split(/(?<=[.!?])\s+/).map(normalize).filter((s) => s.length > 20);
}

const allSentences = landings.flatMap((l, idx) =>
  sentenceSplit(configText(l)).map((s) => ({ s, idx }))
);

const sentenceCounts = new Map();
for (const { s } of allSentences) {
  sentenceCounts.set(s, (sentenceCounts.get(s) ?? 0) + 1);
}

const perLanding = landings.map((l, idx) => {
  const sentences = sentenceSplit(configText(l));
  let shared = 0;
  let unique = 0;
  for (const s of sentences) {
    if ((sentenceCounts.get(s) ?? 0) > 1) shared += wordCount(s);
    else unique += wordCount(s);
  }
  const configW = configWords[idx];
  const sharedComp = sharedComponentTexts.reduce((a, t) => a + wordCount(t), 0);
  const commonFaqW = commonFaq.reduce((a, t) => a + wordCount(t), 0) + 120; // approx answers
  const totalApprox = configW + sharedComp + commonFaqW + 80; // workflow template ~80w variable
  const uniqueConfig = unique;
  const sharedConfig = shared;
  return {
    key: l._key,
    configWords: configW,
    uniqueConfigWords: uniqueConfig,
    sharedConfigWords: sharedConfig,
    sharedComponentWords: sharedComp,
    commonFaqWords: commonFaqW,
    totalApproxWords: totalApprox,
    pctUniqueConfig: ((uniqueConfig / configW) * 100).toFixed(1),
    pctUniqueTotal: (((uniqueConfig + 80) / totalApprox) * 100).toFixed(1),
    pctSharedTotal: (((sharedConfig + sharedComp + commonFaqW) / totalApprox) * 100).toFixed(1),
  };
});

// Pairwise similarity (config only)
function jaccard(a, b) {
  const wa = new Set(normalize(a).split(/\s+/));
  const wb = new Set(normalize(b).split(/\s+/));
  const inter = [...wa].filter((w) => wb.has(w)).length;
  const union = new Set([...wa, ...wb]).size;
  return union ? inter / union : 0;
}

console.log(JSON.stringify({ perLanding, pairwise: landings.map((l, i) => ({
  a: l._key,
  similarities: landings.map((l2, j) => ({ b: l2._key, jaccard: i === j ? 1 : jaccard(configText(l), configText(l2)).toFixed(3) }))
})) }, null, 2));
