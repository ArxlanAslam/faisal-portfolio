import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Download } from 'lucide-react';
import toast from 'react-hot-toast';

const HeroSection = ({ scrollToSection }) => {
  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Faisal_Aslam_AI_ML_Engineer_Resume.pdf';
    link.click();
    toast.success('Resume downloaded successfully!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium transition-transform hover:scale-105">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for Projects
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
            AI/ML Engineer
          </h1>
          <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-semibold">
            Generative AI | AI Agents | Computer Vision
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I design and develop real-world AI solutions including RAG chatbots, multi-agent systems, speech AI, healthcare automation, and computer vision applications using LLMs, LangGraph, and FastAPI.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 transition-all hover:scale-105 hover:shadow-xl"
            >
              View Projects
            </button>
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/faisal-aslam-790238242/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-md">
              <Linkedin size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
            <a href="https://github.com/faysal-aslam" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-md">
              <Github size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
            <a href="https://www.fiverr.com/faisal_aslam" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-md">
              <ExternalLink size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>
        <div className="relative slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-30 float-animation"></div>
          <div className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-1 overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden">
              <img 
                src="https://i.postimg.cc/cCrYLprL/bhaii-crop-image.png"
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
