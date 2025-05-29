import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de ESLint (V0 añadió esto)
  eslint: {
    ignoreDuringBuilds: true, // Esto ignora los errores de ESLint durante la compilación
  },
  // Configuración de TypeScript (V0 añadió esto)
  typescript: {
    ignoreBuildErrors: true, // Esto ignora los errores de TypeScript durante la compilación
  },
  // Configuración de imágenes (V0 añadió esto)
  images: {
    unoptimized: true, // Esto deshabilita la optimización automática de imágenes de Next.js
  },

  // Mantén cualquier otra configuración que ya tuvieras (si había algo más allá de '/* config options here */')
  /* config options here */ // Puedes quitar este comentario si no tienes más opciones
};

export default nextConfig;