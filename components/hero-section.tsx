
'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Axel García
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-semibold mb-6"
            >
              Head of Delivery & Engineering Operations en tizo
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Especializado en gestión de proyectos y desarrollo de software con más de 4 años de experiencia 
              liderando equipos y creando soluciones tecnológicas innovadoras.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contáctame
              </button>
              
              <button 
                onClick={() => window.open('#', '_blank')}
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </button>
            </motion.div>
          </motion.div>
          
          {/* Imagen de perfil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div
                  className="absolute inset-0 rounded-full spin-slow"
                  style={{ background: 'conic-gradient(from 0deg, #60a5fa, #1d4ed8, #60a5fa)' }}
                ></div>
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="axel.jpg"
                    alt="Axel García - Project Manager & Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('sobre-mi')}
        >
          <ChevronDown className="w-8 h-8 text-blue-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
