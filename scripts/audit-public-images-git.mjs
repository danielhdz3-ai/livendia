/**
 * Falla si el código referencia /images/... que no existen en disco.
 * En local (con git): también exige que el asset esté en git — en Vercel no hay .git,
 * solo se comprueba que el fichero venga en el deployment.
 *
 * Uso: node scripts/audit-public-images-git.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");

function isGitAvailable() {
  try {
    execSync("git rev-parse --is-inside-work-tree", { cwd: root, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

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

function walkSourceFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkSourceFiles(full, acc);
    else if (/\.(tsx?|mdx)$/i.test(ent.name)) acc.push(full);
  }
  return acc;
}

function walkPublicImages(dir, prefix = "/images", acc = new Set()) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkPublicImages(full, `${prefix}/${ent.name}`, acc);
    else acc.add(`${prefix}/${ent.name}`.replace(/\\/g, "/"));
  }
  return acc;
}

const useGit = isGitAvailable();
const isVercel = process.env.VERCEL === "1";

let tracked;
if (useGit) {
  tracked = new Set(
    execSync("git ls-files public/images", { cwd: root, encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean)
      .map(gitPathToPublicWebPath),
  );
} else {
  tracked = walkPublicImages(path.join(root, "public", "images"));
}

const refs = new Set();
const sourceFiles = useGit
  ? execSync('git ls-files "src/**/*.ts" "src/**/*.tsx" "src/**/*.mdx"', { cwd: root, encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((rel) => path.join(root, rel))
  : walkSourceFiles(path.join(root, "src"));

for (const file of sourceFiles) {
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(/"(\/images\/[^"]+\.(?:jpg|jpeg|png|webp|gif|svg))"/gi)) {
    refs.add(m[1]);
  }
}

const missingDisk = [];
const missingGit = [];
for (const ref of [...refs].sort()) {
  const fp = path.join(root, "public", ref.slice(1));
  if (!fs.existsSync(fp)) missingDisk.push(ref);
  else if (useGit && !isVercel && !tracked.has(ref)) missingGit.push(ref);
}

console.log("IMAGE REFS in src:", refs.size);
console.log("MISSING on disk:", missingDisk.length);
missingDisk.forEach((p) => console.log("  disk:", p));
if (useGit && !isVercel) {
  console.log("NOT IN GIT (broken in prod after deploy):", missingGit.length);
  missingGit.forEach((p) => console.log("  git:", p));
} else {
  console.log("Git audit:", useGit ? "skipped on Vercel" : "skipped (no git repo in build env)");
}

const failed = missingDisk.length + (useGit && !isVercel ? missingGit.length : 0);
if (failed > 0) {
  console.error("\nFix: commit files under public/images or change the path in src.");
  process.exit(1);
}

console.log("\nOK — todas las referencias existen" + (useGit && !isVercel ? " y están en git" : " en el deployment") + ".");
