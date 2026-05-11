-- ============================================
-- 🔍 VER MIS USUARIOS REGISTRADOS
-- ============================================
-- Este script muestra todos los usuarios en tu base de datos
-- para que veas qué email tienes registrado
-- ============================================

SELECT 
  id,
  email,
  created_at,
  email_confirmed_at,
  last_sign_in_at
FROM auth.users
ORDER BY created_at DESC;
