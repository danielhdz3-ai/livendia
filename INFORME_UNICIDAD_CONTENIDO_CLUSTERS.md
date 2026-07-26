# Informe — Alcance de "contenido único" en los clústeres `-local/[slug]`

**Tipo:** informe de solo lectura. No se ha modificado ningún archivo de contenido como parte de este documento.
**Fecha:** julio 2026.
**Referencia de comparación:** `src/lib/administracion-alquiler-local-cities.ts` (11 ciudades), que cumple el estándar completo: precio medio de alquiler citado con fuente y fecha en el propio texto (ej. "Idealista, Q2 2026"), estatus de zona tensionada verificado contra el registro oficial del MIVAU, barrios reales con nombres verificables, y 150–280 palabras únicas por ciudad en `heroLead`/`whyIntro`/`howIntro` que no se repiten literalmente entre ciudades.

## Nota sobre los datos de priorización

No se dispone en esta sesión de un export nuevo de Search Console (el último análisis de impresiones/posición data de la tabla inicial del proyecto, hace ya varias semanas, y desde entonces se ha desplegado el fix de renderizado dinámico + ISR, que puede haber movido posiciones). La priorización de abajo combina:

1. **Impresiones ya documentadas** del último export real (citadas con su cifra, para no inventar datos nuevos).
2. **Tamaño del clúster** (nº de páginas/ciudades en juego — a más páginas, más impacto potencial de una mejora de contenido).
3. **Nivel de unicidad actual** (cuanto más plantillado, más margen de mejora relativa).

**Recomendación:** antes de ejecutar la Fase 2 en el siguiente clúster, pedir un export fresco de Search Console (Coverage + Performance, últimos 3 meses) para confirmar que el orden de abajo sigue vigente tras el paso a páginas estáticas/ISR.

## Resultado por clúster

Ninguno de los 13 clústeres restantes alcanza todavía el nivel de `administracion-alquiler-local`. Ordenados de **menor a mayor** unicidad actual:

| # | Clúster (`src/lib/*.ts`) | Ciudades/slugs | Datos de mercado con fuente | Hallazgo | Veredicto |
|---|---|---|---|---|---|
| 1 | `gestion-documental-vendedor-local-cities.ts` | 13 | No | Solo cambia nombre en H1/meta/CTA; sin `heroLead`/`whyIntro`/`howIntro` propios | Plantilla pura |
| 2 | `revision-documental-post-arras-local-cities.ts` | 9 | No | `heroH1` y `finalCtaLead` son plantilla con ciudad intercambiada | Plantilla pura |
| 3 | `venta-piso-particular-sin-agencia-local-cities.ts` | 5 | No | `heroH1` y `heroH2` son **copy-paste exacto** en las 5 ciudades | Plantilla pura |
| 4 | `contrato-alquiler-habitacion-local-cities.ts` | 10 | No | `heroH1` plantilla + `HERO_BULLETS_DEFAULT` compartido; sin trío hero propio | Plantilla pura |
| 5 | `vender-piso-sin-agencia-local-cities.ts` | 6 | No | `faqForCity()` plantillada; `metaDescription` casi idéntica en 5/6 (solo Barcelona tiene copy propio) | Plantilla pura (salvo Barcelona) |
| 6 | `acompanamiento-compra-parking-trastero-local-cities.ts` | 8 (Madrid + Barcelona + 6 barrios BCN) | No | Meta/H1 locales, pero sin trío hero de referencia; precio sin fuente citada | Casi plantilla |
| 7 | `contrato-alquiler-local-cities.ts` | 19 | No | Textos únicos pero muy cortos (~70 palabras el trío); `finalCtaLead` casi idéntico Madrid/Barcelona | Parcialmente único (delgado) |
| 8 | `contrato-alquiler-temporada-local-cities.ts` | 8 | No | Textos únicos; `finalCtaLead` casi plantilla entre pares de ciudades | Parcialmente único |
| 9 | `vender-piso-sin-inmobiliaria-local-cities.ts` | 1 (solo Barcelona) | Parcial | Menciona precio medio y portales, sin fuente+fecha; clúster incompleto (falta el resto de ciudades) | Parcialmente único |
| 10 | `servicio-completo-venta-local-cities.ts` | 8 | Parcial (2/8) | **Valladolid y Granada con `heroLead`/`whyIntro`/`agencyIntro` vacíos (`""`)** | Parcialmente único, con huecos que rellenar primero |
| 11 | `contrato-arras-local-cities.ts` | 10 | No | Barrios reales sí; sin €/m² ni fuente; `howIntro` corto (~95 palabras el trío) | Parcialmente único |
| 12 | `gestoria-inmobiliaria-local-cities.ts` | 8 | Parcial (1/8) | `heroLead`/`intro` únicos por ciudad, pero bloques de servicio/FAQ compartidos entre ciudades | Parcialmente único |
| 13 | `servicio-completo-compra-local-cities.ts` | 15 | Parcial (8/15 mencionan Idealista, sin cifra+fecha) | El más elaborado del grupo, pero `whyIntro` repite el mismo molde en varias ciudades | Parcialmente único (el mejor del lote) |

## Prioridad recomendada para la siguiente Fase 2 (con los datos disponibles)

1. **`servicio-completo-venta-local-cities.ts`** — ya tenía tráfico real documentado (Barcelona 179 impr., Málaga 150 impr. en el último export) y tiene el defecto más urgente y barato de arreglar: dos ciudades (Valladolid, Granada) con campos de texto completamente vacíos, lo que además es un riesgo de contenido pobre/duplicado de cara a Google, no solo una oportunidad de mejora.
2. **`vender-piso-sin-agencia-local-cities.ts`** — el clúster con más impresiones conocidas fuera de administración de alquiler (Barcelona: 562 impresiones en el último export), pero con contenido plantillado salvo en Barcelona. Alto volumen de demanda ya confirmado, poco esfuerzo de redacción por ciudad (solo 6 slugs).
3. **`servicio-completo-compra-local-cities.ts`** — 15 ciudades, ya es el más elaborado del lote (parte del trabajo de redacción está más avanzado que en el resto), y es el par natural de `servicio-completo-venta-local` en el embudo de compraventa.
4. Resto de clústeres — pendiente de confirmar con un export nuevo de Search Console antes de invertir en redacción, dado que varios (`gestion-documental-vendedor`, `revision-documental-post-arras`, `acompanamiento-compra-parking-trastero`) son de nicho y podrían tener poca demanda real.

## Fuera de alcance de este informe

No se ha tocado ningún archivo de contenido, precio, CTA ni flujo de pago. Este documento es solo diagnóstico para decidir el orden de la siguiente ronda de Fase 2.
