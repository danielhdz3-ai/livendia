# Informe — Unicidad y arquitectura SEO de `/administracion-alquiler/[…]`

**Tipo:** auditoría + correcciones de jerarquía/enlaces (sin nuevas landings de barrio).  
**Fecha:** julio 2026.  
**Alcance:** 4 páginas live — Les Corts, Gràcia, L'Hospitalet, Cornellà.  
**Referencia de calidad:** `src/lib/administracion-alquiler-local-cities.ts` (ciudad Barcelona) + `INFORME_UNICIDAD_CONTENIDO_CLUSTERS.md`.

---

## Tabla resumen ejecutiva

| # | Punto | Veredicto | Acción |
|---|---|---|---|
| 1 | Unicidad de contenido | **Insuficiente para escalar** — ~38 % texto único renderizado; ~62 % boilerplate compartido entre las 4 páginas | Informe detallado + plan de enriquecimiento (punto 5). **No crear más barrios** hasta Fase enriquecimiento |
| 2 | Jerarquía URL + canonical | **Corregido** — madre = `/servicios/administracion-alquiler-local/barcelona`; barrio/municipio canonical propio; breadcrumbs + enlaces bidireccionales | Implementado en componentes |
| 3 | Consistencia estructura URL | **Documentado, sin 301** — dos patrones intencionados (barrio ⊂ ciudad vs municipio AMB) | Ver decisión abajo |
| 4 | Sitemap | **OK** — 4 URLs en `sitemap.ts` vía `ADMINISTRACION_ALQUILER_METRO_LANDINGS` | Sin cambios necesarios |
| 5 | Plan enriquecimiento | **Propuesto** — 8 campos locales por zona | Solo documentación; pendiente de implementación |

---

## 1. Auditoría de unicidad de contenido

### Metodología

Script: `scripts/audit-metro-landings-uniqueness.mjs` (capa de datos + bloques estáticos del componente).  
Comparación manual de bloques renderizados en `administracion-alquiler-metro-seo-landing.tsx`.

Se distinguen dos métricas:

1. **Capa de config** (`administracion-alquiler-metro-landings.ts`): textos editables por zona.
2. **Página renderizada**: config + plantillas hardcodeadas (6 beneficios, 4 pasos “Cómo funciona”, workflow gestor, normativa, FAQ común, exclusiones, CTAs de confianza).

### Resultado cuantitativo (4 páginas)

| Página | Palabras config (únicas) | Boilerplate compartido estimado | **% único renderizado** | Similitud Jaccard config vs otras |
|---|---|---|---|---|
| Les Corts | ~644 | ~850 | **~38 %** | 0,15–0,17 |
| Gràcia | ~486 | ~850 | **~36 %** | 0,14–0,17 |
| L'Hospitalet | ~491 | ~850 | **~37 %** | 0,16–0,17 |
| Cornellà | ~439 | ~850 | **~34 %** | 0,14–0,16 |

**Conclusión:** la estimación del ~80–85 % de texto idéntico **entre páginas** es correcta si se mira la **estructura visible** (mismos 6 bloques de beneficios, mismos títulos de “Cómo funciona”, mismas 3 FAQ comunes, mismo bloque normativo Barcelona, mismo workflow de gestor). Solo cambian 2–3 párrafos por zona + listado de barrios + testimonios + 2 FAQ locales.

### Bloques compartidos vs únicos (renderizado)

| Bloque | Compartido entre las 4 | Único por zona |
|---|---|---|
| Hero (H1, subtitle, heroLead) | Bullets fijos (3 líneas), precio 49 € | Sí — lead y titular |
| 6 beneficios | **5/6 descripciones idénticas** (solo el 1.º inserta `zoneLabel`) | Título bloque + whyIntro |
| EEAT local | — | Sí — eeatHeading + eeatBlock |
| Servicios incluidos | Estructura igual | Sí — serviceGrid / serviceBullets |
| Barrios cubiertos | — | Sí — listado + intro |
| Cómo funciona (4 pasos) | **Títulos 100 % iguales**; pasos 2–3 descripción idéntica | Pasos 1 y 4 insertan zona; howIntro |
| Testimonios | Componente compartido | Sí — quotes y barrios |
| Workflow gestor (`ServiceGestorPlatformSection`) | ~70 % plantilla | Intro pasos con `zoneLabel` |
| Oficina Les Corts | ~90 % igual | Mención de `zoneLabel` |
| Normativa (`AlquilerRegulatoryLocalSection`) | **100 % igual** (slug `barcelona` en las 4) | Solo sustituye nombre en H2 |
| FAQ | **3 preguntas comunes idénticas** (`METRO_ADMINISTRACION_FAQ`) | 2 preguntas locales |
| Exclusiones / trust bars | 100 % iguales | — |

