import React from 'react';
import FadeIn from './FadeIn';

const AboutSection = () => {
  const highlights = [
    "Kresus — Web3 conversational trading agent across Solana, Base, World Chain & Sui (kresus.com)",
    "Vyera AI — competitive intelligence multi-agent platform for the UK market (vyera.ai)",
    "Advanced Hybrid RAG deployed at Saudi Aramco (auxee.com)",
    "NeuroSync — real-time meeting intelligence with autonomous Salesforce CRM sync"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg space-y-6 hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I am a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Senior AI Engineer (Lead) at Tekhqs</span> and an AI Solution Architect specializing in Generative AI, agentic systems, RAG, and computer vision. With 6+ years shipping production AI, I convert complex requirements into reliable, compliant (HIPAA, UK GDPR) products with measurable business impact, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <FadeIn key={idx} delay={300 + idx * 100}>
                  <div className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300 hover:scale-105 transform">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">→</span>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed pt-4">
              My work spans multi-agent orchestration (LangGraph, CrewAI), retrieval systems (LightRAG, GraphRAG, hybrid retrieval, NL-to-SQL), tool-calling agents and MCP, LLM evaluation and observability (LangSmith), self-hosted open-weight serving (vLLM, FP8), Web3 trading agents, and computer vision (YOLOv8, DeepSORT) — deployed on AWS, GCP, and Azure. Alongside delivery I lead engineering teams, run code review, and author CTO-level technical proposals. MS Data Science (AI/ML) from AUIC Islamabad · BS Computer Science from GC University Faisalabad.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
