import { Brain, Code, Database } from 'lucide-react';

export const projects = [
  {
    title: "Real-Time Live Call Conversational Chatbot",
    icon: "📞",
    description: "Generative AI product featuring real-time live call conversational capabilities. Built with RAG system using Llama3.2 LLM and FAISS embeddings, integrated with Elastix Phone Calls Server for handling live voice calls.",
    tech: ["Llama3.2", "RAG", "FAISS", "Google STT/TTS", "Python SIP Client", "Elastix Server"],
    category: "Conversational AI",
    metrics: "Real-time voice conversations, RAG-powered responses, live call integration",
    github: "https://github.com/faysal-aslam",
    details: [
      "Created RAG System with Llama3.2 LLM using FAISS embeddings for intelligent responses",
      "Integrated Google Speech-to-Text and Text-to-Speech modules for voice processing",
      "Developed Python SIP client for handling live calls with Elastix Phone Server",
      "Real-time conversational capabilities during phone calls",
      "Context-aware responses using RAG architecture"
    ],
    challenges: "Integrating real-time voice processing with LLM responses while maintaining low latency during live phone calls and ensuring accurate speech-to-text conversion.",
    architecture: "RAG system with Llama3.2 and FAISS embeddings, Google STT/TTS pipeline, Python SIP client for Elastix integration, and real-time response generation."
  },
  {
    title: "HighTribe — Multi-Agents Travel Assistant",
    icon: "✈️",
    description: "Multi-agent AI product for travel assistance and trip planning integrated with Google Maps. Features different LangGraph agents for internal database queries, Google Maps integration, and external web search. Live on web and mobile app stores.",
    tech: ["LangGraph", "Multi-Agents", "Gemini", "ChatGPT", "Google Maps API", "Mobile Apps"],
    category: "AI Multi-Agent System",
    metrics: "Live on Web, Google Play Store and iOS App Store",
    github: "https://github.com/faysal-aslam",
    demo: "https://hightribe.com",
    details: [
      "Implemented different LangGraph Agents for Internal Database management",
      "Google Maps integration for location-based recommendations and navigation",
      "External Web Search agent for real-time travel information",
      "Used Gemini and ChatGPT for intelligent travel planning",
      "Successfully deployed on web and mobile platforms (Google/iOS App Store)"
    ],
    challenges: "Coordinating multiple AI agents to work together seamlessly while managing different data sources and ensuring real-time responses for travel queries.",
    architecture: "LangGraph multi-agent system with specialized agents for database, maps, and web search. Gemini and ChatGPT integration, cross-platform deployment (Web/iOS/Android)."
  },
  {
    title: "IntelliFlow — Enterprise Workflow Automation",
    icon: "⚡",
    description: "Enterprise-grade autonomous workflow automation system combining n8n with LLM-powered agents. Designed for intelligent workflow orchestration and business process automation using GPT, Llama, and other LLMs.",
    tech: ["n8n", "LLM Agents", "GPT", "Llama", "Workflow Automation", "Enterprise AI"],
    category: "AI Automation",
    metrics: "Enterprise-grade automation, multi-LLM integration, workflow orchestration",
    github: "https://github.com/faysal-aslam",
    details: [
      "Designed and deployed enterprise-grade AI automation platform",
      "Integrated n8n with LLM-powered agents (GPT, Llama, etc.)",
      "Autonomous workflow system for business process automation",
      "Intelligent decision-making in workflow orchestration",
      "Enterprise-level scalability and reliability"
    ],
    challenges: "Creating a flexible automation system that can handle complex business workflows while leveraging multiple LLMs for intelligent decision-making.",
    architecture: "n8n workflow engine integrated with multiple LLM agents (GPT, Llama), autonomous decision system, and enterprise-grade deployment infrastructure."
  },
  {
    title: "CareVision — Digital Healthcare Management",
    icon: "🏥",
    description: "Healthcare AI product featuring AI-based care plan generation and voice-based data entry/extraction. Streamlines healthcare management with intelligent automation for patient care planning and documentation.",
    tech: ["Healthcare AI", "Care Plan Generation", "Voice Recognition", "STT/TTS", "Data Extraction"],
    category: "Healthcare AI",
    metrics: "AI care plan generation, voice-based data entry, healthcare automation",
    github: "https://github.com/faysal-aslam",
    details: [
      "Implemented AI-based Care Plan Generation for patient management",
      "Voice-Based Data Entry system for hands-free documentation",
      "Intelligent Data Extraction from healthcare records",
      "Streamlined healthcare workflow automation",
      "Speech-to-text and text-to-speech integration"
    ],
    challenges: "Ensuring HIPAA compliance while implementing AI-driven care planning and handling medical terminology accurately in voice processing.",
    architecture: "AI care plan generation engine, voice recognition system (STT/TTS), data extraction pipeline, and secure healthcare data management."
  },
  {
    title: "Advance Hybrid RAG System",
    icon: "🔗",
    description: "Advanced Multi-Agent RAG system combining LightRAG with Neo4j GraphDB and Azure Documents Intelligence. Hybrid approach handling all document types with specialized processing for Excel/CSV (LightRAG + SQL) and documents (Azure AI + LightRAG).",
    tech: ["LangGraph", "LightRAG", "Neo4j GraphDB", "Azure AI", "Multi-Agents", "Hybrid RAG"],
    category: "Advanced RAG",
    metrics: "Multi-agent RAG, Graph database, handles all document types",
    github: "https://github.com/faysal-aslam",
    details: [
      "Created MultiAgent System using LangGraph for orchestration",
      "Used Hybrid techniques for processing all types of documents",
      "Excel and CSVs: LightRAG + SQL for structured data extraction",
      "PDFs/Docs/Text: Azure Document Intelligence + LightRAG for entities and relationships",
      "Neo4j GraphDB for knowledge graph storage and retrieval"
    ],
    challenges: "Building a unified system that intelligently processes different document types while extracting entities, relationships, and maintaining context across diverse data sources.",
    architecture: "LangGraph multi-agent system, LightRAG for graph-based retrieval, Neo4j GraphDB for storage, Azure Document Intelligence for document parsing, SQL for structured data."
  },
  {
    title: "Employee Counting & Tracking System",
    icon: "👥",
    description: "Computer vision product for live employee counting and tracking from CCTV camera feeds. Built with FastAPI and YOLOv8, featuring DeepSORT tracking algorithm with face recognition from RTSP camera streams.",
    tech: ["FastAPI", "YOLOv8", "DeepSORT", "RTSP", "Face Recognition", "Live Tracking"],
    category: "Computer Vision",
    metrics: "Real-time tracking, RTSP streaming, face recognition integration",
    github: "https://github.com/faysal-aslam",
    details: [
      "Completed production-ready product in FastAPI Framework with YOLOv8",
      "Live Employee Counting and Tracking using DeepSORT Algorithm",
      "RTSP Camera Stream processing for real-time monitoring",
      "Face Recognition integration for identity verification",
      "Multi-camera support with centralized tracking"
    ],
    challenges: "Maintaining accurate tracking across multiple camera feeds while handling occlusions, lighting variations, and ensuring real-time performance.",
    architecture: "FastAPI backend, YOLOv8 for detection, DeepSORT for tracking, RTSP stream processing, face recognition module, and monitoring dashboard."
  },
  {
    title: "CRM/ERP Data Extraction Agent",
    icon: "💼",
    description: "AI agent product for CRM/ERP data extraction using natural language queries. Built with LangGraph and custom SQL tools to fetch data from ERP databases with humanized queries. Currently under active development.",
    tech: ["LangGraph", "AI Agents", "SQL", "ERP Integration", "NLP"],
    category: "AI Agents",
    metrics: "Under development - Natural language to SQL, ERP database integration",
    github: "https://github.com/faysal-aslam",
    details: [
      "LangGraph Agent created with Custom SQL Tool",
      "Fetches data from ERP Database with humanized natural language queries",
      "Intelligent query understanding and SQL generation",
      "ERP system integration for business data access",
      "Currently under active development"
    ],
    challenges: "Translating complex natural language business queries into accurate SQL while understanding ERP-specific database schemas and relationships.",
    architecture: "LangGraph agent framework with custom SQL tools, ERP database connectors, NLP query parser, and SQL generation engine."
  },
  {
    title: "Chex.AI — Vehicle Inspection through AI",
    icon: "🚗",
    description: "End-to-end AI product for automated vehicle inspection combining computer vision and LLMs. Complete FastAPI framework with AWS integration, featuring license plate extraction, damage detection, video tracking, and Pixtral LLM reports.",
    tech: ["YOLOv8", "FastAPI", "AWS", "Pixtral LLM", "Object Tracking"],
    category: "Computer Vision + Gen AI",
    metrics: "Complete vehicle inspection, 95% damage detection accuracy",
    github: "https://github.com/faysal-aslam",
    details: [
      "Developed Complete FastAPI Framework including AWS Authentication Modules",
      "Data fetching and uploading after preprocessing from AI Model",
      "License Plate Number Extraction through YOLOv8 Model",
      "Vehicle Damage Detection Using Fine-Tuned YOLOv8",
      "Video Object Tracking for damage detection in live video",
      "Integrated Pixtral LLM with Damage Detection for intelligent reports"
    ],
    challenges: "Processing high-resolution vehicle images in real-time while maintaining accuracy across various lighting conditions and vehicle types.",
    architecture: "FastAPI backend with AWS integration, YOLOv8 detection pipeline, video object tracking, and Pixtral LLM for damage assessment reports."
  },
  {
    title: "DeftGPT — Multi-LLM Platform",
    icon: "🤖",
    description: "Complete Generative AI product integrating 11 different LLMs in one platform. Users can choose their preferred LLM or get multiple model responses simultaneously for comparative analysis on the same question.",
    tech: ["11 LLM APIs", "FastAPI", "AWS", "Multi-Model Integration"],
    category: "Generative AI",
    metrics: "11 LLMs integrated, deployed on AWS, multi-response comparison",
    github: "https://github.com/faysal-aslam",
    details: [
      "Developed Complete FastAPI for this Generative AI Product",
      "Successfully deployed on AWS cloud infrastructure",
      "Setup 11 different LLMs (APIs) in one platform 'DeftGPT'",
      "Users can choose their own LLM of choice on same platform",
      "Get multiple Models Response on same Question for comparison",
      "Real-time response streaming from multiple models"
    ],
    challenges: "Managing concurrent API calls to multiple LLM providers while handling rate limits and ensuring consistent response formatting.",
    architecture: "FastAPI backend with async processing, AWS deployment, API gateway for LLM routing, and real-time response aggregation system."
  },
  {
    title: "RAG System for School Exams Management",
    icon: "📚",
    description: "End-to-end Generative AI RAG system for automated MCQ generation from PDF books. Integrated with Llama 3.1 for human-like conversational responses and topic-based question generation.",
    tech: ["RAG", "Llama 3.1", "PDF Processing", "NLP", "FastAPI"],
    category: "Generative AI",
    metrics: "Auto-generates MCQs from any PDF, topic-based question generation",
    github: "https://github.com/faysal-aslam",
    details: [
      "Implemented MCQs Generation system from given PDF Book",
      "Integrated Llama 3.1 for human-like conversational response",
      "User just writes topic name and gets MCQs related to that topic",
      "Provides correct answers with generated questions",
      "PDF parsing and intelligent content extraction pipeline"
    ],
    challenges: "Extracting meaningful context from educational PDFs and generating relevant, curriculum-aligned questions with accurate answers.",
    architecture: "RAG pipeline with PDF processing, vector database for content storage, Llama 3.1 for generation, and FastAPI backend."
  },
  {
    title: "Conversational Chatbot for Ticket Management",
    icon: "🎫",
    description: "End-to-end conversational chatbot for online ticket booking system. Llama 3.1 integrated with PostgreSQL database for tickets and buses information, supporting both voice and typing interactions with automatic database updates.",
    tech: ["Llama 3.1", "PostgreSQL", "Voice AI", "STT/TTS", "FastAPI"],
    category: "Conversational AI",
    metrics: "Voice and text booking, auto-database updates, natural conversations",
    github: "https://github.com/faysal-aslam",
    details: [
      "Attached Llama 3.1 with Tickets and Buses Information Database (PostgreSQL)",
      "Chatbot loads database itself and conversates with user",
      "Supports both Voice and Typing for ticket booking",
      "Natural language conversation for booking process",
      "Automatically updates the dataset in Database after booking"
    ],
    challenges: "Managing conversational state across booking steps while ensuring accurate database transactions and handling voice input variations.",
    architecture: "Llama 3.1 with PostgreSQL integration, speech-to-text/text-to-speech pipeline, conversation state management, and FastAPI backend."
  }
];

