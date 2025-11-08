
'use client';

import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Briefcase, label: 'Años de Experiencia', value: '4+' },
    { icon: User, label: 'Proyectos Completados', value: '15+' },
    { icon: GraduationCap, label: 'Certificaciones', value: '8' },
    { icon: MapPin, label: 'Ubicación', value: 'Nicaragua' },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre mi trayectoria profesional y personal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mi Historia Profesional
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Soy un profesional apasionado por la tecnología con más de 5 años de experiencia 
                  en gestión de proyectos y desarrollo de software. Mi enfoque se centra en crear 
                  soluciones innovadoras que generen valor real para las empresas y sus usuarios.
                </p>
                
                <p>
                  A lo largo de mi carrera, he liderado equipos multidisciplinarios, implementado 
                  metodologías ágiles y desarrollado aplicaciones web y móviles que han impactado 
                  positivamente en diversos sectores industriales.
                </p>
                
                <p>
                  Mi objetivo es seguir creciendo profesionalmente mientras contribuyo al éxito 
                  de proyectos desafiantes que marquen la diferencia en el mundo digital.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;