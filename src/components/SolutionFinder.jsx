import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Target, RotateCcw } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import FadeIn from './FadeIn';
import { solutions } from '../data/solutions';
import { projects } from '../data/portfolioData.jsx';
import { whatsappLink, contact } from '../data/contact';

const SolutionFinder = ({ onOpenProject }) => {
  const [selected, setSelected] = useState(null);

  const active = solutions.find((s) => s.id === selected);

  // Resolve the named proof points to real project records so the cards can
  // link straight into the existing project modal.
  const proofProjects = active
    ? active.proof
        .map((title) => projects.find((p) => p.title === title) || { title, icon: '📌' })
        .filter(Boolean)
    : [];

  return (
    <section id="solution-finder" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="text-indigo-600 dark:text-indigo-400" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white">
              What do you need built?
            </h2>
          </div>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Pick the closest match and I&apos;ll show you what I&apos;ve already shipped for that
            exact problem — plus how I&apos;d approach yours.
          </p>
        </FadeIn>

        {/* Options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {solutions.map((s, idx) => {
            const isActive = selected === s.id;
            return (
              <FadeIn key={s.id} delay={idx * 60}>
                <button
                  onClick={() => setSelected(isActive ? null : s.id)}
                  aria-pressed={isActive}
                  className={`w-full h-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 shadow-lg scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-indigo-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <span
                      className={`font-semibold leading-snug ${
                        isActive
                          ? 'text-indigo-700 dark:text-indigo-300'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>

        {/* Tailored answer */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 md:px-8 py-6 text-white">
                <p className="text-sm uppercase tracking-wide text-indigo-100 mb-1">
                  You need
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">{active.need}</h3>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                {/* Proof */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    I&apos;ve built this before
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    {proofProjects.map((p) => (
                      <button
                        key={p.title}
                        onClick={() => p.description && onOpenProject?.(p)}
                        disabled={!p.description}
                        className={`text-left p-4 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 transition-all ${
                          p.description
                            ? 'hover:border-indigo-400 hover:shadow-md cursor-pointer'
                            : 'cursor-default'
                        }`}
                      >
                        <div className="text-2xl mb-2">{p.icon}</div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                          {p.title}
                        </div>
                        {p.description && (
                          <div className="mt-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
                            View details <ArrowRight size={11} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg leading-none mt-0.5">
                      ✓
                    </span>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{active.outcome}</p>
                  </div>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    How I&apos;d approach yours
                  </h4>
                  <div className="space-y-2">
                    {active.approach.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Message is already written — just hit send.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappLink(active.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1eb855] transition-all shadow-lg hover:scale-[1.02]"
                    >
                      <FaWhatsapp size={22} />
                      Discuss this on WhatsApp
                    </a>
                    <a
                      href={`mailto:${contact.email}?subject=${encodeURIComponent('Project enquiry — ' + active.label)}&body=${encodeURIComponent(active.whatsappMessage)}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all"
                    >
                      Email instead
                    </a>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <RotateCcw size={13} />
                    Choose something else
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolutionFinder;
