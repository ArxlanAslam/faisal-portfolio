import React from 'react';

/**
 * Compact head-only version of the agent mascot, for buttons and headers.
 *
 * Detail is deliberately stripped back so it stays readable down to ~22px.
 * Reuses the .agent-blink / .agent-pulse keyframes from index.css, which are
 * size-independent thanks to transform-box: fill-box.
 *
 * The head uses currentColor so it inherits from its container — white on the
 * gradient dock button, purple in the tinted menu chip.
 */
const AgentAvatar = ({ size = 24, animated = true, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="AI agent"
  >
    {/* Antenna */}
    <line x1="32" y1="10" x2="32" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    <circle
      cx="32"
      cy="4"
      r="3.5"
      className={animated ? 'agent-pulse' : ''}
      fill="#34d399"
    />

    {/* Ears */}
    <rect x="2" y="26" width="6" height="16" rx="3" fill="currentColor" opacity="0.55" />
    <rect x="56" y="26" width="6" height="16" rx="3" fill="currentColor" opacity="0.55" />

    {/* Head */}
    <rect x="9" y="10" width="46" height="46" rx="16" fill="currentColor" />

    {/* Face screen */}
    <rect x="16" y="19" width="32" height="28" rx="11" fill="#1e293b" />

    {/* Eyes */}
    <g className={animated ? 'agent-blink' : ''}>
      <path d="M23 31 q3.5 -5 7 0" stroke="#34d399" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M34 31 q3.5 -5 7 0" stroke="#34d399" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>

    {/* Smile */}
    <path d="M28 38 q4 4 8 0" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export default AgentAvatar;
