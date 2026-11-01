export function localSlugFromLandingPath(path: string): string | undefined {
  const parts = path.split("/").filter(Boolean);
  return parts.at(-1);
}

/** Mapea slug de landing local de servicio → slug de hub /gestoria cuando coincide. */
export function citySlugFromLocalLandingSlug(localSlug: string): string {
  if (localSlug.startsWith("barcelona-")) {
    if (localSlug === "barcelona-les-corts") return "les-corts";
    return "barcelona";
  }
  return localSlug;
}
