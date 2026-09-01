/**
 * Builds the assistant's searchable corpus from the same data that renders the
 * site, so the chatbot can never drift out of sync with the portfolio.
 *
 * Every chunk: { id, kind, title, body, tags, sectionId, projectTitle? }
 */
import {
  projects, skills, experience, education,
  certifications, caseStudies, research
} from './portfolioData.jsx';
import { services } from './servicesData.jsx';
import { contact, whatsappLink } from './contact';

// Facts that live in the resume header rather than in a section.
export const profile = {
  name: 'Faisal Aslam',
  title: 'Senior AI/ML Engineer | RAG and Agentic AI Expert | AI Solution Architect',
  currentRole: 'Senior AI Engineer (Lead)',
  currentCompany: 'Tekhqs',
  currentSince: 'May 2026',
  yearsExperience: '6+',
  availability: 'Open to Remote (EU / US overlap) and Relocation',
  portfolio: 'https://faisal-portfolio-zeta.vercel.app',
  // Contact details come from the shared module.
  location: contact.location,
  email: contact.email,
  phone: contact.phone,
  linkedin: contact.linkedin,
  github: contact.github,
  whatsapp: whatsappLink()
};

const chunks = [];
let counter = 0;

const add = (chunk) => {
  chunks.push({ id: `c${counter++}`, ...chunk });
};

/* ---------------------------------------------------------------- profile */

add({
  kind: 'profile',
  title: 'Who is Faisal Aslam?',
  body: `${profile.name} is a ${profile.title}. He has ${profile.yearsExperience} years designing and shipping production Generative AI systems across LLM applications, agentic AI, and computer vision. He specialises in multi-agent orchestration (LangGraph, CrewAI), Retrieval-Augmented Generation (RAG, GraphRAG), tool-calling agents, and autonomous workflows deployed on AWS, GCP, and Azure. He is currently ${profile.currentRole} at ${profile.currentCompany}, owning end-to-end architecture, cloud infrastructure, evaluation, and cost optimization for client-facing AI platforms. He has a proven record of converting complex requirements into reliable, compliant (HIPAA, UK GDPR) AI products with measurable business impact.`,
  tags: ['about', 'summary', 'bio', 'who', 'introduction', 'profile', 'overview', 'background'],
  sectionId: 'about'
});

add({
  kind: 'profile',
  title: 'Availability, location and relocation',
  body: `Faisal is based in ${profile.location}. His stated availability is: ${profile.availability}. That means he is open to fully remote roles with European or US time-zone overlap, and he is also open to relocating for the right opportunity. For start dates, notice period, or contract specifics, contact him directly at ${profile.email}.`,
  tags: ['availability', 'available', 'relocate', 'relocation', 'remote', 'location', 'where', 'based', 'timezone', 'time zone', 'visa', 'onsite', 'hybrid', 'start', 'notice'],
  sectionId: 'contact'
});

add({
  kind: 'profile',
  title: 'How to contact Faisal',
  body: `WhatsApp is the fastest way to reach him: ${profile.phone}. Email: ${profile.email}. LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}. You can also use the contact form in the Contact section of this site, or download his CV from the Resume button in the header area.`,
  tags: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'hire', 'linkedin', 'github', 'call', 'message', 'text', 'get in touch', 'cv', 'resume'],
  sectionId: 'contact'
});

add({
  kind: 'profile',
  title: 'Years of experience',
  body: `Faisal has ${profile.yearsExperience} years of professional experience, starting as a Trainee Data Scientist at Programmers Force in August 2020, then AI Engineer at Techling (Dec 2020 – Apr 2023), Senior AI Engineer at Gicoh (Apr 2023 – Mar 2025), Senior AI Engineer and Team Lead at Linvex Solutions (Mar 2025 – May 2026), and currently ${profile.currentRole} at ${profile.currentCompany} since ${profile.currentSince}.`,
  tags: ['years', 'experience', 'how long', 'seniority', 'career', 'history', 'timeline'],
  sectionId: 'experience'
});

add({
  kind: 'profile',
  title: 'Leadership and team management',
  body: `Faisal leads engineering teams as well as building systems. At Tekhqs he supervises 3 junior engineers, running code review, technical direction, and delivery oversight across concurrent AI workstreams, and authors CTO-level technical proposals covering self-hosted LLM migration, cost and latency benchmarking, and feature roadmaps. At Linvex Solutions he led a cross-functional team of 5 engineers, owning solution architecture, code review, AWS infrastructure, and delivery. His leadership skills include technical team leadership, solution architecture, code review, mentoring, agile delivery, executive-level technical documentation, and cross-functional stakeholder management.`,
  tags: ['lead', 'leadership', 'team', 'manage', 'management', 'mentor', 'mentoring', 'juniors', 'code review', 'architect', 'stakeholder', 'cto', 'proposal'],
  sectionId: 'experience'
});

