import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import FadeIn from './FadeIn';
import { processSteps } from '../data/solutions';
import { whatsappLink } from '../data/contact';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            How I Work
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            No black boxes and no surprise invoices. This is the same process behind every
            production system on this page.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting spine */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-blue-600 hidden sm:block" />

          <div className="space-y-5">
            {processSteps.map((step, idx) => (
              <FadeIn key={step.step} delay={idx * 90}>
                <div className="relative sm:pl-20">
                  {/* Step number */}
                  <div className="hidden sm:flex absolute left-0 top-3 w-12 h-12 rounded-full bg-indigo-600 text-white font-bold items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-800">
                    {step.step}
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      <span className="sm:hidden text-indigo-600 dark:text-indigo-400 mr-2">
                        {step.step}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={400}>
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Step 1 is a conversation, not a contract</h3>
            <p className="opacity-90 mb-6 max-w-xl mx-auto">
              Tell me what you&apos;re trying to achieve. If it&apos;s not a fit, I&apos;ll say so
              and point you somewhere better.
            </p>
            <a
              href={whatsappLink("Hi Faisal, I saw your portfolio and I'd like to talk about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 transition-all shadow-lg hover:scale-105"
            >
              <FaWhatsapp size={22} className="text-[#25D366]" />
              Start the conversation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProcessSection;
