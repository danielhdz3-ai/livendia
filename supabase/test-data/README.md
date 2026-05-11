# 🏠 Configuración del Sistema de Administración de Alquileres

Sigue estos pasos en orden para acceder al área de administración de alquileres.

## 📋 Paso 1: Ejecutar migración de base de datos

1. Ve a **Supabase Dashboard** → Tu proyecto → **SQL Editor**
2. Abre el archivo: `supabase/migrations/20260511200000_rental_management_tables.sql`
3. Copia TODO el contenido
4. Pega en el SQL Editor de Supabase
5. Click en **RUN** o presiona `Ctrl + Enter`

✅ Esto creará 7 tablas: `properties`, `tenants`, `property_documents`, `tenant_documents`, `rent_payments`, `property_expenses`, `incidents`

---

## 📋 Paso 2: Crear orden de suscripción de prueba

1. Abre el archivo: `supabase/test-data/create_rental_subscription_order.sql`
2. **IMPORTANTE**: Reemplaza `'TU_EMAIL_AQUI'` con tu email de usuario registrado
3. Copia TODO el contenido
4. Pega en el SQL Editor de Supabase
5. Click en **RUN**

✅ Esto creará una orden del servicio "Administración de Alquileres" en tu cuenta

---

## 📋 Paso 3: Insertar datos de prueba (opcional pero recomendado)

1. Abre el archivo: `supabase/test-data/rental_sample_data.sql`
2. **IMPORTANTE**: Reemplaza `'TU_EMAIL_AQUI'` con tu email de usuario
3. Copia TODO el contenido
4. Pega en el SQL Editor de Supabase
5. Click en **RUN**

✅ Esto creará:
- 1 propiedad en Calle Gran Vía 45, Madrid
- 1 inquilina activa (María García López)
- 5 pagos de alquiler (3 pagados, 2 pendientes)
- 6 gastos del inmueble (IBI, comunidad, reparaciones)
- 3 incidencias (resuelta, en proceso, pendiente)

---

## 🎯 Paso 4: Acceder al dashboard

1. Abre la aplicación: https://livendia.com
2. Inicia sesión con tu cuenta
3. Serás **automáticamente redirigido** a `/dashboard/rental`

Si tienes el servicio de administración de alquiler contratado, el sistema detectará automáticamente la suscripción y te mostrará el dashboard especializado en lugar del dashboard normal.

---

## 🔍 Verificar funcionamiento

En el dashboard deberías ver:

### 📊 Métricas principales
- **Ingresos totales**: 2850€ (3 pagos recibidos)
- **Gastos totales**: 880€ (IBI + comunidad + reparaciones)
- **Beneficio neto**: 1970€
- **Pagos pendientes**: 2 (mayo y junio)

### 🏢 Información de propiedad
- Dirección: Calle Gran Vía 45, Madrid
- Tipo: Piso • 3 hab • 2 baños
- IBI anual: 650€
- Comunidad mensual: 85€

### 👤 Información de inquilino
- Nombre: María García López
- Teléfono: +34 612 345 678
- Alquiler: 950€/mes
- Fianza: 1900€

### 📅 Calendario de cobros
- Mayo 2025 (05/05): ⏰ Pendiente
- Junio 2025 (05/06): ⏰ Pendiente

### 💰 Gastos recientes
- IBI 1º semestre: 325€ (deducible)
- Reparación caldera: 120€ (deducible)
- Seguros y más...

### 🔧 Incidencias
- **Alta**: Ruido en caldera (en proceso)
- **Media**: Fuga en grifo (resuelta)
- **Baja**: Persiana atascada (pendiente)

---

## 🚀 Próximos pasos

El dashboard ya está funcionalmente preparado. En las próximas actualizaciones se agregarán:

1. **Formularios funcionales** para añadir propiedades e inquilinos
2. **Subida de documentos** (DNI, nóminas, contratos, etc.)
3. **Dashboard financiero** con gráficos de rentabilidad
4. **Calendario interactivo** de cobros con gestión de estado
5. **Portal de incidencias** con subida de fotos y gestión de presupuestos
6. **Exportación** a Excel/PDF

---

## ❓ Solución de problemas

### No veo el dashboard de alquileres
- Verifica que ejecutaste el Paso 2 correctamente
- Comprueba que usaste tu email correcto
- Cierra sesión y vuelve a iniciar sesión

### Las tablas no se crean
- Verifica que ejecutaste primero las migraciones previas
- Comprueba que el servicio "administracion-alquiler" existe en la tabla `services`

### Error al insertar datos de prueba
- Verifica que ejecutaste primero el Paso 1 (migración)
- Verifica que ejecutaste el Paso 2 (orden de suscripción)
- Comprueba que reemplazaste correctamente tu email

---

## 📧 Contacto

Si tienes problemas, revisa los logs en el SQL Editor de Supabase para ver mensajes de error detallados.
