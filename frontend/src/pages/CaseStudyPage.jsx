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
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-sky-400 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/25">
            {project.category}
          </span>
          <span className="font-mono text-xs text-slate-400">
            // {project.year} CASE STUDY
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
          {project.title}
        </h1>
        <div className="font-mono text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 font-medium mb-6">
          {project.subtitle}
        </div>
        <p className="text-slate-300/85 text-base sm:text-xl leading-relaxed max-w-3xl">
          {project.overview || project.description}
        </p>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2 pt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Visual Showcase Frame */}
      <div className="mb-16 sm:mb-20 rounded-[22px] overflow-hidden border border-white/[0.1] bg-slate-950/70 aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] relative backdrop-blur-md">
        <ProjectPreviewVisual projectId={project.id} />
      </div>

      {/* 5-Phase Case Study Narrative: Semi-Transparent Glass Cards */}
      <div className="max-w-4xl mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // ARCHITECTURAL NARRATIVE
        </div>

        <div className="space-y-8">
          {/* 1. CHALLENGE */}
          <div className="rounded-[22px] glass-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <span>01</span>
              <span>// THE CHALLENGE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              PROBLEM STATEMENT & COMPLEXITY
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* 2. STRATEGY */}
          <div className="rounded-[22px] glass-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <span>02</span>
              <span>// THE STRATEGY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              SYSTEM ARCHITECTURE & ROADMAP
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed">
              {project.strategy}
            </p>
          </div>

          {/* 3. DESIGN */}
          <div className="rounded-[22px] glass-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <span>03</span>
              <span>// THE DESIGN</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              INTERFACE ERGONOMICS & DESIGN SYSTEM
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed">
              {project.design}
            </p>
          </div>

          {/* 4. DEVELOPMENT */}
          <div className="rounded-[22px] glass-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <span>04</span>
              <span>// THE DEVELOPMENT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              FULL-STACK ENGINEERING & INTEGRATION
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed">
              {project.development}
            </p>
          </div>

          {/* 5. OUTCOME */}
          <div className="rounded-[22px] glass-card-static border border-sky-500/30 p-6 sm:p-8 bg-gradient-to-br from-slate-900/60 via-slate-900/80 to-blue-950/20 shadow-[0_20px_50px_rgba(59,130,246,0.15),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              <span>05</span>
              <span>// THE OUTCOME</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
              MEASURABLE DELIVERY & RESULT
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed mb-6">
              {project.outcome}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                KEY DELIVERABLES SHIPPED:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={14} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project & Contact Navigation: Translucent Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/[0.08] mb-16">
        <Link
          to={`/work/${nextProject.id}`}
          className="group p-6 sm:p-8 rounded-[22px] glass-card flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              NEXT CASE STUDY →
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-sky-400 transition-colors mt-2">
              {nextProject.title}
            </h3>
            <p className="font-mono text-xs text-sky-400 mt-1">
              {nextProject.subtitle}
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
            <span>READ NEXT STUDY</span>
            <ArrowRight size={13} />
          </div>
        </Link>

        <Link
          to="/contact"
          className="p-6 sm:p-8 rounded-[22px] glass-card-static border border-sky-400/30 hover:border-sky-400 transition-all flex flex-col justify-between bg-gradient-to-br from-blue-950/20 to-slate-900/60"
        >
          <div>
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider font-bold">
              // COLLABORATION
            </span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-2">
              BUILD YOUR OWN SUCCESS STORY
            </h3>
            <p className="text-sm text-slate-300/80 mt-1">
              Engage REGOX to architect and deliver your company's next flagship digital platform.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center gap-1.5 text-xs font-mono text-sky-400 font-bold">
            <span>START A PROJECT</span>
            <ArrowRight size={13} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyPage;

