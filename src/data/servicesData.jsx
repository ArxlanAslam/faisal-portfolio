import { Brain, Zap, Target, TrendingUp, Gauge, Server } from 'lucide-react';

export const services = [
  {
    icon: <Brain size={32} />,
    title: "Agentic AI & LLM Integration",
    description: "Multi-agent systems, supervisor graphs, and tool-calling agents built with LangGraph, CrewAI, and MCP over Claude, GPT, and Gemini."
  },
  {
    icon: <Target size={32} />,
    title: "RAG & Knowledge Systems",
    description: "Agentic, hybrid, and GraphRAG pipelines over Neo4j, pgvector, and Qdrant — plus document AI, NL-to-SQL, and enterprise knowledge assistants."
  },
  {
    icon: <Zap size={32} />,
    title: "AI Automation & Workflows",
    description: "Enterprise workflow automation with n8n, self-correcting agents, and autonomous business process orchestration."
  },
  {
    icon: <Gauge size={32} />,
    title: "Evaluation, Observability & Cost",
    description: "LangSmith evals, prompt regression testing, tracing, and token-economics benchmarking to cut latency and per-conversation LLM spend."
  },
  {
    icon: <Server size={32} />,
    title: "Self-Hosted LLM Serving & MLOps",
    description: "vLLM behind OpenAI-compatible endpoints, FP8 and MoE sizing, LoRA/QLoRA fine-tuning, and deployment on AWS, GCP, and Azure."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Computer Vision, Speech & Web3",
    description: "YOLOv8 and DeepSORT detection and tracking, Whisper ASR with diarization, SIP/VoIP integration, and non-custodial Web3 trading agents."
  }
];
