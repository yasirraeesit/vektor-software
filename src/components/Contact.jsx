import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact({ initialMessage = '', initialProjectType = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialProjectType || 'Custom Software Development',
    budget: '$25,000 - $50,000',
    message: initialMessage || ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
    if (initialProjectType) {
      setFormData(prev => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialMessage, initialProjectType]);

  const projectTypeOptions = [
    'Custom Software Development',
    'Web Application / SaaS',
    'Mobile App Development',
    'Backend & API Development',
    'Enterprise ERP / Business Systems',
    '.NET / ASP.NET Modernization',
    'Cloud Architecture & DevOps',
    'Dedicated Engineering Team'
  ];

  const budgetOptions = [
    '< $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us briefly about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission with realistic latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Custom Software Development',
      budget: '$25,000 - $50,000',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      
      {/* Background Vite-style ambient gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct Project Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Ready to discuss your product roadmap? Share your requirements and our engineering leadership will respond within 24 hours with architectural feedback and scope estimates.
          </p>
        </div>

        {/* Contact Layout: Form + Information Sidebar */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-zinc-900/50 p-6 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl backdrop-blur-xl text-left">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Inquiry Received Successfully!
                </h3>

                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Our Lead Architect has been notified and will review your technical scope within 24 business hours.
                </p>

                <div className="pt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 max-w-sm mx-auto">
                  Reference Ticket: <span className="text-indigo-400 font-semibold">VKTR-{(Math.random() * 90000 + 10000).toFixed(0)}</span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.name ? 'border-rose-500/70 ring-1 ring-rose-500/40' : 'border-zinc-800'
                      }`}
                    />
                    {errors.name && (
                      <span className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.email ? 'border-rose-500/70 ring-1 ring-rose-500/40' : 'border-zinc-800'
                      }`}
                    />
                    {errors.email && (
                      <span className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Company & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp, Inc."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    >
                      {projectTypeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-zinc-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Budget Range selector pills */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                    Estimated Budget Tier
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2 px-3 rounded-xl text-xs font-mono transition-all border ${
                          formData.budget === tier
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200 font-semibold'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Project Requirements / Challenge <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, tech stack preferences, anticipated user scale, or existing bottlenecks..."
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                      errors.message ? 'border-rose-500/70 ring-1 ring-rose-500/40' : 'border-zinc-800'
                    }`}
                  />
                  {errors.message && (
                    <span className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Encrypting & Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Mutual NDA protected
                  </span>
                  <span>Zero Spam Guarantee</span>
                </div>

              </form>
            )}

          </div>

          {/* Direct Details Sidebar */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Direct Communication Channels
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">Direct Email</div>
                    <a 
                      href="mailto:contact@vektorsoftware.com" 
                      className="text-white hover:text-indigo-300 font-medium transition-colors"
                    >
                      contact@vektorsoftware.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">Direct Phone</div>
                    <a 
                      href="tel:+18004928321" 
                      className="text-white hover:text-indigo-300 font-medium transition-colors font-mono"
                    >
                      +1 (800) 492-8321
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">Engineering HQ</div>
                    <p className="text-zinc-300">
                      750 Innovation Way, Suite 400<br />
                      Tech Corridor, CA 94025
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="text-xs font-mono text-zinc-400 uppercase mb-3">
                  Developer Ecosystem
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Timezone & Availability Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <div className="text-xs font-mono text-zinc-400">Engineering Availability: Open</div>
                <div className="text-xs text-zinc-300 mt-0.5">
                  Average initial architecture review response time: <span className="text-emerald-400 font-semibold font-mono">under 4 hours</span>.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
