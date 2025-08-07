"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function ReciclajeUrbano() {
  const [currentBenefitSlide, setCurrentBenefitSlide] = useState(0)
  const [currentCoopSlide, setCurrentCoopSlide] = useState(0)
  const [currentRecolectorSlide, setCurrentRecolectorSlide] = useState(0)

  const nextBenefitSlide = () => {
    setCurrentBenefitSlide((prev) => (prev + 1) % 2)
  }

  const prevBenefitSlide = () => {
    setCurrentBenefitSlide((prev) => (prev - 1 + 2) % 2)
  }

  const nextCoopSlide = () => {
    setCurrentCoopSlide((prev) => (prev + 1) % 4)
  }

  const prevCoopSlide = () => {
    setCurrentCoopSlide((prev) => (prev - 1 + 4) % 4)
  }

  const nextRecolectorSlide = () => {
    setCurrentRecolectorSlide((prev) => (prev + 1) % 3)
  }

  const prevRecolectorSlide = () => {
    setCurrentRecolectorSlide((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="/reciclaje-urbano" variant="reciclaje" />

      {/* Hero Section */}
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

      {/* Localidad Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500">¿Tu Localidad ya forma parte?</h2>

            <div className="relative max-w-lg">
              <input
                type="text"
                placeholder="Ingresa tu código postal o ciudad"
                className="w-full px-6 py-4 rounded-full bg-gray-100 placeholder-gray-400 text-gray-600 focus:ring-2 focus:ring-green-500 focus:bg-white outline-none"
              />
              <button className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500">
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

            <p className="text-lg md:text-xl text-gray-400 max-w-xl">
              Verifica si tu ciudad ya cuenta con nuestro servicio y comienza a reciclar en tu comercio, hogar o
              institución.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
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

      {/* Cómo Funciona Section */}
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
                desc: "Ganá Scrapy Points para canjear por beneficios.",
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

      {/* Banner Guía de Reciclaje */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner reciclaje urbano.jpeg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
            >
              ¿Tienes duda de cómo entregar tus materiales?
            </h2>

            <p
              className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
            >
              Descarga nuestra guía de reciclaje que te muestre cómo preparar el material.
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

      {/* Beneficios para cada sector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight text-center">
                Beneficios para cada sector
              </h2>

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

      {/* Principales Beneficios para Generadores */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700">Generadores</h2>
            <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
              Descubre cómo Scrapy App Urbano facilita el reciclaje para hogares, comercios e instituciones.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentBenefitSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Entrega simple y segura</h3>
                    <p className="text-gray-500 leading-relaxed">
                      A través de la app, los generadores pueden solicitar el retiro de sus reciclables en un solo clic,
                      confiando en agentes responsables que garantizan su correcta trazabilidad y reciclado.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Retiros automáticos programados</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Para generadores frecuentes (edificios, comercios o instituciones), la app permite programar
                      retiros semanales fijos. Así, cuando el contenedor se llena, no hace falta cargarlo manualmente:
                      la recolección ya está agendada.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.839-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.589-1.81h3.46a1 1 0 00.952-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Recompensas por reciclar</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Cada entrega de reciclables suma Scrapy Points que se pueden canjear por descuentos en comercios
                      locales, productos sustentables o beneficios exclusivos dentro de la plataforma.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Trazabilidad completa</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Los generadores pueden seguir el recorrido de sus reciclables desde la recolección hasta su
                      procesamiento final, conociendo el impacto real de su contribución al medio ambiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevBenefitSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextBenefitSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBenefitSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentBenefitSlide === index ? "bg-green-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cooperativas y Municipios */}
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

      {/* Principales Beneficios para Cooperativas y Municipios */}
      <section className="py-20" style={{ backgroundColor: "#e8f5e8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700">Cooperativas y Municipios</h2>
            <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
              Optimiza la gestión de reciclaje en tu comunidad con nuestra solución tecnológica.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCoopSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Nuevos generadores</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Los generadores —comercios, hogares, instituciones— pueden publicar sus materiales reciclables
                      directamente en la app para que sean retirados por la cooperativa o el municipio.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.839-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.589-1.81h3.46a1 1 0 00.952-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Sistema de recompensas</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Los generadores son premiados por entregar reciclables, lo que estimula la participación y
                      fortalece la red de recolección.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.205.013 3.663.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Panel administrativo</h3>
                    <p className="text-gray-500 leading-relaxed">
                      La cooperativa o municipio puede aceptar/rechazar viajes, asignar recolectores, configurar
                      horarios y ver métricas del servicio desde un solo lugar.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Datos</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Gracias al acceso a estadísticas y reportes en tiempo real, se pueden tomar decisiones
                      estratégicas para mejorar la eficiencia operativa y el impacto ambiental.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Rutas optimizadas</h3>
                    <p className="text-gray-500 leading-relaxed">
                      La app genera rutas inteligentes y eficientes para los recolectores, reduciendo tiempos, costos
                      logísticos y aumentando la productividad.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Ley de basura cero</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Scrapy brinda herramientas para monitorear y reportar los avances en reciclaje, facilitando la
                      rendición de cuentas ante organismos provinciales y nacionales.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">😊</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Imagen institucional</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Acompañamos a los municipios a demostrar su compromiso con el reciclaje, fortaleciendo su
                      posicionamiento en sustentabilidad y generando mayor adhesión ciudadana.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <button
              onClick={prevCoopSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextCoopSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCoopSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentCoopSlide === index ? "bg-green-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recolectores Section */}
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

      {/* Principales Beneficios para Recolectores */}
      <section className="py-20" style={{ backgroundColor: "#e8f5e8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700">Recolectores</h2>
            <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
              Simplifica tu trabajo diario y maximiza tu eficiencia con nuestra aplicación.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentRecolectorSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Viajes organizados</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Cada recolector recibe sus recorridos directamente desde la app, sin necesidad de coordinación
                      manual.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Rutas óptimas</h3>
                    <p className="text-gray-500 leading-relaxed">
                      La app genera recorridos eficientes para reducir tiempos de traslado y aumentar la productividad
                      diaria.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Navegación integrada</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Con un solo clic, el recolector puede iniciar la navegación hacia cada punto de retiro, accediendo
                      a la mejor ruta disponible en tiempo real.
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.042v2.652m-3.176-.97a1.121 1.121 0 000 2.384c.372 1.113 1.651 2.111 3.176 2.111s2.804-.998 3.176-2.111a1.121 1.121 0 000-2.384c-.372-1.113-1.651-2.111-3.176-2.111s-2.804.998-3.176 2.111z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Seguimiento de rendimiento</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Los recolectores pueden visualizar la cantidad de kilos recolectados en cada jornada, accediendo a
                      métricas claras que reflejan su trabajo.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-4 pr-16">Rol del recolector</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Al profesionalizar su tarea con herramientas digitales, buscamos dar mayor visibilidad,
                      reconocimiento y orden a un trabajo esencial para la economía circular.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <button
              onClick={prevRecolectorSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextRecolectorSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentRecolectorSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentRecolectorSlide === index ? "bg-green-400" : "bg-gray-300"
                }`}
              />
            ))}
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
                    alt="Scrapy Mascota"
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
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
