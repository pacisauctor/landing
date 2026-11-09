'use client';

import { MotionConfig } from 'framer-motion';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import ExperienceSection from '@/components/experience-section';
import CertificatesSection from '@/components/certificates-section';
import SkillsSection from '@/components/skills-section';

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Saltar al contenido
      </a>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
    </MotionConfig>
  );
}
