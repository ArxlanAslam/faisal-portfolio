import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import {
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiRedis,
  SiKubernetes, SiTypescript, SiJavascript, SiTailwindcss,
  SiExpress, SiDjango, SiFlask, SiNextdotjs, SiFastapi,
  SiOpenai, SiLangchain, SiHuggingface, SiPandas, SiNumpy,
  SiGooglecloud, SiN8N, SiSolana, SiOpencv, SiRust, SiNeo4J,
  SiGooglegemini, SiAnthropic, SiTerraform, SiNginx, SiSalesforce,
  SiGooglemaps, SiLinux, SiPydantic
} from 'react-icons/si';

// Matched longest-first so "AWS SageMaker" beats a bare "AWS" lookup.
const techIcons = {
  // AI / LLM
  'Claude': <SiAnthropic className="text-orange-600" />,
  'Anthropic': <SiAnthropic className="text-orange-600" />,
  'GPT-4o': <SiOpenai className="text-slate-800 dark:text-white" />,
  'GPT-4': <SiOpenai className="text-slate-800 dark:text-white" />,
  'OpenAI Whisper': <SiOpenai className="text-slate-800 dark:text-white" />,
  'OpenAI': <SiOpenai className="text-slate-800 dark:text-white" />,
  'Azure OpenAI': <FaMicrosoft className="text-blue-500" />,
  'Azure AI Document Intelligence': <FaMicrosoft className="text-blue-500" />,
  'Azure AI': <FaMicrosoft className="text-blue-500" />,
  'Gemini': <SiGooglegemini className="text-blue-500" />,
  'Vertex AI Gemini': <SiGooglegemini className="text-blue-500" />,
  'LangGraph': <SiLangchain className="text-green-600" />,
  'LangChain': <SiLangchain className="text-green-600" />,
  'LightRAG': <SiLangchain className="text-emerald-600" />,
  'Hugging Face': <SiHuggingface className="text-yellow-500" />,
  'TensorFlow': <SiTensorflow className="text-orange-600" />,
  'PyTorch': <SiPytorch className="text-red-600" />,

  // Backend
  'FastAPI': <SiFastapi className="text-teal-600" />,
  'Flask': <SiFlask className="text-slate-800 dark:text-white" />,
  'Django': <SiDjango className="text-green-700" />,
  'Pydantic': <SiPydantic className="text-rose-500" />,
  'Express': <SiExpress className="text-slate-700 dark:text-white" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Python SIP': <FaPython className="text-blue-500" />,
  'Python': <FaPython className="text-blue-500" />,
  'Rust': <SiRust className="text-orange-700" />,

  // Cloud / infra
  'AWS SageMaker': <FaAws className="text-orange-500" />,
  'AWS Lambda': <FaAws className="text-orange-500" />,
  'Amazon S3': <FaAws className="text-orange-500" />,
  'AWS': <FaAws className="text-orange-500" />,
  'GCP': <SiGooglecloud className="text-blue-400" />,
  'Docker': <FaDocker className="text-blue-500" />,
  'Kubernetes': <SiKubernetes className="text-blue-600" />,
  'Terraform': <SiTerraform className="text-purple-600" />,
  'nginx': <SiNginx className="text-green-600" />,
  'Linux': <SiLinux className="text-slate-700 dark:text-slate-200" />,
  'Git': <FaGitAlt className="text-orange-600" />,

  // Data
  'Neo4j GraphDB': <SiNeo4J className="text-sky-500" />,
  'Neo4j': <SiNeo4J className="text-sky-500" />,
  'PostgreSQL': <SiPostgresql className="text-blue-600" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Redis': <SiRedis className="text-red-600" />,
  'SQL': <FaDatabase className="text-slate-600 dark:text-slate-400" />,
  'Pandas': <SiPandas className="text-blue-600" />,
  'NumPy': <SiNumpy className="text-blue-500" />,

  // Vision
  'OpenCV': <SiOpencv className="text-emerald-600" />,

  // Integrations
  'Salesforce API': <SiSalesforce className="text-sky-500" />,
  'Google Maps API': <SiGooglemaps className="text-red-500" />,
  'Google STT/TTS': <SiGooglecloud className="text-blue-400" />,
  'n8n': <SiN8N className="text-rose-500" />,
  'Solana': <SiSolana className="text-purple-500" />,

  // Frontend
  'React': <FaReact className="text-cyan-500" />,
  'Next.js': <SiNextdotjs className="text-slate-900 dark:text-white" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'JavaScript': <SiJavascript className="text-yellow-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />
};

// Longest keys first so multi-word names win over their substrings.
const orderedKeys = Object.keys(techIcons).sort((a, b) => b.length - a.length);

const resolveIcon = (tech) => {
  if (!tech) return null;
  if (techIcons[tech]) return techIcons[tech];
  const lower = tech.toLowerCase();
  const key = orderedKeys.find((k) => lower.includes(k.toLowerCase()));
  return key ? techIcons[key] : null;
};

export const TechIcon = ({ tech, size = 'text-base' }) => {
  const icon = resolveIcon(tech);
  if (!icon) return null;
  return (
    <span className={`${size} inline-flex items-center`} aria-hidden="true">
      {icon}
    </span>
  );
};

export const TechBadge = ({ tech, className = '' }) => {
  const icon = resolveIcon(tech);
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-600/60 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium ${className}`}
    >
      {icon && <span className="text-base inline-flex items-center" aria-hidden="true">{icon}</span>}
      {tech}
    </span>
  );
};

export default TechBadge;
