import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import AgentIllustration from './AgentIllustration';

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Intro: animated agent alongside the pitch */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                What I Offer
              </h2>
              <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I design and ship AI systems that do real work — agents that call tools and take
                actions, retrieval that answers from your own data, and pipelines that run without
                anyone watching them.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Every system below is backed by something already running in production, with
                evaluation and cost monitoring built in from the start.
              </p>
              <button
                onClick={() =>
                  document.getElementById('solution-finder')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
              >
                Find what fits your project
                <ArrowRight size={18} />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="order-1 lg:order-2">
              <AgentIllustration />
            </div>
          </FadeIn>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center border border-slate-200 dark:border-slate-700 hover:-translate-y-2 duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
