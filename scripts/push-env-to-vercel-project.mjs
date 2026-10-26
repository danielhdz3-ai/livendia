/**
 * Sube variables desde .env.livendia.migrate a un proyecto Vercel (cuenta nueva).
 *
 * Uso (PowerShell):
 *   $env:VERCEL_TOKEN = "<token cuenta admin.livendia>"
 *   $env:VERCEL_TEAM_ID = "<team id equipo Livendia>"
 *   $env:VERCEL_PROJECT_ID = "<project id livendia>"
 *   node scripts/push-env-to-vercel-project.mjs
 */
import fs from "node:fs";
import path from "node:path";

const token = process.env.VERCEL_TOKEN?.trim();
const teamId = process.env.VERCEL_TEAM_ID?.trim();
const projectId = process.env.VERCEL_PROJECT_ID?.trim();
const envFile = path.resolve(
  import.meta.dirname,
  "..",
  ".env.livendia.migrate",
);

if (!token || !teamId || !projectId) {
  console.error("Faltan VERCEL_TOKEN, VERCEL_TEAM_ID o VERCEL_PROJECT_ID");
  process.exit(1);
}
if (!fs.existsSync(envFile)) {
  console.error("Falta .env.livendia.migrate — ejecuta merge-vercel-env-for-migration.mjs");
  process.exit(1);
}

function parseDotenv(content) {
  const map = new Map();
  for (const line of content.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const m = t.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!m) continue;
    let v = m[2];
    if (v.startsWith('"') && v.endsWith('"')) {
      v = v
        .slice(1, -1)
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, "\\");
    }
    map.set(m[1], v);
  }
  return map;
}

const vars = parseDotenv(fs.readFileSync(envFile, "utf8"));
const targets = ["production", "preview", "development"];

async function listExisting() {
  const url = `https://api.vercel.com/v9/projects/${projectId}/env?teamId=${teamId}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error(`list env: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.envs ?? [];
}

async function deleteEnv(id) {
  const url = `https://api.vercel.com/v9/projects/${projectId}/env/${id}?teamId=${teamId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok && res.status !== 404) {
    throw new Error(`delete ${id}: ${res.status} ${await res.text()}`);
  }
}

async function createEnv(key, value) {
  const url = `https://api.vercel.com/v10/projects/${projectId}/env?teamId=${teamId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key,
      value,
      type: "encrypted",
      target: targets,
    }),
  });
  if (!res.ok) {
    throw new Error(`create ${key}: ${res.status} ${await res.text()}`);
  }
}

const existing = await listExisting();
for (const e of existing) {
  if (vars.has(e.key)) {
    await deleteEnv(e.id);
  }
}

for (const [key, value] of vars) {
  await createEnv(key, value);
  console.log(`OK ${key}`);
}

console.log(`Listo: ${vars.size} variables en production + preview + development.`);
