-- ============================================
-- ⚡ ASIGNAR ROL DE ADMIN ⚡
-- ============================================
-- Este script te convierte en administrador
-- Email configurado: info@livendia.com
-- ============================================

DO $$
DECLARE
  v_user_id uuid;
  v_user_email text := 'info@livendia.com';
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║           🔑 ASIGNACIÓN DE ROL ADMINISTRADOR          ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- Verificar usuario
  RAISE NOTICE '📋 Verificando usuario...';
  SELECT id INTO v_user_id FROM auth.users WHERE email = v_user_email LIMIT 1;
  
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION '❌ Usuario no encontrado: "%". Verifica tu email o regístrate primero.', v_user_email;
  END IF;
  
  RAISE NOTICE '   ✓ Usuario encontrado: %', v_user_email;
  RAISE NOTICE '';

  -- Asignar rol de admin
  RAISE NOTICE '📋 Asignando rol de administrador...';
  UPDATE public.profiles
  SET role = 'admin'
  WHERE id = v_user_id;
  
  RAISE NOTICE '   ✓ Rol asignado correctamente';
  RAISE NOTICE '';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║              ✅ ¡CONFIGURACIÓN COMPLETA!              ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 QUÉ HACER AHORA:';
  RAISE NOTICE '   1. Cierra sesión en livendia.com (si estás logueado)';
  RAISE NOTICE '   2. Inicia sesión nuevamente con %', v_user_email;
  RAISE NOTICE '   3. Visita: https://livendia.com/admin';
  RAISE NOTICE '   4. Tendrás acceso completo al panel de administración';
  RAISE NOTICE '';
  RAISE NOTICE '📍 SECCIONES DEL ADMIN:';
  RAISE NOTICE '   • /admin/pedidos - Ver todos los pedidos';
  RAISE NOTICE '   • /admin/alquileres - Gestionar clientes de alquiler';
  RAISE NOTICE '';
  
END $$;
