"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import WhatsAppLink from "@/components/WhatsAppLink"

export default function ReciclajeIndustrial() {
  const [isMobile, setIsMobile] = useState(false)

  const userTypes = [
    {
      id: "industrias",
      label: "INDUSTRIAS",
      description: "Empresas que necesitan materias primas recicladas para sus procesos productivos",
      image: "/images/industria.png",
      alt: "Línea de producción industrial con botellas verdes",
    },
    {
      id: "recicladoras",
      label: "RECICLADORAS",
      description: "Empresas especializadas en el procesamiento y clasificación de materiales reciclables",
      image: "/images/recicladoras.jpg",
      alt: "Maquinaria industrial procesando materiales reciclables",
    },
    {
      id: "pymes",
      label: "PYMES",
      description: "Pequeñas y medianas empresas que generan o necesitan materiales reciclables",
      image: "/images/pymes.png",
      alt: "Oficina moderna con equipo de trabajo",
    },
    {
      id: "emprendedores",
      label: "EMPRENDEDORES",
      description: "Nuevos actores del mercado que buscan oportunidades en la economía circular",
      image: "/images/emprendedores.png",
      alt: "Materiales reciclables en caja de cartón",
    },
  ]

  // Carrusel circular infinito
  const N_USER = userTypes.length
  const extendedUserTypes = useMemo(() => [...userTypes, ...userTypes, ...userTypes], [userTypes])
  const [userIndex, setUserIndex] = useState(N_USER)
  const [userImmediate, setUserImmediate] = useState(false)
  const VISIBLE_CARDS = 1 // Siempre mostrar 1 tarjeta completa
  const slideWidthPct = 100 / VISIBLE_CARDS

  const nextUserSlide = () => {
    setUserImmediate(false)
    setUserIndex((i) => i + 1)
  }

  const prevUserSlide = () => {
    setUserImmediate(false)
    setUserIndex((i) => i - 1)
  }

  const handleUserTransitionEnd = () => {
    if (userIndex >= 2 * N_USER) {
      setUserImmediate(true)
      setUserIndex((i) => i - N_USER)
    } else if (userIndex < N_USER) {
      setUserImmediate(true)
      setUserIndex((i) => i + N_USER)
    }
  }

  // Volver a habilitar transición luego de un salto inmediato
  useEffect(() => {
    if (!userImmediate) return
    const id = requestAnimationFrame(() => setUserImmediate(false))
    return () => cancelAnimationFrame(id)
  }, [userImmediate])

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="/reciclaje-industrial" variant="reciclaje" />

      {/* Hero Section - Full height with hero image starting from the top */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/portada1.png')`,
          paddingTop: '0px', // Remove default padding
          marginTop: '0px'   // Remove default margin
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Title - Adjusted for navbar */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-8 leading-tight mt-28 md:mt-32">
              Marketplace para el
              <br />
              Reciclaje Industrial
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto md:text-lg">
              Scrapy Industrial es una plataforma digital que conecta a industrias,
              <br />
              recicladoras, pymes y emprendedores con oportunidades de compra
              <br />y venta de materiales reciclables ya clasificados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://industrial.scrapyapp.com/inicio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-500 border-2 border-green-500 hover:bg-gray-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg min-w-[200px] inline-block text-center"
              >
                Visitar marketplace
              </a>

              <WhatsAppLink 
                phone="5491133019016"
                text="¡Hola! Quiero recibir información para industrias ♻️ ☺️"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg min-w-[200px] text-center inline-block"
              >
                Contactar
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Optimizamos tus transacciones Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-8 leading-tight">
              Optimizamos tus transacciones de reciclables.
            </h2>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-4xl mx-auto">
              Te facilitamos la compra y venta de metales y plásticos reciclables a precios competitivos, maximizando
              beneficios en un entorno seguro, con el respaldo de nuestro equipo experto en la industria y el reciclaje.
              <br />
              Solo decinos qué necesitás comprar o vender, nosotros nos encargamos de todo: desde encontrar las mejores
              ofertas hasta gestionar la logística puerta a puerta.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Centralización de Oportunidades */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-500">
                <Image src="/icons/warehouse.svg" alt="Centralización de Oportunidades" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Centralización de
                <br />
                Oportunidades
              </h3>
              <p className="text-gray-500 leading-relaxed ">
              Accedé a una amplia variedad de materiales reciclables en un solo lugar, facilitando la búsqueda y selección para tu empresa.
              </p>
            </div>

            {/* Verificación de usuarios */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-500">
                <Image src="/icons/verified-user.svg" alt="Verificación de usuarios" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Verificación de
                <br />
                usuarios
              </h3>
              <p className="text-gray-500 leading-relaxed ">
              Garantizamos transacciones seguras con un proceso de verificación que asegura empresas legítimas y confiables.
              </p>
            </div>

            {/* Mediación en las ofertas */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-500">
                <Image src="/icons/mediating.svg" alt="Mediación en las ofertas" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Mediación en las
                <br />
                ofertas
              </h3>
              <p className="text-gray-500 leading-relaxed">
              Facilitamos negociaciones justas entre compradores y vendedores para lograr el mejor acuerdo.
              </p>
            </div>

            {/* Facilidades Logísticas */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-500">
                <Image src="/icons/truck.svg" alt="Facilidades Logísticas" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Facilidades
                <br />
                Logísticas
              </h3>
              <p className="text-gray-500 leading-relaxed ">
              Ofrecemos logística con trazabilidad puerta a puerta para que no te preocupes por el transporte.
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              Una sola app para ambos perfiles de usuarios,
              <br />
              lo que te{" "}
              <span className="text-green-500 font-semibold">permite ser vendedor y comprador simultáneamente.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Para quién es Scrapy Industrial - Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-8 leading-tight">
              ¿Para quién es Scrapy Industrial?
            </h2>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto">
              Nuestra plataforma conecta diferentes tipos de empresas en el ecosistema del reciclaje
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="carousel-container">
              <div
                className="flex will-change-transform"
                style={{
                  transform: `translateX(-${userIndex * slideWidthPct}%)`,
                  transition: userImmediate ? "none" : "transform 300ms ease-in-out",
                }}
                onTransitionEnd={handleUserTransitionEnd}
              >
                {extendedUserTypes.map((userType, i) => (
                  <div key={`${userType.id}-${i}`} className="w-full flex-shrink-0 px-3">
                    <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mx-2">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                          <div className="flex items-center gap-4">
                            <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                              {userType.label}
                            </span>
                            <div className="flex-1 h-0.5 bg-green-500"></div>
                          </div>

                          <div className="space-y-4">
                            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                              {userType.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="flex justify-center lg:justify-end">
                          <div className="relative">
                            <Image
                              src={userType.image || "/placeholder.svg"}
                              alt={userType.alt}
                              width={600}
                              height={400}
                              className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevUserSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 nav-button z-10"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextUserSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 nav-button z-10"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          {(() => {
            const normalizedStart = ((userIndex - N_USER) % N_USER + N_USER) % N_USER
            const activeDot = normalizedStart
            return (
              <div className="flex justify-center mt-12 space-x-2">
                {Array.from({ length: N_USER }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setUserIndex(N_USER + i)}
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
      </section>

      {/* Te interesa VENDER Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Phone Mockup */}
            <div className="flex lg:justify-start">
              <div className="relative">
                <Image
                  src="/images/reciclaje-industrial.webp"
                  alt="App Scrapy - Sección Vender"
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-green-500 leading-tight">
                Te interesa <span className="text-green-500">VENDER</span>
              </h2>

              <h3 className="text-2xl md:text-3xl text-gray-400 font-medium">Publicá tus materiales para reciclar</h3>

              <p className="text-lg text-gray-500 leading-relaxed">
                Si sos una empresa industrial o recicladora con reciclables de metal o plástico para vender, publicalos
                en nuestra app o contactate con nosotros directamente. Nuestros asesores te enviarán ofertas disponibles para
                tu material rápidamente, ¡luego te facilitaremos todo el proceso!
              </p>

              <a 
                href="https://api.whatsapp.com/send?phone=5491133019016&text=%C2%A1Hola!%20Quiero%20recibir%20informaci%C3%B3n%20para%20vender%20materiales%20reciclables%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg text-center inline-block"
              >
                Contactate con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Te interesa COMPRAR Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right - Phone Mockup */}
            <div className="flex lg:justify-end row-start-1 lg:col-start-2">
              <div className="relative">
                <Image
                  src="/images/bici.png"
                  alt="App Scrapy - Sección Comprar"
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Left - Content */}
            <div className="space-y-8 row-start-2 lg:col-start-1 lg:row-start-1">
              <h2 className="text-4xl md:text-5xl font-bold text-green-500 leading-tight">
                Te interesa <span className="text-green-500">COMPRAR</span>
              </h2>

              <h3 className="text-2xl md:text-3xl text-gray-400 font-medium">Ofertá por materiales reciclables</h3>

              <p className="text-lg text-gray-500 leading-relaxed">
                Si te interesa comprar reciclables de metal o plástico, accedé a la sección de comprar dentro de la app. Vas a encontrar materiales disponibles para negociar, o bien contactate con nosotros de manera directa. Te
                vamos a ayudar a conseguir el material de manera segura y eficiente.
              </p>

              <a 
                href="https://api.whatsapp.com/send?phone=5491133019016&text=%C2%A1Hola!%20Quiero%20recibir%20informaci%C3%B3n%20para%20compras%20materiales%20reciclables%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg text-center inline-block"
              >
                Contactate con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios de usar Scrapy Industrial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#374151' }}>
              Beneficios de usar Scrapy Industrial
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Para compradores */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-green-500 mb-8">Para compradores</h3>

              <div className="space-y-8">
                {/* Acceso a materiales verificados */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Acceso a materiales verificados</h4>
                    <p className="text-gray-500">Encontrá materiales reciclables de calidad garantizada</p>
                  </div>
                </div>

                {/* Precios competitivos */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Precios competitivos</h4>
                    <p className="text-gray-500">Compará precios y encontrá las mejores ofertas del mercado</p>
                  </div>
                </div>

                {/* Logística simplificada */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Logística simplificada</h4>
                    <p className="text-gray-500">Soluciones de transporte integradas en la plataforma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Para vendedores */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-green-500 mb-8">Para vendedores</h3>

              <div className="space-y-8">
                {/* Mayor alcance de mercado */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Mayor alcance de mercado</h4>
                    <p className="text-gray-500">Conectá con compradores de todo el país</p>
                  </div>
                </div>

                {/* Transacciones seguras */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Transacciones seguras</h4>
                    <p className="text-gray-500">Sistema de pagos protegido y verificación de compradores</p>
                  </div>
                </div>

                {/* Gestión simplificada */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Gestión simplificada</h4>
                    <p className="text-gray-500">Panel de control para gestionar inventario y ventas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-8 leading-tight">
              ¿Querés conocer mejor Scrapy?
            </h2>

            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-4xl mx-auto">
              Si tenés dudas de cómo funciona Scrapy nuestro equipo puede guiarte. Contactate con nosotros y te vamos a
              enseñar la plataforma y sus ventajas, aclarando todas las dudas sin compromiso.
            </p>

            <a 
              href="https://api.whatsapp.com/send?phone=5491133019016&text=%C2%A1Hola!%20Quiero%20recibir%20informaci%C3%B3n%20para%20industrias%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg text-center inline-block"
            >
              Quiero que me contacten
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
