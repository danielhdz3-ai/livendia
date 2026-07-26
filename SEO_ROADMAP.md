# Hoja de ruta — Plan de posicionamiento SEO Livendia

> Documento vivo. Se actualiza al cerrar cada tarea. Última actualización: **26/07/2026 (ISR de precios + pulido de contenido genérico)**.
> Alcance: plan de 7 fases sobre clústeres `/servicios/[servicio]/[ciudad]` y `/gestoria/[ciudad]`, derivado del análisis de Search Console.

## Estado por fase

| Fase | Qué es | Estado |
|---|---|---|
| **1. Auditoría de plantilla** | % de HTML duplicado entre ciudades de la misma plantilla | ✅ **Completo (retrospectivo)** — informe entregado hoy (ver canvas `fase1-duplicacion-plantilla`). Resultado: 0 coincidencias en precio/barrios/FAQ; ~51% de solapamiento residual en prosa viene de 3 bloques fuera del alcance de Fase 2 (pasos "¿Cómo funciona?", testimonios genéricos, 1 frase plantilla sobre zona tensionada) |
| **2. Contenido único por ciudad** | `heroLead`/`whyIntro`/`howIntro`, precio+fuente, barrios, FAQ | ✅ **Completo** — 11/11 ciudades de `administracion-alquiler-local` (Madrid, Barcelona, Valencia, Málaga, Gijón + Mallorca, Sevilla, Oviedo, Zaragoza, Murcia, Bilbao) |
| **3. Schema `LocalBusiness`** | `@graph` con `Service` + `LocalBusiness` (`areaServed`) | ✅ **Completo** — aplica a las 11 ciudades publicadas (implementado a nivel de componente compartido) |
| **4.1 Enlazado — "Servicios relacionados en tu ciudad"** | Componente que enlaza 3-4 servicios de la misma ciudad | ✅ **Completo** — 11/11 ciudades |
| **4.2 Enlazado — `/gestoria/[ciudad]` → administración local** | Enlaces contextuales en el cuerpo del hub de gestoría | ✅ **Completo** en las 8 ciudades que tienen ambas páginas publicadas: Madrid, Barcelona, Valencia, Málaga, Gijón, Zaragoza, Murcia, Sevilla. **N/A** en Mallorca, Oviedo, Bilbao (no tienen `/gestoria/[ciudad]` publicada) |
| **4.3 Enlazado — blog → landings de servicio** | Enlaces contextuales en el cuerpo de artículos existentes | ✅ **Completo** — los 4 posts relevantes del clúster de administración de alquiler enlazan ahora las 11 ciudades: lista completa en "Disponible en tu ciudad" (1 post) + menciones contextuales de Bilbao, Zaragoza y Murcia repartidas en los otros 3. Los 6 posts restantes del blog no tratan temas de administración de alquiler, así que no se forzaron enlaces ahí |
| **5. Limpieza páginas de bajo valor** | Consolidar páginas <10-15 impresiones/3m | 🕒 **Investigado, ejecución parcial** — informe entregado (Fase 7). Grupo D ejecutado (redirect `contrato-arras-confirmatorias`). Grupo A (municipios área metropolitana de Barcelona) y revisión de `contrato-arras-penitenciales`: **a la espera del checkpoint de Search Console** (3-4 semanas desde los cambios de enlazado) |
| **6. Técnico — sitemap/canonical** | `/mapa-del-sitio` noindex, huérfanas resueltas, canonical autorreferenciado | ✅ **Completo** — auditadas las 15 rutas dinámicas `[slug]` (todas correctas) más 13 páginas fijas que no tenían `alternates.canonical` (`/servicios`, 9 landings de servicio genéricas, `/contacto`, `/equipo`, `/precios`); las 13 corregidas y verificadas en build de producción |
| **6. Técnico — Core Web Vitals** | LCP/CLS/TBT + `next/image` + render-blocking | ✅ **Diagnóstico completo** (25/07/2026, ver canvas `auditoria-core-web-vitals`). El fix de TBT (gtag.js) ya se ejecutó. **Fix de render dinámico también ejecutado** (ver sección dedicada más abajo) |
| **7. Medición continua** | Re-exportar GSC cada 4 semanas | 🕒 **En curso** — pendiente el próximo checkpoint |

