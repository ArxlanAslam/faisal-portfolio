import React from 'react';
import { TrendingDown, Zap, Timer, ShieldCheck, Users, Cpu } from 'lucide-react';
import FadeIn from './FadeIn';

const impacts = [
  {
    value: '8h → 25m',
    label: 'Research cycle',
    project: 'SynthAgent',
    detail: 'Self-correcting ReAct agent',
    icon: <TrendingDown size={20} />
  },
  {
    value: '10,000+',
    label: 'Transactions / min',
    project: 'VisionGuard',
    detail: 'p99 latency under 80ms',
    icon: <Zap size={20} />
  },
  {
    value: 'days → 10m',
    label: 'Legal document review',
    project: 'DocuMind',
    detail: 'Risk-severity reports',
    icon: <Timer size={20} />
  },
  {
    value: '~8 hours',
    label: 'Analyst time saved / report',
    project: 'Vyera AI',
    detail: 'Automated 360° profiles',
    icon: <Users size={20} />
  },
  {
    value: '< 3s',
    label: 'Meeting → CRM sync',
    project: 'NeuroSync',
    detail: 'Sub-200ms per chunk',
    icon: <Cpu size={20} />
  },
  {
    value: '95%',
    label: 'Damage detection accuracy',
    project: 'Chex.AI',
    detail: 'Fine-tuned YOLOv8',
    icon: <ShieldCheck size={20} />
  }
];

const ImpactSection = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-slate-900 dark:text-white">
            Measured Impact
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Outcomes from production systems, not estimates
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 80}>
              <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                    {item.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {item.project}
                  </span>
                </div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  {item.value}
                </div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {item.detail}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
