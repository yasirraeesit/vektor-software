import React from 'react';

export default function Logo({ size = "md", showText = true, className = "" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Code-Inspired < V > Syntax Vector Glyph */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size] || sizeClasses.md} rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-lg shadow-indigo-500/15 group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/30 transition-all duration-300 p-1.5 overflow-hidden`}>
        
        {/* Subtle background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-amber-500/10 opacity-70 group-hover:opacity-100 transition-opacity" />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-110"
        >
          <defs>
            <linearGradient id="bracketLeftGrad" x1="4" y1="12" x2="16" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient id="vectorCoreGrad" x1="16" y1="14" x2="32" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7" />
              <stop offset="0.6" stopColor="#6366f1" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>

            <linearGradient id="bracketRightGrad" x1="32" y1="12" x2="44" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818cf8" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>

            <filter id="vectorGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Bracket: < */}
          <path
            d="M15 13L6 24L15 35"
            stroke="url(#bracketLeftGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Dynamic Core: V */}
          <path
            d="M18 16L24 33L30 16"
            stroke="url(#vectorCoreGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#vectorGlow)"
          />

          {/* Core Spark Node */}
          <circle cx="24" cy="22" r="2" fill="#38bdf8" className="animate-pulse" />

          {/* Right Bracket: > */}
          <path
            d="M33 13L42 24L33 35"
            stroke="url(#bracketRightGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Live system ping dot */}
        <span className="absolute top-1 right-1 flex h-2 w-2 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>

      {/* Typography Identity */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5 leading-none">
            VEKTOR
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-semibold tracking-normal">
              &lt;LOGIC/&gt;
            </span>
          </span>
          <span className="text-[11px] text-zinc-400 tracking-wider uppercase font-medium mt-1">
            Software Engineering
          </span>
        </div>
      )}
    </div>
  );
}
