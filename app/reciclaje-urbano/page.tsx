"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import BenefitsCarousel from "@/components/BenefitsCarousel"
import { LocationChecker } from "@/components/LocationChecker"

export default function ReciclajeUrbano() {
  const [isMobile, setIsMobile] = useState(false)

  const benefitCards = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Entrega simple y segura",
      description: "A través de la app, los generadores pueden solicitar el retiro de sus reciclables en un solo clic, confiando en agentes responsables que garantizan su correcta trazabilidad y reciclado."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Retiros automáticos programados",
      description: "Para generadores frecuentes (edificios, comercios o instituciones), la app permite programar retiros semanales fijos. Así, cuando el contenedor se llena, no hace falta cargarlo manualmente: la recolección ya está agendada."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.839-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.589-1.81h3.46a1 1 0 00.952-.69l1.07-3.292z" />
        </svg>
      ),
      title: "Recompensas por reciclar",
      description: "Cada entrega de reciclables suma Scrapy Points que se pueden canjear por descuentos en comercios locales, productos sustentables o beneficios exclusivos dentro de la plataforma."
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Trazabilidad completa",
      description: "Los generadores pueden seguir el recorrido de sus reciclables desde la recolección hasta su procesamiento final, conociendo el impacto real de su contribución al medio ambiente."
    }
  ]

  const coopCards = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Nuevos generadores",
      description: "Los generadores —comercios, hogares, instituciones— pueden publicar sus materiales reciclables directamente en la app para que sean retirados por la cooperativa o el municipio."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.839-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.589-1.81h3.46a1 1 0 00.952-.69l1.07-3.292z" />
        </svg>
      ),
      title: "Sistema de recompensas",
      description: "Los generadores son premiados por entregar reciclables, lo que estimula la participación y fortalece la red de recolección."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07"
          />
        </svg>
      ),
      title: "Panel administrativo",
      description: "La cooperativa o municipio puede aceptar/rechazar viajes, asignar recolectores, configurar horarios y ver métricas del servicio desde un solo lugar."
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: "Datos",
      description: "Gracias al acceso a estadísticas y reportes en tiempo real, se pueden tomar decisiones estratégicas para mejorar la eficiencia operativa y el impacto ambiental."
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: "Rutas optimizadas",
      description: "La app genera rutas inteligentes y eficientes para los recolectores, reduciendo tiempos, costos logísticos y aumentando la productividad."
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: "Ley de basura cero",
      description: "Scrapy brinda herramientas para monitorear y reportar los avances en reciclaje, facilitando la rendición de cuentas ante organismos provinciales y nacionales."
    },
    {
      id: 7,
      icon: (
        <span className="text-white text-lg">😊</span>
      ),
      title: "Imagen institucional",
      description: "Acompañamos a los municipios a demostrar su compromiso con el reciclaje, fortaleciendo su posicionamiento en sustentabilidad y generando mayor adhesión ciudadana."
    }
  ]

  const recolectorCards = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Viajes organizados",
      description: "Cada recolector recibe sus recorridos directamente desde la app, sin necesidad de coordinación manual."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      title: "Rutas óptimas",
      description: "La app genera recorridos eficientes para reducir tiempos de traslado y aumentar la productividad diaria."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
          />
        </svg>
      ),
      title: "Navegación integrada",
      description: "Con un solo clic, el recolector puede iniciar la navegación hacia cada punto de retiro, accediendo a la mejor ruta disponible en tiempo real."
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.042v2.652m-3.176-.97a1.121 1.121 0 000 2.384c.372 1.113 1.651 2.111 3.176 2.111s2.804-.998 3.176-2.111a1.121 1.121 0 000-2.384c-.372-1.113-1.651-2.111-3.176-2.111s-2.804.998-3.176 2.111z"
          />
        </svg>
      ),
      title: "Seguimiento de rendimiento",
      description: "Los recolectores pueden visualizar la cantidad de kilos recolectados en cada jornada, accediendo a métricas claras que reflejan su trabajo."
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ),
      title: "Rol del recolector",
      description: "Al profesionalizar su tarea con herramientas digitales, buscamos dar mayor visibilidad, reconocimiento y orden a un trabajo esencial para la economía circular."
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentPage="/reciclaje-urbano" variant="reciclaje" />

      <section className="bg-green-50 py-20 pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/banner urbano.png"
              alt="App en smartphone"
              width={400}
              height={600}
              className="h-96 lg:h-[500px] w-auto object-contain rounded-3xl"
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 leading-tight">
              Herramienta para el
              <br />
              Reciclaje Urbano
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl">
              Creamos una aplicación móvil para fomentar y agilizar la recolección de residuos reciclables que generan
              hogares, comercios e instituciones.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/images/scrapy-points.svg"
                  alt="Scrapy Points"
                  width={32}
                  height={32}
                  className="w-20 h-20"
                />
              </div>
              <a 
                href="https://beneficios.scrapyapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full mb-4 transition text-center"
              >
                Recompensas
              </a>
              <p className="text-gray-500 text-center text-sm">Scrapy Points canjeables por beneficios y descuentos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">
          <div className="space-y-8 order-2 sm:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500">¿Tu Localidad ya forma parte?</h2>

            <div className="max-w-2xl">
              <LocationChecker />
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl">
              Verificá si tu ciudad ya cuenta con nuestro servicio y empezá a reciclar en tu comercio, hogar o
              institución.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end order-1 sm:order-2">
            <Image
              src="/images/hero-image-2.png"
              alt="Persona usando el móvil"
              width={400}
              height={600}
              className="h-96 lg:h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50 relative overflow-hidden">
        <Image
          src="/images/ICONOS1.png"
          alt=""
          width={60}
          height={60}
          className="absolute top-8 left-8 w-12 h-12 opacity-80"
        />
        <Image
          src="/images/ICONOS2.png"
          alt=""
          width={80}
          height={80}
          className="absolute bottom-8 right-8 w-16 h-16 opacity-80"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-8">¿Cómo funciona la app?</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto">
              Una solución <span className="text-green-500 font-semibold">simple, rápida</span> y{" "}
              <span className="text-green-500 font-semibold">sostenible</span> para que usuarios, recolectores y
              administradores gestionen los reciclables desde un solo lugar.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-16">
            {[
              {
                title: "Descargá la app",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                desc: "Disponible en Android y iOS. Creá tu cuenta en simples pasos.",
              },
              {
                title: "Subí tus reciclables",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6m-.9 7l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                ),
                desc: "Verificá tu dirección, subí foto del material y elegí día y hora.",
              },
              {
                title: "Verificación",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                desc: "El administrador aprueba o rechaza las solicitudes.",
              },
              {
                title: "Ruta inteligente",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                desc: "El recolector recibe una ruta optimizada para reducir emisiones.",
              },
              {
                title: "Sumá puntos",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
                desc: "Ganá Scrapy Points para canjearlos por beneficios.",
              },
            ].map(({ title, icon, desc }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-green-500 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="/contacto#contact-form" 
              className="min-w-[260px] bg-white text-green-500 border-2 border-green-500 rounded-full py-4 px-8 font-semibold hover:bg-gray-50 transition hover:-translate-y-1 shadow text-center inline-block"
            >
              Quiero sumar mi municipio / Cooperativa
            </a>
            <a
              href="https://beneficios.scrapyapp.com/user/coupons#offer-benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[220px] bg-green-500 hover:bg-green-600 text-white rounded-full py-4 px-8 font-semibold transition hover:-translate-y-1 shadow text-center inline-block scroll-mt-10"
            >
              Quiero ofrecer beneficios
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-cover bg-center bg-black-alpha-50" style={{ backgroundImage: "url('/images/banner reciclaje urbano.jpeg')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-shadow-dark">
              ¿Tenés dudas sobre cómo entregar tus materiales?
            </h2>

            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl text-shadow-light">
              Descargá nuestra guía de reciclaje. Te mostramos cómo preparar el material.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar guía de reciclaje
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 leading-tight">
              Beneficios para cada sector
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                  GENERADORES
                </span>
                <div className="flex-1 h-0.5 bg-green-500"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Scrapy App Urbano permite que cualquier generador de reciclables —ya sea un hogar, comercio o
                institución— pueda formar parte activa de una comunidad que recicla de forma simple, trazable y con
                beneficios concretos.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-green-500">¿Quiénes pueden ser generadores?</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600 font-medium">Hogares</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600 font-medium">Comercios</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600 font-medium">Instituciones</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/generador.png"
                  alt="Personas de diferentes sectores participando en reciclaje urbano"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsCarousel
        cards={benefitCards}
        title="Generadores"
        subtitle="Descubrí cómo Scrapy App Urbano facilita el reciclaje para hogares, comercios e instituciones."
        isMobile={isMobile}
      />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                  COOPERATIVAS Y MUNICIPIOS
                </span>
                <div className="flex-1 h-0.5 bg-green-500"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                A través de la aplicación, cooperativas y municipios pueden mejorar su operación diaria, ampliar su red
                de generadores y ofrecer un servicio más eficiente, transparente y trazable.
              </p>

              <div className="bg-green-400 rounded-3xl p-8 text-white">
                <p className="text-lg md:text-xl leading-relaxed">
                  Scrapy App Urbano convierte la gestión del reciclaje en un proceso moderno, participativo y
                  sustentable, generando valor para todas las partes involucradas.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/cooperativa.png"
                  alt="Cooperativas y municipios trabajando con la app"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsCarousel
        cards={coopCards}
        title="Cooperativas y Municipios"
        subtitle="Optimizá la gestión de reciclaje en tu comunidad con nuestra solución tecnológica."
        isMobile={isMobile}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                  RECOLECTORES
                </span>
                <div className="flex-1 h-0.5 bg-green-500"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                Scrapy App Urbano brinda a los recolectores una herramienta tecnológica que simplifica y dignifica su
                labor diaria, optimizando tiempos y mejorando su experiencia de trabajo.
              </p>

              <div className="bg-green-400 rounded-3xl p-8 text-white">
                <p className="text-lg md:text-xl leading-relaxed">
                  Scrapy App Urbano transforma el día a día del recolector, haciendo su tarea más ágil, segura y
                  valorada.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/recolector.png"
                  alt="Recolector usando la app Scrapy en su smartphone"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsCarousel
        cards={recolectorCards}
        title="Recolectores"
        subtitle="Simplificá tu trabajo diario y maximizá tu eficiencia con nuestra aplicación."
        isMobile={isMobile}
      />

      <Footer />
    </div>
  )
}