### Campos de dato: real vs genérico

| Campo | Les Corts | Gràcia | L'Hospitalet | Cornellà | Estándar ciudad (Barcelona local) |
|---|---|---|---|---|---|
| Precio medio alquiler | ⚠️ Parcial — “>1.800 €/mes Pedralbes” **sin fuente ni fecha** | ❌ Genérico | ❌ Genérico | ❌ Genérico | ✅ Idealista abr 2026, 22 €/m² |
| Perfil inquilino | ✅ Familias, Clínic, expatriados | ✅ LAU + temporada, nómadas | ⚠️ Implícito (bloques antiguos) | ❌ Genérico | Parcial (gran tenedor, Sant Martí) |
| Tipología vivienda predominante | ⚠️ Mención Pedralbes vs Maternitat | ✅ Pisos compartidos / temporada | ⚠️ Bloques con ascensor antiguo | ❌ | No desglosado por barrio |
| Normativa específica | ❌ Bloque **ciudad** compartido | ❌ Igual | ❌ Igual | ❌ Igual | ✅ MIVAU verificado 25/07/2026 |
| Barrios reales verificables | ✅ | ✅ | ✅ | ✅ | Lista genérica ciudad |
| Testimonios con barrio | ✅ | ✅ | ✅ | ✅ | ✅ |
| FAQ con dato verificable | ⚠️ IRAV sin cifra | ⚠️ Temporada sin referencia legal concreta | ⚠️ | ⚠️ | ✅ Precio + zona tensionada con fuente |
| Casos / referencias mercado | ❌ | ❌ | ❌ | ❌ | Idealista + MIVAU |

**Veredicto unicidad:** las landings metro están en **“parcialmente único (delgado)”**, análogo al clúster #7–#9 del informe de clusters `-local`. **No cumplen** el estándar Valencia/Barcelona ciudad. Escalar barrios sin enriquecer repetiría el error de contenido fino a escala.

---

## 2. Jerarquía de URLs y canonical

### Decisión de arquitectura

