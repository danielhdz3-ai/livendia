-- Fotos de móvil (HEIC), Word, etc.: quitar restricción MIME estricta del bucket.

UPDATE storage.buckets
SET
  file_size_limit = 52428800,
  allowed_mime_types = NULL
WHERE id = 'documents';
