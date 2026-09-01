import React, { useState, useEffect, useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Toast from './components/Toast';

// Import all components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ImpactSection from './components/ImpactSection';
import LiveProductsSection from './components/LiveProductsSection';
import SolutionFinder from './components/SolutionFinder';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import EnhancedSkillsSection from './components/EnhancedSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ResearchSection from './components/ResearchSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import ChatAssistant from './components/ChatAssistant';
import ActionDock from './components/ActionDock';
import GitHubStats from './components/GitHubStats';

// Import data
import { projects, skills, experience, education, certifications, caseStudies, research } from './data/portfolioData.jsx';
import { services } from './data/servicesData.jsx';
import { blogs } from './data/blogData.jsx';

// Import context
import { ThemeProvider } from './context/ThemeContext';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [paletteProject, setPaletteProject] = useState(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  // While a nav click is animating, ignore scroll-spy so the highlight doesn't flicker
  const navLockRef = useRef(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: keep the nav highlight in sync with the section actually on screen
  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'experience', 'projects',
                 'case-studies', 'research', 'blog', 'certifications',
                 'services', 'process', 'solution-finder', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        if (navLockRef.current) return;

        // Of the sections currently intersecting, pick the one nearest the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      // Band across the upper-middle of the viewport
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Stats data — AnimatedCounter handles the count-up on scroll into view
  const stats = [
    { number: 20, label: "Production Projects", suffix: "+" },
    { number: 6, label: "Years Experience", suffix: "+" },
    { number: 60, label: "Technologies", suffix: "+" },
    { number: 8, label: "Engineers Led", suffix: "" }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);

    // Hold the highlight on the clicked item until the smooth scroll settles
    navLockRef.current = true;
    window.clearTimeout(scrollToSection._timer);
    scrollToSection._timer = window.setTimeout(() => {
      navLockRef.current = false;
    }, 900);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-x-hidden transition-colors duration-300">
          <SEO />
          <Toast />
          
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

          {/* Proof first: live products a visitor can click and verify */}
          <LiveProductsSection />

          {/* Measured Impact */}
          <ImpactSection />

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
          <ProjectsSection
            projects={projects}
            externalProject={paletteProject}
            onExternalHandled={() => setPaletteProject(null)}
          />

          {/* Case Studies Section */}
          <CaseStudiesSection caseStudies={caseStudies} />

          {/* R&D / Independent Projects Section */}
          <ResearchSection research={research} />

          {/* Blog Section */}
          <BlogSection blogs={blogs} />

          {/* Certifications Section */}
          <CertificationsSection education={education} certifications={certifications} />

          {/* Services Section */}
          <ServicesSection services={services} />

          {/* Conversion block: de-risk, then triage the visitor's own problem,
              then contact — kept adjacent so intent isn't lost in between. */}
          <ProcessSection />

          <SolutionFinder onOpenProject={setPaletteProject} />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />

          {/* Floating UI Elements — one dock instead of competing buttons */}
          <ScrollProgress />
          <ActionDock
            onOpenAssistant={() => setIsAssistantOpen(true)}
            onOpenPalette={() => setIsPaletteOpen(true)}
            assistantOpen={isAssistantOpen}
          />
          <CommandPalette
            projects={projects}
            onOpenProject={setPaletteProject}
            isOpen={isPaletteOpen}
            setIsOpen={setIsPaletteOpen}
          />
          <ChatAssistant isOpen={isAssistantOpen} setIsOpen={setIsAssistantOpen} />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Portfolio;
