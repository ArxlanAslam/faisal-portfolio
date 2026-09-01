/**
 * Offline retrieval for the portfolio assistant.
 *
 * Runs entirely in the browser with no network calls and no model download:
 * BM25-style lexical scoring over the knowledge base, widened with a synonym
 * map so a question like "does he know graph databases" still reaches Neo4j.
 */
import { knowledgeBase, profile } from '../data/knowledgeBase';

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'do', 'does',
  'did', 'has', 'have', 'had', 'he', 'she', 'they', 'him', 'her', 'his', 'their',
  'it', 'its', 'i', 'you', 'we', 'me', 'my', 'your', 'of', 'in', 'on', 'at', 'to',
  'for', 'with', 'from', 'by', 'about', 'as', 'and', 'or', 'but', 'if', 'then',
  'so', 'that', 'this', 'these', 'those', 'what', 'which', 'who', 'whom', 'whose',
  'when', 'where', 'why', 'how', 'can', 'could', 'would', 'should', 'will', 'shall',
  'may', 'might', 'must', 'any', 'some', 'all', 'more', 'most', 'much', 'many',
  'tell', 'show', 'give', 'know', 'please', 'there', 'here', 'faisal'
]);

// Query terms are expanded with these before scoring.
const SYNONYMS = {
  llm: ['large language model', 'gpt', 'claude', 'gemini', 'llama', 'model'],
  llms: ['large language model', 'gpt', 'claude', 'gemini', 'llama'],
  ai: ['artificial intelligence', 'machine learning', 'ml'],
  ml: ['machine learning', 'ai'],
  agent: ['agentic', 'langgraph', 'multi-agent', 'tool calling', 'react'],
  agents: ['agentic', 'langgraph', 'multi-agent', 'tool calling'],
  agentic: ['agent', 'langgraph', 'multi-agent', 'supervisor'],
  rag: ['retrieval', 'retrieval-augmented', 'graphrag', 'lightrag', 'vector', 'embedding'],
  retrieval: ['rag', 'search', 'vector', 'embedding'],
  graph: ['neo4j', 'graphrag', 'knowledge graph', 'lightrag'],
  database: ['postgresql', 'mongodb', 'redis', 'neo4j', 'sql', 'pgvector'],
  databases: ['postgresql', 'mongodb', 'redis', 'neo4j', 'sql'],
  vector: ['faiss', 'qdrant', 'pinecone', 'pgvector', 'embedding', 'semantic search'],
  cloud: ['aws', 'gcp', 'azure', 'sagemaker', 'lambda', 'vertex', 'cloud run'],
  aws: ['amazon', 'sagemaker', 'lambda', 'bedrock', 's3', 'ecs', 'fargate'],
  gcp: ['google cloud', 'vertex ai', 'cloud run'],
  azure: ['microsoft', 'azure openai', 'azure ai foundry'],
  devops: ['docker', 'terraform', 'ci/cd', 'kubernetes', 'mlops', 'deployment'],
  deploy: ['deployment', 'production', 'shipped', 'live', 'mlops'],
  vision: ['computer vision', 'yolov8', 'deepsort', 'opencv', 'detection', 'image'],
  cv: ['computer vision', 'yolov8', 'detection'],
  voice: ['speech', 'whisper', 'stt', 'tts', 'transcription', 'asr', 'diarization'],
  speech: ['voice', 'whisper', 'stt', 'tts', 'asr'],
  web3: ['blockchain', 'crypto', 'solana', 'base', 'sui', 'defi', 'kresus', 'trading'],
  blockchain: ['web3', 'solana', 'sui', 'defi', 'crypto'],
  backend: ['fastapi', 'flask', 'django', 'api', 'rest', 'websocket'],
  api: ['fastapi', 'rest', 'endpoint', 'backend'],
  python: ['fastapi', 'asyncio', 'backend'],
  eval: ['evaluation', 'langsmith', 'benchmark', 'observability', 'testing'],
  evals: ['evaluation', 'langsmith', 'benchmark', 'observability'],
  cost: ['token economics', 'spend', 'optimization', 'caching', 'pricing', 'budget'],
  healthcare: ['hipaa', 'medical', 'clinical', 'carevision', 'patient'],
  finance: ['fintech', 'fraud', 'visionguard', 'transaction', 'banking'],
  fintech: ['fraud', 'visionguard', 'transaction', 'finance'],
  legal: ['legaltech', 'documind', 'contract', 'nda', 'clause'],
  compliance: ['hipaa', 'gdpr', 'regulation', 'audit', 'governance', 'rbac'],
  team: ['lead', 'leadership', 'manage', 'mentor', 'engineers'],
  lead: ['leadership', 'team', 'manage', 'senior'],
  hire: ['contact', 'available', 'availability', 'email'],
  salary: ['contact', 'compensation', 'rate'],
  study: ['education', 'degree', 'university'],
  work: ['experience', 'job', 'role', 'employer'],
  now: ['current', 'currently', 'present', 'tekhqs'],
  currently: ['current', 'now', 'present', 'tekhqs'],
  latest: ['current', 'recent', 'now', 'tekhqs'],
  recent: ['current', 'latest', 'now']
};