| Nivel | URL | Rol | Canonical |
|---|---|---|---|
| **Madre ciudad** | `/servicios/administracion-alquiler-local/barcelona` | Hub Barcelona — normativa, precio medio con fuente, FAQ ciudad, checkout | Self |
| **Barrio** | `/administracion-alquiler/barcelona/{barrio}` | Intención hiperlocal (Les Corts, Gràcia) | Self |
| **Municipio AMB** | `/administracion-alquiler/{municipio}` | Intención municipal (L'Hospitalet, Cornellà) | Self |

**No hay conflicto de canonical:** cada URL apunta a sí misma (`generateMetadata` en `[[...segments]]/page.tsx` y en `administracion-alquiler-local/[slug]/page.tsx`). Son URLs distintas con intención distinta (ciudad vs barrio/municipio); no deben canonicalizarse entre sí.

**Keyword overlap Barcelona:** esperado y gestionable si:
- La madre cubre “administración alquiler Barcelona” (precio, normativa, checkout).
- Las hijas cubren “administración alquiler Les Corts / Gràcia…” con contenido **sustancialmente más único** del actual.
- Enlaces internos claros madre ↔ hijas (implementado).

### Correcciones aplicadas

- **Breadcrumb** en landings metro: Índice ciudad → Madre Barcelona → Zona.
- **Enlace ascendente** en sección oficina con ancla `← Administración de alquiler en Barcelona (ciudad)`.
- **Enlaces descendentes** en madre Barcelona: nuevo bloque `AdministracionAlquilerMetroHubLinks` (barrios + municipios AMB).
- Campos `parentCityHubPath` / `parentCityHubLabel` en config metro.

Archivos: `administracion-alquiler-metro-seo-landing.tsx`, `administracion-alquiler-local-seo-landing.tsx`, `administracion-alquiler-barcelona-metro.ts`.

---

## 3. Consistencia de estructura URL

### Decisión (sin migración 301)

| Tipo de zona | Patrón URL | Ejemplo | Motivo |
|---|---|---|---|
| Distrito/barrio **dentro** de Barcelona | `/administracion-alquiler/barcelona/{barrio}` | `/administracion-alquiler/barcelona/les-corts` | El barrio no es municipio; la ciudad padre es Barcelona |
| Municipio **independiente** del AMB | `/administracion-alquiler/{municipio}` | `/administracion-alquiler/l-hospitalet` | L'Hospitalet ≠ barrio de Barcelona; forzar `/barcelona/l-hospitalet` sería incorrecto semánticamente |

**No se migra L'Hospitalet** a `/administracion-alquiler/barcelona/l-hospitalet` — sería un error geográfico y peor para SEO local.

**Próximos municipios** (Cornellà ✅, Sant Cugat, Badalona…): mismo patrón raíz `/administracion-alquiler/{slug-municipio}`.

**Próximos barrios Barcelona** (Eixample, Sants…): `/administracion-alquiler/barcelona/{slug-barrio}`.

Registro central: `src/lib/administracion-alquiler-barcelona-metro.ts`.

---

## 4. Sitemap

**Confirmado:** `src/app/sitemap.ts` líneas ~324–329 genera dinámicamente:

```typescript
ADMINISTRACION_ALQUILER_METRO_LANDINGS.map((l) => ({
  url: `${base}${l.path}`,
  lastModified: localDate,
  changeFrequency: "weekly",
  priority: 0.87,
}))
```

Las 4 URLs actuales están incluidas. Nuevas landings se añaden automáticamente al array en `administracion-alquiler-metro-landings.ts`.

---

## 5. Plan de enriquecimiento (propuesta — no implementado)

Objetivo: **≥55–60 % texto único renderizado** y paridad con estándar Barcelona ciudad en campos verificables.

### Campos a añadir por barrio/municipio en `AdministracionAlquilerMetroLanding`

| Campo propuesto | Tipo | Ejemplo Les Corts | Fuente obligatoria |
|---|---|---|---|
| `rentPricePerSqm` | string | "24–28 €/m² en Pedralbes; ~19 €/m² en Maternitat" | Idealista / Fotocasa + trimestre |
| `rentPriceSourceNote` | string | "Idealista, Q2 2026" | — |
| `dominantHousingType` | string | "Pisos señoriales 80–120 m²; stock pre-80 en Maternitat" | Observación mercado + portal |
| `tenantProfile` | string[] | familias, personal Clínic, expatriados | — |
| `localRegulatoryNote` | string | Matiz IRAV / gran tenedor si aplica al barrio | MIVAU + normativa autonómica |
| `marketContext` | string | Rotación, temporada encubierta, obra menor comunal | 80–120 palabras únicas |
| `operationalCases` | string[] | 2–3 situaciones reales (no testimonio) | Interno Livendia |
| `nearbyLandmarks` | string[] | Camp Nou, Zona Universitària, Fira | Verificable |

### Cambios estructurales recomendados (post-enriquecimiento)

1. **Mover normativa** a snippet local cuando el municipio/barrio tenga matiz (p. ej. solo referencia ciudad + `localRegulatoryNote` de 2–3 frases únicas).
2. **Variabilizar plantillas** del componente: no 6 beneficios idénticos; 3 fijos + 3 generados desde config por zona.
3. **FAQ comunes**: reducir a 1 genérica; el resto local con dato (precio barrio, plazo Incasòl, caso ascensor/comunidad).
4. **Umbral de publicación**: no publicar barrio nuevo hasta ≥400 palabras únicas en config + precio con fuente.

### Orden sugerido de redacción

1. Les Corts (oficina propia — máximo EEAT).  
2. Gràcia (mayor heterogeneidad LAU/temporada).  
3. L'Hospitalet (mayor volumen de parque de alquiler).  
4. Sant Cugat / Badalona (nuevos municipios, solo tras validar plantilla enriquecida).

---

## Fuera de alcance (cumplido)

- No se ha creado ninguna landing de barrio nueva.
- No se ha modificado checkout, precios ni flujos Stripe.
- El plan de enriquecimiento (punto 5) queda pendiente de aprobación antes de implementar.

---

## Archivos tocados en esta auditoría

| Archivo | Cambio |
|---|---|
| `src/lib/administracion-alquiler-barcelona-metro.ts` | **Nuevo** — registro URL + hub ciudad |
| `src/lib/administracion-alquiler-metro-landings.ts` | Documentación jerarquía + `parentCityHub*` |
| `src/components/administracion-alquiler-metro-seo-landing.tsx` | Breadcrumb + enlace madre |
| `src/components/administracion-alquiler-metro-hub-links.tsx` | **Nuevo** — enlaces descendientes desde Barcelona |
| `src/components/administracion-alquiler-local-seo-landing.tsx` | Bloque metro hub en Barcelona |
| `scripts/audit-metro-landings-uniqueness.mjs` | **Nuevo** — script de auditoría |
| `INFORME_UNICIDAD_ADMINISTRACION_ALQUILER_METRO.md` | **Este informe** |
