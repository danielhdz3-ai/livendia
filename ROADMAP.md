# Livendia — Análisis del proyecto y hoja de ruta

**Objetivo de producto:** que **livendia.com** sea un referente en **gestoría inmobiliaria digital** (claridad, cumplimiento, experiencia de cliente y operación interna impecable).

**Última revisión del repositorio:** el código incluye landing pública (Next.js + Tailwind), assets en `public/images/`, despliegue en Vercel y repo en GitHub. **No** están aún implementados: Supabase, autenticación, Stripe, paneles cliente/admin, emails ni dominio de producción propio.

---

## 1. Análisis honesto del estado actual

### Fortalezas

- Stack acertado para el objetivo: **Next.js (App Router)** + **TypeScript** + **Tailwind** encaja con SaaS, SEO y evolución a app completa.
- **Landing** alineada con mensaje de gestoría (servicios, equipo, confianza) y tono profesional.
- **CI/CD implícito:** GitHub + Vercel permiten iterar rápido con deploys en cada push.
- **Marca visual** definida (paleta azul / turquesa del megaprompt) aplicada en la home.

### Brechas críticas (lo que falta para ser “referente”)

| Área | Situación | Impacto |
|------|-----------|---------|
| **Identidad y dominio** | Proyecto en `*.vercel.app`; falta **livendia.com** + email profesional | Confianza y marca |
| **Datos y auth** | Sin base de datos ni login | No hay producto vendible “con panel” |
| **Pagos** | Sin Stripe | No hay conversión end-to-end |
| **Operación** | Sin flujo pedidos → documentos → estados | La gestoría no escala |
| **Legal y confianza** | Sin páginas legales completas (privacidad, cookies, condiciones) | Riesgo y desconfianza B2B |
| **Contenido / SEO** | Una sola URL rica; faltan `/servicios`, `/precios`, blog o guías | Menos autoridad que competidores |
| **Calidad** | Sin tests E2E ni monitorización | Riesgo al crecer |

La visión de “referente” no es solo diseño: es **fiabilidad del proceso** (qué pasa tras pagar), **comunicación clara** y **cumplimiento** (RGPD, documentación, trazabilidad).

---

## 2. Principios para guiar el roadmap

1. **Vender antes de automatizar todo:** el primer “happy path” completo (pago → cuenta → pedido → subida de docs) vale más que diez secciones de marketing.
2. **Un solo flujo perfecto** antes de ampliar: por ejemplo, *un* servicio one-shot (ej. contrato LAU) bien cerrado.
3. **Marca y dominio en paralelo temprano** para que comunicación y enlaces de Stripe/WhatsApp ya sean definitivos.
4. **Medir:** analytics + eventos clave (visitas servicio, inicio checkout, pago ok, doc subido).

---

## 3. Roadmap por fases

### Fase 0 — Cimientos de negocio y marca (1–2 semanas, en paralelo al código)

**Salida:** decisión de alcance inicial, mensajes finales y presencia profesional mínima.

