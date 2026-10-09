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
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] mb-3">
          // CORE DISCIPLINES & CAPABILITIES
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-6">
          ENGINEERING & DESIGN SERVICES
        </h1>
        <p className="text-[#9aa1b0] text-base sm:text-lg leading-relaxed max-w-2xl">
          Comprehensive digital capabilities tailored for technology companies, SaaS ventures, and ambitious studios. We unite architectural rigor with visual precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => {
          const IconComponent = serviceIcons[service.number] || Code;
          return (
            <div
              key={service.number}
              className="group rounded-[14px] bg-[rgba(14,16,21,0.65)] hover:bg-[rgba(18,22,30,0.85)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,102,255,0.4)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#0066ff] font-bold tracking-widest px-2.5 py-1 rounded bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.25)]">
                    {service.number} // SERVICE
                  </span>
                  <div className="p-2.5 rounded-lg bg-[rgba(255,255,255,0.04)] text-[#8c94a4] group-hover:text-[#0066ff] group-hover:bg-[rgba(0,102,255,0.12)] transition-colors">
                    <IconComponent size={20} />
                  </div>
                </div>

                <h2 className="text-xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-3 group-hover:text-[#0066ff] transition-colors">
                  {service.title}
                </h2>

                <p className="text-[#8c94a4] text-sm leading-relaxed mb-6">
                  {service.fullDescription || service.shortDescription}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#6e7686] mb-2">
                    KEY DELIVERABLES:
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#9aa1b0]">
                      <CheckCircle2 size={13} className="text-[#0066ff] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#6e7686] mb-2">
                  TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[rgba(255,255,255,0.04)] text-[#7e8799] border border-[rgba(255,255,255,0.06)]"
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

      {/* Bottom CTA */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[16px] bg-[rgba(14,16,21,0.7)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-2">
            // CUSTOM ENGAGEMENT
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f4f5f8]">
            NEED A DEDICATED TECHNICAL SPRINT?
          </h3>
          <p className="text-[#8c94a4] text-sm mt-1 max-w-lg">
            We offer modular service scopes tailored to your platform roadmap, from rapid MVP architecture to full-scale digital product development.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(0,102,255,0.35)] shrink-0"
        >
          <span>REQUEST A SCOPE PROPOSAL</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
