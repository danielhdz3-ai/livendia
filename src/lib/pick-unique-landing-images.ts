/** Selección determinista de N imágenes distintas del pool (por slug de landing). */

function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function pickUniqueLandingImages(
  seed: string,
  count: number,
  pool: readonly string[],
  exclude: readonly string[] = [],
): readonly string[] {
  const excludeSet = new Set(exclude);
  const candidates = pool.filter((p) => !excludeSet.has(p));
  if (candidates.length < count) {
    throw new Error(
      `pickUniqueLandingImages: pool insuficiente (${candidates.length} tras exclude, se piden ${count}) seed=${seed}`,
    );
  }

  const ranked = candidates
    .map((path) => ({ path, score: fnv1a(`${seed}:${path}`) }))
    .sort((a, b) => a.score - b.score || a.path.localeCompare(b.path));

  return ranked.slice(0, count).map((r) => r.path);
}
