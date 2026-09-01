import {
  Brain, Network, Search, Database, Gauge, Server,
  Cloud, Code, Eye, Link2, ShieldCheck, Terminal
} from 'lucide-react';

export const projects = [
  {
    title: "Kresus — Web3 Conversational AI Trading Agent",
    icon: "⛓️",
    description: "Production Web3 conversational trading agent — FastAPI + LangGraph service driving Claude for on-chain trades across Solana, Base, World Chain, and Sui through natural language with non-custodial client-side signing.",
    tech: ["LangGraph", "Claude", "FastAPI", "SSE", "Solana", "Base", "World Chain", "Sui", "DeFi"],
    category: "Agentic AI + Web3",
    metrics: "30+ trading tools, 4 chains, non-custodial, SSE streaming to mobile",
    github: "https://github.com/faysal-aslam",
    demo: "https://kresus.com",
    details: [
      "Architected the AI orchestration layer, replacing a previous in-process Rust agent",
      "Engineered a multi-turn agentic tool-calling loop over 30+ trading tools",
      "Integrated DexScreener, Hyperliquid, technical analysis, swaps, transfers, portfolio balances, and token deployment",
      "Preserved the non-custodial model — tools return prepared, unsigned transactions for mobile wallet signing",
      "Cut per-conversation LLM spend and time-to-first-token via prompt caching and system-prompt restructuring",
      "Specified a self-hosted open-weight LLM migration path (Qwen-class FP8 behind an OpenAI-compatible endpoint) for the CTO"
    ],
    challenges: "Building a safe, non-custodial trading agent with real-time SSE streaming while enforcing deterministic unsupported-chain and cross-chain-swap guardrails across four chains.",
    architecture: "FastAPI + LangGraph + Claude orchestration, 30+ tool-calling integrations, SSE streaming, structured request-level observability, and a client-side transaction signing model.",
    architectureFlow: {
      layers: [
        { label: "Client", nodes: ["Mobile App"] },
        { label: "Transport", nodes: ["FastAPI Gateway", "SSE Stream"] },
        { label: "Orchestration", nodes: ["LangGraph Agent Loop", "Claude"] },
        { label: "Guardrails", nodes: ["Unsupported-Chain Check", "Cross-Chain Swap Block"] },
        { label: "Tools (30+)", nodes: ["DexScreener", "Hyperliquid", "Swaps", "Transfers", "Balances", "Token Deploy"] },
        { label: "Chains", nodes: ["Solana", "Base", "World Chain", "Sui"] },
        { label: "Settlement", nodes: ["Unsigned Tx → Wallet Signs"] }
      ],
      note: "Non-custodial by design — the service never holds keys. Tools return prepared, unsigned transactions that the mobile wallet signs client-side."
    }
  },
  {
    title: "Vyera AI — Competitive Intelligence Multi-Agent Platform",
    icon: "🎯",
    description: "AI-powered competitive intelligence platform for the UK market that autonomously discovers competitors, scrapes data via Firecrawl, and synthesizes strategic insights through a LangGraph supervisor graph with full UK GDPR compliance.",
    tech: ["LangGraph", "Multi-Agent", "Firecrawl", "FastAPI", "AWS", "UK GDPR"],
    category: "Multi-Agent AI",
    metrics: "360° competitor profiles replacing ~8 analyst hours per report, live on vyera.ai",
    github: "https://github.com/faysal-aslam",
    demo: "https://vyera.ai",
    details: [
      "Architected a multi-agent LangGraph supervisor graph for autonomous competitive intelligence",
      "Built specialized agents for web scraping, social media intelligence, pricing analysis, and market positioning",
      "Automated 360° competitor profiles replacing roughly 8 analyst hours of manual research per report",
      "Engineered full UK GDPR compliance (data minimization, consent management, lawful-basis documentation, right-to-erasure)",
      "Owned end-to-end AWS infrastructure including IAM, VPC, and security-group hardening"
    ],
    challenges: "Coordinating multi-source data pipelines while maintaining UK GDPR compliance and delivering actionable strategic insights at scale.",
    architecture: "LangGraph multi-agent supervisor with Firecrawl scraping pipelines, FastAPI backend, and hardened AWS infrastructure with a GDPR governance layer.",
    architectureFlow: {
      layers: [
        { label: "Input", nodes: ["Target Company"] },
        { label: "API", nodes: ["FastAPI"] },
        { label: "Supervisor", nodes: ["LangGraph Supervisor Graph"] },
        { label: "Agents", nodes: ["Competitor Discovery", "Web Scraping", "Social Intelligence", "Pricing Analysis", "Market Positioning"] },
        { label: "Sources", nodes: ["Firecrawl"] },
        { label: "Governance", nodes: ["Data Minimization", "Consent", "Right-to-Erasure"] },
        { label: "Output", nodes: ["360° Competitor Profile"] }
      ],
      note: "UK GDPR compliance is enforced as a pipeline stage, not an afterthought — every scraped record passes the governance layer before synthesis. Runs on hardened AWS (IAM, VPC, security groups)."
    }
  },
  {
    title: "Advanced Hybrid RAG — LightRAG + Neo4j + Azure AI",
    icon: "🔗",
    description: "Hybrid multi-agent RAG system combining LightRAG (Neo4j knowledge graph) with Azure AI Document Intelligence. Deployed at Saudi Aramco for petroleum-management teams as an enterprise knowledge assistant.",
    tech: ["LightRAG", "Neo4j GraphDB", "Azure AI Document Intelligence", "LangGraph", "GraphRAG", "SQL"],
    category: "Advanced RAG",
    metrics: "Deployed at Saudi Aramco, multi-hop reasoning beyond vector-only search",
    github: "https://github.com/faysal-aslam",
    demo: "https://auxee.com",
    details: [
      "Smart retrieval routing: LightRAG + SQL for Excel/CSV; Azure Document Intelligence + GraphRAG for PDF/DOCX/TXT",
      "Entity and relationship extraction over a Neo4j knowledge graph",
      "Multi-hop reasoning beyond traditional vector search",
      "Deployed internally at Saudi Aramco for technical and operational document queries",
      "LangGraph multi-agent orchestration for document-type routing"
    ],
    challenges: "Building unified retrieval routing across heterogeneous document types while enabling multi-hop graph reasoning over enterprise-scale knowledge bases.",
    architecture: "LangGraph multi-agent system, LightRAG + Neo4j GraphDB, Azure AI Document Intelligence, and a SQL layer for structured data.",
    architectureFlow: {
      layers: [
        { label: "Query", nodes: ["Natural Language Question"] },
        { label: "Router", nodes: ["LangGraph Retrieval Router"] },
        { label: "Structured Path", nodes: ["LightRAG + SQL", "Excel / CSV"] },
        { label: "Unstructured Path", nodes: ["Azure AI Doc Intelligence", "GraphRAG", "PDF / DOCX / TXT"] },
        { label: "Knowledge", nodes: ["Neo4j Knowledge Graph", "Entities + Relationships"] },
        { label: "Reasoning", nodes: ["Multi-Hop Traversal"] },
        { label: "Output", nodes: ["Grounded Answer"] }
      ],
      note: "Routing by document type is what makes this hybrid: vector-only search cannot answer multi-hop questions, and graph traversal alone loses tabular fidelity. Deployed internally at Saudi Aramco."
    }
  },
  {
    title: "NeuroSync — Real-Time AI Meeting Intelligence & CRM",
    icon: "🧠",
    description: "Real-time meeting intelligence platform transcribing live meetings via OpenAI Whisper with speaker diarization, extracting action items and deal signals, syncing to Salesforce CRM in under 3 seconds post-meeting.",
    tech: ["OpenAI Whisper", "Speaker Diarization", "LangGraph", "Salesforce API", "AWS Lambda", "API Gateway"],
    category: "Speech AI + CRM",
    metrics: "Sub-200ms latency per chunk, Salesforce sync in under 3s",
    github: "https://github.com/faysal-aslam",
    details: [
      "Real-time transcription with speaker diarization via OpenAI Whisper",
      "Extracts action items, deal signals, and sentiment from live meetings",
      "Automatic Salesforce CRM sync within 3 seconds",
      "Fully serverless event-driven architecture on AWS Lambda + API Gateway",
      "Sub-200ms processing latency per transcript chunk at concurrent scale"
    ],
    challenges: "Achieving sub-second CRM sync from live meeting audio while maintaining accurate speaker attribution and sentiment extraction at scale.",
    architecture: "Serverless AWS Lambda pipeline, Whisper ASR with diarization, LangGraph extraction agents, and Salesforce API integration.",
    architectureFlow: {
      layers: [
        { label: "Source", nodes: ["Live Meeting Audio"] },
        { label: "Ingest", nodes: ["API Gateway", "Audio Chunks"] },
        { label: "ASR", nodes: ["OpenAI Whisper", "Speaker Diarization"] },
        { label: "Extraction", nodes: ["LangGraph Agents", "Action Items", "Deal Signals", "Sentiment"] },
        { label: "Compute", nodes: ["AWS Lambda (event-driven)"] },
        { label: "Sync", nodes: ["Salesforce API"] }
      ],
      note: "Fully serverless and event-driven — sub-200ms processing per transcript chunk at concurrent scale, with CRM records written within 3 seconds of the meeting ending."
    }
  },
  {
    title: "SynthAgent — Autonomous AI Research Analyst",
    icon: "🔬",
    description: "ReAct-pattern research agent with self-correction loops that autonomously plans research, evaluates its own output quality, triggers additional tool calls, and refines findings before delivering citation-rich reports via Vertex AI Gemini.",
    tech: ["ReAct", "Self-Reflection Loops", "Vertex AI Gemini", "LangGraph", "Firecrawl"],
    category: "Agentic AI",
    metrics: "Research cycles reduced from 8 hours to under 25 minutes",
    github: "https://github.com/faysal-aslam",
    details: [
      "ReAct agent with self-correction and reflection loops",
      "Autonomous research planning with self-evaluated output quality before delivery",
      "Multi-source synthesis via Firecrawl + RAG integration",
      "Citation-rich report generation via Vertex AI Gemini",
      "Reduced senior-analyst research cycles from 8 hours to under 25 minutes"
    ],
    challenges: "Designing reliable self-correction loops that know when to trigger additional research without infinite loops or degraded output quality.",
    architecture: "ReAct agent with LangGraph orchestration, Firecrawl web research, RAG synthesis, and Vertex AI Gemini report generation.",
    architectureFlow: {
      layers: [
        { label: "Input", nodes: ["Research Brief"] },
        { label: "Plan", nodes: ["ReAct Planner"] },
        { label: "Act", nodes: ["Firecrawl Search", "Source Retrieval", "RAG Synthesis"] },
        { label: "Reflect", nodes: ["Self-Evaluation", "Quality Gate"] },
        { label: "Loop", nodes: ["Insufficient → Re-plan", "Sufficient → Proceed"] },
        { label: "Generate", nodes: ["Vertex AI Gemini"] },
        { label: "Output", nodes: ["Citation-Rich Report"] }
      ],
      note: "The reflection loop is the whole point — the agent scores its own output and re-runs research until the quality gate passes, cutting analyst cycles from 8 hours to under 25 minutes."
    }
  },
  {
    title: "Real-Time Live-Call Conversational AI Chatbot",
    icon: "📞",
    description: "End-to-end real-time conversational AI with a custom RAG pipeline (LLaMA 3.2 + FAISS) for sub-second knowledge retrieval over live inbound phone calls via a custom Python SIP client and Elastix VoIP PBX.",
    tech: ["LLaMA 3.2", "RAG", "FAISS", "Google STT/TTS", "Python SIP", "Elastix VoIP"],
    category: "Conversational AI",
    metrics: "Sub-second RAG retrieval, 24/7 autonomous inbound call handling",
    github: "https://github.com/faysal-aslam",
    details: [
      "Custom RAG pipeline with LLaMA 3.2 + FAISS for sub-second knowledge retrieval",
      "Custom Python SIP client integrated with an Elastix VoIP PBX",
      "Autonomous 24/7 inbound call handling without human intervention",
      "Google Speech-to-Text and Text-to-Speech for voice processing",
      "Context-aware responses during live phone conversations"
    ],
    challenges: "Integrating real-time voice processing with LLM responses while maintaining sub-second latency during live phone calls.",
    architecture: "RAG with LLaMA 3.2 + FAISS, Google STT/TTS pipeline, and a Python SIP client for Elastix integration.",
    architectureFlow: {
      layers: [
        { label: "Caller", nodes: ["Inbound Phone Call"] },
        { label: "Telephony", nodes: ["Elastix VoIP PBX", "Python SIP Client"] },
        { label: "Speech In", nodes: ["Google Speech-to-Text"] },
        { label: "Retrieval", nodes: ["FAISS Vector Search", "Knowledge Base"] },
        { label: "Generation", nodes: ["LLaMA 3.2"] },
        { label: "Speech Out", nodes: ["Google Text-to-Speech"] },
        { label: "Caller", nodes: ["Spoken Response"] }
      ],
      note: "The full loop runs inside a live call, so every stage is latency-budgeted — FAISS retrieval completes sub-second to keep the conversation natural. Handles inbound calls 24/7 with no human in the loop."
    }
  },
  {
    title: "HighTribe — Multi-Agent Travel Assistant",
    icon: "✈️",
    description: "Production-grade multi-agent LangGraph system live on web, Google Play, and the Apple App Store, with specialized agents for internal DB querying, Google Maps, and real-time web search.",
    tech: ["LangGraph", "Multi-Agent", "Gemini", "GPT-4", "Google Maps API"],
    category: "AI Multi-Agent System",
    metrics: "Live on Web, Google Play, and the iOS App Store",
    github: "https://github.com/faysal-aslam",
    demo: "https://hightribe.com",
    details: [
      "Specialized LangGraph agents for internal DB, Google Maps, and web search",
      "Dual-LLM routing (Gemini + GPT-4) with fallback strategies",
      "Optimal response quality and cost efficiency at scale",
      "Deployed across web, Google Play, and the App Store",
      "Real-time travel planning with location-based recommendations"
    ],
    challenges: "Coordinating multiple AI agents across data sources while optimizing LLM cost and quality through dual-model routing.",
    architecture: "LangGraph multi-agent system with Gemini + GPT-4 dual routing, Google Maps integration, and cross-platform deployment.",
    architectureFlow: {
      layers: [
        { label: "Clients", nodes: ["Web", "Google Play", "iOS App Store"] },
        { label: "Orchestration", nodes: ["LangGraph Multi-Agent System"] },
        { label: "Routing", nodes: ["Gemini", "GPT-4", "Fallback Strategy"] },
        { label: "Agents", nodes: ["Internal DB Query", "Google Maps", "Real-Time Web Search"] },
        { label: "Output", nodes: ["Travel Plan + Recommendations"] }
      ],
      note: "Dual-LLM routing is a cost lever — cheaper models handle routine turns and escalate only when needed, with fallback keeping the assistant available if a provider degrades."
    }
  },
  {
    title: "DocuMind — Autonomous AI Legal Document Review",
    icon: "⚖️",
    description: "Autonomous legal-review agent ingesting contracts and NDAs to flag risky clauses, missing obligations, and jurisdiction-specific issues via LangGraph multi-step reasoning over a legal RAG knowledge base.",
    tech: ["LegalTech", "Azure OpenAI", "GPT-4o", "LangGraph", "RAG", "NER"],
    category: "LegalTech AI",
    metrics: "Document review cut from days to under 10 minutes",
    github: "https://github.com/faysal-aslam",
    details: [
      "LangGraph multi-step reasoning agent over a legal RAG knowledge base",
      "Flags risky clauses, missing obligations, and jurisdiction-specific issues",
      "Azure OpenAI GPT-4o for legal analysis",
      "Critical/High/Medium/Low risk-severity report generation",
      "Cut law-firm document review from days to under 10 minutes per document"
    ],
    challenges: "Accurately identifying jurisdiction-specific legal risks across diverse contract types with actionable severity classification.",
    architecture: "LangGraph reasoning agent, Azure OpenAI GPT-4o, legal RAG knowledge base, and NER for clause extraction.",
    architectureFlow: {
      layers: [
        { label: "Input", nodes: ["Contract / NDA"] },
        { label: "Parse", nodes: ["Clause Segmentation", "NER Extraction"] },
        { label: "Retrieve", nodes: ["Legal RAG Knowledge Base"] },
        { label: "Reason", nodes: ["LangGraph Multi-Step Agent", "Azure OpenAI GPT-4o"] },
        { label: "Detect", nodes: ["Risky Clauses", "Missing Obligations", "Jurisdiction Issues"] },
        { label: "Output", nodes: ["Critical", "High", "Medium", "Low"] }
      ],
      note: "Findings are graded by severity rather than dumped as a flat list, so counsel can triage — which is what cut review from days to under 10 minutes per document."
    }
  },
  {
    title: "VisionGuard — Multimodal AI Fraud Detection",
    icon: "🛡️",
    description: "FinTech fraud-detection system fusing transaction data, document image analysis (ID/cheque verification), and behavioral biometrics into a unified risk score via a multimodal transformer on AWS SageMaker.",
    tech: ["Multimodal AI", "Anomaly Detection", "AWS SageMaker", "Computer Vision", "Behavioral Biometrics"],
    category: "FinTech AI",
    metrics: "10,000+ transactions/min, p99 latency under 80ms",
    github: "https://github.com/faysal-aslam",
    details: [
      "Multimodal transformer fusing transaction, document, and biometric signals",
      "ID and cheque verification via document image analysis",
      "Behavioral biometrics folded into a unified risk score",
      "Deployed on AWS SageMaker auto-scaling endpoints",
      "Handles 10,000+ transactions/min at p99 latency under 80ms"
    ],
    challenges: "Fusing heterogeneous data modalities into a single real-time risk score while meeting strict fraud-prevention SLAs.",
    architecture: "Multimodal transformer on AWS SageMaker with a document CV pipeline, transaction analysis, and behavioral biometrics fusion.",
    architectureFlow: {
      layers: [
        { label: "Signals", nodes: ["Transaction Data", "ID / Cheque Images", "Behavioral Biometrics"] },
        { label: "Encode", nodes: ["Tabular Encoder", "Vision Encoder", "Behavior Encoder"] },
        { label: "Fusion", nodes: ["Multimodal Transformer"] },
        { label: "Serving", nodes: ["AWS SageMaker Auto-Scaling Endpoints"] },
        { label: "Decision", nodes: ["Unified Risk Score"] }
      ],
      note: "Three modalities that are weak alone become strong fused — sustained at 10,000+ transactions per minute with p99 latency under 80ms."
    }
  },
  {
    title: "CareVision — HIPAA-Compliant Healthcare AI",
    icon: "🏥",
    description: "HIPAA-compliant healthcare management platform with PHI encryption, RBAC, and audit logging, plus an AI care-plan generation engine with voice-based data entry and NLP medical entity extraction.",
    tech: ["Healthcare AI", "HIPAA", "Voice AI", "NLP", "PHI Security", "RBAC", "STT/TTS"],
    category: "Healthcare AI",
    metrics: "HIPAA compliant, PHI encrypted at rest and in transit, live at carevisioncms.co.uk",
    github: "https://github.com/faysal-aslam",
    demo: "https://carevisioncms.co.uk",
    details: [
      "PHI encryption at rest and in transit with RBAC and audit logging",
      "AI care-plan generation engine built on LLMs",
      "Voice-based data entry with STT/TTS integration",
      "NLP medical entity extraction from clinical notes and diagnosis codes",
      "Meets US federal healthcare data-privacy requirements"
    ],
    challenges: "Ensuring HIPAA compliance while implementing AI-driven care planning and accurate medical terminology in voice processing.",
    architecture: "HIPAA-compliant platform with a PHI security layer, LLM care-plan engine, voice AI pipeline, and NLP entity extraction.",
    architectureFlow: {
      layers: [
        { label: "Input", nodes: ["Voice Entry (STT)", "Clinical Notes"] },
        { label: "Access", nodes: ["RBAC", "Audit Logging"] },
        { label: "Security", nodes: ["PHI Encryption at Rest", "PHI Encryption in Transit"] },
        { label: "Understanding", nodes: ["NLP Medical Entity Extraction", "Diagnosis Codes"] },
        { label: "Generation", nodes: ["LLM Care-Plan Engine"] },
        { label: "Output", nodes: ["Care Plan", "Spoken Readback (TTS)"] }
      ],
      note: "Every path touching PHI passes access control, encryption, and audit logging — the compliance layer wraps the AI rather than sitting beside it. Meets US federal healthcare data-privacy requirements."
    }
  },
  {
    title: "IntelliFlow — Enterprise Autonomous Workflow System",
    icon: "⚡",
    description: "Enterprise workflow automation platform on n8n integrated with LLM-powered agents (GPT-4, LLaMA) for complex multi-step business process automation without human intervention.",
    tech: ["n8n", "LLM Agents", "GPT-4", "LLaMA", "Workflow Orchestration"],
    category: "AI Automation",
    metrics: "Multi-step autonomous workflows with conditional branching and dynamic task execution",
    github: "https://github.com/faysal-aslam",
    details: [
      "Enterprise-grade n8n platform with LLM-powered agent integration",
      "Modular agent pipelines with decision-making and conditional branching",
      "Dynamic task execution across enterprise systems",
      "Autonomous multi-step business process automation",
      "GPT-4 and LLaMA integration for intelligent workflow decisions"
    ],
    challenges: "Creating flexible automation that handles complex business workflows with reliable LLM-driven decision-making.",
    architecture: "n8n workflow engine with GPT-4/LLaMA agent pipelines, conditional branching, and enterprise system connectors.",
    architectureFlow: {
      layers: [
        { label: "Trigger", nodes: ["Business Event"] },
        { label: "Engine", nodes: ["n8n Workflow Orchestrator"] },
        { label: "Agents", nodes: ["GPT-4 Agent", "LLaMA Agent"] },
        { label: "Control", nodes: ["Decision Node", "Conditional Branching"] },
        { label: "Execute", nodes: ["Dynamic Task Execution"] },
        { label: "Targets", nodes: ["Enterprise Systems"] }
      ],
      note: "Modular agent pipelines mean new processes are composed rather than coded — branching logic decides at runtime which agent handles a step."
    }
  },
  {
    title: "CRM/ERP Data Extraction Agent",
    icon: "💼",
    description: "LangGraph AI agent letting non-technical users query production ERP databases in plain English via a custom Natural Language to SQL tool wired into the agent graph.",
    tech: ["LangGraph", "Natural Language to SQL", "Custom SQL Tool", "ERP Integration"],
    category: "AI Agents",
    metrics: "NL-to-SQL over production ERP databases",
    github: "https://github.com/faysal-aslam",
    details: [
      "LangGraph agent with a custom SQL tool for ERP database queries",
      "Natural language to SQL translation for non-technical users",
      "Query understanding tuned to ERP-specific schemas",
      "Integrated into the agent graph for conversational data access"
    ],
    challenges: "Translating complex natural language business queries into accurate SQL across ERP-specific database schemas.",
    architecture: "LangGraph agent framework with custom NL-to-SQL tools and ERP database connectors.",
    architectureFlow: {
      layers: [
        { label: "User", nodes: ["Plain-English Question"] },
        { label: "Agent", nodes: ["LangGraph Agent Graph"] },
        { label: "Tool", nodes: ["Custom NL-to-SQL Tool"] },
        { label: "Schema", nodes: ["ERP Schema Awareness"] },
        { label: "Data", nodes: ["Production ERP Database"] },
        { label: "Output", nodes: ["Answer + Result Set"] }
      ],
      note: "Schema awareness is the hard part — generic text-to-SQL fails on ERP naming conventions, so the tool is grounded in the actual production schema."
    }
  },
  {
    title: "Employee Counting & Tracking — Live CCTV",
    icon: "👥",
    description: "Real-time computer vision system for live employee counting and tracking from CCTV feeds using YOLOv8 + DeepSORT for persistent identity tracking, with a face-recognition layer for named-presence detection.",
    tech: ["YOLOv8", "DeepSORT", "FastAPI", "RTSP", "Face Recognition"],
    category: "Computer Vision",
    metrics: "Real-time RTSP streaming, persistent identity tracking, multi-camera support",
    github: "https://github.com/faysal-aslam",
    details: [
      "FastAPI backend processing RTSP camera streams in real time",
      "YOLOv8 + DeepSORT for persistent identity tracking across frames",
      "Face-recognition layer for named-presence detection",
      "Multi-camera support with centralized tracking",
      "Handles occlusions and crowded environments"
    ],
    challenges: "Maintaining accurate tracking across multiple camera feeds with occlusions, lighting variations, and crowded environments.",
    architecture: "FastAPI + RTSP pipeline, YOLOv8 detection, DeepSORT tracking, and a face-recognition biometric module.",
    architectureFlow: {
      layers: [
        { label: "Cameras", nodes: ["CCTV RTSP Streams (multi-camera)"] },
        { label: "Ingest", nodes: ["FastAPI Stream Processor"] },
        { label: "Detect", nodes: ["YOLOv8 Person Detection"] },
        { label: "Track", nodes: ["DeepSORT Persistent IDs"] },
        { label: "Identify", nodes: ["Face Recognition Layer"] },
        { label: "Output", nodes: ["Live Count", "Named Presence"] }
      ],
      note: "DeepSORT keeps identities stable across frames so a person walking behind an obstacle is not re-counted — the difference between a counter and a tracker."
    }
  },
  {
    title: "Chex.AI — End-to-End Vehicle Inspection AI",
    icon: "🚗",
    description: "Full-stack AI vehicle-inspection platform with a FastAPI backend, AWS authentication + S3 storage, license-plate extraction, damage detection via fine-tuned YOLOv8, and Pixtral multimodal LLM damage reports.",
    tech: ["YOLOv8", "FastAPI", "AWS", "Amazon S3", "Pixtral LLM", "Object Tracking"],
    category: "Computer Vision + Gen AI",
    metrics: "95% damage detection accuracy, live at chex.ai",
    github: "https://github.com/faysal-aslam",
    demo: "https://chex.ai",
    details: [
      "Full-stack platform with a FastAPI backend and AWS auth + S3 storage",
      "License-plate extraction and vehicle damage detection via fine-tuned YOLOv8",
      "Pixtral multimodal LLM for human-readable damage-assessment reports",
      "Video object-tracking module for live damage detection in streams",
      "95% damage detection accuracy across vehicle types"
    ],
    challenges: "Processing high-resolution vehicle images in real time while maintaining accuracy across lighting conditions and vehicle types.",
    architecture: "FastAPI + AWS backend, YOLOv8 detection pipeline, video tracking, and Pixtral LLM report generation.",
    architectureFlow: {
      layers: [
        { label: "Capture", nodes: ["Vehicle Photos", "Video Stream"] },
        { label: "Backend", nodes: ["FastAPI", "AWS Auth", "Amazon S3"] },
        { label: "Vision", nodes: ["License Plate OCR", "Fine-Tuned YOLOv8 Damage Detection"] },
        { label: "Tracking", nodes: ["Video Object Tracking"] },
        { label: "Reasoning", nodes: ["Pixtral Multimodal LLM"] },
        { label: "Output", nodes: ["Damage Assessment Report"] }
      ],
      note: "Detection finds the damage; the multimodal LLM explains it — turning bounding boxes into a report a non-technical customer can actually read. 95% detection accuracy."
    }
  },
  {
    title: "DeftGPT — Multi-LLM Unified AI Platform",
    icon: "🤖",
    description: "Unified platform integrating 11 LLMs through a single FastAPI backend on AWS, letting users compare, switch, and receive parallel responses from multiple models simultaneously.",
    tech: ["FastAPI", "AWS", "Multi-LLM Orchestration", "GPT-4", "LLaMA"],
    category: "Generative AI",
    metrics: "11 LLMs integrated, live at deftgpt.com",
    github: "https://github.com/faysal-aslam",
    demo: "https://deftgpt.com",
    details: [
      "11 LLM APIs integrated through a single FastAPI backend on AWS",
      "Users compare, switch, and receive parallel multi-model responses",
      "Full LLM API routing, authentication, and session management",
      "Real-time response streaming from multiple models",
      "Advanced multi-model orchestration architecture"
    ],
    challenges: "Managing concurrent API calls to 11 LLM providers while handling rate limits and consistent response formatting.",
    architecture: "FastAPI async backend on AWS with an API gateway for LLM routing and real-time response aggregation.",
    architectureFlow: {
      layers: [
        { label: "User", nodes: ["Prompt + Model Selection"] },
        { label: "Backend", nodes: ["FastAPI Async Backend (AWS)"] },
        { label: "Session", nodes: ["Authentication", "Session Management"] },
        { label: "Routing", nodes: ["LLM API Router"] },
        { label: "Providers", nodes: ["11 LLM APIs (GPT-4, LLaMA, +9)"] },
        { label: "Output", nodes: ["Parallel Streamed Responses"] }
      ],
      note: "Fanning one prompt out to many providers concurrently means the slowest model sets the wait — async routing and per-provider rate-limit handling are what keep it usable."
    }
  }
];

