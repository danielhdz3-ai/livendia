import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const tracked = new Set(
  execSync("git ls-files public/images", { cwd: root, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((p) => p.replace(/^public/, "").replace(/\\/g, "/")),
);

const refs = new Set();
for (const rel of execSync('git ls-files "src/**/*.ts" "src/**/*.tsx"', { cwd: root, encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean)) {
  const src = fs.readFileSync(path.join(root, rel), "utf8");
  for (const m of src.matchAll(/"(\/images\/[^"]+)"/g)) refs.add(m[1]);
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
console.log("NOT IN GIT (broken in prod):", missingGit.length);
missingGit.forEach((p) => console.log("  git:", p));
