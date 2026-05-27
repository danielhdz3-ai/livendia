/** Texto plano seguro (sin HTML); recorta longitud. */
export function toPlainText(raw: string, maxLen: number): string {
  const s = raw
    .replace(/<[^>]*>/g, "")
    .replace(/\u0000/g, "")
    .trim();
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}
