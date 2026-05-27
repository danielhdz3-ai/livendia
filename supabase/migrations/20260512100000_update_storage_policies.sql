-- ============================================
-- 🔧 ACTUALIZACIÓN DE STORAGE POLICIES
-- ============================================
-- Permitir archivos para chat e incidencias además de pedidos
-- ============================================

-- Eliminar políticas antiguas
DROP POLICY IF EXISTS "storage_documents_select" ON storage.objects;
DROP POLICY IF EXISTS "storage_documents_insert" ON storage.objects;
DROP POLICY IF EXISTS "storage_documents_delete" ON storage.objects;

-- POLICY SELECT: permite acceso a archivos propios o si eres admin
-- Rutas soportadas:
--   - userId/orderId/archivo (pedidos)
--   - userId/propertyId/chat/archivo (chat)
--   - userId/propertyId/incidents/archivo (incidencias - si se vuelve a usar)
CREATE POLICY "storage_documents_select"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'documents'
    AND (
      -- El archivo es del usuario autenticado
      split_part(name, '/', 1) = auth.uid()::text
      OR 
      -- O es admin
      public.is_admin()
      OR
      -- O es propietario de la propiedad (para chat/incidencias compartidas)
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = (split_part(name, '/', 2))::uuid
        AND p.user_id = auth.uid()
      )
    )
  );

-- POLICY INSERT: permite subir archivos propios
-- Validaciones:
--   - Ruta debe empezar con userId del usuario autenticado
--   - Si es ruta de pedido: debe ser propietario del order
--   - Si es ruta de property (chat/incidencias): debe ser propietario O admin
CREATE POLICY "storage_documents_insert"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'documents'
    AND split_part(name, '/', 1) = auth.uid()::text
    AND (
      -- Pedido o inmueble/inquilino: userId/orderId/archivo ó userId/propertyId/archivo
      (
        split_part(name, '/', 3) NOT IN ('chat', 'incidents')
        AND (
          EXISTS (
            SELECT 1 FROM public.orders o
            WHERE o.id = (split_part(name, '/', 2))::uuid
            AND o.client_id = auth.uid()
          )
          OR EXISTS (
            SELECT 1 FROM public.properties p
            WHERE p.id = (split_part(name, '/', 2))::uuid
            AND p.user_id = auth.uid()
          )
        )
      )
      OR
      -- Chat / incidencias: userId/propertyId/chat/archivo
      (
        split_part(name, '/', 3) IN ('chat', 'incidents')
        AND (
          public.is_admin()
          OR EXISTS (
            SELECT 1 FROM public.properties p
            WHERE p.id = (split_part(name, '/', 2))::uuid
            AND p.user_id = auth.uid()
          )
        )
      )
    )
  );

-- POLICY DELETE: permite borrar archivos propios o si eres admin
CREATE POLICY "storage_documents_delete"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'documents'
    AND (
      split_part(name, '/', 1) = auth.uid()::text
      OR public.is_admin()
    )
  );

-- ============================================
-- 📝 NOTAS IMPORTANTES
-- ============================================
-- Esta migración actualiza las políticas de Storage para soportar:
--
-- 1. PEDIDOS (existente):
--    userId/orderId/nombre_archivo.pdf
--    - Solo el dueño del pedido puede subir
--    - Solo el dueño o admin pueden ver/borrar
--
-- 2. CHAT (nuevo):
--    userId/propertyId/chat/timestamp_0.jpg
--    - El propietario de la property o admin pueden subir
--    - El propietario o admin pueden ver/borrar
--
-- 3. INCIDENCIAS (preparado para futuro):
--    userId/propertyId/incidents/timestamp_0.jpg
--    - El propietario de la property o admin pueden subir
--    - El propietario o admin pueden ver/borrar
--
-- ============================================
