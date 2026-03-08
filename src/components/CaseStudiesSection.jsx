import React from 'react';
import FadeIn from './FadeIn';

const CaseStudiesSection = ({ caseStudies }) => {
  return (
    <section id="case-studies" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Deep dive into real-world projects - challenges, solutions, and measurable results
          </p>
        </FadeIn>

        <div className="space-y-16">
          {caseStudies.map((study, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl">{study.icon}</div>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                  <div className="flex items-center gap-4 text-indigo-100">
                    <span>Client: {study.client}</span>
                    <span>•</span>
                    <span>Duration: {study.duration}</span>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                  {/* Problem */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 font-bold">1</span>
                      {study.problem.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{study.problem.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {study.problem.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                          <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                          <span className="text-slate-700 dark:text-slate-300 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">2</span>
                      {study.solution.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{study.solution.description}</p>
                    <div className="space-y-3 mb-6">
                      {study.solution.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                          <span className="text-slate-700 dark:text-slate-300 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.solution.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold">3</span>
                      {study.results.title}
                    </h4>
                    
                    {/* Metrics */}
                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      {study.results.metrics.map((metric, i) => (
                        <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 text-center border border-green-200 dark:border-green-800 hover:scale-105 transition-transform">
                          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{metric.value}</div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{metric.label}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">{metric.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-3">
                      {study.results.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400">
                          <span className="text-green-600 dark:text-green-400 font-bold text-xl">✓</span>
                          <span className="text-slate-700 dark:text-slate-300">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
