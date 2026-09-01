import React from 'react';

/**
 * Original animated agent mascot — inline SVG, no image assets.
 *
 * Everything moves via CSS keyframes defined in index.css, so it costs a few
 * KB rather than a PNG, scales without blurring, and follows the theme.
 * All motion is disabled by the prefers-reduced-motion rule in index.css.
 */
const AgentIllustration = () => (
  <div className="relative w-full max-w-[320px] mx-auto select-none" aria-hidden="true">
    {/* Soft glow behind the robot */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 dark:opacity-25" />

    {/* Floating chat bubbles */}
    <div className="agent-bubble agent-bubble--1 absolute -left-2 top-8 px-3 py-2 rounded-2xl rounded-bl-sm bg-white dark:bg-slate-700 shadow-lg border border-slate-200 dark:border-slate-600">
      <span className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="agent-dot w-1.5 h-1.5 rounded-full bg-indigo-500"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </span>
    </div>

    <div className="agent-bubble agent-bubble--2 absolute -right-1 top-20 px-3 py-1.5 rounded-2xl rounded-br-sm bg-indigo-600 text-white text-[11px] font-semibold shadow-lg">
      On it ✓
    </div>

    {/* Orbiting sparks */}
    <span className="agent-orbit agent-orbit--1 absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-purple-500" />
    <span className="agent-orbit agent-orbit--2 absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400" />

    <svg
      viewBox="0 0 240 250"
      className="relative w-full agent-float"
      role="img"
      aria-label="Animated AI agent illustration"
    >
      {/* Antenna */}
      <line x1="120" y1="34" x2="120" y2="16" className="stroke-slate-300 dark:stroke-slate-500" strokeWidth="4" strokeLinecap="round" />
      <circle cx="120" cy="12" r="8" className="agent-pulse fill-indigo-500" />

      {/* Ears */}
      <rect x="24" y="86" width="18" height="42" rx="9" className="fill-indigo-500" />
      <rect x="198" y="86" width="18" height="42" rx="9" className="fill-indigo-500" />

      {/* Head */}
      <rect x="38" y="34" width="164" height="132" rx="44"
        className="fill-white dark:fill-slate-200 stroke-slate-200 dark:stroke-slate-400" strokeWidth="2" />

      {/* Face screen */}
      <rect x="60" y="58" width="120" height="84" rx="34" className="fill-slate-800 dark:fill-slate-900" />

      {/* Eyes — the group blinks */}
      <g className="agent-blink">
        <path d="M88 96 q9 -13 18 0" className="stroke-emerald-400" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M134 96 q9 -13 18 0" className="stroke-emerald-400" strokeWidth="7" strokeLinecap="round" fill="none" />
      </g>

      {/* Smile */}
      <path d="M108 116 q12 11 24 0" className="stroke-emerald-400" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Neck */}
      <rect x="106" y="164" width="28" height="14" className="fill-slate-200 dark:fill-slate-400" />

      {/* Body */}
      <rect x="52" y="176" width="136" height="66" rx="30"
        className="fill-white dark:fill-slate-200 stroke-slate-200 dark:stroke-slate-400" strokeWidth="2" />

      {/* Arms */}
      <rect x="30" y="188" width="16" height="40" rx="8" className="fill-slate-200 dark:fill-slate-400" />
      <rect x="194" y="188" width="16" height="40" rx="8" className="fill-slate-200 dark:fill-slate-400" />

      {/* Chest emblem — a small node graph, nodding to agent orchestration */}
      <g className="agent-emblem">
        <line x1="120" y1="199" x2="104" y2="219" className="stroke-indigo-400" strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="199" x2="136" y2="219" className="stroke-indigo-400" strokeWidth="3" strokeLinecap="round" />
        <line x1="104" y1="219" x2="136" y2="219" className="stroke-indigo-400" strokeWidth="3" strokeLinecap="round" />
        <circle cx="120" cy="199" r="6" className="fill-indigo-600" />
        <circle cx="104" cy="219" r="5" className="fill-purple-500" />
        <circle cx="136" cy="219" r="5" className="fill-blue-500" />
      </g>
    </svg>

    {/* Workflow strip */}
    <div className="relative mt-4 mx-auto w-fit px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
      <span className="agent-sweep absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
      <p className="relative text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2 text-center">
        Agent workflow
      </p>
      <div className="relative flex items-center gap-2">
        {['📄', '🧠', '🔧', '✅'].map((step, i, arr) => (
          <React.Fragment key={step}>
            <span
              className="agent-step w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm"
              style={{ animationDelay: `${i * 0.45}s` }}
            >
              {step}
            </span>
            {i < arr.length - 1 && (
              <span className="text-slate-300 dark:text-slate-600 text-xs">→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default AgentIllustration;
