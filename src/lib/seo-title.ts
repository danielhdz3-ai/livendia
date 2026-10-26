/**
 * El layout raiz aplica `title: { template: "%s | Livendia" }` a toda
 * metadata.title. Si el titulo de una pagina ya incluye "Livendia" en
 * cualquier parte (branding manual en el metaTitle de la landing), el
 * template lo duplica: "... Livendia ... | Livendia".
 *
 * Usar en generateMetadata/metadata cuando el mismo helper de
 * configuracion sirve ciudades/slugs con y sin "Livendia" ya incluido:
 * los que ya lo llevan se devuelven como titulo absoluto (sin tocar el
 * texto) para que el template no vuelva a anadirlo; el resto se deja
 * como string normal para que el template anada el sufijo una vez.
 */
export function dedupeBrandTitle(title: string): string | { absolute: string } {
  return /livendia/i.test(title) ? { absolute: title } : title;
}
