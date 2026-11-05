
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send,
  Coffee,
  MessageCircle
} from 'lucide-react';
import { CONTACT_EMAIL, EXTERNAL_LINKS, WHATSAPP_URL } from '@/lib/external-links';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contacto desde el portafolio');
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '(505) 88360570',
      link: WHATSAPP_URL
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+505 8836 0570',
      link: WHATSAPP_URL
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: EXTERNAL_LINKS.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: EXTERNAL_LINKS.github,
      color: 'hover:text-gray-900'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      link: WHATSAPP_URL,
      color: 'hover:text-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      link: `mailto:${CONTACT_EMAIL}`,
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Hablemos de tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes una idea en mente? Me encantaría escuchar sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6 mb-8 flex flex-col justify-start items-start">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="space-y-1 w-full"
                  >
                    <p className="text-sm font-medium text-gray-500">
                      {info.label}
                    </p>
                    <a 
                      href={info.link}
                      className="text-navy-900 font-semibold hover:text-customBlue-600 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap w-full sm:w-auto min-w-0 overflow-hidden"
                    >
                      <span className="truncate max-w-full">{String(info.value).replace(/\s/g, '\u00A0')}</span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Redes Sociales */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-navy-900 mb-4">
                  Sígueme en Redes Sociales
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target={social.link ? '_blank' : undefined}
                      rel={social.link ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                      aria-disabled={social.link ? undefined : true}
                      onClick={(event) => {
                        if (!social.link) event.preventDefault();
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className={`social-link ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Buy Me a Coffee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Coffee className="w-6 h-6 text-yellow-600" />
                  <h4 className="text-lg font-bold text-gray-900">
                    ¿Te gusta mi trabajo?
                  </h4>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Si mi trabajo te ha sido útil o inspirador, considera invitarme un café. 
                  Tu apoyo me ayuda a seguir creando contenido de calidad.
                </p>
                <Button 
                  label="Invítame un Café" 
                  icon={<Coffee className="w-4 h-4" />}
                  className="coffee-btn w-full"
                  onClick={() => {
                    if (!EXTERNAL_LINKS.buyMeACoffee) return;
                    window.open(EXTERNAL_LINKS.buyMeACoffee, '_blank', 'noopener,noreferrer');
                  }}
                />
              </motion.div>
            </Card>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Envíame un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <InputText
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <InputText
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <InputText
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="¿De qué quieres hablar?"
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <InputTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows={6}
                    className="form-textarea"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  label="Enviar por correo"
                  icon={<Send className="w-5 h-5" />}
                  className="btn-primary w-full"
                />
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tiempo de respuesta:</strong> Generalmente respondo en menos de 24 horas. 
                  Para proyectos urgentes, puedes contactarme directamente por WhatsApp.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 gradient-blue text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Ya sea que necesites un Project Manager experimentado, un Lead Developer, 
              o simplemente quieras discutir una idea, estoy aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                label="Agendar una Llamada"
                icon={<Phone className="w-5 h-5" />}
                className="bg-white text-customBlue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300"
                onClick={() => {
                  if (!EXTERNAL_LINKS.calendar) return;
                  const newWindow = window.open(EXTERNAL_LINKS.calendar, '_blank', 'noopener,noreferrer');
                  if (newWindow) newWindow.opener = null;
                }}
              />
              {/* <Button 
                label="Ver mi CV" 
                icon={<ExternalLink className="w-5 h-5" />}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-customBlue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300"
              /> */}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
