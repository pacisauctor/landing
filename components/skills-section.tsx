
'use client';

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
    <section id="habilidades" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinación de competencias técnicas y habilidades blandas que me permiten liderar proyectos exitosos
          </p>
        </div>

        {/* Habilidades Técnicas */}
        <div className="mb-8">
          <h3
            className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2"
          >
            <Code className="w-6 h-6 text-customBlue-600 shrink-0" aria-hidden="true" />
            Habilidades Técnicas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
              >
                <Card className="h-full p-4 sm:p-5 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-center mb-6 min-w-0 gap-3">
                    <div className={`w-10 h-10 ${category.bgColor} rounded-full flex items-center justify-center shrink-0`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} aria-hidden="true" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-navy-900 leading-tight">
                      {category.categoria}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
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
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <h3
            className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2"
          >
            <Heart className="w-6 h-6 text-red-500 shrink-0" aria-hidden="true" />
            Habilidades Blandas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
              >
                <Card className="p-4 sm:p-5 h-full hover:shadow-xl transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <skill.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
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
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
