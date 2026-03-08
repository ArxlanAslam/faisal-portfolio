import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import FadeIn from './FadeIn';

const EnhancedSkillsSection = ({ skills }) => {
  // Sample proficiency data for demonstration
  const proficiencyData = [
    { skill: 'LLMs & RAG', level: 95 },
    { skill: 'AI Agents', level: 90 },
    { skill: 'Computer Vision', level: 88 },
    { skill: 'FastAPI', level: 92 },
    { skill: 'LangChain', level: 90 },
    { skill: 'PyTorch', level: 85 }
  ];

  const radarData = [
    { category: 'LLMs & AI', value: 95 },
    { category: 'Computer Vision', value: 88 },
    { category: 'Backend Dev', value: 92 },
    { category: 'AI Agents', value: 90 },
    { category: 'MLOps', value: 82 },
    { category: 'Cloud & Deploy', value: 85 }
  ];

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
          {/* Bar Chart - Proficiency Levels */}
          <FadeIn delay={300}>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Proficiency Levels</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={proficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="skill" 
                    angle={-45} 
                    textAnchor="end" 
                    height={80}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="level" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>

          {/* Radar Chart - Skill Categories */}
          <FadeIn delay={400}>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Skill Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6b7280' }} />
                  <Radar name="Expertise" dataKey="value" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
                  <Tooltip 
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
            <h3 className="text-2xl font-bold mb-4">5+ Years of AI/ML Engineering</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Specialized in building production-grade AI systems with a proven track record in LLMs, computer vision, and intelligent automation across healthcare, business, and enterprise applications.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EnhancedSkillsSection;
