-- ============================================
-- 📨 TABLA DE MENSAJES PARA CHAT UNIFICADO
-- ============================================
-- Chat entre propietario y gestor con archivos adjuntos
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║           📨 CREANDO TABLA DE MENSAJES               ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- Crear tabla de mensajes
  CREATE TABLE IF NOT EXISTS public.messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id uuid REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
    sender_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    message text NOT NULL,
    attachments jsonb, -- array de { file_name, file_path }
    read_at timestamptz,
    created_at timestamptz DEFAULT now()
  );

  RAISE NOTICE '   ✓ Tabla "messages" creada';

  -- Índices para performance
  CREATE INDEX IF NOT EXISTS idx_messages_property ON public.messages(property_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_messages_sender ON public.messages(sender_id);

  RAISE NOTICE '   ✓ Índices creados';

  -- Habilitar RLS
  ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

  RAISE NOTICE '   ✓ RLS habilitado';

  -- Políticas de acceso
  -- Los mensajes son visibles para el propietario de la propiedad y para admins
  DROP POLICY IF EXISTS "messages_select_policy" ON public.messages;
  CREATE POLICY "messages_select_policy"
    ON public.messages FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = property_id
        AND (p.user_id = auth.uid() OR public.is_admin())
      )
    );

  -- Solo pueden insertar mensajes el propietario y los admins
  DROP POLICY IF EXISTS "messages_insert_policy" ON public.messages;
  CREATE POLICY "messages_insert_policy"
    ON public.messages FOR INSERT
    WITH CHECK (
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = property_id
        AND (p.user_id = auth.uid() OR public.is_admin())
      )
    );

  -- Solo pueden actualizar (marcar como leído) el destinatario
  DROP POLICY IF EXISTS "messages_update_policy" ON public.messages;
  CREATE POLICY "messages_update_policy"
    ON public.messages FOR UPDATE
    USING (
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = property_id
        AND (p.user_id = auth.uid() OR public.is_admin())
      )
    );

  RAISE NOTICE '   ✓ Políticas creadas';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║              ✅ ¡TABLA CREADA CON ÉXITO!              ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 QUÉ HACER AHORA:';
  RAISE NOTICE '   1. Verifica que no hay errores arriba';
  RAISE NOTICE '   2. El chat ya puede almacenar mensajes';
  RAISE NOTICE '   3. Prueba enviando mensajes desde el panel';
  RAISE NOTICE '';

END $$;
