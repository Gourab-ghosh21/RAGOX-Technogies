import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Terminal, Zap, Code2, Globe, Layers } from 'lucide-react';
import { technologies } from '../data/technologies';

export const AboutPage = () => {
  const principles = [
    {
      icon: Terminal,
      title: 'ZERO GENERIC TEMPLATES',
      desc: 'Every architecture, design token, and code module is authored bespoke to match precise product needs and performance requirements.',
    },
    {
      icon: Zap,
      title: 'PERFORMANCE-FIRST CODEBASES',
      desc: 'Zero unnecessary bloat. Fast DOM reconciliation, sub-second Core Web Vitals, and lightweight asset bundles engineered for peak responsiveness.',
    },
    {
      icon: ShieldCheck,
      title: 'FACTUAL PRODUCTION RIGOR',
      desc: 'We build resilient systems with structured error handling, strict input sanitization, rate limiting, and defensive API contracts.',
    },
    {
      icon: Layers,
      title: 'SYSTEMIC DESIGN TOKENS',
      desc: 'Interfaces governed by strict mathematical spacing scales, WCAG 2.1 AAA accessible typography contrast, and cohesive brand languages.',
    },
  ];

  return (
    <div className="container-custom">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] mb-3">
          // STUDIO PHILOSOPHY & CAPABILITY
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-6">
          ENGINEERING AT THE HIGHEST STANDARD
        </h1>
        <p className="text-[#9aa1b0] text-base sm:text-lg leading-relaxed max-w-2xl">
          REGOX is an elite technology agency specializing in modern web applications, high-density digital software, and bespoke interface systems. We operate at the intersection of technical architecture and editorial design.
        </p>
      </div>

      {/* Core Principles */}
      <div className="mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-6">
          // ARCHITECTURAL PRINCIPLES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[14px] bg-[rgba(14,16,21,0.65)] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 backdrop-blur-md"
              >
                <div className="p-2.5 rounded-lg bg-[rgba(0,102,255,0.12)] border border-[rgba(0,102,255,0.25)] text-[#0066ff] w-fit mb-4">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-bold uppercase tracking-tight text-[#f4f5f8] mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-[#8c94a4] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technology Convergence */}
      <div className="mb-16 sm:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-4">
          // TECHNICAL CONVERGENCE
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-8">
          OUR CORE PRODUCTION STACK
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-[10px] bg-[rgba(14,16,21,0.6)] border border-[rgba(255,255,255,0.06)] p-4 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <span className="font-mono text-[10px] text-[#0066ff] uppercase tracking-wider block mb-1">
                  {tech.category}
                </span>
                <span className="font-bold text-sm text-[#f4f5f8]">
                  {tech.name}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#6e7686] mt-3 block">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-[16px] bg-[rgba(14,16,21,0.7)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#0066ff] mb-2">
            // COLLABORATION
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#f4f5f8]">
            LET'S BUILD TOGETHER
          </h3>
          <p className="text-[#8c94a4] text-sm mt-1 max-w-lg">
            Whether you require an architectural consultation, a dedicated product sprint, or a full-scale rebuild, our studio is ready to execute.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_25px_rgba(0,102,255,0.35)] shrink-0"
        >
          <span>GET IN TOUCH</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