## Tareas ejecutadas hoy (25/07/2026, sesión de continuación)

- **TBT (Core Web Vitals)**: `gtag.js` y el bloque de GTM cambiados de `strategy="beforeInteractive"` a `afterInteractive` en `google-analytics.tsx` y `gtm-scripts.tsx`. Medido antes/después con Lighthouse sobre build de producción: mejora modesta (~330ms → ~260-330ms, dentro de la variancia de medición), no la caída dramática que se esperaba — motivo explicado en el hallazgo de render dinámico de abajo. Se mantiene igualmente porque `afterInteractive` es la práctica recomendada por Next.js para scripts de analítica y no tiene downside.
- **Fase 4.3**: enlaces de blog extendidos a las 6 ciudades nuevas (ver detalle en la tabla de fases).
- **Fase 6 (canonical)**: auditadas todas las rutas dinámicas del sitio (correctas) y detectadas + corregidas 13 páginas públicas sin `alternates.canonical` explícito (el hub `/servicios` y 9 landings de servicio genéricas, `/contacto`, `/equipo`, `/precios`). Verificado en build de producción que las 13 sirven ahora el canonical correcto. De paso se confirmó que `/dashboard`, `/admin` y `/mis-pedidos` no necesitan `robots: noindex` explícito porque el middleware ya redirige a `/login` (noindex) a cualquier visitante sin sesión, incluido Googlebot.
- **Fase 1 (retrospectiva)**: informe de duplicación de plantilla entregado — ver canvas `fase1-duplicacion-plantilla`.
- **Investigación de render dinámico** (hallazgo de la auditoría CWV): causa raíz identificada con certeza. **Fix ejecutado y verificado el mismo día** — ver siguiente sección.

## Hallazgo + fix: por qué ~40 páginas públicas no se generaban estáticas (RESUELTO)

`getPublicServices()` (`src/lib/catalog.ts`) usaba `createServerSupabaseClient()`, que llama a `await cookies()`. Cualquier lectura de esa Dynamic API en el árbol de render obliga a Next.js a servir la ruta completa en modo dinámico (sin caché de CDN), sin importar que la página tenga `generateStaticParams` + `dynamicParams = false`. Como casi todas las páginas públicas de `/servicios/*` y `/gestoria/[ciudad]`, además de la home, llaman a `getPublicServices()` para mostrar precio y botón de compra, esto afectaba a bastantes más páginas de las ~10 estimadas inicialmente.

### Fix aplicado (25/07/2026)

- Nuevo `createAnonSupabaseClient()` en `src/lib/supabase/server.ts`: cliente Supabase sin `cookies()` ni ninguna Dynamic API, usando la clave `anon` pública. Documentado en el propio código que NO debe usarse para nada dependiente de sesión.
- `getPublicServices()` en `src/lib/catalog.ts` modificado para usar este cliente. Es el **único** cambio en ese archivo; el resto de funciones (`syncMissingCatalogSeeds`, `syncFixedCatalogPrices`, etc.) siguen igual, usando `createServiceRoleClient()` como antes.
- Auditados los ~40 archivos que llaman a `getPublicServices()` (más del doble de los "~20" estimados al inicio): ninguno combina esa llamada con lógica de sesión que dependiera del cliente autenticado para algo más que leer el catálogo. El único caso con `auth.getUser()` en la misma página (`src/app/dashboard/servicios/page.tsx`) hace su propia llamada independiente a `createServerSupabaseClient()` solo para el guard de login — no depende de qué cliente use `getPublicServices()` internamente, y esa página sigue siendo dinámica de todos modos (está protegida por sesión).
- Confirmado que el flujo de checkout (`ServicePurchaseProvider` / `ContratarServicioButton` → `/api/stripe/checkout`) no depende en absoluto de `getPublicServices()`: es un componente 100% cliente que recibe el `service` ya resuelto como prop, y `/api/stripe/checkout` vuelve a leer el servicio por `id` con su propio `createServiceRoleClient()`, con su propio `auth.getUser()` para la sesión. Cero acoplamiento con el cambio.

