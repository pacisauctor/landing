
'use client';

import { useState } from 'react';
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
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-2">
            Hablemos
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Cuéntame el problema. De ahí sale el sistema, el equipo o la decisión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Información de Contacto */}
          <div
          >
            <Card className="p-5 sm:p-6 h-full">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6 mb-8 flex flex-col justify-start items-start">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="space-y-1 w-full"
                  >
                    <p className="text-sm font-medium text-gray-500">
                      {info.label}
                    </p>
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-navy-900 font-semibold hover:text-customBlue-700 transition-colors duration-200 inline-flex max-w-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <span className={info.label === 'Email' ? 'break-all' : 'whitespace-nowrap'}>{info.value}</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Redes Sociales */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-navy-900 mb-4">
                  Sígueme en Redes Sociales
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const className = `social-link ${social.color} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`;
                    if (!social.link) {
                      return (
                        <span
                          key={social.label}
                          aria-label={`${social.label} (enlace pendiente)`}
                          title="Enlace pendiente de configurar"
                          className={`${className} opacity-50 cursor-not-allowed`}
                        >
                          <social.icon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      );
                    }

                    return (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={className}
                      >
                        <social.icon className="w-5 h-5" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {EXTERNAL_LINKS.buyMeACoffee ? (
              <div
                className="p-4 sm:p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
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
                  className={`coffee-btn w-full ${EXTERNAL_LINKS.buyMeACoffee ? '' : 'opacity-60 cursor-not-allowed'}`}
                  disabled={!EXTERNAL_LINKS.buyMeACoffee}
                  title={EXTERNAL_LINKS.buyMeACoffee ? 'Invítame un café' : 'Enlace pendiente de configurar'}
                  onClick={() => {
                    if (!EXTERNAL_LINKS.buyMeACoffee) return;
                    window.open(EXTERNAL_LINKS.buyMeACoffee, '_blank', 'noopener,noreferrer');
                  }}
                />
              </div>
              ) : null}
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <div
          >
            <Card className="p-5 sm:p-6 h-full">
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
                    rows={4}
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
          </div>
        </div>

        {/* Call to Action Final */}
        <div
          className="mt-8 text-center"
        >
          <Card className="p-5 sm:p-6 gradient-blue text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              ¿Ordenamos la tecnología?
            </h3>
            <p className="text-base sm:text-lg mb-5 max-w-2xl mx-auto">
              Dirección en ingeniería, producto, datos e IA, o un equipo que construya con criterio. Agendemos una llamada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={EXTERNAL_LINKS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Agendar una Llamada
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
              {/* <Button 
                label="Ver mi CV" 
                icon={<ExternalLink className="w-5 h-5" />}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-customBlue-600 font-medium py-3 px-8 rounded-lg transition-all duration-200"
              /> */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
