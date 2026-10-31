import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "src", "lib");

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(ent.name)) out.push(p);
  }
  return out;
}

const titles = [];
for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, "utf8");
  const re = /metaTitle:\s*(?:`([^`$]+(?:\$\{[^}]+\}[^`]*)*)`|"([^"]+)")/g;
  let m;
  while ((m = re.exec(text))) {
    titles.push({ title: (m[1] ?? m[2]).trim(), file: path.relative(process.cwd(), file) });
  }
}

const norm = (t) => t.replace(/\$\{[^}]+\}/g, "…").replace(/\s+/g, " ").trim();
const byNorm = new Map();
for (const x of titles) {
  const k = norm(x.title);
  if (!byNorm.has(k)) byNorm.set(k, []);
  byNorm.get(k).push(x);
}

const dups = [...byNorm.entries()].filter(([, xs]) => xs.length > 1);
console.log("metaTitle entries:", titles.length);
console.log("duplicate groups (normalized):", dups.length);
for (const [k, xs] of dups.slice(0, 30)) {
  console.log("\n—", k);
  for (const x of xs) console.log("  ", x.file);
}
