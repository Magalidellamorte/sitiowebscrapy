"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import WhatsAppLink from "@/components/WhatsAppLink"
import { BenefitCard } from "@/components/BenefitCard"
import { benefitsService, type Benefit } from "@/services/benefits"

export default function Beneficios() {
  const [isMobile, setIsMobile] = useState(false)
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  // Fetch real benefits from API
  useEffect(() => {
    // Temporarily use mock data due to CORS issues in development
    // The API only allows requests from https://beneficios.scrapyapp.com
    setBenefits(getMockBenefits())
    setLoading(false)
    setError(null)
    
    // Uncomment this section when CORS is configured for localhost or in production:
    /*
    const fetchBenefits = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await benefitsService.getActiveBenefits(3)
        setBenefits(response.benefits)
      } catch (err) {
        console.error('Error fetching benefits:', err)
        setError('No se pudieron cargar los beneficios del servidor')
        setBenefits(getMockBenefits()) // Fallback to mock data
      } finally {
        setLoading(false)
      }
    }
    
    fetchBenefits()
    */
  }, [])

  // Mock data as fallback - Formato real del sistema de beneficios
  const getMockBenefits = (): Benefit[] => [
    {
      id: "benefit_001",
      title: "Descuento en tostados",
      description: "Tostados de jamón y queso ideales para acompañar tu café",
      cost: 4000,
      empresa: { id: "empresa_1", name: "Café Central" },
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
      categories: ["10% off", "Presencial", "Gastronomía", "Pinamar"]
    },
    {
      id: "benefit_002", 
      title: "Descuento en Café",
      description: "Llevate un café exclusivo con descuento especial",
      cost: 3000,
      empresa: { id: "empresa_2", name: "Café del Puerto" },
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      categories: ["15% off", "Presencial", "Gastronomía", "Pinamar"]
    },
    {
      id: "benefit_003",
      title: "Descuento en pochoclos",
      description: "Obtené un descuento especial en pochoclos para disfrutar durante la película",
      cost: 7000,
      empresa: { id: "empresa_3", name: "Cine Plaza" },
      isActive: true,
      imageUrl: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400&h=300&fit=crop&auto=format",
      categories: ["Descuento", "Presencial", "Entretenimiento", "Pinamar"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="/beneficios" variant="default" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              Cada residuo reciclado es una oportunidad: menos impacto, más recompensas.
            </h1>

            {/* CTA Button */}
            <div className="mb-16">
              <WhatsAppLink 
                phone="5491133019016"
                text="¡Hola! Quiero ser parte de los beneficios de Scrapy ♻️ ☺️"
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg inline-block"
              >
                ¡Quiero ser parte!
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Formá parte de nuestros beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div>
              {/* Línea verde pequeña arriba del título */}
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Formá parte de nuestros beneficios
              </h2>
              
              <p className="text-gray-500 leading-relaxed mb-6">
                Te invitamos a formar parte de nuestra plataforma virtual de beneficios, y a entender el mejor modelo de economía sustentable para nuestros usuarios puedan canjear el fruto de sus ScrapyPoints, con un impacto social y ambiental positivo para tu comunidad.
              </p>
            </div>

            {/* Right Side - Con cuadro verde */}
            <div className="bg-white border border-green-500 p-8 rounded-lg shadow-sm">
              <div className="text-center space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Las <strong>empresas</strong> pueden formar parte de la comunidad Scrapy <strong>ofreciendo beneficios</strong> como descuentos, productos u otros incentivos que nuestros usuarios podrán canjear a través de sus ScrapyPoints.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  La <strong>participación en nuestro catálogo virtual publicitario es completamente gratuita:</strong> solo se requiere brindar beneficios para quienes reciclen.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Sumando tu marca, <strong>estás colaborando activamente en la generación de impactos ambientales positivos</strong> y posicionándote como una empresa comprometida con la sustentabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Cards - Datos reales del API */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                      </div>
                      <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {error && (
                <div className="text-center mb-8">
                  <p className="text-orange-600 mb-2">{error}</p>
                  <p className="text-gray-500 text-sm">Mostrando beneficios de ejemplo:</p>
                </div>
              )}

              {/* Indicación de que las tarjetas son clickeables */}
              <div className="text-center mb-6">
                <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Hacé click en cualquier beneficio para ir al sistema de beneficios de Scrapy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit) => (
                  <BenefitCard
                    key={benefit.id}
                    id={benefit.id}
                    title={benefit.title}
                    description={benefit.description}
                    imageUrl={benefit.imageUrl}
                    cost={benefit.cost}
                    empresa={benefit.empresa}
                    categories={benefit.categories}
                  />
                ))}
              </div>

              {/* Link to full benefits catalog */}
              <div className="text-center mt-8">
                <a 
                  href="https://beneficios.scrapyapp.com/user/coupons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-500 hover:text-green-600 font-medium"
                >
                  Ver todos los beneficios disponibles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Por qué es bueno para tu negocio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="border-b-4 border-green-500 w-16 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8 leading-tight">
              ¿Por qué es bueno para tu negocio?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                Posicionamiento de marca con impacto positivo
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Vinculá tu empresa a una iniciativa de triple impacto fortalecé tu imagen como marca responsable, comprometida con la sustentabilidad y generá confianza con los valores de las nuevas generaciones de consumidores.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                Expansión gratuita en un universo afín
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Al sumarte, tu empresa se posiciona en nuestro catálogo de beneficios, accediendo a un público alineado con valores de sustentabilidad y responsabilidad social donde cada beneficio para usuarios que reciclan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                Contribución directa al cuidado del ambiente
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Brindar beneficios en Scrapy es una forma concreta de fomentar el reciclaje, impulsar la economía circular y generar un cambio positivo desde tu lugar como empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="border-b-4 border-green-500 w-16 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8 leading-tight">
              ¿Cómo funciona?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image del móvil */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/images/app.png"
                  alt="App móvil de Scrapy"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Right - Steps con checkmarks */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    Los usuarios descargan la app de Scrapy y crean su cuenta para <span className="text-green-500 font-medium">comenzar a sumar ScrapyPoints</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    <span className="font-medium">Clasifican sus materiales reciclables</span> y solicitan el retiro a través de la app, eligiendo día y rango horario prescripto. Cada vez que entregan reciclables, los materiales son pesados y <span className="text-green-500 font-medium">se acreditan ScrapyPoints en su cuenta por cada kg de reciclables entregados</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    Los puntos <span className="text-green-500 font-medium">pueden canjearse por descuentos, productos y experiencias</span> de empresas comprometidas con el ambiente y la comunidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    Todos los beneficios ofrecidos por las empresas se publican en nuestro catálogo virtual y en las redes sociales de Scrapy, generando visibilidad y reconocimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - ¿Querés formar parte? */}
      <section
        className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/transformacion.png')`,
        }}
      >
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              ¿Querés formar parte?
            </h2>
            <p className="text-lg text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              En Scrapy, cada empresa, cada usuario y cada acción suma. Juntos, construimos un sistema que premia lo sustentable y multiplica el valor social y ambiental.
            </p>

            <WhatsAppLink 
              phone="5491133019016"
              text="¡Hola! Quiero ser parte de los beneficios de Scrapy ♻️ ☺️"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg min-w-[200px] text-center inline-block"
            >
              ¡Quiero ser parte!
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Footer con contacto y apps */}
      <Footer />
    </div>
  )
}
