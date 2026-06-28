import { Brain, Code, Database } from 'lucide-react';

export const projects = [
  {
    title: "Vyera AI — Competitive Intelligence Multi-Agent Platform",
    icon: "🎯",
    description: "AI-powered competitive intelligence platform for the UK market that autonomously discovers competitors, scrapes data via Firecrawl, and synthesizes strategic insights through a LangGraph supervisor graph with full UK GDPR compliance.",
    tech: ["LangGraph", "Multi-Agent", "Firecrawl", "FastAPI", "AWS", "UK GDPR"],
    category: "Multi-Agent AI",
    metrics: "360° competitor profiles, UK GDPR compliant, live on vyera.ai",
    github: "https://github.com/faysal-aslam",
    demo: "https://vyera.ai",
    details: [
      "Architected multi-agent LangGraph supervisor graph for autonomous competitive intelligence",
      "Built specialized agents for web scraping, social media, pricing, and market positioning",
      "Engineered full UK GDPR compliance (data minimization, consent, right-to-erasure)",
      "Owned end-to-end AWS infrastructure (IAM, security, scalable deployment)",
      "Led cross-functional developer team for production delivery"
    ],
    challenges: "Coordinating multi-source data pipelines while maintaining UK GDPR compliance and delivering actionable strategic insights at scale.",
    architecture: "LangGraph multi-agent supervisor with Firecrawl scraping pipelines, FastAPI backend, and AWS infrastructure with GDPR governance layer."
  },
  {
    title: "Kresus — Web3 Conversational AI Trading Agent",
    icon: "⛓️",
    description: "Production Web3 conversational trading agent — FastAPI + LangGraph service driving Claude for on-chain trades across Solana, Base, and Worldchain through natural language with non-custodial client-side signing.",
    tech: ["LangGraph", "Claude", "FastAPI", "SSE", "Solana", "Base", "Worldchain", "DeFi"],
    category: "Agentic AI + Web3",
    metrics: "30+ trading tools, non-custodial, SSE streaming to mobile app",
    github: "https://github.com/faysal-aslam",
    demo: "https://kresus.com",
    details: [
      "Architected AI orchestration layer replacing previous in-process Rust agent",
      "Engineered multi-turn agentic tool-calling loop over 30+ trading tools",
      "Integrated DexScreener, Hyperliquid, swaps, transfers, and pump.fun deployment",
      "Preserved non-custodial model — tools return unsigned transactions for mobile wallet signing",
      "Enforced deterministic safety guardrails with structured observability logging"
    ],
    challenges: "Building a safe, non-custodial trading agent with real-time SSE streaming while enforcing chain-specific guardrails across multi-chain DeFi operations.",
    architecture: "FastAPI + LangGraph + Claude orchestration, 30+ tool-calling integrations, SSE streaming, and client-side transaction signing model."
  },
  {
    title: "Advanced Hybrid RAG — LightRAG + Neo4j + Azure AI",
    icon: "🔗",
    description: "Hybrid multi-agent RAG system combining LightRAG (Neo4j knowledge graph) with Azure Document Intelligence. Deployed at Saudi Aramco for petroleum-management teams as an enterprise knowledge assistant.",
    tech: ["LightRAG", "Neo4j GraphDB", "Azure AI", "LangGraph", "GraphRAG", "SQL"],
    category: "Advanced RAG",
    metrics: "Deployed at Saudi Aramco, multi-hop reasoning beyond vector search",
    github: "https://github.com/faysal-aslam",
    demo: "https://auxee.com",
    details: [
      "Smart routing: LightRAG + SQL for Excel/CSV; Azure Document Intelligence + GraphRAG for PDF/DOCX/TXT",
      "Entity and relationship extraction via Neo4j knowledge graph",
      "Multi-hop reasoning beyond traditional vector search",
      "Deployed internally at Aramco for technical and operational document queries",
      "LangGraph multi-agent orchestration for document-type routing"
    ],
    challenges: "Building unified routing across heterogeneous document types while enabling multi-hop graph reasoning for enterprise-scale knowledge bases.",
    architecture: "LangGraph multi-agent system, LightRAG + Neo4j GraphDB, Azure Document Intelligence, and SQL layer for structured data."
  },
  {
    title: "NeuroSync — Real-Time AI Meeting Intelligence & CRM",
    icon: "🧠",
    description: "Real-time meeting intelligence platform transcribing live meetings via OpenAI Whisper with speaker diarization, extracting action items and deal signals, syncing to Salesforce CRM in under 3 seconds post-meeting.",
    tech: ["OpenAI Whisper", "Speaker Diarization", "LangGraph", "Salesforce API", "AWS Lambda"],
    category: "Speech AI + CRM",
    metrics: "Sub-200ms latency per chunk, Salesforce sync in <3s post-meeting",
    github: "https://github.com/faysal-aslam",
    details: [
      "Real-time transcription with speaker diarization via OpenAI Whisper",
      "Extracts action items, deal signals, and sentiment from live meetings",
      "Automatic Salesforce CRM sync within 3 seconds post-meeting",
      "Fully serverless event-driven architecture on AWS Lambda + API Gateway",
      "Sub-200ms processing latency per transcript chunk at concurrent scale"
    ],
    challenges: "Achieving sub-second CRM sync from live meeting audio while maintaining accurate speaker attribution and sentiment extraction at scale.",
    architecture: "Serverless AWS Lambda pipeline, Whisper ASR with diarization, LangGraph extraction agents, and Salesforce API integration."
  },
  {
    title: "SynthAgent — Autonomous AI Research Analyst",
    icon: "🔬",
    description: "ReAct-pattern research agent with self-correction loops that autonomously plans research, evaluates output quality, and refines findings before delivering citation-rich reports via Vertex AI Gemini.",
    tech: ["ReAct", "Self-Reflection", "Vertex AI Gemini", "LangGraph", "Firecrawl"],
    category: "Agentic AI",
    metrics: "Research cycles reduced from 8 hours to under 25 minutes",
    github: "https://github.com/faysal-aslam",
    details: [
      "Built ReAct agent with self-correction and reflection loops",
      "Autonomous research planning with quality evaluation before delivery",
      "Multi-source synthesis via Firecrawl + RAG integration",
      "Citation-rich report generation via Vertex AI Gemini",
      "Reduced senior-analyst research cycles from 8 hours to under 25 minutes"
    ],
    challenges: "Designing reliable self-correction loops that know when to trigger additional research without infinite loops or degraded output quality.",
    architecture: "ReAct agent with LangGraph orchestration, Firecrawl web research, RAG synthesis, and Vertex AI Gemini report generation."
  },
  {
    title: "Real-Time Live-Call Conversational Chatbot",
    icon: "📞",
    description: "End-to-end real-time conversational AI with custom RAG pipeline (LLaMA 3.2 + FAISS) for sub-second knowledge retrieval over live inbound phone calls via custom Python SIP client and Elastix VoIP PBX.",
    tech: ["LLaMA 3.2", "RAG", "FAISS", "Google STT/TTS", "Python SIP", "Elastix VoIP"],
    category: "Conversational AI",
    metrics: "Sub-second RAG retrieval, 24/7 autonomous inbound call handling",
    github: "https://github.com/faysal-aslam",
    details: [
      "Custom RAG pipeline with LLaMA 3.2 + FAISS for sub-second knowledge retrieval",
      "Custom Python SIP client integrated with Elastix VoIP PBX",
      "Autonomous 24/7 inbound call handling without human intervention",
      "Google Speech-to-Text and Text-to-Speech for voice processing",
      "Context-aware responses during live phone conversations"
    ],
    challenges: "Integrating real-time voice processing with LLM responses while maintaining sub-second latency during live phone calls.",
    architecture: "RAG with LLaMA 3.2 + FAISS, Google STT/TTS pipeline, Python SIP client for Elastix integration."
  },
  {
    title: "HighTribe — Multi-Agent Travel Assistant",
    icon: "✈️",
    description: "Production-grade multi-agent system (LangGraph) live on web, Google Play, and Apple App Store with specialized agents for internal DB querying, Google Maps, and real-time web search.",
    tech: ["LangGraph", "Multi-Agent", "Gemini", "GPT-4", "Google Maps API"],
    category: "AI Multi-Agent System",
    metrics: "Live on Web, Google Play Store and iOS App Store",
    github: "https://github.com/faysal-aslam",
    demo: "https://hightribe.com",
    details: [
      "Specialized LangGraph agents for internal DB, Google Maps, and web search",
      "Dual-LLM routing (Gemini + GPT-4) with fallback strategies",
      "Optimal response quality and cost efficiency at scale",
      "Successfully deployed on web and mobile platforms",
      "Real-time travel planning with location-based recommendations"
    ],
    challenges: "Coordinating multiple AI agents across data sources while optimizing LLM cost and quality through dual-model routing.",
    architecture: "LangGraph multi-agent system with Gemini + GPT-4 dual routing, Google Maps integration, cross-platform deployment."
  },
  {
    title: "IntelliFlow — Enterprise Autonomous Workflow System",
    icon: "⚡",
    description: "Enterprise-grade workflow automation platform on n8n integrated with LLM-powered agents (GPT-4, LLaMA) for complex multi-step business process automation without human intervention.",
    tech: ["n8n", "LLM Agents", "GPT-4", "LLaMA", "Workflow Orchestration"],
    category: "AI Automation",
    metrics: "Multi-step autonomous workflows, conditional branching, dynamic task execution",
    github: "https://github.com/faysal-aslam",
    details: [
      "Enterprise-grade n8n platform with LLM-powered agent integration",
      "Modular LLM agent pipelines with decision-making and conditional branching",
      "Dynamic task execution across enterprise systems",
      "Autonomous multi-step business process automation",
      "GPT-4 and LLaMA integration for intelligent workflow decisions"
    ],
    challenges: "Creating flexible automation that handles complex business workflows with reliable LLM-driven decision-making.",
    architecture: "n8n workflow engine with GPT-4/LLaMA agent pipelines, conditional branching, and enterprise system connectors."
  },
  {
    title: "CareVision — HIPAA-Compliant Healthcare AI",
    icon: "🏥",
    description: "HIPAA-compliant healthcare platform with PHI encryption, RBAC, and audit logging. AI care-plan generation engine with voice-based data entry and NLP medical entity extraction.",
    tech: ["Healthcare AI", "HIPAA", "Voice AI", "NLP", "PHI Security", "STT/TTS"],
    category: "Healthcare AI",
    metrics: "HIPAA compliant, PHI encryption at rest and in transit, live at carevisioncms.co.uk",
    github: "https://github.com/faysal-aslam",
    demo: "https://carevisioncms.co.uk",
    details: [
      "PHI encryption at rest and in transit with RBAC and audit logging",
      "AI care-plan generation engine using LLMs",
      "Voice-based data entry with STT/TTS integration",
      "NLP medical entity extraction from clinical notes and diagnosis codes",
      "Meets US federal healthcare data-privacy requirements"
    ],
    challenges: "Ensuring HIPAA compliance while implementing AI-driven care planning and accurate medical terminology in voice processing.",
    architecture: "HIPAA-compliant platform with PHI security layer, LLM care-plan engine, voice AI pipeline, and NLP entity extraction."
  },
  {
    title: "VisionGuard — Multimodal AI Fraud Detection",
    icon: "🛡️",
    description: "FinTech fraud-detection system fusing transaction data, document image analysis (ID/cheque verification), and behavioral biometrics into a unified risk score via multimodal transformer architecture on AWS SageMaker.",
    tech: ["Multimodal AI", "Anomaly Detection", "AWS SageMaker", "Computer Vision", "FinTech"],
    category: "FinTech AI",
    metrics: "10,000+ transactions/min, p99 latency under 80ms",
    github: "https://github.com/faysal-aslam",
    details: [
      "Multimodal transformer fusing transaction, document, and biometric signals",
      "ID and cheque verification via document image analysis",
      "Behavioral biometrics integrated into unified risk scoring",
      "Deployed on AWS SageMaker auto-scaling endpoints",
      "Handles 10,000+ transactions/min at p99 latency under 80ms"
    ],
    challenges: "Fusing heterogeneous data modalities into a single real-time risk score while meeting strict fraud-prevention SLAs.",
    architecture: "Multimodal transformer on AWS SageMaker with document CV pipeline, transaction analysis, and behavioral biometrics fusion."
  },
  {
    title: "DocuMind — Autonomous AI Legal Document Review",
    icon: "⚖️",
    description: "Autonomous legal-review agent ingesting contracts and NDAs to flag risky clauses, missing obligations, and jurisdiction-specific issues via LangGraph multi-step reasoning over a legal RAG knowledge base.",
    tech: ["LegalTech", "Azure OpenAI", "LangGraph", "RAG", "NER", "GPT-4o"],
    category: "LegalTech AI",
    metrics: "Document review reduced from days to under 10 minutes",
    github: "https://github.com/faysal-aslam",
    details: [
      "LangGraph multi-step reasoning agent over legal RAG knowledge base",
      "Flags risky clauses, missing obligations, and jurisdiction-specific issues",
      "Azure OpenAI GPT-4o for intelligent legal analysis",
      "Critical/High/Medium/Low risk-severity report generation",
      "Reduced law-firm document review from days to under 10 minutes"
    ],
    challenges: "Accurately identifying jurisdiction-specific legal risks across diverse contract types with actionable severity classification.",
    architecture: "LangGraph reasoning agent, Azure OpenAI GPT-4o, legal RAG knowledge base, and NER for clause extraction."
  },
  {
    title: "Employee Counting & Tracking — Live CCTV",
    icon: "👥",
    description: "Real-time CV system for live employee counting and tracking from CCTV feeds using YOLOv8 + DeepSORT for persistent identity tracking with face-recognition biometric layer for named-presence detection.",
    tech: ["YOLOv8", "DeepSORT", "FastAPI", "RTSP", "Face Recognition"],
    category: "Computer Vision",
    metrics: "Real-time RTSP streaming, persistent identity tracking, multi-camera support",
    github: "https://github.com/faysal-aslam",
    details: [
      "FastAPI backend processing RTSP camera streams in real time",
      "YOLOv8 + DeepSORT for persistent identity tracking across frames",
      "Face-recognition biometric layer for named-presence detection",
      "Multi-camera support with centralized tracking dashboard",
      "Handles occlusions and crowded environments"
    ],
    challenges: "Maintaining accurate tracking across multiple camera feeds with occlusions, lighting variations, and crowded environments.",
    architecture: "FastAPI + RTSP pipeline, YOLOv8 detection, DeepSORT tracking, and face-recognition biometric module."
  },
  {
    title: "CRM/ERP Data Extraction Agent",
    icon: "💼",
    description: "LangGraph AI agent enabling non-technical users to query production ERP databases in natural language via custom NL-to-SQL tool integrated into the agent graph.",
    tech: ["LangGraph", "Natural Language to SQL", "Custom SQL Tool", "ERP Integration"],
    category: "AI Agents",
    metrics: "NL-to-SQL for ERP databases, under active development",
    github: "https://github.com/faysal-aslam",
    details: [
      "LangGraph agent with custom SQL tool for ERP database queries",
      "Natural language to SQL translation for non-technical users",
      "Intelligent query understanding of ERP-specific schemas",
      "Integrated into agent graph for conversational data access",
      "Currently under active development"
    ],
    challenges: "Translating complex natural language business queries into accurate SQL across ERP-specific database schemas.",
    architecture: "LangGraph agent framework with custom NL-to-SQL tools and ERP database connectors."
  },
  {
    title: "Chex.AI — End-to-End Vehicle Inspection AI",
    icon: "🚗",
    description: "Full-stack AI vehicle-inspection platform with FastAPI backend, AWS authentication + S3 storage, license-plate extraction, damage detection via fine-tuned YOLOv8, and Pixtral LLM damage reports.",
    tech: ["YOLOv8", "FastAPI", "AWS", "Pixtral LLM", "Object Tracking"],
    category: "Computer Vision + Gen AI",
    metrics: "95% damage detection accuracy, live at chex.ai",
    github: "https://github.com/faysal-aslam",
    demo: "https://chex.ai",
    details: [
      "Full-stack platform with FastAPI backend and AWS auth + S3 storage",
      "License-plate extraction and vehicle damage detection via fine-tuned YOLOv8",
      "Pixtral multimodal LLM for human-readable damage-assessment reports",
      "Video object-tracking module for live damage detection in video streams",
      "95% damage detection accuracy across vehicle types"
    ],
    challenges: "Processing high-resolution vehicle images in real-time while maintaining accuracy across lighting conditions and vehicle types.",
    architecture: "FastAPI + AWS backend, YOLOv8 detection pipeline, video tracking, and Pixtral LLM report generation."
  },
  {
    title: "DeftGPT — Multi-LLM Unified AI Platform",
    icon: "🤖",
    description: "Unified platform integrating 11 LLMs through a single FastAPI backend on AWS, allowing users to compare, switch, and receive parallel responses from multiple models simultaneously.",
    tech: ["FastAPI", "AWS", "Multi-LLM Orchestration", "GPT-4", "LLaMA"],
    category: "Generative AI",
    metrics: "11 LLMs integrated, live at deftgpt.com",
    github: "https://github.com/faysal-aslam",
    demo: "https://deftgpt.com",
    details: [
      "11 LLM APIs integrated through single FastAPI backend on AWS",
      "Users compare, switch, and receive parallel multi-model responses",
      "Full LLM API routing, authentication, and session management",
      "Real-time response streaming from multiple models",
      "Advanced multi-model orchestration architecture"
    ],
    challenges: "Managing concurrent API calls to 11 LLM providers while handling rate limits and consistent response formatting.",
    architecture: "FastAPI async backend on AWS with API gateway for LLM routing and real-time response aggregation."
  }
];

