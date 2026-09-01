/**
 * "What do you need?" triage data.
 *
 * A visitor picks the problem they arrived with; each option answers it with
 * work Faisal has already shipped, the approach he'd take, and a WhatsApp
 * message pre-written in their own terms so contacting costs nothing.
 */

export const solutions = [
  {
    id: 'agent',
    icon: '🤖',
    label: 'An AI agent or copilot in my product',
    need: 'a production agent that can actually take actions, not just chat',
    approach: [
      'Scope the tool surface — what the agent is allowed to do, and what it must never do',
      'Design the orchestration graph (LangGraph supervisor, sub-agents, state, checkpointing)',
      'Enforce deterministic guardrails in code rather than trusting the prompt',
      'Instrument evaluation and structured logging before launch, not after',
      'Ship behind streaming responses so it feels instant'
    ],
    proof: ['Kresus — Web3 Conversational AI Trading Agent', 'HighTribe — Multi-Agent Travel Assistant', 'CRM/ERP Data Extraction Agent'],
    outcome: 'Kresus runs a multi-turn loop over 30+ live trading tools across 4 blockchains — in production, non-custodial.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I'm looking to build an AI agent/copilot into my product and I'd like to discuss it."
  },
  {
    id: 'rag',
    icon: '🔗',
    label: 'A chatbot or search over my own documents',
    need: 'a RAG system that answers accurately from your own content',
    approach: [
      'Audit the documents first — formats, tables, volume, update frequency',
      'Choose retrieval per document type rather than forcing one pipeline',
      'Add a knowledge graph where questions need multi-hop reasoning',
      'Measure retrieval accuracy against a real question set, not vibes',
      'Ground every answer with citations so users can verify'
    ],
    proof: ['Advanced Hybrid RAG — LightRAG + Neo4j + Azure AI', 'DocuMind — Autonomous AI Legal Document Review', 'Real-Time Live-Call Conversational AI Chatbot'],
    outcome: 'My hybrid RAG system is deployed inside Saudi Aramco, letting petroleum-management teams query technical documents in plain language.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I need a RAG chatbot/search over my company's documents and I'd like to discuss it."
  },
  {
    id: 'automation',
    icon: '⚡',
    label: 'To automate a slow business process',
    need: 'autonomous workflows that remove manual steps end to end',
    approach: [
      'Map the current process and find the steps that actually cost time',
      'Decide what stays deterministic and what genuinely needs an LLM',
      'Build modular agent pipelines with conditional branching',
      'Keep a human in the loop wherever a mistake would be expensive',
      'Track time saved so the ROI is visible to whoever signed off'
    ],
    proof: ['IntelliFlow — Enterprise Autonomous Workflow System', 'SynthAgent — Autonomous AI Research Analyst', 'NeuroSync — Real-Time AI Meeting Intelligence & CRM'],
    outcome: 'SynthAgent cut senior-analyst research cycles from 8 hours to under 25 minutes. NeuroSync syncs live meetings to Salesforce in under 3 seconds.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I want to automate a business process with AI and I'd like to discuss it."
  },
  {
    id: 'vision',
    icon: '👁️',
    label: 'Computer vision or video analytics',
    need: 'detection and tracking that holds up on real camera feeds',
    approach: [
      'Establish the accuracy bar and what a false positive costs you',
      'Fine-tune detection on your actual imagery, not a generic dataset',
      'Add tracking so objects keep identity across frames and occlusions',
      'Layer an LLM on top when humans need a readable report, not boxes',
      'Deploy against live RTSP streams with latency budgeted per stage'
    ],
    proof: ['Chex.AI — End-to-End Vehicle Inspection AI', 'Employee Counting & Tracking — Live CCTV', 'VisionGuard — Multimodal AI Fraud Detection'],
    outcome: '95% damage-detection accuracy at Chex.AI, and VisionGuard scores 10,000+ transactions a minute at p99 under 80ms.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I have a computer vision / video analytics project and I'd like to discuss it."
  },
  {
    id: 'voice',
    icon: '🎙️',
    label: 'Voice AI or call automation',
    need: 'a voice system that handles real conversations without a human',
    approach: [
      'Budget latency across every stage — speech in, retrieval, generation, speech out',
      'Wire the telephony layer properly (SIP/VoIP) rather than a browser demo',
      'Keep retrieval sub-second so the pause never feels unnatural',
      'Add diarization when who-said-what matters',
      'Fall back gracefully to a human when confidence drops'
    ],
    proof: ['Real-Time Live-Call Conversational AI Chatbot', 'NeuroSync — Real-Time AI Meeting Intelligence & CRM', 'CareVision — HIPAA-Compliant Healthcare AI'],
    outcome: 'A live-call assistant handling inbound phone calls 24/7 with sub-second RAG retrieval, over a real Elastix VoIP PBX.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I'm interested in voice AI / call automation and I'd like to discuss it."
  },
  {
    id: 'cost',
    icon: '📉',
    label: 'My AI costs too much or is unreliable',
    need: 'lower spend and predictable behaviour from an existing system',
    approach: [
      'Profile where the tokens actually go before changing anything',
      'Attack the dominant cost driver — usually the tool schema, not the replies',
      'Apply prompt caching and restructure the system prompt',
      'Benchmark cheaper or self-hosted models against your real workload',
      'Add evaluation so a cost cut cannot quietly become a quality cut'
    ],
    proof: ['LLM Cost & Token Economics Benchmarking', 'Self-Hosted Open-Weight LLM Feasibility Study', 'Kresus — Web3 Conversational AI Trading Agent'],
    outcome: 'I profiled a 37-tool agentic loop as 99.7% input-bound with a ~38K-token tool schema as the real cost driver — then cut spend with prompt caching.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I need help reducing the cost / improving the reliability of an AI system and I'd like to discuss it."
  },
  {
    id: 'unsure',
    icon: '💡',
    label: "I have a problem but I'm not sure AI is the answer",
    need: 'an honest assessment before anyone spends money',
    approach: [
      'Start with the business outcome, not the technology',
      'Say plainly when a simpler non-AI solution would do the job better',
      'Identify whether the data you have can actually support the goal',
      'Scope the smallest version that proves or kills the idea',
      'Deliver a written architecture and effort estimate you can act on'
    ],
    proof: ['Multi-Mode AI SaaS Workspace', 'Document AI & RAG Ingestion Strategy', 'Self-Hosted Open-Weight LLM Feasibility Study'],
    outcome: 'I write CTO-level technical proposals — benchmark plans, cost comparisons and effort estimates — that decisions actually get made from.',
    whatsappMessage: "Hi Faisal, I saw your portfolio. I have a business problem and I'd like your honest view on whether AI is the right fit."
  }
];