export const skills = [
  { 
    category: "AI & Machine Learning", 
    icon: <Brain className="text-indigo-400" />,
    items: ["RAG Systems (LightRAG, GraphRAG)", "Large Language Models (LLMs)", "Custom Fine-Tuning & LORA", "AI Agents & Multi-Agent Systems", "Object Detection (YOLO)", "Object Tracking (DeepSORT)", "Face Recognition", "n8n", "Zapier"] 
  },
  { 
    category: "Frameworks & Tools", 
    icon: <Code className="text-indigo-400" />,
    items: ["FastAPI", "LangGraph", "Flask", "Django", "LangChain", "CrewAI", "Vertex AI", "GCP", "Azure AI Foundry", "MCP (Model Context Protocol)"] 
  },
  { 
    category: "Technologies & Databases", 
    icon: <Database className="text-indigo-400" />,
    items: ["Neo4j GraphDB", "PostgreSQL", "Vector Databases", "AWS Cloud Services", "RTSP Streaming", "STT/TTS Systems", "YOLOv8", "Pixtral LLM", "Llama 3.1", "Chatbots"] 
  }
];

export const experience = [
  {
    role: "Senior AI Engineer (Computer Vision + Generative AI)",
    company: "Gicoh",
    period: "July 2024 - Present (1.9 Years+)",
    description: "Leading AI development initiatives focusing on advanced generative AI, multi-agent systems, computer vision, and enterprise-grade AI automation solutions. Building production-ready AI products across healthcare, travel, automation, and enterprise domains.",
    achievements: [
      "Created Real-Time Live Call Conversational Chatbot with RAG, Llama3.2, and Elastix phone integration",
      "Developed HighTribe Multi-Agents Travel Assistant (live on web and app stores)",
      "Built IntelliFlow - Enterprise Workflow Automation with n8n and LLM agents",
      "Implemented CareVision Healthcare AI with care plan generation and voice data entry",
      "Developed Advanced Hybrid RAG with LightRAG, Neo4j GraphDB, and Azure AI",
      "Built Employee Counting & Tracking System with YOLOv8, DeepSORT, and face recognition",
      "Created CRM/ERP Data Extraction Agent using LangGraph and SQL tools"
    ]
  },
  {
    role: "AI Engineer (Computer Vision + Generative AI)",
    company: "Techling",
    period: "December 2021 - July 2024 (2.8 Years)",
    description: "Developed end-to-end AI products combining computer vision and generative AI. Focused on vehicle inspection, multi-LLM integration, RAG systems, and conversational AI chatbots for enterprise clients.",
    achievements: [
      "Built Chex.AI - Complete vehicle inspection system with YOLOv8, AWS, and Pixtral LLM",
      "Developed DeftGPT - 11 LLM integration platform deployed on AWS",
      "Created RAG system for school exam management with automated MCQ generation",
      "Built conversational chatbot with voice/text for ticket management system"
    ]
  },
  {
    role: "Internship in Data Science",
    company: "Programmer Force, Lahore",
    period: "September 2021 - December 2021 (3 Months)",
    description: "Engaged in hands-on AI technology exploration and experimentation. Contributed to machine learning model development under experienced mentors, working with cross-functional teams on real-world AI solutions.",
    achievements: [
      "Hands-on exploration and experimentation with AI technologies",
      "Contributed to development of machine learning models and algorithms",
      "Collaborated with cross-functional teams to gather and analyze data",
      "Conducted experiments to support implementation of AI solutions"
    ]
  }
];

