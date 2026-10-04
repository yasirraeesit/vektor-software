import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Cpu, 
  Terminal, 
  Layers, 
  CheckCircle2,
  Sparkles,
  Server,
  Activity
} from 'lucide-react';
import { caseStudiesData, portfolioCategories } from '../data/caseStudies';
import CaseStudyModal from './CaseStudyModal';

export default function Portfolio({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? caseStudiesData
    : caseStudiesData.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-zinc-950/70 border-t border-zinc-900">
      
      {/* Background Vite gradient */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Proven Production Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Work
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A selection of mission-critical software platforms, enterprise APIs, and high-performance applications engineered for measurable business impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-2">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-500'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedCaseStudy(project)}
                className="group relative rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left cursor-pointer card-hover-effect"
              >
                <div>
                  {/* Technical Visual Header Mockup */}
                  <div className="h-44 bg-zinc-950 p-4 border-b border-zinc-800/80 flex flex-col justify-between relative overflow-hidden group-hover:bg-zinc-900/80 transition-colors">
                    {/* Background grid accent */}
                    <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

                    {/* Window Title Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                        <span className="text-[10px] font-mono text-zinc-500 ml-1.5 truncate max-w-[140px]">
                          {project.id}.prod
                        </span>
                      </div>

                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Architectural Graphic / Metrics Preview */}
                    <div className="relative z-10 py-2">
                      <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center gap-1">
                        <Activity className="w-3 h-3 text-emerald-400" />
                        <span>Key Production Impact:</span>
                      </div>
                      <div className="text-xl font-bold font-mono text-white tracking-tight flex items-baseline gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-300">
                          {project.metrics[0].value}
                        </span>
                        <span className="text-xs font-normal text-zinc-400">
                          {project.metrics[0].label}
                        </span>
                      </div>
                    </div>

                    {/* Mini architecture tags bar */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-zinc-900 pt-1.5">
                      <span>{project.clientIndustry}</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live SLA
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Secondary Metric Pill */}
                    <div className="mt-4 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400">{project.metrics[1].label}:</span>
                      <span className="text-indigo-400 font-bold">{project.metrics[1].value}</span>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-500 px-1 py-0.5">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCaseStudy(project);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 group-hover:text-white bg-zinc-950 group-hover:bg-purple-600/20 border border-zinc-800 group-hover:border-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-zinc-400">
            Have an enterprise architecture challenge with similar scale or performance needs?
          </p>
          <button
            onClick={() => onOpenContact('Enterprise Case Study Review')}
            className="mt-3 inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Request In-Depth Architecture Walkthrough</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onStartProject={(note) => onOpenContact(note)}
        />
      )}
    </section>
  );
}
