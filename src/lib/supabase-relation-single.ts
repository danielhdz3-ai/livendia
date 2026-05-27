/** PostgREST devuelve a veces objeto o array de 1 elemento en relaciones embebidas. */
export type SingleProfileSnippet = {
  full_name?: string | null;
  email?: string | null;
};

export function asSingleProfile(embed: unknown): SingleProfileSnippet | null {
  if (embed == null) return null;
  if (Array.isArray(embed)) {
    const first = embed[0];
    if (first && typeof first === "object") return first as SingleProfileSnippet;
    return null;
  }
  if (typeof embed === "object") return embed as SingleProfileSnippet;
  return null;
}
