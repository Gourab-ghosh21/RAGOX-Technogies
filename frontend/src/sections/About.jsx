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
    <section id="about" className="py-32 border-b border-white/[0.08] bg-[#05070e] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 04 STUDIO PHILOSOPHY"
          title="SMALL TEAM. BIG DIGITAL THINKING."
          subtitle="We believe the most durable digital experiences happen when engineering discipline and design craft operate without compromise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Glass Visual Architecture Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[24px] glass-card-static p-8 sm:p-10 space-y-6">
              {/* Geometric Modern Architecture Visual */}
              <div className="w-full h-48 rounded-[16px] bg-gradient-to-br from-slate-900/80 via-blue-950/20 to-slate-900/80 border border-white/[0.08] relative overflow-hidden flex items-center justify-center backdrop-blur-md">
                <svg
                  className="w-full h-full opacity-80"
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 200L160 50L240 120L400 0" stroke="#f8fafc" strokeWidth="2" />
                  <path d="M40 200L180 80L270 150L400 40" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.9" />
                  <line x1="160" y1="50" x2="160" y2="200" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                  <line x1="240" y1="120" x2="240" y2="200" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                </svg>

                <div className="absolute bottom-3 left-4 font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                  ARCHITECTURAL FORM // REGOX STUDIO
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                  <span className="text-slate-400">DISCIPLINE</span>
                  <span className="text-white font-bold">DESIGN × CODE × AI</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                  <span className="text-slate-400">STRUCTURE</span>
                  <span className="text-white font-bold">SENIOR-ONLY STUDIO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ENGAGEMENT</span>
                  <span className="text-sky-400 font-bold">HIGH-IMPACT DIGITAL PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & 4 Core Tenets in Glass Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-slate-300/85 leading-relaxed">
              <p>
                REGOX is an independent technology agency built for ambitious businesses that prioritize craftsmanship. We do not produce disposable templates or layer generic AI gimmicks over fragile foundations.
              </p>
              <p>
                We approach every engagement as an architectural challenge: understanding business workflows, establishing robust typographical hierarchies, and writing maintainable code that scales seamlessly.
              </p>
            </div>

            {/* Core Pillars as Transparent Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[18px] bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/[0.08] hover:border-sky-400/40 transition-all duration-300 space-y-2 shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_12px_32px_rgba(56,189,248,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-100">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
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

