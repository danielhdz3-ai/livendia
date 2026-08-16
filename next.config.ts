import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // Listas explícitas en vez del default de Next (que llega hasta 3840px).
    // El layout más ancho del sitio es max-w-7xl (1280px) y ninguna imagen
    // ocupa más de ese ancho en pantalla (ver `sizes` en los componentes de
    // landing, ya corregidos para no pedir más resolución de la necesaria).
    // - deviceSizes: cubre desde móvil pequeño hasta el ancho máximo real de
    //   contenedor (1280px), más 1920 para servir nítido en pantallas de
    //   alta densidad (2x) en los bloques de ancho fijo mayor (banners de
    //   ~1152px). Se elimina 2048 y 3840 del default de Next: nada en este
    //   sitio se renderiza a ese ancho, así que nunca aportaban valor.
    // - imageSizes: para imágenes pequeñas de layout fijo (avatares, iconos,
    //   miniaturas de equipo/ciudades) usadas con `sizes="Npx"`.
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384, 420],
  },
  async redirects() {
    return [
      {
        source: "/servicios/pago-prueba-livendia",
        destination: "/servicios",
        statusCode: 301,
      },
      {
        source: "/servicios/contrato-alquiler-madrid",
        destination: "/servicios/contrato-alquiler-local/madrid",
        permanent: true,
      },
      {
        source: "/servicios/contrato-alquiler-barcelona",
        destination: "/servicios/contrato-alquiler-local/barcelona",
        permanent: true,
      },
      {
        source: "/servicios/gestoria-inmobiliaria-local",
        destination: "/gestoria",
        permanent: true,
      },
      {
        source: "/servicios/gestoria-inmobiliaria-local/:slug",
        destination: "/gestoria/:slug",
        permanent: true,
      },
      {
        // Fase 7 (Grupo D): página plana previa al hub /servicios/contrato-de-arras y al clúster
        // contrato-arras-local (ambos creados 16 días después). El hub ya vende el mismo producto
        // (mismo slug de catálogo "contrato-arras-confirmatorias") con más contenido y mejor
        // posición. `statusCode: 301` explícito porque aquí queremos el código HTTP exacto 301
        // (los redirects de arriba con `permanent: true` devuelven 308 en esta versión de Next.js,
        // que es igualmente permanente mas no es literalmente "301").
        source: "/servicios/contrato-arras-confirmatorias",
        destination: "/servicios/contrato-de-arras",
        statusCode: 301,
      },
      // Legacy: /vender-piso-sin-inmobiliaria-barcelona (404) → pilar con barra
      {
        source: "/vender-piso-sin-inmobiliaria-:city",
        destination: "/vender-piso-sin-inmobiliaria/:city",
        statusCode: 301,
      },
      {
        source: "/admin/pedidos",
        destination: "/admin/expedientes",
        permanent: false,
      },
      {
        source: "/admin/pedidos/:id",
        destination: "/admin/expedientes/:id",
        permanent: false,
      },
      {
        source: "/admin/clientes",
        destination: "/admin/base-datos",
        permanent: false,
      },
      {
        source: "/admin/clientes/:clientId",
        destination: "/admin/expedientes/cliente/:clientId",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
