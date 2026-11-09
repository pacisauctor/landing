
'use client';

import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { Building, Calendar, Users, Code } from 'lucide-react';

const ExperienceSection = () => {

  const experiences = [
    {
      puesto: "Head of Technology",
      empresa: "tizo",
      periodo: "01/2026 – Actualidad",
      descripcion: "Dirección de ingeniería, producto, datos e IA para convertir problemas de negocio en tecnología con valor medible.",
      herramientas: ["Jira", "AWS", "Kubernetes", "Python", "SQL Server", "Jenkins"],
      tipo: "full-time",
      icon: Building
    },
    {
      puesto: "Head of Delivery & Engineering Operations",
      empresa: "tizo",
      periodo: "2024 – 12/2025",
      descripcion: "Responsable de planificar, ejecutar y cerrar proyectos dentro de la organización.",
      herramientas: ["Jira", "Kubernetes", "Jenkins", "AWS", "Java", "Angular", "Python", "SQL Server"],
      tipo: "full-time",
      icon: Building
    },
    {
      puesto: "Backend Lead Developer",
      empresa: "tizo",
      periodo: "01/2022 – 12/2023",
      descripcion: "Liderar equipo para la creación de nuevas funcionalidades y mantenimiento del sistema.",
      herramientas: ["Kubernetes", "AWS", "Jenkins", "Sentry", "Jira", "SQL Server", "Node", "Express", "Python Fast API"],
      tipo: "full-time",
      icon: Code
    },
    {
      puesto: "Lead Course",
      empresa: "Web50x.ni • Fundación UNO",
      periodo: "06/2021 - 12/2021",
      descripcion: "Liderar un curso impartido por la fundación UNO, organizar cursos, gestión de personal y estudiantes.",
      herramientas: ["Google Sheets", "Excel", "Postgres", "Python", "Flask", "Javascript", "Sockets", "Django"],
      tipo: "education",
      icon: Users
    },
    {
      puesto: "Main Teacher Assistant",
      empresa: "CS50x.ni • Fundación UNO",
      periodo: "06/2019 - 06/2021, 01/2022-06/2022",
      descripcion: "Dar clases y dar asistencia a los estudiantes en sus proyectos.",
      herramientas: ["Google Sheets", "Excel", "SQL", "Python", "Flask", "Javascript", "Sockets", "Django"],
      tipo: "education",
      icon: Users
    }
  ];

  const freelanceExperiences = [
    {
      puesto: "VP Of Engineering",
      empresa: "Canela",
      periodo: "12/2024 - Actualidad",
      descripcion: "Crear sistemas de gestión de proyectos y equipos de desarrollo.",
      herramientas: ["AWS", "NestJS", "Nextjs", "Flutter"],
      tipo: "freelance",
      icon: Code
    },
    {
      puesto: "Full Stack Developer",
      empresa: "Barter Capital",
      periodo: "01/2022 - 06/2022",
      descripcion: "Crear nuevas funcionalidades y mantener el software heredado.",
      herramientas: ["Postgres", "Python", "Fast API", "Django", "Angular", "React", "Nextjs", "AWS", "Github Actions"],
      tipo: "freelance",
      icon: Code
    },
    {
      puesto: "Developer",
      empresa: "Breve Tech",
      periodo: "06/2019 - Actualidad",
      descripcion: "Diseñar e Implementar Sistemas según la necesidad del Cliente",
      herramientas: ["Java", "React", "Django Rest Framework", "AWS", "Postgres", "Reportería con Python"],
      tipo: "freelance",
      icon: Code
    }
  ];

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'freelance':
        return 'bg-blue-100 text-blue-800';
      case 'education':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (tipo: string) => {
    switch (tipo) {
      case 'full-time':
        return 'Tiempo Completo';
      case 'freelance':
        return 'Freelance';
      case 'education':
        return 'Educación';
      default:
        return tipo;
    }
  };

  return (
    <section id="experiencia" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Mi <span className="text-gradient">Experiencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un recorrido por mi trayectoria profesional y los proyectos que han marcado mi carrera
          </p>
        </div>

        {/* Experiencia Principal */}
        <div className="mb-8">
          <h3
            className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2"
          >
            <Building className="w-6 h-6 text-customBlue-600 shrink-0" aria-hidden="true" />
            Experiencia Profesional
          </h3>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item"
              >
                <Card className="p-4 sm:p-5 hover:shadow-xl transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    {/* Izquierda: Icono + Puesto — Empresa */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 min-w-0">
                          <span className="text-lg md:text-xl font-bold text-navy-900">{exp.puesto}</span>
                          <span className="text-gray-400" aria-hidden="true">—</span>
                          <span className="text-customBlue-600 font-semibold">{exp.empresa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Derecha: Periodo + Tipo */}
                    <div className="flex items-center gap-3 text-gray-500 sm:justify-end whitespace-nowrap flex-shrink-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.periodo}</span>
                      </div>
                      <Badge 
                        value={getTypeLabel(exp.tipo)} 
                        className={`${getTypeColor(exp.tipo)} px-2 py-1 rounded-full text-xs font-medium`}
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {exp.descripcion}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.herramientas.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        value={tool}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      />
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia Freelance */}
        <div>
          <h3
            className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2"
          >
            <Code className="w-6 h-6 text-customBlue-600 shrink-0" aria-hidden="true" />
            Proyectos Freelance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceExperiences.map((exp, index) => (
              <div
                key={index}
              >
                <Card className="p-4 sm:p-5 h-full hover:shadow-xl transition-all duration-200 project-card">
                  <div className="flex items-center mb-4">
                    <Badge 
                      value={getTypeLabel(exp.tipo)} 
                      className={`${getTypeColor(exp.tipo)} px-2 py-1 rounded-full text-xs font-medium`}
                    />
                  </div>
                  
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    {exp.puesto}
                  </h4>
                  
                  <p className="text-customBlue-600 font-semibold mb-2">
                    {exp.empresa}
                  </p>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{exp.periodo}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {exp.descripcion}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {exp.herramientas.slice(0, 4).map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        value={tool}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      />
                    ))}
                    {exp.herramientas.length > 4 && (
                      <Badge
                        value={`+${exp.herramientas.length - 4}`}
                        className="bg-customBlue-100 text-customBlue-700 px-2 py-1 rounded text-xs"
                      />
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
