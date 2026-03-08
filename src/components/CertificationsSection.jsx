import React from 'react';
import FadeIn from './FadeIn';

const CertificationsSection = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl">{cert.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