const normalise = (text) =>
  text.toLowerCase().replace(/[^a-z0-9+#./\s-]/g, ' ').replace(/\s+/g, ' ').trim();

// Cheap suffix stripping — enough to match plural/verb forms in a small corpus.
const stem = (word) => {
  if (word.length <= 4) return word;
  // 'e' last so "transcribe" and "transcribing" both reduce to "transcrib".
  for (const suffix of ['ing', 'ies', 'ed', 'es', 's', 'e']) {
    if (word.endsWith(suffix) && word.length - suffix.length >= 3) {
      return word.slice(0, -suffix.length);
    }
  }
  return word;
};

const tokenize = (text) =>
  normalise(text)
    .split(' ')
    .filter((t) => t && t.length > 1 && !STOPWORDS.has(t))
    .map(stem);

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const expandQuery = (raw) => {
  const base = normalise(raw);
  const tokens = tokenize(raw);
  const expanded = new Set(tokens);

  Object.entries(SYNONYMS).forEach(([key, values]) => {
    // Whole-word match only. Substring matching would let "know" trigger the
    // "now" synonym set and silently answer the wrong question.
    const wholeWord = new RegExp(`\\b${escapeRe(key)}\\b`).test(base);
    if (wholeWord || tokens.includes(stem(key))) {
      values.forEach((v) => tokenize(v).forEach((t) => expanded.add(t)));
    }
  });

  return { tokens, expanded: [...expanded], phrase: base };
};

/* ---------------------------------------------------------- build index */

const index = knowledgeBase.map((chunk) => {
  const titleTokens = tokenize(chunk.title);
  const tagTokens = tokenize((chunk.tags || []).join(' '));
  const bodyTokens = tokenize(chunk.body);

  const freq = new Map();
  const bump = (token, weight) => freq.set(token, (freq.get(token) || 0) + weight);

  titleTokens.forEach((t) => bump(t, 3));
  tagTokens.forEach((t) => bump(t, 2));
  bodyTokens.forEach((t) => bump(t, 1));

  return {
    chunk,
    freq,
    length: bodyTokens.length + titleTokens.length + tagTokens.length,
    haystack: normalise(`${chunk.title} ${(chunk.tags || []).join(' ')} ${chunk.body}`)
  };
});

const avgLength = index.reduce((sum, e) => sum + e.length, 0) / (index.length || 1);

// Every token that appears anywhere in the corpus. Used to answer honestly
// when someone asks about a technology Faisal does not actually list.
const CORPUS_TOKENS = new Set();
index.forEach((entry) => entry.freq.forEach((_, token) => CORPUS_TOKENS.add(token)));

// Ordinary English that carries no subject matter. Never reported as a
// "not found" term — telling someone we found nothing about "free" or
// "meetings" is noise, not honesty.
const GENERIC = new Set([
  // filler verbs
  'use', 'used', 'using', 'work', 'worked', 'working', 'build', 'built', 'building',
  'made', 'make', 'making', 'done', 'doing', 'tell', 'told', 'said', 'say', 'ask',
  'want', 'need', 'get', 'got', 'give', 'take', 'look', 'see', 'find', 'found',
  'help', 'come', 'go', 'going', 'went', 'put', 'keep', 'let', 'talk', 'speak',
  'meet', 'meeting', 'meetings', 'call', 'calls', 'chat', 'contact', 'send',
  // qualifiers and adjectives
  'good', 'great', 'best', 'better', 'bad', 'nice', 'big', 'small', 'new', 'old',
  'free', 'busy', 'open', 'ready', 'able', 'capable', 'strong', 'real', 'sure',
  'possible', 'available', 'similar', 'different', 'same', 'own', 'full', 'part',
  // generic nouns
  'thing', 'things', 'stuff', 'something', 'anything', 'everything', 'nothing',
  'someone', 'anyone', 'everyone', 'people', 'person', 'guy', 'time', 'times',
  'day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years', 'today',
  'tomorrow', 'now', 'soon', 'later', 'moment', 'way', 'ways', 'kind', 'type',
  'lot', 'bit', 'part', 'place', 'point', 'case', 'level', 'side', 'end',
  // meta words about the portfolio itself
  'experience', 'experienced', 'familiar', 'expert', 'expertise', 'skill', 'skills',
  'knowledge', 'background', 'handle', 'info', 'information', 'detail', 'details',
  'portfolio', 'site', 'website', 'page', 'question', 'answer', 'please', 'thanks',
  // conversational
  'yes', 'no', 'ok', 'okay', 'well', 'right', 'sorry', 'hello', 'hey', 'sure'
]);

/** Meaningful words the visitor typed, paired with the stem used for lookup. */
const subjectTerms = (raw) =>
  normalise(raw)
    .split(' ')
    .filter((t) => t && t.length > 1 && !STOPWORDS.has(t) && !GENERIC.has(t))
    .map((t) => ({ raw: t, stem: stem(t) }));

// Inverse document frequency, so common words count for less.
const idf = new Map();
index.forEach((entry) => {
  new Set(entry.freq.keys()).forEach((token) => {
    idf.set(token, (idf.get(token) || 0) + 1);
  });
});
const idfScore = (token) => {
  const n = idf.get(token) || 0;
  if (!n) return 0;
  return Math.log(1 + (index.length - n + 0.5) / (n + 0.5));
};

/* --------------------------------------------------------------- search */

const K1 = 1.4;
const B = 0.72;

export function searchKnowledgeBase(query, limit = 4) {
  const { tokens, expanded, phrase } = expandQuery(query);
  if (expanded.length === 0) return [];

  const scored = index.map((entry) => {
    let score = 0;

    expanded.forEach((token) => {
      const tf = entry.freq.get(token) || 0;
      if (!tf) return;
      const norm = tf * (K1 + 1) / (tf + K1 * (1 - B + B * (entry.length / avgLength)));
      // Terms the user actually typed outweigh synonym expansions.
      const weight = tokens.includes(token) ? 1 : 0.55;
      score += idfScore(token) * norm * weight;
    });

    // Reward an exact phrase appearing verbatim.
    if (phrase.length > 8 && entry.haystack.includes(phrase)) score += 6;

    return { entry, score };
  });

  return scored
    .filter((s) => s.score > 0.35)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => ({ ...s.entry.chunk, score: s.score }));
}

/* ------------------------------------------------------- intent answers */

/**
 * Intent classification.
 *
 * A chain of `if (text.includes(...))` checks is fragile: "when are you free
 * for meetings" contains "meeting", which lexically matches the NeuroSync
 * meeting-intelligence project far more strongly than it matches availability.
 *
 * Instead every intent declares weighted signals and the highest scorer wins,
 * so a scheduling phrase can outrank an unrelated topic noun. Signals:
 *   phrases  — multi-word, strongest (the user's wording maps to this intent)
 *   strong   — single tokens unambiguous on their own ("salary", "whatsapp"),
 *              scored like a phrase so a one-word question still resolves
 *   words    — single tokens, moderate; need corroboration to reach threshold
 *   veto     — cancels the intent outright (topic question, not an intent)
 */
const CONTACT_BLOCK = () =>
  `💬 **[Message him on WhatsApp](${profile.whatsapp})** — usually the fastest reply (${profile.phone}).\n\n✉️ Email: **${profile.email}**\n\nHe's also on [LinkedIn](${profile.linkedin}) and [GitHub](${profile.github}), and there's a contact form in the Contact section of this site.`;

const INTENTS = [
  {
    id: 'greeting',
    phrases: ['good morning', 'good afternoon', 'good evening'],
    words: ['hello', 'hi', 'hey', 'salam', 'assalam', 'yo'],
    maxLength: 26,
    threshold: 3, // a bare "hi" is still unambiguous
    answer: () => ({
      text: `Hello! I'm an assistant for ${profile.name}'s portfolio. I can answer questions about his projects, experience, tech stack, and availability. What would you like to know?`,
      sources: []
    })
  },
  {
    id: 'thanks',
    words: ['thanks', 'thank', 'thankyou', 'shukriya', 'cheers'],
    maxLength: 30,
    threshold: 3,
    answer: () => ({
      text: "You're welcome. Anything else you'd like to know about his work?",
      sources: []
    })
  },
  {
    id: 'scheduling',
    // Asking to meet/talk — distinct from the NeuroSync meeting-intelligence project.
    phrases: [
      'when are you free', 'when is he free', 'when will you be free', 'are you free',
      'is he free', 'free for', 'free to', 'your availability', 'his availability',
      'when can we', 'when could we', 'can we meet', 'can we talk', 'can we speak',
      'can i meet', 'can i talk', 'can i speak', 'like to meet', 'want to meet',
      'set up a call', 'set up a meeting', 'setup a call', 'book a call',
      'book a meeting', 'schedule a call', 'schedule a meeting', 'schedule an interview',
      'arrange a call', 'arrange a meeting', 'hop on a call', 'jump on a call',
      'get on a call', 'have a chat', 'quick chat', 'quick call',
      'available for a call', 'available for an interview', 'available to talk',
      'available to meet', 'open to a call', 'notice period', 'start date',
      'when can he start', 'when could he start', 'how soon can he start'
    ],
    strong: ['schedule', 'scheduling', 'calendar', 'appointment', 'availability'],
    words: ['interview', 'meet', 'call'],
    answer: () => ({
      text: `I can't book time on his calendar, but WhatsApp gets you an answer quickest:\n\n${CONTACT_BLOCK()}\n\nContext that usually helps: he's based in **${profile.location}** and his stated availability is **${profile.availability}**, so EU and US meeting windows both work.`,
      sources: [{ title: 'Contact', sectionId: 'contact' }]
    })
  },
  {
    id: 'contact',
    phrases: ['how do i contact', 'how can i contact', 'get in touch', 'reach him',
      'reach out', 'contact details', 'contact him', 'email address', 'his email',
      'phone number', 'call him', 'message him', 'his whatsapp', 'on whatsapp'],
    strong: ['whatsapp', 'contact'],
    words: ['email', 'phone', 'linkedin', 'github'],
    answer: () => ({
      text: CONTACT_BLOCK(),
      sources: [{ title: 'Contact', sectionId: 'contact' }]
    })
  },
  {
    id: 'compensation',
    phrases: ['how much does he charge', 'expected pay', 'day rate', 'hourly rate',
      'salary expectation', 'expected salary', 'how much would he cost', 'what does he cost'],
    strong: ['salary', 'compensation', 'salaries'],
    words: ['pay', 'wage', 'budget', 'rate'],
    answer: () => ({
      text: `Compensation isn't listed on the portfolio — that's best discussed directly. Email him at **${profile.email}** and he'll respond with specifics.\n\nWhat I can tell you: he's a ${profile.currentRole} with ${profile.yearsExperience} years of experience, and his stated availability is *${profile.availability}*.`,
      sources: [{ title: 'Contact', sectionId: 'contact' }]
    })
  },
  {
    id: 'location',
    phrases: ['where is he based', 'where does he live', 'where is he located',
      'where is he from', 'what country', 'what city', 'time zone', 'timezone',
      'open to relocation', 'willing to relocate', 'work remotely', 'fully remote',
      'work from home', 'on site', 'onsite', 'hybrid role'],
    strong: ['relocate', 'relocation', 'visa', 'sponsorship'],
    words: ['remote', 'located', 'based'],
    answer: () => ({
      text: `Faisal is based in **${profile.location}** and his stated availability is **${profile.availability}**.\n\nSo: fully remote roles with European or US time-zone overlap work, and he's open to relocating for the right opportunity. For start dates or notice period, email **${profile.email}**.`,
      sources: [{ title: 'Contact', sectionId: 'contact' }]
    })
  },
  {
    id: 'currentRole',
    phrases: ['right now', 'currently working', 'current role', 'current job',
      'current position', 'working on now', 'where does he work', 'who does he work for',
      'what is he doing now', 'present role', 'latest role', 'current employer'],
    strong: ['tekhqs'],
    answer: () => ({
      text: `He's **${profile.currentRole} at ${profile.currentCompany}** since ${profile.currentSince}.\n\nThere he owns end-to-end AI orchestration architecture for client-facing Generative AI platforms — multi-agent graph design, RAG pipelines, prompt and model optimization, deployment and observability. He also authors CTO-level technical proposals and supervises 3 junior engineers.\n\nHis two flagship projects there are **Kresus** (a Web3 conversational trading agent across Solana, Base, World Chain and Sui) and **Vyera AI** (a competitive-intelligence multi-agent platform for the UK market).`,
      sources: [
        { title: 'Experience', sectionId: 'experience' },
        { title: 'Kresus', sectionId: 'projects' }
      ]
    })
  },
  {
    id: 'reactAmbiguity',
    // Two unrelated things share this name; answer both rather than guessing.
    strong: ['react', 'reactjs'],
    veto: ['reactive'],
    answer: () => ({
      text: `Two different things share that name, so let me split them:\n\n**ReAct** (the reason-and-act agent pattern) is core to his work — **SynthAgent** is a self-correcting ReAct agent with reflection loops that cut analyst research from 8 hours to under 25 minutes. He also profiled a 37-tool agentic ReAct loop for token economics.\n\n**React** (the JavaScript UI library) isn't specifically listed on his CV. What is listed: JavaScript as a language, plus "Backend and Frontend Development, Full-Stack Delivery". He's primarily a Python/AI engineer, not a frontend specialist.\n\nIf you meant the frontend side, ask him directly at **${profile.email}**.`,
      sources: [
        { title: 'SynthAgent', sectionId: 'projects' },
        { title: 'Skills', sectionId: 'skills' }
      ]
    })
  },
  {
    id: 'resume',
    phrases: ['download his cv', 'download the cv', 'his resume', 'the resume', 'send me his cv'],
    strong: ['resume', 'cv'],
    answer: () => ({
      text: `You can download his full CV using the **Resume** button in the hero section, or press **R** anywhere on this page.\n\nIt's a 3-page PDF covering his full technical skill set, all roles, and independent R&D work.`,
      sources: [{ title: 'Home', sectionId: 'home' }]
    })
  },
  {
    id: 'whyHire',
    phrases: ['why hire', 'why should we', 'why should i', 'what makes him',
      'stand out', 'good fit', 'right fit', 'his strengths', 'best qualities',
      'why him', 'sell me'],
    words: ['strength', 'strengths'],
    answer: () => ({
      text: `Three things set him apart:\n\n**1. He ships to production, not demos.** Kresus, Vyera, Chex.AI, DeftGPT, CareVision and HighTribe are all live, with an enterprise RAG system deployed inside Saudi Aramco.\n\n**2. He measures.** He profiled a 37-tool agentic ReAct loop as 99.7% input-bound and identified the tool schema (~38K tokens) as the dominant cost driver — then cut spend with prompt caching. Architecture decisions come from numbers, not vendor claims.\n\n**3. He works under real constraints.** HIPAA in healthcare, UK GDPR in competitive intelligence, and a non-custodial security model in Web3 — compliance built into the architecture rather than bolted on.\n\nOn top of that he leads teams: 5 engineers at Linvex, 3 at Tekhqs, plus CTO-level technical proposals.`,
      sources: [
        { title: 'Case Studies', sectionId: 'case-studies' },
        { title: 'R&D', sectionId: 'research' }
      ]
    })
  }
];

const PHRASE_WEIGHT = 10;
const WORD_WEIGHT = 3.5;
// Below this an intent is treated as a coincidence and lexical search wins.
const INTENT_THRESHOLD = 6;

function scoreIntent(intent, q, words) {
  if (intent.maxLength && q.length > intent.maxLength) return 0;
  if (intent.veto?.some((v) => q.includes(v))) return 0;

  let score = 0;
  intent.phrases?.forEach((p) => { if (q.includes(p)) score += PHRASE_WEIGHT; });
  intent.strong?.forEach((w) => { if (words.has(w)) score += PHRASE_WEIGHT; });
  intent.words?.forEach((w) => { if (words.has(w)) score += WORD_WEIGHT; });
  return score;
}

/**
 * High-frequency questions get a direct, hand-written answer rather than a
 * retrieved passage. Returns null when no intent scores confidently.
 */
function matchIntent(query) {
  const q = normalise(query);
  const words = new Set(q.split(' ').filter(Boolean));

  let best = null;
  let bestScore = 0;

  INTENTS.forEach((intent) => {
    const score = scoreIntent(intent, q, words);
    // Compare against each intent's own bar; a bare "hi" needs less evidence
    // than a scheduling request buried in a longer sentence.
    if (score >= (intent.threshold ?? INTENT_THRESHOLD) && score > bestScore) {
      bestScore = score;
      best = intent;
    }
  });

  return best ? best.answer() : null;
}

/* ------------------------------------------------------ answer assembly */

const trimToSentences = (text, maxChars = 420) => {
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const lastStop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  return (lastStop > 120 ? cut.slice(0, lastStop + 1) : cut.trimEnd() + '…');
};

const KIND_LABEL = {
  project: 'Project',
  experience: 'Role',
  skill: 'Skills',
  caseStudy: 'Case study',
  research: 'R&D',
  service: 'Service',
  education: 'Education',
  profile: 'Profile'
};

/**
 * Turns a question into an answer. Pure function of the local corpus —
 * no network, no model, no API key.
 */
export function answerQuestion(query) {
  const intent = matchIntent(query);
  if (intent) return { ...intent, confident: true };

  // Terms the user typed that appear nowhere in the portfolio. Naming these
  // back is better than confidently returning a loosely-related passage.
  const subjects = subjectTerms(query);
  const unknownTerms = subjects.filter((s) => !CORPUS_TOKENS.has(s.stem)).map((s) => s.raw);
  const knownTerms = subjects.filter((s) => CORPUS_TOKENS.has(s.stem));

  const hits = searchKnowledgeBase(query, 4);

  // Nothing the user asked about exists in the portfolio.
  if (hits.length === 0 || knownTerms.length === 0) {
    const named = unknownTerms.length > 0 && unknownTerms.length <= 3;
    return {
      text: named
        ? `I don't see **${unknownTerms.join('**, **')}** anywhere in Faisal's portfolio, so I'd rather not guess.\n\nWhat he does list: agentic AI (LangGraph, CrewAI, MCP), RAG and GraphRAG, LLM integration, computer vision, speech AI, Web3 agents, and AWS/GCP/Azure deployment.\n\nIf it matters for your role, ask him directly — [WhatsApp](${profile.whatsapp}) or **${profile.email}**. He'll give you a straight answer.`
        : `I couldn't find that in the portfolio. I know about his **projects**, **work experience**, **technical skills**, **case studies**, **R&D work**, **education** and **availability**.\n\nTry asking something like *"Does he have RAG experience?"* or *"What has he built with LangGraph?"* — or reach him on [WhatsApp](${profile.whatsapp}).`,
      sources: [],
      confident: false
    };
  }

  const [top, ...rest] = hits;
  const label = KIND_LABEL[top.kind] || '';

  let text = `**${top.title}**${label ? ` · ${label}` : ''}\n\n${trimToSentences(top.body)}`;

  const others = rest.filter((h) => h.score > top.score * 0.35).slice(0, 3);
  if (others.length > 0) {
    text += `\n\n**Also relevant:**\n${others.map((o) => `• ${o.title}`).join('\n')}`;
  }

  // Flag parts of the question that genuinely aren't covered, so a partial
  // match doesn't read as a full answer.
  if (unknownTerms.length > 0 && unknownTerms.length <= 2) {
    text += `\n\n*Note: I found nothing specific about ${unknownTerms.map((t) => `**${t}**`).join(' or ')} — the answer above is the closest related work.*`;
  }

  // One chip per section — they all just scroll somewhere, so three chips
  // pointing at the same section is noise.
  const seen = new Set();
  const sources = [];
  hits.forEach((h) => {
    if (seen.has(h.sectionId)) return;
    seen.add(h.sectionId);
    sources.push({ title: h.projectTitle || h.title, sectionId: h.sectionId });
  });

  return { text, sources: sources.slice(0, 3), confident: top.score > 2 };
}
