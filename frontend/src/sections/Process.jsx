import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { processSteps } from '../data/process';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(2); // 03 DESIGN default

  const current = processSteps[activeStep] || processSteps[0];

  return (
    <section id="process" className="py-32 border-b border-white/[0.08] bg-[#05070e] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 03 METHODOLOGY"
          title="FROM IDEA TO IMPACT"
          subtitle="A structured, transparent delivery framework engineered to transform ambitious ideas into durable digital reality."
        />

        {/* 5-Stage Stepper Navigation Bar: Glass Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-[16px] border text-left transition-all cursor-pointer backdrop-blur-md ${
                    isActive
                      ? 'bg-slate-900/80 border-sky-400/50 shadow-[0_8px_30px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] scale-[1.02]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.07] hover:border-white/[0.15] shadow-[0_4px_16px_rgba(0,0,0,0.2)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-sky-400' : 'text-slate-500'}`}>
                      {step.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
                    )}
                  </div>
                  <div className={`font-mono text-xs uppercase tracking-wider font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Stage Showcase Glass Card */}
        <div className="w-full glass-card-static rounded-[24px] p-8 sm:p-12 border border-sky-500/25 shadow-[0_24px_60px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="pill-badge pill-blue">
                STAGE {current.step} OF 05 // {current.highlight}
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
                {current.title}
              </h3>

              <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                {current.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed">
                {current.description}
              </p>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono uppercase text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  PREVIOUS
                </button>
                <button
                  type="button"
                  disabled={activeStep === processSteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-mono uppercase text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20"
                >
                  NEXT STAGE
                </button>
              </div>
            </div>

            {/* Inner Glass Card for activities */}
            <div className="lg:col-span-7 rounded-[18px] bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                CORE ACTIVITIES &amp; MILESTONES
              </span>

              <div className="space-y-3">
                {current.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.04] border border-white/[0.05] transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