export const skills = [
  {
    category: "Generative AI & LLMs",
    icon: <Brain className="text-indigo-400" />,
    items: [
      "Large Language Models (GPT-4, Claude, Gemini, LLaMA 3.2, Pixtral)",
      "Prompt Engineering & Fine-Tuning (LoRA)",
      "Multimodal AI & Multi-LLM Orchestration",
      "RAG (Agentic, Hybrid, GraphRAG, LightRAG)",
      "Vector Search (FAISS) & Neo4j Knowledge Graphs",
      "LangSmith, LLM Evaluation & AI Observability"
    ]
  },
  {
    category: "Agentic AI & Orchestration",
    icon: <Code className="text-indigo-400" />,
    items: [
      "LangGraph, CrewAI, LangChain, n8n",
      "ReAct, Tool Calling, MCP, Guardrails",
      "Self-Correcting Agents & Workflow Orchestration",
      "FastAPI, Flask, Django, REST APIs, WebSockets",
      "Natural Language to SQL, Salesforce & Google Maps APIs",
      "Docker, CI/CD, GenAIOps"
    ]
  },
  {
    category: "Cloud, Vision & Compliance",
    icon: <Database className="text-indigo-400" />,
    items: [
      "AWS (SageMaker, Lambda, ECS, S3), GCP (Vertex AI, Cloud Run)",
      "Azure OpenAI & Azure AI Foundry",
      "YOLOv8, DeepSORT, Face Recognition, RTSP Streams",
      "OpenAI Whisper, Google STT/TTS, SIP/VoIP",
      "Web3 Agents (Solana, Base, DeFi, Non-Custodial Wallets)",
      "HIPAA & UK GDPR Compliance"
    ]
  }
];

