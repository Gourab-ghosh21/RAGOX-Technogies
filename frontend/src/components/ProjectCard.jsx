import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPreviewVisual } from './ProjectPreviewVisual';

export const ProjectCard = ({ project, onSelect, index }) => {
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative w-full glass-card hover:bg-slate-900/60 rounded-[22px] p-6 sm:p-10 lg:p-12 transition-all duration-300 ease-out">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Editorial Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs sm:text-sm text-sky-400 font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
              {formattedNumber} // {project.category}
            </span>
            <span className="font-mono text-xs text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-100 group-hover:text-white transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed">
            {project.description}
          </p>

          {/* Services Rendered */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              SCOPE &amp; SERVICES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-200 group-hover:text-sky-400 transition-colors cursor-pointer py-2"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Right Column: Huge Visual Composition with Glass Border Frame */}
        <div
          onClick={() => onSelect(project)}
          className="lg:col-span-7 h-[300px] sm:h-[380px] lg:h-[420px] rounded-[18px] overflow-hidden border border-white/[0.09] group-hover:border-sky-400/40 transition-all cursor-pointer relative shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md"
        >
          <ProjectPreviewVisual projectId={project.id} />
          <div className="absolute inset-0 bg-transparent group-hover:bg-sky-400/[0.03] transition-colors pointer-events-none" />
        </div>
      </div>
    </article>
  );
};