export const certifications = [
  { name: "Machine Learning Specialization", issuer: "Coursera (Stanford University & DeepLearning.AI)", icon: "🎓" },
  { name: "Trainee Data Science Program", issuer: "Programmers Force, Lahore", icon: "🎓" },
  { name: "AI & Machine Learning", issuer: "Professional Development", icon: "🎓" }
];

export const caseStudies = [
  {
    title: "Chex.AI - AI-Powered Vehicle Inspection System",
    client: "Techling",
    category: "Computer Vision + Generative AI",
    icon: "🚗",
    duration: "6 months",
    problem: {
      title: "The Challenge",
      description: "Vehicle inspection was a manual, time-consuming process requiring expert assessors. Traditional methods took 30-45 minutes per vehicle with inconsistent quality assessments and high labor costs.",
      points: [
        "Manual inspection took 30-45 minutes per vehicle",
        "Inconsistent damage assessment across inspectors",
        "High operational costs with human assessors",
        "No automated report generation",
        "Difficulty scaling inspection operations"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Developed Chex.AI, a comprehensive AI system combining YOLOv8 for detection, video tracking, and Pixtral LLM for intelligent reporting. Complete FastAPI framework with AWS integration.",
      points: [
        "FastAPI framework with AWS authentication and data management",
        "License plate extraction using fine-tuned YOLOv8 model",
        "Custom YOLOv8 for vehicle damage detection",
        "Real-time video object tracking for live damage assessment",
        "Pixtral LLM integration for intelligent inspection reports"
      ],
      technologies: ["YOLOv8", "FastAPI", "AWS", "Pixtral LLM", "Object Tracking", "Computer Vision"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Time Saved", value: "85%", description: "Inspection time reduced to <5 minutes" },
        { label: "Accuracy", value: "95%", description: "Damage detection accuracy" },
        { label: "Cost Reduction", value: "70%", description: "Operational cost savings" },
        { label: "Scalability", value: "10x", description: "Increased inspection capacity" }
      ],
      outcomes: [
        "Vehicle inspection reduced from 30-45 minutes to under 5 minutes",
        "95% accuracy in damage detection across various vehicle types",
        "Automated report generation with AI-powered insights",
        "Successfully deployed on AWS cloud infrastructure",
        "Processing hundreds of vehicles daily"
      ]
    }
  },
  {
    title: "DeftGPT - Multi-LLM Integration Platform",
    client: "Gtech",
    category: "Generative AI",
    icon: "🤖",
    duration: "4 months",
    problem: {
      title: "The Challenge",
      description: "Users needed to switch between multiple LLM platforms to compare responses and find the best model for their use case. No unified platform existed for multi-model comparison.",
      points: [
        "Users juggling multiple LLM subscriptions",
        "No way to compare responses across models",
        "Time wasted switching between platforms",
        "Difficulty choosing the right LLM for specific tasks",
        "Complex API management for developers"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Built DeftGPT, integrating 11 different LLMs in one platform with FastAPI backend deployed on AWS. Users can query multiple models simultaneously and compare responses.",
      points: [
        "Complete FastAPI framework deployed on AWS",
        "Integration of 11 different LLM APIs",
        "Simultaneous multi-model query capability",
        "User-friendly model selection interface",
        "Real-time response streaming and comparison"
      ],
      technologies: ["FastAPI", "11 LLM APIs", "AWS", "Real-time Streaming", "API Integration"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "LLMs Integrated", value: "11", description: "Models in one platform" },
        { label: "Response Time", value: "<3s", description: "Average query response" },
        { label: "User Satisfaction", value: "92%", description: "Platform rating" },
        { label: "Cost Savings", value: "60%", description: "Vs multiple subscriptions" }
      ],
      outcomes: [
        "11 LLM APIs integrated into unified platform",
        "Deployed successfully on AWS cloud infrastructure",
        "Simultaneous multi-model response comparison",
        "Users can choose or compare models in real-time",
        "Significant cost savings vs multiple subscriptions"
      ]
    }
  },
  {
    title: "RAG System for School Exam Management",
    client: "Gtech",
    category: "Generative AI + RAG",
    icon: "📚",
    duration: "3 months",
    problem: {
      title: "The Challenge",
      description: "Creating exam questions from textbooks was extremely time-consuming for educators. Manual MCQ generation took hours and maintaining question banks was difficult.",
      points: [
        "Manual MCQ creation took 3-4 hours per exam",
        "Difficulty maintaining diverse question banks",
        "No way to generate topic-specific questions quickly",
        "Quality inconsistency across different educators",
        "Time-intensive review and answer verification"
      ]
    },
    solution: {
      title: "The Solution",
      description: "Developed a RAG-based system that automatically generates MCQs from PDF textbooks. Integrated Llama 3.1 for intelligent question generation with topic-based filtering.",
      points: [
        "Automated MCQ generation from PDF textbooks",
        "Llama 3.1 for human-like question formulation",
        "Topic-based question generation with correct answers",
        "PDF parsing and content extraction pipeline",
        "Conversational interface for educators"
      ],
      technologies: ["RAG", "Llama 3.1", "PDF Processing", "NLP", "FastAPI", "Vector Database"]
    },
    results: {
      title: "The Impact",
      metrics: [
        { label: "Time Saved", value: "90%", description: "Question generation time" },
        { label: "Questions/Hour", value: "100+", description: "Auto-generation rate" },
        { label: "Accuracy", value: "94%", description: "Question relevance" },
        { label: "Productivity", value: "15x", description: "Educator efficiency gain" }
      ],
      outcomes: [
        "MCQ generation reduced from hours to minutes",
        "Educators can generate 100+ questions per hour",
        "Topic-specific question filtering and generation",
        "Maintains high-quality, curriculum-aligned questions",
        "Successfully deployed for multiple educational institutions"
      ]
    }
  }
];
