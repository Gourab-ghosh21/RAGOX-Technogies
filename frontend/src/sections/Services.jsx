import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const activeService = services[hoveredIndex] || services[0];

  return (
    <section id="services" className="py-32 border-b border-white/[0.08] bg-[#05070e] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 02 CAPABILITIES"
          title="WHAT WE DO"
          subtitle="An integrated suite of digital product design, web engineering and modern AI development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive List Rows as Glass Cards */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={service.number}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  onClick={() => setHoveredIndex(index)}
                  className={`group relative p-6 sm:p-8 rounded-[18px] border transition-all duration-300 cursor-pointer select-none focus:outline-none backdrop-blur-md ${
                    isHovered
                      ? 'bg-slate-900/75 border-sky-400/40 shadow-[0_12px_36px_rgba(56,189,248,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] translate-x-1'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.07] hover:border-white/[0.14] shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`font-mono text-base sm:text-lg font-bold transition-colors ${
                          isHovered ? 'text-sky-400' : 'text-slate-500'
                        }`}
                      >
                        {service.number}
                      </span>

                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight transition-colors ${
                          isHovered ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      {isHovered && (
                        <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
                      )}
                      <ArrowRight
                        size={20}
                        className={`transition-transform duration-200 ${
                          isHovered
                            ? 'text-sky-400 translate-x-1'
                            : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Description becomes visible on hover/active or on mobile */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isHovered
                        ? 'max-h-40 opacity-100 mt-4 pt-4 border-t border-white/[0.08]'
                        : 'max-h-0 opacity-0 lg:max-h-0'
                    }`}
                  >
                    <p className="text-sm text-slate-300/85 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-3">
                      {service.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
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

          {/* Right Column: Deep-Dive Preview Glass Card */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="glass-card-static rounded-[22px] p-8 sm:p-10 space-y-8 relative overflow-hidden border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs uppercase text-sky-400 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
                  CAPABILITY // {activeService.number}
                </span>
                <span className="font-mono text-xs text-slate-400">SERVICE SPEC</span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-100 mb-3">
                  {activeService.title}
                </h4>
                <p className="text-sm text-slate-300/85 leading-relaxed">
                  {activeService.fullDescription}
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                  DELIVERABLES INCLUDED
                </span>
                <div className="space-y-2">
                  {activeService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
                    >
                      <Check size={14} className="text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 no-underline transition-all shadow-[0_4px_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20"
                >
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

