"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-itic.png" alt="Logo ITIC" width={50} height={50} className="h-10 w-auto" />
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
              <Button className="bg-[#9D0207] hover:bg-[#9D0207]/80">Solicitar Información</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#192d7a]">
                Conoce Más
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md">
            <Image
              src="/placeholder.svg?height=400&width=400"
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
                <Button
                  variant="outline"
                  className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#1E90C1] border-[#1E90C1] hover:bg-[#1E90C1] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#9D0207] border-[#9D0207] hover:bg-[#9D0207] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#1E90C1] border-[#1E90C1] hover:bg-[#1E90C1] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#9D0207] border-[#9D0207] hover:bg-[#9D0207] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1E90C1]">Ingeniería Alimentarias</CardTitle>
                <CardDescription>Procesamiento y conservación de alimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Desarrolla procesos y productos alimentarios innovadores, aplicando tecnologías que garanticen la
                  calidad y seguridad alimentaria.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full text-[#1E90C1] border-[#1E90C1] hover:bg-[#1E90C1] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
                <Button
                  variant="outline"
                  className="w-full text-[#9D0207] border-[#9D0207] hover:bg-[#9D0207] hover:text-white"
                >
                  Ver Plan de Estudios
                </Button>
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
              <Button className="bg-[#192d7a] hover:bg-[#1E90C1]">Descargar Convocatoria Completa</Button>
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
                <Link href="/becas/institucionales" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                  >
                    Más Información
                  </Button>
                </Link>
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
                <Link href="/becas/estatales" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-[#1E90C1] border-[#1E90C1] hover:bg-[#1E90C1] hover:text-white"
                  >
                    Más Información
                  </Button>
                </Link>
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
                <Link href="/becas/federales" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-[#9D0207] border-[#9D0207] hover:bg-[#9D0207] hover:text-white"
                  >
                    Más Información
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section id="eventos" className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#1E90C1]/10 px-3 py-1 text-sm text-[#1E90C1]">Eventos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              Actividades y Competencias
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce los eventos más destacados que organizamos en la carrera de Ingeniería en TIC.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {[1, 2, 3, 4].map((_, index) => (
                      <CarouselItem key={index} className="relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Racing Cup ${index + 1}`}
                          alt={`Racing Cup imagen ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 z-10" />
                  <CarouselNext className="absolute right-2 z-10" />
                </Carousel>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>
                <div className="absolute bottom-4 left-4 text-white z-[2]">
                  <span className="bg-[#9D0207] px-2 py-1 text-xs rounded">Anual</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#192d7a]">Racing Cup</CardTitle>
                <CardDescription>Competencia de robótica y vehículos autónomos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La Racing Cup es una competencia anual donde los estudiantes diseñan, construyen y programan vehículos
                  autónomos que compiten en diferentes categorías y pruebas de habilidad.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                >
                  Ver Galería
                </Button>
                <Button className="bg-[#192d7a] hover:bg-[#1E90C1]">Inscribirse</Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {[1, 2, 3, 4].map((_, index) => (
                      <CarouselItem key={index} className="relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Challenge Programming ${index + 1}`}
                          alt={`Challenge Programming imagen ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 z-10" />
                  <CarouselNext className="absolute right-2 z-10" />
                </Carousel>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>
                <div className="absolute bottom-4 left-4 text-white z-[2]">
                  <span className="bg-[#1E90C1] px-2 py-1 text-xs rounded">Semestral</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#192d7a]">Challenge Programming</CardTitle>
                <CardDescription>Maratón de programación competitiva</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  El Challenge Programming es un evento semestral donde equipos de estudiantes resuelven problemas
                  algorítmicos complejos en un tiempo limitado, poniendo a prueba sus habilidades de programación y
                  trabajo en equipo.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                >
                  Ver Galería
                </Button>
                <Button className="bg-[#192d7a] hover:bg-[#1E90C1]">Inscribirse</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#192d7a] text-center mb-6">Próximos Eventos</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#192d7a] text-white">
                    <span className="font-bold">15</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Mayo</h4>
                    <p className="text-sm text-muted-foreground">2025</p>
                  </div>
                </div>
                <h4 className="font-bold text-[#192d7a]">Hackathon ITIC 2025</h4>
                <p className="text-sm text-muted-foreground mb-4">Desarrollo de soluciones tecnológicas en 48 horas</p>
                <Button
                  variant="outline"
                  className="w-full text-[#192d7a] border-[#192d7a] hover:bg-[#192d7a] hover:text-white"
                >
                  Más Información
                </Button>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                    <span className="font-bold">22</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Junio</h4>
                    <p className="text-sm text-muted-foreground">2025</p>
                  </div>
                </div>
                <h4 className="font-bold text-[#1E90C1]">Feria de Proyectos</h4>
                <p className="text-sm text-muted-foreground mb-4">Exposición de proyectos finales de los estudiantes</p>
                <Button
                  variant="outline"
                  className="w-full text-[#1E90C1] border-[#1E90C1] hover:bg-[#1E90C1] hover:text-white"
                >
                  Más Información
                </Button>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9D0207] text-white">
                    <span className="font-bold">10</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Julio</h4>
                    <p className="text-sm text-muted-foreground">2025</p>
                  </div>
                </div>
                <h4 className="font-bold text-[#9D0207]">Congreso de Tecnología</h4>
                <p className="text-sm text-muted-foreground mb-4">Conferencias y talleres con expertos del sector</p>
                <Button
                  variant="outline"
                  className="w-full text-[#9D0207] border-[#9D0207] hover:bg-[#9D0207] hover:text-white"
                >
                  Más Información
                </Button>
              </div>
            </div>
          </div>
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
                      <CardTitle className="text-[#192d7a]">Primer Lugar Nacional</CardTitle>
                      <CardDescription>Concurso de Programación ANIEI 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Equipo ganador"
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Equipo CodeMasters</h4>
                          <p className="text-sm text-muted-foreground">5° Semestre</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        El equipo desarrolló un algoritmo de optimización que superó a más de 50 equipos de todo el
                        país.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1E90C1]">Reconocimiento Internacional</CardTitle>
                      <CardDescription>Hackathon NASA Space Apps 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Proyecto NASA"
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Proyecto EcoSat</h4>
                          <p className="text-sm text-muted-foreground">7° Semestre</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Desarrollo de una aplicación para monitoreo ambiental utilizando datos satelitales de la NASA.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#9D0207]">Beca Internacional</CardTitle>
                      <CardDescription>Programa de Intercambio Académico</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Estudiante becado"
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">Ana García Mendoza</h4>
                          <p className="text-sm text-muted-foreground">8° Semestre</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Seleccionada para realizar una estancia académica en el Instituto Tecnológico de Massachusetts
                        (MIT).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="egresados" className="p-4 border rounded-lg mt-4">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Egresado exitoso"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#192d7a]">Carlos Ramírez Soto</h3>
                      <p className="text-[#1E90C1] font-medium">Generación 2018-2022</p>
                      <p className="text-muted-foreground mt-2">
                        "Mi formación en el ITSOEH me dio las bases para desarrollarme profesionalmente. Actualmente
                        trabajo como Ingeniero de Software Senior en Microsoft, donde lidero proyectos de inteligencia
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
                      src="/placeholder.svg?height=150&width=150"
                      alt="Egresada exitosa"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#192d7a]">Laura Méndez Juárez</h3>
                      <p className="text-[#1E90C1] font-medium">Generación 2016-2020</p>
                      <p className="text-muted-foreground mt-2">
                        "Gracias a los proyectos prácticos y competencias en las que participé durante mi carrera, pude
                        desarrollar habilidades que me permitieron emprender mi propia startup de desarrollo de
                        software. Hoy contamos con más de 30 empleados y clientes en 5 países."
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
                      src="/placeholder.svg?height=150&width=150"
                      alt="Egresado exitoso"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#192d7a]">Miguel Ángel Ortiz Vega</h3>
                      <p className="text-[#1E90C1] font-medium">Generación 2017-2021</p>
                      <p className="text-muted-foreground mt-2">
                        "Los conocimientos adquiridos en ciberseguridad durante mi carrera me abrieron las puertas para
                        trabajar en el Centro Nacional de Inteligencia Cibernética, donde actualmente dirijo el equipo
                        de respuesta a incidentes de seguridad."
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="bg-[#192d7a]/10 text-[#192d7a] px-2 py-1 text-xs rounded">Ciberseguridad</span>
                        <span className="bg-[#1E90C1]/10 text-[#1E90C1] px-2 py-1 text-xs rounded">Sector Público</span>
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
      <section id="contacto" className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-block rounded-lg bg-[#192d7a]/10 px-3 py-1 text-sm text-[#192d7a]">Contacto</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#192d7a]">
              ¿Tienes Preguntas?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Estamos aquí para ayudarte. Contáctanos para obtener más información sobre la carrera.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#192d7a]">Dirección</h3>
                  <p className="text-muted-foreground">
                    Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km. 2.5, Mixquiahuala de Juárez, Hidalgo, México.
                    C.P. 42700
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E90C1] text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E90C1]">Teléfono</h3>
                  <p className="text-muted-foreground">+52 (738) 725 1050</p>
                  <p className="text-muted-foreground">Ext. 1234 (Coordinación de Ingeniería en TIC)</p>
                </div>
              </div>
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
              <div className="pt-6">
                <h3 className="font-bold text-[#192d7a] mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white hover:bg-[#1E90C1] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white hover:bg-[#1E90C1] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192d7a] text-white hover:bg-[#1E90C1] transition-colors"
                  >
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
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#192d7a] mb-4">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      placeholder="Tu nombre"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellidos" className="text-sm font-medium">
                      Apellidos
                    </label>
                    <input
                      id="apellidos"
                      placeholder="Tus apellidos"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="Tu número telefónico"
                    maxLength={10}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "")
                    }}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Solo se permiten números (máximo 10 dígitos)</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="informacion">Información sobre la carrera</option>
                    <option value="admision">Proceso de admisión</option>
                    <option value="becas">Información sobre becas</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#192d7a] hover:bg-[#1E90C1]">Enviar Mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
