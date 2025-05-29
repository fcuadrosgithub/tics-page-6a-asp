import type React from "react"
import './globals.css'; // <--- ESTA LÍNEA ES FUNDAMENTAL para que se carguen los estilos globales
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "ITIC - ITSOEH",
  description:
    "Ingeniería en Tecnologías de la Información y Comunicaciones - Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
