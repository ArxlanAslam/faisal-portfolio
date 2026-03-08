import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollY, scrollToSection }) => {
  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'case-studies', 'services', 'blog', 'certifications', 'contact'];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white dark:bg-slate-800 shadow-md' : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-transform hover:scale-105">
          <button
            onClick={() => scrollToSection('home')}
            aria-label="Go to home page"
            className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded-lg px-2"
          >
            Faisal Aslam
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              aria-label={`Navigate to ${section === 'case-studies' ? 'Case Studies' : section} section`}
              aria-current={activeSection === section ? 'page' : undefined}
              className={`capitalize hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium relative group text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded-lg px-2 py-1 ${activeSection === section ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {section === 'case-studies' ? 'Case Studies' : section}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full ${activeSection === section ? 'w-full' : ''}`}></span>
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            className="text-slate-700 dark:text-slate-300 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded-lg p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 slide-in-right"
          role="menu"
        >
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              role="menuitem"
              aria-label={`Navigate to ${section === 'case-studies' ? 'Case Studies' : section} section`}
              className="block w-full text-left px-6 py-3 capitalize hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 focus:outline-none focus:bg-indigo-50 dark:focus:bg-slate-700 focus:text-indigo-600 dark:focus:text-indigo-400"
            >
              {section === 'case-studies' ? 'Case Studies' : section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