export const skills = [
  {
    category: "Generative AI & LLMs",
    icon: <Brain className="text-indigo-400" />,
    items: [
      "Anthropic Claude API, OpenAI API, Google Gemini API",
      "Azure OpenAI, AWS Bedrock, GPT-4o, LLaMA 3.2, Qwen, GLM, Pixtral",
      "Prompt Engineering, System Prompt Design, Prompt Caching",
      "Context Engineering, Multimodal AI, Multi-LLM Orchestration",
      "Model Routing & Fallback, Structured Outputs, Streaming Responses"
    ]
  },
  {
    category: "Agentic AI & Orchestration",
    icon: <Network className="text-indigo-400" />,
    items: [
      "Multi-Agent Systems, Supervisor Graphs, Sub-Agent Decomposition",
      "State Management, Checkpointing, ReAct, Planning Loops",
      "Tool Calling, Function Calling, Tool Schema Design",
      "Model Context Protocol (MCP), Browser & Computer-Use Agents",
      "Agent Memory, Self-Correcting Agents, Human-in-the-Loop, AgentOps"
    ]
  },
  {
    category: "RAG & Retrieval",
    icon: <Search className="text-indigo-400" />,
    items: [
      "RAG, Agentic RAG, Hybrid RAG, Hybrid Retrieval",
      "GraphRAG, LightRAG, Embedding Models, Semantic Search",
      "Chunking Strategies, Document AI, Table Extraction (Docling)",
      "Azure AI Document Intelligence",
      "Natural Language to SQL (NL-to-SQL)"
    ]
  },
  {
    category: "Databases & Vector Stores",
    icon: <Database className="text-indigo-400" />,
    items: [
      "PostgreSQL, MongoDB, Redis, Neo4j (Graph Database)",
      "pgvector, FAISS, Qdrant, Pinecone",
      "Amazon RDS, Amazon ElastiCache, Amazon S3",
      "Database Design, Data Pipelines"
    ]
  },
  {
    category: "Evaluation, Observability & LLMOps",
    icon: <Gauge className="text-indigo-400" />,
    items: [
      "LangSmith, LLM Evaluation, Evaluation Frameworks (Evals)",
      "AI Observability, Structured Logging, Tracing, Benchmarking",
      "Token Economics, Latency & Cost Monitoring",
      "Prompt Regression Testing, LLMOps, RAGOps, GenAIOps"
    ]
  },
  {
    category: "Model Serving, Inference & Tuning",
    icon: <Server className="text-indigo-400" />,
    items: [
      "Self-Hosted LLM Serving, vLLM, OpenAI-Compatible Endpoints",
      "FP8 Quantization, Mixture-of-Experts (MoE), GPU VRAM Sizing",
      "Fine-Tuning (LoRA, QLoRA, PEFT)",
      "Model Benchmarking"
    ]
  },
  {
    category: "Cloud, DevOps & MLOps",
    icon: <Cloud className="text-indigo-400" />,
    items: [
      "AWS (SageMaker, Bedrock, Lambda, EC2, ECS/Fargate, S3, IAM, VPC, API Gateway)",
      "GCP (Vertex AI, Cloud Run, Pub/Sub)",
      "Azure (Azure OpenAI, Azure AI Foundry)",
      "Docker, Terraform (IaC), MLflow, CI/CD, Git & GitHub",
      "Linux, nginx, systemd, Serverless Deployment"
    ]
  },
  {
    category: "Backend, APIs & Full-Stack",
    icon: <Code className="text-indigo-400" />,
    items: [
      "FastAPI, Flask, Django, REST APIs",
      "WebSockets, Server-Sent Events (SSE), Pydantic",
      "Salesforce API, Google Maps API, Playwright",
      "Backend & Frontend Development, Full-Stack Delivery",
      "API & Database Design, End-to-End Product Ownership"
    ]
  },
  {
    category: "Computer Vision, Voice & Speech AI",
    icon: <Eye className="text-indigo-400" />,
    items: [
      "YOLOv8, DeepSORT, OpenCV, Object Detection & Tracking",
      "Face Recognition, Image Segmentation, License Plate OCR",
      "RTSP Video Streams",
      "OpenAI Whisper (ASR), Speaker Diarization, Google STT/TTS",
      "Real-Time Transcription, SIP & VoIP Integration"
    ]
  },
  {
    category: "Web3 & Blockchain",
    icon: <Link2 className="text-indigo-400" />,
    items: [
      "Conversational Trading Agents",
      "Solana, Base, World Chain, Sui, DeFi",
      "Non-Custodial Wallet Integration, Client-Side Transaction Signing",
      "On-Chain Tool Execution, DexScreener & Hyperliquid APIs"
    ]
  },
  {
    category: "Responsible AI & Compliance",
    icon: <ShieldCheck className="text-indigo-400" />,
    items: [
      "Guardrails, Deterministic Safety Checks, Human Oversight",
      "Fallback Behavior, Graceful Degradation, Audit Trails",
      "Data Residency, PII & PHI Handling",
      "HIPAA, UK GDPR (Data Minimization, Consent, Right-to-Erasure)",
      "Role-Based Access Control (RBAC)"
    ]
  },
  {
    category: "Languages & ML Frameworks",
    icon: <Terminal className="text-indigo-400" />,
    items: [
      "Python (async/asyncio), SQL, JavaScript, Rust (integration), Bash",
      "PyTorch, Hugging Face Transformers, PEFT",
      "LangGraph, LangChain, CrewAI, LlamaIndex, n8n",
      "Machine Learning, Deep Learning, Neural Networks",
      "Model Training & Evaluation"
    ]
  }
];

