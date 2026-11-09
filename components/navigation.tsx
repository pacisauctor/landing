
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Inicio', to: 'inicio' },
    { name: 'Sobre Mí', to: 'sobre-mi' },
    { name: 'Experiencia', to: 'experiencia' },
    { name: 'Habilidades', to: 'habilidades' },
    { name: 'Certificados', to: 'certificados' },
    { name: 'Contacto', to: 'contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, 50);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-white shadow-lg'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            onClick={() => scrollToSection('inicio')}
            aria-label="Axel García, ir al inicio"
          >
            <img src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 rounded-md px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="menu-movil"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`md:hidden overflow-hidden ${isOpen ? 'bg-white shadow-lg' : ''}`}
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 rounded-md px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
