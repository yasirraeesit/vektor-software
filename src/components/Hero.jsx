import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Check, 
  Copy, 
  Play, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cpu, 
  Activity,
  Server,
  Code2
} from 'lucide-react';

export default function Hero({ onOpenContact, onExploreServices }) {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);
  const [simulationState, setSimulationState] = useState({
    isRunning: false,
    latency: '24ms',
    rps: '12,480',
    status: 'OPTIMAL'
  });

  const codeSnippet = `// Production-Grade Microservice Contract
import { defineService, z } from '@vektor/core';

export const OrderPipeline = defineService({
  name: 'enterprise-order-gateway',
  runtime: 'dotnet-isolated',
  concurrency: 50_000,
  
  schema: z.object({
    orderId: z.string().uuid(),
    tenantId: z.string(),
    amount: z.number().positive(),
    currency: z.enum(['USD', 'EUR', 'GBP']),
    auditIdempotencyKey: z.string()
  }),

  async handle(ctx, payload) {
    // Distributed Redis atomic lock & DB commit
    const lock = await ctx.cache.acquire(payload.orderId);
    const result = await ctx.db.orders.commit(payload);
    await ctx.events.publish('order.processed', result);
    return { status: 200, latencyMs: ctx.elapsed };
  }
});`;

  const deployLog = [
    { text: '$ vektor-cli deploy --env=production --cluster=us-east-1', type: 'cmd' },
    { text: '✓ Validating OpenAPI & gRPC schemas... passed (0 errors)', type: 'ok' },
    { text: '✓ Running test suite: 184 unit tests, 42 e2e tests... 100% pass', type: 'ok' },
    { text: '✓ Compiling ASP.NET Core & Next.js production binaries', type: 'info' },
    { text: '✓ Building multi-arch minimal OCI containers (distroless)', type: 'info' },
    { text: '✓ Rolling blue-green traffic switch: 0% -> 50% -> 100%', type: 'ok' },
    { text: '✓ Health check: p95 latency 24.2ms | 0 packet drop | SLA 99.999%', type: 'success' },
    { text: '→ Deployment active: https://api.vektorsoftware.com/v2', type: 'highlight' }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateTraffic = () => {
    setSimulationState(prev => ({ ...prev, isRunning: true }));
    setTimeout(() => {
      setSimulationState({
        isRunning: false,
        latency: `${Math.floor(18 + Math.random() * 12)}ms`,
        rps: `${Math.floor(14000 + Math.random() * 4000).toLocaleString()}`,
        status: 'SURGE HANDLED (0 DROPS)'
      });
    }, 700);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Background Vite-style ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-gradient-to-br from-amber-500/10 via-pink-500/10 to-transparent blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="font-mono text-zinc-400">v2026.4</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-200 font-medium">Enterprise Software & Digital Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We Build Software That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-300">
                Moves Businesses Forward.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              From scalable web and mobile applications to powerful APIs, cloud solutions, and custom software, we help businesses turn ideas into reliable digital products.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 flex items-center gap-3 text-xs text-zinc-400 border-t border-zinc-900">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Engineering scalable digital solutions for startups, growing businesses, and enterprises.
              </span>
            </div>

            {/* Key Micro Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-xl font-bold font-mono text-white">99.99%</div>
                <div className="text-[11px] text-zinc-400">Production Uptime</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-xl font-bold font-mono text-indigo-400">&lt; 40ms</div>
                <div className="text-[11px] text-zinc-400">P95 API Latency</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-xl font-bold font-mono text-emerald-400">Zero</div>
                <div className="text-[11px] text-zinc-400">Deployment Downtime</div>
              </div>
            </div>

          </div>

          {/* Right Column: Technical / Code Interface */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backdrop behind terminal */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75" />

            {/* Floating feature pills */}
            <div className="absolute -top-4 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono shadow-xl backdrop-blur-md animate-bounce-slight">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>CI/CD Pipeline: Verified Pass</span>
            </div>

            <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/95 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-xs text-zinc-400">vektor-core-engine</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'code' 
                        ? 'bg-zinc-800 text-indigo-300 font-medium' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    architecture.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('deploy')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'deploy' 
                        ? 'bg-zinc-800 text-indigo-300 font-medium' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    deploy.sh
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'telemetry' 
                        ? 'bg-zinc-800 text-indigo-300 font-medium' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    telemetry.json
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 font-mono text-xs text-left min-h-[320px] max-h-[380px] overflow-y-auto">
                {activeTab === 'code' && (
                  <div className="relative">
                    <div className="flex justify-between items-center pb-2 mb-2 border-b border-zinc-900 text-[10px] text-zinc-400">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Check className="w-3 h-3" /> TypeScript 5.8 Clean Architecture
                      </span>
                      <button 
                        onClick={handleCopy}
                        className="flex items-center gap-1 hover:text-zinc-200 p-1 rounded transition-colors"
                        title="Copy code"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
                      <code>{codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {activeTab === 'deploy' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-900 text-[10px] text-zinc-400">
                      <span className="text-indigo-400 font-mono">AUTOMATED DEPLOY RUNNER</span>
                      <span className="text-zinc-400">Runtime: Linux x64</span>
                    </div>
                    {deployLog.map((log, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] leading-relaxed">
                        {log.type === 'cmd' && <span className="text-indigo-400">{log.text}</span>}
                        {log.type === 'ok' && <span className="text-emerald-400">{log.text}</span>}
                        {log.type === 'info' && <span className="text-zinc-300">{log.text}</span>}
                        {log.type === 'success' && <span className="text-emerald-300 font-semibold">{log.text}</span>}
                        {log.type === 'highlight' && <span className="text-amber-300 underline underline-offset-2">{log.text}</span>}
                      </div>
                    ))}
                    <div className="pt-2 flex items-center gap-1 text-emerald-400">
                      <span>root@vektor-cluster:~$</span>
                      <span className="w-2 h-4 bg-emerald-400 inline-block animate-terminal-blink"></span>
                    </div>
                  </div>
                )}

                {activeTab === 'telemetry' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                      <span className="text-zinc-400 text-[10px]">LIVE CLUSTER TELEMETRY</span>
                      <button 
                        onClick={handleSimulateTraffic}
                        className="px-2 py-1 text-[10px] bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 rounded flex items-center gap-1 transition-all"
                      >
                        <Play className="w-2.5 h-2.5" /> Simulate Concurrency
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[10px] text-zinc-400 uppercase">Requests / Sec</div>
                        <div className="text-sm font-bold text-white mt-0.5">{simulationState.rps} req/s</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[10px] text-zinc-400 uppercase">p95 Latency</div>
                        <div className="text-sm font-bold text-emerald-400 mt-0.5">{simulationState.latency}</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[10px] text-zinc-400 uppercase">Memory Footprint</div>
                        <div className="text-sm font-bold text-white mt-0.5">384 MB (4 pods)</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[10px] text-zinc-400 uppercase">Cluster Status</div>
                        <div className="text-sm font-bold text-indigo-400 mt-0.5">{simulationState.status}</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400">
                      <div className="text-zinc-300 font-semibold mb-1">Architecture Highlights:</div>
                      <ul className="space-y-0.5 text-zinc-400 text-[10px]">
                        <li>• Multi-tenant tenant-level isolation via PostgreSQL schemas</li>
                        <li>• Zero-downtime blue/green deployment strategy</li>
                        <li>• Distributed trace propagation via OpenTelemetry</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom status bar of terminal */}
              <div className="px-4 py-2 bg-zinc-900/70 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Cluster: us-east-production</span>
                </div>
                <span>SSL/TLS 1.3 Active</span>
              </div>

            </div>

            {/* Bottom floating badge */}
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" /> C# / .NET 9 Core
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" /> React 19 + TypeScript
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-cyan-400" /> Cloud Native
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
