"use client"; // Necesario para componentes de cliente en Next.js App Router

import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <div className="inline-block rounded-lg bg-[#192d7a]/10 px-3 py-1 text-sm text-[#192d7a]">
            Contacto
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
            ¿Tienes Preguntas?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Estamos aquí para ayudarte. Contáctanos para obtener más información
            sobre la carrera.
          </p>
        </div>

        {/* Contenedor principal con Grid para las dos columnas */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Columna 1: Información de Contacto */}
          <div className="space-y-6">
            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#192d7a]">Dirección</h3>
                <p className="text-muted-foreground">
                  Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km. 2.5,
                  Mixquiahuala de Juárez, Hidalgo, México. C.P. 42700
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E90C1]">Teléfono</h3>
                <p className="text-muted-foreground">+52 (738) 725 1050</p>
                <p className="text-muted-foreground">
                  Ext. 1234 (Coordinación de Ingeniería en TIC)
                </p>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D0207] text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#9D0207]">Correo Electrónico</h3>
                <p className="text-muted-foreground">itic@itsoeh.edu.mx</p>
                <p className="text-muted-foreground">admisiones@itsoeh.edu.mx</p>
              </div>
            </div>
          </div>

          {/* Columna 2: Redes Sociales (centrada verticalmente) */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-bold text-[#192d7a] mb-4 text-center md:text-left">
                Síguenos en Redes Sociales
              </h3>
              <div className="flex justify-center md:justify-start gap-4">
                {/* Enlace a Facebook */}
                <Link
                  href="https://www.facebook.com/ITIC.ITSOEHmx" // ¡Asegúrate de poner tus URLs reales!
                  target="_blank" // Abrir en una nueva pestaña
                  rel="noopener noreferrer" // Seguridad para enlaces externos
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white hover:bg-[#1E90C1] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>

                {/* Enlace a Instagram */}
                <Link
                  href="https://www.instagram.com/itsoeh_oficial/" // ¡Asegúrate de poner tus URLs reales!
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white hover:bg-[#1E90C1] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>

                {/* Enlace a TikTok */}
                <Link
                  href="https://www.tiktok.com/@ing.tics" // Reemplaza con tu URL real de TikTok si tienes
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white hover:bg-[#1E90C1] transition-colors"
                >
                  {/* Icono de TikTok (SVG directo) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 11v4a5 5 0 0 1-5 5H6.5a3.5 3.5 0 0 1 0-7H9" />
                    <path d="M9 9V6a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}