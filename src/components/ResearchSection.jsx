import React from 'react';
import { FlaskConical } from 'lucide-react';
import FadeIn from './FadeIn';

const ResearchSection = ({ research }) => {
  return (
    <section id="research" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            R&amp;D and Benchmarking
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Selected independent projects, architecture studies, and production benchmarking work
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {research.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="h-full flex flex-col bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-600 hover:scale-105 transform duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 flex items-start gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <FlaskConical size={32} className="flex-shrink-0 mt-1" />
            <p className="text-lg opacity-95">
              Beyond client delivery, I benchmark and prototype continuously — self-hosted open-weight serving,
              token economics of agentic loops, and document-AI ingestion strategies — so architecture decisions
              rest on measured numbers rather than vendor claims.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ResearchSection;
