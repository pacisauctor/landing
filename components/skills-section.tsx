
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { ProgressBar } from 'primereact/progressbar';
import { 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  Users, 
  Brain, 
  Heart, 
  Target,
  Lightbulb,
  MessageCircle
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    {
      categoria: "Gestión de Proyectos",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
      skills: [
        { name: "Excel", level: 95 },
        { name: "Jira", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "Click Up", level: 88 }
      ]
    },
    {
      categoria: "Desarrollo Backend",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      skills: [
        { name: "Python", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "Java", level: 85 },
        { name: "Fast API", level: 90 }
      ]
    },
    {
      categoria: "Desarrollo Frontend",
      icon: Settings,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      skills: [
        { name: "React", level: 90 },
        { name: "NextJS", level: 88 },
        { name: "Angular", level: 80 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      categoria: "Base de Datos",
      icon: Database,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "SQL Server", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      categoria: "Cloud & DevOps",
      icon: Cloud,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 82 },
        { name: "Docker", level: 80 }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Comunicación Efectiva",
      icon: MessageCircle,
      description: "Capacidad para transmitir ideas complejas de manera clara y concisa",
      level: 95
    },
    {
      name: "Liderazgo",
      icon: Users,
      description: "Experiencia liderando equipos multidisciplinarios hacia objetivos comunes",
      level: 92
    },
    {
      name: "Pensamiento Crítico",
      icon: Brain,
      description: "Análisis profundo de problemas y desarrollo de soluciones innovadoras",
      level: 90
    },
    {
      name: "Creatividad",
      icon: Lightbulb,
      description: "Enfoque creativo para resolver desafíos técnicos y de gestión",
      level: 88
    },
    {
      name: "Empatía",
      icon: Heart,
      description: "Comprensión y consideración de las perspectivas del equipo y clientes",
      level: 94
    },
    {
      name: "Resiliencia",
      icon: Target,
      description: "Capacidad para adaptarse y superar obstáculos en proyectos complejos",
      level: 91
    }
  ];

  return (
    <section id="habilidades" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinación de competencias técnicas y habilidades blandas que me permiten liderar proyectos exitosos
          </p>
        </motion.div>

        {/* Habilidades Técnicas */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Code className="w-6 h-6 mr-3 text-customBlue-600" />
            Habilidades Técnicas
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-navy-900">
                      {category.categoria}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-customBlue-600">
                            {skill.level}%
                          </span>
                        </div>
                        <ProgressBar 
                          value={skill.level} 
                          className="h-2"
                          style={{ 
                            backgroundColor: '#e5e7eb',
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl font-bold text-navy-900 mb-8 flex items-center"
          >
            <Heart className="w-6 h-6 mr-3 text-red-500" />
            Habilidades Blandas
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-customBlue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-6 h-6 text-customBlue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-bold text-navy-900">
                          {skill.name}
                        </h4>
                        <Badge 
                          value={`${skill.level}%`} 
                          className="bg-customBlue-100 text-customBlue-700 px-3 py-1 rounded-full text-sm font-medium"
                        />
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {skill.description}
                      </p>
                      
                      <ProgressBar 
                        value={skill.level} 
                        className="h-2"
                        style={{ 
                          backgroundColor: '#e5e7eb',
                        }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resumen de Competencias */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <Card className="p-8 gradient-blue text-white text-center">
            <h3 className="text-2xl font-bold mb-6">
              Combinación Perfecta de Habilidades
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Años de Experiencia</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-lg opacity-90">Tecnologías Dominadas</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Proyectos Completados</div>
              </div>
            </div>
            
            <p className="text-lg opacity-90 mt-6 max-w-2xl mx-auto">
              Mi enfoque integral combina expertise técnico con habilidades de liderazgo, 
              permitiéndome entregar soluciones completas que superan las expectativas.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
