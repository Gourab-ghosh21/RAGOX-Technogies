import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight, ArrowUpRight, Layers, Code2, ShieldAlert, Cpu } from 'lucide-react';
import { ProjectPreviewVisual } from './ProjectPreviewVisual';

export const CaseStudyModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Glass Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#05070e]/92 backdrop-blur-2xl border border-white/[0.12] rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] overflow-hidden flex flex-col z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-400/25">
              {project.category}
            </span>
            <span className="text-slate-600 text-sm">•</span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 space-y-10 custom-scrollbar">
          {/* Top Title Section */}
          <div className="space-y-3">
            <h3 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              {project.subtitle}
            </p>
            <p className="text-base text-slate-300/85 max-w-3xl leading-relaxed">{project.description}</p>
          </div>

          {/* Interactive UI Preview Box with Glass Border */}
          <div className="w-full min-h-[260px] sm:h-[320px] rounded-[18px] overflow-hidden border border-white/[0.09] bg-slate-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <ProjectPreviewVisual projectId={project.id} />
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-white/[0.08] gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-sky-400 border-b-2 border-sky-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Methodology &amp; Architecture
            </button>
            <button
              onClick={() => setActiveTab('deliverables')}
              className={`pb-3 font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'deliverables'
                  ? 'text-sky-400 border-b-2 border-sky-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Deliverables &amp; Tech Stack
            </button>
          </div>

          {/* Tab 1: 5-Stage Project Flow as Glass Cards */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] space-y-2">
                  <div className="font-mono text-[11px] text-sky-400 font-bold">01 // CHALLENGE</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] space-y-2">
                  <div className="font-mono text-[11px] text-sky-400 font-bold">02 // STRATEGY</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.strategy}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] space-y-2">
                  <div className="font-mono text-[11px] text-sky-400 font-bold">03 // DESIGN</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.design}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] space-y-2">
                  <div className="font-mono text-[11px] text-sky-400 font-bold">04 // DEVELOPMENT</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.development}</p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/30 to-slate-900/50 backdrop-blur-sm border border-sky-400/35 space-y-2 shadow-[0_0_16px_rgba(56,189,248,0.15)]">
                  <div className="font-mono text-[11px] text-sky-300 font-bold">05 // OUTCOME</div>
                  <p className="text-xs text-slate-200 leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-white/[0.025] backdrop-blur-md border border-white/[0.06]">
                <div className="font-mono text-xs uppercase text-slate-400 mb-2 tracking-wider">PROJECT SUMMARY</div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.overview}</p>
              </div>
            </div>
          )}

          {/* Tab 2: Deliverables & Stack */}
          {activeTab === 'deliverables' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4">DELIVERABLES INCLUDED</h4>
                <div className="space-y-3">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4">TECHNOLOGIES &amp; METHODS</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4">SERVICES RENDERED</h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/25 text-sky-300"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-t border-white/[0.08] bg-white/[0.02]">
          <Link
            to={`/work/${project.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-white transition-colors"
          >
            <span>OPEN DEDICATED CASE STUDY URL</span>
            <ArrowUpRight size={13} />
          </Link>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20"
          >
            DISCUSS A SIMILAR PROJECT <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