add({
  kind: 'profile',
  title: 'Compliance and responsible AI experience',
  body: `Faisal has shipped systems under real regulatory constraints. CareVision is HIPAA-compliant with PHI encryption at rest and in transit, RBAC, and audit logging meeting US federal healthcare data-privacy requirements. Vyera AI implements full UK GDPR compliance including data minimization, consent management, lawful-basis documentation, and right-to-erasure. His responsible-AI practice covers guardrails, deterministic safety checks, human oversight, fallback behavior, graceful degradation, audit trails, data residency, and PII/PHI handling.`,
  tags: ['hipaa', 'gdpr', 'compliance', 'compliant', 'regulation', 'regulated', 'security', 'privacy', 'phi', 'pii', 'rbac', 'audit', 'governance', 'responsible ai', 'guardrails', 'safety'],
  sectionId: 'skills'
});

/* --------------------------------------------------------------- projects */

projects.forEach((p) => {
  add({
    kind: 'project',
    title: p.title,
    projectTitle: p.title,
    body: `${p.description} Category: ${p.category}. Key results: ${p.metrics}. What he built: ${p.details.join(' ')} Challenge solved: ${p.challenges} Architecture: ${p.architecture} Technologies: ${p.tech.join(', ')}.${p.demo ? ` Live at ${p.demo}.` : ''}`,
    tags: [...p.tech, p.category, 'project', 'built', 'shipped'].map((t) => t.toLowerCase()),
    sectionId: 'projects'
  });
});

/* ------------------------------------------------------------- experience */

experience.forEach((e) => {
  add({
    kind: 'experience',
    title: `${e.role} at ${e.company}`,
    body: `${e.role} at ${e.company} (${e.period}), ${e.location}, ${e.type}. ${e.description} Highlights: ${e.achievements.join(' ')}`,
    tags: [e.company.toLowerCase(), e.role.toLowerCase(), 'job', 'role', 'work', 'employer', 'position', 'experience'],
    sectionId: 'experience'
  });
});

/* ----------------------------------------------------------------- skills */

skills.forEach((group) => {
  add({
    kind: 'skill',
    title: group.category,
    body: `Under ${group.category}, Faisal works with: ${group.items.join('; ')}.`,
    tags: [group.category.toLowerCase(), 'skill', 'skills', 'stack', 'technology', 'tools', 'know', 'experience with',
      ...group.items.join(' ').toLowerCase().split(/[,;()]/).map((s) => s.trim()).filter((s) => s.length > 2)],
    sectionId: 'skills'
  });
});

/* ----------------------------------------------------------- case studies */

caseStudies.forEach((cs) => {
  add({
    kind: 'caseStudy',
    title: `Case study: ${cs.title}`,
    projectTitle: cs.title,
    body: `Client: ${cs.client}. Duration: ${cs.duration}. Category: ${cs.category}. The challenge: ${cs.problem.description} ${cs.problem.points.join(' ')} The solution: ${cs.solution.description} ${cs.solution.points.join(' ')} The impact: ${cs.results.metrics.map((m) => `${m.label} ${m.value} (${m.description})`).join(', ')}. Outcomes: ${cs.results.outcomes.join(' ')}`,
    tags: ['case study', 'deep dive', 'impact', 'results', 'outcome', 'roi', cs.category.toLowerCase(), cs.client.toLowerCase()],
    sectionId: 'case-studies'
  });
});

/* ---------------------------------------------------------------- R and D */

research.forEach((r) => {
  add({
    kind: 'research',
    title: r.title,
    body: `${r.subtitle}. ${r.description} Related to: ${r.tags.join(', ')}.`,
    tags: [...r.tags.map((t) => t.toLowerCase()), 'research', 'r&d', 'benchmark', 'benchmarking', 'study', 'independent', 'side project', 'experiment'],
    sectionId: 'research'
  });
});

/* --------------------------------------------------------------- services */

services.forEach((s) => {
  add({
    kind: 'service',
    title: s.title,
    body: `${s.title}: ${s.description}`,
    tags: [s.title.toLowerCase(), 'service', 'offer', 'help', 'consulting', 'freelance', 'work together', 'hire for'],
    sectionId: 'services'
  });
});

/* -------------------------------------------------- education and certs */

add({
  kind: 'education',
  title: 'Education',
  body: education
    .map((e) => `${e.degree} from ${e.institution} (${e.period}), ${e.details}.`)
    .join(' ') +
    ' Certifications: ' +
    certifications.map((c) => `${c.name} — ${c.issuer}.`).join(' '),
  tags: ['education', 'degree', 'university', 'study', 'studied', 'masters', 'ms', 'bs', 'bachelor', 'cgpa', 'gpa', 'academic', 'qualification', 'certification', 'certificate', 'course', 'coursera', 'stanford'],
  sectionId: 'certifications'
});

export const knowledgeBase = chunks;

/** Questions surfaced as starter chips in the chat UI. */
export const suggestedQuestions = [
  'What is he working on right now?',
  'Show me his agentic AI projects',
  'Does he have RAG experience?',
  'Is he open to relocation?',
  'What cloud platforms has he used?',
  'Tell me about the Saudi Aramco project',
  'Has he led a team?',
  'How do I contact him?'
];
