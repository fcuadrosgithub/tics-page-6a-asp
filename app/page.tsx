"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// pages/index.js (or your main component file)
import Carousel from '@/components/ui/carousel'; // Adjust path if necessary
import ContactForm from '../components/ui/ContactForm'; // ASUME que ContactForm.jsx está en la carpeta 'components'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* CORRECCIÓN: Ruta correcta sin /public */}
            <Image
              src="/imagenes/logoitsoeh.png"
              alt="Estudiantes de ITIC"
              width={50}
              height={50}
              className="aspect-square rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#192d7a]">ITSOEH</span>
              <span className="text-xs text-[#9D0207]">Ingeniería en TIC</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#oferta" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Oferta Educativa
            </Link>
            <Link href="#convocatoria" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Convocatoria
            </Link>
            <Link href="#examen" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Examen de Admisión
            </Link>
            <Link href="#becas" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Becas
            </Link>
            <Link href="#eventos" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Eventos
            </Link>
            <Link href="#logros" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Logros
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-[#1E90C1] transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#192d7a] hover:text-[#1E90C1]">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-[#192d7a] hover:text-[#1E90C1]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Button className="hidden md:flex bg-[#192d7a] hover:bg-[#1E90C1]">Iniciar Sesión</Button>
            <Button variant="outline" className="md:hidden">
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
                className="h-4 w-4"
              >
                <path d="M4 6h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
              </svg>
              <span className="sr-only">Menú</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#192d7a] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#192d7a]/90 to-[#1E90C1]/80"></div>
        <div className="container relative flex flex-col items-center justify-center gap-4 py-12 md:py-24 lg:flex-row lg:gap-8 lg:py-32">
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Ingeniería en Tecnologías de la Información y Comunicaciones
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-white/80 md:text-xl">
              Forma parte del futuro tecnológico en el Instituto Tecnológico Superior del Occidente del Estado de
              Hidalgo
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#contacto">
                <Button className="bg-[#9D0207] hover:bg-[#9D0207]/80">Solicitar Información</Button>
              </a>
              <a href="https://www.itsoeh.edu.mx" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-black border-white hover:bg-white hover:text-[#192d7a]">
                  Conoce Más
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md">
            {/* CORRECCIÓN: Ruta correcta sin /public */}
            <Image
              src="/imagenes/logotics.png"
              alt="Estudiantes de ITIC"
              width={400}
              height={400}
              className="aspect-square rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Oferta Educativa */}
      <section id="oferta" className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#1E90C1]/10 px-3 py-1 text-sm text-[#1E90C1]">
              Oferta Educativa
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              Nuestras Carreras Profesionales
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce las diferentes carreras que ofrece el Instituto Tecnológico Superior del Occidente del Estado de
              Hidalgo para tu formación profesional.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#192d7a]">Arquitectura</CardTitle>
                <CardDescription>Diseño y planificación de espacios</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Forma profesionales con capacidad para diseñar, proyectar y construir espacios arquitectónicos
                  sustentables que satisfagan las necesidades de habitabilidad.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/arquitectura.pdf" download="arquitectura.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1E90C1]">Ingeniería Civil</CardTitle>
                <CardDescription>Infraestructura y construcción</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Desarrolla proyectos de infraestructura civil sustentables, aplicando tecnologías innovadoras y
                  gestión eficiente de recursos.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/RETÍCULA ICIVIL.pdf" download="IngCivil.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#9D0207]">Ingeniería en Gestión Empresarial</CardTitle>
                <CardDescription>Administración y dirección de empresas</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Forma profesionales capaces de diseñar, implementar y desarrollar sistemas estratégicos de negocios e
                  innovación.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/Reticula Gestion Empresarial2018.pdf" download="Ing gestion empresarial.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#192d7a]">Ingeniería en Sistemas Computacionales</CardTitle>
                <CardDescription>Desarrollo de software y sistemas</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Diseña, desarrolla e implementa soluciones basadas en tecnologías de información para optimizar
                  procesos en las organizaciones.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/Sistemas.pdf" download="Ing sistemas.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1E90C1]">Ingeniería Industrial</CardTitle>
                <CardDescription>Optimización de procesos productivos</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Diseña, implementa y mejora sistemas integrados de personas, materiales, información y equipos para
                  optimizar procesos industriales.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/RETICULA IIDUSTRIAL.pdf" download="Ing Industrial.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#9D0207]">
                  Ingeniería en Tecnologías de la Información y Comunicaciones
                </CardTitle>
                <CardDescription>Redes y sistemas de información</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Implementa soluciones tecnológicas innovadoras para satisfacer las necesidades de información y
                  comunicación de las organizaciones.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/tics.pdf" download="Ing TICS.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#192d7a]">Ingeniería en Logística</CardTitle>
                <CardDescription>Gestión de cadenas de suministro</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Diseña y gestiona sistemas logísticos y cadenas de suministro para optimizar el flujo de materiales,
                  información y recursos.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/ReticulaLOGISTICA.pdf" download="Ing Logistica.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1E90C1]">Ingeniería en Industrias Alimentarias</CardTitle>
                <CardDescription>Procesamiento y conservación de alimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Desarrolla procesos y productos alimentarios innovadores, aplicando tecnologías que garanticen la
                  calidad y seguridad alimentaria.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/RETICULA_IALIMENTARIAS.pdf" download="Ing Industrias Alimentarias.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#9D0207]">Ingeniería en Electromecánica</CardTitle>
                <CardDescription>Sistemas eléctricos y mecánicos</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Diseña, implementa y mantiene sistemas electromecánicos para optimizar procesos industriales con
                  enfoque sustentable.
                </p>
              </CardContent>
              <CardFooter>
                <a href="/documentos/Reticula Electromecanica.pdf" download="Ing Electromecanica.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Ver Plan de Estudios
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Convocatoria */}
      <section id="convocatoria" className="py-12 md:py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#192d7a]/10 px-3 py-1 text-sm text-[#192d7a]">Convocatoria</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              Proceso de Admisión 2025
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce los requisitos y fechas importantes para formar parte de nuestra comunidad educativa.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#192d7a] mb-4">Requisitos</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1E90C1] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Certificado de bachillerato o constancia de estudios</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1E90C1] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>CURP actualizada</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1E90C1] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Acta de nacimiento</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1E90C1] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Comprobante de domicilio reciente</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1E90C1] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Identificación oficial</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1E90C1] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>4 fotografías tamaño infantil</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#192d7a] mb-4">Fechas Importantes</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                    <span className="font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Registro en línea</h4>
                    <p className="text-sm text-muted-foreground">15 de enero al 30 de abril de 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                    <span className="font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Pago de ficha</h4>
                    <p className="text-sm text-muted-foreground">15 de enero al 5 de mayo de 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                    <span className="font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Examen de admisión</h4>
                    <p className="text-sm text-muted-foreground">15 de mayo de 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                    <span className="font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Publicación de resultados</h4>
                    <p className="text-sm text-muted-foreground">30 de mayo de 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                    <span className="font-bold">05</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Inscripciones</h4>
                    <p className="text-sm text-muted-foreground">10 al 20 de junio de 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="https://www.itsoeh.edu.mx/front/slider-images/docs/CONVOCATORIA%202025-2026%20(2).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#192d7a] hover:bg-[#1E90C1]">Ver Convocatoria Completa</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Examen de Admisión */}
      <section id="examen" className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#9D0207]/10 px-3 py-1 text-sm text-[#9D0207]">
              Examen de Admisión
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              Prepárate para tu examen
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Información importante sobre el examen de admisión y resultados.
            </p>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="informacion" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="informacion">Información</TabsTrigger>
                <TabsTrigger value="guia">Guía de Estudio</TabsTrigger>
                <TabsTrigger value="resultados">Resultados</TabsTrigger>
              </TabsList>
              <TabsContent value="informacion" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#192d7a]">Detalles del Examen</h3>
                  <p>El examen de admisión evalúa conocimientos en las siguientes áreas:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Matemáticas</li>
                    <li>Comprensión lectora</li>
                    <li>Razonamiento lógico</li>
                    <li>Conocimientos generales de computación</li>
                  </ul>
                  <div className="bg-[#1E90C1]/10 p-4 rounded-lg">
                    <h4 className="font-bold text-[#1E90C1]">Fecha y Hora</h4>
                    <p>15 de mayo de 2025, 9:00 AM</p>
                    <h4 className="font-bold text-[#1E90C1] mt-2">Lugar</h4>
                    <p>Instalaciones del ITSOEH, Mixquiahuala de Juárez, Hidalgo</p>
                    <h4 className="font-bold text-[#1E90C1] mt-2">Duración</h4>
                    <p>3 horas</p>
                  </div>
                  <p>Es importante presentarse 30 minutos antes con identificación oficial y pase de examen impreso.</p>
                </div>
              </TabsContent>
              <TabsContent value="guia" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#192d7a]">Guía de Estudio</h3>
                  <p>Para ayudarte a prepararte para el examen, te ofrecemos los siguientes recursos:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-bold text-[#1E90C1]">Guía de Estudio Digital</h4>
                      <p className="text-sm text-muted-foreground mb-4">PDF con temario y ejercicios de práctica</p>
                      <Button variant="outline" className="w-full">
                        Descargar Guía
                      </Button>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-bold text-[#1E90C1]">Simulador de Examen</h4>
                      <p className="text-sm text-muted-foreground mb-4">Practica con exámenes de años anteriores</p>
                      <Button variant="outline" className="w-full">
                        Acceder al Simulador
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[#9D0207]/10 p-4 rounded-lg">
                    <h4 className="font-bold text-[#9D0207]">Curso de Preparación</h4>
                    <p>Ofrecemos un curso de preparación para el examen de admisión del 1 al 30 de abril de 2025.</p>
                    <Button className="mt-4 bg-[#9D0207] hover:bg-[#9D0207]/80">Inscribirse al Curso</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resultados" className="p-4 border rounded-lg mt-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#192d7a]">Resultados</h3>
                  <p>
                    Los resultados del examen de admisión serán publicados el 30 de mayo de 2025 a través de los
                    siguientes medios:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Portal web institucional</li>
                    <li>Correo electrónico registrado</li>
                    <li>Listas impresas en las instalaciones del ITSOEH</li>
                  </ul>
                  <div className="bg-[#1E90C1]/10 p-4 rounded-lg">
                    <h4 className="font-bold text-[#1E90C1]">Consulta de Resultados</h4>
                    <p className="mb-4">Para consultar tus resultados, necesitarás tu número de ficha y CURP.</p>
                    <Button className="bg-[#1E90C1] hover:bg-[#1E90C1]/80">Consultar Resultados</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nota: Los resultados del examen de admisión son inapelables.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Becas */}
      <section id="becas" className="py-12 md:py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#192d7a]/10 px-3 py-1 text-sm text-[#192d7a]">Becas</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              Apoyos Económicos
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce las diferentes opciones de becas disponibles para nuestros estudiantes.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="bg-white">
              <CardHeader className="bg-[#192d7a] text-white rounded-t-lg">
                <CardTitle>Becas Institucionales</CardTitle>
                <CardDescription className="text-white/80">Otorgadas por el ITSOEH</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#192d7a] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca de Excelencia</span>
                      <p className="text-sm text-muted-foreground">Para estudiantes con promedio superior a 9.5</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#192d7a] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Deportiva</span>
                      <p className="text-sm text-muted-foreground">Para estudiantes destacados en deportes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#192d7a] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Cultural</span>
                      <p className="text-sm text-muted-foreground">Para estudiantes con talento artístico</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="https://www.itsoeh.edu.mx/front/documentos/LGCG/2014/4/21.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Más Información
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="bg-[#1E90C1] text-white rounded-t-lg">
                <CardTitle>Becas Estatales</CardTitle>
                <CardDescription className="text-white/80">Otorgadas por el Estado de Hidalgo</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#1E90C1] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Miguel Hidalgo</span>
                      <p className="text-sm text-muted-foreground">Para estudiantes hidalguenses destacados</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#1E90C1] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca de Transporte</span>
                      <p className="text-sm text-muted-foreground">Apoyo para gastos de transporte</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#1E90C1] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Alimenticia</span>
                      <p className="text-sm text-muted-foreground">Apoyo para gastos de alimentación</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="https://ruts.hidalgo.gob.mx/ver/10080" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#1E90C1] border-[#1E90C1] hover:bg-[#1E90C1] hover:text-white"
                  >
                    Más Información
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="bg-[#9D0207] text-white rounded-t-lg">
                <CardTitle>Becas Federales</CardTitle>
                <CardDescription className="text-white/80">Otorgadas por el Gobierno Federal</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#9D0207] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Benito Juárez</span>
                      <p className="text-sm text-muted-foreground">Apoyo universal para estudiantes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#9D0207] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Jóvenes Escribiendo el Futuro</span>
                      <p className="text-sm text-muted-foreground">Para estudiantes de escasos recursos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-[#9D0207] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>
                      <span className="font-medium">Beca Santander</span>
                      <p className="text-sm text-muted-foreground">Para proyectos de innovación tecnológica</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="https://www.itsoeh.edu.mx/front/slider-images/docs/BECA%20SANTANDER%202025.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full text-[#9D0207] border-[#9D0207] hover:bg-[#9D0207] hover:text-white"
                  >
                    Más Información
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section id="eventos" className="py-12 md:py-24 bg-white">
      <div>
        {/* Your existing content */}

        <Carousel />

        {/* More of your existing content */}
      </div>
      </section>
 {/* Logros */}
 <section id="logros" className="py-12 md:py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#9D0207]/10 px-3 py-1 text-sm text-[#9D0207]">
              Logros y Éxitos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              Nuestros Orgullos
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce los logros académicos y profesionales de nuestros estudiantes y egresados.
            </p>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="academicos" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="academicos">Logros Académicos</TabsTrigger>
                <TabsTrigger value="egresados">Casos de Éxito</TabsTrigger>
              </TabsList>
              <TabsContent value="academicos" className="p-4 border rounded-lg mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#192d7a]">Destacada participación en Robótica Móvil </CardTitle>
                      <CardDescription>16.º Campeonato Nacional de Robótica y Habilidades STEM 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/imagenes/stem.png?height=120&width=120"
                          alt="Equipo ganador"
                          width={120}
                          height={120}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Estudiantes de la ing en TICs</h4>
                          <p className="text-sm text-muted-foreground">6° Semestre</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                      Destacada participación y liderazgo en los equipos de Robótica Móvil representativos del ITSOEH
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1E90C1]">Descatada participación</CardTitle>
                      <CardDescription>Campeonato Nacional de Robótica y Habilidades STEM 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/imagenes/robostem.png?height=120&width=120"
                          alt="Proyecto NASA"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Equipo de robótica</h4>
                          <p className="text-sm text-muted-foreground">8° Semestre</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                      Demostraron su talento en la competencia de la categoría "Internet de las Cosas (IoT) - Innovación".
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#9D0207]">Entrevista nacional</CardTitle>
                      <CardDescription> La tecnología y la sustentabilidad van de la mano en esta gran iniciativa.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/imagenes/entrevista.png?height=120&width=120"
                          alt="Estudiante becado"
                          width={120}
                          height={120}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Jesús Arturo Díaz y Edwin Soto</h4>
                          <p className="text-sm text-muted-foreground">8° Semestre</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                      Jesús Arturo Díaz y Edwin Soto, estudiantes del Tecnológico Nacional de México Campus Occidente del Estado de Hidalgo, comparten en Ya es Hora 12.1
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="egresados" className="p-4 border rounded-lg mt-4">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Image
                      src="/imagenes/cristian.png?height=150&width=150"
                      alt="Egresado exitoso"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#192d7a]"> Ing. Christian Elías Cruz González</h3>
                      <p className="text-[#1E90C1] font-medium">Generación 2017-2021</p>
                      <p className="text-muted-foreground mt-2">
                        "Mi formación en el ITSOEH me dio las bases para desarrollarme profesionalmente. Actualmente
                        trabajo como Ingeniero de Software Senior en una empresa internacional en Comolombia, donde lidero proyectos de inteligencia
                        artificial aplicada a servicios en la nube."
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="bg-[#192d7a]/10 text-[#192d7a] px-2 py-1 text-xs rounded">Microsoft</span>
                        <span className="bg-[#1E90C1]/10 text-[#1E90C1] px-2 py-1 text-xs rounded">
                          Inteligencia Artificial
                        </span>
                        <span className="bg-[#9D0207]/10 text-[#9D0207] px-2 py-1 text-xs rounded">
                          Cloud Computing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Image
                      src="/imagenes/hector.png?height=150&width=150"
                      alt="Egresada exitosa"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#192d7a]">Ing. Héctor Jonathan Godínez González</h3>
                      <p className="text-[#1E90C1] font-medium">Generación 2016-2020</p>
                      <p className="text-muted-foreground mt-2">
                        "El estudiar la carrera de TIC's me brindado las aptitudes de aprender, desarrollar en diversas tecnologías, las cuales me permiten desempeñarme dentro de diversas áreas como BD(creación, modificación de SP y querys), asegurar la calidad de nuevos desarrollos (Pruebas de Caja Negra - Automatización de P
                        pruebas."
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="bg-[#192d7a]/10 text-[#192d7a] px-2 py-1 text-xs rounded">Emprendimiento</span>
                        <span className="bg-[#1E90C1]/10 text-[#1E90C1] px-2 py-1 text-xs rounded">Desarrollo Web</span>
                        <span className="bg-[#9D0207]/10 text-[#9D0207] px-2 py-1 text-xs rounded">Innovación</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Image
                      src="/imagenes/itzel.png?height=150&width=150"
                      alt="Egresado exitoso"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#192d7a]">Ing. Itzel Reyes Cruz</h3>
                      <p className="text-[#1E90C1] font-medium">Generación 2017-2021</p>
                      <p className="text-muted-foreground mt-2">
                        "Recomiendo ampliamente estudiar la carrera de ingeniería en TIC's, ya que brinda las bases necesarias para desarrollarse en el ámbito profesional, hoy en día los conocimientos aprendidos los aplico en mi entorno laboral."
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="bg-[#192d7a]/10 text-[#192d7a] px-2 py-1 text-xs rounded">Desarrollador de base de datos</span>
                        <span className="bg-[#1E90C1]/10 text-[#1E90C1] px-2 py-1 text-xs rounded">Analisis de datos</span>
                        <span className="bg-[#9D0207]/10 text-[#9D0207] px-2 py-1 text-xs rounded">Liderazgo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <ContactForm />


      {/* Footer */}
      <footer className="bg-[#192d7a] text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-itic.png"
                  alt="Logo ITIC"
                  width={50}
                  height={50}
                  className="h-10 w-auto bg-white p-1 rounded"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold">ITSOEH</span>
                  <span className="text-xs">Ingeniería en TIC</span>
                </div>
              </div>
              <p className="text-sm text-white/80 mb-4">
                Formando profesionales en tecnologías de la información y comunicaciones con calidad e innovación.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-[#1E90C1]">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white hover:text-[#1E90C1]">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white hover:text-[#1E90C1]">
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
                    <path d="M15 11v4a5 5 0 0 1-5 5H6.5a3.5 3.5 0 0 1 0-7H9"></path>
                    <path d="M9 9V6a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5"></path>
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#oferta" className="text-sm text-white/80 hover:text-white hover:underline">
                    Oferta Educativa
                  </Link>
                </li>
                <li>
                  <Link href="#convocatoria" className="text-sm text-white/80 hover:text-white hover:underline">
                    Convocatoria
                  </Link>
                </li>
                <li>
                  <Link href="#examen" className="text-sm text-white/80 hover:text-white hover:underline">
                    Examen de Admisión
                  </Link>
                </li>
                <li>
                  <Link href="#becas" className="text-sm text-white/80 hover:text-white hover:underline">
                    Becas
                  </Link>
                </li>
                <li>
                  <Link href="#eventos" className="text-sm text-white/80 hover:text-white hover:underline">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#logros" className="text-sm text-white/80 hover:text-white hover:underline">
                    Logros
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-sm text-white/80 hover:text-white hover:underline">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Información de Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-[#1E90C1]" />
                  <span className="text-sm text-white/80">
                    Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km. 2.5, Mixquiahuala de Juárez, Hidalgo, México.
                    C.P. 42700
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 shrink-0 text-[#1E90C1]" />
                  <span className="text-sm text-white/80">+52 (738) 725 1050</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 shrink-0 text-[#1E90C1]" />
                  <span className="text-sm text-white/80">itic@itsoeh.edu.mx</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
