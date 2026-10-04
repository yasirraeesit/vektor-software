import React from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Mail, 
  ShieldCheck, 
  Heart,
  Activity
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import Logo from './Logo';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-left relative overflow-hidden">
      
      {/* Background Vite-style ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand Info & Status Pill */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-zinc-900">
          
          <Logo size="sm" />

          {/* Operational Status Pill */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Engineering Systems Operational</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-zinc-900">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); onOpenContact('Careers Inquiry'); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Careers</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300">
                    Hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Custom Software</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Web Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Mobile App Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Backend & API Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cloud & DevOps Solutions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Enterprise ERP Systems</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Selected Work & Portfolio</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">Technology Stack Guide</a>
              </li>
              <li>
                <a href="#home" className="hover:text-white transition-colors">Interactive Architecture</a>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed">Engineering Blog (Coming Soon)</span>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed">Whitepapers & ADRs</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-200" />
                  <span>GitHub Organization</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@vektorsoftware.com" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>contact@vektorsoftware.com</span>
                </a>
              </li>
              <li>
                <span className="text-zinc-500 font-mono text-[11px]">
                  HQ: 750 Innovation Way, CA
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div>
            © 2026 Vektor Software Systems. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-400 cursor-pointer">Security / SOC2 Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
