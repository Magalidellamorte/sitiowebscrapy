"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"

export default function TerminosYCondiciones() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentPage="/terminos-y-condiciones" />

      {/* Hero Section */}
      <section className="bg-white py-12 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
              Términos y Condiciones
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-4">
              Condiciones generales de uso de la aplicación Scrapy y sus servicios
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="h-0.5 w-20 bg-green-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p className="text-lg">
                El presente documento detalla los términos y condiciones generales de uso (los "Términos y Condiciones") aplicables al uso y contratación de los servicios ofrecidos por UTS BIO S.A. ("SCRAPY"), y domicilio en Murature 4113, Villa Lynch, Provincia de Buenos Aires, a través de la aplicación informática diseñada para ser ejecutada en teléfonos inteligentes y otros dispositivos móviles denominada SCRAPY (la "Aplicación"). Cualquier persona (en adelante "Usuario" o en plural "Usuarios") que desee acceder y/o utilizar la Aplicación deberá leer atentamente los Términos y Condiciones y, en su caso, aceptar dichos Términos y Condiciones sin restricción, reserva o modificación alguna con carácter previo a completar su proceso de registración en la Aplicación. Toda persona que no acepte estos Términos y Condiciones, deberá abstenerse de utilizar la Aplicación y/o contratar los servicios ofrecidos a través de la misma en forma alguna. En igual sentido y aplicando los mismos términos, debe ser aceptada la Política de Privacidad.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">1. Modificaciones a los Términos y Condiciones</h2>
                <p>
                  SCRAPY podrá modificar los Términos y Condiciones en cualquier momento. SCRAPY notificará a los Usuarios publicando en la Aplicación los términos modificados. Los términos modificados entrarán en vigor a los cinco (5) días desde su publicación. Antes de cumplido dicho plazo y en caso de no aceptar las modificaciones, el Usuario no conforme podrá comunicarlo mediante un correo electrónico a la dirección info@scrapyapp.com; en tal caso, quedará disuelto el vínculo contractual y se cancelará su registración, sin derecho a indemnización alguna para ninguna de las partes. Transcurrido el plazo indicado, el Usuario acepta los nuevos Términos y Condiciones que continuarán vinculando a ambas partes. No obstante, lo indicado precedentemente, todo Contrato vigente, conforme se lo define en la cláusula 9.4, permanecerá en efecto sujeto a los Términos y Condiciones vigentes al momento de dicha contratación.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">2. Capacidad</h2>
                <p>
                  El uso de la Aplicación y la contratación de los servicios sólo están disponibles para personas humanas con capacidad legal para contratar. No podrán utilizar la Aplicación ni contratar los servicios las personas que no cuenten con tal capacidad, incluyendo, pero no limitándose a los menores de edad.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">3. Proceso de Registración</h2>
                <p>
                  El acceso y/o uso de la Aplicación está sujeto al previo registro y alta del Usuario, además de la aceptación de los Términos y Condiciones. El registro del Usuario podrá realizarse completando el formulario de registración. A efectos de completar el formulario de registración, se requiere el ingreso en todos sus campos de datos válidos. El futuro Usuario deberá completarlo con su información personal de manera exacta, precisa y verdadera y asume el compromiso de actualizar tal información ante la eventualidad de cualquier modificación posterior. Es de exclusiva responsabilidad del Usuario la exactitud, precisión, veracidad, autenticidad y vigencia de la información sea esta proporcionada mediante el formulario de registración. SCRAPY se reserva el derecho de requerir comprobantes y/o datos adicionales a efectos de corroborar la información provista, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. Asimismo, SCRAPY se reserva el derecho de rechazar cualquier solicitud de registración o de cancelar una registración previamente aceptada, sin que esté obligada a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">4. Acceso a la Aplicación</h2>
                <p>
                  El Usuario accederá a su cuenta personal (su "Cuenta") mediante el ingreso de la dirección de correo electrónico registrada y de una clave de seguridad personal elegida al momento de la registración, que podrá ser modificada por el Usuario posteriormente ("Contraseña").
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">5. Alcances del acceso y/o uso de la Aplicación</h2>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold text-gray-700">5.1.</span> De acuerdo con los términos establecidos en los presentes Términos y Condiciones, SCRAPY otorga al Usuario durante el plazo correspondiente una licencia limitada, no exclusiva, no sublicenciable e intransferible para acceder y hacer uso de la Aplicación en la medida permitida en estos Términos y Condiciones. Todos los derechos que no se conceden expresamente en estos Términos y Condiciones están reservados por SCRAPY.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">5.2.</span> El Usuario no podrá hacer ningún uso de la Aplicación que no esté expresamente permitido en estos Términos y Condiciones.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">5.3.</span> Excepto que se indique expresamente lo contrario en estos Términos y Condiciones, el Usuario no podrá: (a) descargar, usar, copiar, crear trabajos derivados, o modificar la Aplicación o cualquier parte de la misma, (b) transferir, sublicenciar, arrendar, prestar, alquilar o distribuir la Aplicación a cualquier otra persona o entidad, o (c) usar la Aplicación de manera ilegal, para cualquier fin ilegal, o de cualquier manera no reconocida expresamente en estos Términos y Condiciones.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">6. Fallas en el Sistema</h2>
                <p>
                  SCRAPY no se responsabiliza por daños, perjuicios o pérdidas que el Usuario pueda sufrir causados por fallas en el sistema, en el dispositivo, en el servidor o en Internet, conociendo y aceptando el Usuario los riesgos propios de la conexión y la navegación por Internet. SCRAPY tampoco será responsable por cualquier virus informático que pudiera infectar el equipo del Usuario como consecuencia del acceso, uso o examen de la Aplicación o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio contenidos en la misma.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">7. Modificaciones a la Aplicación</h2>
                <p>
                  SCRAPY se reserva el derecho a modificar unilateralmente, y sin notificación previa al Usuario, los programas informáticos, aplicaciones y/o sistemas operativos que utiliza, la sistematización, lógica y/o la presentación general, así como las características y/o condiciones de acceso y/o uso de la Aplicación y de todos sus contenidos.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">8. Derechos de Propiedad Sobre el Contenido de La Aplicación</h2>
                <p>
                  Los derechos de propiedad intelectual del contenido de la Aplicación, su diseño gráfico y códigos son titularidad de UTS BIO S.A. y, por tanto, queda prohibida su reproducción, distribución, comunicación pública y transformación. Igualmente, todos los nombres comerciales, marcas o signos distintos de cualquier clase contenidos en la Aplicación están protegidos por ley.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">9. Servicios</h2>
                <p className="mb-4">
                  Una vez que se ha cerrado una oferta y ha sido aceptada tanto por el comprador como por el vendedor, SCRAPY no asume ninguna responsabilidad en cuanto al cumplimiento de la oferta, la calidad del producto o la veracidad de la información proporcionada por el vendedor. Cualquier problema que surja entre el comprador y el vendedor debe ser resuelto únicamente por ellos mismos, sin que SCRAPY tenga ninguna obligación de intervención en el asunto.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-6 mb-4">9.1. Planes</h3>
                <div className="grid gap-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h4 className="text-lg font-bold text-green-600 mb-2">9.1.1. Oferta Única</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Este plan incluye acceso a una oferta en especial.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede chatear con otros usuarios que acepten sus ofertas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede personalizar su perfil para recibir alertas de materiales.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="font-semibold">El costo de este plan es de $500.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h4 className="text-lg font-bold text-green-600 mb-2">9.1.2. Oferta Básica</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Este plan incluye 5 ofertas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede chatear con otros usuarios que acepten sus ofertas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede personalizar su perfil para recibir alertas de materiales.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="font-semibold">El costo de este plan es de $2000.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h4 className="text-lg font-bold text-green-600 mb-2">9.1.3. Oferta Inicial</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Este plan incluye 15 ofertas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede chatear con otros usuarios que acepten sus ofertas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede personalizar su perfil para recibir alertas de materiales.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="font-semibold">El costo de este plan es de $3500.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm border">
                    <h4 className="text-lg font-bold text-green-600 mb-2">9.1.4. Oferta Avanzada</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Este plan incluye ofertas ilimitadas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede observar todas las publicaciones existentes y filtrarlas según su interés.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede chatear con otros usuarios que acepten sus ofertas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario puede personalizar su perfil para recibir alertas de materiales.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>El usuario tiene acceso a Re-ofertar si su primera oferta es rechazada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="font-semibold">El costo de este plan es de $5000.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">10. Duración y Finalización del Acuerdo de Uso</h2>
                <p>
                  Cualquiera de las partes, Usuario o SCRAPY, puede terminar el acuerdo de uso de la Aplicación establecido de conformidad con estos Términos y Condiciones en cualquier momento y por cualquier motivo. "El conocimiento tanto del envío como de la aceptación de los Términos y condiciones precedentemente establecidos, se encuentran regidas por lo dispuesto en los Artículos 978 y 979 del Código Civil y Comercial de la Nación Argentina"
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">11. Privacidad</h2>
                <p>
                  Al utilizar la Aplicación, el Usuario acepta los términos de las Políticas de Privacidad de SCRAPY.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">12. Principio de Conservación</h2>
                <p>
                  En caso de que cualquiera de las cláusulas de los presentes Términos y Condiciones o del Contrato resultase inexigible o nula, total o parcialmente, en virtud de la legislación aplicable o porque así lo declarase un tribunal competente, las restantes cláusulas se conservarán plenamente vigentes y aplicables. En tal caso, SCRAPY, podrá sustituir la cláusula o cláusulas declaradas nulas o inaplicables por otra u otras válidas y que tengan el mismo objeto que las originarias.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">13. Jurisdicción y Ley Aplicable</h2>
                <div className="space-y-3">
                  <p>
                    Estos Términos y Condiciones y el Contrato estarán regidos en todos sus puntos por las leyes vigentes en la República Argentina. Cualquier controversia derivada del presente acuerdo, su existencia, validez, interpretación, alcance o cumplimiento, será sometida a los Tribunales ordinarios competentes de la Ciudad Autónoma de Buenos Aires.
                  </p>
                  <p>
                    El conocimiento tanto del envío como de la aceptación de los Términos y condiciones precedentemente establecidos, se encuentran regidas por lo dispuesto en los Artículos 978 y 979 del Código Civil y Comercial de la Nación Argentina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}