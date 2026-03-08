import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Faisal Alam - AI/ML Engineer | Generative AI | AI Agents | Computer Vision",
  description = "AI/ML Engineer specializing in LLMs, RAG chatbots, multi-agent systems, computer vision, and speech AI. Expert in LangGraph, FastAPI, YOLOv8, and healthcare automation.",
  keywords = "AI Engineer, Machine Learning, LLMs, RAG, AI Agents, Computer Vision, YOLOv8, LangGraph, FastAPI, Healthcare AI, Speech Recognition, NLP, Python Developer",
  image = "https://i.postimg.cc/44SX9rJK/bhaii.png",
  url = "https://faisal-alam-portfolio.com"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Faisal Alam",
    "jobTitle": "AI/ML Engineer",
    "url": url,
    "image": image,
    "email": "faisal76867@gmail.com",
    "telephone": "+92-3001234567",
    "description": description,
    "sameAs": [
      "https://github.com/faysal-aslam",
      "https://www.linkedin.com/in/faisalalam3/"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Computer Vision",
      "Natural Language Processing",
      "RAG Systems",
      "AI Agents",
      "Python",
      "TensorFlow",
      "PyTorch",
      "LangChain"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Engineering and Technology, Lahore"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "ZenDevX"
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
      <meta name="author" content="Faisal Alam" />
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
