import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ArrowRight, Download, Mail, Moon, Sun, Github, Linkedin
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import { contact, whatsappLink, RESUME_PATH, RESUME_FILENAME } from '../data/contact';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills & Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'research', label: 'R&D and Benchmarking' },
  { id: 'blog', label: 'Articles' },
  { id: 'certifications', label: 'Education & Certifications' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'How I Work' },
  { id: 'solution-finder', label: 'What can I build for you?' },
  { id: 'contact', label: 'Contact' }
];

const CommandPalette = ({ projects = [], onOpenProject, isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    link.click();
    toast.success('Resume downloaded');
  };

  const commands = useMemo(() => {
    const navigate = SECTIONS.map((s) => ({
      group: 'Navigate',
      label: s.label,
      keywords: s.id,
      icon: <ArrowRight size={16} />,
      run: () => scrollTo(s.id)
    }));

    const actions = [
      {
        group: 'Actions',
        label: 'Download Resume',
        keywords: 'cv pdf download resume',
        icon: <Download size={16} />,
        shortcut: 'R',
        run: downloadResume
      },
      {
        group: 'Actions',
        label: 'Message on WhatsApp',
        keywords: 'whatsapp chat message text phone wa',
        icon: <FaWhatsapp size={16} className="text-[#25D366]" />,
        shortcut: 'W',
        run: () => window.open(whatsappLink(), '_blank', 'noopener,noreferrer')
      },
      {
        group: 'Actions',
        label: 'Copy email address',
        keywords: 'email contact mail copy',
        icon: <Mail size={16} />,
        run: () => {
          navigator.clipboard.writeText(contact.email);
          toast.success('Email copied to clipboard');
        }
      },
      {
        group: 'Actions',
        label: isDark ? 'Switch to light mode' : 'Switch to dark mode',
        keywords: 'theme dark light mode toggle',
        icon: isDark ? <Sun size={16} /> : <Moon size={16} />,
        shortcut: 'T',
        run: toggleTheme
      },
      {
        group: 'Actions',
        label: 'Open GitHub profile',
        keywords: 'github code repos',
        icon: <Github size={16} />,
        run: () => window.open(contact.github, '_blank', 'noopener,noreferrer')
      },
      {
        group: 'Actions',
        label: 'Open LinkedIn profile',
        keywords: 'linkedin social network',
        icon: <Linkedin size={16} />,
        run: () => window.open(contact.linkedin, '_blank', 'noopener,noreferrer')
      }
    ];

    const projectCommands = projects.map((p) => ({
      group: 'Jump to project',
      label: p.title,
      keywords: `${p.category} ${p.tech.join(' ')}`,
      emoji: p.icon,
      run: () => onOpenProject?.(p)
    }));

    return [...navigate, ...actions, ...projectCommands];
  }, [projects, isDark, toggleTheme, onOpenProject]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.keywords || ''}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Global hotkeys
  useEffect(() => {
    const handleKeyDown = (e) => {
      const typingInField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);

      // Cmd/Ctrl + K opens the palette from anywhere
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((open) => !open);
        return;
      }

      if (isOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setIsOpen(false);
        }
        return;
      }

      if (typingInField || e.metaKey || e.ctrlKey || e.altKey) return;

      // Single-key shortcuts (only when the palette is closed)
      const key = e.key.toLowerCase();
      if (key === '/' || key === '?') {
        e.preventDefault();
        setIsOpen(true);
      } else if (key === 'w') {
        window.open(whatsappLink(), '_blank', 'noopener,noreferrer');
      } else if (key === 't') {
        toggleTheme();
      } else if (key === 'r') {
        downloadResume();
      } else if (key === 'h') {
        scrollTo('home');
      } else if (key === 'p') {
        scrollTo('projects');
      } else if (key === 'c') {
        scrollTo('contact');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleTheme]);

  // Reset and focus when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => setActiveIndex(0), [query]);

  // Lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);

  const runCommand = (cmd) => {
    setIsOpen(false);
    // let the overlay unmount before scrolling / opening a modal
    setTimeout(() => cmd.run(), 60);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = results[activeIndex];
      if (cmd) runCommand(cmd);
    }
  };

  // Keep the highlighted row in view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  let lastGroup = null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.15 }}
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              className="fixed left-1/2 top-[12vh] -translate-x-1/2 w-[92vw] max-w-xl z-[61] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                <Search size={18} className="text-slate-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search sections, projects, or actions…"
                  className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-base"
                  aria-label="Search commands"
                />
                <kbd className="hidden sm:inline px-2 py-1 text-xs font-mono rounded border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                  Esc
                </kbd>
              </div>

              <div ref={listRef} className="max-h-[55vh] overflow-y-auto py-2">
                {results.length === 0 && (
                  <p className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                    No matches for “{query}”
                  </p>
                )}

                {results.map((cmd, i) => {
                  const showGroup = cmd.group !== lastGroup;
                  lastGroup = cmd.group;
                  return (
                    <div key={`${cmd.group}-${cmd.label}`}>
                      {showGroup && (
                        <div className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                          {cmd.group}
                        </div>
                      )}
                      <button
                        data-index={i}
                        onClick={() => runCommand(cmd)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          i === activeIndex
                            ? 'bg-indigo-50 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="flex-shrink-0 w-5 flex items-center justify-center">
                          {cmd.emoji ? <span className="text-base">{cmd.emoji}</span> : cmd.icon}
                        </span>
                        <span className="flex-1 truncate">{cmd.label}</span>
                        {cmd.shortcut && (
                          <kbd className="px-2 py-0.5 text-xs font-mono rounded border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4 px-4 py-2.5 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-3">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                </span>
                <span>Ctrl + K</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
