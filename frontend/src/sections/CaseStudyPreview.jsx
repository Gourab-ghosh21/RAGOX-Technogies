import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectPreviewVisual } from '../components/ProjectPreviewVisual';
import { ArrowRight } from 'lucide-react';

export const CaseStudyPreview = () => {
  const [activeStage, setActiveStage] = useState('outcome');

  const stages = [
    {
      id: 'challenge',
      title: 'CHALLENGE',
      summary:
        'Managing distributed compliance obligations across multiple regulatory frameworks manually resulted in fragmented audit trails, delayed policy updates, and excessive administrative friction.',
    },
    {
      id: 'strategy',
      title: 'STRATEGY',
      summary:
        'Architect an event-driven compliance engine consolidating multi-framework policy ingestion, continuous telemetry checks, and verifiable audit records into a high-density, centralized interface.',
    },
    {
      id: 'design',
      title: 'DESIGN',
      summary:
        'Created a distraction-free dark interface utilizing deep slate surfaces, high-contrast monospace status signals, contextual audit drawers, and zero visual clutter.',
    },
    {
      id: 'development',
      title: 'DEVELOPMENT',
      summary:
        'Built with a modular React frontend leveraging optimized virtualized data streams and an Express/Node.js event pipeline supporting real-time audit stream ingestion.',
    },
    {
      id: 'outcome',
      title: 'OUTCOME',
      summary:
        'Delivered a unified platform capable of monitoring active compliance frameworks concurrently, providing continuous audit verification and clear compliance traceability.',
    },
  ];

  return (
    <section id="casestudy" className="py-32 border-b border-[rgba(255,255,255,0.08)] bg-[#07080a] relative">
      <div className="container-custom">
        <SectionHeading
          badge="// 06 DEEP DIVE SHOWCASE"
          title="INFOTALLY CASE STUDY"
          subtitle="An inside look at how REGOX engineers high-density digital compliance software from discovery to launch."
        />

        <div className="bg-[#0b0e14] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-6 sm:p-10 lg:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.8)] space-y-12">
          {/* Project Meta Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[rgba(255,255,255,0.08)] pb-8">
            <div>
              <div className="font-mono text-xs uppercase text-[#0066ff] font-bold tracking-widest mb-2">
                ENTERPRISE SAAS // COMPLIANCE OBSERVABILITY
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#f4f5f8]">
                INFOTALLY
              </h3>
              <p className="text-base text-[#9aa1b0] mt-1 font-medium">Digital Compliance Platform</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-3 py-1.5 rounded-[6px] bg-[#111520] border border-[rgba(255,255,255,0.08)] text-[#cbd0dc]">
                React &amp; Vite
              </span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-[6px] bg-[#111520] border border-[rgba(255,255,255,0.08)] text-[#cbd0dc]">
                Node.js &amp; Express
              </span>
              <span className="font-mono text-xs px-3 py-1.5 rounded-[6px] bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.3)] text-[#60a5fa]">
                Full Delivery
              </span>
            </div>
          </div>

          {/* Large Live Dashboard Visual */}
          <div className="w-full h-[320px] sm:h-[420px] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
            <ProjectPreviewVisual projectId="infotally" />
          </div>

          {/* 5-Step Flow: CHALLENGE -> STRATEGY -> DESIGN -> DEVELOPMENT -> OUTCOME */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6e7686]">
                // DELIVERY ARCHITECTURE &amp; OUTCOME
              </span>
              <span className="font-mono text-xs text-[#0066ff]">FACTUAL TIMELINE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {stages.map((stage, idx) => {
                const isSelected = activeStage === stage.id;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(stage.id)}
                    className={`p-4 rounded-[12px] border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f1422] border-[rgba(0,102,255,0.5)] shadow-[0_4px_20px_rgba(0,102,255,0.15)]'
                        : 'bg-[#090b10] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.16)]'
                    }`}
                  >
                    <div className="font-mono text-[11px] font-bold mb-1.5 flex items-center justify-between">
                      <span className={isSelected ? 'text-[#0066ff]' : 'text-[#6e7686]'}>
                        0{idx + 1}
                      </span>
                      <span className={isSelected ? 'text-[#f4f5f8]' : 'text-[#8b93a2]'}>
                        {stage.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#9aa1b0] leading-relaxed line-clamp-3">
                      {stage.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detailed Active Stage Box */}
            <div className="p-6 rounded-[14px] bg-[#0d1018] border border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#0066ff] font-bold block mb-1">
                  STAGE // {activeStage.toUpperCase()}
                </span>
                <p className="text-sm text-[#d4d8e3] max-w-3xl leading-relaxed">
                  {stages.find((s) => s.id === activeStage)?.summary}
                </p>
              </div>

              <a
                href="#contact"
                className="shrink-0 px-5 py-3 rounded-[8px] bg-[#f4f5f8] hover:bg-white text-[#07080a] font-mono text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1.5 no-underline transition-colors"
              >
                <span>DISCUSS A SIMILAR PROJECT</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
