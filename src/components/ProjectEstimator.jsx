import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  Cpu, 
  Clock, 
  Users, 
  ArrowRight, 
  Check, 
  Sparkles,
  Server,
  ShieldCheck
} from 'lucide-react';

export default function ProjectEstimator({ onExportToContact }) {
  const [projectType, setProjectType] = useState('web-app');
  const [scale, setScale] = useState('growth');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'auth',
    'api-integrations',
    'cloud-devops'
  ]);

  const projectTypes = [
    { id: 'web-app', label: 'Web Application / SaaS', baseWeeks: 6 },
    { id: 'custom-software', label: 'Custom Enterprise Software', baseWeeks: 8 },
    { id: 'mobile-app', label: 'Mobile App (iOS/Android)', baseWeeks: 7 },
    { id: 'backend-api', label: 'High-Throughput API Gateway', baseWeeks: 5 },
    { id: 'erp-suite', label: 'ERP & Business Operations', baseWeeks: 10 }
  ];

  const scaleOptions = [
    { id: 'mvp', label: 'MVP / Fast Launch', multiplier: 1.0, team: '2-3 Senior Engineers' },
    { id: 'growth', label: 'Growth / Scalable Production', multiplier: 1.3, team: '3-4 Engineers + DevOps' },
    { id: 'enterprise', label: 'Enterprise / High Compliance', multiplier: 1.7, team: 'Lead Architect + 5 Engineers' }
  ];

  const featureOptions = [
    { id: 'auth', label: 'OAuth2 / RBAC / SSO Auth', addedWeeks: 1 },
    { id: 'api-integrations', label: 'Third-Party & ERP Integrations', addedWeeks: 1.5 },
    { id: 'realtime', label: 'WebSockets & Live Telemetry', addedWeeks: 1.5 },
    { id: 'payments', label: 'Stripe / Multi-Currency Checkout', addedWeeks: 1 },
    { id: 'cloud-devops', label: 'Automated CI/CD & Terraform IaC', addedWeeks: 1 },
    { id: 'analytics', label: 'Executive Analytics & Reporting', addedWeeks: 1.5 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const selectedTypeObj = projectTypes.find(t => t.id === projectType) || projectTypes[0];
  const selectedScaleObj = scaleOptions.find(s => s.id === scale) || scaleOptions[1];
  
  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find(f => f.id === featId);
    return acc + (feat ? feat.addedWeeks : 0);
  }, 0);

  const totalEstimatedWeeks = Math.round((selectedTypeObj.baseWeeks + featureWeeks) * selectedScaleObj.multiplier);

  const handleSendToInquiry = () => {
    const summary = `Project Scope: ${selectedTypeObj.label} | Scale: ${selectedScaleObj.label} | Estimated Timeline: ~${totalEstimatedWeeks} weeks | Features: ${selectedFeatures.join(', ')}`;
    onExportToContact(summary, selectedTypeObj.label);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-zinc-950 border-t border-zinc-900 tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Project Configurator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate Your Project Scope & Architecture
          </h2>

          <p className="text-sm text-zinc-400">
            Select your platform requirements and architectural modules to get an immediate engineering scope projection.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-800 text-left space-y-6">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                1. Select Primary Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id)}
                    className={`p-3 text-left rounded-xl text-xs font-medium border transition-all ${
                      projectType === t.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white font-semibold'
                        : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Scale */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                2. Operational Scale & Compliance
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scaleOptions.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id)}
                    className={`p-3 text-left rounded-xl text-xs font-medium border transition-all ${
                      scale === s.id
                        ? 'bg-purple-600/20 border-purple-500 text-white font-semibold'
                        : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <div className="font-bold text-zinc-200">{s.label.split(' / ')[0]}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{s.label.split(' / ')[1]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Modules */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                3. Architectural Modules & Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map(f => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-3 rounded-xl text-xs font-medium flex items-center justify-between border transition-all text-left ${
                        isChecked
                          ? 'bg-zinc-900 border-indigo-500 text-white'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span>{f.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-zinc-700'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Projection Card (Right Side) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900/90 via-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-2xl text-left space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Engineering Estimation
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                Active Assessment
              </span>
            </div>

            {/* Timeline Metric */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase">Estimated Delivery Cadence</div>
                <div className="text-2xl font-extrabold text-white font-mono mt-0.5">
                  ~{totalEstimatedWeeks} Weeks
                  <span className="text-xs font-normal text-zinc-400 ml-2">({Math.ceil(totalEstimatedWeeks / 2)} Sprints)</span>
                </div>
              </div>
            </div>

            {/* Team Composition */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase">Recommended Pod Size</div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {selectedScaleObj.team}
                </div>
              </div>
            </div>

            {/* Summary Highlights */}
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Includes automated CI/CD pipelines & unit testing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Full source code IP ownership & zero vendor lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bi-weekly sprint demonstrations & staging deploys</span>
              </div>
            </div>

            {/* Transfer to Form Button */}
            <button
              onClick={handleSendToInquiry}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Transfer Scope to Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
