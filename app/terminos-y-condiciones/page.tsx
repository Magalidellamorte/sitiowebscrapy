"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function TerminosYCondiciones() {
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
            <a href="/" className="text-[rgb(107,114,128)] hover:text-gray-600">
              inicio
            </a>
            <a href="/reciclaje-urbano" className="text-[rgb(107,114,128)] hover:text-gray-600">
              reciclaje urbano
            </a>
            <a href="/reciclaje-industrial" className="text-[rgb(107,114,128)] hover:text-gray-600">
              reciclaje industrial
            </a>
            <a href="/barrios-cerrados" className="text-[rgb(107,114,128)] hover:text-gray-600">
              barrios cerrados
            </a>
            <a
              href="https://beneficios.scrapyapp.com/user/coupons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(107,114,128)] hover:text-gray-600"
            >
              beneficios
            </a>
            <a href="/contacto" className="text-[rgb(107,114,128)] hover:text-gray-600">
              contacto
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[rgb(107,114,128)] focus:outline-none">
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
              { label: "contacto", href: "/contacto" },
            ].map(({ label, href, external }) => (
              <a
                key={href}
                href={href}
                className="block px-4 py-3 text-[rgb(107,114,128)]"
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

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y condiciones</h1>
            
            <div className="text-[rgb(107,114,128)] leading-relaxed space-y-6">
              <p>
                El presente documento detalla los términos y condiciones generales de uso (los "Términos y Condiciones") aplicables al uso y contratación de los servicios ofrecidos por UTS BIO S.A. ("SCRAPY"), y domicilio en Murature 4113, Villa Lynch, Provincia de Buenos Aires, a través de la aplicación informática diseñada para ser ejecutada en teléfonos inteligentes y otros dispositivos móviles denominada SCRAPY (la "Aplicación"). Cualquier persona (en adelante "Usuario" o en plural "Usuarios") que desee acceder y/o utilizar la Aplicación deberá leer atentamente los Términos y Condiciones y, en su caso, aceptar dichos Términos y Condiciones sin restricción, reserva o modificación alguna con carácter previo a completar su proceso de registración en la Aplicación. Toda persona que no acepte estos Términos y Condiciones, deberá abstenerse de utilizar la Aplicación y/o contratar los servicios ofrecidos a través de la misma en forma alguna. En igual sentido y aplicando los mismos términos, debe ser aceptada la Política de Privacidad.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Modificaciones a los Términos y Condiciones.</h2>
              <p>
                SCRAPY podrá modificar los Términos y Condiciones en cualquier momento. SCRAPY notificará a los Usuarios publicando en la Aplicación los términos modificados. Los términos modificados entrarán en vigor a los cinco (5) días desde su publicación. Antes de cumplido dicho plazo y en caso de no aceptar las modificaciones, el Usuario no conforme podrá comunicarlo mediante un correo electrónico a la dirección info@scrapyapp.com; en tal caso, quedará disuelto el vínculo contractual y se cancelará su registración, sin derecho a indemnización alguna para ninguna de las partes. Transcurrido el plazo indicado, el Usuario acepta los nuevos Términos y Condiciones que continuarán vinculando a ambas partes. No obstante, lo indicado precedentemente, todo Contrato vigente, conforme se lo define en la cláusula 9.4, permanecerá en efecto sujeto a los Términos y Condiciones vigentes al momento de dicha contratación.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Capacidad.</h2>
              <p>
                El uso de la Aplicación y la contratación de los servicios sólo están disponibles para personas humanas con capacidad legal para contratar. No podrán utilizar la Aplicación ni contratar los servicios las personas que no cuenten con tal capacidad, incluyendo, pero no limitándose a los menores de edad.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Proceso de Registración.</h2>
              <p>
                El acceso y/o uso de la Aplicación está sujeto al previo registro y alta del Usuario, además de la aceptación de los Términos y Condiciones. El registro del Usuario podrá realizarse completando el formulario de registración. A efectos de completar el formulario de registración, se requiere el ingreso en todos sus campos de datos válidos. El futuro Usuario deberá completarlo con su información personal de manera exacta, precisa y verdadera y asume el compromiso de actualizar tal información ante la eventualidad de cualquier modificación posterior. Es de exclusiva responsabilidad del Usuario la exactitud, precisión, veracidad, autenticidad y vigencia de la información sea esta proporcionada mediante el formulario de registración. SCRAPY se reserva el derecho de requerir comprobantes y/o datos adicionales a efectos de corroborar la información provista, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. Asimismo, SCRAPY se reserva el derecho de rechazar cualquier solicitud de registración o de cancelar una registración previamente aceptada, sin que esté obligada a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Acceso a la Aplicación.</h2>
              <p>
                El Usuario accederá a su cuenta personal (su "Cuenta") mediante el ingreso de la dirección de correo electrónico registrada y de una clave de seguridad personal elegida al momento de la registración, que podrá ser modificada por el Usuario posteriormente ("Contraseña").
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Alcances del acceso y/o uso de la Aplicación.</h2>
              <p className="mb-4">
                5.1. De acuerdo con los términos establecidos en los presentes Términos y Condiciones, SCRAPY otorga al Usuario durante el plazo correspondiente una licencia limitada, no exclusiva, no sublicenciable e intransferible para acceder y hacer uso de la Aplicación en la medida permitida en estos Términos y Condiciones. Todos los derechos que no se conceden expresamente en estos Términos y Condiciones están reservados por SCRAPY.
              </p>
              <p className="mb-4">
                5.2. El Usuario no podrá hacer ningún uso de la Aplicación que no esté expresamente permitido en estos Términos y Condiciones.
              </p>
              <p className="mb-4">
                5.3. Excepto que se indique expresamente lo contrario en estos Términos y Condiciones, el Usuario no podrá: (a) descargar, usar, copiar, crear trabajos derivados, o modificar la Aplicación o cualquier parte de la misma, (b) transferir, sublicenciar, arrendar, prestar, alquilar o distribuir la Aplicación a cualquier otra persona o entidad, o (c) usar la Aplicación de manera ilegal, para cualquier fin ilegal, o de cualquier manera no reconocida expresamente en estos Términos y Condiciones.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Fallas en el Sistema.</h2>
              <p>
                SCRAPY no se responsabiliza por daños, perjuicios o pérdidas que el Usuario pueda sufrir causados por fallas en el sistema, en el dispositivo, en el servidor o en Internet, conociendo y aceptando el Usuario los riesgos propios de la conexión y la navegación por Internet. SCRAPY tampoco será responsable por cualquier virus informático que pudiera infectar el equipo del Usuario como consecuencia del acceso, uso o examen de la Aplicación o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio contenidos en la misma.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Modificaciones a la Aplicación.</h2>
              <p>
                SCRAPY se reserva el derecho a modificar unilateralmente, y sin notificación previa al Usuario, los programas informáticos, aplicaciones y/o sistemas operativos que utiliza, la sistematización, lógica y/o la presentación general, así como las características y/o condiciones de acceso y/o uso de la Aplicación y de todos sus contenidos.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Derechos de Propiedad Sobre el Contenido de La Aplicación.</h2>
              <p>
                Los derechos de propiedad intelectual del contenido de la Aplicación, su diseño gráfico y códigos son titularidad de UTS BIO S.A. y, por tanto, queda prohibida su reproducción, distribución, comunicación pública y transformación. Igualmente, todos los nombres comerciales, marcas o signos distintos de cualquier clase contenidos en la Aplicación están protegidos por ley.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Servicios.</h2>
              <p className="mb-4">
                Una vez que se ha cerrado una oferta y ha sido aceptada tanto por el comprador como por el vendedor, SCRAPY no asume ninguna responsabilidad en cuanto al cumplimiento de la oferta, la calidad del producto o la veracidad de la información proporcionada por el vendedor. Cualquier problema que surja entre el comprador y el vendedor debe ser resuelto únicamente por ellos mismos, sin que SCRAPY tenga ninguna obligación de intervención en el asunto.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.1. Planes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">9.1.1. Oferta Única:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Este plan incluye acceso a una oferta en especial.</li>
                    <li>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</li>
                    <li>El usuario puede chatear con otros usuarios que acepten sus ofertas.</li>
                    <li>El usuario puede personalizar su perfil para recibir alertas de materiales.</li>
                    <li>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</li>
                    <li>El costo de este plan es de $500.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">9.1.2. Oferta Básica:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Este plan incluye 5 ofertas.</li>
                    <li>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</li>
                    <li>El usuario puede chatear con otros usuarios que acepten sus ofertas.</li>
                    <li>El usuario puede personalizar su perfil para recibir alertas de materiales.</li>
                    <li>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</li>
                    <li>El costo de este plan es de $2000.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">9.1.3. Oferta Inicial:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Este plan incluye 15 ofertas.</li>
                    <li>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</li>
                    <li>El usuario puede chatear con otros usuarios que acepten sus ofertas.</li>
                    <li>El usuario puede personalizar su perfil para recibir alertas de materiales.</li>
                    <li>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</li>
                    <li>El costo de este plan es de $3500.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">9.1.4. Oferta avanzada:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Este plan incluye ofertas ilimitadas.</li>
                    <li>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</li>
                    <li>El usuario puede chatear con otros usuarios que acepten sus ofertas.</li>
                    <li>El usuario puede personalizar su perfil para recibir alertas de materiales.</li>
                    <li>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</li>
                    <li>El costo de este plan es de $5000.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Duración y Finalización del Acuerdo de Uso.</h2>
              <p>
                Cualquiera de las partes, Usuario o SCRAPY, puede terminar el acuerdo de uso de la Aplicación establecido de conformidad con estos Términos y Condiciones en cualquier momento y por cualquier motivo. "El conocimiento tanto del envío como de la aceptación de los Términos y condiciones precedentemente establecidos, se encuentran regidas por lo dispuesto en los Artículos 978 y 979 del Código Civil y Comercial de la Nación Argentina"
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Privacidad.</h2>
              <p>
                Al utilizar la Aplicación, el Usuario acepta los términos de las Políticas de Privacidad de SCRAPY.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Principio de Conservación.</h2>
              <p>
                En caso de que cualquiera de las cláusulas de los presentes Términos y Condiciones o del Contrato resultase inexigible o nula, total o parcialmente, en virtud de la legislación aplicable o porque así lo declarase un tribunal competente, las restantes cláusulas se conservarán plenamente vigentes y aplicables. En tal caso, SCRAPY, podrá sustituir la cláusula o cláusulas declaradas nulas o inaplicables por otra u otras válidas y que tengan el mismo objeto que las originarias.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Jurisdicción y Ley Aplicable.</h2>
              <p>
                Estos Términos y Condiciones y el Contrato estarán regidos en todos sus puntos por las leyes vigentes en la República Argentina. Cualquier controversia derivada del presente acuerdo, su existencia, validez, interpretación, alcance o cumplimiento, será sometida a los Tribunales ordinarios competentes de la Ciudad Autónoma de Buenos Aires.
              </p>
              <p>
                El conocimiento tanto del envío como de la aceptación de los Términos y condiciones precedentemente establecidos, se encuentran regidas por lo dispuesto en los Artículos 978 y 979 del Código Civil y Comercial de la Nación Argentina.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#b4b4b4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
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
          <div className="border-t border-gray-500 pt-8 pb-8">
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
      </footer>
    </div>
  )
} 