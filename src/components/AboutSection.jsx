import React from 'react';
import FadeIn from './FadeIn';

const AboutSection = () => {
  const highlights = [
    "Chex.AI - Vehicle inspection with YOLOv8 & Pixtral LLM",
    "DeftGPT - Multi-LLM platform with 11 AI models",
    "RAG systems for exam management and MCQ generation",
    "Employee tracking with face recognition and DeepSORT"
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
              I am a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Senior AI Engineer & Team Lead</span> specializing in Generative AI, Computer Vision, and AI Agents. With expertise in building production-grade AI systems, I've successfully delivered end-to-end solutions including:
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
              I specialize in RAG systems, LLMs, custom fine-tuning, object detection (YOLO), AI agents, and full-stack development with FastAPI, LangGraph, and AWS deployment. My expertise spans from computer vision applications to conversational AI, building solutions that deliver real business impact.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
