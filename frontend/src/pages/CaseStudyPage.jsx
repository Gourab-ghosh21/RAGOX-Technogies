import React from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectPreviewVisual } from '../components/ProjectPreviewVisual';

export const CaseStudyPage = () => {
  const params = useParams();
  const location = useLocation();
  const slug = params.slug || location.pathname.split('/').filter(Boolean).pop();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next project for circular navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="container-custom">
      {/* Top Breadcrumb Navigation */}
      <div className="mb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8c94a4] hover:text-[#0066ff] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0066ff] px-2.5 py-1 rounded bg-[rgba(0,102,255,0.12)] border border-[rgba(0,102,255,0.25)]">
            {project.category}
          </span>
          <span className="font-mono text-xs text-[#6e7686]">
            // {project.year} CASE STUDY
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-4">
          {project.title}
        </h1>
        <div className="font-mono text-base sm:text-lg text-[#0066ff] mb-6">
          {project.subtitle}
        </div>
        <p className="text-[#9aa1b0] text-base sm:text-xl leading-relaxed max-w-3xl">
          {project.overview || project.description}
        </p>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2 pt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[rgba(255,255,255,0.04)] text-[#9aa1b0] border border-[rgba(255,255,255,0.08)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Visual Showcase */}
      <div className="mb-16 sm:mb-20 rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#090c12] aspect-[16/9] shadow-[0_12px_48px_rgba(0,0,0,0.6)] relative">
        <ProjectPreviewVisual projectId={project.id} />
      </div>

      {/* 5-Phase Case Study Narrative: CHALLENGE → STRATEGY → DESIGN → DEVELOPMENT → OUTCOME */}
      <div className="max-w-4xl mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-6">
          // ARCHITECTURAL NARRATIVE
        </div>

        <div className="space-y-8">
          {/* 1. CHALLENGE */}
          <div className="rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066ff] mb-3">
              <span>01</span>
              <span>// THE CHALLENGE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-3">
              PROBLEM STATEMENT & COMPLEXITY
            </h2>
            <p className="text-[#9aa1b0] text-sm sm:text-base leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* 2. STRATEGY */}
          <div className="rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066ff] mb-3">
              <span>02</span>
              <span>// THE STRATEGY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-3">
              SYSTEM ARCHITECTURE & ROADMAP
            </h2>
            <p className="text-[#9aa1b0] text-sm sm:text-base leading-relaxed">
              {project.strategy}
            </p>
          </div>

          {/* 3. DESIGN */}
          <div className="rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066ff] mb-3">
              <span>03</span>
              <span>// THE DESIGN</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-3">
              INTERFACE ERGONOMICS & DESIGN SYSTEM
            </h2>
            <p className="text-[#9aa1b0] text-sm sm:text-base leading-relaxed">
              {project.design}
            </p>
          </div>

          {/* 4. DEVELOPMENT */}
          <div className="rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066ff] mb-3">
              <span>04</span>
              <span>// THE DEVELOPMENT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-3">
              FULL-STACK ENGINEERING & INTEGRATION
            </h2>
            <p className="text-[#9aa1b0] text-sm sm:text-base leading-relaxed">
              {project.development}
            </p>
          </div>

          {/* 5. OUTCOME */}
          <div className="rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[#0066ff]/30 p-6 sm:p-8 backdrop-blur-md bg-gradient-to-br from-[#0e1015]/80 to-[#0066ff]/5">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0066ff] mb-3">
              <span>05</span>
              <span>// THE OUTCOME</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-3">
              MEASURABLE DELIVERY & RESULT
            </h2>
            <p className="text-[#9aa1b0] text-sm sm:text-base leading-relaxed mb-6">
              {project.outcome}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e7686] mb-3">
                KEY DELIVERABLES SHIPPED:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#f4f5f8]">
                    <CheckCircle2 size={14} className="text-[#0066ff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project & Contact Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-[rgba(255,255,255,0.08)] mb-16">
        <Link
          to={`/work/${nextProject.id}`}
          className="group p-6 sm:p-8 rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[rgba(255,255,255,0.08)] hover:border-[#0066ff]/40 transition-all flex flex-col justify-between backdrop-blur-md"
        >
          <div>
            <span className="font-mono text-xs text-[#6e7686] uppercase tracking-wider">
              NEXT CASE STUDY →
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#f4f5f8] group-hover:text-[#0066ff] transition-colors mt-2">
              {nextProject.title}
            </h3>
            <p className="font-mono text-xs text-[#0066ff] mt-1">
              {nextProject.subtitle}
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-1.5 text-xs font-mono text-[#8c94a4] group-hover:text-white transition-colors">
            <span>READ NEXT STUDY</span>
            <ArrowRight size={13} />
          </div>
        </Link>

        <Link
          to="/contact"
          className="p-6 sm:p-8 rounded-[14px] bg-[#0066ff]/10 border border-[#0066ff]/30 hover:border-[#0066ff] transition-all flex flex-col justify-between backdrop-blur-md"
        >
          <div>
            <span className="font-mono text-xs text-[#0066ff] uppercase tracking-wider font-bold">
              // COLLABORATION
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#f4f5f8] mt-2">
              BUILD YOUR OWN SUCCESS STORY
            </h3>
            <p className="text-sm text-[#8c94a4] mt-1">
              Engage REGOX to architect and deliver your company's next flagship digital platform.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-[#0066ff]/20 flex items-center gap-1.5 text-xs font-mono text-[#0066ff] font-bold">
            <span>START A PROJECT</span>
            <ArrowRight size={13} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyPage;
