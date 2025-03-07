"use client"

import Image from "next/image"
import Link from "next/link"
import { ShineButton } from "@/components/ui/shine-button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Globe, Award, ChevronRight, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FloatingElement } from "@/components/floating-element"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-blue-100">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/img/logoetecsa.svg"
              alt="ETECSA Logo"
              width={60}
              height={60}
              className="rounded"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#process" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Proceso de iniciación
            </Link>
            <Link href="#standards" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Estándares globales
            </Link>
            <Link href="#success" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Historias de éxito
            </Link>
          </nav>
          <a href="https://etecsa.cu/">
            <ShineButton className="bg-blue-600 hover:bg-blue-700">Contáctanos</ShineButton>
          </a>
          
        </div>
      </header>
      <main className="flex-1 relative">
        {/* Floating Elements */}
        <FloatingElement shape="circle" color="#3B82F6" size={60} top="10%" left="5%" duration={15} />
        <FloatingElement shape="square" color="#60A5FA" size={40} top="30%" right="10%" duration={18} delay={1} />
        <FloatingElement shape="triangle" color="#93C5FD" size={50} bottom="20%" left="15%" duration={20} delay={2} />
        <FloatingElement shape="donut" color="#2563EB" size={70} top="60%" right="5%" duration={22} delay={3} />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <motion.div
            className="container flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div className="space-y-6 md:w-1/2" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900">
                Construyendo el futuro digital a través de la excelencia de nuestros egresados
              </h1>
              <p className="text-lg md:text-xl text-blue-700">
                El curso de iniciación de ETECSA está diseñado para preparar a la siguiente generación de los
                profesionales en las telecomunicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://etecsa.cu/">
                  <ShineButton className="bg-blue-600 hover:bg-blue-700 text-white">
                    Saber Más <ChevronRight className="ml-2 h-4 w-4" />
                  </ShineButton>
                </a>
              </div>
            </motion.div>
            <motion.div className="md:w-1/2 relative" variants={fadeIn}>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <Image
                src="/img/Hero section.jpg?height=500&width=600"
                alt="ETECSA Graduate Program"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Onboarding Process Section */}
        <section id="process" className="py-20 relative">
          <FloatingElement shape="circle" color="#BFDBFE" size={80} top="-5%" right="15%" duration={25} />
          <FloatingElement shape="square" color="#60A5FA" size={50} bottom="10%" left="5%" duration={28} delay={2} />
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestro proceso de iniciación</h2>
              <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                Un enfoque estructurado para introducir nuevos graduados en el entorno dinámico de telecomunicaciones de ETECSA
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div className="space-y-8" variants={fadeIn}>
                {[
                  {
                    icon: GraduationCap,
                    title: "Orientación inicial",
                    description:
                      "Una introducción comprensiva a la misión de ETECSA, valores y estructura organizacional a través de\n" +
                        "                      secciones interactivas.",
                  },
                  {
                    icon: Users,
                    title: "Conecta con tu tutor",
                    description: "A cada egresado se le asigna un tutor el cual proporciona una guía y soporte\n" +
                        "                      a través del proceso de iniciación.",
                  },
                  {
                    icon: Globe,
                    title: "Entrenamiento técnico",
                    description: "Entrenamiento especializado en tecnologías de las telecomunicaciones, infraestructura en redes y en\n" +
                        "                      los sistemas específicos de ETECSA.",
                  },
                  {
                    icon: Award,
                    title: "Integración en proyectos",
                    description: "Los egresados son integrados en proyectos los cuales aumentarán su responsabilidad para aplicar su conocimiento en\n" +
                        "                      escenarios prácticos.",
                  },
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start gap-4" variants={fadeIn}>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="relative" variants={fadeIn}>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <Image
                  src="/img/Class section.jpg?height=600&width=600"
                  alt="ETECSA Onboarding Process"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* <motion.div
              className="flex justify-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <ShineButton className="bg-blue-600 hover:bg-blue-700">
                Ver proceso detallado <ArrowRight className="ml-2 h-4 w-4" />
              </ShineButton>
            </motion.div> */}
          </div>
        </section>

        {/* Global Standards Section */}
        <section id="standards" className="py-20 bg-white/50 relative">
          <FloatingElement shape="donut" color="#60A5FA" size={60} bottom="15%" right="10%" duration={32} delay={1} />
          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Proceso de iniciación estándar y global</h2>
              <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                El programa de iniciación de ETECSA se alinea con estándares globales de la industria.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-gradient-to-br from-blue-500 to-teal-400 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Programa de preparación</h3>
                    <p>
                      Nuestro programa está diseñado para preparar a los egresados para un reconocimiento internacional en la rama
                      de las telecomunicaciones.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Image
                  src="/img/Initiation.jpg?height=300&width=400"
                  alt="Global Standards Comparison"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="bg-gradient-to-br from-teal-400 to-blue-500 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Mejores prácticas de la industria</h3>
                    <p>
                      Incorporamos las mejores prácticas para asegurar que nuestros egresados reciban un entrenamiento de clase mundial.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success" className="py-20 relative">
          <FloatingElement shape="square" color="#BFDBFE" size={90} top="-5%" right="5%" duration={35} />
          <FloatingElement shape="circle" color="#60A5FA" size={70} bottom="10%" left="10%" duration={38} delay={2} />
          <div className="container relative z-10">
            <motion.div
                className="text-center mb-16"
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Historias de éxito</h2>
              <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                Conozca a algunos de los egresados de nuestro programa que ahora están haciendo contribuciones
                significativas
                a ETECSA y a la infraestructura de telecomunicaciones de Cuba
              </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                variants={staggerChildren}
            >
              {[
                {
                  name: "Alejandro Nuñez",
                  position: "Especialista en gestión de recursos humanos",
                  testimonial: "De manera general fue productivo, aprendí de la empresa y sus diferentes áreas, cuando lo único que sabía era el nombre. Pude recibir de primera mano conocimientos sobre las funciones y procesos dentro de la empresa. Obtuve contactos, hice amistades y cree relaciones que tiempo después pude aprovechar.",
                  imageSrc: "/placeholder.svg?height=300&width=400"
                },
                {
                  name: "María Rodríguez",
                  position: "Analista de marketing digital",
                  testimonial: "La experiencia superó mis expectativas. No solo pude aplicar lo aprendido en mis estudios, sino que también descubrí nuevas herramientas y metodologías que han transformado mi visión profesional. El equipo me integró desde el primer día y me permitió participar en proyectos reales.",
                  imageSrc: "/placeholder.svg?height=300&width=400"
                },
                {
                  name: "Carlos Gutiérrez",
                  position: "Desarrollador de software",
                  testimonial: "Mi paso por la empresa me permitió fortalecer mis conocimientos técnicos y desarrollar habilidades blandas esenciales. Trabajar en equipos multidisciplinarios me enseñó la importancia de la comunicación efectiva y la colaboración. Esta experiencia fue determinante para definir mi ruta profesional.",
                  imageSrc: "/placeholder.svg?height=300&width=400"
                }
              ].map((graduate, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-[4/3] relative">
                        <Image
                            src={graduate.imageSrc}
                            alt={`Graduate Success Story - ${graduate.name}`}
                            fill
                            className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{graduate.name}</h3>
                        <p className="text-sm text-blue-600 mb-4">{graduate.position}</p>
                        <p className="text-gray-700">"{graduate.testimonial}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-400 text-white relative">
          <FloatingElement shape="donut" color="#FFFFFF" size={100} top="-10%" left="5%" duration={40}/>
          <FloatingElement
              shape="triangle"
              color="#FFFFFF"
              size={80}
              bottom="-5%"
              right="10%"
              duration={42}
              delay={1}
          />
          <motion.div
              className="container text-center relative z-10"
              initial="initial"
              whileInView="animate"
              viewport={{once: true}}
              variants={staggerChildren}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeIn}>
              Únete al curso de iniciación de ETECSA
            </motion.h2>
            <motion.p className="text-xl max-w-2xl mx-auto mb-8" variants={fadeIn}>
              Toma el primer paso a través de una recompensante carrera en la industria de telecomunicaciones de Cuba
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
              <ShineButton className="bg-white text-blue-600 hover:bg-blue-50">Aplica ahora</ShineButton>
              <a href="https://etecsa.cu">
                <ShineButton variant="outline" className="border-white text-blue-600 hover:bg-blue-500">
                  Obtener más información
                </ShineButton>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12 relative">
        <FloatingElement shape="circle" color="#1E3A8A" size={120} top="-10%" right="5%" duration={45}/>
        <FloatingElement shape="square" color="#1E3A8A" size={100} bottom="-5%" left="10%" duration={48} delay={2}/>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces rápido</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Sobre ETECSA
                  </Link>
                </li>
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Noticias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Programa de los egresados</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Proceso de aplicación
                  </Link>
                </li>
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Detalles del programa
                  </Link>
                </li>
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="https://etecsa.cu" className="text-blue-200 hover:text-white transition-colors">
                    Declaraciones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <address className="not-italic text-blue-200">
                <p>Centro de Negocios Miramar, Edif. Beijing, Av. 3ra, Playa, La Habana.</p>
                <p className="mt-2">Correo electrónico: atencion.usuarios@etecsa.cu</p>
                <p className="mt-2">118 Información comercial y atención a quejas y reclamos</p>
              </address>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>© {new Date().getFullYear()} ETECSA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

