"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import InfoCard from "@/components/InfoCard"
import { CircleDollarSignIcon, CircleDollarSignIconHandle } from "@/components/ui/circle-dollar-sign"
import { UsersIcon } from "@/components/ui/users"
import { EarthIcon } from "@/components/ui/earth"


export default function ScrapyWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
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
      title: "Falta de traza y datos para decisiones",
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

  const nextSlide = () => {
    const maxSlides = isMobile ? problemCards.length : problemCards.length - 2
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    const maxSlides = isMobile ? problemCards.length : problemCards.length - 2
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

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

            {/* Stats Card */}
            <div className="bg-gray-50 rounded-t-3xl rounded-b-none p-6 md:p-8 shadow-2xl max-w-lg backdrop-blur-sm">
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
                Ver Soluciones
              </a>
            </div>
          </div>
        </div>
      </div>

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
                description="Aumentamos el reciclaje, reducimos los residuos y fomentamos la economía circular"
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
                {/* Cards Container */}
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentSlide * (100 / (isMobile ? 1 : 3))}%)` 
                    }}
                  >
                    {problemCards.map((card, index) => (
                      <div 
                        key={card.id} 
                        className="w-full md:w-1/3 flex-shrink-0 px-3"
                      >
                        <div className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-80">
                          <div className="rounded-2xl overflow-hidden mb-4">
                            <Image
                              src={card.image || "/placeholder.svg"}
                              alt={card.title}
                              width={300}
                              height={200}
                              className="w-full h-40 object-cover"
                            />
                          </div>
                          <p className="text-gray-600 text-center leading-relaxed text-sm">{card.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: isMobile ? problemCards.length : problemCards.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-green-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Únete a la revolución tecnológica del reciclaje y genera un impacto positivo real
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
      <footer className="relative mt-20">
        {/* Floating Green Bar */}
        <div className="relative z-10 -mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-400 rounded-3xl p-6 lg:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src="/images/logo blanco scrapy.png"
                    alt="Scrapy Logo"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://apps.apple.com/ar/app/scrapy-reciclaje-de-materiales/id6467031017" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:-translate-y-1">
                    <Image
                      src="/images/appstore.svg"
                      alt="Descargar en App Store"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=scrapy.app" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:-translate-y-1">
                    <Image
                      src="/images/google-play.svg"
                      alt="Disponible en Google Play"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-[#b4b4b4] pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Mascot */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-64 h-64">
                  <Image
                    src="/images/scrapy footer.png"
                    alt="Scrapy Footer"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right - Contact Info */}
              <div className="text-left lg:text-left space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Contactanos</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Ser parte del reciclado moderno ahora está a un click de distancia ¡Únite a Scrapy!
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-6 mt-8">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/scrapy.app/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="https://www.linkedin.com/company/scrapy-app/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://api.whatsapp.com/send?phone=5491133019016&text=Hola!%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@scrapyapp.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right - Empty space for balance */}
              <div className="hidden lg:block"></div>
            </div>

            {/* Bottom Footer Links */}
            <div className="border-t border-gray-500 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300">
                <div className="flex flex-col md:flex-row gap-6 text-sm">
                  <a href="/terminos-y-condiciones" className="hover:text-white transition-colors duration-300">
                    TÉRMINOS Y CONDICIONES
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    PRIVACIDAD
                  </a>
                </div>
                <div className="text-sm">COPYRIGHT SCRAPY 2022</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
