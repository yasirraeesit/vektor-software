import React from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert, 
  Lightbulb, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

export default function CaseStudyModal({ project, onClose, onStartProject }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          aria-label="Close case study details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Industry */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            {project.clientIndustry}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-300">
                {metric.value}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400">
              <ShieldAlert className="w-4 h-4" /> The Technical Challenge
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Lightbulb className="w-4 h-4" /> The Engineering Solution
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mt-6 space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Architecture Highlights
          </h4>
          <div className="space-y-2">
            {project.architectureHighlights.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
            Production Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close Case Study
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject(`Similar to ${project.title}`);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md shadow-indigo-500/25 transition-all"
          >
            <span>Build a Solution Like This</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
