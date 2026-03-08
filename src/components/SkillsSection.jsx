import React from 'react';
import FadeIn from './FadeIn';

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-slate-900">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition-colors duration-200">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