- [ ] Definir **alcance MVP**: qué servicios se venden el día 1 (recomendación: 2–4 one-shot + texto “próximamente” en administración si aplica).
- [ ] Registrar y configurar **livendia.com** en Vercel (DNS) y decidir **email** (Google Workspace, etc.).
- [ ] Redactar o encargar **textos legales**: aviso legal, privacidad, cookies, condiciones del servicio (con abogado si procede).
- [ ] **WhatsApp** y teléfono definitivos en variables de entorno (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
- [ ] Crear **cuenta Stripe** (modo test primero): productos/precios alineados con el catálogo del megaprompt.

**Tu ingeniero (yo) empieza en Fase 1 en cuanto tengas:** dominio apuntando (o decisión de usar solo Vercel temporal), Stripe en test, y si es posible proyecto Supabase creado (aunque sea vacío).

---

### Fase 1 — Producto mínimo técnico (datos + auth + un pago real en test)

**Salida:** usuario puede registrarse/iniciar sesión, contratar **un** servicio por Stripe (test) y ver un **pedido** en un panel básico.

- [ ] **Supabase:** proyecto, tablas `profiles`, `services`, `orders` (mínimo viable), **RLS** estricta desde el día 1.
- [ ] **Auth:** login/registro, middleware Next.js protegiendo `/dashboard/*`.
- [ ] **Stripe Checkout:** `POST /api/stripe/checkout` (serviceId, URLs success/cancel).
- [ ] **Webhook Stripe:** crear/actualizar `orders`, idempotencia básica.
- [ ] **Dashboard cliente (v1):** listar pedido(s) y estado; sin chat aún si hace falta recortar.
- [ ] Variables en **Vercel** y `.env.local` documentadas (`NEXT_PUBLIC_SUPABASE_*`, `STRIPE_*`, `NEXT_PUBLIC_APP_URL`).

**Criterio de éxito:** demo grabable: “Compro en test → aparece pedido en panel → admin puede verlo en DB o en una lista mínima”.

---

### Fase 2 — Documentación y operación gestoría

**Salida:** cliente sube documentos; gestor ve y marca avance.

- [ ] **Supabase Storage** bucket `documents` + políticas RLS.
- [ ] UI upload (drag & drop) por pedido; tipos de documento (DNI, escrituras, etc.).
- [ ] **Panel admin:** listado de pedidos, detalle, cambio de estado, descarga/visualización de docs.
- [ ] Registro de actividad sencillo (`order_activities`) o log mínimo.

**Criterio de éxito:** un caso real en staging: pedido pago → docs subidos → estado cambiado a “en revisión”.

---

### Fase 3 — Comunicación y confianza

**Salida:** menos fricción y mejor percepción “referente”.

- [ ] **Resend + React Email:** bienvenida, confirmación de pedido, cambio de estado, doc recibido.
- [ ] **Mensajería** por pedido (tabla `messages`) o, en MVP reducido, solo email + notas internas.
- [ ] **Páginas públicas:** `/servicios`, `/precios`, `/contacto` con formulario que llegue por email o ticket interno.
- [ ] **SEO on-page:** metadatos, `sitemap`, `robots`, Open Graph por sección.

---

### Fase 4 — Catálogo completo y suscripciones

**Salida:** todos los servicios del megaprompt operativos; administración de alquiler como **recurring** en Stripe.

- [ ] Catálogo completo en DB + sincronización o mapeo **price_id** de Stripe.
- [ ] **Suscripción** mensual: webhooks `invoice.payment_succeeded`, cancelación.
- [ ] Panel adaptado (pedido único vs suscripción activa).

---

### Fase 5 — Excelencia y posicionamiento (“referente de sector”)

**Salida:** diferenciación por contenido, fiabilidad y producto.

- [ ] **Contenido:** blog/guías (LAU 2026, arras, FAQs que respondan búsquedas reales).
- [ ] **Realtime** (opcional): notificaciones en panel admin.
- [ ] **Tests E2E** (Playwright) en flujos críticos: checkout, webhook simulado, upload.
- [ ] **Observabilidad:** Sentry o similar; alertas de fallos de webhook o errores 5xx.
- [ ] **Accesibilidad y rendimiento** (Core Web Vitals) como checklist en cada release.
- [ ] **Modo compliance:** retención de docs, export, registro de accesos si el negocio lo exige.

---

## 4. Por dónde empezar ahora mismo (orden recomendado)

Sigue **esta secuencia**; no saltes Fase 1 hasta tener Fase 0 al menos en marcha (dominio + Stripe test + Supabase proyecto).

| Paso | Acción | Responsable |
|------|--------|-------------|
| **1** | Crear proyecto **Supabase** (región EU recomendada para RGPD) y guardar URL + anon key | Tú |
| **2** | Crear **Stripe** (modo test), primer producto/precio de prueba | Tú |
| **3** | Añadir dominio **livendia.com** en Vercel y DNS (o planificar fecha) | Tú + soporte DNS |
| **4** | Implementar en código: esquema DB + auth + checkout + webhook + dashboard mínimo | Ingeniería (agente) |
| **5** | Pasar checklist legal mínimo antes de **pagos reales** | Tú + asesor |

---

## 5. Cómo te voy a guiar

- Trabajaremos **fase a fase**: al cerrar una fase, revisamos criterios de éxito antes de ampliar alcance.
- Cada bloque de trabajo tendrá: **entregables**, **variables de entorno** y **cómo probarlo** en local y en Vercel.
- Ante dudas de negocio (precios, textos legales), te indicaré qué decisión falta; la decisión final es tuya.

**Siguiente mensaje útil que puedes enviarme:** “Ya tengo proyecto Supabase + Stripe test” (puedes pegar solo los nombres de variables, **nunca** secretos en claro), y arranco **Fase 1** en el repo con migraciones y rutas API.

---

*Documento vivo: actualizar al cerrar cada fase.*
