'use client';

import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const principles = [
  { title: 'Tecnología con intención', text: 'Primero el problema y el resultado.' },
  { title: 'Sistemas, no heroicidades', text: 'El equipo decide sin un héroe.' },
  { title: 'Resultados, no volumen', text: 'Importa el valor, no la cantidad.' },
];

const AboutSection = () => {
  const stats = [
    { icon: Briefcase, label: 'Años de experiencia', value: '4+' },
    { icon: User, label: 'Proyectos', value: '15+' },
    { icon: GraduationCap, label: 'Certificaciones', value: '8' },
    { icon: MapPin, label: 'Ubicación', value: 'Nicaragua' },
  ];

  return (
    <section id="sobre-mi" className="py-10 sm:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">mí</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Head of Technology en tizo
            </h3>

            <div className="space-y-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Empecé construyendo software. Hoy el trabajo es entender el problema primero y después armar el sistema correcto: ingeniería, producto, datos o IA.
              </p>
              <p>
                A veces ese sistema es código. A veces es una arquitectura, un proceso o un equipo que puede decidir sin depender de una sola persona.
              </p>
            </div>

            <ul className="mt-4 grid gap-2">
              {principles.map((item) => (
                <li key={item.title} className="flex gap-3 rounded-md bg-blue-50 px-3 py-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold text-gray-900">{item.title}.</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-4 rounded-lg shadow-lg text-center"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
