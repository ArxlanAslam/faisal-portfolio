import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contact } from '../data/contact';

const SEO = ({
  title = "Faisal Aslam - Senior AI/ML Engineer | RAG and Agentic AI Expert | AI Solution Architect",
  description = "Senior AI/ML Engineer and AI Solution Architect with 6+ years building production Generative AI systems. Specialized in multi-agent orchestration (LangGraph, CrewAI), RAG and GraphRAG, tool-calling agents, and computer vision on AWS, GCP, and Azure. Senior AI Engineer (Lead) at Tekhqs.",
  keywords = "Senior AI Engineer, Generative AI Engineer, Agentic AI Engineer, LLM Engineer, Machine Learning Engineer, MLOps Engineer, RAG, GraphRAG, AI Agents, LangGraph, CrewAI, MCP, Computer Vision, YOLOv8, FastAPI, vLLM, Web3 AI, HIPAA, UK GDPR, AI Solution Architect",
  image = "https://i.postimg.cc/44SX9rJK/bhaii.png",
  url = "https://faisal-portfolio-zeta.vercel.app"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Faisal Aslam",
    "jobTitle": "Senior AI/ML Engineer",
    "url": url,
    "image": image,
    "email": contact.email,
    "telephone": contact.phone.replace(/\s/g, '-'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": contact.location.split(',')[0],
      "addressCountry": "Pakistan"
    },
    "description": description,
    "sameAs": [
      contact.github,
      contact.linkedin,
      "https://faisal-portfolio-zeta.vercel.app"
    ],
    "knowsAbout": [
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "GraphRAG",
      "AI Agents",
      "Multi-Agent Systems",
      "Model Context Protocol",
      "LLM Evaluation and Observability",
      "Computer Vision",
      "LangGraph",
      "FastAPI",
      "AWS",
      "Azure OpenAI",
      "Google Vertex AI",
      "Web3 AI"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "AUIC Islamabad"
      },
      {
        "@type": "EducationalOrganization",
        "name": "GC University Faisalabad"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Tekhqs"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="Faisal Aslam" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#4f46e5" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
