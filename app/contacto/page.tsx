"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Contacto() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
  }

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
            <a href="/reciclaje-urbano" className="text-gray-400 hover:text-gray-600">
              reciclaje urbano
            </a>
            <a href="/reciclaje-industrial" className="text-gray-400 hover:text-gray-600">
              reciclaje industrial
            </a>
            <a href="/barrios-cerrados" className="text-gray-400 hover:text-gray-600">
              barrios cerrados
            </a>
            <a
              href="https://beneficios.scrapyapp.com/user/coupons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              beneficios
            </a>
            <a href="/contacto" className="text-green-500 border-b-2 border-green-500 pb-0.5">
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
              { label: "reciclaje urbano", href: "/reciclaje-urbano" },
              { label: "reciclaje industrial", href: "/reciclaje-industrial" },
              { label: "barrios cerrados", href: "/barrios-cerrados" },
              { label: "beneficios", href: "https://beneficios.scrapyapp.com/user/coupons", external: true },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-8 leading-tight">
            ¿Como puedo formar parte?
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-4">¿Listo para transformar el reciclaje?</p>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a dar el siguiente paso hacia la sostenibilidad.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Como Municipio */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src="/images/municipio.png"
                  alt="Representante municipal"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Como Municipio
                  </span>
                </div>
              </div>
              <div className="p-6">
                <a 
                  href="https://api.whatsapp.com/send?phone=5491133019016&text=¡Hola!%20Quiero%20recibir%20información%20para%20municipios%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition mb-4 block text-center"
                >
                  Contactar para municipios
                </a>
                <p className="text-gray-500 text-sm text-center">Mejora la gestión de residuos de tu municipio</p>
              </div>
            </div>

            {/* Como Cooperativas */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src="/images/cooperativa.png"
                  alt="Cooperativa trabajando"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Como Cooperativas
                  </span>
                </div>
              </div>
              <div className="p-6">
                <a 
                  href="https://api.whatsapp.com/send?phone=5491133019016&text=¡Hola!%20Quiero%20recibir%20información%20para%20cooperativas%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition mb-4 block text-center"
                >
                  Contactar para cooperativas
                </a>
                <p className="text-gray-500 text-sm text-center">Potencia tu cooperativa con tecnología</p>
              </div>
            </div>

            {/* Como Industria */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src="/images/industria.png"
                  alt="Planta industrial"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Como Industria
                  </span>
                </div>
              </div>
              <div className="p-6">
                <a 
                  href="https://api.whatsapp.com/send?phone=5491133019016&text=¡Hola!%20Quiero%20recibir%20información%20para%20industrias%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition mb-4 block text-center"
                >
                  Contactar para industrias
                </a>
                <p className="text-gray-500 text-sm text-center">Optimiza tus procesos industriales</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Como barrio cerrado */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src="/images/barriocerrado.png"
                  alt="Vista aérea de barrio cerrado"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Como barrio cerrado
                  </span>
                </div>
              </div>
              <div className="p-6">
                <a 
                  href="https://api.whatsapp.com/send?phone=5491133019016&text=¡Hola!%20Quiero%20recibir%20información%20para%20barrios%20cerrados%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition mb-4 block text-center"
                >
                  Contactar para barrios cerrados
                </a>
                <p className="text-gray-500 text-sm text-center">
                  Servicio para tu red de residencias exclusivas de tu barrio
                </p>
              </div>
            </div>

            {/* Descargas Beneficios */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src="/images/beneficios.png"
                  alt="Beneficios industriales"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Descargas Beneficios
                  </span>
                </div>
              </div>
              <div className="p-6">
                <a 
                  href="https://api.whatsapp.com/send?phone=5491133019016&text=¡Hola!%20Quiero%20recibir%20información%20sobre%20beneficios%20%E2%99%BB%EF%B8%8F%20%E2%98%BA%EF%B8%8F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition mb-4 block text-center"
                >
                  Contactar para beneficios
                </a>
                <p className="text-gray-500 text-sm text-center">
                  Suma puntos por cada kg reciclado, canjeables por tu red
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Checker Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            ¿Querés reciclar en tu comercio, hogar o institución?
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-12">Fijate si tu localidad ya forma parte</h3>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Ingresa tu código postal o ciudad"
                className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 placeholder-gray-400 text-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p className="text-gray-500 text-lg">
            Verifica si tu ciudad ya cuenta con nuestro servicio de reciclaje urbano
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div className="space-y-8">
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                MANTENTE INFORMADO
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-green-500">Contacta con Scrapy</h2>

              <p className="text-lg text-gray-500 leading-relaxed">
                Dejanos tus datos para que podamos ayudarte con la mejor solución para tu organización. Estamos
                comprometidos con el cuidado del planeta y siempre disponibles para escucharte.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu dirección"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 placeholder-gray-400 text-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg"
                >
                  Enviar →
                </button>
              </form>

              <p className="text-sm text-gray-400">
                *Al suscribirte, aceptas recibir correos electrónicos de nuestra parte.
                <br />
                Puedes darte de baja en cualquier momento.
              </p>
            </div>

            {/* Right Side - Contact Reasons */}
            <div className="bg-green-500 rounded-3xl p-8 lg:p-12 text-white">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Por qué contactarnos?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Asesoramiento personalizado para tu organización</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Implementación gratuita para el plan</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Capacitación para tu equipo</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Soporte técnico especializado</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Informes detallados de impacto</span>
                </div>
              </div>
            </div>
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
