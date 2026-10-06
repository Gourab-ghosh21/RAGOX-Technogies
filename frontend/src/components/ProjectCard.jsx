import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPreviewVisual } from './ProjectPreviewVisual';

export const ProjectCard = ({ project, onSelect, index }) => {
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative w-full bg-[#0c0e15] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,102,255,0.45)] rounded-[22px] p-6 sm:p-10 lg:p-12 transition-all duration-300 ease-out shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Editorial Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm sm:text-base text-[#0066ff] font-bold tracking-widest uppercase">
              {formattedNumber} // {project.category}
            </span>
            <span className="font-mono text-xs text-[#6e7686]">{project.year}</span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#f4f5f8] group-hover:text-white transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#0066ff] font-medium">{project.subtitle}</p>
          </div>

          <p className="text-sm sm:text-base text-[#9aa1b0] leading-relaxed">
            {project.description}
          </p>

          {/* Services Rendered */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6e7686] block">
              SCOPE &amp; SERVICES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-3 py-1.5 rounded-[6px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#c5c9d4]"
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
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#f4f5f8] group-hover:text-[#0066ff] transition-colors cursor-pointer py-2"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0066ff]" />
            </button>
          </div>
        </div>

        {/* Right Column: Huge Visual Composition */}
        <div
          onClick={() => onSelect(project)}
          className="lg:col-span-7 h-[300px] sm:h-[380px] lg:h-[420px] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(0,102,255,0.35)] transition-all cursor-pointer relative shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
        >
          <ProjectPreviewVisual projectId={project.id} />
          <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(0,102,255,0.03)] transition-colors pointer-events-none" />
        </div>
      </div>
    </article>
  );
};
