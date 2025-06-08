
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { Building, Calendar, Users, Code } from 'lucide-react';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      puesto: "Project Manager",
      empresa: "Tizo",
      periodo: "2024 / Actualidad",
      descripcion: "Responsable de planificar, ejecutar y cerrar proyectos dentro de la organización.",
      herramientas: ["Excel", "Jira", "Power BI", "Click Up", "Kubernetes", "Jenkins", "AWS"],
      tipo: "full-time",
      icon: Building
    },
    {
      puesto: "Lead Developer",
      empresa: "Tizo",
      periodo: "01/2022 – 12/2023",
      descripcion: "Liderar equipo para la creación de nuevas funcionalidades y mantenimiento del sistema.",
      herramientas: ["Kubernetes", "AWS", "Jenkins", "Sentry", "Jira", "Click Up", "SQL Server", "Node", "Express", "Python Fast API"],
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
      puesto: "Full Stack Developer",
      empresa: "Barter Capital",
      periodo: "01/2022 - 06/2022",
      descripcion: "Crear nuevas funcionalidades y mantener el software heredado.",
      herramientas: ["Postgres", "Python", "Fast API", "Django", "Angular", "React", "Nextjs", "AWS", "Github Actions"],
      tipo: "freelance",
      icon: Code
    },
    {
      puesto: "Junior Developer",
      empresa: "Archer Media Group",
      periodo: "09/2020 - 03/2021",
      descripcion: "Diseñar e Implementar Sistemas según la necesidad del Cliente",
      herramientas: ["Postgres", "Flask", "Nextjs", "Bluehost"],
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Mi <span className="text-gradient">Experiencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un recorrido por mi trayectoria profesional y los proyectos que han marcado mi carrera
          </p>
        </motion.div>

        {/* Experiencia Principal */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Building className="w-6 h-6 mr-3 text-customBlue-600" />
            Experiencia Profesional
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="timeline-item"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-customBlue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <exp.icon className="w-6 h-6 text-customBlue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-navy-900 mb-1">
                          {exp.puesto}
                        </h4>
                        <p className="text-customBlue-600 font-semibold mb-2">
                          {exp.empresa}
                        </p>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.periodo}</span>
                          </div>
                          <Badge 
                            value={getTypeLabel(exp.tipo)} 
                            className={`${getTypeColor(exp.tipo)} px-2 py-1 rounded-full text-xs font-medium`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiencia Freelance */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Code className="w-6 h-6 mr-3 text-customBlue-600" />
            Proyectos Freelance
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 project-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-customBlue-100 rounded-lg flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-customBlue-600" />
                    </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
