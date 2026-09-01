import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Command, ArrowUp, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { contact, whatsappLink } from '../data/contact';
import AgentAvatar from './AgentAvatar';

/**
 * Greets by the visitor's local clock so it never feels like a canned popup.
 *
 * Note the late-night bucket: getHours() returns 0 at 00:30, and a naive
 * `h < 12` check would cheerfully say "Good morning" at half past midnight.
 * Anything from 22:00 to 04:59 gets treated as night instead.
 */
const timeGreeting = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return { text: 'Good morning!', emoji: '☀️' };
  if (h >= 12 && h < 17) return { text: 'Good afternoon!', emoji: '👋' };
  if (h >= 17 && h < 22) return { text: 'Good evening!', emoji: '🌆' };
  return { text: 'Working late?', emoji: '🌙' };
};

const GREETING_DISMISSED_KEY = 'agentGreetingDismissed';

/**
 * A single contact panel rather than a column of competing buttons.
 *
 * Colour is used only as a small icon accent — the surface stays neutral so
 * the panel reads as one designed component instead of four loose pills.
 */
const ActionDock = ({ onOpenAssistant, onOpenPalette, assistantOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Proactive greeting: appears once per visit, a few seconds in, then retires
  // on its own. Dismissing it is remembered for the session so it never nags.
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(GREETING_DISMISSED_KEY) === '1';
    } catch {
      // Storage can be blocked; fall through and just show it once.
    }
    if (dismissed) return;

    const showTimer = setTimeout(() => setShowGreeting(true), 4500);
    const hideTimer = setTimeout(() => setShowGreeting(false), 4500 + 11000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  const dismissGreeting = () => {
    setShowGreeting(false);
    try {
      sessionStorage.setItem(GREETING_DISMISSED_KEY, '1');
    } catch {
      // Nothing to do — it simply won't persist across reloads.
    }
  };

  // Never talk over an open panel
  const greetingVisible = showGreeting && !isOpen && !assistantOpen;

  // Read the clock at render, so a tab left open overnight still greets correctly
  const greeting = timeGreeting();

  const actions = [
    {
      label: 'WhatsApp',
      hint: 'Fastest reply',
      icon: <FaWhatsapp size={18} />,
      tint: 'bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400',
      href: whatsappLink(),
      external: true
    },
    {
      label: 'Email',
      hint: contact.email,
      icon: <Mail size={18} />,
      tint: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400',
      href: `mailto:${contact.email}`
    },
    {
      label: 'Ask my AI',
      hint: 'Answers instantly, offline',
      icon: <AgentAvatar size={20} />,
      tint: 'bg-purple-100 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400',
      onClick: () => onOpenAssistant?.()
    }
  ];

  const runAction = (action) => {
    setIsOpen(false);
    if (action.onClick) setTimeout(action.onClick, 80);
  };

  const rowClass =
    'group w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 focus:outline-none focus-visible:bg-slate-50 dark:focus-visible:bg-slate-700/50';

  const rowBody = (action) => (
    <>
      <span
        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${action.tint}`}
      >
        {action.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-slate-900 dark:text-white leading-tight">
          {action.label}
        </span>
        <span className="block text-xs text-slate-500 dark:text-slate-400 truncate leading-tight mt-0.5">
          {action.hint}
        </span>
      </span>
      <ChevronRight
        size={16}
        className="flex-shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all"
      />
    </>
  );

  return (
    <>
      {/* Scroll to top — kept on the opposite side so it never crowds the dock */}
      <AnimatePresence>
        {showTop && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-8 z-40 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-600 dark:text-slate-300 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 hover:text-indigo-600 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Tap-away layer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-[3px]"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.94 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              style={{ transformOrigin: 'bottom right' }}
              role="dialog"
              aria-label="Contact options"
              className="w-[300px] max-w-[calc(100vw-3rem)] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-4 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <p className="font-semibold text-sm leading-tight">Let&apos;s work together</p>
                <p className="flex items-center gap-1.5 text-[11px] text-indigo-100 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Available for new projects
                </p>
              </div>

              {/* Actions */}
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {actions.map((action) =>
                  action.href ? (
                    <a
                      key={action.label}
                      href={action.href}
                      {...(action.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      onClick={() => setIsOpen(false)}
                      className={rowClass}
                    >
                      {rowBody(action)}
                    </a>
                  ) : (
                    <button
                      key={action.label}
                      onClick={() => runAction(action)}
                      className={rowClass}
                    >
                      {rowBody(action)}
                    </button>
                  )
                )}
              </div>

              {/* Utility row */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => onOpenPalette?.(), 80);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Command size={13} />
                  Search this site
                </span>
                <kbd className="px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600 font-mono text-[10px]">
                  Ctrl K
                </kbd>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Proactive greeting */}
        <AnimatePresence>
          {greetingVisible && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              style={{ transformOrigin: 'bottom right' }}
              className="relative w-[270px] max-w-[calc(100vw-3rem)] rounded-2xl rounded-br-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-4"
            >
              <button
                onClick={dismissGreeting}
                aria-label="Dismiss greeting"
                className="absolute top-2 right-2 p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X size={14} />
              </button>

              <div className="flex items-start gap-3">
                <span className="agent-wave flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <AgentAvatar size={26} className="text-white" />
                </span>
                <div className="min-w-0 pr-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                    {greeting.text} {greeting.emoji}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-snug">
                    I&apos;m Faisal&apos;s AI assistant. Ask me anything about his work — or just
                    say hi.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  dismissGreeting();
                  setTimeout(() => onOpenAssistant?.(), 80);
                }}
                className="mt-3 w-full px-3 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
              >
                Start chatting
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary control */}
        <motion.button
          onClick={() => setIsOpen((o) => !o)}
          whileTap={{ scale: 0.94 }}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
          className={`relative flex items-center gap-2 rounded-full shadow-xl transition-all duration-300 text-white ${
            isOpen
              ? 'p-4 bg-slate-700 dark:bg-slate-600'
              : 'px-5 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/30 hover:shadow-2xl'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2"
              >
                <AgentAvatar size={26} className="text-white" />
                <span className="hidden sm:inline text-sm font-bold">Let&apos;s talk</span>
              </motion.span>
            )}
          </AnimatePresence>

          {/* Attention ring, only while collapsed */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 ring-2 ring-white dark:ring-slate-900" />
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default ActionDock;
