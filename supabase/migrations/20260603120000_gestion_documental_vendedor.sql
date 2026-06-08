-- Gestor documental vendedor — arras a escritura: 350 € IVA incl. (35000 céntimos)
INSERT INTO services (slug, name, description, category, price_cents, is_recurring, features, badge)
VALUES (
  'gestion-documental-vendedor',
  'Gestor documental vendedor — De arras a escritura',
  'Gestor dedicado que obtiene y verifica toda la documentación para que el vendedor particular pueda escriturar sin retrasos: nota simple, comunidad, ITE, certificado energético, hipoteca y más.',
  'acompanamiento',
  35000,
  false,
  ARRAY[
    'Gestor dedicado desde la contratación',
    'Checklist personalizado de documentación',
    'Nota simple registral actualizada',
    'Certificado de deuda cero de comunidad',
    'Verificación ITE vigente si aplica',
    'Certificado de eficiencia energética',
    'Estado de suministros para liquidación',
    'IBI y prorrateo vendedor/comprador',
    'Cargas y afecciones registrales',
    'Coordinación documentación hipoteca pendiente',
    'Coherencia documentación vs arras',
    'Informe semáforo verde/ámbar/rojo',
    'Asesoramiento hasta notaría',
    'Área de cliente Livendia'
  ],
  'Para vendedores'
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  category = EXCLUDED.category,
  price_cents = EXCLUDED.price_cents,
  features = EXCLUDED.features,
  badge = EXCLUDED.badge;
