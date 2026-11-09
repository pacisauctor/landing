'use client';

import { Download, Phone } from 'lucide-react';
import Image from 'next/image';
import { CALENDAR_URL, CV_PATH } from '@/lib/external-links';

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-blue-100 overflow-x-hidden pt-20 pb-8 sm:pt-24 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Axel García
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-700 font-semibold mb-3">
              Head of Technology en tizo
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-5 max-w-xl mx-auto lg:mx-0">
              Entiendo el problema primero y después armo el sistema: ingeniería, producto, datos e IA, con equipos que pueden decidir.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Agendar una llamada
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>

              <a
                href={CV_PATH}
                download="Axel-Garcia-CV.pdf"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
              >
                <Download className="w-5 h-5 shrink-0" aria-hidden="true" />
                Descargar CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #60a5fa, #1d4ed8, #60a5fa)' }}
              />
              <div className="absolute inset-1 bg-white rounded-full overflow-hidden shadow-md sm:inset-1.5">
                <Image
                  src="/images/axel-garcia.webp"
                  alt="Axel García"
                  fill
                  sizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 144px"
                  className="object-cover object-[center_22%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