export const experience = [
  {
    role: "Senior AI Engineer (Team Lead)",
    company: "Linvex Solutions",
    period: "Mar 2025 – Present",
    location: "Lahore, Pakistan",
    type: "Full-time · On-site",
    description: "Senior AI Engineer and Team Lead owning end-to-end architecture, cloud infrastructure, and cross-functional delivery of production Generative AI systems across agentic AI, RAG, Web3, and enterprise domains.",
    achievements: [
      "Vyera AI — competitive intelligence multi-agent platform (live: vyera.ai)",
      "Kresus — Web3 conversational trading agent across Solana, Base, and Worldchain",
      "Advanced Hybrid RAG deployed at Saudi Aramco via auxee.com",
      "NeuroSync — real-time meeting intelligence with Salesforce CRM sync",
      "SynthAgent — self-correcting ReAct research agent (8hr → 25min cycles)"
    ]
  },
  {
    role: "Senior AI Engineer",
    company: "Gicoh",
    period: "Apr 2023 – Mar 2025",
    location: "Lahore, Pakistan",
    type: "Full-time · On-site",
    description: "Led development of production Generative AI and computer vision products across healthcare, travel, automation, FinTech, and LegalTech domains.",
    achievements: [
      "Real-Time Live-Call Conversational Chatbot with RAG, LLaMA 3.2, and Elastix SIP",
      "HighTribe Multi-Agent Travel Assistant (live on web and app stores)",
      "IntelliFlow — Enterprise autonomous workflow automation with n8n and LLM agents",
      "CareVision — HIPAA-compliant healthcare AI (live: carevisioncms.co.uk)",
      "VisionGuard multimodal fraud detection on AWS SageMaker (10K+ txns/min)",
      "DocuMind autonomous legal document review agent with Azure OpenAI GPT-4o"
    ]
  },
  {
    role: "AI Engineer",
    company: "Techling (Private) Limited",
    period: "Jun 2021 – Apr 2023",
    location: "Lahore, Pakistan",
    type: "Full-time · On-site",
    description: "Developed end-to-end AI products combining computer vision and generative AI for enterprise clients.",
    achievements: [
      "Chex.AI — full-stack vehicle inspection platform with YOLOv8 and Pixtral LLM (live: chex.ai)",
      "DeftGPT — unified 11-LLM platform deployed on AWS (live: deftgpt.com)"
    ]
  },
  {
    role: "Trainee Data Scientist",
    company: "Programmers Force",
    period: "Mar 2021 – Jun 2021",
    location: "Lahore, Pakistan",
    type: "Full-time · On-site",
    description: "Hands-on machine learning model development and applications under experienced mentorship in a cross-functional team environment.",
    achievements: [
      "Contributed to machine learning model development and algorithms",
      "Collaborated with cross-functional teams on real-world AI solutions",
      "Conducted experiments supporting AI solution implementation"
    ]
  }
];

