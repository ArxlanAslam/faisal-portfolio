import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Faisal Aslam - Senior AI/ML Engineer | Generative AI, Agentic Systems & RAG",
  description = "Senior AI/ML Engineer and Solution Architect with 5+ years building production Generative AI systems. Specialized in agentic AI, multi-agent orchestration (LangGraph), RAG, and computer vision on AWS, GCP, and Azure. Team Lead at Linvex Solutions.",
  keywords = "Senior AI Engineer, Machine Learning, LLMs, RAG, AI Agents, LangGraph, Computer Vision, YOLOv8, FastAPI, Web3 AI, HIPAA, GDPR, AI Solution Architect",
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
    "email": "faisal76867@gmail.com",
    "telephone": "+92-300-9272292",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    },
    "description": description,
    "sameAs": [
      "https://github.com/faysal-aslam",
      "https://www.linkedin.com/in/faisal-aslam-790238242/",
      "https://faisal-portfolio-zeta.vercel.app"
    ],
    "knowsAbout": [
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Multi-Agent Systems",
      "Computer Vision",
      "LangGraph",
      "FastAPI",
      "AWS",
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
      "name": "Linvex Solutions"
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
