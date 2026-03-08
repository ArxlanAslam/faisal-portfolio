import React from 'react';
import FadeIn from './FadeIn';
import AnimatedCounter from './AnimatedCounter';

const StatsSection = ({ stats }) => {
  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix || ''} />
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