export const experience = [
  {
    role: "Senior AI Engineer (Lead)",
    company: "Tekhqs",
    period: "May 2026 – Present",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description: "Own end-to-end AI orchestration architecture for client-facing Generative AI platforms — multi-agent graph design, RAG pipelines, prompt and model optimization, deployment, and observability.",
    achievements: [
      "Own multi-agent graph design, RAG pipelines, prompt/model optimization, deployment, and observability",
      "Author CTO-level technical proposals (self-hosted LLM migration, cost and latency benchmarking, feature roadmaps) driving architecture and vendor decisions",
      "Supervise 3 junior engineers across concurrent AI workstreams, running code review, technical direction, and delivery oversight",
      "Kresus — Web3 conversational trading agent across Solana, Base, World Chain, and Sui (live: kresus.com)",
      "Vyera AI — competitive intelligence multi-agent platform for the UK market (live: vyera.ai)"
    ]
  },
  {
    role: "Senior AI Engineer, Team Lead",
    company: "Linvex Solutions",
    period: "Mar 2025 – May 2026",
    location: "Lahore, Pakistan",
    type: "Full-time · On-site",
    description: "Led a cross-functional team of 5 engineers, owning solution architecture, code review, AWS infrastructure, and delivery across enterprise Generative AI projects.",
    achievements: [
      "Led a cross-functional team of 5 engineers across enterprise Generative AI delivery",
      "Advanced Hybrid RAG — LightRAG + Neo4j + Azure AI, deployed at Saudi Aramco (live: auxee.com)",
      "NeuroSync — real-time meeting intelligence with autonomous Salesforce CRM sync",
      "SynthAgent — self-correcting ReAct research agent (8hr → under 25min cycles)"
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
      "Real-Time Live-Call Conversational AI Chatbot with RAG, LLaMA 3.2, FAISS, and Elastix SIP",
      "HighTribe — multi-agent travel assistant live on web, Google Play, and the App Store",
      "DocuMind — autonomous legal document review agent with Azure OpenAI GPT-4o",
      "VisionGuard — multimodal fraud detection on AWS SageMaker (10K+ txns/min, p99 <80ms)",
      "CareVision — HIPAA-compliant healthcare AI platform (live: carevisioncms.co.uk)",
      "IntelliFlow, CRM/ERP NL-to-SQL agent, and real-time CCTV employee tracking (YOLOv8 + DeepSORT)"
    ]
  },
  {
    role: "AI Engineer",
    company: "Techling (Private) Limited",
    period: "Dec 2020 – Apr 2023",
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
    period: "Aug 2020 – Nov 2020",
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

export const research = [
  {
    title: "Multi-Mode AI SaaS Workspace",
    subtitle: "MVP Architecture",
    icon: "🧩",
    description: "Designed a FastAPI + LangGraph workspace with four specialized assistant modes and PostgreSQL-backed conversation checkpointing, covering the data model, streaming API surface, and phased delivery plan.",
    tags: ["FastAPI", "LangGraph", "PostgreSQL", "Checkpointing", "Streaming API"]
  },
  {
    title: "Multi-Tenant WhatsApp Business Cloud API Chatbot",
    subtitle: "Platform Architecture",
    icon: "💬",
    description: "Architected a multi-tenant messaging platform including template-message pricing models, Tech Provider onboarding, and per-tenant session routing.",
    tags: ["Multi-Tenant", "WhatsApp Cloud API", "Session Routing", "Pricing Models"]
  },
  {
    title: "Self-Hosted Open-Weight LLM Feasibility Study",
    subtitle: "Benchmarking & Sizing",
    icon: "🖥️",
    description: "Benchmarked open-weight candidates (Qwen3, GLM-4.5-Air, gpt-oss-120b) against a production agent workload, sizing GPU VRAM for FP8 and Mixture-of-Experts variants, comparing vLLM serving behind an OpenAI-compatible endpoint, and assessing data residency.",
    tags: ["vLLM", "FP8", "Mixture-of-Experts", "GPU VRAM Sizing", "Data Residency"]
  },
  {
    title: "LLM Cost & Token Economics Benchmarking",
    subtitle: "Production Agent Profiling",
    icon: "📉",
    description: "Profiled a 37-tool agentic ReAct loop and established it as 99.7% input-bound, with the tool schema (~38K tokens) as the dominant cost driver, then quantified savings from prompt caching and tool-schema pruning across competing model families.",
    tags: ["Token Economics", "Prompt Caching", "Tool Schema Pruning", "ReAct"]
  },
  {
    title: "Document AI & RAG Ingestion Strategy",
    subtitle: "Parsing Stack Evaluation",
    icon: "📄",
    description: "Evaluated PDF parsing stacks including Docling for table-heavy technical documents, comparing layout fidelity, chunking behavior, and retrieval accuracy.",
    tags: ["Docling", "Document AI", "Chunking", "Retrieval Accuracy"]
  }
];

export const education = [
  {
    degree: "MS Data Science (AI/ML)",
    institution: "AUIC Islamabad, Pakistan",
    period: "Feb 2020 – Jan 2023",
    details: "CGPA 3.12 / 4.0",
    icon: "🎓"
  },
  {
    degree: "BS Computer Science",
    institution: "GC University Faisalabad, Pakistan",
    period: "Sep 2015 – Aug 2019",
    details: "CGPA 3.42 / 4.0",
    icon: "🎓"
  }
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University and DeepLearning.AI (Coursera) — Andrew Ng",
    icon: "🏆"
  }
];

export const caseStudies = [
  {
    title: "Kresus — Web3 Conversational Trading Agent",
    client: "Tekhqs",
    category: "Agentic AI + Web3",
    icon: "⛓️",
    duration: "8 months",
    problem: {
      title: "The Challenge",
      description: "Crypto users needed a natural-language interface to research, analyze, and execute on-chain trades across multiple chains without compromising the non-custodial security model.",
      points: [
        "Complex multi-chain DeFi operations required technical expertise",
        "A previous in-process Rust agent lacked flexibility for rapid tool expansion",
        "The non-custodial signing model had to be preserved",
        "Real-time streaming responses were needed for mobile UX",
        "Per-conversation LLM spend and time-to-first-token were too high",
        "Safety guardrails required for unsupported chains and cross-chain swaps"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Architected FastAPI + LangGraph + Claude orchestration with 30+ trading tools, SSE streaming to mobile, and non-custodial transaction preparation for client-side wallet signing.",
      points: [
        "Replaced the in-process Rust agent with a flexible LangGraph service",
        "30+ tools: token discovery, DexScreener and Hyperliquid market data, technical analysis, swaps, transfers, portfolio balances, token deployment",
        "SSE streaming for real-time mobile app responses",
        "Non-custodial model — unsigned transactions returned for wallet signing",
        "Prompt caching and system-prompt restructuring to cut spend and time-to-first-token",
        "Deterministic safety guardrails enforced in code with structured observability"
      ],
      technologies: ["LangGraph", "Claude", "FastAPI", "SSE", "Solana", "Base", "World Chain", "Sui", "DeFi"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Trading Tools", value: "30+", description: "Integrated on-chain operations" },
        { label: "Chains Supported", value: "4", description: "Solana, Base, World Chain, Sui" },
        { label: "Custody Model", value: "100%", description: "Non-custodial preserved" },
        { label: "Platform", value: "Live", description: "Production at kresus.com" }
      ],
      outcomes: [
        "Production Web3 trading copilot live at kresus.com",
        "Natural language on-chain trade execution across 4 chains",
        "Non-custodial security model fully preserved",
        "Reduced per-conversation LLM spend and time-to-first-token",
        "Structured logging of input, intent, and tool-call signals for request-level observability",
        "Self-hosted open-weight LLM migration path (Qwen-class FP8) specified for the CTO"
      ]
    }
  },
  {
    title: "Vyera AI — Competitive Intelligence Platform",
    client: "Tekhqs",
    category: "Multi-Agent AI + GDPR",
    icon: "🎯",
    duration: "6 months",
    problem: {
      title: "The Challenge",
      description: "UK businesses needed automated competitive intelligence, but manual research was slow, incomplete, and couldn't scale across multiple data sources while meeting UK GDPR requirements.",
      points: [
        "Manual competitor research consumed roughly 8 analyst hours per report",
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
        "Full UK GDPR compliance (minimization, consent, lawful-basis documentation, right-to-erasure)",
        "End-to-end AWS infrastructure with IAM, VPC, and security-group hardening"
      ],
      technologies: ["LangGraph", "Firecrawl", "FastAPI", "AWS", "UK GDPR", "Multi-Agent"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Analyst Hours Saved", value: "~8h", description: "Per competitor report" },
        { label: "Competitor Coverage", value: "360°", description: "Automated multi-source profiles" },
        { label: "GDPR Compliance", value: "100%", description: "Full UK regulatory compliance" },
        { label: "Platform", value: "Live", description: "Production at vyera.ai" }
      ],
      outcomes: [
        "Live platform at vyera.ai serving UK market intelligence",
        "Automated competitor discovery and 360° profile generation",
        "Roughly 8 analyst hours of manual research replaced per report",
        "Full UK GDPR governance built into the architecture",
        "Hardened AWS infrastructure (IAM, VPC, security groups) for growing data volumes"
      ]
    }
  },
  {
    title: "Advanced Hybrid RAG — Saudi Aramco Knowledge Assistant",
    client: "Linvex Solutions",
    category: "Advanced RAG + Knowledge Graphs",
    icon: "🔗",
    duration: "7 months",
    problem: {
      title: "The Challenge",
      description: "Petroleum-management teams at Saudi Aramco needed natural-language access to large volumes of technical and operational documents, but vector-only search couldn't handle multi-hop questions or heterogeneous file formats.",
      points: [
        "Technical documents spread across PDF, DOCX, TXT, Excel, and CSV",
        "Vector-only retrieval failed on multi-hop reasoning questions",
        "Tables and structured data lost fidelity during parsing",
        "No unified routing across document types",
        "Staff had no natural-language entry point into the knowledge base"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Built a hybrid multi-agent RAG system pairing LightRAG over a Neo4j knowledge graph with Azure AI Document Intelligence, behind smart retrieval routing per document type.",
      points: [
        "LightRAG over a Neo4j knowledge graph for entity and relationship extraction",
        "Azure AI Document Intelligence for structured parsing across all formats",
        "Smart routing: LightRAG + SQL for Excel/CSV; Azure DI + GraphRAG for PDF/DOCX/TXT",
        "Multi-hop reasoning beyond vector-only search",
        "LangGraph multi-agent orchestration across the retrieval paths"
      ],
      technologies: ["LightRAG", "Neo4j", "Azure AI Document Intelligence", "LangGraph", "GraphRAG", "SQL"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Deployment", value: "Aramco", description: "Live internally at Saudi Aramco" },
        { label: "Reasoning", value: "Multi-hop", description: "Beyond vector-only search" },
        { label: "Formats", value: "All", description: "PDF, DOCX, TXT, Excel, CSV" },
        { label: "Access", value: "NL", description: "Plain-English document queries" }
      ],
      outcomes: [
        "Deployed internally at Saudi Aramco for petroleum-management teams",
        "Staff query large technical and operational document sets in natural language",
        "Multi-hop reasoning enabled through the Neo4j knowledge graph",
        "Unified retrieval routing across structured and unstructured formats",
        "Table and layout fidelity preserved via Azure AI Document Intelligence"
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
      description: "Delivered Chex.AI — a full-stack platform with YOLOv8 detection, video tracking, and the Pixtral multimodal LLM for intelligent damage reports, deployed on AWS.",
      points: [
        "FastAPI backend with AWS authentication and S3 storage",
        "License plate extraction using fine-tuned YOLOv8",
        "Custom YOLOv8 for vehicle damage detection",
        "Video object tracking for live damage assessment",
        "Pixtral multimodal LLM for human-readable inspection reports"
      ],
      technologies: ["YOLOv8", "FastAPI", "AWS", "Amazon S3", "Pixtral LLM", "Object Tracking"]
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
        "Automated AI-powered report generation with the Pixtral LLM",
        "Live production platform at chex.ai on AWS",
        "Video tracking module for live stream damage detection"
      ]
    }
  }
];
