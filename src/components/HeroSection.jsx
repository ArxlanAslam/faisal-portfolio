import React from 'react';
import { Mail, Github, Linkedin, ChevronDown, Download, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { contact, whatsappLink, RESUME_PATH, RESUME_FILENAME } from '../data/contact';

const HeroSection = ({ scrollToSection }) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    link.click();
    toast.success('Resume downloaded');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 md:pt-28 md:pb-16 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium transition-transform hover:scale-105">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Open to Remote (EU / US overlap) &amp; Relocation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
            Senior AI/ML Engineer
          </h1>
          <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-semibold">
            RAG &amp; Agentic AI Expert | AI Solution Architect
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Senior AI/ML Engineer and AI Solution Architect with 6+ years designing and shipping production Generative AI systems — LLM applications, multi-agent orchestration (LangGraph, CrewAI), RAG and GraphRAG, and computer vision deployed on AWS, GCP, and Azure. Currently Senior AI Engineer (Lead) at Tekhqs, owning end-to-end architecture, cloud infrastructure, evaluation, and cost optimization.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('solution-finder')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 transition-all hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            >
              What can I build for you?
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Faisal on WhatsApp"
              title="Message on WhatsApp"
              className="p-3 bg-[#25D366] rounded-lg hover:bg-[#1eb855] transition-all shadow-sm hover:scale-110 hover:shadow-md"
            >
              <FaWhatsapp size={24} className="text-white" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faisal's LinkedIn profile"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-md"
            >
              <Linkedin size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faisal's GitHub profile"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-md"
            >
              <Github size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email Faisal"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-md"
            >
              <Mail size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>
        <div className="relative slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-30 float-animation"></div>
          <div className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-1 overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden">
              <img 
                src="https://i.postimg.cc/rm1wDShR/bhaii-crop-image.png"
                alt="Faisal Aslam - AI/ML Engineer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-indigo-600 dark:text-indigo-400" />
      </div>
    </section>
  );
};

export default HeroSection;
