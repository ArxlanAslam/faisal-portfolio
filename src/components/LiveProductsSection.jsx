import React from 'react';
import { ExternalLink, Radio } from 'lucide-react';
import FadeIn from './FadeIn';
import { liveProducts } from '../data/solutions';

const LiveProductsSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white">
              Live in Production
            </h2>
          </div>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Not prototypes or demos — {liveProducts.length} products serving real users right now.
            Click any of them and see for yourself.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProducts.map((product, idx) => (
            <FadeIn key={product.domain} delay={idx * 70}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{product.icon}</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-semibold">
                    <Radio size={10} />
                    LIVE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 flex-grow">
                  {product.what}
                </p>

                <p className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {product.metric}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                    {product.domain}
                  </span>
                  <ExternalLink
                    size={15}
                    className="flex-shrink-0 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                  />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Trust markers */}
        <FadeIn delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              '🏥 HIPAA compliant',
              '🇬🇧 UK GDPR compliant',
              '🛢️ Deployed at Saudi Aramco',
              '📱 Live on App Store & Google Play',
              '🔒 Non-custodial Web3'
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LiveProductsSection;
