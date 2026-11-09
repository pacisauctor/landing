
'use client';

import { Heart, ArrowUp } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/external-links';

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
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <div
              className="mb-4 flex flex-col items-center md:items-start gap-3"
            >
              <img src="/logo.svg" alt="" width={36} height={36} className="h-9 w-9 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Axel García
                </h3>
                <p className="text-blue-50 text-sm">
                  Head of Technology en tizo
                </p>
              </div>
            </div>
            
            <p
              className="text-blue-50 text-sm leading-relaxed"
            >
              Problemas de negocio, sistemas y equipos. Tecnología con intención.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <h4
              className="text-lg font-semibold mb-4 text-white"
            >
              Enlaces Rápidos
            </h4>
            
            <div
              className="space-y-2"
            >
              {[
                { name: 'Inicio', to: 'inicio' },
                { name: 'Sobre Mí', to: 'sobre-mi' },
                { name: 'Experiencia', to: 'experiencia' },
                { name: 'Contacto', to: 'contacto' }
              ].map((link) => (
                <button
                  type="button"
                  key={link.to}
                  onClick={() => scrollToSection(link.to)}
                  className="block w-full text-center text-blue-50 hover:text-white transition-colors duration-200 cursor-pointer text-sm py-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right">
            <h4
              className="text-lg font-semibold mb-4 text-white"
            >
              Contacto
            </h4>
            
            <div
              className="space-y-2 text-sm"
            >
              <p className="text-blue-50">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white break-all transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-blue-50">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  (505) 88360570
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div
          className="border-t border-white/40 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="text-blue-50 text-sm mb-4 md:mb-0 flex items-center"
            >
              © {currentYear} Axel García. Hecho con{' '}
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              en Nicaragua
            </p>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-blue-50 hover:text-white transition-colors duration-200 text-sm rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
