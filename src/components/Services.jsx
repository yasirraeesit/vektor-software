import React, { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  Server, 
  Layers, 
  ShieldCheck, 
  Palette, 
  Cloud, 
  Database, 
  ShoppingBag, 
  Briefcase, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { servicesData, serviceCategories } from '../data/services';
import ServiceDetailModal from './ServiceDetailModal';

// Icon mapping helper
const iconMap = {
  Cpu,
  Globe,
  Smartphone,
  Server,
  Layers,
  ShieldCheck,
  Palette,
  Cloud,
  Database,
  ShoppingBag,
  Briefcase,
  TrendingUp
};

export default function Services({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = activeCategory === "All Services"
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950/60 border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>End-to-End Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Build Better Software
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            From modern responsive web applications and resilient mobile apps to high-throughput cloud backends and enterprise ERP systems, we deliver end-to-end technical excellence.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-2">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-500'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Cpu;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative rounded-2xl p-6 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer card-hover-effect"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="text-[11px] font-mono font-medium text-zinc-400 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800/80">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Bar: Tech preview & Arrow */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800/60">
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 2 && (
                      <span className="text-[10px] font-mono text-zinc-400 px-1 py-0.5">
                        +{service.techStack.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all">
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-zinc-900 to-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white">
              Need a custom multi-disciplinary engineering solution?
            </h4>
            <p className="text-xs text-zinc-400">
              We frequently assemble cross-functional teams spanning frontend, distributed backend, and DevOps.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Dedicated Team Inquiry')}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
          >
            <span>Consult an Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onStartProject={(serviceName) => onOpenContact(serviceName)}
        />
      )}
    </section>
  );
}
