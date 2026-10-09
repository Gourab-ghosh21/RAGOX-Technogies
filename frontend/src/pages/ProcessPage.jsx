import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/process';

export const ProcessPage = () => {
  return (
    <div className="container-custom">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // EXECUTION METHODOLOGY
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
          HOW WE ENGINEER DIGITAL PRODUCTS
        </h1>
        <p className="text-slate-300/85 text-base sm:text-lg leading-relaxed max-w-2xl">
          A disciplined, five-stage delivery framework engineered to minimize architectural ambiguity, prevent scope drift, and produce production-ready codebases with zero friction.
        </p>
      </div>

      {/* Process Timeline Steps: Semi-Transparent Glass Cards */}
      <div className="space-y-6 sm:space-y-8">
        {processSteps.map((step, idx) => (
          <div
            key={step.step}
            className="group rounded-[22px] glass-card p-6 sm:p-10 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Step indicator & title */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25">
                    PHASE {step.step}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    // {step.highlight}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-100 group-hover:text-white transition-colors mb-2">
                  {step.title}
                </h2>
                <div className="font-mono text-xs text-sky-400 font-medium">
                  {step.subtitle}
                </div>
              </div>

              {/* Step Description & Activities */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Activities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.06]">
                  {step.activities.map((activity, actIdx) => (
                    <div key={actIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA: Translucent Glass Card */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[24px] glass-card-static border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
            // READY TO COMMENCE
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            BEGIN PHASE 01 DISCOVERY
          </h3>
          <p className="text-slate-300/80 text-sm mt-1 max-w-lg">
            Let's structure your engineering objectives and begin phase 01 discovery this week.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 shrink-0"
        >
          <span>SCHEDULE DISCOVERY</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ProcessPage;

