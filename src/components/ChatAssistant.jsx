import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, RotateCcw, ArrowRight, WifiOff } from 'lucide-react';
import { answerQuestion } from '../utils/assistantSearch';
import { suggestedQuestions, profile } from '../data/knowledgeBase';
import AgentAvatar from './AgentAvatar';

const GREETING = {
  role: 'assistant',
  text: `Hi — I'm an assistant for **${profile.name}**'s portfolio.\n\nI run entirely in your browser: no server, no API calls, nothing sent anywhere. Ask me about his projects, experience, tech stack or availability.`,
  sources: []
};

/** Minimal markdown: **bold**, *italic*, [text](url), and line breaks. */
const renderRich = (text) => {
  const escapeHtml = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline font-medium">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
};

const ChatAssistant = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isThinking, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape closes the panel
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const send = (raw) => {
    const question = (raw ?? input).trim();
    if (!question || isThinking) return;

    setMessages((prev) => [...prev, { role: 'user', text: question }]);
    setInput('');
    setIsThinking(true);

    // Retrieval is synchronous; the small delay keeps the exchange readable.
    setTimeout(() => {
      const { text, sources } = answerQuestion(question);
      setMessages((prev) => [...prev, { role: 'assistant', text, sources }]);
      setIsThinking(false);
    }, 260 + Math.random() * 220);
  };

  const goToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 640) setIsOpen(false);
  };

  const reset = () => {
    setMessages([GREETING]);
    setInput('');
    inputRef.current?.focus();
  };

  const showChips = messages.length <= 1;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop on small screens only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[68] sm:hidden"
            />

            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label="Portfolio assistant"
              className="fixed z-[70] flex flex-col bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700
                         inset-x-0 bottom-0 top-16 rounded-t-2xl
                         sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:w-[400px] sm:h-[600px] sm:max-h-[80vh] sm:rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-indigo-600 to-purple-600 text-white sm:rounded-t-2xl">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <AgentAvatar size={24} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm leading-tight">Ask about Faisal</p>
                    <p className="text-[11px] text-indigo-100 flex items-center gap-1">
                      <WifiOff size={10} />
                      Runs offline in your browser
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={reset}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label="Start over"
                    title="Start over"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label="Close assistant"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
                aria-live="polite"
              >
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[88%] ${m.role === 'user' ? '' : 'w-full'}`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-indigo-600 text-white rounded-br-sm'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-sm'
                        }`}
                        dangerouslySetInnerHTML={{ __html: renderRich(m.text) }}
                      />

                      {m.sources?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {m.sources.map((s, j) => (
                            <button
                              key={j}
                              onClick={() => goToSection(s.sectionId)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 transition-colors max-w-full"
                            >
                              <span className="truncate max-w-[160px]">{s.title}</span>
                              <ArrowRight size={11} className="flex-shrink-0" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isThinking && (
                  <div className="flex justify-start">
                    <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-slate-100 dark:bg-slate-700">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-400 animate-bounce"
                            style={{ animationDelay: `${d * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {showChips && (
                  <div className="pt-2 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      Try asking
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Composer */}
              <div className="border-t border-slate-200 dark:border-slate-700 p-3">
                <form
                  onSubmit={(e) => { e.preventDefault(); send(); }}
                  className="flex items-end gap-2"
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about his experience…"
                    aria-label="Ask a question"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isThinking}
                    className="p-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                    aria-label="Send question"
                  >
                    <Send size={18} />
                  </button>
                </form>
                <p className="mt-2 text-[11px] text-center text-slate-400 dark:text-slate-500">
                  Answers come only from this portfolio — it will say so when it doesn&apos;t know.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
