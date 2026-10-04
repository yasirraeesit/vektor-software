import React, { useState } from 'react';
import { 
  GitBranch, 
  Search, 
  Map, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Wrench, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { processStepsData } from '../data/processSteps';

const stepIcons = [Search, Map, Palette, Code2, Rocket];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processStepsData[activeStepIndex];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      
      {/* Background Vite glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
            <span>Structured Engineering Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Idea to Production
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A de-risked, predictable 5-stage software delivery methodology engineered to eliminate scope creep and accelerate reliable product launches.
          </p>
        </div>

        {/* Connected Horizontal Timeline (Desktop/Tablet) */}
        <div className="mt-14 relative hidden md:block">
          
          {/* Connector Line behind steps */}
          <div className="absolute top-7 left-12 right-12 h-[2px] bg-zinc-800 -z-0">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(activeStepIndex / (processStepsData.length - 1)) * 100}%` }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="relative z-10 grid grid-cols-5 gap-4">
            {processStepsData.map((step, idx) => {
              const Icon = stepIcons[idx] || Search;
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center group text-center focus:outline-none"
                >
                  {/* Circle Icon Badge */}
                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-110 border-2 border-indigo-400'
                        : isPast
                        ? 'bg-zinc-800 text-indigo-400 border border-zinc-700'
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Number & Name */}
                  <span className="mt-3 text-xs font-mono font-medium text-zinc-400">
                    Step {step.step}
                  </span>
                  <span className={`mt-0.5 text-sm font-bold transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    {step.phase}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Mobile Step Switcher */}
        <div className="mt-8 flex md:hidden overflow-x-auto pb-4 gap-2 no-scrollbar">
          {processStepsData.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-medium flex items-center gap-2 border transition-all ${
                activeStepIndex === idx
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800'
              }`}
            >
              <span>{step.step}.</span>
              <span>{step.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Inspector Panel */}
        <div className="mt-10 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 p-6 sm:p-8 text-left shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Phase Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Phase {activeStep.step} / 05
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Cadence: {activeStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {activeStep.details}
              </p>

              {/* Tools Used */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" /> Engineering & Collaboration Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Deliverables Checklist */}
            <div className="lg:col-span-5 bg-zinc-950/80 rounded-xl p-5 border border-zinc-800/80 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between pb-2 border-b border-zinc-800">
                <span>Phase Deliverables</span>
                <span className="text-emerald-400 text-[11px]">Milestone Sign-Off</span>
              </div>

              <div className="space-y-2.5">
                {activeStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-400 font-mono">
                ✓ Full client review & milestone demo before phase completion
              </div>
            </div>

          </div>

          {/* Step Navigation Controls */}
          <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
              disabled={activeStepIndex === 0}
              className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Phase
            </button>

            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Step {activeStepIndex + 1} of {processStepsData.length}
            </span>

            <button
              onClick={() => setActiveStepIndex(Math.min(processStepsData.length - 1, activeStepIndex + 1))}
              disabled={activeStepIndex === processStepsData.length - 1}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
            >
              <span>Next Phase</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
