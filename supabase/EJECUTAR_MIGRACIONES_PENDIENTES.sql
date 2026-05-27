-- ============================================
-- ⚡ EJECUTAR TODAS LAS MIGRACIONES PENDIENTES ⚡
-- ============================================
-- Este script ejecuta las migraciones que pueden no haberse aplicado
-- 1. Storage policies para documentos
-- 2. Columnas zone y postal_code en properties
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║        🔧 EJECUTANDO MIGRACIONES PENDIENTES          ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- ============================================
  -- PASO 1: Crear bucket de Storage si no existe
  -- ============================================
  RAISE NOTICE '📋 Paso 1/3: Verificando bucket de Storage...';
  
  -- Crear bucket 'documents' si no existe
  INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  VALUES (
    'documents', 
    'documents', 
    false,
    52428800, -- 50MB limit
    ARRAY['application/pdf', 'image/png', 'image/jpeg', 'image/jpg', 'image/webp']
  )
  ON CONFLICT (id) DO UPDATE 
  SET public = EXCLUDED.public,
      file_size_limit = EXCLUDED.file_size_limit,
      allowed_mime_types = EXCLUDED.allowed_mime_types;
  
  RAISE NOTICE '   ✓ Bucket "documents" configurado';
  RAISE NOTICE '';

  -- ============================================
  -- PASO 2: Crear políticas de Storage
  -- ============================================
  RAISE NOTICE '📋 Paso 2/3: Configurando políticas de Storage...';
  
  -- Eliminar políticas antiguas si existen
  DROP POLICY IF EXISTS "storage_documents_select" ON storage.objects;
  DROP POLICY IF EXISTS "storage_documents_insert" ON storage.objects;
  DROP POLICY IF EXISTS "storage_documents_delete" ON storage.objects;
  
  -- Política de SELECT (ver archivos)
  CREATE POLICY "storage_documents_select"
    ON storage.objects FOR SELECT TO authenticated
    USING (
      bucket_id = 'documents'
      AND (
        split_part(name, '/', 1) = auth.uid()::text
        OR public.is_admin()
      )
    );
  
  -- Política de INSERT (subir archivos)
  CREATE POLICY "storage_documents_insert"
    ON storage.objects FOR INSERT TO authenticated
    WITH CHECK (
      bucket_id = 'documents'
      AND split_part(name, '/', 1) = auth.uid()::text
    );
  
  -- Política de DELETE (eliminar archivos)
  CREATE POLICY "storage_documents_delete"
    ON storage.objects FOR DELETE TO authenticated
    USING (
      bucket_id = 'documents'
      AND (
        split_part(name, '/', 1) = auth.uid()::text
        OR public.is_admin()
      )
    );
  
  RAISE NOTICE '   ✓ Políticas de Storage creadas';
  RAISE NOTICE '';

  -- ============================================
  -- PASO 3: Añadir columnas zone y postal_code
  -- ============================================
  RAISE NOTICE '📋 Paso 3/3: Añadiendo columnas a properties...';
  
  -- Verificar si las columnas ya existen antes de crearlas
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'properties' 
    AND column_name = 'zone'
  ) THEN
    ALTER TABLE public.properties ADD COLUMN zone text;
    RAISE NOTICE '   ✓ Columna "zone" añadida';
  ELSE
    RAISE NOTICE '   ✓ Columna "zone" ya existe';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'properties' 
    AND column_name = 'postal_code'
  ) THEN
    ALTER TABLE public.properties ADD COLUMN postal_code text;
    RAISE NOTICE '   ✓ Columna "postal_code" añadida';
  ELSE
    RAISE NOTICE '   ✓ Columna "postal_code" ya existe';
  END IF;
  
  RAISE NOTICE '';

  -- ============================================
  -- VERIFICACIONES FINALES
  -- ============================================
  RAISE NOTICE '📋 Verificaciones finales...';
  
  -- Verificar bucket
  IF EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'documents') THEN
    RAISE NOTICE '   ✓ Bucket "documents" confirmado';
  ELSE
    RAISE WARNING '   ⚠ Bucket "documents" no encontrado';
  END IF;
  
  -- Verificar políticas
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'storage_documents_select'
  ) THEN
    RAISE NOTICE '   ✓ Políticas de Storage confirmadas';
  ELSE
    RAISE WARNING '   ⚠ Políticas de Storage no encontradas';
  END IF;
  
  -- Verificar columnas
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'properties' 
    AND column_name IN ('zone', 'postal_code')
  ) THEN
    RAISE NOTICE '   ✓ Columnas zone/postal_code confirmadas';
  ELSE
    RAISE WARNING '   ⚠ Columnas zone/postal_code no encontradas';
  END IF;
  
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║              ✅ ¡MIGRACIONES COMPLETADAS!             ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 QUÉ HACER AHORA:';
  RAISE NOTICE '   1. Verifica que no hay warnings arriba';
  RAISE NOTICE '   2. Prueba subir un documento desde el panel de alquiler';
  RAISE NOTICE '   3. Verifica que el archivo se guarda correctamente';
  RAISE NOTICE '';
  
END $$;