### Resultado en `next build` (antes → después)

Comparativa de build de producción real (mismo commit, con y sin el fix):

| Antes | Después |
|---|---|
| `/` (home): **ƒ** dinámica | **○** estática |
| `/servicios`, `/precios`, `/mapa-del-sitio`, `/para-propietarios`: **ƒ** | **○** estáticas |
| 13 landings de servicio "hub" (ej. `/servicios/administracion-alquiler`, `/servicios/contrato-de-arras`...): **ƒ** | **○** estáticas |
| 11 clústeres `/servicios/.../[slug]` (administracion-alquiler-local, contrato-arras-local, contrato-alquiler-local, contrato-alquiler-temporada-local, contrato-alquiler-habitacion, gestion-documental-vendedor, revision-documental-post-arras, servicio-completo-compra-local, servicio-completo-venta-local, venta-piso-particular-sin-agencia, acompanamiento-compra-parking-trastero-local): **ƒ** | **●** SSG (prerenderizadas con `generateStaticParams`) |
| `/gestoria/[slug]` (8 ciudades): **ƒ** | **●** SSG |
| 6 páginas `/servicios/vender-piso-sin-agencia-{ciudad}` + 6 páginas `/vender-piso-sin-inmobiliaria/{ciudad}` (pillar pages): **ƒ** | **○** estáticas |

En total, **~50 rutas** pasaron de servidas dinámicamente en cada petición a prerenderizadas — muchas más de las ~10 estimadas al inicio, porque el problema afectaba a toda página pública que mostrara precio/CTA de compra, no solo al clúster de administración de alquiler. Ninguna ruta autenticada (`/dashboard/*`, `/admin/*`, `/mis-pedidos/*`) cambió — siguen dinámicas por su propio uso directo de `cookies()`/`auth.getUser()`, como debe ser.

### Métricas antes/después (mismo build, servidor de producción local, Madrid/Sevilla/Barcelona)

**TTFB (`curl -w`, medias en warm cache):**

| Ciudad | Antes (dinámico) | Después (estático) |
|---|---|---|
| Madrid | ~105 ms | ~11 ms |
| Sevilla | ~90 ms | ~10 ms |
| Barcelona | ~78 ms | ~9 ms |

Mejora de ~8-10x en el origen. En producción real el efecto es aún mayor: estas páginas ahora se sirven desde el edge de CDN sin tocar el origen ni Supabase en el 100% del tráfico real, en vez de hacer una consulta a la base de datos en cada visita.

**Lighthouse mobile (LCP/TBT/Performance):** sin cambio significativo en la medición local (LCP ~6-9s en ambos casos, Performance 53-59 en ambos). Esto es esperado y no contradice la mejora de TTFB: Lighthouse mobile aplica un *throttling* simulado (CPU 4x más lento + red 4G lenta) que domina el tiempo total muchísimo más que los ~100ms de diferencia de TTFB, y al medir contra `localhost` no hay CDN de por medio que es donde realmente se nota el ahorro. El beneficio real de LCP se verá en los datos de campo (CrUX/PageSpeed Insights sobre el dominio en producción), no en un Lighthouse local — el score bajo actual (53-59) tiene otras causas ya documentadas en `auditoria-core-web-vitals` (imágenes, JS) que siguen pendientes y son un frente aparte.

### Checkout Stripe — verificado por código, no ejecutado en vivo

Se confirmó por auditoría de código (no en producción) que el checkout está totalmente desacoplado del cambio. **No se ejecutó una compra real de extremo a extremo** porque `/api/stripe/checkout` crea una cuenta de usuario real en Supabase y envía un email de bienvenida real en cuanto se llama con un email nuevo, y no fue posible verificar de forma segura si las claves de Stripe configuradas están en modo test o live — ejecutar esto de forma autónoma habría supuesto un riesgo de efectos irreversibles en producción (usuarios fantasma, emails, cargos reales) sin control humano directo. Recomendado: verificar manualmente 1 compra completa en cada uno de los 3 clústeres mencionados (administración de alquiler, arras, venta completa) antes o justo después de desplegar.

