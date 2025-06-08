
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      nombre: "Gestión de Proyectos en Tizo",
      descripcion: "Sistema integral de planificación, ejecución y cierre de proyectos organizacionales con dashboards en tiempo real y automatización de procesos.",
      tecnologias: ["Excel", "Jira", "Power BI", "Click Up", "Kubernetes", "Jenkins", "AWS"],
      rol: "Project Manager",
      imagen: "https://i.pinimg.com/originals/61/a3/fc/61a3fcacb6f81a4fca834c9c82e0f8eb.jpg",
      destacado: true,
      categoria: "Gestión"
    },
    {
      nombre: "Desarrollo de Sistema en Tizo",
      descripcion: "Liderazgo de equipo para el desarrollo de nuevas funcionalidades y mantenimiento de sistemas críticos con arquitectura de microservicios.",
      tecnologias: ["Kubernetes", "AWS", "Jenkins", "Sentry", "Node", "Express", "Python Fast API"],
      rol: "Lead Developer",
      imagen: "https://i.pinimg.com/originals/98/1b/89/981b89570cb0eac2a5e6694468c09b4b.png",
      destacado: true,
      categoria: "Desarrollo"
    },
    {
      nombre: "Curso Web50x.ni",
      descripcion: "Programa educativo completo de desarrollo web full-stack, formando a más de 100 estudiantes en tecnologías modernas.",
      tecnologias: ["Python", "Flask", "Javascript", "Django", "Postgres"],
      rol: "Lead Course",
      imagen: "https://i.ytimg.com/vi/lA-fXj2fD1s/maxresdefault.jpg",
      destacado: false,
      categoria: "Educación"
    },
    {
      nombre: "Sistema E-commerce",
      descripcion: "Plataforma de comercio electrónico completa con gestión de inventario, pagos y analytics avanzados.",
      tecnologias: ["React", "NextJS", "Django Rest Framework", "AWS", "Postgres"],
      rol: "Full Stack Developer",
      imagen: "https://i.pinimg.com/originals/99/4b/92/994b92f9a4e5b74ec99d98a6f049cd72.png",
      destacado: false,
      categoria: "Desarrollo"
    },
    {
      nombre: "Dashboard Analytics",
      descripcion: "Sistema de análisis de datos en tiempo real con visualizaciones interactivas y reportería automatizada.",
      tecnologias: ["Python", "Power BI", "SQL Server", "AWS", "Docker"],
      rol: "Data Engineer",
      imagen: "https://i.pinimg.com/originals/58/a4/b5/58a4b5d6f846bf130988cc988322824c.jpg",
      destacado: false,
      categoria: "Análisis"
    },
    {
      nombre: "API Gateway",
      descripcion: "Arquitectura de microservicios con gateway centralizado para manejo de autenticación y routing.",
      tecnologias: ["Node", "Express", "Kubernetes", "Jenkins", "AWS"],
      rol: "Backend Developer",
      imagen: "https://lh3.googleusercontent.com/n8fJmHmrnY7FT6uMoQQk8pt9NBSEOWoEETc8xKC4Ajlr024EpcDxDwKwMuld1yxTbOR1dfOZ2ed16DkYMGbx3FDlu9eF0LkPjmPIx5-sSI1nW2rZwYDsfQ0UbCJzQKDQrtX1V8D_ZYfU9E9bw_B-CO0",
      destacado: false,
      categoria: "Infraestructura"
    }
  ];

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case 'Gestión':
        return 'bg-green-100 text-green-800';
      case 'Desarrollo':
        return 'bg-blue-100 text-blue-800';
      case 'Educación':
        return 'bg-purple-100 text-purple-800';
      case 'Análisis':
        return 'bg-orange-100 text-orange-800';
      case 'Infraestructura':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="proyectos" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo y gestión
          </p>
        </motion.div>

        {/* Proyectos Destacados */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Star className="w-6 h-6 mr-3 text-yellow-500" />
            Proyectos Destacados
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.destacado).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="overflow-hidden h-full project-card">
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={project.imagen}
                      alt={project.nombre}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        value={project.categoria} 
                        className={`${getCategoryColor(project.categoria)} px-3 py-1 rounded-full text-sm font-medium`}
                      />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-navy-900 flex-1">
                        {project.nombre}
                      </h4>
                      <Folder className="w-6 h-6 text-customBlue-600 ml-2" />
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.descripcion}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-customBlue-600 mb-2 block">
                        Rol: {project.rol}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tecnologias.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          value={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        />
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        label="Ver Detalles" 
                        icon={<ExternalLink className="w-4 h-4" />}
                        className="btn-primary flex-1"
                        size="small"
                      />
                      <Button 
                        icon={<Github className="w-4 h-4" />}
                        className="btn-secondary"
                        size="small"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Otros Proyectos */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Folder className="w-6 h-6 mr-3 text-customBlue-600" />
            Otros Proyectos
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.destacado).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full project-card">
                  <div className="relative h-32 bg-gray-200 mb-4">
                    <Image
                      src={project.imagen}
                      alt={project.nombre}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge 
                        value={project.categoria} 
                        className={`${getCategoryColor(project.categoria)} px-2 py-1 rounded text-xs font-medium`}
                      />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-navy-900 mb-2">
                      {project.nombre}
                    </h4>
                    
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {project.descripcion}
                    </p>
                    
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-customBlue-600">
                        {project.rol}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tecnologias.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          value={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        />
                      ))}
                      {project.tecnologias.length > 3 && (
                        <Badge
                          value={`+${project.tecnologias.length - 3}`}
                          className="bg-customBlue-100 text-customBlue-700 px-2 py-1 rounded text-xs"
                        />
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        label="Ver" 
                        icon={<ExternalLink className="w-3 h-3" />}
                        className="btn-primary flex-1"
                        size="small"
                      />
                      <Button 
                        icon={<Github className="w-3 h-3" />}
                        className="btn-secondary"
                        size="small"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 gradient-blue text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Me encantaría colaborar contigo en tu próximo proyecto
            </p>
            <Button 
              label="Hablemos" 
              icon={<ExternalLink className="w-5 h-5" />}
              className="bg-white text-customBlue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
