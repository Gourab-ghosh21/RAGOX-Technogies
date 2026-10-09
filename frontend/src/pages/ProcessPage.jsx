import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/process';

export const ProcessPage = () => {
  return (
    <div className="container-custom">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] mb-3">
          // EXECUTION METHODOLOGY
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-6">
          HOW WE ENGINEER DIGITAL PRODUCTS
        </h1>
        <p className="text-[#9aa1b0] text-base sm:text-lg leading-relaxed max-w-2xl">
          A disciplined, five-stage delivery framework engineered to minimize architectural ambiguity, prevent scope drift, and produce production-ready codebases with zero friction.
        </p>
      </div>

      {/* Process Timeline Steps */}
      <div className="space-y-6 sm:space-y-8">
        {processSteps.map((step, idx) => (
          <div
            key={step.step}
            className="group rounded-[16px] bg-[rgba(14,16,21,0.65)] hover:bg-[rgba(18,22,30,0.85)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,102,255,0.4)] p-6 sm:p-10 transition-all duration-300 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Step indicator & title */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-[#0066ff] px-2.5 py-1 rounded bg-[rgba(0,102,255,0.12)] border border-[rgba(0,102,255,0.25)]">
                    PHASE {step.step}
                  </span>
                  <span className="font-mono text-xs text-[#6e7686]">
                    // {step.highlight}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#f4f5f8] group-hover:text-[#0066ff] transition-colors mb-2">
                  {step.title}
                </h2>
                <div className="font-mono text-xs text-[#0066ff] font-medium">
                  {step.subtitle}
                </div>
              </div>

              {/* Step Description & Activities */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <p className="text-[#9aa1b0] text-sm sm:text-base leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Activities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  {step.activities.map((activity, actIdx) => (
                    <div key={actIdx} className="flex items-start gap-2.5 text-xs text-[#8c94a4]">
                      <CheckCircle2 size={14} className="text-[#0066ff] shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[16px] bg-[rgba(14,16,21,0.7)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-2">
            // READY TO COMMENCE
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f4f5f8]">
            BEGIN PHASE 01 DISCOVERY
          </h3>
          <p className="text-[#8c94a4] text-sm mt-1 max-w-lg">
            Let's structure your engineering objectives and begin phase 01 discovery this week.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(0,102,255,0.35)] shrink-0"
        >
          <span>SCHEDULE DISCOVERY</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ProcessPage;
