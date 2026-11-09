
'use client';

import { useState, useEffect } from 'react';
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isOpen
          ? 'bg-white shadow-lg'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <button
            type="button"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            onClick={() => scrollToSection('inicio')}
            aria-label="Axel García, ir al inicio"
          >
            <img src="/logo.svg" alt="" width={36} height={36} className="h-9 w-9" />
          </button>

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
        <div
          id="menu-movil"
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`md:hidden overflow-hidden bg-white ${isOpen ? 'max-h-96 shadow-lg' : 'max-h-0'} transition-[max-height] duration-200`}
        >
          <div className="py-2 space-y-1">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-200 rounded-md px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
