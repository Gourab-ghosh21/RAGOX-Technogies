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
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] mb-3">
          // PORTFOLIO ARCHITECTURE
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-6">
          SELECTED WORK & CASE STUDIES
        </h1>
        <p className="text-[#9aa1b0] text-base sm:text-lg leading-relaxed max-w-2xl">
          Digital systems engineered for clarity, speed, and business impact. Explore our production case studies across enterprise software, developer tools, and intelligent interfaces.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#0066ff] text-white border-[#0066ff] shadow-[0_0_15px_rgba(0,102,255,0.4)]'
                  : 'bg-[rgba(255,255,255,0.04)] text-[#8c94a4] border-[rgba(255,255,255,0.08)] hover:text-[#f4f5f8] hover:border-[rgba(255,255,255,0.2)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="group rounded-[14px] bg-[rgba(14,16,21,0.65)] hover:bg-[rgba(18,22,30,0.85)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,102,255,0.4)] transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            {/* Project Visual Header */}
            <Link
              to={`/work/${project.id}`}
              className="relative aspect-[16/10] overflow-hidden bg-[#0a0d14] border-b border-[rgba(255,255,255,0.06)] block cursor-pointer"
              aria-label={`Open ${project.title} Case Study`}
            >
              <ProjectPreviewVisual projectId={project.id} />
              
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#07080a]/90 backdrop-blur-md border border-[rgba(255,255,255,0.12)] font-mono text-[10px] uppercase tracking-wider text-[#9aa1b0]">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-[4px] bg-[#0066ff]/20 backdrop-blur-md border border-[#0066ff]/30 font-mono text-[10px] uppercase tracking-wider text-[#0066ff] font-bold">
                  {project.year}
                </span>
              </div>
            </Link>

            {/* Project Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] group-hover:text-[#0066ff] transition-colors">
                    <Link to={`/work/${project.id}`} className="hover:text-[#0066ff] transition-colors">
                      {project.title}
                    </Link>
                  </h2>
                  <Link
                    to={`/work/${project.id}`}
                    className="p-2 rounded-full bg-[rgba(255,255,255,0.05)] group-hover:bg-[#0066ff] text-[#f4f5f8] transition-all duration-200"
                    aria-label={`View ${project.title} Case Study`}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <p className="font-mono text-xs text-[#0066ff] mb-4">
                  {project.subtitle}
                </p>

                <p className="text-[#8c94a4] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[rgba(255,255,255,0.04)] text-[#7e8799] border border-[rgba(255,255,255,0.06)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Case Study Link */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                <span className="font-mono text-xs text-[#6e7686]">
                  0{idx + 1} // CASE STUDY
                </span>
                <Link
                  to={`/work/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0066ff] hover:text-white font-semibold transition-colors"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[16px] bg-[rgba(14,16,21,0.7)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-2">
            // NEXT PROJECT
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f4f5f8]">
            HAVE A PROJECT IN MIND?
          </h3>
          <p className="text-[#8c94a4] text-sm mt-1 max-w-lg">
            Let's discuss how our technical architecture and design discipline can elevate your product.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(0,102,255,0.35)] shrink-0"
        >
          <span>INITIATE PROJECT INQUIRY</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default WorkPage;
