"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Footer from "@/components/Footer"

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
      <Footer />
    </div>
  )
}