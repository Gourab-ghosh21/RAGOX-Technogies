import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Layers, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectPreviewVisual } from '../components/ProjectPreviewVisual';

export const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Enterprise SaaS', 'AI Platform & Interface', 'B2B Marketplace & Analytics', 'Regulatory Tech & Cloud'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="container-custom">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"></span>
          // PORTFOLIO ARCHITECTURE
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
          SELECTED WORK & CASE STUDIES
        </h1>
        <p className="text-slate-300/85 text-base sm:text-lg leading-relaxed max-w-2xl">
          Digital systems engineered for clarity, speed, and business impact. Explore our production case studies across enterprise software, developer tools, and intelligent interfaces.
        </p>

        {/* Category Filter Pills: Translucent Glass Capsules */}
        <div className="flex flex-wrap gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border backdrop-blur-md ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]'
                  : 'bg-white/[0.03] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/[0.2] hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: Semi-Transparent Glass Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="group rounded-[22px] glass-card flex flex-col overflow-hidden"
          >
            {/* Project Visual Header */}
            <Link
              to={`/work/${project.id}`}
              className="relative aspect-[16/10] overflow-hidden bg-slate-950/70 border-b border-white/[0.08] block cursor-pointer"
              aria-label={`Open ${project.title} Case Study`}
            >
              <ProjectPreviewVisual projectId={project.id} />
              
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/[0.12] font-mono text-[10px] uppercase tracking-wider text-slate-300">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-sky-500/20 backdrop-blur-md border border-sky-400/35 font-mono text-[10px] uppercase tracking-wider text-sky-300 font-bold">
                  {project.year}
                </span>
              </div>
            </Link>

            {/* Project Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-100 group-hover:text-white transition-colors">
                    <Link to={`/work/${project.id}`} className="hover:text-sky-400 transition-colors">
                      {project.title}
                    </Link>
                  </h2>
                  <Link
                    to={`/work/${project.id}`}
                    className="p-2.5 rounded-full bg-white/[0.05] group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 text-slate-100 transition-all duration-200 border border-white/[0.08]"
                    aria-label={`View ${project.title} Case Study`}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <p className="font-mono text-xs text-sky-400 mb-4 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Case Study Link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  0{idx + 1} // CASE STUDY
                </span>
                <Link
                  to={`/work/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 hover:text-white font-semibold transition-colors"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowRight size={13} />
                </Link>
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
            // NEXT PROJECT
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            HAVE A PROJECT IN MIND?
          </h3>
          <p className="text-slate-300/80 text-sm mt-1 max-w-lg">
            Let's discuss how our technical architecture and design discipline can elevate your product.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 shrink-0"
        >
          <span>INITIATE PROJECT INQUIRY</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default WorkPage;

