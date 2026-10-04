import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import ProjectEstimator from './components/ProjectEstimator';
import About from './components/About';
import CtaSection from './components/CtaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [contactMessage, setContactMessage] = useState('');
  const [contactProjectType, setContactProjectType] = useState('');

  // Synchronize theme with html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // ScrollSpy to track active section
  useEffect(() => {
    const sectionIds = ['home', 'services', 'solutions', 'technologies', 'process', 'portfolio', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = (customMessage = '', customType = '') => {
    if (customMessage) setContactMessage(customMessage);
    if (customType) setContactProjectType(customType);
    
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const navHeight = 70;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      const navHeight = 70;
      const elementPosition = servicesElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExportEstimatorToContact = (scopeSummary, typeName) => {
    setContactMessage(scopeSummary);
    setContactProjectType(typeName);
    handleOpenContact(scopeSummary, typeName);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Sticky Responsive Header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreServices={handleExploreServices}
        />

        {/* Services Section */}
        <Services
          onOpenContact={(serviceName) => handleOpenContact(`I am interested in discussing your ${serviceName} services.`, serviceName)}
        />

        {/* Why Choose Us / Solutions Section */}
        <WhyUs />

        {/* Technologies Section */}
        <TechStack />

        {/* Development Process Section */}
        <Process />

        {/* Portfolio / Selected Work Section */}
        <Portfolio
          onOpenContact={(projectContext) => handleOpenContact(`Regarding case study: ${projectContext}`)}
        />

        {/* Interactive Scope & Architecture Estimator */}
        <ProjectEstimator
          onExportToContact={handleExportEstimatorToContact}
        />

        {/* About Company & Culture Section */}
        <About
          onOpenContact={() => handleOpenContact('General Architecture Consultation')}
        />

        {/* Bottom CTA Section */}
        <CtaSection
          onOpenContact={() => handleOpenContact()}
          onTalkToTeam={() => handleOpenContact('Direct Consultation Request')}
        />

        {/* Contact Section */}
        <Contact
          initialMessage={contactMessage}
          initialProjectType={contactProjectType}
        />

      </main>

      {/* Modern Multi-Column Footer */}
      <Footer
        onOpenContact={(type) => handleOpenContact(type)}
      />

    </div>
  );
}
