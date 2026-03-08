import React from 'react';
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiRedis, 
  SiKubernetes, SiTypescript, SiJavascript, SiTailwindcss,
  SiExpress, SiDjango, SiFlask, SiNextdotjs, SiFastapi,
  SiOpenai, SiLangchain, SiHuggingface, SiPandas, SiNumpy
} from 'react-icons/si';

const techIcons = {
  // Frontend
  'React': <FaReact className="text-cyan-500" />,
  'Vue.js': <FaVuejs className="text-green-500" />,
  'Next.js': <SiNextdotjs className="text-slate-900 dark:text-white" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'JavaScript': <SiJavascript className="text-yellow-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  
  // Backend
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Python': <FaPython className="text-blue-500" />,
  'Express': <SiExpress className="text-slate-700 dark:text-white" />,
  'Django': <SiDjango className="text-green-700" />,
  'Flask': <SiFlask className="text-slate-800 dark:text-white" />,
  'FastAPI': <SiFastapi className="text-teal-600" />,
  
  // AI/ML
  'TensorFlow': <SiTensorflow className="text-orange-600" />,
  'PyTorch': <SiPytorch className="text-red-600" />,
  'OpenAI': <SiOpenai className="text-slate-800 dark:text-white" />,
  'LangChain': <SiLangchain className="text-green-600" />,
  'Hugging Face': <SiHuggingface className="text-yellow-500" />,
  'Pandas': <SiPandas className="text-blue-600" />,
  'NumPy': <SiNumpy className="text-blue-500" />,
  
  // Database
  'MongoDB': <SiMongodb className="text-green-500" />,
  'PostgreSQL': <SiPostgresql className="text-blue-600" />,
  'Redis': <SiRedis className="text-red-600" />,
  'Database': <FaDatabase className="text-slate-600 dark:text-slate-400" />,
  
  // DevOps
  'AWS': <FaAws className="text-orange-500" />,
  'Docker': <FaDocker className="text-blue-500" />,
  'Kubernetes': <SiKubernetes className="text-blue-600" />,
  'Git': <FaGitAlt className="text-orange-600" />,
};

export const TechIcon = ({ tech, size = 'text-xl' }) => {
  const icon = techIcons[tech];
  if (!icon) return <span className="text-sm text-slate-600 dark:text-slate-400">{tech}</span>;
  
  return (
    <span className={`${size} inline-flex items-center`} title={tech}>
      {icon}
    </span>
  );
};

export const TechBadge = ({ tech }) => {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:scale-105 transition-transform">
      <TechIcon tech={tech} size="text-base" />
      {tech}
    </span>
  );
};

export default { TechIcon, TechBadge };
