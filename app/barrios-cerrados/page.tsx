"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function BarriosCerrados() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}>
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
            <a href="/" className="text-gray-400 hover:text-gray-600">
              inicio
            </a>
            <a
              href="https://beneficios.scrapyapp.com/user/coupons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              beneficios
            </a>
            <a href="/reciclaje-urbano" className="text-gray-400 hover:text-gray-600">
              reciclaje urbano
            </a>
            <a href="/reciclaje-industrial" className="text-gray-400 hover:text-gray-600">
              reciclaje industrial
            </a>
            <a href="/barrios-cerrados" className="text-gray-600 border-b-2 border-gray-400 pb-0.5">
              barrios cerrados
            </a>
            <a href="/contacto" className="text-green-500 hover:text-green-600">
              contacto
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
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
                className={`block px-4 py-3 ${green ? "text-green-500" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Servicio Domiciliario
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#374151' }}>
              Reciclaje <span className="text-green-500">Domiciliario</span>
              <br />
              para <span className="text-green-500">Barrios Cerrados</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl">
              Transformamos la gestión de reciclables con tecnología innovadora, logística sustentable y beneficios
              reales para toda la comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition">
                Contactar
              </button>
              <button className="border-2 border-green-500 text-green-500 hover:bg-green-50 font-semibold py-3 px-6 rounded-full transition">
                Solicitar demo
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/barriocerrado.png"
              alt="Vista aérea de barrio cerrado"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 100% Satisfacción */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfacción de Vecinos</div>
            </div>

            {/* 24/7 Monitoreo */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Monitoreo de Residuos</div>
            </div>

            {/* Beneficios Sustentables */}
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-green-500 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Beneficios Sustentables</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Proceso simple
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">¿Cómo funciona?</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
              Un proceso diseñado para ser simple, eficiente y beneficioso para todos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Descarga Scrappy App</h3>
                  <p className="text-gray-500">Registro simple y rápido para tu hogar</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Solicita retiro</h3>
                  <p className="text-gray-500">Indica material y horario desde la app</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Recolector llega</h3>
                  <p className="text-gray-500">Con vehículo Torky, sin ruido ni contaminación</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Gana puntos</h3>
                  <p className="text-gray-500">Acumula por cada kg reciclado</p>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="w-80 h-[500px] bg-gray-200 rounded-3xl flex items-center justify-center">
                <Image
                  src="/images/app.png"
                  alt="App Scrapy en smartphone"
                  width={320}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logística sin camiones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <Image
                src="/images/bici.png"
                alt="Vehículo Torky para recolección"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Vehículo Torky
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
                Logística <span className="text-green-500">sin camiones</span>
              </h2>

              <p className="text-lg text-gray-500">
                En alianza con Torky Mobility, utilizamos vehículos a pedal diseñados especialmente para recolección
                urbana. Una solución silenciosa, ordenada y que mantiene la estética de tu barrio.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Mayor seguridad</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Cero ruido</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">100% sustentable</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Estética mantenida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Una solución integral Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">
              Una solución <span className="text-green-500">integral</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Educación Sustentable */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Educación Sustentable</h3>
              <p className="text-gray-500">
                Charlas, talleres y contenido educativo para que toda la familia comprenda su impacto en el planeta.
              </p>
            </div>

            {/* Informes de Impacto */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Informes de Impacto</h3>
              <p className="text-gray-500">
                Reportes mensuales con kg reciclados, CO2 evitado y el impacto positivo de tu comunidad.
              </p>
            </div>

            {/* Sistema de Puntos */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.839-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.589-1.81h3.46a1 1 0 00.952-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Sistema de Puntos</h3>
              <p className="text-gray-500">
                Suma puntos por cada kg reciclado y canjéalos por beneficios exclusivos en nuestra red.
              </p>
            </div>

            {/* Comunidad Activa */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Comunidad Activa</h3>
              <p className="text-gray-500">Fomenta la participación vecinal e iniciativas de todos los residentes.</p>
            </div>

            {/* Gestión Completa */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Gestión Completa</h3>
              <p className="text-gray-500">
                Manejo integral de plásticos, metales, cartón y otros materiales reciclables.
              </p>
            </div>

            {/* Tecnología Avanzada */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Tecnología Avanzada</h3>
              <p className="text-gray-500">
                App intuitiva con programación flexible y monitoreo en tiempo real de tu barrio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios para tu barrio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">
              Beneficios para <span className="text-green-500">tu barrio</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Promueve una comunidad más sustentable</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Elimina el ingreso de camiones recolectores</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Estimula la participación con incentivos reales</span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Mejora la imagen del barrio</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Fomenta espíritu verde local</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Permite medir el impacto ambiental real</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8 leading-tight">
            ¿Listo para transformar tu barrio?
          </h2>

          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete a la revolución del reciclaje domiciliario y haz la diferencia desde tu hogar con Scrapy App.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg min-w-[200px]">
              Contactar ahora
            </button>
            <button className="border-2 border-green-500 text-green-500 hover:bg-green-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg min-w-[200px]">
              Ver Propuesta Completa
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-20">
        <div className="relative z-10 -mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-400 rounded-3xl p-6 lg:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/logo blanco scrapy.png"
                    alt="Scrapy Logo"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

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

        <div className="bg-[#b4b4b4] pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

              <div className="text-left lg:text-left space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Contactanos</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Ser parte del reciclado moderno ahora está a un click de distancia ¡Únite a Scrapy!
                </p>

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
