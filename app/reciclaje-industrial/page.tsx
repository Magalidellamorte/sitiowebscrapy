"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ReciclajeIndustrial() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentUserSlide, setCurrentUserSlide] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const userTypes = [
    {
      id: "industrias",
      label: "INDUSTRIAS",
      title: "Empresas que necesitan materias primas",
      subtitle: "recicladas para sus procesos productivos",
      image: "/images/industria.png",
      alt: "Línea de producción industrial con botellas verdes",
    },
    {
      id: "recicladoras",
      label: "RECICLADORAS",
      title: "Empresas especializadas en el procesamiento",
      subtitle: "y clasificación de materiales reciclables",
      image: "/images/recicladoras.jpg",
      alt: "Maquinaria industrial procesando materiales reciclables",
    },
    {
      id: "pymes",
      label: "PYMES",
      title: "Pequeñas y medianas empresas que generan",
      subtitle: "o necesitan materiales reciclables",
      image: "/images/pymes.png",
      alt: "Oficina moderna con equipo de trabajo",
    },
    {
      id: "emprendedores",
      label: "EMPRENDEDORES",
      title: "Nuevos actores del mercado que buscan",
      subtitle: "oportunidades en la economía circular",
      image: "/images/emprendedores.png",
      alt: "Materiales reciclables en caja de cartón",
    },
  ]

  const nextUserSlide = () => {
    setCurrentUserSlide((prev) => (prev + 1) % userTypes.length)
  }

  const prevUserSlide = () => {
    setCurrentUserSlide((prev) => (prev - 1 + userTypes.length) % userTypes.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Transparent */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex-shrink-0">
            <Image
              src="/images/logo scrapy color.png"
              alt="Scrapy logo"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a
              href="/"
              className={`hover:text-gray-600 transition-colors ${scrolled ? "text-gray-400" : "text-gray-600"}`}
            >
              inicio
            </a>
            <a
              href="https://beneficios.scrapyapp.com/user/coupons"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-gray-600 transition-colors ${scrolled ? "text-gray-400" : "text-gray-600"}`}
            >
              beneficios
            </a>
            <a
              href="/reciclaje-urbano"
              className={`hover:text-gray-600 transition-colors ${scrolled ? "text-gray-400" : "text-gray-600"}`}
            >
              reciclaje urbano
            </a>
            <a
              href="/reciclaje-industrial"
              className={`border-b-2 border-gray-400 pb-0.5 transition-colors ${
                scrolled ? "text-gray-600" : "text-gray-700"
              }`}
            >
              reciclaje industrial
            </a>
            <a
              href="/barrios-cerrados"
              className={`hover:text-gray-600 transition-colors ${scrolled ? "text-gray-400" : "text-gray-600"}`}
            >
              barrios cerrados
            </a>
            <a href="/contacto" className="text-green-500 hover:text-green-600 transition-colors">
              contacto
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none transition-colors ${scrolled ? "text-gray-600" : "text-gray-700"}`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            {[
              { label: "inicio", href: "/" },
              { label: "beneficios", href: "https://beneficios.scrapyapp.com/user/coupons", external: true },
              { label: "reciclaje urbano", href: "/reciclaje-urbano" },
              { label: "reciclaje industrial", href: "/reciclaje-industrial" },
              { label: "barrios cerrados", href: "/barrios-cerrados" },
              { label: "contacto", href: "/contacto", green: true },
            ].map(({ label, href, green, external }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`block px-4 py-3 ${green ? "text-green-500" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - Added more top padding */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat pt-32"
        style={{
          backgroundImage: `url('/images/portada1.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Title - Added more top margin */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-8 leading-tight mt-16">
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

              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg min-w-[200px]">
                Contactar
              </button>
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
              Solo dinos qué necesitas comprar o vender, nosotros nos encargamos de todo: desde encontrar las mejores
              ofertas hasta gestionar la logística puerta a puerta.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Centralización de Oportunidades */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Centralización de
                <br />
                Oportunidades
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                En nuestra plataforma, encontrarás una amplia gama de materiales reciclables de plástico y metales, todo
                en un solo lugar. Esto facilita la búsqueda y la selección de los materiales que tu empresa necesita.
              </p>
            </div>

            {/* Verificación de usuarios */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Verificación de
                <br />
                usuarios
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Proveemos un entorno seguro y confiable mediante un riguroso proceso de verificación de usuarios,
                garantizando que todas las transacciones se realicen con empresas legítimas y confiables.
              </p>
            </div>

            {/* Mediación en las ofertas */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Mediación en las
                <br />
                ofertas
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Facilitamos negociaciones ágiles y justas entre compradores y vendedores, asegurando que ambas partes
                obtengan el mejor trato posible.
              </p>
            </div>

            {/* Facilidades Logísticas */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                  <rect
                    x="1"
                    y="3"
                    width="15"
                    height="13"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    d="M16 8h4l2 4v4a2 2 0 01-2 2h-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <circle cx="7" cy="17" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                  <circle cx="17" cy="17" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-4">
                Facilidades
                <br />
                Logísticas
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Ofrecemos un servicio logístico con trazabilidad puerta a puerta, para que no debas preocuparte por el
                transporte y la entrega de los materiales.
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
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentUserSlide * 100}%)` }}
              >
                {userTypes.map((userType, index) => (
                  <div key={userType.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 lg:p-12">
                      {/* Left Content */}
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                            {userType.label}
                          </span>
                          <div className="flex-1 h-0.5 bg-green-500"></div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed">{userType.title}</p>
                          <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed">{userType.subtitle}</p>
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
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevUserSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextUserSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {userTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentUserSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentUserSlide === index ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Te interesa VENDER Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/images/vender-section.png"
                  alt="App Scrapy - Sección Vender"
                  width={400}
                  height={600}
                  className="w-80 h-auto object-contain"
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
                Si eres una empresa industrial o recicladora con reciclables de metal o plástico para vender, publícalos
                en nuestra app o contáctanos directamente. Nuestros asesores te enviarán ofertas disponibles para tu
                material rápidamente, ¡luego te facilitaremos todo el proceso!
              </p>

              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg">
                Contactate con nosotros
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Te interesa COMPRAR Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-green-500 leading-tight">
                Te interesa <span className="text-green-500">COMPRAR</span>
              </h2>

              <h3 className="text-2xl md:text-3xl text-gray-400 font-medium">Ofertá por materiales reciclables</h3>

              <p className="text-lg text-gray-500 leading-relaxed">
                Si te interesa comprar reciclables de metal o plástico, accede a la sección de comprar dentro de la app,
                encontrarás materiales disponibles para negociar, o bien contáctanos de manera directa. Te ayudaremos a
                conseguir el material de manera segura y eficiente.
              </p>

              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg">
                Contactate con nosotros
              </button>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/comprar-section.png"
                  alt="App Scrapy - Sección Comprar"
                  width={400}
                  height={600}
                  className="w-80 h-auto object-contain"
                />
              </div>
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
                    <p className="text-gray-500">Encuentra materiales reciclables de calidad garantizada</p>
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
                    <p className="text-gray-500">Compara precios y encuentra las mejores ofertas del mercado</p>
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
              <h3 className="text-3xl font-bold text-gray-400 mb-8">Para vendedores</h3>

              <div className="space-y-8">
                {/* Mayor alcance de mercado */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Mayor alcance de mercado</h4>
                    <p className="text-gray-500">Conecta con compradores de todo el país</p>
                  </div>
                </div>

                {/* Transacciones seguras */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
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
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
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
              ¿Quieres conocer mejor Scrapy?
            </h2>

            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-4xl mx-auto">
              Si tienes dudas de cómo funciona Scrapy nuestro equipo puede guiarte. Contacta con nosotros y te
              enseñaremos la plataforma, sus ventajas y aclararemos todas las dudas sin compromiso.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg">
              Quiero que me contacten
            </button>
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
                    alt="Scrapy Mascot"
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

                  {/* LinkedIn */}
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
