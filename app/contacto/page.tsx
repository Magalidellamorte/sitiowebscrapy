"use client"

import type React from "react"

import { LocationChecker } from "@/components/LocationChecker";
import { useState, useEffect, useRef } from "react"
import { toast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import { ServiceCard } from "@/components/ServiceCard"
import { ContactInput } from "@/components/ContactInput"

// Service options mapping
const serviceOptions = [
  { value: "municipios", label: "Municipios" },
  { value: "municipio", label: "Municipio" },
  { value: "cooperativas", label: "Cooperativas" },
  { value: "industrial", label: "Industrial" },
  { value: "barrios cerrados", label: "Barrios Cerrados" },
  { value: "beneficios", label: "Beneficios" },
  { value: "otros", label: "Otros" }
]

// Function to get label for a service value
const getServiceLabel = (value: string) => {
  const option = serviceOptions.find(opt => opt.value === value)
  return option ? option.label : value
}

export default function Contacto() {
  const [scrolled, setScrolled] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("serviceDropdown");
      const dropdownButton = document.getElementById("dropdownButton");
      
      if (
        dropdown && 
        dropdownButton &&
        !dropdown.contains(event.target as Node) && 
        !dropdownButton.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  // Handle service card click - scroll to form and set service type
  const handleServiceCardClick = (serviceValue: string) => {
    setServiceType(serviceValue)
    
    // Scroll to contact form with 20px offset
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      const rect = contactForm.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetPosition = rect.top + scrollTop - 20
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return;
    
    // Data to send
    const formData = {
      email,
      firstName,
      lastName,
      phone,
      serviceType,
    }
    
    try {
      setIsSubmitting(true);
      
      // Send to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success notification with toast
        toast({
          title: "Formulario enviado con éxito",
          description: `Un representante de scrapy se pondrá en contacto contigo pronto.`,
          variant: "success",
        });
        
        // Reset form
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setServiceType("");
      } else {
        // Error notification with toast
        toast({
          title: "Error",
          description: data.message || 'Hubo un problema al enviar el formulario',
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Error notification with toast
      toast({
        title: "Error",
        description: "Hubo un error al enviar el formulario. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="/contacto" variant="reciclaje" />

      {/* Hero Section */}
      <section className="bg-green-50 py-20 pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-8 leading-tight">
            ¿Cómo puedo formar parte?
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-4">¿Listo para transformar el reciclaje?</p>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Estamos acá para ayudarte a dar el siguiente paso hacia la sostenibilidad.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              imageSrc="/images/municipio.png"
              imageAlt="Representante municipal"
              category="Como Municipio"
              title="Contactar para municipios"
              description="Mejorá la gestión de residuos de tu municipio"
              serviceValue="municipios"
              onContactClick={handleServiceCardClick}
            />

            <ServiceCard
              imageSrc="/images/cooperativa.png"
              imageAlt="Cooperativa trabajando"
              category="Como Cooperativa"
              title="Contactar para cooperativas"
              description="Potenciá tu cooperativa con tecnología"
              serviceValue="cooperativas"
              onContactClick={handleServiceCardClick}
            />

            <ServiceCard
              imageSrc="/images/industria.png"
              imageAlt="Planta industrial"
              category="Como Industria"
              title="Contactar para industrias"
              description="Optimizá tus procesos industriales"
              serviceValue="industrial"
              onContactClick={handleServiceCardClick}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ServiceCard
              imageSrc="/images/barriocerrado.png"
              imageAlt="Vista aérea de barrio cerrado"
              category="Como Barrio Cerrado"
              title="Contactar para barrios cerrados"
              description="Servicio para tu red de residencias exclusivas de tu barrio"
              serviceValue="barrios cerrados"
              onContactClick={handleServiceCardClick}
            />

            <ServiceCard
              imageSrc="/images/beneficios.png"
              imageAlt="Beneficios industriales"
              category="Obtené beneficios"
              title="Contactar para beneficios"
              description="Sumá puntos por cada kg reciclado, canjeables por tu red"
              serviceValue="beneficios"
              onContactClick={handleServiceCardClick}
            />
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
            <LocationChecker />
          </div>

          <p className="text-gray-500 text-lg">
            Verificá si tu ciudad ya cuenta con nuestro servicio de reciclaje urbano
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div className="space-y-8">
              <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                MANTENETE INFORMADO
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-green-500">Contactate con Scrapy</h2>

              <p className="text-lg text-gray-500 leading-relaxed">
                Dejanos tus datos para que podamos ayudarte con la mejor solución para tu organización. Estamos
                comprometidos con el cuidado del planeta y siempre disponibles para escucharte.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name fields */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <ContactInput
                      type="text"
                      label="Nombre"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <ContactInput
                      type="text"
                      label="Apellido"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <ContactInput
                      type="email"
                      label="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <ContactInput
                      type="tel"
                      label="Teléfono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  </div>
                  
                                {/* Service type dropdown and Submit button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <div className="relative">
                      {serviceType ? (
                        <div 
                          id="dropdownButton"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full bg-white px-6 py-4 rounded-full border border-gray-200 text-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none cursor-pointer pr-10 flex items-center"
                        >
                          <div className="truncate mr-2">
                            {getServiceLabel(serviceType)}
                          </div>
                          <svg 
                            className={`w-4 h-4 flex-shrink-0 fill-current text-gray-500 transition-transform duration-200 ml-auto ${dropdownOpen ? "transform rotate-180" : ""}`} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      ) : (
                        <div 
                          id="dropdownButton"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full bg-white px-6 py-4 rounded-full border border-gray-200 text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none cursor-pointer pr-10 flex items-center justify-between"
                        >
                          Servicio *
                          <svg 
                            className={`w-4 h-4 ml-2 fill-current text-gray-500 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180" : ""}`}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Styled dropdown with higher z-index */}
                      <div 
                        id="serviceDropdown" 
                        className={`absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-[9999] transition-opacity duration-200 ${dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                      >
                        {serviceOptions.filter(option => option.value !== "municipio").map((option) => (
                          <div 
                            key={option.value}
                            onClick={() => {
                              setServiceType(option.value);
                              setDropdownOpen(false);
                            }}
                            className="px-6 py-3 cursor-pointer hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                      
                      {/* Hidden actual select for form validation */}
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="sr-only"
                        required
                      >
                        <option value="" disabled hidden>Servicio</option>
                        {serviceOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                  </div>
                </div>

                  {/* Submit button */}
                  <div className="w-full sm:w-auto">
                <button
                  ref={submitButtonRef}
                  type="submit"
                      disabled={!firstName || !lastName || !email || !serviceType || isSubmitting}
                      className="w-full sm:w-40 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg relative"
                >
                  <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
                    Enviar →
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
                  </div>
                </div>
              </form>
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
      <Footer />
    </div>
  )
}
