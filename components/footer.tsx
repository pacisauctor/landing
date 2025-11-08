
'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                Axel García
              </h3>
              <p className="text-gray-300 text-sm">
                Head of Delivery & Engineering Operations en Tizo
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              Transformando ideas en soluciones tecnológicas innovadoras 
              con más de 5 años de experiencia en gestión de proyectos y desarrollo.
            </motion.p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold mb-4 text-blue-300"
            >
              Enlaces Rápidos
            </motion.h4>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              {[
                { name: 'Inicio', to: 'inicio' },
                { name: 'Sobre Mí', to: 'sobre-mi' },
                { name: 'Experiencia', to: 'experiencia' },
                { name: 'Proyectos', to: 'proyectos' },
                { name: 'Contacto', to: 'contacto' }
              ].map((link) => (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="block w-full text-left text-gray-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer text-sm"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-semibold mb-4 text-blue-300"
            >
              Contacto
            </motion.h4>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2 text-sm"
            >
              <p className="text-gray-400">
                <a 
                  href="mailto:agarciadarce@gmail.com"
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  agarciadarce@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a 
                  href="https://wa.me/50588360570"
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  (505) 88360570
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Línea divisoria */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
            >
              © {currentYear} Axel García. Hecho con{' '}
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              en Nicaragua
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
