
'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import ProjectsSection from '@/components/projects-section';
import ExperienceSection from '@/components/experience-section';
import CertificatesSection from '@/components/certificates-section';
import SkillsSection from '@/components/skills-section';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
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
  );
}