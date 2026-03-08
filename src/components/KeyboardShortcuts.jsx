import React, { useState, useEffect } from 'react';
import { X, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: '?', description: 'Show keyboard shortcuts' },
    { key: 'h', description: 'Go to Home' },
    { key: 'p', description: 'Go to Projects' },
    { key: 'c', description: 'Go to Contact' },
    { key: 'Esc', description: 'Close modals' },
    { key: '↑', description: 'Scroll to top' },
    { key: 't', description: 'Toggle dark mode' },
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === '?') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      if (e.key === 'h' && !isOpen) {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.key === 'p' && !isOpen) {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.key === 'c' && !isOpen) {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  return (
    <>
      {/* Keyboard Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-40 p-3 bg-slate-700 dark:bg-slate-600 hover:bg-slate-800 dark:hover:bg-slate-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Keyboard shortcuts"
        title="Keyboard shortcuts (Press ?)"
      >
        <Keyboard size={20} />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-50 p-8 max-w-md w-full mx-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Keyboard className="text-indigo-600 dark:text-indigo-400" />
                  Keyboard Shortcuts
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={20} className="text-slate-600 dark:text-slate-300" />
                </button>
              </div>

              <div className="space-y-3">
                {shortcuts.map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <span className="text-slate-700 dark:text-slate-300">{shortcut.description}</span>
                    <kbd className="px-3 py-1 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded text-slate-900 dark:text-white font-mono text-sm shadow-sm">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
