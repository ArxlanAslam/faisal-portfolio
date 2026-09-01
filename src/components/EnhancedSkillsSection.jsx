import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import FadeIn from './FadeIn';
import { projects } from '../data/portfolioData.jsx';

// Technologies to count across the real project list, grouped into readable buckets
const TECH_BUCKETS = {
  'LangGraph': ['LangGraph'],
  'FastAPI': ['FastAPI'],
  'AWS': ['AWS', 'AWS SageMaker', 'AWS Lambda', 'Amazon S3', 'API Gateway'],
  'RAG': ['RAG', 'LightRAG', 'GraphRAG', 'FAISS', 'Neo4j GraphDB'],
  'LLMs': ['Claude', 'GPT-4', 'GPT-4o', 'Gemini', 'LLaMA 3.2', 'Pixtral', 'Azure OpenAI', 'LLM Agents', 'Multi-LLM Orchestration'],
  'Computer Vision': ['YOLOv8', 'DeepSORT', 'Computer Vision', 'Face Recognition']
};

const EnhancedSkillsSection = ({ skills }) => {
  // Counted from the actual project list rather than hand-written numbers
  const usageData = useMemo(() => {
    return Object.entries(TECH_BUCKETS)
      .map(([bucket, members]) => ({
        skill: bucket,
        projects: projects.filter((p) =>
          p.tech.some((t) => members.some((m) => t.toLowerCase().includes(m.toLowerCase())))
        ).length
      }))
      .sort((a, b) => b.projects - a.projects);
  }, []);

  // Shipped projects per domain, also derived from real data
  const domainData = useMemo(() => {
    const groups = {
      'Agentic AI': ['Agentic AI', 'AI Agents', 'AI Multi-Agent System', 'Multi-Agent AI', 'Agentic AI + Web3'],
      'RAG & Search': ['Advanced RAG'],
      'Generative AI': ['Generative AI', 'AI Automation'],
      'Computer Vision': ['Computer Vision', 'Computer Vision + Gen AI'],
      'Speech & Voice': ['Speech AI + CRM', 'Conversational AI'],
      'Regulated Domains': ['Healthcare AI', 'FinTech AI', 'LegalTech AI']
    };

    return Object.entries(groups).map(([category, categories]) => ({
      category,
      value: projects.filter((p) => categories.includes(p.category)).length
    }));
  }, []);

  const maxDomain = Math.max(...domainData.map((d) => d.value), 1);

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        </FadeIn>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-600 hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">▸</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar Chart - technology usage counted from the project list */}
          <FadeIn delay={300}>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">Technology Usage</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Projects shipped using each technology
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={usageData} margin={{ bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.3} />
                  <XAxis
                    dataKey="skill"
                    angle={-35}
                    textAnchor="end"
                    height={80}
                    interval={0}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                  />
                  <YAxis allowDecimals={false} tick={{ fill: '#64748b' }} />
                  <Tooltip
                    cursor={{ fill: '#4f46e5', fillOpacity: 0.08 }}
                    formatter={(value) => [`${value} project${value === 1 ? '' : 's'}`, 'Shipped']}
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="projects" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>

          {/* Radar Chart - delivery spread across domains */}
          <FadeIn delay={400}>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">Delivery Across Domains</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Production projects delivered per problem domain
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={domainData}>
                  <PolarGrid stroke="#94a3b8" strokeOpacity={0.4} />
                  <PolarAngleAxis dataKey="category" tick={{ fill: '#64748b', fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, maxDomain]} allowDecimals={false} tick={{ fill: '#64748b' }} />
                  <Radar name="Projects" dataKey="value" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
                  <Tooltip
                    formatter={(value) => [`${value} project${value === 1 ? '' : 's'}`, 'Delivered']}
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>
        </div>

        {/* Experience Timeline Summary */}
        <FadeIn delay={500}>
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">6+ Years of AI/ML Engineering</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Designing and shipping production-grade AI systems — LLM applications, multi-agent orchestration, RAG, and computer vision — across healthcare, FinTech, LegalTech, Web3, travel, and enterprise knowledge domains, with compliance (HIPAA, UK GDPR) built in.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EnhancedSkillsSection;
