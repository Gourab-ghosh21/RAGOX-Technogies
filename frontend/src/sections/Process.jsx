import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { processSteps } from '../data/process';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(2); // 03 DESIGN default

  const current = processSteps[activeStep] || processSteps[0];

  return (
    <section id="process" className="py-32 border-b border-[rgba(255,255,255,0.08)] bg-[#07080a] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 03 METHODOLOGY"
          title="FROM IDEA TO IMPACT"
          subtitle="A structured, transparent delivery framework engineered to transform ambitious ideas into durable digital reality."
        />

        {/* 5-Stage Stepper Navigation Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-[12px] border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0f1422] border-[rgba(0,102,255,0.5)] shadow-[0_4px_24px_rgba(0,102,255,0.15)]'
                      : 'bg-[#090b10] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.16)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#0066ff]' : 'text-[#6e7686]'}`}>
                      {step.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]"></span>
                    )}
                  </div>
                  <div className={`font-mono text-xs uppercase tracking-wider font-bold ${isActive ? 'text-[#f4f5f8]' : 'text-[#8b93a2]'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Stage Showcase Card */}
        <div className="w-full bg-[#0b0e14] border border-[rgba(0,102,255,0.35)] rounded-[22px] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="pill-badge pill-blue">
                STAGE {current.step} OF 05 // {current.highlight}
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f4f5f8]">
                {current.title}
              </h3>

              <p className="text-lg text-[#0066ff] font-medium">
                {current.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#9aa1b0] leading-relaxed">
                {current.description}
              </p>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-[6px] bg-[#10141f] border border-[rgba(255,255,255,0.1)] text-xs font-mono uppercase text-[#c5c9d4] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  PREVIOUS
                </button>
                <button
                  type="button"
                  disabled={activeStep === processSteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-[6px] bg-[#0066ff] hover:bg-[#1a75ff] text-xs font-mono uppercase text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  NEXT STAGE
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#0f131c] rounded-[16px] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6e7686] block">
                CORE ACTIVITIES &amp; MILESTONES
              </span>

              <div className="space-y-3">
                {current.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-[8px] bg-[#090c12] border border-[rgba(255,255,255,0.05)]"
                  >
                    <CheckCircle2 size={16} className="text-[#0066ff] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#d4d8e3] leading-relaxed">{act}</span>
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
