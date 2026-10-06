import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const About = () => {
  const pillars = [
    {
      title: 'ENGINEERING PRECISION',
      description:
        'Clean, modular, and type-safe architectures built for longevity, performance, and frictionless scaling.',
    },
    {
      title: 'DESIGN CRAFT',
      description:
        'Typography, spacing, layout hierarchy, and micro-interactions treated with deliberate aesthetic rigor.',
    },
    {
      title: 'DIRECT SENIOR PARTNERSHIP',
      description:
        'Collaborate directly with the creators building your product. No account managers, no communication silos.',
    },
    {
      title: 'PRACTICAL INNOVATION',
      description:
        'Harnessing modern web technologies and AI integrations to solve genuine business challenges.',
    },
  ];

  return (
    <section id="about" className="py-32 border-b border-[rgba(255,255,255,0.08)] bg-[#07080a] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 04 STUDIO PHILOSOPHY"
          title="SMALL TEAM. BIG DIGITAL THINKING."
          subtitle="We believe the most durable digital experiences happen when engineering discipline and design craft operate without compromise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Architectural Visual Composition */}
          <div className="lg:col-span-5">
            <div className="rounded-[22px] overflow-hidden bg-[#0c0f16] border border-[rgba(255,255,255,0.1)] p-8 sm:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)] space-y-6">
              {/* Geometric Modern Architecture Visual */}
              <div className="w-full h-48 rounded-[14px] bg-gradient-to-br from-[#121724] to-[#070a10] border border-[rgba(255,255,255,0.08)] relative overflow-hidden flex items-center justify-center">
                <svg
                  className="w-full h-full opacity-70"
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 200L160 50L240 120L400 0" stroke="#f4f5f8" strokeWidth="2" />
                  <path d="M40 200L180 80L270 150L400 40" stroke="#0066ff" strokeWidth="2" strokeOpacity="0.8" />
                  <line x1="160" y1="50" x2="160" y2="200" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                  <line x1="240" y1="120" x2="240" y2="200" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                </svg>

                <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[#7d8594] tracking-widest uppercase">
                  ARCHITECTURAL FORM // REGOX STUDIO
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#9aa1b0]">
                <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-2.5">
                  <span>DISCIPLINE</span>
                  <span className="text-[#f4f5f8] font-bold">DESIGN × CODE × AI</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-2.5">
                  <span>STRUCTURE</span>
                  <span className="text-[#f4f5f8] font-bold">SENIOR-ONLY STUDIO</span>
                </div>
                <div className="flex justify-between">
                  <span>ENGAGEMENT</span>
                  <span className="text-[#0066ff] font-bold">HIGH-IMPACT DIGITAL PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & 4 Core Tenets */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#9aa1b0] leading-relaxed">
              <p>
                REGOX is an independent technology agency built for ambitious businesses that prioritize craftsmanship. We do not produce disposable templates or layer generic AI gimmicks over fragile foundations.
              </p>
              <p>
                We approach every engagement as an architectural challenge: understanding business workflows, establishing robust typographical hierarchies, and writing maintainable code that scales seamlessly.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[14px] bg-[#0c0e15] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,102,255,0.4)] transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]"></span>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#f4f5f8]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#8c94a4] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
