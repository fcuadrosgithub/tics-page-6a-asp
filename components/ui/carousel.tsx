// app/page.tsx (o pages/index.tsx si usas Pages Router y TypeScript)

// Asegúrate de tener instaladas las dependencias de shadcn/ui si las usas, por ejemplo:
// npx shadcn-ui@latest add button card

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Importa los componentes de UI que estés utilizando.
// Asegúrate de que las rutas sean correctas para tu proyecto.
// Si estás usando shadcn/ui, estas son las rutas típicas desde la raíz de `app/` o `pages/`.
// Aquí asumo que tus componentes de UI están en 'components/ui/'.
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Define la interfaz (tipo) para una diapositiva del carrusel
interface Slide {
  id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  buttonText: string;
  buttonLink: string;
  bgColorClass: string;
}

// Datos de las diapositivas del carrusel
const slides: Slide[] = [ // Usamos la interfaz Slide aquí
  {
    id: 1,
    image: "/imagenes/racing.png", // Ruta de la imagen en la carpeta public/images
    tag: 'Anual',
    title: 'Racing Cup',
    description: 'Competicia de robótica y vehículos autónomos',
    fullDescription: 'La Racing Cup es una competencia anual donde los estudiantes diseñan, construyen y programan vehículos autónomos que compiten en diferentes categorías y pruebas de habilidad.',
    buttonText: 'Inscribirse',
    buttonLink: '#', // Reemplaza con el enlace real
    bgColorClass: 'bg-red-600' // Clase de Tailwind para el fondo de la etiqueta
  },
  {
    id: 2,
    image: '/imagenes/programing.png', // Ruta de la imagen en la carpeta public/images
    tag: 'Semestral',
    title: 'Challenge Programming',
    description: 'Maratón de programación competitiva',
    fullDescription: 'El Challenge Programming es un evento semestral donde equipos de estudiantes resuelven problemas algorítmicos complejos en un tiempo limitado, poniendo a prueba sus habilidades de programación y trabajo en equipo.',
    buttonText: 'Inscribirse',
    buttonLink: '#', // Reemplaza con el enlace real
    bgColorClass: 'bg-teal-500' // Clase de Tailwind para el fondo de la etiqueta
  },
  {
    id: 3,
    image: '/imagenes/intec.png', // Otro marcador de posición
    tag: 'Próximamente',
    title: 'InnovaTec NM',
    description: 'Innovación y desarrollo de soluciones',
    fullDescription: 'Participa en nuestro concurso para desarrollar soluciones creativas a desafíos tecnológicos actuales. ¡Forma tu equipo y demuestra tus habilidades!',
    buttonText: 'Regístrate',
    buttonLink: '#',
    bgColorClass: 'bg-blue-500'
  }
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Tipado para useState
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Tipado para useRef

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Función para ir a la siguiente diapositiva, optimizada con useCallback
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]); // Dependencia: la longitud del array de slides

  // Función para ir a la diapositiva anterior, optimizada con useCallback
  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]); // Dependencia: la longitud del array de slides

  // useEffect para el auto-avance del carrusel
  useEffect(() => {
    resetTimeout(); // Limpia cualquier temporizador existente
    timeoutRef.current = setTimeout(goToNextSlide, 3000); // Establece un nuevo temporizador de 3 segundos

    return () => {
      resetTimeout(); // Función de limpieza: se ejecuta al desmontar el componente o antes de que el efecto se vuelva a ejecutar
    };
  }, [currentIndex, goToNextSlide]); // Dependencias: currentIndex (para re-establecer el timer al cambiar de slide) y goToNextSlide (para estabilidad)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Puedes colocar aquí el resto de tu contenido de la página si lo tienes */}

      {/* Sección de Actividades y Competencias (Carrusel) */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Eventos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
              Actividades y Competencias
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl text-gray-600">
              Conoce los eventos más destacados que organizamos en la carrera de Ingeniería en TIC.
            </p>
          </div>

          {/* Carrusel Principal - Aumentando el ancho y el padding general */}
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg"> {/* Increased max-w to 6xl */}
            {/* Contenedor de las diapositivas */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                // Cada diapositiva - Aumentando padding y gap
                <div key={slide.id} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-10 p-8 bg-white"> {/* Increased gap and padding */}
                  {/* Sección de la Imagen - Aumentando la altura */}
                  <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-gray-200"> {/* Increased base height and md height */}
                    <img
                      src={slide.image} // Asegúrate de que esta ruta exista en tu carpeta public/images
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      // Fallback por si la imagen no se carga
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/placeholder.jpg'; }} // Tipado para el evento de error de imagen
                    />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${slide.bgColorClass}`}> {/* Adjusted tag font size if needed */}
                      {slide.tag}
                    </span>
                  </div>

                  {/* Sección del Contenido - Aumentando los tamaños de fuente */}
                  <div className="flex flex-col justify-center space-y-5"> {/* Increased space-y */}
                    <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">{slide.title}</h3> {/* Increased title font size */}
                    <p className="text-gray-700 text-xl md:text-2xl">{slide.description}</p> {/* Increased description font size */}
                    <p className="text-gray-600 text-base md:text-lg">{slide.fullDescription}</p> {/* Increased fullDescription font size */}
                    <a href={slide.buttonLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-600 hover:bg-blue-700 mt-4 px-6 py-3 text-lg"> {/* Increased button padding and font size */}
                        {slide.buttonText}
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Flechas de Navegación */}
            <button
              onClick={goToPrevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" /* Increased arrow padding */
              aria-label="Diapositiva anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> {/* Increased arrow icon size */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" /* Increased arrow padding */
              aria-label="Siguiente diapositiva"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> {/* Increased arrow icon size */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores de Puntos */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10"> {/* Increased space-x for dots */}
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'}`} /* Increased dot size */
                  aria-label={`Ir a la diapositiva ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}