/** Live, publicly reachable products — the strongest credibility signal available. */
export const liveProducts = [
  {
    name: 'Kresus',
    url: 'https://kresus.com',
    domain: 'kresus.com',
    what: 'Web3 conversational trading agent',
    metric: '30+ tools · 4 chains',
    icon: '⛓️'
  },
  {
    name: 'Vyera AI',
    url: 'https://vyera.ai',
    domain: 'vyera.ai',
    what: 'Competitive intelligence platform',
    metric: '~8 analyst hours saved per report',
    icon: '🎯'
  },
  {
    name: 'Auxee',
    url: 'https://auxee.com',
    domain: 'auxee.com',
    what: 'Enterprise hybrid RAG assistant',
    metric: 'Deployed at Saudi Aramco',
    icon: '🔗'
  },
  {
    name: 'Chex.AI',
    url: 'https://chex.ai',
    domain: 'chex.ai',
    what: 'AI vehicle inspection platform',
    metric: '95% detection accuracy',
    icon: '🚗'
  },
  {
    name: 'DeftGPT',
    url: 'https://deftgpt.com',
    domain: 'deftgpt.com',
    what: 'Unified multi-LLM platform',
    metric: '11 LLMs, one backend',
    icon: '🤖'
  },
  {
    name: 'CareVision',
    url: 'https://carevisioncms.co.uk',
    domain: 'carevisioncms.co.uk',
    what: 'HIPAA-compliant healthcare AI',
    metric: 'PHI encrypted · RBAC · audited',
    icon: '🏥'
  },
  {
    name: 'HighTribe',
    url: 'https://hightribe.com',
    domain: 'hightribe.com',
    what: 'Multi-agent travel assistant',
    metric: 'Web · App Store · Google Play',
    icon: '✈️'
  }
];

/** Delivery process — reduces perceived risk for a client who has been burned before. */
export const processSteps = [
  {
    step: '01',
    title: 'Scope honestly',
    detail: 'A call to understand the outcome you need. If AI is the wrong tool, you hear that first — before anyone spends money.'
  },
  {
    step: '02',
    title: 'Architect and estimate',
    detail: 'You get a written architecture, model and cost comparison, and an effort estimate. The same CTO-level proposals I write at Tekhqs.'
  },
  {
    step: '03',
    title: 'Build the thinnest version that proves it',
    detail: 'A working slice against your real data, early — so the idea is validated or killed before the budget is committed.'
  },
  {
    step: '04',
    title: 'Evaluate before shipping',
    detail: 'Eval sets, prompt regression tests, tracing and cost monitoring. Guardrails enforced in code, not hoped for in a prompt.'
  },
  {
    step: '05',
    title: 'Deploy and hand over',
    detail: 'Production deployment on AWS, GCP or Azure with observability, documentation and a team that can maintain it after I hand over.'
  }
];
