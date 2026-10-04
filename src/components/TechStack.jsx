import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal, 
  Layers, 
  ExternalLink, 
  CheckCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { technologiesData, techCategories } from '../data/technologies';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState(technologiesData[0]);

  const filteredTech = activeCategory === "All"
    ? technologiesData
    : technologiesData.filter(t => t.category === activeCategory);

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-zinc-950/80 border-t border-zinc-900 tech-dot-pattern">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Modern Production Tooling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies We Work With
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Battle-tested, enterprise-grade languages, frameworks, and cloud infrastructure engineered for velocity, fault-tolerance, and long-term stability.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-2">
          {techCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-zinc-100 text-zinc-950 shadow-md shadow-white/10 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Interactive Stack Layout: Cards Grid + Tech Inspector */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech?.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  className={`group relative p-4 rounded-xl text-left cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-zinc-900 border-indigo-500 shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500/50'
                      : 'bg-zinc-900/40 hover:bg-zinc-900/80 border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {tech.tag}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {tech.name}
                  </h3>

                  <div className="mt-1 text-[11px] text-zinc-400 truncate">
                    {tech.level}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Tech Inspector (Right Side) */}
          <div className="lg:col-span-5 sticky top-28">
            {selectedTech ? (
              <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl backdrop-blur-xl text-left space-y-5">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-indigo-400 tracking-wider">
                      {selectedTech.category} • {selectedTech.tag}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-0.5">
                      {selectedTech.name}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                    {selectedTech.level}
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Core Capability
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedTech.description}
                  </p>
                </div>

                {/* Use Case */}
                <div className="space-y-1.5 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Where We Implement This
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    {selectedTech.useCase}
                  </p>
                </div>

                {/* Highlight */}
                <div className="space-y-1.5 p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400" /> Production Benchmark
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-200 font-medium">
                    {selectedTech.highlight}
                  </p>
                </div>

                {/* Status Bar */}
                <div className="pt-2 text-[11px] font-mono text-zinc-400 flex items-center justify-between border-t border-zinc-800/60">
                  <span>Engineers Certified: 100% In-House</span>
                  <span className="text-emerald-400">Production Ready</span>
                </div>

              </div>
            ) : (
              <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-400 text-sm">
                Select any technology to view architectural specifications.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
