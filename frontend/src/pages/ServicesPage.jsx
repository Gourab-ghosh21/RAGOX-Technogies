import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cpu, Layout, Code, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';

const serviceIcons = {
  '01': Code,
  '02': Layout,
  '03': Layers,
  '04': Sparkles,
  '05': Cpu,
  '06': ShieldCheck,
};

export const ServicesPage = () => {
  return (
    <div className="container-custom">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // CORE DISCIPLINES & CAPABILITIES
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
          ENGINEERING & DESIGN SERVICES
        </h1>
        <p className="text-slate-300/85 text-base sm:text-lg leading-relaxed max-w-2xl">
          Comprehensive digital capabilities tailored for technology companies, SaaS ventures, and ambitious studios. We unite architectural rigor with visual precision.
        </p>
      </div>

      {/* Services Grid: Semi-Transparent Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => {
          const IconComponent = serviceIcons[service.number] || Code;
          return (
            <div
              key={service.number}
              className="group rounded-[22px] glass-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-sky-400 font-bold tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25">
                    {service.number} // SERVICE
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-slate-400 group-hover:text-sky-400 group-hover:bg-sky-500/15 border border-white/[0.06] transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <IconComponent size={20} />
                  </div>
                </div>

                <h2 className="text-xl font-bold uppercase tracking-tight text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h2>

                <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                  {service.fullDescription || service.shortDescription}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-2">
                    KEY DELIVERABLES:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-2">
                  TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA: Translucent Glass Card */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[24px] glass-card-static border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            // CUSTOM ENGAGEMENT
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            NEED A DEDICATED TECHNICAL SPRINT?
          </h3>
          <p className="text-slate-300/80 text-sm mt-1 max-w-lg">
            We offer modular service scopes tailored to your platform roadmap, from rapid MVP architecture to full-scale digital product development.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 shrink-0"
        >
          <span>REQUEST A SCOPE PROPOSAL</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;

