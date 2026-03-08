import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

const TimelineView = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-blue-600" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 shadow-lg" />

              {/* Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.type || 'Full-time'}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default TimelineView;