export const education = [
  {
    degree: "MS Data Science (AI/ML)",
    institution: "AUIC Islamabad",
    period: "Feb 2020 – Jan 2023",
    details: "CGPA 3.12/4",
    icon: "🎓"
  },
  {
    degree: "BS Computer Science",
    institution: "GC University Faisalabad",
    period: "Sep 2015 – Aug 2019",
    details: "CGPA 3.42/4",
    icon: "🎓"
  }
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera (Stanford University / DeepLearning.AI) — Andrew Ng",
    icon: "🏆"
  }
];

export const caseStudies = [
  {
    title: "Vyera AI — Competitive Intelligence Platform",
    client: "Linvex Solutions",
    category: "Multi-Agent AI + GDPR",
    icon: "🎯",
    duration: "6 months",
    problem: {
      title: "The Challenge",
      description: "UK businesses needed automated competitive intelligence but manual research was slow, incomplete, and couldn't scale across multiple data sources while meeting UK GDPR requirements.",
      points: [
        "Manual competitor research took days per analysis",
        "No unified view across web, social, and pricing data",
        "UK GDPR compliance requirements for data collection",
        "Inconsistent market positioning insights",
        "No scalable multi-source intelligence pipeline"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Built Vyera AI — a LangGraph multi-agent platform that autonomously discovers competitors, scrapes data via Firecrawl, and synthesizes 360° strategic profiles with full UK GDPR compliance.",
      points: [
        "LangGraph supervisor graph orchestrating specialized agents",
        "Firecrawl-powered web scraping and social media intelligence",
        "Pricing analysis and market positioning agents",
        "Full UK GDPR compliance (minimization, consent, right-to-erasure)",
        "End-to-end AWS infrastructure with IAM and scalable deployment"
      ],
      technologies: ["LangGraph", "Firecrawl", "FastAPI", "AWS", "UK GDPR", "Multi-Agent"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Competitor Coverage", value: "360°", description: "Automated multi-source profiles" },
        { label: "GDPR Compliance", value: "100%", description: "Full UK regulatory compliance" },
        { label: "Research Time", value: "90%", description: "Reduction vs manual analysis" },
        { label: "Data Sources", value: "Multi", description: "Web, social, pricing pipelines" }
      ],
      outcomes: [
        "Live platform at vyera.ai serving UK market intelligence",
        "Automated competitor discovery and profile generation",
        "Full UK GDPR governance built into the architecture",
        "Cross-functional team led to successful production deployment",
        "Scalable AWS infrastructure for growing data volumes"
      ]
    }
  },
  {
    title: "Kresus — Web3 Conversational Trading Agent",
    client: "Linvex Solutions",
    category: "Agentic AI + Web3",
    icon: "⛓️",
    duration: "8 months",
    problem: {
      title: "The Challenge",
      description: "Crypto users needed a natural-language interface to research, analyze, and execute on-chain trades across multiple chains without compromising the non-custodial security model.",
      points: [
        "Complex multi-chain DeFi operations required technical expertise",
        "Previous Rust agent lacked flexibility for rapid tool expansion",
        "Non-custodial signing model must be preserved",
        "Real-time streaming responses needed for mobile UX",
        "Safety guardrails required for unsupported chains and cross-chain swaps"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Architected FastAPI + LangGraph + Claude orchestration with 30+ trading tools, SSE streaming to mobile, and non-custodial transaction preparation for client-side wallet signing.",
      points: [
        "Replaced in-process Rust agent with flexible LangGraph service",
        "30+ tools: DexScreener, Hyperliquid, swaps, transfers, pump.fun deployment",
        "SSE streaming for real-time mobile app responses",
        "Non-custodial model — unsigned transactions returned for wallet signing",
        "Deterministic safety guardrails enforced in code with full observability"
      ],
      technologies: ["LangGraph", "Claude", "FastAPI", "SSE", "Solana", "Base", "Worldchain", "DeFi"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Trading Tools", value: "30+", description: "Integrated on-chain operations" },
        { label: "Chains Supported", value: "3", description: "Solana, Base, Worldchain" },
        { label: "Custody Model", value: "100%", description: "Non-custodial preserved" },
        { label: "Platform", value: "Live", description: "Production at kresus.com" }
      ],
      outcomes: [
        "Production Web3 trading copilot live at kresus.com",
        "Natural language on-chain trade execution across 3 chains",
        "Non-custodial security model fully preserved",
        "Structured logging for input, intent, and tool-call observability",
        "Flexible agent architecture enabling rapid tool expansion"
      ]
    }
  },
  {
    title: "Chex.AI — AI-Powered Vehicle Inspection",
    client: "Techling",
    category: "Computer Vision + Generative AI",
    icon: "🚗",
    duration: "6 months",
    problem: {
      title: "The Challenge",
      description: "Vehicle inspection was a manual, time-consuming process requiring expert assessors. Traditional methods took 30–45 minutes per vehicle with inconsistent quality assessments.",
      points: [
        "Manual inspection took 30–45 minutes per vehicle",
        "Inconsistent damage assessment across inspectors",
        "High operational costs with human assessors",
        "No automated report generation",
        "Difficulty scaling inspection operations"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Delivered Chex.AI — a full-stack platform with YOLOv8 detection, video tracking, and Pixtral LLM for intelligent damage reports, deployed on AWS.",
      points: [
        "FastAPI backend with AWS authentication and S3 storage",
        "License plate extraction using fine-tuned YOLOv8",
        "Custom YOLOv8 for vehicle damage detection",
        "Video object tracking for live damage assessment",
        "Pixtral LLM for human-readable inspection reports"
      ],
      technologies: ["YOLOv8", "FastAPI", "AWS", "Pixtral LLM", "Object Tracking", "Computer Vision"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Time Saved", value: "85%", description: "Inspection reduced to <5 minutes" },
        { label: "Accuracy", value: "95%", description: "Damage detection accuracy" },
        { label: "Cost Reduction", value: "70%", description: "Operational cost savings" },
        { label: "Platform", value: "Live", description: "Production at chex.ai" }
      ],
      outcomes: [
        "Vehicle inspection reduced from 30–45 minutes to under 5 minutes",
        "95% accuracy in damage detection across vehicle types",
        "Automated AI-powered report generation with Pixtral LLM",
        "Live production platform at chex.ai on AWS",
        "Video tracking module for live stream damage detection"
      ]
    }
  }
];