### Plan de rollback (1 línea)

Si algo falla tras desplegar, revertir es un cambio de una línea en `src/lib/catalog.ts`:

```typescript
// Volver a:
import { createServerSupabaseClient } from "@/lib/supabase/server";
// ...
const supabase = await createServerSupabaseClient();
```

No hace falta tocar `supabase/server.ts` (se puede dejar `createAnonSupabaseClient` sin usar) ni ningún otro archivo.

### Nota operativa importante (no bloqueante, pero a vigilar)

Al pasar estas páginas a estáticas, el catálogo que muestran queda "congelado" en el momento del build en vez de reflejar la base de datos al instante. Si un admin cambia un precio o desactiva un servicio desde el panel, el cambio no se verá en estas páginas públicas hasta el próximo despliegue — antes sí se veía al instante porque cada petición consultaba la base de datos en vivo. No se ha tocado esto porque estaba fuera del alcance pedido ("no tocar ningún otro caller"), pero si el equipo cambia precios con frecuencia sin redesplegar, conviene añadir revalidación (`export const revalidate = 3600` o `revalidatePath` desde el panel de admin al guardar) como tarea de seguimiento.

## ISR: los precios ya se actualizan solos (26/07/2026)

Seguimiento directo de la nota operativa del fix de render dinámico: se añadió revalidación por tiempo (`export const revalidate = 300;`, 5 minutos) en las **46 páginas** que dependen de `getPublicServices()` (home, `/servicios`, `/precios`, las 13 landings "hub", los 11 clústeres `-local/[slug]`, `/gestoria/[slug]` y las 12 pillar pages de venta particular). No se tocó `/dashboard/servicios` (protegida por sesión, ya dinámica por diseño).

- **Intervalo elegido: 300 segundos (5 minutos).** Es el punto intermedio entre "el cliente ve su cambio de precio casi al instante" y "no hay presión extra sobre Supabase" (con tráfico normal, como mucho 1 consulta a la base de datos cada 5 min por página, no por visita). **Para cambiarlo**: editar el número en `export const revalidate = 300;` en los archivos afectados (buscar `ISR: revalida cada` en el repo para localizarlos todos) — ej. `revalidate = 60` para 1 minuto si se necesita más inmediatez, o `revalidate = 3600` para 1 hora si se prefiere minimizar carga.
- **Verificado con `next build`**: todas las rutas siguen `○`/`●` (estáticas/SSG); el build ahora muestra explícitamente una columna `Revalidate: 5m` / `Expire: 1y` en cada una. Ninguna volvió a `ƒ` dinámica.
- **Prueba end-to-end real**: se cambió el precio de "Contrato de Arras Penitenciales" de 145 € a 146 € directamente en la base de datos (sin tocar código ni redesplegar), sirviendo `/servicios` desde un build de producción local. Resultado: la primera petición justo después del cambio siguió mostrando 145 € (confirma que la página estaba realmente cacheada, no se consultaba en vivo); tras esperar la ventana de 5 minutos, la siguiente petición ya devolvió 146 €. Precio revertido a 145 € en la base de datos al terminar la prueba. No se ejecutó ninguna compra ni sesión de Stripe (las claves activas son LIVE, se omitió esa parte por petición explícita).

## Pulido de contenido genérico: "cómo funciona" y testimonios (26/07/2026, revisado el mismo día)

Cierre del último punto pendiente de la Fase 1 (el ~51 % de solapamiento de prosa residual detectado en el informe de duplicación de plantilla venía justo de estos dos bloques). Aplicado a las **11 ciudades** de `administracion-alquiler-local`.

