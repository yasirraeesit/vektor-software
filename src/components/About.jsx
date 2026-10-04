import React from 'react';
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Users, 
  Award, 
  Sparkles, 
  CheckCircle,
  Code2,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function About({ onOpenContact }) {
  const stats = [
    { value: "50+", label: "Projects Delivered", sub: "Enterprise & High-Growth Startups" },
    { value: "15+", label: "Core Technologies", sub: "Modern Battle-Tested Stacks" },
    { value: "99.9%", label: "Uptime SLA Guarantee", sub: "High-Availability Infrastructure" },
    { value: "24/7", label: "Technical Support", sub: "Dedicated Incident Response" }
  ];

  const engineeringValues = [
    {
      title: "Pragmatic Engineering Over Hype",
      description: "We pick proven technologies that solve your business problem with minimal overhead—not whatever framework went viral yesterday."
    },
    {
      title: "Zero Technical Debt Culture",
      description: "Codebases must survive team turnover. We enforce automated tests, strict types, and Domain-Driven Design from commit one."
    },
    {
      title: "Transparent Sprint Velocity",
      description: "No opaque walls. You participate in bi-weekly demos, test features on staging branches, and review progress directly."
    },
    {
      title: "Radical System Ownership",
      description: "You retain 100% intellectual property, repository access, deployment credentials, and architectural blueprints with zero lock-in."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      
      {/* Background Vite-style ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[450px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            <span>Engineering Culture & Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            We Turn Complex Problems Into Simple Software.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            We are a dedicated team of software architects, distributed systems engineers, and product designers focused on building reliable, scalable, and maintainable software that solves real business problems.
          </p>
        </div>

        {/* Live Statistics Counter Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-left hover:border-zinc-700 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-bold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-zinc-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Engineering Values */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
          
          {/* Left: Engineering Manifesto */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
              <span>Code As An Asset, Not A Liability</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Built by engineers who care about what runs under the hood.
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Most software fails not from lack of ambition, but from undisciplined architecture. We bridge the gap between business objectives and technical implementation, avoiding unnecessary layers while ensuring the foundational systems are robust enough to scale 100x.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Whether you need to modernize a legacy enterprise monolith, construct an event-driven microservices backend, or build a consumer-facing application from scratch, our team operates with surgical discipline.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Engineering Team Consultation')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
              >
                <span>Talk with an Engineering Lead</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Core Engineering Values */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {engineeringValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
