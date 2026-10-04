import React, { useState } from 'react';
import { 
  Users, 
  Layers, 
  Code2, 
  MessageSquare, 
  ShieldCheck, 
  Headphones, 
  Check, 
  X, 
  Sparkles, 
  Award,
  Zap,
  Lock
} from 'lucide-react';

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState('pillars'); // 'pillars' or 'comparison'

  const pillars = [
    {
      icon: Users,
      title: "Experienced Engineering",
      metric: "Senior-Led Teams",
      description: "No junior-only handoffs. Your software is architected and built by engineers with proven track records in high-throughput enterprise systems.",
      accent: "from-blue-500/20 to-indigo-500/10",
      border: "border-blue-500/30"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      metric: "10x Growth Ready",
      description: "Engineered from day one to handle non-linear traffic surges. We design modular services, clean domain boundaries, and resilient caching layers.",
      accent: "from-indigo-500/20 to-purple-500/10",
      border: "border-indigo-500/30"
    },
    {
      icon: Code2,
      title: "Clean & Maintainable Code",
      metric: "Zero Tech Debt Mandate",
      description: "Strict linting, automated testing suites, and Domain-Driven Design ensure your team can comfortably maintain and extend the codebase for years to come.",
      accent: "from-purple-500/20 to-pink-500/10",
      border: "border-purple-500/30"
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      metric: "Bi-Weekly Demos",
      description: "Direct Slack/Teams access to developers, bi-weekly live staging demonstrations, clear sprint burndowns, and zero hidden technical surprises.",
      accent: "from-emerald-500/20 to-cyan-500/10",
      border: "border-emerald-500/30"
    },
    {
      icon: ShieldCheck,
      title: "Security & Performance",
      metric: "SOC2 & OWASP Aligned",
      description: "Sub-50ms API latency targets, cryptographic data encryption at rest and in transit, least-privilege IAM, and automated vulnerability scanning in every PR.",
      accent: "from-amber-500/20 to-rose-500/10",
      border: "border-amber-500/30"
    },
    {
      icon: Headphones,
      title: "Long-Term Support",
      metric: "24/7 SLA Backing",
      description: "We don't abandon you at launch. Comprehensive technical documentation, knowledge transfer sessions, and ongoing SLA maintenance agreements.",
      accent: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30"
    }
  ];

  const comparisonData = [
    {
      metric: "Automated Test Coverage",
      vektor: "90%+ Unit, Integration & E2E Suites",
      others: "Sparse or manual ad-hoc testing (<30%)",
      advantage: true
    },
    {
      metric: "Deployment Cadence",
      vektor: "Automated CI/CD with zero-downtime blue/green releases",
      others: "Manual FTP/SSH uploads with downtime windows",
      advantage: true
    },
    {
      metric: "Code & Architecture Docs",
      vektor: "Full Architecture Decision Records (ADRs) & OpenAPI specs",
      others: "Sparse comments, unmaintainable spaghetti",
      advantage: true
    },
    {
      metric: "IP & Code Ownership",
      vektor: "100% Client ownership with zero proprietary lock-in",
      others: "Proprietary wrappers or licensing dependencies",
      advantage: true
    },
    {
      metric: "Developer Communication",
      vektor: "Direct access to lead engineers via Slack / bi-weekly demos",
      others: "Layers of non-technical account managers",
      advantage: true
    },
    {
      metric: "Security Auditing",
      vektor: "Automated Dependabot, SonarQube & OWASP Top 10 scans in CI",
      others: "Discovered only after deployment breach",
      advantage: true
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      
      {/* Background Vite-style radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Choose Vektor Software</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology Built Around Your Business
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            We operate as an elite engineering force, combining technical rigor with pragmatic business velocity so your investment generates lasting enterprise value.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'pillars'
                  ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Core Engineering Pillars
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'comparison'
                  ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Vektor vs. Agency Standard</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono">
                Benchmark
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Engineering Pillars Grid */}
        {activeTab === 'pillars' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl p-7 bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:${pillar.border} transition-all duration-300 flex flex-col justify-between card-hover-effect`}
                >
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800/80 text-indigo-400">
                        {pillar.metric}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom subtle indicator */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Engineering Guarantee</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Enforced
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Comparison Benchmark Table */}
        {activeTab === 'comparison' && (
          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-zinc-900/90 border-b border-zinc-800 text-xs font-mono uppercase text-zinc-400">
                    <th className="py-4 px-6">Evaluation Parameter</th>
                    <th className="py-4 px-6 text-indigo-400 font-bold bg-indigo-500/5 border-x border-zinc-800">
                      Vektor Software Standard
                    </th>
                    <th className="py-4 px-6 text-zinc-400">Typical Outsource Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 font-sans">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-900/60 transition-colors">
                      <td className="py-4 px-6 font-medium text-white">
                        {row.metric}
                      </td>
                      <td className="py-4 px-6 text-zinc-200 font-medium bg-indigo-500/5 border-x border-zinc-800">
                        <div className="flex items-center gap-2 text-indigo-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{row.vektor}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-zinc-400">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-rose-500/80 shrink-0" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-zinc-900/80 border-t border-zinc-800 text-center text-xs text-zinc-400 font-mono">
              All engineering practices are codified into our GitHub Actions continuous integration pipelines.
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
