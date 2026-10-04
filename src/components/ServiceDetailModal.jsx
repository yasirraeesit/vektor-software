import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onStartProject }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
          <span>{service.category}</span>
          <span>•</span>
          <span>Engineering Practice</span>
        </div>

        {/* Header */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Key Highlight Banner */}
        <div className="mt-5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm text-zinc-300 font-medium">
            {service.highlight}
          </span>
        </div>

        {/* Deliverables List */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Core Technical Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
            Associated Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject(service.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md shadow-indigo-500/25 transition-all"
          >
            <span>Request Proposal for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