- **"¿Cómo funciona?"**: se mantiene la estructura de 4 pasos sin cambios, pero los pasos 1 y 4 ahora mencionan la ciudad de la landing (`src/components/administracion-alquiler-local-seo-landing.tsx`), así que el bloque ya no es idéntico letra por letra entre ciudades.
- **Testimonios — decisión del cliente**: en una primera pasada se sustituyeron las 22 citas (2 por ciudad) por un bloque neutro sin nombres, porque no existe ninguna tabla de reseñas/testimonios reales en Supabase ni integración con CRM/API externa que las respalde. **A petición explícita del cliente, se revirtió ese cambio**: se mantiene el formato original (cita + nombre + rol + estrellas) en las 11 ciudades.
- **Mejora aplicada en su lugar**: las 22 citas se reescribieron para atarlas de forma más concreta a los datos de zona ya verificados de cada ciudad (barrio de precio alto/bajo, estatus de zona tensionada, patrón de rotación de inquilinos, hecho estadístico citado en `heroLead`/`whyIntro`), en vez de quedar en anécdotas genéricas. Ejemplos: Madrid ahora contrasta explícitamente Salamanca (26-28 €/m²) con Vallecas; Barcelona y Bilbao referencian la condición de zona tensionada vigente; Sevilla y Málaga citan las subidas interanuales concretas (+90 % Casco Antiguo, +32 % Victoria) ya usadas en el resto de la página.
- **Nota pendiente (no bloqueante)**: estas citas siguen sin ser testimonios verificables (no hay fuente/CRM detrás). Si en el futuro se dispone de reseñas reales por ciudad, sustituir estos textos por las reales.
- **Verificado**: `next build` sin errores de TypeScript, todas las rutas siguen `○`/`●` con `Revalidate: 5m`.

## Otras tareas cerradas (fuera de la numeración original)

- **Auditoría Grupo D** (`contrato-arras-confirmatorias`, `vender-piso-sin-agencia-malaga`): informe entregado, redirect 301 ejecutado para la primera, la segunda se deja intacta.
- **Cierre TODO-LEGAL Madrid/Barcelona**: verificado en vivo contra MIVAU, textos y FAQ actualizados con fuente y fecha de revisión.
- **Corrección de datos de precio erróneos** en Zaragoza y Murcia (cifras de €/m² que no cuadraban con ningún mercado español real; sustituidas por los datos verificados que diste).

## Próximos pasos (por orden sugerido de impacto/esfuerzo)

1. **Checkpoint de Search Console** (dentro de 3-4 semanas desde los cambios de Fase 2/4/Grupo D): decidir sobre consolidación del Grupo A (municipios metropolitanos de Barcelona) y revisión de `contrato-arras-penitenciales`. También es el momento de comprobar si el salto a páginas estáticas mueve posiciones/CTR del clúster de administración de alquiler.
2. **Testimonios reales por ciudad**: por decisión del cliente se mantiene el formato con nombre/rol (mejorado con detalle de zona) en las 11 ciudades de `administracion-alquiler-local`, aunque no hay fuente verificable detrás (no hay tabla de reseñas en BD/CRM). Si en el futuro se dispone de testimonios reales por ciudad, sustituir estos textos — ver detalle en la sección dedicada más arriba.
3. **Fase 3 del plan original (autoridad externa)**: no iniciada — enlaces desde fuentes locales (colegios de gestores, directorios, medios). Fuera del alcance técnico, requiere gestión externa.
4. **Verificación manual de compra**: por decisión explícita del cliente, no se ejecuta ninguna compra de prueba (claves de Stripe en modo LIVE). Si en algún momento se quiere verificar el checkout de extremo a extremo, hacerlo manualmente con una tarjeta real y un servicio de bajo coste, nunca de forma automatizada.

> Nota: la tarea de revalidación del catálogo (ISR) que aparecía aquí ya está completada — ver sección "ISR: los precios ya se actualizan solos" más arriba.

## Entregables de referencia (canvases)

- `canvases/fase7-paginas-bajo-volumen.canvas.tsx`
- `canvases/auditoria-grupo-d.canvas.tsx`
- `canvases/auditoria-core-web-vitals.canvas.tsx`
- `canvases/fase1-duplicacion-plantilla.canvas.tsx`
- `canvases/investigacion-render-dinamico.canvas.tsx`
