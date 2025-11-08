
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';

const CertificatesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      nombre: "Oracle Certified Associate, Java SE 8 Programmer",
      institucion: "Oracle",
      año: "2020",
      categoria: "Desarrollo",
      destacado: true,
      descripcion: "Certificación oficial de Oracle que valida competencias en programación Java SE 8",
      imagen: "https://i.ytimg.com/vi/lWKIVLAIGnc/maxresdefault.jpg"
    },
    {
      nombre: "PCEP – Certified Entry-Level Python Programmer Certification",
      institucion: "Python Institute",
      año: "2022",
      categoria: "Desarrollo",
      destacado: true,
      descripcion: "Certificación que demuestra conocimientos fundamentales en programación Python",
      imagen: "https://i.ytimg.com/vi/v2_33NeK7FY/maxresdefault.jpg"
    },
    {
      nombre: "Scrum Foundation Professional Certificate",
      institucion: "CertiProf",
      año: "2020",
      categoria: "Gestión",
      destacado: true,
      descripcion: "Certificación en metodologías ágiles y framework Scrum para gestión de proyectos",
      imagen: "https://images.credly.com/images/9b5339d8-c2cc-4dfc-9972-3ab7e68a98ac/BADGED_A-SDC.png"
    },
    {
      nombre: "Student CS50x.ni",
      institucion: "Fundación UNO - Harvard",
      año: "2018",
      categoria: "Educación",
      destacado: false,
      descripcion: "Curso introductorio de ciencias de la computación de Harvard University",
      imagen: "https://i.ytimg.com/vi/8mAITcNt710/maxresdefault.jpg"
    },
    {
      nombre: "Teacher CS50x.ni",
      institucion: "Fundación UNO - Harvard",
      año: "2018",
      categoria: "Educación",
      destacado: false,
      descripcion: "Certificación como instructor del curso CS50x de Harvard University",
      imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFyWLlozZr_6iLvWZ_LNRDTL9-5acX6HX2ke8Ya4Fr1eUyIlfRENrOQ6eglFua7c0aDVW3U21QY4ftrcFWG3GsCe-I7o5zJArnpswMI5iPaQHtY8i4dqTsl02swM3TlBE_Pfcv-w/w1200-h630-p-k-no-nu/Harvard+Higher+Ed+Teaching+Certificate.png"
    },
    {
      nombre: "Curso Excel Avanzado",
      institucion: "Universidad Nacional de Ingeniería",
      año: "2024",
      categoria: "Análisis",
      destacado: false,
      descripcion: "Especialización en análisis de datos y funciones avanzadas de Excel",
      imagen: "https://i.ytimg.com/vi/_XfWkCsvbEU/maxresdefault.jpg"
    },
    {
      nombre: "Introducción a la Ciencia de Datos",
      institucion: "Colegio de Economistas de Lima - Perú",
      año: "2019",
      categoria: "Análisis",
      destacado: false,
      descripcion: "Fundamentos de ciencia de datos, estadística y análisis predictivo",
      imagen: "https://i.pinimg.com/originals/6e/23/9b/6e239ba5f13ad077f95cc6235d97adeb.png"
    },
    {
      nombre: "Especialización de Ciencia de Datos",
      institucion: "CEABAD",
      año: "2021",
      categoria: "Análisis",
      destacado: false,
      descripcion: "Programa especializado en técnicas avanzadas de análisis de datos",
      imagen: "https://i.pinimg.com/originals/2d/77/47/2d7747c7283f87cf9b1abf8cdba9ce11.png"
    }
  ];

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case 'Desarrollo':
        return 'bg-blue-100 text-blue-800';
      case 'Gestión':
        return 'bg-green-100 text-green-800';
      case 'Educación':
        return 'bg-purple-100 text-purple-800';
      case 'Análisis':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (categoria: string) => {
    switch (categoria) {
      case 'Desarrollo':
        return '💻';
      case 'Gestión':
        return '📊';
      case 'Educación':
        return '🎓';
      case 'Análisis':
        return '📈';
      default:
        return '📜';
    }
  };

  return (
    <section id="certificados" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Mis <span className="text-gradient">Certificaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certificaciones y cursos que respaldan mi experiencia y compromiso con el aprendizaje continuo
          </p>
        </motion.div>

        {/* Certificaciones Destacadas */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Star className="w-6 h-6 mr-3 text-yellow-500" />
            Certificaciones Destacadas
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.filter(cert => cert.destacado).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full overflow-hidden project-card">
                  <div className="relative h-40 bg-gradient-to-br from-customBlue-100 to-customBlue-200">
                    <Image
                      src={cert.imagen}
                      alt={cert.nombre}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        value={cert.categoria} 
                        className={`${getCategoryColor(cert.categoria)} px-3 py-1 rounded-full text-sm font-medium`}
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-5 h-5 text-customBlue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-start items-start">
                    <h4 className="text-lg font-bold text-navy-900 mb-2 leading-tight">
                      {cert.nombre}
                    </h4>
                    
                    <p className="text-customBlue-600 font-semibold mb-2">
                      {cert.institucion}
                    </p>
                    
                    <div className="flex items-center justify-start text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{cert.año}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {cert.descripcion}
                    </p>
                    
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Otras Certificaciones */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Award className="w-6 h-6 mr-3 text-customBlue-600" />
            Otras Certificaciones y Cursos
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.filter(cert => !cert.destacado).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={cert.imagen}
                        alt={cert.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-start items-start">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-navy-900 leading-tight">
                          {cert.nombre}
                        </h4>
                        <Badge 
                          value={cert.categoria} 
                          className={`${getCategoryColor(cert.categoria)} px-2 py-1 rounded text-xs font-medium ml-2`}
                        />
                      </div>
                      
                      <p className="text-customBlue-600 font-semibold mb-2">
                        {cert.institucion}
                      </p>
                      
                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{cert.año}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {cert.descripcion}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estadísticas de Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8 gradient-blue text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Compromiso con la Excelencia
              </h3>
              <p className="text-lg opacity-90">
                Mi dedicación al aprendizaje continuo se refleja en mis certificaciones
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-sm opacity-90">Certificaciones</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Áreas de Especialización</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-sm opacity-90">Años de Formación</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm opacity-90">Certificaciones Destacadas</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
