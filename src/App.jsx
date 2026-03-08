import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

// Import all components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import EnhancedSkillsSection from './components/EnhancedSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import GitHubStats from './components/GitHubStats';

// Import data
import { projects, skills, experience, certifications, caseStudies } from './data/portfolioData.jsx';
import { services } from './data/servicesData.jsx';
import { blogs } from './data/blogData.jsx';

// Import context
import { ThemeProvider } from './context/ThemeContext';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({ projects: 0, experience: 0, technologies: 0 });

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { projects: 8, experience: 4, technologies: 20 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounters({
        projects: Math.min(Math.floor((targets.projects / steps) * step), targets.projects),
        experience: Math.min(Math.floor((targets.experience / steps) * step), targets.experience),
        technologies: Math.min(Math.floor((targets.technologies / steps) * step), targets.technologies)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Stats data
  const stats = [
    { number: counters.projects, label: "Major Projects", suffix: "+" },
    { number: counters.experience, label: "Years Experience", suffix: "+" },
    { number: counters.technologies, label: "Technologies", suffix: "+" },
    { number: "24/7", label: "Support Available", suffix: "" }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-x-hidden transition-colors duration-300">
          <SEO />
          <Toaster />
          
          {/* Global Styles */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            .float-animation {
              animation: float 3s ease-in-out infinite;
            }
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .slide-in-left {
              animation: slideInLeft 0.8s ease-out;
            }
            .slide-in-right {
              animation: slideInRight 0.8s ease-out;
            }
          `}</style>

          {/* Navigation */}
          <Navigation 
            activeSection={activeSection}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            scrollY={scrollY}
            scrollToSection={scrollToSection}
          />

          {/* Hero Section */}
          <HeroSection scrollToSection={scrollToSection} />

          {/* Stats Section */}
          <StatsSection stats={stats} />

          {/* About Section */}
          <AboutSection />

          {/* Skills Section */}
          <EnhancedSkillsSection skills={skills} />

          {/* GitHub Stats Widget */}
          <div className="py-12 px-6 bg-white dark:bg-slate-800">
            <div className="max-w-6xl mx-auto">
              <GitHubStats username="faysal-aslam" />
            </div>
          </div>

          {/* Experience Section */}
          <ExperienceSection experience={experience} />

          {/* Projects Section */}
          <ProjectsSection projects={projects} />

          {/* Case Studies Section */}
          <CaseStudiesSection caseStudies={caseStudies} />

          {/* Services Section */}
          <ServicesSection services={services} />

          {/* Blog Section */}
          <BlogSection blogs={blogs} />

          {/* Certifications Section */}
          <CertificationsSection certifications={certifications} />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />

          {/* Floating UI Elements */}
          <ScrollProgress />
          <ScrollToTop />
          <KeyboardShortcuts />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Portfolio;
