import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-50 overflow-y-auto"
          >
            <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-slate-600 dark:text-slate-300" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{project.icon}</div>
                <div>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-green-600 dark:text-green-400">{project.metrics}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
                <div className="space-y-3">
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1 font-bold">▸</span>
                      <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.challenges && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Challenges & Solutions</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.challenges}</p>
                </div>
              )}

              {project.architecture && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Architecture</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.architecture}</p>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
