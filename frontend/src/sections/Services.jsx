import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const activeService = services[hoveredIndex] || services[0];

  return (
    <section id="services" className="py-32 border-b border-[rgba(255,255,255,0.08)] bg-[#07080a] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 02 CAPABILITIES"
          title="WHAT WE DO"
          subtitle="An integrated suite of digital product design, web engineering and modern AI development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive List Rows */}
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
                  className={`group relative p-6 sm:p-8 rounded-[16px] border transition-all duration-300 cursor-pointer select-none focus:outline-none ${
                    isHovered
                      ? 'bg-[#0e1118] border-[rgba(0,102,255,0.5)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] translate-x-1'
                      : 'bg-[#090b10] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.16)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`font-mono text-base sm:text-lg font-bold transition-colors ${
                          isHovered ? 'text-[#0066ff]' : 'text-[#626a7a]'
                        }`}
                      >
                        {service.number}
                      </span>

                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight transition-colors ${
                          isHovered ? 'text-[#f4f5f8]' : 'text-[#a2aab8] group-hover:text-[#f4f5f8]'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      {isHovered && (
                        <span className="w-2 h-2 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]"></span>
                      )}
                      <ArrowRight
                        size={20}
                        className={`transition-transform duration-200 ${
                          isHovered
                            ? 'text-[#0066ff] translate-x-1'
                            : 'text-[#4e5564] group-hover:text-[#88909f]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Description becomes visible on hover/active or on mobile */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isHovered
                        ? 'max-h-40 opacity-100 mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]'
                        : 'max-h-0 opacity-0 lg:max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#9aa1b0] leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-3">
                      {service.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#cbd0dc]"
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

          {/* Right Column: Deep-Dive Preview Card */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="bg-[#0b0e14] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] space-y-8 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
                <span className="font-mono text-xs uppercase text-[#0066ff] font-bold">
                  CAPABILITY // {activeService.number}
                </span>
                <span className="font-mono text-xs text-[#6e7686]">SERVICE SPEC</span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-3">
                  {activeService.title}
                </h4>
                <p className="text-sm text-[#9aa1b0] leading-relaxed">
                  {activeService.fullDescription}
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#6e7686] block">
                  DELIVERABLES INCLUDED
                </span>
                <div className="space-y-2">
                  {activeService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-[#d1d5df] p-2.5 rounded-[8px] bg-[#0f131c] border border-[rgba(255,255,255,0.05)]"
                    >
                      <Check size={14} className="text-[#0066ff] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-[8px] bg-[#f4f5f8] hover:bg-white text-[#07080a] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 no-underline transition-colors"
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
