import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|mdx?)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

function stripEmbeddedLivendia(content, file) {
  if (file.endsWith(`${path.sep}layout.tsx`)) {
    return content
      .split("\n")
      .map((line) => {
        if (/\b(default|template):\s*/.test(line)) return line;
        if (/openGraph:|twitter:/.test(line) && line.includes("title:")) return line;
        return line.replace(/ \| Livendia/g, "");
      })
      .join("\n");
  }
  return content.replace(/ \| Livendia/g, "");
}

let updated = 0;
for (const file of walk("src")) {
  const orig = fs.readFileSync(file, "utf8");
  const next = stripEmbeddedLivendia(orig, file);
  if (next !== orig) {
    fs.writeFileSync(file, next);
    updated++;
    console.log("updated", file);
  }
}
console.log("files updated:", updated);
