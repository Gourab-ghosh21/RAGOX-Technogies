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
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c0e14] border border-[rgba(255,255,255,0.12)] rounded-[18px] shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(255,255,255,0.08)] bg-[#090b10]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[rgba(0,102,255,0.12)] text-[#0066ff] border border-[rgba(0,102,255,0.3)]">
              {project.category}
            </span>
            <span className="text-[#646c7d] text-sm">•</span>
            <span className="font-mono text-xs text-[#9aa1b0] uppercase tracking-wider">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] text-[#9aa1b0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 space-y-10 custom-scrollbar">
          {/* Top Title Section */}
          <div className="space-y-3">
            <h3 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f4f5f8]">
              {project.title}
            </h3>
            <p className="text-lg sm:text-xl text-[#0066ff] font-medium">{project.subtitle}</p>
            <p className="text-base text-[#9aa1b0] max-w-3xl leading-relaxed">{project.description}</p>
          </div>

          {/* Interactive UI Preview Box */}
          <div className="w-full min-h-[260px] sm:h-[320px] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#07090e]">
            <ProjectPreviewVisual projectId={project.id} />
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[rgba(255,255,255,0.08)] gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-[#0066ff] border-b-2 border-[#0066ff]'
                  : 'text-[#858d9d] hover:text-[#f4f5f8]'
              }`}
            >
              Methodology &amp; Architecture
            </button>
            <button
              onClick={() => setActiveTab('deliverables')}
              className={`pb-3 font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'deliverables'
                  ? 'text-[#0066ff] border-b-2 border-[#0066ff]'
                  : 'text-[#858d9d] hover:text-[#f4f5f8]'
              }`}
            >
              Deliverables &amp; Tech Stack
            </button>
          </div>

          {/* Tab 1: 5-Stage Project Flow: CHALLENGE -> STRATEGY -> DESIGN -> DEVELOPMENT -> OUTCOME */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="p-4 rounded-[10px] bg-[#0f121a] border border-[rgba(255,255,255,0.06)] space-y-2">
                  <div className="font-mono text-[11px] text-[#0066ff] font-bold">01 // CHALLENGE</div>
                  <p className="text-xs text-[#a4abb8] leading-relaxed">{project.challenge}</p>
                </div>

                <div className="p-4 rounded-[10px] bg-[#0f121a] border border-[rgba(255,255,255,0.06)] space-y-2">
                  <div className="font-mono text-[11px] text-[#0066ff] font-bold">02 // STRATEGY</div>
                  <p className="text-xs text-[#a4abb8] leading-relaxed">{project.strategy}</p>
                </div>

                <div className="p-4 rounded-[10px] bg-[#0f121a] border border-[rgba(255,255,255,0.06)] space-y-2">
                  <div className="font-mono text-[11px] text-[#0066ff] font-bold">03 // DESIGN</div>
                  <p className="text-xs text-[#a4abb8] leading-relaxed">{project.design}</p>
                </div>

                <div className="p-4 rounded-[10px] bg-[#0f121a] border border-[rgba(255,255,255,0.06)] space-y-2">
                  <div className="font-mono text-[11px] text-[#0066ff] font-bold">04 // DEVELOPMENT</div>
                  <p className="text-xs text-[#a4abb8] leading-relaxed">{project.development}</p>
                </div>

                <div className="p-4 rounded-[10px] bg-[#0e1424] border border-[rgba(0,102,255,0.3)] space-y-2">
                  <div className="font-mono text-[11px] text-[#38bdf8] font-bold">05 // OUTCOME</div>
                  <p className="text-xs text-[#c2c8d6] leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="p-5 rounded-[12px] bg-[#090b10] border border-[rgba(255,255,255,0.06)]">
                <div className="font-mono text-xs uppercase text-[#7a8292] mb-2 tracking-wider">PROJECT SUMMARY</div>
                <p className="text-sm text-[#c5c9d4] leading-relaxed">{project.overview}</p>
              </div>
            </div>
          )}

          {/* Tab 2: Deliverables & Stack */}
          {activeTab === 'deliverables' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#7a8292] mb-4">DELIVERABLES INCLUDED</h4>
                <div className="space-y-3">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded bg-[#0f121a] border border-[rgba(255,255,255,0.05)]">
                      <CheckCircle2 size={16} className="text-[#0066ff] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#d4d8e3]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#7a8292] mb-4">TECHNOLOGIES &amp; METHODS</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1.5 rounded bg-[#10141f] border border-[rgba(255,255,255,0.1)] text-[#e2e5ec]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="font-mono text-xs uppercase tracking-wider text-[#7a8292] mb-4">SERVICES RENDERED</h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1.5 rounded bg-[rgba(0,102,255,0.08)] border border-[rgba(0,102,255,0.25)] text-[#60a5fa]"
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-t border-[rgba(255,255,255,0.08)] bg-[#090b10]">
          <Link
            to={`/work/${project.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0066ff] hover:text-white transition-colors"
          >
            <span>OPEN DEDICATED CASE STUDY URL</span>
            <ArrowUpRight size={13} />
          </Link>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0066ff] hover:bg-[#1a75ff] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            DISCUSS A SIMILAR PROJECT <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
