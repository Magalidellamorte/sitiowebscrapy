"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import InfoCard from "@/components/InfoCard"
import { CircleDollarSignIcon, CircleDollarSignIconHandle } from "@/components/ui/circle-dollar-sign"
import { UsersIcon } from "@/components/ui/users"
import { EarthIcon } from "@/components/ui/earth"


export default function ScrapyWebsite() {
  const [isMobile, setIsMobile] = useState(false)

  // Datos temporales para las tarjetas del carousel (se actualizarán con las imágenes reales)
  const problemCards = [
    {
      id: 1,
      image: "/images/problematica2.png",
      title: "Bajos índices de separación y recolección diferenciada",
    },
    {
      id: 2,
      image: "/images/problematica3.png",
      title: "Pérdida de materiales reciclables que terminan en la basura",
    },
    {
      id: 3,
      image: "/images/problematica4.png",
      title: "Falta de trazabilidad y datos para decisiones",
    },
    {
      id: 4,
      image: "/images/gestion.png",
      title: "Gestión ineficiente de residuos urbanos",
    },
    {
      id: 5,
      image: "/images/problematica5.png",
      title: "Falta de coordinación entre actores del reciclaje",
    },
  ]

  // Carrusel infinito: triplicar slides y empezar desde el bloque del medio
  const N = problemCards.length
  const extendedCards = useMemo(() => [...problemCards, ...problemCards, ...problemCards], [problemCards])
  const [index, setIndex] = useState(N) // Empezar en el bloque del medio
  const [immediate, setImmediate] = useState(false)
  const VISIBLE = isMobile ? 1 : 3
  const slideWidthPct = 100 / VISIBLE

  const nextSlide = () => {
    setImmediate(false)
    setIndex((i) => i + 1)
  }

  const prevSlide = () => {
    setImmediate(false)
    setIndex((i) => i - 1)
  }

  const handleTransitionEnd = () => {
    // Reubicar sin transición al bloque del medio cuando se cruza un límite
    if (index >= 2 * N) {
      setImmediate(true)
      setIndex((i) => i - N)
    } else if (index < N) {
      setImmediate(true)
      setIndex((i) => i + N)
    }
  }

  // Volver a habilitar transición luego de un salto inmediato
  useEffect(() => {
    if (!immediate) return
    const id = requestAnimationFrame(() => setImmediate(false))
    return () => cancelAnimationFrame(id)
  }, [immediate])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial mobile state
    handleResize()

    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const dollarIconRef = useRef<CircleDollarSignIconHandle>(null);
  const usersIconRef = useRef<CircleDollarSignIconHandle>(null);
  const earthIconRef = useRef<CircleDollarSignIconHandle>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar currentPage="/" variant="home" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-32 md:pt-28 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/header home.mp4"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="max-w-4xl">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                Transformamos
              </span>
              <span className="block" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                materiales reciclables
              </span>
              <span className="block" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                en oportunidades
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
            >
              Creamos soluciones tecnológicas innovadoras
              <br />
              para el reciclaje urbano e industrial, generando un
              <br />
              impacto positivo en el medio ambiente y la
              <br />
              sociedad.
            </p>
          </div>
        </div>
      </div>

      {/* Métricas/CTA Card Section - full-bleed en mobile, alineada a la izquierda en desktop y sobrepuesta */}
  <section aria-labelledby="metrics-cta" className="pt-0 pb-0 -mt-14 md:py-0 md:-mt-40 relative z-30 overflow-x-clip">
        <h2 id="metrics-cta" className="sr-only">Indicadores y llamada a la acción</h2>
        {/* Full-bleed wrapper for mobile */}
  <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] md:w-auto md:left-0 md:right-0 md:mx-0 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-center md:justify-start relative z-50">
            <div className="bg-white rounded-3xl shadow-xl md:bg-gray-50 md:rounded-3xl md:shadow-2xl p-4 md:p-8 w-full md:max-w-2xl">
              {/* Stats Row */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Recycled Stats */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <img src="/images/reciclados.png" alt="Reciclados" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">+150.000 kg</div>
                    <div className="text-gray-600">Reciclados</div>
                  </div>
                </div>

                {/* Users Stats */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <img src="/images/registrados.png" alt="Usuarios registrados" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">+1000</div>
                    <div className="text-gray-600">Usuarios registrados</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="#soluciones-tecnologicas"
                className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg block text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('soluciones-tecnologicas')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Conocé como funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Impacto Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-4">
              <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">
                Triple
                <br />
                impacto
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Scrapy genera valor en
                <br />
                tres dimensiones
                <br />
                fundamentales para un
                <br />
                futuro sostenible
              </p>
            </div>

            {/* Right Content - Impact Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Economic Impact */}
              <InfoCard
                icon={<CircleDollarSignIcon ref={dollarIconRef} />}
                title="Económico"
                description="Reducimos los costos operativos y generamos nuevas oportunidades de negocio"
                onHoverStart={() => dollarIconRef.current?.startAnimation()}
                onHoverEnd={() => dollarIconRef.current?.stopAnimation()}
             />

              {/* Social Impact */}
              <InfoCard
                icon={<UsersIcon ref={usersIconRef} />}
                title="Social"
                description="Fortalecemos a las cooperativas al fomentar el empleo verde"
                onHoverStart={() => usersIconRef.current?.startAnimation()}
                onHoverEnd={() => usersIconRef.current?.stopAnimation()}
              />

              {/* Environmental Impact */}
              <InfoCard
                icon={<EarthIcon ref={earthIconRef} />}
                title="Ambiental"
                description="Aumentamos el reciclaje, reducimos los residuos y promovemos la economía circular"
                onHoverStart={() => earthIconRef.current?.startAnimation()}
                onHoverEnd={() => earthIconRef.current?.stopAnimation()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="soluciones-tecnologicas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nuestras Soluciones Tecnológicas</h2>

          {/* Green Decorative Line */}
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-4xl mx-auto">
            Desarrollamos herramientas especializadas
            <br />
            para cada segmento del reciclaje
          </p>
        </div>
      </section>

      {/* Reciclaje Urbano Section */}
      <section className="py-20" style={{ backgroundColor: 'rgba(58, 184, 111, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Reciclaje Urbano</h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Solución digital para que municipios y cooperativas optimicen la gestión de reciclables y promuevan el
                reciclaje ciudadano.
              </p>
              <a
                href="/reciclaje-urbano"
                className="inline-block bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/reciclaje-urbano.jpeg"
                  alt="Reciclaje Urbano - Camiones de reciclaje en la ciudad"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reciclaje Industrial Section */}
      <section className="py-20" style={{ backgroundColor: 'rgba(58, 184, 111, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Image */}
            <div className="relative lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/reciclaje industrial.jpeg"
                  alt="Reciclaje Industrial - Trabajador en planta de reciclaje industrial"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-6 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Reciclaje Industrial</h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Plataforma especializada para industrias que necesitan comprar o vender materiales reciclables
                industriales.
              </p>
              <a
                href="/reciclaje-industrial"
                className="inline-block bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Casos de exito</h2>
            <p className="text-lg md:text-xl text-gray-500">
              Scrapy ya está transformando el reciclaje en estas localidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card: Pinamar */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/reciclaje-urbano.jpeg"
                  alt="Pinamar - Implementación de Scrapy Urbano"
                  width={800}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                  Pinamar
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pinamar</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Implementación exitosa de Scrapy Urbano en colaboración con cooperativas locales, mejorando la recolección diferenciada en la ciudad balnearia.
                </p>
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-between w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors mt-auto"
                >
                  Conocer más
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                    <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h12.19l-4.22-4.22a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.22-4.22H5.25A.75.75 0 014.5 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card: La Plata */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/reciclaje industrial.jpeg"
                  alt="La Plata - Proyecto piloto con municipio"
                  width={800}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                  La Plata
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">La Plata</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Proyecto piloto en desarrollo con el municipio de La Plata para optimizar la gestión de residuos reciclables urbanos.
                </p>
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-between w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors mt-auto"
                >
                  Conocer más
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                    <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h12.19l-4.22-4.22a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.22-4.22H5.25A.75.75 0 014.5 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Problemáticas Section */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/problema-ambiental.webp')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title - Positioned on the right */}
          <div className="flex justify-end mb-16">
            <h2
              className="text-4xl md:text-6xl font-bold text-white text-right"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              ¿Qué problemática
              <br />
              abordamos?
            </h2>
          </div>

          {/* White Container Block */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            {/* Two Column Layout inside white block */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
              {/* Left Column - Subtitle */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold text-green-400 leading-tight">
                  El reciclaje enfrenta hoy desafíos urgentes:
                </h3>
              </div>

              {/* Right Column - Carousel */}
              <div className="lg:col-span-3 relative">
                {/* Cards Container (viewport) - más padding para sombras más largas */}
                <div className="overflow-hidden rounded-2xl py-4 px-3">
                  <div
                    className="flex will-change-transform"
                    style={{
                      transform: `translateX(-${index * slideWidthPct}%)`,
                      transition: immediate ? "none" : "transform 300ms ease-in-out",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                  >
                    {extendedCards.map((card, i) => (
                      <div key={`${card.id}-${i}`} className="w-full md:w-1/3 flex-shrink-0 px-3">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-80 mx-2">
                          <div className="h-48 overflow-hidden">
                            <Image
                              src={card.image || "/placeholder.svg"}
                              alt={card.title}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <p className="text-gray-700 text-center leading-relaxed text-sm font-medium">{card.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  aria-label="Anterior"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  aria-label="Siguiente"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Indicators */}
            {(() => {
              const maxStart = N - VISIBLE
              const normalizedStart = ((index - N) % N + N) % N
              const activeDot = Math.min(normalizedStart, maxStart)
              const dotsCount = isMobile ? N : Math.max(1, N - 2)
              return (
                <div className="flex justify-center mt-12 space-x-2">
                  {Array.from({ length: dotsCount }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(N + i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeDot === i ? "bg-green-400 scale-110" : "bg-gray-300"
                      }`}
                      aria-label={`Ir al slide ${i + 1}`}
                    />
                  ))}
                </div>
              )
            })()}
          </div>
        </div>
      </section>

      {/* Misión y Valores Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Nuestra Misión */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Nuestra misión</h2>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                    Transformar la forma en que se gestiona el reciclaje, utilizando la tecnología para crear un sistema
                    más eficiente, transparente y beneficioso para todos los involucrados.
                  </p>

                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                    Creemos que la economía circular es el futuro, y estamos comprometidos a facilitar la transición
                    hacia un modelo más sostenible mediante soluciones tecnológicas innovadoras.
                  </p>
                </div>
              </div>

              {/* Nuestros Valores */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Nuestros valores</h2>

                <div className="space-y-8">
                  {/* Sostenibilidad */}
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-500 mb-3 group-hover:text-green-600 transition-colors duration-300">
                        Sostenibilidad
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        Promovemos prácticas sostenibles buscando siempre el menor impacto ambiental posible.
                      </p>
                    </div>
                  </div>

                  {/* Innovación */}
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-500 mb-3 group-hover:text-green-600 transition-colors duration-300">
                        Innovación
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        Buscamos constantemente nuevas formas de mejorar el proceso de reciclaje mediante la tecnología.
                      </p>
                    </div>
                  </div>

                  {/* Colaboración */}
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-500 mb-3 group-hover:text-green-600 transition-colors duration-300">
                        Colaboración
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        Creemos en el poder de la colaboración entre todos los actores de la cadena de reciclaje.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section
        className="py-32 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/transformacion.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          {/* Main Title */}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            ¿Listo para
            <br />
            transformar el
            <br />
            reciclaje?
          </h2>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
          >
            Unite a la revolución tecnológica del reciclaje y generá un impacto positivo real
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <a
              href="/reciclaje-urbano"
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg min-w-[200px]"
            >
              Solución Urbana
            </a>

            <a
              href="/reciclaje-industrial"
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg min-w-[200px]"
            >
              Solución Industrial
            </a>

            <a
              href="/contacto"
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg min-w-[200px]"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
