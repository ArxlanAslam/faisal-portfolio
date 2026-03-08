import React, { useState } from 'react';
import FadeIn from './FadeIn';
import TimelineView from './TimelineView';
import { LayoutGrid, ListOrdered } from 'lucide-react';

const ExperienceSection = ({ experience }) => {
  const [viewMode, setViewMode] = useState('timeline');

  // Transform experience data for timeline view
  const timelineData = experience.map(exp => ({
    position: exp.role,
    company: exp.company,
    duration: exp.period,
    location: 'Remote',
    type: 'Full-time',
    description: exp.achievements,
    technologies: []
  }));

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        </FadeIn>

        {/* View Toggle */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setViewMode('timeline')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'timeline'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <ListOrdered size={18} />
            Timeline
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'cards'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <LayoutGrid size={18} />
            Cards
          </button>
        </div>

        {viewMode === 'timeline' ? (
          <TimelineView experiences={timelineData} />
        ) : (
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600 dark:border-indigo-400 hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                        <div className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2"></div>
                        <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
