/**
 * Falla si el código referencia /images/... que no existen en disco o no están en git
 * (en Vercel solo se despliega lo commiteado → 404 y icono roto).
 *
 * Uso: node scripts/audit-public-images-git.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");

function unquoteGitLsFilesPath(line) {
  let p = line.trim();
  if (!p.startsWith('"') || !p.endsWith('"')) return p;
  const inner = p.slice(1, -1);
  const bytes = [];
  for (let i = 0; i < inner.length; ) {
    if (inner[i] === "\\" && /^[0-7]{3}/.test(inner.slice(i + 1, i + 4))) {
      bytes.push(parseInt(inner.slice(i + 1, i + 4), 8));
      i += 4;
    } else {
      bytes.push(inner.charCodeAt(i));
      i += 1;
    }
  }
  return Buffer.from(bytes).toString("utf8");
}

function gitPathToPublicWebPath(line) {
  let p = unquoteGitLsFilesPath(line);
  p = p.replace(/^public/, "").replace(/\\/g, "/");
  return p.startsWith("/") ? p : `/${p}`;
}

const tracked = new Set(
  execSync("git ls-files public/images", { cwd: root, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean)
    .map(gitPathToPublicWebPath),
);

const refs = new Set();
const sourceGlobs = ['git ls-files "src/**/*.ts" "src/**/*.tsx" "src/**/*.mdx"'];
for (const cmd of sourceGlobs) {
  for (const rel of execSync(cmd, { cwd: root, encoding: "utf8" }).trim().split("\n").filter(Boolean)) {
    const src = fs.readFileSync(path.join(root, rel), "utf8");
    for (const m of src.matchAll(/"(\/images\/[^"]+\.(?:jpg|jpeg|png|webp|gif|svg))"/gi)) {
      refs.add(m[1]);
    }
  }
}

const missingDisk = [];
const missingGit = [];
for (const ref of [...refs].sort()) {
  const fp = path.join(root, "public", ref.slice(1));
  if (!fs.existsSync(fp)) missingDisk.push(ref);
  else if (!tracked.has(ref)) missingGit.push(ref);
}

console.log("IMAGE REFS in src:", refs.size);
console.log("MISSING on disk:", missingDisk.length);
missingDisk.forEach((p) => console.log("  disk:", p));
console.log("NOT IN GIT (broken in prod after deploy):", missingGit.length);
missingGit.forEach((p) => console.log("  git:", p));

const failed = missingDisk.length + missingGit.length;
if (failed > 0) {
  console.error("\nFix: commit files under public/images or change the path in src.");
  process.exit(1);
}

console.log("\nOK — todas las referencias existen y están en git.");
