import React from 'react';
import { ArrowRight, MessageSquare, Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function CtaSection({ onOpenContact, onTalkToTeam }) {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900 tech-grid-pattern">
      
      {/* Background Vite-like glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-amber-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glow-bordered Container */}
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800 shadow-2xl backdrop-blur-2xl text-center space-y-6 relative overflow-hidden">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Now Accepting Q2/Q3 2026 Engineering Partnerships</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have an Idea?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300">
              Let's Build It.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 leading-relaxed">
            Tell us what you're trying to build, and we'll help you turn it into a scalable digital product. From architecture blueprints to full-scale production deployment.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onTalkToTeam}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>Talk to Our Team</span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA Guaranteed
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Response within 24 Hours
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Free Technical Assessment
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
